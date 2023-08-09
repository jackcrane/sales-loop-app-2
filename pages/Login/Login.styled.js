import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 20%;
  position: absolute;
  width: 150%;
  transform: rotate(-5deg) translateX(-50px) translateY(-50px);
`;
