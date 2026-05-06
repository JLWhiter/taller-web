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
const vistas = {
    "panel-control": {
        "titulo": "Panel Principal",
        "contenido": "Gestiona tus reservas de áreas comunes",
        "html": ` 
            <div class="contenido">
                <div class="reservas">
                    <h4>Sección de reservas</h4>
                    <div class="botones">
                        <button class="total-usuario" onclick="">
                            <h3>Total de Usuarios</h3>
                            <img src="../images/icons/users-light.png" alt="usuario">
                            <p>
                                230
                            </p>
                        </button>
                        <button class="reserva-totales" onclick="">
                            <h3>Reservas Totales Este Mes</h3>
                            <img src="../images/icons/panel.png" alt="Analisis">
                            <p>
                                15650
                            </p>
                        </button>
                        <button class="ingreso-reserva" onclick="">
                            <h3>Ingresos por Reservas</h3>
                            <img src="../images/icons/ingresi-light.png" alt="Ingresos">
                            <p>
                                12500
                            </p>
                        </button>
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
                                <tr>
                                    <td>#001</td>
                                    <td>Carlos Ramírez</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-15</td>
                                    <td>18:00 - 22:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Lucía Fernández</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#003</td>
                                    <td>Pedro Castillo</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#004</td>
                                    <td>María Torres</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#005</td>
                                    <td>Jorge Mendoza</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#006</td>
                                    <td>Andrea Rojas</td>
                                    <td>Loza Deportiva</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#007</td>
                                    <td>Diego Navarro</td>
                                    <td>Parrilla</td>
                                    <td>2024-07-20</td>
                                    <td>10:00 - 12:00</td>
                                    <td>pendiente</td>
                                    <td class="acciones">
                                        <button class="aprobar">Aprobar</button>
                                        <button class="rechazar">Rechazar</button>
                                        <button class="detalles">ver detalles...</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="actividad-reciente">
                        <h4>Actividad Reciente</h4>
                        <ul class="lista-actividad">
                            <li>
                                <span class="actividad-usuario">Ana Gomez</span>
                                <span class="actividad-descripcion">Aprobo reserva #002</span>
                                <span class="actividad-hora">Hace 2 horas</span>
                            </li>
                            <li>
                                <span class="actividad-usuario">Carlos López</span>
                                <span class="actividad-descripcion">Aprobo reserva #008</span>
                                <span class="actividad-hora">Hace 5 horas</span>
                            </li>
                            <li>
                                <span class="actividad-usuario">María Rodríguez</span>
                                <span class="actividad-descripcion">Rechazó reserva #012</span>
                                <span class="actividad-hora">Hace 5 horas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`,

    },
    "gestion-usuarios": {
        "titulo": "Gestión de Usuarios",
        "contenido": "Aquí puedes gestionar los usuarios del sistema.",
        "html": `
            <section>
                <nav class="sub-menu">
                    <button class="crear">Crear Nuevo Usuario</button>
                    <div class="roles">
                        <button class="rol">todos</button>
                        <button class="rol">Administrador</button>
                        <button class="rol">Residente</button>
                        <button class="rol">Recepcionista</button>
                        <button class="rol">Mantenimiento</button>
                    </div>
                    <div class="filtros">
                        <button class="filtro">todos</button>
                        <button class="filtro">Activos</button>
                        <button class="filtro">Inactivos</button>
                        <button class="filtro">Pendientes</button>
                    </div>
                    <search>
                        <label for="buscar"><img src="/images/icons/lupa-dark.png" alt="lupa" /></label>
                        <input id="buscar" type="search" placeholder="Buscar" />
                    </search>
                </nav>
                <div class="contenido-submenu">
                    <p>Lista de usuarios registrados en el sistema.</p>
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
                            <tr>
                                <td>#001</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Carlos Ramírez</td>
                                <td>carlos.ramirez@example.com</td>
                                <td>Administrador</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#002</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Lucía Fernández</td>
                                <td>lucia.fernandez@example.com</td>
                                <td>mantenimiento</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#003</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Pedro Castillo</td>
                                <td>pedro.castillo@example.com</td>
                                <td>Recepcionista</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado inactivo">Inactivo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#004</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>María Torres</td>
                                <td>maria.torres@example.com</td>
                                <td>Residente</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#005</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Jorge Mendoza</td>
                                <td>jorge.mendoza@example.com</td>
                                <td>Residente</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado inactivo">Inactivo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#006</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Andrea Rojas</td>
                                <td>andrea.rojas@example.com</td>
                                <td>Recepcionista</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado activo">Activo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#007</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Diego Navarro</td>
                                <td>diego.navarro@example.com</td>
                                <td>Residente</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado inactivo">Inactivo</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#008</td>
                                <td><img src="avatar.jpg" alt="Avatar" class="avatar"></td>
                                <td>Ana Gomez</td>
                                <td>ana.gomez@example.com</td>
                                <td>Recepcionista</td>
                                <td>2024-07-10 14:30</td>
                                <td><span class="estado pendiente">Pendiente</span></td>
                                <td class="acciones">
                                    <button class="editar">Editar</button>
                                    <button class="bloquear">Bloquear</button>
                                    <button class="eliminar">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>`,
    },
    "reserva-calendario": {
        "titulo": "Reserva y Calendario",
        "contenido": "Administra las reservas y el calendario de eventos.",
        "html": ` <p>Administra las reservas y el calendario de eventos.
         </p>`,
    },
    "informes-analitica": {
        "titulo": "Informes y Analítica",
        "contenido": "Visualiza informes y analíticas de uso.",
        "html": ` <p>Visualiza informes y analíticas de uso.
         </p>`,
    },
}

// funcion para mostrar la vista seleccionada
function mostrarVista(seccion) {
    const vista = vistas[seccion];

    document.getElementById("titulo-seccion").textContent = vista.titulo;
    document.getElementById("descripcion-seccion").textContent = vista.contenido;
    document.getElementById("vista").innerHTML = vista.html;
}

// cargar por defecto
mostrarVista("panel-control");

// eventos botones
document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
        const seccion = btn.getAttribute("data-seccion");
        mostrarVista(seccion);
    });
});

// activo inicial
document
    .querySelector("[data-seccion='panel-control']")
    .classList.add("activo");