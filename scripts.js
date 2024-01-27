document.addEventListener("DOMContentLoaded", function() {
    function eliminarElementoEnPantallaPequena() {
        var elemento = document.getElementById('telefono');
        if (elemento && window.innerWidth <= 767) {
          elemento.parentNode.removeChild(elemento);
        }
      }
    
      // Llamada inicial para comprobar el tamaño de la pantalla
      eliminarElementoEnPantallaPequena();
    
      // Añade un listener para volver a comprobar cuando se redimensiona la ventana
      window.addEventListener('resize', eliminarElementoEnPantallaPequena);
});