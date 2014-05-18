(function(){

	var initialize = function(){
		var board = [];

		var card;
		// Genera el tablero vacio
		for (var i = 0; i < 8; i++) {
			card = { index: i};
			board.push(card);
		}

		var boardCopy = board.slice(0);
		
		var place;
		// Asigna los valores a cada tarjeta
		for (var j = 0; j < 4; j++) {
			
			console.log(getRandomInt(0, boardCopy.length));
			var firstCard = boardCopy.pop(getRandomInt(0, boardCopy.length-1));
			var sndCard = boardCopy.pop(getRandomInt(0, boardCopy.length-1));
			console.log(firstCard.index);
			console.log(sndCard.index);


			/*console.log(firstCard);
			console.log(sndCard);*/
			firstCard.relation = sndCard;
			firstCard.image = j;

			sndCard.relation = firstCard;
			sndCard.image = j;

			board[firstCard.index] = firstCard;
			board[sndCard.index] = sndCard;
		};	

		console.log(board);
	};

	initialize();
	


	function getRandomInt (min, max) {
	   return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}());



