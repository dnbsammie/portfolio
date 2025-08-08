(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wd={exports:{}},Gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function RT(){if(Q0)return Gl;Q0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:r,key:c,ref:s!==void 0?s:null,props:l}}return Gl.Fragment=t,Gl.jsx=n,Gl.jsxs=n,Gl}var J0;function wT(){return J0||(J0=1,Wd.exports=RT()),Wd.exports}var bt=wT(),Yd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function CT(){if($0)return se;$0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(I,tt,dt){this.props=I,this.context=tt,this.refs=M,this.updater=dt||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,tt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,tt,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=S.prototype;function C(I,tt,dt){this.props=I,this.context=tt,this.refs=M,this.updater=dt||y}var w=C.prototype=new x;w.constructor=C,E(w,S.prototype),w.isPureReactComponent=!0;var b=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function U(I,tt,dt,gt,K,ft){return dt=ft.ref,{$$typeof:o,type:I,key:tt,ref:dt!==void 0?dt:null,props:ft}}function B(I,tt){return U(I.type,tt,void 0,void 0,void 0,I.props)}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function R(I){var tt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(dt){return tt[dt]})}var z=/\/+/g;function F(I,tt){return typeof I=="object"&&I!==null&&I.key!=null?R(""+I.key):tt.toString(36)}function k(){}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(k,k):(I.status="pending",I.then(function(tt){I.status==="pending"&&(I.status="fulfilled",I.value=tt)},function(tt){I.status==="pending"&&(I.status="rejected",I.reason=tt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function at(I,tt,dt,gt,K){var ft=typeof I;(ft==="undefined"||ft==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(ft){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case o:case t:St=!0;break;case m:return St=I._init,at(St(I._payload),tt,dt,gt,K)}}if(St)return K=K(I),St=gt===""?"."+F(I,0):gt,b(K)?(dt="",St!=null&&(dt=St.replace(z,"$&/")+"/"),at(K,tt,dt,"",function(Qt){return Qt})):K!=null&&(A(K)&&(K=B(K,dt+(K.key==null||I&&I.key===K.key?"":(""+K.key).replace(z,"$&/")+"/")+St)),tt.push(K)),1;St=0;var wt=gt===""?".":gt+":";if(b(I))for(var Et=0;Et<I.length;Et++)gt=I[Et],ft=wt+F(gt,Et),St+=at(gt,tt,dt,ft,K);else if(Et=v(I),typeof Et=="function")for(I=Et.call(I),Et=0;!(gt=I.next()).done;)gt=gt.value,ft=wt+F(gt,Et++),St+=at(gt,tt,dt,ft,K);else if(ft==="object"){if(typeof I.then=="function")return at(Z(I),tt,dt,gt,K);throw tt=String(I),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return St}function H(I,tt,dt){if(I==null)return I;var gt=[],K=0;return at(I,gt,"","",function(ft){return tt.call(dt,ft,K++)}),gt}function q(I){if(I._status===-1){var tt=I._result;tt=tt(),tt.then(function(dt){(I._status===0||I._status===-1)&&(I._status=1,I._result=dt)},function(dt){(I._status===0||I._status===-1)&&(I._status=2,I._result=dt)}),I._status===-1&&(I._status=0,I._result=tt)}if(I._status===1)return I._result.default;throw I._result}var j=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function xt(){}return se.Children={map:H,forEach:function(I,tt,dt){H(I,function(){tt.apply(this,arguments)},dt)},count:function(I){var tt=0;return H(I,function(){tt++}),tt},toArray:function(I){return H(I,function(tt){return tt})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},se.Component=S,se.Fragment=n,se.Profiler=s,se.PureComponent=C,se.StrictMode=r,se.Suspense=d,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},se.cache=function(I){return function(){return I.apply(null,arguments)}},se.cloneElement=function(I,tt,dt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var gt=E({},I.props),K=I.key,ft=void 0;if(tt!=null)for(St in tt.ref!==void 0&&(ft=void 0),tt.key!==void 0&&(K=""+tt.key),tt)!P.call(tt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&tt.ref===void 0||(gt[St]=tt[St]);var St=arguments.length-2;if(St===1)gt.children=dt;else if(1<St){for(var wt=Array(St),Et=0;Et<St;Et++)wt[Et]=arguments[Et+2];gt.children=wt}return U(I.type,K,void 0,void 0,ft,gt)},se.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},se.createElement=function(I,tt,dt){var gt,K={},ft=null;if(tt!=null)for(gt in tt.key!==void 0&&(ft=""+tt.key),tt)P.call(tt,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(K[gt]=tt[gt]);var St=arguments.length-2;if(St===1)K.children=dt;else if(1<St){for(var wt=Array(St),Et=0;Et<St;Et++)wt[Et]=arguments[Et+2];K.children=wt}if(I&&I.defaultProps)for(gt in St=I.defaultProps,St)K[gt]===void 0&&(K[gt]=St[gt]);return U(I,ft,void 0,void 0,null,K)},se.createRef=function(){return{current:null}},se.forwardRef=function(I){return{$$typeof:f,render:I}},se.isValidElement=A,se.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:q}},se.memo=function(I,tt){return{$$typeof:p,type:I,compare:tt===void 0?null:tt}},se.startTransition=function(I){var tt=O.T,dt={};O.T=dt;try{var gt=I(),K=O.S;K!==null&&K(dt,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(xt,j)}catch(ft){j(ft)}finally{O.T=tt}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(I){return O.H.use(I)},se.useActionState=function(I,tt,dt){return O.H.useActionState(I,tt,dt)},se.useCallback=function(I,tt){return O.H.useCallback(I,tt)},se.useContext=function(I){return O.H.useContext(I)},se.useDebugValue=function(){},se.useDeferredValue=function(I,tt){return O.H.useDeferredValue(I,tt)},se.useEffect=function(I,tt,dt){var gt=O.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(I,tt)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(I,tt,dt){return O.H.useImperativeHandle(I,tt,dt)},se.useInsertionEffect=function(I,tt){return O.H.useInsertionEffect(I,tt)},se.useLayoutEffect=function(I,tt){return O.H.useLayoutEffect(I,tt)},se.useMemo=function(I,tt){return O.H.useMemo(I,tt)},se.useOptimistic=function(I,tt){return O.H.useOptimistic(I,tt)},se.useReducer=function(I,tt,dt){return O.H.useReducer(I,tt,dt)},se.useRef=function(I){return O.H.useRef(I)},se.useState=function(I){return O.H.useState(I)},se.useSyncExternalStore=function(I,tt,dt){return O.H.useSyncExternalStore(I,tt,dt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.1.0",se}var ty;function qr(){return ty||(ty=1,Yd.exports=CT()),Yd.exports}var $e=qr(),jd={exports:{}},Vl={},Zd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function DT(){return ey||(ey=1,function(o){function t(H,q){var j=H.length;H.push(q);t:for(;0<j;){var xt=j-1>>>1,I=H[xt];if(0<s(I,q))H[xt]=q,H[j]=I,j=xt;else break t}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var q=H[0],j=H.pop();if(j!==q){H[0]=j;t:for(var xt=0,I=H.length,tt=I>>>1;xt<tt;){var dt=2*(xt+1)-1,gt=H[dt],K=dt+1,ft=H[K];if(0>s(gt,j))K<I&&0>s(ft,gt)?(H[xt]=ft,H[K]=j,xt=K):(H[xt]=gt,H[dt]=j,xt=dt);else if(K<I&&0>s(ft,j))H[xt]=ft,H[K]=j,xt=K;else break t}}return q}function s(H,q){var j=H.sortIndex-q.sortIndex;return j!==0?j:H.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,g=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function b(H){for(var q=n(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=H)r(p),q.sortIndex=q.expirationTime,t(d,q);else break;q=n(p)}}function O(H){if(M=!1,b(H),!E)if(n(d)!==null)E=!0,P||(P=!0,F());else{var q=n(p);q!==null&&at(O,q.startTime-H)}}var P=!1,U=-1,B=5,A=-1;function R(){return S?!0:!(o.unstable_now()-A<B)}function z(){if(S=!1,P){var H=o.unstable_now();A=H;var q=!0;try{t:{E=!1,M&&(M=!1,C(U),U=-1),y=!0;var j=v;try{e:{for(b(H),g=n(d);g!==null&&!(g.expirationTime>H&&R());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var I=xt(g.expirationTime<=H);if(H=o.unstable_now(),typeof I=="function"){g.callback=I,b(H),q=!0;break e}g===n(d)&&r(d),b(H)}else r(d);g=n(d)}if(g!==null)q=!0;else{var tt=n(p);tt!==null&&at(O,tt.startTime-H),q=!1}}break t}finally{g=null,v=j,y=!1}q=void 0}}finally{q?F():P=!1}}}var F;if(typeof w=="function")F=function(){w(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Z=k.port2;k.port1.onmessage=z,F=function(){Z.postMessage(null)}}else F=function(){x(z,0)};function at(H,q){U=x(function(){H(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(H){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var j=v;v=q;try{return H()}finally{v=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var j=v;v=H;try{return q()}finally{v=j}},o.unstable_scheduleCallback=function(H,q,j){var xt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,H){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,H={id:m++,callback:q,priorityLevel:H,startTime:j,expirationTime:I,sortIndex:-1},j>xt?(H.sortIndex=j,t(p,H),n(d)===null&&H===n(p)&&(M?(C(U),U=-1):M=!0,at(O,j-xt))):(H.sortIndex=I,t(d,H),E||y||(E=!0,P||(P=!0,F()))),H},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(H){var q=v;return function(){var j=v;v=q;try{return H.apply(this,arguments)}finally{v=j}}}}(Kd)),Kd}var ny;function UT(){return ny||(ny=1,Zd.exports=DT()),Zd.exports}var Qd={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function LT(){if(iy)return Hn;iy=1;var o=qr();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,p,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:p,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,m)},Hn.flushSync=function(d){var p=c.T,m=r.p;try{if(c.T=null,r.p=2,d)return d()}finally{c.T=p,r.p=m,r.d.f()}},Hn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},Hn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Hn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):m==="script"&&r.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},Hn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin);r.d.L(d,m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},Hn.requestFormReset=function(d){r.d.r(d)},Hn.unstable_batchedUpdates=function(d,p){return d(p)},Hn.useFormState=function(d,p,m){return c.H.useFormState(d,p,m)},Hn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Hn.version="19.1.0",Hn}var ry;function qm(){if(ry)return Qd.exports;ry=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qd.exports=LT(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function OT(){if(ay)return Vl;ay=1;var o=UT(),t=qr(),n=qm();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(r(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,u=i;;){var h=a.return;if(h===null)break;var _=h.alternate;if(_===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===a)return f(h),e;if(_===u)return f(h),i;_=_.sibling}throw Error(r(188))}if(a.return!==u.return)a=h,u=_;else{for(var T=!1,L=h.child;L;){if(L===a){T=!0,a=h,u=_;break}if(L===u){T=!0,u=h,a=_;break}L=L.sibling}if(!T){for(L=_.child;L;){if(L===a){T=!0,a=_,u=h;break}if(L===u){T=!0,u=_,a=h;break}L=L.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==u)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),w=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case w:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case b:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:Z(e.type)||"Memo";case B:i=e._payload,e=e._init;try{return Z(e(i))}catch{}}return null}var at=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},xt=[],I=-1;function tt(e){return{current:e}}function dt(e){0>I||(e.current=xt[I],xt[I]=null,I--)}function gt(e,i){I++,xt[I]=e.current,e.current=i}var K=tt(null),ft=tt(null),St=tt(null),wt=tt(null);function Et(e,i){switch(gt(St,i),gt(ft,e),gt(K,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?b0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=b0(i),e=A0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(K),gt(K,e)}function Qt(){dt(K),dt(ft),dt(St)}function Vt(e){e.memoizedState!==null&&gt(wt,e);var i=K.current,a=A0(i,e.type);i!==a&&(gt(ft,e),gt(K,a))}function Se(e){ft.current===e&&(dt(K),dt(ft)),wt.current===e&&(dt(wt),zl._currentValue=j)}var Le=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,X=o.unstable_cancelCallback,Un=o.unstable_shouldYield,Ee=o.unstable_requestPaint,de=o.unstable_now,kt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Zt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,an=o.unstable_LowPriority,G=o.unstable_IdlePriority,D=o.log,it=o.unstable_setDisableYieldValue,pt=null,_t=null;function ct(e){if(typeof D=="function"&&it(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,Ut=Math.log,Gt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var Mt=256,zt=4194304;function Yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,i,a){var u=e.pendingLanes;if(u===0)return 0;var h=0,_=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var L=u&134217727;return L!==0?(u=L&~_,u!==0?h=Yt(u):(T&=L,T!==0?h=Yt(T):a||(a=L&~e,a!==0&&(h=Yt(a))))):(L=u&~_,L!==0?h=Yt(L):T!==0?h=Yt(T):a||(a=u&~e,a!==0&&(h=Yt(a)))),h===0?0:i!==0&&i!==h&&(i&_)===0&&(_=h&-h,a=i&-i,_>=a||_===32&&(a&4194048)!==0)?i:h}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Lt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Tt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,i,a,u,h,_){var T=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var L=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(a=T&~a;0<a;){var ht=31-Pt(a),vt=1<<ht;L[ht]=0,V[ht]=-1;var rt=nt[ht];if(rt!==null)for(nt[ht]=null,ht=0;ht<rt.length;ht++){var st=rt[ht];st!==null&&(st.lane&=-536870913)}a&=~vt}u!==0&&yt(e,u,0),_!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=_&~(T&~i))}function yt(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Pt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|a&4194090}function Ft(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var u=31-Pt(a),h=1<<u;h&i|e[u]&i&&(e[u]|=i),a&=~h}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function li(e,i){var a=q.p;try{return q.p=e,i()}finally{q.p=a}}var En=Math.random().toString(36).slice(2),gn="__reactFiber$"+En,Ln="__reactProps$"+En,Zn="__reactContainer$"+En,Ha="__reactEvents$"+En,xu="__reactListeners$"+En,Su="__reactHandles$"+En,Ga="__reactResources$"+En,Wr="__reactMarker$"+En;function Yr(e){delete e[gn],delete e[Ln],delete e[Ha],delete e[xu],delete e[Su]}function fr(e){var i=e[gn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Zn]||a[gn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=D0(e);e!==null;){if(a=e[gn])return a;e=D0(e)}return i}e=a,a=e.parentNode}return null}function hr(e){if(e=e[gn]||e[Zn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Va(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function jr(e){var i=e[Ga];return i||(i=e[Ga]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(e){e[Wr]=!0}var Mu=new Set,Eu={};function dr(e,i){N(e,i),N(e+"Capture",i)}function N(e,i){for(Eu[e]=i,e=0;e<i.length;e++)Mu.add(i[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function $(e){return Le.call(lt,e)?!0:Le.call(ot,e)?!1:J.test(e)?lt[e]=!0:(ot[e]=!0,!1)}function At(e,i,a){if($(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Dt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Nt(e,i,a,u){if(u===null)e.removeAttribute(a);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+u)}}var It,ee;function Jt(e){if(It===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+ee}var qt=!1;function le(e,i){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var rt=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){rt=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){rt=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],L=_[1];if(T&&L){var V=T.split(`
`),nt=L.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===nt.length)for(u=V.length-1,h=nt.length-1;1<=u&&0<=h&&V[u]!==nt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==nt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==nt[h]){var ht=`
`+V[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Jt("Activity");default:return""}}function Ye(e){try{var i="";do i+=Ce(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(e){var i=De(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,_=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ze(e){e._valueTracker||(e._valueTracker=Kt(e))}function ve(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==a?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zr=/[\n"\\]/g;function qe(e){return e.replace(Zr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function pr(e,i,a,u,h,_,T,L){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?In(e,T,fe(i)):a!=null?In(e,T,fe(a)):u!=null&&e.removeAttribute("value"),h==null&&_!=null&&(e.defaultChecked=!!_),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+fe(L):e.removeAttribute("name")}function Ge(e,i,a,u,h,_,T,L){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.type=_),i!=null||a!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;a=a!=null?""+fe(a):"",i=i!=null?""+fe(i):a,L||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=L?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function In(e,i,a){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,i,a,u){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&u&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function bn(e,i,a){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+fe(a):""}function On(e,i,a,u){if(i==null){if(u!=null){if(a!=null)throw Error(r(92));if(at(u)){if(1<u.length)throw Error(r(93));u=u[0]}a=u}a==null&&(a=""),i=a}a=fe(i),e.defaultValue=a,u=e.textContent,u===a&&u!==""&&u!==null&&(e.value=u)}function Qi(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var mr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function b_(e,i,a){var u=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,a):typeof a!="number"||a===0||mr.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function A_(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var u in a)!a.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&a[h]!==u&&b_(e,h,u)}else for(var _ in i)i.hasOwnProperty(_)&&b_(e,_,i[_])}function qf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tu(e){return AM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Wf=null;function Yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Os=null;function R_(e){var i=hr(e);if(i&&(e=i.stateNode)){var a=e[Ln]||null;t:switch(e=i.stateNode,i.type){case"input":if(pr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==e&&u.form===e.form){var h=u[Ln]||null;if(!h)throw Error(r(90));pr(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)u=a[i],u.form===e.form&&ve(u)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&vn(e,!!a.multiple,i,!1)}}}var jf=!1;function w_(e,i,a){if(jf)return e(i,a);jf=!0;try{var u=e(i);return u}finally{if(jf=!1,(Ls!==null||Os!==null)&&(uc(),Ls&&(i=Ls,e=Os,Os=Ls=null,R_(i),e)))for(i=0;i<e.length;i++)R_(e[i])}}function Zo(e,i){var a=e.stateNode;if(a===null)return null;var u=a[Ln]||null;if(u===null)return null;a=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=!1;if(_r)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Zf=!1}var Kr=null,Kf=null,bu=null;function C_(){if(bu)return bu;var e,i=Kf,a=i.length,u,h="value"in Kr?Kr.value:Kr.textContent,_=h.length;for(e=0;e<a&&i[e]===h[e];e++);var T=a-e;for(u=1;u<=T&&i[a-u]===h[_-u];u++);return bu=h.slice(e,1<u?1-u:void 0)}function Au(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ru(){return!0}function D_(){return!1}function Kn(e){function i(a,u,h,_,T){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(a=e[L],this[L]=a?a(_):_[L]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ru:D_,this.isPropagationStopped=D_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),i}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Kn(ka),Qo=m({},ka,{view:0,detail:0}),RM=Kn(Qo),Qf,Jf,Jo,Cu=m({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jo&&(Jo&&e.type==="mousemove"?(Qf=e.screenX-Jo.screenX,Jf=e.screenY-Jo.screenY):Jf=Qf=0,Jo=e),Qf)},movementY:function(e){return"movementY"in e?e.movementY:Jf}}),U_=Kn(Cu),wM=m({},Cu,{dataTransfer:0}),CM=Kn(wM),DM=m({},Qo,{relatedTarget:0}),$f=Kn(DM),UM=m({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),LM=Kn(UM),OM=m({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),NM=Kn(OM),PM=m({},ka,{data:0}),L_=Kn(PM),zM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=IM[e])?!!i[e]:!1}function th(){return FM}var HM=m({},Qo,{key:function(e){if(e.key){var i=zM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?BM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GM=Kn(HM),VM=m({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O_=Kn(VM),kM=m({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),XM=Kn(kM),qM=m({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),WM=Kn(qM),YM=m({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jM=Kn(YM),ZM=m({},ka,{newState:0,oldState:0}),KM=Kn(ZM),QM=[9,13,27,32],eh=_r&&"CompositionEvent"in window,$o=null;_r&&"documentMode"in document&&($o=document.documentMode);var JM=_r&&"TextEvent"in window&&!$o,N_=_r&&(!eh||$o&&8<$o&&11>=$o),P_=" ",z_=!1;function B_(e,i){switch(e){case"keyup":return QM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function $M(e,i){switch(e){case"compositionend":return I_(i);case"keypress":return i.which!==32?null:(z_=!0,P_);case"textInput":return e=i.data,e===P_&&z_?null:e;default:return null}}function tE(e,i){if(Ns)return e==="compositionend"||!eh&&B_(e,i)?(e=C_(),bu=Kf=Kr=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return N_&&i.locale!=="ko"?null:i.data;default:return null}}var eE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!eE[e.type]:i==="textarea"}function H_(e,i,a,u){Ls?Os?Os.push(u):Os=[u]:Ls=u,i=mc(i,"onChange"),0<i.length&&(a=new wu("onChange","change",null,a,u),e.push({event:a,listeners:i}))}var tl=null,el=null;function nE(e){x0(e,0)}function Du(e){var i=Va(e);if(ve(i))return e}function G_(e,i){if(e==="change")return i}var V_=!1;if(_r){var nh;if(_r){var ih="oninput"in document;if(!ih){var k_=document.createElement("div");k_.setAttribute("oninput","return;"),ih=typeof k_.oninput=="function"}nh=ih}else nh=!1;V_=nh&&(!document.documentMode||9<document.documentMode)}function X_(){tl&&(tl.detachEvent("onpropertychange",q_),el=tl=null)}function q_(e){if(e.propertyName==="value"&&Du(el)){var i=[];H_(i,el,e,Yf(e)),w_(nE,i)}}function iE(e,i,a){e==="focusin"?(X_(),tl=i,el=a,tl.attachEvent("onpropertychange",q_)):e==="focusout"&&X_()}function rE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Du(el)}function aE(e,i){if(e==="click")return Du(i)}function sE(e,i){if(e==="input"||e==="change")return Du(i)}function oE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:oE;function nl(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!Le.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function W_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y_(e,i){var a=W_(e);e=0;for(var u;a;){if(a.nodeType===3){if(u=e+a.textContent.length,e<=i&&u>=i)return{node:a,offset:i-e};e=u}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=W_(a)}}function j_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?j_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Z_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Tn(e.document)}return i}function rh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var lE=_r&&"documentMode"in document&&11>=document.documentMode,Ps=null,ah=null,il=null,sh=!1;function K_(e,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sh||Ps==null||Ps!==Tn(u)||(u=Ps,"selectionStart"in u&&rh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),il&&nl(il,u)||(il=u,u=mc(ah,"onSelect"),0<u.length&&(i=new wu("onSelect","select",null,i,a),e.push({event:i,listeners:u}),i.target=Ps)))}function Xa(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var zs={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},oh={},Q_={};_r&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function qa(e){if(oh[e])return oh[e];if(!zs[e])return e;var i=zs[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Q_)return oh[e]=i[a];return e}var J_=qa("animationend"),$_=qa("animationiteration"),tg=qa("animationstart"),uE=qa("transitionrun"),cE=qa("transitionstart"),fE=qa("transitioncancel"),eg=qa("transitionend"),ng=new Map,lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lh.push("scrollEnd");function Hi(e,i){ng.set(e,i),dr(i,[e])}var ig=new WeakMap;function Ti(e,i){if(typeof e=="object"&&e!==null){var a=ig.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ye(i)},ig.set(e,i),i)}return{value:e,source:i,stack:Ye(i)}}var bi=[],Bs=0,uh=0;function Uu(){for(var e=Bs,i=uh=Bs=0;i<e;){var a=bi[i];bi[i++]=null;var u=bi[i];bi[i++]=null;var h=bi[i];bi[i++]=null;var _=bi[i];if(bi[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}_!==0&&rg(a,h,_)}}function Lu(e,i,a,u){bi[Bs++]=e,bi[Bs++]=i,bi[Bs++]=a,bi[Bs++]=u,uh|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function ch(e,i,a,u){return Lu(e,i,a,u),Ou(e)}function Is(e,i){return Lu(e,null,null,i),Ou(e)}function rg(e,i,a){e.lanes|=a;var u=e.alternate;u!==null&&(u.lanes|=a);for(var h=!1,_=e.return;_!==null;)_.childLanes|=a,u=_.alternate,u!==null&&(u.childLanes|=a),_.tag===22&&(e=_.stateNode,e===null||e._visibility&1||(h=!0)),e=_,_=_.return;return e.tag===3?(_=e.stateNode,h&&i!==null&&(h=31-Pt(a),e=_.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=a|536870912),_):null}function Ou(e){if(50<wl)throw wl=0,_d=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fs={};function hE(e,i,a,u){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,a,u){return new hE(e,i,a,u)}function fh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gr(e,i){var a=e.alternate;return a===null?(a=ci(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ag(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nu(e,i,a,u,h,_){var T=0;if(u=e,typeof e=="function")fh(e)&&(T=1);else if(typeof e=="string")T=pT(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ci(31,a,i,h),e.elementType=A,e.lanes=_,e;case E:return Wa(a.children,h,_,i);case M:T=8,h|=24;break;case S:return e=ci(12,a,i,h|2),e.elementType=S,e.lanes=_,e;case O:return e=ci(13,a,i,h),e.elementType=O,e.lanes=_,e;case P:return e=ci(19,a,i,h),e.elementType=P,e.lanes=_,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case w:T=10;break t;case C:T=9;break t;case b:T=11;break t;case U:T=14;break t;case B:T=16,u=null;break t}T=29,a=Error(r(130,e===null?"null":typeof e,"")),u=null}return i=ci(T,a,i,h),i.elementType=e,i.type=u,i.lanes=_,i}function Wa(e,i,a,u){return e=ci(7,e,u,i),e.lanes=a,e}function hh(e,i,a){return e=ci(6,e,null,i),e.lanes=a,e}function dh(e,i,a){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Hs=[],Gs=0,Pu=null,zu=0,Ai=[],Ri=0,Ya=null,vr=1,yr="";function ja(e,i){Hs[Gs++]=zu,Hs[Gs++]=Pu,Pu=e,zu=i}function sg(e,i,a){Ai[Ri++]=vr,Ai[Ri++]=yr,Ai[Ri++]=Ya,Ya=e;var u=vr;e=yr;var h=32-Pt(u)-1;u&=~(1<<h),a+=1;var _=32-Pt(i)+h;if(30<_){var T=h-h%5;_=(u&(1<<T)-1).toString(32),u>>=T,h-=T,vr=1<<32-Pt(i)+h|a<<h|u,yr=_+e}else vr=1<<_|a<<h|u,yr=e}function ph(e){e.return!==null&&(ja(e,1),sg(e,1,0))}function mh(e){for(;e===Pu;)Pu=Hs[--Gs],Hs[Gs]=null,zu=Hs[--Gs],Hs[Gs]=null;for(;e===Ya;)Ya=Ai[--Ri],Ai[Ri]=null,yr=Ai[--Ri],Ai[Ri]=null,vr=Ai[--Ri],Ai[Ri]=null}var Wn=null,en=null,we=!1,Za=null,Ji=!1,_h=Error(r(519));function Ka(e){var i=Error(r(418,""));throw sl(Ti(i,e)),_h}function og(e){var i=e.stateNode,a=e.type,u=e.memoizedProps;switch(i[gn]=e,i[Ln]=u,a){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(a=0;a<Dl.length;a++)me(Dl[a],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Ge(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ze(i);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),On(i,u.value,u.defaultValue,u.children),ze(i)}a=u.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||u.suppressHydrationWarning===!0||T0(i.textContent,a)?(u.popover!=null&&(me("beforetoggle",i),me("toggle",i)),u.onScroll!=null&&me("scroll",i),u.onScrollEnd!=null&&me("scrollend",i),u.onClick!=null&&(i.onclick=_c),i=!0):i=!1,i||Ka(e)}function lg(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 5:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:Wn=Wn.return}}function rl(e){if(e!==Wn)return!1;if(!we)return lg(e),we=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ld(e.type,e.memoizedProps)),a=!a),a&&en&&Ka(e),lg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){en=Vi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,ha(e.type)?(e=zd,zd=null,en=e):en=i):en=Wn?Vi(e.stateNode.nextSibling):null;return!0}function al(){en=Wn=null,we=!1}function ug(){var e=Za;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Za=null),e}function sl(e){Za===null?Za=[e]:Za.push(e)}var gh=tt(null),Qa=null,xr=null;function Qr(e,i,a){gt(gh,i._currentValue),i._currentValue=a}function Sr(e){e._currentValue=gh.current,dt(gh)}function vh(e,i,a){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===a)break;e=e.return}}function yh(e,i,a,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var L=_;_=h;for(var V=0;V<i.length;V++)if(L.context===i[V]){_.lanes|=a,L=_.alternate,L!==null&&(L.lanes|=a),vh(_.return,a,e),u||(T=null);break t}_=L.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(r(341));T.lanes|=a,_=T.alternate,_!==null&&(_.lanes|=a),vh(T,a,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function ol(e,i,a,u){e=null;for(var h=i,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var L=h.type;ui(h.pendingProps.value,T.value)||(e!==null?e.push(L):e=[L])}}else if(h===wt.current){if(T=h.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}h=h.return}e!==null&&yh(i,e,a,u),i.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,xr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return cg(Qa,e)}function Iu(e,i){return Qa===null&&Ja(e),cg(e,i)}function cg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},xr===null){if(e===null)throw Error(r(308));xr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xr=xr.next=i;return a}var dE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},pE=o.unstable_scheduleCallback,mE=o.unstable_NormalPriority,yn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xh(){return{controller:new dE,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&pE(mE,function(){e.controller.abort()})}var ul=null,Sh=0,Vs=0,ks=null;function _E(e,i){if(ul===null){var a=ul=[];Sh=0,Vs=Ed(),ks={status:"pending",value:void 0,then:function(u){a.push(u)}}}return Sh++,i.then(fg,fg),i}function fg(){if(--Sh===0&&ul!==null){ks!==null&&(ks.status="fulfilled");var e=ul;ul=null,Vs=0,ks=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function gE(e,i){var a=[],u={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),u}var hg=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&_E(e,i),hg!==null&&hg(e,i)};var $a=tt(null);function Mh(){var e=$a.current;return e!==null?e:We.pooledCache}function Fu(e,i){i===null?gt($a,$a.current):gt($a,i.pool)}function dg(){var e=Mh();return e===null?null:{parent:yn._currentValue,pool:e}}var cl=Error(r(460)),pg=Error(r(474)),Hu=Error(r(542)),Eh={then:function(){}};function mg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gu(){}function _g(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Gu,Gu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vg(e),e;default:if(typeof i.status=="string")i.then(Gu,Gu);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vg(e),e}throw fl=i,cl}}var fl=null;function gg(){if(fl===null)throw Error(r(459));var e=fl;return fl=null,e}function vg(e){if(e===cl||e===Hu)throw Error(r(483))}var Jr=!1;function Th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $r(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ta(e,i,a){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Ou(e),rg(e,null,a),i}return Lu(e,u,i,a),Ou(e)}function hl(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,a|=u,i.lanes=a,Ft(e,a)}}function Ah(e,i){var a=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?h=_=i:_=_.next=i}else h=_=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Rh=!1;function dl(){if(Rh){var e=ks;if(e!==null)throw e}}function pl(e,i,a,u){Rh=!1;var h=e.updateQueue;Jr=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var V=L,nt=V.next;V.next=null,T===null?_=nt:T.next=nt,T=V;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,L=ht.lastBaseUpdate,L!==T&&(L===null?ht.firstBaseUpdate=nt:L.next=nt,ht.lastBaseUpdate=V))}if(_!==null){var vt=h.baseState;T=0,ht=nt=V=null,L=_;do{var rt=L.lane&-536870913,st=rt!==L.lane;if(st?(Me&rt)===rt:(u&rt)===rt){rt!==0&&rt===Vs&&(Rh=!0),ht!==null&&(ht=ht.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var ne=e,$t=L;rt=i;var Fe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){vt=ne.call(Fe,vt,rt);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,rt=typeof ne=="function"?ne.call(Fe,vt,rt):ne,rt==null)break t;vt=m({},vt,rt);break t;case 2:Jr=!0}}rt=L.callback,rt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=h.callbacks,st===null?h.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ht===null?(nt=ht=st,V=vt):ht=ht.next=st,T|=rt;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;st=L,L=st.next,st.next=null,h.lastBaseUpdate=st,h.shared.pending=null}}while(!0);ht===null&&(V=vt),h.baseState=V,h.firstBaseUpdate=nt,h.lastBaseUpdate=ht,_===null&&(h.shared.lanes=0),la|=T,e.lanes=T,e.memoizedState=vt}}function yg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function xg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)yg(a[e],i)}var Xs=tt(null),Vu=tt(0);function Sg(e,i){e=wr,gt(Vu,e),gt(Xs,i),wr=e|i.baseLanes}function wh(){gt(Vu,wr),gt(Xs,Xs.current)}function Ch(){wr=Vu.current,dt(Xs),dt(Vu)}var ea=0,ce=null,Be=null,fn=null,ku=!1,qs=!1,ts=!1,Xu=0,ml=0,Ws=null,vE=0;function sn(){throw Error(r(321))}function Dh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!ui(e[a],i[a]))return!1;return!0}function Uh(e,i,a,u,h,_){return ea=_,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?rv:av,ts=!1,_=a(u,h),ts=!1,qs&&(_=Eg(i,a,u,h)),Mg(e),_}function Mg(e){H.H=Ku;var i=Be!==null&&Be.next!==null;if(ea=0,fn=Be=ce=null,ku=!1,ml=0,Ws=null,i)throw Error(r(300));e===null||An||(e=e.dependencies,e!==null&&Bu(e)&&(An=!0))}function Eg(e,i,a,u){ce=e;var h=0;do{if(qs&&(Ws=null),ml=0,qs=!1,25<=h)throw Error(r(301));if(h+=1,fn=Be=null,e.updateQueue!=null){var _=e.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}H.H=bE,_=i(a,u)}while(qs);return _}function yE(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?_l(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ce.flags|=1024),i}function Lh(){var e=Xu!==0;return Xu=0,e}function Oh(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Nh(e){if(ku){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ku=!1}ea=0,fn=Be=ce=null,qs=!1,ml=Xu=0,Ws=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ce.memoizedState=fn=e:fn=fn.next=e,fn}function hn(){if(Be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=fn===null?ce.memoizedState:fn.next;if(i!==null)fn=i,Be=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},fn===null?ce.memoizedState=fn=e:fn=fn.next=e}return fn}function Ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var i=ml;return ml+=1,Ws===null&&(Ws=[]),e=_g(Ws,e,i),i=ce,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?rv:av),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===w)return Fn(e)}throw Error(r(438,String(e)))}function zh(e){var i=null,a=ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ph(),ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),u=0;u<e;u++)a[u]=R;return i.index++,a}function Mr(e,i){return typeof i=="function"?i(e):i}function Wu(e){var i=hn();return Bh(i,Be,e)}function Bh(e,i,a){var u=e.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=a;var h=e.baseQueue,_=u.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}i.baseQueue=h=_,u.pending=null}if(_=e.baseState,h===null)e.memoizedState=_;else{i=h.next;var L=T=null,V=null,nt=i,ht=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Me&vt)===vt:(ea&vt)===vt){var rt=nt.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===Vs&&(ht=!0);else if((ea&rt)===rt){nt=nt.next,rt===Vs&&(ht=!0);continue}else vt={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(L=V=vt,T=_):V=V.next=vt,ce.lanes|=rt,la|=rt;vt=nt.action,ts&&a(_,vt),_=nt.hasEagerState?nt.eagerState:a(_,vt)}else rt={lane:vt,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(L=V=rt,T=_):V=V.next=rt,ce.lanes|=vt,la|=vt;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?T=_:V.next=L,!ui(_,e.memoizedState)&&(An=!0,ht&&(a=ks,a!==null)))throw a;e.memoizedState=_,e.baseState=T,e.baseQueue=V,u.lastRenderedState=_}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Ih(e){var i=hn(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var u=a.dispatch,h=a.pending,_=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do _=e(_,T.action),T=T.next;while(T!==h);ui(_,i.memoizedState)||(An=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,u]}function Tg(e,i,a){var u=ce,h=hn(),_=we;if(_){if(a===void 0)throw Error(r(407));a=a()}else a=i();var T=!ui((Be||h).memoizedState,a);T&&(h.memoizedState=a,An=!0),h=h.queue;var L=Rg.bind(null,u,h,e);if(gl(2048,8,L,[e]),h.getSnapshot!==i||T||fn!==null&&fn.memoizedState.tag&1){if(u.flags|=2048,Ys(9,Yu(),Ag.bind(null,u,h,a,i),null),We===null)throw Error(r(349));_||(ea&124)!==0||bg(u,i,a)}return a}function bg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ce.updateQueue,i===null?(i=Ph(),ce.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Ag(e,i,a,u){i.value=a,i.getSnapshot=u,wg(i)&&Cg(e)}function Rg(e,i,a){return a(function(){wg(i)&&Cg(e)})}function wg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!ui(e,a)}catch{return!0}}function Cg(e){var i=Is(e,2);i!==null&&mi(i,e,2)}function Fh(e){var i=Qn();if(typeof e=="function"){var a=e;if(e=a(),ts){ct(!0);try{a()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},i}function Dg(e,i,a,u){return e.baseState=a,Bh(e,Be,typeof u=="function"?u:Mr)}function xE(e,i,a,u,h){if(Zu(e))throw Error(r(485));if(e=i.action,e!==null){var _={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};H.T!==null?a(!0):_.isTransition=!1,u(_),a=i.pending,a===null?(_.next=i.pending=_,Ug(i,_)):(_.next=a.next,i.pending=a.next=_)}}function Ug(e,i){var a=i.action,u=i.payload,h=e.state;if(i.isTransition){var _=H.T,T={};H.T=T;try{var L=a(h,u),V=H.S;V!==null&&V(T,L),Lg(e,i,L)}catch(nt){Hh(e,i,nt)}finally{H.T=_}}else try{_=a(h,u),Lg(e,i,_)}catch(nt){Hh(e,i,nt)}}function Lg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){Og(e,i,u)},function(u){return Hh(e,i,u)}):Og(e,i,a)}function Og(e,i,a){i.status="fulfilled",i.value=a,Ng(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Ug(e,a)))}function Hh(e,i,a){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,Ng(i),i=i.next;while(i!==u)}e.action=null}function Ng(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Pg(e,i){return i}function zg(e,i){if(we){var a=We.formState;if(a!==null){t:{var u=ce;if(we){if(en){e:{for(var h=en,_=Ji;h.nodeType!==8;){if(!_){h=null;break e}if(h=Vi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){en=Vi(h.nextSibling),u=h.data==="F!";break t}}Ka(u)}u=!1}u&&(i=a[0])}}return a=Qn(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:i},a.queue=u,a=ev.bind(null,ce,u),u.dispatch=a,u=Fh(!1),_=qh.bind(null,ce,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,a=xE.bind(null,ce,h,_,a),h.dispatch=a,u.memoizedState=e,[i,a,!1]}function Bg(e){var i=hn();return Ig(i,Be,e)}function Ig(e,i,a){if(i=Bh(e,i,Pg)[0],e=Wu(Mr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=_l(i)}catch(T){throw T===cl?Hu:T}else u=i;i=hn();var h=i.queue,_=h.dispatch;return a!==i.memoizedState&&(ce.flags|=2048,Ys(9,Yu(),SE.bind(null,h,a),null)),[u,_,e]}function SE(e,i){e.action=i}function Fg(e){var i=hn(),a=Be;if(a!==null)return Ig(i,a,e);hn(),i=i.memoizedState,a=hn();var u=a.queue.dispatch;return a.memoizedState=e,[i,u,!1]}function Ys(e,i,a,u){return e={tag:e,create:a,deps:u,inst:i,next:null},i=ce.updateQueue,i===null&&(i=Ph(),ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(u=a.next,a.next=e,e.next=u,i.lastEffect=e),e}function Yu(){return{destroy:void 0,resource:void 0}}function Hg(){return hn().memoizedState}function ju(e,i,a,u){var h=Qn();u=u===void 0?null:u,ce.flags|=e,h.memoizedState=Ys(1|i,Yu(),a,u)}function gl(e,i,a,u){var h=hn();u=u===void 0?null:u;var _=h.memoizedState.inst;Be!==null&&u!==null&&Dh(u,Be.memoizedState.deps)?h.memoizedState=Ys(i,_,a,u):(ce.flags|=e,h.memoizedState=Ys(1|i,_,a,u))}function Gg(e,i){ju(8390656,8,e,i)}function Vg(e,i){gl(2048,8,e,i)}function kg(e,i){return gl(4,2,e,i)}function Xg(e,i){return gl(4,4,e,i)}function qg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Wg(e,i,a){a=a!=null?a.concat([e]):null,gl(4,4,qg.bind(null,i,e),a)}function Gh(){}function Yg(e,i){var a=hn();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&Dh(i,u[1])?u[0]:(a.memoizedState=[e,i],e)}function jg(e,i){var a=hn();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&Dh(i,u[1]))return u[0];if(u=e(),ts){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[u,i],u}function Vh(e,i,a){return a===void 0||(ea&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Qv(),ce.lanes|=e,la|=e,a)}function Zg(e,i,a,u){return ui(a,i)?a:Xs.current!==null?(e=Vh(e,a,u),ui(e,i)||(An=!0),e):(ea&42)===0?(An=!0,e.memoizedState=a):(e=Qv(),ce.lanes|=e,la|=e,i)}function Kg(e,i,a,u,h){var _=q.p;q.p=_!==0&&8>_?_:8;var T=H.T,L={};H.T=L,qh(e,!1,i,a);try{var V=h(),nt=H.S;if(nt!==null&&nt(L,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ht=gE(V,u);vl(e,i,ht,pi(e))}else vl(e,i,u,pi(e))}catch(vt){vl(e,i,{then:function(){},status:"rejected",reason:vt},pi())}finally{q.p=_,H.T=T}}function ME(){}function kh(e,i,a,u){if(e.tag!==5)throw Error(r(476));var h=Qg(e).queue;Kg(e,h,i,j,a===null?ME:function(){return Jg(e),a(u)})}function Qg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:j},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Jg(e){var i=Qg(e).next.queue;vl(e,i,{},pi())}function Xh(){return Fn(zl)}function $g(){return hn().memoizedState}function tv(){return hn().memoizedState}function EE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pi();e=$r(a);var u=ta(i,e,a);u!==null&&(mi(u,i,a),hl(u,i,a)),i={cache:xh()},e.payload=i;return}i=i.return}}function TE(e,i,a){var u=pi();a={lane:u,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zu(e)?nv(i,a):(a=ch(e,i,a,u),a!==null&&(mi(a,e,u),iv(a,i,u)))}function ev(e,i,a){var u=pi();vl(e,i,a,u)}function vl(e,i,a,u){var h={lane:u,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))nv(i,h);else{var _=e.alternate;if(e.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,L=_(T,a);if(h.hasEagerState=!0,h.eagerState=L,ui(L,T))return Lu(e,i,h,0),We===null&&Uu(),!1}catch{}finally{}if(a=ch(e,i,h,u),a!==null)return mi(a,e,u),iv(a,i,u),!0}return!1}function qh(e,i,a,u){if(u={lane:2,revertLane:Ed(),action:u,hasEagerState:!1,eagerState:null,next:null},Zu(e)){if(i)throw Error(r(479))}else i=ch(e,a,u,2),i!==null&&mi(i,e,2)}function Zu(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function nv(e,i){qs=ku=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function iv(e,i,a){if((a&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,a|=u,i.lanes=a,Ft(e,a)}}var Ku={readContext:Fn,use:qu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},rv={readContext:Fn,use:qu,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Fn,useEffect:Gg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ju(4194308,4,qg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ju(4194308,4,e,i)},useInsertionEffect:function(e,i){ju(4,2,e,i)},useMemo:function(e,i){var a=Qn();i=i===void 0?null:i;var u=e();if(ts){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[u,i],u},useReducer:function(e,i,a){var u=Qn();if(a!==void 0){var h=a(i);if(ts){ct(!0);try{a(i)}finally{ct(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=TE.bind(null,ce,e),[u.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=Fh(e);var i=e.queue,a=ev.bind(null,ce,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Gh,useDeferredValue:function(e,i){var a=Qn();return Vh(a,e,i)},useTransition:function(){var e=Fh(!1);return e=Kg.bind(null,ce,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var u=ce,h=Qn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),We===null)throw Error(r(349));(Me&124)!==0||bg(u,i,a)}h.memoizedState=a;var _={value:a,getSnapshot:i};return h.queue=_,Gg(Rg.bind(null,u,_,e),[e]),u.flags|=2048,Ys(9,Yu(),Ag.bind(null,u,_,a,i),null),a},useId:function(){var e=Qn(),i=We.identifierPrefix;if(we){var a=yr,u=vr;a=(u&~(1<<32-Pt(u)-1)).toString(32)+a,i="«"+i+"R"+a,a=Xu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=vE++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Xh,useFormState:zg,useActionState:zg,useOptimistic:function(e){var i=Qn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=qh.bind(null,ce,!0,a),a.dispatch=i,[e,i]},useMemoCache:zh,useCacheRefresh:function(){return Qn().memoizedState=EE.bind(null,ce)}},av={readContext:Fn,use:qu,useCallback:Yg,useContext:Fn,useEffect:Vg,useImperativeHandle:Wg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:jg,useReducer:Wu,useRef:Hg,useState:function(){return Wu(Mr)},useDebugValue:Gh,useDeferredValue:function(e,i){var a=hn();return Zg(a,Be.memoizedState,e,i)},useTransition:function(){var e=Wu(Mr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:Xh,useFormState:Bg,useActionState:Bg,useOptimistic:function(e,i){var a=hn();return Dg(a,Be,e,i)},useMemoCache:zh,useCacheRefresh:tv},bE={readContext:Fn,use:qu,useCallback:Yg,useContext:Fn,useEffect:Vg,useImperativeHandle:Wg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:jg,useReducer:Ih,useRef:Hg,useState:function(){return Ih(Mr)},useDebugValue:Gh,useDeferredValue:function(e,i){var a=hn();return Be===null?Vh(a,e,i):Zg(a,Be.memoizedState,e,i)},useTransition:function(){var e=Ih(Mr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:Xh,useFormState:Fg,useActionState:Fg,useOptimistic:function(e,i){var a=hn();return Be!==null?Dg(a,Be,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zh,useCacheRefresh:tv},js=null,yl=0;function Qu(e){var i=yl;return yl+=1,js===null&&(js=[]),_g(js,e,i)}function xl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ju(e,i){throw i.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function sv(e){var i=e._init;return i(e._payload)}function ov(e){function i(Q,W){if(e){var et=Q.deletions;et===null?(Q.deletions=[W],Q.flags|=16):et.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function u(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function h(Q,W){return Q=gr(Q,W),Q.index=0,Q.sibling=null,Q}function _(Q,W,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<W?(Q.flags|=67108866,W):et):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function T(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function L(Q,W,et,mt){return W===null||W.tag!==6?(W=hh(et,Q.mode,mt),W.return=Q,W):(W=h(W,et),W.return=Q,W)}function V(Q,W,et,mt){var Ht=et.type;return Ht===E?ht(Q,W,et.props.children,mt,et.key):W!==null&&(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&sv(Ht)===W.type)?(W=h(W,et.props),xl(W,et),W.return=Q,W):(W=Nu(et.type,et.key,et.props,null,Q.mode,mt),xl(W,et),W.return=Q,W)}function nt(Q,W,et,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=dh(et,Q.mode,mt),W.return=Q,W):(W=h(W,et.children||[]),W.return=Q,W)}function ht(Q,W,et,mt,Ht){return W===null||W.tag!==7?(W=Wa(et,Q.mode,mt,Ht),W.return=Q,W):(W=h(W,et),W.return=Q,W)}function vt(Q,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=hh(""+W,Q.mode,et),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return et=Nu(W.type,W.key,W.props,null,Q.mode,et),xl(et,W),et.return=Q,et;case y:return W=dh(W,Q.mode,et),W.return=Q,W;case B:var mt=W._init;return W=mt(W._payload),vt(Q,W,et)}if(at(W)||F(W))return W=Wa(W,Q.mode,et,null),W.return=Q,W;if(typeof W.then=="function")return vt(Q,Qu(W),et);if(W.$$typeof===w)return vt(Q,Iu(Q,W),et);Ju(Q,W)}return null}function rt(Q,W,et,mt){var Ht=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Ht!==null?null:L(Q,W,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case v:return et.key===Ht?V(Q,W,et,mt):null;case y:return et.key===Ht?nt(Q,W,et,mt):null;case B:return Ht=et._init,et=Ht(et._payload),rt(Q,W,et,mt)}if(at(et)||F(et))return Ht!==null?null:ht(Q,W,et,mt,null);if(typeof et.then=="function")return rt(Q,W,Qu(et),mt);if(et.$$typeof===w)return rt(Q,W,Iu(Q,et),mt);Ju(Q,et)}return null}function st(Q,W,et,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get(et)||null,L(W,Q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case v:return Q=Q.get(mt.key===null?et:mt.key)||null,V(W,Q,mt,Ht);case y:return Q=Q.get(mt.key===null?et:mt.key)||null,nt(W,Q,mt,Ht);case B:var he=mt._init;return mt=he(mt._payload),st(Q,W,et,mt,Ht)}if(at(mt)||F(mt))return Q=Q.get(et)||null,ht(W,Q,mt,Ht,null);if(typeof mt.then=="function")return st(Q,W,et,Qu(mt),Ht);if(mt.$$typeof===w)return st(Q,W,et,Iu(W,mt),Ht);Ju(W,mt)}return null}function ne(Q,W,et,mt){for(var Ht=null,he=null,Wt=W,te=W=0,wn=null;Wt!==null&&te<et.length;te++){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var be=rt(Q,Wt,et[te],mt);if(be===null){Wt===null&&(Wt=wn);break}e&&Wt&&be.alternate===null&&i(Q,Wt),W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be,Wt=wn}if(te===et.length)return a(Q,Wt),we&&ja(Q,te),Ht;if(Wt===null){for(;te<et.length;te++)Wt=vt(Q,et[te],mt),Wt!==null&&(W=_(Wt,W,te),he===null?Ht=Wt:he.sibling=Wt,he=Wt);return we&&ja(Q,te),Ht}for(Wt=u(Wt);te<et.length;te++)wn=st(Wt,Q,te,et[te],mt),wn!==null&&(e&&wn.alternate!==null&&Wt.delete(wn.key===null?te:wn.key),W=_(wn,W,te),he===null?Ht=wn:he.sibling=wn,he=wn);return e&&Wt.forEach(function(ga){return i(Q,ga)}),we&&ja(Q,te),Ht}function $t(Q,W,et,mt){if(et==null)throw Error(r(151));for(var Ht=null,he=null,Wt=W,te=W=0,wn=null,be=et.next();Wt!==null&&!be.done;te++,be=et.next()){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var ga=rt(Q,Wt,be.value,mt);if(ga===null){Wt===null&&(Wt=wn);break}e&&Wt&&ga.alternate===null&&i(Q,Wt),W=_(ga,W,te),he===null?Ht=ga:he.sibling=ga,he=ga,Wt=wn}if(be.done)return a(Q,Wt),we&&ja(Q,te),Ht;if(Wt===null){for(;!be.done;te++,be=et.next())be=vt(Q,be.value,mt),be!==null&&(W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be);return we&&ja(Q,te),Ht}for(Wt=u(Wt);!be.done;te++,be=et.next())be=st(Wt,Q,te,be.value,mt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?te:be.key),W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be);return e&&Wt.forEach(function(AT){return i(Q,AT)}),we&&ja(Q,te),Ht}function Fe(Q,W,et,mt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case v:t:{for(var Ht=et.key;W!==null;){if(W.key===Ht){if(Ht=et.type,Ht===E){if(W.tag===7){a(Q,W.sibling),mt=h(W,et.props.children),mt.return=Q,Q=mt;break t}}else if(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&sv(Ht)===W.type){a(Q,W.sibling),mt=h(W,et.props),xl(mt,et),mt.return=Q,Q=mt;break t}a(Q,W);break}else i(Q,W);W=W.sibling}et.type===E?(mt=Wa(et.props.children,Q.mode,mt,et.key),mt.return=Q,Q=mt):(mt=Nu(et.type,et.key,et.props,null,Q.mode,mt),xl(mt,et),mt.return=Q,Q=mt)}return T(Q);case y:t:{for(Ht=et.key;W!==null;){if(W.key===Ht)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(Q,W.sibling),mt=h(W,et.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,W);break}else i(Q,W);W=W.sibling}mt=dh(et,Q.mode,mt),mt.return=Q,Q=mt}return T(Q);case B:return Ht=et._init,et=Ht(et._payload),Fe(Q,W,et,mt)}if(at(et))return ne(Q,W,et,mt);if(F(et)){if(Ht=F(et),typeof Ht!="function")throw Error(r(150));return et=Ht.call(et),$t(Q,W,et,mt)}if(typeof et.then=="function")return Fe(Q,W,Qu(et),mt);if(et.$$typeof===w)return Fe(Q,W,Iu(Q,et),mt);Ju(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(Q,W.sibling),mt=h(W,et),mt.return=Q,Q=mt):(a(Q,W),mt=hh(et,Q.mode,mt),mt.return=Q,Q=mt),T(Q)):a(Q,W)}return function(Q,W,et,mt){try{yl=0;var Ht=Fe(Q,W,et,mt);return js=null,Ht}catch(Wt){if(Wt===cl||Wt===Hu)throw Wt;var he=ci(29,Wt,null,Q.mode);return he.lanes=mt,he.return=Q,he}finally{}}}var Zs=ov(!0),lv=ov(!1),wi=tt(null),$i=null;function na(e){var i=e.alternate;gt(xn,xn.current&1),gt(wi,e),$i===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&($i=e)}function uv(e){if(e.tag===22){if(gt(xn,xn.current),gt(wi,e),$i===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&($i=e)}}else ia()}function ia(){gt(xn,xn.current),gt(wi,wi.current)}function Er(e){dt(wi),$i===e&&($i=null),dt(xn)}var xn=tt(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Pd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Wh(e,i,a,u){i=e.memoizedState,a=a(u,i),a=a==null?i:m({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yh={enqueueSetState:function(e,i,a){e=e._reactInternals;var u=pi(),h=$r(u);h.payload=i,a!=null&&(h.callback=a),i=ta(e,h,u),i!==null&&(mi(i,e,u),hl(i,e,u))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var u=pi(),h=$r(u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ta(e,h,u),i!==null&&(mi(i,e,u),hl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pi(),u=$r(a);u.tag=2,i!=null&&(u.callback=i),i=ta(e,u,a),i!==null&&(mi(i,e,a),hl(i,e,a))}};function cv(e,i,a,u,h,_,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!nl(a,u)||!nl(h,_):!0}function fv(e,i,a,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==e&&Yh.enqueueReplaceState(i,i.state,null)}function es(e,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(e=e.defaultProps){a===i&&(a=m({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hv(e){tc(e)}function dv(e){console.error(e)}function pv(e){tc(e)}function ec(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function mv(e,i,a){try{var u=e.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jh(e,i,a){return a=$r(a),a.tag=3,a.payload={element:null},a.callback=function(){ec(e,i)},a}function _v(e){return e=$r(e),e.tag=3,e}function gv(e,i,a,u){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var _=u.value;e.payload=function(){return h(_)},e.callback=function(){mv(i,a,u)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){mv(i,a,u),typeof h!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var L=u.stack;this.componentDidCatch(u.value,{componentStack:L!==null?L:""})})}function AE(e,i,a,u,h){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&ol(i,a,h,!0),a=wi.current,a!==null){switch(a.tag){case 13:return $i===null?vd():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=h,u===Eh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),xd(e,u,h)),!1;case 22:return a.flags|=65536,u===Eh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),xd(e,u,h)),!1}throw Error(r(435,a.tag))}return xd(e,u,h),vd(),!1}if(we)return i=wi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==_h&&(e=Error(r(422),{cause:u}),sl(Ti(e,a)))):(u!==_h&&(i=Error(r(423),{cause:u}),sl(Ti(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ti(u,a),h=jh(e.stateNode,u,h),Ah(e,h),nn!==4&&(nn=2)),!1;var _=Error(r(520),{cause:u});if(_=Ti(_,a),Rl===null?Rl=[_]:Rl.push(_),nn!==4&&(nn=2),i===null)return!0;u=Ti(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=jh(a.stateNode,u,e),Ah(a,e),!1;case 1:if(i=a.type,_=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ua===null||!ua.has(_))))return a.flags|=65536,h&=-h,a.lanes|=h,h=_v(h),gv(h,e,a,u),Ah(a,h),!1}a=a.return}while(a!==null);return!1}var vv=Error(r(461)),An=!1;function Nn(e,i,a,u){i.child=e===null?lv(i,null,a,u):Zs(i,e.child,a,u)}function yv(e,i,a,u,h){a=a.render;var _=i.ref;if("ref"in u){var T={};for(var L in u)L!=="ref"&&(T[L]=u[L])}else T=u;return Ja(i),u=Uh(e,i,a,T,_,h),L=Lh(),e!==null&&!An?(Oh(e,i,h),Tr(e,i,h)):(we&&L&&ph(i),i.flags|=1,Nn(e,i,u,h),i.child)}function xv(e,i,a,u,h){if(e===null){var _=a.type;return typeof _=="function"&&!fh(_)&&_.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=_,Sv(e,i,_,u,h)):(e=Nu(a.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(_=e.child,!nd(e,h)){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:nl,a(T,u)&&e.ref===i.ref)return Tr(e,i,h)}return i.flags|=1,e=gr(_,u),e.ref=i.ref,e.return=i,i.child=e}function Sv(e,i,a,u,h){if(e!==null){var _=e.memoizedProps;if(nl(_,u)&&e.ref===i.ref)if(An=!1,i.pendingProps=u=_,nd(e,h))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,Tr(e,i,h)}return Zh(e,i,a,u,h)}function Mv(e,i,a){var u=i.pendingProps,h=u.children,_=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|a:a,e!==null){for(h=i.child=e.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return Ev(e,i,u,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(i,_!==null?_.cachePool:null),_!==null?Sg(i,_):wh(),uv(i);else return i.lanes=i.childLanes=536870912,Ev(e,i,_!==null?_.baseLanes|a:a,a)}else _!==null?(Fu(i,_.cachePool),Sg(i,_),ia(),i.memoizedState=null):(e!==null&&Fu(i,null),wh(),ia());return Nn(e,i,h,a),i.child}function Ev(e,i,a,u){var h=Mh();return h=h===null?null:{parent:yn._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Fu(i,null),wh(),uv(i),e!==null&&ol(e,i,u,!0),null}function nc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Zh(e,i,a,u,h){return Ja(i),a=Uh(e,i,a,u,void 0,h),u=Lh(),e!==null&&!An?(Oh(e,i,h),Tr(e,i,h)):(we&&u&&ph(i),i.flags|=1,Nn(e,i,a,h),i.child)}function Tv(e,i,a,u,h,_){return Ja(i),i.updateQueue=null,a=Eg(i,u,a,h),Mg(e),u=Lh(),e!==null&&!An?(Oh(e,i,_),Tr(e,i,_)):(we&&u&&ph(i),i.flags|=1,Nn(e,i,a,_),i.child)}function bv(e,i,a,u,h){if(Ja(i),i.stateNode===null){var _=Fs,T=a.contextType;typeof T=="object"&&T!==null&&(_=Fn(T)),_=new a(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Yh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},Th(i),T=a.contextType,_.context=typeof T=="object"&&T!==null?Fn(T):Fs,_.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(Wh(i,a,T,u),_.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Yh.enqueueReplaceState(_,_.state,null),pl(i,u,_,h),dl(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){_=i.stateNode;var L=i.memoizedProps,V=es(a,L);_.props=V;var nt=_.context,ht=a.contextType;T=Fs,typeof ht=="object"&&ht!==null&&(T=Fn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof _.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,ht||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(L||nt!==T)&&fv(i,_,u,T),Jr=!1;var rt=i.memoizedState;_.state=rt,pl(i,u,_,h),dl(),nt=i.memoizedState,L||rt!==nt||Jr?(typeof vt=="function"&&(Wh(i,a,vt,u),nt=i.memoizedState),(V=Jr||cv(i,a,V,u,rt,nt,T))?(ht||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=nt),_.props=u,_.state=nt,_.context=T,u=V):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,bh(e,i),T=i.memoizedProps,ht=es(a,T),_.props=ht,vt=i.pendingProps,rt=_.context,nt=a.contextType,V=Fs,typeof nt=="object"&&nt!==null&&(V=Fn(nt)),L=a.getDerivedStateFromProps,(nt=typeof L=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==vt||rt!==V)&&fv(i,_,u,V),Jr=!1,rt=i.memoizedState,_.state=rt,pl(i,u,_,h),dl();var st=i.memoizedState;T!==vt||rt!==st||Jr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof L=="function"&&(Wh(i,a,L,u),st=i.memoizedState),(ht=Jr||cv(i,a,ht,u,rt,st,V)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(nt||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,st,V),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,st,V)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),_.props=u,_.state=st,_.context=V,u=ht):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),u=!1)}return _=u,nc(e,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,e!==null&&u?(i.child=Zs(i,e.child,null,h),i.child=Zs(i,null,a,h)):Nn(e,i,a,h),i.memoizedState=_.state,e=i.child):e=Tr(e,i,h),e}function Av(e,i,a,u){return al(),i.flags|=256,Nn(e,i,a,u),i.child}var Kh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qh(e){return{baseLanes:e,cachePool:dg()}}function Jh(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Ci),e}function Rv(e,i,a){var u=i.pendingProps,h=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(h?na(i):ia(),we){var L=en,V;if(V=L){t:{for(V=L,L=Ji;V.nodeType!==8;){if(!L){L=null;break t}if(V=Vi(V.nextSibling),V===null){L=null;break t}}L=V}L!==null?(i.memoizedState={dehydrated:L,treeContext:Ya!==null?{id:vr,overflow:yr}:null,retryLane:536870912,hydrationErrors:null},V=ci(18,null,null,0),V.stateNode=L,V.return=i,i.child=V,Wn=i,en=null,V=!0):V=!1}V||Ka(i)}if(L=i.memoizedState,L!==null&&(L=L.dehydrated,L!==null))return Pd(L)?i.lanes=32:i.lanes=536870912,null;Er(i)}return L=u.children,u=u.fallback,h?(ia(),h=i.mode,L=ic({mode:"hidden",children:L},h),u=Wa(u,h,a,null),L.return=i,u.return=i,L.sibling=u,i.child=L,h=i.child,h.memoizedState=Qh(a),h.childLanes=Jh(e,T,a),i.memoizedState=Kh,u):(na(i),$h(i,L))}if(V=e.memoizedState,V!==null&&(L=V.dehydrated,L!==null)){if(_)i.flags&256?(na(i),i.flags&=-257,i=td(e,i,a)):i.memoizedState!==null?(ia(),i.child=e.child,i.flags|=128,i=null):(ia(),h=u.fallback,L=i.mode,u=ic({mode:"visible",children:u.children},L),h=Wa(h,L,a,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Zs(i,e.child,null,a),u=i.child,u.memoizedState=Qh(a),u.childLanes=Jh(e,T,a),i.memoizedState=Kh,i=h);else if(na(i),Pd(L)){if(T=L.nextSibling&&L.nextSibling.dataset,T)var nt=T.dgst;T=nt,u=Error(r(419)),u.stack="",u.digest=T,sl({value:u,source:null,stack:null}),i=td(e,i,a)}else if(An||ol(e,i,a,!1),T=(a&e.childLanes)!==0,An||T){if(T=We,T!==null&&(u=a&-a,u=(u&42)!==0?1:ie(u),u=(u&(T.suspendedLanes|a))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Is(e,u),mi(T,e,u),vv;L.data==="$?"||vd(),i=td(e,i,a)}else L.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,en=Vi(L.nextSibling),Wn=i,we=!0,Za=null,Ji=!1,e!==null&&(Ai[Ri++]=vr,Ai[Ri++]=yr,Ai[Ri++]=Ya,vr=e.id,yr=e.overflow,Ya=i),i=$h(i,u.children),i.flags|=4096);return i}return h?(ia(),h=u.fallback,L=i.mode,V=e.child,nt=V.sibling,u=gr(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,nt!==null?h=gr(nt,h):(h=Wa(h,L,a,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,L=e.child.memoizedState,L===null?L=Qh(a):(V=L.cachePool,V!==null?(nt=yn._currentValue,V=V.parent!==nt?{parent:nt,pool:nt}:V):V=dg(),L={baseLanes:L.baseLanes|a,cachePool:V}),h.memoizedState=L,h.childLanes=Jh(e,T,a),i.memoizedState=Kh,u):(na(i),a=e.child,e=a.sibling,a=gr(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=a,i.memoizedState=null,a)}function $h(e,i){return i=ic({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ic(e,i){return e=ci(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function td(e,i,a){return Zs(i,e.child,null,a),e=$h(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function wv(e,i,a){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),vh(e.return,i,a)}function ed(e,i,a,u,h){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=h)}function Cv(e,i,a){var u=i.pendingProps,h=u.revealOrder,_=u.tail;if(Nn(e,i,u.children,a),u=xn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wv(e,a,i);else if(e.tag===19)wv(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(gt(xn,u),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ed(i,!1,h,a,_);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}ed(i,!0,a,null,_);break;case"together":ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Tr(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),la|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ol(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=gr(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=gr(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function nd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function RE(e,i,a){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),Qr(i,yn,e.memoizedState.cache),al();break;case 27:case 5:Vt(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:Qr(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(na(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Rv(e,i,a):(na(i),e=Tr(e,i,a),e!==null?e.sibling:null);na(i);break;case 19:var h=(e.flags&128)!==0;if(u=(a&i.childLanes)!==0,u||(ol(e,i,a,!1),u=(a&i.childLanes)!==0),h){if(u)return Cv(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),gt(xn,xn.current),u)break;return null;case 22:case 23:return i.lanes=0,Mv(e,i,a);case 24:Qr(i,yn,e.memoizedState.cache)}return Tr(e,i,a)}function Dv(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!nd(e,a)&&(i.flags&128)===0)return An=!1,RE(e,i,a);An=(e.flags&131072)!==0}else An=!1,we&&(i.flags&1048576)!==0&&sg(i,zu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")fh(u)?(e=es(u,e),i.tag=1,i=bv(null,i,u,e,a)):(i.tag=0,i=Zh(null,i,u,e,a));else{if(u!=null){if(h=u.$$typeof,h===b){i.tag=11,i=yv(null,i,u,e,a);break t}else if(h===U){i.tag=14,i=xv(null,i,u,e,a);break t}}throw i=Z(u)||u,Error(r(306,i,""))}}return i;case 0:return Zh(e,i,i.type,i.pendingProps,a);case 1:return u=i.type,h=es(u,i.pendingProps),bv(e,i,u,h,a);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(r(387));u=i.pendingProps;var _=i.memoizedState;h=_.element,bh(e,i),pl(i,u,null,a);var T=i.memoizedState;if(u=T.cache,Qr(i,yn,u),u!==_.cache&&yh(i,[yn],a,!0),dl(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=Av(e,i,u,a);break t}else if(u!==h){h=Ti(Error(r(424)),i),sl(h),i=Av(e,i,u,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Vi(e.firstChild),Wn=i,we=!0,Za=null,Ji=!0,a=lv(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(al(),u===h){i=Tr(e,i,a);break t}Nn(e,i,u,a)}i=i.child}return i;case 26:return nc(e,i),e===null?(a=N0(i.type,null,i.pendingProps,null))?i.memoizedState=a:we||(a=i.type,e=i.pendingProps,u=gc(St.current).createElement(a),u[gn]=i,u[Ln]=e,zn(u,a,e),cn(u),i.stateNode=u):i.memoizedState=N0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Vt(i),e===null&&we&&(u=i.stateNode=U0(i.type,i.pendingProps,St.current),Wn=i,Ji=!0,h=en,ha(i.type)?(zd=h,en=Vi(u.firstChild)):en=h),Nn(e,i,i.pendingProps.children,a),nc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((h=u=en)&&(u=eT(u,i.type,i.pendingProps,Ji),u!==null?(i.stateNode=u,Wn=i,en=Vi(u.firstChild),Ji=!1,h=!0):h=!1),h||Ka(i)),Vt(i),h=i.type,_=i.pendingProps,T=e!==null?e.memoizedProps:null,u=_.children,Ld(h,_)?u=null:T!==null&&Ld(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=Uh(e,i,yE,null,null,a),zl._currentValue=h),nc(e,i),Nn(e,i,u,a),i.child;case 6:return e===null&&we&&((e=a=en)&&(a=nT(a,i.pendingProps,Ji),a!==null?(i.stateNode=a,Wn=i,en=null,e=!0):e=!1),e||Ka(i)),null;case 13:return Rv(e,i,a);case 4:return Et(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Zs(i,null,u,a):Nn(e,i,u,a),i.child;case 11:return yv(e,i,i.type,i.pendingProps,a);case 7:return Nn(e,i,i.pendingProps,a),i.child;case 8:return Nn(e,i,i.pendingProps.children,a),i.child;case 12:return Nn(e,i,i.pendingProps.children,a),i.child;case 10:return u=i.pendingProps,Qr(i,i.type,u.value),Nn(e,i,u.children,a),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Ja(i),h=Fn(h),u=u(h),i.flags|=1,Nn(e,i,u,a),i.child;case 14:return xv(e,i,i.type,i.pendingProps,a);case 15:return Sv(e,i,i.type,i.pendingProps,a);case 19:return Cv(e,i,a);case 31:return u=i.pendingProps,a=i.mode,u={mode:u.mode,children:u.children},e===null?(a=ic(u,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=gr(e.child,u),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Mv(e,i,a);case 24:return Ja(i),u=Fn(yn),e===null?(h=Mh(),h===null&&(h=We,_=xh(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=a),h=_),i.memoizedState={parent:u,cache:h},Th(i),Qr(i,yn,h)):((e.lanes&a)!==0&&(bh(e,i),pl(i,null,null,a),dl()),h=e.memoizedState,_=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Qr(i,yn,u)):(u=_.cache,Qr(i,yn,u),u!==h.cache&&yh(i,[yn],a,!0))),Nn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function br(e){e.flags|=4}function Uv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F0(i)){if(i=wi.current,i!==null&&((Me&4194048)===Me?$i!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==$i))throw fl=Eh,pg;e.flags|=8192}}function rc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Lt():536870912,e.lanes|=i,$s|=i)}function Sl(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,u=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=a,i}function wE(e,i,a){var u=i.pendingProps;switch(mh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Sr(yn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rl(i)?br(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ug())),Qe(i),null;case 26:return a=i.memoizedState,e===null?(br(i),a!==null?(Qe(i),Uv(i,a)):(Qe(i),i.flags&=-16777217)):a?a!==e.memoizedState?(br(i),Qe(i),Uv(i,a)):(Qe(i),i.flags&=-16777217):(e.memoizedProps!==u&&br(i),Qe(i),i.flags&=-16777217),null;case 27:Se(i),a=St.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&br(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Qe(i),null}e=K.current,rl(i)?og(i):(e=U0(h,u,a),i.stateNode=e,br(i))}return Qe(i),null;case 5:if(Se(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&br(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Qe(i),null}if(e=K.current,rl(i))og(i);else{switch(h=gc(St.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(a,{is:u.is}):h.createElement(a)}}e[gn]=i,e[Ln]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(zn(e,a,u),a){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&br(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&br(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(r(166));if(e=St.current,rl(i)){if(e=i.stateNode,a=i.memoizedProps,u=null,h=Wn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[gn]=i,e=!!(e.nodeValue===a||u!==null&&u.suppressHydrationWarning===!0||T0(e.nodeValue,a)),e||Ka(i)}else e=gc(e).createTextNode(u),e[gn]=i,i.stateNode=e}return Qe(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=rl(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[gn]=i}else al(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),h=!1}else h=ug(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Er(i),i):(Er(i),null)}if(Er(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=u!==null,e=e!==null&&e.memoizedState!==null,a){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==h&&(u.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),rc(i,i.updateQueue),Qe(i),null;case 4:return Qt(),e===null&&Rd(i.stateNode.containerInfo),Qe(i),null;case 10:return Sr(i.type),Qe(i),null;case 19:if(dt(xn),h=i.memoizedState,h===null)return Qe(i),null;if(u=(i.flags&128)!==0,_=h.rendering,_===null)if(u)Sl(h,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(_=$u(e),_!==null){for(i.flags|=128,Sl(h,!1),e=_.updateQueue,i.updateQueue=e,rc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)ag(a,e),a=a.sibling;return gt(xn,xn.current&1|2),i.child}e=e.sibling}h.tail!==null&&de()>oc&&(i.flags|=128,u=!0,Sl(h,!1),i.lanes=4194304)}else{if(!u)if(e=$u(_),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,rc(i,e),Sl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!we)return Qe(i),null}else 2*de()-h.renderingStartTime>oc&&a!==536870912&&(i.flags|=128,u=!0,Sl(h,!1),i.lanes=4194304);h.isBackwards?(_.sibling=i.child,i.child=_):(e=h.last,e!==null?e.sibling=_:i.child=_,h.last=_)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=de(),i.sibling=null,e=xn.current,gt(xn,u?e&1|2:e&1),i):(Qe(i),null);case 22:case 23:return Er(i),Ch(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&rc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),e!==null&&dt($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Sr(yn),Qe(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function CE(e,i){switch(mh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Sr(yn),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Se(i),null;case 13:if(Er(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));al()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return dt(xn),null;case 4:return Qt(),null;case 10:return Sr(i.type),null;case 22:case 23:return Er(i),Ch(),e!==null&&dt($a),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Sr(yn),null;case 25:return null;default:return null}}function Lv(e,i){switch(mh(i),i.tag){case 3:Sr(yn),Qt();break;case 26:case 27:case 5:Se(i);break;case 4:Qt();break;case 13:Er(i);break;case 19:dt(xn);break;case 10:Sr(i.type);break;case 22:case 23:Er(i),Ch(),e!==null&&dt($a);break;case 24:Sr(yn)}}function Ml(e,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var h=u.next;a=h;do{if((a.tag&e)===e){u=void 0;var _=a.create,T=a.inst;u=_(),T.destroy=u}a=a.next}while(a!==h)}}catch(L){Ve(i,i.return,L)}}function ra(e,i,a){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var _=h.next;u=_;do{if((u.tag&e)===e){var T=u.inst,L=T.destroy;if(L!==void 0){T.destroy=void 0,h=i;var V=a,nt=L;try{nt()}catch(ht){Ve(h,V,ht)}}}u=u.next}while(u!==_)}}catch(ht){Ve(i,i.return,ht)}}function Ov(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{xg(i,a)}catch(u){Ve(e,e.return,u)}}}function Nv(e,i,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(u){Ve(e,i,u)}}function El(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){Ve(e,i,h)}}function tr(e,i){var a=e.ref,u=e.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(h){Ve(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ve(e,i,h)}else a.current=null}function Pv(e){var i=e.type,a=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&u.focus();break t;case"img":a.src?u.src=a.src:a.srcSet&&(u.srcset=a.srcSet)}}catch(h){Ve(e,e.return,h)}}function id(e,i,a){try{var u=e.stateNode;KE(u,e.type,a,i),u[Ln]=i}catch(h){Ve(e,e.return,h)}}function zv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,i,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_c));else if(u!==4&&(u===27&&ha(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(ad(e,i,a),e=e.sibling;e!==null;)ad(e,i,a),e=e.sibling}function ac(e,i,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(u!==4&&(u===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,i,a),e=e.sibling;e!==null;)ac(e,i,a),e=e.sibling}function Bv(e){var i=e.stateNode,a=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zn(i,u,a),i[gn]=e,i[Ln]=a}catch(_){Ve(e,e.return,_)}}var Ar=!1,on=!1,sd=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function DE(e,i){if(e=e.containerInfo,Dd=Ec,e=Z_(e),rh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break t}var T=0,L=-1,V=-1,nt=0,ht=0,vt=e,rt=null;e:for(;;){for(var st;vt!==a||h!==0&&vt.nodeType!==3||(L=T+h),vt!==_||u!==0&&vt.nodeType!==3||(V=T+u),vt.nodeType===3&&(T+=vt.nodeValue.length),(st=vt.firstChild)!==null;)rt=vt,vt=st;for(;;){if(vt===e)break e;if(rt===a&&++nt===h&&(L=T),rt===_&&++ht===u&&(V=T),(st=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=st}a=L===-1||V===-1?null:{start:L,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ud={focusedElem:e,selectionRange:a},Ec=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,_=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&_!==null){e=void 0,a=i,h=_.memoizedProps,_=_.memoizedState,u=a.stateNode;try{var ne=es(a.type,h,a.elementType===a.type);e=u.getSnapshotBeforeUpdate(ne,_),u.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function Fv(e,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),u&4&&Ml(5,a);break;case 1:if(aa(e,a),u&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(T){Ve(a,a.return,T)}else{var h=es(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Ve(a,a.return,T)}}u&64&&Ov(a),u&512&&El(a,a.return);break;case 3:if(aa(e,a),u&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{xg(e,i)}catch(T){Ve(a,a.return,T)}}break;case 27:i===null&&u&4&&Bv(a);case 26:case 5:aa(e,a),i===null&&u&4&&Pv(a),u&512&&El(a,a.return);break;case 12:aa(e,a);break;case 13:aa(e,a),u&4&&Vv(e,a),u&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=FE.bind(null,a),iT(e,a))));break;case 22:if(u=a.memoizedState!==null||Ar,!u){i=i!==null&&i.memoizedState!==null||on,h=Ar;var _=on;Ar=u,(on=i)&&!_?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),Ar=h,on=_}break;case 30:break;default:aa(e,a)}}function Hv(e){var i=e.alternate;i!==null&&(e.alternate=null,Hv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Yr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Jn=!1;function Rr(e,i,a){for(a=a.child;a!==null;)Gv(e,i,a),a=a.sibling}function Gv(e,i,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:on||tr(a,i),Rr(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||tr(a,i);var u=je,h=Jn;ha(a.type)&&(je=a.stateNode,Jn=!1),Rr(e,i,a),Ll(a.stateNode),je=u,Jn=h;break;case 5:on||tr(a,i);case 6:if(u=je,h=Jn,je=null,Rr(e,i,a),je=u,Jn=h,je!==null)if(Jn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(_){Ve(a,i,_)}else try{je.removeChild(a.stateNode)}catch(_){Ve(a,i,_)}break;case 18:je!==null&&(Jn?(e=je,C0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):C0(je,a.stateNode));break;case 4:u=je,h=Jn,je=a.stateNode.containerInfo,Jn=!0,Rr(e,i,a),je=u,Jn=h;break;case 0:case 11:case 14:case 15:on||ra(2,a,i),on||ra(4,a,i),Rr(e,i,a);break;case 1:on||(tr(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&Nv(a,i,u)),Rr(e,i,a);break;case 21:Rr(e,i,a);break;case 22:on=(u=on)||a.memoizedState!==null,Rr(e,i,a),on=u;break;default:Rr(e,i,a)}}function Vv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){Ve(i,i.return,a)}}function UE(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Iv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Iv),i;default:throw Error(r(435,e.tag))}}function od(e,i){var a=UE(e);i.forEach(function(u){var h=HE.bind(null,e,u);a.has(u)||(a.add(u),u.then(h,h))})}function fi(e,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u],_=e,T=i,L=T;t:for(;L!==null;){switch(L.tag){case 27:if(ha(L.type)){je=L.stateNode,Jn=!1;break t}break;case 5:je=L.stateNode,Jn=!1;break t;case 3:case 4:je=L.stateNode.containerInfo,Jn=!0;break t}L=L.return}if(je===null)throw Error(r(160));Gv(_,T,h),je=null,Jn=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)kv(i,e),i=i.sibling}var Gi=null;function kv(e,i){var a=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fi(i,e),hi(e),u&4&&(ra(3,e,e.return),Ml(3,e),ra(5,e,e.return));break;case 1:fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),u&64&&Ar&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?u:a.concat(u))));break;case 26:var h=Gi;if(fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),u&4){var _=a!==null?a.memoizedState:null;if(u=e.memoizedState,a===null)if(u===null)if(e.stateNode===null){t:{u=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":_=h.getElementsByTagName("title")[0],(!_||_[Wr]||_[gn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(u),h.head.insertBefore(_,h.querySelector("head > title"))),zn(_,u,a),_[gn]=e,cn(_),u=_;break t;case"link":var T=B0("link","href",h).get(u+(a.href||""));if(T){for(var L=0;L<T.length;L++)if(_=T[L],_.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&_.getAttribute("rel")===(a.rel==null?null:a.rel)&&_.getAttribute("title")===(a.title==null?null:a.title)&&_.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(L,1);break e}}_=h.createElement(u),zn(_,u,a),h.head.appendChild(_);break;case"meta":if(T=B0("meta","content",h).get(u+(a.content||""))){for(L=0;L<T.length;L++)if(_=T[L],_.getAttribute("content")===(a.content==null?null:""+a.content)&&_.getAttribute("name")===(a.name==null?null:a.name)&&_.getAttribute("property")===(a.property==null?null:a.property)&&_.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&_.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(L,1);break e}}_=h.createElement(u),zn(_,u,a),h.head.appendChild(_);break;default:throw Error(r(468,u))}_[gn]=e,cn(_),u=_}e.stateNode=u}else I0(h,e.type,e.stateNode);else e.stateNode=z0(h,u,e.memoizedProps);else _!==u?(_===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):_.count--,u===null?I0(h,e.type,e.stateNode):z0(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&id(e,e.memoizedProps,a.memoizedProps)}break;case 27:fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),a!==null&&u&4&&id(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),e.flags&32){h=e.stateNode;try{Qi(h,"")}catch(st){Ve(e,e.return,st)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,id(e,h,a!==null?a.memoizedProps:h)),u&1024&&(sd=!0);break;case 6:if(fi(i,e),hi(e),u&4){if(e.stateNode===null)throw Error(r(162));u=e.memoizedProps,a=e.stateNode;try{a.nodeValue=u}catch(st){Ve(e,e.return,st)}}break;case 3:if(xc=null,h=Gi,Gi=vc(i.containerInfo),fi(i,e),Gi=h,hi(e),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(i.containerInfo)}catch(st){Ve(e,e.return,st)}sd&&(sd=!1,Xv(e));break;case 4:u=Gi,Gi=vc(e.stateNode.containerInfo),fi(i,e),hi(e),Gi=u;break;case 12:fi(i,e),hi(e);break;case 13:fi(i,e),hi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(dd=de()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,od(e,u)));break;case 22:h=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,nt=Ar,ht=on;if(Ar=nt||h,on=ht||V,fi(i,e),on=ht,Ar=nt,hi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||V||Ar||on||ns(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(_=V.stateNode,h)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{L=V.stateNode;var vt=V.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;L.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){Ve(V,V.return,st)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(st){Ve(V,V.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(a=u.retryQueue,a!==null&&(u.retryQueue=null,od(e,a))));break;case 19:fi(i,e),hi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,od(e,u)));break;case 30:break;case 21:break;default:fi(i,e),hi(e)}}function hi(e){var i=e.flags;if(i&2){try{for(var a,u=e.return;u!==null;){if(zv(u)){a=u;break}u=u.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,_=rd(e);ac(e,_,h);break;case 5:var T=a.stateNode;a.flags&32&&(Qi(T,""),a.flags&=-33);var L=rd(e);ac(e,L,T);break;case 3:case 4:var V=a.stateNode.containerInfo,nt=rd(e);ad(e,nt,V);break;default:throw Error(r(161))}}catch(ht){Ve(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Xv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Xv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function aa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Fv(e,i.alternate,i),i=i.sibling}function ns(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ra(4,i,i.return),ns(i);break;case 1:tr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Nv(i,i.return,a),ns(i);break;case 27:Ll(i.stateNode);case 26:case 5:tr(i,i.return),ns(i);break;case 22:i.memoizedState===null&&ns(i);break;case 30:ns(i);break;default:ns(i)}e=e.sibling}}function sa(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:sa(h,_,a),Ml(4,_);break;case 1:if(sa(h,_,a),u=_,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Ve(u,u.return,nt)}if(u=_,h=u.updateQueue,h!==null){var L=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)yg(V[h],L)}catch(nt){Ve(u,u.return,nt)}}a&&T&64&&Ov(_),El(_,_.return);break;case 27:Bv(_);case 26:case 5:sa(h,_,a),a&&u===null&&T&4&&Pv(_),El(_,_.return);break;case 12:sa(h,_,a);break;case 13:sa(h,_,a),a&&T&4&&Vv(h,_);break;case 22:_.memoizedState===null&&sa(h,_,a),El(_,_.return);break;case 30:break;default:sa(h,_,a)}i=i.sibling}}function ld(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ll(a))}function ud(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e))}function er(e,i,a,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qv(e,i,a,u),i=i.sibling}function qv(e,i,a,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:er(e,i,a,u),h&2048&&Ml(9,i);break;case 1:er(e,i,a,u);break;case 3:er(e,i,a,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e)));break;case 12:if(h&2048){er(e,i,a,u),e=i.stateNode;try{var _=i.memoizedProps,T=_.id,L=_.onPostCommit;typeof L=="function"&&L(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ve(i,i.return,V)}}else er(e,i,a,u);break;case 13:er(e,i,a,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?er(e,i,a,u):Tl(e,i):_._visibility&2?er(e,i,a,u):(_._visibility|=2,Ks(e,i,a,u,(i.subtreeFlags&10256)!==0)),h&2048&&ld(T,i);break;case 24:er(e,i,a,u),h&2048&&ud(i.alternate,i);break;default:er(e,i,a,u)}}function Ks(e,i,a,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=e,T=i,L=a,V=u,nt=T.flags;switch(T.tag){case 0:case 11:case 15:Ks(_,T,L,V,h),Ml(8,T);break;case 23:break;case 22:var ht=T.stateNode;T.memoizedState!==null?ht._visibility&2?Ks(_,T,L,V,h):Tl(_,T):(ht._visibility|=2,Ks(_,T,L,V,h)),h&&nt&2048&&ld(T.alternate,T);break;case 24:Ks(_,T,L,V,h),h&&nt&2048&&ud(T.alternate,T);break;default:Ks(_,T,L,V,h)}i=i.sibling}}function Tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,u=i,h=u.flags;switch(u.tag){case 22:Tl(a,u),h&2048&&ld(u.alternate,u);break;case 24:Tl(a,u),h&2048&&ud(u.alternate,u);break;default:Tl(a,u)}i=i.sibling}}var bl=8192;function Qs(e){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Wv(e),e=e.sibling}function Wv(e){switch(e.tag){case 26:Qs(e),e.flags&bl&&e.memoizedState!==null&&_T(Gi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e);break;case 3:case 4:var i=Gi;Gi=vc(e.stateNode.containerInfo),Qs(e),Gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=bl,bl=16777216,Qs(e),bl=i):Qs(e));break;default:Qs(e)}}function Yv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Rn=u,Zv(u,e)}Yv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jv(e),e=e.sibling}function jv(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&ra(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,sc(e)):Al(e);break;default:Al(e)}}function sc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Rn=u,Zv(u,e)}Yv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ra(8,i,i.return),sc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,sc(i));break;default:sc(i)}e=e.sibling}}function Zv(e,i){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ra(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ll(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,Rn=u;else t:for(a=e;Rn!==null;){u=Rn;var h=u.sibling,_=u.return;if(Hv(u),u===a){Rn=null;break t}if(h!==null){h.return=_,Rn=h;break t}Rn=_}}}var LE={getCacheForType:function(e){var i=Fn(yn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},OE=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,pe=null,Me=0,Pe=0,di=null,oa=!1,Js=!1,cd=!1,wr=0,nn=0,la=0,is=0,fd=0,Ci=0,$s=0,Rl=null,$n=null,hd=!1,dd=0,oc=1/0,lc=null,ua=null,Pn=0,ca=null,to=null,eo=0,pd=0,md=null,Kv=null,wl=0,_d=null;function pi(){if((Ne&2)!==0&&Me!==0)return Me&-Me;if(H.T!==null){var e=Vs;return e!==0?e:Ed()}return Te()}function Qv(){Ci===0&&(Ci=(Me&536870912)===0||we?Y():536870912);var e=wi.current;return e!==null&&(e.flags|=32),Ci}function mi(e,i,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(no(e,0),fa(e,Me,Ci,!1)),Bt(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(is|=a),nn===4&&fa(e,Me,Ci,!1)),nr(e))}function Jv(e,i,a){if((Ne&6)!==0)throw Error(r(327));var u=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),h=u?zE(e,i):yd(e,i,!0),_=u;do{if(h===0){Js&&!u&&fa(e,i,0,!1);break}else{if(a=e.current.alternate,_&&!NE(a)){h=yd(e,i,!1),_=!1;continue}if(h===2){if(_=i,e.errorRecoveryDisabledLanes&_)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var L=e;h=Rl;var V=L.current.memoizedState.isDehydrated;if(V&&(no(L,T).flags|=256),T=yd(L,T,!1),T!==2){if(cd&&!V){L.errorRecoveryDisabledLanes|=_,is|=_,h=4;break t}_=$n,$n=h,_!==null&&($n===null?$n=_:$n.push.apply($n,_))}h=T}if(_=!1,h!==2)continue}}if(h===1){no(e,0),fa(e,i,0,!0);break}t:{switch(u=e,_=h,_){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:fa(u,i,Ci,!oa);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=dd+300-de(),10<h)){if(fa(u,i,Ci,!oa),jt(u,0,!0)!==0)break t;u.timeoutHandle=R0($v.bind(null,u,a,$n,lc,hd,i,Ci,is,$s,oa,_,2,-0,0),h);break t}$v(u,a,$n,lc,hd,i,Ci,is,$s,oa,_,0,-0,0)}}break}while(!0);nr(e)}function $v(e,i,a,u,h,_,T,L,V,nt,ht,vt,rt,st){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Pl={stylesheets:null,count:0,unsuspend:mT},Wv(i),vt=gT(),vt!==null)){e.cancelPendingCommit=vt(s0.bind(null,e,i,_,a,u,h,T,L,V,ht,1,rt,st)),fa(e,_,T,!nt);return}s0(e,i,_,a,u,h,T,L,V)}function NE(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var h=a[u],_=h.getSnapshot;h=h.value;try{if(!ui(_(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fa(e,i,a,u){i&=~fd,i&=~is,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var _=31-Pt(h),T=1<<_;u[_]=-1,h&=~T}a!==0&&yt(e,a,i)}function uc(){return(Ne&6)===0?(Cl(0),!1):!0}function gd(){if(pe!==null){if(Pe===0)var e=pe.return;else e=pe,xr=Qa=null,Nh(e),js=null,yl=0,e=pe;for(;e!==null;)Lv(e.alternate,e),e=e.return;pe=null}}function no(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),gd(),We=e,pe=a=gr(e.current,null),Me=i,Pe=0,di=null,oa=!1,Js=Ct(e,i),cd=!1,$s=Ci=fd=is=la=nn=0,$n=Rl=null,hd=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Pt(u),_=1<<h;i|=e[h],u&=~_}return wr=i,Uu(),a}function t0(e,i){ce=null,H.H=Ku,i===cl||i===Hu?(i=gg(),Pe=3):i===pg?(i=gg(),Pe=4):Pe=i===vv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,pe===null&&(nn=1,ec(e,Ti(i,e.current)))}function e0(){var e=H.H;return H.H=Ku,e===null?Ku:e}function n0(){var e=H.A;return H.A=LE,e}function vd(){nn=4,oa||(Me&4194048)!==Me&&wi.current!==null||(Js=!0),(la&134217727)===0&&(is&134217727)===0||We===null||fa(We,Me,Ci,!1)}function yd(e,i,a){var u=Ne;Ne|=2;var h=e0(),_=n0();(We!==e||Me!==i)&&(lc=null,no(e,i)),i=!1;var T=nn;t:do try{if(Pe!==0&&pe!==null){var L=pe,V=di;switch(Pe){case 8:gd(),T=6;break t;case 3:case 2:case 9:case 6:wi.current===null&&(i=!0);var nt=Pe;if(Pe=0,di=null,io(e,L,V,nt),a&&Js){T=0;break t}break;default:nt=Pe,Pe=0,di=null,io(e,L,V,nt)}}PE(),T=nn;break}catch(ht){t0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,xr=Qa=null,Ne=u,H.H=h,H.A=_,pe===null&&(We=null,Me=0,Uu()),T}function PE(){for(;pe!==null;)i0(pe)}function zE(e,i){var a=Ne;Ne|=2;var u=e0(),h=n0();We!==e||Me!==i?(lc=null,oc=de()+500,no(e,i)):Js=Ct(e,i);t:do try{if(Pe!==0&&pe!==null){i=pe;var _=di;e:switch(Pe){case 1:Pe=0,di=null,io(e,i,_,1);break;case 2:case 9:if(mg(_)){Pe=0,di=null,r0(i);break}i=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),nr(e)},_.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:mg(_)?(Pe=0,di=null,r0(i)):(Pe=0,di=null,io(e,i,_,7));break;case 5:var T=null;switch(pe.tag){case 26:T=pe.memoizedState;case 5:case 27:var L=pe;if(!T||F0(T)){Pe=0,di=null;var V=L.sibling;if(V!==null)pe=V;else{var nt=L.return;nt!==null?(pe=nt,cc(nt)):pe=null}break e}}Pe=0,di=null,io(e,i,_,5);break;case 6:Pe=0,di=null,io(e,i,_,6);break;case 8:gd(),nn=6;break t;default:throw Error(r(462))}}BE();break}catch(ht){t0(e,ht)}while(!0);return xr=Qa=null,H.H=u,H.A=h,Ne=a,pe!==null?0:(We=null,Me=0,Uu(),nn)}function BE(){for(;pe!==null&&!Un();)i0(pe)}function i0(e){var i=Dv(e.alternate,e,wr);e.memoizedProps=e.pendingProps,i===null?cc(e):pe=i}function r0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Tv(a,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Tv(a,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Nh(i);default:Lv(a,i),i=pe=ag(i,wr),i=Dv(a,i,wr)}e.memoizedProps=e.pendingProps,i===null?cc(e):pe=i}function io(e,i,a,u){xr=Qa=null,Nh(i),js=null,yl=0;var h=i.return;try{if(AE(e,h,i,a,Me)){nn=1,ec(e,Ti(a,e.current)),pe=null;return}}catch(_){if(h!==null)throw pe=h,_;nn=1,ec(e,Ti(a,e.current)),pe=null;return}i.flags&32768?(we||u===1?e=!0:Js||(Me&536870912)!==0?e=!1:(oa=e=!0,(u===2||u===9||u===3||u===6)&&(u=wi.current,u!==null&&u.tag===13&&(u.flags|=16384))),a0(i,e)):cc(i)}function cc(e){var i=e;do{if((i.flags&32768)!==0){a0(i,oa);return}e=i.return;var a=wE(i.alternate,i,wr);if(a!==null){pe=a;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);nn===0&&(nn=5)}function a0(e,i){do{var a=CE(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);nn=6,pe=null}function s0(e,i,a,u,h,_,T,L,V){e.cancelPendingCommit=null;do fc();while(Pn!==0);if((Ne&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(_=i.lanes|i.childLanes,_|=uh,Rt(e,a,_,T,L,V),e===We&&(pe=We=null,Me=0),to=i,ca=e,eo=a,pd=_,md=h,Kv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GE(ae,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=H.T,H.T=null,h=q.p,q.p=2,T=Ne,Ne|=4;try{DE(e,i,a)}finally{Ne=T,q.p=h,H.T=u}}Pn=1,o0(),l0(),u0()}}function o0(){if(Pn===1){Pn=0;var e=ca,i=to,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var u=q.p;q.p=2;var h=Ne;Ne|=4;try{kv(i,e);var _=Ud,T=Z_(e.containerInfo),L=_.focusedElem,V=_.selectionRange;if(T!==L&&L&&L.ownerDocument&&j_(L.ownerDocument.documentElement,L)){if(V!==null&&rh(L)){var nt=V.start,ht=V.end;if(ht===void 0&&(ht=nt),"selectionStart"in L)L.selectionStart=nt,L.selectionEnd=Math.min(ht,L.value.length);else{var vt=L.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),ne=L.textContent.length,$t=Math.min(V.start,ne),Fe=V.end===void 0?$t:Math.min(V.end,ne);!st.extend&&$t>Fe&&(T=Fe,Fe=$t,$t=T);var Q=Y_(L,$t),W=Y_(L,Fe);if(Q&&W&&(st.rangeCount!==1||st.anchorNode!==Q.node||st.anchorOffset!==Q.offset||st.focusNode!==W.node||st.focusOffset!==W.offset)){var et=vt.createRange();et.setStart(Q.node,Q.offset),st.removeAllRanges(),$t>Fe?(st.addRange(et),st.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),st.addRange(et))}}}}for(vt=[],st=L;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<vt.length;L++){var mt=vt[L];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ec=!!Dd,Ud=Dd=null}finally{Ne=h,q.p=u,H.T=a}}e.current=i,Pn=2}}function l0(){if(Pn===2){Pn=0;var e=ca,i=to,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var u=q.p;q.p=2;var h=Ne;Ne|=4;try{Fv(e,i.alternate,i)}finally{Ne=h,q.p=u,H.T=a}}Pn=3}}function u0(){if(Pn===4||Pn===3){Pn=0,Ee();var e=ca,i=to,a=eo,u=Kv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,to=ca=null,c0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ua=null),Oe(a),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=H.T,h=q.p,q.p=2,H.T=null;try{for(var _=e.onRecoverableError,T=0;T<u.length;T++){var L=u[T];_(L.value,{componentStack:L.stack})}}finally{H.T=i,q.p=h}}(eo&3)!==0&&fc(),nr(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===_d?wl++:(wl=0,_d=e):wl=0,Cl(0)}}function c0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ll(i)))}function fc(e){return o0(),l0(),u0(),f0()}function f0(){if(Pn!==5)return!1;var e=ca,i=pd;pd=0;var a=Oe(eo),u=H.T,h=q.p;try{q.p=32>a?32:a,H.T=null,a=md,md=null;var _=ca,T=eo;if(Pn=0,to=ca=null,eo=0,(Ne&6)!==0)throw Error(r(331));var L=Ne;if(Ne|=4,jv(_.current),qv(_,_.current,T,a),Ne=L,Cl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pt,_)}catch{}return!0}finally{q.p=h,H.T=u,c0(e,i)}}function h0(e,i,a){i=Ti(a,i),i=jh(e.stateNode,i,2),e=ta(e,i,2),e!==null&&(Bt(e,2),nr(e))}function Ve(e,i,a){if(e.tag===3)h0(e,e,a);else for(;i!==null;){if(i.tag===3){h0(i,e,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ua===null||!ua.has(u))){e=Ti(a,e),a=_v(2),u=ta(i,a,2),u!==null&&(gv(a,u,i,e),Bt(u,2),nr(u));break}}i=i.return}}function xd(e,i,a){var u=e.pingCache;if(u===null){u=e.pingCache=new OE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(cd=!0,h.add(a),e=IE.bind(null,e,i,a),i.then(e,e))}function IE(e,i,a){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(nn===4||nn===3&&(Me&62914560)===Me&&300>de()-dd?(Ne&2)===0&&no(e,0):fd|=a,$s===Me&&($s=0)),nr(e)}function d0(e,i){i===0&&(i=Lt()),e=Is(e,i),e!==null&&(Bt(e,i),nr(e))}function FE(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),d0(e,a)}function HE(e,i){var a=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(i),d0(e,a)}function GE(e,i){return _e(e,i)}var hc=null,ro=null,Sd=!1,dc=!1,Md=!1,rs=0;function nr(e){e!==ro&&e.next===null&&(ro===null?hc=ro=e:ro=ro.next=e),dc=!0,Sd||(Sd=!0,kE())}function Cl(e,i){if(!Md&&dc){Md=!0;do for(var a=!1,u=hc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var _=0;else{var T=u.suspendedLanes,L=u.pingedLanes;_=(1<<31-Pt(42|e)+1)-1,_&=h&~(T&~L),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(a=!0,g0(u,_))}else _=Me,_=jt(u,u===We?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||Ct(u,_)||(a=!0,g0(u,_));u=u.next}while(a);Md=!1}}function VE(){p0()}function p0(){dc=Sd=!1;var e=0;rs!==0&&(QE()&&(e=rs),rs=0);for(var i=de(),a=null,u=hc;u!==null;){var h=u.next,_=m0(u,i);_===0?(u.next=null,a===null?hc=h:a.next=h,h===null&&(ro=a)):(a=u,(e!==0||(_&3)!==0)&&(dc=!0)),u=h}Cl(e)}function m0(e,i){for(var a=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,_=e.pendingLanes&-62914561;0<_;){var T=31-Pt(_),L=1<<T,V=h[T];V===-1?((L&a)===0||(L&u)!==0)&&(h[T]=re(L,i)):V<=i&&(e.expiredLanes|=L),_&=~L}if(i=We,a=Me,a=jt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,a===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&X(u),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(u!==null&&X(u),Oe(a)){case 2:case 8:a=Zt;break;case 32:a=ae;break;case 268435456:a=G;break;default:a=ae}return u=_0.bind(null,e),a=_e(a,u),e.callbackPriority=i,e.callbackNode=a,i}return u!==null&&u!==null&&X(u),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,i){if(Pn!==0&&Pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fc()&&e.callbackNode!==a)return null;var u=Me;return u=jt(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Jv(e,u,i),m0(e,de()),e.callbackNode!=null&&e.callbackNode===a?_0.bind(null,e):null)}function g0(e,i){if(fc())return null;Jv(e,i,!0)}function kE(){$E(function(){(Ne&6)!==0?_e(ge,VE):p0()})}function Ed(){return rs===0&&(rs=Y()),rs}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tu(""+e)}function y0(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function XE(e,i,a,u,h){if(i==="submit"&&a&&a.stateNode===h){var _=v0((h[Ln]||null).action),T=u.submitter;T&&(i=(i=T[Ln]||null)?v0(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var L=new wu("action","action",null,u,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(rs!==0){var V=T?y0(h,T):new FormData(h);kh(a,{pending:!0,data:V,method:h.method,action:_},null,V)}}else typeof _=="function"&&(L.preventDefault(),V=T?y0(h,T):new FormData(h),kh(a,{pending:!0,data:V,method:h.method,action:_},_,V))},currentTarget:h}]})}}for(var Td=0;Td<lh.length;Td++){var bd=lh[Td],qE=bd.toLowerCase(),WE=bd[0].toUpperCase()+bd.slice(1);Hi(qE,"on"+WE)}Hi(J_,"onAnimationEnd"),Hi($_,"onAnimationIteration"),Hi(tg,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(uE,"onTransitionRun"),Hi(cE,"onTransitionStart"),Hi(fE,"onTransitionCancel"),Hi(eg,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dr("onBeforeInput",["compositionend","keypress","textInput","paste"]),dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function x0(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var u=e[a],h=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var L=u[T],V=L.instance,nt=L.currentTarget;if(L=L.listener,V!==_&&h.isPropagationStopped())break t;_=L,h.currentTarget=nt;try{_(h)}catch(ht){tc(ht)}h.currentTarget=null,_=V}else for(T=0;T<u.length;T++){if(L=u[T],V=L.instance,nt=L.currentTarget,L=L.listener,V!==_&&h.isPropagationStopped())break t;_=L,h.currentTarget=nt;try{_(h)}catch(ht){tc(ht)}h.currentTarget=null,_=V}}}}function me(e,i){var a=i[Ha];a===void 0&&(a=i[Ha]=new Set);var u=e+"__bubble";a.has(u)||(S0(i,e,2,!1),a.add(u))}function Ad(e,i,a){var u=0;i&&(u|=4),S0(a,e,u,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Rd(e){if(!e[pc]){e[pc]=!0,Mu.forEach(function(a){a!=="selectionchange"&&(YE.has(a)||Ad(a,!1,e),Ad(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[pc]||(i[pc]=!0,Ad("selectionchange",!1,i))}}function S0(e,i,a,u){switch(q0(i)){case 2:var h=xT;break;case 8:h=ST;break;default:h=Gd}a=h.bind(null,i,a,e),h=void 0,!Zf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function wd(e,i,a,u,h){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var L=u.stateNode.containerInfo;if(L===h)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;L!==null;){if(T=fr(L),T===null)return;if(V=T.tag,V===5||V===6||V===26||V===27){u=_=T;continue t}L=L.parentNode}}u=u.return}w_(function(){var nt=_,ht=Yf(a),vt=[];t:{var rt=ng.get(e);if(rt!==void 0){var st=wu,ne=e;switch(e){case"keypress":if(Au(a)===0)break t;case"keydown":case"keyup":st=GM;break;case"focusin":ne="focus",st=$f;break;case"focusout":ne="blur",st=$f;break;case"beforeblur":case"afterblur":st=$f;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=U_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=CM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=XM;break;case J_:case $_:case tg:st=LM;break;case eg:st=WM;break;case"scroll":case"scrollend":st=RM;break;case"wheel":st=jM;break;case"copy":case"cut":case"paste":st=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=O_;break;case"toggle":case"beforetoggle":st=KM}var $t=(i&4)!==0,Fe=!$t&&(e==="scroll"||e==="scrollend"),Q=$t?rt!==null?rt+"Capture":null:rt;$t=[];for(var W=nt,et;W!==null;){var mt=W;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Q===null||(mt=Zo(W,Q),mt!=null&&$t.push(Ul(W,mt,et))),Fe)break;W=W.return}0<$t.length&&(rt=new st(rt,ne,null,a,ht),vt.push({event:rt,listeners:$t}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",rt&&a!==Wf&&(ne=a.relatedTarget||a.fromElement)&&(fr(ne)||ne[Zn]))break t;if((st||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(ne=a.relatedTarget||a.toElement,st=nt,ne=ne?fr(ne):null,ne!==null&&(Fe=l(ne),$t=ne.tag,ne!==Fe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(st=null,ne=nt),st!==ne)){if($t=U_,mt="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&($t=O_,mt="onPointerLeave",Q="onPointerEnter",W="pointer"),Fe=st==null?rt:Va(st),et=ne==null?rt:Va(ne),rt=new $t(mt,W+"leave",st,a,ht),rt.target=Fe,rt.relatedTarget=et,mt=null,fr(ht)===nt&&($t=new $t(Q,W+"enter",ne,a,ht),$t.target=et,$t.relatedTarget=Fe,mt=$t),Fe=mt,st&&ne)e:{for($t=st,Q=ne,W=0,et=$t;et;et=ao(et))W++;for(et=0,mt=Q;mt;mt=ao(mt))et++;for(;0<W-et;)$t=ao($t),W--;for(;0<et-W;)Q=ao(Q),et--;for(;W--;){if($t===Q||Q!==null&&$t===Q.alternate)break e;$t=ao($t),Q=ao(Q)}$t=null}else $t=null;st!==null&&M0(vt,rt,st,$t,!1),ne!==null&&Fe!==null&&M0(vt,Fe,ne,$t,!0)}}t:{if(rt=nt?Va(nt):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var Ht=G_;else if(F_(rt))if(V_)Ht=sE;else{Ht=rE;var he=iE}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&qf(nt.elementType)&&(Ht=G_):Ht=aE;if(Ht&&(Ht=Ht(e,nt))){H_(vt,Ht,a,ht);break t}he&&he(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&In(rt,"number",rt.value)}switch(he=nt?Va(nt):window,e){case"focusin":(F_(he)||he.contentEditable==="true")&&(Ps=he,ah=nt,il=null);break;case"focusout":il=ah=Ps=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,K_(vt,a,ht);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":K_(vt,a,ht)}var Wt;if(eh)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ns?B_(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(N_&&a.locale!=="ko"&&(Ns||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ns&&(Wt=C_()):(Kr=ht,Kf="value"in Kr?Kr.value:Kr.textContent,Ns=!0)),he=mc(nt,te),0<he.length&&(te=new L_(te,e,null,a,ht),vt.push({event:te,listeners:he}),Wt?te.data=Wt:(Wt=I_(a),Wt!==null&&(te.data=Wt)))),(Wt=JM?$M(e,a):tE(e,a))&&(te=mc(nt,"onBeforeInput"),0<te.length&&(he=new L_("onBeforeInput","beforeinput",null,a,ht),vt.push({event:he,listeners:te}),he.data=Wt)),XE(vt,e,nt,a,ht)}x0(vt,i)})}function Ul(e,i,a){return{instance:e,listener:i,currentTarget:a}}function mc(e,i){for(var a=i+"Capture",u=[];e!==null;){var h=e,_=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=Zo(e,a),h!=null&&u.unshift(Ul(e,h,_)),h=Zo(e,i),h!=null&&u.push(Ul(e,h,_))),e.tag===3)return u;e=e.return}return[]}function ao(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,i,a,u,h){for(var _=i._reactName,T=[];a!==null&&a!==u;){var L=a,V=L.alternate,nt=L.stateNode;if(L=L.tag,V!==null&&V===u)break;L!==5&&L!==26&&L!==27||nt===null||(V=nt,h?(nt=Zo(a,_),nt!=null&&T.unshift(Ul(a,nt,V))):h||(nt=Zo(a,_),nt!=null&&T.push(Ul(a,nt,V)))),a=a.return}T.length!==0&&e.push({event:i,listeners:T})}var jE=/\r\n?/g,ZE=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(jE,`
`).replace(ZE,"")}function T0(e,i){return i=E0(i),E0(e)===i}function _c(){}function Ie(e,i,a,u,h,_){switch(a){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qi(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qi(e,""+u);break;case"className":Dt(e,"class",u);break;case"tabIndex":Dt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,u);break;case"style":A_(e,u,_);break;case"data":if(i!=="object"){Dt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(a);break}u=Tu(""+u),e.setAttribute(a,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(a==="formAction"?(i!=="input"&&Ie(e,i,"name",h.name,h,null),Ie(e,i,"formEncType",h.formEncType,h,null),Ie(e,i,"formMethod",h.formMethod,h,null),Ie(e,i,"formTarget",h.formTarget,h,null)):(Ie(e,i,"encType",h.encType,h,null),Ie(e,i,"method",h.method,h,null),Ie(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(a);break}u=Tu(""+u),e.setAttribute(a,u);break;case"onClick":u!=null&&(e.onclick=_c);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(a=u.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}a=Tu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,""+u):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":u===!0?e.setAttribute(a,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,u):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(a,u):e.removeAttribute(a);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(a):e.setAttribute(a,u);break;case"popover":me("beforetoggle",e),me("toggle",e),At(e,"popover",u);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":At(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bM.get(a)||a,At(e,a,u))}}function Cd(e,i,a,u,h,_){switch(a){case"style":A_(e,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(a=u.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof u=="string"?Qi(e,u):(typeof u=="number"||typeof u=="bigint")&&Qi(e,""+u);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"onClick":u!=null&&(e.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),_=e[Ln]||null,_=_!=null?_[a]:null,typeof _=="function"&&e.removeEventListener(i,_,h),typeof u=="function")){typeof _!="function"&&_!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,u,h);break t}a in e?e[a]=u:u===!0?e.setAttribute(a,""):At(e,a,u)}}}function zn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var u=!1,h=!1,_;for(_ in a)if(a.hasOwnProperty(_)){var T=a[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,_,T,a,null)}}h&&Ie(e,i,"srcSet",a.srcSet,a,null),u&&Ie(e,i,"src",a.src,a,null);return;case"input":me("invalid",e);var L=_=T=h=null,V=null,nt=null;for(u in a)if(a.hasOwnProperty(u)){var ht=a[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":T=ht;break;case"checked":V=ht;break;case"defaultChecked":nt=ht;break;case"value":_=ht;break;case"defaultValue":L=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:Ie(e,i,u,ht,a,null)}}Ge(e,_,L,V,nt,T,h,!1),ze(e);return;case"select":me("invalid",e),u=T=_=null;for(h in a)if(a.hasOwnProperty(h)&&(L=a[h],L!=null))switch(h){case"value":_=L;break;case"defaultValue":T=L;break;case"multiple":u=L;default:Ie(e,i,h,L,a,null)}i=_,a=T,e.multiple=!!u,i!=null?vn(e,!!u,i,!1):a!=null&&vn(e,!!u,a,!0);return;case"textarea":me("invalid",e),_=h=u=null;for(T in a)if(a.hasOwnProperty(T)&&(L=a[T],L!=null))switch(T){case"value":u=L;break;case"defaultValue":h=L;break;case"children":_=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(91));break;default:Ie(e,i,T,L,a,null)}On(e,u,h,_),ze(e);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(u=a[V],u!=null))switch(V){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ie(e,i,V,u,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(u=0;u<Dl.length;u++)me(Dl[u],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(u=a[nt],u!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,nt,u,a,null)}return;default:if(qf(i)){for(ht in a)a.hasOwnProperty(ht)&&(u=a[ht],u!==void 0&&Cd(e,i,ht,u,a,void 0));return}}for(L in a)a.hasOwnProperty(L)&&(u=a[L],u!=null&&Ie(e,i,L,u,a,null))}function KE(e,i,a,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,L=null,V=null,nt=null,ht=null;for(st in a){var vt=a[st];if(a.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":V=vt;default:u.hasOwnProperty(st)||Ie(e,i,st,null,u,vt)}}for(var rt in u){var st=u[rt];if(vt=a[rt],u.hasOwnProperty(rt)&&(st!=null||vt!=null))switch(rt){case"type":_=st;break;case"name":h=st;break;case"checked":nt=st;break;case"defaultChecked":ht=st;break;case"value":T=st;break;case"defaultValue":L=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,i));break;default:st!==vt&&Ie(e,i,rt,st,u,vt)}}pr(e,T,L,V,nt,ht,_,h);return;case"select":st=T=L=rt=null;for(_ in a)if(V=a[_],a.hasOwnProperty(_)&&V!=null)switch(_){case"value":break;case"multiple":st=V;default:u.hasOwnProperty(_)||Ie(e,i,_,null,u,V)}for(h in u)if(_=u[h],V=a[h],u.hasOwnProperty(h)&&(_!=null||V!=null))switch(h){case"value":rt=_;break;case"defaultValue":L=_;break;case"multiple":T=_;default:_!==V&&Ie(e,i,h,_,u,V)}i=L,a=T,u=st,rt!=null?vn(e,!!a,rt,!1):!!u!=!!a&&(i!=null?vn(e,!!a,i,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":st=rt=null;for(L in a)if(h=a[L],a.hasOwnProperty(L)&&h!=null&&!u.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Ie(e,i,L,null,u,h)}for(T in u)if(h=u[T],_=a[T],u.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":rt=h;break;case"defaultValue":st=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==_&&Ie(e,i,T,h,u,_)}bn(e,rt,st);return;case"option":for(var ne in a)if(rt=a[ne],a.hasOwnProperty(ne)&&rt!=null&&!u.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ie(e,i,ne,null,u,rt)}for(V in u)if(rt=u[V],st=a[V],u.hasOwnProperty(V)&&rt!==st&&(rt!=null||st!=null))switch(V){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ie(e,i,V,rt,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)rt=a[$t],a.hasOwnProperty($t)&&rt!=null&&!u.hasOwnProperty($t)&&Ie(e,i,$t,null,u,rt);for(nt in u)if(rt=u[nt],st=a[nt],u.hasOwnProperty(nt)&&rt!==st&&(rt!=null||st!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,i));break;default:Ie(e,i,nt,rt,u,st)}return;default:if(qf(i)){for(var Fe in a)rt=a[Fe],a.hasOwnProperty(Fe)&&rt!==void 0&&!u.hasOwnProperty(Fe)&&Cd(e,i,Fe,void 0,u,rt);for(ht in u)rt=u[ht],st=a[ht],!u.hasOwnProperty(ht)||rt===st||rt===void 0&&st===void 0||Cd(e,i,ht,rt,u,st);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!u.hasOwnProperty(Q)&&Ie(e,i,Q,null,u,rt);for(vt in u)rt=u[vt],st=a[vt],!u.hasOwnProperty(vt)||rt===st||rt==null&&st==null||Ie(e,i,vt,rt,u,st)}var Dd=null,Ud=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function b0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ld(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function QE(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,JE=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(tT)}:R0;function tT(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function C0(e,i){var a=i,u=0,h=0;do{var _=a.nextSibling;if(e.removeChild(a),_&&_.nodeType===8)if(a=_.data,a==="/$"){if(0<u&&8>u){a=u;var T=e.ownerDocument;if(a&1&&Ll(T.documentElement),a&2&&Ll(T.body),a&4)for(a=T.head,Ll(a),T=a.firstChild;T;){var L=T.nextSibling,V=T.nodeName;T[Wr]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=L}}if(h===0){e.removeChild(_),Hl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:u=a.charCodeAt(0)-48;else u=0;a=_}while(a);Hl(i)}function Nd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nd(a),Yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function eT(e,i,a,u){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(_=e.getAttribute("rel"),_==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(_!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(_=e.getAttribute("src"),(_!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===_)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function nT(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vi(e.nextSibling),e===null))return null;return e}function Pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function iT(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var u=function(){i(),a.removeEventListener("DOMContentLoaded",u)};a.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var zd=null;function D0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function U0(e,i,a){switch(i=gc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Yr(e)}var Di=new Map,L0=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cr=q.d;q.d={f:rT,r:aT,D:sT,C:oT,L:lT,m:uT,X:fT,S:cT,M:hT};function rT(){var e=Cr.f(),i=uc();return e||i}function aT(e){var i=hr(e);i!==null&&i.tag===5&&i.type==="form"?Jg(i):Cr.r(e)}var so=typeof document>"u"?null:document;function O0(e,i,a){var u=so;if(u&&typeof i=="string"&&i){var h=qe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),L0.has(h)||(L0.add(h),e={rel:e,crossOrigin:a,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),zn(i,"link",e),cn(i),u.head.appendChild(i)))}}function sT(e){Cr.D(e),O0("dns-prefetch",e,null)}function oT(e,i){Cr.C(e,i),O0("preconnect",e,i)}function lT(e,i,a){Cr.L(e,i,a);var u=so;if(u&&e&&i){var h='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+qe(a.imageSizes)+'"]')):h+='[href="'+qe(e)+'"]';var _=h;switch(i){case"style":_=oo(e);break;case"script":_=lo(e)}Di.has(_)||(e=m({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Di.set(_,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ol(_))||i==="script"&&u.querySelector(Nl(_))||(i=u.createElement("link"),zn(i,"link",e),cn(i),u.head.appendChild(i)))}}function uT(e,i){Cr.m(e,i);var a=so;if(a&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+qe(u)+'"][href="'+qe(e)+'"]',_=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=lo(e)}if(!Di.has(_)&&(e=m({rel:"modulepreload",href:e},i),Di.set(_,e),a.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(_)))return}u=a.createElement("link"),zn(u,"link",e),cn(u),a.head.appendChild(u)}}}function cT(e,i,a){Cr.S(e,i,a);var u=so;if(u&&e){var h=jr(u).hoistableStyles,_=oo(e);i=i||"default";var T=h.get(_);if(!T){var L={loading:0,preload:null};if(T=u.querySelector(Ol(_)))L.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Di.get(_))&&Bd(e,a);var V=T=u.createElement("link");cn(V),zn(V,"link",e),V._p=new Promise(function(nt,ht){V.onload=nt,V.onerror=ht}),V.addEventListener("load",function(){L.loading|=1}),V.addEventListener("error",function(){L.loading|=2}),L.loading|=4,yc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:L},h.set(_,T)}}}function fT(e,i){Cr.X(e,i);var a=so;if(a&&e){var u=jr(a).hoistableScripts,h=lo(e),_=u.get(h);_||(_=a.querySelector(Nl(h)),_||(e=m({src:e,async:!0},i),(i=Di.get(h))&&Id(e,i),_=a.createElement("script"),cn(_),zn(_,"link",e),a.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function hT(e,i){Cr.M(e,i);var a=so;if(a&&e){var u=jr(a).hoistableScripts,h=lo(e),_=u.get(h);_||(_=a.querySelector(Nl(h)),_||(e=m({src:e,async:!0,type:"module"},i),(i=Di.get(h))&&Id(e,i),_=a.createElement("script"),cn(_),zn(_,"link",e),a.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function N0(e,i,a,u){var h=(h=St.current)?vc(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=oo(a.href),a=jr(h).hoistableStyles,u=a.get(i),u||(u={type:"style",instance:null,count:0,state:null},a.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=oo(a.href);var _=jr(h).hoistableStyles,T=_.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(e,T),(_=h.querySelector(Ol(e)))&&!_._p&&(T.instance=_,T.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),_||dT(h,e,a,T.state))),i&&u===null)throw Error(r(528,""));return T}if(i&&u!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(a),a=jr(h).hoistableScripts,u=a.get(i),u||(u={type:"script",instance:null,count:0,state:null},a.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function oo(e){return'href="'+qe(e)+'"'}function Ol(e){return'link[rel="stylesheet"]['+e+"]"}function P0(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function dT(e,i,a,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),zn(i,"link",a),cn(i),e.head.appendChild(i))}function lo(e){return'[src="'+qe(e)+'"]'}function Nl(e){return"script[async]"+e}function z0(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+qe(a.href)+'"]');if(u)return i.instance=u,cn(u),u;var h=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),cn(u),zn(u,"style",h),yc(u,a.precedence,e),i.instance=u;case"stylesheet":h=oo(a.href);var _=e.querySelector(Ol(h));if(_)return i.state.loading|=4,i.instance=_,cn(_),_;u=P0(a),(h=Di.get(h))&&Bd(u,h),_=(e.ownerDocument||e).createElement("link"),cn(_);var T=_;return T._p=new Promise(function(L,V){T.onload=L,T.onerror=V}),zn(_,"link",u),i.state.loading|=4,yc(_,a.precedence,e),i.instance=_;case"script":return _=lo(a.src),(h=e.querySelector(Nl(_)))?(i.instance=h,cn(h),h):(u=a,(h=Di.get(_))&&(u=m({},a),Id(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),cn(h),zn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,yc(u,a.precedence,e));return i.instance}function yc(e,i,a){for(var u=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,_=h,T=0;T<u.length;T++){var L=u[T];if(L.dataset.precedence===i)_=L;else if(_!==h)break}_?_.parentNode.insertBefore(e,_.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Bd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var xc=null;function B0(e,i,a){if(xc===null){var u=new Map,h=xc=new Map;h.set(a,u)}else h=xc,u=h.get(a),u||(u=new Map,h.set(a,u));if(u.has(e))return u;for(u.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var _=a[h];if(!(_[Wr]||_[gn]||e==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=e+T;var L=u.get(T);L?L.push(_):u.set(T,[_])}}return u}function I0(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function pT(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function F0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Pl=null;function mT(){}function _T(e,i,a){if(Pl===null)throw Error(r(475));var u=Pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(a.href),_=e.querySelector(Ol(h));if(_){e=_._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=Sc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=_,cn(_);return}_=e.ownerDocument||e,a=P0(a),(h=Di.get(h))&&Bd(a,h),_=_.createElement("link"),cn(_);var T=_;T._p=new Promise(function(L,V){T.onload=L,T.onerror=V}),zn(_,"link",a),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Sc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function gT(){if(Pl===null)throw Error(r(475));var e=Pl;return e.stylesheets&&e.count===0&&Fd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Fd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Fd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,i.forEach(vT,e),Mc=null,Sc.call(e))}function vT(e,i){if(!(i.state.loading&4)){var a=Mc.get(e);if(a)var u=a.get(null);else{a=new Map,Mc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),u=T)}u&&a.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),_=a.get(T)||u,_===u&&a.set(null,h),a.set(T,h),this.count++,u=Sc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),_?_.parentNode.insertBefore(h,_.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var zl={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function yT(e,i,a,u,h,_,T,L){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.incompleteTransitions=new Map}function H0(e,i,a,u,h,_,T,L,V,nt,ht,vt){return e=new yT(e,i,a,T,L,V,nt,vt),i=1,_===!0&&(i|=24),_=ci(3,null,null,i),e.current=_,_.stateNode=e,i=xh(),i.refCount++,e.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:a,cache:i},Th(_),e}function G0(e){return e?(e=Fs,e):Fs}function V0(e,i,a,u,h,_){h=G0(h),u.context===null?u.context=h:u.pendingContext=h,u=$r(i),u.payload={element:a},_=_===void 0?null:_,_!==null&&(u.callback=_),a=ta(e,u,i),a!==null&&(mi(a,e,i),hl(a,e,i))}function k0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Hd(e,i){k0(e,i),(e=e.alternate)&&k0(e,i)}function X0(e){if(e.tag===13){var i=Is(e,67108864);i!==null&&mi(i,e,67108864),Hd(e,67108864)}}var Ec=!0;function xT(e,i,a,u){var h=H.T;H.T=null;var _=q.p;try{q.p=2,Gd(e,i,a,u)}finally{q.p=_,H.T=h}}function ST(e,i,a,u){var h=H.T;H.T=null;var _=q.p;try{q.p=8,Gd(e,i,a,u)}finally{q.p=_,H.T=h}}function Gd(e,i,a,u){if(Ec){var h=Vd(u);if(h===null)wd(e,i,u,Tc,a),W0(e,u);else if(ET(h,e,i,a,u))u.stopPropagation();else if(W0(e,u),i&4&&-1<MT.indexOf(e)){for(;h!==null;){var _=hr(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Yt(_.pendingLanes);if(T!==0){var L=_;for(L.pendingLanes|=2,L.entangledLanes|=2;T;){var V=1<<31-Pt(T);L.entanglements[1]|=V,T&=~V}nr(_),(Ne&6)===0&&(oc=de()+500,Cl(0))}}break;case 13:L=Is(_,2),L!==null&&mi(L,_,2),uc(),Hd(_,2)}if(_=Vd(u),_===null&&wd(e,i,u,Tc,a),_===h)break;h=_}h!==null&&u.stopPropagation()}else wd(e,i,u,null,a)}}function Vd(e){return e=Yf(e),kd(e)}var Tc=null;function kd(e){if(Tc=null,e=fr(e),e!==null){var i=l(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=c(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Tc=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ge:return 2;case Zt:return 8;case ae:case an:return 32;case G:return 268435456;default:return 32}default:return 32}}var Xd=!1,da=null,pa=null,ma=null,Bl=new Map,Il=new Map,_a=[],MT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(e,i){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":Bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Fl(e,i,a,u,h,_){return e===null||e.nativeEvent!==_?(e={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[h]},i!==null&&(i=hr(i),i!==null&&X0(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function ET(e,i,a,u,h){switch(i){case"focusin":return da=Fl(da,e,i,a,u,h),!0;case"dragenter":return pa=Fl(pa,e,i,a,u,h),!0;case"mouseover":return ma=Fl(ma,e,i,a,u,h),!0;case"pointerover":var _=h.pointerId;return Bl.set(_,Fl(Bl.get(_)||null,e,i,a,u,h)),!0;case"gotpointercapture":return _=h.pointerId,Il.set(_,Fl(Il.get(_)||null,e,i,a,u,h)),!0}return!1}function Y0(e){var i=fr(e.target);if(i!==null){var a=l(i);if(a!==null){if(i=a.tag,i===13){if(i=c(a),i!==null){e.blockedOn=i,li(e.priority,function(){if(a.tag===13){var u=pi();u=ie(u);var h=Is(a,u);h!==null&&mi(h,a,u),Hd(a,u)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var u=new a.constructor(a.type,a);Wf=u,a.target.dispatchEvent(u),Wf=null}else return i=hr(a),i!==null&&X0(i),e.blockedOn=a,!1;i.shift()}return!0}function j0(e,i,a){bc(e)&&a.delete(i)}function TT(){Xd=!1,da!==null&&bc(da)&&(da=null),pa!==null&&bc(pa)&&(pa=null),ma!==null&&bc(ma)&&(ma=null),Bl.forEach(j0),Il.forEach(j0)}function Ac(e,i){e.blockedOn===i&&(e.blockedOn=null,Xd||(Xd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TT)))}var Rc=null;function Z0(e){Rc!==e&&(Rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var a=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(kd(u||a)===null)continue;break}var _=hr(a);_!==null&&(e.splice(i,3),i-=3,kh(_,{pending:!0,data:h,method:a.method,action:u},u,h))}}))}function Hl(e){function i(V){return Ac(V,e)}da!==null&&Ac(da,e),pa!==null&&Ac(pa,e),ma!==null&&Ac(ma,e),Bl.forEach(i),Il.forEach(i);for(var a=0;a<_a.length;a++){var u=_a[a];u.blockedOn===e&&(u.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)Y0(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(u=0;u<a.length;u+=3){var h=a[u],_=a[u+1],T=h[Ln]||null;if(typeof _=="function")T||Z0(a);else if(T){var L=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[Ln]||null)L=T.formAction;else if(kd(h)!==null)continue}else L=T.action;typeof L=="function"?a[u+1]=L:(a.splice(u,3),u-=3),Z0(a)}}}function qd(e){this._internalRoot=e}wc.prototype.render=qd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,u=pi();V0(a,u,e,i,null,null)},wc.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;V0(e.current,2,null,e,null,null),uc(),i[Zn]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Te();e={blockedOn:null,target:e,priority:i};for(var a=0;a<_a.length&&i!==0&&i<_a[a].priority;a++);_a.splice(a,0,e),a===0&&Y0(e)}};var K0=t.version;if(K0!=="19.1.0")throw Error(r(527,K0,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var bT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{pt=Cc.inject(bT),_t=Cc}catch{}}return Vl.createRoot=function(e,i){if(!s(e))throw Error(r(299));var a=!1,u="",h=hv,_=dv,T=pv,L=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(L=i.unstable_transitionCallbacks)),i=H0(e,1,!1,null,null,a,u,h,_,T,L,null),e[Zn]=i.current,Rd(e),new qd(i)},Vl.hydrateRoot=function(e,i,a){if(!s(e))throw Error(r(299));var u=!1,h="",_=hv,T=dv,L=pv,V=null,nt=null;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(_=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(L=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(nt=a.formState)),i=H0(e,1,!0,i,a??null,u,h,_,T,L,V,nt),i.context=G0(null),a=i.current,u=pi(),u=ie(u),h=$r(u),h.callback=null,ta(a,h,u),a=u,i.current.lanes=a,Bt(i,a),nr(i),e[Zn]=i.current,Rd(e),new wc(i)},Vl.version="19.1.0",Vl}var sy;function NT(){if(sy)return jd.exports;sy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jd.exports=OT(),jd.exports}var PT=NT();function Br(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function kx(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},Wm,Bn,Ke,Ni=1e8,Xe=1/Ni,Vp=Math.PI*2,zT=Vp/4,BT=0,Xx=Math.sqrt,IT=Math.cos,FT=Math.sin,Dn=function(t){return typeof t=="string"},rn=function(t){return typeof t=="function"},Vr=function(t){return typeof t=="number"},Ym=function(t){return typeof t>"u"},ur=function(t){return typeof t=="object"},ei=function(t){return t!==!1},jm=function(){return typeof window<"u"},Uc=function(t){return rn(t)||Dn(t)},qx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,kp=/(?:-?\.?\d|\.)+/gi,Wx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yx=/[+-]=-?[.\d]+/,jx=/[^,'"\[\]\s]+/gi,HT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,ir,Xp,Zm,Mi={},bf={},Zx,Kx=function(t){return(bf=zo(t,Mi))&&oi},Km=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},nu=function(t,n){return!n&&console.warn(t)},Qx=function(t,n){return t&&(Mi[t]=n)&&bf&&(bf[t]=n)||Mi},iu=function(){return 0},GT={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},VT={suppressEvents:!0},Qm={},Ua=[],qp={},Jx,vi={},$d={},oy=30,_f=[],Jm="",$m=function(t){var n=t[0],r,s;if(ur(n)||rn(n)||(t=[t]),!(r=(n._gsap||{}).harness)){for(s=_f.length;s--&&!_f[s].targetTest(n););r=_f[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new MS(t[s],r)))||t.splice(s,1);return t},Ss=function(t){return t._gsap||$m(Pi(t))[0]._gsap},$x=function(t,n,r){return(r=t[n])&&rn(r)?t[n]():Ym(r)&&t.getAttribute&&t.getAttribute(n)||r},ni=function(t,n){return(t=t.split(",")).forEach(n)||t},ln=function(t){return Math.round(t*1e5)/1e5||0},mn=function(t){return Math.round(t*1e7)/1e7||0},Co=function(t,n){var r=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),r==="+"?t+s:r==="-"?t-s:r==="*"?t*s:t/s},kT=function(t,n){for(var r=n.length,s=0;t.indexOf(n[s])<0&&++s<r;);return s<r},Af=function(){var t=Ua.length,n=Ua.slice(0),r,s;for(qp={},Ua.length=0,r=0;r<t;r++)s=n[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},t_=function(t){return!!(t._initted||t._startAt||t.add)},tS=function(t,n,r,s){Ua.length&&!Bn&&Af(),t.render(n,r,!!(Bn&&n<0&&t_(t))),Ua.length&&!Bn&&Af()},eS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(jx).length<2?n:Dn(t)?t.trim():t},nS=function(t){return t},Ei=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},XT=function(t){return function(n,r){for(var s in r)s in n||s==="duration"&&t||s==="ease"||(n[s]=r[s])}},zo=function(t,n){for(var r in n)t[r]=n[r];return t},ly=function o(t,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=ur(n[r])?o(t[r]||(t[r]={}),n[r]):n[r]);return t},Rf=function(t,n){var r={},s;for(s in t)s in n||(r[s]=t[s]);return r},$l=function(t){var n=t.parent||Je,r=t.keyframes?XT(qn(t.keyframes)):Ei;if(ei(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},qT=function(t,n){for(var r=t.length,s=r===n.length;s&&r--&&t[r]===n[r];);return r<0},iS=function(t,n,r,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[r],t[r]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},zf=function(t,n,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[r]===n&&(t[r]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Pa=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ms=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},WT=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Wp=function(t,n,r,s){return t._startAt&&(Bn?t._startAt.revert(mf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},YT=function o(t){return!t||t._ts&&o(t.parent)},uy=function(t){return t._repeat?Bo(t._tTime,t=t.duration()+t._rDelay)*t:0},Bo=function(t,n){var r=Math.floor(t=mn(t/n));return t&&r===t?r-1:r},wf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Bf=function(t){return t._end=mn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Xe)||0))},If=function(t,n){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=mn(r._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Bf(t),r._dirty||Ms(r,t)),t},rS=function(t,n){var r;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(r=wf(t.rawTime(),n),(!n._dur||du(0,n.totalDuration(),r)-n._tTime>Xe)&&n.render(r,!0)),Ms(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-Xe}},ar=function(t,n,r,s){return n.parent&&Pa(n),n._start=mn((Vr(r)?r:r||t!==Je?Li(t,r,n):t._time)+n._delay),n._end=mn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),iS(t,n,"_first","_last",t._sort?"_start":0),Yp(n)||(t._recent=n),s||rS(t,n),t._ts<0&&If(t,t._tTime),t},aS=function(t,n){return(Mi.ScrollTrigger||Km("scrollTrigger",n))&&Mi.ScrollTrigger.create(n,t)},sS=function(t,n,r,s,l){if(n_(t,n,l),!t._initted)return 1;if(!r&&t._pt&&!Bn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jx!==yi.frame)return Ua.push(t),t._lazy=[l,s],1},jT=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Yp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},ZT=function(t,n,r,s){var l=t.ratio,c=n<0||!n&&(!t._start&&jT(t)&&!(!t._initted&&Yp(t))||(t._ts<0||t._dp._ts<0)&&!Yp(t))?0:1,f=t._rDelay,d=0,p,m,g;if(f&&t._repeat&&(d=du(0,t._tDur,n),m=Bo(d,f),t._yoyo&&m&1&&(c=1-c),m!==Bo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Bn||s||t._zTime===Xe||!n&&t._zTime){if(!t._initted&&sS(t,n,s,r,d))return;for(g=t._zTime,t._zTime=n||(r?Xe:0),r||(r=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;n<0&&Wp(t,n,r,!0),t._onUpdate&&!r&&xi(t,"onUpdate"),d&&t._repeat&&!r&&t.parent&&xi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Pa(t,1),!r&&!Bn&&(xi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},KT=function(t,n,r){var s;if(r>n)for(s=t._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Io=function(t,n,r,s){var l=t._repeat,c=mn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:mn(c*(l+1)+t._rDelay*l):c,f>0&&!s&&If(t,t._tTime=t._tDur*f),t.parent&&Bf(t),r||Ms(t.parent,t),t},cy=function(t){return t instanceof jn?Ms(t):Io(t,t._dur)},QT={_start:0,endTime:iu,totalDuration:iu},Li=function o(t,n,r){var s=t.labels,l=t._recent||QT,c=t.duration()>=Ni?l.endTime(!1):t._dur,f,d,p;return Dn(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),p=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(p?(f<0?l:r).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),p&&r&&(d=d/100*(qn(r)?r[0]:r).totalDuration()),f>1?o(t,n.substr(0,f-1),r)+d:c+d)):n==null?c:+n},tu=function(t,n,r){var s=Vr(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,d;if(s&&(c.duration=n[1]),c.parent=r,t){for(f=c,d=r;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ei(d.vars.inherit)&&d.parent;c.immediateRender=ei(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new pn(n[0],c,n[l+1])},Fa=function(t,n){return t||t===0?n(t):n},du=function(t,n,r){return r<t?t:r>n?n:r},Xn=function(t,n){return!Dn(t)||!(n=HT.exec(t))?"":n[1]},JT=function(t,n,r){return Fa(r,function(s){return du(t,n,s)})},jp=[].slice,oS=function(t,n){return t&&ur(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ur(t[0]))&&!t.nodeType&&t!==ir},$T=function(t,n,r){return r===void 0&&(r=[]),t.forEach(function(s){var l;return Dn(s)&&!n||oS(s,1)?(l=r).push.apply(l,Pi(s)):r.push(s)})||r},Pi=function(t,n,r){return Ke&&!n&&Ke.selector?Ke.selector(t):Dn(t)&&!r&&(Xp||!Fo())?jp.call((n||Zm).querySelectorAll(t),0):qn(t)?$T(t,r):oS(t)?jp.call(t,0):t?[t]:[]},Zp=function(t){return t=Pi(t)[0]||nu("Invalid scope")||{},function(n){var r=t.current||t.nativeElement||t;return Pi(n,r.querySelectorAll?r:r===t?nu("Invalid scope")||Zm.createElement("div"):t)}},lS=function(t){return t.sort(function(){return .5-Math.random()})},uS=function(t){if(rn(t))return t;var n=ur(t)?t:{each:t},r=Es(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,p=n.axis,m=s,g=s;return Dn(s)?m=g={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(m=s[0],g=s[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,C,w,b,O,P,U,B,A;if(!S){if(A=n.grid==="auto"?0:(n.grid||[1,Ni])[1],!A){for(U=-Ni;U<(U=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(S=c[M]=[],x=d?Math.min(A,M)*m-.5:s%A,C=A===Ni?0:d?M*g/A-.5:s/A|0,U=0,B=Ni,P=0;P<M;P++)w=P%A-x,b=C-(P/A|0),S[P]=O=p?Math.abs(p==="y"?b:w):Xx(w*w+b*b),O>U&&(U=O),O<B&&(B=O);s==="random"&&lS(S),S.max=U-B,S.min=B,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(A>M?M-1:p?p==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Xn(n.amount||n.each)||0,r=r&&M<0?yS(r):r}return M=(S[v]-S.min)/S.max||0,mn(S.b+(r?r(M):M)*S.v)+S.u}},Kp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var s=mn(Math.round(parseFloat(r)/t)*t*n);return(s-s%1)/n+(Vr(r)?0:Xn(r))}},cS=function(t,n){var r=qn(t),s,l;return!r&&ur(t)&&(s=r=t.radius||Ni,t.values?(t=Pi(t.values),(l=!Vr(t[0]))&&(s*=s)):t=Kp(t.increment)),Fa(n,r?rn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=Ni,m=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-d,v=v*v+y*y):v=Math.abs(t[g]-f),v<p&&(p=v,m=g);return m=!s||p<=s?t[m]:c,l||m===c||Vr(c)?m:m+Xn(c)}:Kp(t))},fS=function(t,n,r,s){return Fa(qn(t)?!n:r===!0?!!(r=0):!s,function(){return qn(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(n-t+r*.99))/r)*r*s)/s})},tb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduce(function(l,c){return c(l)},s)}},eb=function(t,n){return function(r){return t(parseFloat(r))+(n||Xn(r))}},nb=function(t,n,r){return dS(t,n,0,1,r)},hS=function(t,n,r){return Fa(r,function(s){return t[~~n(s)]})},ib=function o(t,n,r){var s=n-t;return qn(t)?hS(t,o(0,t.length),n):Fa(r,function(l){return(s+(l-t)%s)%s+t})},rb=function o(t,n,r){var s=n-t,l=s*2;return qn(t)?hS(t,o(0,t.length-1),n):Fa(r,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},ru=function(t){for(var n=0,r="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?jx:kp),r+=t.substr(n,s-n)+fS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return r+t.substr(n,t.length-n)},dS=function(t,n,r,s,l){var c=n-t,f=s-r;return Fa(l,function(d){return r+((d-t)/c*f||0)})},ab=function o(t,n,r,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Dn(t),f={},d,p,m,g,v;if(r===!0&&(s=1)&&(r=null),c)t={p:t},n={p:n};else if(qn(t)&&!qn(n)){for(m=[],g=t.length,v=g-2,p=1;p<g;p++)m.push(o(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},r=n}else s||(t=zo(qn(t)?[]:{},t));if(!m){for(d in n)e_.call(f,t,d,"get",n[d]);l=function(E){return a_(E,f)||(c?t.p:t)}}}return Fa(r,l)},fy=function(t,n,r){var s=t.labels,l=Ni,c,f,d;for(c in s)f=s[c]-n,f<0==!!r&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},xi=function(t,n,r){var s=t.vars,l=s[n],c=Ke,f=t._ctx,d,p,m;if(l)return d=s[n+"Params"],p=s.callbackScope||t,r&&Ua.length&&Af(),f&&(Ke=f),m=d?l.apply(p,d):l.call(p),Ke=c,m},Kl=function(t){return Pa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Bn),t.progress()<1&&xi(t,"onInterrupt"),t},Ro,pS=[],mS=function(t){if(t)if(t=!t.name&&t.default||t,jm()||t.headless){var n=t.name,r=rn(t),s=n&&!r&&t.init?function(){this._props=[]}:t,l={init:iu,render:a_,add:e_,kill:Sb,modifier:xb,rawVars:0},c={targetTest:0,get:0,getSetter:r_,aliases:{},register:0};if(Fo(),t!==s){if(vi[n])return;Ei(s,Ei(Rf(t,l),c)),zo(s.prototype,zo(l,Rf(t,c))),vi[s.prop=n]=s,t.targetTest&&(_f.push(s),Qm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Qx(n,s),t.register&&t.register(oi,s,ii)}else pS.push(t)},ke=255,Ql={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},tp=function(t,n,r){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(r-n)*t*6:t<.5?r:t*3<2?n+(r-n)*(2/3-t)*6:n)*ke+.5|0},_S=function(t,n,r){var s=t?Vr(t)?[t>>16,t>>8&ke,t&ke]:0:Ql.black,l,c,f,d,p,m,g,v,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ql[t])s=Ql[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ke,s&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(kp),!n)d=+s[0]%360/360,p=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(p+1):m+p-m*p,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=tp(d+1/3,l,c),s[1]=tp(d,l,c),s[2]=tp(d-1/3,l,c);else if(~t.indexOf("="))return s=t.match(Wx),r&&s.length<4&&(s[3]=1),s}else s=t.match(kp)||Ql.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/ke,c=s[1]/ke,f=s[2]/ke,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?d=p=0:(y=g-v,p=m>.5?y/(2-g-v):y/(g+v),d=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(m*100+.5)),r&&s.length<4&&(s[3]=1),s},gS=function(t){var n=[],r=[],s=-1;return t.split(La).forEach(function(l){var c=l.match(Ao)||[];n.push.apply(n,c),r.push(s+=c.length+1)}),n.c=r,n},hy=function(t,n,r){var s="",l=(t+s).match(La),c=n?"hsla(":"rgba(",f=0,d,p,m,g;if(!l)return t;if(l=l.map(function(v){return(v=_S(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),r&&(m=gS(t),d=r.c,d.join(s)!==m.c.join(s)))for(p=t.replace(La,"1").split(Ao),g=p.length-1;f<g;f++)s+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:r).shift());if(!p)for(p=t.split(La),g=p.length-1;f<g;f++)s+=p[f]+l[f];return s+p[g]},La=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ql)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),sb=/hsl[a]?\(/,vS=function(t){var n=t.join(" "),r;if(La.lastIndex=0,La.test(n))return r=sb.test(n),t[1]=hy(t[1],r),t[0]=hy(t[0],r,gS(t[1])),!0},au,yi=function(){var o=Date.now,t=500,n=33,r=o(),s=r,l=1e3/240,c=l,f=[],d,p,m,g,v,y,E=function M(S){var x=o()-s,C=S===!0,w,b,O,P;if((x>t||x<0)&&(r+=x-n),s+=x,O=s-r,w=O-c,(w>0||C)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=w+(w>=l?4:l-w),b=1),C||(d=p(M)),b)for(y=0;y<f.length;y++)f[y](O,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Zx&&(!Xp&&jm()&&(ir=Xp=window,Zm=ir.document||{},Mi.gsap=oi,(ir.gsapVersions||(ir.gsapVersions=[])).push(oi.version),Kx(bf||ir.GreenSockGlobals||!ir.gsap&&ir||{}),pS.forEach(mS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=m||function(S){return setTimeout(S,c-g.time*1e3+1|0)},au=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),au=0,p=iu},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,C){var w=x?function(b,O,P,U){S(b,O,P,U),g.remove(w)}:S;return g.remove(S),f[C?"unshift":"push"](w),Fo(),w},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g}(),Fo=function(){return!au&&yi.wake()},xe={},ob=/^[\d.\-M][\d.\-,\s]/,lb=/["']/g,ub=function(t){for(var n={},r=t.substr(1,t.length-3).split(":"),s=r[0],l=1,c=r.length,f,d,p;l<c;l++)d=r[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),n[s]=isNaN(p)?p.replace(lb,"").trim():+p,s=d.substr(f+1).trim();return n},cb=function(t){var n=t.indexOf("(")+1,r=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<r?t.indexOf(")",r+1):r)},fb=function(t){var n=(t+"").split("("),r=xe[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[ub(n[1])]:cb(t).split(",").map(eS)):xe._CE&&ob.test(t)?xe._CE("",t):r},yS=function(t){return function(n){return 1-t(1-n)}},xS=function o(t,n){for(var r=t._first,s;r;)r instanceof jn?o(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?o(r.timeline,n):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=n)),r=r._next},Es=function(t,n){return t&&(rn(t)?t:xe[t]||fb(t))||n},Cs=function(t,n,r,s){r===void 0&&(r=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var l={easeIn:n,easeOut:r,easeInOut:s},c;return ni(t,function(f){xe[f]=Mi[f]=l,xe[c=f.toLowerCase()]=r;for(var d in l)xe[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=xe[f+"."+d]=l[d]}),l},SS=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},ep=function o(t,n,r){var s=n>=1?n:1,l=(r||(t?.3:.45))/(n<1?n:1),c=l/Vp*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*FT((m-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:SS(f);return l=Vp/l,d.config=function(p,m){return o(t,p,m)},d},np=function o(t,n){n===void 0&&(n=1.70158);var r=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?r:t==="in"?function(l){return 1-r(1-l)}:SS(r);return s.config=function(l){return o(t,l)},s};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Cs(o+",Power"+(n-1),t?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Cs("Elastic",ep("in"),ep("out"),ep());(function(o,t){var n=1/t,r=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<r?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Cs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Cs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Cs("Circ",function(o){return-(Xx(1-o*o)-1)});Cs("Sine",function(o){return o===1?1:-IT(o*zT)+1});Cs("Back",np("in"),np("out"),np());xe.SteppedEase=xe.steps=Mi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var r=1/t,s=t+(n?0:1),l=n?1:0,c=1-Xe;return function(f){return((s*du(0,c,f)|0)+l)*r}}};Po.ease=xe["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Jm+=o+","+o+"Params,"});var MS=function(t,n){this.id=BT++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:$x,this.set=n?n.getSetter:r_},su=function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Io(this,+n.duration,1,1),this.data=n.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),au||yi.wake()}var t=o.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,s){if(Fo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(If(this,r),!l._dp||l.parent||rS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Xe||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),tS(this,r,s)),this},t.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+uy(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},t.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+uy(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*l,s):this._repeat?Bo(this._tTime,l)+1:1},t.timeScale=function(r,s){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===r)return this;var l=this.parent&&this._ts?wf(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-Xe?0:this._rts,this.totalTime(du(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Bf(this),WT(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ar(s,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(ei(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wf(s.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=VT);var s=Bn;return Bn=r,t_(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Bn=s,this},t.globalTime=function(r){for(var s=this,l=arguments.length?r:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(r):l},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,cy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,cy(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,s){return this.totalTime(Li(this,r),ei(s))},t.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,ei(s)),this._dur||(this._zTime=-Xe),this},t.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},t.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-Xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},t.isActive=function(){var r=this.parent||this._dp,s=this._start,l;return!!(!r||this._ts&&this._initted&&r.isActive()&&(l=r.rawTime(!0))>=s&&l<this.endTime(!0)-Xe)},t.eventCallback=function(r,s,l){var c=this.vars;return arguments.length>1?(s?(c[r]=s,l&&(c[r+"Params"]=l),r==="onUpdate"&&(this._onUpdate=s)):delete c[r],this):c[r]},t.then=function(r){var s=this;return new Promise(function(l){var c=rn(r)?r:nS,f=function(){var p=s.then;s.then=null,rn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),l(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Kl(this)},o}();Ei(su.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var jn=function(o){kx(t,o);function t(r,s){var l;return r===void 0&&(r={}),l=o.call(this,r)||this,l.labels={},l.smoothChildTiming=!!r.smoothChildTiming,l.autoRemoveChildren=!!r.autoRemoveChildren,l._sort=ei(r.sortChildren),Je&&ar(r.parent||Je,Br(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),r.scrollTrigger&&aS(Br(l),r.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return tu(0,arguments,this),this},n.from=function(s,l,c){return tu(1,arguments,this),this},n.fromTo=function(s,l,c,f){return tu(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,$l(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new pn(s,l,Li(this,c),1),this},n.call=function(s,l,c){return ar(this,pn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,d,p,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=m,c.parent=this,new pn(s,c,Li(this,d)),this},n.staggerFrom=function(s,l,c,f,d,p,m){return c.runBackwards=1,$l(c).immediateRender=ei(c.immediateRender),this.staggerTo(s,l,c,f,d,p,m)},n.staggerFromTo=function(s,l,c,f,d,p,m,g){return f.startAt=c,$l(f).immediateRender=ei(f.immediateRender),this.staggerTo(s,l,f,d,p,m,g)},n.render=function(s,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=s<=0?0:mn(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,E,M,S,x,C,w,b,O,P,U;if(this!==Je&&m>d&&s>=0&&(m=d),m!==this._tTime||c||g){if(f!==this._time&&p&&(m+=this._time-f,s+=this._time-f),v=m,b=this._start,w=this._ts,x=!w,g&&(p||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=mn(m%S),m===d?(M=this._repeat,v=p):(O=mn(m/S),M=~~O,M&&M===O&&(v=p,M--),v>p&&(v=p)),O=Bo(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),P&&M&1&&(v=p-v,U=1),M!==O&&!this._lock){var B=P&&O&1,A=B===(P&&M&1);if(M<O&&(B=!B),f=B?0:m%p?p:m,this._lock=1,this.render(f||(U?0:mn(M*S)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,A&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;xS(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=KT(this,mn(f),mn(v)),C&&(m-=v-(v=C._start))),this._tTime=m,this._time=v,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!O&&(xi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){C=0,E&&(m+=this._zTime=-Xe);break}}y=E}else{y=this._last;for(var R=s<0?s:v;y;){if(E=y._prev,(y._act||R<=y._end)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,l,c||Bn&&t_(y)),v!==this._time||!this._ts&&!x){C=0,E&&(m+=this._zTime=R?-Xe:Xe);break}}y=E}}if(C&&!l&&(this.pause(),C.render(v>=f?0:-Xe)._zTime=v>=f?1:-1,this._ts))return this._start=b,Bf(this),this.render(s,l,c);this._onUpdate&&!l&&xi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Pa(this,1),!l&&!(s<0&&!f)&&(m||f||!d)&&(xi(this,m===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Vr(l)||(l=Li(this,l,s)),!(s instanceof su)){if(qn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Dn(s))return this.addLabel(s,l);if(rn(s))s=pn.delayedCall(0,s);else return this}return this!==s?ar(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ni);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof pn?l&&d.push(p):(c&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Dn(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&zf(this,s),s===this._recent&&(this._recent=this._last),Ms(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mn(yi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Li(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=pn.delayedCall(0,l||iu,c);return f.data="isPause",this._hasPause=1,ar(this,f,Li(this,s))},n.removePause=function(s){var l=this._first;for(s=Li(this,s);l;)l._start===s&&l.data==="isPause"&&Pa(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)Ra!==f[d]&&f[d].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Pi(s),d=this._first,p=Vr(l),m;d;)d instanceof pn?kT(d._targets,f)&&(p?(!Ra||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Li(c,s),d=l,p=d.startAt,m=d.onStart,g=d.onStartParams,v=d.immediateRender,y,E=pn.to(c,Ei({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||Xe,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==S&&Io(E,S,0,1).render(E._time,!0,!0),y=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Ei({startAt:{time:Li(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),fy(this,Li(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),fy(this,Li(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Xe)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=s);return Ms(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ms(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,d=Ni,p,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ar(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Io(c,c===Je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Je._ts&&(tS(Je,wf(s,Je)),Jx=yi.frame),yi.frame>=oy){oy+=Si.autoSleep||120;var l=Je._first;if((!l||!l._ts)&&Si.autoSleep&&yi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||yi.sleep()}}},t}(su);Ei(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hb=function(t,n,r,s,l,c,f){var d=new ii(this._pt,t,n,0,1,wS,null,l),p=0,m=0,g,v,y,E,M,S,x,C;for(d.b=r,d.e=s,r+="",s+="",(x=~s.indexOf("random("))&&(s=ru(s)),c&&(C=[r,s],c(C,t,n),r=C[0],s=C[1]),v=r.match(Jd)||[];g=Jd.exec(s);)E=g[0],M=s.substring(p,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Co(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},p=Jd.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=f,(Yx.test(s)||x)&&(d.e=0),this._pt=d,d},e_=function(t,n,r,s,l,c,f,d,p,m){rn(s)&&(s=s(l||0,t,c));var g=t[n],v=r!=="get"?r:rn(g)?p?t[n.indexOf("set")||!rn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](p):t[n]():g,y=rn(g)?p?gb:AS:i_,E;if(Dn(s)&&(~s.indexOf("random(")&&(s=ru(s)),s.charAt(1)==="="&&(E=Co(v,s)+(Xn(v)||0),(E||E===0)&&(s=E))),!m||v!==s||Qp)return!isNaN(v*s)&&s!==""?(E=new ii(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?yb:RS,0,y),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&Km(n,s),hb.call(this,t,n,v,s,y,d||Si.stringFilter,p))},db=function(t,n,r,s,l){if(rn(t)&&(t=eu(t,l,n,r,s)),!ur(t)||t.style&&t.nodeType||qn(t)||qx(t))return Dn(t)?eu(t,l,n,r,s):t;var c={},f;for(f in t)c[f]=eu(t[f],l,n,r,s);return c},ES=function(t,n,r,s,l,c){var f,d,p,m;if(vi[t]&&(f=new vi[t]).init(l,f.rawVars?n[t]:db(n[t],s,l,c,r),r,s,c)!==!1&&(r._pt=d=new ii(r._pt,l,t,0,1,f.render,f,0,f.priority),r!==Ro))for(p=r._ptLookup[r._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=d;return f},Ra,Qp,n_=function o(t,n,r){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,p=s.onUpdate,m=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,C=x&&x.data==="nested"?x.vars.targets:S,w=t._overwrite==="auto"&&!Wm,b=t.timeline,O,P,U,B,A,R,z,F,k,Z,at,H,q;if(b&&(!v||!l)&&(l="none"),t._ease=Es(l,Po.ease),t._yEase=g?yS(Es(g===!0?l:g,Po.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!b&&!!s.runBackwards,!b||v&&!s.stagger){if(F=S[0]?Ss(S[0]).harness:0,H=F&&s[F.prop],O=Rf(s,Qm),M&&(M._zTime<0&&M.progress(1),n<0&&m&&f&&!y?M.render(-1,!0):M.revert(m&&E?mf:GT),M._lazy=0),c){if(Pa(t._startAt=pn.set(S,Ei({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ei(d),startAt:null,delay:0,onUpdate:p&&function(){return xi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn||!f&&!y)&&t._startAt.revert(mf),f&&E&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(m&&E&&!M){if(n&&(f=!1),U=Ei({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ei(d),immediateRender:f,stagger:0,parent:x},O),H&&(U[F.prop]=H),Pa(t._startAt=pn.set(S,U)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn?t._startAt.revert(mf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Xe,Xe);else if(!n)return}for(t._pt=t._ptCache=0,d=E&&ei(d)||d&&!E,P=0;P<S.length;P++){if(A=S[P],z=A._gsap||$m(S)[P]._gsap,t._ptLookup[P]=Z={},qp[z.id]&&Ua.length&&Af(),at=C===S?P:C.indexOf(A),F&&(k=new F).init(A,H||O,t,at,C)!==!1&&(t._pt=B=new ii(t._pt,A,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){Z[j]=B}),k.priority&&(R=1)),!F||H)for(U in O)vi[U]&&(k=ES(U,O,t,at,A,C))?k.priority&&(R=1):Z[U]=B=e_.call(t,A,U,"get",O[U],at,C,0,s.stringFilter);t._op&&t._op[P]&&t.kill(A,t._op[P]),w&&t._pt&&(Ra=t,Je.killTweensOf(A,Z,t.globalTime(n)),q=!t.parent,Ra=0),t._pt&&d&&(qp[z.id]=1)}R&&CS(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!q,v&&n<=0&&b.render(Ni,!0,!0)},pb=function(t,n,r,s,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[n],m,g,v,y;if(!p)for(p=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(m=v[y][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return Qp=1,t.vars[n]="+=0",n_(t,f),Qp=0,d?nu(n+" not eligible for reset"):1;p.push(m)}for(y=p.length;y--;)g=p[y],m=g._pt||g,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=r-m.s,g.e&&(g.e=ln(r)+Xn(g.e)),g.b&&(g.b=m.s+Xn(g.b))},mb=function(t,n){var r=t[0]?Ss(t[0]).harness:0,s=r&&r.aliases,l,c,f,d;if(!s)return n;l=zo({},n);for(c in s)if(c in l)for(d=s[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},_b=function(t,n,r,s){var l=n.ease||s||"power1.inOut",c,f;if(qn(n))f=r[t]||(r[t]=[]),n.forEach(function(d,p){return f.push({t:p/(n.length-1)*100,v:d,e:l})});else for(c in n)f=r[c]||(r[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},eu=function(t,n,r,s,l){return rn(t)?t.call(n,r,s,l):Dn(t)&&~t.indexOf("random(")?ru(t):t},TS=Jm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bS={};ni(TS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return bS[o]=1});var pn=function(o){kx(t,o);function t(r,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:$l(s))||this;var d=f.vars,p=d.duration,m=d.delay,g=d.immediateRender,v=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,C=s.parent||Je,w=(qn(r)||qx(r)?Vr(r[0]):"length"in s)?[r]:Pi(r),b,O,P,U,B,A,R,z;if(f._targets=w.length?$m(w):nu("GSAP target "+r+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||Uc(p)||Uc(m)){if(s=f.vars,b=f.timeline=new jn({data:"nested",defaults:M||{},targets:C&&C.data==="nested"?C.vars.targets:w}),b.kill(),b.parent=b._dp=Br(f),b._start=0,v||Uc(p)||Uc(m)){if(U=w.length,R=v&&uS(v),ur(v))for(B in v)~TS.indexOf(B)&&(z||(z={}),z[B]=v[B]);for(O=0;O<U;O++)P=Rf(s,bS),P.stagger=0,x&&(P.yoyoEase=x),z&&zo(P,z),A=w[O],P.duration=+eu(p,Br(f),O,A,w),P.delay=(+eu(m,Br(f),O,A,w)||0)-f._delay,!v&&U===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),b.to(A,P,R?R(O,A,w):0),b._ease=xe.none;b.duration()?p=m=0:f.timeline=0}else if(E){$l(Ei(b.vars.defaults,{ease:"none"})),b._ease=Es(E.ease||s.ease||"none");var F=0,k,Z,at;if(qn(E))E.forEach(function(H){return b.to(w,H,">")}),b.duration();else{P={};for(B in E)B==="ease"||B==="easeEach"||_b(B,E[B],P,E.easeEach);for(B in P)for(k=P[B].sort(function(H,q){return H.t-q.t}),F=0,O=0;O<k.length;O++)Z=k[O],at={ease:Z.e,duration:(Z.t-(O?k[O-1].t:0))/100*p},at[B]=Z.v,b.to(w,at,F),F+=at.duration;b.duration()<p&&b.to({},{duration:p-b.duration()})}}p||f.duration(p=b.duration())}else f.timeline=0;return y===!0&&!Wm&&(Ra=Br(f),Je.killTweensOf(w),Ra=0),ar(C,Br(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!p&&!E&&f._start===mn(C._time)&&ei(g)&&YT(Br(f))&&C.data!=="nested")&&(f._tTime=-Xe,f.render(Math.max(0,-m)||0)),S&&aS(Br(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,d=this._tDur,p=this._dur,m=s<0,g=s>d-Xe&&!m?d:s<Xe?0:s,v,y,E,M,S,x,C,w,b;if(!p)ZT(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,w=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=mn(g%M),g===d?(E=this._repeat,v=p):(S=mn(g/M),E=~~S,E&&E===S?(v=p,E--):v>p&&(v=p)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=p-v),S=Bo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(w&&this._yEase&&xS(w,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(mn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(sS(this,m?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(p!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(b||this._ease)(v/p),this._from&&(this.ratio=C=1-C),!f&&g&&!l&&!S&&(xi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(C,y.d),y=y._next;w&&w.render(s<0?s:w._dur*w._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Wp(this,s,l,c),xi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&xi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&Wp(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Pa(this,1),!l&&!(m&&!f)&&(g||f||x)&&(xi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,d){au||yi.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||n_(this,p),m=this._ease(p/this._dur),pb(this,s,l,c,f,m,p,d)?this.resetTo(s,l,c,f,1):(If(this,0),this.parent||iS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Ra&&Ra.vars.overwrite!==!0)._first||Kl(this),this.parent&&c!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?Pi(s):f,p=this._ptLookup,m=this._pt,g,v,y,E,M,S,x;if((!l||l==="all")&&qT(f,d))return l==="all"&&(this._pt=0),Kl(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},ni(l,function(C){return M[C]=1}),l=M),l=mb(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=p[x],l==="all"?(g[x]=l,E=v,y={}):(y=g[x]=g[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&zf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&m&&Kl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return tu(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return tu(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Je.killTweensOf(s,l,c)},t}(su);Ei(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(o){pn[o]=function(){var t=new jn,n=jp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var i_=function(t,n,r){return t[n]=r},AS=function(t,n,r){return t[n](r)},gb=function(t,n,r,s){return t[n](s.fp,r)},vb=function(t,n,r){return t.setAttribute(n,r)},r_=function(t,n){return rn(t[n])?AS:Ym(t[n])&&t.setAttribute?vb:i_},RS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},yb=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},wS=function(t,n){var r=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+s,r=r._next;s+=n.c}n.set(n.t,n.p,s,n)},a_=function(t,n){for(var r=n._pt;r;)r.r(t,r.d),r=r._next},xb=function(t,n,r,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,r),l=c},Sb=function(t){for(var n=this._pt,r,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?zf(this,n,"_pt"):n.dep||(r=1),n=s;return!r},Mb=function(t,n,r,s){s.mSet(t,n,s.m.call(s.tween,r,s.mt),s)},CS=function(t){for(var n=t._pt,r,s,l,c;n;){for(r=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=r}t._pt=l},ii=function(){function o(n,r,s,l,c,f,d,p,m){this.t=r,this.s=l,this.c=c,this.p=s,this.r=f||RS,this.d=d||this,this.set=p||i_,this.pr=m||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(r,s,l){this.mSet=this.mSet||this.set,this.set=Mb,this.m=r,this.mt=l,this.tween=s},o}();ni(Jm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Qm[o]=1});Mi.TweenMax=Mi.TweenLite=pn;Mi.TimelineLite=Mi.TimelineMax=jn;Je=new jn({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=vS;var Ts=[],gf={},Eb=[],dy=0,Tb=0,ip=function(t){return(gf[t]||Eb).map(function(n){return n()})},Jp=function(){var t=Date.now(),n=[];t-dy>2&&(ip("matchMediaInit"),Ts.forEach(function(r){var s=r.queries,l=r.conditions,c,f,d,p;for(f in s)c=ir.matchMedia(s[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(r.revert(),d&&n.push(r))}),ip("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(s){return r.add(null,s)})}),dy=t,ip("matchMedia"))},DS=function(){function o(n,r){this.selector=r&&Zp(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Tb++,n&&this.add(n)}var t=o.prototype;return t.add=function(r,s,l){rn(r)&&(l=s,s=r,r=rn);var c=this,f=function(){var p=Ke,m=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=Zp(l)),Ke=c,g=s.apply(c,arguments),rn(g)&&c._r.push(g),Ke=p,c.selector=m,c.isReverted=!1,g};return c.last=f,r===rn?f(c,function(d){return c.add(null,d)}):r?c[r]=f:f},t.ignore=function(r){var s=Ke;Ke=null,r(this),Ke=s},t.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof o?r.push.apply(r,s.getTweens()):s instanceof pn&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,s){var l=this;if(r?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(r)}),d=l.data.length;d--;)p=l.data[d],p instanceof jn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof pn)&&p.revert&&p.revert(r);l._r.forEach(function(m){return m(r,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ts.length;c--;)Ts[c].id===this.id&&Ts.splice(c,1)},t.revert=function(r){this.kill(r||{})},o}(),bb=function(){function o(n){this.contexts=[],this.scope=n,Ke&&Ke.data.push(this)}var t=o.prototype;return t.add=function(r,s,l){ur(r)||(r={matches:r});var c=new DS(0,l||this.scope),f=c.conditions={},d,p,m;Ke&&!c.selector&&(c.selector=Ke.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=r;for(p in r)p==="all"?m=1:(d=ir.matchMedia(r[p]),d&&(Ts.indexOf(c)<0&&Ts.push(c),(f[p]=d.matches)&&(m=1),d.addListener?d.addListener(Jp):d.addEventListener("change",Jp)));return m&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},o}(),Cf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(s){return mS(s)})},timeline:function(t){return new jn(t)},getTweensOf:function(t,n){return Je.getTweensOf(t,n)},getProperty:function(t,n,r,s){Dn(t)&&(t=Pi(t)[0]);var l=Ss(t||{}).get,c=r?nS:eS;return r==="native"&&(r=""),t&&(n?c((vi[n]&&vi[n].get||l)(t,n,r,s)):function(f,d,p){return c((vi[f]&&vi[f].get||l)(t,f,d,p))})},quickSetter:function(t,n,r){if(t=Pi(t),t.length>1){var s=t.map(function(m){return oi.quickSetter(m,n,r)}),l=s.length;return function(m){for(var g=l;g--;)s[g](m)}}t=t[0]||{};var c=vi[n],f=Ss(t),d=f.harness&&(f.harness.aliases||{})[n]||n,p=c?function(m){var g=new c;Ro._pt=0,g.init(t,r?m+r:m,Ro,0,[t]),g.render(1,g),Ro._pt&&a_(1,Ro)}:f.set(t,d);return c?p:function(m){return p(t,d,r?m+r:m,f,1)}},quickTo:function(t,n,r){var s,l=oi.to(t,Ei((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),r||{})),c=function(d,p,m){return l.resetTo(n,d,p,m)};return c.tween=l,c},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Es(t.ease,Po.ease)),ly(Po,t||{})},config:function(t){return ly(Si,t||{})},registerEffect:function(t){var n=t.name,r=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!vi[f]&&!Mi[f]&&nu(n+" effect requires "+f+" plugin.")}),$d[n]=function(f,d,p){return r(Pi(f),Ei(d||{},l),p)},c&&(jn.prototype[n]=function(f,d,p){return this.add($d[n](f,ur(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,n){xe[t]=Es(n)},parseEase:function(t,n){return arguments.length?Es(t,n):xe},getById:function(t){return Je.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var r=new jn(t),s,l;for(r.smoothChildTiming=ei(t.smoothChildTiming),Je.remove(r),r._dp=0,r._time=r._tTime=Je._time,s=Je._first;s;)l=s._next,(n||!(!s._dur&&s instanceof pn&&s.vars.onComplete===s._targets[0]))&&ar(r,s,s._start-s._delay),s=l;return ar(Je,r,0),r},context:function(t,n){return t?new DS(t,n):Ke},matchMedia:function(t){return new bb(t)},matchMediaRefresh:function(){return Ts.forEach(function(t){var n=t.conditions,r,s;for(s in n)n[s]&&(n[s]=!1,r=1);r&&t.revert()})||Jp()},addEventListener:function(t,n){var r=gf[t]||(gf[t]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(t,n){var r=gf[t],s=r&&r.indexOf(n);s>=0&&r.splice(s,1)},utils:{wrap:ib,wrapYoyo:rb,distribute:uS,random:fS,snap:cS,normalize:nb,getUnit:Xn,clamp:JT,splitColor:_S,toArray:Pi,selector:Zp,mapRange:dS,pipe:tb,unitize:eb,interpolate:ab,shuffle:lS},install:Kx,effects:$d,ticker:yi,updateRoot:jn.updateRoot,plugins:vi,globalTimeline:Je,core:{PropTween:ii,globals:Qx,Tween:pn,Timeline:jn,Animation:su,getCache:Ss,_removeLinkedListItem:zf,reverting:function(){return Bn},context:function(t){return t&&Ke&&(Ke.data.push(t),t._ctx=Ke),Ke},suppressOverwrites:function(t){return Wm=t}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Cf[o]=pn[o]});yi.add(jn.updateRoot);Ro=Cf.to({},{duration:0});var Ab=function(t,n){for(var r=t._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},Rb=function(t,n){var r=t._targets,s,l,c;for(s in n)for(l=r.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=Ab(c,s)),c&&c.modifier&&c.modifier(n[s],t,r[l],s))},rp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var d,p;if(Dn(l)&&(d={},ni(l,function(m){return d[m]=1}),l=d),n){d={};for(p in l)d[p]=n(l[p]);l=d}Rb(f,l)}}}},oi=Cf.registerPlugin({name:"attr",init:function(t,n,r,s,l){var c,f,d;this.tween=r;for(c in n)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,n){for(var r=n._pt;r;)Bn?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",headless:1,init:function(t,n){for(var r=n.length;r--;)this.add(t,r,t[r]||0,n[r],0,0,0,0,0,1)}},rp("roundProps",Kp),rp("modifiers"),rp("snap",cS))||Cf;pn.version=jn.version=oi.version="3.13.0";Zx=1;jm()&&Fo();xe.Power0;xe.Power1;xe.Power2;xe.Power3;xe.Power4;xe.Linear;xe.Quad;xe.Cubic;xe.Quart;xe.Quint;xe.Strong;xe.Elastic;xe.Back;xe.SteppedEase;xe.Bounce;xe.Sine;xe.Expo;xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var py,wa,Do,s_,vs,my,o_,wb=function(){return typeof window<"u"},kr={},ds=180/Math.PI,Uo=Math.PI/180,uo=Math.atan2,_y=1e8,l_=/([A-Z])/g,Cb=/(left|right|width|margin|padding|x)/i,Db=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$p=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Ub=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Lb=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Ob=function(t,n){var r=n.s+n.c*t;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},US=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},LS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Nb=function(t,n,r){return t.style[n]=r},Pb=function(t,n,r){return t.style.setProperty(n,r)},zb=function(t,n,r){return t._gsap[n]=r},Bb=function(t,n,r){return t._gsap.scaleX=t._gsap.scaleY=r},Ib=function(t,n,r,s,l){var c=t._gsap;c.scaleX=c.scaleY=r,c.renderTransform(l,c)},Fb=function(t,n,r,s,l){var c=t._gsap;c[n]=r,c.renderTransform(l,c)},tn="transform",ri=tn+"Origin",Hb=function o(t,n){var r=this,s=this.target,l=s.style,c=s._gsap;if(t in kr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=sr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return r.tfm[f]=Ir(s,f)}):this.tfm[t]=c.x?c[t]:Ir(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return sr.transform.split(",").forEach(function(f){return o.call(r,f,n)});if(this.props.indexOf(tn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=tn}(l||n)&&this.props.push(t,n,l[t])},OS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Gb=function(){var t=this.props,n=this.target,r=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?r[t[l]]=t[l+2]:r.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(l_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=o_(),(!l||!l.isStart)&&!r[tn]&&(OS(r),s.zOrigin&&r[ri]&&(r[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},NS=function(t,n){var r={target:t,props:[],revert:Gb,save:Hb};return t._gsap||oi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return r.save(s)}),r},PS,tm=function(t,n){var r=wa.createElementNS?wa.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):wa.createElement(t);return r&&r.style?r:wa.createElement(t)},zi=function o(t,n,r){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(l_,"-$1").toLowerCase())||s.getPropertyValue(n)||!r&&o(t,Ho(n)||n,1)||""},gy="O,Moz,ms,Ms,Webkit".split(","),Ho=function(t,n,r){var s=n||vs,l=s.style,c=5;if(t in l&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(gy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?gy[c]:"")+t},em=function(){wb()&&window.document&&(py=window,wa=py.document,Do=wa.documentElement,vs=tm("div")||{style:{}},tm("div"),tn=Ho(tn),ri=tn+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",PS=!!Ho("perspective"),o_=oi.core.reverting,s_=1)},vy=function(t){var n=t.ownerSVGElement,r=tm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",r.appendChild(s),Do.appendChild(r);try{l=s.getBBox()}catch{}return r.removeChild(s),Do.removeChild(r),l},yy=function(t,n){for(var r=n.length;r--;)if(t.hasAttribute(n[r]))return t.getAttribute(n[r])},zS=function(t){var n,r;try{n=t.getBBox()}catch{n=vy(t),r=1}return n&&(n.width||n.height)||r||(n=vy(t)),n&&!n.width&&!n.x&&!n.y?{x:+yy(t,["x","cx","x1"])||0,y:+yy(t,["y","cy","y1"])||0,width:0,height:0}:n},BS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zS(t))},Rs=function(t,n){if(n){var r=t.style,s;n in kr&&n!==ri&&(n=tn),r.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(s==="--"?n:n.replace(l_,"-$1").toLowerCase())):r.removeAttribute(n)}},Ca=function(t,n,r,s,l,c){var f=new ii(t._pt,n,r,0,1,c?LS:US);return t._pt=f,f.b=s,f.e=l,t._props.push(r),f},xy={deg:1,rad:1,turn:1},Vb={grid:1,flex:1},za=function o(t,n,r,s){var l=parseFloat(r)||0,c=(r+"").trim().substr((l+"").length)||"px",f=vs.style,d=Cb.test(n),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||xy[s]||xy[c])return l;if(c!=="px"&&!v&&(l=o(t,n,r,"px")),x=t.getCTM&&BS(t),(y||c==="%")&&(kr[n]||~n.indexOf("adius")))return E=x?t.getBBox()[d?"width":"height"]:t[m],ln(y?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===wa||!M.appendChild)&&(M=wa.body),S=M._gsap,S&&y&&S.width&&d&&S.time===yi.time&&!S.uncache)return ln(l/S.width*g);if(y&&(n==="height"||n==="width")){var C=t.style[n];t.style[n]=g+s,E=t[m],C?t.style[n]=C:Rs(t,n)}else(y||c==="%")&&!Vb[zi(M,"display")]&&(f.position=zi(t,"position")),M===t&&(f.position="static"),M.appendChild(vs),E=vs[m],M.removeChild(vs),f.position="absolute";return d&&y&&(S=Ss(M),S.time=yi.time,S.width=M[m]),ln(v?E*l/g:E&&l?g/E*l:0)},Ir=function(t,n,r,s){var l;return s_||em(),n in sr&&n!=="transform"&&(n=sr[n],~n.indexOf(",")&&(n=n.split(",")[0])),kr[n]&&n!=="transform"?(l=lu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Uf(zi(t,ri))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Df[n]&&Df[n](t,n,r)||zi(t,n)||$x(t,n)||(n==="opacity"?1:0))),r&&!~(l+"").trim().indexOf(" ")?za(t,n,l,r)+r:l},kb=function(t,n,r,s){if(!r||r==="none"){var l=Ho(n,t,1),c=l&&zi(t,l,1);c&&c!==r?(n=l,r=c):n==="borderColor"&&(r=zi(t,"borderTopColor"))}var f=new ii(this._pt,t.style,n,0,1,wS),d=0,p=0,m,g,v,y,E,M,S,x,C,w,b,O;if(f.b=r,f.e=s,r+="",s+="",s.substring(0,6)==="var(--"&&(s=zi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=zi(t,n)||s,M?t.style[n]=M:Rs(t,n)),m=[r,s],vS(m),r=m[0],s=m[1],v=r.match(Ao)||[],O=s.match(Ao)||[],O.length){for(;g=Ao.exec(s);)S=g[0],C=s.substring(d,g.index),E?E=(E+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(E=1),S!==(M=v[p++]||"")&&(y=parseFloat(M)||0,b=M.substr((y+"").length),S.charAt(1)==="="&&(S=Co(y,S)+b),x=parseFloat(S),w=S.substr((x+"").length),d=Ao.lastIndex-w.length,w||(w=w||Si.units[n]||b,d===s.length&&(s+=w,f.e+=w)),b!==w&&(y=za(t,n,M,w)||0),f._pt={_next:f._pt,p:C||p===1?C:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=n==="display"&&s==="none"?LS:US;return Yx.test(s)&&(f.e=0),this._pt=f,f},Sy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xb=function(t){var n=t.split(" "),r=n[0],s=n[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(t=r,r=s,s=t),n[0]=Sy[r]||r,n[1]=Sy[s]||s,n.join(" ")},qb=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,s=r.style,l=n.u,c=r._gsap,f,d,p;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],kr[f]&&(d=1,f=f==="transformOrigin"?ri:tn),Rs(r,f);d&&(Rs(r,tn),c&&(c.svg&&r.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",lu(r,1),c.uncache=1,OS(s)))}},Df={clearProps:function(t,n,r,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ii(t._pt,n,r,0,0,qb);return c.u=s,c.pr=-10,c.tween=l,t._props.push(r),1}}},ou=[1,0,0,1,0,0],IS={},FS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},My=function(t){var n=zi(t,tn);return FS(n)?ou:n.substr(7).match(Wx).map(ln)},u_=function(t,n){var r=t._gsap||Ss(t),s=t.style,l=My(t),c,f,d,p;return r.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?ou:l):(l===ou&&!t.offsetParent&&t!==Do&&!r.svg&&(d=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Do.appendChild(t)),l=My(t),d?s.display=d:Rs(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Do.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},nm=function(t,n,r,s,l,c){var f=t._gsap,d=l||u_(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=d[0],E=d[1],M=d[2],S=d[3],x=d[4],C=d[5],w=n.split(" "),b=parseFloat(w[0])||0,O=parseFloat(w[1])||0,P,U,B,A;r?d!==ou&&(U=y*S-E*M)&&(B=b*(S/U)+O*(-M/U)+(M*C-S*x)/U,A=b*(-E/U)+O*(y/U)-(y*C-E*x)/U,b=B,O=A):(P=zS(t),b=P.x+(~w[0].indexOf("%")?b/100*P.width:b),O=P.y+(~(w[1]||w[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(x=b-p,C=O-m,f.xOffset=g+(x*y+C*M)-x,f.yOffset=v+(x*E+C*S)-C):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=O,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!r,t.style[ri]="0px 0px",c&&(Ca(c,f,"xOrigin",p,b),Ca(c,f,"yOrigin",m,O),Ca(c,f,"xOffset",g,f.xOffset),Ca(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",b+" "+O)},lu=function(t,n){var r=t._gsap||new MS(t);if("x"in r&&!n&&!r.uncache)return r;var s=t.style,l=r.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=zi(t,ri)||"0",m,g,v,y,E,M,S,x,C,w,b,O,P,U,B,A,R,z,F,k,Z,at,H,q,j,xt,I,tt,dt,gt,K,ft;return m=g=v=M=S=x=C=w=b=0,y=E=1,r.svg=!!(t.getCTM&&BS(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[tn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[tn]!=="none"?d[tn]:"")),s.scale=s.rotate=s.translate="none"),U=u_(t,r.svg),r.svg&&(r.uncache?(j=t.getBBox(),p=r.xOrigin-j.x+"px "+(r.yOrigin-j.y)+"px",q=""):q=!n&&t.getAttribute("data-svg-origin"),nm(t,q||p,!!q||r.originIsAbsolute,r.smooth!==!1,U)),O=r.xOrigin||0,P=r.yOrigin||0,U!==ou&&(z=U[0],F=U[1],k=U[2],Z=U[3],m=at=U[4],g=H=U[5],U.length===6?(y=Math.sqrt(z*z+F*F),E=Math.sqrt(Z*Z+k*k),M=z||F?uo(F,z)*ds:0,C=k||Z?uo(k,Z)*ds+M:0,C&&(E*=Math.abs(Math.cos(C*Uo))),r.svg&&(m-=O-(O*z+P*k),g-=P-(O*F+P*Z))):(ft=U[6],gt=U[7],I=U[8],tt=U[9],dt=U[10],K=U[11],m=U[12],g=U[13],v=U[14],B=uo(ft,dt),S=B*ds,B&&(A=Math.cos(-B),R=Math.sin(-B),q=at*A+I*R,j=H*A+tt*R,xt=ft*A+dt*R,I=at*-R+I*A,tt=H*-R+tt*A,dt=ft*-R+dt*A,K=gt*-R+K*A,at=q,H=j,ft=xt),B=uo(-k,dt),x=B*ds,B&&(A=Math.cos(-B),R=Math.sin(-B),q=z*A-I*R,j=F*A-tt*R,xt=k*A-dt*R,K=Z*R+K*A,z=q,F=j,k=xt),B=uo(F,z),M=B*ds,B&&(A=Math.cos(B),R=Math.sin(B),q=z*A+F*R,j=at*A+H*R,F=F*A-z*R,H=H*A-at*R,z=q,at=j),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=ln(Math.sqrt(z*z+F*F+k*k)),E=ln(Math.sqrt(H*H+ft*ft)),B=uo(at,H),C=Math.abs(B)>2e-4?B*ds:0,b=K?1/(K<0?-K:K):0),r.svg&&(q=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!FS(zi(t,tn)),q&&t.setAttribute("transform",q))),Math.abs(C)>90&&Math.abs(C)<270&&(l?(y*=-1,C+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,C+=C<=0?180:-180)),n=n||r.uncache,r.x=m-((r.xPercent=m&&(!n&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+c,r.y=g-((r.yPercent=g&&(!n&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+c,r.z=v+c,r.scaleX=ln(y),r.scaleY=ln(E),r.rotation=ln(M)+f,r.rotationX=ln(S)+f,r.rotationY=ln(x)+f,r.skewX=C+f,r.skewY=w+f,r.transformPerspective=b+c,(r.zOrigin=parseFloat(p.split(" ")[2])||!n&&r.zOrigin||0)&&(s[ri]=Uf(p)),r.xOffset=r.yOffset=0,r.force3D=Si.force3D,r.renderTransform=r.svg?Yb:PS?HS:Wb,r.uncache=0,r},Uf=function(t){return(t=t.split(" "))[0]+" "+t[1]},ap=function(t,n,r){var s=Xn(n);return ln(parseFloat(n)+parseFloat(za(t,"x",r+"px",s)))+s},Wb=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,HS(t,n)},as="0deg",kl="0px",ss=") ",HS=function(t,n){var r=n||this,s=r.xPercent,l=r.yPercent,c=r.x,f=r.y,d=r.z,p=r.rotation,m=r.rotationY,g=r.rotationX,v=r.skewX,y=r.skewY,E=r.scaleX,M=r.scaleY,S=r.transformPerspective,x=r.force3D,C=r.target,w=r.zOrigin,b="",O=x==="auto"&&t&&t!==1||x===!0;if(w&&(g!==as||m!==as)){var P=parseFloat(m)*Uo,U=Math.sin(P),B=Math.cos(P),A;P=parseFloat(g)*Uo,A=Math.cos(P),c=ap(C,c,U*A*-w),f=ap(C,f,-Math.sin(P)*-w),d=ap(C,d,B*A*-w+w)}S!==kl&&(b+="perspective("+S+ss),(s||l)&&(b+="translate("+s+"%, "+l+"%) "),(O||c!==kl||f!==kl||d!==kl)&&(b+=d!==kl||O?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+ss),p!==as&&(b+="rotate("+p+ss),m!==as&&(b+="rotateY("+m+ss),g!==as&&(b+="rotateX("+g+ss),(v!==as||y!==as)&&(b+="skew("+v+", "+y+ss),(E!==1||M!==1)&&(b+="scale("+E+", "+M+ss),C.style[tn]=b||"translate(0, 0)"},Yb=function(t,n){var r=n||this,s=r.xPercent,l=r.yPercent,c=r.x,f=r.y,d=r.rotation,p=r.skewX,m=r.skewY,g=r.scaleX,v=r.scaleY,y=r.target,E=r.xOrigin,M=r.yOrigin,S=r.xOffset,x=r.yOffset,C=r.forceCSS,w=parseFloat(c),b=parseFloat(f),O,P,U,B,A;d=parseFloat(d),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,d+=m),d||p?(d*=Uo,p*=Uo,O=Math.cos(d)*g,P=Math.sin(d)*g,U=Math.sin(d-p)*-v,B=Math.cos(d-p)*v,p&&(m*=Uo,A=Math.tan(p-m),A=Math.sqrt(1+A*A),U*=A,B*=A,m&&(A=Math.tan(m),A=Math.sqrt(1+A*A),O*=A,P*=A)),O=ln(O),P=ln(P),U=ln(U),B=ln(B)):(O=g,B=v,P=U=0),(w&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(w=za(y,"x",c,"px"),b=za(y,"y",f,"px")),(E||M||S||x)&&(w=ln(w+E-(E*O+M*U)+S),b=ln(b+M-(E*P+M*B)+x)),(s||l)&&(A=y.getBBox(),w=ln(w+s/100*A.width),b=ln(b+l/100*A.height)),A="matrix("+O+","+P+","+U+","+B+","+w+","+b+")",y.setAttribute("transform",A),C&&(y.style[tn]=A)},jb=function(t,n,r,s,l){var c=360,f=Dn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?ds:1),p=d-s,m=s+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-c)),g==="cw"&&p<0?p=(p+c*_y)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*_y)%c-~~(p/c)*c)),t._pt=v=new ii(t._pt,n,r,s,p,Ub),v.e=m,v.u="deg",t._props.push(r),v},Ey=function(t,n){for(var r in n)t[r]=n[r];return t},Zb=function(t,n,r){var s=Ey({},r._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=r.style,f,d,p,m,g,v,y,E;s.svg?(p=r.getAttribute("transform"),r.setAttribute("transform",""),c[tn]=n,f=lu(r,1),Rs(r,tn),r.setAttribute("transform",p)):(p=getComputedStyle(r)[tn],c[tn]=n,f=lu(r,1),c[tn]=p);for(d in kr)p=s[d],m=f[d],p!==m&&l.indexOf(d)<0&&(y=Xn(p),E=Xn(m),g=y!==E?za(r,d,p,E):parseFloat(p),v=parseFloat(m),t._pt=new ii(t._pt,f,d,g,v-g,$p),t._pt.u=E||0,t._props.push(d));Ey(f,s)};ni("padding,margin,Width,Radius",function(o,t){var n="Top",r="Right",s="Bottom",l="Left",c=(t<3?[n,r,s,l]:[n+l,n+r,s+r,s+l]).map(function(f){return t<2?o+f:"border"+f+o});Df[t>1?"border"+o:o]=function(f,d,p,m,g){var v,y;if(arguments.length<4)return v=c.map(function(E){return Ir(f,E,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(m+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,g)}});var GS={name:"css",register:em,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,r,s,l){var c=this._props,f=t.style,d=r.vars.startAt,p,m,g,v,y,E,M,S,x,C,w,b,O,P,U,B;s_||em(),this.styles=this.styles||NS(t),B=this.styles.props,this.tween=r;for(M in n)if(M!=="autoRound"&&(m=n[M],!(vi[M]&&ES(M,n,r,s,t,l)))){if(y=typeof m,E=Df[M],y==="function"&&(m=m.call(r,s,t,l),y=typeof m),y==="string"&&~m.indexOf("random(")&&(m=ru(m)),E)E(this,t,M,m,r)&&(U=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",La.lastIndex=0,La.test(p)||(S=Xn(p),x=Xn(m)),x?S!==x&&(p=za(t,M,p,x)+x):S&&(m+=S),this.add(f,"setProperty",p,m,s,l,0,0,M),c.push(M),B.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(r,s,t,l):d[M],Dn(p)&&~p.indexOf("random(")&&(p=ru(p)),Xn(p+"")||p==="auto"||(p+=Si.units[M]||Xn(Ir(t,M))||""),(p+"").charAt(1)==="="&&(p=Ir(t,M))):p=Ir(t,M),v=parseFloat(p),C=y==="string"&&m.charAt(1)==="="&&m.substr(0,2),C&&(m=m.substr(2)),g=parseFloat(m),M in sr&&(M==="autoAlpha"&&(v===1&&Ir(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),Ca(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=sr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in kr,w){if(this.styles.save(M),y==="string"&&m.substring(0,6)==="var(--"&&(m=zi(t,m.substring(4,m.indexOf(")"))),g=parseFloat(m)),b||(O=t._gsap,O.renderTransform&&!n.parseTransform||lu(t,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,b=this._pt=new ii(this._pt,f,tn,0,1,O.renderTransform,O,0,-1),b.dep=1),M==="scale")this._pt=new ii(this._pt,O,"scaleY",O.scaleY,(C?Co(O.scaleY,C+g):g)-O.scaleY||0,$p),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ri,0,f[ri]),m=Xb(m),O.svg?nm(t,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==O.zOrigin&&Ca(this,O,"zOrigin",O.zOrigin,x),Ca(this,f,M,Uf(p),Uf(m)));continue}else if(M==="svgOrigin"){nm(t,m,1,P,0,this);continue}else if(M in IS){jb(this,O,M,v,C?Co(v,C+m):m);continue}else if(M==="smoothOrigin"){Ca(this,O,"smooth",O.smooth,m);continue}else if(M==="force3D"){O[M]=m;continue}else if(M==="transform"){Zb(this,m,t);continue}}else M in f||(M=Ho(M)||M);if(w||(g||g===0)&&(v||v===0)&&!Db.test(m)&&M in f)S=(p+"").substr((v+"").length),g||(g=0),x=Xn(m)||(M in Si.units?Si.units[M]:S),S!==x&&(v=za(t,M,p,x)),this._pt=new ii(this._pt,w?O:f,M,v,(C?Co(v,C+g):g)-v,!w&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?Ob:$p),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=Lb);else if(M in f)kb.call(this,t,M,p,C?C+m:m);else if(M in t)this.add(t,M,p||t[M],C?C+m:m,s,l);else if(M!=="parseTransform"){Km(M,m);continue}w||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,p||t[M])),c.push(M)}}U&&CS(this)},render:function(t,n){if(n.tween._time||!o_())for(var r=n._pt;r;)r.r(t,r.d),r=r._next;else n.styles.revert()},get:Ir,aliases:sr,getSetter:function(t,n,r){var s=sr[n];return s&&s.indexOf(",")<0&&(n=s),n in kr&&n!==ri&&(t._gsap.x||Ir(t,"x"))?r&&my===r?n==="scale"?Bb:zb:(my=r||{})&&(n==="scale"?Ib:Fb):t.style&&!Ym(t.style[n])?Nb:~n.indexOf("-")?Pb:r_(t,n)},core:{_removeProperty:Rs,_getMatrix:u_}};oi.utils.checkPrefix=Ho;oi.core.getStyleSaver=NS;(function(o,t,n,r){var s=ni(o+","+t+","+n,function(l){kr[l]=1});ni(t,function(l){Si.units[l]="deg",IS[l]=1}),sr[s[13]]=o+","+t,ni(r,function(l){var c=l.split(":");sr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Si.units[o]="px"});oi.registerPlugin(GS);var Yi=oi.registerPlugin(GS)||oi;Yi.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ty=typeof document<"u"?$e.useLayoutEffect:$e.useEffect,by=o=>o&&!Array.isArray(o)&&typeof o=="object",Lc=[],Kb={},VS=Yi;const Wo=(o,t=Lc)=>{let n=Kb;by(o)?(n=o,o=null,t="dependencies"in n?n.dependencies:Lc):by(t)&&(n=t,t="dependencies"in n?n.dependencies:Lc),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:r,revertOnUpdate:s}=n,l=$e.useRef(!1),c=$e.useRef(VS.context(()=>{},r)),f=$e.useRef(p=>c.current.add(null,p)),d=t&&t.length&&!s;return d&&Ty(()=>(l.current=!0,()=>c.current.revert()),Lc),Ty(()=>{if(o&&c.current.add(o,r),!d||!l.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};Wo.register=o=>{VS=o};Wo.headless=!0;const Qb="_preloader_jkv3m_1",Jb={preloader:Qb},$b=({onComplete:o})=>{const t=$e.useRef(null),n=$e.useRef([]);return Wo(()=>{const r=Yi.timeline({defaults:{ease:"power4.out"},onComplete:o});Yi.set(n.current,{y:225,opacity:0}),r.to(n.current,{y:0,opacity:1,stagger:.25,duration:1.2}),r.to(n.current,{y:-200,opacity:0,stagger:.2,duration:1.2},"+=1.5"),r.to(t.current,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",duration:1.5},"-=0.8")},[]),bt.jsxs("div",{ref:t,className:Jb.preloader,children:[bt.jsx("h2",{ref:r=>{r&&(n.current[0]=r)},children:"Loading"}),bt.jsx("h2",{ref:r=>{r&&(n.current[1]=r)},children:"Your"}),bt.jsx("h2",{ref:r=>{r&&(n.current[2]=r)},children:"Experience"})]})};/*!
 * CSSRulePlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Da,im,vf,Lf,kS=function(){return typeof window<"u"},XS=function(){return Da||kS()&&(Da=window.gsap)&&Da.registerPlugin&&Da},Ay=function(){return im||(qS(),Lf||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),im},qS=function(t){Da=t||XS(),kS()&&(vf=document),Da&&(Lf=Da.plugins.css,Lf&&(im=1))},c_={version:"3.13.0",name:"cssRule",init:function(t,n,r,s,l){if(!Ay()||typeof t.cssText>"u")return!1;var c=t._gsProxy=t._gsProxy||vf.createElement("div");this.ss=t,this.style=c.style,c.style.cssText=t.cssText,Lf.prototype.init.call(this,c,n,r,s,l)},render:function(t,n){for(var r=n._pt,s=n.style,l=n.ss,c;r;)r.r(t,r.d),r=r._next;for(c=s.length;--c>-1;)l[s[c]]=s[s[c]]},getRule:function(t){Ay();var n=vf.all?"rules":"cssRules",r=vf.styleSheets,s=r.length,l=t.charAt(0)===":",c,f,d,p;for(t=(l?"":",")+t.split("::").join(":").toLowerCase()+",",l&&(p=[]);s--;){try{if(f=r[s][n],!f)continue;c=f.length}catch(m){console.warn(m);continue}for(;--c>-1;)if(d=f[c],d.selectorText&&(","+d.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)!==-1)if(l)p.push(d.style);else return d.style}return p},register:qS};XS()&&Da.registerPlugin(c_);const t1="_nav_1s3g7_1",e1="_logo_1s3g7_35",n1="_burger_1s3g7_75",i1="_active_1s3g7_117",r1="_overlay_1s3g7_143",Gn={nav:t1,logo:e1,"toggle-btn":"_toggle-btn_1s3g7_65",burger:n1,active:i1,overlay:r1,"overlay-menu":"_overlay-menu_1s3g7_175","menu-item":"_menu-item_1s3g7_197","sub-nav":"_sub-nav_1s3g7_283"};var Ze={},Oc={},Nc={},Pc={},sp,Ry;function a1(){if(Ry)return sp;Ry=1;var o="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,d=typeof Dc=="object"&&Dc&&Dc.Object===Object&&Dc,p=typeof self=="object"&&self&&self.Object===Object&&self,m=d||p||Function("return this")(),g=Object.prototype,v=g.toString,y=Math.max,E=Math.min,M=function(){return m.Date.now()};function S(P,U,B){var A,R,z,F,k,Z,at=0,H=!1,q=!1,j=!0;if(typeof P!="function")throw new TypeError(o);U=O(U)||0,C(B)&&(H=!!B.leading,q="maxWait"in B,z=q?y(O(B.maxWait)||0,U):z,j="trailing"in B?!!B.trailing:j);function xt(Et){var Qt=A,Vt=R;return A=R=void 0,at=Et,F=P.apply(Vt,Qt),F}function I(Et){return at=Et,k=setTimeout(gt,U),H?xt(Et):F}function tt(Et){var Qt=Et-Z,Vt=Et-at,Se=U-Qt;return q?E(Se,z-Vt):Se}function dt(Et){var Qt=Et-Z,Vt=Et-at;return Z===void 0||Qt>=U||Qt<0||q&&Vt>=z}function gt(){var Et=M();if(dt(Et))return K(Et);k=setTimeout(gt,tt(Et))}function K(Et){return k=void 0,j&&A?xt(Et):(A=R=void 0,F)}function ft(){k!==void 0&&clearTimeout(k),at=0,A=Z=R=k=void 0}function St(){return k===void 0?F:K(M())}function wt(){var Et=M(),Qt=dt(Et);if(A=arguments,R=this,Z=Et,Qt){if(k===void 0)return I(Z);if(q)return k=setTimeout(gt,U),xt(Z)}return k===void 0&&(k=setTimeout(gt,U)),F}return wt.cancel=ft,wt.flush=St,wt}function x(P,U,B){var A=!0,R=!0;if(typeof P!="function")throw new TypeError(o);return C(B)&&(A="leading"in B?!!B.leading:A,R="trailing"in B?!!B.trailing:R),S(P,U,{leading:A,maxWait:U,trailing:R})}function C(P){var U=typeof P;return!!P&&(U=="object"||U=="function")}function w(P){return!!P&&typeof P=="object"}function b(P){return typeof P=="symbol"||w(P)&&v.call(P)==n}function O(P){if(typeof P=="number")return P;if(b(P))return t;if(C(P)){var U=typeof P.valueOf=="function"?P.valueOf():P;P=C(U)?U+"":U}if(typeof P!="string")return P===0?P:+P;P=P.replace(r,"");var B=l.test(P);return B||c.test(P)?f(P.slice(2),B?2:8):s.test(P)?t:+P}return sp=x,sp}var Xl={},wy;function f_(){if(wy)return Xl;wy=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.addPassiveEventListener=function(n,r,s){var l=s.name;l||(l=r,console.warn("Listener must be a named function.")),o.has(r)||o.set(r,new Set);var c=o.get(r);if(!c.has(l)){var f=function(){var d=!1;try{var p=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,p)}catch{}return d}();n.addEventListener(r,s,f?{passive:!0}:!1),c.add(l)}},Xl.removePassiveEventListener=function(n,r,s){n.removeEventListener(r,s),o.get(r).delete(s.name||r)};var o=new Map;return Xl}var Cy;function h_(){if(Cy)return Pc;Cy=1,Object.defineProperty(Pc,"__esModule",{value:!0});var o=a1(),t=r(o),n=f_();function r(c){return c&&c.__esModule?c:{default:c}}var s=function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(f,d)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,d){if(f){var p=s(function(m){l.scrollHandler(f)},d);return l.scrollSpyContainers.push(f),(0,n.addPassiveEventListener)(f,"scroll",p),function(){(0,n.removePassiveEventListener)(f,"scroll",p),l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(f),1)}}return function(){}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var d=window.scrollY!==void 0,p=(document.compatMode||"")==="CSS1Compat";return d?window.scrollX:p?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var d=window.scrollX!==void 0,p=(document.compatMode||"")==="CSS1Compat";return d?window.scrollY:p?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var d=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];d.forEach(function(p){return p(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,d){var p=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(d)];p.spyCallbacks||(p.spyCallbacks=[]),p.spyCallbacks.push(f)},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,d){l.scrollSpyContainers.forEach(function(p){return p.spyCallbacks&&p.spyCallbacks.length&&p.spyCallbacks.indexOf(d)>-1&&p.spyCallbacks.splice(p.spyCallbacks.indexOf(d),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return Pc.default=l,Pc}var zc={},Bc={},Dy;function Ff(){if(Dy)return Bc;Dy=1,Object.defineProperty(Bc,"__esModule",{value:!0});var o=function(f,d){var p=f.indexOf("#")===0?f.substring(1):f,m=p?"#"+p:"",g=window&&window.location,v=m?g.pathname+g.search+m:g.pathname+g.search;d?history.pushState(history.state,"",v):history.replaceState(history.state,"",v)},t=function(){return window.location.hash.replace(/^#/,"")},n=function(f){return function(d){return f.contains?f!=d&&f.contains(d):!!(f.compareDocumentPosition(d)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},s=function(f,d){for(var p=f.offsetTop,m=f.offsetParent;m&&!d(m);)p+=m.offsetTop,m=m.offsetParent;return{offsetTop:p,offsetParent:m}},l=function(f,d,p){if(p)return f===document?d.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?d.offsetLeft:d.offsetLeft-f.offsetLeft;if(f===document)return d.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(d.offsetParent!==f){var m=function(S){return S===f||S===document},g=s(d,m),v=g.offsetTop,y=g.offsetParent;if(y!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return v}return d.offsetTop}if(d.offsetParent===f.offsetParent)return d.offsetTop-f.offsetTop;var E=function(S){return S===document};return s(d,E).offsetTop-s(f,E).offsetTop};return Bc.default={updateHash:o,getHash:t,filterElementInContainer:n,scrollOffset:l},Bc}var Ic={},Fc={},Uy;function s1(){return Uy||(Uy=1,Object.defineProperty(Fc,"__esModule",{value:!0}),Fc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),Fc}var Hc={},Ly;function o1(){if(Ly)return Hc;Ly=1,Object.defineProperty(Hc,"__esModule",{value:!0});var o=f_(),t=["mousedown","wheel","touchmove","keydown"];return Hc.default={subscribe:function(r){return typeof document<"u"&&t.forEach(function(s){return(0,o.addPassiveEventListener)(document,s,r)})}},Hc}var Gc={},Oy;function d_(){if(Oy)return Gc;Oy=1,Object.defineProperty(Gc,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(n,r){o.registered[n]=r},remove:function(n){o.registered[n]=null}}};return Gc.default=o,Gc}var Ny;function WS(){if(Ny)return Ic;Ny=1,Object.defineProperty(Ic,"__esModule",{value:!0});var o=Object.assign||function(R){for(var z=1;z<arguments.length;z++){var F=arguments[z];for(var k in F)Object.prototype.hasOwnProperty.call(F,k)&&(R[k]=F[k])}return R},t=Ff();d(t);var n=s1(),r=d(n),s=o1(),l=d(s),c=d_(),f=d(c);function d(R){return R&&R.__esModule?R:{default:R}}var p=function(z){return r.default[z.smooth]||r.default.defaultEasing},m=function(z){return typeof z=="function"?z:function(){return z}},g=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},v=function(){return g()||function(R,z,F){window.setTimeout(R,F||1e3/60,new Date().getTime())}}(),y=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},E=function(z){var F=z.data.containerElement;if(F&&F!==document&&F!==document.body)return F.scrollLeft;var k=window.pageXOffset!==void 0,Z=(document.compatMode||"")==="CSS1Compat";return k?window.pageXOffset:Z?document.documentElement.scrollLeft:document.body.scrollLeft},M=function(z){var F=z.data.containerElement;if(F&&F!==document&&F!==document.body)return F.scrollTop;var k=window.pageXOffset!==void 0,Z=(document.compatMode||"")==="CSS1Compat";return k?window.pageYOffset:Z?document.documentElement.scrollTop:document.body.scrollTop},S=function(z){var F=z.data.containerElement;if(F&&F!==document&&F!==document.body)return F.scrollWidth-F.offsetWidth;var k=document.body,Z=document.documentElement;return Math.max(k.scrollWidth,k.offsetWidth,Z.clientWidth,Z.scrollWidth,Z.offsetWidth)},x=function(z){var F=z.data.containerElement;if(F&&F!==document&&F!==document.body)return F.scrollHeight-F.offsetHeight;var k=document.body,Z=document.documentElement;return Math.max(k.scrollHeight,k.offsetHeight,Z.clientHeight,Z.scrollHeight,Z.offsetHeight)},C=function R(z,F,k){var Z=F.data;if(!F.ignoreCancelEvents&&Z.cancel){f.default.registered.end&&f.default.registered.end(Z.to,Z.target,Z.currentPositionY);return}if(Z.delta=Math.round(Z.targetPosition-Z.startPosition),Z.start===null&&(Z.start=k),Z.progress=k-Z.start,Z.percent=Z.progress>=Z.duration?1:z(Z.progress/Z.duration),Z.currentPosition=Z.startPosition+Math.ceil(Z.delta*Z.percent),Z.containerElement&&Z.containerElement!==document&&Z.containerElement!==document.body?F.horizontal?Z.containerElement.scrollLeft=Z.currentPosition:Z.containerElement.scrollTop=Z.currentPosition:F.horizontal?window.scrollTo(Z.currentPosition,0):window.scrollTo(0,Z.currentPosition),Z.percent<1){var at=R.bind(null,z,F);v.call(window,at);return}f.default.registered.end&&f.default.registered.end(Z.to,Z.target,Z.currentPosition)},w=function(z){z.data.containerElement=z?z.containerId?document.getElementById(z.containerId):z.container&&z.container.nodeType?z.container:document:null},b=function(z,F,k,Z){F.data=F.data||y(),window.clearTimeout(F.data.delayTimeout);var at=function(){F.data.cancel=!0};if(l.default.subscribe(at),w(F),F.data.start=null,F.data.cancel=!1,F.data.startPosition=F.horizontal?E(F):M(F),F.data.targetPosition=F.absolute?z:z+F.data.startPosition,F.data.startPosition===F.data.targetPosition){f.default.registered.end&&f.default.registered.end(F.data.to,F.data.target,F.data.currentPosition);return}F.data.delta=Math.round(F.data.targetPosition-F.data.startPosition),F.data.duration=m(F.duration)(F.data.delta),F.data.duration=isNaN(parseFloat(F.data.duration))?1e3:parseFloat(F.data.duration),F.data.to=k,F.data.target=Z;var H=p(F),q=C.bind(null,H,F);if(F&&F.delay>0){F.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(F.data.to,F.data.target),v.call(window,q)},F.delay);return}f.default.registered.begin&&f.default.registered.begin(F.data.to,F.data.target),v.call(window,q)},O=function(z){return z=o({},z),z.data=z.data||y(),z.absolute=!0,z},P=function(z){b(0,O(z))},U=function(z,F){b(z,O(F))},B=function(z){z=O(z),w(z),b(z.horizontal?S(z):x(z),z)},A=function(z,F){F=O(F),w(F);var k=F.horizontal?E(F):M(F);b(z+k,F)};return Ic.default={animateTopScroll:b,getAnimationType:p,scrollToTop:P,scrollToBottom:B,scrollTo:U,scrollMore:A},Ic}var Py;function Hf(){if(Py)return zc;Py=1,Object.defineProperty(zc,"__esModule",{value:!0});var o=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var v=arguments[g];for(var y in v)Object.prototype.hasOwnProperty.call(v,y)&&(m[y]=v[y])}return m},t=Ff(),n=f(t),r=WS(),s=f(r),l=d_(),c=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var d={},p=void 0;return zc.default={unmount:function(){d={}},register:function(g,v){d[g]=v},unregister:function(g){delete d[g]},get:function(g){return d[g]||document.getElementById(g)||document.getElementsByName(g)[0]||document.getElementsByClassName(g)[0]},setActiveLink:function(g){return p=g},getActiveLink:function(){return p},scrollTo:function(g,v){var y=this.get(g);if(!y){console.warn("target Element not found");return}v=o({},v,{absolute:!1});var E=v.containerId,M=v.container,S=void 0;E?S=document.getElementById(E):M&&M.nodeType?S=M:S=document,v.absolute=!0;var x=v.horizontal,C=n.default.scrollOffset(S,y,x)+(v.offset||0);if(!v.smooth){c.default.registered.begin&&c.default.registered.begin(g,y),S===document?v.horizontal?window.scrollTo(C,0):window.scrollTo(0,C):S.scrollTop=C,c.default.registered.end&&c.default.registered.end(g,y);return}s.default.animateTopScroll(C,v,g,y)}},zc}var op={exports:{}},lp,zy;function l1(){if(zy)return lp;zy=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return lp=o,lp}var up,By;function u1(){if(By)return up;By=1;var o=l1();function t(){}function n(){}return n.resetWarningCache=t,up=function(){function r(c,f,d,p,m,g){if(g!==o){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function s(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},up}var Iy;function Gf(){return Iy||(Iy=1,op.exports=u1()()),op.exports}var Vc={},Fy;function YS(){if(Fy)return Vc;Fy=1,Object.defineProperty(Vc,"__esModule",{value:!0}),f_();var o=Ff(),t=n(o);function n(s){return s&&s.__esModule?s:{default:s}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,c){this.containers[l]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,c=this.getHash();c?window.setTimeout(function(){l.scrollTo(c,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,c){var f=this.scroller,d=f.get(l);if(d&&(c||l!==f.getActiveLink())){var p=this.containers[l]||document;f.scrollTo(l,{container:p})}},getHash:function(){return t.default.getHash()},changeHash:function(l,c){this.isInitialized()&&t.default.getHash()!==l&&t.default.updateHash(l,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Vc.default=r,Vc}var Hy;function p_(){if(Hy)return Nc;Hy=1,Object.defineProperty(Nc,"__esModule",{value:!0});var o=Object.assign||function(x){for(var C=1;C<arguments.length;C++){var w=arguments[C];for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&(x[b]=w[b])}return x},t=function(){function x(C,w){for(var b=0;b<w.length;b++){var O=w[b];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(C,O.key,O)}}return function(C,w,b){return w&&x(C.prototype,w),b&&x(C,b),C}}(),n=qr(),r=v(n),s=h_(),l=v(s),c=Hf(),f=v(c),d=Gf(),p=v(d),m=YS(),g=v(m);function v(x){return x&&x.__esModule?x:{default:x}}function y(x,C){if(!(x instanceof C))throw new TypeError("Cannot call a class as a function")}function E(x,C){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C&&(typeof C=="object"||typeof C=="function")?C:x}function M(x,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof C);x.prototype=Object.create(C&&C.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),C&&(Object.setPrototypeOf?Object.setPrototypeOf(x,C):x.__proto__=C)}var S={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};return Nc.default=function(x,C){var w=C||f.default,b=function(P){M(U,P);function U(B){y(this,U);var A=E(this,(U.__proto__||Object.getPrototypeOf(U)).call(this,B));return O.call(A),A.state={active:!1},A.beforeUnmountCallbacks=[],A}return t(U,[{key:"getScrollSpyContainer",value:function(){var A=this.props.containerId,R=this.props.container;return A&&!R?document.getElementById(A):R&&R.nodeType?R:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var A=this.getScrollSpyContainer();if(!l.default.isMounted(A)){var R=l.default.mount(A,this.props.spyThrottle);this.beforeUnmountCallbacks.push(R)}this.props.hashSpy&&(g.default.isMounted()||g.default.mount(w),g.default.mapContainer(this.props.to,A)),l.default.addSpyHandler(this.spyHandler,A),this.setState({container:A})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(A){return A()})}},{key:"render",value:function(){var A="";this.state&&this.state.active?A=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():A=this.props.className;var R={};this.state&&this.state.active?R=o({},this.props.style,this.props.activeStyle):R=o({},this.props.style);var z=o({},this.props);for(var F in S)z.hasOwnProperty(F)&&delete z[F];return z.className=A,z.style=R,z.onClick=this.handleClick,r.default.createElement(x,z)}}]),U}(r.default.PureComponent),O=function(){var U=this;this.scrollTo=function(B,A){w.scrollTo(B,o({},U.state,A))},this.handleClick=function(B){U.props.onClick&&U.props.onClick(B),B.stopPropagation&&B.stopPropagation(),B.preventDefault&&B.preventDefault(),U.scrollTo(U.props.to,U.props)},this.spyHandler=function(B,A){var R=U.getScrollSpyContainer();if(!(g.default.isMounted()&&!g.default.isInitialized())){var z=U.props.horizontal,F=U.props.to,k=null,Z=void 0,at=void 0;if(z){var H=0,q=0,j=0;if(R.getBoundingClientRect){var xt=R.getBoundingClientRect();j=xt.left}if(!k||U.props.isDynamic){if(k=w.get(F),!k)return;var I=k.getBoundingClientRect();H=I.left-j+B,q=H+I.width}var tt=B-U.props.offset;Z=tt>=Math.floor(H)&&tt<Math.floor(q),at=tt<Math.floor(H)||tt>=Math.floor(q)}else{var dt=0,gt=0,K=0;if(R.getBoundingClientRect){var ft=R.getBoundingClientRect();K=ft.top}if(!k||U.props.isDynamic){if(k=w.get(F),!k)return;var St=k.getBoundingClientRect();dt=St.top-K+A,gt=dt+St.height}var wt=A-U.props.offset;Z=wt>=Math.floor(dt)&&wt<Math.floor(gt),at=wt<Math.floor(dt)||wt>=Math.floor(gt)}var Et=w.getActiveLink();if(at){if(F===Et&&w.setActiveLink(void 0),U.props.hashSpy&&g.default.getHash()===F){var Qt=U.props.saveHashHistory,Vt=Qt===void 0?!1:Qt;g.default.changeHash("",Vt)}U.props.spy&&U.state.active&&(U.setState({active:!1}),U.props.onSetInactive&&U.props.onSetInactive(F,k))}if(Z&&(Et!==F||U.state.active===!1)){w.setActiveLink(F);var Se=U.props.saveHashHistory,Le=Se===void 0?!1:Se;U.props.hashSpy&&g.default.changeHash(F,Le),U.props.spy&&(U.setState({active:!0}),U.props.onSetActive&&U.props.onSetActive(F,k))}}}};return b.propTypes=S,b.defaultProps={offset:0},b},Nc}var Gy;function c1(){if(Gy)return Oc;Gy=1,Object.defineProperty(Oc,"__esModule",{value:!0});var o=qr(),t=s(o),n=p_(),r=s(n);function s(p){return p&&p.__esModule?p:{default:p}}function l(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function c(p,m){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:p}function f(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);p.prototype=Object.create(m&&m.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(p,m):p.__proto__=m)}var d=function(p){f(m,p);function m(){var g,v,y,E;l(this,m);for(var M=arguments.length,S=Array(M),x=0;x<M;x++)S[x]=arguments[x];return E=(v=(y=c(this,(g=m.__proto__||Object.getPrototypeOf(m)).call.apply(g,[this].concat(S))),y),y.render=function(){return t.default.createElement("a",y.props,y.props.children)},v),c(y,E)}return m}(t.default.Component);return Oc.default=(0,r.default)(d),Oc}var kc={},Vy;function f1(){if(Vy)return kc;Vy=1,Object.defineProperty(kc,"__esModule",{value:!0});var o=function(){function m(g,v){for(var y=0;y<v.length;y++){var E=v[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(g,E.key,E)}}return function(g,v,y){return v&&m(g.prototype,v),y&&m(g,y),g}}(),t=qr(),n=l(t),r=p_(),s=l(r);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function f(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:m}function d(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var p=function(m){d(g,m);function g(){return c(this,g),f(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return o(g,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),g}(n.default.Component);return kc.default=(0,s.default)(p),kc}var Xc={},qc={},ky;function jS(){if(ky)return qc;ky=1,Object.defineProperty(qc,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=qr(),r=p(n),s=qm();p(s);var l=Hf(),c=p(l),f=Gf(),d=p(f);function p(y){return y&&y.__esModule?y:{default:y}}function m(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function g(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function v(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}return qc.default=function(y){var E=function(M){v(S,M);function S(x){m(this,S);var C=g(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return C.childBindings={domNode:null},C}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(C){this.props.name!==C.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(C){c.default.register(C,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(r.default.Component);return E.propTypes={name:d.default.string,id:d.default.string},E},qc}var Xy;function h1(){if(Xy)return Xc;Xy=1,Object.defineProperty(Xc,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=qr(),r=d(n),s=jS(),l=d(s),c=Gf(),f=d(c);function d(y){return y&&y.__esModule?y:{default:y}}function p(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function m(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function g(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}var v=function(y){g(E,y);function E(){return p(this,E),m(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return t(E,[{key:"render",value:function(){var S=this,x=o({},this.props);return delete x.name,x.parentBindings&&delete x.parentBindings,r.default.createElement("div",o({},x,{ref:function(w){S.props.parentBindings.domNode=w}}),this.props.children)}}]),E}(r.default.Component);return v.propTypes={name:f.default.string,id:f.default.string},Xc.default=(0,l.default)(v),Xc}var cp,qy;function d1(){if(qy)return cp;qy=1;var o=Object.assign||function(v){for(var y=1;y<arguments.length;y++){var E=arguments[y];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(v[M]=E[M])}return v},t=function(){function v(y,E){for(var M=0;M<E.length;M++){var S=E[M];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,E,M){return E&&v(y.prototype,E),M&&v(y,M),y}}();function n(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function r(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:v}function s(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var l=qr();qm(),Ff();var c=h_(),f=Hf(),d=Gf(),p=YS(),m={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},g={Scroll:function(y,E){console.warn("Helpers.Scroll is deprecated since v1.7.0");var M=E||f,S=function(C){s(w,C);function w(b){n(this,w);var O=r(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,b));return x.call(O),O.state={active:!1},O}return t(w,[{key:"getScrollSpyContainer",value:function(){var O=this.props.containerId,P=this.props.container;return O?document.getElementById(O):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var O=this.getScrollSpyContainer();c.isMounted(O)||c.mount(O,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(M),p.mapContainer(this.props.to,O)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,O),this.setState({container:O})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var O="";this.state&&this.state.active?O=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():O=this.props.className;var P=o({},this.props);for(var U in m)P.hasOwnProperty(U)&&delete P[U];return P.className=O,P.onClick=this.handleClick,l.createElement(y,P)}}]),w}(l.Component),x=function(){var w=this;this.scrollTo=function(b,O){M.scrollTo(b,o({},w.state,O))},this.handleClick=function(b){w.props.onClick&&w.props.onClick(b),b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault(),w.scrollTo(w.props.to,w.props)},this.stateHandler=function(){M.getActiveLink()!==w.props.to&&(w.state!==null&&w.state.active&&w.props.onSetInactive&&w.props.onSetInactive(),w.setState({active:!1}))},this.spyHandler=function(b){var O=w.getScrollSpyContainer();if(!(p.isMounted()&&!p.isInitialized())){var P=w.props.to,U=null,B=0,A=0,R=0;if(O.getBoundingClientRect){var z=O.getBoundingClientRect();R=z.top}if(!U||w.props.isDynamic){if(U=M.get(P),!U)return;var F=U.getBoundingClientRect();B=F.top-R+b,A=B+F.height}var k=b-w.props.offset,Z=k>=Math.floor(B)&&k<Math.floor(A),at=k<Math.floor(B)||k>=Math.floor(A),H=M.getActiveLink();if(at)return P===H&&M.setActiveLink(void 0),w.props.hashSpy&&p.getHash()===P&&p.changeHash(),w.props.spy&&w.state.active&&(w.setState({active:!1}),w.props.onSetInactive&&w.props.onSetInactive()),c.updateStates();if(Z&&H!==P)return M.setActiveLink(P),w.props.hashSpy&&p.changeHash(P),w.props.spy&&(w.setState({active:!0}),w.props.onSetActive&&w.props.onSetActive(P)),c.updateStates()}}};return S.propTypes=m,S.defaultProps={offset:0},S},Element:function(y){console.warn("Helpers.Element is deprecated since v1.7.0");var E=function(M){s(S,M);function S(x){n(this,S);var C=r(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return C.childBindings={domNode:null},C}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(C){this.props.name!==C.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(C){f.register(C,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(l.Component);return E.propTypes={name:d.string,id:d.string},E}};return cp=g,cp}var Wy;function p1(){if(Wy)return Ze;Wy=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.Helpers=Ze.ScrollElement=Ze.ScrollLink=Ze.animateScroll=Ze.scrollSpy=Ze.Events=Ze.scroller=Ze.Element=Ze.Button=Ze.Link=void 0;var o=c1(),t=b(o),n=f1(),r=b(n),s=h1(),l=b(s),c=Hf(),f=b(c),d=d_(),p=b(d),m=h_(),g=b(m),v=WS(),y=b(v),E=p_(),M=b(E),S=jS(),x=b(S),C=d1(),w=b(C);function b(O){return O&&O.__esModule?O:{default:O}}return Ze.Link=t.default,Ze.Button=r.default,Ze.Element=l.default,Ze.scroller=f.default,Ze.Events=p.default,Ze.scrollSpy=g.default,Ze.animateScroll=y.default,Ze.ScrollLink=M.default,Ze.ScrollElement=x.default,Ze.Helpers=w.default,Ze.default={Link:t.default,Button:r.default,Element:l.default,scroller:f.default,Events:p.default,scrollSpy:g.default,animateScroll:y.default,ScrollLink:M.default,ScrollElement:x.default,Helpers:w.default},Ze}var bs=p1();Yi.registerPlugin(Wo,c_);const m1=()=>{const[o,t]=$e.useState(!1),[n,r]=$e.useState(null),s=$e.useRef(null),l=$e.useRef([]),c=$e.useRef(null),f=$e.useRef(null),d=$e.useRef(null);Wo(()=>{Yi.set(l.current,{y:1e3}),Yi.set(f.current,{opacity:0,bottom:"5%"});const g=Yi.timeline({paused:!0});g.to(s.current,{duration:1.5,clipPath:"polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",ease:"power4.inOut"}),g.to(l.current,{duration:1,y:0,stagger:.2,ease:"power4.inOut"},"-=1"),g.to(f.current,{bottom:"10%",opacity:1,duration:.5,delay:.5},"<"),d.current=g},[]);const p=()=>{d.current&&(o?d.current.reverse():d.current.play(),t(!o))},m=g=>{if(!d.current)return;r(g);const v=c_.getRule(`.${Gn["menu-item"]} p.${Gn.active}::after`);v&&Yi.fromTo(v,{width:"0%"},{width:"100%",duration:1,ease:"power2.out"}),d.current.reverse().eventCallback("onReverseComplete",()=>{r(null),f.current&&Yi.set(f.current,{opacity:0,bottom:"5%"})}),t(!1)};return bt.jsxs(bt.Fragment,{children:[bt.jsxs("nav",{className:Gn.nav,role:"navigation","aria-label":"main-nav",children:[bt.jsx("div",{}),bt.jsx("div",{className:Gn.logo,children:bt.jsx("a",{href:"./",children:"s. rivera"})}),bt.jsx("div",{className:Gn["toggle-btn"],children:bt.jsxs("button",{className:`${Gn.burger} ${o?Gn.active:""}`,onClick:p,ref:c,"aria-label":"Toggle menu",children:[bt.jsx("span",{}),bt.jsx("span",{}),bt.jsx("span",{})]})})]}),bt.jsxs("div",{ref:s,className:Gn.overlay,children:[bt.jsxs("menu",{className:Gn["overlay-menu"],children:[bt.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[0]=g)},children:bt.jsx("p",{className:n==="hero"?Gn.active:"",children:bt.jsx(bs.Link,{to:"hero",spy:!0,smooth:!0,duration:500,onClick:()=>m("hero"),children:"home"})})}),bt.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[1]=g)},children:bt.jsx("p",{className:n==="projects"?Gn.active:"",children:bt.jsx(bs.Link,{to:"projects",spy:!0,smooth:!0,duration:500,onClick:()=>m("projects"),children:"work"})})}),bt.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[2]=g)},children:bt.jsx("p",{className:n==="footer"?Gn.active:"",children:bt.jsx(bs.Link,{to:"footer",spy:!0,smooth:!0,duration:500,onClick:()=>m("footer"),children:"contact"})})})]}),bt.jsxs("div",{className:Gn["sub-nav"],ref:f,children:[bt.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane","aria-label":"email"}),bt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in",target:"_blank","aria-label":"linkedin"}),bt.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github",target:"_blank","aria-label":"github"}),bt.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen",target:"_blank","aria-label":"codepen"}),bt.jsx("a",{href:"https://www.youtube.com/@dnbsammie",className:"fa-brands fa-youtube",target:"_blank","aria-label":"youtube"})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const m_="178",_1=0,Yy=1,g1=2,ZS=1,v1=2,zr=3,Ba=0,ai=1,Fr=2,Oa=0,Lo=1,jy=2,Zy=3,Ky=4,y1=5,_s=100,x1=101,S1=102,M1=103,E1=104,T1=200,b1=201,A1=202,R1=203,rm=204,am=205,w1=206,C1=207,D1=208,U1=209,L1=210,O1=211,N1=212,P1=213,z1=214,sm=0,om=1,lm=2,Go=3,um=4,cm=5,fm=6,hm=7,KS=0,B1=1,I1=2,Na=0,F1=1,H1=2,G1=3,V1=4,k1=5,X1=6,q1=7,QS=300,Vo=301,ko=302,dm=303,pm=304,Vf=306,mm=1e3,ys=1001,_m=1002,Ki=1003,W1=1004,Wc=1005,Bi=1006,fp=1007,xs=1008,Xr=1009,JS=1010,$S=1011,uu=1012,__=1013,ws=1014,or=1015,pu=1016,g_=1017,v_=1018,cu=1020,tM=35902,eM=1021,nM=1022,Ii=1023,fu=1026,hu=1027,iM=1028,y_=1029,rM=1030,x_=1031,S_=1033,yf=33776,xf=33777,Sf=33778,Mf=33779,gm=35840,vm=35841,ym=35842,xm=35843,Sm=36196,Mm=37492,Em=37496,Tm=37808,bm=37809,Am=37810,Rm=37811,wm=37812,Cm=37813,Dm=37814,Um=37815,Lm=37816,Om=37817,Nm=37818,Pm=37819,zm=37820,Bm=37821,Ef=36492,Im=36494,Fm=36495,aM=36283,Hm=36284,Gm=36285,Vm=36286,Y1=3200,j1=3201,Z1=0,K1=1,Aa="",Oi="srgb",Xo="srgb-linear",Of="linear",He="srgb",co=7680,Qy=519,Q1=512,J1=513,$1=514,sM=515,tA=516,eA=517,nA=518,iA=519,Jy=35044,$y="300 es",Hr=2e3,Nf=2001;class Yo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const s=r[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const s=r.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hp=Math.PI/180,km=180/Math.PI;function mu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function rA(o,t){return(o%t+t)%t}function dp(o,t,n){return(1-n)*o+n*t}function ql(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(t=0,n=0){Ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,s=t.elements;return this.x=s[0]*n+s[3]*r+s[6],this.y=s[1]*n+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*r-c*s+t.x,this.y=l*s+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _u{constructor(t=0,n=0,r=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=s}static slerpFlat(t,n,r,s,l,c,f){let d=r[s+0],p=r[s+1],m=r[s+2],g=r[s+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=m,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(g!==M||d!==v||p!==y||m!==E){let S=1-f;const x=d*v+p*y+m*E+g*M,C=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,x*C);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const b=f*C;if(d=d*S+v*b,p=p*S+y*b,m=m*S+E*b,g=g*S+M*b,S===1-f){const O=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=O,p*=O,m*=O,g*=O}}t[n]=d,t[n+1]=p,t[n+2]=m,t[n+3]=g}static multiplyQuaternionsFlat(t,n,r,s,l,c){const f=r[s],d=r[s+1],p=r[s+2],m=r[s+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+m*g+d*y-p*v,t[n+1]=d*E+m*v+p*g-f*y,t[n+2]=p*E+m*y+f*v-d*g,t[n+3]=m*E-f*g-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,s){return this._x=t,this._y=n,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(r/2),m=f(s/2),g=f(l/2),v=d(r/2),y=d(s/2),E=d(l/2);switch(c){case"XYZ":this._x=v*m*g+p*y*E,this._y=p*y*g-v*m*E,this._z=p*m*E+v*y*g,this._w=p*m*g-v*y*E;break;case"YXZ":this._x=v*m*g+p*y*E,this._y=p*y*g-v*m*E,this._z=p*m*E-v*y*g,this._w=p*m*g+v*y*E;break;case"ZXY":this._x=v*m*g-p*y*E,this._y=p*y*g+v*m*E,this._z=p*m*E+v*y*g,this._w=p*m*g-v*y*E;break;case"ZYX":this._x=v*m*g-p*y*E,this._y=p*y*g+v*m*E,this._z=p*m*E-v*y*g,this._w=p*m*g+v*y*E;break;case"YZX":this._x=v*m*g+p*y*E,this._y=p*y*g+v*m*E,this._z=p*m*E-v*y*g,this._w=p*m*g-v*y*E;break;case"XZY":this._x=v*m*g-p*y*E,this._y=p*y*g-v*m*E,this._z=p*m*E+v*y*g,this._w=p*m*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,s=Math.sin(r);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],p=n[2],m=n[6],g=n[10],v=r+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-p)*y,this._z=(c-s)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-p)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(c-s)/y,this._x=(l+p)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const s=Math.min(1,n/r);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,s=t._y,l=t._z,c=t._w,f=n._x,d=n._y,p=n._z,m=n._w;return this._x=r*m+c*f+s*p-l*d,this._y=s*m+c*d+l*f-r*p,this._z=l*m+c*p+r*d-s*f,this._w=c*m-r*f-s*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+r*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=r,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),g=Math.sin((1-n)*m)/p,v=Math.sin(n*m)/p;return this._w=c*g+this._w*v,this._x=r*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,r=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6]*s,this.y=l[1]*n+l[4]*r+l[7]*s,this.z=l[2]*n+l[5]*r+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*r+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,s=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*s-f*r),m=2*(f*n-l*s),g=2*(l*r-c*n);return this.x=n+d*p+c*g-f*m,this.y=r+d*m+f*p-l*g,this.z=s+d*g+l*m-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*r+l[8]*s,this.y=l[1]*n+l[5]*r+l[9]*s,this.z=l[2]*n+l[6]*r+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,s=t.y,l=t.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-r*d,this.z=r*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pp.copy(this).projectOnVector(t),this.sub(pp)}reflect(t){return this.sub(pp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return n*n+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const s=Math.sin(n)*t;return this.x=s*Math.sin(r),this.y=Math.cos(n)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pp=new ut,tx=new _u;class oe{constructor(t,n,r,s,l,c,f,d,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,s,l,c,f,d,p)}set(t,n,r,s,l,c,f,d,p){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=r,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,l=this.elements,c=r[0],f=r[3],d=r[6],p=r[1],m=r[4],g=r[7],v=r[2],y=r[5],E=r[8],M=s[0],S=s[3],x=s[6],C=s[1],w=s[4],b=s[7],O=s[2],P=s[5],U=s[8];return l[0]=c*M+f*C+d*O,l[3]=c*S+f*w+d*P,l[6]=c*x+f*b+d*U,l[1]=p*M+m*C+g*O,l[4]=p*S+m*w+g*P,l[7]=p*x+m*b+g*U,l[2]=v*M+y*C+E*O,l[5]=v*S+y*w+E*P,l[8]=v*x+y*b+E*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8];return n*c*m-n*f*p-r*l*m+r*f*d+s*l*p-s*c*d}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=m*c-f*p,v=f*d-m*l,y=p*l-c*d,E=n*g+r*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(s*p-m*r)*M,t[2]=(f*r-s*c)*M,t[3]=v*M,t[4]=(m*n-s*d)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(r*d-p*n)*M,t[8]=(c*n-r*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,s,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*c+p*f)+c+t,-s*p,s*d,-s*(-p*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(mp.makeScale(t,n)),this}rotate(t){return this.premultiply(mp.makeRotation(-t)),this}translate(t,n){return this.premultiply(mp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<9;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mp=new oe;function oM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aA(){const o=Pf("canvas");return o.style.display="block",o}const ex={};function Oo(o){o in ex||(ex[o]=!0,console.warn(o))}function sA(o,t,n){return new Promise(function(r,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function oA(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lA(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nx=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ix=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const o={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(s.r=No(s.r),s.g=No(s.g),s.b=No(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Aa?Of:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Xo]:{primaries:t,whitePoint:r,transfer:Of,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),o}const Ae=uA();function Gr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function No(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fo;class cA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fo===void 0&&(fo=Pf("canvas")),fo.width=t.width,fo.height=t.height;const s=fo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),r=fo}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Pf("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const s=r.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Gr(l[c]/255)*255;return r.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gr(n[r]/255)*255):n[r]=Gr(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fA=0;class M_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=mu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(_p(s[c].image)):l.push(_p(s[c]))}else l=_p(s);r.url=l}return n||(t.images[this.uuid]=r),r}}function _p(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cA.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hA=0;const gp=new ut;class si extends Yo{constructor(t=si.DEFAULT_IMAGE,n=si.DEFAULT_MAPPING,r=ys,s=ys,l=Bi,c=xs,f=Ii,d=Xr,p=si.DEFAULT_ANISOTROPY,m=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=mu(),this.name="",this.source=new M_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gp).x}get height(){return this.source.getSize(gp).y}get depth(){return this.source.getSize(gp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==QS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mm:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case _m:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mm:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case _m:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=QS;si.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,r=0,s=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,s){return this.x=t,this.y=n,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,s,l;const d=t.elements,p=d[0],m=d[4],g=d[8],v=d[1],y=d[5],E=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(p+1)/2,b=(y+1)/2,O=(x+1)/2,P=(m+v)/4,U=(g+M)/4,B=(E+S)/4;return w>b&&w>O?w<.01?(r=0,s=.707106781,l=.707106781):(r=Math.sqrt(w),s=P/r,l=U/r):b>O?b<.01?(r=.707106781,s=0,l=.707106781):(s=Math.sqrt(b),r=P/s,l=B/s):O<.01?(r=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),r=U/l,s=B/l),this.set(r,s,l,n),this}let C=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(g-M)/C,this.z=(v-m)/C,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends Yo{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const s={width:t,height:n,depth:r.depth},l=new si(s);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=r,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new M_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends dA{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class lM extends si{constructor(t=null,n=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pA extends si{constructor(t=null,n=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ki):ki.fromBufferAttribute(l,c),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(t.matrixWorld),this.union(Yc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wl),jc.subVectors(this.max,Wl),ho.subVectors(t.a,Wl),po.subVectors(t.b,Wl),mo.subVectors(t.c,Wl),va.subVectors(po,ho),ya.subVectors(mo,po),os.subVectors(ho,mo);let n=[0,-va.z,va.y,0,-ya.z,ya.y,0,-os.z,os.y,va.z,0,-va.x,ya.z,0,-ya.x,os.z,0,-os.x,-va.y,va.x,0,-ya.y,ya.x,0,-os.y,os.x,0];return!vp(n,ho,po,mo,jc)||(n=[1,0,0,0,1,0,0,0,1],!vp(n,ho,po,mo,jc))?!1:(Zc.crossVectors(va,ya),n=[Zc.x,Zc.y,Zc.z],vp(n,ho,po,mo,jc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dr=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ki=new ut,Yc=new gu,ho=new ut,po=new ut,mo=new ut,va=new ut,ya=new ut,os=new ut,Wl=new ut,jc=new ut,Zc=new ut,ls=new ut;function vp(o,t,n,r,s){for(let l=0,c=o.length-3;l<=c;l+=3){ls.fromArray(o,l);const f=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),d=t.dot(ls),p=n.dot(ls),m=r.dot(ls);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const mA=new gu,Yl=new ut,yp=new ut;class E_{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):mA.setFromPoints(t).getCenter(r);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yl.subVectors(t,this.center);const n=Yl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),s=(r-this.radius)*.5;this.center.addScaledVector(Yl,s/r),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yl.copy(t.center).add(yp)),this.expandByPoint(Yl.copy(t.center).sub(yp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ur=new ut,xp=new ut,Kc=new ut,xa=new ut,Sp=new ut,Qc=new ut,Mp=new ut;class _A{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ur)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ur.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ur.copy(this.origin).addScaledVector(this.direction,n),Ur.distanceToSquared(t))}distanceSqToSegment(t,n,r,s){xp.copy(t).add(n).multiplyScalar(.5),Kc.copy(n).sub(t).normalize(),xa.copy(this.origin).sub(xp);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Kc),f=xa.dot(this.direction),d=-xa.dot(Kc),p=xa.lengthSq(),m=Math.abs(1-c*c);let g,v,y,E;if(m>0)if(g=c*d-f,v=c*f-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+p):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+v*(v+2*d)+p);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(xp).addScaledVector(Kc,v),y}intersectSphere(t,n){Ur.subVectors(t.center,this.origin);const r=Ur.dot(this.direction),s=Ur.dot(Ur)-r*r,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,s,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),r>c||l>s||((l>r||isNaN(r))&&(r=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),r>d||f>s)||((f>r||r!==r)&&(r=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(r>=0?r:s,n)}intersectsBox(t){return this.intersectBox(t,Ur)!==null}intersectTriangle(t,n,r,s,l){Sp.subVectors(n,t),Qc.subVectors(r,t),Mp.crossVectors(Sp,Qc);let c=this.direction.dot(Mp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xa.subVectors(this.origin,t);const d=f*this.direction.dot(Qc.crossVectors(xa,Qc));if(d<0)return null;const p=f*this.direction.dot(Sp.cross(xa));if(p<0||d+p>c)return null;const m=-f*xa.dot(Mp);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(t,n,r,s,l,c,f,d,p,m,g,v,y,E,M,S){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,s,l,c,f,d,p,m,g,v,y,E,M,S)}set(t,n,r,s,l,c,f,d,p,m,g,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,s=1/_o.setFromMatrixColumn(t,0).length(),l=1/_o.setFromMatrixColumn(t,1).length(),c=1/_o.setFromMatrixColumn(t,2).length();return n[0]=r[0]*s,n[1]=r[1]*s,n[2]=r[2]*s,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,s=t.y,l=t.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*m,y=c*g,E=f*m,M=f*g;n[0]=d*m,n[4]=-d*g,n[8]=p,n[1]=y+E*p,n[5]=v-M*p,n[9]=-f*d,n[2]=M-v*p,n[6]=E+y*p,n[10]=c*d}else if(t.order==="YXZ"){const v=d*m,y=d*g,E=p*m,M=p*g;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*p,n[1]=c*g,n[5]=c*m,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*d}else if(t.order==="ZXY"){const v=d*m,y=d*g,E=p*m,M=p*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*m,n[9]=M-v*f,n[2]=-c*p,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const v=c*m,y=c*g,E=f*m,M=f*g;n[0]=d*m,n[4]=E*p-y,n[8]=v*p+M,n[1]=d*g,n[5]=M*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const v=c*d,y=c*p,E=f*d,M=f*p;n[0]=d*m,n[4]=M-v*g,n[8]=E*g+y,n[1]=g,n[5]=c*m,n[9]=-f*m,n[2]=-p*m,n[6]=y*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,y=c*p,E=f*d,M=f*p;n[0]=d*m,n[4]=-g,n[8]=p*m,n[1]=v*g+M,n[5]=c*m,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*m,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gA,t,vA)}lookAt(t,n,r){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Sa.crossVectors(r,_i),Sa.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Sa.crossVectors(r,_i)),Sa.normalize(),Jc.crossVectors(_i,Sa),s[0]=Sa.x,s[4]=Jc.x,s[8]=_i.x,s[1]=Sa.y,s[5]=Jc.y,s[9]=_i.y,s[2]=Sa.z,s[6]=Jc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,l=this.elements,c=r[0],f=r[4],d=r[8],p=r[12],m=r[1],g=r[5],v=r[9],y=r[13],E=r[2],M=r[6],S=r[10],x=r[14],C=r[3],w=r[7],b=r[11],O=r[15],P=s[0],U=s[4],B=s[8],A=s[12],R=s[1],z=s[5],F=s[9],k=s[13],Z=s[2],at=s[6],H=s[10],q=s[14],j=s[3],xt=s[7],I=s[11],tt=s[15];return l[0]=c*P+f*R+d*Z+p*j,l[4]=c*U+f*z+d*at+p*xt,l[8]=c*B+f*F+d*H+p*I,l[12]=c*A+f*k+d*q+p*tt,l[1]=m*P+g*R+v*Z+y*j,l[5]=m*U+g*z+v*at+y*xt,l[9]=m*B+g*F+v*H+y*I,l[13]=m*A+g*k+v*q+y*tt,l[2]=E*P+M*R+S*Z+x*j,l[6]=E*U+M*z+S*at+x*xt,l[10]=E*B+M*F+S*H+x*I,l[14]=E*A+M*k+S*q+x*tt,l[3]=C*P+w*R+b*Z+O*j,l[7]=C*U+w*z+b*at+O*xt,l[11]=C*B+w*F+b*H+O*I,l[15]=C*A+w*k+b*q+O*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],s=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],m=t[2],g=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15];return E*(+l*d*g-s*p*g-l*f*v+r*p*v+s*f*y-r*d*y)+M*(+n*d*y-n*p*v+l*c*v-s*c*y+s*p*m-l*d*m)+S*(+n*p*g-n*f*y-l*c*g+r*c*y+l*f*m-r*p*m)+x*(-s*f*m-n*d*g+n*f*v+s*c*g-r*c*v+r*d*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],C=g*S*p-M*v*p+M*d*y-f*S*y-g*d*x+f*v*x,w=E*v*p-m*S*p-E*d*y+c*S*y+m*d*x-c*v*x,b=m*M*p-E*g*p+E*f*y-c*M*y-m*f*x+c*g*x,O=E*g*d-m*M*d-E*f*v+c*M*v+m*f*S-c*g*S,P=n*C+r*w+s*b+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=C*U,t[1]=(M*v*l-g*S*l-M*s*y+r*S*y+g*s*x-r*v*x)*U,t[2]=(f*S*l-M*d*l+M*s*p-r*S*p-f*s*x+r*d*x)*U,t[3]=(g*d*l-f*v*l-g*s*p+r*v*p+f*s*y-r*d*y)*U,t[4]=w*U,t[5]=(m*S*l-E*v*l+E*s*y-n*S*y-m*s*x+n*v*x)*U,t[6]=(E*d*l-c*S*l-E*s*p+n*S*p+c*s*x-n*d*x)*U,t[7]=(c*v*l-m*d*l+m*s*p-n*v*p-c*s*y+n*d*y)*U,t[8]=b*U,t[9]=(E*g*l-m*M*l-E*r*y+n*M*y+m*r*x-n*g*x)*U,t[10]=(c*M*l-E*f*l+E*r*p-n*M*p-c*r*x+n*f*x)*U,t[11]=(m*f*l-c*g*l-m*r*p+n*g*p+c*r*y-n*f*y)*U,t[12]=O*U,t[13]=(m*M*s-E*g*s+E*r*v-n*M*v-m*r*S+n*g*S)*U,t[14]=(E*f*s-c*M*s-E*r*d+n*M*d+c*r*S-n*f*S)*U,t[15]=(c*g*s-m*f*s+m*r*d-n*g*d-c*r*v+n*f*v)*U,this}scale(t){const n=this.elements,r=t.x,s=t.y,l=t.z;return n[0]*=r,n[4]*=s,n[8]*=l,n[1]*=r,n[5]*=s,n[9]*=l,n[2]*=r,n[6]*=s,n[10]*=l,n[3]*=r,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,s))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),s=Math.sin(n),l=1-r,c=t.x,f=t.y,d=t.z,p=l*c,m=l*f;return this.set(p*c+r,p*f-s*d,p*d+s*f,0,p*f+s*d,m*f+r,m*d-s*c,0,p*d-s*f,m*d+s*c,l*d*d+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,s,l,c){return this.set(1,r,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,r){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,p=l+l,m=c+c,g=f+f,v=l*p,y=l*m,E=l*g,M=c*m,S=c*g,x=f*g,C=d*p,w=d*m,b=d*g,O=r.x,P=r.y,U=r.z;return s[0]=(1-(M+x))*O,s[1]=(y+b)*O,s[2]=(E-w)*O,s[3]=0,s[4]=(y-b)*P,s[5]=(1-(v+x))*P,s[6]=(S+C)*P,s[7]=0,s[8]=(E+w)*U,s[9]=(S-C)*U,s[10]=(1-(v+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,r){const s=this.elements;let l=_o.set(s[0],s[1],s[2]).length();const c=_o.set(s[4],s[5],s[6]).length(),f=_o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Xi.copy(this);const p=1/l,m=1/c,g=1/f;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=m,Xi.elements[5]*=m,Xi.elements[6]*=m,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),r.x=l,r.y=c,r.z=f,this}makePerspective(t,n,r,s,l,c,f=Hr){const d=this.elements,p=2*l/(n-t),m=2*l/(r-s),g=(n+t)/(n-t),v=(r+s)/(r-s);let y,E;if(f===Hr)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Nf)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,r,s,l,c,f=Hr){const d=this.elements,p=1/(n-t),m=1/(r-s),g=1/(c-l),v=(n+t)*p,y=(r+s)*m;let E,M;if(f===Hr)E=(c+l)*g,M=-2*g;else if(f===Nf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const _o=new ut,Xi=new _n,gA=new ut(0,0,0),vA=new ut(1,1,1),Sa=new ut,Jc=new ut,_i=new ut,rx=new _n,ax=new _u;class Ds{constructor(t=0,n=0,r=0,s=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],d=s[1],p=s[5],m=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rx,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ax.setFromEuler(this),this.setFromQuaternion(ax,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class uM{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yA=0;const sx=new ut,go=new _u,Lr=new _n,$c=new ut,jl=new ut,xA=new ut,SA=new _u,ox=new ut(1,0,0),lx=new ut(0,1,0),ux=new ut(0,0,1),cx={type:"added"},MA={type:"removed"},vo={type:"childadded",child:null},Ep={type:"childremoved",child:null};class Fi extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=mu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fi.DEFAULT_UP.clone();const t=new ut,n=new Ds,r=new _u,s=new ut(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new oe}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.premultiply(go),this}rotateX(t){return this.rotateOnAxis(ox,t)}rotateY(t){return this.rotateOnAxis(lx,t)}rotateZ(t){return this.rotateOnAxis(ux,t)}translateOnAxis(t,n){return sx.copy(t).applyQuaternion(this.quaternion),this.position.add(sx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ox,t)}translateY(t){return this.translateOnAxis(lx,t)}translateZ(t){return this.translateOnAxis(ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?$c.copy(t):$c.set(t,n,r);const s=this.parent;this.updateWorldMatrix(!0,!1),jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(jl,$c,this.up):Lr.lookAt($c,jl,this.up),this.quaternion.setFromRotationMatrix(Lr),s&&(Lr.extractRotation(s.matrixWorld),go.setFromRotationMatrix(Lr),this.quaternion.premultiply(go.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cx),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(MA),Ep.child=t,this.dispatchEvent(Ep),Ep.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cx),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,t,xA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,SA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),m=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=s,r;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const s=t.children[r];this.add(s.clone())}return this}}Fi.DEFAULT_UP=new ut(0,1,0);Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new ut,Or=new ut,Tp=new ut,Nr=new ut,yo=new ut,xo=new ut,fx=new ut,bp=new ut,Ap=new ut,Rp=new ut,wp=new un,Cp=new un,Dp=new un;class ji{constructor(t=new ut,n=new ut,r=new ut){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,s){s.subVectors(r,n),qi.subVectors(t,n),s.cross(qi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,r,s,l){qi.subVectors(s,n),Or.subVectors(r,n),Tp.subVectors(t,n);const c=qi.dot(qi),f=qi.dot(Or),d=qi.dot(Tp),p=Or.dot(Or),m=Or.dot(Tp),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(p*d-f*m)*v,E=(c*m-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,r,s){return this.getBarycoord(t,n,r,s,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(t,n,r,s,l,c,f,d){return this.getBarycoord(t,n,r,s,Nr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Nr.x),d.addScaledVector(c,Nr.y),d.addScaledVector(f,Nr.z),d)}static getInterpolatedAttribute(t,n,r,s,l,c){return wp.setScalar(0),Cp.setScalar(0),Dp.setScalar(0),wp.fromBufferAttribute(t,n),Cp.fromBufferAttribute(t,r),Dp.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(wp,l.x),c.addScaledVector(Cp,l.y),c.addScaledVector(Dp,l.z),c}static isFrontFacing(t,n,r,s){return qi.subVectors(r,n),Or.subVectors(t,n),qi.cross(Or).dot(s)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,s){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,r,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),qi.cross(Or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,s,l){return ji.getInterpolation(t,this.a,this.b,this.c,n,r,s,l)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,s=this.b,l=this.c;let c,f;yo.subVectors(s,r),xo.subVectors(l,r),bp.subVectors(t,r);const d=yo.dot(bp),p=xo.dot(bp);if(d<=0&&p<=0)return n.copy(r);Ap.subVectors(t,s);const m=yo.dot(Ap),g=xo.dot(Ap);if(m>=0&&g<=m)return n.copy(s);const v=d*g-m*p;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(r).addScaledVector(yo,c);Rp.subVectors(t,l);const y=yo.dot(Rp),E=xo.dot(Rp);if(E>=0&&y<=E)return n.copy(l);const M=y*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(r).addScaledVector(xo,f);const S=m*E-y*g;if(S<=0&&g-m>=0&&y-E>=0)return fx.subVectors(l,s),f=(g-m)/(g-m+(y-E)),n.copy(s).addScaledVector(fx,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(r).addScaledVector(yo,c).addScaledVector(xo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},tf={h:0,s:0,l:0};function Up(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Re{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,r,s=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ae.colorSpaceToWorking(this,s),this}setHSL(t,n,r,s=Ae.workingColorSpace){if(t=rA(t,1),n=ye(n,0,1),r=ye(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Up(c,l,t+1/3),this.g=Up(c,l,t),this.b=Up(c,l,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,n=Oi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const r=cM[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return Ae.workingToColorSpace(kn.copy(this),t),Math.round(ye(kn.r*255,0,255))*65536+Math.round(ye(kn.g*255,0,255))*256+Math.round(ye(kn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(kn.copy(this),n);const r=kn.r,s=kn.g,l=kn.b,c=Math.max(r,s,l),f=Math.min(r,s,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=m<=.5?g/(c+f):g/(2-c-f),c){case r:d=(s-l)/g+(s<l?6:0);break;case s:d=(l-r)/g+2;break;case l:d=(r-s)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Oi){Ae.workingToColorSpace(kn.copy(this),t);const n=kn.r,r=kn.g,s=kn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(t,n,r){return this.getHSL(Ma),this.setHSL(Ma.h+t,Ma.s+n,Ma.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Ma),t.getHSL(tf);const r=dp(Ma.h,tf.h,n),s=dp(Ma.s,tf.s,n),l=dp(Ma.l,tf.l,n);return this.setHSL(r,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*r+l[6]*s,this.g=l[1]*n+l[4]*r+l[7]*s,this.b=l[2]*n+l[5]*r+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Re;Re.NAMES=cM;let EA=0;class kf extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=mu(),this.name="",this.type="Material",this.blending=Lo,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rm,this.blendDst=am,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rm&&(r.blendSrc=this.blendSrc),this.blendDst!==am&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(r.stencilFail=this.stencilFail),this.stencilZFail!==co&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const s=n.length;r=new Array(s);for(let l=0;l!==s;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fM extends kf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=KS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ut,ef=new Ue;let TA=0;class lr{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Jy,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[r+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ef.fromBufferAttribute(this,n),ef.applyMatrix3(t),this.setXY(n,ef.x,ef.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=ql(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=ti(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ql(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ql(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ql(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ql(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=s,this}setXYZW(t,n,r,s,l){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jy&&(t.usage=this.usage),t}}class hM extends lr{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class dM extends lr{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class As extends lr{constructor(t,n,r){super(new Float32Array(t),n,r)}}let bA=0;const Ui=new _n,Lp=new Fi,So=new ut,gi=new gu,Zl=new gu,Cn=new ut;class Us extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=mu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oM(t)?dM:hM)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new oe().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,r){return Ui.makeTranslation(t,n,r),this.applyMatrix4(Ui),this}scale(t,n,r){return Ui.makeScale(t,n,r),this.applyMatrix4(Ui),this}lookAt(t){return Lp.lookAt(t),Lp.updateMatrix(),this.applyMatrix4(Lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new As(r,3))}else{const r=Math.min(t.length,n.count);for(let s=0;s<r;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const l=n[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new E_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Zl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(gi.min,Zl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,Zl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(Zl.min),gi.expandByPoint(Zl.max))}gi.getCenter(r);let s=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),s=Math.max(s,r.distanceToSquared(Cn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Cn.fromBufferAttribute(f,p),d&&(So.fromBufferAttribute(t,p),Cn.add(So)),s=Math.max(s,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lr(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<r.count;B++)f[B]=new ut,d[B]=new ut;const p=new ut,m=new ut,g=new ut,v=new Ue,y=new Ue,E=new Ue,M=new ut,S=new ut;function x(B,A,R){p.fromBufferAttribute(r,B),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,B),y.fromBufferAttribute(l,A),E.fromBufferAttribute(l,R),m.sub(p),g.sub(p),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(z),f[B].add(M),f[A].add(M),f[R].add(M),d[B].add(S),d[A].add(S),d[R].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let B=0,A=C.length;B<A;++B){const R=C[B],z=R.start,F=R.count;for(let k=z,Z=z+F;k<Z;k+=3)x(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new ut,b=new ut,O=new ut,P=new ut;function U(B){O.fromBufferAttribute(s,B),P.copy(O);const A=f[B];w.copy(A),w.sub(O.multiplyScalar(O.dot(A))).normalize(),b.crossVectors(P,A);const z=b.dot(d[B])<0?-1:1;c.setXYZW(B,w.x,w.y,w.z,z)}for(let B=0,A=C.length;B<A;++B){const R=C[B],z=R.start,F=R.count;for(let k=z,Z=z+F;k<Z;k+=3)U(t.getX(k+0)),U(t.getX(k+1)),U(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new lr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const s=new ut,l=new ut,c=new ut,f=new ut,d=new ut,p=new ut,m=new ut,g=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,S),f.add(m),d.add(m),p.add(m),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,d){const p=f.array,m=f.itemSize,g=f.normalized,v=new p.constructor(d.length*m);let y=0,E=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*m;for(let x=0;x<m;x++)v[E++]=p[y++]}return new lr(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Us,r=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=t(d,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const v=p[m],y=t(v,r);d.push(y)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const p=r[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];m.push(y.toJSON(t.data))}m.length>0&&(s[d]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const s=t.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(n))}const l=t.morphAttributes;for(const p in l){const m=[],g=l[p];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(n));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,m=c.length;p<m;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hx=new _n,us=new _A,nf=new E_,dx=new ut,rf=new ut,af=new ut,sf=new ut,Op=new ut,of=new ut,px=new ut,lf=new ut;class Zi extends Fi{constructor(t=new Us,n=new fM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const s=n[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const r=this.geometry,s=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){of.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],g=l[d];m!==0&&(Op.fromBufferAttribute(g,t),c?of.addScaledVector(Op,m):of.addScaledVector(Op.sub(n),m))}n.add(of)}return n}raycast(t,n){const r=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nf.copy(r.boundingSphere),nf.applyMatrix4(l),us.copy(t.ray).recast(t.near),!(nf.containsPoint(us.origin)===!1&&(us.intersectSphere(nf,dx)===null||us.origin.distanceToSquared(dx)>(t.far-t.near)**2))&&(hx.copy(l).invert(),us.copy(t.ray).applyMatrix4(hx),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,us)))}_computeIntersections(t,n,r){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],C=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=C,O=w;b<O;b+=3){const P=f.getX(b),U=f.getX(b+1),B=f.getX(b+2);s=uf(this,x,t,r,p,m,g,P,U,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const C=f.getX(S),w=f.getX(S+1),b=f.getX(S+2);s=uf(this,c,t,r,p,m,g,C,w,b),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],C=Math.max(S.start,y.start),w=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=C,O=w;b<O;b+=3){const P=b,U=b+1,B=b+2;s=uf(this,x,t,r,p,m,g,P,U,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const C=S,w=S+1,b=S+2;s=uf(this,c,t,r,p,m,g,C,w,b),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function AA(o,t,n,r,s,l,c,f){let d;if(t.side===ai?d=r.intersectTriangle(c,l,s,!0,f):d=r.intersectTriangle(s,l,c,t.side===Ba,f),d===null)return null;lf.copy(f),lf.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(lf);return p<n.near||p>n.far?null:{distance:p,point:lf.clone(),object:o}}function uf(o,t,n,r,s,l,c,f,d,p){o.getVertexPosition(f,rf),o.getVertexPosition(d,af),o.getVertexPosition(p,sf);const m=AA(o,t,n,r,rf,af,sf,px);if(m){const g=new ut;ji.getBarycoord(px,rf,af,sf,g),s&&(m.uv=ji.getInterpolatedAttribute(s,f,d,p,g,new Ue)),l&&(m.uv1=ji.getInterpolatedAttribute(l,f,d,p,g,new Ue)),c&&(m.normal=ji.getInterpolatedAttribute(c,f,d,p,g,new ut),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new ut,materialIndex:0};ji.getNormal(rf,af,sf,v.normal),m.face=v,m.barycoord=g}return m}class vu extends Us{constructor(t=1,n=1,r=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,r,n,t,c,l,0),E("z","y","x",1,-1,r,n,-t,c,l,1),E("x","z","y",1,1,t,r,n,s,c,2),E("x","z","y",1,-1,t,r,-n,s,c,3),E("x","y","z",1,-1,t,n,r,s,l,4),E("x","y","z",-1,-1,t,n,-r,s,l,5),this.setIndex(d),this.setAttribute("position",new As(p,3)),this.setAttribute("normal",new As(m,3)),this.setAttribute("uv",new As(g,2));function E(M,S,x,C,w,b,O,P,U,B,A){const R=b/U,z=O/B,F=b/2,k=O/2,Z=P/2,at=U+1,H=B+1;let q=0,j=0;const xt=new ut;for(let I=0;I<H;I++){const tt=I*z-k;for(let dt=0;dt<at;dt++){const gt=dt*R-F;xt[M]=gt*C,xt[S]=tt*w,xt[x]=Z,p.push(xt.x,xt.y,xt.z),xt[M]=0,xt[S]=0,xt[x]=P>0?1:-1,m.push(xt.x,xt.y,xt.z),g.push(dt/U),g.push(1-I/B),q+=1}}for(let I=0;I<B;I++)for(let tt=0;tt<U;tt++){const dt=v+tt+at*I,gt=v+tt+at*(I+1),K=v+(tt+1)+at*(I+1),ft=v+(tt+1)+at*I;d.push(dt,gt,ft),d.push(gt,K,ft),j+=6}f.addGroup(y,j,A),y+=j,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qo(o){const t={};for(const n in o){t[n]={};for(const r in o[n]){const s=o[n][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=s.clone():Array.isArray(s)?t[n][r]=s.slice():t[n][r]=s}}return t}function Yn(o){const t={};for(let n=0;n<o.length;n++){const r=qo(o[n]);for(const s in r)t[s]=r[s]}return t}function RA(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function pM(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const wA={clone:qo,merge:Yn};var CA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends kf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CA,this.fragmentShader=DA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qo(t.uniforms),this.uniformsGroups=RA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mM extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Hr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ea=new ut,mx=new Ue,_x=new Ue;class Wi extends mM{constructor(t=50,n=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=km*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return km*2*Math.atan(Math.tan(hp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,mx,_x),n.subVectors(_x,mx)}setViewOffset(t,n,r,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(hp*.5*this.fov)/this.zoom,r=2*n,s=this.aspect*r,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*r/p,s*=c.width/d,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mo=-90,Eo=1;class UA extends Fi{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wi(Mo,Eo,t,n);s.layers=this.layers,this.add(s);const l=new Wi(Mo,Eo,t,n);l.layers=this.layers,this.add(l);const c=new Wi(Mo,Eo,t,n);c.layers=this.layers,this.add(c);const f=new Wi(Mo,Eo,t,n);f.layers=this.layers,this.add(f);const d=new Wi(Mo,Eo,t,n);d.layers=this.layers,this.add(d);const p=new Wi(Mo,Eo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,s,l,c,f,d]=n;for(const p of n)this.remove(p);if(t===Hr)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Nf)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,s),t.render(n,l),t.setRenderTarget(r,1,s),t.render(n,c),t.setRenderTarget(r,2,s),t.render(n,f),t.setRenderTarget(r,3,s),t.render(n,d),t.setRenderTarget(r,4,s),t.render(n,p),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,s),t.render(n,m),t.setRenderTarget(g,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _M extends si{constructor(t=[],n=Vo,r,s,l,c,f,d,p,m){super(t,n,r,s,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class LA extends Ia{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},s=[r,r,r,r,r,r];this.texture=new _M(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vu(5,5,5),l=new cr({name:"CubemapFromEquirect",uniforms:qo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Oa});l.uniforms.tEquirect.value=n;const c=new Zi(s,l),f=n.minFilter;return n.minFilter===xs&&(n.minFilter=Bi),new UA(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,s);t.setRenderTarget(l)}}class cf extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OA={type:"move"};class Np{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,r),x=this._getHandJoint(p,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,r),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new cf;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}const Pp=new ut,NA=new ut,PA=new oe;class ps{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,s){return this.normal.set(t,n,r),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const s=Pp.subVectors(r,n).cross(NA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Pp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||PA.getNormalMatrix(t),s=this.coplanarPoint(Pp).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new E_,zA=new Ue(.5,.5),ff=new ut;class gM{constructor(t=new ps,n=new ps,r=new ps,s=new ps,l=new ps,c=new ps){this.planes=[t,n,r,s,l,c]}set(t,n,r,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(r),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Hr){const r=this.planes,s=t.elements,l=s[0],c=s[1],f=s[2],d=s[3],p=s[4],m=s[5],g=s[6],v=s[7],y=s[8],E=s[9],M=s[10],S=s[11],x=s[12],C=s[13],w=s[14],b=s[15];if(r[0].setComponents(d-l,v-p,S-y,b-x).normalize(),r[1].setComponents(d+l,v+p,S+y,b+x).normalize(),r[2].setComponents(d+c,v+m,S+E,b+C).normalize(),r[3].setComponents(d-c,v-m,S-E,b-C).normalize(),r[4].setComponents(d-f,v-g,S-M,b-w).normalize(),n===Hr)r[5].setComponents(d+f,v+g,S+M,b+w).normalize();else if(n===Nf)r[5].setComponents(f,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const n=zA.distanceTo(t.center);return cs.radius=.7071067811865476+n,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const n=this.planes,r=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const s=n[r];if(ff.x=s.normal.x>0?t.max.x:t.min.x,ff.y=s.normal.y>0?t.max.y:t.min.y,ff.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ff)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vM extends si{constructor(t,n,r=ws,s,l,c,f=Ki,d=Ki,p,m=fu,g=1){if(m!==fu&&m!==hu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,d,m,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new M_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yu extends Us{constructor(t=1,n=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(r),d=Math.floor(s),p=f+1,m=d+1,g=t/f,v=n/d,y=[],E=[],M=[],S=[];for(let x=0;x<m;x++){const C=x*v-c;for(let w=0;w<p;w++){const b=w*g-l;E.push(b,-C,0),M.push(0,0,1),S.push(w/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let C=0;C<f;C++){const w=C+p*x,b=C+p*(x+1),O=C+1+p*(x+1),P=C+1+p*x;y.push(w,b,P),y.push(b,O,P)}this.setIndex(y),this.setAttribute("position",new As(E,3)),this.setAttribute("normal",new As(M,3)),this.setAttribute("uv",new As(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class BA extends kf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IA extends kf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yM extends mM{constructor(t=-1,n=1,r=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=r-t,c=r+t,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class FA extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function gx(o,t,n,r){const s=HA(r);switch(n){case eM:return o*t;case iM:return o*t/s.components*s.byteLength;case y_:return o*t/s.components*s.byteLength;case rM:return o*t*2/s.components*s.byteLength;case x_:return o*t*2/s.components*s.byteLength;case nM:return o*t*3/s.components*s.byteLength;case Ii:return o*t*4/s.components*s.byteLength;case S_:return o*t*4/s.components*s.byteLength;case yf:case xf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sf:case Mf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vm:case xm:return Math.max(o,16)*Math.max(t,8)/4;case gm:case ym:return Math.max(o,8)*Math.max(t,8)/2;case Sm:case Mm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Am:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Rm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case wm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Cm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Um:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Om:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Nm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Pm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case zm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Bm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ef:case Im:case Fm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case aM:case Hm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Gm:case Vm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HA(o){switch(o){case Xr:case JS:return{byteLength:1,components:1};case uu:case $S:case pu:return{byteLength:2,components:1};case g_:case v_:return{byteLength:2,components:4};case ws:case __:case or:return{byteLength:4,components:1};case tM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:m_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=m_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xM(){let o=null,t=!1,n=null,r=null;function s(l,c){n(l,c),r=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(r=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function GA(o){const t=new WeakMap;function n(f,d){const p=f.array,m=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,m),f.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,p){const m=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,m);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];o.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:s,remove:l,update:c}}var VA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$A=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vR="gl_FragColor = linearToOutputTexel( gl_FragColor );",yR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$R=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:VA,alphahash_pars_fragment:kA,alphamap_fragment:XA,alphamap_pars_fragment:qA,alphatest_fragment:WA,alphatest_pars_fragment:YA,aomap_fragment:jA,aomap_pars_fragment:ZA,batching_pars_vertex:KA,batching_vertex:QA,begin_vertex:JA,beginnormal_vertex:$A,bsdfs:tR,iridescence_fragment:eR,bumpmap_pars_fragment:nR,clipping_planes_fragment:iR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:aR,clipping_planes_vertex:sR,color_fragment:oR,color_pars_fragment:lR,color_pars_vertex:uR,color_vertex:cR,common:fR,cube_uv_reflection_fragment:hR,defaultnormal_vertex:dR,displacementmap_pars_vertex:pR,displacementmap_vertex:mR,emissivemap_fragment:_R,emissivemap_pars_fragment:gR,colorspace_fragment:vR,colorspace_pars_fragment:yR,envmap_fragment:xR,envmap_common_pars_fragment:SR,envmap_pars_fragment:MR,envmap_pars_vertex:ER,envmap_physical_pars_fragment:NR,envmap_vertex:TR,fog_vertex:bR,fog_pars_vertex:AR,fog_fragment:RR,fog_pars_fragment:wR,gradientmap_pars_fragment:CR,lightmap_pars_fragment:DR,lights_lambert_fragment:UR,lights_lambert_pars_fragment:LR,lights_pars_begin:OR,lights_toon_fragment:PR,lights_toon_pars_fragment:zR,lights_phong_fragment:BR,lights_phong_pars_fragment:IR,lights_physical_fragment:FR,lights_physical_pars_fragment:HR,lights_fragment_begin:GR,lights_fragment_maps:VR,lights_fragment_end:kR,logdepthbuf_fragment:XR,logdepthbuf_pars_fragment:qR,logdepthbuf_pars_vertex:WR,logdepthbuf_vertex:YR,map_fragment:jR,map_pars_fragment:ZR,map_particle_fragment:KR,map_particle_pars_fragment:QR,metalnessmap_fragment:JR,metalnessmap_pars_fragment:$R,morphinstance_vertex:tw,morphcolor_vertex:ew,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:rw,normal_fragment_begin:aw,normal_fragment_maps:sw,normal_pars_fragment:ow,normal_pars_vertex:lw,normal_vertex:uw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:_w,premultiplied_alpha_fragment:gw,project_vertex:vw,dithering_fragment:yw,dithering_pars_fragment:xw,roughnessmap_fragment:Sw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:Tw,shadowmap_vertex:bw,shadowmask_pars_fragment:Aw,skinbase_vertex:Rw,skinning_pars_vertex:ww,skinning_vertex:Cw,skinnormal_vertex:Dw,specularmap_fragment:Uw,specularmap_pars_fragment:Lw,tonemapping_fragment:Ow,tonemapping_pars_fragment:Nw,transmission_fragment:Pw,transmission_pars_fragment:zw,uv_pars_fragment:Bw,uv_pars_vertex:Iw,uv_vertex:Fw,worldpos_vertex:Hw,background_vert:Gw,background_frag:Vw,backgroundCube_vert:kw,backgroundCube_frag:Xw,cube_vert:qw,cube_frag:Ww,depth_vert:Yw,depth_frag:jw,distanceRGBA_vert:Zw,distanceRGBA_frag:Kw,equirect_vert:Qw,equirect_frag:Jw,linedashed_vert:$w,linedashed_frag:tC,meshbasic_vert:eC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:rC,meshmatcap_vert:aC,meshmatcap_frag:sC,meshnormal_vert:oC,meshnormal_frag:lC,meshphong_vert:uC,meshphong_frag:cC,meshphysical_vert:fC,meshphysical_frag:hC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:_C,shadow_vert:gC,shadow_frag:vC,sprite_vert:yC,sprite_frag:xC},Ot={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},rr={basic:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Yn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Yn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Yn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Yn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Yn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Yn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Yn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Yn([Ot.lights,Ot.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};rr.physical={uniforms:Yn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const hf={r:0,b:0,g:0},fs=new Ds,SC=new _n;function MC(o,t,n,r,s,l,c){const f=new Re(0);let d=l===!0?0:1,p,m,g=null,v=0,y=null;function E(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?n:t).get(b)),b}function M(w){let b=!1;const O=E(w);O===null?x(f,d):O&&O.isColor&&(x(O,1),b=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(w,b){const O=E(b);O&&(O.isCubeTexture||O.mapping===Vf)?(m===void 0&&(m=new Zi(new vu(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:qo(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),fs.copy(b.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(fs)),m.material.toneMapped=Ae.getTransfer(O.colorSpace)!==He,(g!==O||v!==O.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Zi(new yu(2,2),new cr({name:"BackgroundMaterial",uniforms:qo(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function x(w,b){w.getRGB(hf,pM(o)),r.buffers.color.setClear(hf.r,hf.g,hf.b,b,c)}function C(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,b=1){f.set(w),d=b,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,x(f,d)},render:M,addToRenderList:S,dispose:C}}function EC(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},s=v(null);let l=s,c=!1;function f(R,z,F,k,Z){let at=!1;const H=g(k,F,z);l!==H&&(l=H,p(l.object)),at=y(R,k,F,Z),at&&E(R,k,F,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,b(R,z,F,k),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,F){const k=F.wireframe===!0;let Z=r[R.id];Z===void 0&&(Z={},r[R.id]=Z);let at=Z[z.id];at===void 0&&(at={},Z[z.id]=at);let H=at[k];return H===void 0&&(H=v(d()),at[k]=H),H}function v(R){const z=[],F=[],k=[];for(let Z=0;Z<n;Z++)z[Z]=0,F[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:k,object:R,attributes:{},index:null}}function y(R,z,F,k){const Z=l.attributes,at=z.attributes;let H=0;const q=F.getAttributes();for(const j in q)if(q[j].location>=0){const I=Z[j];let tt=at[j];if(tt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),I===void 0||I.attribute!==tt||tt&&I.data!==tt.data)return!0;H++}return l.attributesNum!==H||l.index!==k}function E(R,z,F,k){const Z={},at=z.attributes;let H=0;const q=F.getAttributes();for(const j in q)if(q[j].location>=0){let I=at[j];I===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const tt={};tt.attribute=I,I&&I.data&&(tt.data=I.data),Z[j]=tt,H++}l.attributes=Z,l.attributesNum=H,l.index=k}function M(){const R=l.newAttributes;for(let z=0,F=R.length;z<F;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const F=l.newAttributes,k=l.enabledAttributes,Z=l.attributeDivisors;F[R]=1,k[R]===0&&(o.enableVertexAttribArray(R),k[R]=1),Z[R]!==z&&(o.vertexAttribDivisor(R,z),Z[R]=z)}function C(){const R=l.newAttributes,z=l.enabledAttributes;for(let F=0,k=z.length;F<k;F++)z[F]!==R[F]&&(o.disableVertexAttribArray(F),z[F]=0)}function w(R,z,F,k,Z,at,H){H===!0?o.vertexAttribIPointer(R,z,F,Z,at):o.vertexAttribPointer(R,z,F,k,Z,at)}function b(R,z,F,k){M();const Z=k.attributes,at=F.getAttributes(),H=z.defaultAttributeValues;for(const q in at){const j=at[q];if(j.location>=0){let xt=Z[q];if(xt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const I=xt.normalized,tt=xt.itemSize,dt=t.get(xt);if(dt===void 0)continue;const gt=dt.buffer,K=dt.type,ft=dt.bytesPerElement,St=K===o.INT||K===o.UNSIGNED_INT||xt.gpuType===__;if(xt.isInterleavedBufferAttribute){const wt=xt.data,Et=wt.stride,Qt=xt.offset;if(wt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<j.locationSize;Vt++)x(j.location+Vt,wt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)S(j.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Vt=0;Vt<j.locationSize;Vt++)w(j.location+Vt,tt/j.locationSize,K,I,Et*ft,(Qt+tt/j.locationSize*Vt)*ft,St)}else{if(xt.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)x(j.location+wt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let wt=0;wt<j.locationSize;wt++)S(j.location+wt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let wt=0;wt<j.locationSize;wt++)w(j.location+wt,tt/j.locationSize,K,I,tt*ft,tt/j.locationSize*wt*ft,St)}}else if(H!==void 0){const I=H[q];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(j.location,I);break;case 3:o.vertexAttrib3fv(j.location,I);break;case 4:o.vertexAttrib4fv(j.location,I);break;default:o.vertexAttrib1fv(j.location,I)}}}}C()}function O(){B();for(const R in r){const z=r[R];for(const F in z){const k=z[F];for(const Z in k)m(k[Z].object),delete k[Z];delete z[F]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const F in z){const k=z[F];for(const Z in k)m(k[Z].object),delete k[Z];delete z[F]}delete r[R.id]}function U(R){for(const z in r){const F=r[z];if(F[R.id]===void 0)continue;const k=F[R.id];for(const Z in k)m(k[Z].object),delete k[Z];delete F[R.id]}}function B(){A(),c=!0,l!==s&&(l=s,p(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:B,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:S,disableUnusedAttributes:C}}function TC(o,t,n){let r;function s(p){r=p}function l(p,m){o.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,g){g!==0&&(o.drawArraysInstanced(r,p,m,g),n.update(m,r,g))}function f(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,g);let y=0;for(let E=0;E<g;E++)y+=m[E];n.update(y,r,1)}function d(p,m,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)c(p[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];n.update(E,r,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function bC(o,t,n,r){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==Ii&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const B=U===pu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Xr&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==or&&!B)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:O,maxSamples:P}}function AC(o){const t=this;let n=null,r=0,s=!1,l=!1;const c=new ps,f=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||s;return s=v,r=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||l&&!S)l?m(null):p();else{const C=l?0:r,w=C*4;let b=x.clippingState||null;d.value=b,b=m(E,v,w,y);for(let O=0;O!==w;++O)b[O]=n[O];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(g,v,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const x=y+M*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,b=y;w!==M;++w,b+=4)c.copy(g[w]).applyMatrix4(C,f),c.normal.toArray(S,b),S[b+3]=c.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function RC(o){let t=new WeakMap;function n(c,f){return f===dm?c.mapping=Vo:f===pm&&(c.mapping=ko),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===dm||f===pm)if(t.has(c)){const d=t.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new LA(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",s),n(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const wo=4,vx=[.125,.215,.35,.446,.526,.582],gs=20,zp=new yM,yx=new Re;let Bp=null,Ip=0,Fp=0,Hp=!1;const ms=(1+Math.sqrt(5))/2,To=1/ms,xx=[new ut(-ms,To,0),new ut(ms,To,0),new ut(-To,0,ms),new ut(To,0,ms),new ut(0,ms,-To),new ut(0,ms,To),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],wC=new ut;class Sx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,s=100,l={}){const{size:c=256,position:f=wC}=l;Bp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bp,Ip,Fp),this._renderer.xr.enabled=Hp,t.scissorTest=!1,df(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vo||t.mapping===ko?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:pu,format:Ii,colorSpace:Xo,depthBuffer:!1},s=Mx(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mx(t,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CC(l)),this._blurMaterial=DC(l,t,n)}return s}_compileMaterial(t){const n=new Zi(this._lodPlanes[0],t);this._renderer.compile(n,zp)}_sceneToCubeUV(t,n,r,s,l){const d=new Wi(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(yx),g.toneMapping=Na,g.autoClear=!1;const E=new fM({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),M=new Zi(new vu,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(yx),S=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(d.up.set(0,p[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[C],l.y,l.z)):w===1?(d.up.set(0,0,p[C]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[C],l.z)):(d.up.set(0,p[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[C]));const b=this._cubeSize;df(s,w*b,C>2?b:0,b,b),g.setRenderTarget(s),S&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,s=t.mapping===Vo||t.mapping===ko;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ex());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Zi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;df(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(c,zp)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=xx[(s-l-1)%xx.length];this._blur(t,l-1,l,c,f)}n.autoClear=r}_blur(t,n,r,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,s,"latitudinal",l),this._halfBlur(c,t,r,r,s,"longitudinal",l)}_halfBlur(t,n,r,s,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Zi(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*gs-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):gs;S>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const x=[];let C=0;for(let U=0;U<gs;++U){const B=U/M,A=Math.exp(-B*B/2);x.push(A),U===0?C+=A:U<S&&(C+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/C;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-r;const b=this._sizeLods[s],O=3*b*(s>w-wo?s-w+wo:0),P=4*(this._cubeSize-b);df(n,O,P,3*b,2*b),d.setRenderTarget(n),d.render(g,zp)}}function CC(o){const t=[],n=[],r=[];let s=o;const l=o-wo+1+vx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let d=1/f;c>o-wo?d=vx[c-o+wo-1]:c===0&&(d=0),r.push(d);const p=1/(f-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,E=6,M=3,S=2,x=1,C=new Float32Array(M*E*y),w=new Float32Array(S*E*y),b=new Float32Array(x*E*y);for(let P=0;P<y;P++){const U=P%3*2/3-1,B=P>2?0:-1,A=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];C.set(A,M*E*P),w.set(v,S*E*P);const R=[P,P,P,P,P,P];b.set(R,x*E*P)}const O=new Us;O.setAttribute("position",new lr(C,M)),O.setAttribute("uv",new lr(w,S)),O.setAttribute("faceIndex",new lr(b,x)),t.push(O),s>wo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Mx(o,t,n){const r=new Ia(o,t,n);return r.texture.mapping=Vf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function df(o,t,n,r,s){o.viewport.set(t,n,r,s),o.scissor.set(t,n,r,s)}function DC(o,t,n){const r=new Float32Array(gs),s=new ut(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:T_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Ex(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:T_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Tx(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:T_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function T_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UC(o){let t=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===dm||d===pm,m=d===Vo||d===ko;if(p||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Sx(o)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||m&&y&&s(y)?(n===null&&(n=new Sx(o)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function LC(o){const t={};function n(r){if(t[r]!==void 0)return t[r];let s;switch(r){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(r)}return t[r]=s,s}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const s=n(r);return s===null&&Oo("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function OC(o,t,n,r){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const C=y.array;M=y.version;for(let w=0,b=C.length;w<b;w+=3){const O=C[w+0],P=C[w+1],U=C[w+2];v.push(O,P,P,U,U,O)}}else if(E!==void 0){const C=E.array;M=E.version;for(let w=0,b=C.length/3-1;w<b;w+=3){const O=w+0,P=w+1,U=w+2;v.push(O,P,P,U,U,O)}}else return;const S=new(oM(v)?dM:hM)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function m(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function NC(o,t,n){let r;function s(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,y){o.drawElements(r,y,l,v*c),n.update(y,r,1)}function p(v,y,E){E!==0&&(o.drawElementsInstanced(r,y,l,v*c,E),n.update(y,r,E))}function m(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,r,1)}function g(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,M,0,E);let x=0;for(let C=0;C<E;C++)x+=y[C]*M[C];n.update(x,r,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function PC(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:r}}function zC(o,t,n){const r=new WeakMap,s=new un;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==g){let R=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let O=f.attributes.position.count*b,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const U=new Float32Array(O*P*4*g),B=new lM(U,O,P,g);B.type=or,B.needsUpdate=!0;const A=b*4;for(let z=0;z<g;z++){const F=x[z],k=C[z],Z=w[z],at=O*P*4*z;for(let H=0;H<F.count;H++){const q=H*A;E===!0&&(s.fromBufferAttribute(F,H),U[at+q+0]=s.x,U[at+q+1]=s.y,U[at+q+2]=s.z,U[at+q+3]=0),M===!0&&(s.fromBufferAttribute(k,H),U[at+q+4]=s.x,U[at+q+5]=s.y,U[at+q+6]=s.z,U[at+q+7]=0),S===!0&&(s.fromBufferAttribute(Z,H),U[at+q+8]=s.x,U[at+q+9]=s.y,U[at+q+10]=s.z,U[at+q+11]=Z.itemSize===4?s.w:1)}}v={count:g,texture:B,size:new Ue(O,P)},r.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function BC(o,t,n,r){let s=new WeakMap;function l(d){const p=r.render.frame,m=d.geometry,g=t.get(d,m);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}const SM=new si,bx=new vM(1,1),MM=new lM,EM=new pA,TM=new _M,Ax=[],Rx=[],wx=new Float32Array(16),Cx=new Float32Array(9),Dx=new Float32Array(4);function jo(o,t,n){const r=o[0];if(r<=0||r>0)return o;const s=t*n;let l=Ax[s];if(l===void 0&&(l=new Float32Array(s),Ax[s]=l),t!==0){r.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Sn(o,t){if(o.length!==t.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==t[n])return!1;return!0}function Mn(o,t){for(let n=0,r=t.length;n<r;n++)o[n]=t[n]}function Xf(o,t){let n=Rx[t];n===void 0&&(n=new Int32Array(t),Rx[t]=n);for(let r=0;r!==t;++r)n[r]=o.allocateTextureUnit();return n}function IC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function FC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2fv(this.addr,t),Mn(n,t)}}function HC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;o.uniform3fv(this.addr,t),Mn(n,t)}}function GC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4fv(this.addr,t),Mn(n,t)}}function VC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;Dx.set(r),o.uniformMatrix2fv(this.addr,!1,Dx),Mn(n,r)}}function kC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;Cx.set(r),o.uniformMatrix3fv(this.addr,!1,Cx),Mn(n,r)}}function XC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;wx.set(r),o.uniformMatrix4fv(this.addr,!1,wx),Mn(n,r)}}function qC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function WC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2iv(this.addr,t),Mn(n,t)}}function YC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3iv(this.addr,t),Mn(n,t)}}function jC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4iv(this.addr,t),Mn(n,t)}}function ZC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function KC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2uiv(this.addr,t),Mn(n,t)}}function QC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3uiv(this.addr,t),Mn(n,t)}}function JC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4uiv(this.addr,t),Mn(n,t)}}function $C(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(bx.compareFunction=sM,l=bx):l=SM,n.setTexture2D(t||l,s)}function t2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture3D(t||EM,s)}function e2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTextureCube(t||TM,s)}function n2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture2DArray(t||MM,s)}function i2(o){switch(o){case 5126:return IC;case 35664:return FC;case 35665:return HC;case 35666:return GC;case 35674:return VC;case 35675:return kC;case 35676:return XC;case 5124:case 35670:return qC;case 35667:case 35671:return WC;case 35668:case 35672:return YC;case 35669:case 35673:return jC;case 5125:return ZC;case 36294:return KC;case 36295:return QC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return $C;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return n2}}function r2(o,t){o.uniform1fv(this.addr,t)}function a2(o,t){const n=jo(t,this.size,2);o.uniform2fv(this.addr,n)}function s2(o,t){const n=jo(t,this.size,3);o.uniform3fv(this.addr,n)}function o2(o,t){const n=jo(t,this.size,4);o.uniform4fv(this.addr,n)}function l2(o,t){const n=jo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function u2(o,t){const n=jo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function c2(o,t){const n=jo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function f2(o,t){o.uniform1iv(this.addr,t)}function h2(o,t){o.uniform2iv(this.addr,t)}function d2(o,t){o.uniform3iv(this.addr,t)}function p2(o,t){o.uniform4iv(this.addr,t)}function m2(o,t){o.uniform1uiv(this.addr,t)}function _2(o,t){o.uniform2uiv(this.addr,t)}function g2(o,t){o.uniform3uiv(this.addr,t)}function v2(o,t){o.uniform4uiv(this.addr,t)}function y2(o,t,n){const r=this.cache,s=t.length,l=Xf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||SM,l[c])}function x2(o,t,n){const r=this.cache,s=t.length,l=Xf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||EM,l[c])}function S2(o,t,n){const r=this.cache,s=t.length,l=Xf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||TM,l[c])}function M2(o,t,n){const r=this.cache,s=t.length,l=Xf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||MM,l[c])}function E2(o){switch(o){case 5126:return r2;case 35664:return a2;case 35665:return s2;case 35666:return o2;case 35674:return l2;case 35675:return u2;case 35676:return c2;case 5124:case 35670:return f2;case 35667:case 35671:return h2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return _2;case 36295:return g2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return M2}}class T2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=i2(n.type)}}class b2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=E2(n.type)}}class A2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],r)}}}const Gp=/(\w+)(\])?(\[|\.)?/g;function Ux(o,t){o.seq.push(t),o.map[t.id]=t}function R2(o,t,n){const r=o.name,s=r.length;for(Gp.lastIndex=0;;){const l=Gp.exec(r),c=Gp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){Ux(n,p===void 0?new T2(f,o,t):new b2(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new A2(f),Ux(n,g)),n=g}}}class Tf{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);R2(l,c,this)}}setValue(t,n,r,s){const l=this.map[n];l!==void 0&&l.setValue(t,r,s)}setOptional(t,n,r){const s=n[r];s!==void 0&&this.setValue(t,r,s)}static upload(t,n,r,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,n){const r=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&r.push(c)}return r}}function Lx(o,t,n){const r=o.createShader(t);return o.shaderSource(r,n),o.compileShader(r),r}const w2=37297;let C2=0;function D2(o,t){const n=o.split(`
`),r=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;r.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Ox=new oe;function U2(o){Ae._getMatrix(Ox,Ae.workingColorSpace,o);const t=`mat3( ${Ox.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Of:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Nx(o,t,n){const r=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(r&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+D2(o.getShaderSource(t),c)}else return s}function L2(o,t){const n=U2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function O2(o,t){let n;switch(t){case F1:n="Linear";break;case H1:n="Reinhard";break;case G1:n="Cineon";break;case V1:n="ACESFilmic";break;case X1:n="AgX";break;case q1:n="Neutral";break;case k1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pf=new ut;function N2(){Ae.getLuminanceCoefficients(pf);const o=pf.x.toFixed(4),t=pf.y.toFixed(4),n=pf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jl).join(`
`)}function z2(o){const t=[];for(const n in o){const r=o[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function B2(o,t){const n={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Jl(o){return o!==""}function Px(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(o){return o.replace(I2,H2)}const F2=new Map;function H2(o,t){let n=ue[t];if(n===void 0){const r=F2.get(t);if(r!==void 0)n=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xm(n)}const G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bx(o){return o.replace(G2,V2)}function V2(o,t,n,r){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Ix(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k2(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ZS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===v1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===zr&&(t="SHADOWMAP_TYPE_VSM"),t}function X2(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Vo:case ko:t="ENVMAP_TYPE_CUBE";break;case Vf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q2(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ko:t="ENVMAP_MODE_REFRACTION";break}return t}function W2(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case KS:t="ENVMAP_BLENDING_MULTIPLY";break;case B1:t="ENVMAP_BLENDING_MIX";break;case I1:t="ENVMAP_BLENDING_ADD";break}return t}function Y2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function j2(o,t,n,r){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=k2(n),p=X2(n),m=q2(n),g=W2(n),v=Y2(n),y=P2(n),E=z2(l),M=s.createProgram();let S,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Jl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Jl).join(`
`),x.length>0&&(x+=`
`)):(S=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jl).join(`
`),x=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Na?"#define TONE_MAPPING":"",n.toneMapping!==Na?ue.tonemapping_pars_fragment:"",n.toneMapping!==Na?O2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,L2("linearToOutputTexel",n.outputColorSpace),N2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jl).join(`
`)),c=Xm(c),c=Px(c,n),c=zx(c,n),f=Xm(f),f=Px(f,n),f=zx(f,n),c=Bx(c),f=Bx(f),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===$y?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$y?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=C+S+c,b=C+x+f,O=Lx(s,s.VERTEX_SHADER,w),P=Lx(s,s.FRAGMENT_SHADER,b);s.attachShader(M,O),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(z){if(o.debug.checkShaderErrors){const F=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(O).trim(),Z=s.getShaderInfoLog(P).trim();let at=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,O,P);else{const q=Nx(s,O,"vertex"),j=Nx(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+F+`
`+q+`
`+j)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||Z==="")&&(H=!1);H&&(z.diagnostics={runnable:at,programLog:F,vertexShader:{log:k,prefix:S},fragmentShader:{log:Z,prefix:x}})}s.deleteShader(O),s.deleteShader(P),B=new Tf(s,M),A=B2(s,M)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,w2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=C2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let Z2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new Q2(t),n.set(t,r)),r}}class Q2{constructor(t){this.id=Z2++,this.code=t,this.usedTimes=0}}function J2(o,t,n,r,s,l,c){const f=new uM,d=new K2,p=new Set,m=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return p.add(A),A===0?"uv":`uv${A}`}function S(A,R,z,F,k){const Z=F.fog,at=k.geometry,H=A.isMeshStandardMaterial?F.environment:null,q=(A.isMeshStandardMaterial?n:t).get(A.envMap||H),j=q&&q.mapping===Vf?q.image.height:null,xt=E[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const I=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,tt=I!==void 0?I.length:0;let dt=0;at.morphAttributes.position!==void 0&&(dt=1),at.morphAttributes.normal!==void 0&&(dt=2),at.morphAttributes.color!==void 0&&(dt=3);let gt,K,ft,St;if(xt){const Te=rr[xt];gt=Te.vertexShader,K=Te.fragmentShader}else gt=A.vertexShader,K=A.fragmentShader,d.update(A),ft=d.getVertexShaderID(A),St=d.getFragmentShaderID(A);const wt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Qt=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,Se=!!A.map,Le=!!A.matcap,_e=!!q,X=!!A.aoMap,Un=!!A.lightMap,Ee=!!A.bumpMap,de=!!A.normalMap,kt=!!A.displacementMap,ge=!!A.emissiveMap,Zt=!!A.metalnessMap,ae=!!A.roughnessMap,an=A.anisotropy>0,G=A.clearcoat>0,D=A.dispersion>0,it=A.iridescence>0,pt=A.sheen>0,_t=A.transmission>0,ct=an&&!!A.anisotropyMap,Pt=G&&!!A.clearcoatMap,Ut=G&&!!A.clearcoatNormalMap,Gt=G&&!!A.clearcoatRoughnessMap,Xt=it&&!!A.iridescenceMap,Mt=it&&!!A.iridescenceThicknessMap,zt=pt&&!!A.sheenColorMap,Yt=pt&&!!A.sheenRoughnessMap,jt=!!A.specularMap,Ct=!!A.specularColorMap,re=!!A.specularIntensityMap,Y=_t&&!!A.transmissionMap,Lt=_t&&!!A.thicknessMap,Tt=!!A.gradientMap,Bt=!!A.alphaMap,Rt=A.alphaTest>0,yt=!!A.alphaHash,Ft=!!A.extensions;let ie=Na;A.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Oe={shaderID:xt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:K,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:St,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&k.instanceColor!==null,instancingMorph:Qt&&k.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:wt===null?o.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Xo,alphaToCoverage:!!A.alphaToCoverage,map:Se,matcap:Le,envMap:_e,envMapMode:_e&&q.mapping,envMapCubeUVHeight:j,aoMap:X,lightMap:Un,bumpMap:Ee,normalMap:de,displacementMap:v&&kt,emissiveMap:ge,normalMapObjectSpace:de&&A.normalMapType===K1,normalMapTangentSpace:de&&A.normalMapType===Z1,metalnessMap:Zt,roughnessMap:ae,anisotropy:an,anisotropyMap:ct,clearcoat:G,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:D,iridescence:it,iridescenceMap:Xt,iridescenceThicknessMap:Mt,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:re,transmission:_t,transmissionMap:Y,thicknessMap:Lt,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===Lo&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Rt,alphaHash:yt,combine:A.combine,mapUv:Se&&M(A.map.channel),aoMapUv:X&&M(A.aoMap.channel),lightMapUv:Un&&M(A.lightMap.channel),bumpMapUv:Ee&&M(A.bumpMap.channel),normalMapUv:de&&M(A.normalMap.channel),displacementMapUv:kt&&M(A.displacementMap.channel),emissiveMapUv:ge&&M(A.emissiveMap.channel),metalnessMapUv:Zt&&M(A.metalnessMap.channel),roughnessMapUv:ae&&M(A.roughnessMap.channel),anisotropyMapUv:ct&&M(A.anisotropyMap.channel),clearcoatMapUv:Pt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(A.sheenRoughnessMap.channel),specularMapUv:jt&&M(A.specularMap.channel),specularColorMapUv:Ct&&M(A.specularColorMap.channel),specularIntensityMapUv:re&&M(A.specularIntensityMap.channel),transmissionMapUv:Y&&M(A.transmissionMap.channel),thicknessMapUv:Lt&&M(A.thicknessMap.channel),alphaMapUv:Bt&&M(A.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(de||an),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!at.attributes.uv&&(Se||Bt),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Et,skinning:k.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Se&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:ge&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fr,flipSided:A.side===ai,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ft&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&A.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(C(R,A),w(R,A),R.push(o.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function C(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function w(A,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function b(A){const R=E[A.type];let z;if(R){const F=rr[R];z=wA.clone(F.uniforms)}else z=A.uniforms;return z}function O(A,R){let z;for(let F=0,k=m.length;F<k;F++){const Z=m[F];if(Z.cacheKey===R){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new j2(o,R,A,l),m.push(z)),z}function P(A){if(--A.usedTimes===0){const R=m.indexOf(A);m[R]=m[m.length-1],m.pop(),A.destroy()}}function U(A){d.remove(A)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:O,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:B}}function $2(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function r(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:n,remove:r,update:s,dispose:l}}function tD(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Fx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Hx(){const o=[];let t=0;const n=[],r=[],s=[];function l(){t=0,n.length=0,r.length=0,s.length=0}function c(g,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?r.push(x):y.transparent===!0?s.push(x):n.push(x)}function d(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?r.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||tD),r.length>1&&r.sort(v||Fx),s.length>1&&s.sort(v||Fx)}function m(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:s,init:l,push:f,unshift:d,finish:m,sort:p}}function eD(){let o=new WeakMap;function t(r,s){const l=o.get(r);let c;return l===void 0?(c=new Hx,o.set(r,[c])):s>=l.length?(c=new Hx,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function nD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Re};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function iD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let rD=0;function aD(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function sD(o){const t=new nD,n=iD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ut);const s=new ut,l=new _n,c=new _n;function f(p){let m=0,g=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,C=0,w=0,b=0,O=0,P=0,U=0;p.sort(aD);for(let A=0,R=p.length;A<R;A++){const z=p[A],F=z.color,k=z.intensity,Z=z.distance,at=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=F.r*k,g+=F.g*k,v+=F.b*k;else if(z.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],k);U++}else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=at,r.directionalShadowMatrix[y]=z.shadow.matrix,C++}r.directional[y]=H,y++}else if(z.isSpotLight){const H=t.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=Z,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[M]=H;const q=z.shadow;if(z.map&&(r.spotLightMap[O]=z.map,O++,q.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[M]=q.matrix,z.castShadow){const j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[M]=j,r.spotShadowMap[M]=at,b++}M++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=H,S++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),H.distance=z.distance,H.decay=z.decay,z.castShadow){const q=z.shadow,j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=at,r.pointShadowMatrix[E]=z.shadow.matrix,w++}r.point[E]=H,E++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(k),H.groundColor.copy(z.groundColor).multiplyScalar(k),r.hemi[x]=H,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==C||B.numPointShadows!==w||B.numSpotShadows!==b||B.numSpotMaps!==O||B.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+O-P,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=U,B.directionalLength=y,B.pointLength=E,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=C,B.numPointShadows=w,B.numSpotShadows=b,B.numSpotMaps=O,B.numLightProbes=U,r.version=rD++)}function d(p,m){let g=0,v=0,y=0,E=0,M=0;const S=m.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const w=p[x];if(w.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),g++}else if(w.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(w.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:r}}function Gx(o){const t=new sD(o),n=[],r=[];function s(m){p.camera=m,n.length=0,r.length=0}function l(m){n.push(m)}function c(m){r.push(m)}function f(){t.setup(n)}function d(m){t.setupView(n,m)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function oD(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new Gx(o),t.set(s,[f])):l>=c.length?(f=new Gx(o),c.push(f)):f=c[l],f}function r(){t=new WeakMap}return{get:n,dispose:r}}const lD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cD(o,t,n){let r=new gM;const s=new Ue,l=new Ue,c=new un,f=new BA({depthPacking:j1}),d=new IA,p={},m=n.maxTextureSize,g={[Ba]:ai,[ai]:Ba,[Fr]:Fr},v=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:lD,fragmentShader:uD}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Us;E.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ZS;let x=this.type;this.render=function(P,U,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const A=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),F=o.state;F.setBlending(Oa),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=x!==zr&&this.type===zr,Z=x===zr&&this.type!==zr;for(let at=0,H=P.length;at<H;at++){const q=P[at],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const xt=j.getFrameExtents();if(s.multiply(xt),l.copy(j.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/xt.x),s.x=l.x*xt.x,j.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/xt.y),s.y=l.y*xt.y,j.mapSize.y=l.y)),j.map===null||k===!0||Z===!0){const tt=this.type!==zr?{minFilter:Ki,magFilter:Ki}:{};j.map!==null&&j.map.dispose(),j.map=new Ia(s.x,s.y,tt),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const I=j.getViewportCount();for(let tt=0;tt<I;tt++){const dt=j.getViewport(tt);c.set(l.x*dt.x,l.y*dt.y,l.x*dt.z,l.y*dt.w),F.viewport(c),j.updateMatrices(q,tt),r=j.getFrustum(),b(U,B,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===zr&&C(j,B),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(A,R,z)};function C(P,U){const B=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ia(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(U,null,B,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(U,null,B,y,M,null)}function w(P,U,B,A){let R=null;const z=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)R=z;else if(R=B.isPointLight===!0?d:f,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const F=R.uuid,k=U.uuid;let Z=p[F];Z===void 0&&(Z={},p[F]=Z);let at=Z[k];at===void 0&&(at=R.clone(),Z[k]=at,U.addEventListener("dispose",O)),R=at}if(R.visible=U.visible,R.wireframe=U.wireframe,A===zr?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=o.properties.get(R);F.light=B}return R}function b(P,U,B,A,R){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===zr)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const k=t.update(P),Z=P.material;if(Array.isArray(Z)){const at=k.groups;for(let H=0,q=at.length;H<q;H++){const j=at[H],xt=Z[j.materialIndex];if(xt&&xt.visible){const I=w(P,xt,A,R);P.onBeforeShadow(o,P,U,B,k,I,j),o.renderBufferDirect(B,null,k,I,P,j),P.onAfterShadow(o,P,U,B,k,I,j)}}}else if(Z.visible){const at=w(P,Z,A,R);P.onBeforeShadow(o,P,U,B,k,at,null),o.renderBufferDirect(B,null,k,at,P,null),P.onAfterShadow(o,P,U,B,k,at,null)}}const F=P.children;for(let k=0,Z=F.length;k<Z;k++)b(F[k],U,B,A,R)}function O(P){P.target.removeEventListener("dispose",O);for(const B in p){const A=p[B],R=P.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const fD={[sm]:om,[lm]:fm,[um]:hm,[Go]:cm,[om]:sm,[fm]:lm,[hm]:um,[cm]:Go};function hD(o,t){function n(){let Y=!1;const Lt=new un;let Tt=null;const Bt=new un(0,0,0,0);return{setMask:function(Rt){Tt!==Rt&&!Y&&(o.colorMask(Rt,Rt,Rt,Rt),Tt=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,yt,Ft,ie,Oe){Oe===!0&&(Rt*=ie,yt*=ie,Ft*=ie),Lt.set(Rt,yt,Ft,ie),Bt.equals(Lt)===!1&&(o.clearColor(Rt,yt,Ft,ie),Bt.copy(Lt))},reset:function(){Y=!1,Tt=null,Bt.set(-1,0,0,0)}}}function r(){let Y=!1,Lt=!1,Tt=null,Bt=null,Rt=null;return{setReversed:function(yt){if(Lt!==yt){const Ft=t.get("EXT_clip_control");yt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=yt;const ie=Rt;Rt=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(yt){yt?wt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(yt){Tt!==yt&&!Y&&(o.depthMask(yt),Tt=yt)},setFunc:function(yt){if(Lt&&(yt=fD[yt]),Bt!==yt){switch(yt){case sm:o.depthFunc(o.NEVER);break;case om:o.depthFunc(o.ALWAYS);break;case lm:o.depthFunc(o.LESS);break;case Go:o.depthFunc(o.LEQUAL);break;case um:o.depthFunc(o.EQUAL);break;case cm:o.depthFunc(o.GEQUAL);break;case fm:o.depthFunc(o.GREATER);break;case hm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=yt}},setLocked:function(yt){Y=yt},setClear:function(yt){Rt!==yt&&(Lt&&(yt=1-yt),o.clearDepth(yt),Rt=yt)},reset:function(){Y=!1,Tt=null,Bt=null,Rt=null,Lt=!1}}}function s(){let Y=!1,Lt=null,Tt=null,Bt=null,Rt=null,yt=null,Ft=null,ie=null,Oe=null;return{setTest:function(Te){Y||(Te?wt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!Y&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,li,En){(Tt!==Te||Bt!==li||Rt!==En)&&(o.stencilFunc(Te,li,En),Tt=Te,Bt=li,Rt=En)},setOp:function(Te,li,En){(yt!==Te||Ft!==li||ie!==En)&&(o.stencilOp(Te,li,En),yt=Te,Ft=li,ie=En)},setLocked:function(Te){Y=Te},setClear:function(Te){Oe!==Te&&(o.clearStencil(Te),Oe=Te)},reset:function(){Y=!1,Lt=null,Tt=null,Bt=null,Rt=null,yt=null,Ft=null,ie=null,Oe=null}}}const l=new n,c=new r,f=new s,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,C=null,w=null,b=null,O=null,P=null,U=new Re(0,0,0),B=0,A=!1,R=null,z=null,F=null,k=null,Z=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=q>=2);let xt=null,I={};const tt=o.getParameter(o.SCISSOR_BOX),dt=o.getParameter(o.VIEWPORT),gt=new un().fromArray(tt),K=new un().fromArray(dt);function ft(Y,Lt,Tt,Bt){const Rt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(Y,yt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Tt;Ft++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(Lt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return yt}const St={};St[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),wt(o.DEPTH_TEST),c.setFunc(Go),Ee(!1),de(Yy),wt(o.CULL_FACE),X(Oa);function wt(Y){m[Y]!==!0&&(o.enable(Y),m[Y]=!0)}function Et(Y){m[Y]!==!1&&(o.disable(Y),m[Y]=!1)}function Qt(Y,Lt){return g[Y]!==Lt?(o.bindFramebuffer(Y,Lt),g[Y]=Lt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Vt(Y,Lt){let Tt=y,Bt=!1;if(Y){Tt=v.get(Lt),Tt===void 0&&(Tt=[],v.set(Lt,Tt));const Rt=Y.textures;if(Tt.length!==Rt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,Ft=Rt.length;yt<Ft;yt++)Tt[yt]=o.COLOR_ATTACHMENT0+yt;Tt.length=Rt.length,Bt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Tt)}function Se(Y){return E!==Y?(o.useProgram(Y),E=Y,!0):!1}const Le={[_s]:o.FUNC_ADD,[x1]:o.FUNC_SUBTRACT,[S1]:o.FUNC_REVERSE_SUBTRACT};Le[M1]=o.MIN,Le[E1]=o.MAX;const _e={[T1]:o.ZERO,[b1]:o.ONE,[A1]:o.SRC_COLOR,[rm]:o.SRC_ALPHA,[L1]:o.SRC_ALPHA_SATURATE,[D1]:o.DST_COLOR,[w1]:o.DST_ALPHA,[R1]:o.ONE_MINUS_SRC_COLOR,[am]:o.ONE_MINUS_SRC_ALPHA,[U1]:o.ONE_MINUS_DST_COLOR,[C1]:o.ONE_MINUS_DST_ALPHA,[O1]:o.CONSTANT_COLOR,[N1]:o.ONE_MINUS_CONSTANT_COLOR,[P1]:o.CONSTANT_ALPHA,[z1]:o.ONE_MINUS_CONSTANT_ALPHA};function X(Y,Lt,Tt,Bt,Rt,yt,Ft,ie,Oe,Te){if(Y===Oa){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(wt(o.BLEND),M=!0),Y!==y1){if(Y!==S||Te!==A){if((x!==_s||b!==_s)&&(o.blendEquation(o.FUNC_ADD),x=_s,b=_s),Te)switch(Y){case Lo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jy:o.blendFunc(o.ONE,o.ONE);break;case Zy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ky:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Lo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jy:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Zy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ky:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}C=null,w=null,O=null,P=null,U.set(0,0,0),B=0,S=Y,A=Te}return}Rt=Rt||Lt,yt=yt||Tt,Ft=Ft||Bt,(Lt!==x||Rt!==b)&&(o.blendEquationSeparate(Le[Lt],Le[Rt]),x=Lt,b=Rt),(Tt!==C||Bt!==w||yt!==O||Ft!==P)&&(o.blendFuncSeparate(_e[Tt],_e[Bt],_e[yt],_e[Ft]),C=Tt,w=Bt,O=yt,P=Ft),(ie.equals(U)===!1||Oe!==B)&&(o.blendColor(ie.r,ie.g,ie.b,Oe),U.copy(ie),B=Oe),S=Y,A=!1}function Un(Y,Lt){Y.side===Fr?Et(o.CULL_FACE):wt(o.CULL_FACE);let Tt=Y.side===ai;Lt&&(Tt=!Tt),Ee(Tt),Y.blending===Lo&&Y.transparent===!1?X(Oa):X(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Bt=Y.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ge(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?wt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(Y){R!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),R=Y)}function de(Y){Y!==_1?(wt(o.CULL_FACE),Y!==z&&(Y===Yy?o.cullFace(o.BACK):Y===g1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),z=Y}function kt(Y){Y!==F&&(H&&o.lineWidth(Y),F=Y)}function ge(Y,Lt,Tt){Y?(wt(o.POLYGON_OFFSET_FILL),(k!==Lt||Z!==Tt)&&(o.polygonOffset(Lt,Tt),k=Lt,Z=Tt)):Et(o.POLYGON_OFFSET_FILL)}function Zt(Y){Y?wt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function ae(Y){Y===void 0&&(Y=o.TEXTURE0+at-1),xt!==Y&&(o.activeTexture(Y),xt=Y)}function an(Y,Lt,Tt){Tt===void 0&&(xt===null?Tt=o.TEXTURE0+at-1:Tt=xt);let Bt=I[Tt];Bt===void 0&&(Bt={type:void 0,texture:void 0},I[Tt]=Bt),(Bt.type!==Y||Bt.texture!==Lt)&&(xt!==Tt&&(o.activeTexture(Tt),xt=Tt),o.bindTexture(Y,Lt||St[Y]),Bt.type=Y,Bt.texture=Lt)}function G(){const Y=I[xt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function D(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(Y){gt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),gt.copy(Y))}function Yt(Y){K.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),K.copy(Y))}function jt(Y,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let Bt=Tt.get(Y);Bt===void 0&&(Bt=o.getUniformBlockIndex(Lt,Y.name),Tt.set(Y,Bt))}function Ct(Y,Lt){const Bt=p.get(Lt).get(Y);d.get(Lt)!==Bt&&(o.uniformBlockBinding(Lt,Bt,Y.__bindingPointIndex),d.set(Lt,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},xt=null,I={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,C=null,w=null,b=null,O=null,P=null,U=new Re(0,0,0),B=0,A=!1,R=null,z=null,F=null,k=null,Z=null,gt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:wt,disable:Et,bindFramebuffer:Qt,drawBuffers:Vt,useProgram:Se,setBlending:X,setMaterial:Un,setFlipSided:Ee,setCullFace:de,setLineWidth:kt,setPolygonOffset:ge,setScissorTest:Zt,activeTexture:ae,bindTexture:an,unbindTexture:G,compressedTexImage2D:D,compressedTexImage3D:it,texImage2D:Xt,texImage3D:Mt,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:zt,viewport:Yt,reset:re}}function dD(o,t,n,r,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(G,D){return y?new OffscreenCanvas(G,D):Pf("canvas")}function M(G,D,it){let pt=1;const _t=an(G);if((_t.width>it||_t.height>it)&&(pt=it/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const ct=Math.floor(pt*_t.width),Pt=Math.floor(pt*_t.height);g===void 0&&(g=E(ct,Pt));const Ut=D?E(ct,Pt):g;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(G,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),G;return G}function S(G){return G.generateMipmaps}function x(G){o.generateMipmap(G)}function C(G){return G.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?o.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(G,D,it,pt,_t=!1){if(G!==null){if(o[G]!==void 0)return o[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ct=D;if(D===o.RED&&(it===o.FLOAT&&(ct=o.R32F),it===o.HALF_FLOAT&&(ct=o.R16F),it===o.UNSIGNED_BYTE&&(ct=o.R8)),D===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.R8UI),it===o.UNSIGNED_SHORT&&(ct=o.R16UI),it===o.UNSIGNED_INT&&(ct=o.R32UI),it===o.BYTE&&(ct=o.R8I),it===o.SHORT&&(ct=o.R16I),it===o.INT&&(ct=o.R32I)),D===o.RG&&(it===o.FLOAT&&(ct=o.RG32F),it===o.HALF_FLOAT&&(ct=o.RG16F),it===o.UNSIGNED_BYTE&&(ct=o.RG8)),D===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RG8UI),it===o.UNSIGNED_SHORT&&(ct=o.RG16UI),it===o.UNSIGNED_INT&&(ct=o.RG32UI),it===o.BYTE&&(ct=o.RG8I),it===o.SHORT&&(ct=o.RG16I),it===o.INT&&(ct=o.RG32I)),D===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),it===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),it===o.UNSIGNED_INT&&(ct=o.RGB32UI),it===o.BYTE&&(ct=o.RGB8I),it===o.SHORT&&(ct=o.RGB16I),it===o.INT&&(ct=o.RGB32I)),D===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),it===o.UNSIGNED_INT&&(ct=o.RGBA32UI),it===o.BYTE&&(ct=o.RGBA8I),it===o.SHORT&&(ct=o.RGBA16I),it===o.INT&&(ct=o.RGBA32I)),D===o.RGB&&it===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),D===o.RGBA){const Pt=_t?Of:Ae.getTransfer(pt);it===o.FLOAT&&(ct=o.RGBA32F),it===o.HALF_FLOAT&&(ct=o.RGBA16F),it===o.UNSIGNED_BYTE&&(ct=Pt===He?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function b(G,D){let it;return G?D===null||D===ws||D===cu?it=o.DEPTH24_STENCIL8:D===or?it=o.DEPTH32F_STENCIL8:D===uu&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===ws||D===cu?it=o.DEPTH_COMPONENT24:D===or?it=o.DEPTH_COMPONENT32F:D===uu&&(it=o.DEPTH_COMPONENT16),it}function O(G,D){return S(G)===!0||G.isFramebufferTexture&&G.minFilter!==Ki&&G.minFilter!==Bi?Math.log2(Math.max(D.width,D.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?D.mipmaps.length:1}function P(G){const D=G.target;D.removeEventListener("dispose",P),B(D),D.isVideoTexture&&m.delete(D)}function U(G){const D=G.target;D.removeEventListener("dispose",U),R(D)}function B(G){const D=r.get(G);if(D.__webglInit===void 0)return;const it=G.source,pt=v.get(it);if(pt){const _t=pt[D.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&A(G),Object.keys(pt).length===0&&v.delete(it)}r.remove(G)}function A(G){const D=r.get(G);o.deleteTexture(D.__webglTexture);const it=G.source,pt=v.get(it);delete pt[D.__cacheKey],c.memory.textures--}function R(G){const D=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(D.__webglFramebuffer[pt]))for(let _t=0;_t<D.__webglFramebuffer[pt].length;_t++)o.deleteFramebuffer(D.__webglFramebuffer[pt][_t]);else o.deleteFramebuffer(D.__webglFramebuffer[pt]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[pt])}else{if(Array.isArray(D.__webglFramebuffer))for(let pt=0;pt<D.__webglFramebuffer.length;pt++)o.deleteFramebuffer(D.__webglFramebuffer[pt]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let pt=0;pt<D.__webglColorRenderbuffer.length;pt++)D.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[pt]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const it=G.textures;for(let pt=0,_t=it.length;pt<_t;pt++){const ct=r.get(it[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),r.remove(it[pt])}r.remove(G)}let z=0;function F(){z=0}function k(){const G=z;return G>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+s.maxTextures),z+=1,G}function Z(G){const D=[];return D.push(G.wrapS),D.push(G.wrapT),D.push(G.wrapR||0),D.push(G.magFilter),D.push(G.minFilter),D.push(G.anisotropy),D.push(G.internalFormat),D.push(G.format),D.push(G.type),D.push(G.generateMipmaps),D.push(G.premultiplyAlpha),D.push(G.flipY),D.push(G.unpackAlignment),D.push(G.colorSpace),D.join()}function at(G,D){const it=r.get(G);if(G.isVideoTexture&&Zt(G),G.isRenderTargetTexture===!1&&G.version>0&&it.__version!==G.version){const pt=G.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(it,G,D);return}}n.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+D)}function H(G,D){const it=r.get(G);if(G.version>0&&it.__version!==G.version){St(it,G,D);return}n.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+D)}function q(G,D){const it=r.get(G);if(G.version>0&&it.__version!==G.version){St(it,G,D);return}n.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+D)}function j(G,D){const it=r.get(G);if(G.version>0&&it.__version!==G.version){wt(it,G,D);return}n.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+D)}const xt={[mm]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[_m]:o.MIRRORED_REPEAT},I={[Ki]:o.NEAREST,[W1]:o.NEAREST_MIPMAP_NEAREST,[Wc]:o.NEAREST_MIPMAP_LINEAR,[Bi]:o.LINEAR,[fp]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},tt={[Q1]:o.NEVER,[iA]:o.ALWAYS,[J1]:o.LESS,[sM]:o.LEQUAL,[$1]:o.EQUAL,[nA]:o.GEQUAL,[tA]:o.GREATER,[eA]:o.NOTEQUAL};function dt(G,D){if(D.type===or&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Bi||D.magFilter===fp||D.magFilter===Wc||D.magFilter===xs||D.minFilter===Bi||D.minFilter===fp||D.minFilter===Wc||D.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(G,o.TEXTURE_WRAP_S,xt[D.wrapS]),o.texParameteri(G,o.TEXTURE_WRAP_T,xt[D.wrapT]),(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)&&o.texParameteri(G,o.TEXTURE_WRAP_R,xt[D.wrapR]),o.texParameteri(G,o.TEXTURE_MAG_FILTER,I[D.magFilter]),o.texParameteri(G,o.TEXTURE_MIN_FILTER,I[D.minFilter]),D.compareFunction&&(o.texParameteri(G,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(G,o.TEXTURE_COMPARE_FUNC,tt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Ki||D.minFilter!==Wc&&D.minFilter!==xs||D.type===or&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(G,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function gt(G,D){let it=!1;G.__webglInit===void 0&&(G.__webglInit=!0,D.addEventListener("dispose",P));const pt=D.source;let _t=v.get(pt);_t===void 0&&(_t={},v.set(pt,_t));const ct=Z(D);if(ct!==G.__cacheKey){_t[ct]===void 0&&(_t[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,it=!0),_t[ct].usedTimes++;const Pt=_t[G.__cacheKey];Pt!==void 0&&(_t[G.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(D)),G.__cacheKey=ct,G.__webglTexture=_t[ct].texture}return it}function K(G,D,it){return Math.floor(Math.floor(G/it)/D)}function ft(G,D,it,pt){const ct=G.updateRanges;if(ct.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,D.width,D.height,it,pt,D.data);else{ct.sort((Mt,zt)=>Mt.start-zt.start);let Pt=0;for(let Mt=1;Mt<ct.length;Mt++){const zt=ct[Pt],Yt=ct[Mt],jt=zt.start+zt.count,Ct=K(Yt.start,D.width,4),re=K(zt.start,D.width,4);Yt.start<=jt+1&&Ct===re&&K(Yt.start+Yt.count-1,D.width,4)===Ct?zt.count=Math.max(zt.count,Yt.start+Yt.count-zt.start):(++Pt,ct[Pt]=Yt)}ct.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,D.width);for(let Mt=0,zt=ct.length;Mt<zt;Mt++){const Yt=ct[Mt],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),re=jt%D.width,Y=Math.floor(jt/D.width),Lt=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(o.TEXTURE_2D,0,re,Y,Lt,Tt,it,pt,D.data)}G.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function St(G,D,it){let pt=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(pt=o.TEXTURE_3D);const _t=gt(G,D),ct=D.source;n.bindTexture(pt,G.__webglTexture,o.TEXTURE0+it);const Pt=r.get(ct);if(ct.version!==Pt.__version||_t===!0){n.activeTexture(o.TEXTURE0+it);const Ut=Ae.getPrimaries(Ae.workingColorSpace),Gt=D.colorSpace===Aa?null:Ae.getPrimaries(D.colorSpace),Xt=D.colorSpace===Aa||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Mt=M(D.image,!1,s.maxTextureSize);Mt=ae(D,Mt);const zt=l.convert(D.format,D.colorSpace),Yt=l.convert(D.type);let jt=w(D.internalFormat,zt,Yt,D.colorSpace,D.isVideoTexture);dt(pt,D);let Ct;const re=D.mipmaps,Y=D.isVideoTexture!==!0,Lt=Pt.__version===void 0||_t===!0,Tt=ct.dataReady,Bt=O(D,Mt);if(D.isDepthTexture)jt=b(D.format===hu,D.type),Lt&&(Y?n.texStorage2D(o.TEXTURE_2D,1,jt,Mt.width,Mt.height):n.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,zt,Yt,null));else if(D.isDataTexture)if(re.length>0){Y&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let Rt=0,yt=re.length;Rt<yt;Rt++)Ct=re[Rt],Y?Tt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data);D.generateMipmaps=!1}else Y?(Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,Mt.width,Mt.height),Tt&&ft(D,Mt,zt,Yt)):n.texImage2D(o.TEXTURE_2D,0,jt,Mt.width,Mt.height,0,zt,Yt,Mt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Y&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,re[0].width,re[0].height,Mt.depth);for(let Rt=0,yt=re.length;Rt<yt;Rt++)if(Ct=re[Rt],D.format!==Ii)if(zt!==null)if(Y){if(Tt)if(D.layerUpdates.size>0){const Ft=gx(Ct.width,Ct.height,D.format,D.type);for(const ie of D.layerUpdates){const Oe=Ct.data.subarray(ie*Ft/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,ie,Ct.width,Ct.height,1,zt,Oe)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,Mt.depth,zt,Ct.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Tt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,Mt.depth,zt,Yt,Ct.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,Mt.depth,0,zt,Yt,Ct.data)}else{Y&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let Rt=0,yt=re.length;Rt<yt;Rt++)Ct=re[Rt],D.format!==Ii?zt!==null?Y?Tt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Ct.data):n.compressedTexImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Tt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data)}else if(D.isDataArrayTexture)if(Y){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,Mt.width,Mt.height,Mt.depth),Tt)if(D.layerUpdates.size>0){const Rt=gx(Mt.width,Mt.height,D.format,D.type);for(const yt of D.layerUpdates){const Ft=Mt.data.subarray(yt*Rt/Mt.data.BYTES_PER_ELEMENT,(yt+1)*Rt/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Mt.width,Mt.height,1,zt,Yt,Ft)}D.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,Yt,Mt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Mt.width,Mt.height,Mt.depth,0,zt,Yt,Mt.data);else if(D.isData3DTexture)Y?(Lt&&n.texStorage3D(o.TEXTURE_3D,Bt,jt,Mt.width,Mt.height,Mt.depth),Tt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,Yt,Mt.data)):n.texImage3D(o.TEXTURE_3D,0,jt,Mt.width,Mt.height,Mt.depth,0,zt,Yt,Mt.data);else if(D.isFramebufferTexture){if(Lt)if(Y)n.texStorage2D(o.TEXTURE_2D,Bt,jt,Mt.width,Mt.height);else{let Rt=Mt.width,yt=Mt.height;for(let Ft=0;Ft<Bt;Ft++)n.texImage2D(o.TEXTURE_2D,Ft,jt,Rt,yt,0,zt,Yt,null),Rt>>=1,yt>>=1}}else if(re.length>0){if(Y&&Lt){const Rt=an(re[0]);n.texStorage2D(o.TEXTURE_2D,Bt,jt,Rt.width,Rt.height)}for(let Rt=0,yt=re.length;Rt<yt;Rt++)Ct=re[Rt],Y?Tt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,zt,Yt,Ct):n.texImage2D(o.TEXTURE_2D,Rt,jt,zt,Yt,Ct);D.generateMipmaps=!1}else if(Y){if(Lt){const Rt=an(Mt);n.texStorage2D(o.TEXTURE_2D,Bt,jt,Rt.width,Rt.height)}Tt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Yt,Mt)}else n.texImage2D(o.TEXTURE_2D,0,jt,zt,Yt,Mt);S(D)&&x(pt),Pt.__version=ct.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function wt(G,D,it){if(D.image.length!==6)return;const pt=gt(G,D),_t=D.source;n.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+it);const ct=r.get(_t);if(_t.version!==ct.__version||pt===!0){n.activeTexture(o.TEXTURE0+it);const Pt=Ae.getPrimaries(Ae.workingColorSpace),Ut=D.colorSpace===Aa?null:Ae.getPrimaries(D.colorSpace),Gt=D.colorSpace===Aa||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Xt=D.isCompressedTexture||D.image[0].isCompressedTexture,Mt=D.image[0]&&D.image[0].isDataTexture,zt=[];for(let yt=0;yt<6;yt++)!Xt&&!Mt?zt[yt]=M(D.image[yt],!0,s.maxCubemapSize):zt[yt]=Mt?D.image[yt].image:D.image[yt],zt[yt]=ae(D,zt[yt]);const Yt=zt[0],jt=l.convert(D.format,D.colorSpace),Ct=l.convert(D.type),re=w(D.internalFormat,jt,Ct,D.colorSpace),Y=D.isVideoTexture!==!0,Lt=ct.__version===void 0||pt===!0,Tt=_t.dataReady;let Bt=O(D,Yt);dt(o.TEXTURE_CUBE_MAP,D);let Rt;if(Xt){Y&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){Rt=zt[yt].mipmaps;for(let Ft=0;Ft<Rt.length;Ft++){const ie=Rt[Ft];D.format!==Ii?jt!==null?Y?Tt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,ie.width,ie.height,jt,ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,ie.width,ie.height,jt,Ct,ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,re,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(Rt=D.mipmaps,Y&&Lt){Rt.length>0&&Bt++;const yt=an(zt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Mt){Y?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,zt[yt].width,zt[yt].height,jt,Ct,zt[yt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,re,zt[yt].width,zt[yt].height,0,jt,Ct,zt[yt].data);for(let Ft=0;Ft<Rt.length;Ft++){const Oe=Rt[Ft].image[yt].image;Y?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,Oe.width,Oe.height,jt,Ct,Oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,re,Oe.width,Oe.height,0,jt,Ct,Oe.data)}}else{Y?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt,Ct,zt[yt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,re,jt,Ct,zt[yt]);for(let Ft=0;Ft<Rt.length;Ft++){const ie=Rt[Ft];Y?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,jt,Ct,ie.image[yt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,re,jt,Ct,ie.image[yt])}}}S(D)&&x(o.TEXTURE_CUBE_MAP),ct.__version=_t.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function Et(G,D,it,pt,_t,ct){const Pt=l.convert(it.format,it.colorSpace),Ut=l.convert(it.type),Gt=w(it.internalFormat,Pt,Ut,it.colorSpace),Xt=r.get(D),Mt=r.get(it);if(Mt.__renderTarget=D,!Xt.__hasExternalTextures){const zt=Math.max(1,D.width>>ct),Yt=Math.max(1,D.height>>ct);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?n.texImage3D(_t,ct,Gt,zt,Yt,D.depth,0,Pt,Ut,null):n.texImage2D(_t,ct,Gt,zt,Yt,0,Pt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,G),ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,_t,Mt.__webglTexture,0,kt(D)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,_t,Mt.__webglTexture,ct),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(G,D,it){if(o.bindRenderbuffer(o.RENDERBUFFER,G),D.depthBuffer){const pt=D.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,ct=b(D.stencilBuffer,_t),Pt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=kt(D);ge(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,D.width,D.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,ct,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,G)}else{const pt=D.textures;for(let _t=0;_t<pt.length;_t++){const ct=pt[_t],Pt=l.convert(ct.format,ct.colorSpace),Ut=l.convert(ct.type),Gt=w(ct.internalFormat,Pt,Ut,ct.colorSpace),Xt=kt(D);it&&ge(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Gt,D.width,D.height):ge(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,Gt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(G,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,G),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(D.depthTexture);pt.__renderTarget=D,(!pt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),at(D.depthTexture,0);const _t=pt.__webglTexture,ct=kt(D);if(D.depthTexture.format===fu)ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(D.depthTexture.format===hu)ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Se(G){const D=r.get(G),it=G.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==G.depthTexture){const pt=G.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),pt){const _t=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),D.__depthDisposeCallback=_t}D.__boundDepthTexture=pt}if(G.depthTexture&&!D.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const pt=G.texture.mipmaps;pt&&pt.length>0?Vt(D.__webglFramebuffer[0],G):Vt(D.__webglFramebuffer,G)}else if(it){D.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[pt]),D.__webglDepthbuffer[pt]===void 0)D.__webglDepthbuffer[pt]=o.createRenderbuffer(),Qt(D.__webglDepthbuffer[pt],G,!1);else{const _t=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=D.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}else{const pt=G.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),Qt(D.__webglDepthbuffer,G,!1);else{const _t=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(G,D,it){const pt=r.get(G);D!==void 0&&Et(pt.__webglFramebuffer,G,G.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Se(G)}function _e(G){const D=G.texture,it=r.get(G),pt=r.get(D);G.addEventListener("dispose",U);const _t=G.textures,ct=G.isWebGLCubeRenderTarget===!0,Pt=_t.length>1;if(Pt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=D.version,c.memory.textures++),ct){it.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<D.mipmaps.length;Gt++)it.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else it.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ut=0;Ut<D.mipmaps.length;Ut++)it.__webglFramebuffer[Ut]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Xt=r.get(_t[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),c.memory.textures++)}if(G.samples>0&&ge(G)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ut=0;Ut<_t.length;Ut++){const Gt=_t[Ut];it.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut]);const Xt=l.convert(Gt.format,Gt.colorSpace),Mt=l.convert(Gt.type),zt=w(Gt.internalFormat,Xt,Mt,Gt.colorSpace,G.isXRRenderTarget===!0),Yt=kt(G);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,zt,G.width,G.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),G.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Qt(it.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){n.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),dt(o.TEXTURE_CUBE_MAP,D);for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0)for(let Gt=0;Gt<D.mipmaps.length;Gt++)Et(it.__webglFramebuffer[Ut][Gt],G,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Et(it.__webglFramebuffer[Ut],G,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(D)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Xt=_t[Ut],Mt=r.get(Xt);n.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),dt(o.TEXTURE_2D,Xt),Et(it.__webglFramebuffer,G,Xt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(Xt)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ut=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,pt.__webglTexture),dt(Ut,D),D.mipmaps&&D.mipmaps.length>0)for(let Gt=0;Gt<D.mipmaps.length;Gt++)Et(it.__webglFramebuffer[Gt],G,D,o.COLOR_ATTACHMENT0,Ut,Gt);else Et(it.__webglFramebuffer,G,D,o.COLOR_ATTACHMENT0,Ut,0);S(D)&&x(Ut),n.unbindTexture()}G.depthBuffer&&Se(G)}function X(G){const D=G.textures;for(let it=0,pt=D.length;it<pt;it++){const _t=D[it];if(S(_t)){const ct=C(G),Pt=r.get(_t).__webglTexture;n.bindTexture(ct,Pt),x(ct),n.unbindTexture()}}}const Un=[],Ee=[];function de(G){if(G.samples>0){if(ge(G)===!1){const D=G.textures,it=G.width,pt=G.height;let _t=o.COLOR_BUFFER_BIT;const ct=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(G),Ut=D.length>1;if(Ut)for(let Xt=0;Xt<D.length;Xt++)n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=G.texture.mipmaps;Gt&&Gt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<D.length;Xt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Mt=r.get(D[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,it,pt,0,0,it,pt,_t,o.NEAREST),d===!0&&(Un.length=0,Ee.length=0,Un.push(o.COLOR_ATTACHMENT0+Xt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Un.push(ct),Ee.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Un))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<D.length;Xt++){n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Mt=r.get(D[Xt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Mt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&d){const D=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function kt(G){return Math.min(s.maxSamples,G.samples)}function ge(G){const D=r.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Zt(G){const D=c.render.frame;m.get(G)!==D&&(m.set(G,D),G.update())}function ae(G,D){const it=G.colorSpace,pt=G.format,_t=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||it!==Xo&&it!==Aa&&(Ae.getTransfer(it)===He?(pt!==Ii||_t!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),D}function an(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=at,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ge}function pD(o,t){function n(r,s=Aa){let l;const c=Ae.getTransfer(s);if(r===Xr)return o.UNSIGNED_BYTE;if(r===g_)return o.UNSIGNED_SHORT_4_4_4_4;if(r===v_)return o.UNSIGNED_SHORT_5_5_5_1;if(r===tM)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===JS)return o.BYTE;if(r===$S)return o.SHORT;if(r===uu)return o.UNSIGNED_SHORT;if(r===__)return o.INT;if(r===ws)return o.UNSIGNED_INT;if(r===or)return o.FLOAT;if(r===pu)return o.HALF_FLOAT;if(r===eM)return o.ALPHA;if(r===nM)return o.RGB;if(r===Ii)return o.RGBA;if(r===fu)return o.DEPTH_COMPONENT;if(r===hu)return o.DEPTH_STENCIL;if(r===iM)return o.RED;if(r===y_)return o.RED_INTEGER;if(r===rM)return o.RG;if(r===x_)return o.RG_INTEGER;if(r===S_)return o.RGBA_INTEGER;if(r===yf||r===xf||r===Sf||r===Mf)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===yf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===yf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gm||r===vm||r===ym||r===xm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===gm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ym)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sm||r===Mm||r===Em)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sm||r===Mm)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Em)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tm||r===bm||r===Am||r===Rm||r===wm||r===Cm||r===Dm||r===Um||r===Lm||r===Om||r===Nm||r===Pm||r===zm||r===Bm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Tm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Am)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Um)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Om)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ef||r===Im||r===Fm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Ef)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Im)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===aM||r===Hm||r===Gm||r===Vm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cu?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const mD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_D=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const s=new si,l=t.properties.get(s);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new cr({vertexShader:mD,fragmentShader:_D,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new yu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vD extends Yo{constructor(t,n){super();const r=this;let s=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,g=null,v=null,y=null,E=null;const M=new gD,S=n.getContextAttributes();let x=null,C=null;const w=[],b=[],O=new Ue;let P=null;const U=new Wi;U.viewport=new un;const B=new Wi;B.viewport=new un;const A=[U,B],R=new FA;let z=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=w[K];return ft===void 0&&(ft=new Np,w[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=w[K];return ft===void 0&&(ft=new Np,w[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=w[K];return ft===void 0&&(ft=new Np,w[K]=ft),ft.getHandSpace()};function k(K){const ft=b.indexOf(K.inputSource);if(ft===-1)return;const St=w[ft];St!==void 0&&(St.update(K.inputSource,K.frame,p||c),St.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",at);for(let K=0;K<w.length;K++){const ft=b[K];ft!==null&&(b[K]=null,w[K].disconnect(ft))}z=null,F=null,M.reset(),t.setRenderTarget(x),y=null,v=null,g=null,s=null,C=null,gt.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",at),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,wt=null,Et=null;S.depth&&(Et=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=S.stencil?hu:fu,wt=S.stencil?cu:ws);const Qt={colorFormat:n.RGBA8,depthFormat:Et,scaleFactor:l};g=new XRWebGLBinding(s,n),v=g.createProjectionLayer(Qt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Ia(v.textureWidth,v.textureHeight,{format:Ii,type:Xr,depthTexture:new vM(v.textureWidth,v.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ia(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:Xr,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),gt.setContext(s),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(K){for(let ft=0;ft<K.removed.length;ft++){const St=K.removed[ft],wt=b.indexOf(St);wt>=0&&(b[wt]=null,w[wt].disconnect(St))}for(let ft=0;ft<K.added.length;ft++){const St=K.added[ft];let wt=b.indexOf(St);if(wt===-1){for(let Qt=0;Qt<w.length;Qt++)if(Qt>=b.length){b.push(St),wt=Qt;break}else if(b[Qt]===null){b[Qt]=St,wt=Qt;break}if(wt===-1)break}const Et=w[wt];Et&&Et.connect(St)}}const H=new ut,q=new ut;function j(K,ft,St){H.setFromMatrixPosition(ft.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const wt=H.distanceTo(q),Et=ft.projectionMatrix.elements,Qt=St.projectionMatrix.elements,Vt=Et[14]/(Et[10]-1),Se=Et[14]/(Et[10]+1),Le=(Et[9]+1)/Et[5],_e=(Et[9]-1)/Et[5],X=(Et[8]-1)/Et[0],Un=(Qt[8]+1)/Qt[0],Ee=Vt*X,de=Vt*Un,kt=wt/(-X+Un),ge=kt*-X;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ge),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Zt=Vt+kt,ae=Se+kt,an=Ee-ge,G=de+(wt-ge),D=Le*Se/ae*Zt,it=_e*Se/ae*Zt;K.projectionMatrix.makePerspective(an,G,D,it,Zt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,St=K.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(St=M.depthFar)),R.near=B.near=U.near=ft,R.far=B.far=U.far=St,(z!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,F=R.far),U.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,R.layers.mask=U.layers.mask|B.layers.mask;const wt=K.parent,Et=R.cameras;xt(R,wt);for(let Qt=0;Qt<Et.length;Qt++)xt(Et[Qt],wt);Et.length===2?j(R,U,B):R.projectionMatrix.copy(U.projectionMatrix),I(K,R,wt)};function I(K,ft,St){St===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=km*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let tt=null;function dt(K,ft){if(m=ft.getViewerPose(p||c),E=ft,m!==null){const St=m.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let wt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,wt=!0);for(let Vt=0;Vt<St.length;Vt++){const Se=St[Vt];let Le=null;if(y!==null)Le=y.getViewport(Se);else{const X=g.getViewSubImage(v,Se);Le=X.viewport,Vt===0&&(t.setRenderTargetTextures(C,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(C))}let _e=A[Vt];_e===void 0&&(_e=new Wi,_e.layers.enable(Vt),_e.viewport=new un,A[Vt]=_e),_e.matrix.fromArray(Se.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Se.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Le.x,Le.y,Le.width,Le.height),Vt===0&&(R.matrix.copy(_e.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),wt===!0&&R.cameras.push(_e)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const Vt=g.getDepthInformation(St[0]);Vt&&Vt.isValid&&Vt.texture&&M.init(t,Vt,s.renderState)}}for(let St=0;St<w.length;St++){const wt=b[St],Et=w[St];wt!==null&&Et!==void 0&&Et.update(wt,ft,p||c)}tt&&tt(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const gt=new xM;gt.setAnimationLoop(dt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const hs=new Ds,yD=new _n;function xD(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,pM(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,C,w,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,C,w):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ai&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ai&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const C=t.get(x),w=C.envMap,b=C.envMapRotation;w&&(S.envMap.value=w,hs.copy(b),hs.x*=-1,hs.y*=-1,hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(yD.makeRotationFromEuler(hs)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,C,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*C,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,C){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const C=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function SD(o,t,n,r){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,w){const b=w.program;r.uniformBlockBinding(C,b)}function p(C,w){let b=s[C.id];b===void 0&&(E(C),b=m(C),s[C.id]=b,C.addEventListener("dispose",S));const O=w.program;r.updateUBOMapping(C,O);const P=t.render.frame;l[C.id]!==P&&(v(C),l[C.id]=P)}function m(C){const w=g();C.__bindingPointIndex=w;const b=o.createBuffer(),O=C.__size,P=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,b),b}function g(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const w=s[C.id],b=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let P=0,U=b.length;P<U;P++){const B=Array.isArray(b[P])?b[P]:[b[P]];for(let A=0,R=B.length;A<R;A++){const z=B[A];if(y(z,P,A,O)===!0){const F=z.__offset,k=Array.isArray(z.value)?z.value:[z.value];let Z=0;for(let at=0;at<k.length;at++){const H=k[at],q=M(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,F+Z,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,Z),Z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,w,b,O){const P=C.value,U=w+"_"+b;if(O[U]===void 0)return typeof P=="number"||typeof P=="boolean"?O[U]=P:O[U]=P.clone(),!0;{const B=O[U];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[U]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function E(C){const w=C.uniforms;let b=0;const O=16;for(let U=0,B=w.length;U<B;U++){const A=Array.isArray(w[U])?w[U]:[w[U]];for(let R=0,z=A.length;R<z;R++){const F=A[R],k=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,at=k.length;Z<at;Z++){const H=k[Z],q=M(H),j=b%O,xt=j%q.boundary,I=j+xt;b+=xt,I!==0&&O-I<q.storage&&(b+=O-I),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=q.storage}}}const P=b%O;return P>0&&(b+=O-P),C.__size=b,C.__cache={},this}function M(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function S(C){const w=C.target;w.removeEventListener("dispose",S);const b=c.indexOf(w.__bindingPointIndex);c.splice(b,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function x(){for(const C in s)o.deleteBuffer(s[C]);c=[],s={},l={}}return{bind:d,update:p,dispose:x}}class MD{constructor(t={}){const{canvas:n=aA(),context:r=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const C=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=Oi;let P=0,U=0,B=null,A=-1,R=null;const z=new un,F=new un;let k=null;const Z=new Re(0);let at=0,H=n.width,q=n.height,j=1,xt=null,I=null;const tt=new un(0,0,H,q),dt=new un(0,0,H,q);let gt=!1;const K=new gM;let ft=!1,St=!1;const wt=new _n,Et=new _n,Qt=new ut,Vt=new un,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function _e(){return B===null?j:1}let X=r;function Un(N,J){return n.getContext(N,J)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${m_}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),X===null){const J="webgl2";if(X=Un(J,N),X===null)throw Un(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,de,kt,ge,Zt,ae,an,G,D,it,pt,_t,ct,Pt,Ut,Gt,Xt,Mt,zt,Yt,jt,Ct,re,Y;function Lt(){Ee=new LC(X),Ee.init(),Ct=new pD(X,Ee),de=new bC(X,Ee,t,Ct),kt=new hD(X,Ee),de.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),ge=new PC(X),Zt=new $2,ae=new dD(X,Ee,kt,Zt,de,Ct,ge),an=new RC(b),G=new UC(b),D=new GA(X),re=new EC(X,D),it=new OC(X,D,ge,re),pt=new BC(X,it,D,ge),zt=new zC(X,de,ae),Gt=new AC(Zt),_t=new J2(b,an,G,Ee,de,re,Gt),ct=new xD(b,Zt),Pt=new eD,Ut=new oD(Ee),Mt=new MC(b,an,G,kt,pt,y,d),Xt=new cD(b,pt,de),Y=new SD(X,ge,de,kt),Yt=new TC(X,Ee,ge),jt=new NC(X,Ee,ge),ge.programs=_t.programs,b.capabilities=de,b.extensions=Ee,b.properties=Zt,b.renderLists=Pt,b.shadowMap=Xt,b.state=kt,b.info=ge}Lt();const Tt=new vD(b,X);this.xr=Tt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(H,q,!1))},this.getSize=function(N){return N.set(H,q)},this.setSize=function(N,J,ot=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,q=J,n.width=Math.floor(N*j),n.height=Math.floor(J*j),ot===!0&&(n.style.width=N+"px",n.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(H*j,q*j).floor()},this.setDrawingBufferSize=function(N,J,ot){H=N,q=J,j=ot,n.width=Math.floor(N*ot),n.height=Math.floor(J*ot),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(tt)},this.setViewport=function(N,J,ot,lt){N.isVector4?tt.set(N.x,N.y,N.z,N.w):tt.set(N,J,ot,lt),kt.viewport(z.copy(tt).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(dt)},this.setScissor=function(N,J,ot,lt){N.isVector4?dt.set(N.x,N.y,N.z,N.w):dt.set(N,J,ot,lt),kt.scissor(F.copy(dt).multiplyScalar(j).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(N){kt.setScissorTest(gt=N)},this.setOpaqueSort=function(N){xt=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,ot=!0){let lt=0;if(N){let $=!1;if(B!==null){const At=B.texture.format;$=At===S_||At===x_||At===y_}if($){const At=B.texture.type,Dt=At===Xr||At===ws||At===uu||At===cu||At===g_||At===v_,Nt=Mt.getClearColor(),It=Mt.getClearAlpha(),ee=Nt.r,Jt=Nt.g,qt=Nt.b;Dt?(E[0]=ee,E[1]=Jt,E[2]=qt,E[3]=It,X.clearBufferuiv(X.COLOR,0,E)):(M[0]=ee,M[1]=Jt,M[2]=qt,M[3]=It,X.clearBufferiv(X.COLOR,0,M))}else lt|=X.COLOR_BUFFER_BIT}J&&(lt|=X.DEPTH_BUFFER_BIT),ot&&(lt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),Mt.dispose(),Pt.dispose(),Ut.dispose(),Zt.dispose(),an.dispose(),G.dispose(),pt.dispose(),re.dispose(),Y.dispose(),_t.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",gn),Tt.removeEventListener("sessionend",Ln),Zn.stop()};function Bt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const N=ge.autoReset,J=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,$=Xt.type;Lt(),ge.autoReset=N,Xt.enabled=J,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=$}function yt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ft(N){const J=N.target;J.removeEventListener("dispose",Ft),ie(J)}function ie(N){Oe(N),Zt.remove(N)}function Oe(N){const J=Zt.get(N).programs;J!==void 0&&(J.forEach(function(ot){_t.releaseProgram(ot)}),N.isShaderMaterial&&_t.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,ot,lt,$,At){J===null&&(J=Se);const Dt=$.isMesh&&$.matrixWorld.determinant()<0,Nt=Va(N,J,ot,lt,$);kt.setMaterial(lt,Dt);let It=ot.index,ee=1;if(lt.wireframe===!0){if(It=it.getWireframeAttribute(ot),It===void 0)return;ee=2}const Jt=ot.drawRange,qt=ot.attributes.position;let le=Jt.start*ee,Ce=(Jt.start+Jt.count)*ee;At!==null&&(le=Math.max(le,At.start*ee),Ce=Math.min(Ce,(At.start+At.count)*ee)),It!==null?(le=Math.max(le,0),Ce=Math.min(Ce,It.count)):qt!=null&&(le=Math.max(le,0),Ce=Math.min(Ce,qt.count));const Ye=Ce-le;if(Ye<0||Ye===1/0)return;re.setup($,lt,Nt,ot,It);let fe,De=Yt;if(It!==null&&(fe=D.get(It),De=jt,De.setIndex(fe)),$.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*_e()),De.setMode(X.LINES)):De.setMode(X.TRIANGLES);else if($.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*_e()),$.isLineSegments?De.setMode(X.LINES):$.isLineLoop?De.setMode(X.LINE_LOOP):De.setMode(X.LINE_STRIP)}else $.isPoints?De.setMode(X.POINTS):$.isSprite&&De.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))De.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Kt=$._multiDrawStarts,ze=$._multiDrawCounts,ve=$._multiDrawCount,Tn=It?D.get(It).bytesPerElement:1,Zr=Zt.get(lt).currentProgram.getUniforms();for(let qe=0;qe<ve;qe++)Zr.setValue(X,"_gl_DrawID",qe),De.render(Kt[qe]/Tn,ze[qe])}else if($.isInstancedMesh)De.renderInstances(le,Ye,$.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ze=Math.min(ot.instanceCount,Kt);De.renderInstances(le,Ye,ze)}else De.render(le,Ye)};function Te(N,J,ot){N.transparent===!0&&N.side===Fr&&N.forceSinglePass===!1?(N.side=ai,N.needsUpdate=!0,Yr(N,J,ot),N.side=Ba,N.needsUpdate=!0,Yr(N,J,ot),N.side=Fr):Yr(N,J,ot)}this.compile=function(N,J,ot=null){ot===null&&(ot=N),x=Ut.get(ot),x.init(J),w.push(x),ot.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),N!==ot&&N.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const lt=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Nt=At[Dt];Te(Nt,ot,$),lt.add(Nt)}else Te(At,ot,$),lt.add(At)}),x=w.pop(),lt},this.compileAsync=function(N,J,ot=null){const lt=this.compile(N,J,ot);return new Promise($=>{function At(){if(lt.forEach(function(Dt){Zt.get(Dt).currentProgram.isReady()&&lt.delete(Dt)}),lt.size===0){$(N);return}setTimeout(At,10)}Ee.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let li=null;function En(N){li&&li(N)}function gn(){Zn.stop()}function Ln(){Zn.start()}const Zn=new xM;Zn.setAnimationLoop(En),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(N){li=N,Tt.setAnimationLoop(N),N===null?Zn.stop():Zn.start()},Tt.addEventListener("sessionstart",gn),Tt.addEventListener("sessionend",Ln),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(J),J=Tt.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,J,B),x=Ut.get(N,w.length),x.init(J),w.push(x),Et.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K.setFromProjectionMatrix(Et),St=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,St),S=Pt.get(N,C.length),S.init(),C.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const At=b.xr.getDepthSensingMesh();At!==null&&Ha(At,J,-1/0,b.sortObjects)}Ha(N,J,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(xt,I),Le=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Le&&Mt.addToRenderList(S,N),this.info.render.frame++,ft===!0&&Gt.beginShadows();const ot=x.state.shadowsArray;Xt.render(ot,N,J),ft===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,$=S.transmissive;if(x.setupLights(),J.isArrayCamera){const At=J.cameras;if($.length>0)for(let Dt=0,Nt=At.length;Dt<Nt;Dt++){const It=At[Dt];Su(lt,$,N,It)}Le&&Mt.render(N);for(let Dt=0,Nt=At.length;Dt<Nt;Dt++){const It=At[Dt];xu(S,N,It,It.viewport)}}else $.length>0&&Su(lt,$,N,J),Le&&Mt.render(N),xu(S,N,J);B!==null&&U===0&&(ae.updateMultisampleRenderTarget(B),ae.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(b,N,J),re.resetDefaultState(),A=-1,R=null,w.pop(),w.length>0?(x=w[w.length-1],ft===!0&&Gt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Ha(N,J,ot,lt){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)ot=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||K.intersectsSprite(N)){lt&&Vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Et);const Dt=pt.update(N),Nt=N.material;Nt.visible&&S.push(N,Dt,Nt,ot,Vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||K.intersectsObject(N))){const Dt=pt.update(N),Nt=N.material;if(lt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Vt.copy(N.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Vt.copy(Dt.boundingSphere.center)),Vt.applyMatrix4(N.matrixWorld).applyMatrix4(Et)),Array.isArray(Nt)){const It=Dt.groups;for(let ee=0,Jt=It.length;ee<Jt;ee++){const qt=It[ee],le=Nt[qt.materialIndex];le&&le.visible&&S.push(N,Dt,le,ot,Vt.z,qt)}}else Nt.visible&&S.push(N,Dt,Nt,ot,Vt.z,null)}}const At=N.children;for(let Dt=0,Nt=At.length;Dt<Nt;Dt++)Ha(At[Dt],J,ot,lt)}function xu(N,J,ot,lt){const $=N.opaque,At=N.transmissive,Dt=N.transparent;x.setupLightsView(ot),ft===!0&&Gt.setGlobalState(b.clippingPlanes,ot),lt&&kt.viewport(z.copy(lt)),$.length>0&&Ga($,J,ot),At.length>0&&Ga(At,J,ot),Dt.length>0&&Ga(Dt,J,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Su(N,J,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Ia(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?pu:Xr,minFilter:xs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=x.state.transmissionRenderTarget[lt.id],Dt=lt.viewport||z;At.setSize(Dt.z*b.transmissionResolutionScale,Dt.w*b.transmissionResolutionScale);const Nt=b.getRenderTarget(),It=b.getActiveCubeFace(),ee=b.getActiveMipmapLevel();b.setRenderTarget(At),b.getClearColor(Z),at=b.getClearAlpha(),at<1&&b.setClearColor(16777215,.5),b.clear(),Le&&Mt.render(ot);const Jt=b.toneMapping;b.toneMapping=Na;const qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),ft===!0&&Gt.setGlobalState(b.clippingPlanes,lt),Ga(N,ot,lt),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ce=0,Ye=J.length;Ce<Ye;Ce++){const fe=J[Ce],De=fe.object,Kt=fe.geometry,ze=fe.material,ve=fe.group;if(ze.side===Fr&&De.layers.test(lt.layers)){const Tn=ze.side;ze.side=ai,ze.needsUpdate=!0,Wr(De,ot,lt,Kt,ze,ve),ze.side=Tn,ze.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}b.setRenderTarget(Nt,It,ee),b.setClearColor(Z,at),qt!==void 0&&(lt.viewport=qt),b.toneMapping=Jt}function Ga(N,J,ot){const lt=J.isScene===!0?J.overrideMaterial:null;for(let $=0,At=N.length;$<At;$++){const Dt=N[$],Nt=Dt.object,It=Dt.geometry,ee=Dt.group;let Jt=Dt.material;Jt.allowOverride===!0&&lt!==null&&(Jt=lt),Nt.layers.test(ot.layers)&&Wr(Nt,J,ot,It,Jt,ee)}}function Wr(N,J,ot,lt,$,At){N.onBeforeRender(b,J,ot,lt,$,At),N.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(b,J,ot,lt,N,At),$.transparent===!0&&$.side===Fr&&$.forceSinglePass===!1?($.side=ai,$.needsUpdate=!0,b.renderBufferDirect(ot,J,lt,$,N,At),$.side=Ba,$.needsUpdate=!0,b.renderBufferDirect(ot,J,lt,$,N,At),$.side=Fr):b.renderBufferDirect(ot,J,lt,$,N,At),N.onAfterRender(b,J,ot,lt,$,At)}function Yr(N,J,ot){J.isScene!==!0&&(J=Se);const lt=Zt.get(N),$=x.state.lights,At=x.state.shadowsArray,Dt=$.state.version,Nt=_t.getParameters(N,$.state,At,J,ot),It=_t.getProgramCacheKey(Nt);let ee=lt.programs;lt.environment=N.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(N.isMeshStandardMaterial?G:an).get(N.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,ee===void 0&&(N.addEventListener("dispose",Ft),ee=new Map,lt.programs=ee);let Jt=ee.get(It);if(Jt!==void 0){if(lt.currentProgram===Jt&&lt.lightsStateVersion===Dt)return hr(N,Nt),Jt}else Nt.uniforms=_t.getUniforms(N),N.onBeforeCompile(Nt,b),Jt=_t.acquireProgram(Nt,It),ee.set(It,Jt),lt.uniforms=Nt.uniforms;const qt=lt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qt.clippingPlanes=Gt.uniform),hr(N,Nt),lt.needsLights=cn(N),lt.lightsStateVersion=Dt,lt.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMap.value=$.state.directionalShadowMap,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotShadowMap.value=$.state.spotShadowMap,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMap.value=$.state.pointShadowMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),lt.currentProgram=Jt,lt.uniformsList=null,Jt}function fr(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=Tf.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function hr(N,J){const ot=Zt.get(N);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Va(N,J,ot,lt,$){J.isScene!==!0&&(J=Se),ae.resetTextureUnits();const At=J.fog,Dt=lt.isMeshStandardMaterial?J.environment:null,Nt=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xo,It=(lt.isMeshStandardMaterial?G:an).get(lt.envMap||Dt),ee=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let Ye=Na;lt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ye=b.toneMapping);const fe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,De=fe!==void 0?fe.length:0,Kt=Zt.get(lt),ze=x.state.lights;if(ft===!0&&(St===!0||N!==R)){const bn=N===R&&lt.id===A;Gt.setState(lt,N,bn)}let ve=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ze.state.version||Kt.outputColorSpace!==Nt||$.isBatchedMesh&&Kt.batching===!1||!$.isBatchedMesh&&Kt.batching===!0||$.isBatchedMesh&&Kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Kt.instancing===!1||!$.isInstancedMesh&&Kt.instancing===!0||$.isSkinnedMesh&&Kt.skinning===!1||!$.isSkinnedMesh&&Kt.skinning===!0||$.isInstancedMesh&&Kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Kt.instancingMorph===!1&&$.morphTexture!==null||Kt.envMap!==It||lt.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==le||Kt.morphColors!==Ce||Kt.toneMapping!==Ye||Kt.morphTargetsCount!==De)&&(ve=!0):(ve=!0,Kt.__version=lt.version);let Tn=Kt.currentProgram;ve===!0&&(Tn=Yr(lt,J,$));let Zr=!1,qe=!1,pr=!1;const Ge=Tn.getUniforms(),In=Kt.uniforms;if(kt.useProgram(Tn.program)&&(Zr=!0,qe=!0,pr=!0),lt.id!==A&&(A=lt.id,qe=!0),Zr||R!==N){kt.buffers.depth.getReversed()?(wt.copy(N.projectionMatrix),oA(wt),lA(wt),Ge.setValue(X,"projectionMatrix",wt)):Ge.setValue(X,"projectionMatrix",N.projectionMatrix),Ge.setValue(X,"viewMatrix",N.matrixWorldInverse);const On=Ge.map.cameraPosition;On!==void 0&&On.setValue(X,Qt.setFromMatrixPosition(N.matrixWorld)),de.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,qe=!0,pr=!0)}if($.isSkinnedMesh){Ge.setOptional(X,$,"bindMatrix"),Ge.setOptional(X,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ge.setValue(X,"boneTexture",bn.boneTexture,ae))}$.isBatchedMesh&&(Ge.setOptional(X,$,"batchingTexture"),Ge.setValue(X,"batchingTexture",$._matricesTexture,ae),Ge.setOptional(X,$,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",$._indirectTexture,ae),Ge.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",$._colorsTexture,ae));const vn=ot.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&zt.update($,ot,Tn),(qe||Kt.receiveShadow!==$.receiveShadow)&&(Kt.receiveShadow=$.receiveShadow,Ge.setValue(X,"receiveShadow",$.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(In.envMap.value=It,In.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&J.environment!==null&&(In.envMapIntensity.value=J.environmentIntensity),qe&&(Ge.setValue(X,"toneMappingExposure",b.toneMappingExposure),Kt.needsLights&&jr(In,pr),At&&lt.fog===!0&&ct.refreshFogUniforms(In,At),ct.refreshMaterialUniforms(In,lt,j,q,x.state.transmissionRenderTarget[N.id]),Tf.upload(X,fr(Kt),In,ae)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Tf.upload(X,fr(Kt),In,ae),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(X,"center",$.center),Ge.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ge.setValue(X,"normalMatrix",$.normalMatrix),Ge.setValue(X,"modelMatrix",$.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const bn=lt.uniformsGroups;for(let On=0,Qi=bn.length;On<Qi;On++){const mr=bn[On];Y.update(mr,Tn),Y.bind(mr,Tn)}}return Tn}function jr(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function cn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,J,ot){const lt=Zt.get(N);lt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Zt.get(N.texture).__webglTexture=J,Zt.get(N.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const ot=Zt.get(N);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0};const Mu=X.createFramebuffer();this.setRenderTarget=function(N,J=0,ot=0){B=N,P=J,U=ot;let lt=!0,$=null,At=!1,Dt=!1;if(N){const It=Zt.get(N);if(It.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(X.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(N);else if(It.__hasExternalTextures)ae.rebindTextures(N,Zt.get(N.texture).__webglTexture,Zt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const qt=N.depthTexture;if(It.__boundDepthTexture!==qt){if(qt!==null&&Zt.has(qt)&&(N.width!==qt.image.width||N.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(N)}}const ee=N.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Dt=!0);const Jt=Zt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Jt[J])?$=Jt[J][ot]:$=Jt[J],At=!0):N.samples>0&&ae.useMultisampledRTT(N)===!1?$=Zt.get(N).__webglMultisampledFramebuffer:Array.isArray(Jt)?$=Jt[ot]:$=Jt,z.copy(N.viewport),F.copy(N.scissor),k=N.scissorTest}else z.copy(tt).multiplyScalar(j).floor(),F.copy(dt).multiplyScalar(j).floor(),k=gt;if(ot!==0&&($=Mu),kt.bindFramebuffer(X.FRAMEBUFFER,$)&&lt&&kt.drawBuffers(N,$),kt.viewport(z),kt.scissor(F),kt.setScissorTest(k),At){const It=Zt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,It.__webglTexture,ot)}else if(Dt){const It=Zt.get(N.texture),ee=J;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,It.__webglTexture,ot,ee)}else if(N!==null&&ot!==0){const It=Zt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,ot)}A=-1},this.readRenderTargetPixels=function(N,J,ot,lt,$,At,Dt,Nt=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Zt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){kt.bindFramebuffer(X.FRAMEBUFFER,It);try{const ee=N.textures[Nt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-lt&&ot>=0&&ot<=N.height-$&&(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(J,ot,lt,$,Ct.convert(Jt),Ct.convert(qt),At))}finally{const ee=B!==null?Zt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,J,ot,lt,$,At,Dt,Nt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Zt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(J>=0&&J<=N.width-lt&&ot>=0&&ot<=N.height-$){kt.bindFramebuffer(X.FRAMEBUFFER,It);const ee=N.textures[Nt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.bufferData(X.PIXEL_PACK_BUFFER,At.byteLength,X.STREAM_READ),N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(J,ot,lt,$,Ct.convert(Jt),Ct.convert(qt),0);const Ce=B!==null?Zt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,Ce);const Ye=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await sA(X,Ye,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,At),X.deleteBuffer(le),X.deleteSync(Ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,ot=0){const lt=Math.pow(2,-ot),$=Math.floor(N.image.width*lt),At=Math.floor(N.image.height*lt),Dt=J!==null?J.x:0,Nt=J!==null?J.y:0;ae.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,Dt,Nt,$,At),kt.unbindTexture()};const Eu=X.createFramebuffer(),dr=X.createFramebuffer();this.copyTextureToTexture=function(N,J,ot=null,lt=null,$=0,At=null){At===null&&($!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=$,$=0):At=0);let Dt,Nt,It,ee,Jt,qt,le,Ce,Ye;const fe=N.isCompressedTexture?N.mipmaps[At]:N.image;if(ot!==null)Dt=ot.max.x-ot.min.x,Nt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,Jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const vn=Math.pow(2,-$);Dt=Math.floor(fe.width*vn),Nt=Math.floor(fe.height*vn),N.isDataArrayTexture?It=fe.depth:N.isData3DTexture?It=Math.floor(fe.depth*vn):It=1,ee=0,Jt=0,qt=0}lt!==null?(le=lt.x,Ce=lt.y,Ye=lt.z):(le=0,Ce=0,Ye=0);const De=Ct.convert(J.format),Kt=Ct.convert(J.type);let ze;J.isData3DTexture?(ae.setTexture3D(J,0),ze=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ae.setTexture2DArray(J,0),ze=X.TEXTURE_2D_ARRAY):(ae.setTexture2D(J,0),ze=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const ve=X.getParameter(X.UNPACK_ROW_LENGTH),Tn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Zr=X.getParameter(X.UNPACK_SKIP_PIXELS),qe=X.getParameter(X.UNPACK_SKIP_ROWS),pr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,fe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,fe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ee),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt);const Ge=N.isDataArrayTexture||N.isData3DTexture,In=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const vn=Zt.get(N),bn=Zt.get(J),On=Zt.get(vn.__renderTarget),Qi=Zt.get(bn.__renderTarget);kt.bindFramebuffer(X.READ_FRAMEBUFFER,On.__webglFramebuffer),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let mr=0;mr<It;mr++)Ge&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.get(N).__webglTexture,$,qt+mr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.get(J).__webglTexture,At,Ye+mr)),X.blitFramebuffer(ee,Jt,Dt,Nt,le,Ce,Dt,Nt,X.DEPTH_BUFFER_BIT,X.NEAREST);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||N.isRenderTargetTexture||Zt.has(N)){const vn=Zt.get(N),bn=Zt.get(J);kt.bindFramebuffer(X.READ_FRAMEBUFFER,Eu),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,dr);for(let On=0;On<It;On++)Ge?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,$,qt+On):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,$),In?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,At,Ye+On):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,At),$!==0?X.blitFramebuffer(ee,Jt,Dt,Nt,le,Ce,Dt,Nt,X.COLOR_BUFFER_BIT,X.NEAREST):In?X.copyTexSubImage3D(ze,At,le,Ce,Ye+On,ee,Jt,Dt,Nt):X.copyTexSubImage2D(ze,At,le,Ce,ee,Jt,Dt,Nt);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else In?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,Kt,fe.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,fe.data):X.texSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,Kt,fe):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,At,le,Ce,Dt,Nt,De,Kt,fe.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,At,le,Ce,fe.width,fe.height,De,fe.data):X.texSubImage2D(X.TEXTURE_2D,At,le,Ce,Dt,Nt,De,Kt,fe);X.pixelStorei(X.UNPACK_ROW_LENGTH,ve),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zr),X.pixelStorei(X.UNPACK_SKIP_ROWS,qe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,pr),At===0&&J.generateMipmaps&&X.generateMipmap(ze),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,J,ot=null,lt=null,$=0){return Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,ot,lt,$)},this.initRenderTarget=function(N){Zt.get(N).__webglFramebuffer===void 0&&ae.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ae.setTextureCube(N,0):N.isData3DTexture?ae.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ae.setTexture2DArray(N,0):ae.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){P=0,U=0,B=null,kt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const Vx=`varying vec2 vUv;\r
\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,ED=`precision highp float;\r
\r
uniform float iTime;\r
uniform vec2 iResolution;\r
uniform vec4 iMouse; \r
uniform int iFrame;\r
uniform sampler2D iPreviousFrame;\r
uniform float uFluidDecay;\r
uniform float uTrailLength;\r
\r
varying vec2 vUv;\r
\r
vec2 ur; \r
vec2 U;  \r
\r
float distanceToSegment(vec2 p, vec2 a, vec2 b){\r
    return length(p - a - (b - a) * clamp(dot(p - a, b - a) / dot(b - a, b - a), 0.0, 1.0));\r
}\r
\r
vec4 sampleFluidTextureOffset(vec2 v, int a, int b){\r
    return texture2D(iPreviousFrame, fract((v + vec2(float(a), float(b))) / ur));\r
}\r
\r
vec4 sampleFluidTexture(vec2 v){\r
    return texture2D(iPreviousFrame, fract(v / ur));\r
}\r
\r
float area(vec2 a, vec2 b, vec2 c){\r
    float A_side = length(b - c);\r
    float B_side = length(c - a);\r
    float C_side = length(a - b);\r
    float s = 0.5 * (A_side + B_side + C_side);\r
    return sqrt(max(s * (s - A_side) * (s - B_side) * (s - C_side), 0.0));\r
}\r
\r
void main(){\r
    U = vUv * iResolution;\r
    ur = iResolution.xy;\r
\r
    if (iFrame < 1) { \r
        float w = 0.5 + sin(0.2 * U.x) * 0.5;\r
        float q = length(U - 0.5 * ur);\r
        gl_FragColor = vec4(0.1 * exp(-0.001 * q * q), 0.0, 0.0, w);\r
    } else {\r
        vec2 v = U,\r
            A = v + vec2(1.0, 1.0),\r
            B = v + vec2(1.0, -1.0),\r
            C = v + vec2(-1.0, 1.0),\r
            D = v + vec2(-1.0, -1.0);\r
\r
        for (int i = 0; i < 8; i++) {\r
            v -= sampleFluidTexture(v).xy;\r
            A -= sampleFluidTexture(A).xy;\r
            B -= sampleFluidTexture(B).xy;\r
            C -= sampleFluidTexture(C).xy;\r
            D -= sampleFluidTexture(D).xy;\r
        }\r
\r
        vec4 currentFluidState = sampleFluidTexture(v); \r
\r
        vec4 n = sampleFluidTextureOffset(v, 0, 1);\r
        vec4 e = sampleFluidTextureOffset(v, 1, 0);\r
        vec4 s = sampleFluidTextureOffset(v, 0, -1);\r
        vec4 w = sampleFluidTextureOffset(v, -1, 0);\r
        vec4 smoothedNeighbors = 0.25 * (n + e + s + w);\r
\r
        currentFluidState = mix(sampleFluidTexture(v), smoothedNeighbors, vec4(0.15, 0.15, 0.95, 0.0));\r
        currentFluidState.z = currentFluidState.z - 0.01 * ((area(A, B, C) + area(B, C, A)) - 1.0);\r
\r
        vec4 pressureNeighbors = vec4(e.z, w.z, n.z, s.z); \r
        currentFluidState.xy = currentFluidState.xy + 100.0 * vec2(pressureNeighbors.x - pressureNeighbors.y, pressureNeighbors.z - pressureNeighbors.w) / ur;\r
\r
        currentFluidState.xy *= uFluidDecay;\r
        currentFluidState.z *= uTrailLength;\r
\r
\r
        gl_FragColor = clamp(currentFluidState, -0.4, 0.4);\r
    }\r
}`,TD=`precision highp float;\r
\r
uniform float iTime;\r
uniform vec2 iResolution;\r
uniform sampler2D iFluid;\r
uniform float uDistortionAmount;\r
uniform vec3 uColor1;\r
uniform vec3 uColor2;\r
uniform vec3 uColor3;\r
uniform vec3 uColor4;\r
uniform float uColorIntensity;\r
uniform float uSoftness;\r
\r
varying vec2 vUv;\r
\r
void main(){\r
    vec2 fragCoord = vUv * iResolution;\r
\r
    vec4 fluid = texture2D(iFluid, vUv);\r
    vec2 fluidVel = fluid.xy;\r
\r
    float mr = min(iResolution.x, iResolution.y);\r
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;\r
\r
    uv += fluidVel * (0.5 * uDistortionAmount); \r
\r
    float d = -iTime * 0.5;\r
    float a = 0.0;\r
    for (float i = 0.0; i < 8.0; i++) {\r
        a += cos(i - d - a * uv.x);\r
        d += sin(uv.y * i + a);\r
    }\r
    d += iTime * 0.5;\r
\r
    float mixer1 = cos(uv.x * d) * 0.5 + 0.5;\r
    float mixer2 = cos(uv.y * a) * 0.5 + 0.5;\r
    float mixer3 = sin(d + a) * 0.5 + 0.5;\r
\r
    float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);\r
    mixer1 = mix(mixer1, 0.5, smoothAmount);\r
    mixer2 = mix(mixer2, 0.5, smoothAmount);\r
    mixer3 = mix(mixer3, 0.5, smoothAmount);\r
\r
    vec3 col = mix(uColor1, uColor2, mixer1);\r
    col = mix(col, uColor3, mixer2);\r
    col = mix(col, uColor4, mixer3 * 0.4);\r
\r
    col *= uColorIntensity;\r
\r
    gl_FragColor = vec4(col, 1.0);\r
}`,Pr={distortionAmount:2.5,fluidDecay:.98,trailLength:.8,color1:new Re("#0f0f0f"),color2:new Re("#282828"),color3:new Re("#555555"),color4:new Re("#828282"),colorIntensity:1,softness:1};function bD(){const o=$e.useRef(null);return $e.useEffect(()=>{let t,n=!0;const r=window.innerWidth,s=window.innerHeight,l=new MD({antialias:!0,alpha:!0});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,1));const c=new yM(-1,1,1,-1,0,1),f={minFilter:Bi,magFilter:Bi,format:Ii,type:or,stencilBuffer:!1,depthBuffer:!1},d=new Ia(r,s,f),p=d.clone();let m=d,g=p,v=0;const y=new cr({vertexShader:Vx,fragmentShader:ED,uniforms:{iTime:{value:0},iResolution:{value:new Ue(r,s)},iFrame:{value:0},iPreviousFrame:{value:g.texture},uFluidDecay:{value:Pr.fluidDecay},uTrailLength:{value:Pr.trailLength}}}),E=new cr({vertexShader:Vx,fragmentShader:TD,uniforms:{iTime:{value:0},iResolution:{value:new Ue(r,s)},iFluid:{value:m.texture},uDistortionAmount:{value:Pr.distortionAmount},uColor1:{value:Pr.color1},uColor2:{value:Pr.color2},uColor3:{value:Pr.color3},uColor4:{value:Pr.color4},uColorIntensity:{value:Pr.colorIntensity},uSoftness:{value:Pr.softness}}}),M=new yu(2,2),S=new Zi(M,y),x=new Zi(M,E),C=o.current;C&&C.appendChild(l.domElement);let w;const b=()=>{clearTimeout(w),w=setTimeout(()=>{const U=window.innerWidth,B=window.innerHeight;l.setSize(U,B),y.uniforms.iResolution.value.set(U,B),E.uniforms.iResolution.value.set(U,B),d.setSize(U,B),p.setSize(U,B),v=0},150)};window.addEventListener("resize",b);const O=()=>{n=!document.hidden,n&&P()};document.addEventListener("visibilitychange",O);const P=()=>{if(!n)return;t=requestAnimationFrame(P);const U=performance.now()*.001;y.uniforms.iTime.value=U,y.uniforms.iFrame.value=v,y.uniforms.iPreviousFrame.value=g.texture,E.uniforms.iTime.value=U,E.uniforms.iFluid.value=m.texture,l.setRenderTarget(m),l.render(S,c),l.setRenderTarget(null),l.render(x,c),[m,g]=[g,m],v++};return P(),()=>{cancelAnimationFrame(t),window.removeEventListener("resize",b),document.removeEventListener("visibilitychange",O),clearTimeout(w),C&&l.domElement&&C.removeChild(l.domElement),l.dispose(),d.dispose(),p.dispose(),y.dispose(),E.dispose(),M.dispose()}},[]),bt.jsx("div",{className:"backgroundCanvas",ref:o})}const AD="_hero_d9poi_1",RD="_hidden_d9poi_23",wD="_hero_title_d9poi_33",CD="_hero_sides_d9poi_69",DD="_vertical_link_d9poi_93",bo={hero:AD,hidden:RD,hero_title:wD,hero_sides:CD,vertical_link:DD},UD=()=>{const[o,t]=$e.useState(!1);return $e.useEffect(()=>{const n=()=>{const r=window.scrollY;t(r>1e3)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),bt.jsxs("section",{className:`${bo.hero} ${o?bo.hidden:""}`,id:"hero","aria-labelledby":"hero-section",children:[bt.jsx("div",{className:bo.hero_sides,children:bt.jsxs("ul",{children:[bt.jsx("li",{children:bt.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane","aria-label":"email"})}),bt.jsx("li",{children:bt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in",target:"_blank","aria-label":"linkedin"})}),bt.jsx("li",{children:bt.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github",target:"_blank","aria-label":"github"})}),bt.jsx("li",{children:bt.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen",target:"_blank","aria-label":"codepen"})}),bt.jsx("li",{children:bt.jsx("a",{href:"https://www.youtube.com/@dnbsammie",className:"fa-brands fa-youtube",target:"_blank","aria-label":"youtube"})})]})}),bt.jsxs("div",{className:bo.hero_title,children:[bt.jsx("h5",{children:"Hi, I'm Samuel"}),bt.jsxs("h2",{children:["I craft ",bt.jsx("span",{className:"text_accent",children:"Experiences"}),bt.jsx("br",{}),"that Matter"]})]}),bt.jsxs("div",{className:bo.hero_sides,children:[bt.jsx(bs.Link,{to:"projects",smooth:!0,duration:400,className:bo.vertical_link,children:"SCROLL DOWN"}),bt.jsx("i",{className:"fa-solid fa-arrow-down-long"})]})]})},LD=[{title:"ordo",img:"/assets/img/img-01.webp",orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Ordo",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"youtube",icon:"fa-brands fa-youtube"}]},{title:"soundmorph",img:"/assets/img/img-02.webp",orientation:"vertical",links:[{href:"https://github.com/dnbsammie/SoundMorph",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"web",icon:"fa-solid fa-link"}]},{title:"aural",img:"/assets/img/img-03.webp",orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Aural",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"web",icon:"fa-solid fa-link"}]},{title:"trinity",img:"/assets/img/img-04.webp",orientation:"vertical",links:[{href:"https://github.com/dnbsammie/Trinity",label:"github",icon:"fa-brands fa-github"}]},{title:"overdrive",img:"/assets/img/img-05.webp",orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Overdrive",label:"github",icon:"fa-brands fa-github"}]}],OD="_projects_x6d1f_1",ND="_sticky_x6d1f_13",PD="_scroll_section_x6d1f_31",zD="_title_x6d1f_97",BD="_project_x6d1f_1",ID="_projectTitle_x6d1f_181",FD="_links_x6d1f_183",HD="_horizontal_x6d1f_257",GD="_vertical_x6d1f_269",Ta={projects:OD,sticky:ND,scroll_section:PD,title:zD,project:BD,projectTitle:ID,links:FD,horizontal:HD,vertical:GD},VD=()=>{const o=$e.useRef(null),t=$e.useRef(null);return $e.useEffect(()=>{const n=()=>{if(!o.current||!t.current)return;const r=o.current.offsetTop,s=window.scrollY,l=Math.min(Math.max((s-r)/window.innerHeight*100,0),600);t.current.style.transform=`translate3d(${-l}vw, 0, 0)`};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),bt.jsx("section",{className:Ta.projects,id:"projects",ref:o,"aria-labelledby":"projects-section",children:bt.jsxs("div",{className:Ta.sticky,children:[bt.jsx("div",{className:Ta.title,children:bt.jsx("h2",{children:"projects"})}),bt.jsx("div",{className:Ta.scroll_section,ref:t,children:LD.map((n,r)=>bt.jsxs("div",{className:`${Ta.project} ${Ta[n.orientation]}`,children:[bt.jsx("img",{src:n.img,alt:n.title}),bt.jsx("div",{className:Ta.projectTitle,children:n.title}),bt.jsx("div",{className:Ta.links,children:n.links.map((s,l)=>bt.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer","aria-label":s.label,children:bt.jsx("i",{className:s.icon})},l))})]},r))})]})})},kD="_f_head_4fh4p_43",XD="_f_content_4fh4p_45",qD="_f_foot_4fh4p_47",WD="_f_column_4fh4p_79",YD="_email_link_4fh4p_121",ba={f_head:kD,f_content:XD,f_foot:qD,f_column:WD,email_link:YD},jD=()=>{const o=new Date().getFullYear();return bt.jsxs("footer",{id:"footer",className:ba.contact,"aria-labelledby":"footer-section",children:[bt.jsx("div",{className:ba.f_head,id:"footer_head",children:bt.jsx("h1",{children:"get in touch"})}),bt.jsxs("div",{className:ba.f_content,id:"footer_content",children:[bt.jsxs("div",{className:ba.f_column,id:"footer_column",children:[bt.jsx("p",{children:"Do you have an idea or project in mind? Write to me and let's create something amazing together."}),bt.jsx("a",{href:"mailto:seriveramosq@gmail.com",target:"_blank",rel:"noopener noreferrer",className:ba.email_link,children:"seriveramosq@gmail.com"})]}),bt.jsxs("div",{className:ba.f_column,id:"footer_column",children:[bt.jsx("h4",{children:"follow me"}),bt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",target:"_blank","aria-label":"linkedin",children:"linkedin"}),bt.jsx("a",{href:"https://github.com/dnbsammie",target:"_blank","aria-label":"github",children:"github"}),bt.jsx("a",{href:"https://codepen.io/dnbsammie",target:"_blank","aria-label":"codepen",children:"codepen"}),bt.jsx("a",{href:"https://www.youtube.com/@dnbsammie",target:"_blank","aria-label":"youtube",children:"youtube"})]}),bt.jsxs("div",{className:ba.f_column,id:"footer_column",children:[bt.jsx("h4",{children:"sitemap"}),bt.jsx(bs.Link,{to:"hero",smooth:!0,duration:800,"aria-label":"back to top",children:"HOME"}),bt.jsx(bs.Link,{to:"projects",smooth:!0,duration:800,"aria-label":"back to top",children:"WORK"})]})]}),bt.jsxs("div",{className:ba.f_foot,id:"footer-foot",children:[bt.jsxs("p",{className:"copyright","aria-label":"copyright",children:["© ",o," Samuel Rivera. All Rights Reserved."]}),bt.jsx(bs.Link,{to:"hero",duration:800,className:"fa-solid fa-arrow-up","aria-label":"back to top"})]})]})};Yi.registerPlugin(Wo);const ZD=()=>{const[o,t]=$e.useState(!0);return bt.jsxs(bt.Fragment,{children:[o&&bt.jsx($b,{onComplete:()=>t(!1)}),bt.jsx(m1,{}),bt.jsx(bD,{}),bt.jsxs("main",{role:"main",style:{opacity:o?0:1,transition:"opacity 1.5s ease"},children:[bt.jsx(UD,{}),bt.jsx(VD,{})]}),bt.jsx(jD,{})]})};PT.createRoot(document.getElementById("root")).render(bt.jsx($e.StrictMode,{children:bt.jsx(ZD,{})}));
