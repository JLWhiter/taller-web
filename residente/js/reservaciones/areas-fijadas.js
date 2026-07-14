import { CATALOGO_AREAS } from "./catalogo-areas.js";

const CLAVE_STORAGE = "vsc-areas-fijadas";
const PREDETERMINADAS = ["loza", "casa-club", "parrillas"];

function esListaValida(lista) {
    return (
        Array.isArray(lista) &&
        lista.length === 3 &&
        lista.every((id) => CATALOGO_AREAS.some((area) => area.id === id))
    );
}

function cargarGuardadas() {
    try {
        const guardadas = JSON.parse(localStorage.getItem(CLAVE_STORAGE));
        if (esListaValida(guardadas)) return guardadas;
    } catch {
        // localStorage con datos corruptos: se ignora y se usa la lista predeterminada
    }
    return [...PREDETERMINADAS];
}

let areasFijadas = cargarGuardadas();
const suscriptores = [];

export function obtenerAreasFijadas() {
    return areasFijadas;
}

export function fijarAreas(idsNuevos) {
    areasFijadas = idsNuevos;
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(areasFijadas));
    suscriptores.forEach((callback) => callback(areasFijadas));
}

export function alCambiarAreasFijadas(callback) {
    suscriptores.push(callback);
}
