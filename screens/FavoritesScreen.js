import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { useFavoritesContext } from "./store/hooks/useFavoritesContext";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  // const { ids } = useFavoritesContext();

  // using the useSelector to retrieve the ids from the global state
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id),
  );

  return (
    <View style={styles.rootContainer}>
      {favoriteMeals.length > 0 ? (
        <View style={styles.itemsContainer}>
          <Text style={styles.title}>
            This is the list of your favorite meals!
          </Text>
          <MealsList data={favoriteMeals} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text
            style={[
              styles.title,
              {
                marginHorizontal: 30,
                fontStyle: "italic",
                alignSelf: "center",
              },
            ]}
          >
            You do not have any favorite meals at the moment...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: "5%",
    marginBottom: 10,
    justifyContent: "flex-start",
  },

  itemsContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default FavoritesScreen;
