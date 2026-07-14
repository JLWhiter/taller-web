// VILLA SANTA CLARA - main.js

// Esperamos a que el HTML cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  activarNavbar();
  activarAnimaciones();
  activarModal();
  activarContadores();
});

// NAVBAR: cambia de estilo al bajar la pagina

function activarNavbar() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.classList.add("activa");
    } else {
      navbar.classList.remove("activa");
    }
  });
}


// ANIMACIONES: los elementos aparecen al entrar en pantalla mientras haces scroll
function activarAnimaciones() {
  var elementos = document.querySelectorAll(".animar");

  // IntersectionObserver detecta cuando un elemento es visible
  var observador = new IntersectionObserver(function (entradas) {
    for (var i = 0; i < entradas.length; i++) {
      if (entradas[i].isIntersecting) {
        entradas[i].target.classList.add("visible");
        observador.unobserve(entradas[i].target); // deja de observarlo
      }
    }
  }, { threshold: 0.15 });

  for (var i = 0; i < elementos.length; i++) {
    observador.observe(elementos[i]);
  }
}


// MODAL: abrir y cerrar el login

function activarModal() {
  var modalFondo = document.getElementById("modal-fondo");
  var btnAbrir = document.getElementById("btn-abrir-login");
  var btnAbrirCierre = document.getElementById("btn-abrir-login-cierre");
  var btnCerrar = document.getElementById("btn-cerrar-modal");
  var formLogin = document.getElementById("form-login");

  function abrirModal() {
    modalFondo.classList.add("activo");
    document.body.classList.add("sin-scroll");
  }

  function cerrarModal() {
    modalFondo.classList.remove("activo");
    document.body.classList.remove("sin-scroll");
  }

  // Eventos de los botones
  btnAbrir.addEventListener("click", abrirModal);
  btnAbrirCierre.addEventListener("click", abrirModal);
  btnCerrar.addEventListener("click", cerrarModal);

  // Cierra si el usuario hace clic fuera del modal
  modalFondo.addEventListener("click", function (evento) {
    if (evento.target === modalFondo) {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      cerrarModal();
    }
  });

  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var usuario = formLogin.querySelector("input[name='usuario']").value;
    var contrasena = formLogin.querySelector("input[name='contrasena']").value;

    // Credenciales del administrador
    if (usuario === "admin@gmail.com" && contrasena === "admin123") {
      iniciarSesion("administrador");
      window.location.href = "../administrador/index.html";
      
      // Credenciales del usuario residente
    } else if (usuario === "usuario@gmail.com" && contrasena === "usuario123") {
      iniciarSesion("residente");
      window.location.href = "../residente/index.html";

    } else {
      alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });
}


// Animan los números de la sección Sobre el condominio" al entrar en pantalla
function activarContadores() {
  var contadores = document.querySelectorAll(".contador");

  var observador = new IntersectionObserver(function (entradas) {
    for (var i = 0; i < entradas.length; i++) {
      if (entradas[i].isIntersecting) {
        var span = entradas[i].target;
        var valorFin = parseInt(span.getAttribute("data-hasta"));
        animarNumero(span, valorFin);
        observador.unobserve(span);
      }
    }
  }, { threshold: 0.4 });

  for (var i = 0; i < contadores.length; i++) {
    observador.observe(contadores[i]);
  }
}

// Función que anima un número de 0 hasta "fin" en 1.2 segundos
function animarNumero(elemento, fin) {
  var actual = 0;

  var intervalo = setInterval(function () {
    actual = actual + 1;
    elemento.textContent = actual;

    if (actual >= fin) {
      clearInterval(intervalo);
    }
  }, 1200 / fin);
}