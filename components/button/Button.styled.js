import { styled } from "styled-components/native";
import { HSLA, switchVariantForColor } from "../../util/color";
import Typography from "../typography";
import { UNIT } from "../../util/unit";

const ButtonBuilder = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  border: 1px solid;
  border-radius: ${UNIT(1)}px;
  padding: ${UNIT(1)}px;
  align-items: center;
  justify-content: center;
`;

export const ActionButton = styled(ButtonBuilder)`
  background-color: ${({ theme, disabled, variant }) =>
    disabled
      ? HSLA(theme.colors.gray, 0.2)
      : HSLA(switchVariantForColor(variant, theme), 0.2)};
  border-color: ${({ theme, disabled, variant }) =>
    disabled ? theme.colors.gray : switchVariantForColor(variant, theme)};
  border-style: ${({ disabled }) => (disabled ? "dashed" : "solid")};
`;

export const ActionButtonText = styled(Typography.Text)`
  color: ${({ theme, disabled, variant }) =>
    disabled ? theme.colors.gray : switchVariantForColor(variant, theme)};
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs(
  (props) => ({
    color: props.theme.colors.primary,
  })
)``;
