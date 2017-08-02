var personas = [
    {firstName: "Samuel" , lastName: "Perez", address:{ country:{ name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 28, height: 180,},
    {firstName: "Ana", lastName: "Caballeros", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 17, height: 170,},
    {firstName: "Willi", lastName: "Rosal", address:{country:{name: "Guatemala", code: "502"}, city: "Guatemala"}, age: 18, height: 185,}];

function bubbleSort(lista){
    var cambio;
    do{
        cambio = false;
        for (var i = 0; i < lista.lenght; i++){
            if (lista[i]["lastName"]>lista[i+1]["lastName"]){
                var menor = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = menor;
                console.log("hola")
                cambio = true;}
        }   
    } while(cambio);
}
bubbleSort(personas);
console.log(personas);