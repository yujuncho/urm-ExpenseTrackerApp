import React, { useState } from "react";

import "./ExpenseForm.css";

let ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* 
        Alternatively, I can use one state
        const [ userInput, setUserInput ] = useState({
            enteredTitle: '',
            enteredValue: '',
            enteredDate: ''
        })
    */

  let titleChangeHandler = event => {
    setEnteredTitle(event.target.value);

    /*
            For one state, the format would be
            setUserInput(prevState => {
                return {
                    ...prevState,
                    enteredTitle: event.target.value
                };
            })
        */
  };

  let amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  let dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  let submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
