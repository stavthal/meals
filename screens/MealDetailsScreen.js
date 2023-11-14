import { useContext, useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "./store/redux/favorites"; // importing the actions

// import { FavoritesContext } from "../screens/store/context/favorites-context";

//test
// import { useFavoritesContext } from "./store/hooks/useFavoritesContext";

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  // const { ids, addFavorite, removeFavorite } = useFavoritesContext();

  //implementation of favorite meal ids state from reducer
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); // favoriteMeals is the name of the reducer in store.js file
  const dispatch = useDispatch(); // getting the ability to dispatch actions through this screen and its components

  // getting the correct meal to display
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const capitalizeF = (string) => {
    const firstLetter = string[0].toUpperCase(); // capitalizes the first letter
    const newString = firstLetter + string.slice(1); // removes the first letter from the inserted string and replaces it with the capitalized letter
    return newString;
  };

  const handleIconPress = () => {
    if (mealIsFavorite) {
      // removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          size={24}
          color="white"
          onPress={handleIconPress}
        />
      ),
    });
  }, [navigation, handleIconPress]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image style={styles.img} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.smallDescription}>
          <Text style={styles.smallDescriptionText}>
            {selectedMeal.duration} minutes
          </Text>
          <Text style={styles.smallDescriptionText}>
            {capitalizeF(selectedMeal.complexity)}
          </Text>
          <Text style={styles.smallDescriptionText}>
            {capitalizeF(selectedMeal.affordability)}
          </Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        <List data={selectedMeal.ingredients} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>
        <List data={selectedMeal.steps} />
        {/* Empty view to apply a small margin to the bottom for iOS */}
        {Platform.OS === "ios" && <View style={{ marginBottom: "10%" }}></View>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  smallDescription: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 20,
  },

  smallDescriptionText: {
    color: "#c5e0fc",
    textAlign: "center",
    fontSize: 16,
    padding: 10,
    fontWeight: "300",
    fontStyle: "italic",
  },

  detailText: {
    color: "white",
  },

  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    margin: 4,
    padding: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#c5e0fc",
    borderBottomWidth: 1.2,
    borderRadius: 8,
    marginHorizontal: 60, // makes the bottom border smaller
    marginBottom: 12,
  },
});

export default MealDetailsScreen;
