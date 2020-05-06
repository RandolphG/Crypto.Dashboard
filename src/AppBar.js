import React, { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "./globalContext";
const SET_PAGE = "SET_PAGE";

// BAR STYLED COMPONENT
const Bar = styled.div`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 100px auto 100px;
  font-size: 1rem;
`;

// CONTROLBTN STYLED COMPONENT
const StyledBtn = styled.div`
  font-size: 1rem;
  cursor: pointer;
  color: yellow;
  ${(props) =>
    props.active &&
    css`
      background: lightcoral;
      color: blue;
    `}
`;

/**
 * button component
 * @param name
 * @param active
 * @returns {*}
 * @constructor
 */
function ControlBtn({ value, active }) {
  const [dispatch, page] = useContext(StateContext);
  const setPage = (e) => {
    console.log(`SET_PAGE: ${value}`);
    dispatch({ type: SET_PAGE, page: value });
    localStorage.setItem("page", JSON.stringify(e));
  };

  useEffect(() => {
    console.log(`localStorage value: ${value}`);
    localStorage.setItem("page", JSON.stringify(value));
  }, [page]);
  return (
    <StyledBtn
      onClick={(e) => dispatch({ type: SET_PAGE, page: e.target.value })}
      active={page === value}
    >
      {value}
    </StyledBtn>
  );
}

/*
function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}
*/

// APP BAR
const AppBar = () => {
  const selectionBtns = {
    dashboard: { label: "dashboard" },
    settings: { label: "dashboard" },
  };
  return (
    <Bar>
      <div>CRYPTO-DASH</div>
      {Object.keys(selectionBtns).map((title, index) => (
        <ControlBtn key={title} value={title} {...`${console.log(title)}`} />
      ))}
    </Bar>
  );
};

export default AppBar;
