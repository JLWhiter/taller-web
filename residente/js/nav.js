export function iniciarNavMovil() {
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const menuMovil = document.getElementById("menu-movil");

    if (!btnHamburguesa || !menuMovil) return;

    function abrirMenu() {
        menuMovil.classList.add("abierto");
        btnHamburguesa.setAttribute("aria-expanded", "true");
    }

    function cerrarMenu() {
        menuMovil.classList.remove("abierto");
        btnHamburguesa.setAttribute("aria-expanded", "false");
    }

    btnHamburguesa.addEventListener("click", () => {
        const estaAbierto = menuMovil.classList.contains("abierto");
        if (estaAbierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    menuMovil.querySelectorAll("button").forEach((boton) => {
        boton.addEventListener("click", cerrarMenu);
    });
}
