import React, { useEffect } from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

export const Welcome = () => {
  const { firstVisit } = useGlobalStateContext(StateContext);

  console.log("first visit is: ", firstVisit);
  useEffect(() => {}, [firstVisit]);
  return <div>{!firstVisit ? <div>WELCOME</div> : null}</div>;
};
