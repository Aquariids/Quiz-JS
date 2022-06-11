
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

export {loadQuiz,getSelected};