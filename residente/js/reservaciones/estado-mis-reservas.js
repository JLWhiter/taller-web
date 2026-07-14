// Estado compartido: si el filtro "Mis reservas" está activo.
// Cuando está activo, el calendario y el panel de detalle solo
// muestran las reservas del residente actual.

export const RESIDENTE_ACTUAL = "Emanuel Espinoza";

let soloMisReservas = false;
const suscriptores = [];

export function obtenerSoloMisReservas() {
    return soloMisReservas;
}

export function alternarMisReservas() {
    soloMisReservas = !soloMisReservas;
    suscriptores.forEach((callback) => callback(soloMisReservas));
    return soloMisReservas;
}

export function esMiReserva(reserva) {
    return reserva.residente === RESIDENTE_ACTUAL;
}

export function alCambiarMisReservas(callback) {
    suscriptores.push(callback);
}
