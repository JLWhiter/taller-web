// Botón activo en la barra lateral
const botones = document.querySelectorAll(".secciones button, footer button");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        botones.forEach((b) => b.classList.remove("activo"));
        btn.classList.add("activo");
    });
});

// Panel Principal encendido por defecto al cargar
document.querySelector(".panel-principal").classList.add("activo");

// Contenido


// Cerrar Sesión
const btnCerrar = document.querySelector(".cerrar-sesion");

btnCerrar.addEventListener("click", () => {
    window.location.href = "../login/login.html"
});