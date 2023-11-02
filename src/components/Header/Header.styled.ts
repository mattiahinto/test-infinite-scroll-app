import styled from "styled-components";
import { rem } from "../../utils/Theme";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: ${rem(24)};
  text-align: center;
  border-bottom: ${rem(1)} solid black;
  background-color: white;
`;

export const StyledHeaderText = styled.span`
  font-size: ${rem(24)};
`;
