import { View } from "react-native";
import { Typography, TouchableOpacity } from "..";
import Flex from "../flex";
import { Container } from "./Entry.styled";
import { CaretRight } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export const Entry = ({ icon: Icon, title, text, onClick }) => {
  const InnerIcon = (props) => Icon;
  const IsTouchableContainer = (props) =>
    onClick ? <TouchableOpacity {...props} /> : <View {...props} />;

  const theme = useTheme();

  return (
    <IsTouchableContainer onPress={onClick}>
      <Container>
        <Flex.Row align="flex-start">
          {Icon && <InnerIcon style={{ marginTop: 10 }} />}
          <Flex.Column style={{ flex: 1 }}>
            {title && (
              <Flex.Row justify="space-between">
                <Typography.H2>{title}</Typography.H2>
                {onClick && <CaretRight color={theme.colors.border} />}
              </Flex.Row>
            )}
            <Typography.Text>{text}</Typography.Text>
          </Flex.Column>
        </Flex.Row>
      </Container>
    </IsTouchableContainer>
  );
};
