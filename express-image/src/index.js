var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

app.get('/', function (req, res) {	
  res.send(generateZooAnimals());
});

app.get('/zoo', function (req, res) {	
  res.send(generateZooAnimals());
});

app.get('/pet', function (req, res) {	
  res.send(generatePetAnimals());
});

app.get('/farm', function (req, res) {	
  res.send(generateFarmAnimals());
});

app.get('/test', function (req, res) {
  res.send('Hello RES with test');
});

app.listen(3000, function () {
  console.log('ACCEPTING HTTP request on port 3000!');
});


function generateAnimals(){
	var animals = [];
	for (var i = 0; i < 10; i++){
		animals.push({
		animal : chance.animal()
		});		
	};	
	console.log(animals);
	return animals;
};

function generateZooAnimals(){
	var animals = [];
	for (var i = 0; i < 10; i++){
		animals.push({
		animal : chance.animal({type: 'zoo'})
		});		
	};	
	console.log(animals);
	return animals;
};

function generatePetAnimals(){
	var animals = [];
	for (var i = 0; i < 10; i++){
		animals.push({
		animal : chance.animal({type: 'pet'})
		});		
	};	
	console.log(animals);
	return animals;
};

function generateFarmAnimals(){
	var animals = [];
	for (var i = 0; i < 10; i++){
		animals.push({
		animal : chance.animal({type: 'farm'})
		});		
	};	
	console.log(animals);
	return animals;
};