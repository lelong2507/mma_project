import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#0A472E", "#114D3A"]} style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.appIcon} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#F9F9F9",
  },
  appIcon: {
    height: 50,
    width: 50,
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
