import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { Meal } from "../../types/Meal";
import { getAllMeals } from "./getAllMeals";

export async function updateMeal(updatedMeal: Meal): Promise<void> {
  try {
    const storedMeals = await getAllMeals();

    const mealIndex = storedMeals.findIndex(
      (meal) => meal.id === updatedMeal.id
    );

    if (mealIndex === -1) {
      console.warn(`Meal with id ${updatedMeal.id} not found for update.`);
      return;
    }

    const updatedMeals = [...storedMeals];
    updatedMeals[mealIndex] = updatedMeal;

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error("Error updating meal in storage:", error);
    throw error;
  }
}
