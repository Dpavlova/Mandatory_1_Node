var express = require('express');
var app = express();

//var objJSON = require('./about.json');
var fs = require('fs');

app.set('view engine', 'ejs');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.render('default', {
		title: 'Home',
    	subtitle: 'Home Page for the Mandatory Assignment',
    	text: 'This text comes from a json file !! :)'
	});
 });


app.get('/about', function(req, res) {
	fs.readFile('about.json', 'utf-8', function(err, data){
	  if (err) {
	    throw err;
	    console.log(err);
	    console.log('an error occured');
	  }
	  res.render('about', JSON.parse(data));

	});
})

app.get('*', function(req, res) {
  res.send('Bad Route');
});


var server = app.listen(3003, function(){
	console.log('listening...');
});
