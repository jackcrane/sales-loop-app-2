import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Entry,
  Page,
  TouchableOpacity,
  Typography,
} from "../../components";
import { UserFocus } from "phosphor-react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const rootState = navigation.getState();
  return (
    <Page title="Settings">
      <Entry
        icon={<UserFocus />}
        title="Your Account"
        text="Manage your account settings."
        onClick={() => {
          navigation.navigate("Account");
        }}
      />
    </Page>
  );
};
