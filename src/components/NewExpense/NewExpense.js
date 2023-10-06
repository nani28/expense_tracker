import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayFlag, setDisplayFlag] = useState(false);
  const expenseData = (expenseData) => {
    props.expenseData(expenseData);
  };
  const displayHandle = () => {
    setDisplayFlag((prevFlag) => {
      return !prevFlag;
    });
  };
  return (
    <div className="new-expense">
      {!displayFlag && <button onClick={displayHandle}>Add Expense</button>}
      {displayFlag && (
        <ExpenseForm displayHandle={displayHandle} expenseData={expenseData} />
      )}
    </div>
  );
};

export default NewExpense;
