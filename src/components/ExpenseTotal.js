import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
		<span>خرچ شدہ روپے</span>
        
        <span> <h5 style={{fontSize:'20px',fontFamily:'ui-serif', fontWeight:'bold'}}>{total}</h5> </span>
       
		</div>
	);
};

export default ExpenseTotal;
