"use strict";(()=>{var ft=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var ut=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var ct=Math.PI/180,Lt=180/Math.PI,X=Math.sin,F=Math.cos,H=Math.abs,I=Math.sqrt;var gt=function(e){return typeof e=="number"};var K=1e5;var R=function(e){return Math.round(e*K)/K||0};function Q(v,e,r,t,i,l,p){for(var u=v.length,c,n,f,a,d;--u>-1;)for(c=v[u],n=c.length,f=0;f<n;f+=2)a=c[f],d=c[f+1],c[f]=a*e+d*t+l,c[f+1]=a*r+d*i+p;return v._dirty=1,v}function pt(v,e,r,t,i,l,p,u,c){if(!(v===u&&e===c)){r=H(r),t=H(t);var n=i%360*ct,f=F(n),a=X(n),d=Math.PI,m=d*2,o=(v-u)/2,h=(e-c)/2,y=f*o+a*h,g=-a*o+f*h,s=y*y,x=g*g,L=s/(r*r)+x/(t*t);L>1&&(r=I(L)*r,t=I(L)*t);var b=r*r,_=t*t,M=(b*_-b*x-_*s)/(b*x+_*s);M<0&&(M=0);var N=(l===p?-1:1)*I(M),A=N*(r*g/t),E=N*-(t*y/r),q=(v+u)/2,P=(e+c)/2,k=q+(f*A-a*E),at=P+(a*A+f*E),O=(y-A)/r,C=(g-E)/t,j=(-y-A)/r,z=(-g-E)/t,Z=O*O+C*C,$=(C<0?-1:1)*Math.acos(O/I(Z)),D=(O*z-C*j<0?-1:1)*Math.acos((O*j+C*z)/I(Z*(j*j+z*z)));isNaN(D)&&(D=d),!p&&D>0?D-=m:p&&D<0&&(D+=m),$%=m,D%=m;var J=Math.ceil(H(D)/(m/4)),w=[],V=D/J,G=4/3*X(V/2)/(1+F(V/2)),ot=f*r,lt=a*r,st=a*-t,ht=f*t,S;for(S=0;S<J;S++)i=$+S*V,y=F(i),g=X(i),O=F(i+=V),C=X(i),w.push(y-G*g,g+G*y,O+G*C,C-G*O,O,C);for(S=0;S<w.length;S+=2)y=w[S],g=w[S+1],w[S]=y*ot+g*st+k,w[S+1]=y*lt+g*ht+at;return w[S-2]=u,w[S-1]=c,w}}function tt(v){var e=(v+"").replace(ut,function(A){var E=+A;return E<1e-4&&E>-1e-4?0:E}).match(ft)||[],r=[],t=0,i=0,l=2/3,p=e.length,u=0,c="ERROR: malformed path: "+v,n,f,a,d,m,o,h,y,g,s,x,L,b,_,M,N=function(E,q,P,k){s=(P-E)/3,x=(k-q)/3,h.push(E+s,q+x,P-s,k-x,P,k)};if(!v||!isNaN(e[0])||isNaN(e[1]))return console.log(c),r;for(n=0;n<p;n++)if(b=m,isNaN(e[n])?(m=e[n].toUpperCase(),o=m!==e[n]):n--,a=+e[n+1],d=+e[n+2],o&&(a+=t,d+=i),n||(y=a,g=d),m==="M")h&&(h.length<8?r.length-=1:u+=h.length),t=y=a,i=g=d,h=[a,d],r.push(h),n+=2,m="L";else if(m==="C")h||(h=[0,0]),o||(t=i=0),h.push(a,d,t+e[n+3]*1,i+e[n+4]*1,t+=e[n+5]*1,i+=e[n+6]*1),n+=6;else if(m==="S")s=t,x=i,(b==="C"||b==="S")&&(s+=t-h[h.length-4],x+=i-h[h.length-3]),o||(t=i=0),h.push(s,x,a,d,t+=e[n+3]*1,i+=e[n+4]*1),n+=4;else if(m==="Q")s=t+(a-t)*l,x=i+(d-i)*l,o||(t=i=0),t+=e[n+3]*1,i+=e[n+4]*1,h.push(s,x,t+(a-t)*l,i+(d-i)*l,t,i),n+=4;else if(m==="T")s=t-h[h.length-4],x=i-h[h.length-3],h.push(t+s,i+x,a+(t+s*1.5-a)*l,d+(i+x*1.5-d)*l,t=a,i=d),n+=2;else if(m==="H")N(t,i,t=a,i),n+=1;else if(m==="V")N(t,i,t,i=a+(o?i-t:0)),n+=1;else if(m==="L"||m==="Z")m==="Z"&&(a=y,d=g,h.closed=!0),(m==="L"||H(t-a)>.5||H(i-d)>.5)&&(N(t,i,a,d),m==="L"&&(n+=2)),t=a,i=d;else if(m==="A"){if(_=e[n+4],M=e[n+5],s=e[n+6],x=e[n+7],f=7,_.length>1&&(_.length<3?(x=s,s=M,f--):(x=M,s=_.substr(2),f-=2),M=_.charAt(1),_=_.charAt(0)),L=pt(t,i,+e[n+1],+e[n+2],+e[n+3],+_,+M,(o?t:0)+s*1,(o?i:0)+x*1),n+=f,L)for(f=0;f<L.length;f++)h.push(L[f]);t=h[h.length-2],i=h[h.length-1]}else console.log(c);return n=h.length,n<6?(r.pop(),n=0):h[0]===h[n-2]&&h[1]===h[n-1]&&(h.closed=!0),r.totalPoints=u+n,r}function et(v){gt(v[0])&&(v=[v]);var e="",r=v.length,t,i,l,p;for(i=0;i<r;i++){for(p=v[i],e+="M"+R(p[0])+","+R(p[1])+" C",t=p.length,l=2;l<t;l++)e+=R(p[l++])+","+R(p[l++])+" "+R(p[l++])+","+R(p[l++])+" "+R(p[l++])+","+R(p[l])+" ";p.closed&&(e+="z")}return e}var T,nt,rt=function(){return T||typeof window!="undefined"&&(T=window.gsap)&&T.registerPlugin&&T},it=function(){T=rt(),T?(T.registerEase("_CE",B.create),nt=1):console.warn("Please gsap.registerPlugin(CustomEase)")},dt=1e20,U=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},vt=1,mt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,xt=/[cLlsSaAhHvVtTqQ]/g,yt=function(e){var r=e.length,t=dt,i;for(i=1;i<r;i+=6)+e[i]<t&&(t=+e[i]);return t},bt=function(e,r,t){!t&&t!==0&&(t=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,l=-t,p=e.length,u=1/(+e[p-2]+i),c=-r||(Math.abs(+e[p-1]-+e[1])<.01*(+e[p-2]-+e[0])?yt(e)+l:+e[p-1]+l),n;for(c?c=1/c:c=-u,n=0;n<p;n+=2)e[n]=(+e[n]+i)*u,e[n+1]=(+e[n+1]+l)*c},_t=function v(e,r,t,i,l,p,u,c,n,f,a){var d=(e+t)/2,m=(r+i)/2,o=(t+l)/2,h=(i+p)/2,y=(l+u)/2,g=(p+c)/2,s=(d+o)/2,x=(m+h)/2,L=(o+y)/2,b=(h+g)/2,_=(s+L)/2,M=(x+b)/2,N=u-e,A=c-r,E=Math.abs((t-u)*A-(i-c)*N),q=Math.abs((l-u)*A-(p-c)*N),P;return f||(f=[{x:e,y:r},{x:u,y:c}],a=1),f.splice(a||f.length-1,0,{x:_,y:M}),(E+q)*(E+q)>n*(N*N+A*A)&&(P=f.length,v(e,r,d,m,s,x,_,M,n,f,a),v(_,M,L,b,y,g,u,c,n,f,a+1+(f.length-P))),f},B=function(){function v(r,t,i){nt||it(),this.id=r,vt&&this.setData(t,i)}var e=v.prototype;return e.setData=function(t,i){i=i||{},t=t||"0,0,1,1";var l=t.match(mt),p=1,u=[],c=[],n=i.precision||1,f=n<=1,a,d,m,o,h,y,g,s,x;if(this.data=t,(xt.test(t)||~t.indexOf("M")&&t.indexOf("C")<0)&&(l=tt(t)[0]),a=l.length,a===4)l.unshift(0,0),l.push(1,1),a=8;else if((a-2)%6)throw"Invalid CustomEase";for((+l[0]!=0||+l[a-2]!=1)&&bt(l,i.height,i.originY),this.segment=l,o=2;o<a;o+=6)d={x:+l[o-2],y:+l[o-1]},m={x:+l[o+4],y:+l[o+5]},u.push(d,m),_t(d.x,d.y,+l[o],+l[o+1],+l[o+2],+l[o+3],m.x,m.y,1/(n*2e5),u,u.length-1);for(a=u.length,o=0;o<a;o++)g=u[o],s=u[o-1]||g,(g.x>s.x||s.y!==g.y&&s.x===g.x||g===s)&&g.x<=1?(s.cx=g.x-s.x,s.cy=g.y-s.y,s.n=g,s.nx=g.x,f&&o>1&&Math.abs(s.cy/s.cx-u[o-2].cy/u[o-2].cx)>2&&(f=0),s.cx<p&&(s.cx?p=s.cx:(s.cx=.001,o===a-1&&(s.x-=.001,p=Math.min(p,.001),f=0)))):(u.splice(o--,1),a--);if(a=1/p+1|0,h=1/a,y=0,g=u[0],f){for(o=0;o<a;o++)x=o*h,g.nx<x&&(g=u[++y]),d=g.y+(x-g.x)/g.cx*g.cy,c[o]={x,cx:h,y:d,cy:0,nx:9},o&&(c[o-1].cy=d-c[o-1].y);c[a-1].cy=u[u.length-1].y-d}else{for(o=0;o<a;o++)g.nx<o*h&&(g=u[++y]),c[o]=g;y<u.length-1&&(c[o-1]=u[u.length-2])}return this.ease=function(L){var b=c[L*a|0]||c[a-1];return b.nx<L&&(b=b.n),b.y+(L-b.x)/b.cx*b.cy},this.ease.custom=this,this.id&&T&&T.registerEase(this.id,this.ease),this},e.getSVGData=function(t){return v.getSVGData(this,t)},v.create=function(t,i,l){return new v(t,i,l).ease},v.register=function(t){T=t,it()},v.get=function(t){return T.parseEase(t)},v.getSVGData=function(t,i){i=i||{};var l=i.width||100,p=i.height||100,u=i.x||0,c=(i.y||0)+p,n=T.utils.toArray(i.path)[0],f,a,d,m,o,h,y,g,s,x;if(i.invert&&(p=-p,c=0),typeof t=="string"&&(t=T.parseEase(t)),t.custom&&(t=t.custom),t instanceof v)f=et(Q([t.segment],l,0,0,-p,u,c));else{for(f=[u,c],y=Math.max(5,(i.precision||1)*200),m=1/y,y+=2,g=5/y,s=U(u+m*l),x=U(c+t(m)*-p),a=(x-c)/(s-u),d=2;d<y;d++)o=U(u+d*m*l),h=U(c+t(d*m)*-p),(Math.abs((h-x)/(o-s)-a)>g||d===y-1)&&(f.push(s,x),a=(h-x)/(o-s)),s=o,x=h;f="M"+f.join(",")}return n&&n.setAttribute("d",f),f},v}();rt()&&T.registerPlugin(B);B.version="3.12.5";var W=class W{constructor(){this.ANIMATION_DURATION=.5;this.ANIMATION_EASE="power4.inOut";this.OVERFLOW_HIDDEN_CLASS="overflow-hidden";this.TEXT_COLOR_ALTERNATE_CLASS="text-color-alternate";this.navbar=document.querySelector(".nav_component"),this.navWrap=document.querySelector(".nav"),this.state=this.navWrap.getAttribute("data-nav")||"closed",this.body=document.body,this.lenis=window.lenis,this.colorTriggers=document.querySelectorAll('[data-el="nav-color-change-trigger"]'),this.menu=this.navWrap.querySelector(".menu"),this.overlay=this.navWrap.querySelector(".overlay"),this.bgPanels=this.navWrap.querySelectorAll(".bg-panel"),this.menuToggles=document.querySelectorAll("[data-menu-toggle]"),this.menuLinks=this.navWrap.querySelectorAll(".menu-link, .menu-extras_list-item > .button_component"),this.fadeTargets=this.navWrap.querySelectorAll("[data-menu-fade]"),this.menuButton=document.querySelector(".menu-button"),this.menuButtonTexts=this.menuButton.querySelectorAll("p"),this.bolt=this.navWrap.querySelectorAll(".menu-bolt"),this.focusableElements=this.navWrap.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'),this.timeline=window.gsap.timeline(),B.create("main","0.65, 0.01, 0.05, 0.99"),window.gsap.defaults({ease:"main",duration:.7}),this.initMenu(),this.initNavHideShow(),this.initColorTriggers()}static getInstance(){return W.instance||(W.instance=new W),W.instance}isNavOpen(){return this.navWrap.getAttribute("data-nav")==="open"}initNavHideShow(){let e=r=>{this.navbar.animate({transform:`translateY(${r}%)`},{duration:this.ANIMATION_DURATION*1e3,easing:"ease-in-out"})};this.lenis.on("scroll",r=>{this.isNavOpen()||(r.direction===-1?e(0):e(-100))})}initColorTriggers(){this.colorTriggers.forEach(e=>{let r=e.firstChild.getAttribute("data-wf--nav-color-trigger-theme-atom--theme");window.ScrollTrigger.create({trigger:e,start:"top top",markers:!0,invalidateOnRefresh:!0,onEnter:()=>{window.IS_DEBUG_MODE&&console.log("onEnter",e,r),r==="light"?this.toggleNavTextClass(!0):this.toggleNavTextClass(!1)},onLeaveBack:()=>{window.IS_DEBUG_MODE&&console.log("onLeaveBack",e,r),r==="light"?this.toggleNavTextClass(!1):this.toggleNavTextClass(!0)}})})}toggleNavTextClass(e){this.navbar.classList.toggle(this.TEXT_COLOR_ALTERNATE_CLASS,e)}initMenu(){this.state!=="open"&&(this.navWrap.setAttribute("aria-hidden","true"),this.focusableElements.forEach(e=>{e.setAttribute("tabindex","-1")})),this.menuToggles.forEach(e=>{e.addEventListener("click",()=>{if(this.state=this.navWrap.getAttribute("data-nav")||"closed",this.state==="open")this.closeNav(),e.focus();else{this.openNav();let r=this.focusableElements[0];r&&r.focus()}})}),document.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.navWrap.getAttribute("data-nav")==="open"){this.closeNav();let r=this.menuToggles[0];r&&r.focus()}})}openNav(){this.navWrap.setAttribute("data-nav","open"),this.body.classList.add(this.OVERFLOW_HIDDEN_CLASS),this.lenis&&this.lenis.stop(),this.navWrap.setAttribute("aria-hidden","false"),this.focusableElements.forEach(e=>{e.setAttribute("tabindex","0")}),this.timeline.clear().set(this.navWrap,{visibility:"visible",opacity:1}).set(this.menu,{xPercent:0},"<").fromTo(this.menuButtonTexts,{yPercent:0},{yPercent:-100,stagger:.2}).fromTo(this.overlay,{autoAlpha:0},{autoAlpha:1},"<").fromTo(this.bgPanels,{xPercent:101},{xPercent:0,stagger:.12,duration:.575},"<").fromTo(this.menuLinks,{yPercent:140,rotate:10},{yPercent:0,rotate:0,stagger:.05},"<+=0.35").fromTo(this.fadeTargets,{autoAlpha:0,yPercent:50},{autoAlpha:1,yPercent:0,stagger:.04},"<+=0.2").fromTo(this.bolt,{scale:0},{scale:1},"<+=0.2")}closeNav(){this.navWrap.setAttribute("data-nav","closed"),this.body.classList.remove(this.OVERFLOW_HIDDEN_CLASS),this.lenis&&this.lenis.start(),this.navWrap.setAttribute("aria-hidden","true"),this.focusableElements.forEach(e=>{e.setAttribute("tabindex","-1")}),this.timeline.clear().to(this.overlay,{autoAlpha:0}).to(this.menu,{xPercent:120},"<").to(this.menuButtonTexts,{yPercent:0},"<").set(this.navWrap,{visibility:"hidden",opacity:0})}};W.instance=null;var Y=W;function At(){Y.getInstance()}})();
/*! Bundled license information:

gsap/utils/paths.js:
  (*!
   * paths 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
