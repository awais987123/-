import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}`}>
		<span>بقیہ روپے <h5 style={{fontFamily: 'ui-serif',fontSize:'20px', fontWeight:'bold'}}> {budget - totalExpenses} </h5> </span>
		</div>
	);
};

export default RemainingBudget;
