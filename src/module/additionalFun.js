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
    if(+selector[id].id === id + 1) {
        selector[id].classList.remove('hide');
        selector[id].classList.add('show');
    } else {
        let wrapperCode = document.querySelector('.question-block');
        wrapperCode.style.color = 'red';
        wrapperCode.style.fontSize = '15px';
        wrapperCode.style.padding = '5px';
        wrapperCode.style.fontWeight = '700'
        wrapperCode.textContent = `Ошибка! Вопрос и ответы, не совпадают с кодом на экране!`
    }
}


export {
    blockFocus,
    deleteSelectAnswers,
    addColorAnswer,
    totalQuest,
    percentForAnswer,
    hideCode,
    showCodeQuiz,
    addNotRightAnswer,
}

