import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const TransactionList = () => {
  const { transactions, dispatch } = useContext(TransactionContext);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className={tx.amount < 0 ? "minus" : "plus"}>
            {tx.text} <span>{tx.amount}</span>
            <button onClick={() => deleteTransaction(tx.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
