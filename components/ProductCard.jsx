import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const ProductCard = ({ item, handleLike }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PRODUCT_DETAIL", { item });
      }}
      style={styles.container}
      key={item.id}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => {
          handleLike(item);
        }}
      >
        {!item?.isLiked ? (
          <AntDesign name="hearto" size={20} color={"#E55B5B"} />
        ) : (
          <AntDesign name="heart" size={20} color={"#E55B5B"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    marginVertical: 10,
    marginRight: 10,
  },
  content: {
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#9C9C9C",
    fontWeight: "600",
  },
  heartContainer: {
    height: 34,
    width: 34,
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    top: 15,
    right: 10,
  },
});

export default ProductCard;
