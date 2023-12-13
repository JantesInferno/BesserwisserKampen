const data = 
    [
        {
            question: "fråga",
            options: ['1', '2', '3', '4'],
            answer: '1'
        }
    ];

    const questionText = document.querySelector('.question-text');
    const answerButtons = document.querySelectorAll('.answer-button');
    const startButton = document.querySelector('#start-game');
    const gameScreen = document.querySelector('#game-screen');
    
    
    let questionAnswered = false;
    let randomQuestion;
    
    const questions = [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of England?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "London"
        },
        {
            question: "What is the capital of Italy?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "Rome"
        },
        {
            question: "What is the capital of Germany?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "Berlin"
        },
        {
            question: "What does HTML stand for?",
            answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Mode Language"],
            correctAnswer: "Hyper Text Markup Language"
        },
        {
            question: "Which programming language is known as the 'language of the web'?",
            answers: ["Python", "JavaScript", "Java", "C++"],
            correctAnswer: "JavaScript"
        },
        {
            question: "What does CSS stand for?",
            answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "What is the primary purpose of using a 'for loop' in programming?",
            answers: ["Iteration", "Conditional statements", "Function declaration", "Variable declaration"],
            correctAnswer: "Iteration"
        },
        {
            question: "What is the powerhouse of the cell?",
            answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
            correctAnswer: "Mitochondria"
        },
        {
            question: "What is the process by which plants make their own food called?",
            answers: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
            correctAnswer: "Photosynthesis"
        },
        {
            question: "Which blood cells are responsible for immune response?",
            answers: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
            correctAnswer: "White blood cells"
        },
        {
            question: "What is the largest organ in the human body?",
            answers: ["Brain", "Skin", "Liver", "Lungs"],
            correctAnswer: "Skin"
        },
        {
            question: "What is the longest river in the world?",
            answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            correctAnswer: "Nile"
        },
        {
            question: "Which is the largest desert in the world?",
            answers: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
            correctAnswer: "Sahara Desert"
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Melbourne", "Sydney", "Canberra", "Perth"],
            correctAnswer: "Canberra"
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            answers: ["China", "India", "Japan", "South Korea"],
            correctAnswer: "Japan"
        },
        {
            question: "Who was the first President of the United States?",
            answers: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
            correctAnswer: "George Washington"
        },
        {
            question: "Which war was fought between the North and South regions of the United States?",
            answers: ["Civil War", "World War I", "Revolutionary War", "Vietnam War"],
            correctAnswer: "Civil War"
        },
        {
            question: "Which ancient civilization built the Machu Picchu in Peru?",
            answers: ["Maya", "Inca", "Aztec", "Egyptians"],
            correctAnswer: "Inca"
        },
        {
            question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            answers: ["Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev", "Vladimir Lenin"],
            correctAnswer: "Nikita Khrushchev"
        },
        {
            question: "Which event triggered the start of World War I?",
            answers: ["Assassination of Archduke Franz Ferdinand", "Bombing of Pearl Harbor", "Treaty of Versailles", "Invasion of Poland"],
            correctAnswer: "Assassination of Archduke Franz Ferdinand"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: ["F. Scott Fitzgerald", "Harper Lee", "John Steinbeck", "Mark Twain"],
            correctAnswer: "Harper Lee"
        },
        {
            question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
            answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
            correctAnswer: "Hamlet"
        },
        {
            question: "Who is the author of '1984'?",
            answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
            correctAnswer: "George Orwell"
        },
        {
            question: "Which literary character lived at 221B Baker Street?",
            answers: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Nancy Drew"],
            correctAnswer: "Sherlock Holmes"
        },
        {
            question: "Who wrote the poem 'The Raven'?",
            answers: ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Robert Frost"],
            correctAnswer: "Edgar Allan Poe"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Au", "Ag", "G", "Go"],
            correctAnswer: "Au"
        },
        {
            question: "Who developed the theory of relativity?",
            answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What is the smallest unit of matter?",
            answers: ["Molecule", "Atom", "Proton", "Electron"],
            correctAnswer: "Atom"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
            correctAnswer: "Mars"
        },
        {
            question: "What type of energy is stored in a battery?",
            answers: ["Kinetic energy", "Nuclear energy", "Potential energy", "Chemical energy"],
            correctAnswer: "Chemical energy"
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
            correctAnswer: "Christopher Nolan"
        },
        {
            question: "Which film won the Academy Award for Best Picture in 2020?",
            answers: ["Parasite", "Joker", "1917", "The Shape of Water"],
            correctAnswer: "Parasite"
        },
        {
            question: "Who played the lead role in 'The Godfather'?",
            answers: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Joe Pesci"],
            correctAnswer: "Marlon Brando"
        },
        {
            question: "Which movie features a character named Forrest Gump?",
            answers: ["Saving Private Ryan", "The Green Mile", "Forrest Gump", "Cast Away"],
            correctAnswer: "Forrest Gump"
        },
        {
            question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
            answers: ["Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr.", "Chris Evans"],
            correctAnswer: "Robert Downey Jr."
        },
        {
            question: "Which country won the FIFA World Cup in 2018?",
            answers: ["Germany", "Brazil", "France", "Spain"],
            correctAnswer: "France"
        },
        {
            question: "In which sport can a player score a 'try'?",
            answers: ["Soccer", "Rugby", "Tennis", "Basketball"],
            correctAnswer: "Rugby"
        },
        {
            question: "Who holds the record for the most Olympic gold medals?",
            answers: ["Usain Bolt", "Michael Phelps", "Jesse Owens", "Carl Lewis"],
            correctAnswer: "Michael Phelps"
        },
        {
            question: "Which tennis player has won the most Grand Slam titles?",
            answers: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"],
            correctAnswer: "Serena Williams"
        },
        {
            question: "What is the national sport of Canada?",
            answers: ["Lacrosse", "Hockey", "Soccer", "Basketball"],
            correctAnswer: "Lacrosse"
        }
    
    ];
    
    window.addEventListener('load', handleEvent);
    gameScreen.addEventListener('click', handleEvent);
    
    function handleEvent(event) {
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
            }
    
        };
    }