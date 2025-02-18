import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    let carts = await AsyncStorage.getItem("carts");
    carts = carts ? JSON.parse(carts) : [];
    setCarts(carts);
    handleTotalPrice(carts);
  };

  const addToCart = async (item) => {
    const itemExist = carts.findIndex((cart) => cart.id === item.id);
    if (itemExist === -1) {
      const newCartsItem = [...carts, item];
      await AsyncStorage.setItem("carts", JSON.stringify(newCartsItem));
      setCarts(newCartsItem);
    } else {
      setCarts(
        carts.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
      );
    }
  };

  const handleTotalPrice = (carts) => {
    const totalPrice = carts.reduce((amount, item) => amount + item.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleDeleteItem = async (item) => {
    const newItems = carts.filter((cart) => cart.id !== item.id);
    await AsyncStorage.setItem("carts", JSON.stringify(newItems));
    setCarts(newItems);
    handleTotalPrice(newItems);
  };
  const value = {
    carts,
    loadCartItems,
    addToCart,
    totalPrice,
    handleDeleteItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
