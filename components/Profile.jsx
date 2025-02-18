import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../context/AuthContext";

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.name}!</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  title: {
    fontSize: 24,
    color: "#D4AF37",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#D4AF37",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: "#fff",
    borderWidth: 3,
  },
});

export default ProfileScreen;
