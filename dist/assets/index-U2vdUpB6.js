var Z=Object.defineProperty;var ee=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>(ee(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function D(){}function K(e){return e()}function B(){return Object.create(null)}function S(e){e.forEach(K)}function R(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function O(e){return e??""}function x(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function re(e){return document.createTextNode(e)}function oe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}let b;function v(e){b=e}function ie(){if(!b)throw new Error("Function called outside component initialization");return b}function ae(e){ie().$$.on_mount.push(e)}const _=[],F=[];let y=[];const M=[],le=Promise.resolve();let N=!1;function ue(){N||(N=!0,le.then(H))}function L(e){y.push(e)}const A=new Set;let m=0;function H(){if(m!==0)return;const e=b;do{try{for(;m<_.length;){const t=_[m];m++,v(t),fe(t.$$)}}catch(t){throw _.length=0,m=0,t}for(v(null),_.length=0,m=0;F.length;)F.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];A.has(n)||(A.add(n),n())}y.length=0}while(_.length);for(;M.length;)M.pop()();N=!1,A.clear(),v(e)}function fe(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function de(e){const t=[],n=[];y.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),y=t}const k=new Set;let g;function he(){g={r:0,c:[],p:g}}function pe(){g.r||S(g.c),g=g.p}function w(e,t){e&&e.i&&(k.delete(e),e.i(t))}function C(e,t,n,r){if(e&&e.o){if(k.has(e))return;k.add(e),g.c.push(()=>{k.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function T(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ge(e){e&&e.c()}function Q(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),L(()=>{const c=e.$$.on_mount.map(K).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...c):S(c),e.$$.on_mount=[]}),o.forEach(L)}function W(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(_.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,o,c,s=null,l=[-1]){const i=b;v(e);const a=e.$$={fragment:null,ctx:[],props:c,update:D,not_equal:o,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:B(),dirty:l,skip_bound:!1,root:t.target||i.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(u,f,...h)=>{const j=h.length?h[0]:f;return a.ctx&&o(a.ctx[u],a.ctx[u]=j)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](j),d&&me(e,u)),f}):[],a.update(),d=!0,S(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=se(t.target);a.fragment&&a.fragment.l(u),u.forEach(P)}else a.fragment&&a.fragment.c();t.intro&&w(e.$$.fragment),Q(e,t.target,t.anchor),H()}v(i)}class Y{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){W(this,1),this.$destroy=D}$on(t,n){if(!R(n))return D;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);function ye(e){let t,n,r,o,c=q(e[0].date)+"",s,l,i,a,d,u;return{c(){t=$("button"),n=$("label"),r=$("div"),o=$("span"),s=re(c),p(r,"class","flex flex-col"),p(n,"class",O(`
    text-center justify-center
    pointer-events-none fixed font-bold inset-0 grid place-content-center opacity-0
    drop-shadow-lg text-[4rem]
    group-hover:opacity-50
    md:text-[8rem]
    lg:text-[14rem]`)+" svelte-w6pe5n"),p(n,"for",l=`button-${e[0].date}`),p(t,"id",i=`button-${e[0].date}`),p(t,"class",a=O(`
      group
      ${e[0].streakAlive?`checked checked-${e[0].color}`:"bg-transparent "}
      w-full aspect-square
      p-0 m-0
      focus:outline-none
    `)+" svelte-w6pe5n")},m(f,h){G(f,t,h),x(t,n),x(n,r),x(r,o),x(o,s),d||(u=oe(t,"click",e[1]),d=!0)},p(f,[h]){h&1&&c!==(c=q(f[0].date)+"")&&ce(s,c),h&1&&l!==(l=`button-${f[0].date}`)&&p(n,"for",l),h&1&&i!==(i=`button-${f[0].date}`)&&p(t,"id",i),h&1&&a!==(a=O(`
      group
      ${f[0].streakAlive?`checked checked-${f[0].color}`:"bg-transparent "}
      w-full aspect-square
      p-0 m-0
      focus:outline-none
    `)+" svelte-w6pe5n")&&p(t,"class",a)},i:D,o:D,d(f){f&&P(t),d=!1,u()}}}function q(e){return new Date(e).toLocaleDateString("sv-SE",{year:"numeric",month:"short",day:"numeric"}).toLocaleUpperCase()}function $e(e,t,n){let{day:r}=t,{saveDay:o}=t;function c(){n(0,r.streakAlive=!r.streakAlive,r),n(0,r.color=r.color??Math.floor(Math.random()*6),r),o(r)}return e.$$set=s=>{"day"in s&&n(0,r=s.day),"saveDay"in s&&n(2,o=s.saveDay)},[r,c,o]}class ve extends Y{constructor(t){super(),X(this,t,$e,ye,V,{day:0,saveDay:2})}}const I=e=>e.toISOString().split("T")[0],J=I(new Date),we=e=>{function t(r,o){const c=new Date(r),s=new Date(c);return s.setDate(c.getDate()+o),I(s)}const n=[];return e.forEach((r,o)=>{n.push(r);const c=e[o+1];if(!c)return;const s=new Date(r.date),l=new Date(c.date),a=(Number(l)-Number(s))/(1e3*60*60*24);for(let d=1;d<a;d++){const u=t(I(s),d);n.push({date:u,streakAlive:!1})}}),n};function U(e,t,n){const r=e.slice();return r[2]=t[n],r}function z(e){let t,n;return t=new ve({props:{saveDay:e[1],day:e[2]}}),{c(){ge(t.$$.fragment)},m(r,o){Q(t,r,o),n=!0},p(r,o){const c={};o&1&&(c.day=r[2]),t.$set(c)},i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){C(t.$$.fragment,r),n=!1},d(r){W(t,r)}}}function De(e){let t,n,r=T(e[0]),o=[];for(let s=0;s<r.length;s+=1)o[s]=z(U(e,r,s));const c=s=>C(o[s],1,1,()=>{o[s]=null});return{c(){t=$("div");for(let s=0;s<o.length;s+=1)o[s].c();p(t,"class","grid grid-cols-[repeat(5,1fr)] md:grid-cols-[repeat(15,1fr)]")},m(s,l){G(s,t,l);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null);n=!0},p(s,[l]){if(l&3){r=T(s[0]);let i;for(i=0;i<r.length;i+=1){const a=U(s,r,i);o[i]?(o[i].p(a,l),w(o[i],1)):(o[i]=z(a),o[i].c(),w(o[i],1),o[i].m(t,null))}for(he(),i=r.length;i<o.length;i+=1)c(i);pe()}},i(s){if(!n){for(let l=0;l<r.length;l+=1)w(o[l]);n=!0}},o(s){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)C(o[l]);n=!1},d(s){s&&P(t),ne(o,s)}}}function be(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()}function Se(e,t,n){let r=[];ae(()=>{var a;const c=localStorage.getItem("streak")??"[]",l=JSON.parse(c).toSorted(be);((a=l.at(-1))==null?void 0:a.date)!==J&&l.push({date:J,streakAlive:!1});const i=we(l);n(0,r=i)});function o(c){const s=r.filter(l=>l.date!==c.date);localStorage.setItem("streak",JSON.stringify([...s,c]))}return[r,o]}class xe extends Y{constructor(t){super(),X(this,t,Se,De,V,{})}}new xe({target:document.getElementById("app")});
