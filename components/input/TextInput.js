import { useTheme } from "styled-components/native";
import Typography from "../typography";
import { Input, InputContainer } from "./Input.styled";

export const TextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  valid,
  label,
  ...props
}) => {
  const theme = useTheme();
  return (
    <InputContainer>
      <Typography.Label>{label}</Typography.Label>
      <Input
        placeholder={placeholder}
        placeholderTextColor={theme.colors.white}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        valid={valid}
        {...props}
      />
    </InputContainer>
  );
};
