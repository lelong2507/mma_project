import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.appIconContainer}
        onPress={() => {
          navigation.navigate("HOME");
        }}
      >
        {isCart ? (
          <Ionicons
            name="chevron-back"
            color={"#E96E6E"}
            backgroundColor={"#FFFFFF"}
            size={28}
          />
        ) : (
          <Image
            source={require("../assets/apps.png")}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.cartText}>My Cart</Text>}
      <Image source={require("../assets/Ellipse2.png")} style={styles.dp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#F9F9F9",
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  appIconContainer: {
    backgroundColor: "#FFFFFF",
    height: 44,
    width: 44,
    borderRadius: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginBottom: 10,
  },
  cartText: {
    fontSize: 28,
    color: "#000",
  },
});

export default Header;
