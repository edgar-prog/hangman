

//varaiables globales

let palabrasMemoria = JSON.parse(localStorage.getItem("palabrasAdivinar"));
var palabrasAdivinar = [];


if(palabrasMemoria != null) {
	var palabrasAdivinar = palabrasMemoria;
}

var listaPalabras = document.getElementById("lista-palabras");
	
//Genera la tabla nmumerada de las palabras que estan ingresadas al juego
for (let k = 0; k < palabrasAdivinar.length; k++) {
	nuevoItem = document.createElement("li");
	nuevoItem.innerHTML = palabrasAdivinar[k];
	listaPalabras.appendChild(nuevoItem);
}	


var botonAdicionar = document.querySelector(".btn-add");

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

//Funcion doble click para eliminar un item en la lista
listaPalabras.addEventListener("dblclick",function(event) {
	//Seleccion del item de la lista
	let itemBorrar = event.target.textContent;
	
	if(palabrasAdivinar.length != 1) {
		//Se elimina del array de palabras en memoria
		borrarItemLista(palabrasAdivinar, itemBorrar);
		//Se actualiza la lista de palabras en el localStorage
		localStorage.setItem("palabrasAdivinar",JSON.stringify(palabrasAdivinar));
		//Se elimina el item de la lista en HTML
		this.removeChild(event.target); 
	}
	else {
		alert("Debe tener al menos una palabra que adivinar");
	}
	
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

//Funcion borrar una palabra de la lista
function borrarItemLista ( arr, item ) {
	// Obtiene el indice de la palabra en el array
    let indiceItem = arr.indexOf( item );
	//Verifica que este en el array
    if ( indiceItem !== -1 ) {
        arr.splice( indiceItem , 1 );
    }
}