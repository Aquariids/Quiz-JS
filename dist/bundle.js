(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>s,addNotRightAnswer:()=>r,blockFocus:()=>o,deleteSelectAnswers:()=>c,hideCode:()=>a,percentForAnswer:()=>d,showCodeQuiz:()=>i,totalQuest:()=>l});const n=[{question:"Что выведет в консоль?",a:'"false"',b:"1",c:"true",d:"0",correct:"a",id:"1"},{question:"Какое значение будет в result?",a:"null",b:"2",c:"3",d:"undefined",correct:"d",id:"2"},{question:"Какое значение будет в result?",a:"boolean",b:"null",c:"undefined",d:"0",correct:"a",id:"3"},{question:"Что выведет в консоль?",a:"false",b:'"Аниме"',c:"0",d:"1",correct:"b",id:"4"},{question:"Какое значение будет в result?",a:"null",b:"1",c:"2",d:"throw a SyntaxError",correct:"c",id:"5"}];function o(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function c(e){e.forEach((e=>{e.checked=!1}))}function s(e){return document.querySelector(e).classList.toggle("right")}function r(e){return document.querySelector(e).classList.toggle("not-right")}function l(e,t,n){e.textContent=`${t}/${n}`}function d(e){return 100===e?" <div class='textEnd'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>=60&&100!=e?" <div class='textEnd'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<=50&&0!=e&&e>20?"<div class='textEnd'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":e<=20&&0!=e?"<div class='textEnd'> <span class='bad'> Ну ты хотя бы пытался! </span> </div>":0===e?"<div class='textEnd'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>":void 0}function a(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function i(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const u={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")};document.addEventListener("DOMContentLoaded",(()=>{const{blockFocus:e,deleteSelectAnswers:o,addColorAnswer:c,totalQuest:s,percentForAnswer:r,hideCode:l,showCodeQuiz:d,addNotRightAnswer:a}=t,{questionEl:i,a_text:b,b_text:h,c_text:g,d_text:p,btn:f,answerEls:x,quiz:q,total:v,labels:y,codeForQuestion:m}=u;let S=0,w=0;function E(){o(x);const e=n[S];i.textContent=e.question,b.innerText=e.a,h.innerText=e.b,g.innerText=e.c,p.innerText=e.d}E(),l(m),d(m,S),f.addEventListener("click",(()=>{const t=function(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}(x);let o=n[S].correct;if(t)if(t===o?(w++,c(`.${o}`)):c(`.${o}`),t!==o&&a(`.${t}`),S++,s(v,S,n.length),e(y,f),S<n.length){const n=setInterval((()=>{c(`.${o}`),t!==o&&a(`.${t}`),E(),l(m),d(m,S),e(y,f),clearInterval(n)}),1e3)}else{const e=Math.floor(w/n.length*100),t=setInterval((()=>{q.innerHTML=`\n                    <div id="black-icon" class="icon"><img class="picture" src="./icons/icon.png" alt="hi"> </div>\n                    <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${r(e)} </h2>\n                    <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                `,clearInterval(t)}),1e3)}})),s(v,S,n.length)}))})();