/* empty css                      */import{S as c,N as a,K as d,A as p}from"./assets/vendor-ae7a8038.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();let n;function u(){if(!(window.innerWidth>=1024))n||(n=new c(".mySwiper",{direction:"horizontal",spaceBetween:20,loop:!0,slidesPerView:"auto",modules:[a,d],navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"}}));else{n&&(n.destroy(!0,!0),n=null);const e=document.querySelector(".review-grid");e&&(e.classList.remove("swiper","mySwiper"),e.querySelectorAll(".swiper-slide").forEach(o=>{o.classList.remove("swiper-slide")}),e.querySelectorAll(".swiper-wrapper").forEach(o=>{o.classList.remove("swiper-wrapper")}))}}u();window.addEventListener("resize",u);document.addEventListener("DOMContentLoaded",()=>{new p(".faq-accordion-container",{duration:250,showMultiple:!1,collapse:!0,elementClass:"faq-item",triggerClass:"faq-item-btn",panelClass:"faq-item-description-container",onOpen:r=>{r.classList.add("is-active");const e=r.querySelector(".faq-item-description-container");e&&(e.style.maxHeight=e.scrollHeight+"px",e.style.visibility="visible")},onClose:r=>{r.classList.remove("is-active");const e=r.querySelector(".faq-item-description-container");e&&(e.style.maxHeight="0",e.style.visibility="hidden")}})});const m=()=>{const r=document.querySelector("#burger-btn"),e=document.querySelector("#mob-menu");r.addEventListener("click",()=>{e.classList.toggle("open")}),e.querySelectorAll(".mob-menu-list-item a").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("open")})}),document.addEventListener("pointerdown",s=>{e.contains(s.target)||e.classList.remove("open")})};m();new c(".mySwiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",modules:[a,d],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=commonHelpers.js.map