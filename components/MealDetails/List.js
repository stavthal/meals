import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={item}>
        {item}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#c5e0fc",
  },

  itemText: {
    color: "#19758e",
    textAlign: "center",
  },
});
