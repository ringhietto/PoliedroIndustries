function darkmode() {
    // crea array "temi" prendendo dalla pagina tutti gli elementi "link" VAI ALLA SEZIONE ELEMENT CON ID MAIN CSS
    var temi = document.getElementById('main-css');

    // cambia il contenuto di "href, cambiando effettivamente il foglio di stile della pagina" 
    if (temi.getAttribute('href') == 'style.css') {
        temi.setAttribute('href', 'switch.css');
    } else {
        temi.setAttribute('href', 'style.css');
    }
}
