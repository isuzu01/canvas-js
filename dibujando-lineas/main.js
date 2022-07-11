
const text = document.querySelector("#text_linea");
const button= document.querySelector("#button");
//const saveButton = document.querySelector("#save");
const d = document.querySelector("#dibujo");
const lienzo = d.getContext("2d");

const ancho = d.clientWidth;
alert(ancho);




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}



function dibujoPorClick() {

  let lineas = parseInt(text.value);
  let l = 0;
  let yi, xf;
  let color = "aaf";
  let space = ancho / lineas;

  for(let l = 0; l < lineas; l++) {

    yi = space * l;
    xf = space * (l + 1);

    dibujarLinea(color, 0, yi , xf, 500);
    console.log(`linea ${l}`);
    
  }
  
  dibujarLinea(color, 1, 1, 1, 499);
  dibujarLinea(color, 1, 499, 499, 499);
}

button.addEventListener("click", dibujoPorClick)


