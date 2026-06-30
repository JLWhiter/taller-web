import { marcarBotonActivo } from "./ui.js";
import { iniciarCalendario } from "./reservaciones/calendario.js";
import { iniciarDetalleReservas } from "./reservaciones/detalle-reservas.js";
import { iniciarFiltro } from "./reservaciones/filtro.js";
import { iniciarModalReserva } from "./reservaciones/modal-reserva.js";
import { iniciarSidebarMovil } from "./sidebar-movil.js";

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
        iniciarModalReserva();
    }
}

botones.forEach((boton) => {
    boton.addEventListener("click", () => cargarVista(boton.dataset.seccion));
});

iniciarSidebarMovil();
cargarVista("reservaciones");