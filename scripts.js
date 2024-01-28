document.addEventListener("DOMContentLoaded", function() {

  function ocultarElementosEnPantallaPequena() {
    let elementoTelefono = document.getElementById('telefono');
    if (elementoTelefono) {
      elementoTelefono.style.display = (window.innerWidth <= 767) ? 'none' : '';
  }
}

  ocultarElementosEnPantallaPequena();
  window.addEventListener('resize', ocultarElementosEnPantallaPequena);

  function ajustarNavbar() {
    let contenedorMovil = document.querySelector('.first-sec-head');
    let navbar = document.querySelector('.navbar');

    // Mueve el navbar al contenedor en dispositivos móviles
    if (window.innerWidth <= 767) {
      contenedorMovil.appendChild(navbar);
    } else {
      // Restaura el navbar a la segunda sección si no es un dispositivo móvil
      let contenedorOriginal = document.querySelector('.second-sec-head');
      contenedorOriginal.appendChild(navbar);
    }
  }

  function ajustarBotonesEnPantallaPequena() {
    const botonesCompra = document.querySelectorAll('.hiddenbtn');
  
    if (window.innerWidth <= 767) {
      botonesCompra.forEach((boton) => {
        boton.style.display = 'none';
      });
    } else {
      botonesCompra.forEach((boton) => {
        boton.style.display = 'block';
      });
    }
  }
  
  // Llamada inicial para comprobar el tamaño de la pantalla
  ajustarBotonesEnPantallaPequena();
  
  // Añade un listener para volver a comprobar cuando se redimensiona la ventana
  window.addEventListener('resize', ajustarBotonesEnPantallaPequena);

  // Llama a la función inicialmente y escucha cambios de tamaño de la ventana
  ajustarNavbar();
  window.addEventListener('resize', ajustarNavbar);

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

});
