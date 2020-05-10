import React from "react";
import { CoinHeaderGrid, CoinSymbol, DeleteIcon } from "../styles/Layout";

/**
 * coin header grid
 * @param name
 * @param symbol
 * @returns {*}
 * @constructor
 */
export const CoinHeader = ({ name, symbol, topSection }) => {
  return (
    <CoinHeaderGrid>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGrid>
  );
};
