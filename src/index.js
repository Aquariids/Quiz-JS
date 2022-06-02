import quizData from "./module/questions";
import * as additionalFun from "./module/additionalFun";
import allDomElements from "./module/domElements";


document.addEventListener('DOMContentLoaded', () => {
    const {
        blockFocus,
        deleteSelectAnswers,
        addColorAnswer,
        totalQuest,
        percentForAnswer,
        hideCode,
        showCodeQuiz,
        addNotRightAnswer
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
    showCodeQuiz(codeForQuestion, currentQuiz);


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
        let correctAnswer = quizData[currentQuiz].correct;

        if (answer) { // если ответ есть
            if (answer === correctAnswer) { // если ответ совпадает с правильным
                score++;
                addColorAnswer(`.${correctAnswer}`); // Добавляем зеленый цвет для правильного ответа
            } else {
                addColorAnswer(`.${correctAnswer}`); // подсвечиваем правильный если ответили не правильно
            }
            if (answer !== correctAnswer) { // если ответ не правильный, то добавляем красный
                addNotRightAnswer(`.${answer}`)
            }
            currentQuiz++;
            totalQuest(total, currentQuiz, quizData.length);
            blockFocus(labels, btn); // блокируем кнопку для нажатий
            if (currentQuiz < quizData.length) {
                const blockInterval = setInterval(() => {
                    addColorAnswer(`.${correctAnswer}`); // убираем цвет
                    if (answer !== correctAnswer) {
                        addNotRightAnswer(`.${answer}`); // убираем для неправильного
                    }
                    loadQuiz();
                    hideCode(codeForQuestion);
                    showCodeQuiz(codeForQuestion, currentQuiz);
                    blockFocus(labels, btn); // разблокируем кнопку
                    clearInterval(blockInterval);

                }, 1000)


            } else {


                // Вычесляем процент правильных ответов
                const percent = Math.floor(score / quizData.length * 100);
                // Результат
                const blockInterval = setInterval(() => {

                    if (localStorage.getItem('theme') === 'white') {
                        document.querySelector('#black-icon').style.display = 'none';
                        quiz.innerHTML = `
                        <div id="white-icon" class="icon" ><img class="picture-white" src="./icons/icon2.png" alt="hi1"> </div>    
                        <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${score}</p> из ${quizData.length} <span class="percent"> ${percent}% </span> ${percentForAnswer(percent)} </h2>
                        <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>
                `
                    } else {
                        quiz.innerHTML = `
                            <div id="black-icon" class="icon"><img class="picture-black" src="./icons/icon.png" alt="hi"> </div>
                            <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${score}</p> из ${quizData.length} <span class="percent"> ${percent}% </span> ${percentForAnswer(percent)} </h2>
                            <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>
                            `
                    }

                    clearInterval(blockInterval);

                }, 1000)


            }
        }

    });


    totalQuest(total, currentQuiz, quizData.length);
});
