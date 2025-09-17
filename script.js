// Funcionalidad para las pestañas de videos
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const videoContainers = document.querySelectorAll('.videos-container');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remover clase active de todos los botones y contenedores
            tabButtons.forEach(btn => btn.classList.remove('active'));
            videoContainers.forEach(container => container.classList.remove('active'));

            // Agregar clase active al botón clickeado y al contenedor correspondiente
            button.classList.add('active');
            document.getElementById(`${tabId}-container`).classList.add('active');
        });
    });
});