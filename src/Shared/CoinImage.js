import React from "react";

/**
 * coin image
 * @param coin
 * @param style
 * @returns {*}
 * @constructor
 */
export const CoinImage = ({ coin, style }) => {
  return (
    <img
      alt={coin.Symbol}
      style={style || { height: "50px" }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};
