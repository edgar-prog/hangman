
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var buitre = new Image();
buitre.src = "img/buitre.png";

var hangman = new Image();
hangman.src = "img/hangman.png";

var step1 = 0;
function dibujarBuitre() {
	ctx.clearRect(550,150,81,129);
	ctx.drawImage(buitre, (step1++ % 3) * 108, 0, 108, 172, 550, 150, 81, 129); 
	if(step1 > 3) {
		step1 = 0;
	}
}

var step2 = 0;
function dibujarHangman() {
	ctx.clearRect(300,225,144,240); 
	ctx.drawImage(hangman, (step2++ % 14) * 48, 0, 48, 80, 300, 225, 144, 240); 
	if(step2 > 14) {
		step2 = 0;
	}
}



setInterval(dibujarBuitre, 1000/3);
setInterval(dibujarHangman, 6000/14);