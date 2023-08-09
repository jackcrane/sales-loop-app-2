import Styled from "styled-components/native";

export const StyledScrollView = Styled.ScrollView.attrs({
  contentContainerStyle: {},
})`
  height: ${(props) => (props.invisible ? 100 : 96)}%;
  flex-grow: 1;
`;
