var personas = [
	{firstName: "Ana", lastName: "Caballeros", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 17, height: 170},
	{firstName: "Willi", lastName: "Rosal", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 18, height: 185},
	{firstName: "Samuel" , lastName: "Chavez", address:{ country:{ name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 28, height: 180}];

function bubbleSort(lista){
	var cambio ;
	do{
		for (var i = 0; i < lista.lenght-1; i++){
			if (lista[i]["lastName"]>lista[i+1]["lastName"]){
				var menor = lista[i];
				lista[i] = lista[i+1];
				lista[i+1] = menor;
				cambio = true;}
		}	
	} while(cambio);
}
bubbleSort(personas);
console.log(personas);
