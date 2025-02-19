import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const About = () => {
  return (
    <LinearGradient colors={["#0A472E", "#114D3A"]}>
      <Header />
      <Text style={styles.matchText}>
        "A great watch isn't defined by its price, but by the story it shares
        with you."
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  matchText: {
    fontSize: 15,
    textAlign: "center",
    color: "#C5A880",
    marginTop: 25,
  },
});

export default About;
