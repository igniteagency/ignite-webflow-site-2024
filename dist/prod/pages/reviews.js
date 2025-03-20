"use strict";(()=>{function C(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function y(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function g(i,n,e){return n&&y(i.prototype,n),e&&y(i,e),i}function w(i){return+i.replace(/px/,"")}function F(i){var n=window.devicePixelRatio,e=getComputedStyle(i),t=w(e.getPropertyValue("width")),a=w(e.getPropertyValue("height"));i.setAttribute("width",(t*n).toString()),i.setAttribute("height",(a*n).toString())}function d(i,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=Math.random()*(n-i)+i;return Math.floor(t*Math.pow(10,e))/Math.pow(10,e)}function _(i){return i[d(0,i.length)]}var O=.00125,M=5e-4,D=9e-4,z=1e-5,L=6,x=80,B=.9,q=1.7,k=.2,U=.6,W=.03,H=.07,E=15,N=82,X=150,G=100,J=250,V=40,Y=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function A(i){var n=1920;return Math.log(i)/Math.log(n)}var R=function(){function i(n){C(this,i);var e=n.initialPosition,t=n.direction,a=n.confettiRadius,s=n.confettiColors,o=n.emojis,l=n.emojiSize,r=n.canvasWidth,f=d(B,q,3),c=f*A(r);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=d(k,U,3),this.rotationSpeed=o.length?.01:d(W,H,3)*A(r),this.dragForceCoefficient=d(M,D,6),this.radius={x:a,y:a},this.initialRadius=a,this.rotationAngle=t==="left"?d(0,.2,3):d(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=d(0,2*Math.PI),this.radiusYUpdateDirection="down";var u=t==="left"?d(N,E)*Math.PI/180:d(-E,-N)*Math.PI/180;this.absCos=Math.abs(Math.cos(u)),this.absSin=Math.abs(Math.sin(u));var h=d(-X,0),v={x:e.x+(t==="left"?-h:h)*this.absCos,y:e.y-h*this.absSin};this.currentPosition=Object.assign({},v),this.initialPosition=Object.assign({},v),this.color=o.length?null:_(s),this.emoji=o.length?_(o):null,this.createdAt=new Date().getTime(),this.direction=t}return g(i,[{key:"draw",value:function(e){var t=this.currentPosition,a=this.radius,s=this.color,o=this.emoji,l=this.rotationAngle,r=this.emojiRotationAngle,f=this.emojiSize,c=window.devicePixelRatio;s?(e.fillStyle=s,e.beginPath(),e.ellipse(t.x*c,t.y*c,a.x*c,a.y*c,l,0,2*Math.PI),e.fill()):o&&(e.font="".concat(f,"px serif"),e.save(),e.translate(c*t.x,c*t.y),e.rotate(r),e.textAlign="center",e.fillText(o,0,0),e.restore())}},{key:"updatePosition",value:function(e,t){var a=this.confettiSpeed,s=this.dragForceCoefficient,o=this.finalConfettiSpeedX,l=this.radiusYUpdateDirection,r=this.rotationSpeed,f=this.createdAt,c=this.direction,u=t-f;if(a.x>o&&(this.confettiSpeed.x-=s*e),this.currentPosition.x+=a.x*(c==="left"?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-a.y*this.absSin*u+O*Math.pow(u,2)/2,this.rotationSpeed-=this.emoji?1e-4:z*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}l==="down"?(this.radius.y-=e*r,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*r,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+G}}]),i}();function $(){var i=document.createElement("canvas");return i.style.position="fixed",i.style.width="100%",i.style.height="100%",i.style.top="0",i.style.left="0",i.style.zIndex="1000",i.style.pointerEvents="none",document.body.appendChild(i),i}function Z(i){var n=i.confettiRadius,e=n===void 0?L:n,t=i.confettiNumber,a=t===void 0?i.confettiesNumber||(i.emojis?V:J):t,s=i.confettiColors,o=s===void 0?Y:s,l=i.emojis,r=l===void 0?i.emojies||[]:l,f=i.emojiSize,c=f===void 0?x:f;return i.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),i.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:e,confettiNumber:a,confettiColors:o,emojis:r,emojiSize:c}}var K=function(){function i(n){var e=this;C(this,i),this.canvasContext=n,this.shapes=[],this.promise=new Promise(function(t){return e.resolvePromise=t})}return g(i,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return this.shapes.length?!1:((e=this.resolvePromise)===null||e===void 0||e.call(this),!0)}},{key:"processShapes",value:function(e,t,a){var s=this,o=e.timeDelta,l=e.currentTime;this.shapes=this.shapes.filter(function(r){return r.updatePosition(o,l),r.draw(s.canvasContext),a?r.getIsVisibleOnCanvas(t):!0})}}]),i}(),Q=function(){function i(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};C(this,i),this.activeConfettiBatches=[],this.canvas=n.canvas||$(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return g(i,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,F(this.canvas);var e=new Date().getTime(),t=e-this.lastUpdated,a=this.canvas.offsetHeight,s=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:t,currentTime:e},a,s),s?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(e)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Z(e),a=t.confettiRadius,s=t.confettiNumber,o=t.confettiColors,l=t.emojis,r=t.emojiSize,f=this.canvas.getBoundingClientRect(),c=f.width,u=f.height,h=u*5/7,v={x:0,y:h},T={x:c,y:h},m=new K(this.canvasContext),S=0;S<s/2;S++){var j=new R({initialPosition:v,direction:"right",confettiRadius:a,confettiColors:o,confettiNumber:s,emojis:l,emojiSize:r,canvasWidth:c}),P=new R({initialPosition:T,direction:"left",confettiRadius:a,confettiColors:o,confettiNumber:s,emojis:l,emojiSize:r,canvasWidth:c});m.addShapes(j,P)}return this.activeConfettiBatches.push(m),this.queueAnimationFrameIfNeeded(),m.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),i}(),b=Q;window.triggerReviewsConfetti=()=>{console.log("Global confetti function called, but not yet initialized")};window.stopReviewsConfetti=()=>{console.log("Stop function called, but not yet initialized")};function p(){console.log("Reviews confetti initialization function called");let i=()=>{console.log("Creating new confetti canvas");let t=document.createElement("canvas");return t.id="reviews-confetti-canvas",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",t.style.zIndex="1000",document.body.appendChild(t),t},n=document.querySelector("#reviews-confetti-canvas");console.log("Existing canvas found:",!!n);let e=n||i();e.width=window.innerWidth,e.height=window.innerHeight;try{let t=new b({canvas:e});console.log("JSConfetti instance created successfully"),t.addConfetti({confettiColors:["#ff0000","#00ff00","#0000ff"],confettiNumber:100}),console.log("Initial test confetti triggered");let a=()=>{console.log("Starting continuous confetti");let o=()=>{t.addConfetti({emojis:["\u2728","\u2B50","\u{1F4AB}"],emojiSize:30,confettiNumber:8,confettiRadius:4})},l=()=>{t.addConfetti({emojis:["\u{1F38A}","\u2728"],emojiSize:50,confettiNumber:5,confettiRadius:5,confettiColors:["#FFC700","#C04CFD","#FF69B4"]})},r=()=>{t.addConfetti({emojis:["\u{1F389}","\u{1F525}"],emojiSize:80,confettiNumber:3})};return[setInterval(o,500),setInterval(l,800),setInterval(r,1500)]};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight});let s=[];return s=a(),document.addEventListener("visibilitychange",()=>{if(document.hidden)s.forEach(o=>clearInterval(o)),console.log("Page hidden, confetti paused");else{let o=a();s.length=0,s.push(...o),console.log("Page visible, confetti resumed")}}),window.triggerReviewsConfetti=()=>(console.log("Manual confetti trigger"),t.addConfetti({confettiNumber:300,confettiColors:["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff"]}),"Confetti triggered!"),window.stopReviewsConfetti=()=>(s.forEach(o=>clearInterval(o)),console.log("Confetti stopped"),"Confetti stopped!"),console.log("Confetti global functions initialized"),!0}catch(t){return console.error("Error initializing confetti:",t),!1}}var I=p();console.log("Immediate init result:",I);document.addEventListener("DOMContentLoaded",()=>{console.log("DOM content loaded, initializing confetti"),I||p()});window.addEventListener("load",()=>{console.log("Window loaded, ensuring confetti is initialized"),I||p()});})();
