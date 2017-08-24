function Cuadradocirculo(position){

	//titulo
	var h1Titulo= document.createElement("h1");
	var titulo = document.createTextNode("ejercicio");
	h1Titulo.appendChild(titulo);

	//creacioncuadrado
	var divCuadro= document.createElement("div");
	divCuadro.className = "cuadro";

	//cracion de circulo
	var divCirculo= document.createElement("div");
	divCirculo.className = "circulo";
	//envio posicion 
	divCirculo.style.left = position.x + "px";
	divCirculo.style.top= position.y + "px";


	//agrego circulo a cuadrado
	divCuadro.appendChild(divCirculo);

	//creacion de div
	var app= document.createElement("div");
	app.className= "app";
	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);

	return app;

}
function render(mountPoint, component, state){
	mountPoint.appendChild(component(state));
}


var root= document.getElementById("root");
render(root, Cuadradocirculo, {x: 10, y:20});
	
