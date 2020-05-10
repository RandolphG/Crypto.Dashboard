import styled, { css, createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import {
  fontSize1,
  greenBoxShadow,
  color3,
  backgroundColor2,
  fontSize2,
  subtleBoxShadow,
  lightBlueBackground,
  redBoxShadow,
} from "../Shared/Styles";

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
  color: ${color3} ${fontSize1};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

// CENTER DIV
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

// COIN GRID DIV
export const CoinGridDiv = styled.div`
  margin: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 14px;
`;

// TILE DIV
export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding:10px;
`;

// SELECTABLE TILE DIV
export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

// COIN HEADER GRID DIV
export const CoinHeaderGrid = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

// COIN SYMBOL
export const CoinSymbol = styled.div`
  justify-self: right;
`;

// DELETE TILE
export const DeleteTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

// DISABLED TILE
export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;

// DELETE ICON
export const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeleteTile}:hover & {
    display: block;
    color: red;
  }
`;

// SEARCH DIV
export const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

// SEARCH INPUT
export const SearchInput = styled.input`
  border: 1px solid;
  height: 25px;
  ${backgroundColor2}
  ${fontSize2}
  color:#1163c9;
  place-self: center left;
`;
