import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet Paper', amount: 140.25, date: new Date(2022, 2, 11) },
    { id: 'e2', title: 'New TV', amount: 150.25, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 160.25, date: new Date(2020, 2, 13) },
    { id: 'e4', title: 'Home Rent', amount: 170.25, date: new Date(2020, 2, 14) },
];
const App = () => {
    const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses)=>{
            return [expense,...prevExpenses]
        });
    };

    // return React.createElement(
    //     'div', {},
    //     React.createElement('h1', {}, "Let's get Started"),
    //     React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
        </div>
    );
}
export default App;