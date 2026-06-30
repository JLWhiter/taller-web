import { agregarReserva, hayConflictoHorario } from "./reservas-prueba.js";

const DEPORTES = [
    { nombre: "Fútbol", icono: "sports_soccer" },
    { nombre: "Voley", icono: "sports_volleyball" },
    { nombre: "Básquet", icono: "sports_basketball" },
    { nombre: "Otros", icono: "sports" },
];

const NOMBRES_MES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const NOMBRES_MES_CORTO = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

let pasoActual = 1;
let deporteSeleccionado = null;
let fechaSeleccionada = null;
let mesCalendario = new Date();

function formatearFechaResumen(fecha) {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const dia = dias[fecha.getDay()];
    const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
    return `${diaCapitalizado} ${fecha.getDate()} de ${NOMBRES_MES[fecha.getMonth()]}`;
}

function calcularDuracion(inicio, fin) {
    const [hIni, mIni] = inicio.split(":").map(Number);
    const [hFin, mFin] = fin.split(":").map(Number);
    const mins = (hFin * 60 + mFin) - (hIni * 60 + mIni);
    if (mins <= 0) return null;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${String(m).padStart(2, "0")}m`;
}

function renderIndicadorPasos(container) {
    const pasos = ["Deporte", "Fecha", "Horario"];
    container.innerHTML = "";
    pasos.forEach((nombre, i) => {
        const num = i + 1;
        const paso = document.createElement("div");
        paso.className = "modal-step";

        if (num < pasoActual) paso.classList.add("completo");
        else if (num === pasoActual) paso.classList.add("activo");

        const numEl = document.createElement("span");
        numEl.className = "modal-step-num";
        numEl.textContent = num < pasoActual ? "✓" : num;

        const txtEl = document.createElement("span");
        txtEl.className = "modal-step-txt";
        txtEl.textContent = nombre;

        paso.appendChild(numEl);
        paso.appendChild(txtEl);
        container.appendChild(paso);

        if (i < pasos.length - 1) {
            const sep = document.createElement("div");
            sep.className = "modal-step-sep";
            container.appendChild(sep);
        }
    });
}

function renderPaso1(body) {
    body.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "modal-deportes-grid";

    DEPORTES.forEach(({ nombre, icono }) => {
        const btn = document.createElement("button");
        btn.className = "modal-deporte-btn";
        if (deporteSeleccionado === nombre) btn.classList.add("seleccionado");

        btn.innerHTML = `
            <span class="material-symbols-outlined">${icono}</span>
            <span>${nombre}</span>
        `;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal-deporte-btn").forEach((b) => b.classList.remove("seleccionado"));
            btn.classList.add("seleccionado");
            deporteSeleccionado = nombre;
            document.getElementById("modal-btn-siguiente").disabled = false;
        });

        grid.appendChild(btn);
    });

    body.appendChild(grid);
}

function renderCalendario(container) {
    const anio = mesCalendario.getFullYear();
    const mes = mesCalendario.getMonth();
    const hoy = new Date();

    container.innerHTML = `
        <div class="modal-cal-nav">
            <button class="modal-cal-btn" id="modal-mes-anterior">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <span class="modal-cal-titulo">${NOMBRES_MES_CORTO[mes]} ${anio}</span>
            <button class="modal-cal-btn" id="modal-mes-siguiente">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
        <div class="modal-cal-semana">
            <span>Do</span><span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sá</span>
        </div>
        <div class="modal-cal-grid" id="modal-cal-grid"></div>
    `;

    const grid = container.querySelector("#modal-cal-grid");
    const primerDia = new Date(anio, mes, 1).getDay();
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
    const diasMesAnterior = new Date(anio, mes, 0).getDate();

    for (let i = primerDia; i > 0; i--) {
        const d = document.createElement("div");
        d.className = "modal-cal-dia otro-mes";
        d.textContent = diasMesAnterior - i + 1;
        grid.appendChild(d);
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
        const d = document.createElement("div");
        d.className = "modal-cal-dia";
        d.textContent = dia;

        const esFecha = new Date(anio, mes, dia);
        const esHoy = dia === hoy.getDate() && mes === hoy.getMonth() && anio === hoy.getFullYear();
        const esPasado = esFecha < new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
        const esSeleccionado = fechaSeleccionada &&
            dia === fechaSeleccionada.getDate() &&
            mes === fechaSeleccionada.getMonth() &&
            anio === fechaSeleccionada.getFullYear();

        if (esHoy) d.classList.add("hoy");
        if (esSeleccionado) d.classList.add("seleccionado");
        if (esPasado) {
            d.classList.add("pasado");
        } else {
            d.addEventListener("click", () => {
                fechaSeleccionada = new Date(anio, mes, dia);
                renderCalendario(container);
                document.getElementById("modal-btn-siguiente").disabled = false;
            });
        }

        grid.appendChild(d);
    }

    const totalCeldas = primerDia + diasEnMes;
    const relleno = (7 - (totalCeldas % 7)) % 7;
    for (let dia = 1; dia <= relleno; dia++) {
        const d = document.createElement("div");
        d.className = "modal-cal-dia otro-mes";
        d.textContent = dia;
        grid.appendChild(d);
    }

    container.querySelector("#modal-mes-anterior").addEventListener("click", () => {
        mesCalendario.setMonth(mesCalendario.getMonth() - 1);
        renderCalendario(container);
    });

    container.querySelector("#modal-mes-siguiente").addEventListener("click", () => {
        mesCalendario.setMonth(mesCalendario.getMonth() + 1);
        renderCalendario(container);
    });
}

function renderPaso2(body) {
    body.innerHTML = "";
    const calContainer = document.createElement("div");
    calContainer.className = "modal-cal-container";
    body.appendChild(calContainer);
    renderCalendario(calContainer);
}

function renderPaso3(body) {
    body.innerHTML = "";

    const rangoWrap = document.createElement("div");
    rangoWrap.className = "modal-rango-wrap";
    rangoWrap.innerHTML = `
        <div class="modal-rango-campo">
            <label class="modal-rango-label">Hora de inicio</label>
            <div class="modal-time-select">
                <input class="modal-rango-input" id="modal-hora-inicio-h" type="text" maxlength="2" placeholder="09" />
                <span class="modal-time-sep">:</span>
                <input class="modal-rango-input" id="modal-hora-inicio-m" type="text" maxlength="2" placeholder="00" />
            </div>
        </div>
        <div class="modal-rango-campo">
            <label class="modal-rango-label">Hora de finalización</label>
            <div class="modal-time-select">
                <input class="modal-rango-input" id="modal-hora-fin-h" type="text" maxlength="2" placeholder="10" />
                <span class="modal-time-sep">:</span>
                <input class="modal-rango-input" id="modal-hora-fin-m" type="text" maxlength="2" placeholder="00" />
            </div>
        </div>
    `;

    const ayudaEl = document.createElement("p");
    ayudaEl.className = "modal-ayuda";
    ayudaEl.textContent = "Formato 24h · Minutos en 00 o 30";

    const errorConflictoEl = document.createElement("p");
    errorConflictoEl.className = "modal-error";
    errorConflictoEl.id = "modal-error-conflicto";
    errorConflictoEl.style.display = "none";
    errorConflictoEl.textContent = "Ya existe una reserva en la loza que se cruza con este horario.";

    const resumen = document.createElement("div");
    resumen.className = "modal-resumen";
    resumen.id = "modal-resumen";

    body.appendChild(rangoWrap);
    body.appendChild(ayudaEl);
    body.appendChild(errorConflictoEl);
    body.appendChild(resumen);

    function pintarResumen(inicio, fin, duracion) {
        const iconoDeporte = DEPORTES.find((d) => d.nombre === deporteSeleccionado)?.icono ?? "sports";

        resumen.innerHTML = `
            <div class="modal-resumen-fila">
                <span class="modal-resumen-etiqueta">
                    <span class="material-symbols-outlined">${iconoDeporte}</span>
                    Área
                </span>
                <span>Loza deportiva — ${deporteSeleccionado}</span>
            </div>
            <div class="modal-resumen-fila">
                <span class="modal-resumen-etiqueta">
                    <span class="material-symbols-outlined">calendar_month</span>
                    Fecha
                </span>
                <span>${formatearFechaResumen(fechaSeleccionada)}</span>
            </div>
            <div class="modal-resumen-fila">
                <span class="modal-resumen-etiqueta">
                    <span class="material-symbols-outlined">schedule</span>
                    Horario
                </span>
                <span class="modal-resumen-horario">${inicio} – ${fin} <span class="modal-duracion">${duracion}</span></span>
            </div>
        `;
    }

    function validarHora(input, maxHora) {
        if (input.value === "") return null;
        const val = parseInt(input.value);
        if (isNaN(val) || val < 0 || val > maxHora) {
            input.classList.add("error");
            return null;
        }
        input.classList.remove("error");
        const valTexto = String(val).padStart(2, "0");
        input.value = valTexto;
        return valTexto;
    }

    function validarMinuto(input, horaAsociada, maxHora) {
        if (input.value === "") return null;
        const val = parseInt(input.value);
        const esHoraMaxima = horaAsociada === String(maxHora).padStart(2, "0");

        if (isNaN(val) || (val !== 0 && val !== 30) || (esHoraMaxima && val !== 0)) {
            input.classList.add("error");
            return null;
        }
        input.classList.remove("error");
        const valTexto = String(val).padStart(2, "0");
        input.value = valTexto;
        return valTexto;
    }

    function actualizarResumen() {
        const hIniInput = document.getElementById("modal-hora-inicio-h");
        const mIniInput = document.getElementById("modal-hora-inicio-m");
        const hFinInput = document.getElementById("modal-hora-fin-h");
        const mFinInput = document.getElementById("modal-hora-fin-m");

        const hIni = validarHora(hIniInput, 23);
        const mIni = validarMinuto(mIniInput, hIni, 23);
        const hFin = validarHora(hFinInput, 24);
        const mFin = validarMinuto(mFinInput, hFin, 24);

        const btnGuardar = document.getElementById("modal-btn-guardar");
        errorConflictoEl.style.display = "none";

        if (hIni === null || mIni === null || hFin === null || mFin === null) {
            btnGuardar.disabled = true;
            pintarResumen("00:00", "00:00", "0h 00m");
            return;
        }

        const inicio = `${hIni}:${mIni}`;
        const fin = `${hFin}:${mFin}`;
        const duracion = calcularDuracion(inicio, fin);

        if (!duracion) {
            btnGuardar.disabled = true;
            pintarResumen(inicio, fin, "0h 00m");
            return;
        }

        const anio = fechaSeleccionada.getFullYear();
        const mes = String(fechaSeleccionada.getMonth() + 1).padStart(2, "0");
        const dia = String(fechaSeleccionada.getDate()).padStart(2, "0");
        const fechaTexto = `${anio}-${mes}-${dia}`;

        if (hayConflictoHorario(fechaTexto, "Loza deportiva", inicio, fin)) {
            btnGuardar.disabled = true;
            errorConflictoEl.style.display = "block";
            pintarResumen(inicio, fin, duracion);
            return;
        }

        btnGuardar.disabled = false;
        pintarResumen(inicio, fin, duracion);
    }

    const inputs = rangoWrap.querySelectorAll("input");

    inputs.forEach((input) => {
        input.addEventListener("blur", actualizarResumen);
        input.addEventListener("input", () => {
            const todosCompletos = [...inputs].every(
                (i) => i.value.length === Number(i.getAttribute("maxlength"))
            );
            if (todosCompletos) actualizarResumen();
        });
    });

    pintarResumen("00:00", "00:00", "0h 00m");
    document.getElementById("modal-btn-guardar").disabled = true;
}

function renderModal() {
    const indicador = document.getElementById("modal-indicador-pasos");
    const titulo = document.getElementById("modal-titulo");
    const subtitulo = document.getElementById("modal-subtitulo");
    const body = document.getElementById("modal-body");
    const btnAnterior = document.getElementById("modal-btn-anterior");
    const btnSiguiente = document.getElementById("modal-btn-siguiente");
    const btnGuardar = document.getElementById("modal-btn-guardar");

    renderIndicadorPasos(indicador);

    if (pasoActual === 1) {
        titulo.textContent = "Selecciona el deporte";
        subtitulo.textContent = "¿Qué deporte se va a realizar en la loza?";
        renderPaso1(body);
        btnAnterior.textContent = "Cancelar";
        btnSiguiente.style.display = "inline-flex";
        btnGuardar.style.display = "none";
        btnSiguiente.disabled = !deporteSeleccionado;
    } else if (pasoActual === 2) {
        titulo.textContent = "Selecciona la fecha";
        subtitulo.textContent = "¿Para qué día deseas reservar?";
        renderPaso2(body);
        btnAnterior.textContent = "← Atrás";
        btnSiguiente.style.display = "inline-flex";
        btnGuardar.style.display = "none";
        btnSiguiente.disabled = !fechaSeleccionada;
    } else if (pasoActual === 3) {
        titulo.textContent = "Selecciona el horario";
        subtitulo.textContent = "¿En qué rango de horas usarás el área?";
        renderPaso3(body);
        btnAnterior.textContent = "← Atrás";
        btnSiguiente.style.display = "none";
        btnGuardar.style.display = "inline-flex";
    }
}

export function iniciarModalReserva() {
    const overlay = document.getElementById("modal-overlay");
    const btnLoza = document.querySelector('.botones button[data-area="loza"]');

    if (!overlay || !btnLoza) return;

    function abrirModal() {
        pasoActual = 1;
        deporteSeleccionado = null;
        fechaSeleccionada = null;
        mesCalendario = new Date();
        overlay.classList.add("visible");
        renderModal();
    }

    function cerrarModal() {
        overlay.classList.remove("visible");
    }

    btnLoza.addEventListener("click", abrirModal);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) cerrarModal();
    });

    document.getElementById("modal-btn-anterior").addEventListener("click", () => {
        if (pasoActual === 1) {
            cerrarModal();
        } else {
            pasoActual--;
            renderModal();
        }
    });

    document.getElementById("modal-btn-siguiente").addEventListener("click", () => {
        if (pasoActual < 3) {
            pasoActual++;
            renderModal();
        }
    });

    document.getElementById("modal-btn-guardar").addEventListener("click", () => {
        const hIni = document.getElementById("modal-hora-inicio-h")?.value;
        const mIni = document.getElementById("modal-hora-inicio-m")?.value;
        const hFin = document.getElementById("modal-hora-fin-h")?.value;
        const mFin = document.getElementById("modal-hora-fin-m")?.value;

        if (!hIni || !mIni || !hFin || !mFin) return;

        const inicio = `${hIni}:${mIni}`;
        const fin = `${hFin}:${mFin}`;
        const duracion = calcularDuracion(inicio, fin);
        if (!duracion) return;

        const iconoDeporte = DEPORTES.find((d) => d.nombre === deporteSeleccionado)?.icono ?? "sports";
        const anio = fechaSeleccionada.getFullYear();
        const mes = String(fechaSeleccionada.getMonth() + 1).padStart(2, "0");
        const dia = String(fechaSeleccionada.getDate()).padStart(2, "0");

        agregarReserva({
            fecha: `${anio}-${mes}-${dia}`,
            horaInicio: inicio,
            horaFin: fin,
            area: "Loza deportiva",
            deporte: deporteSeleccionado,
            icono: iconoDeporte,
            residente: "Emanuel Espinoza",
            unidad: "BL04 - 201",
            historial: [
                { estado: "Reservado", fecha: "Recién" },
                { estado: "Aprobado", fecha: "Recién" },
            ],
        });

        cerrarModal();
    });
}