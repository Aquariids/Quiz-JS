(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>o,blockFocus:()=>c,deleteSelectAnswers:()=>r,percentForAnswer:()=>s,totalQuest:()=>l});const n=[{question:"Что делает оператор &&",a:"Останавливается на первой лжи",b:"Останавливается на первой правде",c:"Останавливается на твоей маме",d:"Останавливается на папе",correct:"a"},{question:"А я долбаеб?",a:"Да",b:"Нет",c:"дебил",d:"Останавливается на папе",correct:"a"},{question:"А кто же долбаеб?",a:"Ты",b:"Серега",c:"hi",d:"Останавливается на папе",correct:"a"}];function c(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function r(e){e.forEach((e=>{e.checked=!1}))}function o(e){return document.querySelector(e).classList.toggle("right")}function l(e,t,n){e.textContent=`${t}/${n}`}function s(e){return 100===e?" <div class='textEnd'> <span class='right'> Вы ответили на все вопросы правильно!</span> </div>":e>60&&100!=e?" <div class='textEnd'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<50&&0!=e?"<div class='textEnd'> <span class='bad'> Плоховато, постарайтесь лучше! </span> </div>":"<div class='textEnd'> <span class ='wrong'> Вы не ответили ни на один вопрос! </span> </div>"}const{blockFocus:a,deleteSelectAnswers:d,addColorAnswer:i,totalQuest:u,percentForAnswer:p}=t,g=document.querySelector("#question"),b=document.querySelector("#a_text"),y=document.querySelector("#b_text"),f=document.querySelector("#c_text"),h=document.querySelector("#d_text"),v=document.querySelector("#btn"),S=document.querySelectorAll(".answer"),m=document.querySelector("#quiz"),q=document.querySelector(".total"),x=document.querySelectorAll(".l");let w=0,$=0;function A(){d(S);const e=n[w];g.textContent=e.question,b.innerText=e.a,y.innerText=e.b,f.innerText=e.c,h.innerText=e.d}A(),v.addEventListener("click",(()=>{const e=function(){let e;return S.forEach((t=>{if(t.checked)return e=t.id})),e}();if(e)if(e===n[w].correct?($++,i(`.${n[w].correct}`)):i(`.${n[w].correct}`),w++,u(q,w,n.length),a(x,v),w<n.length){const e=setInterval((()=>{A(),i(`.${n[w].correct}`),a(x,v),clearInterval(e)}),1e3)}else{const e=Math.floor($/n.length*100),t=setInterval((()=>{m.innerHTML=`\n                <div class="hi"><img class="picture" src="icon.png" alt="hi">  </div>\n                <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: ${$} из ${n.length} <span class="percent"> ${e}% </span> ${p(e)} </h2>\n                <button class="buttonReloaded" onClick="location.reload()"> Попробовать еще раз </button>\n            `,clearInterval(t)}),1e3)}})),u(q,w,n.length)})();