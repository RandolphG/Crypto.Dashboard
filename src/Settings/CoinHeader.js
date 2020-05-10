import React from "react";
import { CoinHeaderGrid, CoinSymbol } from "../styles/Layout";

/**
 * coin header grid
 * @param name
 * @param symbol
 * @returns {*}
 * @constructor
 */
export const CoinHeader = ({ name, symbol }) => {
  return (
    <CoinHeaderGrid>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGrid>
  );
};
