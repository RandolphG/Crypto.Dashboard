import React from "react";
import { StateContext, useGlobalStateContext } from "./GlobalContext";
import { Bar, StyledBtn } from "./styles/Layout";
import { BitLogo } from "./Logo";

/**
 * button component
 * @param name
 * @param active
 * @returns {*}
 * @constructor
 */
function ControlBtn({ name, active }) {
  const { page, setPage } = useGlobalStateContext(StateContext);

  return (
    <StyledBtn
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      active={page === name}
      onClick={() => setPage(name)}
    >
      {name}
    </StyledBtn>
  );
}

const AppBar = () => {
  return (
    <Bar>
      <BitLogo />
      <div />
      <ControlBtn name={"dashboard"} />
      <ControlBtn name={"settings"} />
    </Bar>
  );
};

export default AppBar;
