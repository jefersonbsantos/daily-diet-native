import { Meal } from "../types/Meal";

export type DietMetrics = {
  totalMeals: number;
  mealsOnDiet: number;
  mealsOffDiet: number;
  percentageOnDiet: number;
  bestSequenceOnDiet: number;
};

export function calculateDietMetrics(meals: Meal[]): DietMetrics {
  if (!meals || meals.length === 0) {
    return {
      totalMeals: 0,
      mealsOnDiet: 0,
      mealsOffDiet: 0,
      percentageOnDiet: 0,
      bestSequenceOnDiet: 0,
    };
  }

  const sortedMeals = [...meals].sort((a, b) => {
    const dateA = new Date(
      `${a.date.split("/").reverse().join("-")}T${a.time}`
    );
    const dateB = new Date(
      `${b.date.split("/").reverse().join("-")}T${b.time}`
    );
    return dateA.getTime() - dateB.getTime();
  });

  let totalMeals = sortedMeals.length;
  let mealsOnDiet = 0;
  let mealsOffDiet = 0;
  let currentSequence = 0;
  let bestSequence = 0;

  sortedMeals.forEach((meal) => {
    if (meal.isOnDiet) {
      mealsOnDiet++;
      currentSequence++;
    } else {
      mealsOffDiet++;
      bestSequence = Math.max(bestSequence, currentSequence);
      currentSequence = 0;
    }
  });

  bestSequence = Math.max(bestSequence, currentSequence);

  const percentageOnDiet =
    totalMeals === 0 ? 0 : (mealsOnDiet / totalMeals) * 100;

  return {
    totalMeals,
    mealsOnDiet,
    mealsOffDiet,
    percentageOnDiet,
    bestSequenceOnDiet: bestSequence,
  };
}
