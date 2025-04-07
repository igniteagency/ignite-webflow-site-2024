"use strict";(()=>{var b="scriptsLoaded";var E="is-loader-shown";var f="home-loader_component",T="home-loader_number-sub-wrap",L="home-loader_number",O="home-loader_number-wrapper",w="home-loader_center-bolt",P="home-loader_center-bolt-wrap",A="home-loader_center-bolt-path",_="bolt-clone-group";window.addEventListener(b,()=>{new g().init()});var g=class{constructor(){this.duplicates=[];this.loaderTimeline=null;this.loaderElement=document.querySelector(`.${f}`),this.originalSvg=document.querySelector(`.${w}`),this.boltContainer=document.querySelector(`.${P}`),this.originalGroup=null,this.originalPath=null}init(){sessionStorage.getItem(E)==="true"&&this.loaderElement||this.setupLoaderAnimation()}setupLoaderAnimation(){this.loaderTimeline=gsap.timeline({defaults:{duration:2.5,ease:"power4.inOut"}}),this.setupBoltClones(),this.setupNumberAnimation(),this.setupBoltAnimation(),this.setupFinalTransition(),this.loaderTimeline.play(),sessionStorage.setItem(E,"true"),console.debug("Loader animation initialized and started")}setupBoltClones(){if(!this.originalSvg||!this.boltContainer||(this.originalGroup=this.originalSvg.querySelector("g"),!this.originalGroup))return;this.originalPath=this.originalSvg.querySelector(`.${A}`);let i=window.innerWidth,o=window.innerHeight,s=this.originalSvg.getBoundingClientRect(),c=s.width,p=s.height,u=Math.sqrt(i*i+o*o)/Math.max(c,p)*33,m=25;for(let r=1;r<=m;r++){let n=this.originalGroup.cloneNode(!0);n.classList.add(_),n.id=`${_}-${r}`,this.originalSvg.appendChild(n),this.duplicates.push(n)}let d=[this.originalGroup,...this.duplicates];gsap.set(this.originalSvg,{transformOrigin:"center center"}),gsap.set(d,{scale:r=>u+r*.4,rotation:90,transformOrigin:"center center",svgOrigin:"center center"}),this.originalPath&&gsap.set(this.originalPath,{fill:"none",stroke:"black"})}setupNumberAnimation(){if(!this.loaderTimeline)return;let i=gsap.timeline(),o=document.querySelector(`.${L}`);if(o){let s={val:0};i.to(s,{val:100,duration:2,onUpdate:()=>{o.textContent=Math.round(s.val).toString()}}).to(`.${T}`,{scale:2,duration:2},"<").to(`.${O}`,{right:"3rem",duration:2},"<").to(`.${T} > *`,{yPercent:200,duration:.8,ease:"power2.inOut"},"+=0.1"),this.loaderTimeline.add(i)}}setupBoltAnimation(){if(!this.loaderTimeline||!this.originalGroup||this.duplicates.length===0)return;let i=[this.originalGroup,...this.duplicates],o=gsap.timeline();o.to(i,{scale:1,rotation:0,duration:1.2,ease:"power4.inOut",transformOrigin:"center center",svgOrigin:"center center",stagger:{amount:.3,from:"start",ease:"power2.in"}}),o.to(`.${_}`,{opacity:1,duration:.15});let s=[this.originalPath];this.duplicates.forEach(t=>{let e=t.querySelector(`.${A}`);e&&s.push(e)});let c=document.querySelector(".cursor_background"),p=c?getComputedStyle(c).backgroundColor:"#ff0000";o.to(i,{scale:1.2,duration:.4},"-=0.2"),o.to(s,{fill:p,stroke:p,duration:.4},"<");let l=this.duplicates.slice(0,4),u=this.duplicates.slice(4,8);this.duplicates.length>8&&o.to(this.duplicates.slice(8),{opacity:0,duration:.2},">"),o.to(l,{yPercent:t=>-63*(t+1),xPercent:t=>-79*(t+1),duration:.8,ease:"power4.out",stagger:{amount:.1,from:"end"}},">"),o.to(u,{yPercent:t=>63*(t+1),xPercent:t=>79*(t+1),duration:.8,ease:"power4.out",stagger:{amount:.1,from:"start"}},"<");let m=[this.originalPath];[...l,...u].forEach(t=>{let e=t.querySelector(`.${A}`);e&&m.push(e)});let d=gsap.timeline(),r=window.innerWidth,a=window.innerHeight>r?r*1.5:r/2;m.forEach(t=>{if(t){let e=this.createPathExpandAnimation(t,a,1);e&&d.add(e,0)}}),o.add(d,">"),this.loaderTimeline.add(o,"-=1")}createPathExpandAnimation(i,o=10,s=1.2){let c=i.getAttribute("d");if(!c)return null;let p=c.match(/[a-zA-Z][^a-zA-Z]*/g)||[],l=[];p.forEach(r=>{let n=r.charAt(0),a=n===n.toUpperCase(),t=r.substring(1).trim().split(/[\s,]+/).map(parseFloat);switch(n.toUpperCase()){case"M":case"L":for(let e=0;e<t.length;e+=2)l.push({command:n,x:t[e],y:t[e+1],isAbsolute:a});break;case"H":t.forEach(e=>{l.push({command:n,x:e,y:0,isAbsolute:a})});break;case"V":t.forEach(e=>{l.push({command:n,x:0,y:e,isAbsolute:a})});break;case"Z":l.push({command:n,x:0,y:0,isAbsolute:!0});break}});let u={offset:0},m=()=>{let r=u.offset,n=Math.floor(l.length/2),a="";l.forEach((t,e)=>{let C=(e<n?-1:1)*r,h=t.x,S=t.y;t.command.toUpperCase()!=="Z"&&t.command.toUpperCase()!=="V"&&(h=t.x+C),t.command.toUpperCase()==="M"?a+=`M${h} ${S}`:t.command.toUpperCase()==="L"?a+=`L${h} ${S}`:t.command.toUpperCase()==="H"?a+=`H${h}`:t.command.toUpperCase()==="V"?a+=`V${S}`:t.command.toUpperCase()==="Z"&&(a+="Z")}),i.setAttribute("d",a)},d=gsap.timeline();return d.to(u,{offset:o,duration:s,ease:"power4.inOut",onUpdate:m}),d}setupFinalTransition(){this.loaderTimeline&&this.loaderTimeline.to(`.${f}`,{duration:.5,ease:"power2.inOut",yPercent:-100,onComplete:()=>{let i=document.querySelector(`.${f}`);i&&(i.style.display="none")}},"-=0.2")}getTimeline(){return this.loaderTimeline}},B=g;})();
