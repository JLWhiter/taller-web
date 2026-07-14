import { iniciarTemaEnConfiguracion } from "./tema.js";
import { notificarFotoActualizada } from "./notificaciones.js";
import { guardarFotoPerfil, obtenerFotoPerfilGuardada, eliminarFotoPerfil } from "./foto-perfil.js";

const TIPOS_IMAGEN_PERMITIDOS = ["image/jpeg", "image/png", "image/webp"];
const TAMANO_MAXIMO_MB = 2;

function mostrarMensaje(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = "mensaje-formulario" + (tipo ? ` ${tipo}` : "");
}

function formatearTamano(bytes) {
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function iniciarFormularioFoto() {
    const formulario = document.getElementById("formulario-foto");
    const inputArchivo = document.getElementById("input-archivo-foto");
    const btnSeleccionar = document.getElementById("btn-seleccionar-foto");
    const btnGuardar = document.getElementById("btn-guardar-foto");
    const btnEliminar = document.getElementById("btn-eliminar-foto");
    const previsualizacion = document.getElementById("previsualizacion-foto");
    const mensaje = document.getElementById("mensaje-foto");
    if (!formulario || !inputArchivo || !btnSeleccionar || !btnGuardar || !btnEliminar || !previsualizacion || !mensaje) return;

    formulario.addEventListener("submit", (evento) => evento.preventDefault());

    let dataUrlPendiente = null;

    function actualizarBotonEliminar() {
        btnEliminar.disabled = !obtenerFotoPerfilGuardada() && !dataUrlPendiente;
    }

    const fotoGuardada = obtenerFotoPerfilGuardada();
    if (fotoGuardada) {
        const img = document.createElement("img");
        img.src = fotoGuardada;
        previsualizacion.appendChild(img);
    }
    actualizarBotonEliminar();

    btnSeleccionar.addEventListener("click", () => inputArchivo.click());

    inputArchivo.addEventListener("change", () => {
        const archivo = inputArchivo.files[0];
        previsualizacion.innerHTML = "";
        btnGuardar.disabled = true;
        dataUrlPendiente = null;
        actualizarBotonEliminar();

        if (!archivo) return;

        if (!TIPOS_IMAGEN_PERMITIDOS.includes(archivo.type)) {
            mostrarMensaje(mensaje, "Formato no permitido. Usa JPG, PNG o WEBP.", "error");
            return;
        }

        if (archivo.size > TAMANO_MAXIMO_MB * 1024 * 1024) {
            mostrarMensaje(
                mensaje,
                `La imagen pesa ${formatearTamano(archivo.size)}, el máximo permitido es ${TAMANO_MAXIMO_MB} MB.`,
                "error"
            );
            return;
        }

        const lector = new FileReader();
        lector.onload = () => {
            dataUrlPendiente = lector.result;
            const img = document.createElement("img");
            img.src = lector.result;
            previsualizacion.appendChild(img);
            actualizarBotonEliminar();
        };
        lector.readAsDataURL(archivo);

        mostrarMensaje(mensaje, "Imagen lista para guardar.", "exito");
        btnGuardar.disabled = false;
    });

    btnGuardar.addEventListener("click", () => {
        if (dataUrlPendiente) guardarFotoPerfil(dataUrlPendiente);
        mostrarMensaje(mensaje, "Foto de perfil actualizada ✔", "exito");
        btnGuardar.disabled = true;
        actualizarBotonEliminar();
        notificarFotoActualizada();
    });

    btnEliminar.addEventListener("click", () => {
        eliminarFotoPerfil();
        dataUrlPendiente = null;
        inputArchivo.value = "";
        previsualizacion.innerHTML = "";
        btnGuardar.disabled = true;
        mostrarMensaje(mensaje, "Foto de perfil eliminada.", "exito");
        actualizarBotonEliminar();
    });
}

export function iniciarValidacionConfig() {
    iniciarFormularioFoto();
    iniciarTemaEnConfiguracion();
}
