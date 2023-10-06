import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredYearExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  const getExpenseFilterValue = (value) => {
    setFilterYear(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onExpenseFilterChange={getExpenseFilterValue}
      />
      <ExpensesChart expenses={filteredYearExpenses} />
      <ExpenseList items={filteredYearExpenses} />
    </Card>
  );
};

export default Expenses;
