import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
		<span>کل روپے </span>
        <span> <h5 style={{fontFamily:'ui-serif',fontSize:'20px', fontWeight:'bold'}}> {props.budget} </h5> </span>
        <button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
