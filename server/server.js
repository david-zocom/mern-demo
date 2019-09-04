const express = require('express');
const server = express();
const db = require('./db.js');

// Konfigurera webbservern:
// middleware
// routes
// error handling
// starta servern

server.use(express.static(__dirname + '/../build/'));
server.use(express.json());

server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

server.get('/test', (request, response) => {
	console.log('Received GET request to /test');
	response.send('Testing!');
})

// This will be removed in future version. We will use MongoDB instead

// GET /api/coffee
server.get('/api/coffee', (request, response) => {
	console.log('Received GET request to /api/coffee', request.url, request.query);
	db.getProducts(data => {
		console.log('Database returned data');

		response.header('Access-Control-Allow-Origin: *')
		.send( JSON.stringify(data) );
	})
})

server.post('/api/coffee', (request, response) => {
	console.log('Received POST request to /api/coffee', request.url);//, request.body);
	let newObject = {
		name: request.body.name,
		size: request.body.size,
		price: request.body.price,
		imageUrl: request.body.imageUrl
	}
	db.addProduct(newObject, result => {
		console.log('Added product to collection, it has id: ', result);
		response.send({
			newKey: result,
			success: true
		});
	})
})

const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})



/*
const fakeData = [
	{
		key: 1,
		name: 'Mocca latte',
		size: 'large',
		price: 69,
		imageUrl: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Mocca-Latte-with-Coconut.jpg'
	},
	{
		key: 2,
		name: 'Espresso tonic',
		size: 'medium',
		price: 100,
		imageUrl: 'https://cdn.vox-cdn.com/thumbor/pYuO6XoydLyKNgvq24Dg9bpJFI0=/0x0:2000x1330/1200x0/filters:focal(0x0:2000x1330):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3685458/pullingshots.0.jpg'
	},
	{
		key: 3,
		name: 'Regular',
		size: 'small',
		price: 20,
		imageUrl: 'http://doctorakil.com/wp-content/uploads/2018/01/coffee-940x600.jpg'
	}
]
*/



//
