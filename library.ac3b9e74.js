var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("g9mVg");var a=i("6pIJ7"),o=i("2j7ES"),s=i("bnGUG");const l=document.querySelector(".library-empty"),r=document.querySelector(".library_list"),c=document.querySelector(".js-watched"),d=document.querySelector(".js-queue");let u=null;function p(){d.classList.remove("active-button"),c.classList.add("active-button"),r.innerHTML="";const e=JSON.parse(localStorage.getItem("watchedList"));e&&0!==e.length?(l.style.display="none",m(e)):l.style.display="block"}function g({id:e,title:t,name:n,poster_path:i,genres:a,release_date:s,first_air_date:l,vote_average:c}){const d=[];d.push(a.map((e=>e.id)));const u=d[0],p=`<li class="movieCard" data="${e}">\n      <div class="movieCard__img-wrapper">\n      <img src="https://image.tmdb.org/t/p/w500/${i}"\n        alt="${t||n} movie poster"\n        loading="lazy"\n        class="movieCard__img"\n      />\n      </div>\n      <div class="movieCard__text">\n        <h2 class="movieCard__title">${(t||n).toUpperCase()}</h2>\n        <p class="movieCard__info"> ${function(e){const t=[];return o.genres.forEach((n=>{e.includes(n.id)&&t.push(n.name)})),t.length>2?`${t[0]}, ${t[1]}, Other`:t.join(", ")}(u)} | ${new Date(s||l).getFullYear()}\n          <span class="movieCard__rate">${c.toFixed(1)}</span></p>\n      </div>\n      </li> `;r.insertAdjacentHTML("beforeend",p)}function v(){const e=JSON.parse(localStorage.getItem("watchedList")),t=JSON.parse(localStorage.getItem("queueList")),n=!e||0===e.length,i=!t||0===t.length;let a=!1;(c.classList.contains("active-button")&&n||d.classList.contains("active-button")&&i)&&(a=!0),a?(r.innerHTML="",l.style.display="block"):(l.style.display="none",r.innerHTML="",c.classList.contains("active-button")?m(e):d.classList.contains("active-button")&&m(t))}function f(){u&&(document.removeEventListener("scroll",u),u=null)}function m(e){let t=0;function n(){window.innerHeight+window.scrollY+1>=document.body.offsetHeight&&t<e.length&&i()}function i(){const i=Math.min(t+9,e.length);e.slice(t,i).forEach((e=>{(async function(e){(0,a.onSpinnerEnabled)();const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=e8d94f3e976148bda0a5c640d4df112b&language=en-US`);return(0,a.onSpinnerDisabled)(),await t.json()})(e).then((e=>{g(e)}))})),t+=9,t<e.length&&document.addEventListener("scroll",n)}f(),u=n,document.addEventListener("scroll",u),i()}p(),c.addEventListener("click",p),d.addEventListener("click",(function(){c.classList.remove("active-button"),d.classList.add("active-button"),r.innerHTML="";const e=JSON.parse(localStorage.getItem("queueList"));if(!e||0===e.length)return void(l.style.display="block");l.style.display="none",m(e)})),s.closeModalBtn.addEventListener("click",v),document.addEventListener("keyup",(e=>function(e){if("Escape"!==e.code)return;f(),v()}(e))),s.backdgop.addEventListener("click",(e=>function(e){e.target===e.currentTarget&&(f(),v())}(e))),i("by4Ut"),i("6pIJ7"),i("gDlPS"),i("bnGUG");
//# sourceMappingURL=library.ac3b9e74.js.map
