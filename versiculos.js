const versiculosDiarios = [
    {
        texto: "Nunca se apartará de tu boca este libro de instrucción; meditarás en él día y noche para actuar con cuidado según todo lo que en él está escrito. Así prosperarás y tendrás éxito.",
        referencia: "Josué 1:8 (NVI)",
        overlay: "MEDITA EN SU PALABRA"
    },
    {
        texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
        referencia: "Salmos 119:105 (RVR1960)",
        overlay: "LUZ PARA TU CAMINO"
    },
    {
        texto: "Toda la Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir, para instruir en justicia.",
        referencia: "2 Timoteo 3:16 (RVR1960)",
        overlay: "PALABRA INSPIRADA"
    },
    // Agrega más versículos según necesites
];

function obtenerVersiculo() {
    const fecha = new Date();
    const dia = fecha.getDate();
    // Usa el día del mes para seleccionar un versículo
    return versiculosDiarios[dia % versiculosDiarios.length];
}

// Función para actualizar el versículo en la página
function actualizarVersiculo() {
    const versiculoHoy = obtenerVersiculo();

    // Actualizar el texto del versículo
    document.querySelector('.verse-text').textContent = versiculoHoy.texto;

    // Actualizar la referencia
    document.querySelector('.verse-reference').textContent = versiculoHoy.referencia;

    // Actualizar el overlay
    document.querySelector('.verse-overlay').textContent = versiculoHoy.overlay;
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', actualizarVersiculo);