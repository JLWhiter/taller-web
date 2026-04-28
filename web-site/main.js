// Botón activo en la barra lateral
const botones = document.querySelectorAll(".secciones button, footer button");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        botones.forEach((b) => b.classList.remove("activo"));
        btn.classList.add("activo");

        const seccion = [...btn.classList].find(c => c !== "activo");
        cargarVista(seccion);
    });
});

// Minimizar barra lateral
const sidebar = document.getElementById("barra-lateral");
const minimizarBtn = document.getElementById("minimizar-btn");

minimizarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("minimize");
})


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
                        <img src="../images/icons/trofeo-de-campeonato.png" alt="trofeo">
                        <h3>Loza Deportiva</h3>
                        <p>
                            Reserva la cancha para tus actividades deportivas
                        </p>
                    </button>
                    <button class="casa-club">
                        <img src="../images/icons/hogar.png" alt="casa">
                        <h3>Casa Club</h3>
                        <p>
                            Reserva el salón para eventos y celebraciones
                        </p>
                    </button>
                    <button class="zona-parrilla">
                        <img src="../images/icons/parrilla.png" alt="fuego">
                        <h3>Zona de Parrillas</h3>
                        <p>
                            Reserva el piso de parrillas para tu evento
                        </p>
                    </button>
                    <button class="cita-jd">
                        <img src="../images/icons/documento.png" alt="cita">
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
                        <img src="../images/icons/calendario.png" alt="calendario">
                        <div>
                            <h3>Calendario del Condominio</h3>
                            <p>Ver todas las reservas realizadas por el condominio</p>
                        </div>
                    </button>
                    <button class="mis-reservas">
                        <img src="../images/icons/usuario.png" alt="persona">
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

    "seccion-informacion": {
        titulo: "Información",
        descripcion: "Consulte los datos generales, ubicación y miembros de la junta directiva",
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
    </div>`
    }
};


function cargarVista(seccion) {
    const vista = vistas[seccion];
    document.getElementById("titulo-seccion").textContent = vista.titulo;
    document.getElementById("subtitulo-seccion").textContent = vista.descripcion;
    document.getElementById("vista").innerHTML = vista.html;
}

cargarVista("panel-principal"); // Cargar panel principal al arrancar

// Panel Principal encendido por defecto al cargar
document.querySelector(".panel-principal").classList.add("activo");

// Contenido


// Cerrar Sesión
const btnCerrar = document.querySelector(".cerrar-sesion");

btnCerrar.addEventListener("click", () => {
    window.location.href = "../login/login.html"
})