(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>r,blockFocus:()=>o,deleteSelectAnswers:()=>c,hideCode:()=>a,percentForAnswer:()=>l,showCodeQuiz:()=>d,totalQuest:()=>s});const n=[{question:"Что выведет в консоль?",a:"Останавливается на первой лжи",b:"Останавливается на первой правде",c:"Останавливается на твоей маме",d:"Останавливается на папе",correct:"a",id:"1"},{question:"А я долбаеб?",a:"Да",b:"Нет",c:"дебил",d:"Останавливается на папе",correct:"a",id:"2"},{question:"А кто же долбаеб?",a:"Ты",b:"Серега",c:"hi",d:"Останавливается на папе",correct:"a",id:"3"}];function o(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function c(e){e.forEach((e=>{e.checked=!1}))}function r(e){return document.querySelector(e).classList.toggle("right")}function s(e,t,n){e.textContent=`${t}/${n}`}function l(e){return 100===e?" <div class='textEnd'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>60&&100!=e?" <div class='textEnd'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<50&&0!=e?"<div class='textEnd'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":"<div class='textEnd'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>"}function a(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function d(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const i={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")},{blockFocus:u,deleteSelectAnswers:h,addColorAnswer:b,totalQuest:p,percentForAnswer:x,hideCode:g,showCodeQuiz:f}=t,{questionEl:q,a_text:y,b_text:v,c_text:m,d_text:S,btn:w,answerEls:_,quiz:E,total:A,labels:C,codeForQuestion:L}=i;let $=0,T=0;function k(){h(_);const e=n[$];q.textContent=e.question,y.innerText=e.a,v.innerText=e.b,m.innerText=e.c,S.innerText=e.d}k(),g(L),f(L,$),w.addEventListener("click",(()=>{const e=function(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}(_);if(e)if(e===n[$].correct?(T++,b(`.${n[$].correct}`)):b(`.${n[$].correct}`),$++,p(A,$,n.length),u(C,w),$<n.length){const e=setInterval((()=>{k(),g(L),f(L,$),b(`.${n[$].correct}`),u(C,w),clearInterval(e)}),1e3)}else{const e=Math.floor(T/n.length*100),t=setInterval((()=>{E.innerHTML=`\n                <div class="hi"><img class="picture" src="icon.png" alt="hi">  </div>\n                <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${T}</p> из ${n.length} <span class="percent"> ${e}% </span> ${x(e)} </h2>\n                <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>\n            `,clearInterval(t)}),1e3)}})),p(A,$,n.length)})();