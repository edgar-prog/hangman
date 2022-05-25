
var palabrasAdivinar = ["MANZANA","PERFUME","ARBOL","HIELO","ROBOT","ZAPATO","EDIFICIO"];

function generarPalabra() {
	var indice = Math.floor(Math.random() * 7);
	return palabrasAdivinar[indice];
}

console.log(generarPalabra());