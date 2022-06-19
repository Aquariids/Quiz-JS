import "../css/style.css";
import quizData from "./module/questions";
import * as additionalFun from "./module/additionalFun";
import allDomElements from "./module/domElements";
import * as bodyQuiz from './module/bodyQuiz';
import button from './module/button';

document.addEventListener('DOMContentLoaded', () => {
    const {loadQuiz,getSelected} = bodyQuiz;
    const {
        deleteSelectAnswers,
        totalQuest,
        hideCode,
        showCodeQuiz,
    } = additionalFun;
    const {
        total,
        codeForQuestion
    } = allDomElements
    // Текущий вопросо
    let currentQuiz = 0;
    // количество правильно отвеченых вопросов
    let score = 0;
    loadQuiz(currentQuiz,deleteSelectAnswers,allDomElements,quizData);
    hideCode(codeForQuestion);
    showCodeQuiz(codeForQuestion, currentQuiz);
    // при нажатии на кнопку  подгружаем след вопрос, если был дан ответ
    button(currentQuiz,score,additionalFun,allDomElements,getSelected,quizData,loadQuiz);
    totalQuest(total, currentQuiz, quizData.length);
   
});


