import React, { createContext, useReducer, useContext } from "react";
import { GlobalStyle } from "./styles/Layout";
import AppBar from "./AppBar";
import Settings from "./Settings";

// INITIAL STATE
const initialState = {
  page: "dashboard",
  firstVisit: false,
};

// ACTIONS
const actions = {
  SET_PAGE: "SET_PAGE",
  SAVE_SETTINGS: "SAVE_SETTINGS",
  CONFIRM_FAVORITES: "CONFIRM_FAVORITES",
  FIRST_VISIT: "FIRST_VISIT",
};

/**
 *
 * @returns {{page: string}}
 */
function SaveSettings() {
  console.log("SAVING SETTINGS");
  const { page, setPage } = useGlobalStateContext(StateContext);

  let data = JSON.parse(localStorage.getItem("cryptodash"));
  if (!data) {
    return { page: "settings", firstVisit: true };
  }
  return {};
}

const confirmFavorites = () => {
  console.log("confirmFavorites");
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
    `--> REDUCE ACTION TYPE : ${action.type} | STATE : `,
    action.payload
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
        SaveSettings: SaveSettings(),
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default function GlobalContext() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <AppBar />
      <Settings />
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
    setPage: (page) => {
      dispatch({ type: actions.SET_PAGE, page });
    },
    SaveSettings: () => {
      dispatch({ type: actions.SAVE_SETTINGS });
    },
    confirmFavorites: (visit) => {
      console.log(`first visit: `, visit);
      dispatch({ type: actions.CONFIRM_FAVORITES });
      dispatch({ type: actions.FIRST_VISIT });
      dispatch({ type: actions.SET_PAGE, page: "dashboard" });
    },
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

// GLOBAL HOOKS
export const useGlobalStateContext = () => useContext(StateContext);
