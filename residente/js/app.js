import { marcarBotonActivo } from "./ui.js";
import { iniciarCalendario } from "./reservaciones/calendario.js";
import { iniciarDetalleReservas } from "./reservaciones/detalle-reservas.js";
import { iniciarFiltro } from "./reservaciones/filtro.js";
import { iniciarMisReservas } from "./reservaciones/mis-reservas.js";
import { iniciarModalReserva } from "./reservaciones/modal-reserva.js";
import { iniciarPanelBotones } from "./reservaciones/panel-botones.js";
import { iniciarModalTodasAreas } from "./reservaciones/modal-todas-areas.js";
import { iniciarNavMovil } from "./nav.js";
import { iniciarTema } from "./tema.js";
import { iniciarPerfil } from "./perfil.js";
import { iniciarNotificaciones } from "./notificaciones.js";
import { iniciarFotoPerfil } from "./foto-perfil.js";
import { iniciarInformacion } from "./informacion.js";
import { iniciarValidacionConfig } from "./validacion.js";

const vista = document.getElementById("vista");
const botones = document.querySelectorAll("[data-seccion]");
let cssActual = null;

async function cargarVista(seccion) {
    try {
        const respuesta = await fetch(`views/${seccion}.html`);
        if (!respuesta.ok) throw new Error(`Vista "${seccion}" no encontrada`);
        vista.innerHTML = await respuesta.text();
    } catch (err) {
        vista.innerHTML = `<p style="padding:2rem; color:red">${err.message}</p>`;
        return;
    }

    if (cssActual) cssActual.remove();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `css/${seccion}.css`;
    document.head.appendChild(link);
    cssActual = link;

    marcarBotonActivo(seccion);

    if (seccion === "reservaciones") {
        iniciarCalendario();
        iniciarDetalleReservas();
        iniciarFiltro();
        iniciarMisReservas();
        iniciarModalReserva();
        iniciarPanelBotones();
        iniciarModalTodasAreas();
    } else if (seccion === "informacion") {
        iniciarInformacion();
    } else if (seccion === "configuracion") {
        iniciarValidacionConfig();
    }
}

botones.forEach((boton) => {
    boton.addEventListener("click", () => cargarVista(boton.dataset.seccion));
});

iniciarNavMovil();
iniciarTema();
iniciarPerfil();
iniciarNotificaciones();
iniciarFotoPerfil();
cargarVista("reservaciones");