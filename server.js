//helps js files reads
require('node-jsx').install({harmony:true});
var express = require('express');
var reactEngine = require('react-engine');

//create express instance
var app = express();

//locate files setup

//views
app.set('views',__dirname + '/src/views');

//statics files
app.use(express.static(__dirname + '/public'));

//helps js files render
var engine = reactEngine.server.create();

//setup what is the engine (jsx)
app.engine('.jsx', engine);

//setup to view use jsx
app.set('view engine', 'jsx');

//to read and access to thew views
app.set('view', reactEngine.expressView);

//server route access
app.get('/', function(req, res){
	res.render('home', {
		title: 'Firs Isomorphic App'
	});
});


//server start port
app.listen(3000, function(){
	console.log('server run in port 3000');
});

