

let isEasy = false;
let isMedium = true;
let isHard = false;

let copyQuestions = [];
let copyQuestionsSwedish = [];

const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris",
        difficulty: "easy"
    },
    {
        question: "What is the capital of England?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "London",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Italy?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Rome",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Germany?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Berlin",
        difficulty: "easy"
    },
    {
        question: "What is the longest river in the world?",
        answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
        difficulty: "easy"
    },
    {
        question: "What is the largest organ in the human body?",
        answers: ["Brain", "Skin", "Liver", "Lungs"],
        correctAnswer: "Skin",
        difficulty: "easy"
    },
    {
        question: "Which is the largest desert in the world?",
        answers: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
        correctAnswer: "Sahara Desert",
        difficulty: "easy"
    },
    {
        question: "What is the capital of Australia?",
        answers: ["Melbourne", "Sydney", "Canberra", "Perth"],
        correctAnswer: "Canberra",
        difficulty: "easy"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: ["China", "India", "Japan", "South Korea"],
        correctAnswer: "Japan",
        difficulty: "easy"
    },
    {
        question: "Who is the author of '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
        correctAnswer: "George Orwell",
        difficulty: "easy"
    },
    {
        question: "Which literary character lived at 221B Baker Street?",
        answers: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Nancy Drew"],
        correctAnswer: "Sherlock Holmes",
        difficulty: "easy"
    },
    {
        question: "Who wrote the poem 'The Raven'?",
        answers: ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Robert Frost"],
        correctAnswer: "Edgar Allan Poe",
        difficulty: "easy"
    },
    {
        question: "Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
        difficulty: "easy"
    },
    {
        question: "What is the smallest unit of matter?",
        answers: ["Molecule", "Atom", "Proton", "Electron"],
        correctAnswer: "Atom",
        difficulty: "easy"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Mars",
        difficulty: "easy"
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
        correctAnswer: "Christopher Nolan",
        difficulty: "easy"
    },
    {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        answers: ["Parasite", "Joker", "1917", "The Shape of Water"],
        correctAnswer: "Parasite",
        difficulty: "easy"
    },
    {
        question: "Who played the lead role in 'The Godfather'?",
        answers: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Joe Pesci"],
        correctAnswer: "Marlon Brando",
        difficulty: "easy"
    },
    {
        question: "Which movie features a character named Forrest Gump?",
        answers: ["Saving Private Ryan", "The Green Mile", "Forrest Gump", "Cast Away"],
        correctAnswer: "Forrest Gump",
        difficulty: "easy"
    },
    {
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        answers: ["Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr.", "Chris Evans"],
        correctAnswer: "Robert Downey Jr.",
        difficulty: "easy"
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Mode Language"],
        correctAnswer: "Hyper Text Markup Language",
        difficulty: "medium"
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        answers: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "JavaScript",
        difficulty: "medium"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        difficulty: "medium"
    },
    {
        question: "What is the primary purpose of using a 'for loop' in programming?",
        answers: ["Iteration", "Conditional statements", "Function declaration", "Variable declaration"],
        correctAnswer: "Iteration",
        difficulty: "medium"
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
        correctAnswer: "Mitochondria",
        difficulty: "medium"
    },
    {
        question: "What is the process by which plants make their own food called?",
        answers: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        correctAnswer: "Photosynthesis",
        difficulty: "medium"
    },
    {
        question: "Which blood cells are responsible for immune response?",
        answers: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
        correctAnswer: "White blood cells",
        difficulty: "medium"
    },
    {
        question: "Who was the first President of the United States?",
        answers: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        correctAnswer: "George Washington",
        difficulty: "medium"
    },
    {
        question: "Which war was fought between the North and South regions of the United States?",
        answers: ["Civil War", "World War I", "Revolutionary War", "Vietnam War"],
        correctAnswer: "Civil War",
        difficulty: "medium"
    },
    {
        question: "Which ancient civilization built the Machu Picchu in Peru?",
        answers: ["Maya", "Inca", "Aztec", "Egyptians"],
        correctAnswer: "Inca",
        difficulty: "medium"
    },
    {
        question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        answers: ["Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev", "Vladimir Lenin"],
        correctAnswer: "Nikita Khrushchev",
        difficulty: "medium"
    },
    {
        question: "Which event triggered the start of World War I?",
        answers: ["Assassination of Archduke Franz Ferdinand", "Bombing of Pearl Harbor", "Treaty of Versailles", "Invasion of Poland"],
        correctAnswer: "Assassination of Archduke Franz Ferdinand",
        difficulty: "medium"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["F. Scott Fitzgerald", "Harper Lee", "John Steinbeck", "Mark Twain"],
        correctAnswer: "Harper Lee",
        difficulty: "medium"
    },
    {
        question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
        answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
        correctAnswer: "Hamlet",
        difficulty: "medium"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "G", "Go"],
        correctAnswer: "Au",
        difficulty: "medium"
    },
    {
        question: "What type of energy is stored in a battery?",
        answers: ["Kinetic energy", "Nuclear energy", "Potential energy", "Chemical energy"],
        correctAnswer: "Chemical energy",
        difficulty: "medium"
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        answers: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "France",
        difficulty: "medium"
    },
    {
        question: "In which sport can a player score a 'try'?",
        answers: ["Soccer", "Rugby", "Tennis", "Basketball"],
        correctAnswer: "Rugby",
        difficulty: "medium"
    },
    {
        question: "Who holds the record for the most Olympic gold medals?",
        answers: ["Usain Bolt", "Michael Phelps", "Jesse Owens", "Carl Lewis"],
        correctAnswer: "Michael Phelps",
        difficulty: "medium"
    },
    {
        question: "Which tennis player has won the most Grand Slam titles?",
        answers: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"],
        correctAnswer: "Serena Williams",
        difficulty: "medium"
    },
    {
        question: "What is the national sport of Canada in the summer?",
        answers: ["Lacrosse", "Hockey", "Soccer", "Basketball"],
        correctAnswer: "Lacrosse",
        difficulty: "medium"
    },
    {
        question: "What is the process by which cells convert glucose into energy in the absence of oxygen?",
        answers: ["Glycolysis", "Krebs cycle", "Fermentation", "Oxidative phosphorylation"],
        correctAnswer: "Fermentation",
        difficulty: "hard"
    },
    {
        question: "What is the name of the process where RNA is synthesized from a DNA template?",
        answers: ["Translation", "Transcription", "Replication", "Mutation"],
        correctAnswer: "Transcription",
        difficulty: "hard"
    },
    {
        question: "What is the term for a sudden, uncontrolled division of cells?",
        answers: ["Carcinogenesis", "Metastasis", "Mutation", "Tumor"],
        correctAnswer: "Mutation",
        difficulty: "hard"
    },
    {
        question: "In genetics, what term is used to describe the masking of the effect of one gene by another?",
        answers: ["Dominance", "Codominance", "Epistasis", "Penetrance"],
        correctAnswer: "Epistasis",
        difficulty: "hard"
    },
    {
        question: "What is the name of the process by which a cell engulfs large particles or other cells?",
        answers: ["Exocytosis", "Endocytosis", "Phagocytosis", "Pinocytosis"],
        correctAnswer: "Phagocytosis",
        difficulty: "hard"
    },
    {
        question: "What is the fundamental unit of capacitance in the International System of Units (SI)?",
        answers: ["Ohm", "Farad", "Tesla", "Henry"],
        correctAnswer: "Farad",
        difficulty: "hard"
    },
    {
        question: "What is the phenomenon where a wave changes direction upon crossing a boundary between two mediums?",
        answers: ["Refraction", "Diffraction", "Reflection", "Interference"],
        correctAnswer: "Refraction",
        difficulty: "hard"
    },
    {
        question: "What is the name of the law that states that the total electric flux through a closed surface is equal to the enclosed charge divided by the permittivity?",
        answers: ["Gauss's Law", "Ohm's Law", "Ampère's Law", "Faraday's Law"],
        correctAnswer: "Gauss's Law",
        difficulty: "hard"
    },
    {
        question: "Which physicist formulated the theory of special relativity?",
        answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Werner Heisenberg"],
        correctAnswer: "Albert Einstein",
        difficulty: "hard"
    },
    {
        question: "What is the SI unit of magnetic flux?",
        answers: ["Tesla", "Henry", "Weber", "Gauss"],
        correctAnswer: "Weber",
        difficulty: "hard"
    },
    {
        question: "What is the oldest active professional football (soccer) club in the world?",
        answers: ["Sheffield FC", "Notts County FC", "Manchester United", "Real Madrid"],
        correctAnswer: "Sheffield FC",
        difficulty: "hard"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie", "Rosalind Franklin", "Mother Teresa", "Ada Lovelace"],
        correctAnswer: "Marie Curie",
        difficulty: "hard"
    },
    {
        question: "What is the collective name for a group of crows?",
        answers: ["A murder", "A flock", "A herd", "A colony"],
        correctAnswer: "A murder",
        difficulty: "hard"
    },
    {
        question: "Who painted the famous mural 'The Persistence of Memory'?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Leonardo da Vinci"],
        correctAnswer: "Salvador Dalí",
        difficulty: "hard"
    },
    {
        question: "In Greek mythology, who was the goddess of victory?",
        answers: ["Athena", "Hera", "Artemis", "Nike"],
        correctAnswer: "Nike",
        difficulty: "hard"
    },
    {
        question: "Which country has the most time zones?",
        answers: ["United States", "Russia", "China", "Australia"],
        correctAnswer: "Russia",
        difficulty: "hard"
    },
    {
        question: "What is the deepest point in the Earth's oceans?",
        answers: ["Mariana Trench", "Puerto Rico Trench", "Tonga Trench", "Java Trench"],
        correctAnswer: "Mariana Trench",
        difficulty: "hard"
    },
    {
        question: "Who is known as the father of modern physics?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Max Planck"],
        correctAnswer: "Albert Einstein",
        difficulty: "hard"
    },
    {
        question: "Which element has the highest melting point?",
        answers: ["Tungsten", "Carbon", "Titanium", "Platinum"],
        correctAnswer: "Tungsten",
        difficulty: "hard"
    },
    {
        question: "Who composed the famous classical music piece 'The Four Seasons'?",
        answers: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Johann Sebastian Bach"],
        correctAnswer: "Antonio Vivaldi",
        difficulty: "hard"
    },
    {
        question: "Which language has the most words?",
        answers: ["English", "Chinese", "Russian", "German"],
        correctAnswer: "English",
        difficulty: "hard"
    },
    {
        question: "What is the longest-running Broadway show?",
        answers: ["Les Misérables", "The Phantom of the Opera", "Cats", "Chicago"],
        correctAnswer: "The Phantom of the Opera",
        difficulty: "hard"
    },
    {
        question: "Which emperor is known for 'The Burning of Rome'?",
        answers: ["Julius Caesar", "Augustus", "Nero", "Constantine the Great"],
        correctAnswer: "Nero",
        difficulty: "hard"
    },
    {
        question: "Who is considered the founder of psychoanalysis?",
        answers: ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Erik Erikson"],
        correctAnswer: "Sigmund Freud",
        difficulty: "hard"
    },
    {
        question: "Which ancient wonder was located in the city of Babylon?",
        answers: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Statue of Zeus at Olympia", "Temple of Artemis at Ephesus"],
        correctAnswer: "Hanging Gardens of Babylon",
        difficulty: "hard"
    }
];

const questionsSwedish = [
    {
        question: "Vad är huvudstaden i Frankrike?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris",
        difficulty: "easy"
    },
    {
        question: "Vad är huvudstaden i England?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "London",
        difficulty: "easy"
    },
    {
        question: "Vad är huvudstaden i Italien?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Rome",
        difficulty: "easy"
    },
    {
        question: "Vad är huvudstaden i Tyskland?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Berlin",
        difficulty: "easy"
    },
    {
        question: "Vilken är världens längsta flod?",
        answers: ["Nilen", "Amazonas", "Yangtze", "Mississippi"],
        correctAnswer: "Nilen",
        difficulty: "easy"
    },
    {
        question: "Vad är det största organet i människokroppen?",
        answers: ["Hjärnan", "Huden", "Levern", "Lungorna"],
        correctAnswer: "Huden",
        difficulty: "easy"
    },
    {
        question: "Vilken är världens största öken?",
        answers: ["Saharaöknen", "Arabiska öknen", "Gobiöknen", "Kalahariöknen"],
        correctAnswer: "Saharaöknen",
        difficulty: "easy"
    },
    {
        question: "Vad är huvudstaden i Australien?",
        answers: ["Melbourne", "Sydney", "Canberra", "Perth"],
        correctAnswer: "Canberra",
        difficulty: "easy"
    },
    {
        question: "Vilket land kallas 'solens uppgångs land'?",
        answers: ["Kina", "Indien", "Japan", "Sydkorea"],
        correctAnswer: "Japan",
        difficulty: "easy"
    },
    {
        question: "Vem är författaren till '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
        correctAnswer: "George Orwell",
        difficulty: "easy"
    },
    {
        question: "Vilken litterär karaktär bodde på Baker Street 221B?",
        answers: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Nancy Drew"],
        correctAnswer: "Sherlock Holmes",
        difficulty: "easy"
    },
    {
        question: "Vem skrev dikten 'The Raven'?",
        answers: ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Robert Frost"],
        correctAnswer: "Edgar Allan Poe",
        difficulty: "easy"
    },
    {
        question: "Vem utvecklade relativitetsteorin?",
        answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
        difficulty: "easy"
    },
    {
        question: "Vad är den minsta enheten av materia?",
        answers: ["Molekyl", "Atom", "Proton", "Elektron"],
        correctAnswer: "Atom",
        difficulty: "easy"
    },
    {
        question: "Vilken planet kallas 'den röda planeten'?",
        answers: ["Mars", "Jupiter", "Saturnus", "Neptunus"],
        correctAnswer: "Mars",
        difficulty: "easy"
    },
    {
        question: "Vem regisserade filmen 'Inception'?",
        answers: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
        correctAnswer: "Christopher Nolan",
        difficulty: "easy"
    },
    {
        question: "Vilken film vann Oscar för Bästa Film 2020?",
        answers: ["Parasite", "Joker", "1917", "The Shape of Water"],
        correctAnswer: "Parasite",
        difficulty: "easy"
    },
    {
        question: "Vem spelade huvudrollen i 'The Godfather'?",
        answers: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Joe Pesci"],
        correctAnswer: "Marlon Brando",
        difficulty: "easy"
    },
    {
        question: "Vilken film har en karaktär vid namn Forrest Gump?",
        answers: ["Saving Private Ryan", "The Green Mile", "Forrest Gump", "Cast Away"],
        correctAnswer: "Forrest Gump",
        difficulty: "easy"
    },
    {
        question: "Vilken skådespelare spelade Iron Man i Marvel Cinematic Universe?",
        answers: ["Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr.", "Chris Evans"],
        correctAnswer: "Robert Downey Jr.",
        difficulty: "easy"
    },
    {
        question: "Vad står HTML för?",
        answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Mode Language"],
        correctAnswer: "Hyper Text Markup Language",
        difficulty: "medium"
    },
    {
        question: "Vilket programmeringsspråk är känt som 'språket för webben'?",
        answers: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "JavaScript",
        difficulty: "medium"
    },
    {
        question: "Vad står CSS för?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        difficulty: "medium"
    },
    {
        question: "Vad är huvudsyftet med att använda en 'for-loop' i programmering?",
        answers: ["Iteration", "Villkorssatser", "Funktionsdeklaration", "Variabeldeklaration"],
        correctAnswer: "Iteration",
        difficulty: "medium"
    },
    {
        question: "Vad kallas cellens 'kraftverk'?",
        answers: ["Nukleus", "Ribosom", "Mitokondrier", "Endoplasmatiskt retikulum"],
        correctAnswer: "Mitokondrier",
        difficulty: "medium"
    },
    {
        question: "Vad kallas processen där växter skapar sin egen mat?",
        answers: ["Andning", "Fotosyntes", "Jäsning", "Matsmältning"],
        correctAnswer: "Fotosyntes",
        difficulty: "medium"
    },
    {
        question: "Vilka blodkroppar är ansvariga för immunförsvaret?",
        answers: ["Röda blodkroppar", "Vita blodkroppar", "Blodplättar", "Plasmaceller"],
        correctAnswer: "Vita blodkroppar",
        difficulty: "medium"
    },
    {
        question: "Vem var USA:s första president?",
        answers: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        correctAnswer: "George Washington",
        difficulty: "medium"
    },
    {
        question: "Vilket krig utkämpades mellan Nord- och Sydstaterna i USA?",
        answers: ["Inbördeskriget", "Första världskriget", "Revolutionära kriget", "Vietnamkriget"],
        correctAnswer: "Inbördeskriget",
        difficulty: "medium"
    },
    {
        question: "Vilken forntida civilisation byggde Machu Picchu i Peru?",
        answers: ["Maya", "Inka", "Azteker", "Egyptier"],
        correctAnswer: "Inka",
        difficulty: "medium"
    },
    {
        question: "Vem var ledaren för Sovjetunionen under Kubakrisen?",
        answers: ["Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev", "Vladimir Lenin"],
        correctAnswer: "Nikita Khrushchev",
        difficulty: "medium"
    },
    {
        question: "Vilket händelse utlöste starten av första världskriget?",
        answers: ["Mordet på ärkehertig Franz Ferdinand", "Bombningen av Pearl Harbor", "Versaillesfördraget", "Invasionen av Polen"],
        correctAnswer: "Mordet på ärkehertig Franz Ferdinand",
        difficulty: "medium"
    },
    {
        question: "Vem skrev 'To Kill a Mockingbird'?",
        answers: ["F. Scott Fitzgerald", "Harper Lee", "John Steinbeck", "Mark Twain"],
        correctAnswer: "Harper Lee",
        difficulty: "medium"
    },
    {
        question: "Vilket Shakespeare-stycke har karaktärerna Rosencrantz och Guildenstern?",
        answers: ["Hamlet", "Romeo och Julia", "Macbeth", "Othello"],
        correctAnswer: "Hamlet",
        difficulty: "medium"
    },
    {
        question: "Vad är det kemiska tecknet för guld?",
        answers: ["Au", "Ag", "G", "Go"],
        correctAnswer: "Au",
        difficulty: "medium"
    },
    {
        question: "Vilken typ av energi lagras i ett batteri?",
        answers: ["Rörelseenergi", "Kärnenergi", "Potentiell energi", "Kemisk energi"],
        correctAnswer: "Kemisk energi",
        difficulty: "medium"
    },
    {
        question: "Vilket land vann FIFA World Cup 2018?",
        answers: ["Tyskland", "Brasilien", "Frankrike", "Spanien"],
        correctAnswer: "Frankrike",
        difficulty: "medium"
    },
    {
        question: "I vilken sport kan en spelare göra en 'try'?",
        answers: ["Fotboll", "Rugby", "Tennis", "Basket"],
        correctAnswer: "Rugby",
        difficulty: "medium"
    },
    {
        question: "Vem har rekordet för flest olympiska guldmedaljer?",
        answers: ["Usain Bolt", "Michael Phelps", "Jesse Owens", "Carl Lewis"],
        correctAnswer: "Michael Phelps",
        difficulty: "medium"
    },
    {
        question: "Vilken tennisspelare har vunnit flest Grand Slam-titlar?",
        answers: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"],
        correctAnswer: "Serena Williams",
        difficulty: "medium"
    },
    {
        question: "Vad är Kanadas nationalsport på sommaren?",
        answers: ["Lacrosse", "Hockey", "Fotboll", "Basket"],
        correctAnswer: "Lacrosse",
        difficulty: "medium"
    },
    {
        question: "Vad kallas processen där celler omvandlar glukos till energi i frånvaro av syre?",
        answers: ["Glykolys", "Krebs cykel", "Jäsning", "Oxidativ fosforylering"],
        correctAnswer: "Jäsning",
        difficulty: "hard"
    },
    {
        question: "Vad är namnet på processen där RNA syntetiseras från en DNA-mall?",
        answers: ["Translation", "Transkription", "Replikation", "Mutation"],
        correctAnswer: "Transkription",
        difficulty: "hard"
    },
    {
        question: "Vad är termen för en plötslig, okontrollerad celldelning?",
        answers: ["Carcinogenesis", "Metastasis", "Mutation", "Tumör"],
        correctAnswer: "Mutation",
        difficulty: "hard"
    },
    {
        question: "Inom genetik, vilken term används för att beskriva maskeringen av effekten av en gen av en annan?",
        answers: ["Dominans", "Kodominans", "Epistasis", "Penetrans"],
        correctAnswer: "Epistasis",
        difficulty: "hard"
    },
    {
        question: "Vad är namnet på processen där en cell upptar stora partiklar eller andra celler?",
        answers: ["Exocytos", "Endocytos", "Fagocytos", "Pinocytos"],
        correctAnswer: "Fagocytos",
        difficulty: "hard"
    },
    {
        question: "Vad är den grundläggande enheten för kapacitans i International System of Units (SI)?",
        answers: ["Ohm", "Farad", "Tesla", "Henry"],
        correctAnswer: "Farad",
        difficulty: "hard"
    },
    {
        question: "Vad är fenomenet där en våg ändrar riktning när den passerar en gräns mellan två medier?",
        answers: ["Brytning", "Diffraktion", "Reflektion", "Interferens"],
        correctAnswer: "Brytning",
        difficulty: "hard"
    },
    {
        question: "Vad är namnet på lagen som säger att den totala elektriska flödet genom en sluten yta är lika med den inneslutna laddningen dividerad med permittiviteten?",
        answers: ["Gauss lag", "Ohms lag", "Ampères lag", "Faradays lag"],
        correctAnswer: "Gauss lag",
        difficulty: "hard"
    },
    {
        question: "Vilken fysiker formulerade teorin om speciell relativitet?",
        answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Werner Heisenberg"],
        correctAnswer: "Albert Einstein",
        difficulty: "hard"
    },
    {
        question: "Vad är SI-enheten för magnetisk flödestäthet?",
        answers: ["Tesla", "Henry", "Weber", "Gauss"],
        correctAnswer: "Weber",
        difficulty: "hard"
    },
    {
        question: "Vad är den äldsta aktiva professionella fotbollsklubben i världen?",
        answers: ["Sheffield FC", "Notts County FC", "Manchester United", "Real Madrid"],
        correctAnswer: "Sheffield FC",
        difficulty: "hard"
    },
    {
        question: "Vem var den första kvinnan som vann ett Nobelpris?",
        answers: ["Marie Curie", "Rosalind Franklin", "Mother Teresa", "Ada Lovelace"],
        correctAnswer: "Marie Curie",
        difficulty: "hard"
    },
    {
        question: "Vad är det gemensamma namnet för en grupp korpar?",
        answers: ["En mördare", "En flock", "En hjord", "En koloni"],
        correctAnswer: "En mördare",
        difficulty: "hard"
    },
    {
        question: "Vem målade det berömda verket 'Minnets ihågkomst'?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Leonardo da Vinci"],
        correctAnswer: "Salvador Dalí",
        difficulty: "hard"
    },
    {
        question: "I grekisk mytologi, vem var gudinnan för seger?",
        answers: ["Athena", "Hera", "Artemis", "Nike"],
        correctAnswer: "Nike",
        difficulty: "hard"
    },
    {
        question: "Vilket land har flest tidszoner?",
        answers: ["USA", "Ryssland", "Kina", "Australien"],
        correctAnswer: "Ryssland",
        difficulty: "hard"
    },
    {
        question: "Vad är det djupaste punkten i jordens hav?",
        answers: ["Marianagraven", "Puerto Rico-graven", "Tonga-graven", "Java-graven"],
        correctAnswer: "Marianagraven",
        difficulty: "hard"
    },
    {
        question: "Vem är känd som den moderna fysikens fader?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Max Planck"],
        correctAnswer: "Albert Einstein",
        difficulty: "hard"
    },
    {
        question: "Vilket element har den högsta smältpunkten?",
        answers: ["Volfram", "Kol", "Titan", "Platina"],
        correctAnswer: "Volfram",
        difficulty: "hard"
    },
    {
        question: "Vem komponerade det berömda klassiska musikstycket 'De fyra årstiderna'?",
        answers: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Johann Sebastian Bach"],
        correctAnswer: "Antonio Vivaldi",
        difficulty: "hard"
    },
    {
        question: "Vilket språk har flest ord?",
        answers: ["Engelska", "Kinesiska", "Ryska", "Tyska"],
        correctAnswer: "Engelska",
        difficulty: "hard"
    },
    {
        question: "Vad är den längst löpande Broadway-showen?",
        answers: ["Les Misérables", "The Phantom of the Opera", "Cats", "Chicago"],
        correctAnswer: "The Phantom of the Opera",
        difficulty: "hard"
    },
    {
        question: "Vilken kejsare är känd för 'Roms brand'?",
        answers: ["Julius Caesar", "Augustus", "Nero", "Constantine den Store"],
        correctAnswer: "Nero",
        difficulty: "hard"
    },
    {
        question: "Vem anses vara grundaren av psykoanalysen?",
        answers: ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Erik Erikson"],
        correctAnswer: "Sigmund Freud",
        difficulty: "hard"
    },
    {
        question: "Vilket antikt under fanns i staden Babylon?",
        answers: ["Stora pyramiderna i Giza", "Hängande trädgårdarna i Babylon", "Statyn av Zeus i Olympia", "Templet av Artemis i Efesos"],
        correctAnswer: "Hängande trädgårdarna i Babylon",
        difficulty: "hard"
    }
    
];