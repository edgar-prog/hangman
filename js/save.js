

//varaiables globales

var palabrasAdivinar = ["MANZANA","HIELO","ROBOT","ZAPATO","EDIFICIO","MESA","SILLA","CEBOLLA"];

var listaPalabras = document.getElementById("lista-palabras");
var botonAdicionar = document.querySelector(".btn-add");


//Funcion actualiza el arreglo de palabras y las muestra en la pagina
window.onload = function() {
	let palabrasMemoria = JSON.parse(localStorage.getItem("palabrasAdivinar"));
	if(palabrasMemoria != null) {
	   //actualizar variable con el contenido de localStorag
		indiceMemoria = palabrasMemoria.length - 1;
		palabrasAdivinar.push(palabrasMemoria[indiceMemoria]);
	}
	
	//Genera la tabla nmumerada de las palabras que estan ingresadas al juego
	for (var k = 0; k < palabrasAdivinar.length; k++) {
		nuevoItem = document.createElement("li");
		nuevoItem.innerHTML = palabrasAdivinar[k];
		listaPalabras.appendChild(nuevoItem);
	}	
}

//Funcion que agrega la palabra y verifica que cumpla los requesitos
botonAdicionar.addEventListener("click",function(event){
	event.preventDefault();
	var nuevaPalabra = document.getElementById("palabra");
	
	//Verifica que no este en blanco que sea texto 
	if ((nuevaPalabra.value.length) > 0 && (verificarTexto(nuevaPalabra.value))) {
		
		//verifica la cantidad de palabras a mostrar en la pagina
		if(palabrasAdivinar.length < 20) {
			
			//Se crea un nuevo elemento <li> item </li> se convierte a mayuscula
			nuevoItem = document.createElement("li");
			nuevoItem.innerHTML = nuevaPalabra.value.toUpperCase();
			
			//se agregan tanto a la lista de etiquetas <li> como a al array de palabras
			listaPalabras.appendChild(nuevoItem);
			palabrasAdivinar.push(nuevaPalabra.value.toUpperCase());
			
			//se guarda en localStorage la nueva palabra y se redirije a la pagina juego
			localStorage.setItem("palabrasAdivinar",JSON.stringify(palabrasAdivinar));
			window.location="juego.html";
		}
		else {
			alert("20 palabras maximo");
		}
	}
	else {
		alert("palabra no valida...  intente de nuevo");
	}
	//se restablece la entrada input text a vacia
	document.getElementById("palabra").value = "";
});

//Funcion que verifica solo texto sin tildes, numeros u otro signo de puntuacion
function verificarTexto(verificar) {
	var regex = /^[a-zA-Z]+$/;
	
	//verifica si cumple con la expresion regular
	if(!regex.test(verificar))
		return false
	else
		return true;
}

