import React, { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import {
  Container,
  Header,
  BackButton,
  PercentageText,
  DescriptionText,
  Content,
  Title,
  CardsRow,
} from "./styles";

import { InfoCard } from "../../components/InfoCard";

import { getAllMeals } from "../../storage/meal";
import {
  calculateDietMetrics,
  DietMetrics,
} from "../../utils/calculateDietMetrics";

const initialMetrics: DietMetrics = {
  totalMeals: 0,
  mealsOnDiet: 0,
  mealsOffDiet: 0,
  percentageOnDiet: 0,
  bestSequenceOnDiet: 0,
};

export function Statistics() {
  const theme = useTheme();
  const [metrics, setMetrics] = useState<DietMetrics>(initialMetrics);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchStatistics() {
    setIsLoading(true);
    try {
      const storedMeals = await getAllMeals();
      const calculatedMetrics = calculateDietMetrics(storedMeals);
      setMetrics(calculatedMetrics);
    } catch (error) {
      console.error("Failed to fetch statistics:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  const headerType = metrics.percentageOnDiet >= 50 ? "POSITIVE" : "NEGATIVE";

  if (isLoading) {
    return (
      <Container type={"NEUTRAL"}>
        <Header type={"NEUTRAL"}>
          <BackButton onPress={handleGoBack}>
            <ArrowLeft size={24} color={theme.COLORS.GRAY_2} />
          </BackButton>
          <PercentageText>Carregando...</PercentageText>
        </Header>
      </Container>
    );
  }

  return (
    <Container type={headerType}>
      <Header type={headerType}>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft
            size={24}
            color={
              headerType === "POSITIVE"
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
            }
          />
        </BackButton>
        <PercentageText>{metrics.percentageOnDiet.toFixed(2)}%</PercentageText>
        <DescriptionText>das refeições dentro da dieta</DescriptionText>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <InfoCard
          value={metrics.bestSequenceOnDiet}
          description="melhor sequência de pratos dentro da dieta"
          variant="NEUTRAL"
        />
        <InfoCard
          value={metrics.totalMeals}
          description="refeições registradas"
          variant="NEUTRAL"
        />

        <CardsRow>
          <InfoCard
            value={metrics.mealsOnDiet}
            description="refeições dentro da dieta"
            variant="POSITIVE"
            style={{ flex: 1, marginRight: 6 }}
          />
          <InfoCard
            value={metrics.mealsOffDiet}
            description="refeições fora da dieta"
            variant="NEGATIVE"
            style={{ flex: 1, marginLeft: 6 }}
          />
        </CardsRow>
      </Content>
    </Container>
  );
}
