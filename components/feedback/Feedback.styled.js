import styled from "styled-components/native";
import { UNIT } from "../../util/unit";
import { HSLA, switchVariantForColor } from "../../util/color";
import Typography from "../typography";

export const FeedbackBox = styled.View`
  background-color: ${({ variant, theme }) =>
    HSLA(switchVariantForColor(variant, theme), 0.2)};
  padding: ${UNIT(1)}px;
  border-radius: ${({ theme }) => UNIT(1)}px;
  border: 1px solid
    ${({ variant, theme }) => switchVariantForColor(variant, theme)};
`;

export const FeedbackText = styled(Typography.Text)`
  color: ${({ variant, theme }) => switchVariantForColor(variant, theme)};
`;
