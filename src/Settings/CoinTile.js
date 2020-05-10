import React from "react";
import { SelectableTile } from "../styles/Layout";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CoinHeader } from "./CoinHeader";
import { CoinImage } from "../Shared/CoinImage";

/**
 *
 * @param coinKey
 * @returns {*}
 * @constructor
 */
export const CoinTile = ({ coinKey }) => {
  const { coins } = useGlobalStateContext(StateContext);
  // coin object
  let coin = coins[coinKey];
  const TileClass = SelectableTile;
  return (
    <TileClass>
      <CoinHeader name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
};
