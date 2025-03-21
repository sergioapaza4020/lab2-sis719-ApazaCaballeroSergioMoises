(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="https://pokeapi.co/api/v2/";async function l(t,r){const s=`${u}${t}/${r.toLowerCase()}`,n=await fetch(s);if(!n.ok)throw new Error(`No se pudo obtener ${t} con identificador "${r}"`);return await n.json()}function a(t){return l("pokemon",t)}function d(t){const r=document.getElementById("result");r.innerHTML=`
    <h2>${t.name.toUpperCase()}</h2>
    <p>ID: ${t.id}</p>
    <p>WEIGHT: ${t.weight}</p>
    <p>ABILITIES:</p>
    ${Object.entries(t.abilities).map(([s,{ability:n}])=>`<p>${n.name} and ${n.url}</p>`)}
    <div>
        ${Object.entries(t.sprites).filter(([s,n])=>typeof n=="string"&&n!==null).map(([s,n])=>`<img src="${n}" alt="${s}" title="${s}" />`).join("")}
    </div>
    `}const p=document.getElementById("searchInput"),f=document.getElementById("searchBtn"),c=document.getElementById("result");f.addEventListener("click",async()=>{const t=p.value.trim();if(t){c.innerHTML="🔄 Buscando...";try{const r=await a(t);d(r)}catch(r){console.error(r),c.innerHTML=`<p style="color:red;">${r.message}</p>`}}});
