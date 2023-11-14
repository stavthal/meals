import { View, Text, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {
  const { categoryId, categoryTitle } = route.params;

  // useEffect for the first render to set the page's title
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryTitle,
    });
  }, []);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; //checks if the meal is matching one from the data
  });

  return <MealsList data={displayedMeals} />;
}

export default MealsOverviewScreen;
