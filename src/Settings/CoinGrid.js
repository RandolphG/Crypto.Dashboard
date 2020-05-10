import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinGridDiv } from "../styles/Layout";

export const CoinGrid = () => {
  const { coins } = useGlobalStateContext(StateContext);
  return (
    <CoinGridDiv>
      {Object.keys(coins).map((coinKey) => (
        <div key={coinKey}>{coinKey}</div>
      ))}
    </CoinGridDiv>
  );
};
