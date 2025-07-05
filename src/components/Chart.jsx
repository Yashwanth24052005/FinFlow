import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TransactionContext from "../context/TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { transactions } = useContext(TransactionContext);

  const categories = {};
  transactions.forEach(({ text, amount }) => {
    if (!categories[text]) categories[text] = 0;
    categories[text] += amount;
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="chart">
      <h3>Category Breakdown</h3>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
