import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import likeData from "../data/data.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProductCard = ({ item, userId }) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const loadLikesFromStorage = async () => {
      try {
        const storedLikes = await AsyncStorage.getItem("likeData");
        if (storedLikes) {
          likeData.like = JSON.parse(storedLikes);
          setLikeCount(
            likeData.like.filter((like) => like.idProduct === item.id).length
          );
          setIsLiked(
            likeData.like.some(
              (like) => like.idProduct === item.id && like.idUser === userId
            )
          );
        }
      } catch (error) {
        console.error("Failed to load likes:", error);
      }
    };

    loadLikesFromStorage();
  }, [item.id, userId]);

  const saveLikesToStorage = async (likes) => {
    try {
      await AsyncStorage.setItem("likeData", JSON.stringify(likes));
    } catch (error) {
      console.error("Failed to save likes:", error);
    }
  };

  const handleLike = () => {
    const index = likeData.like.findIndex(
      (like) => like.idProduct === item.id && like.idUser === userId
    );

    let updatedLikes = [...likeData.like];

    if (index === -1) {
      updatedLikes.push({ idProduct: item.id, idUser: userId });
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      updatedLikes.splice(index, 1);
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }

    likeData.like = updatedLikes;
    saveLikesToStorage(updatedLikes);
    console.log("Updated likeData:", likeData.like);
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PRODUCT_DETAIL", { item })}
      style={styles.container}
      key={item.id}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text>{likeCount} Likes</Text>
      </View>
      <TouchableOpacity style={styles.heartContainer} onPress={handleLike}>
        {isLiked ? (
          <AntDesign name="heart" size={20} color={"#E55B5B"} />
        ) : (
          <AntDesign name="hearto" size={20} color={"#E55B5B"} />
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
  },
  content: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    color: "#222222",
    fontWeight: "700",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#C5A880",
    fontWeight: "600",
  },
  heartContainer: {
    height: 34,
    width: 34,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    position: "absolute",
    top: 5,
    right: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default ProductCard;
