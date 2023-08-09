import Styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const Row = Styled.View`
  flex-direction: row;
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => UNIT(props.gap || 1)}px;
  justify-content: ${(props) => props.justify || null};
  /* flex:1; */
`;

export const Column = Styled.View`
  flex-direction: column;
  gap: ${(props) => UNIT(props.gap || 1)}px;
  justify-content: ${(props) => props.justify || null};
`;
