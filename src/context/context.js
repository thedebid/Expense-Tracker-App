import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initailState = [];

export const ExpenseTrackerContext = createContext(initailState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initailState);

  //Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
