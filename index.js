import{S as u,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="46054358-74185f2755c78a9980c41a2df",f="https://pixabay.com/api/";async function p(s){try{const t=await fetch(`${f}?key=${h}&q=${encodeURIComponent(s.trim())}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("No images found.");return t.json()}catch(t){throw console.error(t),new Error("Error fetching images.")}}function m(s){const t=document.querySelector(".gallery");t.innerHTML="",s.forEach(o=>{const e=document.createElement("div");e.classList.add("gallery-item"),e.innerHTML=`
        <div class="photo-card">
            <a href="${o.largeImageURL}" class="gallery-link">
                <img width="360" height="152" src="${o.webformatURL}" class="photo-card-img" alt="${o.tags}" loading="lazy"/>
            </a>
            <div class="info">
                <p><b>Likes</b> ${o.likes}</p>
                <p><b>Views</b> ${o.views}</p>
                <p><b>Comments</b> ${o.comments}</p>
                <p><b>Downloads</b> ${o.downloads}</p>
            </div>
        </div>
        `,t.appendChild(e)}),new u(".gallery a").refresh()}function y(){d.warning({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",titleColor:"white",title:"ⓧ",titleSize:"22px",backgroundColor:"red",icon:"",messageColor:"white",theme:"dark",class:"toast-center"})}function l(s){d.error({title:"Err",message:s,position:"topRight",titleColor:"white",title:"ⓧ",titleSize:"22px",backgroundColor:"red",icon:"",messageColor:"white",theme:"dark"})}const c=document.querySelector("#search-form"),a=document.querySelector(".loader");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.querySelector("input").value.trim();if(!t||t===""){l("The search field cannot be empty!");return}a.style.display="block";try{const i=await p(t);a.style.display="none",i.hits.length===0?y():m(i.hits)}catch{a.style.display="none",l("The request failed. Please try again later.")}});
//# sourceMappingURL=index.js.map
