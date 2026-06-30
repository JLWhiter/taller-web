import { obtenerFechaSeleccionada, seleccionarFecha, alCambiarFecha } from "./estado-fecha.js";
import { obtenerReservasDeFecha, alCambiarReservas } from "./reservas-prueba.js";
import { obtenerClaseColorArea } from "./colores-areas.js";

const NOMBRES_DIA = [
    "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
];

const NOMBRES_MES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function formatearFecha(fecha) {
    const dia = NOMBRES_DIA[fecha.getDay()];
    const numero = fecha.getDate();
    const mes = NOMBRES_MES[fecha.getMonth()];
    const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
    return `${diaCapitalizado} ${numero} de ${mes}`;
}

function calcularDuracion(horaInicio, horaFin) {
    const [horaIni, minIni] = horaInicio.split(":").map(Number);
    const [horaFinNum, minFin] = horaFin.split(":").map(Number);

    const minutosTotales = (horaFinNum * 60 + minFin) - (horaIni * 60 + minIni);
    const horas = Math.floor(minutosTotales / 60);
    const minutos = minutosTotales % 60;

    return `${horas}h ${String(minutos).padStart(2, "0")}m`;
}

function crearTarjetaReserva(reserva) {
    const tarjeta = document.createElement("div");
    tarjeta.className = `tarjeta-reserva ${obtenerClaseColorArea(reserva.area)}`;

    const encabezado = document.createElement("div");
    encabezado.className = "tarjeta-reserva-encabezado";

    const iconoEl = document.createElement("div");
    iconoEl.className = "tarjeta-reserva-icono";
    iconoEl.innerHTML = `<span class="material-symbols-outlined">${reserva.icono}</span>`;

    const infoEl = document.createElement("div");
    infoEl.className = "tarjeta-reserva-info";
    const titulo = reserva.deporte ?? reserva.area;
    infoEl.innerHTML = `
    <span class="tarjeta-reserva-area">${titulo}</span>
    <span class="tarjeta-reserva-residente">${reserva.residente} · ${reserva.unidad}</span>
`;

    encabezado.appendChild(iconoEl);
    encabezado.appendChild(infoEl);

    const horarioEl = document.createElement("div");
    horarioEl.className = "tarjeta-reserva-horario";
    horarioEl.innerHTML = `
        <span class="tarjeta-reserva-rango">${reserva.horaInicio} - ${reserva.horaFin}</span>
        <span class="tarjeta-reserva-duracion">${calcularDuracion(reserva.horaInicio, reserva.horaFin)}</span>
    `;

    const historialEl = document.createElement("div");
    historialEl.className = "tarjeta-reserva-historial";
    reserva.historial.forEach((paso, indice) => {
        const esUltimo = indice === reserva.historial.length - 1;
        const filaEl = document.createElement("div");
        filaEl.className = "tarjeta-reserva-paso";
        if (esUltimo) filaEl.classList.add("tarjeta-reserva-paso-actual");
        filaEl.innerHTML = `
            <span class="tarjeta-reserva-paso-estado"><span class="punto"></span>${paso.estado}</span>
            <span class="tarjeta-reserva-paso-fecha">${paso.fecha}</span>
        `;
        historialEl.appendChild(filaEl);
    });

    tarjeta.appendChild(encabezado);
    tarjeta.appendChild(horarioEl);
    tarjeta.appendChild(historialEl);

    return tarjeta;
}

export function iniciarDetalleReservas() {
    const fechaEl = document.getElementById("detalle-fecha-actual");
    const btnAnterior = document.getElementById("detalle-dia-anterior");
    const btnSiguiente = document.getElementById("detalle-dia-siguiente");
    const listaEl = document.getElementById("detalle-reservas-lista");

    if (!fechaEl || !btnAnterior || !btnSiguiente || !listaEl) return;

    function render() {
        const fechaActual = obtenerFechaSeleccionada();
        fechaEl.textContent = formatearFecha(fechaActual);

        const anio = fechaActual.getFullYear();
        const mes = fechaActual.getMonth();
        const dia = fechaActual.getDate();
        const reservasDelDia = obtenerReservasDeFecha(anio, mes, dia);

        listaEl.innerHTML = "";

        if (reservasDelDia.length === 0) {
            const vacioEl = document.createElement("p");
            vacioEl.className = "detalle-reservas-vacio";
            vacioEl.textContent = "No hay reservas aprobadas para este día.";
            listaEl.appendChild(vacioEl);
            return;
        }

        reservasDelDia.forEach((reserva) => {
            listaEl.appendChild(crearTarjetaReserva(reserva));
        });
    }

    btnAnterior.addEventListener("click", () => {
        const fecha = new Date(obtenerFechaSeleccionada());
        fecha.setDate(fecha.getDate() - 1);
        seleccionarFecha(fecha);
    });

    btnSiguiente.addEventListener("click", () => {
        const fecha = new Date(obtenerFechaSeleccionada());
        fecha.setDate(fecha.getDate() + 1);
        seleccionarFecha(fecha);
    });

    alCambiarFecha(render);
    alCambiarReservas(render);

    render();
}