var listaVieja = [2,3,6,9,0];
var nuevo = 9

function agregar(lista, nuevo){
	var lista_nueva = [];
	for(i=0; i<lista.length;i++){
		lista_nueva.push(lista[i]);}
	lista_nueva.push(nuevo);
	return lista_nueva;}

function ordenar(lista){
	var lista_nueva =  [];
	for(i=0; i<lista.length;i++){
		lista_nueva.push(lista[i]);}
	lista_nueva.sort();
	return lista_nueva;}

function voltear(lista){
	var lista_nueva =  [];
	for(i=0; i<lista.length;i++){
		lista_nueva.push(lista[i]);}
	lista_nueva.reverse();
	return lista_nueva;}


//function copia(lista){
//	var lista_nueva = [];
//	for(i=0; i<lista.lenght;i++){
//		lista_nueva.push(lista[i]);}
//	return lista_nueva;}


console.log("lista: ",listaVieja);
console.log("agregar: " , agregar(listaVieja, nuevo));
console.log("voletear: " , voltear(listaVieja));
console.log("ordenar: " , ordenar(listaVieja));
console.log("lista: ",listaVieja);