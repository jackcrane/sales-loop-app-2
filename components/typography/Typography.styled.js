import Styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const H1 = Styled.Text`
  font-size: ${UNIT(4)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  `;

export const H2 = Styled.Text`
  font-size: ${UNIT(3)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
  `;

export const Text = Styled.Text`
  font-size: ${UNIT(2)}px;
  font-family: ${(props) => props.theme.fonts.body};
  `;
