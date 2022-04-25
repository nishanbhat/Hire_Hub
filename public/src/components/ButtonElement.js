import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #423edd;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#010606")};
    color: ${({ primary }) => (primary ? "#000" : "#423edd")};
    transform: all 0.2s ease-in-out;
  }
`;
