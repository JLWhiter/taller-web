// Botón activo en la barra lateral
const botones = document.querySelectorAll("nav button, footer button");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        botones.forEach((b) => b.classList.remove("activo"));
        btn.classList.add("activo");

        const seccion = btn.dataset.seccion;
        cargarVista(seccion);
    });
});

// Minimizar barra lateral
const sidebar = document.getElementById("sidebar");
const minimizarBtn = document.getElementById("btn-minimizar");

minimizarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("minimize");
});

// Contenido barra lateral
const vistas = {
    "panel-principal": {
        titulo: "Panel Principal",
        descripcion: "Gestiona tus reservas de áreas comunes",
        html: `
        <div class="contenido">
            <div class="reservas">
                <h4>Sección de reservas</h4>
                <div class="botones">
                    <button class="loza-deportiva">
                        <span class="material-symbols-outlined">
                            award_star
                        </span>
                        <hgroup>
                            <h3>Loza Deportiva</h3>
                            <p>
                                Reserva la cancha para tus actividades deportivas
                            </p>
                        </hgorup>
                    </button>
                    <button class="casa-club">
                        <span class="material-symbols-outlined">
                            liquor
                        </span>
                        <hgroup>
                            <h3>Casa Club</h3>
                            <p>
                                Reserva el salón para eventos y celebraciones
                            </p>
                        </hgorup>
                    </button>
                    <button class="zona-parrilla">
                        <span class="material-symbols-outlined">
                            yakitori
                        </span>
                        <hgroup>
                        <h3>Zona de Parrilla</h3>
                        <p>
                            Reserva el piso de parrillas para tu evento
                        </p>
                        </hgorup>

                    </button>
                    <button class="cita-jd">
                        <span class="material-symbols-outlined">
                            assignment_add
                        </span>
                        <hgroup></hgorup>

                        <h3>Junta Directiva</h3>
                        <p>
                            Agenda una reunión con la administración
                        </p>
                    </button>
                </div>
            </div>
            <div class="herramientas">
                <h4>Herramientas</h4>
                <div class="botones">
                    <button class="calendario">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <div>
                            <h3>Calendario del Condominio</h3>
                            <p>Ver todas las reservas realizadas por el condominio</p>
                        </div>
                    </button>
                    <button class="mis-reservas">
                        <span class="material-symbols-outlined">
                            list_arrow
                        </span>
                        <div>
                            <h3>Mis Reservas</h3>
                            <p>Ver todas mis reservas</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        `,
    },
    "cochera": {
        titulo: "Cochera",
        descripcion: "Reserva o gestiona tu cochera dentro del condominio",
        html: `
    <div class="contenido">
        <div class="reservas">
            <h4>Sección de cocheras</h4>
            <div class="botones">
                <button class="reservar-cochera">
                    <img src="../images/icons/reservar-cochera.png" alt="cochera">
                    <h3>Reservar Cochera</h3>
                    <p>
                        Reserva una cochera común del condominio por horas o días
                    </p>
                </button>
                <button class="alquilar-cochera">
                    <img src="../images/icons/alquilar-cochera.png" alt="alquilar">
                    <h3>Alquilar Cochera</h3>
                    <p>
                        Alquila la cochera de un propietario que no la está usando
                    </p>
                </button>
                <button class="publicar-cochera">
                    <img src="../images/icons/publicar-cochera.png" alt="publicar">
                    <h3>Publicar mi Cochera</h3>
                    <p>
                        Ofrece tu cochera en alquiler a otros residentes
                    </p>
                </button>
            </div>
        </div>
        <div class="herramientas">
            <h4>Herramientas</h4>
            <div class="botones">
                <button class="calendario">
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                    <div>
                        <h3>Calendario del Condominio</h3>
                        <p>Ver todas las reservas realizadas por el condominio</p>
                    </div>
                </button>
                <button class="mis-reservas">
                    <span class="material-symbols-outlined">
                        list_arrow
                    </span>
                    <div>
                        <h3>Mis Reservas</h3>
                        <p>Ver todas mis reservas</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
    `
    },
    informacion: {
        titulo: "Información",
        descripcion:
            "Consulte los datos generales, ubicación y miembros de la junta directiva",
        html: `<section class="seccion-info">
                <h4 class="subtitulo_1">Información del Condominio</h4>
                <div class="cards-grid">

                    <div class="card" onclick="window.open('https://www.google.com/maps?q=Av.+Nicolas+Ayllon+7548+Ate+Lima', '_blank')" title="Ver en Google Maps">
                        <div class="card-icono ubicacion">📍</div>
                        <h3>Ubicación <span class="badge">↗</span></h3>
                        <p>Av. Nicolas Ayllon 7548</p>
                        <p>Ate, Lima - Perú</p>
                        <p>Código Postal: 15487</p>
                    </div>

                    <div class="card"  title="Información de la construccion">
                        <div class="card-icono construccion">🗓️</div>
                        <h3>Año de Construcción <span class="badge">↗</span></h3>
                        <p>Inaugurado en 2010</p>
                        <p>16 años de antigüedad</p>
                        <p>Última remodelación: 2025</p>
                    </div>

                    <div class="card"  title="Ver reglamento interno">
                        <div class="card-icono datos">👥</div>
                        <h3>Datos Generales <span class="badge">📄</span></h3>
                        <p>17 Torres</p>
                        <p>544 Departamentos</p>
                        <p>150 Estacionamientos</p>
                    </div>

                    <div class="card contacto-card" title="Contactar">
                        <div class="card-icono contacto">📞</div>
                        <h3>Contacto</h3>
                        <a class="link-contacto" href="tel:+5112345678">📞 +51 1 234 5678</a>
                        <a class="link-contacto" href="mailto:info@villasantaclara.com">✉️ info@villasantaclara.com</a>
                    </div>

                </div>
            </section>

            <section class="seccion-info">
                <h4 class="subtitulo_2">Junta Directiva 2026</h4>
                <div class="cards-grid">

                     <div class="card directivo" onclick="window.open('https://wa.me/51987654321', '_blank')" title="Contactar por WhatsApp">
                        <span class="rol">Presidente</span>
                        <h3>Carlos Mendoza</h3>
                        <p>+51 987 654 321</p>
                        <span class="whatsapp-badge"> WhatsApp</span>
                    </div>

                    <div class="card directivo" onclick="window.open('https://wa.me/51987654322', '_blank')" title="Contactar por WhatsApp">
                        <span class="rol">Vicepresidente</span>
                        <h3>Ana Rodríguez</h3>
                        <p>+51 987 654 322</p>
                        <span class="whatsapp-badge">💬 WhatsApp</span>
                    </div>

                    <div class="card directivo" onclick="window.open('https://wa.me/51987654323', '_blank')" title="Contactar por WhatsApp">
                        <span class="rol">Secretario</span>
                        <h3>Luis Torres</h3>
                        <p>+51 987 654 323</p>
                        <span class="whatsapp-badge">💬 WhatsApp</span>
                    </div>

                    <div class="card directivo" onclick="window.open('https://wa.me/51987654324', '_blank')" title="Contactar por WhatsApp">
                        <span class="rol">Tesorero</span>
                        <h3>María Sánchez</h3>
                        <p>+51 987 654 324</p>
                        <span class="whatsapp-badge">💬 WhatsApp</span>
                    </div>

                </div>
            </section>
        </div>
    </div>`,
    },
    "configuracion": {
        titulo: "Configuración",
        descripcion: "Personaliza tu perfil y ajustes de la interfaz.",
        html: `
        <div class="contenido-configuracion">
            <div class="config-card">
                <h3>Modo Oscuro</h3>
                <p>Cambia el aspecto visual del sistema.</p>
                <button id="btn-toggle-dark" class="btn-config">
                    <img src="../images/icons/dark.png" alt="Luna">
                    <span>Activar / Desactivar</span>
                </button>
            </div>           
            <div class="config-card">
                <h3>Información de Perfil</h3>
                <p>Actualiza tu numero telefonico.</p>
                <div class="grupo-input">
                    <input type="text" id="nuevo-nombre" placeholder="Escribe tu numero...">
                    <button id="btn-guardar-nombre" class="btn-config-accion">Guardar</button>
                </div>
            </div>
    <div class="config-card">
        <h3>Foto de Perfil</h3>
        <p>Selecciona una imagen desde tu dispositivo.</p>
        <div class="grupo-input">
            <input type="file" id="input-archivo-foto" accept="image/*" style="display: none;">
            <button id="btn-seleccionar-foto" class="btn-config">Selecciona</button>
            <button id="btn-guardar-foto" class="btn-config-accion">Guardar</button>
        </div>
    </div>
    `
    }

};

function cargarVista(seccion) {
    const vista = vistas[seccion];
    document.getElementById("titulo-seccion").textContent = vista.titulo;
    document.getElementById("subtitulo-seccion").textContent = vista.descripcion;
    document.getElementById("vista").innerHTML = vista.html;

    if (seccion === "configuracion") {
        activarFuncionesConfiguracion();
    }
}

cargarVista("panel-principal"); // Cargar panel principal al arrancar

// Panel Principal encendido por defecto al cargar
document
    .querySelector("[data-seccion='panel-principal']")
    .classList.add("activo");

// Contenido
// 1. Modales
function abrirModal(id) {
    document.getElementById(id).classList.add("visible");
}

function cerrarModal(overlay) {
    overlay.classList.remove("visible");
}


// 1.1. Secciones
document.getElementById("vista").addEventListener("click", (e) => {
    if (e.target.closest(".loza-deportiva")) abrirModal("overlay-loza");
    if (e.target.closest(".casa-club")) abrirModal("overlay-casa");
    if (e.target.closest(".zona-parrilla")) abrirModal("overlay-parrilla");
    if (e.target.closest(".cita-jd")) abrirModal("overlay-jd");
    if (e.target.closest(".calendario")) abrirModal("overlay-calendario");
    if (e.target.closest(".mis-reservas")) abrirModal("overlay-misreservas");
    if (e.target.closest(".reservar-cochera")) abrirModal("overlay-cochera");
    if (e.target.closest(".alquilar-cochera")) abrirModal("overlay-alquilar-cochera");
    if (e.target.closest(".publicar-cochera")) abrirModal("overlay-publicar-cochera");
});

// --------------

document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
        const overlay = btn.closest(".modal-overlay");
        cerrarModal(overlay);
    });
});

// --------------
// funciones de configuracion
function activarFuncionesConfiguracion() {
    // 1. MODO OSCURO
    const btnDark = document.getElementById("btn-toggle-dark");
    if (btnDark) {
        btnDark.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            // Guardamos la preferencia en el navegador
            localStorage.setItem("modoOscuro", document.body.classList.contains("dark-theme"));
        });
    }
    // 2. CAMBIAR NOMBRE
    //  const btnNombre = document.getElementById("btn-guardar-nombre");
    //  const inputNombre = document.getElementById("nuevo-nombre");
    //  if (btnNombre && inputNombre) {
    //      btnNombre.addEventListener("click", () => {
    //         const nuevoNombre = inputNombre.value.trim();
    //        if (nuevoNombre !== "") {
    //             document.querySelector(".perfil .usuario .informacion .nombre-apellido").textContent = nuevoNombre;
    //            localStorage.setItem("nombreGuardado", nuevoNombre);
    //             inputNombre.value = "";
    //           }
    //     });
    // }

    // 3. CAMBIAR FOTO DE PERFIL
    const btnSeleccionar = document.getElementById("btn-seleccionar-foto");
    const inputFile = document.getElementById("input-archivo-foto");
    const btnGuardar = document.getElementById("btn-guardar-foto");

    if (btnSeleccionar && inputFile) {
        btnSeleccionar.addEventListener("click", () => inputFile.click());
        inputFile.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    // Guardamos temporalmente en localStorage y aplicamos al instante
                    const imgData = event.target.result;
                    localStorage.setItem("fotoGuardada", imgData);

                    // Aplicar al instante al perfil
                    const avatar = document.querySelector(".perfil .usuario .avatar");
                    const spanLetra = avatar.querySelector("span");
                    avatar.style.backgroundImage = `url('${imgData}')`;
                    avatar.style.backgroundSize = "cover";
                    avatar.style.backgroundPosition = "center";
                    if (spanLetra) spanLetra.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        });
    }
}
// fin de funcionamiento en configuracion


// Cargar los datos guardados automáticamente al abrir o recargar la página
window.addEventListener("DOMContentLoaded", () => {
    // Aplicar tema oscuro si estaba guardado
    if (localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("dark-theme");
    }

    // Aplicar nombre si estaba guardado
    const nombreGuardado = localStorage.getItem("nombreGuardado");
    if (nombreGuardado) {
        const elementoNombre = document.querySelector(".perfil .usuario .informacion .nombre-apellido");
        if (elementoNombre) elementoNombre.textContent = nombreGuardado;
    }

    // Aplicar foto si estaba guardada
    const fotoGuardada = localStorage.getItem("fotoGuardada");
    if (fotoGuardada) {
        const avatar = document.querySelector(".perfil .usuario .avatar");
        const spanLetra = avatar.querySelector("span");

        avatar.style.backgroundImage = `url('${fotoGuardada}')`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center";
        if (spanLetra) spanLetra.style.display = "none";
    }
});

// Cerrar Sesión
const btnCerrar = document.querySelector("#cerrar-sesion");

btnCerrar.addEventListener("click", () => {
    window.location.href = "../login/login.html";
});


// NOTIFICACIONES DEL CLIENTE

// Guardamos los elementos
const btnNotif = document.getElementById("btn-notificaciones");
const panel = document.getElementById("panel-notificaciones");

// Clic en el botón 
btnNotif.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("visible");
});

//Clic fuera del panel 
document.addEventListener("click", function (e) {
    if (!panel.contains(e.target)) {
        panel.classList.remove("visible");
    }
});

// ===================== MENÚ MÓVIL =====================
const btnMenuMovil = document.getElementById("btn-menu-movil");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function abrirSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
    btnMenuMovil.style.display = "none";
    document.getElementById("vista").style.pointerEvents = "none"; // ← bloquear clicks
}

function cerrarSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    document.getElementById("vista").style.pointerEvents = "auto"; // ← desbloquear clicks
    if (window.innerWidth <= 768) {
        btnMenuMovil.style.display = "flex";
    }
}

if (btnMenuMovil) {
    btnMenuMovil.addEventListener("click", abrirSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", cerrarSidebar);
}

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (window.innerWidth <= 768) cerrarSidebar();
    });
});

// Cerrar sidebar al tocar el contenido principal
document.getElementById("vista").addEventListener("click", () => {
    if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
        cerrarSidebar();
    }
});