import { useTheme } from "styled-components/native";
import { Container, Entry, Page, Typography } from "../../components";

export const Account = () => {
  // const theme = useTheme();
  return (
    <Page invisible>
      <Typography.Text>Profile</Typography.Text>
      <Entry />
      {/* <Typography.Text>{JSON.stringify(theme)}</Typography.Text> */}
    </Page>
  );
};
