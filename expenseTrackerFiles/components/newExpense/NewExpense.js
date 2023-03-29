import React from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseFrom";

const NewExpense = () => {
    return (
    <div className="new-expense">
        <ExpenseFrom />
    </div>
    );
}

export default NewExpense;