import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { MEAL_COLLECTION } from "../storageConfig";
import { Meal } from "../../types/Meal";
import { getAllMeals } from "./getAllMeals";

type NewMealData = Omit<Meal, "id">;

export async function createMeal(newMealData: NewMealData): Promise<void> {
  try {
    const storedMeals = await getAllMeals();

    const mealWithId: Meal = {
      ...newMealData,
      id: uuidv4(),
    };

    const updatedMeals = [...storedMeals, mealWithId];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error("Error creating meal in storage:", error);
    throw error;
  }
}
