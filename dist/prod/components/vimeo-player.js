"use strict";(()=>{function f(){return new Promise((r,s)=>{if(window.Vimeo){r();return}let e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js",e.async=!0,e.onload=()=>r(),e.onerror=()=>s(new Error("Failed to load Vimeo Player API")),document.body.appendChild(e)})}function g(r){let s=r.querySelector("[data-vimeo-player]"),e=new window.Vimeo.Player(s),d=r.querySelector("[data-vimeo-play-pause-button]"),n=r.querySelector("[data-vimeo-play-icon]"),a=r.querySelector("[data-vimeo-pause-icon]"),u=parseFloat(r.getAttribute("data-vimeo-start")||"0")||0,p=parseFloat(r.getAttribute("data-vimeo-end")||"")||null,o=!1,l=!1,c=!1;function h(i){let t=i.getBoundingClientRect();return t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.bottom>=0&&t.left<=(window.innerWidth||document.documentElement.clientWidth)&&t.right>=0}function m(){let i=l;l=h(s),window.matchMedia("(prefers-reduced-motion: reduce)").matches||(!i&&l&&o&&!c?e.setCurrentTime(u).then(()=>e.play()):i&&!l&&o&&e.pause())}function y(){p!==null&&e.getCurrentTime().then(i=>{i>=p&&e.setCurrentTime(u)})}e.on("timeupdate",function(){y()}),e.on("play",function(){window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!o&&!c?(console.log("Preventing autoplay due to reduced motion preference"),e.pause().then(()=>{a.classList.add("hide"),n.classList.remove("hide")}).catch(t=>console.error("Error preventing autoplay:",t))):(console.log("Allowing play - user initiated or intended"),o=!0,n.classList.add("hide"),a.classList.remove("hide"))}),e.ready().then(()=>e.setVolume(0)).then(()=>e.setCurrentTime(u)).then(()=>e.pause()).then(()=>{l=h(s);let i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(console.log("User prefers reduced motion:",i),o=!1,a.classList.add("hide"),n.classList.remove("hide"),l&&!i)return e.play().then(()=>{o=!0,n.classList.add("hide"),a.classList.remove("hide"),console.log("Video autostarted because in view and reduced motion not preferred")}).catch(t=>{console.warn("Could not autoplay video:",t),o=!1});i&&console.log("Video kept paused due to reduced motion preference")}).then(()=>{console.log("Vimeo player initialized successfully, playing:",o)}).catch(i=>{console.error("Error initializing Vimeo player:",i),e.pause().catch(t=>console.error("Failed to pause on error:",t)),o=!1,a.classList.add("hide"),n.classList.remove("hide")}),d.addEventListener("click",function(){console.log("Play/pause button clicked, current state:",o,"on container:",r),e.getPaused().then(i=>{console.log("Actual player paused state:",i),o=!i,o?e.pause().then(()=>{console.log("Video paused successfully by user"),a.classList.add("hide"),n.classList.remove("hide"),o=!1,c=!0}).catch(t=>console.error("Error pausing:",t)):(c=!1,e.play().then(()=>{console.log("Video played successfully by user"),n.classList.add("hide"),a.classList.remove("hide"),o=!0}).catch(t=>{console.error("Error playing:",t),o=!1,c=!0}))}).catch(i=>{console.error("Error getting player state:",i),o=!o,c=!o,o?e.play().then(()=>{n.classList.add("hide"),a.classList.remove("hide"),console.log("Fallback: Video playing by user")}).catch(t=>console.error("Fallback play error:",t)):e.pause().then(()=>{a.classList.add("hide"),n.classList.remove("hide"),console.log("Fallback: Video paused by user")}).catch(t=>console.error("Fallback pause error:",t))})}),e.on("play",function(){o=!0,n.classList.add("hide"),a.classList.remove("hide")}),e.on("pause",function(){l&&(o=!1,a.classList.add("hide"),n.classList.remove("hide"))}),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m,{passive:!0}),setTimeout(m,1e3)}function v(){document.querySelectorAll('iframe[src*="vimeo"]').forEach(s=>{let e=s.getAttribute("src");e&&e.includes("autoplay=1")&&console.warn("Found iframe with autoplay=1 which may override preferences:",s)})}function w(){v();let r=document.querySelectorAll("[data-vimeo-container]");console.log("Found",r.length,"Vimeo containers"),f().then(()=>{r.forEach((s,e)=>{console.log("Initializing player",e+1);try{g(s)}catch(d){console.error("Error initializing player",e+1,d)}}),console.log("All players initialization attempted")}).catch(s=>{console.error("Failed to load Vimeo API:",s)})}})();
