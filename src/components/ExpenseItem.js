import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.expense.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.expense.name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

  
    return (
        <tr>
        <td>{props.expense.name}</td>
        <td>{props.expense.cost} €</td>
        <td><button onClick={increaseAllocation}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem
