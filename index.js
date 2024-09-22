import{i as c,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="46054358-74185f2755c78a9980c41a2df",d="https://pixabay.com/api/";async function f(i){const r=`${d}?key=${u}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const n=await(await fetch(r)).json();if(n.hits.length===0)throw new Error("No images found.");return n.hits}catch(o){return console.error("Error fetching images:",o),[]}}let a;function m(i){const r=document.querySelector(".gallery");if(r.innerHTML="",i.length===0){c.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",titleColor:"white",title:"ⓧ",titleSize:"22px",backgroundColor:"red",icon:"",messageColor:"white",position:"topRight",theme:"dark",class:"toast-center"});return}const o=i.map(n=>h(n)).join("");r.innerHTML=o,a?a.refresh():a=new l(".gallery a")}function h({webformatURL:i,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:s}){return`
        <a href="${r}">
            <div class="photo-card">
                <img width="360" height="152" src="${i}" class="photo-card-img" alt="${o}" loading="lazy" />
                <div class="info">
                    <p><b>Likes</b> ${n}</p>
                    <p><b>Views</b> ${e}</p>
                    <p><b>Comments</b> ${t}</p>
                    <p><b>Downloads</b> ${s}</p>
                </div>
            </div>
        </a>
    `}function p(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}const y=document.querySelector("#search-form"),b=document.querySelector('input[name="query"]');y.addEventListener("submit",w);async function w(i){i.preventDefault();const r=b.value.trim();if(!r){iziToast.warning({title:"Input Error",message:"Please enter a search term!"});return}p();try{const o=await f(r);m(o)}catch{iziToast.error({title:"No Results",message:"No images were found. Please try a different keyword."})}finally{g()}}
//# sourceMappingURL=index.js.map
