"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{348:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},3222:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(1024),o=n(8533),l=o._(n(2265)),u=n(4887),a=r._(n(2912)),i=n(2301),s=n(7709),c=n(9469);n(7873);let d=n(2706),f=r._(n(6515)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,o,l){let u=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===u)return;e["data-loaded-src"]=u;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function v(e){let[t,n]=l.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,l.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:u,width:a,decoding:i,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:g,fill:h,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:E,setShowAltText:P,onLoad:S,onError:w,...C}=e;return l.default.createElement("img",{...C,...v(d),loading:p,width:a,height:u,decoding:i,"data-nimg":h?"fill":"1",className:s,style:c,sizes:o,srcSet:r,src:n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&m(e,f,y,b,E,g))},[n,f,y,b,E,w,g,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,y,b,E,g)},onError:e=>{P(!0),"empty"!==f&&E(!0),w&&w(e)}})});function h(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...v(n.fetchPriority)};return t&&u.preload?((0,u.preload)(n.src,r),null):l.default.createElement(a.default,null,l.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let y=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(d.RouterContext),r=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:a}=e,m=(0,l.useRef)(u);(0,l.useEffect)(()=>{m.current=u},[u]);let v=(0,l.useRef)(a);(0,l.useEffect)(()=>{v.current=a},[a]);let[y,b]=(0,l.useState)(!1),[E,P]=(0,l.useState)(!1),{props:S,meta:w}=(0,i.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:y,showAltText:E});return l.default.createElement(l.default.Fragment,null,l.default.createElement(g,{...S,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:m,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:P,ref:t}),w.priority?l.default.createElement(h,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7555:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return l}});let r=n(1024),o=r._(n(2265)),l=o.default.createContext({})},8551:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2301:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(7873);let r=n(9540),o=n(7709);function l(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,i,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:v,quality:g,width:h,height:y,fill:b=!1,style:E,onLoad:P,onLoadingComplete:S,placeholder:w="empty",blurDataURL:C,fetchPriority:O,layout:_,objectFit:x,objectPosition:I,lazyBoundary:M,lazyRoot:j,...N}=e,{imgConf:k,showAltText:F,blurComplete:T,defaultLoader:A}=t,R=k||o.imageConfigDefault;if("allSizes"in R)a=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);a={...R,allSizes:e,deviceSizes:t}}let L=N.loader||A;delete N.loader,delete N.srcSet;let D="__next_img_default"in L;if(D){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(_){"fill"===_&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!d&&(d=t)}let B="",z=u(h),H=u(y);if("object"==typeof(n=c)&&(l(n)||void 0!==n.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(i=e.blurWidth,s=e.blurHeight,C=C||e.blurDataURL,B=e.src,!b){if(z||H){if(z&&!H){let t=z/e.width;H=Math.round(e.height*t)}else if(!z&&H){let t=H/e.height;z=Math.round(e.width*t)}}else z=e.width,H=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),D&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(O="high");let G=u(g),$=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:I}:{},F?{}:{color:"transparent"},E),W=T||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:z,heightInt:H,blurWidth:i,blurHeight:s,blurDataURL:C||"",objectFit:$.objectFit})+'")':'url("'+w+'")',K=W?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},q=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:l,sizes:u,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:i,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,u),c=i.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:i.map((e,r)=>a({config:t,src:n,quality:l,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:l,width:i[c]})}}({config:a,src:c,unoptimized:f,width:z,quality:G,sizes:d,loader:L}),V={...N,loading:U?"lazy":m,fetchPriority:O,width:z,height:H,decoding:"async",className:v,style:{...$,...K},sizes:q.sizes,srcSet:q.srcSet,src:q.src},Y={unoptimized:f,priority:p,placeholder:w,fill:b};return{props:V,meta:Y}}},2912:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(1024),o=n(8533),l=o._(n(2265)),u=r._(n(2378)),a=n(7555),i=n(1330),s=n(8551);function c(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7873);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,u=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){u=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,l.useContext)(a.AmpStateContext),r=(0,l.useContext)(i.HeadManagerContext);return l.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9540:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:l,objectFit:u}=e,a=r?40*r:t,i=o?40*o:n,s=a&&i?"viewBox='0 0 "+a+" "+i+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},9469:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return u}});let r=n(1024),o=r._(n(2265)),l=n(7709),u=o.default.createContext(l.imageConfigDefault)},7709:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6515:function(e,t){function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},2378:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(8533),o=r._(n(2265)),l=o.useLayoutEffect,u=o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return l(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7873:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,l={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},7437:function(e,t,n){e.exports=n(622)},2194:function(e,t,n){n.d(t,{J:function(){return eM}});var r,o,l,u,a,i,s,c,d,f,p,m,v,g,h=n(2265);function y(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}function b(...e){return e.filter(Boolean).join(" ")}var E=((r=E||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),P=((o=P||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function S({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let a=C(t,e);if(l)return w(a,n,r,u);let i=null!=o?o:0;if(2&i){let{static:e=!1,...t}=a;if(e)return w(t,n,r,u)}if(1&i){let{unmount:e=!0,...t}=a;return y(e?0:1,{0:()=>null,1:()=>w({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return w(a,n,r,u)}function w(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...a}=x(e,["unmount","static"]),i=void 0!==e.ref?{[u]:e.ref}:{},s="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===h.Fragment&&Object.keys(_(a)).length>0){if(!(0,h.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=s.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>b(null==e?void 0:e.className(...t),a.className):b(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,h.cloneElement)(s,Object.assign({},C(s.props,_(x(a,["ref"]))),c,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,i.ref),n))}return(0,h.createElement)(o,Object.assign({},x(a,["ref"]),o!==h.Fragment&&i,o!==h.Fragment&&c),s)}function C(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function O(e){var t;return Object.assign((0,h.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function _(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function x(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var I=Object.defineProperty,M=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t,n)=>(M(e,"symbol"!=typeof t?t+"":t,n),n);let N=new class{constructor(){j(this,"current",this.detect()),j(this,"handoffState","pending"),j(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},k=(e,t)=>{N.isServer?(0,h.useEffect)(e,t):(0,h.useLayoutEffect)(e,t)};function F(e){let t=(0,h.useRef)(e);return k(()=>{t.current=e},[e]),t}let T=function(e){let t=F(e);return h.useCallback((...e)=>t.current(...e),[t])},A=Symbol();function R(e,t=!0){return Object.assign(e,{[A]:t})}function L(...e){let t=(0,h.useRef)(e);(0,h.useEffect)(()=>{t.current=e},[e]);let n=T(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[A]))?void 0:n}function D(){let[e,t]=(0,h.useState)(N.isHandoffComplete);return e&&!1===N.isHandoffComplete&&t(!1),(0,h.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,h.useEffect)(()=>N.handoff(),[]),e}let B=null!=(g=h.useId)?g:function(){let e=D(),[t,n]=h.useState(e?()=>N.nextId():null);return k(()=>{null===t&&n(N.nextId())},[t]),null!=t?""+t:void 0};var z=((l=z||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l);function H(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function U(e){return N.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let G=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var $=((u=$||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),W=((a=W||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),K=((i=K||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function q(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(G)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var V=((s=V||{})[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s);function Y(e,t=0){var n;return e!==(null==(n=U(e))?void 0:n.body)&&y(t,{0:()=>e.matches(G),1(){let t=e;for(;null!==t;){if(t.matches(G))return!0;t=t.parentElement}return!1}})}var J=((c=J||{})[c.Keyboard=0]="Keyboard",c[c.Mouse=1]="Mouse",c);function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,u,a;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:q(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==i.activeElement);return 6&t&&null!=(a=null==(u=null==(l=v)?void 0:l.matches)?void 0:u.call(l,"textarea,input"))&&a&&v.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let Z=(0,h.createContext)(null);Z.displayName="OpenClosedContext";var Q=((d=Q||{})[d.Open=1]="Open",d[d.Closed=2]="Closed",d[d.Closing=4]="Closing",d[d.Opening=8]="Opening",d);function ee(){return(0,h.useContext)(Z)}function et({value:e,children:t}){return h.createElement(Z.Provider,{value:e},t)}function en(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function er(e,t,n){let r=F(t);(0,h.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function eo(e,t,n){let r=F(t);(0,h.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}function el(...e){return(0,h.useMemo)(()=>U(...e),[...e])}var eu=((f=eu||{})[f.None=1]="None",f[f.Focusable=2]="Focusable",f[f.Hidden=4]="Hidden",f);let ea=O(function(e,t){let{features:n=1,...r}=e;return S({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var ei=((p=ei||{})[p.Forwards=0]="Forwards",p[p.Backwards=1]="Backwards",p);function es(){let e=(0,h.useRef)(0);return eo("keydown",t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)},!0),e}var ec=n(4887);let ed=(0,h.createContext)(!1),ef=h.Fragment,ep=h.Fragment,em=(0,h.createContext)(null),ev=(0,h.createContext)(null);Object.assign(O(function(e,t){let n,r,o=(0,h.useRef)(null),l=L(R(e=>{o.current=e}),t),u=el(o),a=function(e){let t=(0,h.useContext)(ed),n=(0,h.useContext)(em),r=el(e),[o,l]=(0,h.useState)(()=>{if(!t&&null!==n||N.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,h.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,h.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(o),[i]=(0,h.useState)(()=>{var e;return N.isServer?null:null!=(e=null==u?void 0:u.createElement("div"))?e:null}),s=(0,h.useContext)(ev),c=D();return k(()=>{!a||!i||a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i))},[a,i]),k(()=>{if(i&&s)return s.register(i)},[s,i]),n=T(()=>{var e;a&&i&&(i instanceof Node&&a.contains(i)&&a.removeChild(i),a.childNodes.length<=0&&(null==(e=a.parentElement)||e.removeChild(a)))}),r=(0,h.useRef)(!1),(0,h.useEffect)(()=>(r.current=!1,()=>{var e;r.current=!0,e=()=>{r.current&&n()},"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}),[n]),c&&a&&i?(0,ec.createPortal)(S({ourProps:{ref:l},theirProps:e,defaultTag:ef,name:"Portal"}),i):null}),{Group:O(function(e,t){let{target:n,...r}=e,o={ref:L(t)};return h.createElement(em.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:ep,name:"Popover.Group"}))})});var eg=((m=eg||{})[m.Open=0]="Open",m[m.Closed=1]="Closed",m),eh=((v=eh||{})[v.TogglePopover=0]="TogglePopover",v[v.ClosePopover=1]="ClosePopover",v[v.SetButton=2]="SetButton",v[v.SetButtonId=3]="SetButtonId",v[v.SetPanel=4]="SetPanel",v[v.SetPanelId=5]="SetPanelId",v);let ey={0:e=>{let t={...e,popoverState:y(e.popoverState,{0:1,1:0})};return 0===t.popoverState&&(t.__demoMode=!1),t},1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},eb=(0,h.createContext)(null);function eE(e){let t=(0,h.useContext)(eb);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eE),t}return t}eb.displayName="PopoverContext";let eP=(0,h.createContext)(null);function eS(e){let t=(0,h.useContext)(eP);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eS),t}return t}eP.displayName="PopoverAPIContext";let ew=(0,h.createContext)(null);function eC(){return(0,h.useContext)(ew)}ew.displayName="PopoverGroupContext";let eO=(0,h.createContext)(null);function e_(e,t){return y(t.type,ey,e,t)}eO.displayName="PopoverPanelContext";let ex=E.RenderStrategy|E.Static,eI=E.RenderStrategy|E.Static,eM=Object.assign(O(function(e,t){var n,r,o;let l,u,a,i,s,c;let{__demoMode:d=!1,...f}=e,p=(0,h.useRef)(null),m=L(t,R(e=>{p.current=e})),v=(0,h.useRef)([]),g=(0,h.useReducer)(e_,{__demoMode:d,popoverState:d?0:1,buttons:v,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,h.createRef)(),afterPanelSentinel:(0,h.createRef)()}),[{popoverState:b,button:E,buttonId:P,panel:w,panelId:C,beforePanelSentinel:O,afterPanelSentinel:_},x]=g,I=el(null!=(n=p.current)?n:E),M=(0,h.useMemo)(()=>{if(!E||!w)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(E))^Number(null==e?void 0:e.contains(w)))return!0;let e=q(),t=e.indexOf(E),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],l=e[r];return!w.contains(o)&&!w.contains(l)},[E,w]),j=F(P),N=F(C),k=(0,h.useMemo)(()=>({buttonId:j,panelId:N,close:()=>x({type:1})}),[j,N,x]),A=eC(),D=null==A?void 0:A.registerPopover,B=T(()=>{var e;return null!=(e=null==A?void 0:A.isFocusWithinPopoverGroup())?e:(null==I?void 0:I.activeElement)&&((null==E?void 0:E.contains(I.activeElement))||(null==w?void 0:w.contains(I.activeElement)))});(0,h.useEffect)(()=>null==D?void 0:D(k),[D,k]);let[z,H]=(l=(0,h.useContext)(ev),u=(0,h.useRef)([]),a=T(e=>(u.current.push(e),l&&l.register(e),()=>i(e))),i=T(e=>{let t=u.current.indexOf(e);-1!==t&&u.current.splice(t,1),l&&l.unregister(e)}),s=(0,h.useMemo)(()=>({register:a,unregister:i,portals:u}),[a,i,u]),[u,(0,h.useMemo)(()=>function({children:e}){return h.createElement(ev.Provider,{value:s},e)},[s])]),U=function({defaultContainers:e=[],portals:t}={}){let n=(0,h.useRef)(null),r=el(n),o=T(()=>{var o;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(o=null==r?void 0:r.querySelectorAll("html > *, body > *"))?o:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||l.some(t=>e.contains(t))||l.push(e));return l});return{resolveContainers:o,contains:T(e=>o().some(t=>t.contains(e))),mainTreeNodeRef:n,MainTreeNode:(0,h.useMemo)(()=>function(){return h.createElement(ea,{features:eu.Hidden,ref:n})},[n])}}({portals:z,defaultContainers:[E,w]});r=null==I?void 0:I.defaultView,o="focus",c=F(e=>{var t,n,r,o;e.target!==window&&e.target instanceof HTMLElement&&0===b&&(B()||E&&w&&(U.contains(e.target)||null!=(n=null==(t=O.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=_.current)?void 0:r.contains)&&o.call(r,e.target)||x({type:1})))}),(0,h.useEffect)(()=>{function e(e){c.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),function(e,t,n=!0){let r=(0,h.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return Y(l,V.Loose)||-1===l.tabIndex||n.preventDefault(),t(n,l)}}(0,h.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,h.useRef)(null);er("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),er("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eo("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(U.resolveContainers,(e,t)=>{x({type:1}),Y(t,V.Loose)||(e.preventDefault(),null==E||E.focus())},0===b);let G=T(e=>{x({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:E:E;null==t||t.focus()}),$=(0,h.useMemo)(()=>({close:G,isPortalled:M}),[G,M]),W=(0,h.useMemo)(()=>({open:0===b,close:G}),[b,G]);return h.createElement(eO.Provider,{value:null},h.createElement(eb.Provider,{value:g},h.createElement(eP.Provider,{value:$},h.createElement(et,{value:y(b,{0:Q.Open,1:Q.Closed})},h.createElement(H,null,S({ourProps:{ref:m},theirProps:f,slot:W,defaultTag:"div",name:"Popover"}),h.createElement(U.MainTreeNode,null))))))}),{Button:O(function(e,t){let n=B(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[l,u]=eE("Popover.Button"),{isPortalled:a}=eS("Popover.Button"),i=(0,h.useRef)(null),s=`headlessui-focus-sentinel-${B()}`,c=eC(),d=null==c?void 0:c.closeOthers,f=null!==(0,h.useContext)(eO);(0,h.useEffect)(()=>{if(!f)return u({type:3,buttonId:r}),()=>{u({type:3,buttonId:null})}},[f,r,u]);let[p]=(0,h.useState)(()=>Symbol()),m=L(i,t,f?null:e=>{if(e)l.buttons.current.push(p);else{let e=l.buttons.current.indexOf(p);-1!==e&&l.buttons.current.splice(e,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&u({type:2,button:e})}),v=L(i,t),g=el(i),b=T(e=>{var t,n,r;if(f){if(1===l.popoverState)return;switch(e.key){case z.Space:case z.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),u({type:1}),null==(r=l.button)||r.focus()}}else switch(e.key){case z.Space:case z.Enter:e.preventDefault(),e.stopPropagation(),1===l.popoverState&&(null==d||d(l.buttonId)),u({type:0});break;case z.Escape:if(0!==l.popoverState)return null==d?void 0:d(l.buttonId);if(!i.current||null!=g&&g.activeElement&&!i.current.contains(g.activeElement))return;e.preventDefault(),e.stopPropagation(),u({type:1})}}),E=T(e=>{f||e.key===z.Space&&e.preventDefault()}),P=T(t=>{var n,r;H(t.currentTarget)||e.disabled||(f?(u({type:1}),null==(n=l.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===l.popoverState&&(null==d||d(l.buttonId)),u({type:0}),null==(r=l.button)||r.focus()))}),w=T(e=>{e.preventDefault(),e.stopPropagation()}),C=0===l.popoverState,O=(0,h.useMemo)(()=>({open:C}),[C]),_=function(e,t){let[n,r]=(0,h.useState)(()=>en(e));return k(()=>{r(en(e))},[e.type,e.as]),k(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,i),x=f?{ref:v,type:_,onKeyDown:b,onClick:P}:{ref:m,id:l.buttonId,type:_,"aria-expanded":e.disabled?void 0:0===l.popoverState,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:b,onKeyUp:E,onClick:P,onMouseDown:w},I=es(),M=T(()=>{let e=l.panel;e&&y(I.current,{[ei.Forwards]:()=>X(e,$.First),[ei.Backwards]:()=>X(e,$.Last)})===W.Error&&X(q().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),y(I.current,{[ei.Forwards]:$.Next,[ei.Backwards]:$.Previous}),{relativeTo:l.button})});return h.createElement(h.Fragment,null,S({ourProps:x,theirProps:o,slot:O,defaultTag:"button",name:"Popover.Button"}),C&&!f&&a&&h.createElement(ea,{id:s,features:eu.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M}))}),Overlay:O(function(e,t){let n=B(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:l},u]=eE("Popover.Overlay"),a=L(t),i=ee(),s=null!==i?(i&Q.Open)===Q.Open:0===l;return S({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:T(e=>{if(H(e.currentTarget))return e.preventDefault();u({type:1})})},theirProps:o,slot:(0,h.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",features:ex,visible:s,name:"Popover.Overlay"})}),Panel:O(function(e,t){let n=B(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...l}=e,[u,a]=eE("Popover.Panel"),{close:i,isPortalled:s}=eS("Popover.Panel"),c=`headlessui-focus-sentinel-before-${B()}`,d=`headlessui-focus-sentinel-after-${B()}`,f=(0,h.useRef)(null),p=L(f,t,e=>{a({type:4,panel:e})}),m=el(f);k(()=>(a({type:5,panelId:r}),()=>{a({type:5,panelId:null})}),[r,a]);let v=ee(),g=null!==v?(v&Q.Open)===Q.Open:0===u.popoverState,b=T(e=>{var t;if(e.key===z.Escape){if(0!==u.popoverState||!f.current||null!=m&&m.activeElement&&!f.current.contains(m.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1}),null==(t=u.button)||t.focus()}});(0,h.useEffect)(()=>{var t;e.static||1===u.popoverState&&(null==(t=e.unmount)||t)&&a({type:4,panel:null})},[u.popoverState,e.unmount,e.static,a]),(0,h.useEffect)(()=>{if(u.__demoMode||!o||0!==u.popoverState||!f.current)return;let e=null==m?void 0:m.activeElement;f.current.contains(e)||X(f.current,$.First)},[u.__demoMode,o,f,u.popoverState]);let E=(0,h.useMemo)(()=>({open:0===u.popoverState,close:i}),[u,i]),P={ref:p,id:r,onKeyDown:b,onBlur:o&&0===u.popoverState?e=>{var t,n,r,o,l;let i=e.relatedTarget;i&&f.current&&(null!=(t=f.current)&&t.contains(i)||(a({type:1}),(null!=(r=null==(n=u.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,i)||null!=(l=null==(o=u.afterPanelSentinel.current)?void 0:o.contains)&&l.call(o,i))&&i.focus({preventScroll:!0})))}:void 0,tabIndex:-1},w=es(),C=T(()=>{let e=f.current;e&&y(w.current,{[ei.Forwards]:()=>{var t;X(e,$.First)===W.Error&&(null==(t=u.afterPanelSentinel.current)||t.focus())},[ei.Backwards]:()=>{var e;null==(e=u.button)||e.focus({preventScroll:!0})}})}),O=T(()=>{let e=f.current;e&&y(w.current,{[ei.Forwards]:()=>{var e;if(!u.button)return;let t=q(),n=t.indexOf(u.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=u.panel)&&e.contains(t)){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}X(o,$.First,{sorted:!1})},[ei.Backwards]:()=>{var t;X(e,$.Previous)===W.Error&&(null==(t=u.button)||t.focus())}})});return h.createElement(eO.Provider,{value:r},g&&s&&h.createElement(ea,{id:c,ref:u.beforePanelSentinel,features:eu.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:C}),S({ourProps:P,theirProps:l,slot:E,defaultTag:"div",features:eI,visible:g,name:"Popover.Panel"}),g&&s&&h.createElement(ea,{id:d,ref:u.afterPanelSentinel,features:eu.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}))}),Group:O(function(e,t){let n=(0,h.useRef)(null),r=L(n,t),[o,l]=(0,h.useState)([]),u=T(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),a=T(e=>(l(t=>[...t,e]),()=>u(e))),i=T(()=>{var e;let t=U(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),s=T(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),c=(0,h.useMemo)(()=>({registerPopover:a,unregisterPopover:u,isFocusWithinPopoverGroup:i,closeOthers:s}),[a,u,i,s]),d=(0,h.useMemo)(()=>({}),[]);return h.createElement(ew.Provider,{value:c},S({ourProps:{ref:r},theirProps:e,slot:d,defaultTag:"div",name:"Popover.Group"}))})})}}]);