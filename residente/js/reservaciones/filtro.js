import { reservasPrueba } from "./reservas-prueba.js";
import { obtenerFiltroActivo, seleccionarFiltro, alCambiarFiltro } from "./estado-filtro.js";

const areasDisponibles = [...new Set(reservasPrueba.map((r) => r.area))].map((area) => {
    const reserva = reservasPrueba.find((r) => r.area === area);
    return { area, icono: reserva.icono };
});

export function iniciarFiltro() {
    const btnFiltro = document.getElementById("boton-filtro");
    const dropdown = document.getElementById("filtro-dropdown");

    if (!btnFiltro || !dropdown) return;

    function renderDropdown() {
        dropdown.innerHTML = "";
        areasDisponibles.forEach(({ area, icono }) => {
            const opcion = document.createElement("div");
            opcion.className = "filtro-opcion";
            if (obtenerFiltroActivo() === area) opcion.classList.add("seleccionada");

            opcion.innerHTML = `
                <span class="material-symbols-outlined">${icono}</span>
                <span class="filtro-opcion-nombre">${area}</span>
                <span class="filtro-opcion-dot"></span>
            `;

            opcion.addEventListener("click", () => {
                seleccionarFiltro(area);
                cerrarDropdown();
            });

            dropdown.appendChild(opcion);
        });
    }

    function renderBoton() {
        const filtro = obtenerFiltroActivo();
        if (filtro) {
            btnFiltro.classList.add("activo");
            btnFiltro.querySelector(".filtro-texto").textContent = `Filtro: ${filtro}`;
        } else {
            btnFiltro.classList.remove("activo");
            btnFiltro.querySelector(".filtro-texto").textContent = "Filtro";
        }
    }

    function abrirDropdown() {
        renderDropdown();
        dropdown.classList.add("visible");
    }

    function cerrarDropdown() {
        dropdown.classList.remove("visible");
    }

    function toggleDropdown() {
        dropdown.classList.contains("visible") ? cerrarDropdown() : abrirDropdown();
    }

    btnFiltro.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown();
    });

    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== btnFiltro) {
            cerrarDropdown();
        }
    });

    alCambiarFiltro(renderBoton);

    renderBoton();
}