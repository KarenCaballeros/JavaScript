function Semaforo(){

	//titulo
	var h1Titulo= document.createElement("h1");
	var titulo = document.createTextNode("SEMAFORO");
	h1Titulo.appendChild(titulo);

	//creacioncuadrado
	var divCuadro= document.createElement("div");
	divCuadro.className = "cuadro";

	var divCirculo1= document.createElement("div");
	divCirculo1.className = "circulo1";

	//creacion de circulo2
	var divCirculo2= document.createElement("div");
	divCirculo2.className = "circulo2";
	
	//creacion de circulo3
	var divCirculo3= document.createElement("div");
	divCirculo3.className = "circulo3";


	//agrego circulo a cuadrado
	divCuadro.appendChild(divCirculo1);
	divCuadro.appendChild(divCirculo2);
	divCuadro.appendChild(divCirculo3);


	//creacion de div
	var app= document.createElement("div");
	app.className= "app";
	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);


	//creacion de div
	var app= document.createElement("div");
	app.className= "app";
	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);

	return app;

}
function render(mountPoint, component){
	mountPoint.innerHTML= "";
	mountPoint.appendChild(component());
}


var root= document.getElementById("root");
//render(root, Cuadradocirculo, {x: 10, y:20});

var btnNext= document.getElementById("verde");
btnNext.onclick = function(){
	render(root, Semaforo);
}
