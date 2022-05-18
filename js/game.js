
var canvasScreen = document.getElementById("screen");
var mainScreen = canvasScreen.getContext("2d");

var anchoPantalla = 800;
var altoPantalla = 600;

fondo = new Image();
fondo.src = "img/fondo.png"

fondo.addEventListener('load', function() {
        mainScreen.drawImage(fondo, 0, 0, 800, 600, 0, 0, anchoPantalla, altoPantalla);
	}, 
	false);
		
