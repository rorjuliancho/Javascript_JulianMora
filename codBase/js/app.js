function init(){

  var display = document.getElementById('display');
  var on = document.getElementById('on');
  var mas = document.getElementById('mas');
  var menos = document.getElementById('menos');
  var por = document.getElementById('por');
  var dividido = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');

  // VALIDACION 8 CARACTERES EN EL DISPPLAY



  // VISUALIZACIÓN DE NÚMEROS EN EL DISPLAY
  uno.onclick = function(e){

    if(display.textContent == 0){
        cleardisplay();
        display.textContent = display.textContent  + "1";
    }else{
      if(display.innerHTML.length==8){

      }else{
        display.textContent = display.textContent  + "1";
      }

    }

  }

  dos.onclick = function(e){

        if(display.textContent == 0){
            cleardisplay();
          display.textContent = display.textContent  + "2";
        }else{
          if(display.innerHTML.length==8){

          }else{
            display.textContent = display.textContent  + "2";
          }

        }
  }

  tres.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
              display.textContent = display.textContent  + "3";
        }else{
          if(display.innerHTML.length==8){

          }else{
            display.textContent = display.textContent  + "3";
          }

        }
  }

  cuatro.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
            display.textContent = display.textContent  + "4";
        }else{
          if(display.innerHTML.length==8){

          }else{
          display.textContent = display.textContent  + "4";
          }

        }
  }

  cinco.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
            display.textContent = display.textContent  + "5";
        }else{
          if(display.innerHTML.length==8){

          }else{
            display.textContent = display.textContent  + "5";
          }
        }
  }

  seis.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
              display.textContent = display.textContent  + "6";
        }else{
          if(display.innerHTML.length==8){

          }else{
            display.textContent = display.textContent  + "6";
          }
        }
  }

  siete.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
            display.textContent = display.textContent  + "7";
        }else{
          if(display.innerHTML.length==8){

          }else{
          display.textContent = display.textContent  + "7";
          }
        }
  }

  ocho.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
            display.textContent = display.textContent  + "8";
        }else{
          if(display.innerHTML.length==8){

          }else{
          display.textContent = display.textContent  + "8";
          }
        }
  }

  nueve.onclick = function(e){
        if(display.textContent == 0){
            cleardisplay();
              display.textContent = display.textContent  + "9";
        }else{
          if(display.innerHTML.length==8){

          }else{
              display.textContent = display.textContent  + "9";
          }
        }
  }

  cero.onclick = function(e){

      display.textContent = display.textContent  + "0";
  }

  on.onclick = function(e){
      resetear();
      display.textContent = display.textContent  + "0";
  }
  // OPERACION SUMA
  mas.onclick = function(e){
      valuenumber = display.textContent;
      operacion = "+";
      cleardisplay();
  }

  menos.onclick = function(e){
      valuenumber = display.textContent;
      operacion = "-";
      cleardisplay();
  }

  por.onclick = function(e){
      valuenumber = display.textContent;
      operacion = "*";
      cleardisplay();
  }

  dividido.onclick = function(e){
      valuenumber = display.textContent;
      operacion = "/";
      cleardisplay();
  }

  igual.onclick = function(e){
      valueequals = display.textContent;
      resolver();
  }

  function cleardisplay(){
    display.textContent = "";
  }

  function resetear(){
    display.textContent = "";
    valuenumber = 0;
    valueequals = 0;
    operacion = "";
  }
  function resolver(){
    var result = 0;
    switch(operacion){
      case "+":
        result = parseFloat(valuenumber) + parseFloat(valueequals);
        break;
      case "-":
          result = parseFloat(valuenumber) - parseFloat(valueequals);
          break;
      case "*":
        result = parseFloat(valuenumber) * parseFloat(valueequals);
        break;
      case "/":
        result = parseFloat(valuenumber) / parseFloat(valueequals);
        break;
    }
    resetear();
   display.textContent = result;
}


}
