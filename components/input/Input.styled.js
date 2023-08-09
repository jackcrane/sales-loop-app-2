import styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const InputContainer = styled.View``;
export const Input = styled.TextInput`
  font-size: ${UNIT(2)}px;
  font-family: ${(props) => props.theme.fonts.body};
  border: 1px ${(props) => (props.valid ? "solid" : "dashed")}
    ${({ theme, ...props }) =>
      props.valid ? theme.colors.border : theme.colors.danger};
  padding: ${UNIT(1)}px;
  color: ${(props) => (props.valid ? "black" : props.theme.colors.danger)};
  border-radius: ${UNIT(1)}px;
  background-color: white;
`;
