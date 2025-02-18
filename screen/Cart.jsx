import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import CartCard from "../components/CardCart";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { carts, totalPrice, handleDeleteItem } = useContext(CartContext);
  return (
    <LinearGradient colors={["#ECE9E6", "#FFFFFF"]} style={styles.container}>
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({ item }) => (
          <CartCard item={item} deleteFromCart={handleDeleteItem} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>${totalPrice}</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shipping:</Text>
                <Text style={styles.priceText}>$0.0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>
                  ${totalPrice}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#5A5A5A",
    fontWeight: "600",
  },
  priceText: {
    fontSize: 18,
    color: "#3E3E3E",
    fontWeight: "700",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#DADADA",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#2B2B2B",
    fontWeight: "800",
  },
  button: {
    backgroundColor: "#3A3D5C",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 1.1,
  },
});
export default Cart;
