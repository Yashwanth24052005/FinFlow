import React, { useState, useContext } from "react";
import TransactionContext from "../context/TransactionContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { dispatch } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: parseFloat(amount),
    };

    dispatch({ type: "ADD", payload: newTransaction });
    setText("");
    setAmount("");
  };

  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount (+ income, - expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
