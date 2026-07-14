// ============================================================
// VILLA SANTA CLARA - Control de acceso (sesión y roles)
// ============================================================
// Este archivo controla quién puede ver cada página.
// Se guarda el rol del usuario en sessionStorage al iniciar sesión
// (dura solo mientras la pestaña está abierta) y cada página
// protegida (administrador/residente) revisa ese dato ANTES de
// mostrar su contenido. Si no hay sesión o el rol no coincide,
// se redirige automáticamente al login.
//
// IMPORTANTE: esto es una protección del lado del cliente (no hay
// backend en este proyecto). Evita que alguien entre a otra sección
// solo escribiendo la URL, pero no reemplaza una autenticación real
// con servidor si en el futuro se agrega uno.

const CLAVE_SESION = "sesionActiva"; // valores posibles: "administrador" | "residente"

// Se llama justo cuando el login es correcto, guardando el rol.
function iniciarSesion(rol) {
  sessionStorage.setItem(CLAVE_SESION, rol);
}

// Devuelve el rol actual, o null si nadie ha iniciado sesión.
function obtenerRolSesion() {
  return sessionStorage.getItem(CLAVE_SESION);
}

// Borra la sesión (usar al cerrar sesión).
function cerrarSesion() {
  sessionStorage.removeItem(CLAVE_SESION);
}

// Protege la página actual: si el rol de la sesión no coincide con
// el rol requerido, redirige de inmediato al login y detiene la carga.
// Debe llamarse dentro del <head>, apenas se carga este script,
// para que no se alcance a ver contenido antes de redirigir.
function protegerPagina(rolRequerido) {
  if (obtenerRolSesion() !== rolRequerido) {
    window.location.replace("../inicio-web/index.html");
  }
}

window.iniciarSesion = iniciarSesion;
window.obtenerRolSesion = obtenerRolSesion;
window.cerrarSesion = cerrarSesion;
window.protegerPagina = protegerPagina;
