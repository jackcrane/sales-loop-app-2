import Styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const Spacer = Styled.View`
  height: ${(props) => UNIT(props.height || 1)}px;
  width: ${(props) => UNIT(props.width || 1)}px;
`;
