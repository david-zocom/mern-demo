const MongoClient = require('mongodb').MongoClient;

const settings = {useNewUrlParser: true, useUnifiedTopology: true};
const url = 'mongodb://localhost:27017';

function getProducts(sendBack) {
	// ansluta till databasen
	MongoClient.connect(url, settings, (error, client) => {
		if( error ) {
			throw error;
		}
		// köra en query
		let col = client.db('shop').collection('coffee');

		// Modernare sätt med async/await
		// let array = await col.find({}).toArray();

		// Traditionell callback
		col.find({}).toArray((error, result) => {
			if(error) throw error;

			// skicka tillbaka resultatet
			sendBack(result);
			client.close();
		});

	})
}
function addProduct(product, sendBack) {
	// ansluta till databasen
	MongoClient.connect(url, settings, (error, client) => {
		if( error ) {
			throw error;
		}
		// köra en query
		let col = client.db('shop').collection('coffee');

		col.insertOne(product, (error, result) => {
			if( error ) throw error;
			sendBack(result);
			client.close();
		})
	})
}

module.exports = { getProducts, addProduct }









//
