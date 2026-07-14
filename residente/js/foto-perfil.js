const CLAVE_STORAGE = "vsc-foto-perfil";

function pintarAvatares(dataUrl) {
    document.querySelectorAll(".btn-perfil, .menu-perfil-avatar").forEach((el) => {
        if (dataUrl) {
            el.classList.add("tiene-foto");
            el.style.backgroundImage = `url("${dataUrl}")`;
            el.textContent = "";
        } else {
            el.classList.remove("tiene-foto");
            el.style.backgroundImage = "";
            el.textContent = "EM";
        }
    });
}

export function obtenerFotoPerfilGuardada() {
    return localStorage.getItem(CLAVE_STORAGE);
}

export function guardarFotoPerfil(dataUrl) {
    localStorage.setItem(CLAVE_STORAGE, dataUrl);
    pintarAvatares(dataUrl);
}

export function eliminarFotoPerfil() {
    localStorage.removeItem(CLAVE_STORAGE);
    pintarAvatares(null);
}

export function iniciarFotoPerfil() {
    pintarAvatares(obtenerFotoPerfilGuardada());
}
