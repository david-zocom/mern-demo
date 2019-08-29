const express = require('express');
const server = express();
// const MongoClient = require('mongodb').MongoClient;

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
const fakeData = [
	{
		key: 1,
		name: 'Mocca latte',
		size: 'large',
		price: 69,
		imageUrl: ''
	},
	{
		key: 2,
		name: 'Espresso tonic',
		size: 'medium',
		price: 100,
		imageUrl: ''
	},
	{
		key: 3,
		name: 'Regular',
		size: 'small',
		price: 20,
		imageUrl: ''
	}
]
// GET /api/coffee
server.get('/api/coffee', (request, response) => {
	console.log('Received GET request to /api/coffee', request.url, request.query);
	response.header('Access-Control-Allow-Origin: *')
		.send( JSON.stringify(fakeData) );
})

server.post('/api/coffee', (request, response) => {
	console.log('Received POST request to /api/coffee', request.url, request.body);
	let newKey = fakeData.length + 1;
	fakeData.push({
		key: newKey,
		name: request.body.name,
		size: request.body.size,
		price: request.body.price,
		imageUrl: request.body.imageUrl
	})
	response.send({
		newKey,
		success: true
	});
})

const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})







//
