import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

export const Content = ({ children }) => {
  const { coins } = useGlobalStateContext(StateContext);
  console.log(`CONTEXT COINS: `, coins);
  return (
    <div>
      {!coins ? <div>Loading...</div> : <div>There are coins{children}</div>}
    </div>
  );
};
