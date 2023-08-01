import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./SettingsHomeScreen";
import { Account } from "./Account";

const Stack = createStackNavigator();
export default function SettingsScreen(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={HomeScreen} />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
