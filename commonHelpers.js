(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();(()=>{const c=document.querySelector(".js-menu-container"),e=document.querySelector("#js-open-menu"),o=document.querySelector("#js-close-menu"),i=document.querySelector("#js-open-menu-ghost"),t=()=>{const r=c.querySelectorAll('a[href*="#"]'),n=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!n),o.setAttribute("aria-expanded",!n),c.classList.toggle("is-open"),n?(e.classList.remove("js-close-menu"),e.classList.add("js-open-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-open-menu"),e.querySelector("svg").setAttribute("width","24"),e.querySelector("svg").setAttribute("height","24"),o.classList.remove("is-visible"),i.classList.add("is-visible")):(e.classList.remove("js-open-menu"),e.classList.add("js-close-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-icon-close"),e.querySelector("svg").setAttribute("width","28"),e.querySelector("svg").setAttribute("height","28"),o.classList.add("is-visible"),i.classList.remove("is-visible"));const u=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[u](document.body),r.length!==0&&(n?r.forEach(l=>{l.removeEventListener("click",t)}):r.forEach(l=>{l.addEventListener("click",t)}))},s=r=>{r.matches&&(c.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),o.setAttribute("aria-expanded","false"),e.classList.remove("js-close-menu"),e.classList.add("js-open-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-open-menu"),e.querySelector("svg").setAttribute("width","24"),e.querySelector("svg").setAttribute("height","24"),o.classList.remove("is-visible"),i.classList.remove("is-visible"),bodyScrollLock.enableBodyScroll(document.body))};e.addEventListener("click",t),o.addEventListener("click",t),i.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",s),s(window.matchMedia("(min-width: 768px)"))})();
//# sourceMappingURL=commonHelpers.js.map
