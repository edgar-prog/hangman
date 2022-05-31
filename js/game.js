
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var buitre = new Image();
buitre.src = "img/buitre.png";

var hangman = new Image();
hangman.src = "img/hangman.png";

var arbol = new Image();
arbol.src = "img/arbol.png";

var soga = new Image();
soga.src = "img/soga.png";

var spech = new Image();
spech.src = "img/spech.png";

var step1 = 0;
function dibujarBuitre() {
	ctx.clearRect(550,150,81,129);
	ctx.drawImage(arbol, 0, 0, 418, 436, 90, 115, 376, 392);
	ctx.drawImage(buitre, (step1++ % 3) * 108, 0, 108, 172, 550, 150, 81, 129); 
	if(step1 > 3) {
		step1 = 0;
	}
}

function mostrarSpech(step) {
	/* ctx.clearRect(385,10,280,210); */
	ctx.drawImage(spech, 0, 0, 400, 300, 385, 10, 280, 210);
	ctx.font="19pt 'Henny Penny', cursive";
	ctx.fillStyle = "blue";
	switch (step) {
		case 0:
		ctx.fillText("Bienvenido!",450,80);
		ctx.fillText("🤞 Jugador",460,115);
		break;
		
		case 6:
		ctx.fillText("Perdiste! 💀",440,80);
		ctx.fillText("vuelve a intetar",442,116);
		break;
		
		case 8:
		ctx.fillText("Felicidades!",440,80);
		ctx.fillText("ganaste 👏",460,115);
		break;
	}
}

function dibujarHangman(step) {
	ctx.clearRect(250,250,192,192); 
	ctx.drawImage(soga, 0, 0, 92, 136, 315, 200, 83, 122);
	if(step > 0){
		ctx.drawImage(hangman, (step-- % 7) * 270, 0, 270, 270, 250, 250, 192, 192); 
	}
}

setInterval(dibujarBuitre, 1000/3);
