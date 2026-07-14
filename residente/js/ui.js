const TITULOS_SECCION = {
    reservaciones: "Reservación de áreas comunes",
    informacion: "Información del condominio",
    configuracion: "Configuración",
};

export function marcarBotonActivo(seccion) {
    const botones = document.querySelectorAll("[data-seccion]");
    botones.forEach((boton) => boton.classList.remove("activo"));
    document.querySelectorAll(`[data-seccion="${seccion}"]`).forEach((boton) => {
        boton.classList.add("activo");
    });

    const titulo = document.getElementById("titulo-seccion");
    if (titulo) titulo.textContent = TITULOS_SECCION[seccion] ?? "";
}
