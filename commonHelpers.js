(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=()=>{const t=n.querySelectorAll('a[href*="#"]'),r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),n.classList.toggle("is-open"),r?(e.classList.remove("js-close-menu"),e.classList.add("js-open-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-open-menu"),e.setAttribute("aria-expanded","false"),e.querySelector("svg").setAttribute("width","24"),e.querySelector("svg").setAttribute("height","24")):(e.classList.remove("js-open-menu"),e.classList.add("js-close-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-icon-close"),e.setAttribute("aria-expanded","true"),e.querySelector("svg").setAttribute("width","28"),e.querySelector("svg").setAttribute("height","28"));const o=r?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[o](document.body),t.length!==0){if(!r){t.forEach(i=>{i.addEventListener("click",s)});return}t.forEach(i=>{i.removeEventListener("click",s)})}};e.addEventListener("click",s),c.addEventListener("click",s),window.matchMedia("(min-width: 375px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),e.classList.remove("js-close-menu"),e.classList.add("js-open-menu"),e.querySelector("use").setAttribute("href","/img/icons.svg#icon-open-menu"),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map