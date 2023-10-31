"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{532:function(e,t,r){r.r(t),r.d(t,{Code:function(){return j},CodeGroup:function(){return v},Pre:function(){return k}});var n=r(3955),i=r(3101),s=r(9541),a=r(5209),o=r(2021),l=r(4961);let d={js:"JavaScript",ts:"TypeScript",javascript:"JavaScript",typescript:"TypeScript",php:"PHP",python:"Python",ruby:"Ruby",go:"Go"};function c(e){let{title:t,language:r}=e;return t||(r&&r in d?d[r]:"Code")}function u(e){return(0,n.jsxs)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:[(0,n.jsx)("path",{strokeWidth:"0",d:"M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"}),(0,n.jsx)("path",{fill:"none",strokeLinejoin:"round",d:"M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"})]})}function m(e){let{code:t}=e,[r,s]=(0,i.useState)(0),o=r>0;return(0,i.useEffect)(()=>{if(r>0){let e=setTimeout(()=>s(0),1e3);return()=>{clearTimeout(e)}}},[r]),(0,n.jsxs)("button",{type:"button",className:(0,a.Z)("group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",o?"bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20":"bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),onClick:()=>{window.navigator.clipboard.writeText(t).then(()=>{s(e=>e+1)})},children:[(0,n.jsxs)("span",{"aria-hidden":o,className:(0,a.Z)("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300",o&&"-translate-y-1.5 opacity-0"),children:[(0,n.jsx)(u,{className:"h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"}),"Copy"]}),(0,n.jsx)("span",{"aria-hidden":!o,className:(0,a.Z)("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300",!o&&"translate-y-1.5 opacity-0"),children:"Copied!"})]})}function x(e){let{tag:t,label:r}=e;return t||r?(0,n.jsxs)("div",{className:"flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1",children:[t&&(0,n.jsx)("div",{className:"dark flex",children:(0,n.jsx)(l.V,{variant:"small",children:t})}),t&&r&&(0,n.jsx)("span",{className:"h-0.5 w-0.5 rounded-full bg-zinc-500"}),r&&(0,n.jsx)("span",{className:"font-mono text-xs text-zinc-400",children:r})]}):null}function h(e){let{children:t,tag:r,label:s,code:a}=e,o=i.Children.only(t);if((0,i.isValidElement)(o)&&(r=o.props.tag??r,s=o.props.label??s,a=o.props.code??a),!a)throw Error("`CodePanel` requires a `code` prop, or a child with a `code` prop.");return(0,n.jsxs)("div",{className:"group dark:bg-white/2.5",children:[(0,n.jsx)(x,{tag:r,label:s}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("pre",{className:"overflow-x-auto p-4 text-xs text-white",children:t}),(0,n.jsx)(m,{code:a})]})]})}function p(e){let{title:t,children:r,selectedIndex:o}=e,l=i.Children.count(r)>1;return t||l?(0,n.jsxs)("div",{className:"flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",children:[t&&(0,n.jsx)("h3",{className:"mr-auto pt-3 text-xs font-semibold text-white",children:t}),l&&(0,n.jsx)(s.O.List,{className:"-mb-px flex gap-4 text-xs font-medium",children:i.Children.map(r,(e,t)=>(0,n.jsx)(s.O,{className:(0,a.Z)("border-b py-3 transition ui-not-focus-visible:outline-none",t===o?"border-emerald-500 text-emerald-400":"border-transparent text-zinc-400 hover:text-zinc-300"),children:c((0,i.isValidElement)(e)?e.props:{})}))})]}):null}function f(e){let{children:t,...r}=e;return i.Children.count(t)>1?(0,n.jsx)(s.O.Panels,{children:i.Children.map(t,e=>(0,n.jsx)(s.O.Panel,{children:(0,n.jsx)(h,{...r,children:e})}))}):(0,n.jsx)(h,{...r,children:t})}let g=(0,o.Ue)()(e=>({preferredLanguages:[],addPreferredLanguage:t=>e(e=>({preferredLanguages:[...e.preferredLanguages.filter(e=>e!==t),t]}))})),b=(0,i.createContext)(!1);function v(e){let{children:t,title:r,...a}=e,o=function(e){let t,r,{preferredLanguages:n,addPreferredLanguage:s}=g(),[a,o]=(0,i.useState)(0),l=[...e].sort((e,t)=>n.indexOf(t)-n.indexOf(e))[0],d=e.indexOf(l),c=-1===d?a:d;c!==a&&o(c);let{positionRef:u,preventLayoutShift:m}=(t=(0,i.useRef)(null),r=(0,i.useRef)(),(0,i.useEffect)(()=>()=>{void 0!==r.current&&window.cancelAnimationFrame(r.current)},[]),{positionRef:t,preventLayoutShift(e){if(!t.current)return;let n=t.current.getBoundingClientRect().top;e(),r.current=window.requestAnimationFrame(()=>{var e;let r=(null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)??n;window.scrollBy(0,r-n)})}});return{as:"div",ref:u,selectedIndex:a,onChange:t=>{m(()=>s(e[t]))}}}(i.Children.map(t,e=>c((0,i.isValidElement)(e)?e.props:{}))??[]),l=i.Children.count(t)>1,d="my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",u=(0,n.jsx)(p,{title:r,selectedIndex:o.selectedIndex,children:t}),m=(0,n.jsx)(f,{...a,children:t});return(0,n.jsx)(b.Provider,{value:!0,children:l?(0,n.jsx)(s.O.Group,{...o,className:d,children:(0,n.jsxs)("div",{className:"not-prose",children:[u,m]})}):(0,n.jsx)("div",{className:d,children:(0,n.jsxs)("div",{className:"not-prose",children:[u,m]})})})}function j(e){let{children:t,...r}=e;if((0,i.useContext)(b)){if("string"!=typeof t)throw Error("`Code` children must be a string when nested inside a `CodeGroup`.");return(0,n.jsx)("code",{...r,dangerouslySetInnerHTML:{__html:t}})}return(0,n.jsx)("code",{...r,children:t})}function k(e){let{children:t,...r}=e;return(0,i.useContext)(b)?t:(0,n.jsx)(v,{...r,children:t})}},236:function(e,t,r){r.r(t),r.d(t,{Feedback:function(){return c}});var n=r(3955),i=r(3101),s=r(2217);function a(e){return(0,n.jsxs)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:[(0,n.jsx)("circle",{cx:"10",cy:"10",r:"10",strokeWidth:"0"}),(0,n.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"})]})}function o(e){return(0,n.jsx)("button",{type:"submit",className:"px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",...e})}let l=(0,i.forwardRef)(function(e,t){let{onSubmit:r}=e;return(0,n.jsxs)("form",{ref:t,onSubmit:r,className:"absolute inset-0 flex items-center justify-center gap-6 md:justify-start",children:[(0,n.jsx)("p",{className:"text-sm text-zinc-600 dark:text-zinc-400",children:"Was this page helpful?"}),(0,n.jsxs)("div",{className:"group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10",children:[(0,n.jsx)(o,{"data-response":"yes",children:"Yes"}),(0,n.jsx)("div",{className:"bg-zinc-900/10 dark:bg-white/10"}),(0,n.jsx)(o,{"data-response":"no",children:"No"})]})]})}),d=(0,i.forwardRef)(function(e,t){return(0,n.jsx)("div",{ref:t,className:"absolute inset-0 flex justify-center md:justify-start",children:(0,n.jsxs)("div",{className:"flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30",children:[(0,n.jsx)(a,{className:"h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"}),"Thanks for your feedback!"]})})});function c(){let[e,t]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:"relative h-8",children:[(0,n.jsx)(s.u,{show:!e,as:i.Fragment,leaveFrom:"opacity-100",leaveTo:"opacity-0",leave:"pointer-events-none duration-300",children:(0,n.jsx)(l,{onSubmit:function(e){e.preventDefault(),t(!0)}})}),(0,n.jsx)(s.u,{show:e,as:i.Fragment,enterFrom:"opacity-0",enterTo:"opacity-100",enter:"delay-150 duration-300",children:(0,n.jsx)(d,{})})]})}},3054:function(e,t,r){r.r(t),r.d(t,{Heading:function(){return h}});var n=r(3955),i=r(3101),s=r(7091),a=r.n(s),o=r(9340),l=r(1940),d=r(4961),c=r(1312);function u(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",fill:"none",strokeLinecap:"round","aria-hidden":"true",...e,children:(0,n.jsx)("path",{d:"m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"})})}function m(e){let{tag:t,label:r}=e;return t||r?(0,n.jsxs)("div",{className:"flex items-center gap-x-3",children:[t&&(0,n.jsx)(d.V,{children:t}),t&&r&&(0,n.jsx)("span",{className:"h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"}),r&&(0,n.jsx)("span",{className:"font-mono text-xs text-zinc-400",children:r})]}):null}function x(e){let{id:t,inView:r,children:i}=e;return(0,n.jsxs)(a(),{href:`#${t}`,className:"group text-inherit no-underline hover:text-inherit",children:[r&&(0,n.jsx)("div",{className:"absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]",children:(0,n.jsx)("div",{className:"group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600",children:(0,n.jsx)(u,{className:"h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"})})}),i]})}function h(e){let{children:t,tag:r,label:s,level:a,anchor:d=!0,...u}=e,h=`h${a=a??2}`,p=(0,i.useRef)(null),f=(0,l.S)(e=>e.registerHeading),g=(0,o.Y)(p,{margin:`${(0,c.c)(-3.5)}px 0px 0px 0px`,amount:"all"});return(0,i.useEffect)(()=>{2===a&&f({id:u.id,ref:p,offsetRem:r||s?8:6})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{tag:r,label:s}),(0,n.jsx)(h,{ref:p,className:r||s?"mt-2 scroll-mt-32":"scroll-mt-24",...u,children:d?(0,n.jsx)(x,{id:u.id,inView:g,children:t}):t})]})}},1940:function(e,t,r){r.d(t,{S:function(){return u},s:function(){return c}});var n=r(3955),i=r(3101),s=r(6862),a=r(2021),o=r(1312);let l=(0,i.createContext)(null),d=i.useLayoutEffect;function c(e){let t,r,{sections:c,children:u}=e,[m]=(0,i.useState)(()=>(0,s.M)()(e=>({sections:c,visibleSections:[],setVisibleSections:t=>e(e=>e.visibleSections.join()===t.join()?{}:{visibleSections:t}),registerHeading:t=>{let{id:r,ref:n,offsetRem:i}=t;return e(e=>({sections:e.sections.map(e=>e.id===r?{...e,headingRef:n,offsetRem:i}:e)}))}})));return t=(0,a.oR)(m,e=>e.setVisibleSections),r=(0,a.oR)(m,e=>e.sections),(0,i.useEffect)(()=>{function e(){let{innerHeight:e,scrollY:n}=window,i=[];for(let t=0;t<r.length;t++){var s,a;let{id:l,headingRef:d,offsetRem:c=0}=r[t];if(!(null==d?void 0:d.current))continue;let u=(0,o.c)(c),m=d.current.getBoundingClientRect().top+n;0===t&&m-u>n&&i.push("_top");let x=r[t+1],h=((null==x?void 0:null===(a=x.headingRef)||void 0===a?void 0:null===(s=a.current)||void 0===s?void 0:s.getBoundingClientRect().top)??1/0)+n-(0,o.c)((null==x?void 0:x.offsetRem)??0);(m>n&&m<n+e||h>n&&h<n+e||m<=n&&h>=n+e)&&i.push(l)}t(i)}let n=window.requestAnimationFrame(()=>e());return window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.cancelAnimationFrame(n),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[t,r]),d(()=>{m.setState({sections:c})},[m,c]),(0,n.jsx)(l.Provider,{value:m,children:u})}function u(e){let t=(0,i.useContext)(l);return(0,a.oR)(t,e)}},4961:function(e,t,r){r.d(t,{V:function(){return l}});var n=r(3955),i=r(5209);let s={small:"",medium:"rounded-lg px-1.5 ring-1 ring-inset"},a={emerald:{small:"text-emerald-500 dark:text-emerald-400",medium:"ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"},sky:{small:"text-sky-500",medium:"ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"},amber:{small:"text-amber-500",medium:"ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"},rose:{small:"text-red-500 dark:text-rose-500",medium:"ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"},zinc:{small:"text-zinc-400 dark:text-zinc-500",medium:"ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"}},o={GET:"emerald",POST:"sky",PUT:"amber",DELETE:"rose"};function l(e){let{children:t,variant:r="medium",color:l=o[t]??"emerald"}=e;return(0,n.jsx)("span",{className:(0,i.Z)("font-mono text-[0.625rem] font-semibold leading-6",s[r],a[l][r]),children:t})}},1312:function(e,t,r){r.d(t,{c:function(){return n}});function n(e){return e*parseFloat(window.getComputedStyle(document.documentElement).fontSize)}}}]);