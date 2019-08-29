import React from 'react';

const AddForm = () => {
	return (
		<div className="addform">
			<input type="text" placeholder="Namn" /> <br/>
			<input type="text" placeholder="Antal" /> <br/>
			<input type="text" placeholder="Pris" /> <br/>
			<button>Lägg till ny produkt</button>
		</div>
	)
}

export default AddForm;
