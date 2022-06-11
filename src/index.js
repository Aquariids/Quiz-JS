import "../css/style.css";
import './module/whiteTheme';
import quizData from "./module/questions";
import * as additionalFun from "./module/additionalFun";
import allDomElements from "./module/domElements";
import * as bodyQuiz from './module/bodyQuiz';
import button from './module/button';
const {
    loadQuiz,
    getSelected
} = bodyQuiz;
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

document.addEventListener('DOMContentLoaded', () => {
    // Текущий вопросо
    let currentQuiz = 0;
    // количество правильно отвеченых вопросов
    let score = 0;
    // подгружаем ответы и вопросы
    loadQuiz(currentQuiz, deleteSelectAnswers, allDomElements, quizData);
    // скрываем код для вопросов в html
    hideCode(codeForQuestion);

    // показываем нужный код для конкретного вопроса
    showCodeQuiz(codeForQuestion, currentQuiz);

    // при нажатии на кнопку  подгружаем след вопрос, если был дан ответ
    button(currentQuiz, score, additionalFun, allDomElements, getSelected, quizData, loadQuiz);
    // показываем количество вопросов и на каком находимся.
    totalQuest(total, currentQuiz, quizData.length);

});