# react-node.js-express-isomorphic
Test application with _react_, _node.js_ and _express_ in a isomorphic proyect

## How to start

### Pre-requisites

1. Install Node & Npm

2. Create new proyect folder and an empty file named _server.js_

3. Open new console and go to proyect folder

4. Start node proyect:
```
npm int
```

5. Fill proyect info 

6. Install dependecies:
```
npm install react express --save
```

7. Edit _server.js_:
```
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
		title: 'First Isomorphic App'
	});
});

//server start port
app.listen(3000, function(){
	console.log('server run in port 3000');
});
```

8. Create src/views/home.jsx view and add:
```
var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<h1>{this.props.title}</h1>
			)
	}
});

module.exports = Home;
```

9. Try to run node server like (may be require admin permissions):
```
node server
```
or
```
node server.js
```

10. Open sever in the browser at _localhost:3000_

