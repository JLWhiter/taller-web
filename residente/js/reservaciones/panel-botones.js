import { CATALOGO_AREAS, obtenerArea } from "./catalogo-areas.js";
import { obtenerAreasFijadas, alCambiarAreasFijadas } from "./areas-fijadas.js";
import { abrirModalReserva } from "./modal-reserva.js";

export function iniciarPanelBotones() {
    const contenedor = document.querySelector(".botones");
    const buscador = document.getElementById("buscador-areas");
    const mensajeVacio = document.getElementById("sin-resultados-botones");
    if (!contenedor) return;

    function crearBoton(area) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.dataset.area = area.id;

        if (!area.disponible) {
            boton.disabled = true;
            boton.classList.add("proximamente");
        }

        boton.innerHTML = `
            <span class="material-symbols-outlined">${area.icono}</span>
            ${area.nombre}
            ${!area.disponible ? '<span class="etiqueta-proximamente">Próximamente</span>' : ""}
        `;

        if (area.disponible) {
            boton.addEventListener("click", () => abrirModalReserva(area.id));
        }

        return boton;
    }

    function areasAMostrar() {
        const termino = buscador ? buscador.value.trim().toLowerCase() : "";

        if (!termino) {
            return obtenerAreasFijadas()
                .map((id) => obtenerArea(id))
                .filter(Boolean);
        }

        // con texto de búsqueda, se busca entre TODAS las áreas comunes
        // (incluidas las que no están fijadas en el inicio, ej. Piscina, Gimnasio...)
        return CATALOGO_AREAS.filter((area) => area.nombre.toLowerCase().includes(termino));
    }

    function render() {
        const areas = areasAMostrar();

        contenedor.innerHTML = "";
        areas.forEach((area) => contenedor.appendChild(crearBoton(area)));

        if (mensajeVacio) {
            mensajeVacio.style.display = areas.length === 0 ? "block" : "none";
        }
    }

    if (buscador) {
        buscador.addEventListener("input", render);
    }

    alCambiarAreasFijadas(render);
    render();
}
