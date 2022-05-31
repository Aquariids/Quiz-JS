
// блокируем кнопку и инпуты полсе ответа
 function blockFocus(elements,element) {
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

// колличество отвеченных вопросов
 function totalQuest(selector,currentQuest,allQuest) {
    selector.textContent = `${currentQuest}/${allQuest  }`
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

export {blockFocus,deleteSelectAnswers,addColorAnswer,totalQuest,percentForAnswer}