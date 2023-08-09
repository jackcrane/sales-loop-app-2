import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ActionButton,
  Feedback,
  Flex,
  Logo,
  Page,
  Spacer,
  TextInput,
  Typography,
} from "../../components";
import { LOGOVARIANTS } from "../../components/logo/Logo";
import { Background } from "./Login.styled";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../assets/theme";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { useEmailValid } from "../../hooks/useEmailValid";
import { usePasswordValid } from "../../hooks/usePasswordValid";
import { useLoginRequest } from "../../hooks/useLoginRequest";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const { isValid: emailIsValid, absoluteValid: emailIsAbsoluteValid } =
    useEmailValid(email);
  const [password, setPassword] = useState("");
  const { isValid: passwordIsValid, absoluteValid: passwordIsAbsoluteValid } =
    usePasswordValid(password);
  const ulr = useLoginRequest(onLogin);
  const { mutate, isLoading, data, error, on } = ulr;

  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaProvider>
        <Background />
        <Page
          overscroll={false}
          variant={LOGOVARIANTS.WHITE}
          statusBar={"light"}
        >
          <Spacer height={10} />
          <Flex.Column>
            <TextInput
              autoCompleteType="email"
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
              inputMode="email"
              textContentType="emailAddress"
              placeholder="Your work email address"
              label="Email"
              valid={emailIsValid}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Your password"
              label="Password"
              valid={passwordIsValid}
              autoComplete="current-password"
              secureTextEntry={true}
              textContentType="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <ActionButton
              onPress={() => {
                mutate({ email, password });
              }}
              disabled={!(emailIsAbsoluteValid && passwordIsAbsoluteValid)}
              loading={isLoading}
            >
              Log in
            </ActionButton>
            {error && <Feedback variant="danger">{error}</Feedback>}
            <Spacer height={1} />
            <Typography.Text>
              Don't have an account? Ask a manager or IT professional for
              access.
            </Typography.Text>
            <Typography.Text>
              Are you with a business looking to improve your supply chain and
              stock management logistics?{" "}
              <Typography.Link onPress={() => {}}>
                Learn more about SalesLoop
              </Typography.Link>
            </Typography.Text>
          </Flex.Column>
        </Page>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
