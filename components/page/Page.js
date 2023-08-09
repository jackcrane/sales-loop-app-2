import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "../../assets/theme";
import { StyledScrollView } from "./Page.styled";
import Logo from "../logo";
import Spacer from "../spacer";
import { Container } from "../container";
import { Row } from "../flex/Flex.styled";
import Typography from "../typography";
import { ThemeDebugger } from "../debuggers";
import { LOGOVARIANTS } from "../logo/Logo";
import { StatusBar } from "expo-status-bar";

const Page = ({
  children,
  title,
  invisible = false,
  variant,
  statusBar,
  overscroll = true,
}) => (
  <ThemeProvider theme={THEME}>
    <SafeAreaView edges={invisible ? [] : ["top", "bottom"]}>
      <StatusBar style={statusBar || "dark"} />
      {!invisible && (
        <Container>
          <Row justify="space-between">
            <Logo variant={variant} width={175} />
            <Typography.H2>{title}</Typography.H2>
          </Row>
          <Spacer height={2} />
        </Container>
      )}
      <StyledScrollView bounces={overscroll} invisible={invisible}>
        <Container>{children}</Container>
      </StyledScrollView>
    </SafeAreaView>
  </ThemeProvider>
);

export default Page;
