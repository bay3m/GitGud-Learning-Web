let quizData = [];
let current = 0;
let userAnswers = {};

function renderQuestion(){
    const container = document.getElementById('quiz-box');
    container.innerHTML = "";

    if(current >= quizData.length){
        let score = 0;
        quizData.forEach(q => {
            if(userAnswers[q.id] === q.answer) score++;
        })

        container.innerHTML = `
            <h3 style="margin: 10px;">Quiz Completed!</h3>
            <p style="margin: 10px;">You scored ${score} out of ${quizData.length}.</p>
            <a href="quiz_home.html"><button>Done</button></a>
        `;
        return;
    }

    const q = quizData[current];

    const questionHTML = document.createElement('div');
    questionHTML.innerHTML = `
        <h4 style="margin-bottom: 15px;">Question ${current + 1} of ${quizData.length}</h4>
        <p style="margin: 10px;">${q.question}</p>
        <div class="options">
        ${q.options.map(opt => `
            <label>
                <input type="radio" name="option" value="${opt}"${userAnswers[q.id] === opt ? "checked" : ""}>${opt}
            </label>
        `).join("")}
        </div>
        <div class="controls">
            <button onclick="prevQuestion()" ${current === 0 ? "disabled" : ""}>Previous</button>
            <button onclick="nextQuestion()">${current === quizData.length - 1 ? "Submit" : "Next"}</button>
        </div>
    `;
    container.appendChild(questionHTML);

    document.querySelectorAll('input[name="option"]').forEach(input => {
        input.addEventListener('change', e => {
            userAnswers[q.id] = e.target.value;
        });
    });
};

function nextQuestion() {
    if (current < quizData.length) current++;
    renderQuestion();
};

function prevQuestion() {
    if (current > 0) current--;
    renderQuestion();
};