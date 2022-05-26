
var palabrasAdivinar = ["MANZANA","PERFUME","ARBOL","HIELO","ROBOT","ZAPATO","EDIFICIO","MESA","SILLA","CEBOLLA","OELDA"];

var listaPalabras = document.getElementById("lista-palabras");
	
for (var k = 0; k < palabrasAdivinar.length; k++) {
	nuevoItem = document.createElement("li");
	nuevoItem.innerHTML = palabrasAdivinar[k];
	listaPalabras.appendChild(nuevoItem);
}	


var botonAdicionar = document.getElementById("btn-agregar");

botonAdicionar.addEventListener("click",function(event){
	event.preventDefault();
	var nuevaPalabra = document.getElementById("palabra").value;
	nuevoItem = document.createElement("li");
	nuevoItem.innerHTML = nuevaPalabra;
	listaPalabras.appendChild(nuevoItem);
});