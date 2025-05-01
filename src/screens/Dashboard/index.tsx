import React, { useState, useCallback } from "react";
import { SectionList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container, MealsTitle, SectionHeader } from "./styles";

import { Header } from "../../components/Header";
import { StatisticsCard } from "../../components/StatisticsCard";
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";
import { ListEmpty } from "../../components/ListEmpty";

import { getAllMeals } from "../../storage/meal";
import { Meal } from "../../types/Meal";
import { RootStackParamList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SectionData = {
  title: string;
  data: Meal[];
};

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

export function Dashboard() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [sections, setSections] = useState<SectionData[]>([]);

  const navigation = useNavigation<DashboardScreenNavigationProp>();

  function calculatePercentage(allMeals: Meal[]): number {
    if (allMeals.length === 0) return 0;
    const onDietMeals = allMeals.filter((meal) => meal.isOnDiet).length;
    return (onDietMeals / allMeals.length) * 100;
  }

  function groupMealsByDate(allMeals: Meal[]): SectionData[] {
    const grouped: { [key: string]: Meal[] } = {};

    const sortedMeals = [...allMeals].sort((a, b) => {
      const dateA = new Date(
        `${a.date.split("/").reverse().join("-")}T${a.time}`
      );
      const dateB = new Date(
        `${b.date.split("/").reverse().join("-")}T${b.time}`
      );
      return dateB.getTime() - dateA.getTime();
    });

    sortedMeals.forEach((meal) => {
      const dateKey = meal.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(meal);
    });

    return Object.keys(grouped).map((date) => ({
      title: date,
      data: grouped[date],
    }));
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals();
      setMeals(data);
      setPercentage(calculatePercentage(data));
      setSections(groupMealsByDate(data));
    } catch (error) {
      console.error("Failed to fetch meals:", error);
    }
  }

  function handleGoToStatistics() {
    navigation.navigate("Statistics");
  }

  function handleGoToNewMeal() {
    navigation.navigate("NewMeal");
  }

  function handleGoToMealDetails(mealId: string) {
    navigation.navigate("MealDetails", { mealId });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const cardType = percentage >= 50 ? "POSITIVE" : "NEGATIVE";

  return (
    <Container>
      <Header />

      <StatisticsCard
        percentage={percentage}
        type={meals.length === 0 ? "NEUTRAL" : cardType}
        onPress={handleGoToStatistics}
        disabled={meals.length === 0}
      />

      <MealsTitle>Refeições</MealsTitle>

      <Button
        title="Nova refeição"
        icon="add"
        onPress={handleGoToNewMeal}
        style={{ marginBottom: 32 }}
      />

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            time={item.time}
            name={item.name}
            isOnDiet={item.isOnDiet}
            onPress={() => handleGoToMealDetails(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title.replace(/\//g, ".")}</SectionHeader>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma refeição cadastrada ainda. Que tal adicionar uma agora?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          sections.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
        }
      />
    </Container>
  );
}
