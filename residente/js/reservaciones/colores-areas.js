export const COLOR_AREA = {
    "Loza deportiva": "loza",
    "Casa club": "casa-club",
    "Zona de parrillas": "parrillas",
    "Piscina": "piscina",
    "Gimnasio": "gimnasio",
    "Salón de eventos": "salon-eventos",
    "Cancha de tenis": "cancha-tenis",
    "Sala de juegos": "sala-juegos",
};

export function obtenerClaseColorArea(area) {
    return `area-${COLOR_AREA[area] ?? "loza"}`;
}