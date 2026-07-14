import { obtenerFiltroActivo, seleccionarFiltro, alCambiarFiltro } from "./estado-filtro.js";

const AREAS_FILTRABLES = [
    { area: "Loza deportiva", icono: "sports_soccer" },
    { area: "Casa club", icono: "home_work" },
    { area: "Zona de parrillas", icono: "outdoor_grill" },
];

export function iniciarFiltro() {
    const btnFiltro = document.getElementById("boton-filtro");
    const dropdown = document.getElementById("filtro-dropdown");

    if (!btnFiltro || !dropdown) return;

    function crearOpcion(area, icono, nombreMostrado, esTodas = false) {
        const opcion = document.createElement("div");
        opcion.className = "filtro-opcion";
        if (esTodas) opcion.classList.add("filtro-opcion-todas");
        if (obtenerFiltroActivo() === area) opcion.classList.add("seleccionada");

        opcion.innerHTML = `
            <span class="material-symbols-outlined">${icono}</span>
            <span class="filtro-opcion-nombre">${nombreMostrado}</span>
            <span class="filtro-opcion-dot"></span>
        `;

        opcion.addEventListener("click", () => {
            seleccionarFiltro(area);
            cerrarDropdown();
        });

        return opcion;
    }

    function renderDropdown() {
        dropdown.innerHTML = "";
        dropdown.appendChild(crearOpcion(null, "filter_alt_off", "Todas las áreas", true));
        AREAS_FILTRABLES.forEach(({ area, icono }) => {
            dropdown.appendChild(crearOpcion(area, icono, area));
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
