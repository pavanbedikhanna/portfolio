(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4941:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2093,23)),Promise.resolve().then(r.t.bind(r,7735,23)),Promise.resolve().then(r.bind(r,4296)),Promise.resolve().then(r.t.bind(r,347,23))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),l=n._(r(2115)),a=r(180),s=r(1394),i=r(4116),c=r(4445),u=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}r(2363);let m=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:g,prefetch:y=null,passHref:b,replace:x,shallow:v,scroll:j,onClick:_,onMouseEnter:k,onTouchStart:w,legacyBehavior:M=!1,...P}=e;r=g,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let E=l.default.useContext(s.AppRouterContext),C=!1!==y,N=null===y?c.PrefetchKind.AUTO:c.PrefetchKind.FULL,{href:O,as:S}=l.default.useMemo(()=>{let e=h(a);return{href:e,as:m?h(m):e}},[a,m]),I=l.default.useRef(O),T=l.default.useRef(S);M&&(n=l.default.Children.only(r));let A=M?n&&"object"==typeof n&&n.ref:t,[R,z,U]=(0,i.useIntersection)({rootMargin:"200px"}),F=l.default.useCallback(e=>{(T.current!==S||I.current!==O)&&(U(),T.current=S,I.current=O),R(e)},[S,O,U,R]),L=(0,u.useMergedRef)(F,A);l.default.useEffect(()=>{E&&z&&C&&p(E,O,{kind:N})},[S,O,z,C,E,N]);let B={ref:L,onClick(e){M||"function"!=typeof _||_(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,r,n,o,a,s){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),l.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,E,O,S,x,v,j)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&C&&p(E,O,{kind:N})},onTouchStart:function(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&C&&p(E,O,{kind:N})}};return(0,f.isAbsoluteUrl)(S)?B.href=S:M&&!b&&("a"!==n.type||"href"in n.props)||(B.href=(0,d.addBasePath)(S)),M?l.default.cloneElement(n,B):(0,o.jsx)("a",{...P,...B,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(2115),o=r(8571),l="function"==typeof IntersectionObserver,a=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!l,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},s.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,u,d.current]),[p,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=l(e,n),o.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,l=e.protocol||"",a=e.pathname||"",s=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let u=e.search||i&&"?"+i||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||o.test(l))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),""+l+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return l},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return l},isResSent:function(){return c},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},4296:(e,t,r)=>{"use strict";r.d(t,{Header:()=>s});var n=r(5155),o=r(8173),l=r.n(o),a=r(2115);function s(){let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=()=>{let e=new Date,r=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),o=String(e.getSeconds()).padStart(2,"0");t("".concat(r,":").concat(n,":").concat(o))},r=setInterval(e,1e3);return e(),()=>clearInterval(r)},[]),(0,n.jsx)("header",{className:"sticky top-0 z-10 bg-[#242423]",children:(0,n.jsxs)("nav",{className:"flex justify-between px-6 py-4",children:[(0,n.jsx)("div",{className:"font-medium text-sm text-[#0feeb7]",children:(0,n.jsx)(l(),{href:"/",children:"Pavan"})}),(0,n.jsxs)("div",{className:"flex items-center gap-4 border border-white rounded-full mx-auto",children:[(0,n.jsxs)(l(),{href:"/",className:"flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200",children:[(0,n.jsx)("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Home"]}),(0,n.jsxs)(l(),{href:"/experience",className:"flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200",children:[(0,n.jsx)("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Experience"]}),(0,n.jsxs)(l(),{href:"/projects",className:"flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200",children:[(0,n.jsxs)("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,n.jsx)("path",{d:"M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"}),(0,n.jsx)("path",{d:"M8 5h8m-8 4h8m-8 4h4"})]}),"Projects"]}),(0,n.jsxs)(l(),{href:"/skills",className:"flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",width:"16",height:"16",viewBox:"0 0 256 256",xmlSpace:"preserve",children:[(0,n.jsx)("defs",{}),(0,n.jsxs)("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1},transform:"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)",children:[(0,n.jsx)("circle",{cx:"38.859",cy:"33.749",r:"10.739",style:{stroke:"none",strokeWidth:1,fill:"rgb(255,255,255)"}}),(0,n.jsx)("path",{d:"M 85.632 53.562 c -4.843 -11.952 -7.671 -21.152 -8.897 -28.954 c -0.008 -0.047 -0.019 -0.093 -0.032 -0.139 c -0.546 -1.774 -1.542 -3.393 -2.882 -4.681 l -10.241 -9.84 C 56.744 3.274 47.721 -0.254 38.146 0.014 C 19.934 0.527 5.037 15.178 4.232 33.37 C 3.868 41.57 6.396 49.66 11.35 56.148 c 1.084 1.421 1.657 3.051 1.657 4.715 v 23.585 c 0 3.062 2.491 5.552 5.552 5.552 h 33.099 c 3.062 0 5.552 -2.49 5.552 -5.552 V 81.54 h 11.867 c 4.341 0 7.873 -3.532 7.873 -7.873 V 57.806 h 5.637 c 1.03 0 1.974 -0.476 2.586 -1.305 C 85.786 55.672 85.964 54.631 85.632 53.562 z M 61.875 36.511 c 0 1.994 -1.616 3.611 -3.611 3.611 h -0.002 c -1.353 0 -2.588 0.758 -3.206 1.961 c -0.269 0.523 -0.563 1.033 -0.883 1.53 c -0.731 1.135 -0.767 2.582 -0.092 3.752 l 0.001 0.001 c 0.997 1.727 0.405 3.935 -1.322 4.932 l -4.783 2.761 c -1.727 0.997 -3.935 0.405 -4.932 -1.322 l -0.001 -0.001 c -0.675 -1.169 -1.946 -1.862 -3.295 -1.796 c -0.59 0.029 -1.18 0.028 -1.767 0 c -1.351 -0.066 -2.625 0.625 -3.301 1.796 l -0.001 0.002 c -0.997 1.727 -3.205 2.319 -4.932 1.322 l -4.783 -2.761 c -1.727 -0.997 -2.319 -3.205 -1.322 -4.932 c 0.686 -1.189 0.618 -2.65 -0.123 -3.806 c -0.148 -0.23 -0.291 -0.465 -0.429 -0.705 c -0.138 -0.24 -0.27 -0.481 -0.396 -0.724 c -0.631 -1.219 -1.862 -2.009 -3.235 -2.009 v 0 c -1.994 0 -3.611 -1.616 -3.611 -3.611 v -5.522 c 0 -1.994 1.616 -3.611 3.611 -3.611 h 0.002 c 1.353 0 2.588 -0.758 3.206 -1.961 c 0.269 -0.523 0.563 -1.033 0.883 -1.53 c 0.731 -1.135 0.767 -2.582 0.092 -3.752 l -0.001 -0.001 c -0.997 -1.727 -0.405 -3.935 1.322 -4.932 l 4.783 -2.761 c 1.727 -0.997 3.935 -0.405 4.932 1.322 l 0.001 0.001 c 0.675 1.169 1.946 1.862 3.295 1.796 c 0.59 -0.029 1.18 -0.028 1.767 0 c 1.351 0.066 2.625 -0.625 3.301 -1.796 l 0.001 -0.002 c 0.997 -1.727 3.205 -2.319 4.932 -1.322 l 4.783 2.761 c 1.727 0.997 2.319 3.205 1.322 4.932 v 0 c -0.686 1.189 -0.618 2.65 0.123 3.806 c 0.148 0.23 0.291 0.465 0.429 0.705 c 0.138 0.24 0.27 0.481 0.396 0.724 c 0.631 1.219 1.862 2.009 3.235 2.009 c 1.994 0 3.611 1.617 3.611 3.611 L 61.875 36.511 z",style:{stroke:"none",strokeWidth:1,fill:"rgb(255,255,255)"}})]})]}),"Skills"]}),(0,n.jsxs)(l(),{href:"/education",className:"flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:bg-[#10ae7a] transition-colors duration-200",children:[(0,n.jsxs)("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,n.jsx)("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),(0,n.jsx)("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]}),"Education"]})]}),(0,n.jsx)("div",{className:"font-medium text-sm text-[#0feeb7]",children:e})]})})}},347:()=>{},2093:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4c16f2",variable:"__variable_4c16f2"}},7735:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_6f203a",variable:"__variable_6f203a"}}},e=>{var t=t=>e(e.s=t);e.O(0,[360,441,517,358],()=>t(4941)),_N_E=e.O()}]);