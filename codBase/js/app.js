function init(){
  // ASIGNACION DE VARIABLES
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

  // EFECTO TECLADO
  on.addEventListener('mousedown', function() {
    on.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  on.addEventListener('mouseup', function() {
    on.setAttribute("style", "transform:scale(1,1)");
  })
  sign.addEventListener('mousedown', function() {
    sign.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  sign.addEventListener('mouseup', function() {
    sign.setAttribute("style", "transform:scale(1,1)");
  })
  igual.addEventListener('mousedown', function() {
    igual.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  igual.addEventListener('mouseup', function() {
    igual.setAttribute("style", "transform:scale(1,1)");
  })
  punto.addEventListener('mousedown', function() {
    punto.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  punto.addEventListener('mouseup', function() {
    punto.setAttribute("style", "transform:scale(1,1)");
  })

  uno.addEventListener('mousedown', function() {
    uno.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  uno.addEventListener('mouseup', function() {
    uno.setAttribute("style", "transform:scale(1,1)");
  })
  dos.addEventListener('mousedown', function() {
    dos.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  dos.addEventListener('mouseup', function() {
    dos.setAttribute("style", "transform:scale(1,1)");
  })
  tres.addEventListener('mousedown', function() {
    tres.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  tres.addEventListener('mouseup', function() {
    tres.setAttribute("style", "transform:scale(1,1)");
  })
  cuatro.addEventListener('mousedown', function() {
    cuatro.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  cuatro.addEventListener('mouseup', function() {
    cuatro.setAttribute("style", "transform:scale(1,1)");
  })
  cinco.addEventListener('mousedown', function() {
    cinco.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  cinco.addEventListener('mouseup', function() {
    cinco.setAttribute("style", "transform:scale(1,1)");
  })
  seis.addEventListener('mousedown', function() {
    seis.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  seis.addEventListener('mouseup', function() {
    seis.setAttribute("style", "transform:scale(1,1)");
  })
  siete.addEventListener('mousedown', function() {
    siete.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  siete.addEventListener('mouseup', function() {
    siete.setAttribute("style", "transform:scale(1,1)");
  })
  ocho.addEventListener('mousedown', function() {
    ocho.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  ocho.addEventListener('mouseup', function() {
    ocho.setAttribute("style", "transform:scale(1,1)");
  })
  nueve.addEventListener('mousedown', function() {
    nueve.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  nueve.addEventListener('mouseup', function() {
    nueve.setAttribute("style", "transform:scale(1,1)");
  })
  cero.addEventListener('mousedown', function() {
    cero.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  cero.addEventListener('mouseup', function() {
    cero.setAttribute("style", "transform:scale(1,1)");
  })

  mas.addEventListener('mousedown', function() {
    mas.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  mas.addEventListener('mouseup', function() {
    mas.setAttribute("style", "transform:scale(1,1)");
  })

  menos.addEventListener('mousedown', function() {
    menos.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  menos.addEventListener('mouseup', function() {
    menos.setAttribute("style", "transform:scale(1,1)");
  })

  por.addEventListener('mousedown', function() {
    por.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  por.addEventListener('mouseup', function() {
    por.setAttribute("style", "transform:scale(1,1)");
  })

  dividido.addEventListener('mousedown', function() {
    dividido.setAttribute("style", "transform:scale(0.90,0.90)");
  })
  dividido.addEventListener('mouseup', function() {
    dividido.setAttribute("style", "transform:scale(1,1)");
  })



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
    if(display.textContent == 0){
        cleardisplay();
          display.textContent = display.textContent  + "0";
    }else{
      if(display.innerHTML.length==8){

      }else{
          display.textContent = display.textContent  + "0";
      }
    }
  }
  punto.onclick = function(e){
    display.textContent = display.textContent  + ".";
  }

  sign.onclick = function(e){
    display.textContent = display.textContent *(-1);
  }

  on.onclick = function(e){
      resetear();
      display.textContent = display.textContent  + "0";
  }

  // OPERACIONES

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
  // LIMPIEZA DE PANTALLA
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
        result = result.toFixed(6);
        break;
    }
    display.textContent = result;
  }
}
