const toogleButton = document.getElementById('toogle-button');
const buttonIcon = document.getElementById('button-icon')
toogleButton.addEventListener('click', ()=>{

    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        buttonIcon.src = './statics/icons/moon.svg';
        buttonIcon.alt = "moon icon";
    } else {
        buttonIcon.src = './statics/icons/sun.svg';
        buttonIcon.alt = "sun icon";
    }
})