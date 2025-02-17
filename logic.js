// DARK MODE //////////////////////////////////////////////////////////////
const toogleButton = document.getElementById('toogle-button');
const buttonIcon = document.getElementById('button-icon')
toogleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        buttonIcon.src = './statics/icons/moon.svg';
        buttonIcon.alt = "moon icon";
    } else {
        buttonIcon.src = './statics/icons/sun.svg';
        buttonIcon.alt = "sun icon";
    }
})


// TRANSLATIONS //////////////////////////////////////////////////////////
// Creamos el objeto de traducciones dinámicamente
// Cada elemento que necesitemos traducir debe tener un atributo "es" con la traducción al español y un ID definido
const translations = { en: {}, es: {} };
document.querySelectorAll('[es]').forEach(el => {
    const key = el.id;
    if (key) {
        // El contenido original del HTML se toma como la traducción en inglés, se utiliza innerHTML para que se renderice la etiqueta <br> y no se trate como texto plano
        translations.en[key] = el.innerHTML.trim();
        // El atributo "es" contiene la traducción al español
        translations.es[key] = el.getAttribute('es').trim();
    }
});
// EJ :
// const translations = {
//     en: {
//       langSwitch: "En",
//     },
//     es: {
//       langSwitch: "Es"
//     },
//   };

// Idioma inicial
let currentLang = 'en';

// Función que recorre todas las claves de translations[currentLang] y actualiza los elementos correspondientes
function updateContent() {
    const langData = translations[currentLang];
    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = langData[key];
        }
    });
    // EJ: document.getElementById('langSwitch').textContent = translations[currentLang].langSwitch;
}

// Event listener para el botón de cambio de idioma
document.getElementById('langSwitch').addEventListener('click', () => {
    // Alterna entre 'en' y 'es'
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateContent();
});