import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./SettingsHomeScreen";
import { Account } from "./Account";
import { THEME } from "../../assets/theme";
import { About } from "./About";

const Stack = createStackNavigator();
export default function SettingsScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontFamily: THEME.fonts.heading,
        },
        headerBackTitleStyle: {
          fontFamily: THEME.fonts.heading,
        },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
