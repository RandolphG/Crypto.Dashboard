import React from "react";
import { SelectableTile, DisabledTile, DeleteTile } from "../styles/Layout";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinHeader } from "./CoinHeader";
import { CoinImage } from "../Shared/CoinImage";
import _ from "lodash";

/**
 * coin click handler
 * @param topSection
 * @param coinKey
 * @param AddCoin
 * @param removeCoin
 * @returns {function(...[*]=)}
 */
const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

/**
 *
 * @param coinKey
 * @param topSection
 * @returns {*}
 * @constructor
 */
export const CoinTile = ({ coinKey, topSection }) => {
  const { coins, addCoin, removeCoin, favorites } = useGlobalStateContext(
    StateContext
  );
  let coin = coins[coinKey];
  let TileClass = SelectableTile;

  if (topSection) {
    TileClass = DeleteTile;
  } else if (_.includes(favorites, coinKey)) {
    TileClass = DisabledTile;
  }
  return (
    <TileClass
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinHeader
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
};
