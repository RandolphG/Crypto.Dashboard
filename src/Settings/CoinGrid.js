import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinGridDiv, SelectableTile } from "../styles/Layout";

export const CoinGrid = () => {
  const { coins } = useGlobalStateContext(StateContext);
  return (
    <CoinGridDiv>
      {Object.keys(coins).map((coinKey) => (
        <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
      ))}
    </CoinGridDiv>
  );
};
