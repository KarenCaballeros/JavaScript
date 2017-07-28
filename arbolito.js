var altura = 20 ;
var ast = "* ";
var space = " ";

for (i = 0; i <= altura; i++){
	var x= i - 1;
	console.log(space.repeat(altura-x), ast.repeat(i));		
}
console.log(space.repeat(altura), "*");
