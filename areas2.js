
console.log("MENU");
console.log("1. Triangulo");
console.log("2. Rectangulo");
console.log("3. Circulo");
var parametros= [5,10];
var menu = 1;

function areaTriangulo(parametros){
	return (parametros[0]*parametros[1])/2;}
function areaRectangulo(parametros){
	return (parametros[0]* parametros[1]);}
function areaCirculo(parametros){
	return (Math.pow(parametros[0], 2)*Math.PI);}

if(menu = 1){
	var calculo = areaTriangulo;}
else if(menu = 2){
	var calculo = areaRectangulo;}
else if(menu = 2){
	var calculo = areaRectangulo;}


function calcularArea(calculo, parametros) {
	return calculo(parametros);}

console.log(calcularArea(calculo,parametros));	