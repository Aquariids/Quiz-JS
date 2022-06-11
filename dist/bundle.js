/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./src/module/additionalFun.js
var additionalFun_namespaceObject = {};
__webpack_require__.r(additionalFun_namespaceObject);
__webpack_require__.d(additionalFun_namespaceObject, {
  "addColorAnswer": () => (addColorAnswer),
  "addNotRightAnswer": () => (addNotRightAnswer),
  "blockFocus": () => (blockFocus),
  "deleteSelectAnswers": () => (deleteSelectAnswers),
  "hideCode": () => (hideCode),
  "percentForAnswer": () => (percentForAnswer),
  "showCodeQuiz": () => (showCodeQuiz),
  "totalQuest": () => (totalQuest)
});

// NAMESPACE OBJECT: ./src/module/bodyQuiz.js
var bodyQuiz_namespaceObject = {};
__webpack_require__.r(bodyQuiz_namespaceObject);
__webpack_require__.d(bodyQuiz_namespaceObject, {
  "getSelected": () => (getSelected),
  "loadQuiz": () => (loadQuiz)
});

;// CONCATENATED MODULE: ./src/module/questions.js
const quizData = [
    {
        question: 'Что выведет в консоль?',
        a: '"false"',
        b: '1',
        c: 'true',
        d: '0',
        correct: 'a',
        id: '1',
    },

    {
        question: 'Какое значение будет в result?',
        a: 'null',
        b: '2',
        c: '3',
        d: 'undefined',
        correct: 'd',
        id: '2',
    },

    {
        question: 'Какое значение будет в result?',
        a: 'boolean',
        b: 'null',
        c: 'undefined',
        d: '0',
        correct: 'a',
        id: '3',
    },

    {
        question: 'Что выведет в консоль?',
        a: 'false',
        b: '"Аниме"',
        c: '0',
        d: '1',
        correct: 'b',
        id: '4',
    },

    {
        question: 'Какое значение будет в result?',
        a: 'null',
        b: '1',
        c: '2',
        d: 'SyntaxError',
        correct: 'c',
        id: '5',
    },

    {
        question: 'Чему будет равно n?',
        a: '8',
        b: '6',
        c: '7',
        d: '9',
        correct: 'a',
        id: '6',
    },

    {
        question: 'Что выведет в консоль?',
        a: '2',
        b: 'undefined',
        c: '1',
        d: 'null',
        correct: 'c',
        id: '7',
    },

    {
        question: 'Что выведет в консоль?',
        a: '10',
        b: 'SyntaxError',
        c: 'undefined',
        d: '25',
        correct: 'a',
        id: '8',
    },

    {
        question: 'Что выведет в консоль?',
        a: '5',
        b: 'undefined',
        c: 'null',
        d: 'ReferenceError',
        correct: 'd',
        id: '9',
    },

    {
        question: 'Чему будет равно n?',
        a: '8',
        b: '7',
        c: '1',
        d: '4',
        correct: 'b',
        id: '10',
    },

    {
        question: 'Что выведет в консоль?',
        a: 'number',
        b: 'boolean',
        c: 'string',
        d: '5',
        correct: 'c',
        id: '11',
    },

    {
        question: 'Что выведет в консоль?',
        a: 'false',
        b: 'boolean',
        c: 'true',
        d: '"10"',
        correct: 'a',
        id: '12',
    },

    {
        question: 'Что выведет в консоль?',
        a: '12',
        b: '10',
        c: '9',
        d: '11',
        correct: 'd',
        id: '13',
    },


    {
        question: 'Что выведет в консоль?',
        a: '1 2 3 4 5',
        b: '0 1 2 3 4',
        c: 'undefined',
        d: 'TypeError',
        correct: 'b',
        id: '14',
    },


    {
        question: 'Что выведет в консоль?',
        a: '10 14 18',
        b: 'a b c',
        c: 'TypeError',
        d: 'null',
        correct: 'c',
        id: '15',
    },


    {
        question: 'Что выведет в консоль?',
        a: 'TypeError',
        b: 'undefined',
        c: '4',
        d: 'ReferenceError',
        correct: 'c',
        id: '16',
    }, 


    {
        question: 'Какое значение будет в res?',
        a: 'undefined',
        b: 'null',
        c: '"0"',
        d: 'object',
        correct: 'd',
        id: '17',
    },

    {
        question: 'Что выведет в консоль?',
        a: '6 1 3',
        b: 'null',
        c: 'ReferenceError',
        d: 'undefined',
        correct: 'a',
        id: '18',
    },
    {
        question: 'Что выведет в консоль?',
        a: '5',
        b: '10',
        c: 'undefined',
        d: '1',
        correct: 'b',
        id: '19',
    },

    {
        question: 'Что выведет в консоль?',
        a: 'NaN',
        b: '9',
        c: '0',
        d: 'TypeError',
        correct: 'b',
        id: '20',
    },
];


/* harmony default export */ const questions = (quizData);




;// CONCATENATED MODULE: ./src/module/additionalFun.js
// блокируем кнопку и инпуты полсе ответа
function blockFocus(elements, element) {
    element.classList.toggle('disabled');
    elements.forEach((answerEl) => {
        answerEl.classList.toggle('disabled');
    });
}


// убираем нажатый кружок на input
function deleteSelectAnswers(answerEls) {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// указываем на правильный ответ
function addColorAnswer(classes) {
    return document.querySelector(classes).classList.toggle('right');
}
// указываем на неправильный ответ
function addNotRightAnswer(classes) {
    return document.querySelector(classes).classList.toggle('not-right');
}

// количество отвеченных вопросов
function totalQuest(selector, currentQuest, allQuest) {
    if(currentQuest < allQuest) {
        selector.textContent = `${currentQuest += 1}/${allQuest}`
    }
    
}

// указываем в конце теста текст от процента отвеченных
function percentForAnswer(percent) {
    if (percent === 100) {
        return "<div class='result-text'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>"
    } else if (percent > 55 && percent != 100) {
        return " <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>"
    } else if (percent < 55 && percent != 0 && percent > 30) {
        return "<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>";
    } else if (percent < 30 && percent != 0) {
        return "<div class='result-text'> <span class='bad'>Попытка не пытка!</span> </div>";
    } else if (percent === 0) {
        return "<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>";
    }
}

// скрываем код для вопросов
function hideCode(selector) {
    selector.forEach((item, ) => {
        item.classList.remove('show');
        item.classList.add('hide');
    })
}
// Показываю код обратно
function showCodeQuiz(selector, id) {
    selector[id].classList.remove('hide');
    selector[id].classList.add('show');
}




;// CONCATENATED MODULE: ./src/module/domElements.js
function domElements () {
    const questionEl = document.querySelector('#question');
    const a_text = document.querySelector('#a_text');
    const b_text = document.querySelector('#b_text');
    const c_text = document.querySelector('#c_text');
    const d_text = document.querySelector('#d_text');
    const btn = document.querySelector('#btn');
    const answerEls = document.querySelectorAll('.answer');
    const quiz = document.querySelector('#quiz');
    const total = document.querySelector('.total');
    const labels = document.querySelectorAll('.l');
    const codeForQuestion = document.querySelectorAll('.code')
    return {
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
    }
 }

 let allDomElements = domElements();

 /* harmony default export */ const module_domElements = (allDomElements);

;// CONCATENATED MODULE: ./src/module/bodyQuiz.js

// функция где мы помещаем на страницу вопрос и ответы
function loadQuiz(currentQuiz,deleteSelectAnswers,allDomElements,quizData) {
    deleteSelectAnswers(allDomElements.answerEls);
    const currentQuizData = quizData[currentQuiz];
    allDomElements.questionEl.textContent = currentQuizData.question;
    allDomElements.a_text.innerText = currentQuizData.a;
    allDomElements.b_text.innerText = currentQuizData.b;
    allDomElements.c_text.innerText = currentQuizData.c;
    allDomElements.d_text.innerText = currentQuizData.d;

}

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


;// CONCATENATED MODULE: ./src/module/button.js
function button_button(currentQuiz, score, additionalFun, allDomElements,getSelected,quizData,loadQuiz,) {
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
;// CONCATENATED MODULE: ./src/index.js







document.addEventListener('DOMContentLoaded', () => {
    const {loadQuiz,getSelected} = bodyQuiz_namespaceObject;
    const {
        deleteSelectAnswers,
        totalQuest,
        hideCode,
        showCodeQuiz,
    } = additionalFun_namespaceObject;
    const {
        total,
        codeForQuestion
    } = module_domElements
    // Текущий вопросо
    let currentQuiz = 0;
    // количество правильно отвеченых вопросов
    let score = 0;
    loadQuiz(currentQuiz,deleteSelectAnswers,module_domElements,questions);
    hideCode(codeForQuestion);
    showCodeQuiz(codeForQuestion, currentQuiz);
    // при нажатии на кнопку  подгружаем след вопрос, если был дан ответ
    button_button(currentQuiz,score,additionalFun_namespaceObject,module_domElements,getSelected,questions,loadQuiz);
    totalQuest(total, currentQuiz, questions.length);
   
});

/******/ })()
;