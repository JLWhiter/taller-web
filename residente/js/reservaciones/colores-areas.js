export const COLOR_AREA = {
    "Loza deportiva": "loza",
    "Casa club": "casa-club",
    "Zona de parrillas": "parrillas",
};

export function obtenerClaseColorArea(area) {
    return `area-${COLOR_AREA[area] ?? "loza"}`;
}