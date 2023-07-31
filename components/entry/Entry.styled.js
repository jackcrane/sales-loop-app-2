import Styled from "styled-components/native";
import { UNIT } from "../../util/unit";

export const Container = Styled.View`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${UNIT(1)}px;
  padding: ${UNIT(1)}px;
`;
