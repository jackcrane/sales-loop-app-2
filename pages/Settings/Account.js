import { useTheme } from "styled-components/native";
import {
  ActionButton,
  Container,
  Entry,
  Flex,
  Page,
  Typography,
} from "../../components";
import { EventHandler } from "../../App";
import { useAccount } from "../../hooks/useAccount";

export const Account = () => {
  // const theme = useTheme();
  const { logout, user } = useAccount();
  return (
    <Page invisible>
      <Flex.Column>
        <Typography.Text selectable>{JSON.stringify(user)}</Typography.Text>
        <Entry text={user.user.email} />
        <ActionButton
          onPress={() => {
            console.log("Logging out from button press");
            logout();
            EventHandler.emit("AUTH:UPDATE");
          }}
          variant="danger"
        >
          Logout
        </ActionButton>
      </Flex.Column>
    </Page>
  );
};
