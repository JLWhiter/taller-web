/* ══════════════════════════════════════════════
   VILLA SANTA CLARA — main.js
   Controla:
   · Navegación entre paneles fullscreen
   · Puntos indicadores laterales
   · Marcado del enlace activo en la barra
   · Animaciones reveal al entrar cada panel
══════════════════════════════════════════════ */

(function () {
  'use strict';

  var TOTAL   = 5;                             // número de paneles
  var current = 0;                             // panel visible ahora
  var locked  = false;                         // evita saltos dobles

  var scroller  = document.getElementById('main');
  var navBtns   = document.querySelectorAll('.nav-btn');
  var dots      = document.querySelectorAll('.dot');
  var panels    = document.querySelectorAll('.panel');

  /* ══════════════════════════════════════════
     1. IR A UN PANEL ESPECÍFICO
  ══════════════════════════════════════════ */
  function goTo(index) {
    if (index < 0 || index >= TOTAL) return;

    current = index;
    var panel = document.getElementById('panel-' + index);
    if (!panel) return;

    /* Desplaza el contenedor al panel */
    scroller.scrollTo({ top: panel.offsetTop, behavior: 'smooth' });

    updateUI(index);
    revealPanel(index);
  }

  /* Función global — usada desde el botón del hero en el HTML */
  window.goTo = goTo;

  /* ══════════════════════════════════════════
     2. ACTUALIZAR NAV Y DOTS
  ══════════════════════════════════════════ */
  function updateUI(index) {
    navBtns.forEach(function (btn) {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-index')) === index);
    });
    dots.forEach(function (dot) {
      dot.classList.toggle('active', parseInt(dot.getAttribute('data-index')) === index);
    });
  }

  /* ══════════════════════════════════════════
     3. REVELAR ELEMENTOS DEL PANEL VISIBLE
  ══════════════════════════════════════════ */
  function revealPanel(index) {
    var panel = document.getElementById('panel-' + index);
    if (!panel) return;
    panel.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ══════════════════════════════════════════
     4. DETECTAR PANEL VISIBLE AL HACER SCROLL
        (el usuario baja/sube con el mouse)
  ══════════════════════════════════════════ */
  function onScroll() {
    if (locked) return;

    var containerH = scroller.clientHeight;
    var scrollTop  = scroller.scrollTop;

    /* El panel activo es el que más ocupa la pantalla */
    var closest = 0;
    var minDist = Infinity;

    panels.forEach(function (panel, i) {
      var dist = Math.abs(panel.offsetTop - scrollTop);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    if (closest !== current) {
      current = closest;
      updateUI(current);
      revealPanel(current);
    }
  }

  scroller.addEventListener('scroll', onScroll, { passive: true });

  /* 
     5. CLIC EN BOTONES DE LA BARRA DE NAV */
  navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var index = parseInt(btn.getAttribute('data-index'));
      goTo(index);
    });
  });

  /*
     6. CLIC EN LOS PUNTOS INDICADORES*/
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = parseInt(dot.getAttribute('data-index'));
      goTo(index);
    });
  });

  /*
     7. TECLAS ↑ ↓ PARA NAVEGAR */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      goTo(current + 1);
    }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goTo(current - 1);
    }
  });

  /*  8. INICIALIZACIÓN */
  document.addEventListener('DOMContentLoaded', function () {
    updateUI(0);
    revealPanel(0);   /* revela el primer panel al cargar */
  });

})();