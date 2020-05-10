import React, { createContext, useReducer, useContext, useEffect } from "react";
import { GlobalStyle } from "./styles/Layout";
import AppBar from "./AppBar";
import Settings from "./Settings";
import { Content } from "./Shared/Content";

const cc = require("cryptocompare");

// INITIAL STATE
const initialState = {
  page: "dashboard",
  firstVisit: false,
  coins: [],
};

// ACTIONS
const actions = {
  SET_PAGE: "SET_PAGE",
  SAVE_SETTINGS: "SAVE_SETTINGS",
  CONFIRM_FAVORITES: "CONFIRM_FAVORITES",
  FIRST_VISIT: "FIRST_VISIT",
  SET_COINS_LIST: "SET_COINS_LIST",
  DISPLAY_COINS: "DISPLAY_COINS",
};

/**
 *
 * @returns {Promise<*>}
 */
const fetchCoins = async () => {
  console.log("FUNC fetchCoins()");
  try {
    const coins = (await cc.coinList()).Data;
    return coins;
  } catch (e) {
    if (e) {
      console.log(e);
    }
  }
};

/**
 *
 * @returns {{page: string}}
 */
const saveSettings = () => {
  console.log("FUNC saveSettings()");
  let data = JSON.parse(localStorage.getItem("cryptodash"));
  if (!data) {
    return { page: "settings", firstVisit: true };
  }
  return {};
};

/**
 * confirm address
 */
const confirmFavorites = () => {
  console.log("FUNC confirmFavorites()");
  localStorage.setItem("cryptodash", JSON.stringify("test"));
};

// CONTEXT
export const StateContext = createContext();

/**
 * global reducer
 * @param state
 * @param action
 * @returns {{value: (string|number)}}
 * @constructor
 */
const reducer = (state, action) => {
  console.log(
    `--> ACTION TYPE : ${action.type} | STATE : `,
    action.payload,
    `<--`
  );
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case actions.SAVE_SETTINGS:
      return {
        ...state,
        saveSettings: saveSettings(),
      };
    case actions.FIRST_VISIT:
      return {
        ...state,
        firstVisit: true,
      };
    case actions.CONFIRM_FAVORITES:
      return {
        ...state,
        confirmFavorites: confirmFavorites(),
      };
    case actions.SET_COINS_LIST:
      return {
        ...state,
        coins: action.coins,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

/**
 * global context fir entire app
 * @returns {*}
 * @constructor
 */
export default function GlobalContext() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <AppBar />
      <Content>
        <Settings />
      </Content>
    </GlobalProvider>
  );
}

/**
 * global provider
 * @param children
 * @returns {*}
 * @constructor
 */
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    firstVisit: state.firstVisit,
    page: state.page,
    coins: state.coins,
    setPage: async (page) => {
      dispatch({ type: actions.SET_PAGE, page });
    },
    saveSettings: () => {
      dispatch({ type: actions.SAVE_SETTINGS });
    },
    confirmFavorites: (visit) => {
      console.log(`first visit: `, visit);
      dispatch({ type: actions.CONFIRM_FAVORITES });
      dispatch({ type: actions.FIRST_VISIT });
      dispatch({ type: actions.SET_PAGE, page: "dashboard" });
    },
  };

  useEffect(() => {
    console.log(` GLOBAL PROVIDER MOUNTED`);
    fetchCoins().then((coins) => {
      dispatch({ type: actions.SET_COINS_LIST, coins: coins });
    });
  }, []);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

// GLOBAL HOOKS
export const useGlobalStateContext = () => useContext(StateContext);
