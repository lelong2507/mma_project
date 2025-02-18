import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";

const sizes = ["S", "M", "L", "XL"];
const colors = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];
const DetailProduct = () => {
  const route = useRoute();
  const product = route.params?.item;
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");
  const handleAddToCart = () => {
    const updatedProduct = {
      ...product,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(updatedProduct);
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <Image source={{ uri: product.image }} style={styles.coverImg} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={[styles.title, styles.price]}>${product.price}</Text>
        </View>
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={styles.containerSizeValue}
              onPress={() => {
                setSelectedSize(size);
              }}
            >
              <Text
                style={[
                  styles.sizeValue,
                  selectedSize == size && { color: "#E55B5B" },
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.colorBorder,
                  { borderColor: selectedColor === color && "#E55B5B" },
                ]}
                onPress={() => {
                  setSelectedColor(color);
                }}
                key={index}
              >
                <View
                  key={index}
                  style={[
                    styles.containerColorValue,
                    { backgroundColor: color },
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  headerContainer: {
    padding: 10,
  },
  coverImg: {
    width: "100%",
    height: 550,
    padding: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#44444",
    fontWeight: "500",
  },
  price: {
    color: "#4D4C4C",
  },
  sizeText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  containerSizeValue: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#938F8F",
    backgroundColor: "",
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  containerColorValue: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  colorBorder: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    width: 36,
    height: 36,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
  },
  button: {
    backgroundColor: "#E96E6E",
    padding: 10,
    margin: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});

export default DetailProduct;
