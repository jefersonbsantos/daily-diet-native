import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  FormContainer,
  Row,
  InputContainer,
} from "./styles";

import { Input } from "../../components/Input";
import { DietSelector } from "../../components/DietSelector";
import { Button } from "../../components/Button";

import { createMeal } from "../../storage/meal";
import { RootStackParamList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppError } from "../../utils/AppError";

type NewMealScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NewMeal"
>;

type NewMealScreenRouteProp = RouteProp<RootStackParamList, "NewMeal">;

export function NewMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation<NewMealScreenNavigationProp>();
  const route = useRoute<NewMealScreenRouteProp>();

  const isEditing = false;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleCreateNewMeal() {
    if (!name.trim() || !description.trim() || !date.trim() || !time.trim()) {
      return Alert.alert(
        "Nova Refeição",
        "Preencha todos os campos: Nome, Descrição, Data e Hora."
      );
    }
    if (isOnDiet === null) {
      return Alert.alert(
        "Nova Refeição",
        "Selecione se a refeição está dentro ou fora da dieta."
      );
    }

    setIsSubmitting(true);
    try {
      const newMeal = {
        name: name.trim(),
        description: description.trim(),
        date: date.trim(),
        time: time.trim(),
        isOnDiet: isOnDiet,
      };

      await createMeal(newMeal);

      navigation.navigate("Feedback", { isOnDiet });
    } catch (error) {
      console.error(error);
      const message =
        error instanceof AppError
          ? error.message
          : "Não foi possível cadastrar a refeição.";
      Alert.alert("Nova Refeição", message);
      setIsSubmitting(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <Header>
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
          <Title>Nova refeição</Title>
        </Header>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <FormContainer>
            <Input
              label="Nome"
              value={name}
              onChangeText={setName}
              returnKeyType="next"
            />

            <Input
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              height={120}
              returnKeyType="next"
            />

            <Row>
              <InputContainer style={{ marginRight: 10 }}>
                <Input
                  label="Data"
                  placeholder="DD/MM/AAAA"
                  value={date}
                  onChangeText={setDate}
                  keyboardType="numeric"
                  returnKeyType="next"
                />
              </InputContainer>
              <InputContainer style={{ marginLeft: 10 }}>
                <Input
                  label="Hora"
                  placeholder="HH:MM"
                  value={time}
                  onChangeText={setTime}
                  keyboardType="numeric"
                  returnKeyType="done"
                />
              </InputContainer>
            </Row>

            <DietSelector
              label="Está dentro da dieta?"
              value={isOnDiet}
              onSelect={setIsOnDiet}
            />

            <Button
              title="Cadastrar refeição"
              onPress={handleCreateNewMeal}
              disabled={isSubmitting}
              style={{ marginTop: "auto" }}
            />
          </FormContainer>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}
