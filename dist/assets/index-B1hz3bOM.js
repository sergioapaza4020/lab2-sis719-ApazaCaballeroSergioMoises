(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const u="https://pokeapi.co/api/v2/";async function l(t,r){const s=`${u}${t}/${r.toLowerCase()}`,o=await fetch(s);if(!o.ok)throw new Error(`No se pudo obtener ${t} con identificador "${r}"`);return await o.json()}function d(t){return l("pokemon",t)}function a(t){const r=document.getElementById("result");r.innerHTML=`
    <h2>${t.name.toUpperCase()}</h2>
    <p>ID: ${t.id}</p>
    <p>WEIGHT: ${t.weight}</p>
    <p>TYPES: ${t.types.type[0]}</p>
    <div>
        ${Object.entries(t.sprites).filter(([s,o])=>typeof o=="string"&&o!==null).map(([s,o])=>`<img src="${o}" alt="${s}" title="${s}" />`).join("")}
    </div>
    `}const p=document.getElementById("searchInput"),f=document.getElementById("searchBtn"),c=document.getElementById("result");f.addEventListener("click",async()=>{const t=p.value.trim();if(t){c.innerHTML="🔄 Buscando...";try{const r=await d(t);a(r)}catch(r){c.innerHTML=`<p style="color:red;">${r.message}</p>`}}});
