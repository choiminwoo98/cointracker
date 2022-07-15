import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, whiteTheme } from "../theme";

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 10px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`;
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}
export default function NavBar({ toggleDark, isDark }: IRouterProps) {
  return (
    <Nav>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <Img src="./abc.png" />
      </Link>

      <button onClick={toggleDark}>{isDark ? "lightkMode" : "darkMode"}</button>
    </Nav>
  );
}
