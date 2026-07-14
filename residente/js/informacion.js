function iniciarUbicacion() {
    const card = document.getElementById("card-ubicacion");
    if (!card) return;

    card.addEventListener("click", () => {
        window.open("https://www.google.com/maps?q=Av.+Nicolas+Ayllon+7548+Ate+Lima", "_blank");
    });
}

function iniciarBuscadorDirectivos() {
    const input = document.getElementById("buscador-directivos");
    const grid = document.getElementById("grid-directivos");
    const mensajeVacio = document.getElementById("sin-resultados-directivos");
    if (!input || !grid) return;

    const tarjetas = grid.querySelectorAll(".card.directivo");

    input.addEventListener("input", () => {
        const texto = input.value.trim().toLowerCase();
        let visibles = 0;

        tarjetas.forEach((tarjeta) => {
            const nombre = tarjeta.dataset.nombre.toLowerCase();
            const rol = tarjeta.dataset.rol.toLowerCase();
            const coincide = nombre.includes(texto) || rol.includes(texto);

            tarjeta.style.display = coincide ? "flex" : "none";
            if (coincide) visibles++;
        });

        mensajeVacio.style.display = visibles === 0 ? "block" : "none";
    });
}

function iniciarAcordeon() {
    document.querySelectorAll("#acordeon-faq .acordeon-item").forEach((item) => {
        const boton = item.querySelector(".acordeon-pregunta");
        boton.addEventListener("click", () => item.classList.toggle("abierto"));
    });
}

function formatearTelefono(telefono) {
    return "+" + telefono.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

function iniciarModalDirectivo() {
    const overlay = document.getElementById("modal-directivo-overlay");
    const grid = document.getElementById("grid-directivos");
    const btnCerrar = document.getElementById("modal-directivo-cerrar");
    if (!overlay || !grid || !btnCerrar) return;

    const avatar = document.getElementById("modal-directivo-avatar");
    const rol = document.getElementById("modal-directivo-rol");
    const nombre = document.getElementById("modal-directivo-nombre");
    const telefono = document.getElementById("modal-directivo-telefono");
    const whatsapp = document.getElementById("modal-directivo-whatsapp");

    function abrirModal(tarjeta) {
        const datos = tarjeta.dataset;

        avatar.textContent = datos.nombre.charAt(0);
        rol.textContent = datos.rol;
        nombre.textContent = datos.nombre;
        telefono.textContent = formatearTelefono(datos.telefono);
        whatsapp.href = `https://wa.me/${datos.telefono}`;

        overlay.classList.add("visible");
    }

    function cerrarModal() {
        overlay.classList.remove("visible");
    }

    grid.querySelectorAll(".card.directivo").forEach((tarjeta) => {
        tarjeta.addEventListener("click", () => abrirModal(tarjeta));
    });

    btnCerrar.addEventListener("click", cerrarModal);

    overlay.addEventListener("click", (evento) => {
        if (evento.target === overlay) cerrarModal();
    });
}

export function iniciarInformacion() {
    iniciarUbicacion();
    iniciarBuscadorDirectivos();
    iniciarAcordeon();
    iniciarModalDirectivo();
}
