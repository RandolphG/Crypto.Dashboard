import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinGridDiv } from "../styles/Layout";
import { CoinTile } from "./CoinTile";

/**
 * returns only the first 100 elements of the array
 * @param coins
 * @returns {string[]}
 */
const displayCoins = (coins) => {
  return Object.keys(coins).slice(0, 40);
};

export const CoinGrid = () => {
  const { coins } = useGlobalStateContext(StateContext);

  return (
    <CoinGridDiv>
      {displayCoins(coins).map((coinKey) => (
        <CoinTile key={coinKey} coinKey={coinKey} />
      ))}
    </CoinGridDiv>
  );
};
