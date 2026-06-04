/* VILLA SANTA CLARA — main.js
   Controla: navegación entre paneles, puntos indicadores,
   nav activo y animaciones reveal */

(function () {
  'use strict';

  var TOTAL       = 5;   // número de paneles
  var panelActual = 0;   // panel visible ahora
  var bloqueado   = false; // evita saltos dobles

  var contenedor  = document.getElementById('main');
  var botonesNav  = document.querySelectorAll('.nav-btn');
  var puntos      = document.querySelectorAll('.dot');
  var paneles     = document.querySelectorAll('.panel');

  /* IR A UN PANEL ESPECÍFICO */
  function irA(indice) {
    if (indice < 0 || indice >= TOTAL) return;

    panelActual = indice;
    var panel = document.getElementById('panel-' + indice);
    if (!panel) return;

    contenedor.scrollTo({ top: panel.offsetTop, behavior: 'smooth' });
    actualizarUI(indice);
    revelarPanel(indice);
  }

  // Expuesta globalmente para el botón del hero en el HTML
  window.goTo = irA;

  /* ACTUALIZAR NAV Y DOTS */
  function actualizarUI(indice) {
    botonesNav.forEach(function (btn) {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-index')) === indice);
    });
    puntos.forEach(function (punto) {
      punto.classList.toggle('active', parseInt(punto.getAttribute('data-index')) === indice);
    });
  }

  /* REVELAR ELEMENTOS DEL PANEL VISIBLE */
  function revelarPanel(indice) {
    var panel = document.getElementById('panel-' + indice);
    if (!panel) return;
    panel.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* DETECTAR PANEL AL HACER SCROLL */
  function alHacerScroll() {
    if (bloqueado) return;

    var scrollActual = contenedor.scrollTop;
    var masCercano   = 0;
    var menorDist    = Infinity;

    paneles.forEach(function (panel, i) {
      var dist = Math.abs(panel.offsetTop - scrollActual);
      if (dist < menorDist) {
        menorDist  = dist;
        masCercano = i;
      }
    });

    if (masCercano !== panelActual) {
      panelActual = masCercano;
      actualizarUI(panelActual);
      revelarPanel(panelActual);
    }
  }

  contenedor.addEventListener('scroll', alHacerScroll, { passive: true });

  /* CLIC EN BOTONES DE NAV */
  botonesNav.forEach(function (btn) {
    btn.addEventListener('click', function () {
      irA(parseInt(btn.getAttribute('data-index')));
    });
  });

  /* CLIC EN PUNTOS INDICADORES */
  puntos.forEach(function (punto) {
    punto.addEventListener('click', function () {
      irA(parseInt(punto.getAttribute('data-index')));
    });
  });

  /* TECLAS ↑ ↓ PARA NAVEGAR */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      irA(panelActual + 1);
    }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      irA(panelActual - 1);
    }
  });

  /* INICIALIZACIÓN */
  document.addEventListener('DOMContentLoaded', function () {
    actualizarUI(0);
    revelarPanel(0);
  });

})();