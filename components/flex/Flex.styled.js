import Styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const Row = Styled.View`
  flex-direction: row;
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => UNIT(props.gap || 1)}px;
`;

export const Column = Styled.View`
  flex-direction: column;
  gap: ${(props) => UNIT(props.gap || 1)}px;
`;
