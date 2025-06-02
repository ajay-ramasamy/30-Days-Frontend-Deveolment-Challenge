const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "Which country has the largest population in the world?",
        answer: [
            { text: "India", correct: false },
            { text: "China", correct: true },
            { text: "USA", correct: false },
            { text: "Russia", correct: false },
        ],
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false },
            { text: "Australia", correct: false },
        ],
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        answer: [
            { text: "Italy", correct: false },
            { text: "France", correct: true },
            { text: "Germany", correct: false },
            { text: "Spain", correct: false },
        ],
    },
    {
        question: "Which ocean is the largest by area?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
