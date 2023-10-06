import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { id: "e1", title: "Car Insuarnce", amount: 180, date: new Date(2023, 3, 10) },
  { id: "e2", title: "Laptop Service", amount: 110, date: new Date(2023, 4, 11) },
  { id: "e3", title: "Mobile Plan", amount: 70, date: new Date(2022, 8, 12) },
  { id: "e4", title: "Car Service", amount: 60, date: new Date(2022, 1, 13) },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const expenseData = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };

    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense expenseData={expenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
