// Funcionalidad para compartir versículo
function compartirVersiculo() {
    // Obtener el texto directamente de los elementos del DOM
    const texto = document.querySelector('.verse-text').textContent.trim();
    const referencia = document.querySelector('.verse-reference').textContent.trim();
    const textoCompleto = `${texto} - ${referencia}`;

    if (navigator.share) {
        navigator.share({
            title: 'Versículo del Día',
            text: textoCompleto
        }).catch(err => {
            console.error('Error al compartir:', err);
            copiarAlPortapapeles(textoCompleto);
        });
    } else {
        copiarAlPortapapeles(textoCompleto);
    }
}

// Función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
    if (navigator.clipboard && window.isSecureContext) {
        // Para contextos seguros (HTTPS)
        navigator.clipboard.writeText(texto)
            .then(() => alert('¡Versículo copiado al portapapeles!'))
            .catch(() => copiarAlPortapapelesAlternativo(texto));
    } else {
        // Método alternativo para contextos no seguros
        copiarAlPortapapelesAlternativo(texto);
    }
}

// Método alternativo de copia
function copiarAlPortapapelesAlternativo(texto) {
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        textArea.remove();
        alert('¡Versículo copiado al portapapeles!');
    } catch (error) {
        console.error('Error al copiar el texto:', error);
        textArea.remove();
        alert('No se pudo copiar el versículo');
    }
}

// Función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
    // Crear un elemento temporal
    const elem = document.createElement('textarea');
    elem.value = texto;
    document.body.appendChild(elem);
    elem.select();

    try {
        document.execCommand('copy');
        alert('¡Versículo copiado al portapapeles!');
    } catch (err) {
        console.error('Error al copiar:', err);
        alert('No se pudo copiar el versículo');
    } finally {
        document.body.removeChild(elem);
    }
}

// Función para compartir en Twitter/X
function compartirEnTwitter() {
    const versiculo = document.querySelector('.verse-text').textContent;
    const referencia = document.querySelector('.verse-reference').textContent;
    const texto = encodeURIComponent(`${versiculo} - ${referencia}`);
    window.open(`https://twitter.com/intent/tweet?text=${texto}`, '_blank');
}

// Función para suscribirse
function suscribirse() {
    // Por ahora solo mostraremos una alerta
    alert('¡Gracias por tu interés! Pronto recibirás notificaciones de nuevos versículos.');
}

// Event Listeners cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function () {
    // Event listeners para los botones de compartir
    const btnShare = document.querySelector('.btn-share');
    if (btnShare) {
        btnShare.addEventListener('click', compartirVersiculo);
    }

    const btnTwitter = document.querySelector('.btn-twitter');
    if (btnTwitter) {
        btnTwitter.addEventListener('click', compartirEnTwitter);
    }

    const btnSubscribe = document.querySelector('.btn-subscribe');
    if (btnSubscribe) {
        btnSubscribe.addEventListener('click', suscribirse);
    }

    // Funcionalidad para las pestañas de videos
    const tabButtons = document.querySelectorAll('.tab-button');
    const videoContainers = document.querySelectorAll('.videos-container');

    try {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                if (!tabId) return;

                // Actualizar estado de los botones
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Actualizar contenedores
                videoContainers.forEach(container => container.classList.remove('active'));
                const targetContainer = document.getElementById(`${tabId}-container`);
                if (targetContainer) {
                    targetContainer.classList.add('active');
                }
            });
        });
    } catch (error) {
        console.error('Error en la funcionalidad de tabs:', error);
    }
});