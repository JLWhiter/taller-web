const CLASE_OSCURO = "tema-oscuro";
const CLAVE_STORAGE = "vsc-tema";

function actualizarIconos(esOscuro) {
    const iconoHeader = document.querySelector(".toggle-tema .material-symbols-outlined");
    if (iconoHeader) iconoHeader.textContent = esOscuro ? "light_mode" : "dark_mode";

    const iconoConfig = document.getElementById("icono-tema");
    if (iconoConfig) iconoConfig.textContent = esOscuro ? "light_mode" : "dark_mode";

    const switchConfig = document.getElementById("switch-tema");
    if (switchConfig) switchConfig.checked = esOscuro;
}

function aplicarTema(esOscuro) {
    document.body.classList.toggle(CLASE_OSCURO, esOscuro);
    localStorage.setItem(CLAVE_STORAGE, esOscuro ? "oscuro" : "claro");
    actualizarIconos(esOscuro);
}

function alternarTema() {
    aplicarTema(!document.body.classList.contains(CLASE_OSCURO));
}

export function iniciarTema() {
    aplicarTema(localStorage.getItem(CLAVE_STORAGE) === "oscuro");
    document.querySelector(".toggle-tema").addEventListener("click", alternarTema);
}

export function iniciarTemaEnConfiguracion() {
    const switchConfig = document.getElementById("switch-tema");
    if (!switchConfig) return;
    switchConfig.checked = document.body.classList.contains(CLASE_OSCURO);
    switchConfig.addEventListener("change", alternarTema);
}
