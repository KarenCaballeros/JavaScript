console.log(es_primo(4));
function es_primo(num){
	var cont= num;
	if(num < 1){return false;}
	else if(num == 1){return true;}
	else{
		for(var i=2;i<=num;i++){
			if(num % i == 0){return false;}
			else{return true;}
		}
	}
}


//function EsPrimo(num){
//	for(var i = 2; i < num; i++ ){
//		if(num % i == 0){
//			return false;
//		}
//	}
//	return true;
//}

