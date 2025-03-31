"use strict";(()=>{function w(){return new Promise((i,n)=>{if(window.Vimeo){i();return}let e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js",e.async=!0,e.onload=()=>i(),e.onerror=()=>n(new Error("Failed to load Vimeo Player API")),document.body.appendChild(e)})}function b(i){let n=i.querySelector("[data-vimeo-player]"),e=new window.Vimeo.Player(n),d=i.querySelector("[data-vimeo-play-pause-button]"),s=i.querySelector("[data-vimeo-play-icon]"),a=i.querySelector("[data-vimeo-pause-icon]"),g=i.querySelector("[data-vimeo-audio-button]"),p=i.querySelector("[data-vimeo-audio-on]"),f=i.querySelector("[data-vimeo-audio-off]"),u=parseFloat(i.getAttribute("data-vimeo-start")||"0")||0,y=parseFloat(i.getAttribute("data-vimeo-end")||"")||null,L=i.hasAttribute("data-vimeo-hover-play"),o=!1,m=!1,l=!1,c=!1;function v(t){let r=t.getBoundingClientRect();return r.top<=(window.innerHeight||document.documentElement.clientHeight)&&r.bottom>=0&&r.left<=(window.innerWidth||document.documentElement.clientWidth)&&r.right>=0}function h(){let t=l;l=v(n),window.matchMedia("(prefers-reduced-motion: reduce)").matches||(!t&&l&&o&&!c?e.setCurrentTime(u).then(()=>e.play()):t&&!l&&o&&e.pause())}function E(){y!==null&&e.getCurrentTime().then(t=>{t>=y&&e.setCurrentTime(u)})}e.on("timeupdate",function(){E()}),e.on("play",function(){window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!o&&!c?(console.log("Preventing autoplay due to reduced motion preference"),e.pause().then(()=>{a.classList.add("hide"),s.classList.remove("hide")}).catch(r=>console.error("Error preventing autoplay:",r))):(console.log("Allowing play - user initiated or intended"),o=!0,s.classList.add("hide"),a.classList.remove("hide"))}),e.ready().then(()=>e.setVolume(0)).then(()=>e.setCurrentTime(u)).then(()=>e.pause()).then(()=>{l=v(n);let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(console.log("User prefers reduced motion:",t),o=!1,a.classList.add("hide"),s.classList.remove("hide"),l&&!t)return e.play().then(()=>{o=!0,s.classList.add("hide"),a.classList.remove("hide"),console.log("Video autostarted because in view and reduced motion not preferred")}).catch(r=>{console.warn("Could not autoplay video:",r),o=!1});t&&console.log("Video kept paused due to reduced motion preference")}).then(()=>{console.log("Vimeo player initialized successfully, playing:",o)}).catch(t=>{console.error("Error initializing Vimeo player:",t),e.pause().catch(r=>console.error("Failed to pause on error:",r)),o=!1,a.classList.add("hide"),s.classList.remove("hide")}),d.addEventListener("click",function(){console.log("Play/pause button clicked, current state:",o,"on container:",i),e.getPaused().then(t=>{console.log("Actual player paused state:",t),o=!t,o?e.pause().then(()=>{console.log("Video paused successfully by user"),a.classList.add("hide"),s.classList.remove("hide"),o=!1,c=!0}).catch(r=>console.error("Error pausing:",r)):(c=!1,e.play().then(()=>{console.log("Video played successfully by user"),s.classList.add("hide"),a.classList.remove("hide"),o=!0}).catch(r=>{console.error("Error playing:",r),o=!1,c=!0}))}).catch(t=>{console.error("Error getting player state:",t),o=!o,c=!o,o?e.play().then(()=>{s.classList.add("hide"),a.classList.remove("hide"),console.log("Fallback: Video playing by user")}).catch(r=>console.error("Fallback play error:",r)):e.pause().then(()=>{a.classList.add("hide"),s.classList.remove("hide"),console.log("Fallback: Video paused by user")}).catch(r=>console.error("Fallback pause error:",r))})}),g.addEventListener("click",function(){m?e.setVolume(0).then(()=>{p.classList.add("hide"),f.classList.remove("hide"),m=!1}).catch(t=>console.error("Error muting:",t)):e.setVolume(1).then(()=>{f.classList.add("hide"),p.classList.remove("hide"),m=!0}).catch(t=>console.error("Error unmuting:",t))}),L&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches?console.log("Hover play disabled due to reduced motion preference"):(i.addEventListener("mouseenter",function(){l&&!c&&e.play().then(()=>{s.classList.add("hide"),a.classList.remove("hide"),o=!0}).catch(r=>console.error("Error playing on hover:",r))}),i.addEventListener("mouseleave",function(){l&&!c&&e.pause().then(()=>{a.classList.add("hide"),s.classList.remove("hide"),o=!1}).catch(r=>console.error("Error pausing on hover out:",r))}))),e.on("play",function(){o=!0,s.classList.add("hide"),a.classList.remove("hide")}),e.on("pause",function(){l&&(o=!1,a.classList.add("hide"),s.classList.remove("hide"))}),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h,{passive:!0}),setTimeout(h,1e3)}function V(){document.querySelectorAll('iframe[src*="vimeo"]').forEach(n=>{let e=n.getAttribute("src");e&&e.includes("autoplay=1")&&console.warn("Found iframe with autoplay=1 which may override preferences:",n)})}function P(){V();let i=document.querySelectorAll("[data-vimeo-container]");console.log("Found",i.length,"Vimeo containers"),w().then(()=>{i.forEach((n,e)=>{console.log("Initializing player",e+1);try{b(n)}catch(d){console.error("Error initializing player",e+1,d)}}),console.log("All players initialization attempted")}).catch(n=>{console.error("Failed to load Vimeo API:",n)})}})();
