
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

var x = 0;
var bandera = false;


function dibujarBuitre() {
	ctx.clearRect(550,150,81,129);
	ctx.drawImage(arbol, 0, 0, 418, 436, 90, 115, 376, 392);
	ctx.drawImage(buitre, (step1++ % 3) * 108, 0, 108, 172, 550, 150, 81, 129); 
	if(step1 > 2) {
		step1 = 0;
	}
}

function mostrarSpech(step,texto) {
	ctx.drawImage(spech, 0, 0, 400, 300, 385, 10, 280, 210);
	ctx.font="13pt 'Henny Penny', cursive";
	ctx.fillStyle = "#D186D9";
	switch (step) {
		case 6:
		ctx.fillText("Perdiste! 💀",470,70);
		ctx.fillText("vuelve a intetar",460,110);
		break;

		case 7:
		ctx.fillText("La palabra es",470,70);
		let desplazar = Math.round(ctx.measureText(texto).width / 2);
		ctx.fillText(texto,530 - desplazar,100);
		break;
		
		case 8:
		ctx.fillText("Felicidades!",470,70);
		ctx.fillText("ganaste 👏",480,110);
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


function mostrarTeclasPresionadas(texto) {
	ctx.clearRect(0,canvas.height - 20, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.font="12pt 'Jura', sans-serif";
	ctx.fillText(texto,x,canvas.height - 5);
	if(x > (canvas.width - Math.round(ctx.measureText(texto).width))) {
		bandera = true;
	}
	if(x < 0) {
		bandera = false;
	}
		
	if(bandera) {
		x--;
	}
	else {
		x++;
	}
}
	
setInterval(mostrarTeclasPresionadas,10,teclasPresionadas);
setInterval(dibujarBuitre, 1000/3);

