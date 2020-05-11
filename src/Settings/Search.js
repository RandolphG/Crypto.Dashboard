import React from "react";
import { SearchBar, SearchInput } from "../styles/Layout";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import _ from "lodash";
import fuzzy from "fuzzy";

/**
 * filter coins based on input
 * @param e
 * @param filteredCoins
 * @param coins
 */
const filterCoins = (e, setFilteredCoins, coins) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coins, setFilteredCoins);
};

/**
 * filter with debounce & fuzzy search
 * @type {((...args: any[]) => any) & Cancelable}
 */
const handleFilter = _.debounce((inputValue, coins, setFilteredCoins) => {
  // Get all coin symbols
  let coinSymbol = Object.keys(coins);
  // Get all coin names
  let coinNames = coinSymbol.map((sym) => coins[sym].CoinName);
  // Combine as list of strings to search
  let searchString = coinSymbol.concat(coinNames);
  // Search results and filter to string
  let searchResults = fuzzy
    .filter(inputValue, searchString, {})
    .map((result) => result.string);
  let filterCoinNames = _.pickBy(coins, (results, symKey) => {
    let coinName = results.CoinName;
    return (
      _.includes(searchResults, symKey) || _.includes(searchResults, coinName)
    );
  });

  console.log("filtered name:", filterCoinNames);
  setFilteredCoins(filterCoinNames);
}, 500);

/**
 *
 * @returns {*}
 * @constructor
 */
const Search = () => {
  const { setFilteredCoins, coins } = useGlobalStateContext(StateContext);
  return (
    <SearchBar>
      <h2>search coins</h2>
      <SearchInput
        onKeyUp={(e) => {
          filterCoins(e, setFilteredCoins, coins);
        }}
      />
    </SearchBar>
  );
};

export default Search;
