/**
 * 
 * VARIABLES
 * 
 */

let swedish = true;
let dark = true;

const buttonSettings = document.querySelector('.settings');
const buttonHelp = document.querySelector('.help');

const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');

const englishMode = document.querySelector('.english');
const swedishhMode = document.querySelector('.swedish');

const playButton = document.querySelector('.play');

/**
 * 
 * EVENTLISTENERS
 * 
 */

window.onload = function() {
    /**
     * Load EventListeners
     */

    window.addEventListener('click', ({ target }) => {
        if(!target.classList.contains('popup') && !(target.classList.contains('settings') || target.classList.contains('help') || target.classList.contains('mode'))) {
            clearPopups()
            buttonSettings.style.scale = '1';
            buttonSettings.style.stroke = 'white';
            buttonHelp.style.scale = '1';
            buttonHelp.style.stroke = 'white';
      }
    })



    buttonSettings.addEventListener('click', () => {
        buttonSettings.style.scale = '2';
        toggleSlidePopup(".popup-right");
        
    })
    
    buttonHelp.addEventListener('click', () => {
        buttonHelp.style.scale = '2';
        toggleSlidePopup('.popup-left');
    })



    lightMode.addEventListener('click', () => {
        toggleLightMode();
    })
    
    darkMode.addEventListener('click', () => {
        toggleDarkMode();
    })
    


    englishMode.addEventListener('click', () => {
        swedish = false;
    
        document.querySelector('span').textContent = "Start new game";
        document.querySelector('h2').textContent = "Choose your difficulty level";
        const mode = document.querySelectorAll('.button-difficulty');
        mode[0].textContent = "Easy";
        mode[1].textContent = "Normal";
        mode[2].textContent = "Hard";
    
        const lis = document.querySelectorAll('.popup-left ul li');
        lis[0].textContent = "Do this";
        lis[1].textContent = "then do that";
        lis[2].textContent = "then do this";
        lis[3].textContent = "then do that";
        lis[4].textContent = "if !this then that is this";
    
    
        if (dark) {
            englishMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
            swedishhMode.style = "background: black; color: white;";
        }
        else {
            englishMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
            swedishhMode.style = "background: white; color: black; border: 1px solid black;";
        }
    })
    
    swedishhMode.addEventListener('click', () => {
        swedish = true;
    
        document.querySelector('span').textContent = "Starta nytt spel";
        document.querySelector('h2').textContent = "Välj svårighetsgrad";
        const mode = document.querySelectorAll('.button-difficulty');
        mode[0].textContent = "Lätt";
        mode[1].textContent = "Normal";
        mode[2].textContent = "Svår";
    
        const lis = document.querySelectorAll('.popup-left ul li');
        lis[0].textContent = "Gör si gör så";
        lis[1].textContent = "gör så gör si";
        lis[2].textContent = "om !si gör så";
        lis[3].textContent = "gör så som si";
        lis[4].textContent = "simsalabam";
    
        if (dark) {
            swedishhMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
            englishMode.style = "background: black; color: white;";
        }
        else {
            swedishhMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
            englishMode.style = "background: white; color: black; border: 1px solid black;";
        }
    })
    
}

/**
 * 
 *  FUNCTIONS
 * 
 */

const clearPopups = () => {
    document.querySelectorAll("[class^=popup]").forEach(text => text.classList.remove('open'));
}

function toggleSlidePopup (popupClass) {
    const popup = document.querySelector(popupClass);

    if (popup.classList.contains('open')) {
        popup.classList.remove('open');
    } else {
        popup.classList.add('open');
    }
}

function toggleLightMode () {

    playButton.classList.remove('play-class-dark');
    playButton.classList.add('play-class-light');

    dark = false;
    let a = document.querySelector('body');
    a.style = "background: white;";
    let c = document.querySelectorAll('.mode');
    c[0].style ="background: white; color: black; border: 1px solid black;";
    c[1].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    if (swedish){
        c[3].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        c[2].style ="background: white; color: black; border: 1px solid black;";
    }
    else {
        c[3].style ="background: white; color: black; border: 1px solid black;";
        c[2].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    }
    let d = document.querySelector('div.popup-left');
    d.style.backgroundColor = "white";
    d.style.color = "rgba(89,0,93,1)";
    d.style.fontWeight = "bold";
    d.style.border = "none";
    d.style.borderRight = "1px solid black";
    d.style.borderBottom = "1px solid black";
    let e = document.querySelector('div.popup-right');
    e.style.backgroundColor = "white";
    e.style.color = "black";
    e.style.border = "none";
    e.style.borderLeft = "1px solid black";
    e.style.borderBottom = "1px solid black";
    let h = document.querySelectorAll('.button-difficulty');
    h.forEach(x => {
        x.style.color = "rgba(89,0,93,1)";
        x.style.fontWeight = "bold";
        })
    let i = document.querySelector('.difficulty-header');
    i.style.color = "rgba(0,4,78,1)";
    let j =  document.querySelector('header');
    j.style.border = "none";
}

function toggleDarkMode () {

    playButton.classList.remove('play-class-light');
    playButton.classList.add('play-class-dark');

    dark = true;
    let a = document.querySelector('body');
    a.style = "background-image: url('../nebula.jpg');";
    let c = document.querySelectorAll('.mode');
    c[0].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    c[1].style ="background: black; color: white;";
    if (swedish){
        c[3].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        c[2].style ="background: black; color: white;";
    }
    else {
        c[3].style ="background: black; color: white;";
        c[2].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    }
    let d = document.querySelector('div.popup-left');
    d.style.backgroundColor = "rgba(0,0,0, 0.5)";
    d.style.color = "white";
    d.style.border = "none";
    let e = document.querySelector('div.popup-right');
    e.style.backgroundColor = "rgba(0,0,0, 0.5)";
    e.style.color = "white";
    e.style.border = "none";
    let h = document.querySelectorAll('.button-difficulty');
    h.forEach(x => {
        x.style.color = "white";
        })
    let i = document.querySelector('.difficulty-header');
    i.style.color = "white";
    let j =  document.querySelector('header');
    j.style.border = "none";
}