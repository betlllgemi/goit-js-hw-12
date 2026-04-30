import{f as n}from"./assets/pixabay-api-DBl2HtJ9.js";import{S as k,i}from"./assets/vendor-bEqFC_vW.js";function c(e){const t=document.querySelector(".gallery"),p=e.map(({webformatURL:u,largeImageURL:g,tags:h,likes:f,views:b,comments:v,downloads:S})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${g}">
    <img class="gallery-image" src="${u}" alt="${h}" />
  </a>
  <div class="info">
    <div class="info-item"><b>Likes</b> <span>${f}</span></div>
    <div class="info-item"><b>Views</b> <span>${b}</span></div>
    <div class="info-item"><b>Comments</b> <span>${v}</span></div>
    <div class="info-item"><b>Downloads</b> <span>${S}</span></div>
  </div>
</li>
  `).join("");t.insertAdjacentHTML("beforeend",p)}let d=new k(".gallery a",{captionsData:"alt",captionDelay:250});const q=document.querySelector("#search-form"),F=document.querySelector(".gallery"),a=document.querySelector("#loader-top"),l=document.querySelector("#loader-bottom"),o=document.querySelector("#load-more");let r="",s=1,y=0;q.addEventListener("submit",async e=>{if(e.preventDefault(),r=e.target.elements.query.value.trim(),r!==""){s=1,F.innerHTML="",o.style.display="none",a.style.display="block",l.style.display="none";try{const t=await n(r,s);if(a.style.display="none",y=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",icon:"fa-solid fa-circle-xmark",iconColor:"#FFF",maxWidth:"432px",class:"custom-toast"});return}c(t.hits),d.refresh(),m()}catch(t){a.style.display="none",console.error(t)}}});o.addEventListener("click",async()=>{s+=1,l.style.display="block",o.style.display="none",a.style.display="none";try{const e=await n(r,s);c(e.hits),d.refresh(),l.style.display="none",w(),m()}catch(e){l.style.display="none",console.error(e)}});function m(){s*40>=y?(o.style.display="none",i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):o.style.display="block"}function w(){const e=document.querySelector(".gallery-item");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=search.js.map
