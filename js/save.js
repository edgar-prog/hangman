
var palabrasAdivinar = ["MANZANA","PERFUME","ARBOL","HIELO","ROBOT","ZAPATO","EDIFICIO","MESA","SILLA","CEBOLLA"];

var listaPalabras = document.getElementById("lista-palabras");
	
for (var k = 0; k < palabrasAdivinar.length; k++) {
	nuevoItem = document.createElement("li");
	nuevoItem.innerHTML = palabrasAdivinar[k];
	listaPalabras.appendChild(nuevoItem);
}	

var botonAdicionar = document.querySelector(".btn-add");

botonAdicionar.addEventListener("click",function(event){
	event.preventDefault();
	var nuevaPalabra = document.getElementById("palabra");
	
	if ((nuevaPalabra.value.length) > 0 && (verificarTexto(nuevaPalabra.value))) {
		if(palabrasAdivinar.length < 20) {
			nuevoItem = document.createElement("li");
			nuevoItem.innerHTML = nuevaPalabra.value.toUpperCase();
			listaPalabras.appendChild(nuevoItem);
			palabrasAdivinar.push(nuevaPalabra.value.toUpperCase());
		}
		else {
			alert("20 palabras maximo");
		}
	}
	else {
		alert("palabra no valida...  intente de nuevo");
	}

	document.getElementById("palabra").value = "";
});

function verificarTexto(verificar) {
	var regex = /^[a-zA-Z]+$/;
	if(!regex.test(verificar))
		return false
	else
		return true;
}
