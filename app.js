(function(){

	var initialize = function(){
		var board = new Array(8);
		var indexes = [0,1,2,3,4,5,6,7];
		var fstCard = null , sndCard = null;

		indexes.takeOne = function(){
			return this.splice(getRandomInt(0, this.length-1),1)[0];		
		}

		function Card(){
			this.twin =	null;
			this.image = 0;
		}
		
		for (var j = 0; j < 4; j++) {				
			fstCard = new Card();
			sndCard = new Card();

			fstCard.twin = sndCard;
			fstCard.image = j;
		
			sndCard.twin = fstCard;
			sndCard.image = j;

			board[indexes.takeOne()] = fstCard;
			board[indexes.takeOne()] = sndCard;
		};
		
		return board;
	};

	// funcion global para ser usada en ui.js
	listaCartas = initialize();
	

	function getRandomInt (min, max) {
	   return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}());



