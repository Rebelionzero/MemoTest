(function(){
	var board = [];
	var min = 0;
	var max = 7;
	var initialize = function(){		
		var fstCard = null , sndCard = null;
		var posicion;
		
		//return this.splice(getRandomInt(0, this.length-1),1)[0];

			
		for (var j = 0; j < 4; j++) {				
			fstCard = {};
			fstCard.id = j;

			sndCard = clone(fstCard);

			posicionAleatoria(fstCard);
			posicionAleatoria(sndCard);
			
			fstCard = null;
			sndCard = null;
		};
		
		return board;
	};

	// funcion global para ser usada en ui.js
	listaCartas = initialize();
	console.log(listaCartas);
	
	function clone(obj) {
   		var target = {};
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				target[i] = obj[i];
			}
		}
		return target;
	}

	function posicionAleatoria(tarjeta){
		posicion = getRandomInt(min,max);
		if(board[posicion] == undefined){				
			board[posicion] = tarjeta;
			return false;
		}else{				
			posicionAleatoria(tarjeta);
		}		

	}

	function getRandomInt (min, max) {
	   return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}());



