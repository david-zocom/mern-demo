import React, { useState } from 'react';

const AddForm = () => {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');

	const submit = () => {
		let url = '/api/coffee';
		if( process.env.NODE_ENV !== 'production' ) {
			console.log('Running fetch in DEV MODE, port 1337...');
			url = 'http://localhost:1337/api/coffee';
			// This is because create-react-app creates a dev server (on port 3000)
		} else {
			console.log('Running fetch in PRODUCTION MODE');
		}
		const settings = {
			method: 'POST',
			headers: {
	            'Content-Type': 'application/json',
	        },
			body: JSON.stringify({
				name,
				size: quantity,
				price,
				imageUrl: image
			})
	 	}
		fetch(url, settings)
		.then(response => response.json())
		.then(json => {
			console.log('Fetch request complete. Response: ', json);
		})
	}
	return (
		<div className="addform">
			<input type="text" placeholder="Namn" value={name}
			 	onChange={ e => setName(e.target.value) } />
			<input type="text" placeholder="Antal" value={quantity}
			 	onChange={ e => setQuantity(e.target.value) } />
			<input type="text" placeholder="Pris" value={price}
				onChange={ e => setPrice(e.target.value) } />
			<input type="text" placeholder="Bild" value={image}
			 	onChange={ e => setImage(e.target.value) } />
			<button onClick={submit}>Lägg till ny produkt</button>
		</div>
	)
}

export default AddForm;
