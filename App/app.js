/**
 * 
 * VARIABLES
 * 
 */

let swedish = true;
let dark = true;
let timerWidth;
let interval;
let score = +localStorage.getItem('score');
let scoreRight = +localStorage.getItem('scoreRight');
let scoreWrong = +localStorage.getItem('scoreWrong');
let scorePercentage = +localStorage.getItem('scorePercentage');
let scoreAverage = +localStorage.getItem('scoreAverage');
let totalQuizesTaken = +localStorage.getItem('totalQuizesTaken');
let currentQuiz;

let starIndex;

let questionAnswered = false;
let randomQuestion;
let randomQuestionIndex;
let difficultyQuestionsSwedish;
let difficultyQuestionsEnglish;

const playButton = document.querySelector('.play');
const settingsButton = document.querySelector('.settings');
const helpButton = document.querySelector('.help');
const cancelButton = document.querySelector('.cancel-button');

const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');

const englishMode = document.querySelector('.english');
const swedishhMode = document.querySelector('.swedish');

const playAgainButton = document.querySelector('.play-again-button');
const goHomeButton = document.querySelector('.goHome');
const totalQuestions = 10;
let questionCount = 1;
let correctAnswers = 0;
let autoProceedTimeout;


const gameScreen = document.querySelector('.game-screen');
const questionText = document.querySelector('.question-text');
const continueText = document.querySelector('.continue-text');
const answerButtons = document.querySelectorAll('.answer-button');

const starImg = document.querySelector('.star');
const starButton = document.querySelector('.star-icon');
const scoreHeader = document.querySelector('.score');

const popupScoreRight = document.querySelector('.right');
const popupScoreWrong = document.querySelector('.wrong');
const popupScorePercentage = document.querySelector('.percentage');
const popupScoreAverage = document.querySelector('.score-average');


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
 * LOAD EVENTLISTENERS & OUTPUT
 */

window.onload = function() {

    popupScoreRight.textContent = scoreRight;
    popupScoreWrong.textContent = scoreWrong;
    popupScorePercentage.textContent = scorePercentage + "%";
    popupScoreAverage.textContent = scoreAverage;
    scoreHeader.textContent = score
  

    startGame();


    playButton.addEventListener('click', function() {
        document.querySelector('.start-container').style.display = 'none';
        document.querySelector('.game-screen').style.display = 'flex';
    });

    window.addEventListener('load', handleEvent);
    gameScreen.addEventListener('click', handleEvent);
    playButton.addEventListener('click', handleEvent);

    

    window.addEventListener('click', ({ target }) => {
        if(!target.classList.contains('popup') && !(target.classList.contains('settings') || target.classList.contains('help') || target.classList.contains('mode') || target.classList.contains('star-icon'))) {
            clearPopups()
            settingsButton.style.scale = '1';
            starButton.style.scale = '1';
      }
    })

    buttonDifficulty.forEach((button) => {
        button.addEventListener('click', () => {
            let tempArr = [isEasy, isMedium, isHard];
            let tempString = dark ? 'active-difficulty-dark' : 'active-difficulty-light';
            for (let i = 0; i < buttonDifficulty.length; i++) {
                if (buttonDifficulty[i].contains(event.target)) {
                    tempArr[i] = true;
                    buttonDifficulty[i].classList.remove('difficulty-hover');
                    buttonDifficulty[i].classList.add('difficulty-no-hover');
                    buttonDifficulty[i].classList.add(tempString);
                }
                else {
                    buttonDifficulty[i].classList.remove(tempString);
                    tempArr[i] = false;
                    buttonDifficulty[i].classList.remove('difficulty-no-hover');
                    buttonDifficulty[i].classList.add('difficulty-hover');
                }
            }
            isEasy = tempArr[0];
            isMedium = tempArr[1];
            isHard = tempArr[2];
        });
    });

    settingsButton.addEventListener('click', () => {
        toggleSlidePopup(".popup-right");
        
    })
    
    starButton.addEventListener('click', () => {
        toggleSlidePopup('.popup-left');
    })

    cancelButton.addEventListener('click', () => {
        document.querySelector('.start-container').style.display = 'flex';
        document.querySelector('.game-screen').style.display = 'none';
        stopQuestionTimer();
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
    
    document.querySelector('.play-text').textContent = "Start new game";
    document.querySelector('h2').textContent = "Select difficulty level";

    buttonDifficulty[0].textContent = "Easy";
    buttonDifficulty[1].textContent = "Normal";
    buttonDifficulty[2].textContent = "Hard";

    popupLis[0].textContent = "Questions";
    popupLis[2].textContent = "Ratio";
    popupLis[4].textContent = "Avg score";

    if (randomQuestion !== undefined) {
        randomQuestion = difficultyQuestionsEnglish[randomQuestionIndex];
        questionText.textContent = randomQuestion.question;

        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = randomQuestion.answers[i];
        }
    }

    if (dark) {
        englishMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        swedishhMode.style = "background: black; color: white;";
    }
    else {
        englishMode.style = "background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        swedishhMode.style = "background: white; color: black; border: 1px solid black;";
    }

    cancelButton.querySelector('span').textContent = "Quit";
}

function toggleSwedish () {
    swedish = true;
    
    document.querySelector('.play-text').textContent = "Starta nytt spel";
    document.querySelector('h2').textContent = "Välj svårighetsgrad";

    buttonDifficulty[0].textContent = "Lätt";
    buttonDifficulty[1].textContent = "Normal";
    buttonDifficulty[2].textContent = "Svår";

    popupLis[0].textContent = "Frågor";
    popupLis[2].textContent = "Ratio";
    popupLis[4].textContent = "Snittpoäng";

    if (randomQuestion !== undefined) {
        randomQuestion = difficultyQuestionsSwedish[randomQuestionIndex];
        questionText.textContent = randomQuestion.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = randomQuestion.answers[i];
        }
    }

    if (dark) {
        swedishhMode.style = "background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        englishMode.style = "background: black; color: white;";
    }
    else {
        swedishhMode.style = "background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        englishMode.style = "background: white; color: black; border: 1px solid black;";
    }

    cancelButton.querySelector('span').textContent = "Avsluta";
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

    settingsButton.style.stroke = "#499977";

    continueText.querySelector('span').style.color = "rgba(0,4,78,1)";
    continueText.querySelector('span').style.fontWeight = "bold";

    document.querySelector('body').style = "background: url('../light.jpg') no-repeat center center fixed; background-size: cover;";

    modeButtons[0].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
    modeButtons[1].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
    if (swedish){
        modeButtons[2].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
        modeButtons[3].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
    }
    else {
        modeButtons[2].style ="background: white; color: rgba(0,4,78,1); border: 1px solid rgba(0,4,78,1);";
        modeButtons[3].style ="background: linear-gradient(90deg, rgba(0,255,179,1) 0%, rgba(10,0,103,1) 100%); color: white;";
    }

    popupLeft.style.background = "rgba(255, 255, 255, 0.5)";
    popupLeft.style.color = "rgba(0,4,78,1)";
    popupLeft.style.fontWeight = "bold";

    popupRight.style.background = "rgba(255, 255, 255, 0.5)";
    popupRight.style.color = "rgba(0,4,78,1)";

    buttonDifficulty.forEach(x => {
        x.style.color = "rgba(0,4,78,1)";
        x.style.fontWeight = "bold";
        })

    document.querySelector('.popup-left ul').style.background = "rgba(0,4,78,0.5)";
    document.querySelectorAll('.popup-left ul li').forEach(x => {
        x.style.background = "rgba(255,255,255,1)";
    });
    document.querySelector('.difficulty-header').style.color = "rgba(0,4,78,1)";
    document.querySelector('header').style.background = "rgba(0, 22, 54, 0.9)";
    document.querySelector('.play-text').style = "color: rgba(0,4,78,1); font-weight: bold;";
    document.querySelector('.name-logo').src = "../light-logo.png";
    document.querySelector('.difficulty-no-hover').classList.remove('active-difficulty-dark');
    document.querySelector('.difficulty-no-hover').classList.add('active-difficulty-light');
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

    settingsButton.style.stroke = "#fc6a6a";

    continueText.querySelector('span').style.color = "white";
    continueText.querySelector('span').style.fontWeight = "500";

    document.querySelector('body').style = "background-image: url('../nebula.jpg');";

    modeButtons[0].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
    modeButtons[1].style ="background: black; color: white;";
    if (swedish){
        modeButtons[2].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
        modeButtons[3].style ="background: black; color: white;";
    }
    else {
        modeButtons[2].style ="background: black; color: white;";
        modeButtons[3].style ="background: linear-gradient(90deg, rgba(12,2,181,1) 0%, rgba(179,3,167,1) 100%); color: white;";
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
        
    document.querySelector('.popup-left ul').style.background = "rgba(0, 0, 0, 0.5)";
    document.querySelectorAll('.popup-left ul li').forEach(x => {
        x.style.background = "rgba(0,0,0,0.5)";
    });
    document.querySelector('.difficulty-header').style.color = "white";
    document.querySelector('header').style.background = "rgba(0, 0, 0, 0.5)";
    document.querySelector('.play-text').style = "color: white;";
    document.querySelector('.name-logo').src = "../dark-logo.png";
    document.querySelector('.difficulty-no-hover').classList.remove('active-difficulty-light');
    document.querySelector('.difficulty-no-hover').classList.add('active-difficulty-dark');
}


function startGame () {
    copyQuestions = [...questions];
    copyQuestionsSwedish = [...questionsSwedish];
}


function getRandomQuestion() {
    let tempString;

    if (isEasy) 
        tempString = "easy";
    else if (isMedium) 
        tempString = "medium";
    else if (isHard) 
        tempString = "hard";

    difficultyQuestionsSwedish = copyQuestionsSwedish.filter(question => question.difficulty === tempString);
    difficultyQuestionsEnglish = copyQuestions.filter(question => question.difficulty === tempString);

    if (difficultyQuestionsSwedish.length > 0) {
        randomQuestionIndex = Math.floor(Math.random() * difficultyQuestionsSwedish.length);

        if (swedish)
            randomQuestion = difficultyQuestionsSwedish[randomQuestionIndex];
        else 
            randomQuestion = difficultyQuestionsEnglish[randomQuestionIndex];

        questionText.textContent = randomQuestion.question;

        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].classList.remove('correct-answer', 'wrong-answer', 'real-answer');
            answerButtons[i].textContent = randomQuestion.answers[i];
        }

        let indexInCopyQuestions;

        if (swedish)
            indexInCopyQuestions = copyQuestionsSwedish.indexOf(randomQuestion);
        else
            indexInCopyQuestions = copyQuestions.indexOf(randomQuestion);

        copyQuestions.splice(indexInCopyQuestions, 1);
        copyQuestionsSwedish.splice(indexInCopyQuestions, 1);

        clearTimeout(autoProceedTimeout);
        disableAnswerButtons(false);
        starImg.classList.remove('star-button' + starIndex);
        activateQuestionTimer();
    }
}

function handleEvent(event) {
    if (event.type === 'click') {
        if (event.target.matches('.answer-button')) {
            stopQuestionTimer();
            handleAnswer(event);
        }
        else if (playButton.contains(event.target)) {
            getRandomQuestion();
            starImg.style.display = "none";
        }
        else if (event.target.matches('.play-again-button')) {
            resetGame();
        } 
        else if (event.target.matches('.goHome')) {
            goToHome();
        }
    }
}


function handleAnswer(event) {
    const chosenAnswer = event.target.textContent;

    if (chosenAnswer === randomQuestion.correctAnswer) {
        event.target.classList.add('correct-answer');
        starImg.style.display = "block";
        for (let i = 0; i < answerButtons.length; i++){
            if (event.target === answerButtons[i]) {
                starImg.classList.add('star-button' + ++i);
                starIndex = i;
            }
        }
        setTimeout(function() {
            starImg.style.display = "none";
            starButton.style.scale = "0.7";
        }, 800);
        setTimeout(function() {
            starButton.style.scale = "1";
            addScore();
        }, 950)
        correctAnswers++;
    }
    else {
        event.target.classList.add('wrong-answer');
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].textContent === randomQuestion.correctAnswer) {
                answerButtons[i].classList.add('real-answer');
                removeScore();
            }
        }
    }

    disableAnswerButtons();

    const resultContainer = document.querySelector('.result-container');
    const scoreText = resultContainer.querySelector('.scoreText');
    scoreText.textContent = 'Your score: ' + correctAnswers + ' out of ' + totalQuestions;

    setTimeout(function () {
        if (questionCount < totalQuestions) {
            questionCount++;
            getRandomQuestion();
            activateQuestionTimer();
        } else {
            showResults();
        }
    }, 1000);
}


function showResults() {
    const resultContainer = document.querySelector('.result-container');

    if (resultContainer) {
        const scoreText = resultContainer.querySelector('.scoreText');
       

        if (scoreText) {
            addQuizStatistics();
            scoreText.textContent = 'Your score is: ' + correctAnswers + ' out of ' + totalQuestions;

            const circularProgress = document.querySelector('.circular-progress');
            const progressValue = document.querySelector('.progress-value');
            let progressStartValue = -1;
            let progressEndValue = (correctAnswers / totalQuestions) * 100;
            let speed = 20;

            let progress = setInterval(() => {
                progressStartValue++;

                progressValue.textContent = `${progressStartValue}%`;
                circularProgress.style.background = `conic-gradient(#cb0163 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

                
                if (progressStartValue == progressEndValue) {
                    clearInterval(progress);
                    if (progressEndValue >= 80)
                        document.querySelector('.confetti').style.display = "flex";
                    else
                        document.querySelector('.confetti').style.display = "none";
                }
            },speed);

            resultContainer.style.display = 'flex';
            questionCount = 1;
            correctAnswers = 0;
            questionAnswered = false;
            document.querySelector('.game-screen').style.display = 'none';

            
            const playAgainButton = resultContainer.querySelector('.play-again-button');
            const goHomeButton = resultContainer.querySelector('.goHome');

            playAgainButton.addEventListener('click', resetGame);
            goHomeButton.addEventListener('click', goToHome);
        }
    }
}


function resetGame() {
    document.querySelector('.result-container').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'flex';
    playButton.click();
}

function goToHome() {
    document.querySelector('.result-container').style.display = 'none';
    document.querySelector('.start-container').style.display = 'flex';
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
            for (let i = 0; i < answerButtons.length; i++) {
                if (answerButtons[i].textContent === randomQuestion.correctAnswer) {
                    answerButtons[i].classList.add('real-answer');
                }
            }
            removeScore();

            setTimeout(function () {
                if (questionCount < totalQuestions) {
                    questionCount++;
                    getRandomQuestion();
                    activateQuestionTimer();
                } else {
                    showResults();
                }
            }, 2500);
        }
    
        timerWidth -= 1;
        document.querySelector('.timer').style.width = timerWidth + '%';
    }, 102);
}

function stopQuestionTimer() {
    clearInterval(interval);
}

function addScore() {
    if (isEasy)
        score++;
    else if (isMedium)
        score += 2;
    else if (isHard)
        score += 3;

    scoreRight++;
    scorePercentage = Math.round((scoreRight/(scoreRight+scoreWrong)) * 100);

    scoreHeader.textContent = score;
    popupScoreRight.textContent = scoreRight;
    popupScorePercentage.textContent = scorePercentage + "%";

    localStorage.setItem('score', score);
    localStorage.setItem('scoreRight', scoreRight);
    localStorage.setItem('scorePercentage', scorePercentage);
}

function removeScore() {
    if (isEasy && score >= 1)
        score--;
    else if (isMedium && score >= 2)
        score -= 2;
    else if (isHard && score >= 3)
        score -= 3;
    scoreWrong++;
    scorePercentage = Math.round((scoreRight/(scoreRight+scoreWrong)) * 100);

    scoreHeader.textContent = score;
    popupScoreWrong.textContent = scoreWrong;
    popupScorePercentage.textContent = scorePercentage + "%";

    localStorage.setItem('score', score);
    localStorage.setItem('scoreWrong', scoreWrong);
    localStorage.setItem('scorePercentage', scorePercentage);
}

function addQuizStatistics() {
    totalQuizesTaken++;
    scoreAverage = Math.round(scoreRight/totalQuizesTaken * 100) / 100;

    popupScoreAverage.textContent = scoreAverage;

    localStorage.setItem('scoreAverage', scoreAverage);
    localStorage.setItem('totalQuizesTaken', totalQuizesTaken);
}