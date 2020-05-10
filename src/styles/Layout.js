import styled, { css, createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  //cursor: none;
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

// LAYOUT DIV
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

// BAR DIV
export const Bar = styled.div`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 190px auto 100px 100px;
  font-size: 1rem;
`;

// LOGO DIV
export const LOGO = styled.div`
  margin-left: 16px;
  font-size: 2rem;
`;

// CONTROLBTN DIV
export const StyledBtn = styled.div`
  font-size: 1rem;
  cursor: pointer;
  color: white;
  ${(props) =>
    props.active &&
    css`
      color: yellow;
      text-shadow: 3px 4px 10px aqua;
    `}
  &:hover {
    color: deeppink;
  }
`;
// CONFIRM BTN
export const ConfirmBtn = styled.div`
  margin: 20px;
  color: green;
`;

// CENTER DIV
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

// COIN GRID DIV
export const CoinGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
