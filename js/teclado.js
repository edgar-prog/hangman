
//variables globales
	let palabrasMemoria = JSON.parse(localStorage.getItem("palabrasAdivinar"));
	
	if(palabrasMemoria != null) {
		var palabrasAdivinar = palabrasMemoria;
		var palabra = generarPalabra(palabrasMemoria);
	}
		
	let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	var teclasPresionadas = [];
	var numeroIntentosFallidos = 0;
	var juegoTerminado = false;

	let div_visor = document.querySelector(".div-visor");
	let adivina = document.createElement("ul");
	for (let i = 0; i < palabra.length; i++) {
		adivina.id = "espacios";
		let espacio = document.createElement("li");
		espacio.innerHTML = "_";
		div_visor.appendChild(adivina);
		adivina.appendChild(espacio);
	}

	let div_teclas = document.querySelector(".div-teclas");
	let letras = document.createElement("ul");
	for (let i = 0; i < alfabeto.length; i++) {
		letras.id = "alfabeto";
		let lista = document.createElement("li");
		lista.innerHTML = "<b>"+alfabeto[i]+"</b>";
		div_teclas.appendChild(letras);
		letras.appendChild(lista);
	}

	var teclado = document.getElementById("alfabeto");

//Funcion que lee el evento click en el teclado grafico
teclado.addEventListener("click",function(event) {
	
	//Captura de las etiquetas <li> de la palabra a adivinar 
	let espaciosVacios = document.getElementById("espacios");

	//captura la tecla sobre el evento click 
	let tecla = event.target.textContent;
	
	//Verificar si la tecla ya fue presionada con anterioridad 
	if(!teclasPresionadas.includes(tecla) && !juegoTerminado) {
		
		//Si es presionada por primera vez se guarda en el arreglo
		teclasPresionadas.push(tecla);
		
		//Se verifica que la letra este en la palabra
		if(palabra.includes(tecla)) {
			
			//Si se encuentra se busca las posiciones que ocupan en la palabra
			let posicionesLetras = localizarLetras(palabra, tecla);
			
			//Cambio del contenido de las eriquedas <li> con la letra
			for(let j = 0; j < posicionesLetras.length; j++) {
				let elemento = document.createElement("li");
				elemento.innerHTML = tecla;
				let posicion = posicionesLetras[j];
				
				//reemplazo del "_" por la letra
				espaciosVacios.replaceChild(elemento,espaciosVacios.children[posicion]);
			}
			//Verifica que no hay mas letras ocultas a mostrar
			if(!validarPalabra(palabra)){
				mostrarSpech(8, "");
				
				juegoTerminado = true;
			}
		}
		// si la letra no esta en palabra se incrementa el contador de intentos fallidos
		else {
			//Verifica los intentos fallidos
			dibujarHangman(numeroIntentosFallidos);
			//Si es el ultimo intento muestra mensaje y termina el juego
			if(numeroIntentosFallidos == 6) {
				mostrarSpech(6, palabra);
				setTimeout(mostrarSpech, 1700, 7, palabra);
				juegoTerminado = true;
			}
			numeroIntentosFallidos++;
		}		
	}
});

//Funcion que busca la letra en la palabra y guarda su posicion en la cadena
function localizarLetras(palabra, letra) {
	let posiciones = [];
	//recorre la cadena en busqueda de la letra
	for(let i = 0; i < palabra.length; i++) {
		if(palabra[i] == letra) {
			posiciones.push(i);
		}
	}
	//retons un array con las posiciones en la palabra
	return posiciones;
}

//Funcion que genera la palabra aleatoria 
function generarPalabra(listaPalabrasAdivinar) {
	//generamos el indice segun la cantidad de palabras tenga el array
	let indice = Math.floor(Math.random() * listaPalabrasAdivinar.length);
	//retornamos la palabra generada
	return listaPalabrasAdivinar[indice];
}


function validarPalabra(palabra) {
	let hayGuiones = false;
	let espaciosVacios = document.getElementById("espacios");
	for(let k = 0; k < palabra.length; k++) {
		if(espaciosVacios.children[k].textContent == "_") {
			hayGuiones = true;
		}
	}
	return hayGuiones;
}
