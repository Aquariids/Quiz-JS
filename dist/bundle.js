(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addColorAnswer:()=>r,addNotRightAnswer:()=>s,blockFocus:()=>c,deleteSelectAnswers:()=>o,hideCode:()=>l,percentForAnswer:()=>i,showCodeQuiz:()=>a,totalQuest:()=>d});const n=[{question:"Что выведет в консоль?",a:'"false"',b:"1",c:"true",d:"0",correct:"a",id:"1"},{question:"Какое значение будет в result?",a:"null",b:"2",c:"3",d:"undefined",correct:"d",id:"2"},{question:"Какое значение будет в result?",a:"boolean",b:"null",c:"undefined",d:"0",correct:"a",id:"3"},{question:"Что выведет в консоль?",a:"false",b:'"Аниме"',c:"0",d:"1",correct:"b",id:"4"},{question:"Какое значение будет в result?",a:"null",b:"1",c:"2",d:"SyntaxError",correct:"c",id:"5"},{question:"Чему будет равно n?",a:"8",b:"6",c:"7",d:"9",correct:"a",id:"6"},{question:"Что выведет в консоль?",a:"2",b:"undefined",c:"1",d:"null",correct:"c",id:"7"},{question:"Что выведет в консоль?",a:"10",b:"SyntaxError",c:"undefined",d:"25",correct:"a",id:"8"},{question:"Что выведет в консоль?",a:"5",b:"undefined",c:"null",d:"ReferenceError",correct:"d",id:"9"},{question:"Чему будет равно n?",a:"8",b:"7",c:"1",d:"4",correct:"b",id:"10"},{question:"Что выведет в консоль?",a:"number",b:"boolean",c:"string",d:"5",correct:"c",id:"11"},{question:"Что выведет в консоль?",a:"false",b:"boolean",c:"true",d:'"10"',correct:"a",id:"12"},{question:"Что выведет в консоль?",a:"12",b:"10",c:"9",d:"11",correct:"d",id:"13"},{question:"Что выведет в консоль?",a:"1 2 3 4 5",b:"0 1 2 3 4",c:"undefined",d:"TypeError",correct:"b",id:"14"},{question:"Что выведет в консоль?",a:"10 14 18",b:"a b c",c:"TypeError",d:"null",correct:"c",id:"15"},{question:"Что выведет в консоль?",a:"TypeError",b:"undefined",c:"4",d:"ReferenceError",correct:"c",id:"16"},{question:"Какое значение будет в res?",a:"undefined",b:"null",c:'"0"',d:"object",correct:"d",id:"17"},{question:"Что выведет в консоль?",a:"6 1 3",b:"null",c:"ReferenceError",d:"undefined",correct:"a",id:"18"},{question:"Что выведет в консоль?",a:"5",b:"10",c:"undefined",d:"1",correct:"b",id:"19"},{question:"Что выведет в консоль?",a:"NaN",b:"9",c:"0",d:"TypeError",correct:"b",id:"20"}];function c(e,t){t.classList.toggle("disabled"),e.forEach((e=>{e.classList.toggle("disabled")}))}function o(e){e.forEach((e=>{e.checked=!1}))}function r(e){return document.querySelector(e).classList.toggle("right")}function s(e){return document.querySelector(e).classList.toggle("not-right")}function d(e,t,n){e.textContent=`${t}/${n}`}function i(e){return 100===e?"<div class='result-text'> <span class='right'> Отлично, можешь собой гордиться!</span> </div>":e>55&&100!=e?" <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>":e<55&&0!=e&&e>30?"<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>":e<30&&0!=e?"<div class='result-text'> <span class='bad'>Попытка не пытка!</span> </div>":0===e?"<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>":void 0}function l(e){e.forEach((e=>{e.classList.remove("show"),e.classList.add("hide")}))}function a(e,t){e[t].classList.remove("hide"),e[t].classList.add("show")}const u={questionEl:document.querySelector("#question"),a_text:document.querySelector("#a_text"),b_text:document.querySelector("#b_text"),c_text:document.querySelector("#c_text"),d_text:document.querySelector("#d_text"),btn:document.querySelector("#btn"),answerEls:document.querySelectorAll(".answer"),quiz:document.querySelector("#quiz"),total:document.querySelector(".total"),labels:document.querySelectorAll(".l"),codeForQuestion:document.querySelectorAll(".code")};document.addEventListener("DOMContentLoaded",(()=>{const{blockFocus:e,deleteSelectAnswers:c,addColorAnswer:o,totalQuest:r,percentForAnswer:s,hideCode:d,showCodeQuiz:i,addNotRightAnswer:l}=t,{questionEl:a,a_text:b,b_text:p,c_text:q,d_text:f,btn:h,answerEls:g,quiz:y,total:x,labels:m,codeForQuestion:v}=u;let S=0,w=0;function E(){c(g);const e=n[S];a.textContent=e.question,b.innerText=e.a,p.innerText=e.b,q.innerText=e.c,f.innerText=e.d}E(),d(v),i(v,S),h.addEventListener("click",(()=>{const t=function(e){let t;return e.forEach((e=>{if(e.checked)return t=e.id})),t}(g);let c=n[S].correct;if(t)if(t===c?(w++,o(`.${c}`)):o(`.${c}`),t!==c&&l(`.${t}`),S++,r(x,S,n.length),e(m,h),S<n.length){const n=setInterval((()=>{o(`.${c}`),t!==c&&l(`.${t}`),E(),d(v),i(v,S),e(m,h),clearInterval(n)}),1e3)}else{const e=Math.floor(w/n.length*100),t=setInterval((()=>{"white"===localStorage.getItem("theme")?(document.querySelector("#black-icon").style.display="none",y.innerHTML=`\n                        <div id="white-icon" class="icon" ><img class="picture-white" src="./icons/icon2.png" alt="hi1"> </div>    \n                        <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${s(e)} </h2>\n                        <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                `):y.innerHTML=`\n                            <div id="black-icon" class="icon"><img class="picture-black" src="./icons/icon.png" alt="hi"> </div>\n                            <h2 style="text-align: center; padding: 10px 0 10px 0;"> Ваш результат: <p class='right'>${w}</p> из ${n.length} <span class="percent"> ${e}% </span> ${s(e)} </h2>\n                            <button class="button-reloaded" onClick="location.reload()"> Попробовать еще раз </button>\n                            `,clearInterval(t)}),1e3)}})),r(x,S,n.length)}))})();