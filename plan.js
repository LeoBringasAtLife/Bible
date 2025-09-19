document.addEventListener('DOMContentLoaded', function () {
    // Manejar clicks en los botones de día
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(button => {
        button.addEventListener('click', function () {
            dayButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Manejar el botón de iniciar lectura
    const startReadingBtn = document.querySelector('.start-reading-btn');
    if (startReadingBtn) {
        startReadingBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            window.open('https://www.bible.com/es/bible/149/NEH.1.RVR1960', '_blank');
        });
    }

    // Manejar clicks en los items de lectura
    const readingItems = document.querySelectorAll('.reading-item');
    readingItems.forEach(item => {
        item.addEventListener('click', function () {
            if (!this.querySelector('.start-reading-btn')) {
                const chapter = this.querySelector('.reading-title').textContent;
                const chapterNum = chapter.match(/\d+/)[0];
                window.open(`https://www.bible.com/es/bible/149/NEH.${chapterNum}.RVR1960`, '_blank');
            }
        });
    });
});