export function iniciarSidebarMovil() {
    const sidebar = document.getElementById("sidebar");
    const btnAbrir = document.getElementById("abrir-sidebar");
    const btnCerrar = document.getElementById("cerrar-sidebar");

    if (!sidebar || !btnAbrir || !btnCerrar) return;

    function abrirSidebar() {
        sidebar.classList.add("sidebar-abierto");
    }

    function cerrarSidebar() {
        sidebar.classList.remove("sidebar-abierto");
    }

    btnAbrir.addEventListener("click", abrirSidebar);
    btnCerrar.addEventListener("click", cerrarSidebar);

    sidebar.querySelectorAll("nav button, footer button").forEach((boton) => {
        boton.addEventListener("click", cerrarSidebar);
    });
}   