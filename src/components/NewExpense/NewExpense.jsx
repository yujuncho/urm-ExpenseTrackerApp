import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  let saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  let showFormHandler = () => {
    setShowForm(prevState => !prevState);
  };

  let renderExpenseContent = () => {
    if (showForm) {
      return (
        <ExpenseForm
          onCancel={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      );
    } else {
      return <button onClick={showFormHandler}>Add New Expense</button>;
    }
  };

  return <div className="new-expense">{renderExpenseContent()}</div>;
};

export default NewExpense;
