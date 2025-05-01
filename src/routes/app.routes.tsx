import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Dashboard } from "../screens/Dashboard";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import { MealDetails } from "../screens/MealDetails";
import { Feedback } from "../screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamList = {
  Dashboard: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  MealDetails: { mealId: string };
  Feedback: { isOnDiet: boolean };
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="MealDetails" component={MealDetails} />
      <Screen name="Feedback" component={Feedback} />
    </Navigator>
  );
}
