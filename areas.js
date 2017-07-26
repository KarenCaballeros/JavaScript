var altura = ;
var base = ;

function areaTriangulo(base, altura){
	return (base*altura)/2;
}
function areaRectangulo(base, altura){
	return (base* altura);
}
function areaCirculo(base){
	return (Math.pow(base, 2)*Math.PI);
}

function calcularArea(calculo, parametros) {
	return calculo(parametros);
}

