import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useGlobalStateContext } from "./globalContext";
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
  color: darkmagenta;
  ${(props) =>
    props.active &&
    css`
      //background: lightcoral;
      color: yellow;
      text-shadow: 3px 4px 10px aqua;
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
  const [btnName, setName] = useState(value);
  const [dispatch, state] = useGlobalStateContext();

  const cb = () => {
    setName(value);
  };
  const [select, setSelect] = useState(false);
  useEffect(() => {
    // localStorage.setItem("page", JSON.stringify(value));
    // const page = localStorage.getItem("page");
    // setSelect(!selec);
    cb();
  }, [value]);
  return (
    <StyledBtn
      onClick={(e) => dispatch({ type: SET_PAGE, page: value })}
      active={btnName == state}
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
  return (
    <Bar>
      <span>CRYPTO-DASH </span>
      <ControlBtn value={"dashboard"} />
      <ControlBtn value={"settings"} />
    </Bar>
  );
};

export default AppBar;
