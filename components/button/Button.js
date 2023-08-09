import {
  ActionButton,
  ActionButtonText,
  StyledActivityIndicator,
} from "./Button.styled";

export const Button = (props) => (
  <ActionButton {...{ ...props, children: null }}>
    {props.loading ? (
      <StyledActivityIndicator />
    ) : (
      <ActionButtonText variant={props.variant} disabled={props.disabled}>
        {props.children}
      </ActionButtonText>
    )}
  </ActionButton>
);
