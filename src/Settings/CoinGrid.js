import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinGridDiv } from "../styles/Layout";
import { CoinTile } from "./CoinTile";

/**
 * returns only the first 100 elements of the array
 * @param coins
 * @param topSection
 * @param favorites
 * @param filteredCoins
 * @returns {string[]}
 */
const displayCoins = (coins, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerSectionCoins(coins, filteredCoins);
};

/**
 * set filtered results on lower sections
 * @param coins
 * @param filterCoins
 * @returns {*|string[]}
 */
const getLowerSectionCoins = (coins, filterCoins) => {
  return (
    (filterCoins && Object.keys(filterCoins)) || Object.keys(coins).slice(0, 15)
  );
};

/**
 * coin grid
 * @param topSection
 * @returns {*}
 * @constructor
 */
export const CoinGrid = ({ topSection }) => {
  const { coins, favorites, filteredCoins } = useGlobalStateContext(
    StateContext
  );

  return (
    <CoinGridDiv>
      {displayCoins(coins, topSection, favorites, filteredCoins).map(
        (coinKey) => (
          <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
        )
      )}
    </CoinGridDiv>
  );
};
