(()=>{var e={896:()=>{const e=document.querySelector(".header__dark-mode"),t=document.querySelector("body"),n=localStorage.getItem("mode")?localStorage.getItem("mode"):null;n&&t.classList.add("dark-mode"),e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),n?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";const e=document.querySelector(".loader"),t=t=>{t?e.classList.remove("hidden"):e.classList.add("hidden")},o=async e=>{t(!0);const n=await fetch(e);if(!n.ok)throw t(!1),new Error("Something wenyt working ??");const o=await n.json();return t(!1),o},a=document.querySelector(".cards"),r=e=>{a.innerHTML="",e.forEach((e=>{const t=e.name.common,n=e.population,o=e.region,r=e.capital?e.capital[0]:"no copital",s=e.flags.svg,c=document.createElement("li");c.classList.add("cards__item"),c.innerHTML=`\n    <a href="./about.html?country=${t}">\n            <img src=${s} alt="germany-flag" width="267" height="160">\n            <div class="cards__item-inner">\n                <h3 class="cards__title">${t}</h3>\n                <p class="population">Population: <span>${n}</span></p>\n                <p class="region">Region: <span>${o}</span></p>\n                <p class="capital">Capital: <span>${r}</span></p>\n            </div>\n    </a>\n    \n    \n    `,a.appendChild(c)}))},s=(document.querySelector(".country-info"),document.querySelector(".search"));s.search.addEventListener("input",(()=>{const e=s.search.value.toLowerCase(),t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((n,o)=>{n.textContent.toLocaleLowerCase().includes(e)?t[o].style.display="block":t[o].style.display="none"}))}));const c=document.querySelectorAll(".search__select-list li"),l=document.querySelector(".search__select span");c.forEach((e=>{e.addEventListener("click",(()=>{let t;l.textContent=e.textContent,t="All"==e.textContent?"https://restcountries.com/v3.1/all":`\n        https://restcountries.com/v3.1/region/${e.textContent}\n        \n        `,o(t).then((e=>{r(e)})).catch((e=>{alert(e.massage)}))}))})),n(896),o("https://restcountries.com/v3.1/all").then((e=>{r(e)})).catch((e=>{alert(e.message)}))})()})();