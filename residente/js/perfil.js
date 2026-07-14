function iniciarDropdownPerfil() {
    const btnPerfil = document.querySelector(".btn-perfil");
    const menu = document.getElementById("menu-perfil");
    if (!btnPerfil || !menu) return;

    function abrirMenu() {
        menu.classList.add("visible");
        btnPerfil.setAttribute("aria-expanded", "true");
    }

    function cerrarMenu() {
        menu.classList.remove("visible");
        btnPerfil.setAttribute("aria-expanded", "false");
    }

    btnPerfil.addEventListener("click", (evento) => {
        evento.stopPropagation();
        if (menu.classList.contains("visible")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    menu.querySelectorAll(".menu-perfil-item").forEach((item) => {
        item.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("click", (evento) => {
        if (!menu.contains(evento.target) && evento.target !== btnPerfil) cerrarMenu();
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") cerrarMenu();
    });

    return { cerrarMenu };
}

function iniciarCierreSesion(cerrarDropdown) {
    const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
    const overlay = document.getElementById("modal-cerrar-sesion-overlay");
    const btnCancelar = document.getElementById("btn-cancelar-cierre");
    const btnConfirmar = document.getElementById("btn-confirmar-cierre");
    if (!btnCerrarSesion || !overlay || !btnCancelar || !btnConfirmar) return;

    function abrirModal() {
        overlay.classList.add("visible");
    }

    function cerrarModal() {
        overlay.classList.remove("visible");
    }

    btnCerrarSesion.addEventListener("click", () => {
        if (cerrarDropdown) cerrarDropdown();
        abrirModal();
    });

    btnCancelar.addEventListener("click", cerrarModal);

    overlay.addEventListener("click", (evento) => {
        if (evento.target === overlay) cerrarModal();
    });

    btnConfirmar.addEventListener("click", () => {
        btnConfirmar.textContent = "Cerrando sesión...";
        btnConfirmar.disabled = true;
        window.cerrarSesion();
        setTimeout(() => {
            location.href = "../inicio-web/index.html";
        }, 700);
    });
}

export function iniciarPerfil() {
    const dropdown = iniciarDropdownPerfil();
    iniciarCierreSesion(dropdown?.cerrarMenu);
}
