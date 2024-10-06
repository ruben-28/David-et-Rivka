document.getElementById('language-select').addEventListener('change', function () {
    const selectedLang = this.value;

    if (selectedLang === 'fr') {
        window.location.href = 'francais.html'; // Redirige vers la page en français
    } else if (selectedLang === 'he') {
        window.location.href = 'hebreu.html'; // Redirige vers la page en hébreu
    }
});

// Initialiser la langue correcte dans le menu déroulant après redirection
window.addEventListener('load', function() {
    const lang = document.documentElement.lang;
    const select = document.getElementById('language-select');

    if (lang === 'fr') {
        select.value = 'fr';
    } else if (lang === 'he') {
        select.value = 'he';
    }
});
