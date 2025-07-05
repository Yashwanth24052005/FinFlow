import React, { useState, useEffect } from "react";
import { TransactionProvider } from "./context/TransactionContext";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Chart from "./components/Chart";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("finflow-theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("finflow-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <TransactionProvider>
      <div className="container">
        <h1>FinFlow 💸</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <Summary />
        <AddTransaction />
        <TransactionList />
        <Chart />
      </div>
    </TransactionProvider>
  );
}

export default App;
