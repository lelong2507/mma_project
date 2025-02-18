import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields!");
    } else {
      const success = login(email, password);
      if (success) {
        Alert.alert("Success", "Logged in successfully!");
      } else {
        Alert.alert("Error", "Invalid email or password!");
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={["#0D0D0D", "#1A1A1A", "#000000"]}
          style={styles.container}
        >
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.brandName}>Rolex</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#AAAAAA"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            © 2025 Rolex. All rights reserved.
          </Text>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  brandName: {
    fontSize: 28,
    color: "#D4AF37",
    fontWeight: "bold",
    marginTop: 10,
    letterSpacing: 2,
  },
  inputContainer: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 10,
    color: "#FFFFFF",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#D4AF37",
  },
  button: {
    backgroundColor: "#D4AF37",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#AAAAAA",
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
  },
});

export default LoginScreen;
