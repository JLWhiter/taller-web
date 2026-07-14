const DEPORTES_LOZA = [
    { nombre: "Fútbol", icono: "sports_soccer" },
    { nombre: "Voley", icono: "sports_volleyball" },
    { nombre: "Básquet", icono: "sports_basketball" },
    { nombre: "Otros", icono: "sports" },
];

const ZONAS_NORTE_SUR = ["Zona Norte", "Zona Sur"];

export const CATALOGO_AREAS = [
    {
        id: "loza",
        nombre: "Loza deportiva",
        icono: "sports_soccer",
        deportes: DEPORTES_LOZA,
        disponible: true,
    },
    {
        id: "casa-club",
        nombre: "Casa club",
        icono: "home_work",
        deportes: null,
        disponible: true,
        zonas: ZONAS_NORTE_SUR,
        requiereSillas: true,
        horarioFijo: { inicio: "07:00", fin: "03:00" },
    },
    {
        id: "parrillas",
        nombre: "Zona de parrillas",
        icono: "outdoor_grill",
        deportes: null,
        disponible: true,
        zonas: ZONAS_NORTE_SUR,
    },
    { id: "piscina", nombre: "Piscina", icono: "pool", deportes: null, disponible: false },
    { id: "gimnasio", nombre: "Gimnasio", icono: "fitness_center", deportes: null, disponible: false },
    { id: "salon-eventos", nombre: "Salón de eventos", icono: "celebration", deportes: null, disponible: false },
    { id: "cancha-tenis", nombre: "Cancha de tenis", icono: "sports_tennis", deportes: null, disponible: false },
    { id: "sala-juegos", nombre: "Sala de juegos", icono: "sports_esports", deportes: null, disponible: false },
];

export function obtenerArea(id) {
    return CATALOGO_AREAS.find((area) => area.id === id) ?? null;
}
