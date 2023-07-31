import Styled from "styled-components/native";

export const Image = Styled.Image`
  height: ${(props) => (props.width / 200) * 46}px;
  width: ${(props) => props.width}px;
  resize-mode: contain;
`;

Image.defaultProps = {
  width: 200,
};
