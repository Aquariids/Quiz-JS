export default function button(currentQuiz, score, additionalFun, allDomElements,getSelected,quizData,loadQuiz,) {
    allDomElements.btn.addEventListener('click', () => {
        const answer = getSelected(allDomElements.answerEls);
        let correctAnswer = quizData[currentQuiz].correct;

        if (answer) { // если ответ есть
            if (answer === correctAnswer) { // если ответ совпадает с правильным
                score++;
                additionalFun.addColorAnswer(`.${correctAnswer}`); // Добавляем зеленый цвет для правильного ответа
            } else {
                additionalFun.addColorAnswer(`.${correctAnswer}`); // подсвечиваем правильный если ответили не правильно
            }
            if (answer !== correctAnswer) { // если ответ не правильный, то добавляем красный
                additionalFun.addNotRightAnswer(`.${answer}`)
            }
            currentQuiz++;
            additionalFun.blockFocus(allDomElements.labels, allDomElements.btn); // блокируем кнопку для нажатий
            if (currentQuiz < quizData.length) {
                const blockInterval = setInterval(() => {
                    additionalFun.totalQuest(allDomElements.total, currentQuiz, quizData.length);
                    additionalFun.addColorAnswer(`.${correctAnswer}`); // убираем цвет
                    if (answer !== correctAnswer) {
                        additionalFun.addNotRightAnswer(`.${answer}`); // убираем для неправильного
                    }
                    loadQuiz(currentQuiz,additionalFun.deleteSelectAnswers,allDomElements,quizData);
                    additionalFun.hideCode(allDomElements.codeForQuestion);
                    additionalFun.showCodeQuiz(allDomElements.codeForQuestion, currentQuiz);
                    additionalFun.blockFocus(allDomElements.labels, allDomElements.btn); // разблокируем кнопку
                    clearInterval(blockInterval);

                }, 1000)


            } else {


                // Вычесляем процент правильных ответов
                const percent = Math.floor(score / quizData.length * 100);
                // Результат
                const blockInterval = setInterval(() => {

                    if (localStorage.getItem('theme') === 'white') {
                        document.querySelector('#black-icon').style.display = 'none';
                        allDomElements.quiz.innerHTML = `
                        <div id="white-icon" class="icon" ><img class="picture-white" src="./icons/icon2.png" alt="hi1"> </div>    
                        <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${score}</p> из ${quizData.length} <span class="percent"> ${percent}% </span> ${additionalFun.percentForAnswer(percent)} </h2>
                        <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>
                `
                    } else {
                        allDomElements.quiz.innerHTML = `
                            <div id="black-icon" class="icon"><img class="picture-black" src="./icons/icon.png" alt="hi"> </div>
                            <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${score}</p> из ${quizData.length} <span class="percent"> ${percent}% </span> ${additionalFun.percentForAnswer(percent)} </h2>
                            <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>
                            `
                    }

                    clearInterval(blockInterval);

                }, 1000)


            }
        }

    });
}