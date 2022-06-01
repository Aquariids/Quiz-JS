import quizData from "./module/questions";
import * as additionalFun from "./module/additionalFun";
import allDomElements from "./module/domElements";

const {
    blockFocus,
    deleteSelectAnswers,
    addColorAnswer,
    totalQuest,
    percentForAnswer,
    hideCode,
    showCodeQuiz
} = additionalFun;
const {
    questionEl,
    a_text,
    b_text,
    c_text,
    d_text,
    btn,
    answerEls,
    quiz,
    total,
    labels,
    codeForQuestion
} = allDomElements

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



hideCode(codeForQuestion);
showCodeQuiz(codeForQuestion,currentQuiz);




// тут мы получаем айдишник ответа который выбрали
function getSelected(selector) {
    let answer = undefined;
    selector.forEach((answerEl) => {
        if (answerEl.checked) {
            return answer = answerEl.id;
        }


    });

    return answer;
}

// при нажатии на кнопку  подгружаем след вопрос, если был дан ответ
btn.addEventListener('click', () => {
    
    const answer = getSelected(answerEls);

    if (answer) { // если ответ есть
        if (answer === quizData[currentQuiz].correct) { // если ответ совпадает с правильным
            score++;
            addColorAnswer(`.${quizData[currentQuiz].correct}`); // Добавляем цвет для правильного ответа
        } else {
            addColorAnswer(`.${quizData[currentQuiz].correct}`);

        }
        currentQuiz++;
        

        totalQuest(total, currentQuiz, quizData.length);
        blockFocus(labels, btn); // блокируем кнопку для нажатий
        if (currentQuiz < quizData.length) {
            const time = setInterval(() => {
                loadQuiz();
                hideCode(codeForQuestion);
                showCodeQuiz(codeForQuestion,currentQuiz);
                addColorAnswer(`.${quizData[currentQuiz].correct}`);
                blockFocus(labels, btn); // разблокируем кнопку
                clearInterval(time);

            }, 1000)


        } else {
            // Вычесляем процент правильных ответов
            const percent = Math.floor(score / quizData.length * 100);
            // Результат
            const time = setInterval(() => {
                quiz.innerHTML = `
                <div class="hi"><img class="picture" src="icon.png" alt="hi">  </div>
                <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${score}</p> из ${quizData.length} <span class="percent"> ${percent}% </span> ${percentForAnswer(percent)} </h2>
                <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>
            `
                clearInterval(time);

            }, 1000)


        }
    }

});


totalQuest(total, currentQuiz, quizData.length);