"use strict";(()=>{var n=class{constructor(){this.progressLine=document.querySelector(".post-content_progress"),this.tocLinks=document.querySelectorAll(".post-content_link"),this.container=document.querySelector(".post-content_link-content")}init(){!this.progressLine||!this.container||(this.progressLineAnimation=window.gsap.quickTo(this.progressLine,"height",{duration:.5,ease:"power2.out"}),this.updateProgressLine(),window.addEventListener("scroll",()=>this.updateProgressLine()))}updateProgressLine(){let t=Array.from(this.tocLinks).filter(r=>r.classList.contains("w--current"));if(t.length===0)return;let i=this.container.getBoundingClientRect().top,o=t[t.length-1].getBoundingClientRect().top-i;this.progressLineAnimation(o)}};function l(){new n().init()}})();
