import quizData from "./module/questions"; 
import * as functions from "./module/additionalFun";

const {blockFocus,deleteSelectAnswers,addColorAnswer,totalQuest,percentForAnswer} = functions;

// Элементы со страницы
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const btn = document.querySelector('#btn');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.querySelector('#quiz');
const total = document.querySelector('.total');
const labels = document.querySelectorAll('.l')





// Текущий вопросо
let currentQuiz = 0;
// количество правильно отвеченых вопросов
let score = 0;


loadQuiz();
// функция где мы помещаем на страницу вопрос и ответы
function loadQuiz() {
    deleteSelectAnswers(answerEls);
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

// тут мы получаем айдишник ответа который выбрали
function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            return answer = answerEl.id;
        }


    });

    return answer;

}

// при нажатии на кнопку  подгружаем след вопрос, если был дан ответ
btn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) { // если ответ есть
        if (answer === quizData[currentQuiz].correct) { // если ответ совпадает с правильным
            score++;
            addColorAnswer(`.${quizData[currentQuiz].correct}`); // Добавляем цвет для правильного ответа
        } else {
            addColorAnswer(`.${quizData[currentQuiz].correct}`);
        }
        currentQuiz++;
        totalQuest(total,currentQuiz,quizData.length);
        blockFocus(labels,btn); // блокируем кнопку для нажатий
        if (currentQuiz < quizData.length) {
            const time = setInterval(() => {
                loadQuiz();
                addColorAnswer(`.${quizData[currentQuiz].correct}`);
                blockFocus(labels,btn); // разблокируем кнопку
                clearInterval(time);

            }, 1000)


        } else {
             // Вычесляем процент правильных ответов
            const percent = Math.floor(score / quizData.length * 100);
            // Результат
            const time = setInterval(() => {
                quiz.innerHTML = `
                <div class="hi"><img class="picture" src="icon.png" alt="hi">  </div>
                <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: ${score} из ${quizData.length} <span class="percent"> ${percent}% </span> ${percentForAnswer(percent)} </h2>
                <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>
            `
                clearInterval(time);

            }, 1000)


        }
    }

});


totalQuest(total,currentQuiz,quizData.length);