(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>s,addNotRightAnswer:()=>r,blockFocus:()=>o,deleteSelectAnswers:()=>c,hideCode:()=>a,percentForAnswer:()=>d,showCodeQuiz:()=>i,totalQuest:()=>l});const n=[{question:"Что выведет в консоль?",a:"Останавливается на первой лжи",b:"Останавливается на первой правде",c:"Останавливается на твоей маме",d:"Останавливается на папе",correct:"a"},{question:"А я долбаеб?",a:"Да",b:"Нет",c:"дебил",d:"Останавливается на папе",correct:"a"},{question:"А кто же долбаеб?",a:"Ты",b:"Серега",c:"hi",d:"Останавливается на папе",correct:"a"}];function o(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function c(e){e.forEach((e=>{e.checked=!1}))}function s(e){return document.querySelector(e).classList.toggle("right")}function r(e){return document.querySelector(e).classList.toggle("not-right")}function l(e,t,n){e.textContent=`${t}/${n}`}function d(e){return 100===e?" <div class='textEnd'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>60&&100!=e?" <div class='textEnd'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<50&&0!=e?"<div class='textEnd'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":"<div class='textEnd'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>"}function a(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function i(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const u={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")};document.addEventListener("DOMContentLoaded",(()=>{const{blockFocus:e,deleteSelectAnswers:o,addColorAnswer:c,totalQuest:s,percentForAnswer:r,hideCode:l,showCodeQuiz:d,addNotRightAnswer:a}=t,{questionEl:i,a_text:h,b_text:g,c_text:b,d_text:p,btn:x,answerEls:f,quiz:q,total:y,labels:m,codeForQuestion:v}=u;let S=0,w=0,E=n[S].correct;function _(){o(f);const e=n[S];i.textContent=e.question,h.innerText=e.a,g.innerText=e.b,b.innerText=e.c,p.innerText=e.d}_(),l(v),d(v,S),x.addEventListener("click",(()=>{const t=function(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}(f);if(t)if(t===E?(w++,c(`.${E}`)):c(`.${E}`),t!==E&&a(`.${t}`),S++,s(y,S,n.length),e(m,x),S<n.length){const n=setInterval((()=>{c(`.${E}`),t!==E&&a(`.${t}`),_(),l(v),d(v,S),e(m,x),clearInterval(n)}),1e3)}else{const e=Math.floor(w/n.length*100),t=setInterval((()=>{q.innerHTML=`\n                    <div class="hi"><img class="picture" src="icon.png" alt="hi">  </div>\n                    <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${r(e)} </h2>\n                    <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                `,clearInterval(t)}),1e3)}})),s(y,S,n.length)}))})();