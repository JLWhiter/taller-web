const ICONOS_POR_TIPO = {
    aceptada: "check_circle",
    rechazada: "cancel",
    foto: "photo_camera",
    otroResidente: "groups",
};

let notificaciones = [];
let contadorId = 0;
const suscriptores = [];

function avisarCambio() {
    suscriptores.forEach((callback) => callback(notificaciones));
}

function agregarNotificacion({ tipo, titulo, detalle, tiempo, leida = false }) {
    contadorId++;
    notificaciones.unshift({ id: contadorId, tipo, titulo, detalle, tiempo, leida });
    avisarCambio();
}

function obtenerIconoNotificacion(tipo) {
    return ICONOS_POR_TIPO[tipo] ?? "notifications";
}

function hayNotificacionesSinLeer() {
    return notificaciones.some((n) => !n.leida);
}

function marcarComoLeida(id) {
    const notificacion = notificaciones.find((n) => n.id === id);
    if (!notificacion || notificacion.leida) return;
    notificacion.leida = true;
    avisarCambio();
}

function marcarTodasComoLeidas() {
    notificaciones.forEach((n) => (n.leida = true));
    avisarCambio();
}

export function notificarReservaAprobada(area) {
    agregarNotificacion({
        tipo: "aceptada",
        titulo: "Reserva aprobada",
        detalle: `Tu reserva de ${area} fue aprobada.`,
        tiempo: "Recién",
    });
}

export function notificarFotoActualizada() {
    agregarNotificacion({
        tipo: "foto",
        titulo: "Foto de perfil actualizada",
        detalle: "Tu nueva foto de perfil se guardó correctamente.",
        tiempo: "Recién",
    });
}

function renderLista(contenedor) {
    contenedor.innerHTML = "";

    if (notificaciones.length === 0) {
        const vacio = document.createElement("p");
        vacio.className = "menu-notificaciones-vacio";
        vacio.textContent = "No tienes notificaciones.";
        contenedor.appendChild(vacio);
        return;
    }

    notificaciones.forEach((notificacion) => {
        const item = document.createElement("div");
        item.className = "menu-notificaciones-item";
        item.dataset.leida = String(notificacion.leida);

        item.innerHTML = `
            <div class="menu-notificaciones-icono tipo-${notificacion.tipo}">
                <span class="material-symbols-outlined">${obtenerIconoNotificacion(notificacion.tipo)}</span>
            </div>
            <div class="menu-notificaciones-texto">
                <span class="menu-notificaciones-titulo">${notificacion.titulo}</span>
                <span class="menu-notificaciones-detalle">${notificacion.detalle}</span>
                <span class="menu-notificaciones-tiempo">${notificacion.tiempo}</span>
            </div>
            <span class="menu-notificaciones-punto"></span>
        `;

        item.addEventListener("click", () => marcarComoLeida(notificacion.id));

        contenedor.appendChild(item);
    });
}

export function iniciarNotificaciones() {
    const btn = document.getElementById("btn-notificaciones");
    const menu = document.getElementById("menu-notificaciones");
    const lista = document.getElementById("lista-notificaciones");
    const btnMarcarLeidas = document.getElementById("btn-marcar-leidas");
    const badge = document.getElementById("badge-notificaciones");
    if (!btn || !menu || !lista) return;

    function abrirMenu() {
        menu.classList.add("visible");
        btn.setAttribute("aria-expanded", "true");
    }

    function cerrarMenu() {
        menu.classList.remove("visible");
        btn.setAttribute("aria-expanded", "false");
    }

    function render() {
        renderLista(lista);
        if (badge) badge.style.display = hayNotificacionesSinLeer() ? "block" : "none";
    }

    btn.addEventListener("click", (evento) => {
        evento.stopPropagation();
        if (menu.classList.contains("visible")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    document.addEventListener("click", (evento) => {
        if (!menu.contains(evento.target) && evento.target !== btn) cerrarMenu();
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") cerrarMenu();
    });

    if (btnMarcarLeidas) {
        btnMarcarLeidas.addEventListener("click", () => marcarTodasComoLeidas());
    }

    suscriptores.push(render);
    render();
}
