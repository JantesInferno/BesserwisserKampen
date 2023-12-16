/**
 * 
 * VARIABLES
 * 
 */

let swedish = true;
let dark = true;
let timerWidth;
let interval;

let questionAnswered = false;
let randomQuestion;

const playButton = document.querySelector('.play');
const settingsButton = document.querySelector('.settings');
const helpButton = document.querySelector('.help');
const cancelButton = document.querySelector('.cancel-button');

const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');

const englishMode = document.querySelector('.english');
const swedishhMode = document.querySelector('.swedish');

const gameScreen = document.querySelector('.game-screen');
const questionText = document.querySelector('.question-text');
const continueText = document.querySelector('.continue-text');
const answerButtons = document.querySelectorAll('.answer-button');


// DARK/LIGHT-MODE VARIABLES

const questionStyle = document.querySelector('.question-text')
const cancelStyle = document.querySelector('.cancel-button');
const timerStyle = document.querySelector('.timer');
const modeButtons = document.querySelectorAll('.mode');
const popupLeft = document.querySelector('.popup-left');
const popupRight = document.querySelector('.popup-right');
const popupLis = document.querySelectorAll('.popup-left ul li');
const buttonDifficulty = document.querySelectorAll('.button-difficulty');


/**
 * LOAD EVENTLISTENERS
 */

window.onload = function() {

    /**
     * 
     * EVENTLISTENERS
     * 
     */

    playButton.addEventListener('click', function() {
        document.querySelector('.start-container').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'flex';
    });

    window.addEventListener('load', handleEvent);
    gameScreen.addEventListener('click', handleEvent);
    playButton.addEventListener('click', handleEvent);

    

    window.addEventListener('click', ({ target }) => {
        if(!target.classList.contains('popup') && !(target.classList.contains('settings') || target.classList.contains('help') || target.classList.contains('mode'))) {
            clearPopups()
            settingsButton.style.scale = '1';
            helpButton.style.scale = '1';
      }
    })



    settingsButton.addEventListener('click', () => {
        settingsButton.style.scale = '1.5';
        toggleSlidePopup(".popup-right");
        
    })
    
    helpButton.addEventListener('click', () => {
        helpButton.style.scale = '1.5';
        toggleSlidePopup('.popup-left');
    })

    cancelButton.addEventListener('click', () => {
        document.querySelector('.start-container').style.display = 'flex';
        document.querySelector('.game-screen').style.display = 'none';
    })



    lightMode.addEventListener('click', () => {
        toggleLightMode();
    })
    
    darkMode.addEventListener('click', () => {
        toggleDarkMode();
    })
    


    englishMode.addEventListener('click', () => {
        toggleEnglish();
    })
    
    swedishhMode.addEventListener('click', () => {
        toggleSwedish();
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

function toggleEnglish () {
    swedish = false;
    
    document.querySelector('span').textContent = "Start new game";
    document.querySelector('h2').textContent = "Choose your difficulty level";

    buttonDifficulty[0].textContent = "Easy";
    buttonDifficulty[1].textContent = "Normal";
    buttonDifficulty[2].textContent = "Hard";

    popupLis[0].textContent = "Do this";
    popupLis[1].textContent = "then do that";
    popupLis[2].textContent = "then do this";
    popupLis[3].textContent = "then do that";
    popupLis[4].textContent = "if !this then that is this";


    if (dark) {
        englishMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        swedishhMode.style = "background: black; color: white;";
    }
    else {
        englishMode.style = "background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        swedishhMode.style = "background: white; color: black; border: 1px solid black;";
    }
}

function toggleSwedish () {
    swedish = true;
    
    document.querySelector('span').textContent = "Starta nytt spel";
    document.querySelector('h2').textContent = "Välj svårighetsgrad";

    buttonDifficulty[0].textContent = "Lätt";
    buttonDifficulty[1].textContent = "Normal";
    buttonDifficulty[2].textContent = "Svår";

    popupLis[0].textContent = "Gör si gör så";
    popupLis[1].textContent = "gör så gör si";
    popupLis[2].textContent = "om !si gör så";
    popupLis[3].textContent = "gör så som si";
    popupLis[4].textContent = "simsalabam";

    if (dark) {
        swedishhMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        englishMode.style = "background: black; color: white;";
    }
    else {
        swedishhMode.style = "background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        englishMode.style = "background: white; color: black; border: 1px solid black;";
    }
}

function toggleLightMode () {
    dark = false;

    playButton.classList.remove('play-class-dark');
    playButton.classList.add('play-class-light');

    answerButtons.forEach(x => {
        x.classList.remove('answer-class-dark');
        x.classList.remove('answer-hover-dark');
        x.classList.add('answer-class-light');
        if (!x.disabled) {
            x.classList.add('answer-hover-light');
        }
    })

    questionStyle.classList.remove('question-class-dark');
    questionStyle.classList.add('question-class-light');

    cancelStyle.classList.remove('cancel-class-dark');
    cancelStyle.classList.add('cancel-class-light');

    timerStyle.classList.remove('timer-class-dark');
    timerStyle.classList.add('timer-class-light');

    helpButton.style.stroke = "#7058ad";
    settingsButton.style.stroke = "#499977";

    continueText.querySelector('span').style.color = "rgba(0,4,78,1)";
    continueText.querySelector('span').style.fontWeight = "bold";

    document.querySelector('body').style = "background: url('../light.jpg') no-repeat center center fixed; background-size: cover;";

    modeButtons[0].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
    modeButtons[1].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
    if (swedish){
        modeButtons[3].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        modeButtons[2].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
    }
    else {
        modeButtons[3].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
        modeButtons[2].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
    }

    popupLeft.style.background = "rgba(255, 255, 255, 1)";
    popupLeft.style.color = "rgba(0,4,78,1)";
    popupLeft.style.fontWeight = "bold";

    popupRight.style.background = "rgba(255, 255, 255, 1)";
    popupRight.style.color = "rgba(0,4,78,1)";

    buttonDifficulty.forEach(x => {
        x.style.color = "rgba(0,4,78,1)";
        x.style.fontWeight = "bold";
        })

    document.querySelector('.difficulty-header').style.color = "rgba(0,4,78,1)";
    document.querySelector('header').style.background = "rgba(255, 255, 255, 1)";
    document.querySelector('span').style = "color: rgba(0,4,78,1); font-weight: bold;";
    document.querySelector('.name-logo').src = "../light-logo.png";
}



function toggleDarkMode () {
    dark = true;

    playButton.classList.remove('play-class-light');
    playButton.classList.add('play-class-dark');


    answerButtons.forEach(x => {
        x.classList.remove('answer-class-light');
        x.classList.remove('answer-hover-light');
        x.classList.add('answer-class-dark');
        if (!x.disabled) {
            x.classList.add('answer-hover-dark');
        }
    })



    questionStyle.classList.remove('question-class-light');
    questionStyle.classList.add('question-class-dark');

    cancelStyle.classList.remove('cancel-class-light');
    cancelStyle.classList.add('cancel-class-dark');

    timerStyle.classList.remove('timer-class-light');
    timerStyle.classList.add('timer-class-dark');

    helpButton.style.stroke = "#c370be";
    settingsButton.style.stroke = "#fc6a6a";

    continueText.querySelector('span').style.color = "white";
    continueText.querySelector('span').style.fontWeight = "500";

    document.querySelector('body').style = "background-image: url('../nebula.jpg');";

    modeButtons[0].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    modeButtons[1].style ="background: black; color: white;";
    if (swedish){
        modeButtons[3].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        modeButtons[2].style ="background: black; color: white;";
    }
    else {
        modeButtons[3].style ="background: black; color: white;";
        modeButtons[2].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    }
    
    popupLeft.style.backgroundColor = "rgba(0,0,0, 0.5)";
    popupLeft.style.color = "white";
    popupLeft.style.border = "none";

    popupRight.style.backgroundColor = "rgba(0,0,0, 0.5)";
    popupRight.style.color = "white";
    popupRight.style.border = "none";

    buttonDifficulty.forEach(x => {
        x.style.color = "white";
        })
        
    document.querySelector('.difficulty-header').style.color = "white";
    document.querySelector('header').style.background = "rgba(0, 0, 0, 0.5)";
    document.querySelector('span').style = "color: white;";
    document.querySelector('.name-logo').src = "../dark-logo.png";
}



function handleEvent(event) {

    activateQuestionTimer();

    if (event.type === 'load') {
        const randomQuestionIndex = Math.floor(Math.random() * questions.length);
        randomQuestion = questions[randomQuestionIndex];
        questionText.textContent = randomQuestion.question;

        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = randomQuestion.answers[i];
        }
    }
    else if (event.type === 'click') {
        if (event.target.matches('.answer-button')) {

            stopQuestionTimer();

            const chosenAnswer = event.target.textContent;
            if (chosenAnswer === randomQuestion.correctAnswer) {
                questionAnswered = true;
                event.target.classList.add('correct-answer');
            }
            else {
                event.target.classList.add('wrong-answer');
                for (let i = 0; i < answerButtons.length; i++) {
                    if (answerButtons[i].textContent === randomQuestion.correctAnswer) {
                        answerButtons[i].classList.add('real-answer');
                    }
                }
            }

            disableAnswerButtons();

            continueText.style.display = "flex";
        }
        else if (!event.target.matches('.answer-button') && event.target.id !== 'question-text') {
            const randomQuestionIndex = Math.floor(Math.random() * questions.length);
            randomQuestion = questions[randomQuestionIndex];
            questionText.textContent = randomQuestion.question;

            for (let i = 0; i < answerButtons.length; i++) {
                answerButtons[i].classList.remove('correct-answer', 'wrong-answer', 'real-answer');
                answerButtons[i].textContent = randomQuestion.answers[i];
            }
            questionAnswered = false;
            
            disableAnswerButtons(false);

            continueText.style.display = "none";
        }
    }
}


function disableAnswerButtons(disable = true) {
    if (disable) {
        answerButtons.forEach(x => {
            x.disabled = true;
            if (dark) {
                x.classList.remove('answer-hover-dark');
            }
            else {
                x.classList.remove('answer-hover-light');
            }
        })
    }
    else {
        answerButtons.forEach(x => {
            x.disabled = false;
            if (dark) {
                x.classList.add('answer-hover-dark');
            }
            else {
                x.classList.add('answer-hover-light');
            }
        })
    }
}

function activateQuestionTimer() {
    clearInterval(interval);
    timerWidth = 98;
    interval = setInterval(() => {
        if(timerWidth <= 0) {
            clearInterval(interval)
            disableAnswerButtons();
            continueText.style.display = "flex";
            for (let i = 0; i < answerButtons.length; i++) {
                if (answerButtons[i].textContent === randomQuestion.correctAnswer) {
                    answerButtons[i].classList.add('real-answer');
                }
            }
        }
    
        timerWidth -= 1;
        document.querySelector('.timer').style.width = timerWidth + '%';
    }, 102);
}

function stopQuestionTimer() {
    clearInterval(interval);
}