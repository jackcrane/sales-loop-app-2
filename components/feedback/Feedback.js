import { FeedbackBox, FeedbackText } from "./Feedback.styled";

const Feedback = ({ variant, children }) => {
  return (
    <FeedbackBox variant={variant}>
      <FeedbackText variant={variant}>{children}</FeedbackText>
    </FeedbackBox>
  );
};

export default Feedback;
