var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(generateStudents());
});

app.get('/test', function (req, res) {
  res.send('Hello RES with test');
});

app.listen(3000, function () {
  console.log('ACCEPTING HTTP request on port 3000!');
});


function generateStudents(){
	var students = [];
	for (var i = 0; i < 4; i++){
		students.push({
		firstName : chance.first(),
		lastName : chance.last()		
		});		
	};	
	console.log(students);
	return students;
};