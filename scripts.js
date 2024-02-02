document.addEventListener("DOMContentLoaded", function() {
  //////////////////////////////////
  //Funciones del Header y Navbar//
  ////////////////////////////////

  function ocultarElementosEnPantallaPequena() {
    let elementoLupa = document.getElementById('Lupa');
    if (elementoLupa) {
      elementoLupa.style.display = (window.innerWidth <= 767) ? 'none' : '';
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
  
  //////////////////////////////
  //Funciones caracteristicas//
  ////////////////////////////

  function ocultarBotonoesEnPantallaGrande() {
    let botones = document.querySelectorAll('.scroll-btn');
    if (botones) {
      botones.forEach(boton => {
        boton.style.display = (window.innerWidth > 767) ? 'none' : '';
      });
    }
  }
  
  ocultarBotonoesEnPantallaGrande();
  window.addEventListener('resize', ocultarBotonoesEnPantallaGrande);

  ocultarBotonoesEnPantallaGrande();
  window.addEventListener('resize', ocultarBotonoesEnPantallaGrande);
  
  const slider = document.querySelector('.slider-container');
  const totalSlides = document.querySelectorAll('.slider-content').length;
  let currentSlide = 0;
  
  function showSlide(index) {
    currentSlide = index;
    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: 'smooth',
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }
  
  // Controlador de desplazamiento automático cada 5 segundos
  setInterval(() => {
    nextSlide();
    if (currentSlide === 0) {
      setTimeout(() => {
        showSlide(currentSlide);
      }, 1000);
    }
  }, 5000);
  
  // Manejadores de eventos para los botones
  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  
  // Inicia el slider al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
  });
  
  /////////////////////////////
  //Funciones del Bento Grid//
  ///////////////////////////

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
    
  /////////////////////////////
  //Funciones del Footer//////
  ///////////////////////////

});
