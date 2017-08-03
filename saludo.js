var saludoFormal= function(nombre){
	return "Buenas tardes "+ nombre;}

var saludoInformal= function(nombre){
	return "Que onda " + nombre;}

var saludos=function(saludo,nombre){
	return (saludo(nombre));}

var nombre="Ana";

if(nombre=="Ana"){
	console.log(saludos(saludoInformal,nombre));}
else{
	console.log(saludos(saludoInformal,nombre));}