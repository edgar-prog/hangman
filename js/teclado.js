	
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var palabra = "transmetro";

var div_visor = document.querySelector(".div-visor");
var adivina = document.createElement("ul");

for (var i = 0; i < palabra.length; i++) {
	adivina.id = "espacios";
	espacio = document.createElement("li");
	espacio.innerHTML = "_";
	div_visor.appendChild(adivina);
	adivina.appendChild(espacio);
}

var div_teclas = document.querySelector(".div-teclas");
var letras = document.createElement("ul");

for (var i = 0; i < alfabeto.length; i++) {
	letras.id = "alfabeto";
	lista = document.createElement("li");
	lista.innerHTML = "<b>"+alfabeto[i]+"</b>";
	div_teclas.appendChild(letras);
	letras.appendChild(lista);
}
 
var teclado = document.getElementById("alfabeto");
var espaciosVacios = document.getElementById("espacios");

teclado.addEventListener("click",function(event) {
	tecla = event.target.textContent;
	if(palabra.includes(tecla)) {
		var posicionesLetras = localizarLetras(palabra, tecla);
		
		for(var j = 0; j < posicionesLetras.length; j++) {
			var elemento = document.createElement("li")
			elemento.innerHTML = tecla;
			var posicion = posicionesLetras[j];
			espaciosVacios.replaceChild(elemento,espaciosVacios.children[posicion]);
		}
	}
});

function localizarLetras(palabra, letra) {
	var posiciones = [];
	for(i = 0; i < palabra.length; i++) {
		if(palabra[i] == letra) {
			posiciones.push(i);
		}
	}
	return posiciones;
}