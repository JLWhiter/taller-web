import { obtenerFechaSeleccionada, seleccionarFecha, alCambiarFecha } from "./estado-fecha.js";
import { obtenerReservasDeFecha, alCambiarReservas } from "./reservas-prueba.js";
import { obtenerClaseColorArea } from "./colores-areas.js";
import { obtenerFiltroActivo, alCambiarFiltro } from "./estado-filtro.js";

const LIMITE_RESERVAS_VISIBLES = 5;

const NOMBRES_MES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

let fechaActual = new Date();

export function iniciarCalendario() {
    const tituloEl = document.getElementById("titulo-mes-actual");
    const gridEl = document.getElementById("calendario-grid");
    const btnAnterior = document.getElementById("mes-anterior");
    const btnSiguiente = document.getElementById("mes-siguiente");
    const btnHoy = document.getElementById("boton-hoy");

    if (!tituloEl || !gridEl || !btnAnterior || !btnSiguiente || !btnHoy) return;

    function render() {
        const anio = fechaActual.getFullYear();
        const mes = fechaActual.getMonth();

        tituloEl.textContent = `${NOMBRES_MES[mes]} ${anio}`;

        const primerDiaSemana = new Date(anio, mes, 1).getDay();
        const diasEnMes = new Date(anio, mes + 1, 0).getDate();
        const diasMesAnterior = new Date(anio, mes, 0).getDate();

        gridEl.innerHTML = "";

        const hoy = new Date();
        const seleccionada = obtenerFechaSeleccionada();

        for (let i = primerDiaSemana; i > 0; i--) {
            const celda = document.createElement("div");
            celda.className = "dia-celda dia-otro-mes";
            celda.textContent = diasMesAnterior - i + 1;
            gridEl.appendChild(celda);
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {
            const celda = document.createElement("div");
            celda.className = "dia-celda";

            const numeroEl = document.createElement("span");
            numeroEl.className = "dia-numero";
            numeroEl.textContent = dia;
            celda.appendChild(numeroEl);

            const reservasDelDia = obtenerReservasDeFecha(anio, mes, dia);
            const filtro = obtenerFiltroActivo();
            const reservasFiltradas = filtro
                ? reservasDelDia.filter((r) => r.area === filtro)
                : reservasDelDia;

            if (reservasFiltradas.length > 0) {
                const eventosEl = document.createElement("div");
                eventosEl.className = "dia-eventos";

                const reservasVisibles = reservasFiltradas.slice(0, LIMITE_RESERVAS_VISIBLES);
                const restantes = reservasFiltradas.length - reservasVisibles.length;

                reservasVisibles.forEach((reserva) => {
                    const eventoEl = document.createElement("div");
                    eventoEl.className = `evento-reserva ${obtenerClaseColorArea(reserva.area)}`;
                    eventoEl.textContent = `${reserva.horaInicio} - ${reserva.horaFin}`;
                    eventosEl.appendChild(eventoEl);
                });

                if (restantes > 0) {
                    const masEl = document.createElement("div");
                    masEl.className = "evento-mas";
                    masEl.textContent = `+${restantes} más`;
                    eventosEl.appendChild(masEl);
                }

                celda.appendChild(eventosEl);
            }

            const esHoy =
                dia === hoy.getDate() &&
                mes === hoy.getMonth() &&
                anio === hoy.getFullYear();

            const esSeleccionado =
                dia === seleccionada.getDate() &&
                mes === seleccionada.getMonth() &&
                anio === seleccionada.getFullYear();

            if (esHoy) celda.classList.add("dia-hoy");
            if (esSeleccionado) celda.classList.add("dia-seleccionado");

            celda.addEventListener("click", () => {
                seleccionarFecha(new Date(anio, mes, dia));
            });

            gridEl.appendChild(celda);
        }

        const totalCeldas = primerDiaSemana + diasEnMes;
        const diasRelleno = (7 - (totalCeldas % 7)) % 7;
        for (let dia = 1; dia <= diasRelleno; dia++) {
            const celda = document.createElement("div");
            celda.className = "dia-celda dia-otro-mes";
            celda.textContent = dia;
            gridEl.appendChild(celda);
        }
    }

    btnAnterior.addEventListener("click", () => {
        fechaActual.setMonth(fechaActual.getMonth() - 1);
        render();
    });

    btnSiguiente.addEventListener("click", () => {
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        render();
    });

    btnHoy.addEventListener("click", () => {
        fechaActual = new Date();
        seleccionarFecha(new Date());
    });

    alCambiarFecha((nuevaFecha) => {
        const mismoMes =
            nuevaFecha.getMonth() === fechaActual.getMonth() &&
            nuevaFecha.getFullYear() === fechaActual.getFullYear();

        if (!mismoMes) {
            fechaActual = new Date(nuevaFecha.getFullYear(), nuevaFecha.getMonth(), 1);
        }

        render();
    });

    alCambiarFiltro(() => render());
    alCambiarReservas(() => render());

    render();
}