const questions = [
    { question: "Are you more of a leader?", options: ["Yes", "No"] },
    { question: "Do you enjoy planning?", options: ["Yes", "No"] },
    // Add all your questions here
];

let currentQuestion = 0;
let answers = [];

function startTest() {
    document.querySelector(".container").innerHTML = getQuestionHTML(currentQuestion);
}

function getQuestionHTML(questionIndex) {
    return `
        <div class="question">
            <h2>${questions[questionIndex].question}</h2>
            ${questions[questionIndex].options.map((opt, i) =>
            `<button onclick="answer(${i})">${opt}</button>`).join('')}
        </div>`;
}

function answer(choice) {
    answers.push(choice);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.querySelector(".container").innerHTML = getQuestionHTML(currentQuestion);
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector(".container").innerHTML = `<h2>Your results are here</h2>`;
}
