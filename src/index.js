import quizData from "./questions";

console.log(quizData);
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
    deleteSelectAnswers();
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
            addColorAnswer(); // Добавляем цвет для правильного ответа
        } else {
            addColorAnswer();
        }
        currentQuiz++;
        totalQuest();
        blockFocus(labels,btn); // блокируем кнопку для нажатий
        if (currentQuiz < quizData.length) {
            const time = setInterval(() => {
                loadQuiz();
                removeColorAnswer();
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



function blockFocus(elements,element) {
    element.classList.toggle('disabled');
    elements.forEach((answerEl) => {
        answerEl.classList.toggle('disabled');
    });
}


// убираем нажатый кружок на input
function deleteSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// указываем на правильный ответ
function addColorAnswer() {
    return document.querySelector(`.${quizData[currentQuiz].correct}`).classList.add('right');
}
// убираем цвет для правильного ответа
function removeColorAnswer() {
    return document.querySelector(`.${quizData[currentQuiz].correct}`).classList.remove('right');
}

// колличество отвеченных вопросов
function totalQuest() {
    total.textContent = `${currentQuiz}/${quizData.length}`
}

// указываем в конце теста текст от процента отвеченных
function percentForAnswer (percent) {
    if(percent === 100) {
        return " <div class='textEnd'> <span class='right'> Вы ответили на все вопросы правильно!</span> </div>"
    } 
    else if (percent > 60 && percent != 100) {
        return " <div class='textEnd'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>"
    } 
    else if(percent < 50 && percent != 0) {
       return "<div class='textEnd'> <span class='bad'> Плоховато, постарайтесь лучше! </span> </div>";
    }
    else  {
        return "<div class='textEnd'> <span class ='wrong'> Вы не ответили ни на один вопрос! </span> </div>";
    }
}
totalQuest();