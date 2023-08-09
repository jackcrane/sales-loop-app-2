import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Entry,
  Flex,
  Page,
  TouchableOpacity,
  Typography,
} from "../../components";
import { Info, UserFocus } from "phosphor-react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const rootState = navigation.getState();
  return (
    <Page title="Settings">
      <Flex.Column>
        <Entry
          icon={<UserFocus />}
          title="Your Account"
          text="Manage your account settings."
          onClick={() => {
            navigation.navigate("Account");
          }}
        />
        <Entry
          icon={<Info />}
          title="About SalesLoop"
          text="Learn more about SalesLoop."
          onClick={() => {
            navigation.navigate("About");
          }}
        />
      </Flex.Column>
    </Page>
  );
};
