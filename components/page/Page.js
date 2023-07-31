import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "../../assets/theme";
import { StyledScrollView } from "./Page.styled";
import Logo from "../logo";
import Spacer from "../spacer";
import { Container } from "../container";

const Page = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <SafeAreaView>
      <Container>
        <Logo width={175} />
        <Spacer height={2} />
      </Container>
      <StyledScrollView>{children}</StyledScrollView>
    </SafeAreaView>
  </ThemeProvider>
);

export default Page;
