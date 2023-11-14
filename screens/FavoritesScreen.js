import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFavoritesContext } from "./store/hooks/useFavoritesContext";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const { ids } = useFavoritesContext();

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  return (
    <View style={styles.container}>
      {favoriteMeals.length > 0 ? (
        <View>
          <Text style={styles.title}>
            This is the list of your favorite meals!
          </Text>
          <MealsList data={favoriteMeals} />
        </View>
      ) : (
        <Text
          style={[
            styles.title,
            { marginTop: 50, marginHorizontal: 30, fontStyle: "italic" },
          ]}
        >
          You do not have any favorite meals at the moment...
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: "5%",
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default FavoritesScreen;
