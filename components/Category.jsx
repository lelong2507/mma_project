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
          selected === item && {
            color: "#FFFFFF",
            backgroundColor: "#C5A880",
            borderColor: "#FFFFFF",
            borderWidth: 1,
          },
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
    color: "#A0A0A0",
    backgroundColor: "#F2F2F2",
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#DFDFDF",
  },
});

export default Category;
