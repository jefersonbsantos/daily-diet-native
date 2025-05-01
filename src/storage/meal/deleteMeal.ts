import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(mealIdToDelete: string): Promise<void> {
  try {
    const storedMeals = await getAllMeals();

    const updatedMeals = storedMeals.filter(
      (meal) => meal.id !== mealIdToDelete
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error("Error deleting meal from storage:", error);
    throw error;
  }
}
