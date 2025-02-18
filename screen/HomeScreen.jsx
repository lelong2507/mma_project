import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Header from "../components/Header";
import Category from "../components/Category";
import { LinearGradient } from "expo-linear-gradient";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";
const categories = ["Trending now", "All", "New", "Mens", "Womens"];
const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selected, setSelected] = useState("Trending now");
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = (item) => {
    const newProducts = products.map((prop) => {
      if (prop.id === item.id) {
        return { ...prop, isLiked: true };
      }
      return prop;
    });
    setProducts(newProducts);
  };
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
        </View>
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      {/* Category List */}

      {/* Product */}
      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: "150px",
              }}
            />
          </>
        }
        data={products}
        renderItem={({ item }) => {
          return <ProductCard item={item} handleLike={handleLike} />;
        }}
      ></FlatList>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  matchText: {
    fontSize: 28,
    color: "#000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    color: "#C0C0C0",
  },
  iconContainer: {
    marginHorizontal: 20,
  },
});

export default HomeScreen;
