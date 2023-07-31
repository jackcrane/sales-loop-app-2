import * as React from "react";
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaProvider>
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
            <Tab.Screen name="Scan" component={SettingsScreen} />
            <Tab.Screen name="Carts" component={SettingsScreen} />
            <Tab.Screen name="Network" component={SettingsScreen} />
            <Tab.Screen name="Other" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
