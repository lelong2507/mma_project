import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import Reorder from "./screen/Reorder";
import Cart from "./screen/Cart";
import Account from "./screen/Account";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailProduct from "./screen/DetailProduct";
import { CartContext, CartProvider } from "./context/CartContext";
import { useContext } from "react";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME_STACK" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAIL" component={DetailProduct} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#E96E6E",
          }}
        >
          <Tab.Screen
            name="HOME"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Entypo
                    name={"home"}
                    size={size}
                    focused={focused}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Reorder}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialIcons
                    name={"reorder-horizontal"}
                    size={size}
                    focused={focused}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={Cart}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                const { carts } = useContext(CartContext);

                return (
                  <View style={{ position: "relative" }}>
                    <Entypo
                      name={"shopping-cart"}
                      size={size}
                      focused={focused}
                      color={color}
                    />
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 7,
                        backgroundColor: color,
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: -8,
                        right: -8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#fff",
                          fontWeight: "500",
                        }}
                      >
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Account}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialIcons
                    name={"account"}
                    size={size}
                    focused={focused}
                    color={color}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
