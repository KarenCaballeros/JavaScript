var btnSe= document.getElementById("semaforo");
var btnVerde= document.getElementById("verde");
var btnAmarillo= document.getElementById("amarillo");
var btnRojo= document.getElementById("rojo");

function Semaforo(color){

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

	//if (color=1) {
    //	divCirculo1.style.background= "green";} 
    //if (color = 2) {
    //	divCirculo2.style.background= "yellow";}
    //else if (color = 3) {
    //	divCirculo3.style.background= "red";}	

    btnVerde.onclick = function(){
		divCirculo1.style.background= "green";
		divCirculo2.style.background= "white";
		divCirculo3.style.background= "white";}
	btnAmarillo.onclick = function(){
		divCirculo1.style.background= "white";
		divCirculo2.style.background= "yellow";
		divCirculo3.style.background= "white";}
	btnRojo.onclick = function(){
		divCirculo1.style.background= "white";
		divCirculo2.style.background= "white";
		divCirculo3.style.background= "red";}

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
function render(mountPoint, component,color){
	mountPoint.innerHTML= "";
	mountPoint.appendChild(component(color));
}


var root= document.getElementById("root");
render(root, Semaforo);

btnVerde.onclick = function(){
	render(root, Semaforo, 1);}
btnAmarillo.onclick = function(){
	render(root, Semaforo,2);}
btnRojo.onclick = function(){
	render(root, Semaforo,3);}


