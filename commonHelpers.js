(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.querySelector(".header"),e=()=>{const t=o.querySelectorAll('a[href*="#"]'),r=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!r),o.classList.toggle("is-open"),r?s.classList.remove("is-open"):s.classList.add("is-open");const d=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[d](document.body),t.length!==0&&(r?t.forEach(i=>{i.removeEventListener("click",e)}):t.forEach(i=>{i.addEventListener("click",e)}))};n.addEventListener("click",e),c.addEventListener("click",e),window.matchMedia("(min-width: 375px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("js-open-menu"),n=document.getElementById("menu-icon");o.addEventListener("click",function(){o.getAttribute("aria-expanded")==="true"?(o.setAttribute("aria-expanded","false"),n.querySelector("use").setAttribute("href","/img/symbol-defs-header.svg#icon-open-menu")):(o.setAttribute("aria-expanded","true"),n.querySelector("use").setAttribute("href","/img//img/icons.svg#icon-icon-close"))})});
//# sourceMappingURL=commonHelpers.js.map