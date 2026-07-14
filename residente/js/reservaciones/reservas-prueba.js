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
        horaInicio: "07:00",
        horaFin: "03:00",
        area: "Casa club",
        zona: "Zona Norte",
        sillas: true,
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
        fecha: "2026-06-18",
        horaInicio: "13:00",
        horaFin: "14:00",
        area: "Piscina",
        deporte: null,
        icono: "pool",
        residente: "Sofía Vargas",
        unidad: "BL03 - 407",
        historial: [
            { estado: "Reservado", fecha: "11 jun, 08:00" },
            { estado: "Aprobado", fecha: "11 jun, 08:30" },
        ],
    },
    {
        fecha: "2026-06-18",
        horaInicio: "07:30",
        horaFin: "08:30",
        area: "Gimnasio",
        deporte: null,
        icono: "fitness_center",
        residente: "Diego Herrera",
        unidad: "BL05 - 108",
        historial: [
            { estado: "Reservado", fecha: "09 jun, 07:00" },
            { estado: "Aprobado", fecha: "09 jun, 07:20" },
        ],
    },
    {
        fecha: "2026-06-22",
        horaInicio: "15:00",
        horaFin: "17:00",
        area: "Zona de parrillas",
        zona: "Zona Sur",
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

    return reservasPrueba
        .filter((reserva) => reserva.fecha === fechaTexto)
        .sort((a, b) => aMinutos(a.horaInicio) - aMinutos(b.horaInicio));
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

// Convierte un rango a minutos; si la hora fin es menor o igual que la de
// inicio, se asume que el rango cruza la medianoche (ej. Casa club: 07:00 a 03:00).
function aRangoMinutos(horaInicio, horaFin) {
    const inicio = aMinutos(horaInicio);
    let fin = aMinutos(horaFin);
    if (fin <= inicio) fin += 24 * 60;
    return [inicio, fin];
}

export function hayConflictoHorario(fecha, area, horaInicio, horaFin, zona = null) {
    const [inicioNuevo, finNuevo] = aRangoMinutos(horaInicio, horaFin);

    return reservasPrueba.some((reserva) => {
        if (reserva.fecha !== fecha || reserva.area !== area) return false;
        if (zona !== null && reserva.zona !== zona) return false;

        const [inicioExistente, finExistente] = aRangoMinutos(reserva.horaInicio, reserva.horaFin);

        return inicioNuevo < finExistente && inicioExistente < finNuevo;
    });
}