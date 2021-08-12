const heavanDats = [
    {
        question: "Ellluuuu! 👋",
        a: "NO!",
        b: "Dont click me IJOT!",
        c: "I swear if you click me I`m Killing you",
        d: "ELLO!...yes basic respect. COME ON!",
        correct: "d",
    },
    {
        question: "Not like you have a choice.. But do you want to do some general knowledge question? 🥱",
        a: "If i click this, you gonna fail",
        b: "I`m smart to answer anything, so duh",
        c: "No , im too dumb dont pick me",
        d: "if you click me , just close your chrome BYE",
        correct: "b",
    },
    {
        question: "ENUFF DILLY DALLY, So...What is the tallest building in the world? 🏢",
        a: "Burj Khalifa, Dubai",
        b: "Makkah Royal Clock Tower, Mecca",
        c: "Shanghai clock tower, Shanghai",
        d: "MBS, Singapore",
        correct: "a",
    },
    {
        question: "Which stars is the brightest star in the universe? ✨",
        a: "Canopus",
        b: "Sirius A",
        c: "Rigel",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What was the Turkish city of Istanbul called before 1930? ",
        a: "Chicken wing chicken wing",
        b: "Turkish Bul",
        c: "Old Constantinople",
        d: "Old Politant",
        correct: "c",
    },
    {
        question: "Name the Coffee shop in US sitcom Friends ☕️",
        a: "Central Perk",
        b: "Friends Cafe",
        c: "Hard Rock Cafe",
        d: "Chipotle",
        correct: "a",
    },
    {
        question: "What is the capital of New Zealand? 🐤",
        a: "Auckland",
        b: "Perth",
        c: "Nelson",
        d: "Wellington",
        correct: "d",
    },
    {
        question: "In which part of your body would you find the cruciate ligament? 🧬",
        a: "Arm",
        b: "Knee joint",
        c: "In YO FACEE",
        d: "Hip",
        correct: "b",
    },
    {
        question: "How many permanent teeth does a dog have? 🐶",
        a: "90",
        b: "50",
        c: "42",
        d: "24",
        correct: "c",
    },
    {
        question: "What is the name of Dua Lipa’s 2020 album release? 💿",
        a: "Future Nostalgia",
        b: "Don't call me",
        c: "Impossible",
        d: "New Rules",
        correct: "a",
    },
    {
        question: "Which UK city is situated further west? 🗺",
        a: "London",
        b: "Brighton",
        c: "Edinburgh",
        d: "Liverpool",
        correct: "c",
    },
    {
        question: "What language is spoken in Norway? 🗣",
        a: "Norwegian",
        b: "Norwaynian",
        c: "Korean",
        d: "Singlish",
        correct: "a",
    },
    {
        question: "What is the best-selling novel of all time? 💰",
        a: "Harry Potter Series",
        b: "Twilight, The Series",
        c: "The Magpie Society",
        d: "Don Quixote",
        correct: "d",
    },
    {
        question: "Which planet has the most moons? 🌙",
        a: "Moon",
        b: "Saturn",
        c: "Earth",
        d: "Pluto",
        correct: "b",
    },
    {
        question: "How many elements are in the periodic table? 👨‍🔬",
        a: "118",
        b: "58",
        c: "47",
        d: "138",
        correct: "a",
    },
    {
        question: "Who is Fluffy? (Harry Potter) 🧙",
        a: "Gryphon",
        b: "Cat",
        c: "Three-headed dog",
        d: "Pig",
        correct: "c",
    },
    {
        question: "What is the effect of the Obliviate spell? (Harry Potter)🧙",
        a: "To repair objects",
        b: "To teleport to another destination",
        c: "To levitate objects",
        d: "To remove memories",
        correct: "d",
    },
    {
        question: "What is the name of Phoebe’s elusive roommate whom he never meet? (FRIENDS) 🙎‍♀️",
        a: "Denise",
        b: "Rachel",
        c: "Frank Jr.",
        d: "Ursula",
        correct: "a",
    },
    {
        question: "Which Friend has the middle name Muriel? (FRIENDS) 🙎‍♂️",
        a: "Joey",
        b: "Chandler",
        c: "Ross",
        d: "Gunther",
        correct: "b",
    },
    {
        question: "What is world's smallest country?🤏",
        a: "Vatican City",
        b: "Singapore",
        c: "South Korea",
        d: "None of the above",
        correct: "a",
    },
];

//obj

const quiz = document.getElementById("quiz");
const answerslol = document.querySelectorAll(".answer");
//^^ from radio button to check if its checked or not
const quesios = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
//use the text to use in function loadQuiz

const submitBtn = document.getElementById("submit");

let jigumQuiz = 0;
let score = 0;

loadQuiz();
// loadQuiz func will be called everytime we submit a choice
function loadQuiz() {
    unSelectoo();

    const hmmm = heavanDats[jigumQuiz];

    quesios.innerText = hmmm.question;
    a_text.innerText = hmmm.a;
    b_text.innerText = hmmm.b;
    c_text.innerText = hmmm.c;
    d_text.innerText = hmmm.d;
}

function getSelected() {
    let answer = undefined;

    answerslol.forEach((ansAns) => {
        if (ansAns.checked) {
            answer = ansAns.id;
        }
    });

    return answer;
}

function unSelectoo() {
    //*
    answerslol.forEach((ansAns) => {
        ansAns.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        //*
        if (answer === heavanDats[jigumQuiz].correct) {
            score++;
        }

        jigumQuiz++;
        if (jigumQuiz < heavanDats.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${heavanDats.length} questions.</h2>
                <h2>and...If you are looking for the right answer...just google cuz i'm not smart either 🤪</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
