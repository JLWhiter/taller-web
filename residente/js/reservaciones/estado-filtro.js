// Estado compartido: qué área está siendo filtrada actualmente.
// null = sin filtro (se muestran todas las áreas).
// string = nombre del área filtrada (ej. "Loza deportiva").

let filtroActivo = null;
const suscriptores = [];

export function obtenerFiltroActivo() {
    return filtroActivo;
}

export function seleccionarFiltro(area) {
    filtroActivo = area;
    suscriptores.forEach((callback) => callback(filtroActivo));
}

export function alCambiarFiltro(callback) {
    suscriptores.push(callback);
}