import React from "react";
import { SelectableTile, DisabledTile, DeleteTile } from "../styles/Layout";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinHeader } from "./CoinHeader";
import { CoinImage } from "../Shared/CoinImage";

/**
 *
 * @param coinKey
 * @returns {*}
 * @constructor
 */
export const CoinTile = ({ coinKey, topSection }) => {
  const { coins } = useGlobalStateContext(StateContext);
  // coin object
  let coin = coins[coinKey];
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeleteTile;
  }
  return (
    <TileClass>
      <CoinHeader
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
};
