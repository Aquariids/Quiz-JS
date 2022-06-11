(()=>{var e={201:()=>{function e(){"white"===localStorage.getItem("theme")?(document.querySelector("body").classList.add("white"),document.querySelector("#moon").style.display="block",document.querySelector("#moon").style.color="#fff",document.querySelector("#sun").style.display="none",document.querySelector(".total").style.color="#fff",document.querySelector("#black-icon").style.display="none",document.querySelector("#white-icon").style.display="flex"):(document.querySelector("body").classList.remove("white"),document.querySelector("#moon").style.display="none",document.querySelector(".preloader").style.background="#000000",document.querySelector("#sun").style.display="block",document.querySelector(".total").style.color="#C9D1D9",document.querySelector("#black-icon").style.display="flex",document.querySelector("#white-icon").style.display="none")}e(),document.querySelector(".themetoggle").addEventListener("click",(t=>{t.preventDefault(),"white"===localStorage.getItem("theme")?localStorage.removeItem("theme","white"):localStorage.setItem("theme","white"),e()}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};o.r(e),o.d(e,{addColorAnswer:()=>l,addNotRightAnswer:()=>s,blockFocus:()=>r,deleteSelectAnswers:()=>c,hideCode:()=>a,percentForAnswer:()=>i,showCodeQuiz:()=>u,totalQuest:()=>d});var t={};o.r(t),o.d(t,{getSelected:()=>p,loadQuiz:()=>y}),o(201);const n=[{question:"Что выведет в консоль?",a:'"false"',b:"1",c:"true",d:"0",correct:"a",id:"1"},{question:"Какое значение будет в result?",a:"null",b:"2",c:"3",d:"undefined",correct:"d",id:"2"},{question:"Какое значение будет в result?",a:"boolean",b:"null",c:"undefined",d:"0",correct:"a",id:"3"},{question:"Что выведет в консоль?",a:"false",b:'"Аниме"',c:"0",d:"1",correct:"b",id:"4"},{question:"Какое значение будет в result?",a:"null",b:"1",c:"2",d:"SyntaxError",correct:"c",id:"5"},{question:"Чему будет равно n?",a:"8",b:"6",c:"7",d:"9",correct:"a",id:"6"},{question:"Что выведет в консоль?",a:"2",b:"undefined",c:"1",d:"null",correct:"c",id:"7"},{question:"Что выведет в консоль?",a:"10",b:"SyntaxError",c:"undefined",d:"25",correct:"a",id:"8"},{question:"Что выведет в консоль?",a:"5",b:"undefined",c:"null",d:"ReferenceError",correct:"d",id:"9"},{question:"Чему будет равно n?",a:"8",b:"7",c:"1",d:"4",correct:"b",id:"10"},{question:"Что выведет в консоль?",a:"number",b:"boolean",c:"string",d:"5",correct:"c",id:"11"},{question:"Что выведет в консоль?",a:"false",b:"boolean",c:"true",d:'"10"',correct:"a",id:"12"},{question:"Что выведет в консоль?",a:"12",b:"10",c:"9",d:"11",correct:"d",id:"13"},{question:"Что выведет в консоль?",a:"1 2 3 4 5",b:"0 1 2 3 4",c:"undefined",d:"TypeError",correct:"b",id:"14"},{question:"Что выведет в консоль?",a:"10 14 18",b:"a b c",c:"TypeError",d:"null",correct:"c",id:"15"},{question:"Что выведет в консоль?",a:"TypeError",b:"undefined",c:"4",d:"ReferenceError",correct:"c",id:"16"},{question:"Какое значение будет в res?",a:"undefined",b:"null",c:'"0"',d:"object",correct:"d",id:"17"},{question:"Что выведет в консоль?",a:"6 1 3",b:"null",c:"ReferenceError",d:"undefined",correct:"a",id:"18"},{question:"Что выведет в консоль?",a:"5",b:"10",c:"undefined",d:"1",correct:"b",id:"19"},{question:"Что выведет в консоль?",a:"NaN",b:"9",c:"0",d:"TypeError",correct:"b",id:"20"}];function r(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function c(e){e.forEach((e=>{e.checked=!1}))}function l(e){return document.querySelector(e).classList.toggle("right")}function s(e){return document.querySelector(e).classList.toggle("not-right")}function d(e,t,o){t<o&&(e.textContent=`${t+=1}/${o}`)}function i(e){return 100===e?"<div class='result-text'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>55&&100!=e?" <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<55&&0!=e&&e>30?"<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":e<30&&0!=e?"<div class='result-text'> <span class='bad'>Попытка не пытка!</span> </div>":0===e?"<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>":void 0}function a(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function u(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const b={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")};function y(e,t,o,n){t(o.answerEls);const r=n[e];o.questionEl.textContent=r.question,o.a_text.innerText=r.a,o.b_text.innerText=r.b,o.c_text.innerText=r.c,o.d_text.innerText=r.d}function p(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}const{loadQuiz:q,getSelected:m}=t,{deleteSelectAnswers:h,totalQuest:f,hideCode:g,showCodeQuiz:S}=e,{total:x,codeForQuestion:v}=b;document.addEventListener("DOMContentLoaded",(()=>{q(0,h,b,n),g(v),S(v,0),function(e,t,o,n,r,c,l){n.btn.addEventListener("click",(()=>{const s=r(n.answerEls);let d=c[e].correct;if(s)if(s===d?(t++,o.addColorAnswer(`.${d}`)):o.addColorAnswer(`.${d}`),s!==d&&o.addNotRightAnswer(`.${s}`),e++,o.blockFocus(n.labels,n.btn),e<c.length){const t=setInterval((()=>{o.totalQuest(n.total,e,c.length),o.addColorAnswer(`.${d}`),s!==d&&o.addNotRightAnswer(`.${s}`),l(e,o.deleteSelectAnswers,n,c),o.hideCode(n.codeForQuestion),o.showCodeQuiz(n.codeForQuestion,e),o.blockFocus(n.labels,n.btn),clearInterval(t)}),1e3)}else{const e=Math.floor(t/c.length*100),r=setInterval((()=>{"white"===localStorage.getItem("theme")?(document.querySelector("#black-icon").style.display="none",n.quiz.innerHTML=`\n                        <div id="white-icon" class="icon" ><img class="picture-white" src="./icons/icon2.png" alt="hi1"> </div>    \n                        <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${t}</p> из ${c.length} <span class="percent"> ${e}% </span> ${o.percentForAnswer(e)} </h2>\n                        <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                `):n.quiz.innerHTML=`\n                            <div id="black-icon" class="icon"><img class="picture-black" src="./icons/icon.png" alt="hi"> </div>\n                            <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${t}</p> из ${c.length} <span class="percent"> ${e}% </span> ${o.percentForAnswer(e)} </h2>\n                            <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                            `,clearInterval(r)}),1e3)}}))}(0,0,e,b,m,n,q),f(x,0,n.length)}))})()})();
//# sourceMappingURL=bundle.js.map