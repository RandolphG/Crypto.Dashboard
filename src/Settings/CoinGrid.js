import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinGridDiv } from "../styles/Layout";
import { CoinTile } from "./CoinTile";

/**
 * returns only the first 100 elements of the array
 * @param coins
 * @returns {string[]}
 */
const displayCoins = (coins, topSection) => {
  return Object.keys(coins).slice(0, topSection ? 5 : 40);
};

/**
 * coin grid
 * @param topSection
 * @returns {*}
 * @constructor
 */
export const CoinGrid = ({ topSection }) => {
  const { coins } = useGlobalStateContext(StateContext);

  return (
    <CoinGridDiv>
      {displayCoins(coins, topSection).map((coinKey) => (
        <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
      ))}
    </CoinGridDiv>
  );
};
