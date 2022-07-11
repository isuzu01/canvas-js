
const teclas = {
  UP : 38,
  DOWN : 40,
  LEFT : 37,
  RIGHT : 39
}


document.addEventListener("keydown", dibujarTeclado);

const cuadro = document.querySelector("#draw-area");
const papel = cuadro.getContext("2d");
const color = "red"

let x = 250;
let y = 250;
let estado;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

function dibujarTeclado(evento) {

  let colorLine = "blue";
  let movimiento = 10;

  switch (evento.keyCode) {

    case teclas.UP:
      dibujarLinea(colorLine, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
  
    case teclas.DOWN:
      dibujarLinea(colorLine, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorLine, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorLine, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;

    default:
      break;
  }

}


