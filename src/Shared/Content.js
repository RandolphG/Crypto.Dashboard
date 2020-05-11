import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

export const Content = ({ children }) => {
  const { coins, prices, firstVisit } = useGlobalStateContext(StateContext);
  return <div>{!coins ? <div>Loading...</div> : <div>{children}</div>}</div>;
};
