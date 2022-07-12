
const cuadro = document.querySelector("#draw-area");
const papel = cuadro.getContext("2d");
const rect = cuadro.getBoundingClientRect();
const color = "red"

let x ;
let y ;
let estado;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}



cuadro.addEventListener("mousedown", clickMouse);
cuadro.addEventListener("mousemove", moveMouse);
cuadro.addEventListener("mouseup", upMouse);  

function clickMouse(evento) {

  console.log(evento);
  x = evento.clientX - rect.left;
  y = evento.clientY - rect.top;
  estado = true;
}



function moveMouse(evento) {

 

  if(estado === true){
    dibujarLinea(color, x, y, evento.clientX - rect.left, evento.clientY - rect.top, papel); 
    x = evento.clientX - rect.left;
    y = evento.clientY - rect.top;
  }
  else {
    x = evento.clientX;
    y = evento.clientY;
  }

}

function upMouse(evento) {

  estado = false;
  console.log(evento);

}

