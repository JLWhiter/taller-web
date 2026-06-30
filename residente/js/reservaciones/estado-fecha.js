// Estado compartido: qué día está seleccionado actualmente.
// Tanto calendario.js como detalle-reservas.js leen y modifican
// este valor a través de las funciones de abajo, y se suscriben
// para enterarse cuando cambia (sin hablarse directamente entre sí).

let fechaSeleccionada = new Date();
const suscriptores = [];

export function obtenerFechaSeleccionada() {
    return fechaSeleccionada;
}

export function seleccionarFecha(nuevaFecha) {
    fechaSeleccionada = nuevaFecha;
    suscriptores.forEach((callback) => callback(fechaSeleccionada));
}

export function alCambiarFecha(callback) {
    suscriptores.push(callback);
}