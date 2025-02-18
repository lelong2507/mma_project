import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Category = ({ item, selected, setSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(item);
      }}
    >
      <Text
        style={[
          styles.categoryText,
          selected === item && { color: "#FFFF", backgroundColor: "#E96E6E" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#938F8F",
    backgroundColor: "#DFDCDC",
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    padding: 10,
  },
});

export default Category;
