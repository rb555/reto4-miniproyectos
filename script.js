window.addEventListener('DOMContentLoaded', function() {
    // Obtén la fecha actual y la fecha de Año Nuevo del próximo año
    var ahora = new Date();
    var proximoAnio = ahora.getFullYear() + 1;
    var fechaAnioNuevo = new Date("January 1, " + proximoAnio + " 00:00:00").getTime();
  
    // Actualiza el contador cada segundo
    var contador = setInterval(function() {
      // Obtén la fecha y hora actual
      var ahora = new Date().getTime();
  
      // Calcula la diferencia entre la fecha de Año Nuevo y la fecha actual
      var diferencia = fechaAnioNuevo - ahora;
  
      // Calcula los días, horas, minutos y segundos restantes
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      // Muestra el contador en la página
      var contadorElemento = document.getElementById("contador");
      contadorElemento.innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
  
      // Si la cuenta regresiva ha terminado, muestra un mensaje
      if (diferencia < 0) {
        clearInterval(contador);
        contadorElemento.innerHTML = "¡Feliz Año Nuevo!";
      }
    }, 1000);
  });
  