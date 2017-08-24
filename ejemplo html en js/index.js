function App(){
	var h1Titulo= document.createElement("h1");
	var titulo = document.createTextNode("ejercicio");
	h1Titulo.appendChild(titulo);

	var divCuadro= document.createElement("div");
	divCuadro.className = "cuadro";
	var divCirculo= document.createElement("div");
	divCirculo.className = "circulo";
	divCuadro.appendChild(divCirculo);

	var app= document.createElement("div");
	app.className= "app";
	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);

	return app;

}
function render(mountPoint, component){
	mountPoint.appendChild(component());
}


var root= document.getElementById("root");
render(root,App);
	
