import React, { createContext, useReducer, useContext } from "react";
const SET_PAGE = "SET_PAGE";
const DEFAULT = "DASHBOARD";
// CONTEXT
export const StateContext = createContext({ page: DEFAULT });

/**
 * global reducer
 * @param state
 * @param action
 * @returns {{page: number}}
 * @constructor
 */
const Reducer = (state, action) => {
  console.log(`-- REDUCER ${action.type} state : ${state}`, state);
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        value: action.page,
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
  if (state) console.log(`GlobalProvider state: ${Object.entries(state)}`);

  console.dir(state);
  return (
    <StateContext.Provider value={[dispatch, state]}>
      {children}
    </StateContext.Provider>
  );
};

// GLOBAL HOOKS
export const useGlobalStateContext = () => useContext(StateContext);
