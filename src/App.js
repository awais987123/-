import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
		<div class='content'>

		<div className='container'>
				<h1 className='mt-3' style={{marginTop:'auto',fontSize:"40px",fontFamily:'ui-serif'}}> خرچے کا حساب</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				
				
<h3 style={{marginTop:'auto',fontSize:"40px",fontFamily:'ui-serif'}}> !کہاں کہاں خرچ کیا</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				
<h3 style={{marginTop:'auto',fontSize:"40px",fontFamily:'ui-serif'}}>خرچہ درج کریں</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				</div>
				</div>
		</AppProvider>
	);
};

export default App;
