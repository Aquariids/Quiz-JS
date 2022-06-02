(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>s,addNotRightAnswer:()=>r,blockFocus:()=>o,deleteSelectAnswers:()=>c,hideCode:()=>a,percentForAnswer:()=>i,showCodeQuiz:()=>d,totalQuest:()=>l});const n=[{question:"Что выведет в консоль?",a:'"false"',b:"1",c:"true",d:"0",correct:"a",id:"1"},{question:"Какое значение будет в result?",a:"null",b:"2",c:"3",d:"undefined",correct:"d",id:"2"},{question:"Какое значение будет в result?",a:"boolean",b:"null",c:"undefined",d:"0",correct:"a",id:"3"},{question:"Что выведет в консоль?",a:"false",b:'"Аниме"',c:"0",d:"1",correct:"b",id:"4"},{question:"Какое значение будет в result?",a:"null",b:"1",c:"2",d:"throw a SyntaxError",correct:"c",id:"5"},{question:"Чему будет равна n?",a:"8",b:"6",c:"7",d:"9",correct:"a",id:"6"},{question:"Что выведет в консоль?",a:"2",b:"undefined",c:"1",d:'"2"',correct:"c",id:"7"},{question:"Что выведет в консоль?",a:"10",b:"throw a SyntaxError",c:"undefined",d:"25",correct:"a",id:"8"}];function o(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function c(e){e.forEach((e=>{e.checked=!1}))}function s(e){return document.querySelector(e).classList.toggle("right")}function r(e){return document.querySelector(e).classList.toggle("not-right")}function l(e,t,n){e.textContent=`${t}/${n}`}function i(e){return 100===e?" <div class='result-text'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>=60&&100!=e?" <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<=50&&0!=e&&e>20?"<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":e<=20&&0!=e?"<div class='result-text'> <span class='bad'>Попытка не пытка! </span> </div>":0===e?"<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>":void 0}function a(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function d(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const u={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")};document.addEventListener("DOMContentLoaded",(()=>{const{blockFocus:e,deleteSelectAnswers:o,addColorAnswer:c,totalQuest:s,percentForAnswer:r,hideCode:l,showCodeQuiz:i,addNotRightAnswer:a}=t,{questionEl:d,a_text:b,b_text:h,c_text:p,d_text:g,btn:x,answerEls:f,quiz:q,total:y,labels:v,codeForQuestion:m}=u;let S=0,w=0;function $(){o(f);const e=n[S];d.textContent=e.question,b.innerText=e.a,h.innerText=e.b,p.innerText=e.c,g.innerText=e.d}$(),l(m),i(m,S),x.addEventListener("click",(()=>{const t=function(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}(f);let o=n[S].correct;if(t)if(t===o?(w++,c(`.${o}`)):c(`.${o}`),t!==o&&a(`.${t}`),S++,s(y,S,n.length),e(v,x),S<n.length){const n=setInterval((()=>{c(`.${o}`),t!==o&&a(`.${t}`),$(),l(m),i(m,S),e(v,x),clearInterval(n)}),1e3)}else{const e=Math.floor(w/n.length*100),t=setInterval((()=>{"white"===localStorage.getItem("theme")?(document.querySelector("#black-icon").style.display="none",q.innerHTML=`\n                        <div id="white-icon" class="icon" ><img class="picture-white" src="./icons/icon2.png" alt="hi1"> </div>    \n                        <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${r(e)} </h2>\n                        <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                `):q.innerHTML=`\n                            <div id="black-icon" class="icon"><img class="picture-black" src="./icons/icon.png" alt="hi"> </div>\n                            <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${r(e)} </h2>\n                            <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                            `,clearInterval(t)}),1e3)}})),s(y,S,n.length)}))})();