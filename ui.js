$(document).ready(function(){
	
	$(listaCartas).each(function(k,v){		
		crearCartas(v);
	});

	function crearCartas(carta){		
		$(".tablero").append("<p>" + carta.image  + "</p>");
	}

});