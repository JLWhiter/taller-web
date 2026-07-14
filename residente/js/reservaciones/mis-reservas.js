import { obtenerSoloMisReservas, alternarMisReservas, alCambiarMisReservas } from "./estado-mis-reservas.js";

export function iniciarMisReservas() {
    const btn = document.getElementById("boton-mis-reservas");
    if (!btn) return;

    function render() {
        btn.classList.toggle("activo", obtenerSoloMisReservas());
    }

    btn.addEventListener("click", () => {
        alternarMisReservas();
    });

    alCambiarMisReservas(render);
    render();
}
