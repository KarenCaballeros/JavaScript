function calcularArea(forma, parametros){
	this.Triangulo = function(base, altura){
		return (base * altura)/2;
	}	
}

var forma = 1;
var base = 2;
var altura = 5;
var calcularArea = new calcularArea();

if (forma == 1){
	console.log("Area de Triangulo: ", calcularArea.Triangulo(base, altura));
}

//function areaRectangulo(base, altura){
//	return (base* altura);
//}
//function areaCirculo(base){
//	return (Math.pow(base, 2)*Math.PI);
//}