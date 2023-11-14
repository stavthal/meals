import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetailsScreen", {
      mealId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={handlePress}
        android_ripple={{ color: "#ccc" }}
      >
        <View>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailItem}>{duration} minutes</Text>
          <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability?.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },

  buttonPressed: {
    opacity: 0.65,
  },

  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  imageView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 14,
  },

  detailsView: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
