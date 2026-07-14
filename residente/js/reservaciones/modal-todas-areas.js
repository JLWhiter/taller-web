import { CATALOGO_AREAS } from "./catalogo-areas.js";
import { obtenerAreasFijadas, fijarAreas } from "./areas-fijadas.js";
import { abrirModalReserva } from "./modal-reserva.js";

const MAX_FIJADAS = 3;

export function iniciarModalTodasAreas() {
    const btnAbrir = document.getElementById("btn-ver-todos-areas");
    const overlay = document.getElementById("modal-areas-overlay");
    const btnCerrar = document.getElementById("modal-areas-cerrar");
    const buscador = document.getElementById("buscador-todas-areas");
    const lista = document.getElementById("modal-areas-lista");
    const contador = document.getElementById("modal-areas-contador");
    const btnGuardar = document.getElementById("modal-areas-guardar");

    if (!btnAbrir || !overlay || !lista || !buscador || !contador || !btnGuardar || !btnCerrar) return;

    let seleccionPendiente = [];

    function actualizarContador() {
        contador.textContent = `${seleccionPendiente.length} de ${MAX_FIJADAS} fijadas`;
        btnGuardar.disabled = seleccionPendiente.length !== MAX_FIJADAS;
    }

    function actualizarCheckboxes() {
        lista.querySelectorAll('input[type="checkbox"]').forEach((casilla) => {
            if (casilla.dataset.disponible === "false") {
                casilla.checked = false;
                casilla.disabled = true;
                return;
            }
            const marcada = seleccionPendiente.includes(casilla.dataset.area);
            casilla.checked = marcada;
            casilla.disabled = !marcada && seleccionPendiente.length >= MAX_FIJADAS;
        });
    }

    function cerrarModal() {
        overlay.classList.remove("visible");
    }

    function renderLista() {
        lista.innerHTML = "";

        CATALOGO_AREAS.forEach((area) => {
            const fila = document.createElement("div");
            fila.className = "area-fila";
            if (!area.disponible) fila.classList.add("no-disponible");
            fila.dataset.nombre = area.nombre.toLowerCase();
            fila.dataset.area = area.id;

            fila.innerHTML = `
                <div class="area-fila-info">
                    <span class="material-symbols-outlined">${area.icono}</span>
                    <span>${area.nombre}</span>
                </div>
                <div class="area-fila-acciones">
                    <button class="area-fila-reservar" type="button" ${area.disponible ? "" : "disabled"}>
                        ${area.disponible ? "Reservar" : "Próximamente"}
                    </button>
                    <label class="area-fila-check" title="${area.disponible ? "Fijar en el inicio" : "Aún no disponible"}">
                        <input type="checkbox" data-area="${area.id}" data-disponible="${area.disponible}">
                        <span class="area-fila-check-caja"></span>
                    </label>
                </div>
            `;

            if (area.disponible) {
                fila.querySelector(".area-fila-reservar").addEventListener("click", () => {
                    cerrarModal();
                    abrirModalReserva(area.id);
                });
            }

            fila.querySelector('input[type="checkbox"]').addEventListener("change", (evento) => {
                if (evento.target.checked) {
                    seleccionPendiente.push(area.id);
                } else {
                    seleccionPendiente = seleccionPendiente.filter((id) => id !== area.id);
                }
                actualizarContador();
                actualizarCheckboxes();
            });

            lista.appendChild(fila);
        });
    }

    function abrirModal() {
        seleccionPendiente = [...obtenerAreasFijadas()];
        buscador.value = "";
        renderLista();
        actualizarCheckboxes();
        actualizarContador();
        overlay.classList.add("visible");
    }

    btnAbrir.addEventListener("click", abrirModal);
    btnCerrar.addEventListener("click", cerrarModal);

    overlay.addEventListener("click", (evento) => {
        if (evento.target === overlay) cerrarModal();
    });

    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLowerCase();
        lista.querySelectorAll(".area-fila").forEach((fila) => {
            fila.style.display = fila.dataset.nombre.includes(texto) ? "flex" : "none";
        });
    });

    btnGuardar.addEventListener("click", () => {
        fijarAreas(seleccionPendiente);
        cerrarModal();
    });
}
