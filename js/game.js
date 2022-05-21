
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
	ctx.drawImage(spech, 0, 0, 400, 300, 385, 10, 280, 210);
	ctx.drawImage(buitre, (step1++ % 3) * 108, 0, 108, 172, 550, 150, 81, 129); 
	if(step1 > 3) {
		step1 = 0;
	}
}

var step2 = 0;
function dibujarHangman() {
	ctx.clearRect(250,250,192,192); 
	ctx.drawImage(soga, 0, 0, 92, 136, 315, 200, 83, 122);
	ctx.drawImage(hangman, (step2++ % 7) * 270, 0, 270, 270, 250, 250, 192, 192); 
	if(step2 > 7) {
		step2 = 0;
	}
}

setInterval(dibujarBuitre, 1000/3);
setInterval(dibujarHangman, 6000/7); 