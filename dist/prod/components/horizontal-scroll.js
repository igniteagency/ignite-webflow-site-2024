"use strict";(()=>{var o=".horizontal-scroll";function s(){let r=document.querySelector(`${o}`),e=window.gsap.utils.toArray(`${o} > section`);if(r&&e.length){let t=e.length;window.gsap.to(e,{xPercent:-(100*(t-1)),duration:t,ease:"none",scrollTrigger:{trigger:`${o}`,scrub:!0,start:"top top",end:()=>"+="+window.innerHeight*(t-1),pin:!0,invalidateOnRefresh:!0,snap:1/(t-1)}}),window.gsap.fromTo(r,{opacity:.95},{opacity:1,duration:.3,scrollTrigger:{trigger:`${o}`,start:"top bottom-=10%",end:"top top+=10%",toggleActions:"play none none reverse"}}),window.gsap.delayedCall(1,()=>{window.ScrollTrigger.refresh()})}}})();
