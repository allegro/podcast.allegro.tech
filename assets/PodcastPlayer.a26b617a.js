import{S as Ie,i as Se,s as Te,e as ke,a as me,b as h,c as P,d,f as y,g as p,h as B,j as K,k as s,l as r,t as ce,m as ue,n as ye,o as Ve,p as fe,q as N,r as _e,u as Ce,v as ze,w as De,x as He,y as Re,z as ge}from"./vendor.c6f11675.js";/* empty css                                                    */function Ae(t,l,e){const a=t.slice();return a[41]=l[e][0],a[42]=l[e][1],a}function Me(t){let l,e,a,u,b,g,k,M;return{c(){l=h("li"),e=h("a"),a=h("img"),M=P(),this.h()},l(f){l=d(f,"LI",{class:!0});var v=y(l);e=d(v,"A",{href:!0});var I=y(e);a=d(I,"IMG",{src:!0,alt:!0,title:!0,class:!0}),I.forEach(p),M=B(v),v.forEach(p),this.h()},h(){K(a.src,u="/img/podcast-player/icons/"+t[41]+".svg")||s(a,"src",u),s(a,"alt",b=t[41]),s(a,"title",g=t[41]),s(a,"class","svelte-wxxhn4"),s(e,"href",k=t[42]),s(l,"class","svelte-wxxhn4")},m(f,v){me(f,l,v),r(l,e),r(e,a),r(l,M)},p(f,v){v[0]&2&&!K(a.src,u="/img/podcast-player/icons/"+f[41]+".svg")&&s(a,"src",u),v[0]&2&&b!==(b=f[41])&&s(a,"alt",b),v[0]&2&&g!==(g=f[41])&&s(a,"title",g),v[0]&2&&k!==(k=f[42])&&s(e,"href",k)},d(f){f&&p(l)}}}function Pe(t){let l,e=t[41]!=="buzzsprout"&&Me(t);return{c(){e&&e.c(),l=ke()},l(a){e&&e.l(a),l=ke()},m(a,u){e&&e.m(a,u),me(a,l,u)},p(a,u){a[41]!=="buzzsprout"?e?e.p(a,u):(e=Me(a),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(a){e&&e.d(a),a&&p(l)}}}function je(t){let l,e,a,u,b,g,k,M,f,v,I,T,A,E,V,ee,W,G,w,X,m,z,J,D,Q,S,Y,H,q=t[16][t[13]]+"",O,te,le,R,x,se,j,ae,i,$,re=!1,oe,ne,o,F=Object.entries(t[1]),C=[];for(let n=0;n<F.length;n+=1)C[n]=Pe(Ae(t,F,n));function ve(){cancelAnimationFrame(oe),i.paused||(oe=Re(ve),re=!0),t[32].call(i)}return{c(){l=h("div"),e=h("input"),a=P(),u=h("div"),b=h("div"),g=h("img"),M=P(),f=h("img"),T=P(),A=h("div"),E=h("h2"),V=h("span"),ee=P(),W=ce(t[2]),G=P(),w=h("div"),X=P(),m=h("div"),z=h("span"),J=P(),D=h("span"),Q=P(),S=h("span"),Y=P(),H=h("span"),O=ce(q),te=ce("x"),le=P(),R=h("span"),x=ce(t[11]),se=P(),j=h("ul");for(let n=0;n<C.length;n+=1)C[n].c();ae=P(),i=h("audio"),this.h()},l(n){l=d(n,"DIV",{class:!0,style:!0});var c=y(l);e=d(c,"INPUT",{type:!0,class:!0}),a=B(c),u=d(c,"DIV",{});var _=y(u);b=d(_,"DIV",{class:!0});var Z=y(b);g=d(Z,"IMG",{src:!0,class:!0,alt:!0}),M=B(Z),f=d(Z,"IMG",{src:!0,class:!0,alt:!0}),Z.forEach(p),_.forEach(p),T=B(c),A=d(c,"DIV",{class:!0});var U=y(A);E=d(U,"H2",{class:!0,title:!0});var ie=y(E);V=d(ie,"SPAN",{class:!0});var Be=y(V);Be.forEach(p),ee=B(ie),W=ue(ie,t[2]),ie.forEach(p),G=B(U),w=d(U,"DIV",{class:!0,id:!0}),y(w).forEach(p),X=B(U),m=d(U,"DIV",{class:!0});var L=y(m);z=d(L,"SPAN",{class:!0});var Ee=y(z);Ee.forEach(p),J=B(L),D=d(L,"SPAN",{class:!0});var Le=y(D);Le.forEach(p),Q=B(L),S=d(L,"SPAN",{class:!0});var Ne=y(S);Ne.forEach(p),Y=B(L),H=d(L,"SPAN",{class:!0});var de=y(H);O=ue(de,q),te=ue(de,"x"),de.forEach(p),le=B(L),R=d(L,"SPAN",{class:!0,id:!0});var we=y(R);x=ue(we,t[11]),we.forEach(p),se=B(L),j=d(L,"UL",{class:!0});var be=y(j);for(let pe=0;pe<C.length;pe+=1)C[pe].l(be);be.forEach(p),L.forEach(p),ae=B(U),i=d(U,"AUDIO",{src:!0,preload:!0}),y(i).forEach(p),U.forEach(p),c.forEach(p),this.h()},h(){s(e,"type","text"),s(e,"class","root-focus svelte-wxxhn4"),K(g.src,k=t[3])||s(g,"src",k),s(g,"class","author svelte-wxxhn4"),s(g,"alt",""),K(f.src,v="/img/podcast-player/podcast.png")||s(f,"src",v),s(f,"class","cover-bg svelte-wxxhn4"),s(f,"alt",""),s(b,"class",I=""+(ye(t[8])+" svelte-wxxhn4")),s(V,"class","icon svelte-wxxhn4"),s(E,"class","podcast-title svelte-wxxhn4"),s(E,"title",t[2]),s(w,"class","progress-bar svelte-wxxhn4"),s(w,"id","track"),s(z,"class","icon svelte-wxxhn4"),s(D,"class","icon svelte-wxxhn4"),s(S,"class","icon svelte-wxxhn4"),s(H,"class","playbackrate-text svelte-wxxhn4"),s(R,"class","progress-display svelte-wxxhn4"),s(R,"id","progress"),s(j,"class","platforms svelte-wxxhn4"),s(m,"class","controls"),K(i.src,$=t[0])||s(i,"src",$),s(i,"preload","metadata"),t[9]===void 0&&Ve(()=>t[33].call(i)),s(A,"class","panel svelte-wxxhn4"),s(l,"class","audioplayer svelte-wxxhn4"),fe(l,"--theme-bg-color",t[4]),fe(l,"--theme-color",t[5])},m(n,c){me(n,l,c),r(l,e),t[27](e),r(l,a),r(l,u),r(u,b),r(b,g),r(b,M),r(b,f),r(l,T),r(l,A),r(A,E),r(E,V),V.innerHTML=t[14],r(E,ee),r(E,W),r(A,G),r(A,w),t[28](w),r(A,X),r(A,m),r(m,z),z.innerHTML=t[17],r(m,J),r(m,D),D.innerHTML=t[18],r(m,Q),r(m,S),S.innerHTML=t[19],r(m,Y),r(m,H),r(H,O),r(H,te),r(m,le),r(m,R),r(R,x),r(m,se),r(m,j);for(let _=0;_<C.length;_+=1)C[_].m(j,null);r(A,ae),r(A,i),t[31](i),isNaN(t[12])||(i.playbackRate=t[12]),ne||(o=[N(window,"keydown",t[25]),N(V,"click",t[21]),N(w,"click",t[20]),N(z,"click",t[29]),N(D,"click",t[30]),N(S,"click",t[24]),N(i,"timeupdate",ve),N(i,"durationchange",t[33]),N(i,"ratechange",t[34]),N(i,"loadeddata",t[23]),N(i,"timeupdate",t[22]),N(l,"click",t[26])],ne=!0)},p(n,c){if(c[0]&8&&!K(g.src,k=n[3])&&s(g,"src",k),c[0]&256&&I!==(I=""+(ye(n[8])+" svelte-wxxhn4"))&&s(b,"class",I),c[0]&16384&&(V.innerHTML=n[14]),c[0]&4&&_e(W,n[2]),c[0]&4&&s(E,"title",n[2]),c[0]&8192&&q!==(q=n[16][n[13]]+"")&&_e(O,q),c[0]&2048&&_e(x,n[11]),c[0]&2){F=Object.entries(n[1]);let _;for(_=0;_<F.length;_+=1){const Z=Ae(n,F,_);C[_]?C[_].p(Z,c):(C[_]=Pe(Z),C[_].c(),C[_].m(j,null))}for(;_<C.length;_+=1)C[_].d(1);C.length=F.length}c[0]&1&&!K(i.src,$=n[0])&&s(i,"src",$),!re&&c[0]&32768&&!isNaN(n[15])&&(i.currentTime=n[15]),re=!1,c[0]&4096&&!isNaN(n[12])&&(i.playbackRate=n[12]),c[0]&16&&fe(l,"--theme-bg-color",n[4]),c[0]&32&&fe(l,"--theme-color",n[5])},i:Ce,o:Ce,d(n){n&&p(l),t[27](null),t[28](null),ze(C,n),t[31](null),ne=!1,De(o)}}}function he(t){const l=parseInt(t/60),e=(parseInt(t%60)+"").padStart(2,"0");return`${l}:${e}`}function Fe(t,l,e){let a,u,b=0,g="player",k,M,f="",v,I=[1,1.25,1.5,1.75,2],T=0;const A=`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width="50">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>`,E=`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width="50">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
  </svg>`,V=`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width="28">
    <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
  </svg>`,ee=`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width="28">
    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
  </svg>`,W=`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 16 16" fill="currentColor" style="transform: scale(0.8)" width="28"><g transform="translate(-148 -412)"><path d="M10.939,3.672a6.517,6.517,0,0,1,0,12.93v1.626a8.145,8.145,0,0,0,0-16.2v.016M4.988,16.45a8.1,8.1,0,0,0,4.327,1.84V16.664a6.486,6.486,0,0,1-3.161-1.329L4.992,16.453m1.161-11.4A6.481,6.481,0,0,1,9.316,3.683V2.057a7.966,7.966,0,0,0-4.328,1.79l1.165,1.2M5.009,6.156,3.844,4.994A8.061,8.061,0,0,0,2.05,9.334H3.671A6.538,6.538,0,0,1,5,6.158m-1.323,4.8H2.06A8.188,8.188,0,0,0,3.855,15.3l1.153-1.165a6.525,6.525,0,0,1-1.326-3.175" transform="translate(145.95 409.975)"/><g transform="translate(138 445)"><path d="M11,7.868h0a1.994,1.994,0,0,1,1.11.336l3.2,2.132.046.033a2,2,0,0,1-.046,3.3L12.11,15.8A2,2,0,0,1,9,14.133V9.87a2,2,0,0,1,2-2Zm3.163,4.109L11,9.868h0v4.265L14.2,12Z" transform="translate(5.803 -37)"/></g></g></svg>
`;let G=A,w=0,{audioSource:X=""}=l,{podcastPlatforms:m=[]}=l,{podcastTitle:z=""}=l,{podcastCover:J=""}=l,{themeBgColor:D="#FF7100"}=l,{themeColor:Q="#000"}=l,S,Y;He(async()=>{const{left:o,width:F}=u.getBoundingClientRect();S=F,Y=o});function H(o){b=(o.clientX-Y)/S,e(15,w=b*k)}function q(){a.paused?(a.play(),e(14,G=E),e(8,g="player playing")):(a.pause(),e(14,G=A),e(8,g="player"))}function O(){e(7,u.style["border-left-width"]=Math.ceil(w/k*S)+"px",u),e(11,f=`${he(w)} / ${he(k)}`),requestAnimationFrame(O)}function te(){e(11,f=`${he(w)} / ${he(k)}`)}function le(){e(13,T++,T),T>I.length-1&&e(13,T=0),e(12,v=I[T])}function R(o){o.keyCode===32&&M===document.activeElement&&q()}function x(o){M.focus()}function se(o){ge[o?"unshift":"push"](()=>{M=o,e(10,M)})}function j(o){ge[o?"unshift":"push"](()=>{u=o,e(7,u)})}const ae=()=>e(15,w-=15),i=()=>e(15,w+=15);function $(o){ge[o?"unshift":"push"](()=>{a=o,e(6,a)})}function re(){w=this.currentTime,e(15,w)}function oe(){k=this.duration,e(9,k)}function ne(){v=this.playbackRate,e(12,v)}return t.$$set=o=>{"audioSource"in o&&e(0,X=o.audioSource),"podcastPlatforms"in o&&e(1,m=o.podcastPlatforms),"podcastTitle"in o&&e(2,z=o.podcastTitle),"podcastCover"in o&&e(3,J=o.podcastCover),"themeBgColor"in o&&e(4,D=o.themeBgColor),"themeColor"in o&&e(5,Q=o.themeColor)},[X,m,z,J,D,Q,a,u,g,k,M,f,v,T,G,w,I,V,ee,W,H,q,O,te,le,R,x,se,j,ae,i,$,re,oe,ne]}class Ge extends Ie{constructor(l){super();Se(this,l,Fe,je,Te,{audioSource:0,podcastPlatforms:1,podcastTitle:2,podcastCover:3,themeBgColor:4,themeColor:5},null,[-1,-1])}}export{Ge as default};