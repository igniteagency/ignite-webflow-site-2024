"use strict";(()=>{function s(){document.querySelectorAll("[data-hover-target]").forEach(e=>{let o=e.querySelector("[data-hover-move]");o?(e.addEventListener("mousemove",t=>{let n=e.getBoundingClientRect(),a=t.clientX-n.left,r=t.clientY-n.top;console.log(`Mouse move - X: ${a}, Y: ${r}`),window.gsap.to(o,{x:a,y:r,duration:.3,ease:"power3.out"})}),e.addEventListener("mouseleave",()=>{console.log("Mouse leave"),window.gsap.to(o,{x:0,y:0,duration:.3,ease:"power3.out"})})):console.error("No image found with data-hover-move within the block:",e)})}})();