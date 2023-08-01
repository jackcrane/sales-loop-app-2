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

function LocalSettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
            <Tab.Screen name="Scan" component={LocalSettingsScreen} />
            <Tab.Screen name="Carts" component={LocalSettingsScreen} />
            <Tab.Screen name="Network" component={LocalSettingsScreen} />
            <Tab.Screen name="Other" component={SettingsNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
