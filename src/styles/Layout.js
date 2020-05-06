import styled, { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
}
`;

// LAYOUT STYLED COMPONENT
export const Layout = styled.div`
  cursor: crosshair;
  display: grid;
  grid-template-rows: 10% auto;
  text-align: center;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  padding: 32px;
  color: white;
  background: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
