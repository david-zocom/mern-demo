import React, { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import DisplayProducts from './components/DisplayProducts';
import './App.css';


const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// fetch data from API
		// Better solution: put this in a separate file
		let url = '/api/coffee';
		if( process.env.NODE_ENV !== 'production' ) {
			console.log('Running fetch in DEV MODE, port 1337...');
			url = 'http://localhost:1337/api/coffee';
			// This is because create-react-app creates a dev server (on port 3000)
		} else {
			console.log('Running fetch in PRODUCTION MODE');
		}
		fetch(url, {method: 'GET'})
		.then(response => response.json())
		.then(json => {
			console.log('Got data from API:', json);
			setData(json);
		})
		.catch(error => {
			console.error('Something went wrong when calling API. GET /api/coffee', error.message);
			// In a real app, we should inform the user or try again
		})
	}, []);  // empty array means: do this only once

	return (
		<div className="App">
        <section>
        <div className="title">
			<h1>Coffee shop</h1>
            <p className="description">Vi säljer kaffe - hippt!</p>
            </div>

			<div className="coffeCard_container">
			<DisplayProducts data={data} />
			</div>
			<AddForm/>
        </section>
		</div>
	);
}

export default App;
