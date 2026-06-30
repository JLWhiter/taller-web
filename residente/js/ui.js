export function marcarBotonActivo(seccion) {
    const botones = document.querySelectorAll("[data-seccion]");
    botones.forEach((boton) => boton.classList.remove("activo"));
    const botonActivo = document.querySelector(`[data-seccion="${seccion}"]`);
    if (botonActivo) botonActivo.classList.add("activo");
}