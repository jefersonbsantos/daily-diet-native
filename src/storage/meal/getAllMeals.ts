import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { Meal } from "../../types/Meal";

export async function getAllMeals(): Promise<Meal[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meal[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    console.error("Error fetching meals from storage:", error);
    throw error;
  }
}
