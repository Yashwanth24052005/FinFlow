import React, { createContext, useReducer, useEffect } from "react";

const TransactionContext = createContext();

const initialState = JSON.parse(localStorage.getItem("finflow-transactions")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      return state.filter(tx => tx.id !== action.payload);
    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("finflow-transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
