const questions = [
    {
        question: "What is the name of Harry Potter's owl?",
        choices: ["Hedwig", "Crookshanks", "Scabbers", "Fang"],
        answer: "Hedwig"
    },
    {
        question: "Who says 'I am Iron Man'?",
        choices: ["Thor", "Captain America", "Iron Man", "Hulk"],
        answer: "Iron Man"
    },
   
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    questions.forEach((q, index) => {
        const questionEl = document.createElement("div");
        questionEl.innerHTML = <p>${q.question}</p>;
        q.choices.forEach(choice => {
            questionEl.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${choice}"> ${choice}
                </label><br>`;
        });
        quizContainer.appendChild(questionEl);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(input[name="question${index}"]:checked);
        if (selectedAnswer && selectedAnswer.value === q.answer) {
            score++;
        }
    });
    alert(You got ${score} out of ${questions.length} correct!);
}

window.onload = loadQuiz;