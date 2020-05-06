import React, { createContext, useReducer, useContext } from "react";

// CONTEXT
export const StateContext = createContext({ page: "dashboard" });

/**
 * global reducer
 * @param state
 * @param action
 * @returns {{page: number}}
 * @constructor
 */
const Reducer = (state, action) => {
  console.log(`REDUCER ${action.type}`);
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

/**
 * global provider
 * @param children
 * @returns {*}
 * @constructor
 */
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer);
  return (
    <StateContext.Provider value={[dispatch, state]}>
      {children}
    </StateContext.Provider>
  );
};

// GLOBAL HOOKS
export const useGlobalStateContext = () => useContext(StateContext);
