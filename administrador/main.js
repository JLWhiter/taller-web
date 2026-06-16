const botones = document.querySelectorAll("nav button, footer button");
const sidebar = document.getElementById("sidebar");
const minimizarBtn = document.getElementById("btn-minimizar");

const tarjetasPanel = [
    ["total-usuario", "Total de Usuarios", "../images/icons/users-dark.png", "usuario", "230"],
    ["reserva-totales", "Reservas Totales Este Mes", "../images/icons/grafico-de-barras.png", "Analisis", "15650"],
    ["ingreso-reserva", "Ingresos por Reservas", "../images/icons/passive-income.png", "Ingresos", "12500"]
];

const reservasPendientes = [
    ["#001", "Carlos Ramírez", "Loza Deportiva", "2024-07-15", "18:00 - 22:00", "pendiente"],
    ["#002", "Lucía Fernández", "Loza Deportiva", "2024-07-20", "10:00 - 12:00", "pendiente"],
    ["#003", "Pedro Castillo", "Loza Deportiva", "2024-07-20", "10:00 - 12:00", "pendiente"],
    ["#004", "María Torres", "Loza Deportiva", "2024-07-20", "10:00 - 12:00", "pendiente"],
    ["#005", "Jorge Mendoza", "Loza Deportiva", "2024-07-20", "10:00 - 12:00", "pendiente"],
    ["#006", "Andrea Rojas", "Loza Deportiva", "2024-07-20", "10:00 - 12:00", "pendiente"],
    ["#007", "Diego Navarro", "Parrilla", "2024-07-20", "10:00 - 12:00", "pendiente"]
];

const actividadesRecientes = [
    ["Ana Gomez", "Aprobo reserva #002", "Hace 2 horas"],
    ["Carlos López", "Aprobo reserva #008", "Hace 5 horas"],
    ["María Rodríguez", "Rechazó reserva #012", "Hace 5 horas"]
];

const usuariosSistema = [
    ["#001", "Carlos Ramírez", "carlos.ramirez@example.com", "Administrador", "2024-07-10 14:30", "Activo"],
    ["#002", "Lucía Fernández", "lucia.fernandez@example.com", "Mantenimiento", "2024-07-10 14:30", "Activo"],
    ["#003", "Pedro Castillo", "pedro.castillo@example.com", "Recepcionista", "2024-07-10 14:30", "Inactivo"],
    ["#004", "María Torres", "maria.torres@example.com", "Residente", "2024-07-10 14:30", "Activo"],
    ["#005", "Jorge Mendoza", "jorge.mendoza@example.com", "Residente", "2024-07-10 14:30", "Inactivo"],
    ["#006", "Andrea Rojas", "andrea.rojas@example.com", "Recepcionista", "2024-07-10 14:30", "Activo"],
    ["#007", "Diego Navarro", "diego.navarro@example.com", "Residente", "2024-07-10 14:30", "Inactivo"],
    ["#008", "Ana Gomez", "ana.gomez@example.com", "Recepcionista", "2024-07-10 14:30", "Pendiente"]
];

const diasCalendario = [
    [1, "Carlos Ramírez", "Loza Deportiva", "18:00 - 22:00"],
    [2, "Lucía Fernández", "Casa Club", "10:00 - 12:00"],
    [3, "Pedro Castillo", "Zona Parrilla", "14:00 - 16:00"],
    [4, "", "", ""],
    [5, "María Torres", "Loza Deportiva", "18:00 - 22:00"],
    [6, "", "", ""],
    [7, "Jorge Mendoza", "Casa Club", "10:00 - 12:00"],
    [8, "", "", ""],
    [9, "Andrea Rojas", "Zona Parrilla", "14:00 - 16:00"],
    [10, "", "", ""],
    [11, "Diego Navarro", "Loza Deportiva", "18:00 - 22:00"],
    [12, "", "", ""],
    [13, "Valeria Soto", "Casa Club", "09:00 - 11:00"],
    [14, "", "", ""],
    [15, "Miguel Salas", "Zona Parrilla", "15:00 - 18:00"],
    [16, "", "", ""],
    [17, "Fernanda Ruiz", "Loza Deportiva", "17:00 - 20:00"],
    [18, "", "", ""],
    [19, "", "", ""],
    [20, "Ricardo Peña", "Casa Club", "13:00 - 16:00"],
    [21, "", "", ""],
    [22, "Camila León", "Zona Parrilla", "12:00 - 15:00"],
    [23, "", "", ""],
    [24, "", "", ""],
    [25, "Luis Herrera", "Loza Deportiva", "19:00 - 22:00"],
    [26, "", "", ""],
    [27, "Paola Díaz", "Casa Club", "11:00 - 14:00"],
    [28, "", "", ""],
    [29, "", "", ""],
    [30, "Sebastián Cruz", "Zona Parrilla", "16:00 - 19:00"],
    [31, "", "", ""]
];

const resumenReservas = [
    ["Carlos Ramírez", "Loza Deportiva", "18:00 - 22:00", "Pendiente"],
    ["Lucía Fernández", "Casa Club", "10:00 - 12:00", "Aprobado"],
    ["Pedro Castillo", "Zona Parrilla", "14:00 - 16:00", "Rechazado"],
    ["María Torres", "Loza Deportiva", "08:00 - 11:00", "Aprobado"],
    ["Jorge Mendoza", "Casa Club", "16:00 - 19:00", "Pendiente"],
    ["Andrea Rojas", "Zona Parrilla", "13:00 - 15:00", "Aprobado"],
    ["Diego Navarro", "Loza Deportiva", "19:00 - 22:00", "Rechazado"],
    ["Valeria Soto", "Casa Club", "09:00 - 11:00", "Pendiente"],
    ["Miguel Salas", "Zona Parrilla", "15:00 - 18:00", "Aprobado"],
    ["Fernanda Ruiz", "Loza Deportiva", "17:00 - 20:00", "Pendiente"],
    ["Ricardo Peña", "Casa Club", "12:00 - 14:00", "Rechazado"],
    ["Camila León", "Zona Parrilla", "11:00 - 13:00", "Aprobado"],
    ["Luis Herrera", "Loza Deportiva", "20:00 - 22:00", "Aprobado"],
    ["Paola Díaz", "Casa Club", "14:00 - 17:00", "Pendiente"],
    ["Sebastián Cruz", "Zona Parrilla", "18:00 - 21:00", "Rechazado"],
    ["Daniela Flores", "Loza Deportiva", "07:00 - 09:00", "Aprobado"],
    ["Kevin Morales", "Casa Club", "13:00 - 15:00", "Pendiente"],
    ["Rosa Gutiérrez", "Zona Parrilla", "16:00 - 18:00", "Aprobado"],
    ["José Vargas", "Loza Deportiva", "18:00 - 20:00", "Rechazado"],
    ["Ana Beltrán", "Casa Club", "09:00 - 12:00", "Aprobado"],
    ["Renato Silva", "Zona Parrilla", "15:00 - 17:00", "Pendiente"],
    ["Claudia Paredes", "Loza Deportiva", "08:00 - 10:00", "Aprobado"],
    ["Bruno Medina", "Casa Club", "19:00 - 21:00", "Rechazado"],
    ["Patricia Núñez", "Zona Parrilla", "10:00 - 13:00", "Aprobado"],
    ["Álvaro Campos", "Loza Deportiva", "12:00 - 15:00", "Pendiente"],
    ["Sofía Herrera", "Casa Club", "17:00 - 19:00", "Aprobado"],
    ["Gabriel Luna", "Zona Parrilla", "18:00 - 20:00", "Rechazado"],
    ["Elena Castro", "Loza Deportiva", "09:00 - 11:00", "Aprobado"],
    ["Tomás Rivas", "Casa Club", "14:00 - 16:00", "Pendiente"],
    ["Nicole Vega", "Zona Parrilla", "20:00 - 22:00", "Aprobado"]
];

const eventos = [
    ["Torneo de Tenis", "2024-07-15"],
    ["Clases de Yoga", "2024-07-20"],
    ["Noche de Cine", "2024-07-25"]
];

const actividadesPopulares = [
    ["Fútbol 5", "150 participantes"],
    ["Natación", "120 participantes"],
    ["Gimnasia", "90 participantes"]
];

const reportesInformes = [
    ["#001", "Informe de Reservas Mensuales", "2024-07-01", "excel"],
    ["#002", "Análisis de Uso de Amenidades", "2024-07-05", "pdf"],
    ["#003", "Reporte de Ingresos por Reservas", "2024-07-10", "excel"],
    ["#004", "Informe de Cancelaciones y Reembolsos", "2024-07-15", "pdf"],
    ["#005", "Análisis de Satisfacción del Usuario", "2024-07-20", "pdf"]
];

function crearTarjetasPanel() {
    let html = "";

    for (let i = 0; i < tarjetasPanel.length; i++) {
        html += `
            <button class="${tarjetasPanel[i][0]}" onclick="">
                <h3>${tarjetasPanel[i][1]}</h3>
                <img src="${tarjetasPanel[i][2]}" alt="${tarjetasPanel[i][3]}">
                <p>${tarjetasPanel[i][4]}</p>
            </button>
        `;
    }

    return html;
}

function crearTablaReservas() {
    let html = "";

    for (let i = 0; i < reservasPendientes.length; i++) {
        html += `
            <tr>
                <td>${reservasPendientes[i][0]}</td>
                <td>${reservasPendientes[i][1]}</td>
                <td>${reservasPendientes[i][2]}</td>
                <td>${reservasPendientes[i][3]}</td>
                <td>${reservasPendientes[i][4]}</td>
                <td>${reservasPendientes[i][5]}</td>
                <td class="acciones">
                    <button class="aprobar">Aprobar</button>
                    <button class="rechazar">Rechazar</button>
                    <button class="detalles">ver detalles...</button>
                </td>
            </tr>
        `;
    }

    return html;
}

function crearActividadesRecientes() {
    let html = "";

    for (let i = 0; i < actividadesRecientes.length; i++) {
        html += `
            <li>
                <span class="actividad-usuario">${actividadesRecientes[i][0]}</span>
                <span class="actividad-descripcion">${actividadesRecientes[i][1]}</span>
                <span class="actividad-hora">${actividadesRecientes[i][2]}</span>
            </li>
        `;
    }

    return html;
}

function crearBotones(lista, clase) {
    let html = "";

    for (let i = 0; i < lista.length; i++) {
        html += `<button class="${clase}">${lista[i]}</button>`;
    }

    return html;
}

function crearTablaUsuarios() {
    let html = "";

    for (let i = 0; i < usuariosSistema.length; i++) {
        let claseEstado = usuariosSistema[i][5].toLowerCase();

        html += `
            <tr>
                <td>${usuariosSistema[i][0]}</td>
                <td><img src="../images/icons/usuario.png" alt="Avatar" class="avatar"></td>
                <td>${usuariosSistema[i][1]}</td>
                <td>${usuariosSistema[i][2]}</td>
                <td>${usuariosSistema[i][3]}</td>
                <td>${usuariosSistema[i][4]}</td>
                <td><span class="estado ${claseEstado}">${usuariosSistema[i][5]}</span></td>
                <td class="acciones">
                    <button class="editar">Editar</button>
                    <button class="bloquear">Bloquear</button>
                    <button class="eliminar">Eliminar</button>
                </td>
            </tr>
        `;
    }

    return html;
}

function crearCalendario() {
    let html = "";
    let contador = 0;

    for (let i = 0; i < 5; i++) {
        html += `<tr>`;

        for (let j = 0; j < 7; j++) {
            if (contador < diasCalendario.length) {
                html += `
                    <td class="dia">
                        <div class="numero-dia">${diasCalendario[contador][0]}</div>
                        ${diasCalendario[contador][1] !== "" ? `
                            <div class="reserva">
                                <span class="reserva-usuario">${diasCalendario[contador][1]}</span>
                                <span class="reserva-area">${diasCalendario[contador][2]}</span>
                                <span class="reserva-hora">${diasCalendario[contador][3]}</span>
                            </div>
                        ` : ""}
                    </td>
                `;
            } else {
                html += `<td class="dia"></td>`;
            }

            contador++;
        }

        html += `</tr>`;
    }

    return html;
}

function crearResumenReservas() {
    let html = "";

    for (let i = 0; i < resumenReservas.length; i++) {
        let claseEstado = resumenReservas[i][3].toLowerCase();

        html += `
            <tr>
                <td>${resumenReservas[i][0]}</td>
                <td>${resumenReservas[i][1]}</td>
                <td>${resumenReservas[i][2]}</td>
                <td><span class="estado ${claseEstado}">${resumenReservas[i][3]}</span></td>
            </tr>
        `;
    }

    return html;
}

function crearEventos() {
    let html = "";

    for (let i = 0; i < eventos.length; i++) {
        html += `
            <li>
                <span class="evento-nombre">${eventos[i][0]}</span>
                <span class="evento-fecha">${eventos[i][1]}</span>
            </li>
        `;
    }

    return html;
}

function crearActividadesPopulares() {
    let html = "";

    for (let i = 0; i < actividadesPopulares.length; i++) {
        html += `
            <li>
                <span class="actividad-nombre">${actividadesPopulares[i][0]}</span>
                <span class="actividad-cantidad">${actividadesPopulares[i][1]}</span>
            </li>
        `;
    }

    return html;
}

function crearReportesInformes() {
    let html = "";

    for (let i = 0; i < reportesInformes.length; i++) {
        html += `
            <tr>
                <td>${reportesInformes[i][0]}</td>
                <td>${reportesInformes[i][1]}</td>
                <td>${reportesInformes[i][2]}</td>
                <td>${reportesInformes[i][3]}</td>
                <td>
                    <button class="btn-accion">Descargar</button>
                </td>
            </tr>
        `;
    }

    return html;
}

const vistas = {
    "panel-control": {
        titulo: "Panel Principal",
        contenido: "Gestiona tus reservas de áreas comunes",
        html: ` 
            <div class="contenido">
                <div class="reservas">
                    <h4>Sección de reservas</h4>
                    <div class="botones">
                        ${crearTarjetasPanel()}
                    </div>
                </div>

                <div class="reservas-aprobar">
                    <h4>Reservas por Aprobar</h4>
                    <div class="contenedor-tabla">
                        <table class="pendiente-aprobación">
                            <thead>
                                <tr>
                                    <th>Id Reserva</th>
                                    <th>Usuario</th>
                                    <th>Área Común</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${crearTablaReservas()}
                            </tbody>
                        </table>
                    </div>

                    <div class="actividad-reciente">
                        <h4>Actividad Reciente</h4>
                        <ul class="lista-actividad">
                            ${crearActividadesRecientes()}
                        </ul>
                    </div>
                </div>
            </div>`
    },

    "gestion-usuarios": {
        titulo: "Gestión de Usuarios",
        contenido: "Aquí puedes gestionar los usuarios del sistema.",
        html: `
            <section>
                <nav class="sub-menu">
                    <button class="crear">Crear Nuevo Usuario</button>

                    <div class="roles">
                        ${crearBotones(["todos", "Administrador", "Residente", "Recepcionista", "Mantenimiento"], "rol")}
                    </div>

                    <div class="filtros">
                        ${crearBotones(["todos", "Activos", "Inactivos", "Pendientes"], "filtro")}
                    </div>

                    <search>
                        <label for="buscar">
                            <img src="../images/icons/lupa-dark.png" alt="lupa" />
                        </label>
                        <input id="buscar" type="search" placeholder="Buscar" />
                    </search>
                </nav>

                <div class="contenido-submenu">
                    <table class="tabla-usuarios">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Avatar</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Ultimo Acceso</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${crearTablaUsuarios()}
                        </tbody>
                    </table>
                </div>
            </section>`
    },

    "reserva-calendario": {
        titulo: "Reserva y Calendario",
        contenido: "Administra las reservas y el calendario de eventos.",
        html: ` 
            <section class="reserva-calendario">
                <div class="calendario-navegador">
                    <nav class="sub-menu-calendario">
                        <div class="vistas">
                            <h3>Vistas</h3>
                            <div class="opciones-vista">
                                ${crearBotones(["Mes", "Semana", "Lista"], "vista")}
                            </div>
                        </div>

                        <div class="filtros-calendario">
                            ${crearBotones(["todos", "Loza Deportiva", "Casa Club", "Zona Parrilla"], "filtro-calendario")}
                        </div>
                    </nav>
                </div>

                <div class="contenedor-vista">
                    <div class="contenedor-calendario vista-izquierda">
                        <table class="calendario">
                            <thead>
                                <tr>
                                    <th>Lunes</th>
                                    <th>Martes</th>
                                    <th>Miércoles</th>
                                    <th>Jueves</th>
                                    <th>Viernes</th>
                                    <th>Sábado</th>
                                    <th>Domingo</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${crearCalendario()}
                            </tbody>
                        </table>
                    </div>

                    <div class="resumen-dia vista-derecha">
                        <h3>Resumen del Día</h3>
                        <table class="resumen-reservas">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Área Común</th>
                                    <th>Hora</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${crearResumenReservas()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="actividad-populares">
                    <div class="proximos-eventos">
                        <h3>Próximos Eventos</h3>
                        <ul class="lista-eventos">
                            ${crearEventos()}
                        </ul>
                    </div>

                    <div class="actividad-populares">
                        <h3>Actividad Populares</h3>
                        <ul class="lista-actividades">
                            ${crearActividadesPopulares()}
                        </ul>
                    </div>
                </div>
            </section>`
    },

    "informes-analitica": {
        titulo: "Informes y Analítica",
        contenido: "Visualiza informes y analíticas de uso.",
        html: ` 
            <section class="informes-analitica">
                <div class="graficos-header">
                    <ul>
                        <li>
                            <div class="grafico">
                                <h3>Total de Reservas(Mes actual)</h3>
                                <span>23,153</span>
                            </div>
                        </li>

                        <li>
                            <div class="grafico">
                                <h3>Amenidades Más Usadas</h3>
                                <canvas id="grafico-amenidades" width="100" height="40"></canvas>
                            </div>
                        </li>

                        <li>
                            <div class="grafico">
                                <h3>Ingresos por Reservas</h3>
                                <canvas id="grafico-ingresos" width="100" height="40"></canvas>
                            </div>
                        </li>

                        <li>
                            <div class="grafico">
                                <h3>Cancelaciones(Mes Actual)</h3>
                                <span>45</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="graficos-main">
                    <div class="grafico-superior">
                        <ul>
                            <li>
                                <div class="grafico">
                                    <h3>Uso de Amenidades por Hora/Día</h3>
                                    <canvas id="grafico-satisfaccion" width="100" height="40"></canvas>
                                </div>
                            </li>

                            <li>
                                <div class="grafico">
                                    <h3>Evolución de Reservas (Año Actual vs Año Anterior)</h3>
                                    <canvas id="grafico-reservas-semana" width="100" height="40"></canvas>
                                </div>
                            </li>

                            <li>
                                <div class="grafico">
                                    <h3>Perfil de Usuario (Propetario vs Inquilino)</h3>
                                    <canvas id="grafico-usuarios" width="100" height="40"></canvas>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="tabla-reportes inferior">
                        <h3>Reportes Detallados</h3>

                        <table class="tabla-informes">
                            <thead>
                                <tr>
                                    <th>ID Informe</th>
                                    <th>Nombre</th>
                                    <th>Fecha de Generación</th>
                                    <th>Formato</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${crearReportesInformes()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>`
    },

    "configuracion": {
        titulo: "Configuración",
        contenido: "Personaliza tu perfil y ajustes de la interfaz.",
        html: `
            <div class="contenido-configuracion">
                <div class="tarjeta-config">
                    <h3>Modo Oscuro</h3>
                    <p>Cambia el aspecto visual del sistema.</p>

                    <button id="btn-tema-oscuro" class="boton-config">
                        <img src="images/icons/dark.png" alt="Luna">
                        <span>Activar / Desactivar</span>
                    </button>
                </div>

                <div class="tarjeta-config">
                    <h3>Información de Perfil</h3>
                    <p>Actualiza tu numero telefonico.</p>

                    <div class="contenedor-input">
                        <form id="form-guardar-nombre" class="grupo-input">
                            <input 
                                type="text" 
                                id="nuevo-nombre" 
                                name="nuevo-nombre" 
                                minlength="1" 
                                maxlength="9"  
                                required
                                placeholder="Escribe tu numero..."
                            >
                            <button id="btn-guardar-nombre" class="boton-accion" type="submit">Guardar</button>
                        </form>
                    </div>
                </div>

                <div class="tarjeta-config">
                    <h3>Foto de Perfil</h3>
                    <p>Selecciona una imagen desde tu dispositivo.</p>

                    <div class="grupo-input">
                        <input type="file" id="input-archivo-foto" accept="image/*" style="display: none;">
                        <button id="btn-seleccionar-foto" class="boton-config">Selecciona</button>
                        <button id="btn-guardar-foto" class="boton-accion">Guardar</button>
                    </div>
                </div>
            </div>`
    }
};

function cargarVista(seccion) {
    const vista = vistas[seccion];

    if (!vista) {
        return;
    }

    document.getElementById("titulo-seccion").textContent = vista.titulo;
    document.getElementById("subtitulo-seccion").textContent = vista.contenido;
    document.getElementById("vista").innerHTML = vista.html;

    if (seccion === "informes-analitica") {
        cargarGraficos();
    }

    if (seccion === "configuracion") {
        activarFuncionesConfiguracion();
    }
}

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activo");
        }

        botones[i].classList.add("activo");

        const seccion = botones[i].dataset.seccion;

        if (seccion) {
            cargarVista(seccion);
        }

        if (window.innerWidth <= 768) {
            cerrarSidebar();
        }
    });
}

if (minimizarBtn) {
    minimizarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("minimize");
    });
}

function activarFuncionesConfiguracion() {
    const btnOscuro = document.getElementById("btn-tema-oscuro");

    if (btnOscuro) {
        btnOscuro.addEventListener("click", () => {
            document.body.classList.toggle("tema-oscuro");
            localStorage.setItem("modoOscuro", document.body.classList.contains("tema-oscuro"));
        });
    }

    const formNombre = document.getElementById("form-guardar-nombre");
    const inputNombre = document.getElementById("nuevo-nombre");

    if (formNombre && inputNombre) {
        formNombre.addEventListener("submit", (e) => {
            e.preventDefault();

            const nuevoNombre = inputNombre.value.trim();

            if (nuevoNombre !== "") {
                const elementoNombre = document.querySelector(".perfil .usuario .informacion .nombre-apellido");

                if (elementoNombre) {
                    elementoNombre.textContent = nuevoNombre;
                }

                localStorage.setItem("nombreGuardado", nuevoNombre);
                inputNombre.value = "";
                alert("¡Dato actualizado correctamente!");
            }
        });
    }

    const btnSeleccionarFoto = document.getElementById("btn-seleccionar-foto");
    const btnGuardarFoto = document.getElementById("btn-guardar-foto");
    const inputFoto = document.getElementById("input-archivo-foto");

    if (btnSeleccionarFoto && inputFoto) {
        btnSeleccionarFoto.addEventListener("click", () => {
            inputFoto.click();
        });
    }

    if (btnGuardarFoto && inputFoto) {
        btnGuardarFoto.addEventListener("click", () => {
            const archivo = inputFoto.files[0];

            if (archivo) {
                const lector = new FileReader();

                lector.onload = function () {
                    localStorage.setItem("fotoGuardada", lector.result);
                    colocarFotoPerfil(lector.result);
                    alert("¡Foto actualizada correctamente!");
                };

                lector.readAsDataURL(archivo);
            } else {
                alert("Selecciona una imagen primero");
            }
        });
    }
}

function colocarFotoPerfil(imagen) {
    const avatarImg = document.querySelector(".perfil .usuario .avatar img");
    const avatar = document.querySelector(".perfil .usuario .avatar");

    if (avatarImg) {
        avatarImg.src = imagen;
    } else if (avatar) {
        avatar.style.backgroundImage = `url(${imagen})`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center";

        const span = avatar.querySelector("span");

        if (span) {
            span.style.display = "none";
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("tema-oscuro");
    }

    const nombreGuardado = localStorage.getItem("nombreGuardado");

    if (nombreGuardado) {
        const elementoNombre = document.querySelector(".usuario .informacion .nombre-apellido");

        if (elementoNombre) {
            elementoNombre.textContent = nombreGuardado;
        }
    }

    const fotoGuardada = localStorage.getItem("fotoGuardada");

    if (fotoGuardada) {
        colocarFotoPerfil(fotoGuardada);
    }

    cargarVista("panel-control");

    const botonInicial = document.querySelector("[data-seccion='panel-control']");

    if (botonInicial) {
        botonInicial.classList.add("activo");
    }
});

function cargarGraficos() {
    new Chart(document.getElementById("grafico-amenidades"), {
        type: "bar",
        data: {
            labels: ["Piscina", "Parrilla", "Gym", "Sala"],
            datasets: [{
                data: [50, 40, 25, 20]
            }]
        }
    });

    new Chart(document.getElementById("grafico-ingresos"), {
        type: "line",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May"],
            datasets: [{
                data: [200, 400, 300, 600, 800],
                fill: false
            }]
        }
    });

    new Chart(document.getElementById("grafico-satisfaccion"), {
        type: "bar",
        data: {
            labels: ["00:00", "08:00", "12:00", "17:00", "20:00"],
            datasets: [{
                data: [20, 240, 120, 220, 40]
            }]
        }
    });

    new Chart(document.getElementById("grafico-reservas-semana"), {
        type: "line",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            datasets: [
                {
                    label: "2024",
                    data: [20, 100, 120, 210, 170, 280]
                },
                {
                    label: "2023",
                    data: [30, 120, 110, 90, 150, 200]
                }
            ]
        }
    });

    new Chart(document.getElementById("grafico-usuarios"), {
        type: "pie",
        data: {
            labels: ["Propietario", "Inquilino"],
            datasets: [{
                data: [60, 40]
            }]
        }
    });
}

const btnNotif = document.getElementById("btn-notificaciones");
const panel = document.getElementById("panel-notificaciones");

if (btnNotif && panel) {
    btnNotif.addEventListener("click", function (e) {
        e.stopPropagation();
        panel.classList.toggle("visible");
    });

    document.addEventListener("click", function (e) {
        if (!panel.contains(e.target)) {
            panel.classList.remove("visible");
        }
    });
}

const btnMenuMovil = document.getElementById("btn-menu-movil");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function abrirSidebar() {
    sidebar.classList.add("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.add("active");
    }

    if (btnMenuMovil) {
        btnMenuMovil.style.display = "none";
    }

    const vista = document.getElementById("vista");

    if (vista) {
        vista.style.pointerEvents = "none";
    }
}

function cerrarSidebar() {
    sidebar.classList.remove("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
    }

    const vista = document.getElementById("vista");

    if (vista) {
        vista.style.pointerEvents = "auto";
    }

    if (window.innerWidth <= 768 && btnMenuMovil) {
        btnMenuMovil.style.display = "flex";
    }
}

if (btnMenuMovil) {
    btnMenuMovil.addEventListener("click", abrirSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", cerrarSidebar);
}

const vistaPrincipal = document.getElementById("vista");

if (vistaPrincipal) {
    vistaPrincipal.addEventListener("click", () => {
        if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
            cerrarSidebar();
        }
    });
}