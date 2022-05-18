
	
var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
		
var div = document.querySelector(".div-teclado");
var letras = document.createElement("ul");

for (var i = 0; i < alfabeto.length; i++) {
	letras.id = "alfabeto";
	lista = document.createElement("li");
	lista.id = "letra";
	lista.innerHTML = alfabeto[i];
	div.appendChild(letras);
	letras.appendChild(lista);
}
 
