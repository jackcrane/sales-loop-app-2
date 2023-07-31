import { View } from "react-native";
import { Typography, TouchableOpacity } from "..";
import Flex from "../flex";
import { Container } from "./Entry.styled";

export const Entry = ({ icon: Icon, title, text, onClick }) => {
  const InnerIcon = () => Icon;
  const IsTouchableContainer = (props) =>
    onClick ? <TouchableOpacity {...props} /> : <View {...props} />;

  return (
    <IsTouchableContainer onPress={onClick}>
      <Container>
        <Flex.Row align="flex-start">
          {Icon && <InnerIcon />}
          <Flex.Column>
            <Typography.H2>{title}</Typography.H2>
            <Typography.Text>{text}</Typography.Text>
          </Flex.Column>
        </Flex.Row>
      </Container>
    </IsTouchableContainer>
  );
};
