import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map((tx) => tx.amount);
  const income = amounts.filter((amt) => amt > 0).reduce((acc, amt) => acc + amt, 0);
  const expense = amounts.filter((amt) => amt < 0).reduce((acc, amt) => acc + amt, 0);
  const balance = income + expense;

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>Balance: ₹{balance.toFixed(2)}</p>
      <p>Income: ₹{income.toFixed(2)}</p>
      <p>Expense: ₹{Math.abs(expense).toFixed(2)}</p>
    </div>
  );
};

export default Summary;
