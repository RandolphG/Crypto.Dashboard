import React from "react";
import { StateContext, useGlobalStateContext } from "./GlobalContext";
import { Bar, LOGO, StyledBtn } from "./styles/Layout";

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
    <StyledBtn active={page === name} onClick={() => setPage(name)}>
      {name}
    </StyledBtn>
  );
}

const AppBar = () => {
  return (
    <Bar>
      <LOGO>
        <p>
          <span>CRYPTO-DASH</span>
        </p>
      </LOGO>
      <ControlBtn name={"dashboard"} />
      <ControlBtn name={"settings"} />
    </Bar>
  );
};

export default AppBar;
