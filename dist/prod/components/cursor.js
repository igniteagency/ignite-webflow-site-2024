"use strict";(()=>{var n=document.querySelectorAll("[data-cursor]"),t=document.querySelectorAll(".cursor");function u(){gsap.set(t,{xPercent:-50,yPercent:-50});let r=gsap.quickTo(t,"x",{duration:.2,ease:"power3"}),c=gsap.quickTo(t,"y",{duration:.2,ease:"power3"});window.addEventListener("mousemove",e=>{r(e.clientX),c(e.clientY)}),n.forEach(e=>{let o=e.getAttribute("data-cursor");e.addEventListener("mouseenter",()=>{o!==null&&gsap.to(".cursor p",{text:o,duration:.8})})})}})();
