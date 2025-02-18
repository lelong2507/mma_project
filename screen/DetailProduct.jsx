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

const sizes = ["37", "40", "42", "44"];
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
    <LinearGradient colors={["#FFFFFF", "#F5F5F5"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <Image source={{ uri: product.image }} style={styles.coverImg} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={[styles.title, styles.price]}>${product.price}</Text>
        </View>
        <Text style={[styles.subtitle, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeOption,
                selectedSize === size && styles.selectedSizeOption,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeTextOption,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.subtitle, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorOption,
                selectedColor === color && styles.selectedColorOption,
              ]}
              onPress={() => setSelectedColor(color)}
            >
              <View style={[styles.colorPreview, { backgroundColor: color }]} />
            </TouchableOpacity>
          ))}
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
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    padding: 10,
  },
  coverImg: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    marginVertical: 15,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C2C2C",
    fontFamily: "serif",
  },
  price: {
    fontSize: 24,
    color: "#B11D1D",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
    marginVertical: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sizeOption: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSizeOption: {
    borderColor: "#B11D1D",
    backgroundColor: "#FFF5F5",
  },
  sizeTextOption: {
    fontSize: 16,
    color: "#666",
  },
  selectedSizeText: {
    color: "#B11D1D",
  },
  colorText: {
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedColorOption: {
    borderColor: "#B11D1D",
  },
  colorPreview: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#B11D1D",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default DetailProduct;
