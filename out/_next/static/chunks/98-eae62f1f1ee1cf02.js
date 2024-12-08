"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{67219:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},27759:(e,t,n)=>{n.d(t,{A:()=>o,q:()=>u});var r=n(57082);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),l=n.length;function i(t){let{scope:n,children:u,...i}=t,s=(null==n?void 0:n[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(s.Provider,{value:a},u)}return n=[...n,u],i.displayName=t+"Provider",[i,function(n,i){let s=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(s);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},38511:(e,t,n)=>{let r;n.d(t,{lg:()=>h,qW:()=>f,bL:()=>E});var u=n(17899),o=n(57082),l=n(67219),i=n(44321),s=n(24785),a=n(36181);let d="dismissableLayer.update",c=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:v,onPointerDownOutside:E,onFocusOutside:h,onInteractOutside:b,onDismiss:y,...N}=e,w=(0,o.useContext)(c),[C,O]=(0,o.useState)(null),g=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),T=(0,s.s)(t,e=>O(e)),L=Array.from(w.layers),[D]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),A=L.indexOf(D),M=C?L.indexOf(C):-1,S=w.layersWithOutsidePointerEventsDisabled.size>0,_=M>=A,R=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.c)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",u.current),u.current=o,t.addEventListener("click",u.current,{once:!0})):o()}else t.removeEventListener("click",u.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",u.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!_||n||(null==E||E(e),null==b||b(e),e.defaultPrevented||null==y||y())},g),k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.c)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==h||h(e),null==b||b(e),e.defaultPrevented||null==y||y())},g);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.c)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{M!==w.layers.size-1||(null==v||v(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},g),(0,o.useEffect)(()=>{if(C)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),m(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(g.body.style.pointerEvents=r)}},[C,g,f,w]),(0,o.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),m())},[C,w]),(0,o.useEffect)(()=>{let e=()=>P({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,o.createElement)(i.sG.div,(0,u.A)({},N,{ref:T,style:{pointerEvents:S?_?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.m)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,l.m)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,l.m)(e.onPointerDownCapture,R.onPointerDownCapture)}))}),v=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(c),r=(0,o.useRef)(null),l=(0,s.s)(t,r);return(0,o.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,o.createElement)(i.sG.div,(0,u.A)({},e,{ref:l}))});function m(){let e=new CustomEvent(d);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,i.hO)(u,o):u.dispatchEvent(o)}let E=f,h=v},26026:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(17899),u=n(57082),o=n(94439),l=n(44321);let i=(0,u.forwardRef)((e,t)=>{var n;let{container:i=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return i?o.createPortal((0,u.createElement)(l.sG.div,(0,r.A)({},s,{ref:t})),i):null})},34561:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(57082),u=n(94439),o=n(24785),l=n(66913);let i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=(0,r.useState)(),a=(0,r.useRef)({}),d=(0,r.useRef)(e),c=(0,r.useRef)("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=s(a.current);c.current="mounted"===f?e:"none"},[f]),(0,l.N)(()=>{let t=a.current,n=d.current;if(n!==e){let r=c.current,u=s(t);e?v("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==u?v("ANIMATION_OUT"):v("UNMOUNT"),d.current=e}},[e,v]),(0,l.N)(()=>{if(o){let e=e=>{let t=s(a.current).includes(e.animationName);e.target===o&&t&&(0,u.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===o&&(c.current=s(a.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}v("ANIMATION_END")},[o,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),d=(0,o.s)(i.ref,a.ref);return"function"==typeof n||i.isPresent?(0,r.cloneElement)(a,{ref:d}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},44321:(e,t,n)=>{n.d(t,{hO:()=>s,sG:()=>i});var r=n(17899),u=n(57082),o=n(94439),l=n(72256);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:o,...i}=e,s=o?l.DX:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(s,(0,r.A)({},i,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function s(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},36181:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(57082);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},39657:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(57082),u=n(36181);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,l=(0,r.useRef)(o),i=(0,u.c)(t);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,s=i?e:o,a=(0,u.c)(n);return[s,(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else l(t)},[i,e,l,a])]}},66913:(e,t,n)=>{n.d(t,{N:()=>u});var r=n(57082);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);