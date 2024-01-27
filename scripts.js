document.addEventListener("DOMContentLoaded", function() {

  function ocultarElementoEnPantallaPequena() {
    var elementoTelefono = document.getElementById('telefono');
    if (elementoTelefono) {
      elementoTelefono.style.display = (window.innerWidth <= 767) ? 'none' : '';
    }
  }

  ocultarElementoEnPantallaPequena();
  window.addEventListener('resize', ocultarElementoEnPantallaPequena);

  function ajustarNavbar() {
    var contenedorMovil = document.querySelector('.first-sec-head');
    var navbar = document.querySelector('.navbar');

    // Mueve el navbar al contenedor en dispositivos móviles
    if (window.innerWidth <= 767) {
      contenedorMovil.appendChild(navbar);
    } else {
      // Restaura el navbar a la segunda sección si no es un dispositivo móvil
      var contenedorOriginal = document.querySelector('.second-sec-head');
      contenedorOriginal.appendChild(navbar);
    }
  }

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
