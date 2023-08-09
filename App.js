import React, { useState, useEffect, useContext, createContext } from "react";
import { Text, View } from "react-native";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Barcode,
  House,
  List,
  ShareNetwork,
  ShoppingCart,
} from "phosphor-react-native";
import { HomeScreen } from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { THEME } from "./assets/theme";
import "react-native-gesture-handler";
import SettingsNavigator from "./pages/Settings";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import { DMMono_400Regular } from "@expo-google-fonts/dm-mono";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAccount } from "./hooks/useAccount";
import { EventEmitter } from "eventemitter3";
export const EventHandler = new EventEmitter();

function LocalSettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
    DMMono_400Regular,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <SafeAreaProvider>
          <_App />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function _App() {
  const uar = useAccount();
  const { isLoggedIn, user, refetch, loading } = uar;
  useEffect(() => {
    EventHandler.on("AUTH:UPDATE", () => {
      console.log("AUTH:UPDATE");
      refetch();
    });
  }, []);
  useEffect(() => {
    console.log("uar__", uar);
  }, [uar]);

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => {
          console.log("LOGIN REQUEST FIRE");
          refetch();
        }}
      />
    );
  }

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#fff",
          card: "#fff",
          border: "#fff",
          text: "#000",
          primary: "#1982C4",
          notification: "#000",
        },
        dark: false,
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return (
                  <House
                    size={size}
                    color={color}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Scan":
                return (
                  <Barcode
                    size={size}
                    color={color}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Carts":
                return (
                  <ShoppingCart
                    size={size}
                    color={color}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Network":
                return (
                  <ShareNetwork
                    size={size}
                    color={color}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Other":
                return (
                  <List
                    size={size}
                    color={color}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              default:
                return <House size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={LocalSettingsScreen} />
        <Tab.Screen name="Carts" component={LocalSettingsScreen} />
        <Tab.Screen name="Network" component={LocalSettingsScreen} />
        <Tab.Screen name="Other" component={SettingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
