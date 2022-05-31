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
    const labels = document.querySelectorAll('.l')
    
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
        labels
    }
 }

 let allDomElements = domElements();

 export default allDomElements;
