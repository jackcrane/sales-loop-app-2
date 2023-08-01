import { Text } from "react-native";
import { useTheme } from "styled-components/native";

export const ThemeDebugger = () => {
  const theme = useTheme();
  return <Text>{JSON.stringify(theme)}</Text>;
};
