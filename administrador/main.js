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
        "html": ` 
        <section class="reserva-calendario">
            <div class="calendario-navegador">
                <nav class="sub-menu-calendario">
                    <div class="vistas">
                        <h3>Vistas</h3>
                        <div class="opciones-vista">
                            <button class="vista">Mes</button>
                            <button class="vista">Semana</button>
                            <button class="vista">Lista</button>
                        </div>
                    </div>
                    <div class="filtros-calendario">
                        <button class="filtro-calendario">todos</button>
                        <button class="filtro-calendario">Loza Deportiva</button>
                        <button class="filtro-calendario">Casa Club</button>
                        <button class="filtro-calendario">Zona Parrilla</button>
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
                        <!-- Aquí se generarían dinámicamente las celdas del calendario -->
                        <tr>
                            <!-- Semana 1 -->
                            <td class="dia">
                                <div class="numero-dia">1</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Carlos Ramírez</span>
                                    <span class="reserva-area">Loza Deportiva</span>
                                    <span class="reserva-hora">18:00 - 22:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">2</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Lucía Fernández</span>
                                    <span class="reserva-area">Casa Club</span>
                                    <span class="reserva-hora">10:00 - 12:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">3</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Pedro Castillo</span>
                                    <span class="reserva-area">Zona Parrilla</span>
                                    <span class="reserva-hora">14:00 - 16:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">4</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">5</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">María Torres</span>
                                    <span class="reserva-area">Loza Deportiva</span>
                                    <span class="reserva-hora">18:00 - 22:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">6</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">7</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Jorge Mendoza</span>
                                    <span class="reserva-area">Casa Club</span>
                                    <span class="reserva-hora">10:00 - 12:00</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <!-- Semana 2 -->
                            <td class="dia">
                                <div class="numero-dia">8</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">9</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Andrea Rojas</span>
                                    <span class="reserva-area">Zona Parrilla</span>
                                    <span class="reserva-hora">14:00 - 16:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">10</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">11</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Diego Navarro</span>
                                    <span class="reserva-area">Loza Deportiva</span>
                                    <span class="reserva-hora">18:00 - 22:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">12</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">13</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Valeria Soto</span>
                                    <span class="reserva-area">Casa Club</span>
                                    <span class="reserva-hora">09:00 - 11:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">14</div>
                            </td>
                        </tr>

                        <tr>
                            <!-- Semana 3 -->
                            <td class="dia">
                                <div class="numero-dia">15</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Miguel Salas</span>
                                    <span class="reserva-area">Zona Parrilla</span>
                                    <span class="reserva-hora">15:00 - 18:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">16</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">17</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Fernanda Ruiz</span>
                                    <span class="reserva-area">Loza Deportiva</span>
                                    <span class="reserva-hora">17:00 - 20:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">18</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">19</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">20</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Ricardo Peña</span>
                                    <span class="reserva-area">Casa Club</span>
                                    <span class="reserva-hora">13:00 - 16:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">21</div>
                            </td>
                        </tr>

                        <tr>
                            <!-- Semana 4 -->
                            <td class="dia">
                                <div class="numero-dia">22</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Camila León</span>
                                    <span class="reserva-area">Zona Parrilla</span>
                                    <span class="reserva-hora">12:00 - 15:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">23</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">24</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">25</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Luis Herrera</span>
                                    <span class="reserva-area">Loza Deportiva</span>
                                    <span class="reserva-hora">19:00 - 22:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">26</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">27</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Paola Díaz</span>
                                    <span class="reserva-area">Casa Club</span>
                                    <span class="reserva-hora">11:00 - 14:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">28</div>
                            </td>
                        </tr>

                        <tr>
                            <!-- Semana 5 -->
                            <td class="dia">
                                <div class="numero-dia">29</div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">30</div>
                                <div class="reserva">
                                    <span class="reserva-usuario">Sebastián Cruz</span>
                                    <span class="reserva-area">Zona Parrilla</span>
                                    <span class="reserva-hora">16:00 - 19:00</span>
                                </div>
                            </td>

                            <td class="dia">
                                <div class="numero-dia">31</div>
                            </td>
                        </tr>
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
                        <tr>
                            <td>Carlos Ramírez</td>
                            <td>Loza Deportiva</td>
                            <td>18:00 - 22:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Lucía Fernández</td>
                            <td>Casa Club</td>
                            <td>10:00 - 12:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Pedro Castillo</td>
                            <td>Zona Parrilla</td>
                            <td>14:00 - 16:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>María Torres</td>
                            <td>Loza Deportiva</td>
                            <td>08:00 - 11:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Jorge Mendoza</td>
                            <td>Casa Club</td>
                            <td>16:00 - 19:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Andrea Rojas</td>
                            <td>Zona Parrilla</td>
                            <td>13:00 - 15:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Diego Navarro</td>
                            <td>Loza Deportiva</td>
                            <td>19:00 - 22:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Valeria Soto</td>
                            <td>Casa Club</td>
                            <td>09:00 - 11:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Miguel Salas</td>
                            <td>Zona Parrilla</td>
                            <td>15:00 - 18:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Fernanda Ruiz</td>
                            <td>Loza Deportiva</td>
                            <td>17:00 - 20:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Ricardo Peña</td>
                            <td>Casa Club</td>
                            <td>12:00 - 14:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Camila León</td>
                            <td>Zona Parrilla</td>
                            <td>11:00 - 13:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Luis Herrera</td>
                            <td>Loza Deportiva</td>
                            <td>20:00 - 22:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Paola Díaz</td>
                            <td>Casa Club</td>
                            <td>14:00 - 17:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Sebastián Cruz</td>
                            <td>Zona Parrilla</td>
                            <td>18:00 - 21:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Daniela Flores</td>
                            <td>Loza Deportiva</td>
                            <td>07:00 - 09:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Kevin Morales</td>
                            <td>Casa Club</td>
                            <td>13:00 - 15:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Rosa Gutiérrez</td>
                            <td>Zona Parrilla</td>
                            <td>16:00 - 18:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>José Vargas</td>
                            <td>Loza Deportiva</td>
                            <td>18:00 - 20:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Ana Beltrán</td>
                            <td>Casa Club</td>
                            <td>09:00 - 12:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Renato Silva</td>
                            <td>Zona Parrilla</td>
                            <td>15:00 - 17:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Claudia Paredes</td>
                            <td>Loza Deportiva</td>
                            <td>08:00 - 10:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Bruno Medina</td>
                            <td>Casa Club</td>
                            <td>19:00 - 21:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Patricia Núñez</td>
                            <td>Zona Parrilla</td>
                            <td>10:00 - 13:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Álvaro Campos</td>
                            <td>Loza Deportiva</td>
                            <td>12:00 - 15:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Sofía Herrera</td>
                            <td>Casa Club</td>
                            <td>17:00 - 19:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Gabriel Luna</td>
                            <td>Zona Parrilla</td>
                            <td>18:00 - 20:00</td>
                            <td><span class="estado rechazado">Rechazado</span></td>
                        </tr>

                        <tr>
                            <td>Elena Castro</td>
                            <td>Loza Deportiva</td>
                            <td>09:00 - 11:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>

                        <tr>
                            <td>Tomás Rivas</td>
                            <td>Casa Club</td>
                            <td>14:00 - 16:00</td>
                            <td><span class="estado pendiente">Pendiente</span></td>
                        </tr>

                        <tr>
                            <td>Nicole Vega</td>
                            <td>Zona Parrilla</td>
                            <td>20:00 - 22:00</td>
                            <td><span class="estado aprobado">Aprobado</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="actividad-populares">
            <div class="proximos-eventos">
                <h3>Próximos Eventos</h3>
                <ul class="lista-eventos">
                    <li>
                        <span class="evento-nombre">Torneo de Tenis</span>
                        <span class="evento-fecha">2024-07-15</span>
                    </li>
                    <li>
                        <span class="evento-nombre">Clases de Yoga</span>
                        <span class="evento-fecha">2024-07-20</span>
                    </li>
                    <li>
                        <span class="evento-nombre">Noche de Cine</span>
                        <span class="evento-fecha">2024-07-25</span>
                    </li>
                </ul>
            </div>
            <div class="actividad-populares">
                <h3>Actividad Populares</h3>
                <ul class="lista-actividades">
                    <li>
                        <span class="actividad-nombre">Fútbol 5</span>
                        <span class="actividad-cantidad">150 participantes</span>
                    </li>
                    <li>
                        <span class="actividad-nombre">Natación</span>
                        <span class="actividad-cantidad">120 participantes</span>
                    </li>
                    <li>
                        <span class="actividad-nombre">Gimnasia</span>
                        <span class="actividad-cantidad">90 participantes</span>
                    </li>
                </ul>
            </div>
        </div>
        </section>
        `,
    },
    "informes-analitica": {
        "titulo": "Informes y Analítica",
        "contenido": "Visualiza informes y analíticas de uso.",
        "html": ` 
            <section class="informes-analitica">
                <div class="graficos-header">
                    <ul>
                        <li><div class="grafico">
                            <h3>Total de Reservas(Mes actual)</h3>
                            <span> 23,153 </span>
                        </div></li>
                        <li><div class="grafico">
                            <h3>Amenidades Más Usadas</h3>
                            <canvas id="grafico-amenidades" width="100" height="40"></canvas>
                        </div></li>
                        <li><div class="grafico">
                            <h3>Ingresos por Reservas</h3>
                            <canvas id="grafico-ingresos" width="100" height="40"></canvas>
                        </div></li>
                        <li><div class="grafico">
                            <h3>Cancelaciones(Mes Actual)</h3>
                            <span> 45 </span>
                        </div></li>
                    </ul>
                </div>
                <div class="graficos-main">
                    <div class="grafico-superior">
                    <ul>
                        <li><div class="grafico">
                            <h3>Uso de Amenidades por Hora/Día</h3>
                            <canvas id="grafico-satisfaccion" width="100" height="40"></canvas>
                            </div></li>
                        <li><div class="grafico">
                            <h3>Evolución de Reservas (Año Actual vs Año Anterior)</h3>
                            <canvas id="grafico-reservas-semana" width="100" height="40"></canvas>
                        </div></li>
                        <li><div class="grafico">
                            <h3>Perfil de Usuario (Propetario vs Inquilino)</h3>
                            <canvas id="grafico-usuarios" width="100" height="40"></canvas>
                        </div></li>
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
                                <tr>
                                    <td>#001</td>
                                    <td>Informe de Reservas Mensuales</td>
                                    <td>2024-07-01</td>
                                    <td>excel</td>
                                    <td>
                                        <button class="btn-accion">Descargar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#002</td>
                                    <td>Análisis de Uso de Amenidades</td>
                                    <td>2024-07-05</td>
                                    <td>pdf</td>
                                    <td>
                                        <button class="btn-accion">Descargar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#003</td>
                                    <td>Reporte de Ingresos por Reservas</td>
                                    <td>2024-07-10</td>
                                    <td>excel</td>
                                    <td>
                                        <button class="btn-accion">Descargar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#004</td>
                                    <td>Informe de Cancelaciones y Reembolsos</td>
                                    <td>2024-07-15</td>
                                    <td>pdf</td>
                                    <td>
                                        <button class="btn-accion">Descargar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#005</td>
                                    <td>Análisis de Satisfacción del Usuario</td>
                                    <td>2024-07-20</td>
                                    <td>pdf</td>
                                    <td>
                                        <button class="btn-accion">Descargar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        `,
    },
    "configuracion": {
    titulo: "   Configuración",
    descripcion: "Personaliza tu perfil y ajustes de la interfaz.",
    html: `
        <div class="contenido-configuracion">
            <div class="config-card">
                <h3>Ajustes de Interfaz</h3>
                <p>Cambia el aspecto visual del sistema.</p>
                <button id="btn-toggle-dark" class="btn-config">
                    <img src="../images/icons/dark.png" alt="Luna">
                    <span>Activar / Desactivar Modo Oscuro</span>
                </button>
            </div>
            
            <div class="config-card">
                <h3>Información de Perfil</h3>
                <p>Actualiza el nombre que se muestra en tu sesión.</p>
                <div class="grupo-input">
                    <input type="text" id="nuevo-nombre" placeholder="Escribe tu nuevo nombre...">
                    <button id="btn-guardar-nombre" class="btn-config-accion">Guardar</button>
                </div>
            </div>

<div class="config-card">
    <h3>Foto de Perfil</h3>
    <p>Selecciona una imagen desde tu dispositivo.</p>
    <div class="grupo-input">
        <input type="file" id="input-archivo-foto" accept="image/*" style="display: none;">
        <button id="btn-seleccionar-foto" class="btn-config">Seleccionar archivo</button>
        <button id="btn-guardar-foto" class="btn-config-accion">Guardar</button>
    </div>
</div>
    `
  }
  

}

// funcion para mostrar la vista seleccionada
function mostrarVista(seccion) {
    const vista = vistas[seccion];

    document.getElementById("titulo-seccion").textContent = vista.titulo;
    document.getElementById("descripcion-seccion").textContent = vista.contenido;
    document.getElementById("vista").innerHTML = vista.html;
     if(seccion === "informes-analitica"){
        cargarGraficos();
    }
    if (seccion === "configuracion") {
    activarFuncionesConfiguracion();
  }
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
    const btnNombre = document.getElementById("btn-guardar-nombre");
    const inputNombre = document.getElementById("nuevo-nombre");
    if (btnNombre && inputNombre) {
        btnNombre.addEventListener("click", () => {
            const nuevoNombre = inputNombre.value.trim();
            if (nuevoNombre !== "") {
                document.querySelector(".perfil .usuario .informacion .nombre-apellido").textContent = nuevoNombre;
                localStorage.setItem("nombreGuardado", nuevoNombre);
                inputNombre.value = "";
                alert("¡Nombre actualizado correctamente!");
            }
        });
    }

    // 3. CAMBIAR INICIAL DEL AVATAR
    const btnFoto = document.getElementById("btn-guardar-foto");
    const inputFoto = document.getElementById("nueva-inicial");
    if (btnFoto && inputFoto) {
        btnFoto.addEventListener("click", () => {
            const nuevaInicial = inputFoto.value.trim().toUpperCase();
            if (nuevaInicial !== "") {
                document.querySelector(".perfil .usuario .avatar span").textContent = nuevaInicial;
                localStorage.setItem("fotoGuardada", nuevaInicial);
                inputFoto.value = "";
                alert("¡Avatar actualizado correctamente!");
            }
        });
    }
}

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
    
    // Aplicar avatar si estaba guardado
    const fotoGuardada = localStorage.getItem("fotoGuardada");
    if (fotoGuardada) {
        const elementoAvatar = document.querySelector(".perfil .usuario .avatar span");
        if (elementoAvatar) elementoAvatar.textContent = fotoGuardada;
    }
});

function cargarGraficos(){

    /* BARRAS */
    new Chart(document.getElementById('grafico-amenidades'), {
        type: 'bar',
        data: {
            labels: ['Piscina', 'Parrilla', 'Gym', 'Sala'],
            datasets: [{
                data: [50, 40, 25, 20]
            }]
        }
    });

    /* LINEA */
    new Chart(document.getElementById('grafico-ingresos'), {
        type: 'line',
        data: {
            labels: ['Ene','Feb','Mar','Abr','May'],
            datasets: [{
                data: [200,400,300,600,800],
                fill: false
            }]
        }
    });

    /* BARRAS GRANDES */
    new Chart(document.getElementById('grafico-satisfaccion'), {
        type: 'bar',
        data: {
            labels: ['00:00','08:00','12:00','17:00','20:00'],
            datasets: [{
                data: [20,240,120,220,40]
            }]
        }
    });

    /* EVOLUCION */
    new Chart(document.getElementById('grafico-reservas-semana'), {
        type: 'line',
        data: {
            labels: ['Ene','Feb','Mar','Abr','May','Jun'],
            datasets: [{
                label:'2024',
                data:[20,100,120,210,170,280]
            },
            {
                label:'2023',
                data:[30,120,110,90,150,200]
            }]
        }
    });

    /* PIE */
    new Chart(document.getElementById('grafico-usuarios'), {
        type: 'pie',
        data: {
            labels: ['Propietario','Inquilino'],
            datasets: [{
                data: [60,40]
            }]
        }
    });
}

// NOTIFICACIONES

// Guardamos 
const btnNotif = document.getElementById("btn-notificaciones");
const panel    = document.getElementById("panel-notificaciones");

// Al hacer clic en el botón
btnNotif.addEventListener("click", function(e) {
    e.stopPropagation();
    panel.classList.toggle("visible");
});

// Al hacer clic fuera del panel, se cierra
document.addEventListener("click", function(e) {
    if (!panel.contains(e.target)) {
        panel.classList.remove("visible");
    }
});