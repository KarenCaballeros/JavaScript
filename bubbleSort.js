var personas = [
    {firstName: "Samuel" , lastName: "Perez", address:{ country:{ name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 28, height: 180,},
    {firstName: "Ana", lastName: "Caballeros", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 17, height: 170,},
    {firstName: "Willi", lastName: "Rosal", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 18, height: 185,}];


function bubbleSort(lista, dato){
    var cambio;
    do{
        cambio = false;
        for (var i = 0; i < lista.length-1; i++){
            if (lista[i][dato]>lista[i+1][dato]){
                var menor = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = menor;
                cambio = true;}
        }   
    } while(cambio);
}

bubbleSort(personas, "age");
console.log(personas);
