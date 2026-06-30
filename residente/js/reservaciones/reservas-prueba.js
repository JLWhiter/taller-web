export const reservasPrueba = [
    {
        fecha: "2026-06-18",
        horaInicio: "09:00",
        horaFin: "10:00",
        area: "Loza deportiva",
        deporte: "Fútbol",
        icono: "sports_soccer",
        residente: "Emanuel Espinoza",
        unidad: "BL04 - 201",
        historial: [
            { estado: "Reservado", fecha: "12 jun, 14:30" },
            { estado: "Aprobado", fecha: "12 jun, 15:10" },
        ],
    },
    {
        fecha: "2026-06-18",
        horaInicio: "10:00",
        horaFin: "11:00",
        area: "Casa club",
        deporte: null,
        icono: "home_work",
        residente: "Mariana López",
        unidad: "BL02 - 105",
        historial: [
            { estado: "Reservado", fecha: "10 jun, 09:00" },
            { estado: "Aprobado", fecha: "10 jun, 09:45" },
        ],
    },
    {
        fecha: "2026-06-22",
        horaInicio: "15:00",
        horaFin: "17:00",
        area: "Zona de parrillas",
        deporte: null,
        icono: "outdoor_grill",
        residente: "Carlos Ramírez",
        unidad: "BL01 - 302",
        historial: [
            { estado: "Reservado", fecha: "20 jun, 18:20" },
            { estado: "Aprobado", fecha: "21 jun, 08:15" },
        ],
    },
];

const suscriptores = [];

export function obtenerReservasDeFecha(anio, mes, dia) {
    const mesTexto = String(mes + 1).padStart(2, "0");
    const diaTexto = String(dia).padStart(2, "0");
    const fechaTexto = `${anio}-${mesTexto}-${diaTexto}`;

    return reservasPrueba.filter((reserva) => reserva.fecha === fechaTexto);
}

export function agregarReserva(nuevaReserva) {
    reservasPrueba.push(nuevaReserva);
    suscriptores.forEach((callback) => callback());
}

export function alCambiarReservas(callback) {
    suscriptores.push(callback);
}

function aMinutos(horaTexto) {
    const [h, m] = horaTexto.split(":").map(Number);
    return h * 60 + m;
}

export function hayConflictoHorario(fecha, area, horaInicio, horaFin) {
    const inicioNuevo = aMinutos(horaInicio);
    const finNuevo = aMinutos(horaFin);

    return reservasPrueba.some((reserva) => {
        if (reserva.fecha !== fecha || reserva.area !== area) return false;

        const inicioExistente = aMinutos(reserva.horaInicio);
        const finExistente = aMinutos(reserva.horaFin);

        return inicioNuevo < finExistente && inicioExistente < finNuevo;
    });
}