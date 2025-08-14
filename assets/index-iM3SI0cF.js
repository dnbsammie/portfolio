(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yd={exports:{}},Gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function CT(){if(J0)return Gl;J0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:r,key:c,ref:s!==void 0?s:null,props:l}}return Gl.Fragment=t,Gl.jsx=n,Gl.jsxs=n,Gl}var $0;function DT(){return $0||($0=1,Yd.exports=CT()),Yd.exports}var St=DT(),jd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function UT(){if(ty)return se;ty=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(I,tt,dt){this.props=I,this.context=tt,this.refs=M,this.updater=dt||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,tt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,tt,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=S.prototype;function C(I,tt,dt){this.props=I,this.context=tt,this.refs=M,this.updater=dt||y}var w=C.prototype=new x;w.constructor=C,E(w,S.prototype),w.isPureReactComponent=!0;var b=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function L(I,tt,dt,vt,K,ft){return dt=ft.ref,{$$typeof:o,type:I,key:tt,ref:dt!==void 0?dt:null,props:ft}}function B(I,tt){return L(I.type,tt,void 0,void 0,void 0,I.props)}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function R(I){var tt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(dt){return tt[dt]})}var z=/\/+/g;function H(I,tt){return typeof I=="object"&&I!==null&&I.key!=null?R(""+I.key):tt.toString(36)}function k(){}function Y(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(k,k):(I.status="pending",I.then(function(tt){I.status==="pending"&&(I.status="fulfilled",I.value=tt)},function(tt){I.status==="pending"&&(I.status="rejected",I.reason=tt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function it(I,tt,dt,vt,K){var ft=typeof I;(ft==="undefined"||ft==="boolean")&&(I=null);var Mt=!1;if(I===null)Mt=!0;else switch(ft){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(I.$$typeof){case o:case t:Mt=!0;break;case m:return Mt=I._init,it(Mt(I._payload),tt,dt,vt,K)}}if(Mt)return K=K(I),Mt=vt===""?"."+H(I,0):vt,b(K)?(dt="",Mt!=null&&(dt=Mt.replace(z,"$&/")+"/"),it(K,tt,dt,"",function(Qt){return Qt})):K!=null&&(A(K)&&(K=B(K,dt+(K.key==null||I&&I.key===K.key?"":(""+K.key).replace(z,"$&/")+"/")+Mt)),tt.push(K)),1;Mt=0;var wt=vt===""?".":vt+":";if(b(I))for(var Tt=0;Tt<I.length;Tt++)vt=I[Tt],ft=wt+H(vt,Tt),Mt+=it(vt,tt,dt,ft,K);else if(Tt=v(I),typeof Tt=="function")for(I=Tt.call(I),Tt=0;!(vt=I.next()).done;)vt=vt.value,ft=wt+H(vt,Tt++),Mt+=it(vt,tt,dt,ft,K);else if(ft==="object"){if(typeof I.then=="function")return it(Y(I),tt,dt,vt,K);throw tt=String(I),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function F(I,tt,dt){if(I==null)return I;var vt=[],K=0;return it(I,vt,"","",function(ft){return tt.call(dt,ft,K++)}),vt}function q(I){if(I._status===-1){var tt=I._result;tt=tt(),tt.then(function(dt){(I._status===0||I._status===-1)&&(I._status=1,I._result=dt)},function(dt){(I._status===0||I._status===-1)&&(I._status=2,I._result=dt)}),I._status===-1&&(I._status=0,I._result=tt)}if(I._status===1)return I._result.default;throw I._result}var j=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function gt(){}return se.Children={map:F,forEach:function(I,tt,dt){F(I,function(){tt.apply(this,arguments)},dt)},count:function(I){var tt=0;return F(I,function(){tt++}),tt},toArray:function(I){return F(I,function(tt){return tt})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},se.Component=S,se.Fragment=n,se.Profiler=s,se.PureComponent=C,se.StrictMode=r,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},se.cache=function(I){return function(){return I.apply(null,arguments)}},se.cloneElement=function(I,tt,dt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var vt=E({},I.props),K=I.key,ft=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(ft=void 0),tt.key!==void 0&&(K=""+tt.key),tt)!P.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(vt[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)vt.children=dt;else if(1<Mt){for(var wt=Array(Mt),Tt=0;Tt<Mt;Tt++)wt[Tt]=arguments[Tt+2];vt.children=wt}return L(I.type,K,void 0,void 0,ft,vt)},se.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},se.createElement=function(I,tt,dt){var vt,K={},ft=null;if(tt!=null)for(vt in tt.key!==void 0&&(ft=""+tt.key),tt)P.call(tt,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(K[vt]=tt[vt]);var Mt=arguments.length-2;if(Mt===1)K.children=dt;else if(1<Mt){for(var wt=Array(Mt),Tt=0;Tt<Mt;Tt++)wt[Tt]=arguments[Tt+2];K.children=wt}if(I&&I.defaultProps)for(vt in Mt=I.defaultProps,Mt)K[vt]===void 0&&(K[vt]=Mt[vt]);return L(I,ft,void 0,void 0,null,K)},se.createRef=function(){return{current:null}},se.forwardRef=function(I){return{$$typeof:f,render:I}},se.isValidElement=A,se.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:q}},se.memo=function(I,tt){return{$$typeof:d,type:I,compare:tt===void 0?null:tt}},se.startTransition=function(I){var tt=O.T,dt={};O.T=dt;try{var vt=I(),K=O.S;K!==null&&K(dt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(gt,j)}catch(ft){j(ft)}finally{O.T=tt}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(I){return O.H.use(I)},se.useActionState=function(I,tt,dt){return O.H.useActionState(I,tt,dt)},se.useCallback=function(I,tt){return O.H.useCallback(I,tt)},se.useContext=function(I){return O.H.useContext(I)},se.useDebugValue=function(){},se.useDeferredValue=function(I,tt){return O.H.useDeferredValue(I,tt)},se.useEffect=function(I,tt,dt){var vt=O.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(I,tt)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(I,tt,dt){return O.H.useImperativeHandle(I,tt,dt)},se.useInsertionEffect=function(I,tt){return O.H.useInsertionEffect(I,tt)},se.useLayoutEffect=function(I,tt){return O.H.useLayoutEffect(I,tt)},se.useMemo=function(I,tt){return O.H.useMemo(I,tt)},se.useOptimistic=function(I,tt){return O.H.useOptimistic(I,tt)},se.useReducer=function(I,tt,dt){return O.H.useReducer(I,tt,dt)},se.useRef=function(I){return O.H.useRef(I)},se.useState=function(I){return O.H.useState(I)},se.useSyncExternalStore=function(I,tt,dt){return O.H.useSyncExternalStore(I,tt,dt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.1.0",se}var ey;function qr(){return ey||(ey=1,jd.exports=UT()),jd.exports}var $e=qr(),Zd={exports:{}},Vl={},Kd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function LT(){return ny||(ny=1,function(o){function t(F,q){var j=F.length;F.push(q);t:for(;0<j;){var gt=j-1>>>1,I=F[gt];if(0<s(I,q))F[gt]=q,F[j]=I,j=gt;else break t}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var q=F[0],j=F.pop();if(j!==q){F[0]=j;t:for(var gt=0,I=F.length,tt=I>>>1;gt<tt;){var dt=2*(gt+1)-1,vt=F[dt],K=dt+1,ft=F[K];if(0>s(vt,j))K<I&&0>s(ft,vt)?(F[gt]=ft,F[K]=j,gt=K):(F[gt]=vt,F[dt]=j,gt=dt);else if(K<I&&0>s(ft,j))F[gt]=ft,F[K]=j,gt=K;else break t}}return q}function s(F,q){var j=F.sortIndex-q.sortIndex;return j!==0?j:F.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],m=1,g=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function b(F){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=F)r(d),q.sortIndex=q.expirationTime,t(p,q);else break;q=n(d)}}function O(F){if(M=!1,b(F),!E)if(n(p)!==null)E=!0,P||(P=!0,H());else{var q=n(d);q!==null&&it(O,q.startTime-F)}}var P=!1,L=-1,B=5,A=-1;function R(){return S?!0:!(o.unstable_now()-A<B)}function z(){if(S=!1,P){var F=o.unstable_now();A=F;var q=!0;try{t:{E=!1,M&&(M=!1,C(L),L=-1),y=!0;var j=v;try{e:{for(b(F),g=n(p);g!==null&&!(g.expirationTime>F&&R());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,v=g.priorityLevel;var I=gt(g.expirationTime<=F);if(F=o.unstable_now(),typeof I=="function"){g.callback=I,b(F),q=!0;break e}g===n(p)&&r(p),b(F)}else r(p);g=n(p)}if(g!==null)q=!0;else{var tt=n(d);tt!==null&&it(O,tt.startTime-F),q=!1}}break t}finally{g=null,v=j,y=!1}q=void 0}}finally{q?H():P=!1}}}var H;if(typeof w=="function")H=function(){w(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=z,H=function(){Y.postMessage(null)}}else H=function(){x(z,0)};function it(F,q){L=x(function(){F(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var j=v;v=q;try{return F()}finally{v=j}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=v;v=F;try{return q()}finally{v=j}},o.unstable_scheduleCallback=function(F,q,j){var gt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?gt+j:gt):j=gt,F){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,F={id:m++,callback:q,priorityLevel:F,startTime:j,expirationTime:I,sortIndex:-1},j>gt?(F.sortIndex=j,t(d,F),n(p)===null&&F===n(d)&&(M?(C(L),L=-1):M=!0,it(O,j-gt))):(F.sortIndex=I,t(p,F),E||y||(E=!0,P||(P=!0,H()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var q=v;return function(){var j=v;v=q;try{return F.apply(this,arguments)}finally{v=j}}}}(Qd)),Qd}var iy;function OT(){return iy||(iy=1,Kd.exports=LT()),Kd.exports}var Jd={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function NT(){if(ry)return Hn;ry=1;var o=qr();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)d+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(p,d){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,m)},Hn.flushSync=function(p){var d=c.T,m=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=d,r.p=m,r.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var m=d.as,g=f(m,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;m==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):m==="script"&&r.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var m=f(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var m=d.as,g=f(m,d.crossOrigin);r.d.L(p,m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var m=f(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Hn.requestFormReset=function(p){r.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,m){return c.H.useFormState(p,d,m)},Hn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Hn.version="19.1.0",Hn}var ay;function Wm(){if(ay)return Jd.exports;ay=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jd.exports=NT(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function PT(){if(sy)return Vl;sy=1;var o=OT(),t=qr(),n=Wm();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(r(188))}function p(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,u=i;;){var h=a.return;if(h===null)break;var _=h.alternate;if(_===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===a)return f(h),e;if(_===u)return f(h),i;_=_.sibling}throw Error(r(188))}if(a.return!==u.return)a=h,u=_;else{for(var T=!1,U=h.child;U;){if(U===a){T=!0,a=h,u=_;break}if(U===u){T=!0,u=h,a=_;break}U=U.sibling}if(!T){for(U=_.child;U;){if(U===a){T=!0,a=_,u=h;break}if(U===u){T=!0,u=_,a=h;break}U=U.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==u)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),w=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case w:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case b:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return i=e.displayName||null,i!==null?i:Y(e.type)||"Memo";case B:i=e._payload,e=e._init;try{return Y(e(i))}catch{}}return null}var it=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},gt=[],I=-1;function tt(e){return{current:e}}function dt(e){0>I||(e.current=gt[I],gt[I]=null,I--)}function vt(e,i){I++,gt[I]=e.current,e.current=i}var K=tt(null),ft=tt(null),Mt=tt(null),wt=tt(null);function Tt(e,i){switch(vt(Mt,i),vt(ft,e),vt(K,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=A0(i),e=R0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(K),vt(K,e)}function Qt(){dt(K),dt(ft),dt(Mt)}function Vt(e){e.memoizedState!==null&&vt(wt,e);var i=K.current,a=R0(i,e.type);i!==a&&(vt(ft,e),vt(K,a))}function Se(e){ft.current===e&&(dt(K),dt(ft)),wt.current===e&&(dt(wt),zl._currentValue=j)}var Le=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,X=o.unstable_cancelCallback,Un=o.unstable_shouldYield,Ee=o.unstable_requestPaint,de=o.unstable_now,kt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Zt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,an=o.unstable_LowPriority,G=o.unstable_IdlePriority,D=o.log,rt=o.unstable_setDisableYieldValue,pt=null,_t=null;function ct(e){if(typeof D=="function"&&rt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,Ut=Math.log,Gt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var Et=256,zt=4194304;function Yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,i,a){var u=e.pendingLanes;if(u===0)return 0;var h=0,_=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var U=u&134217727;return U!==0?(u=U&~_,u!==0?h=Yt(u):(T&=U,T!==0?h=Yt(T):a||(a=U&~e,a!==0&&(h=Yt(a))))):(U=u&~_,U!==0?h=Yt(U):T!==0?h=Yt(T):a||(a=u&~e,a!==0&&(h=Yt(a)))),h===0?0:i!==0&&i!==h&&(i&_)===0&&(_=h&-h,a=i&-i,_>=a||_===32&&(a&4194048)!==0)?i:h}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Lt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function bt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,i,a,u,h,_){var T=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(a=T&~a;0<a;){var ht=31-Pt(a),yt=1<<ht;U[ht]=0,V[ht]=-1;var at=nt[ht];if(at!==null)for(nt[ht]=null,ht=0;ht<at.length;ht++){var st=at[ht];st!==null&&(st.lane&=-536870913)}a&=~yt}u!==0&&xt(e,u,0),_!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=_&~(T&~i))}function xt(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Pt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|a&4194090}function Ft(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var u=31-Pt(a),h=1<<u;h&i|e[u]&i&&(e[u]|=i),a&=~h}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:W0(e.type))}function li(e,i){var a=q.p;try{return q.p=e,i()}finally{q.p=a}}var En=Math.random().toString(36).slice(2),gn="__reactFiber$"+En,Ln="__reactProps$"+En,Zn="__reactContainer$"+En,Ha="__reactEvents$"+En,xu="__reactListeners$"+En,Su="__reactHandles$"+En,Ga="__reactResources$"+En,Wr="__reactMarker$"+En;function Yr(e){delete e[gn],delete e[Ln],delete e[Ha],delete e[xu],delete e[Su]}function cr(e){var i=e[gn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Zn]||a[gn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=U0(e);e!==null;){if(a=e[gn])return a;e=U0(e)}return i}e=a,a=e.parentNode}return null}function fr(e){if(e=e[gn]||e[Zn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Va(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function jr(e){var i=e[Ga];return i||(i=e[Ga]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(e){e[Wr]=!0}var Mu=new Set,Eu={};function hr(e,i){N(e,i),N(e+"Capture",i)}function N(e,i){for(Eu[e]=i,e=0;e<i.length;e++)Mu.add(i[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function $(e){return Le.call(lt,e)?!0:Le.call(ot,e)?!1:J.test(e)?lt[e]=!0:(ot[e]=!0,!1)}function At(e,i,a){if($(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Dt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Nt(e,i,a,u){if(u===null)e.removeAttribute(a);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+u)}}var It,ee;function Jt(e){if(It===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+ee}var qt=!1;function le(e,i){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(st){var at=st}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(st){at=st}e.call(yt.prototype)}}else{try{throw Error()}catch(st){at=st}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],U=_[1];if(T&&U){var V=T.split(`
`),nt=U.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===nt.length)for(u=V.length-1,h=nt.length-1;1<=u&&0<=h&&V[u]!==nt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==nt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==nt[h]){var ht=`
`+V[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Jt("Activity");default:return""}}function Ye(e){try{var i="";do i+=Ce(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(e){var i=De(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,_=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ze(e){e._valueTracker||(e._valueTracker=Kt(e))}function ve(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==a?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zr=/[\n"\\]/g;function qe(e){return e.replace(Zr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function dr(e,i,a,u,h,_,T,U){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?In(e,T,fe(i)):a!=null?In(e,T,fe(a)):u!=null&&e.removeAttribute("value"),h==null&&_!=null&&(e.defaultChecked=!!_),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+fe(U):e.removeAttribute("name")}function Ge(e,i,a,u,h,_,T,U){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.type=_),i!=null||a!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;a=a!=null?""+fe(a):"",i=i!=null?""+fe(i):a,U||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=U?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function In(e,i,a){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,i,a,u){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&u&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function bn(e,i,a){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+fe(a):""}function On(e,i,a,u){if(i==null){if(u!=null){if(a!=null)throw Error(r(92));if(it(u)){if(1<u.length)throw Error(r(93));u=u[0]}a=u}a==null&&(a=""),i=a}a=fe(i),e.defaultValue=a,u=e.textContent,u===a&&u!==""&&u!==null&&(e.value=u)}function Qi(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var pr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function A_(e,i,a){var u=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,a):typeof a!="number"||a===0||pr.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function R_(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var u in a)!a.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&a[h]!==u&&A_(e,h,u)}else for(var _ in i)i.hasOwnProperty(_)&&A_(e,_,i[_])}function Wf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tu(e){return wM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yf=null;function jf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Os=null;function w_(e){var i=fr(e);if(i&&(e=i.stateNode)){var a=e[Ln]||null;t:switch(e=i.stateNode,i.type){case"input":if(dr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==e&&u.form===e.form){var h=u[Ln]||null;if(!h)throw Error(r(90));dr(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)u=a[i],u.form===e.form&&ve(u)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&vn(e,!!a.multiple,i,!1)}}}var Zf=!1;function C_(e,i,a){if(Zf)return e(i,a);Zf=!0;try{var u=e(i);return u}finally{if(Zf=!1,(Ls!==null||Os!==null)&&(uc(),Ls&&(i=Ls,e=Os,Os=Ls=null,w_(i),e)))for(i=0;i<e.length;i++)w_(e[i])}}function Zo(e,i){var a=e.stateNode;if(a===null)return null;var u=a[Ln]||null;if(u===null)return null;a=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=!1;if(mr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Kf=!1}var Kr=null,Qf=null,bu=null;function D_(){if(bu)return bu;var e,i=Qf,a=i.length,u,h="value"in Kr?Kr.value:Kr.textContent,_=h.length;for(e=0;e<a&&i[e]===h[e];e++);var T=a-e;for(u=1;u<=T&&i[a-u]===h[_-u];u++);return bu=h.slice(e,1<u?1-u:void 0)}function Au(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ru(){return!0}function U_(){return!1}function Kn(e){function i(a,u,h,_,T){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ru:U_,this.isPropagationStopped=U_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),i}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Kn(ka),Qo=m({},ka,{view:0,detail:0}),CM=Kn(Qo),Jf,$f,Jo,Cu=m({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jo&&(Jo&&e.type==="mousemove"?(Jf=e.screenX-Jo.screenX,$f=e.screenY-Jo.screenY):$f=Jf=0,Jo=e),Jf)},movementY:function(e){return"movementY"in e?e.movementY:$f}}),L_=Kn(Cu),DM=m({},Cu,{dataTransfer:0}),UM=Kn(DM),LM=m({},Qo,{relatedTarget:0}),th=Kn(LM),OM=m({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Kn(OM),PM=m({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zM=Kn(PM),BM=m({},ka,{data:0}),O_=Kn(BM),IM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=HM[e])?!!i[e]:!1}function eh(){return GM}var VM=m({},Qo,{key:function(e){if(e.key){var i=IM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kM=Kn(VM),XM=m({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N_=Kn(XM),qM=m({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),WM=Kn(qM),YM=m({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),jM=Kn(YM),ZM=m({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KM=Kn(ZM),QM=m({},ka,{newState:0,oldState:0}),JM=Kn(QM),$M=[9,13,27,32],nh=mr&&"CompositionEvent"in window,$o=null;mr&&"documentMode"in document&&($o=document.documentMode);var tE=mr&&"TextEvent"in window&&!$o,P_=mr&&(!nh||$o&&8<$o&&11>=$o),z_=" ",B_=!1;function I_(e,i){switch(e){case"keyup":return $M.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function eE(e,i){switch(e){case"compositionend":return F_(i);case"keypress":return i.which!==32?null:(B_=!0,z_);case"textInput":return e=i.data,e===z_&&B_?null:e;default:return null}}function nE(e,i){if(Ns)return e==="compositionend"||!nh&&I_(e,i)?(e=D_(),bu=Qf=Kr=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return P_&&i.locale!=="ko"?null:i.data;default:return null}}var iE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!iE[e.type]:i==="textarea"}function G_(e,i,a,u){Ls?Os?Os.push(u):Os=[u]:Ls=u,i=mc(i,"onChange"),0<i.length&&(a=new wu("onChange","change",null,a,u),e.push({event:a,listeners:i}))}var tl=null,el=null;function rE(e){S0(e,0)}function Du(e){var i=Va(e);if(ve(i))return e}function V_(e,i){if(e==="change")return i}var k_=!1;if(mr){var ih;if(mr){var rh="oninput"in document;if(!rh){var X_=document.createElement("div");X_.setAttribute("oninput","return;"),rh=typeof X_.oninput=="function"}ih=rh}else ih=!1;k_=ih&&(!document.documentMode||9<document.documentMode)}function q_(){tl&&(tl.detachEvent("onpropertychange",W_),el=tl=null)}function W_(e){if(e.propertyName==="value"&&Du(el)){var i=[];G_(i,el,e,jf(e)),C_(rE,i)}}function aE(e,i,a){e==="focusin"?(q_(),tl=i,el=a,tl.attachEvent("onpropertychange",W_)):e==="focusout"&&q_()}function sE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Du(el)}function oE(e,i){if(e==="click")return Du(i)}function lE(e,i){if(e==="input"||e==="change")return Du(i)}function uE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:uE;function nl(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!Le.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function Y_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function j_(e,i){var a=Y_(e);e=0;for(var u;a;){if(a.nodeType===3){if(u=e+a.textContent.length,e<=i&&u>=i)return{node:a,offset:i-e};e=u}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Y_(a)}}function Z_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Z_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function K_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Tn(e.document)}return i}function ah(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var cE=mr&&"documentMode"in document&&11>=document.documentMode,Ps=null,sh=null,il=null,oh=!1;function Q_(e,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oh||Ps==null||Ps!==Tn(u)||(u=Ps,"selectionStart"in u&&ah(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),il&&nl(il,u)||(il=u,u=mc(sh,"onSelect"),0<u.length&&(i=new wu("onSelect","select",null,i,a),e.push({event:i,listeners:u}),i.target=Ps)))}function Xa(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var zs={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},lh={},J_={};mr&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function qa(e){if(lh[e])return lh[e];if(!zs[e])return e;var i=zs[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in J_)return lh[e]=i[a];return e}var $_=qa("animationend"),tg=qa("animationiteration"),eg=qa("animationstart"),fE=qa("transitionrun"),hE=qa("transitionstart"),dE=qa("transitioncancel"),ng=qa("transitionend"),ig=new Map,uh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uh.push("scrollEnd");function Hi(e,i){ig.set(e,i),hr(i,[e])}var rg=new WeakMap;function Ti(e,i){if(typeof e=="object"&&e!==null){var a=rg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ye(i)},rg.set(e,i),i)}return{value:e,source:i,stack:Ye(i)}}var bi=[],Bs=0,ch=0;function Uu(){for(var e=Bs,i=ch=Bs=0;i<e;){var a=bi[i];bi[i++]=null;var u=bi[i];bi[i++]=null;var h=bi[i];bi[i++]=null;var _=bi[i];if(bi[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}_!==0&&ag(a,h,_)}}function Lu(e,i,a,u){bi[Bs++]=e,bi[Bs++]=i,bi[Bs++]=a,bi[Bs++]=u,ch|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function fh(e,i,a,u){return Lu(e,i,a,u),Ou(e)}function Is(e,i){return Lu(e,null,null,i),Ou(e)}function ag(e,i,a){e.lanes|=a;var u=e.alternate;u!==null&&(u.lanes|=a);for(var h=!1,_=e.return;_!==null;)_.childLanes|=a,u=_.alternate,u!==null&&(u.childLanes|=a),_.tag===22&&(e=_.stateNode,e===null||e._visibility&1||(h=!0)),e=_,_=_.return;return e.tag===3?(_=e.stateNode,h&&i!==null&&(h=31-Pt(a),e=_.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=a|536870912),_):null}function Ou(e){if(50<wl)throw wl=0,gd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fs={};function pE(e,i,a,u){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,a,u){return new pE(e,i,a,u)}function hh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _r(e,i){var a=e.alternate;return a===null?(a=ci(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nu(e,i,a,u,h,_){var T=0;if(u=e,typeof e=="function")hh(e)&&(T=1);else if(typeof e=="string")T=_T(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ci(31,a,i,h),e.elementType=A,e.lanes=_,e;case E:return Wa(a.children,h,_,i);case M:T=8,h|=24;break;case S:return e=ci(12,a,i,h|2),e.elementType=S,e.lanes=_,e;case O:return e=ci(13,a,i,h),e.elementType=O,e.lanes=_,e;case P:return e=ci(19,a,i,h),e.elementType=P,e.lanes=_,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case w:T=10;break t;case C:T=9;break t;case b:T=11;break t;case L:T=14;break t;case B:T=16,u=null;break t}T=29,a=Error(r(130,e===null?"null":typeof e,"")),u=null}return i=ci(T,a,i,h),i.elementType=e,i.type=u,i.lanes=_,i}function Wa(e,i,a,u){return e=ci(7,e,u,i),e.lanes=a,e}function dh(e,i,a){return e=ci(6,e,null,i),e.lanes=a,e}function ph(e,i,a){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Hs=[],Gs=0,Pu=null,zu=0,Ai=[],Ri=0,Ya=null,gr=1,vr="";function ja(e,i){Hs[Gs++]=zu,Hs[Gs++]=Pu,Pu=e,zu=i}function og(e,i,a){Ai[Ri++]=gr,Ai[Ri++]=vr,Ai[Ri++]=Ya,Ya=e;var u=gr;e=vr;var h=32-Pt(u)-1;u&=~(1<<h),a+=1;var _=32-Pt(i)+h;if(30<_){var T=h-h%5;_=(u&(1<<T)-1).toString(32),u>>=T,h-=T,gr=1<<32-Pt(i)+h|a<<h|u,vr=_+e}else gr=1<<_|a<<h|u,vr=e}function mh(e){e.return!==null&&(ja(e,1),og(e,1,0))}function _h(e){for(;e===Pu;)Pu=Hs[--Gs],Hs[Gs]=null,zu=Hs[--Gs],Hs[Gs]=null;for(;e===Ya;)Ya=Ai[--Ri],Ai[Ri]=null,vr=Ai[--Ri],Ai[Ri]=null,gr=Ai[--Ri],Ai[Ri]=null}var Wn=null,en=null,we=!1,Za=null,Ji=!1,gh=Error(r(519));function Ka(e){var i=Error(r(418,""));throw sl(Ti(i,e)),gh}function lg(e){var i=e.stateNode,a=e.type,u=e.memoizedProps;switch(i[gn]=e,i[Ln]=u,a){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(a=0;a<Dl.length;a++)me(Dl[a],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Ge(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ze(i);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),On(i,u.value,u.defaultValue,u.children),ze(i)}a=u.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||u.suppressHydrationWarning===!0||b0(i.textContent,a)?(u.popover!=null&&(me("beforetoggle",i),me("toggle",i)),u.onScroll!=null&&me("scroll",i),u.onScrollEnd!=null&&me("scrollend",i),u.onClick!=null&&(i.onclick=_c),i=!0):i=!1,i||Ka(e)}function ug(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 5:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:Wn=Wn.return}}function rl(e){if(e!==Wn)return!1;if(!we)return ug(e),we=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Od(e.type,e.memoizedProps)),a=!a),a&&en&&Ka(e),ug(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){en=Vi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,ha(e.type)?(e=Bd,Bd=null,en=e):en=i):en=Wn?Vi(e.stateNode.nextSibling):null;return!0}function al(){en=Wn=null,we=!1}function cg(){var e=Za;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Za=null),e}function sl(e){Za===null?Za=[e]:Za.push(e)}var vh=tt(null),Qa=null,yr=null;function Qr(e,i,a){vt(vh,i._currentValue),i._currentValue=a}function xr(e){e._currentValue=vh.current,dt(vh)}function yh(e,i,a){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===a)break;e=e.return}}function xh(e,i,a,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var U=_;_=h;for(var V=0;V<i.length;V++)if(U.context===i[V]){_.lanes|=a,U=_.alternate,U!==null&&(U.lanes|=a),yh(_.return,a,e),u||(T=null);break t}_=U.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(r(341));T.lanes|=a,_=T.alternate,_!==null&&(_.lanes|=a),yh(T,a,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function ol(e,i,a,u){e=null;for(var h=i,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var U=h.type;ui(h.pendingProps.value,T.value)||(e!==null?e.push(U):e=[U])}}else if(h===wt.current){if(T=h.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}h=h.return}e!==null&&xh(i,e,a,u),i.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,yr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return fg(Qa,e)}function Iu(e,i){return Qa===null&&Ja(e),fg(e,i)}function fg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},yr===null){if(e===null)throw Error(r(308));yr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else yr=yr.next=i;return a}var mE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},_E=o.unstable_scheduleCallback,gE=o.unstable_NormalPriority,yn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sh(){return{controller:new mE,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&_E(gE,function(){e.controller.abort()})}var ul=null,Mh=0,Vs=0,ks=null;function vE(e,i){if(ul===null){var a=ul=[];Mh=0,Vs=Td(),ks={status:"pending",value:void 0,then:function(u){a.push(u)}}}return Mh++,i.then(hg,hg),i}function hg(){if(--Mh===0&&ul!==null){ks!==null&&(ks.status="fulfilled");var e=ul;ul=null,Vs=0,ks=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function yE(e,i){var a=[],u={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),u}var dg=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&vE(e,i),dg!==null&&dg(e,i)};var $a=tt(null);function Eh(){var e=$a.current;return e!==null?e:We.pooledCache}function Fu(e,i){i===null?vt($a,$a.current):vt($a,i.pool)}function pg(){var e=Eh();return e===null?null:{parent:yn._currentValue,pool:e}}var cl=Error(r(460)),mg=Error(r(474)),Hu=Error(r(542)),Th={then:function(){}};function _g(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gu(){}function gg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Gu,Gu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yg(e),e;default:if(typeof i.status=="string")i.then(Gu,Gu);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yg(e),e}throw fl=i,cl}}var fl=null;function vg(){if(fl===null)throw Error(r(459));var e=fl;return fl=null,e}function yg(e){if(e===cl||e===Hu)throw Error(r(483))}var Jr=!1;function bh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ah(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $r(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ta(e,i,a){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Ou(e),ag(e,null,a),i}return Lu(e,u,i,a),Ou(e)}function hl(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,a|=u,i.lanes=a,Ft(e,a)}}function Rh(e,i){var a=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?h=_=i:_=_.next=i}else h=_=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var wh=!1;function dl(){if(wh){var e=ks;if(e!==null)throw e}}function pl(e,i,a,u){wh=!1;var h=e.updateQueue;Jr=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var V=U,nt=V.next;V.next=null,T===null?_=nt:T.next=nt,T=V;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,U=ht.lastBaseUpdate,U!==T&&(U===null?ht.firstBaseUpdate=nt:U.next=nt,ht.lastBaseUpdate=V))}if(_!==null){var yt=h.baseState;T=0,ht=nt=V=null,U=_;do{var at=U.lane&-536870913,st=at!==U.lane;if(st?(Me&at)===at:(u&at)===at){at!==0&&at===Vs&&(wh=!0),ht!==null&&(ht=ht.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var ne=e,$t=U;at=i;var Fe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){yt=ne.call(Fe,yt,at);break t}yt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,at=typeof ne=="function"?ne.call(Fe,yt,at):ne,at==null)break t;yt=m({},yt,at);break t;case 2:Jr=!0}}at=U.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=h.callbacks,st===null?h.callbacks=[at]:st.push(at))}else st={lane:at,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ht===null?(nt=ht=st,V=yt):ht=ht.next=st,T|=at;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;st=U,U=st.next,st.next=null,h.lastBaseUpdate=st,h.shared.pending=null}}while(!0);ht===null&&(V=yt),h.baseState=V,h.firstBaseUpdate=nt,h.lastBaseUpdate=ht,_===null&&(h.shared.lanes=0),la|=T,e.lanes=T,e.memoizedState=yt}}function xg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Sg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xg(a[e],i)}var Xs=tt(null),Vu=tt(0);function Mg(e,i){e=Rr,vt(Vu,e),vt(Xs,i),Rr=e|i.baseLanes}function Ch(){vt(Vu,Rr),vt(Xs,Xs.current)}function Dh(){Rr=Vu.current,dt(Xs),dt(Vu)}var ea=0,ce=null,Be=null,fn=null,ku=!1,qs=!1,ts=!1,Xu=0,ml=0,Ws=null,xE=0;function sn(){throw Error(r(321))}function Uh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!ui(e[a],i[a]))return!1;return!0}function Lh(e,i,a,u,h,_){return ea=_,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?av:sv,ts=!1,_=a(u,h),ts=!1,qs&&(_=Tg(i,a,u,h)),Eg(e),_}function Eg(e){F.H=Ku;var i=Be!==null&&Be.next!==null;if(ea=0,fn=Be=ce=null,ku=!1,ml=0,Ws=null,i)throw Error(r(300));e===null||An||(e=e.dependencies,e!==null&&Bu(e)&&(An=!0))}function Tg(e,i,a,u){ce=e;var h=0;do{if(qs&&(Ws=null),ml=0,qs=!1,25<=h)throw Error(r(301));if(h+=1,fn=Be=null,e.updateQueue!=null){var _=e.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}F.H=RE,_=i(a,u)}while(qs);return _}function SE(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?_l(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ce.flags|=1024),i}function Oh(){var e=Xu!==0;return Xu=0,e}function Nh(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ph(e){if(ku){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ku=!1}ea=0,fn=Be=ce=null,qs=!1,ml=Xu=0,Ws=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ce.memoizedState=fn=e:fn=fn.next=e,fn}function hn(){if(Be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=fn===null?ce.memoizedState:fn.next;if(i!==null)fn=i,Be=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},fn===null?ce.memoizedState=fn=e:fn=fn.next=e}return fn}function zh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var i=ml;return ml+=1,Ws===null&&(Ws=[]),e=gg(Ws,e,i),i=ce,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?av:sv),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===w)return Fn(e)}throw Error(r(438,String(e)))}function Bh(e){var i=null,a=ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=zh(),ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),u=0;u<e;u++)a[u]=R;return i.index++,a}function Sr(e,i){return typeof i=="function"?i(e):i}function Wu(e){var i=hn();return Ih(i,Be,e)}function Ih(e,i,a){var u=e.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=a;var h=e.baseQueue,_=u.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}i.baseQueue=h=_,u.pending=null}if(_=e.baseState,h===null)e.memoizedState=_;else{i=h.next;var U=T=null,V=null,nt=i,ht=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Me&yt)===yt:(ea&yt)===yt){var at=nt.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===Vs&&(ht=!0);else if((ea&at)===at){nt=nt.next,at===Vs&&(ht=!0);continue}else yt={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(U=V=yt,T=_):V=V.next=yt,ce.lanes|=at,la|=at;yt=nt.action,ts&&a(_,yt),_=nt.hasEagerState?nt.eagerState:a(_,yt)}else at={lane:yt,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(U=V=at,T=_):V=V.next=at,ce.lanes|=yt,la|=yt;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?T=_:V.next=U,!ui(_,e.memoizedState)&&(An=!0,ht&&(a=ks,a!==null)))throw a;e.memoizedState=_,e.baseState=T,e.baseQueue=V,u.lastRenderedState=_}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Fh(e){var i=hn(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var u=a.dispatch,h=a.pending,_=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do _=e(_,T.action),T=T.next;while(T!==h);ui(_,i.memoizedState)||(An=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,u]}function bg(e,i,a){var u=ce,h=hn(),_=we;if(_){if(a===void 0)throw Error(r(407));a=a()}else a=i();var T=!ui((Be||h).memoizedState,a);T&&(h.memoizedState=a,An=!0),h=h.queue;var U=wg.bind(null,u,h,e);if(gl(2048,8,U,[e]),h.getSnapshot!==i||T||fn!==null&&fn.memoizedState.tag&1){if(u.flags|=2048,Ys(9,Yu(),Rg.bind(null,u,h,a,i),null),We===null)throw Error(r(349));_||(ea&124)!==0||Ag(u,i,a)}return a}function Ag(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ce.updateQueue,i===null?(i=zh(),ce.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Rg(e,i,a,u){i.value=a,i.getSnapshot=u,Cg(i)&&Dg(e)}function wg(e,i,a){return a(function(){Cg(i)&&Dg(e)})}function Cg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!ui(e,a)}catch{return!0}}function Dg(e){var i=Is(e,2);i!==null&&mi(i,e,2)}function Hh(e){var i=Qn();if(typeof e=="function"){var a=e;if(e=a(),ts){ct(!0);try{a()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},i}function Ug(e,i,a,u){return e.baseState=a,Ih(e,Be,typeof u=="function"?u:Sr)}function ME(e,i,a,u,h){if(Zu(e))throw Error(r(485));if(e=i.action,e!==null){var _={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};F.T!==null?a(!0):_.isTransition=!1,u(_),a=i.pending,a===null?(_.next=i.pending=_,Lg(i,_)):(_.next=a.next,i.pending=a.next=_)}}function Lg(e,i){var a=i.action,u=i.payload,h=e.state;if(i.isTransition){var _=F.T,T={};F.T=T;try{var U=a(h,u),V=F.S;V!==null&&V(T,U),Og(e,i,U)}catch(nt){Gh(e,i,nt)}finally{F.T=_}}else try{_=a(h,u),Og(e,i,_)}catch(nt){Gh(e,i,nt)}}function Og(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){Ng(e,i,u)},function(u){return Gh(e,i,u)}):Ng(e,i,a)}function Ng(e,i,a){i.status="fulfilled",i.value=a,Pg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Lg(e,a)))}function Gh(e,i,a){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,Pg(i),i=i.next;while(i!==u)}e.action=null}function Pg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function zg(e,i){return i}function Bg(e,i){if(we){var a=We.formState;if(a!==null){t:{var u=ce;if(we){if(en){e:{for(var h=en,_=Ji;h.nodeType!==8;){if(!_){h=null;break e}if(h=Vi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){en=Vi(h.nextSibling),u=h.data==="F!";break t}}Ka(u)}u=!1}u&&(i=a[0])}}return a=Qn(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:i},a.queue=u,a=nv.bind(null,ce,u),u.dispatch=a,u=Hh(!1),_=Wh.bind(null,ce,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,a=ME.bind(null,ce,h,_,a),h.dispatch=a,u.memoizedState=e,[i,a,!1]}function Ig(e){var i=hn();return Fg(i,Be,e)}function Fg(e,i,a){if(i=Ih(e,i,zg)[0],e=Wu(Sr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=_l(i)}catch(T){throw T===cl?Hu:T}else u=i;i=hn();var h=i.queue,_=h.dispatch;return a!==i.memoizedState&&(ce.flags|=2048,Ys(9,Yu(),EE.bind(null,h,a),null)),[u,_,e]}function EE(e,i){e.action=i}function Hg(e){var i=hn(),a=Be;if(a!==null)return Fg(i,a,e);hn(),i=i.memoizedState,a=hn();var u=a.queue.dispatch;return a.memoizedState=e,[i,u,!1]}function Ys(e,i,a,u){return e={tag:e,create:a,deps:u,inst:i,next:null},i=ce.updateQueue,i===null&&(i=zh(),ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(u=a.next,a.next=e,e.next=u,i.lastEffect=e),e}function Yu(){return{destroy:void 0,resource:void 0}}function Gg(){return hn().memoizedState}function ju(e,i,a,u){var h=Qn();u=u===void 0?null:u,ce.flags|=e,h.memoizedState=Ys(1|i,Yu(),a,u)}function gl(e,i,a,u){var h=hn();u=u===void 0?null:u;var _=h.memoizedState.inst;Be!==null&&u!==null&&Uh(u,Be.memoizedState.deps)?h.memoizedState=Ys(i,_,a,u):(ce.flags|=e,h.memoizedState=Ys(1|i,_,a,u))}function Vg(e,i){ju(8390656,8,e,i)}function kg(e,i){gl(2048,8,e,i)}function Xg(e,i){return gl(4,2,e,i)}function qg(e,i){return gl(4,4,e,i)}function Wg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Yg(e,i,a){a=a!=null?a.concat([e]):null,gl(4,4,Wg.bind(null,i,e),a)}function Vh(){}function jg(e,i){var a=hn();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&Uh(i,u[1])?u[0]:(a.memoizedState=[e,i],e)}function Zg(e,i){var a=hn();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&Uh(i,u[1]))return u[0];if(u=e(),ts){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[u,i],u}function kh(e,i,a){return a===void 0||(ea&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Jv(),ce.lanes|=e,la|=e,a)}function Kg(e,i,a,u){return ui(a,i)?a:Xs.current!==null?(e=kh(e,a,u),ui(e,i)||(An=!0),e):(ea&42)===0?(An=!0,e.memoizedState=a):(e=Jv(),ce.lanes|=e,la|=e,i)}function Qg(e,i,a,u,h){var _=q.p;q.p=_!==0&&8>_?_:8;var T=F.T,U={};F.T=U,Wh(e,!1,i,a);try{var V=h(),nt=F.S;if(nt!==null&&nt(U,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ht=yE(V,u);vl(e,i,ht,pi(e))}else vl(e,i,u,pi(e))}catch(yt){vl(e,i,{then:function(){},status:"rejected",reason:yt},pi())}finally{q.p=_,F.T=T}}function TE(){}function Xh(e,i,a,u){if(e.tag!==5)throw Error(r(476));var h=Jg(e).queue;Qg(e,h,i,j,a===null?TE:function(){return $g(e),a(u)})}function Jg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:j},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function $g(e){var i=Jg(e).next.queue;vl(e,i,{},pi())}function qh(){return Fn(zl)}function tv(){return hn().memoizedState}function ev(){return hn().memoizedState}function bE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pi();e=$r(a);var u=ta(i,e,a);u!==null&&(mi(u,i,a),hl(u,i,a)),i={cache:Sh()},e.payload=i;return}i=i.return}}function AE(e,i,a){var u=pi();a={lane:u,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Zu(e)?iv(i,a):(a=fh(e,i,a,u),a!==null&&(mi(a,e,u),rv(a,i,u)))}function nv(e,i,a){var u=pi();vl(e,i,a,u)}function vl(e,i,a,u){var h={lane:u,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))iv(i,h);else{var _=e.alternate;if(e.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,U=_(T,a);if(h.hasEagerState=!0,h.eagerState=U,ui(U,T))return Lu(e,i,h,0),We===null&&Uu(),!1}catch{}finally{}if(a=fh(e,i,h,u),a!==null)return mi(a,e,u),rv(a,i,u),!0}return!1}function Wh(e,i,a,u){if(u={lane:2,revertLane:Td(),action:u,hasEagerState:!1,eagerState:null,next:null},Zu(e)){if(i)throw Error(r(479))}else i=fh(e,a,u,2),i!==null&&mi(i,e,2)}function Zu(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function iv(e,i){qs=ku=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function rv(e,i,a){if((a&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,a|=u,i.lanes=a,Ft(e,a)}}var Ku={readContext:Fn,use:qu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},av={readContext:Fn,use:qu,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Fn,useEffect:Vg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ju(4194308,4,Wg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ju(4194308,4,e,i)},useInsertionEffect:function(e,i){ju(4,2,e,i)},useMemo:function(e,i){var a=Qn();i=i===void 0?null:i;var u=e();if(ts){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[u,i],u},useReducer:function(e,i,a){var u=Qn();if(a!==void 0){var h=a(i);if(ts){ct(!0);try{a(i)}finally{ct(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=AE.bind(null,ce,e),[u.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=Hh(e);var i=e.queue,a=nv.bind(null,ce,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Vh,useDeferredValue:function(e,i){var a=Qn();return kh(a,e,i)},useTransition:function(){var e=Hh(!1);return e=Qg.bind(null,ce,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var u=ce,h=Qn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),We===null)throw Error(r(349));(Me&124)!==0||Ag(u,i,a)}h.memoizedState=a;var _={value:a,getSnapshot:i};return h.queue=_,Vg(wg.bind(null,u,_,e),[e]),u.flags|=2048,Ys(9,Yu(),Rg.bind(null,u,_,a,i),null),a},useId:function(){var e=Qn(),i=We.identifierPrefix;if(we){var a=vr,u=gr;a=(u&~(1<<32-Pt(u)-1)).toString(32)+a,i="«"+i+"R"+a,a=Xu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=xE++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:qh,useFormState:Bg,useActionState:Bg,useOptimistic:function(e){var i=Qn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Wh.bind(null,ce,!0,a),a.dispatch=i,[e,i]},useMemoCache:Bh,useCacheRefresh:function(){return Qn().memoizedState=bE.bind(null,ce)}},sv={readContext:Fn,use:qu,useCallback:jg,useContext:Fn,useEffect:kg,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Zg,useReducer:Wu,useRef:Gg,useState:function(){return Wu(Sr)},useDebugValue:Vh,useDeferredValue:function(e,i){var a=hn();return Kg(a,Be.memoizedState,e,i)},useTransition:function(){var e=Wu(Sr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:bg,useId:tv,useHostTransitionStatus:qh,useFormState:Ig,useActionState:Ig,useOptimistic:function(e,i){var a=hn();return Ug(a,Be,e,i)},useMemoCache:Bh,useCacheRefresh:ev},RE={readContext:Fn,use:qu,useCallback:jg,useContext:Fn,useEffect:kg,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Zg,useReducer:Fh,useRef:Gg,useState:function(){return Fh(Sr)},useDebugValue:Vh,useDeferredValue:function(e,i){var a=hn();return Be===null?kh(a,e,i):Kg(a,Be.memoizedState,e,i)},useTransition:function(){var e=Fh(Sr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:bg,useId:tv,useHostTransitionStatus:qh,useFormState:Hg,useActionState:Hg,useOptimistic:function(e,i){var a=hn();return Be!==null?Ug(a,Be,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bh,useCacheRefresh:ev},js=null,yl=0;function Qu(e){var i=yl;return yl+=1,js===null&&(js=[]),gg(js,e,i)}function xl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ju(e,i){throw i.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ov(e){var i=e._init;return i(e._payload)}function lv(e){function i(Q,W){if(e){var et=Q.deletions;et===null?(Q.deletions=[W],Q.flags|=16):et.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function u(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function h(Q,W){return Q=_r(Q,W),Q.index=0,Q.sibling=null,Q}function _(Q,W,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<W?(Q.flags|=67108866,W):et):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function T(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function U(Q,W,et,mt){return W===null||W.tag!==6?(W=dh(et,Q.mode,mt),W.return=Q,W):(W=h(W,et),W.return=Q,W)}function V(Q,W,et,mt){var Ht=et.type;return Ht===E?ht(Q,W,et.props.children,mt,et.key):W!==null&&(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&ov(Ht)===W.type)?(W=h(W,et.props),xl(W,et),W.return=Q,W):(W=Nu(et.type,et.key,et.props,null,Q.mode,mt),xl(W,et),W.return=Q,W)}function nt(Q,W,et,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=ph(et,Q.mode,mt),W.return=Q,W):(W=h(W,et.children||[]),W.return=Q,W)}function ht(Q,W,et,mt,Ht){return W===null||W.tag!==7?(W=Wa(et,Q.mode,mt,Ht),W.return=Q,W):(W=h(W,et),W.return=Q,W)}function yt(Q,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=dh(""+W,Q.mode,et),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return et=Nu(W.type,W.key,W.props,null,Q.mode,et),xl(et,W),et.return=Q,et;case y:return W=ph(W,Q.mode,et),W.return=Q,W;case B:var mt=W._init;return W=mt(W._payload),yt(Q,W,et)}if(it(W)||H(W))return W=Wa(W,Q.mode,et,null),W.return=Q,W;if(typeof W.then=="function")return yt(Q,Qu(W),et);if(W.$$typeof===w)return yt(Q,Iu(Q,W),et);Ju(Q,W)}return null}function at(Q,W,et,mt){var Ht=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Ht!==null?null:U(Q,W,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case v:return et.key===Ht?V(Q,W,et,mt):null;case y:return et.key===Ht?nt(Q,W,et,mt):null;case B:return Ht=et._init,et=Ht(et._payload),at(Q,W,et,mt)}if(it(et)||H(et))return Ht!==null?null:ht(Q,W,et,mt,null);if(typeof et.then=="function")return at(Q,W,Qu(et),mt);if(et.$$typeof===w)return at(Q,W,Iu(Q,et),mt);Ju(Q,et)}return null}function st(Q,W,et,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get(et)||null,U(W,Q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case v:return Q=Q.get(mt.key===null?et:mt.key)||null,V(W,Q,mt,Ht);case y:return Q=Q.get(mt.key===null?et:mt.key)||null,nt(W,Q,mt,Ht);case B:var he=mt._init;return mt=he(mt._payload),st(Q,W,et,mt,Ht)}if(it(mt)||H(mt))return Q=Q.get(et)||null,ht(W,Q,mt,Ht,null);if(typeof mt.then=="function")return st(Q,W,et,Qu(mt),Ht);if(mt.$$typeof===w)return st(Q,W,et,Iu(W,mt),Ht);Ju(W,mt)}return null}function ne(Q,W,et,mt){for(var Ht=null,he=null,Wt=W,te=W=0,wn=null;Wt!==null&&te<et.length;te++){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var be=at(Q,Wt,et[te],mt);if(be===null){Wt===null&&(Wt=wn);break}e&&Wt&&be.alternate===null&&i(Q,Wt),W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be,Wt=wn}if(te===et.length)return a(Q,Wt),we&&ja(Q,te),Ht;if(Wt===null){for(;te<et.length;te++)Wt=yt(Q,et[te],mt),Wt!==null&&(W=_(Wt,W,te),he===null?Ht=Wt:he.sibling=Wt,he=Wt);return we&&ja(Q,te),Ht}for(Wt=u(Wt);te<et.length;te++)wn=st(Wt,Q,te,et[te],mt),wn!==null&&(e&&wn.alternate!==null&&Wt.delete(wn.key===null?te:wn.key),W=_(wn,W,te),he===null?Ht=wn:he.sibling=wn,he=wn);return e&&Wt.forEach(function(ga){return i(Q,ga)}),we&&ja(Q,te),Ht}function $t(Q,W,et,mt){if(et==null)throw Error(r(151));for(var Ht=null,he=null,Wt=W,te=W=0,wn=null,be=et.next();Wt!==null&&!be.done;te++,be=et.next()){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var ga=at(Q,Wt,be.value,mt);if(ga===null){Wt===null&&(Wt=wn);break}e&&Wt&&ga.alternate===null&&i(Q,Wt),W=_(ga,W,te),he===null?Ht=ga:he.sibling=ga,he=ga,Wt=wn}if(be.done)return a(Q,Wt),we&&ja(Q,te),Ht;if(Wt===null){for(;!be.done;te++,be=et.next())be=yt(Q,be.value,mt),be!==null&&(W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be);return we&&ja(Q,te),Ht}for(Wt=u(Wt);!be.done;te++,be=et.next())be=st(Wt,Q,te,be.value,mt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?te:be.key),W=_(be,W,te),he===null?Ht=be:he.sibling=be,he=be);return e&&Wt.forEach(function(wT){return i(Q,wT)}),we&&ja(Q,te),Ht}function Fe(Q,W,et,mt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case v:t:{for(var Ht=et.key;W!==null;){if(W.key===Ht){if(Ht=et.type,Ht===E){if(W.tag===7){a(Q,W.sibling),mt=h(W,et.props.children),mt.return=Q,Q=mt;break t}}else if(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&ov(Ht)===W.type){a(Q,W.sibling),mt=h(W,et.props),xl(mt,et),mt.return=Q,Q=mt;break t}a(Q,W);break}else i(Q,W);W=W.sibling}et.type===E?(mt=Wa(et.props.children,Q.mode,mt,et.key),mt.return=Q,Q=mt):(mt=Nu(et.type,et.key,et.props,null,Q.mode,mt),xl(mt,et),mt.return=Q,Q=mt)}return T(Q);case y:t:{for(Ht=et.key;W!==null;){if(W.key===Ht)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(Q,W.sibling),mt=h(W,et.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,W);break}else i(Q,W);W=W.sibling}mt=ph(et,Q.mode,mt),mt.return=Q,Q=mt}return T(Q);case B:return Ht=et._init,et=Ht(et._payload),Fe(Q,W,et,mt)}if(it(et))return ne(Q,W,et,mt);if(H(et)){if(Ht=H(et),typeof Ht!="function")throw Error(r(150));return et=Ht.call(et),$t(Q,W,et,mt)}if(typeof et.then=="function")return Fe(Q,W,Qu(et),mt);if(et.$$typeof===w)return Fe(Q,W,Iu(Q,et),mt);Ju(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(Q,W.sibling),mt=h(W,et),mt.return=Q,Q=mt):(a(Q,W),mt=dh(et,Q.mode,mt),mt.return=Q,Q=mt),T(Q)):a(Q,W)}return function(Q,W,et,mt){try{yl=0;var Ht=Fe(Q,W,et,mt);return js=null,Ht}catch(Wt){if(Wt===cl||Wt===Hu)throw Wt;var he=ci(29,Wt,null,Q.mode);return he.lanes=mt,he.return=Q,he}finally{}}}var Zs=lv(!0),uv=lv(!1),wi=tt(null),$i=null;function na(e){var i=e.alternate;vt(xn,xn.current&1),vt(wi,e),$i===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&($i=e)}function cv(e){if(e.tag===22){if(vt(xn,xn.current),vt(wi,e),$i===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&($i=e)}}else ia()}function ia(){vt(xn,xn.current),vt(wi,wi.current)}function Mr(e){dt(wi),$i===e&&($i=null),dt(xn)}var xn=tt(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Yh(e,i,a,u){i=e.memoizedState,a=a(u,i),a=a==null?i:m({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var jh={enqueueSetState:function(e,i,a){e=e._reactInternals;var u=pi(),h=$r(u);h.payload=i,a!=null&&(h.callback=a),i=ta(e,h,u),i!==null&&(mi(i,e,u),hl(i,e,u))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var u=pi(),h=$r(u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ta(e,h,u),i!==null&&(mi(i,e,u),hl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pi(),u=$r(a);u.tag=2,i!=null&&(u.callback=i),i=ta(e,u,a),i!==null&&(mi(i,e,a),hl(i,e,a))}};function fv(e,i,a,u,h,_,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!nl(a,u)||!nl(h,_):!0}function hv(e,i,a,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==e&&jh.enqueueReplaceState(i,i.state,null)}function es(e,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(e=e.defaultProps){a===i&&(a=m({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function dv(e){tc(e)}function pv(e){console.error(e)}function mv(e){tc(e)}function ec(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function _v(e,i,a){try{var u=e.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Zh(e,i,a){return a=$r(a),a.tag=3,a.payload={element:null},a.callback=function(){ec(e,i)},a}function gv(e){return e=$r(e),e.tag=3,e}function vv(e,i,a,u){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var _=u.value;e.payload=function(){return h(_)},e.callback=function(){_v(i,a,u)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){_v(i,a,u),typeof h!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var U=u.stack;this.componentDidCatch(u.value,{componentStack:U!==null?U:""})})}function wE(e,i,a,u,h){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&ol(i,a,h,!0),a=wi.current,a!==null){switch(a.tag){case 13:return $i===null?yd():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=h,u===Th?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),Sd(e,u,h)),!1;case 22:return a.flags|=65536,u===Th?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),Sd(e,u,h)),!1}throw Error(r(435,a.tag))}return Sd(e,u,h),yd(),!1}if(we)return i=wi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==gh&&(e=Error(r(422),{cause:u}),sl(Ti(e,a)))):(u!==gh&&(i=Error(r(423),{cause:u}),sl(Ti(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ti(u,a),h=Zh(e.stateNode,u,h),Rh(e,h),nn!==4&&(nn=2)),!1;var _=Error(r(520),{cause:u});if(_=Ti(_,a),Rl===null?Rl=[_]:Rl.push(_),nn!==4&&(nn=2),i===null)return!0;u=Ti(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Zh(a.stateNode,u,e),Rh(a,e),!1;case 1:if(i=a.type,_=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ua===null||!ua.has(_))))return a.flags|=65536,h&=-h,a.lanes|=h,h=gv(h),vv(h,e,a,u),Rh(a,h),!1}a=a.return}while(a!==null);return!1}var yv=Error(r(461)),An=!1;function Nn(e,i,a,u){i.child=e===null?uv(i,null,a,u):Zs(i,e.child,a,u)}function xv(e,i,a,u,h){a=a.render;var _=i.ref;if("ref"in u){var T={};for(var U in u)U!=="ref"&&(T[U]=u[U])}else T=u;return Ja(i),u=Lh(e,i,a,T,_,h),U=Oh(),e!==null&&!An?(Nh(e,i,h),Er(e,i,h)):(we&&U&&mh(i),i.flags|=1,Nn(e,i,u,h),i.child)}function Sv(e,i,a,u,h){if(e===null){var _=a.type;return typeof _=="function"&&!hh(_)&&_.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=_,Mv(e,i,_,u,h)):(e=Nu(a.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(_=e.child,!id(e,h)){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:nl,a(T,u)&&e.ref===i.ref)return Er(e,i,h)}return i.flags|=1,e=_r(_,u),e.ref=i.ref,e.return=i,i.child=e}function Mv(e,i,a,u,h){if(e!==null){var _=e.memoizedProps;if(nl(_,u)&&e.ref===i.ref)if(An=!1,i.pendingProps=u=_,id(e,h))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,Er(e,i,h)}return Kh(e,i,a,u,h)}function Ev(e,i,a){var u=i.pendingProps,h=u.children,_=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|a:a,e!==null){for(h=i.child=e.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return Tv(e,i,u,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(i,_!==null?_.cachePool:null),_!==null?Mg(i,_):Ch(),cv(i);else return i.lanes=i.childLanes=536870912,Tv(e,i,_!==null?_.baseLanes|a:a,a)}else _!==null?(Fu(i,_.cachePool),Mg(i,_),ia(),i.memoizedState=null):(e!==null&&Fu(i,null),Ch(),ia());return Nn(e,i,h,a),i.child}function Tv(e,i,a,u){var h=Eh();return h=h===null?null:{parent:yn._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Fu(i,null),Ch(),cv(i),e!==null&&ol(e,i,u,!0),null}function nc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Kh(e,i,a,u,h){return Ja(i),a=Lh(e,i,a,u,void 0,h),u=Oh(),e!==null&&!An?(Nh(e,i,h),Er(e,i,h)):(we&&u&&mh(i),i.flags|=1,Nn(e,i,a,h),i.child)}function bv(e,i,a,u,h,_){return Ja(i),i.updateQueue=null,a=Tg(i,u,a,h),Eg(e),u=Oh(),e!==null&&!An?(Nh(e,i,_),Er(e,i,_)):(we&&u&&mh(i),i.flags|=1,Nn(e,i,a,_),i.child)}function Av(e,i,a,u,h){if(Ja(i),i.stateNode===null){var _=Fs,T=a.contextType;typeof T=="object"&&T!==null&&(_=Fn(T)),_=new a(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=jh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},bh(i),T=a.contextType,_.context=typeof T=="object"&&T!==null?Fn(T):Fs,_.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(Yh(i,a,T,u),_.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&jh.enqueueReplaceState(_,_.state,null),pl(i,u,_,h),dl(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){_=i.stateNode;var U=i.memoizedProps,V=es(a,U);_.props=V;var nt=_.context,ht=a.contextType;T=Fs,typeof ht=="object"&&ht!==null&&(T=Fn(ht));var yt=a.getDerivedStateFromProps;ht=typeof yt=="function"||typeof _.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,ht||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(U||nt!==T)&&hv(i,_,u,T),Jr=!1;var at=i.memoizedState;_.state=at,pl(i,u,_,h),dl(),nt=i.memoizedState,U||at!==nt||Jr?(typeof yt=="function"&&(Yh(i,a,yt,u),nt=i.memoizedState),(V=Jr||fv(i,a,V,u,at,nt,T))?(ht||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=nt),_.props=u,_.state=nt,_.context=T,u=V):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,Ah(e,i),T=i.memoizedProps,ht=es(a,T),_.props=ht,yt=i.pendingProps,at=_.context,nt=a.contextType,V=Fs,typeof nt=="object"&&nt!==null&&(V=Fn(nt)),U=a.getDerivedStateFromProps,(nt=typeof U=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==yt||at!==V)&&hv(i,_,u,V),Jr=!1,at=i.memoizedState,_.state=at,pl(i,u,_,h),dl();var st=i.memoizedState;T!==yt||at!==st||Jr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof U=="function"&&(Yh(i,a,U,u),st=i.memoizedState),(ht=Jr||fv(i,a,ht,u,at,st,V)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(nt||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,st,V),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,st,V)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),_.props=u,_.state=st,_.context=V,u=ht):(typeof _.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),u=!1)}return _=u,nc(e,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,e!==null&&u?(i.child=Zs(i,e.child,null,h),i.child=Zs(i,null,a,h)):Nn(e,i,a,h),i.memoizedState=_.state,e=i.child):e=Er(e,i,h),e}function Rv(e,i,a,u){return al(),i.flags|=256,Nn(e,i,a,u),i.child}var Qh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jh(e){return{baseLanes:e,cachePool:pg()}}function $h(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Ci),e}function wv(e,i,a){var u=i.pendingProps,h=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(h?na(i):ia(),we){var U=en,V;if(V=U){t:{for(V=U,U=Ji;V.nodeType!==8;){if(!U){U=null;break t}if(V=Vi(V.nextSibling),V===null){U=null;break t}}U=V}U!==null?(i.memoizedState={dehydrated:U,treeContext:Ya!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},V=ci(18,null,null,0),V.stateNode=U,V.return=i,i.child=V,Wn=i,en=null,V=!0):V=!1}V||Ka(i)}if(U=i.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return zd(U)?i.lanes=32:i.lanes=536870912,null;Mr(i)}return U=u.children,u=u.fallback,h?(ia(),h=i.mode,U=ic({mode:"hidden",children:U},h),u=Wa(u,h,a,null),U.return=i,u.return=i,U.sibling=u,i.child=U,h=i.child,h.memoizedState=Jh(a),h.childLanes=$h(e,T,a),i.memoizedState=Qh,u):(na(i),td(i,U))}if(V=e.memoizedState,V!==null&&(U=V.dehydrated,U!==null)){if(_)i.flags&256?(na(i),i.flags&=-257,i=ed(e,i,a)):i.memoizedState!==null?(ia(),i.child=e.child,i.flags|=128,i=null):(ia(),h=u.fallback,U=i.mode,u=ic({mode:"visible",children:u.children},U),h=Wa(h,U,a,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Zs(i,e.child,null,a),u=i.child,u.memoizedState=Jh(a),u.childLanes=$h(e,T,a),i.memoizedState=Qh,i=h);else if(na(i),zd(U)){if(T=U.nextSibling&&U.nextSibling.dataset,T)var nt=T.dgst;T=nt,u=Error(r(419)),u.stack="",u.digest=T,sl({value:u,source:null,stack:null}),i=ed(e,i,a)}else if(An||ol(e,i,a,!1),T=(a&e.childLanes)!==0,An||T){if(T=We,T!==null&&(u=a&-a,u=(u&42)!==0?1:ie(u),u=(u&(T.suspendedLanes|a))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Is(e,u),mi(T,e,u),yv;U.data==="$?"||yd(),i=ed(e,i,a)}else U.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,en=Vi(U.nextSibling),Wn=i,we=!0,Za=null,Ji=!1,e!==null&&(Ai[Ri++]=gr,Ai[Ri++]=vr,Ai[Ri++]=Ya,gr=e.id,vr=e.overflow,Ya=i),i=td(i,u.children),i.flags|=4096);return i}return h?(ia(),h=u.fallback,U=i.mode,V=e.child,nt=V.sibling,u=_r(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,nt!==null?h=_r(nt,h):(h=Wa(h,U,a,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,U=e.child.memoizedState,U===null?U=Jh(a):(V=U.cachePool,V!==null?(nt=yn._currentValue,V=V.parent!==nt?{parent:nt,pool:nt}:V):V=pg(),U={baseLanes:U.baseLanes|a,cachePool:V}),h.memoizedState=U,h.childLanes=$h(e,T,a),i.memoizedState=Qh,u):(na(i),a=e.child,e=a.sibling,a=_r(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=a,i.memoizedState=null,a)}function td(e,i){return i=ic({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ic(e,i){return e=ci(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ed(e,i,a){return Zs(i,e.child,null,a),e=td(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Cv(e,i,a){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),yh(e.return,i,a)}function nd(e,i,a,u,h){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=h)}function Dv(e,i,a){var u=i.pendingProps,h=u.revealOrder,_=u.tail;if(Nn(e,i,u.children,a),u=xn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cv(e,a,i);else if(e.tag===19)Cv(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(vt(xn,u),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),nd(i,!1,h,a,_);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}nd(i,!0,a,null,_);break;case"together":nd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Er(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),la|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ol(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=_r(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=_r(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function id(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function CE(e,i,a){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),Qr(i,yn,e.memoizedState.cache),al();break;case 27:case 5:Vt(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:Qr(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(na(i),i.flags|=128,null):(a&i.child.childLanes)!==0?wv(e,i,a):(na(i),e=Er(e,i,a),e!==null?e.sibling:null);na(i);break;case 19:var h=(e.flags&128)!==0;if(u=(a&i.childLanes)!==0,u||(ol(e,i,a,!1),u=(a&i.childLanes)!==0),h){if(u)return Dv(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),vt(xn,xn.current),u)break;return null;case 22:case 23:return i.lanes=0,Ev(e,i,a);case 24:Qr(i,yn,e.memoizedState.cache)}return Er(e,i,a)}function Uv(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!id(e,a)&&(i.flags&128)===0)return An=!1,CE(e,i,a);An=(e.flags&131072)!==0}else An=!1,we&&(i.flags&1048576)!==0&&og(i,zu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")hh(u)?(e=es(u,e),i.tag=1,i=Av(null,i,u,e,a)):(i.tag=0,i=Kh(null,i,u,e,a));else{if(u!=null){if(h=u.$$typeof,h===b){i.tag=11,i=xv(null,i,u,e,a);break t}else if(h===L){i.tag=14,i=Sv(null,i,u,e,a);break t}}throw i=Y(u)||u,Error(r(306,i,""))}}return i;case 0:return Kh(e,i,i.type,i.pendingProps,a);case 1:return u=i.type,h=es(u,i.pendingProps),Av(e,i,u,h,a);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));u=i.pendingProps;var _=i.memoizedState;h=_.element,Ah(e,i),pl(i,u,null,a);var T=i.memoizedState;if(u=T.cache,Qr(i,yn,u),u!==_.cache&&xh(i,[yn],a,!0),dl(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=Rv(e,i,u,a);break t}else if(u!==h){h=Ti(Error(r(424)),i),sl(h),i=Rv(e,i,u,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Vi(e.firstChild),Wn=i,we=!0,Za=null,Ji=!0,a=uv(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(al(),u===h){i=Er(e,i,a);break t}Nn(e,i,u,a)}i=i.child}return i;case 26:return nc(e,i),e===null?(a=P0(i.type,null,i.pendingProps,null))?i.memoizedState=a:we||(a=i.type,e=i.pendingProps,u=gc(Mt.current).createElement(a),u[gn]=i,u[Ln]=e,zn(u,a,e),cn(u),i.stateNode=u):i.memoizedState=P0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Vt(i),e===null&&we&&(u=i.stateNode=L0(i.type,i.pendingProps,Mt.current),Wn=i,Ji=!0,h=en,ha(i.type)?(Bd=h,en=Vi(u.firstChild)):en=h),Nn(e,i,i.pendingProps.children,a),nc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((h=u=en)&&(u=iT(u,i.type,i.pendingProps,Ji),u!==null?(i.stateNode=u,Wn=i,en=Vi(u.firstChild),Ji=!1,h=!0):h=!1),h||Ka(i)),Vt(i),h=i.type,_=i.pendingProps,T=e!==null?e.memoizedProps:null,u=_.children,Od(h,_)?u=null:T!==null&&Od(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=Lh(e,i,SE,null,null,a),zl._currentValue=h),nc(e,i),Nn(e,i,u,a),i.child;case 6:return e===null&&we&&((e=a=en)&&(a=rT(a,i.pendingProps,Ji),a!==null?(i.stateNode=a,Wn=i,en=null,e=!0):e=!1),e||Ka(i)),null;case 13:return wv(e,i,a);case 4:return Tt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Zs(i,null,u,a):Nn(e,i,u,a),i.child;case 11:return xv(e,i,i.type,i.pendingProps,a);case 7:return Nn(e,i,i.pendingProps,a),i.child;case 8:return Nn(e,i,i.pendingProps.children,a),i.child;case 12:return Nn(e,i,i.pendingProps.children,a),i.child;case 10:return u=i.pendingProps,Qr(i,i.type,u.value),Nn(e,i,u.children,a),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Ja(i),h=Fn(h),u=u(h),i.flags|=1,Nn(e,i,u,a),i.child;case 14:return Sv(e,i,i.type,i.pendingProps,a);case 15:return Mv(e,i,i.type,i.pendingProps,a);case 19:return Dv(e,i,a);case 31:return u=i.pendingProps,a=i.mode,u={mode:u.mode,children:u.children},e===null?(a=ic(u,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=_r(e.child,u),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Ev(e,i,a);case 24:return Ja(i),u=Fn(yn),e===null?(h=Eh(),h===null&&(h=We,_=Sh(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=a),h=_),i.memoizedState={parent:u,cache:h},bh(i),Qr(i,yn,h)):((e.lanes&a)!==0&&(Ah(e,i),pl(i,null,null,a),dl()),h=e.memoizedState,_=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Qr(i,yn,u)):(u=_.cache,Qr(i,yn,u),u!==h.cache&&xh(i,[yn],a,!0))),Nn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Tr(e){e.flags|=4}function Lv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!H0(i)){if(i=wi.current,i!==null&&((Me&4194048)===Me?$i!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==$i))throw fl=Th,mg;e.flags|=8192}}function rc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Lt():536870912,e.lanes|=i,$s|=i)}function Sl(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,u=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=a,i}function DE(e,i,a){var u=i.pendingProps;switch(_h(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),xr(yn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rl(i)?Tr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cg())),Qe(i),null;case 26:return a=i.memoizedState,e===null?(Tr(i),a!==null?(Qe(i),Lv(i,a)):(Qe(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Tr(i),Qe(i),Lv(i,a)):(Qe(i),i.flags&=-16777217):(e.memoizedProps!==u&&Tr(i),Qe(i),i.flags&=-16777217),null;case 27:Se(i),a=Mt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Tr(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Qe(i),null}e=K.current,rl(i)?lg(i):(e=L0(h,u,a),i.stateNode=e,Tr(i))}return Qe(i),null;case 5:if(Se(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Tr(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Qe(i),null}if(e=K.current,rl(i))lg(i);else{switch(h=gc(Mt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(a,{is:u.is}):h.createElement(a)}}e[gn]=i,e[Ln]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(zn(e,a,u),a){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Tr(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Tr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(r(166));if(e=Mt.current,rl(i)){if(e=i.stateNode,a=i.memoizedProps,u=null,h=Wn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[gn]=i,e=!!(e.nodeValue===a||u!==null&&u.suppressHydrationWarning===!0||b0(e.nodeValue,a)),e||Ka(i)}else e=gc(e).createTextNode(u),e[gn]=i,i.stateNode=e}return Qe(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=rl(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[gn]=i}else al(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),h=!1}else h=cg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Mr(i),i):(Mr(i),null)}if(Mr(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=u!==null,e=e!==null&&e.memoizedState!==null,a){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==h&&(u.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),rc(i,i.updateQueue),Qe(i),null;case 4:return Qt(),e===null&&wd(i.stateNode.containerInfo),Qe(i),null;case 10:return xr(i.type),Qe(i),null;case 19:if(dt(xn),h=i.memoizedState,h===null)return Qe(i),null;if(u=(i.flags&128)!==0,_=h.rendering,_===null)if(u)Sl(h,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(_=$u(e),_!==null){for(i.flags|=128,Sl(h,!1),e=_.updateQueue,i.updateQueue=e,rc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)sg(a,e),a=a.sibling;return vt(xn,xn.current&1|2),i.child}e=e.sibling}h.tail!==null&&de()>oc&&(i.flags|=128,u=!0,Sl(h,!1),i.lanes=4194304)}else{if(!u)if(e=$u(_),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,rc(i,e),Sl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!we)return Qe(i),null}else 2*de()-h.renderingStartTime>oc&&a!==536870912&&(i.flags|=128,u=!0,Sl(h,!1),i.lanes=4194304);h.isBackwards?(_.sibling=i.child,i.child=_):(e=h.last,e!==null?e.sibling=_:i.child=_,h.last=_)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=de(),i.sibling=null,e=xn.current,vt(xn,u?e&1|2:e&1),i):(Qe(i),null);case 22:case 23:return Mr(i),Dh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&rc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),e!==null&&dt($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),xr(yn),Qe(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function UE(e,i){switch(_h(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return xr(yn),Qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Se(i),null;case 13:if(Mr(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));al()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return dt(xn),null;case 4:return Qt(),null;case 10:return xr(i.type),null;case 22:case 23:return Mr(i),Dh(),e!==null&&dt($a),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return xr(yn),null;case 25:return null;default:return null}}function Ov(e,i){switch(_h(i),i.tag){case 3:xr(yn),Qt();break;case 26:case 27:case 5:Se(i);break;case 4:Qt();break;case 13:Mr(i);break;case 19:dt(xn);break;case 10:xr(i.type);break;case 22:case 23:Mr(i),Dh(),e!==null&&dt($a);break;case 24:xr(yn)}}function Ml(e,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var h=u.next;a=h;do{if((a.tag&e)===e){u=void 0;var _=a.create,T=a.inst;u=_(),T.destroy=u}a=a.next}while(a!==h)}}catch(U){Ve(i,i.return,U)}}function ra(e,i,a){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var _=h.next;u=_;do{if((u.tag&e)===e){var T=u.inst,U=T.destroy;if(U!==void 0){T.destroy=void 0,h=i;var V=a,nt=U;try{nt()}catch(ht){Ve(h,V,ht)}}}u=u.next}while(u!==_)}}catch(ht){Ve(i,i.return,ht)}}function Nv(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Sg(i,a)}catch(u){Ve(e,e.return,u)}}}function Pv(e,i,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(u){Ve(e,i,u)}}function El(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){Ve(e,i,h)}}function tr(e,i){var a=e.ref,u=e.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(h){Ve(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ve(e,i,h)}else a.current=null}function zv(e){var i=e.type,a=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&u.focus();break t;case"img":a.src?u.src=a.src:a.srcSet&&(u.srcset=a.srcSet)}}catch(h){Ve(e,e.return,h)}}function rd(e,i,a){try{var u=e.stateNode;JE(u,e.type,a,i),u[Ln]=i}catch(h){Ve(e,e.return,h)}}function Bv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function ad(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,i,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_c));else if(u!==4&&(u===27&&ha(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(sd(e,i,a),e=e.sibling;e!==null;)sd(e,i,a),e=e.sibling}function ac(e,i,a){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(u!==4&&(u===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,i,a),e=e.sibling;e!==null;)ac(e,i,a),e=e.sibling}function Iv(e){var i=e.stateNode,a=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zn(i,u,a),i[gn]=e,i[Ln]=a}catch(_){Ve(e,e.return,_)}}var br=!1,on=!1,od=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function LE(e,i){if(e=e.containerInfo,Ud=Ec,e=K_(e),ah(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break t}var T=0,U=-1,V=-1,nt=0,ht=0,yt=e,at=null;e:for(;;){for(var st;yt!==a||h!==0&&yt.nodeType!==3||(U=T+h),yt!==_||u!==0&&yt.nodeType!==3||(V=T+u),yt.nodeType===3&&(T+=yt.nodeValue.length),(st=yt.firstChild)!==null;)at=yt,yt=st;for(;;){if(yt===e)break e;if(at===a&&++nt===h&&(U=T),at===_&&++ht===u&&(V=T),(st=yt.nextSibling)!==null)break;yt=at,at=yt.parentNode}yt=st}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ld={focusedElem:e,selectionRange:a},Ec=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,_=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&_!==null){e=void 0,a=i,h=_.memoizedProps,_=_.memoizedState,u=a.stateNode;try{var ne=es(a.type,h,a.elementType===a.type);e=u.getSnapshotBeforeUpdate(ne,_),u.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Pd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function Hv(e,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),u&4&&Ml(5,a);break;case 1:if(aa(e,a),u&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(T){Ve(a,a.return,T)}else{var h=es(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Ve(a,a.return,T)}}u&64&&Nv(a),u&512&&El(a,a.return);break;case 3:if(aa(e,a),u&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Sg(e,i)}catch(T){Ve(a,a.return,T)}}break;case 27:i===null&&u&4&&Iv(a);case 26:case 5:aa(e,a),i===null&&u&4&&zv(a),u&512&&El(a,a.return);break;case 12:aa(e,a);break;case 13:aa(e,a),u&4&&kv(e,a),u&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=GE.bind(null,a),aT(e,a))));break;case 22:if(u=a.memoizedState!==null||br,!u){i=i!==null&&i.memoizedState!==null||on,h=br;var _=on;br=u,(on=i)&&!_?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),br=h,on=_}break;case 30:break;default:aa(e,a)}}function Gv(e){var i=e.alternate;i!==null&&(e.alternate=null,Gv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Yr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Jn=!1;function Ar(e,i,a){for(a=a.child;a!==null;)Vv(e,i,a),a=a.sibling}function Vv(e,i,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:on||tr(a,i),Ar(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||tr(a,i);var u=je,h=Jn;ha(a.type)&&(je=a.stateNode,Jn=!1),Ar(e,i,a),Ll(a.stateNode),je=u,Jn=h;break;case 5:on||tr(a,i);case 6:if(u=je,h=Jn,je=null,Ar(e,i,a),je=u,Jn=h,je!==null)if(Jn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(_){Ve(a,i,_)}else try{je.removeChild(a.stateNode)}catch(_){Ve(a,i,_)}break;case 18:je!==null&&(Jn?(e=je,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):D0(je,a.stateNode));break;case 4:u=je,h=Jn,je=a.stateNode.containerInfo,Jn=!0,Ar(e,i,a),je=u,Jn=h;break;case 0:case 11:case 14:case 15:on||ra(2,a,i),on||ra(4,a,i),Ar(e,i,a);break;case 1:on||(tr(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&Pv(a,i,u)),Ar(e,i,a);break;case 21:Ar(e,i,a);break;case 22:on=(u=on)||a.memoizedState!==null,Ar(e,i,a),on=u;break;default:Ar(e,i,a)}}function kv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){Ve(i,i.return,a)}}function OE(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Fv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Fv),i;default:throw Error(r(435,e.tag))}}function ld(e,i){var a=OE(e);i.forEach(function(u){var h=VE.bind(null,e,u);a.has(u)||(a.add(u),u.then(h,h))})}function fi(e,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u],_=e,T=i,U=T;t:for(;U!==null;){switch(U.tag){case 27:if(ha(U.type)){je=U.stateNode,Jn=!1;break t}break;case 5:je=U.stateNode,Jn=!1;break t;case 3:case 4:je=U.stateNode.containerInfo,Jn=!0;break t}U=U.return}if(je===null)throw Error(r(160));Vv(_,T,h),je=null,Jn=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Xv(i,e),i=i.sibling}var Gi=null;function Xv(e,i){var a=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fi(i,e),hi(e),u&4&&(ra(3,e,e.return),Ml(3,e),ra(5,e,e.return));break;case 1:fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),u&64&&br&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?u:a.concat(u))));break;case 26:var h=Gi;if(fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),u&4){var _=a!==null?a.memoizedState:null;if(u=e.memoizedState,a===null)if(u===null)if(e.stateNode===null){t:{u=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":_=h.getElementsByTagName("title")[0],(!_||_[Wr]||_[gn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(u),h.head.insertBefore(_,h.querySelector("head > title"))),zn(_,u,a),_[gn]=e,cn(_),u=_;break t;case"link":var T=I0("link","href",h).get(u+(a.href||""));if(T){for(var U=0;U<T.length;U++)if(_=T[U],_.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&_.getAttribute("rel")===(a.rel==null?null:a.rel)&&_.getAttribute("title")===(a.title==null?null:a.title)&&_.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(U,1);break e}}_=h.createElement(u),zn(_,u,a),h.head.appendChild(_);break;case"meta":if(T=I0("meta","content",h).get(u+(a.content||""))){for(U=0;U<T.length;U++)if(_=T[U],_.getAttribute("content")===(a.content==null?null:""+a.content)&&_.getAttribute("name")===(a.name==null?null:a.name)&&_.getAttribute("property")===(a.property==null?null:a.property)&&_.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&_.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(U,1);break e}}_=h.createElement(u),zn(_,u,a),h.head.appendChild(_);break;default:throw Error(r(468,u))}_[gn]=e,cn(_),u=_}e.stateNode=u}else F0(h,e.type,e.stateNode);else e.stateNode=B0(h,u,e.memoizedProps);else _!==u?(_===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):_.count--,u===null?F0(h,e.type,e.stateNode):B0(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&rd(e,e.memoizedProps,a.memoizedProps)}break;case 27:fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),a!==null&&u&4&&rd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fi(i,e),hi(e),u&512&&(on||a===null||tr(a,a.return)),e.flags&32){h=e.stateNode;try{Qi(h,"")}catch(st){Ve(e,e.return,st)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,rd(e,h,a!==null?a.memoizedProps:h)),u&1024&&(od=!0);break;case 6:if(fi(i,e),hi(e),u&4){if(e.stateNode===null)throw Error(r(162));u=e.memoizedProps,a=e.stateNode;try{a.nodeValue=u}catch(st){Ve(e,e.return,st)}}break;case 3:if(xc=null,h=Gi,Gi=vc(i.containerInfo),fi(i,e),Gi=h,hi(e),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(i.containerInfo)}catch(st){Ve(e,e.return,st)}od&&(od=!1,qv(e));break;case 4:u=Gi,Gi=vc(e.stateNode.containerInfo),fi(i,e),hi(e),Gi=u;break;case 12:fi(i,e),hi(e);break;case 13:fi(i,e),hi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pd=de()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,ld(e,u)));break;case 22:h=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,nt=br,ht=on;if(br=nt||h,on=ht||V,fi(i,e),on=ht,br=nt,hi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||V||br||on||ns(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(_=V.stateNode,h)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{U=V.stateNode;var yt=V.memoizedProps.style,at=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;U.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Ve(V,V.return,st)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(st){Ve(V,V.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(a=u.retryQueue,a!==null&&(u.retryQueue=null,ld(e,a))));break;case 19:fi(i,e),hi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,ld(e,u)));break;case 30:break;case 21:break;default:fi(i,e),hi(e)}}function hi(e){var i=e.flags;if(i&2){try{for(var a,u=e.return;u!==null;){if(Bv(u)){a=u;break}u=u.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,_=ad(e);ac(e,_,h);break;case 5:var T=a.stateNode;a.flags&32&&(Qi(T,""),a.flags&=-33);var U=ad(e);ac(e,U,T);break;case 3:case 4:var V=a.stateNode.containerInfo,nt=ad(e);sd(e,nt,V);break;default:throw Error(r(161))}}catch(ht){Ve(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function qv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;qv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function aa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hv(e,i.alternate,i),i=i.sibling}function ns(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ra(4,i,i.return),ns(i);break;case 1:tr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Pv(i,i.return,a),ns(i);break;case 27:Ll(i.stateNode);case 26:case 5:tr(i,i.return),ns(i);break;case 22:i.memoizedState===null&&ns(i);break;case 30:ns(i);break;default:ns(i)}e=e.sibling}}function sa(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:sa(h,_,a),Ml(4,_);break;case 1:if(sa(h,_,a),u=_,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Ve(u,u.return,nt)}if(u=_,h=u.updateQueue,h!==null){var U=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)xg(V[h],U)}catch(nt){Ve(u,u.return,nt)}}a&&T&64&&Nv(_),El(_,_.return);break;case 27:Iv(_);case 26:case 5:sa(h,_,a),a&&u===null&&T&4&&zv(_),El(_,_.return);break;case 12:sa(h,_,a);break;case 13:sa(h,_,a),a&&T&4&&kv(h,_);break;case 22:_.memoizedState===null&&sa(h,_,a),El(_,_.return);break;case 30:break;default:sa(h,_,a)}i=i.sibling}}function ud(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ll(a))}function cd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e))}function er(e,i,a,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Wv(e,i,a,u),i=i.sibling}function Wv(e,i,a,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:er(e,i,a,u),h&2048&&Ml(9,i);break;case 1:er(e,i,a,u);break;case 3:er(e,i,a,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e)));break;case 12:if(h&2048){er(e,i,a,u),e=i.stateNode;try{var _=i.memoizedProps,T=_.id,U=_.onPostCommit;typeof U=="function"&&U(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ve(i,i.return,V)}}else er(e,i,a,u);break;case 13:er(e,i,a,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?er(e,i,a,u):Tl(e,i):_._visibility&2?er(e,i,a,u):(_._visibility|=2,Ks(e,i,a,u,(i.subtreeFlags&10256)!==0)),h&2048&&ud(T,i);break;case 24:er(e,i,a,u),h&2048&&cd(i.alternate,i);break;default:er(e,i,a,u)}}function Ks(e,i,a,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=e,T=i,U=a,V=u,nt=T.flags;switch(T.tag){case 0:case 11:case 15:Ks(_,T,U,V,h),Ml(8,T);break;case 23:break;case 22:var ht=T.stateNode;T.memoizedState!==null?ht._visibility&2?Ks(_,T,U,V,h):Tl(_,T):(ht._visibility|=2,Ks(_,T,U,V,h)),h&&nt&2048&&ud(T.alternate,T);break;case 24:Ks(_,T,U,V,h),h&&nt&2048&&cd(T.alternate,T);break;default:Ks(_,T,U,V,h)}i=i.sibling}}function Tl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,u=i,h=u.flags;switch(u.tag){case 22:Tl(a,u),h&2048&&ud(u.alternate,u);break;case 24:Tl(a,u),h&2048&&cd(u.alternate,u);break;default:Tl(a,u)}i=i.sibling}}var bl=8192;function Qs(e){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Yv(e),e=e.sibling}function Yv(e){switch(e.tag){case 26:Qs(e),e.flags&bl&&e.memoizedState!==null&&vT(Gi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e);break;case 3:case 4:var i=Gi;Gi=vc(e.stateNode.containerInfo),Qs(e),Gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=bl,bl=16777216,Qs(e),bl=i):Qs(e));break;default:Qs(e)}}function jv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Rn=u,Kv(u,e)}jv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zv(e),e=e.sibling}function Zv(e){switch(e.tag){case 0:case 11:case 15:Al(e),e.flags&2048&&ra(9,e,e.return);break;case 3:Al(e);break;case 12:Al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,sc(e)):Al(e);break;default:Al(e)}}function sc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Rn=u,Kv(u,e)}jv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ra(8,i,i.return),sc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,sc(i));break;default:sc(i)}e=e.sibling}}function Kv(e,i){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ra(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ll(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,Rn=u;else t:for(a=e;Rn!==null;){u=Rn;var h=u.sibling,_=u.return;if(Gv(u),u===a){Rn=null;break t}if(h!==null){h.return=_,Rn=h;break t}Rn=_}}}var NE={getCacheForType:function(e){var i=Fn(yn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},PE=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,pe=null,Me=0,Pe=0,di=null,oa=!1,Js=!1,fd=!1,Rr=0,nn=0,la=0,is=0,hd=0,Ci=0,$s=0,Rl=null,$n=null,dd=!1,pd=0,oc=1/0,lc=null,ua=null,Pn=0,ca=null,to=null,eo=0,md=0,_d=null,Qv=null,wl=0,gd=null;function pi(){if((Ne&2)!==0&&Me!==0)return Me&-Me;if(F.T!==null){var e=Vs;return e!==0?e:Td()}return Te()}function Jv(){Ci===0&&(Ci=(Me&536870912)===0||we?Z():536870912);var e=wi.current;return e!==null&&(e.flags|=32),Ci}function mi(e,i,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(no(e,0),fa(e,Me,Ci,!1)),Bt(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(is|=a),nn===4&&fa(e,Me,Ci,!1)),nr(e))}function $v(e,i,a){if((Ne&6)!==0)throw Error(r(327));var u=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),h=u?IE(e,i):xd(e,i,!0),_=u;do{if(h===0){Js&&!u&&fa(e,i,0,!1);break}else{if(a=e.current.alternate,_&&!zE(a)){h=xd(e,i,!1),_=!1;continue}if(h===2){if(_=i,e.errorRecoveryDisabledLanes&_)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var U=e;h=Rl;var V=U.current.memoizedState.isDehydrated;if(V&&(no(U,T).flags|=256),T=xd(U,T,!1),T!==2){if(fd&&!V){U.errorRecoveryDisabledLanes|=_,is|=_,h=4;break t}_=$n,$n=h,_!==null&&($n===null?$n=_:$n.push.apply($n,_))}h=T}if(_=!1,h!==2)continue}}if(h===1){no(e,0),fa(e,i,0,!0);break}t:{switch(u=e,_=h,_){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:fa(u,i,Ci,!oa);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=pd+300-de(),10<h)){if(fa(u,i,Ci,!oa),jt(u,0,!0)!==0)break t;u.timeoutHandle=w0(t0.bind(null,u,a,$n,lc,dd,i,Ci,is,$s,oa,_,2,-0,0),h);break t}t0(u,a,$n,lc,dd,i,Ci,is,$s,oa,_,0,-0,0)}}break}while(!0);nr(e)}function t0(e,i,a,u,h,_,T,U,V,nt,ht,yt,at,st){if(e.timeoutHandle=-1,yt=i.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(Pl={stylesheets:null,count:0,unsuspend:gT},Yv(i),yt=yT(),yt!==null)){e.cancelPendingCommit=yt(o0.bind(null,e,i,_,a,u,h,T,U,V,ht,1,at,st)),fa(e,_,T,!nt);return}o0(e,i,_,a,u,h,T,U,V)}function zE(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var h=a[u],_=h.getSnapshot;h=h.value;try{if(!ui(_(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fa(e,i,a,u){i&=~hd,i&=~is,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var _=31-Pt(h),T=1<<_;u[_]=-1,h&=~T}a!==0&&xt(e,a,i)}function uc(){return(Ne&6)===0?(Cl(0),!1):!0}function vd(){if(pe!==null){if(Pe===0)var e=pe.return;else e=pe,yr=Qa=null,Ph(e),js=null,yl=0,e=pe;for(;e!==null;)Ov(e.alternate,e),e=e.return;pe=null}}function no(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tT(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),vd(),We=e,pe=a=_r(e.current,null),Me=i,Pe=0,di=null,oa=!1,Js=Ct(e,i),fd=!1,$s=Ci=hd=is=la=nn=0,$n=Rl=null,dd=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Pt(u),_=1<<h;i|=e[h],u&=~_}return Rr=i,Uu(),a}function e0(e,i){ce=null,F.H=Ku,i===cl||i===Hu?(i=vg(),Pe=3):i===mg?(i=vg(),Pe=4):Pe=i===yv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,pe===null&&(nn=1,ec(e,Ti(i,e.current)))}function n0(){var e=F.H;return F.H=Ku,e===null?Ku:e}function i0(){var e=F.A;return F.A=NE,e}function yd(){nn=4,oa||(Me&4194048)!==Me&&wi.current!==null||(Js=!0),(la&134217727)===0&&(is&134217727)===0||We===null||fa(We,Me,Ci,!1)}function xd(e,i,a){var u=Ne;Ne|=2;var h=n0(),_=i0();(We!==e||Me!==i)&&(lc=null,no(e,i)),i=!1;var T=nn;t:do try{if(Pe!==0&&pe!==null){var U=pe,V=di;switch(Pe){case 8:vd(),T=6;break t;case 3:case 2:case 9:case 6:wi.current===null&&(i=!0);var nt=Pe;if(Pe=0,di=null,io(e,U,V,nt),a&&Js){T=0;break t}break;default:nt=Pe,Pe=0,di=null,io(e,U,V,nt)}}BE(),T=nn;break}catch(ht){e0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,yr=Qa=null,Ne=u,F.H=h,F.A=_,pe===null&&(We=null,Me=0,Uu()),T}function BE(){for(;pe!==null;)r0(pe)}function IE(e,i){var a=Ne;Ne|=2;var u=n0(),h=i0();We!==e||Me!==i?(lc=null,oc=de()+500,no(e,i)):Js=Ct(e,i);t:do try{if(Pe!==0&&pe!==null){i=pe;var _=di;e:switch(Pe){case 1:Pe=0,di=null,io(e,i,_,1);break;case 2:case 9:if(_g(_)){Pe=0,di=null,a0(i);break}i=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),nr(e)},_.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:_g(_)?(Pe=0,di=null,a0(i)):(Pe=0,di=null,io(e,i,_,7));break;case 5:var T=null;switch(pe.tag){case 26:T=pe.memoizedState;case 5:case 27:var U=pe;if(!T||H0(T)){Pe=0,di=null;var V=U.sibling;if(V!==null)pe=V;else{var nt=U.return;nt!==null?(pe=nt,cc(nt)):pe=null}break e}}Pe=0,di=null,io(e,i,_,5);break;case 6:Pe=0,di=null,io(e,i,_,6);break;case 8:vd(),nn=6;break t;default:throw Error(r(462))}}FE();break}catch(ht){e0(e,ht)}while(!0);return yr=Qa=null,F.H=u,F.A=h,Ne=a,pe!==null?0:(We=null,Me=0,Uu(),nn)}function FE(){for(;pe!==null&&!Un();)r0(pe)}function r0(e){var i=Uv(e.alternate,e,Rr);e.memoizedProps=e.pendingProps,i===null?cc(e):pe=i}function a0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=bv(a,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=bv(a,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Ph(i);default:Ov(a,i),i=pe=sg(i,Rr),i=Uv(a,i,Rr)}e.memoizedProps=e.pendingProps,i===null?cc(e):pe=i}function io(e,i,a,u){yr=Qa=null,Ph(i),js=null,yl=0;var h=i.return;try{if(wE(e,h,i,a,Me)){nn=1,ec(e,Ti(a,e.current)),pe=null;return}}catch(_){if(h!==null)throw pe=h,_;nn=1,ec(e,Ti(a,e.current)),pe=null;return}i.flags&32768?(we||u===1?e=!0:Js||(Me&536870912)!==0?e=!1:(oa=e=!0,(u===2||u===9||u===3||u===6)&&(u=wi.current,u!==null&&u.tag===13&&(u.flags|=16384))),s0(i,e)):cc(i)}function cc(e){var i=e;do{if((i.flags&32768)!==0){s0(i,oa);return}e=i.return;var a=DE(i.alternate,i,Rr);if(a!==null){pe=a;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);nn===0&&(nn=5)}function s0(e,i){do{var a=UE(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);nn=6,pe=null}function o0(e,i,a,u,h,_,T,U,V){e.cancelPendingCommit=null;do fc();while(Pn!==0);if((Ne&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(_=i.lanes|i.childLanes,_|=ch,Rt(e,a,_,T,U,V),e===We&&(pe=We=null,Me=0),to=i,ca=e,eo=a,md=_,_d=h,Qv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kE(ae,function(){return h0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,h=q.p,q.p=2,T=Ne,Ne|=4;try{LE(e,i,a)}finally{Ne=T,q.p=h,F.T=u}}Pn=1,l0(),u0(),c0()}}function l0(){if(Pn===1){Pn=0;var e=ca,i=to,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var u=q.p;q.p=2;var h=Ne;Ne|=4;try{Xv(i,e);var _=Ld,T=K_(e.containerInfo),U=_.focusedElem,V=_.selectionRange;if(T!==U&&U&&U.ownerDocument&&Z_(U.ownerDocument.documentElement,U)){if(V!==null&&ah(U)){var nt=V.start,ht=V.end;if(ht===void 0&&(ht=nt),"selectionStart"in U)U.selectionStart=nt,U.selectionEnd=Math.min(ht,U.value.length);else{var yt=U.ownerDocument||document,at=yt&&yt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ne=U.textContent.length,$t=Math.min(V.start,ne),Fe=V.end===void 0?$t:Math.min(V.end,ne);!st.extend&&$t>Fe&&(T=Fe,Fe=$t,$t=T);var Q=j_(U,$t),W=j_(U,Fe);if(Q&&W&&(st.rangeCount!==1||st.anchorNode!==Q.node||st.anchorOffset!==Q.offset||st.focusNode!==W.node||st.focusOffset!==W.offset)){var et=yt.createRange();et.setStart(Q.node,Q.offset),st.removeAllRanges(),$t>Fe?(st.addRange(et),st.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),st.addRange(et))}}}}for(yt=[],st=U;st=st.parentNode;)st.nodeType===1&&yt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<yt.length;U++){var mt=yt[U];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ec=!!Ud,Ld=Ud=null}finally{Ne=h,q.p=u,F.T=a}}e.current=i,Pn=2}}function u0(){if(Pn===2){Pn=0;var e=ca,i=to,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var u=q.p;q.p=2;var h=Ne;Ne|=4;try{Hv(e,i.alternate,i)}finally{Ne=h,q.p=u,F.T=a}}Pn=3}}function c0(){if(Pn===4||Pn===3){Pn=0,Ee();var e=ca,i=to,a=eo,u=Qv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,to=ca=null,f0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ua=null),Oe(a),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,h=q.p,q.p=2,F.T=null;try{for(var _=e.onRecoverableError,T=0;T<u.length;T++){var U=u[T];_(U.value,{componentStack:U.stack})}}finally{F.T=i,q.p=h}}(eo&3)!==0&&fc(),nr(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===gd?wl++:(wl=0,gd=e):wl=0,Cl(0)}}function f0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ll(i)))}function fc(e){return l0(),u0(),c0(),h0()}function h0(){if(Pn!==5)return!1;var e=ca,i=md;md=0;var a=Oe(eo),u=F.T,h=q.p;try{q.p=32>a?32:a,F.T=null,a=_d,_d=null;var _=ca,T=eo;if(Pn=0,to=ca=null,eo=0,(Ne&6)!==0)throw Error(r(331));var U=Ne;if(Ne|=4,Zv(_.current),Wv(_,_.current,T,a),Ne=U,Cl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pt,_)}catch{}return!0}finally{q.p=h,F.T=u,f0(e,i)}}function d0(e,i,a){i=Ti(a,i),i=Zh(e.stateNode,i,2),e=ta(e,i,2),e!==null&&(Bt(e,2),nr(e))}function Ve(e,i,a){if(e.tag===3)d0(e,e,a);else for(;i!==null;){if(i.tag===3){d0(i,e,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ua===null||!ua.has(u))){e=Ti(a,e),a=gv(2),u=ta(i,a,2),u!==null&&(vv(a,u,i,e),Bt(u,2),nr(u));break}}i=i.return}}function Sd(e,i,a){var u=e.pingCache;if(u===null){u=e.pingCache=new PE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(fd=!0,h.add(a),e=HE.bind(null,e,i,a),i.then(e,e))}function HE(e,i,a){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(nn===4||nn===3&&(Me&62914560)===Me&&300>de()-pd?(Ne&2)===0&&no(e,0):hd|=a,$s===Me&&($s=0)),nr(e)}function p0(e,i){i===0&&(i=Lt()),e=Is(e,i),e!==null&&(Bt(e,i),nr(e))}function GE(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),p0(e,a)}function VE(e,i){var a=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(i),p0(e,a)}function kE(e,i){return _e(e,i)}var hc=null,ro=null,Md=!1,dc=!1,Ed=!1,rs=0;function nr(e){e!==ro&&e.next===null&&(ro===null?hc=ro=e:ro=ro.next=e),dc=!0,Md||(Md=!0,qE())}function Cl(e,i){if(!Ed&&dc){Ed=!0;do for(var a=!1,u=hc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var _=0;else{var T=u.suspendedLanes,U=u.pingedLanes;_=(1<<31-Pt(42|e)+1)-1,_&=h&~(T&~U),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(a=!0,v0(u,_))}else _=Me,_=jt(u,u===We?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||Ct(u,_)||(a=!0,v0(u,_));u=u.next}while(a);Ed=!1}}function XE(){m0()}function m0(){dc=Md=!1;var e=0;rs!==0&&($E()&&(e=rs),rs=0);for(var i=de(),a=null,u=hc;u!==null;){var h=u.next,_=_0(u,i);_===0?(u.next=null,a===null?hc=h:a.next=h,h===null&&(ro=a)):(a=u,(e!==0||(_&3)!==0)&&(dc=!0)),u=h}Cl(e)}function _0(e,i){for(var a=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,_=e.pendingLanes&-62914561;0<_;){var T=31-Pt(_),U=1<<T,V=h[T];V===-1?((U&a)===0||(U&u)!==0)&&(h[T]=re(U,i)):V<=i&&(e.expiredLanes|=U),_&=~U}if(i=We,a=Me,a=jt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,a===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&X(u),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(u!==null&&X(u),Oe(a)){case 2:case 8:a=Zt;break;case 32:a=ae;break;case 268435456:a=G;break;default:a=ae}return u=g0.bind(null,e),a=_e(a,u),e.callbackPriority=i,e.callbackNode=a,i}return u!==null&&u!==null&&X(u),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,i){if(Pn!==0&&Pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fc()&&e.callbackNode!==a)return null;var u=Me;return u=jt(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:($v(e,u,i),_0(e,de()),e.callbackNode!=null&&e.callbackNode===a?g0.bind(null,e):null)}function v0(e,i){if(fc())return null;$v(e,i,!0)}function qE(){eT(function(){(Ne&6)!==0?_e(ge,XE):m0()})}function Td(){return rs===0&&(rs=Z()),rs}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tu(""+e)}function x0(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function WE(e,i,a,u,h){if(i==="submit"&&a&&a.stateNode===h){var _=y0((h[Ln]||null).action),T=u.submitter;T&&(i=(i=T[Ln]||null)?y0(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var U=new wu("action","action",null,u,h);e.push({event:U,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(rs!==0){var V=T?x0(h,T):new FormData(h);Xh(a,{pending:!0,data:V,method:h.method,action:_},null,V)}}else typeof _=="function"&&(U.preventDefault(),V=T?x0(h,T):new FormData(h),Xh(a,{pending:!0,data:V,method:h.method,action:_},_,V))},currentTarget:h}]})}}for(var bd=0;bd<uh.length;bd++){var Ad=uh[bd],YE=Ad.toLowerCase(),jE=Ad[0].toUpperCase()+Ad.slice(1);Hi(YE,"on"+jE)}Hi($_,"onAnimationEnd"),Hi(tg,"onAnimationIteration"),Hi(eg,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(fE,"onTransitionRun"),Hi(hE,"onTransitionStart"),Hi(dE,"onTransitionCancel"),Hi(ng,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hr("onBeforeInput",["compositionend","keypress","textInput","paste"]),hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function S0(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var u=e[a],h=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var U=u[T],V=U.instance,nt=U.currentTarget;if(U=U.listener,V!==_&&h.isPropagationStopped())break t;_=U,h.currentTarget=nt;try{_(h)}catch(ht){tc(ht)}h.currentTarget=null,_=V}else for(T=0;T<u.length;T++){if(U=u[T],V=U.instance,nt=U.currentTarget,U=U.listener,V!==_&&h.isPropagationStopped())break t;_=U,h.currentTarget=nt;try{_(h)}catch(ht){tc(ht)}h.currentTarget=null,_=V}}}}function me(e,i){var a=i[Ha];a===void 0&&(a=i[Ha]=new Set);var u=e+"__bubble";a.has(u)||(M0(i,e,2,!1),a.add(u))}function Rd(e,i,a){var u=0;i&&(u|=4),M0(a,e,u,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function wd(e){if(!e[pc]){e[pc]=!0,Mu.forEach(function(a){a!=="selectionchange"&&(ZE.has(a)||Rd(a,!1,e),Rd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[pc]||(i[pc]=!0,Rd("selectionchange",!1,i))}}function M0(e,i,a,u){switch(W0(i)){case 2:var h=MT;break;case 8:h=ET;break;default:h=Vd}a=h.bind(null,i,a,e),h=void 0,!Kf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Cd(e,i,a,u,h){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var U=u.stateNode.containerInfo;if(U===h)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;U!==null;){if(T=cr(U),T===null)return;if(V=T.tag,V===5||V===6||V===26||V===27){u=_=T;continue t}U=U.parentNode}}u=u.return}C_(function(){var nt=_,ht=jf(a),yt=[];t:{var at=ig.get(e);if(at!==void 0){var st=wu,ne=e;switch(e){case"keypress":if(Au(a)===0)break t;case"keydown":case"keyup":st=kM;break;case"focusin":ne="focus",st=th;break;case"focusout":ne="blur",st=th;break;case"beforeblur":case"afterblur":st=th;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=L_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=UM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=WM;break;case $_:case tg:case eg:st=NM;break;case ng:st=jM;break;case"scroll":case"scrollend":st=CM;break;case"wheel":st=KM;break;case"copy":case"cut":case"paste":st=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=N_;break;case"toggle":case"beforetoggle":st=JM}var $t=(i&4)!==0,Fe=!$t&&(e==="scroll"||e==="scrollend"),Q=$t?at!==null?at+"Capture":null:at;$t=[];for(var W=nt,et;W!==null;){var mt=W;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Q===null||(mt=Zo(W,Q),mt!=null&&$t.push(Ul(W,mt,et))),Fe)break;W=W.return}0<$t.length&&(at=new st(at,ne,null,a,ht),yt.push({event:at,listeners:$t}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&a!==Yf&&(ne=a.relatedTarget||a.fromElement)&&(cr(ne)||ne[Zn]))break t;if((st||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ne=a.relatedTarget||a.toElement,st=nt,ne=ne?cr(ne):null,ne!==null&&(Fe=l(ne),$t=ne.tag,ne!==Fe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(st=null,ne=nt),st!==ne)){if($t=L_,mt="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&($t=N_,mt="onPointerLeave",Q="onPointerEnter",W="pointer"),Fe=st==null?at:Va(st),et=ne==null?at:Va(ne),at=new $t(mt,W+"leave",st,a,ht),at.target=Fe,at.relatedTarget=et,mt=null,cr(ht)===nt&&($t=new $t(Q,W+"enter",ne,a,ht),$t.target=et,$t.relatedTarget=Fe,mt=$t),Fe=mt,st&&ne)e:{for($t=st,Q=ne,W=0,et=$t;et;et=ao(et))W++;for(et=0,mt=Q;mt;mt=ao(mt))et++;for(;0<W-et;)$t=ao($t),W--;for(;0<et-W;)Q=ao(Q),et--;for(;W--;){if($t===Q||Q!==null&&$t===Q.alternate)break e;$t=ao($t),Q=ao(Q)}$t=null}else $t=null;st!==null&&E0(yt,at,st,$t,!1),ne!==null&&Fe!==null&&E0(yt,Fe,ne,$t,!0)}}t:{if(at=nt?Va(nt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=V_;else if(H_(at))if(k_)Ht=lE;else{Ht=sE;var he=aE}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&Wf(nt.elementType)&&(Ht=V_):Ht=oE;if(Ht&&(Ht=Ht(e,nt))){G_(yt,Ht,a,ht);break t}he&&he(e,at,nt),e==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&In(at,"number",at.value)}switch(he=nt?Va(nt):window,e){case"focusin":(H_(he)||he.contentEditable==="true")&&(Ps=he,sh=nt,il=null);break;case"focusout":il=sh=Ps=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Q_(yt,a,ht);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":Q_(yt,a,ht)}var Wt;if(nh)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ns?I_(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(P_&&a.locale!=="ko"&&(Ns||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ns&&(Wt=D_()):(Kr=ht,Qf="value"in Kr?Kr.value:Kr.textContent,Ns=!0)),he=mc(nt,te),0<he.length&&(te=new O_(te,e,null,a,ht),yt.push({event:te,listeners:he}),Wt?te.data=Wt:(Wt=F_(a),Wt!==null&&(te.data=Wt)))),(Wt=tE?eE(e,a):nE(e,a))&&(te=mc(nt,"onBeforeInput"),0<te.length&&(he=new O_("onBeforeInput","beforeinput",null,a,ht),yt.push({event:he,listeners:te}),he.data=Wt)),WE(yt,e,nt,a,ht)}S0(yt,i)})}function Ul(e,i,a){return{instance:e,listener:i,currentTarget:a}}function mc(e,i){for(var a=i+"Capture",u=[];e!==null;){var h=e,_=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=Zo(e,a),h!=null&&u.unshift(Ul(e,h,_)),h=Zo(e,i),h!=null&&u.push(Ul(e,h,_))),e.tag===3)return u;e=e.return}return[]}function ao(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E0(e,i,a,u,h){for(var _=i._reactName,T=[];a!==null&&a!==u;){var U=a,V=U.alternate,nt=U.stateNode;if(U=U.tag,V!==null&&V===u)break;U!==5&&U!==26&&U!==27||nt===null||(V=nt,h?(nt=Zo(a,_),nt!=null&&T.unshift(Ul(a,nt,V))):h||(nt=Zo(a,_),nt!=null&&T.push(Ul(a,nt,V)))),a=a.return}T.length!==0&&e.push({event:i,listeners:T})}var KE=/\r\n?/g,QE=/\u0000|\uFFFD/g;function T0(e){return(typeof e=="string"?e:""+e).replace(KE,`
`).replace(QE,"")}function b0(e,i){return i=T0(i),T0(e)===i}function _c(){}function Ie(e,i,a,u,h,_){switch(a){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qi(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qi(e,""+u);break;case"className":Dt(e,"class",u);break;case"tabIndex":Dt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,u);break;case"style":R_(e,u,_);break;case"data":if(i!=="object"){Dt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(a);break}u=Tu(""+u),e.setAttribute(a,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(a==="formAction"?(i!=="input"&&Ie(e,i,"name",h.name,h,null),Ie(e,i,"formEncType",h.formEncType,h,null),Ie(e,i,"formMethod",h.formMethod,h,null),Ie(e,i,"formTarget",h.formTarget,h,null)):(Ie(e,i,"encType",h.encType,h,null),Ie(e,i,"method",h.method,h,null),Ie(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(a);break}u=Tu(""+u),e.setAttribute(a,u);break;case"onClick":u!=null&&(e.onclick=_c);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(a=u.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}a=Tu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,""+u):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":u===!0?e.setAttribute(a,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(a,u):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(a,u):e.removeAttribute(a);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(a):e.setAttribute(a,u);break;case"popover":me("beforetoggle",e),me("toggle",e),At(e,"popover",u);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":At(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=RM.get(a)||a,At(e,a,u))}}function Dd(e,i,a,u,h,_){switch(a){case"style":R_(e,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(a=u.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof u=="string"?Qi(e,u):(typeof u=="number"||typeof u=="bigint")&&Qi(e,""+u);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"onClick":u!=null&&(e.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),_=e[Ln]||null,_=_!=null?_[a]:null,typeof _=="function"&&e.removeEventListener(i,_,h),typeof u=="function")){typeof _!="function"&&_!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,u,h);break t}a in e?e[a]=u:u===!0?e.setAttribute(a,""):At(e,a,u)}}}function zn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var u=!1,h=!1,_;for(_ in a)if(a.hasOwnProperty(_)){var T=a[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,_,T,a,null)}}h&&Ie(e,i,"srcSet",a.srcSet,a,null),u&&Ie(e,i,"src",a.src,a,null);return;case"input":me("invalid",e);var U=_=T=h=null,V=null,nt=null;for(u in a)if(a.hasOwnProperty(u)){var ht=a[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":T=ht;break;case"checked":V=ht;break;case"defaultChecked":nt=ht;break;case"value":_=ht;break;case"defaultValue":U=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:Ie(e,i,u,ht,a,null)}}Ge(e,_,U,V,nt,T,h,!1),ze(e);return;case"select":me("invalid",e),u=T=_=null;for(h in a)if(a.hasOwnProperty(h)&&(U=a[h],U!=null))switch(h){case"value":_=U;break;case"defaultValue":T=U;break;case"multiple":u=U;default:Ie(e,i,h,U,a,null)}i=_,a=T,e.multiple=!!u,i!=null?vn(e,!!u,i,!1):a!=null&&vn(e,!!u,a,!0);return;case"textarea":me("invalid",e),_=h=u=null;for(T in a)if(a.hasOwnProperty(T)&&(U=a[T],U!=null))switch(T){case"value":u=U;break;case"defaultValue":h=U;break;case"children":_=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:Ie(e,i,T,U,a,null)}On(e,u,h,_),ze(e);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(u=a[V],u!=null))switch(V){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ie(e,i,V,u,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(u=0;u<Dl.length;u++)me(Dl[u],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(u=a[nt],u!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,nt,u,a,null)}return;default:if(Wf(i)){for(ht in a)a.hasOwnProperty(ht)&&(u=a[ht],u!==void 0&&Dd(e,i,ht,u,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(u=a[U],u!=null&&Ie(e,i,U,u,a,null))}function JE(e,i,a,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,U=null,V=null,nt=null,ht=null;for(st in a){var yt=a[st];if(a.hasOwnProperty(st)&&yt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":V=yt;default:u.hasOwnProperty(st)||Ie(e,i,st,null,u,yt)}}for(var at in u){var st=u[at];if(yt=a[at],u.hasOwnProperty(at)&&(st!=null||yt!=null))switch(at){case"type":_=st;break;case"name":h=st;break;case"checked":nt=st;break;case"defaultChecked":ht=st;break;case"value":T=st;break;case"defaultValue":U=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,i));break;default:st!==yt&&Ie(e,i,at,st,u,yt)}}dr(e,T,U,V,nt,ht,_,h);return;case"select":st=T=U=at=null;for(_ in a)if(V=a[_],a.hasOwnProperty(_)&&V!=null)switch(_){case"value":break;case"multiple":st=V;default:u.hasOwnProperty(_)||Ie(e,i,_,null,u,V)}for(h in u)if(_=u[h],V=a[h],u.hasOwnProperty(h)&&(_!=null||V!=null))switch(h){case"value":at=_;break;case"defaultValue":U=_;break;case"multiple":T=_;default:_!==V&&Ie(e,i,h,_,u,V)}i=U,a=T,u=st,at!=null?vn(e,!!a,at,!1):!!u!=!!a&&(i!=null?vn(e,!!a,i,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":st=at=null;for(U in a)if(h=a[U],a.hasOwnProperty(U)&&h!=null&&!u.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Ie(e,i,U,null,u,h)}for(T in u)if(h=u[T],_=a[T],u.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":at=h;break;case"defaultValue":st=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==_&&Ie(e,i,T,h,u,_)}bn(e,at,st);return;case"option":for(var ne in a)if(at=a[ne],a.hasOwnProperty(ne)&&at!=null&&!u.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ie(e,i,ne,null,u,at)}for(V in u)if(at=u[V],st=a[V],u.hasOwnProperty(V)&&at!==st&&(at!=null||st!=null))switch(V){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ie(e,i,V,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)at=a[$t],a.hasOwnProperty($t)&&at!=null&&!u.hasOwnProperty($t)&&Ie(e,i,$t,null,u,at);for(nt in u)if(at=u[nt],st=a[nt],u.hasOwnProperty(nt)&&at!==st&&(at!=null||st!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,i));break;default:Ie(e,i,nt,at,u,st)}return;default:if(Wf(i)){for(var Fe in a)at=a[Fe],a.hasOwnProperty(Fe)&&at!==void 0&&!u.hasOwnProperty(Fe)&&Dd(e,i,Fe,void 0,u,at);for(ht in u)at=u[ht],st=a[ht],!u.hasOwnProperty(ht)||at===st||at===void 0&&st===void 0||Dd(e,i,ht,at,u,st);return}}for(var Q in a)at=a[Q],a.hasOwnProperty(Q)&&at!=null&&!u.hasOwnProperty(Q)&&Ie(e,i,Q,null,u,at);for(yt in u)at=u[yt],st=a[yt],!u.hasOwnProperty(yt)||at===st||at==null&&st==null||Ie(e,i,yt,at,u,st)}var Ud=null,Ld=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Od(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nd=null;function $E(){var e=window.event;return e&&e.type==="popstate"?e===Nd?!1:(Nd=e,!0):(Nd=null,!1)}var w0=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(e){return C0.resolve(null).then(e).catch(nT)}:w0;function nT(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function D0(e,i){var a=i,u=0,h=0;do{var _=a.nextSibling;if(e.removeChild(a),_&&_.nodeType===8)if(a=_.data,a==="/$"){if(0<u&&8>u){a=u;var T=e.ownerDocument;if(a&1&&Ll(T.documentElement),a&2&&Ll(T.body),a&4)for(a=T.head,Ll(a),T=a.firstChild;T;){var U=T.nextSibling,V=T.nodeName;T[Wr]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=U}}if(h===0){e.removeChild(_),Hl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:u=a.charCodeAt(0)-48;else u=0;a=_}while(a);Hl(i)}function Pd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pd(a),Yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iT(e,i,a,u){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(_=e.getAttribute("rel"),_==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(_!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(_=e.getAttribute("src"),(_!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===_)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function rT(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vi(e.nextSibling),e===null))return null;return e}function zd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function aT(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var u=function(){i(),a.removeEventListener("DOMContentLoaded",u)};a.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Bd=null;function U0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function L0(e,i,a){switch(i=gc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ll(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Yr(e)}var Di=new Map,O0=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wr=q.d;q.d={f:sT,r:oT,D:lT,C:uT,L:cT,m:fT,X:dT,S:hT,M:pT};function sT(){var e=wr.f(),i=uc();return e||i}function oT(e){var i=fr(e);i!==null&&i.tag===5&&i.type==="form"?$g(i):wr.r(e)}var so=typeof document>"u"?null:document;function N0(e,i,a){var u=so;if(u&&typeof i=="string"&&i){var h=qe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),O0.has(h)||(O0.add(h),e={rel:e,crossOrigin:a,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),zn(i,"link",e),cn(i),u.head.appendChild(i)))}}function lT(e){wr.D(e),N0("dns-prefetch",e,null)}function uT(e,i){wr.C(e,i),N0("preconnect",e,i)}function cT(e,i,a){wr.L(e,i,a);var u=so;if(u&&e&&i){var h='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+qe(a.imageSizes)+'"]')):h+='[href="'+qe(e)+'"]';var _=h;switch(i){case"style":_=oo(e);break;case"script":_=lo(e)}Di.has(_)||(e=m({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Di.set(_,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ol(_))||i==="script"&&u.querySelector(Nl(_))||(i=u.createElement("link"),zn(i,"link",e),cn(i),u.head.appendChild(i)))}}function fT(e,i){wr.m(e,i);var a=so;if(a&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+qe(u)+'"][href="'+qe(e)+'"]',_=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=lo(e)}if(!Di.has(_)&&(e=m({rel:"modulepreload",href:e},i),Di.set(_,e),a.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(_)))return}u=a.createElement("link"),zn(u,"link",e),cn(u),a.head.appendChild(u)}}}function hT(e,i,a){wr.S(e,i,a);var u=so;if(u&&e){var h=jr(u).hoistableStyles,_=oo(e);i=i||"default";var T=h.get(_);if(!T){var U={loading:0,preload:null};if(T=u.querySelector(Ol(_)))U.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Di.get(_))&&Id(e,a);var V=T=u.createElement("link");cn(V),zn(V,"link",e),V._p=new Promise(function(nt,ht){V.onload=nt,V.onerror=ht}),V.addEventListener("load",function(){U.loading|=1}),V.addEventListener("error",function(){U.loading|=2}),U.loading|=4,yc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:U},h.set(_,T)}}}function dT(e,i){wr.X(e,i);var a=so;if(a&&e){var u=jr(a).hoistableScripts,h=lo(e),_=u.get(h);_||(_=a.querySelector(Nl(h)),_||(e=m({src:e,async:!0},i),(i=Di.get(h))&&Fd(e,i),_=a.createElement("script"),cn(_),zn(_,"link",e),a.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function pT(e,i){wr.M(e,i);var a=so;if(a&&e){var u=jr(a).hoistableScripts,h=lo(e),_=u.get(h);_||(_=a.querySelector(Nl(h)),_||(e=m({src:e,async:!0,type:"module"},i),(i=Di.get(h))&&Fd(e,i),_=a.createElement("script"),cn(_),zn(_,"link",e),a.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function P0(e,i,a,u){var h=(h=Mt.current)?vc(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=oo(a.href),a=jr(h).hoistableStyles,u=a.get(i),u||(u={type:"style",instance:null,count:0,state:null},a.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=oo(a.href);var _=jr(h).hoistableStyles,T=_.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(e,T),(_=h.querySelector(Ol(e)))&&!_._p&&(T.instance=_,T.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),_||mT(h,e,a,T.state))),i&&u===null)throw Error(r(528,""));return T}if(i&&u!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(a),a=jr(h).hoistableScripts,u=a.get(i),u||(u={type:"script",instance:null,count:0,state:null},a.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function oo(e){return'href="'+qe(e)+'"'}function Ol(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function mT(e,i,a,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),zn(i,"link",a),cn(i),e.head.appendChild(i))}function lo(e){return'[src="'+qe(e)+'"]'}function Nl(e){return"script[async]"+e}function B0(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+qe(a.href)+'"]');if(u)return i.instance=u,cn(u),u;var h=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),cn(u),zn(u,"style",h),yc(u,a.precedence,e),i.instance=u;case"stylesheet":h=oo(a.href);var _=e.querySelector(Ol(h));if(_)return i.state.loading|=4,i.instance=_,cn(_),_;u=z0(a),(h=Di.get(h))&&Id(u,h),_=(e.ownerDocument||e).createElement("link"),cn(_);var T=_;return T._p=new Promise(function(U,V){T.onload=U,T.onerror=V}),zn(_,"link",u),i.state.loading|=4,yc(_,a.precedence,e),i.instance=_;case"script":return _=lo(a.src),(h=e.querySelector(Nl(_)))?(i.instance=h,cn(h),h):(u=a,(h=Di.get(_))&&(u=m({},a),Fd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),cn(h),zn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,yc(u,a.precedence,e));return i.instance}function yc(e,i,a){for(var u=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,_=h,T=0;T<u.length;T++){var U=u[T];if(U.dataset.precedence===i)_=U;else if(_!==h)break}_?_.parentNode.insertBefore(e,_.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var xc=null;function I0(e,i,a){if(xc===null){var u=new Map,h=xc=new Map;h.set(a,u)}else h=xc,u=h.get(a),u||(u=new Map,h.set(a,u));if(u.has(e))return u;for(u.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var _=a[h];if(!(_[Wr]||_[gn]||e==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=e+T;var U=u.get(T);U?U.push(_):u.set(T,[_])}}return u}function F0(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function _T(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function H0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Pl=null;function gT(){}function vT(e,i,a){if(Pl===null)throw Error(r(475));var u=Pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(a.href),_=e.querySelector(Ol(h));if(_){e=_._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=Sc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=_,cn(_);return}_=e.ownerDocument||e,a=z0(a),(h=Di.get(h))&&Id(a,h),_=_.createElement("link"),cn(_);var T=_;T._p=new Promise(function(U,V){T.onload=U,T.onerror=V}),zn(_,"link",a),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Sc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function yT(){if(Pl===null)throw Error(r(475));var e=Pl;return e.stylesheets&&e.count===0&&Hd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Hd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Hd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Hd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,i.forEach(xT,e),Mc=null,Sc.call(e))}function xT(e,i){if(!(i.state.loading&4)){var a=Mc.get(e);if(a)var u=a.get(null);else{a=new Map,Mc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),u=T)}u&&a.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),_=a.get(T)||u,_===u&&a.set(null,h),a.set(T,h),this.count++,u=Sc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),_?_.parentNode.insertBefore(h,_.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var zl={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function ST(e,i,a,u,h,_,T,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function G0(e,i,a,u,h,_,T,U,V,nt,ht,yt){return e=new ST(e,i,a,T,U,V,nt,yt),i=1,_===!0&&(i|=24),_=ci(3,null,null,i),e.current=_,_.stateNode=e,i=Sh(),i.refCount++,e.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:a,cache:i},bh(_),e}function V0(e){return e?(e=Fs,e):Fs}function k0(e,i,a,u,h,_){h=V0(h),u.context===null?u.context=h:u.pendingContext=h,u=$r(i),u.payload={element:a},_=_===void 0?null:_,_!==null&&(u.callback=_),a=ta(e,u,i),a!==null&&(mi(a,e,i),hl(a,e,i))}function X0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Gd(e,i){X0(e,i),(e=e.alternate)&&X0(e,i)}function q0(e){if(e.tag===13){var i=Is(e,67108864);i!==null&&mi(i,e,67108864),Gd(e,67108864)}}var Ec=!0;function MT(e,i,a,u){var h=F.T;F.T=null;var _=q.p;try{q.p=2,Vd(e,i,a,u)}finally{q.p=_,F.T=h}}function ET(e,i,a,u){var h=F.T;F.T=null;var _=q.p;try{q.p=8,Vd(e,i,a,u)}finally{q.p=_,F.T=h}}function Vd(e,i,a,u){if(Ec){var h=kd(u);if(h===null)Cd(e,i,u,Tc,a),Y0(e,u);else if(bT(h,e,i,a,u))u.stopPropagation();else if(Y0(e,u),i&4&&-1<TT.indexOf(e)){for(;h!==null;){var _=fr(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Yt(_.pendingLanes);if(T!==0){var U=_;for(U.pendingLanes|=2,U.entangledLanes|=2;T;){var V=1<<31-Pt(T);U.entanglements[1]|=V,T&=~V}nr(_),(Ne&6)===0&&(oc=de()+500,Cl(0))}}break;case 13:U=Is(_,2),U!==null&&mi(U,_,2),uc(),Gd(_,2)}if(_=kd(u),_===null&&Cd(e,i,u,Tc,a),_===h)break;h=_}h!==null&&u.stopPropagation()}else Cd(e,i,u,null,a)}}function kd(e){return e=jf(e),Xd(e)}var Tc=null;function Xd(e){if(Tc=null,e=cr(e),e!==null){var i=l(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=c(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Tc=e,null}function W0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ge:return 2;case Zt:return 8;case ae:case an:return 32;case G:return 268435456;default:return 32}default:return 32}}var qd=!1,da=null,pa=null,ma=null,Bl=new Map,Il=new Map,_a=[],TT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(e,i){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":Bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Fl(e,i,a,u,h,_){return e===null||e.nativeEvent!==_?(e={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[h]},i!==null&&(i=fr(i),i!==null&&q0(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function bT(e,i,a,u,h){switch(i){case"focusin":return da=Fl(da,e,i,a,u,h),!0;case"dragenter":return pa=Fl(pa,e,i,a,u,h),!0;case"mouseover":return ma=Fl(ma,e,i,a,u,h),!0;case"pointerover":var _=h.pointerId;return Bl.set(_,Fl(Bl.get(_)||null,e,i,a,u,h)),!0;case"gotpointercapture":return _=h.pointerId,Il.set(_,Fl(Il.get(_)||null,e,i,a,u,h)),!0}return!1}function j0(e){var i=cr(e.target);if(i!==null){var a=l(i);if(a!==null){if(i=a.tag,i===13){if(i=c(a),i!==null){e.blockedOn=i,li(e.priority,function(){if(a.tag===13){var u=pi();u=ie(u);var h=Is(a,u);h!==null&&mi(h,a,u),Gd(a,u)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var u=new a.constructor(a.type,a);Yf=u,a.target.dispatchEvent(u),Yf=null}else return i=fr(a),i!==null&&q0(i),e.blockedOn=a,!1;i.shift()}return!0}function Z0(e,i,a){bc(e)&&a.delete(i)}function AT(){qd=!1,da!==null&&bc(da)&&(da=null),pa!==null&&bc(pa)&&(pa=null),ma!==null&&bc(ma)&&(ma=null),Bl.forEach(Z0),Il.forEach(Z0)}function Ac(e,i){e.blockedOn===i&&(e.blockedOn=null,qd||(qd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AT)))}var Rc=null;function K0(e){Rc!==e&&(Rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var a=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Xd(u||a)===null)continue;break}var _=fr(a);_!==null&&(e.splice(i,3),i-=3,Xh(_,{pending:!0,data:h,method:a.method,action:u},u,h))}}))}function Hl(e){function i(V){return Ac(V,e)}da!==null&&Ac(da,e),pa!==null&&Ac(pa,e),ma!==null&&Ac(ma,e),Bl.forEach(i),Il.forEach(i);for(var a=0;a<_a.length;a++){var u=_a[a];u.blockedOn===e&&(u.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)j0(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(u=0;u<a.length;u+=3){var h=a[u],_=a[u+1],T=h[Ln]||null;if(typeof _=="function")T||K0(a);else if(T){var U=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[Ln]||null)U=T.formAction;else if(Xd(h)!==null)continue}else U=T.action;typeof U=="function"?a[u+1]=U:(a.splice(u,3),u-=3),K0(a)}}}function Wd(e){this._internalRoot=e}wc.prototype.render=Wd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,u=pi();k0(a,u,e,i,null,null)},wc.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;k0(e.current,2,null,e,null,null),uc(),i[Zn]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Te();e={blockedOn:null,target:e,priority:i};for(var a=0;a<_a.length&&i!==0&&i<_a[a].priority;a++);_a.splice(a,0,e),a===0&&j0(e)}};var Q0=t.version;if(Q0!=="19.1.0")throw Error(r(527,Q0,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var RT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{pt=Cc.inject(RT),_t=Cc}catch{}}return Vl.createRoot=function(e,i){if(!s(e))throw Error(r(299));var a=!1,u="",h=dv,_=pv,T=mv,U=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(U=i.unstable_transitionCallbacks)),i=G0(e,1,!1,null,null,a,u,h,_,T,U,null),e[Zn]=i.current,wd(e),new Wd(i)},Vl.hydrateRoot=function(e,i,a){if(!s(e))throw Error(r(299));var u=!1,h="",_=dv,T=pv,U=mv,V=null,nt=null;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(_=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(nt=a.formState)),i=G0(e,1,!0,i,a??null,u,h,_,T,U,V,nt),i.context=V0(null),a=i.current,u=pi(),u=ie(u),h=$r(u),h.callback=null,ta(a,h,u),a=u,i.current.lanes=a,Bt(i,a),nr(i),e[Zn]=i.current,wd(e),new wc(i)},Vl.version="19.1.0",Vl}var oy;function zT(){if(oy)return Zd.exports;oy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zd.exports=PT(),Zd.exports}var BT=zT();function zr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function qx(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},Ym,Bn,Ke,Ni=1e8,Xe=1/Ni,kp=Math.PI*2,IT=kp/4,FT=0,Wx=Math.sqrt,HT=Math.cos,GT=Math.sin,Dn=function(t){return typeof t=="string"},rn=function(t){return typeof t=="function"},Vr=function(t){return typeof t=="number"},jm=function(t){return typeof t>"u"},lr=function(t){return typeof t=="object"},ei=function(t){return t!==!1},Zm=function(){return typeof window<"u"},Uc=function(t){return rn(t)||Dn(t)},Yx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,Xp=/(?:-?\.?\d|\.)+/gi,jx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$d=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zx=/[+-]=-?[.\d]+/,Kx=/[^,'"\[\]\s]+/gi,VT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,ir,qp,Km,Mi={},Af={},Qx,Jx=function(t){return(Af=Po(t,Mi))&&oi},Qm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},iu=function(t,n){return!n&&console.warn(t)},$x=function(t,n){return t&&(Mi[t]=n)&&Af&&(Af[t]=n)||Mi},ru=function(){return 0},kT={suppressEvents:!0,isStart:!0,kill:!1},_f={suppressEvents:!0,kill:!1},XT={suppressEvents:!0},Jm={},Ua=[],Wp={},tS,vi={},tp={},ly=30,gf=[],$m="",t_=function(t){var n=t[0],r,s;if(lr(n)||rn(n)||(t=[t]),!(r=(n._gsap||{}).harness)){for(s=gf.length;s--&&!gf[s].targetTest(n););r=gf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new TS(t[s],r)))||t.splice(s,1);return t},Ss=function(t){return t._gsap||t_(Pi(t))[0]._gsap},eS=function(t,n,r){return(r=t[n])&&rn(r)?t[n]():jm(r)&&t.getAttribute&&t.getAttribute(n)||r},ni=function(t,n){return(t=t.split(",")).forEach(n)||t},ln=function(t){return Math.round(t*1e5)/1e5||0},mn=function(t){return Math.round(t*1e7)/1e7||0},wo=function(t,n){var r=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),r==="+"?t+s:r==="-"?t-s:r==="*"?t*s:t/s},qT=function(t,n){for(var r=n.length,s=0;t.indexOf(n[s])<0&&++s<r;);return s<r},Rf=function(){var t=Ua.length,n=Ua.slice(0),r,s;for(Wp={},Ua.length=0,r=0;r<t;r++)s=n[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},e_=function(t){return!!(t._initted||t._startAt||t.add)},nS=function(t,n,r,s){Ua.length&&!Bn&&Rf(),t.render(n,r,!!(Bn&&n<0&&e_(t))),Ua.length&&!Bn&&Rf()},iS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(Kx).length<2?n:Dn(t)?t.trim():t},rS=function(t){return t},Ei=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},WT=function(t){return function(n,r){for(var s in r)s in n||s==="duration"&&t||s==="ease"||(n[s]=r[s])}},Po=function(t,n){for(var r in n)t[r]=n[r];return t},uy=function o(t,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=lr(n[r])?o(t[r]||(t[r]={}),n[r]):n[r]);return t},wf=function(t,n){var r={},s;for(s in t)s in n||(r[s]=t[s]);return r},tu=function(t){var n=t.parent||Je,r=t.keyframes?WT(qn(t.keyframes)):Ei;if(ei(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},YT=function(t,n){for(var r=t.length,s=r===n.length;s&&r--&&t[r]===n[r];);return r<0},aS=function(t,n,r,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[r],t[r]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Bf=function(t,n,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[r]===n&&(t[r]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Pa=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ms=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},jT=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Yp=function(t,n,r,s){return t._startAt&&(Bn?t._startAt.revert(_f):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},ZT=function o(t){return!t||t._ts&&o(t.parent)},cy=function(t){return t._repeat?zo(t._tTime,t=t.duration()+t._rDelay)*t:0},zo=function(t,n){var r=Math.floor(t=mn(t/n));return t&&r===t?r-1:r},Cf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},If=function(t){return t._end=mn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Xe)||0))},Ff=function(t,n){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=mn(r._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),If(t),r._dirty||Ms(r,t)),t},sS=function(t,n){var r;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(r=Cf(t.rawTime(),n),(!n._dur||pu(0,n.totalDuration(),r)-n._tTime>Xe)&&n.render(r,!0)),Ms(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-Xe}},ar=function(t,n,r,s){return n.parent&&Pa(n),n._start=mn((Vr(r)?r:r||t!==Je?Li(t,r,n):t._time)+n._delay),n._end=mn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),aS(t,n,"_first","_last",t._sort?"_start":0),jp(n)||(t._recent=n),s||sS(t,n),t._ts<0&&Ff(t,t._tTime),t},oS=function(t,n){return(Mi.ScrollTrigger||Qm("scrollTrigger",n))&&Mi.ScrollTrigger.create(n,t)},lS=function(t,n,r,s,l){if(i_(t,n,l),!t._initted)return 1;if(!r&&t._pt&&!Bn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&tS!==yi.frame)return Ua.push(t),t._lazy=[l,s],1},KT=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},jp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},QT=function(t,n,r,s){var l=t.ratio,c=n<0||!n&&(!t._start&&KT(t)&&!(!t._initted&&jp(t))||(t._ts<0||t._dp._ts<0)&&!jp(t))?0:1,f=t._rDelay,p=0,d,m,g;if(f&&t._repeat&&(p=pu(0,t._tDur,n),m=zo(p,f),t._yoyo&&m&1&&(c=1-c),m!==zo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Bn||s||t._zTime===Xe||!n&&t._zTime){if(!t._initted&&lS(t,n,s,r,p))return;for(g=t._zTime,t._zTime=n||(r?Xe:0),r||(r=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Yp(t,n,r,!0),t._onUpdate&&!r&&xi(t,"onUpdate"),p&&t._repeat&&!r&&t.parent&&xi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Pa(t,1),!r&&!Bn&&(xi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},JT=function(t,n,r){var s;if(r>n)for(s=t._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Bo=function(t,n,r,s){var l=t._repeat,c=mn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:mn(c*(l+1)+t._rDelay*l):c,f>0&&!s&&Ff(t,t._tTime=t._tDur*f),t.parent&&If(t),r||Ms(t.parent,t),t},fy=function(t){return t instanceof jn?Ms(t):Bo(t,t._dur)},$T={_start:0,endTime:ru,totalDuration:ru},Li=function o(t,n,r){var s=t.labels,l=t._recent||$T,c=t.duration()>=Ni?l.endTime(!1):t._dur,f,p,d;return Dn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:r).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&r&&(p=p/100*(qn(r)?r[0]:r).totalDuration()),f>1?o(t,n.substr(0,f-1),r)+p:c+p)):n==null?c:+n},eu=function(t,n,r){var s=Vr(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,p;if(s&&(c.duration=n[1]),c.parent=r,t){for(f=c,p=r;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ei(p.vars.inherit)&&p.parent;c.immediateRender=ei(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new pn(n[0],c,n[l+1])},Fa=function(t,n){return t||t===0?n(t):n},pu=function(t,n,r){return r<t?t:r>n?n:r},Xn=function(t,n){return!Dn(t)||!(n=VT.exec(t))?"":n[1]},tb=function(t,n,r){return Fa(r,function(s){return pu(t,n,s)})},Zp=[].slice,uS=function(t,n){return t&&lr(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&lr(t[0]))&&!t.nodeType&&t!==ir},eb=function(t,n,r){return r===void 0&&(r=[]),t.forEach(function(s){var l;return Dn(s)&&!n||uS(s,1)?(l=r).push.apply(l,Pi(s)):r.push(s)})||r},Pi=function(t,n,r){return Ke&&!n&&Ke.selector?Ke.selector(t):Dn(t)&&!r&&(qp||!Io())?Zp.call((n||Km).querySelectorAll(t),0):qn(t)?eb(t,r):uS(t)?Zp.call(t,0):t?[t]:[]},Kp=function(t){return t=Pi(t)[0]||iu("Invalid scope")||{},function(n){var r=t.current||t.nativeElement||t;return Pi(n,r.querySelectorAll?r:r===t?iu("Invalid scope")||Km.createElement("div"):t)}},cS=function(t){return t.sort(function(){return .5-Math.random()})},fS=function(t){if(rn(t))return t;var n=lr(t)?t:{each:t},r=Es(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,m=s,g=s;return Dn(s)?m=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(m=s[0],g=s[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,C,w,b,O,P,L,B,A;if(!S){if(A=n.grid==="auto"?0:(n.grid||[1,Ni])[1],!A){for(L=-Ni;L<(L=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(S=c[M]=[],x=p?Math.min(A,M)*m-.5:s%A,C=A===Ni?0:p?M*g/A-.5:s/A|0,L=0,B=Ni,P=0;P<M;P++)w=P%A-x,b=C-(P/A|0),S[P]=O=d?Math.abs(d==="y"?b:w):Wx(w*w+b*b),O>L&&(L=O),O<B&&(B=O);s==="random"&&cS(S),S.max=L-B,S.min=B,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(A>M?M-1:d?d==="y"?M/A:A:Math.max(A,M/A))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Xn(n.amount||n.each)||0,r=r&&M<0?SS(r):r}return M=(S[v]-S.min)/S.max||0,mn(S.b+(r?r(M):M)*S.v)+S.u}},Qp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var s=mn(Math.round(parseFloat(r)/t)*t*n);return(s-s%1)/n+(Vr(r)?0:Xn(r))}},hS=function(t,n){var r=qn(t),s,l;return!r&&lr(t)&&(s=r=t.radius||Ni,t.values?(t=Pi(t.values),(l=!Vr(t[0]))&&(s*=s)):t=Qp(t.increment)),Fa(n,r?rn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Ni,m=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-p,v=v*v+y*y):v=Math.abs(t[g]-f),v<d&&(d=v,m=g);return m=!s||d<=s?t[m]:c,l||m===c||Vr(c)?m:m+Xn(c)}:Qp(t))},dS=function(t,n,r,s){return Fa(qn(t)?!n:r===!0?!!(r=0):!s,function(){return qn(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(n-t+r*.99))/r)*r*s)/s})},nb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(s){return n.reduce(function(l,c){return c(l)},s)}},ib=function(t,n){return function(r){return t(parseFloat(r))+(n||Xn(r))}},rb=function(t,n,r){return mS(t,n,0,1,r)},pS=function(t,n,r){return Fa(r,function(s){return t[~~n(s)]})},ab=function o(t,n,r){var s=n-t;return qn(t)?pS(t,o(0,t.length),n):Fa(r,function(l){return(s+(l-t)%s)%s+t})},sb=function o(t,n,r){var s=n-t,l=s*2;return qn(t)?pS(t,o(0,t.length-1),n):Fa(r,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},au=function(t){for(var n=0,r="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?Kx:Xp),r+=t.substr(n,s-n)+dS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return r+t.substr(n,t.length-n)},mS=function(t,n,r,s,l){var c=n-t,f=s-r;return Fa(l,function(p){return r+((p-t)/c*f||0)})},ob=function o(t,n,r,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Dn(t),f={},p,d,m,g,v;if(r===!0&&(s=1)&&(r=null),c)t={p:t},n={p:n};else if(qn(t)&&!qn(n)){for(m=[],g=t.length,v=g-2,d=1;d<g;d++)m.push(o(t[d-1],t[d]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},r=n}else s||(t=Po(qn(t)?[]:{},t));if(!m){for(p in n)n_.call(f,t,p,"get",n[p]);l=function(E){return s_(E,f)||(c?t.p:t)}}}return Fa(r,l)},hy=function(t,n,r){var s=t.labels,l=Ni,c,f,p;for(c in s)f=s[c]-n,f<0==!!r&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},xi=function(t,n,r){var s=t.vars,l=s[n],c=Ke,f=t._ctx,p,d,m;if(l)return p=s[n+"Params"],d=s.callbackScope||t,r&&Ua.length&&Rf(),f&&(Ke=f),m=p?l.apply(d,p):l.call(d),Ke=c,m},Ql=function(t){return Pa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Bn),t.progress()<1&&xi(t,"onInterrupt"),t},Ao,_S=[],gS=function(t){if(t)if(t=!t.name&&t.default||t,Zm()||t.headless){var n=t.name,r=rn(t),s=n&&!r&&t.init?function(){this._props=[]}:t,l={init:ru,render:s_,add:n_,kill:Eb,modifier:Mb,rawVars:0},c={targetTest:0,get:0,getSetter:a_,aliases:{},register:0};if(Io(),t!==s){if(vi[n])return;Ei(s,Ei(wf(t,l),c)),Po(s.prototype,Po(l,wf(t,c))),vi[s.prop=n]=s,t.targetTest&&(gf.push(s),Jm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}$x(n,s),t.register&&t.register(oi,s,ii)}else _S.push(t)},ke=255,Jl={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},ep=function(t,n,r){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(r-n)*t*6:t<.5?r:t*3<2?n+(r-n)*(2/3-t)*6:n)*ke+.5|0},vS=function(t,n,r){var s=t?Vr(t)?[t>>16,t>>8&ke,t&ke]:0:Jl.black,l,c,f,p,d,m,g,v,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jl[t])s=Jl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ke,s&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(Xp),!n)p=+s[0]%360/360,d=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(d+1):m+d-m*d,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=ep(p+1/3,l,c),s[1]=ep(p,l,c),s[2]=ep(p-1/3,l,c);else if(~t.indexOf("="))return s=t.match(jx),r&&s.length<4&&(s[3]=1),s}else s=t.match(Xp)||Jl.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/ke,c=s[1]/ke,f=s[2]/ke,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?p=d=0:(y=g-v,d=m>.5?y/(2-g-v):y/(g+v),p=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(m*100+.5)),r&&s.length<4&&(s[3]=1),s},yS=function(t){var n=[],r=[],s=-1;return t.split(La).forEach(function(l){var c=l.match(bo)||[];n.push.apply(n,c),r.push(s+=c.length+1)}),n.c=r,n},dy=function(t,n,r){var s="",l=(t+s).match(La),c=n?"hsla(":"rgba(",f=0,p,d,m,g;if(!l)return t;if(l=l.map(function(v){return(v=vS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),r&&(m=yS(t),p=r.c,p.join(s)!==m.c.join(s)))for(d=t.replace(La,"1").split(bo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:r).shift());if(!d)for(d=t.split(La),g=d.length-1;f<g;f++)s+=d[f]+l[f];return s+d[g]},La=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jl)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),lb=/hsl[a]?\(/,xS=function(t){var n=t.join(" "),r;if(La.lastIndex=0,La.test(n))return r=lb.test(n),t[1]=dy(t[1],r),t[0]=dy(t[0],r,yS(t[1])),!0},su,yi=function(){var o=Date.now,t=500,n=33,r=o(),s=r,l=1e3/240,c=l,f=[],p,d,m,g,v,y,E=function M(S){var x=o()-s,C=S===!0,w,b,O,P;if((x>t||x<0)&&(r+=x-n),s+=x,O=s-r,w=O-c,(w>0||C)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=w+(w>=l?4:l-w),b=1),C||(p=d(M)),b)for(y=0;y<f.length;y++)f[y](O,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Qx&&(!qp&&Zm()&&(ir=qp=window,Km=ir.document||{},Mi.gsap=oi,(ir.gsapVersions||(ir.gsapVersions=[])).push(oi.version),Jx(Af||ir.GreenSockGlobals||!ir.gsap&&ir||{}),_S.forEach(gS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=m||function(S){return setTimeout(S,c-g.time*1e3+1|0)},su=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),su=0,d=ru},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,C){var w=x?function(b,O,P,L){S(b,O,P,L),g.remove(w)}:S;return g.remove(S),f[C?"unshift":"push"](w),Io(),w},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g}(),Io=function(){return!su&&yi.wake()},xe={},ub=/^[\d.\-M][\d.\-,\s]/,cb=/["']/g,fb=function(t){for(var n={},r=t.substr(1,t.length-3).split(":"),s=r[0],l=1,c=r.length,f,p,d;l<c;l++)p=r[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(cb,"").trim():+d,s=p.substr(f+1).trim();return n},hb=function(t){var n=t.indexOf("(")+1,r=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<r?t.indexOf(")",r+1):r)},db=function(t){var n=(t+"").split("("),r=xe[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[fb(n[1])]:hb(t).split(",").map(iS)):xe._CE&&ub.test(t)?xe._CE("",t):r},SS=function(t){return function(n){return 1-t(1-n)}},MS=function o(t,n){for(var r=t._first,s;r;)r instanceof jn?o(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?o(r.timeline,n):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=n)),r=r._next},Es=function(t,n){return t&&(rn(t)?t:xe[t]||db(t))||n},Cs=function(t,n,r,s){r===void 0&&(r=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:r,easeInOut:s},c;return ni(t,function(f){xe[f]=Mi[f]=l,xe[c=f.toLowerCase()]=r;for(var p in l)xe[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=xe[f+"."+p]=l[p]}),l},ES=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},np=function o(t,n,r){var s=n>=1?n:1,l=(r||(t?.3:.45))/(n<1?n:1),c=l/kp*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*GT((m-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:ES(f);return l=kp/l,p.config=function(d,m){return o(t,d,m)},p},ip=function o(t,n){n===void 0&&(n=1.70158);var r=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?r:t==="in"?function(l){return 1-r(1-l)}:ES(r);return s.config=function(l){return o(t,l)},s};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Cs(o+",Power"+(n-1),t?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Cs("Elastic",np("in"),np("out"),np());(function(o,t){var n=1/t,r=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<r?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Cs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Cs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Cs("Circ",function(o){return-(Wx(1-o*o)-1)});Cs("Sine",function(o){return o===1?1:-HT(o*IT)+1});Cs("Back",ip("in"),ip("out"),ip());xe.SteppedEase=xe.steps=Mi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var r=1/t,s=t+(n?0:1),l=n?1:0,c=1-Xe;return function(f){return((s*pu(0,c,f)|0)+l)*r}}};No.ease=xe["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return $m+=o+","+o+"Params,"});var TS=function(t,n){this.id=FT++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:eS,this.set=n?n.getSetter:a_},ou=function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Bo(this,+n.duration,1,1),this.data=n.data,Ke&&(this._ctx=Ke,Ke.data.push(this)),su||yi.wake()}var t=o.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,s){if(Io(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Ff(this,r),!l._dp||l.parent||sS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Xe||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),nS(this,r,s)),this},t.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+cy(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},t.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+cy(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*l,s):this._repeat?zo(this._tTime,l)+1:1},t.timeScale=function(r,s){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===r)return this;var l=this.parent&&this._ts?Cf(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-Xe?0:this._rts,this.totalTime(pu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),If(this),jT(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ar(s,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(ei(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cf(s.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=XT);var s=Bn;return Bn=r,e_(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Bn=s,this},t.globalTime=function(r){for(var s=this,l=arguments.length?r:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(r):l},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,fy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,fy(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,s){return this.totalTime(Li(this,r),ei(s))},t.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,ei(s)),this._dur||(this._zTime=-Xe),this},t.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},t.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-Xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},t.isActive=function(){var r=this.parent||this._dp,s=this._start,l;return!!(!r||this._ts&&this._initted&&r.isActive()&&(l=r.rawTime(!0))>=s&&l<this.endTime(!0)-Xe)},t.eventCallback=function(r,s,l){var c=this.vars;return arguments.length>1?(s?(c[r]=s,l&&(c[r+"Params"]=l),r==="onUpdate"&&(this._onUpdate=s)):delete c[r],this):c[r]},t.then=function(r){var s=this;return new Promise(function(l){var c=rn(r)?r:rS,f=function(){var d=s.then;s.then=null,rn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),l(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Ql(this)},o}();Ei(ou.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var jn=function(o){qx(t,o);function t(r,s){var l;return r===void 0&&(r={}),l=o.call(this,r)||this,l.labels={},l.smoothChildTiming=!!r.smoothChildTiming,l.autoRemoveChildren=!!r.autoRemoveChildren,l._sort=ei(r.sortChildren),Je&&ar(r.parent||Je,zr(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),r.scrollTrigger&&oS(zr(l),r.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return eu(0,arguments,this),this},n.from=function(s,l,c){return eu(1,arguments,this),this},n.fromTo=function(s,l,c,f){return eu(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,tu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new pn(s,l,Li(this,c),1),this},n.call=function(s,l,c){return ar(this,pn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,p,d,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=m,c.parent=this,new pn(s,c,Li(this,p)),this},n.staggerFrom=function(s,l,c,f,p,d,m){return c.runBackwards=1,tu(c).immediateRender=ei(c.immediateRender),this.staggerTo(s,l,c,f,p,d,m)},n.staggerFromTo=function(s,l,c,f,p,d,m,g){return f.startAt=c,tu(f).immediateRender=ei(f.immediateRender),this.staggerTo(s,l,f,p,d,m,g)},n.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,m=s<=0?0:mn(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,y,E,M,S,x,C,w,b,O,P,L;if(this!==Je&&m>p&&s>=0&&(m=p),m!==this._tTime||c||g){if(f!==this._time&&d&&(m+=this._time-f,s+=this._time-f),v=m,b=this._start,w=this._ts,x=!w,g&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=mn(m%S),m===p?(M=this._repeat,v=d):(O=mn(m/S),M=~~O,M&&M===O&&(v=d,M--),v>d&&(v=d)),O=zo(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),P&&M&1&&(v=d-v,L=1),M!==O&&!this._lock){var B=P&&O&1,A=B===(P&&M&1);if(M<O&&(B=!B),f=B?0:m%d?d:m,this._lock=1,this.render(f||(L?0:mn(M*S)),l,!d)._lock=0,this._tTime=m,!l&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,A&&(this._lock=2,f=B?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;MS(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=JT(this,mn(f),mn(v)),C&&(m-=v-(v=C._start))),this._tTime=m,this._time=v,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!O&&(xi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){C=0,E&&(m+=this._zTime=-Xe);break}}y=E}else{y=this._last;for(var R=s<0?s:v;y;){if(E=y._prev,(y._act||R<=y._end)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,l,c||Bn&&e_(y)),v!==this._time||!this._ts&&!x){C=0,E&&(m+=this._zTime=R?-Xe:Xe);break}}y=E}}if(C&&!l&&(this.pause(),C.render(v>=f?0:-Xe)._zTime=v>=f?1:-1,this._ts))return this._start=b,If(this),this.render(s,l,c);this._onUpdate&&!l&&xi(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(m===p&&this._ts>0||!m&&this._ts<0)&&Pa(this,1),!l&&!(s<0&&!f)&&(m||f||!p)&&(xi(this,m===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Vr(l)||(l=Li(this,l,s)),!(s instanceof ou)){if(qn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Dn(s))return this.addLabel(s,l);if(rn(s))s=pn.delayedCall(0,s);else return this}return this!==s?ar(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ni);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof pn?l&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Dn(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&Bf(this,s),s===this._recent&&(this._recent=this._last),Ms(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mn(yi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Li(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=pn.delayedCall(0,l||ru,c);return f.data="isPause",this._hasPause=1,ar(this,f,Li(this,s))},n.removePause=function(s){var l=this._first;for(s=Li(this,s);l;)l._start===s&&l.data==="isPause"&&Pa(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Ra!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Pi(s),p=this._first,d=Vr(l),m;p;)p instanceof pn?qT(p._targets,f)&&(d?(!Ra||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(m=p.getTweensOf(f,l)).length&&c.push.apply(c,m),p=p._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Li(c,s),p=l,d=p.startAt,m=p.onStart,g=p.onStartParams,v=p.immediateRender,y,E=pn.to(c,Ei({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Xe,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==S&&Bo(E,S,0,1).render(E._time,!0,!0),y=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Ei({startAt:{time:Li(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),hy(this,Li(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),hy(this,Li(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Xe)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=s);return Ms(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ms(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,p=Ni,d,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ar(c,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Bo(c,c===Je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Je._ts&&(nS(Je,Cf(s,Je)),tS=yi.frame),yi.frame>=ly){ly+=Si.autoSleep||120;var l=Je._first;if((!l||!l._ts)&&Si.autoSleep&&yi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||yi.sleep()}}},t}(ou);Ei(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pb=function(t,n,r,s,l,c,f){var p=new ii(this._pt,t,n,0,1,DS,null,l),d=0,m=0,g,v,y,E,M,S,x,C;for(p.b=r,p.e=s,r+="",s+="",(x=~s.indexOf("random("))&&(s=au(s)),c&&(C=[r,s],c(C,t,n),r=C[0],s=C[1]),v=r.match($d)||[];g=$d.exec(s);)E=g[0],M=s.substring(d,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,p._pt={_next:p._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?wo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},d=$d.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(Zx.test(s)||x)&&(p.e=0),this._pt=p,p},n_=function(t,n,r,s,l,c,f,p,d,m){rn(s)&&(s=s(l||0,t,c));var g=t[n],v=r!=="get"?r:rn(g)?d?t[n.indexOf("set")||!rn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,y=rn(g)?d?yb:wS:r_,E;if(Dn(s)&&(~s.indexOf("random(")&&(s=au(s)),s.charAt(1)==="="&&(E=wo(v,s)+(Xn(v)||0),(E||E===0)&&(s=E))),!m||v!==s||Jp)return!isNaN(v*s)&&s!==""?(E=new ii(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?Sb:CS,0,y),d&&(E.fp=d),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&Qm(n,s),pb.call(this,t,n,v,s,y,p||Si.stringFilter,d))},mb=function(t,n,r,s,l){if(rn(t)&&(t=nu(t,l,n,r,s)),!lr(t)||t.style&&t.nodeType||qn(t)||Yx(t))return Dn(t)?nu(t,l,n,r,s):t;var c={},f;for(f in t)c[f]=nu(t[f],l,n,r,s);return c},bS=function(t,n,r,s,l,c){var f,p,d,m;if(vi[t]&&(f=new vi[t]).init(l,f.rawVars?n[t]:mb(n[t],s,l,c,r),r,s,c)!==!1&&(r._pt=p=new ii(r._pt,l,t,0,1,f.render,f,0,f.priority),r!==Ao))for(d=r._ptLookup[r._targets.indexOf(l)],m=f._props.length;m--;)d[f._props[m]]=p;return f},Ra,Jp,i_=function o(t,n,r){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,m=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,C=x&&x.data==="nested"?x.vars.targets:S,w=t._overwrite==="auto"&&!Ym,b=t.timeline,O,P,L,B,A,R,z,H,k,Y,it,F,q;if(b&&(!v||!l)&&(l="none"),t._ease=Es(l,No.ease),t._yEase=g?SS(Es(g===!0?l:g,No.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!b&&!!s.runBackwards,!b||v&&!s.stagger){if(H=S[0]?Ss(S[0]).harness:0,F=H&&s[H.prop],O=wf(s,Jm),M&&(M._zTime<0&&M.progress(1),n<0&&m&&f&&!y?M.render(-1,!0):M.revert(m&&E?_f:kT),M._lazy=0),c){if(Pa(t._startAt=pn.set(S,Ei({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ei(p),startAt:null,delay:0,onUpdate:d&&function(){return xi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn||!f&&!y)&&t._startAt.revert(_f),f&&E&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(m&&E&&!M){if(n&&(f=!1),L=Ei({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ei(p),immediateRender:f,stagger:0,parent:x},O),F&&(L[H.prop]=F),Pa(t._startAt=pn.set(S,L)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn?t._startAt.revert(_f):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Xe,Xe);else if(!n)return}for(t._pt=t._ptCache=0,p=E&&ei(p)||p&&!E,P=0;P<S.length;P++){if(A=S[P],z=A._gsap||t_(S)[P]._gsap,t._ptLookup[P]=Y={},Wp[z.id]&&Ua.length&&Rf(),it=C===S?P:C.indexOf(A),H&&(k=new H).init(A,F||O,t,it,C)!==!1&&(t._pt=B=new ii(t._pt,A,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){Y[j]=B}),k.priority&&(R=1)),!H||F)for(L in O)vi[L]&&(k=bS(L,O,t,it,A,C))?k.priority&&(R=1):Y[L]=B=n_.call(t,A,L,"get",O[L],it,C,0,s.stringFilter);t._op&&t._op[P]&&t.kill(A,t._op[P]),w&&t._pt&&(Ra=t,Je.killTweensOf(A,Y,t.globalTime(n)),q=!t.parent,Ra=0),t._pt&&p&&(Wp[z.id]=1)}R&&US(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!q,v&&n<=0&&b.render(Ni,!0,!0)},_b=function(t,n,r,s,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],m,g,v,y;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(m=v[y][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return Jp=1,t.vars[n]="+=0",i_(t,f),Jp=0,p?iu(n+" not eligible for reset"):1;d.push(m)}for(y=d.length;y--;)g=d[y],m=g._pt||g,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=r-m.s,g.e&&(g.e=ln(r)+Xn(g.e)),g.b&&(g.b=m.s+Xn(g.b))},gb=function(t,n){var r=t[0]?Ss(t[0]).harness:0,s=r&&r.aliases,l,c,f,p;if(!s)return n;l=Po({},n);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},vb=function(t,n,r,s){var l=n.ease||s||"power1.inOut",c,f;if(qn(n))f=r[t]||(r[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=r[c]||(r[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},nu=function(t,n,r,s,l){return rn(t)?t.call(n,r,s,l):Dn(t)&&~t.indexOf("random(")?au(t):t},AS=$m+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",RS={};ni(AS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return RS[o]=1});var pn=function(o){qx(t,o);function t(r,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:tu(s))||this;var p=f.vars,d=p.duration,m=p.delay,g=p.immediateRender,v=p.stagger,y=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,x=p.yoyoEase,C=s.parent||Je,w=(qn(r)||Yx(r)?Vr(r[0]):"length"in s)?[r]:Pi(r),b,O,P,L,B,A,R,z;if(f._targets=w.length?t_(w):iu("GSAP target "+r+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||Uc(d)||Uc(m)){if(s=f.vars,b=f.timeline=new jn({data:"nested",defaults:M||{},targets:C&&C.data==="nested"?C.vars.targets:w}),b.kill(),b.parent=b._dp=zr(f),b._start=0,v||Uc(d)||Uc(m)){if(L=w.length,R=v&&fS(v),lr(v))for(B in v)~AS.indexOf(B)&&(z||(z={}),z[B]=v[B]);for(O=0;O<L;O++)P=wf(s,RS),P.stagger=0,x&&(P.yoyoEase=x),z&&Po(P,z),A=w[O],P.duration=+nu(d,zr(f),O,A,w),P.delay=(+nu(m,zr(f),O,A,w)||0)-f._delay,!v&&L===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),b.to(A,P,R?R(O,A,w):0),b._ease=xe.none;b.duration()?d=m=0:f.timeline=0}else if(E){tu(Ei(b.vars.defaults,{ease:"none"})),b._ease=Es(E.ease||s.ease||"none");var H=0,k,Y,it;if(qn(E))E.forEach(function(F){return b.to(w,F,">")}),b.duration();else{P={};for(B in E)B==="ease"||B==="easeEach"||vb(B,E[B],P,E.easeEach);for(B in P)for(k=P[B].sort(function(F,q){return F.t-q.t}),H=0,O=0;O<k.length;O++)Y=k[O],it={ease:Y.e,duration:(Y.t-(O?k[O-1].t:0))/100*d},it[B]=Y.v,b.to(w,it,H),H+=it.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||f.duration(d=b.duration())}else f.timeline=0;return y===!0&&!Ym&&(Ra=zr(f),Je.killTweensOf(w),Ra=0),ar(C,zr(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!E&&f._start===mn(C._time)&&ei(g)&&ZT(zr(f))&&C.data!=="nested")&&(f._tTime=-Xe,f.render(Math.max(0,-m)||0)),S&&oS(zr(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,p=this._tDur,d=this._dur,m=s<0,g=s>p-Xe&&!m?p:s<Xe?0:s,v,y,E,M,S,x,C,w,b;if(!d)QT(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=mn(g%M),g===p?(E=this._repeat,v=d):(S=mn(g/M),E=~~S,E&&E===S?(v=d,E--):v>d&&(v=d)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=d-v),S=zo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(w&&this._yEase&&MS(w,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(mn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(lS(this,m?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(b||this._ease)(v/d),this._from&&(this.ratio=C=1-C),!f&&g&&!l&&!S&&(xi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(C,y.d),y=y._next;w&&w.render(s<0?s:w._dur*w._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Yp(this,s,l,c),xi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&xi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&Yp(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Pa(this,1),!l&&!(m&&!f)&&(g||f||x)&&(xi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,p){su||yi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||i_(this,d),m=this._ease(d/this._dur),_b(this,s,l,c,f,m,d,p)?this.resetTo(s,l,c,f,1):(Ff(this,0),this.parent||aS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Ql(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Ra&&Ra.vars.overwrite!==!0)._first||Ql(this),this.parent&&c!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Pi(s):f,d=this._ptLookup,m=this._pt,g,v,y,E,M,S,x;if((!l||l==="all")&&YT(f,p))return l==="all"&&(this._pt=0),Ql(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},ni(l,function(C){return M[C]=1}),l=M),l=gb(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,E=v,y={}):(y=g[x]=g[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Bf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&m&&Ql(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return eu(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return eu(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Je.killTweensOf(s,l,c)},t}(ou);Ei(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(o){pn[o]=function(){var t=new jn,n=Zp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var r_=function(t,n,r){return t[n]=r},wS=function(t,n,r){return t[n](r)},yb=function(t,n,r,s){return t[n](s.fp,r)},xb=function(t,n,r){return t.setAttribute(n,r)},a_=function(t,n){return rn(t[n])?wS:jm(t[n])&&t.setAttribute?xb:r_},CS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},Sb=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},DS=function(t,n){var r=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+s,r=r._next;s+=n.c}n.set(n.t,n.p,s,n)},s_=function(t,n){for(var r=n._pt;r;)r.r(t,r.d),r=r._next},Mb=function(t,n,r,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,r),l=c},Eb=function(t){for(var n=this._pt,r,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Bf(this,n,"_pt"):n.dep||(r=1),n=s;return!r},Tb=function(t,n,r,s){s.mSet(t,n,s.m.call(s.tween,r,s.mt),s)},US=function(t){for(var n=t._pt,r,s,l,c;n;){for(r=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=r}t._pt=l},ii=function(){function o(n,r,s,l,c,f,p,d,m){this.t=r,this.s=l,this.c=c,this.p=s,this.r=f||CS,this.d=p||this,this.set=d||r_,this.pr=m||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(r,s,l){this.mSet=this.mSet||this.set,this.set=Tb,this.m=r,this.mt=l,this.tween=s},o}();ni($m+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Jm[o]=1});Mi.TweenMax=Mi.TweenLite=pn;Mi.TimelineLite=Mi.TimelineMax=jn;Je=new jn({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=xS;var Ts=[],vf={},bb=[],py=0,Ab=0,rp=function(t){return(vf[t]||bb).map(function(n){return n()})},$p=function(){var t=Date.now(),n=[];t-py>2&&(rp("matchMediaInit"),Ts.forEach(function(r){var s=r.queries,l=r.conditions,c,f,p,d;for(f in s)c=ir.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(r.revert(),p&&n.push(r))}),rp("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(s){return r.add(null,s)})}),py=t,rp("matchMedia"))},LS=function(){function o(n,r){this.selector=r&&Kp(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Ab++,n&&this.add(n)}var t=o.prototype;return t.add=function(r,s,l){rn(r)&&(l=s,s=r,r=rn);var c=this,f=function(){var d=Ke,m=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=Kp(l)),Ke=c,g=s.apply(c,arguments),rn(g)&&c._r.push(g),Ke=d,c.selector=m,c.isReverted=!1,g};return c.last=f,r===rn?f(c,function(p){return c.add(null,p)}):r?c[r]=f:f},t.ignore=function(r){var s=Ke;Ke=null,r(this),Ke=s},t.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof o?r.push.apply(r,s.getTweens()):s instanceof pn&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,s){var l=this;if(r?function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(r)}),p=l.data.length;p--;)d=l.data[p],d instanceof jn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof pn)&&d.revert&&d.revert(r);l._r.forEach(function(m){return m(r,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ts.length;c--;)Ts[c].id===this.id&&Ts.splice(c,1)},t.revert=function(r){this.kill(r||{})},o}(),Rb=function(){function o(n){this.contexts=[],this.scope=n,Ke&&Ke.data.push(this)}var t=o.prototype;return t.add=function(r,s,l){lr(r)||(r={matches:r});var c=new LS(0,l||this.scope),f=c.conditions={},p,d,m;Ke&&!c.selector&&(c.selector=Ke.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=r;for(d in r)d==="all"?m=1:(p=ir.matchMedia(r[d]),p&&(Ts.indexOf(c)<0&&Ts.push(c),(f[d]=p.matches)&&(m=1),p.addListener?p.addListener($p):p.addEventListener("change",$p)));return m&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},o}(),Df={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(s){return gS(s)})},timeline:function(t){return new jn(t)},getTweensOf:function(t,n){return Je.getTweensOf(t,n)},getProperty:function(t,n,r,s){Dn(t)&&(t=Pi(t)[0]);var l=Ss(t||{}).get,c=r?rS:iS;return r==="native"&&(r=""),t&&(n?c((vi[n]&&vi[n].get||l)(t,n,r,s)):function(f,p,d){return c((vi[f]&&vi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,r){if(t=Pi(t),t.length>1){var s=t.map(function(m){return oi.quickSetter(m,n,r)}),l=s.length;return function(m){for(var g=l;g--;)s[g](m)}}t=t[0]||{};var c=vi[n],f=Ss(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(m){var g=new c;Ao._pt=0,g.init(t,r?m+r:m,Ao,0,[t]),g.render(1,g),Ao._pt&&s_(1,Ao)}:f.set(t,p);return c?d:function(m){return d(t,p,r?m+r:m,f,1)}},quickTo:function(t,n,r){var s,l=oi.to(t,Ei((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),r||{})),c=function(p,d,m){return l.resetTo(n,p,d,m)};return c.tween=l,c},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Es(t.ease,No.ease)),uy(No,t||{})},config:function(t){return uy(Si,t||{})},registerEffect:function(t){var n=t.name,r=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!vi[f]&&!Mi[f]&&iu(n+" effect requires "+f+" plugin.")}),tp[n]=function(f,p,d){return r(Pi(f),Ei(p||{},l),d)},c&&(jn.prototype[n]=function(f,p,d){return this.add(tp[n](f,lr(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){xe[t]=Es(n)},parseEase:function(t,n){return arguments.length?Es(t,n):xe},getById:function(t){return Je.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var r=new jn(t),s,l;for(r.smoothChildTiming=ei(t.smoothChildTiming),Je.remove(r),r._dp=0,r._time=r._tTime=Je._time,s=Je._first;s;)l=s._next,(n||!(!s._dur&&s instanceof pn&&s.vars.onComplete===s._targets[0]))&&ar(r,s,s._start-s._delay),s=l;return ar(Je,r,0),r},context:function(t,n){return t?new LS(t,n):Ke},matchMedia:function(t){return new Rb(t)},matchMediaRefresh:function(){return Ts.forEach(function(t){var n=t.conditions,r,s;for(s in n)n[s]&&(n[s]=!1,r=1);r&&t.revert()})||$p()},addEventListener:function(t,n){var r=vf[t]||(vf[t]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(t,n){var r=vf[t],s=r&&r.indexOf(n);s>=0&&r.splice(s,1)},utils:{wrap:ab,wrapYoyo:sb,distribute:fS,random:dS,snap:hS,normalize:rb,getUnit:Xn,clamp:tb,splitColor:vS,toArray:Pi,selector:Kp,mapRange:mS,pipe:nb,unitize:ib,interpolate:ob,shuffle:cS},install:Jx,effects:tp,ticker:yi,updateRoot:jn.updateRoot,plugins:vi,globalTimeline:Je,core:{PropTween:ii,globals:$x,Tween:pn,Timeline:jn,Animation:ou,getCache:Ss,_removeLinkedListItem:Bf,reverting:function(){return Bn},context:function(t){return t&&Ke&&(Ke.data.push(t),t._ctx=Ke),Ke},suppressOverwrites:function(t){return Ym=t}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Df[o]=pn[o]});yi.add(jn.updateRoot);Ao=Df.to({},{duration:0});var wb=function(t,n){for(var r=t._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},Cb=function(t,n){var r=t._targets,s,l,c;for(s in n)for(l=r.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=wb(c,s)),c&&c.modifier&&c.modifier(n[s],t,r[l],s))},ap=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,d;if(Dn(l)&&(p={},ni(l,function(m){return p[m]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}Cb(f,l)}}}},oi=Df.registerPlugin({name:"attr",init:function(t,n,r,s,l){var c,f,p;this.tween=r;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var r=n._pt;r;)Bn?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",headless:1,init:function(t,n){for(var r=n.length;r--;)this.add(t,r,t[r]||0,n[r],0,0,0,0,0,1)}},ap("roundProps",Qp),ap("modifiers"),ap("snap",hS))||Df;pn.version=jn.version=oi.version="3.13.0";Qx=1;Zm()&&Io();xe.Power0;xe.Power1;xe.Power2;xe.Power3;xe.Power4;xe.Linear;xe.Quad;xe.Cubic;xe.Quart;xe.Quint;xe.Strong;xe.Elastic;xe.Back;xe.SteppedEase;xe.Bounce;xe.Sine;xe.Expo;xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var my,wa,Co,o_,vs,_y,l_,Db=function(){return typeof window<"u"},kr={},ds=180/Math.PI,Do=Math.PI/180,uo=Math.atan2,gy=1e8,u_=/([A-Z])/g,Ub=/(left|right|width|margin|padding|x)/i,Lb=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Ob=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Nb=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Pb=function(t,n){var r=n.s+n.c*t;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},OS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},NS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},zb=function(t,n,r){return t.style[n]=r},Bb=function(t,n,r){return t.style.setProperty(n,r)},Ib=function(t,n,r){return t._gsap[n]=r},Fb=function(t,n,r){return t._gsap.scaleX=t._gsap.scaleY=r},Hb=function(t,n,r,s,l){var c=t._gsap;c.scaleX=c.scaleY=r,c.renderTransform(l,c)},Gb=function(t,n,r,s,l){var c=t._gsap;c[n]=r,c.renderTransform(l,c)},tn="transform",ri=tn+"Origin",Vb=function o(t,n){var r=this,s=this.target,l=s.style,c=s._gsap;if(t in kr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=sr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return r.tfm[f]=Br(s,f)}):this.tfm[t]=c.x?c[t]:Br(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return sr.transform.split(",").forEach(function(f){return o.call(r,f,n)});if(this.props.indexOf(tn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=tn}(l||n)&&this.props.push(t,n,l[t])},PS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kb=function(){var t=this.props,n=this.target,r=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?r[t[l]]=t[l+2]:r.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(u_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=l_(),(!l||!l.isStart)&&!r[tn]&&(PS(r),s.zOrigin&&r[ri]&&(r[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},zS=function(t,n){var r={target:t,props:[],revert:kb,save:Vb};return t._gsap||oi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return r.save(s)}),r},BS,em=function(t,n){var r=wa.createElementNS?wa.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):wa.createElement(t);return r&&r.style?r:wa.createElement(t)},zi=function o(t,n,r){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(u_,"-$1").toLowerCase())||s.getPropertyValue(n)||!r&&o(t,Fo(n)||n,1)||""},vy="O,Moz,ms,Ms,Webkit".split(","),Fo=function(t,n,r){var s=n||vs,l=s.style,c=5;if(t in l&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(vy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?vy[c]:"")+t},nm=function(){Db()&&window.document&&(my=window,wa=my.document,Co=wa.documentElement,vs=em("div")||{style:{}},em("div"),tn=Fo(tn),ri=tn+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",BS=!!Fo("perspective"),l_=oi.core.reverting,o_=1)},yy=function(t){var n=t.ownerSVGElement,r=em("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",r.appendChild(s),Co.appendChild(r);try{l=s.getBBox()}catch{}return r.removeChild(s),Co.removeChild(r),l},xy=function(t,n){for(var r=n.length;r--;)if(t.hasAttribute(n[r]))return t.getAttribute(n[r])},IS=function(t){var n,r;try{n=t.getBBox()}catch{n=yy(t),r=1}return n&&(n.width||n.height)||r||(n=yy(t)),n&&!n.width&&!n.x&&!n.y?{x:+xy(t,["x","cx","x1"])||0,y:+xy(t,["y","cy","y1"])||0,width:0,height:0}:n},FS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&IS(t))},Rs=function(t,n){if(n){var r=t.style,s;n in kr&&n!==ri&&(n=tn),r.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(s==="--"?n:n.replace(u_,"-$1").toLowerCase())):r.removeAttribute(n)}},Ca=function(t,n,r,s,l,c){var f=new ii(t._pt,n,r,0,1,c?NS:OS);return t._pt=f,f.b=s,f.e=l,t._props.push(r),f},Sy={deg:1,rad:1,turn:1},Xb={grid:1,flex:1},za=function o(t,n,r,s){var l=parseFloat(r)||0,c=(r+"").trim().substr((l+"").length)||"px",f=vs.style,p=Ub.test(n),d=t.tagName.toLowerCase()==="svg",m=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||Sy[s]||Sy[c])return l;if(c!=="px"&&!v&&(l=o(t,n,r,"px")),x=t.getCTM&&FS(t),(y||c==="%")&&(kr[n]||~n.indexOf("adius")))return E=x?t.getBBox()[p?"width":"height"]:t[m],ln(y?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===wa||!M.appendChild)&&(M=wa.body),S=M._gsap,S&&y&&S.width&&p&&S.time===yi.time&&!S.uncache)return ln(l/S.width*g);if(y&&(n==="height"||n==="width")){var C=t.style[n];t.style[n]=g+s,E=t[m],C?t.style[n]=C:Rs(t,n)}else(y||c==="%")&&!Xb[zi(M,"display")]&&(f.position=zi(t,"position")),M===t&&(f.position="static"),M.appendChild(vs),E=vs[m],M.removeChild(vs),f.position="absolute";return p&&y&&(S=Ss(M),S.time=yi.time,S.width=M[m]),ln(v?E*l/g:E&&l?g/E*l:0)},Br=function(t,n,r,s){var l;return o_||nm(),n in sr&&n!=="transform"&&(n=sr[n],~n.indexOf(",")&&(n=n.split(",")[0])),kr[n]&&n!=="transform"?(l=uu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Lf(zi(t,ri))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Uf[n]&&Uf[n](t,n,r)||zi(t,n)||eS(t,n)||(n==="opacity"?1:0))),r&&!~(l+"").trim().indexOf(" ")?za(t,n,l,r)+r:l},qb=function(t,n,r,s){if(!r||r==="none"){var l=Fo(n,t,1),c=l&&zi(t,l,1);c&&c!==r?(n=l,r=c):n==="borderColor"&&(r=zi(t,"borderTopColor"))}var f=new ii(this._pt,t.style,n,0,1,DS),p=0,d=0,m,g,v,y,E,M,S,x,C,w,b,O;if(f.b=r,f.e=s,r+="",s+="",s.substring(0,6)==="var(--"&&(s=zi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=zi(t,n)||s,M?t.style[n]=M:Rs(t,n)),m=[r,s],xS(m),r=m[0],s=m[1],v=r.match(bo)||[],O=s.match(bo)||[],O.length){for(;g=bo.exec(s);)S=g[0],C=s.substring(p,g.index),E?E=(E+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(E=1),S!==(M=v[d++]||"")&&(y=parseFloat(M)||0,b=M.substr((y+"").length),S.charAt(1)==="="&&(S=wo(y,S)+b),x=parseFloat(S),w=S.substr((x+"").length),p=bo.lastIndex-w.length,w||(w=w||Si.units[n]||b,p===s.length&&(s+=w,f.e+=w)),b!==w&&(y=za(t,n,M,w)||0),f._pt={_next:f._pt,p:C||d===1?C:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?NS:OS;return Zx.test(s)&&(f.e=0),this._pt=f,f},My={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wb=function(t){var n=t.split(" "),r=n[0],s=n[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(t=r,r=s,s=t),n[0]=My[r]||r,n[1]=My[s]||s,n.join(" ")},Yb=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,s=r.style,l=n.u,c=r._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],kr[f]&&(p=1,f=f==="transformOrigin"?ri:tn),Rs(r,f);p&&(Rs(r,tn),c&&(c.svg&&r.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",uu(r,1),c.uncache=1,PS(s)))}},Uf={clearProps:function(t,n,r,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ii(t._pt,n,r,0,0,Yb);return c.u=s,c.pr=-10,c.tween=l,t._props.push(r),1}}},lu=[1,0,0,1,0,0],HS={},GS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ey=function(t){var n=zi(t,tn);return GS(n)?lu:n.substr(7).match(jx).map(ln)},c_=function(t,n){var r=t._gsap||Ss(t),s=t.style,l=Ey(t),c,f,p,d;return r.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?lu:l):(l===lu&&!t.offsetParent&&t!==Co&&!r.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Co.appendChild(t)),l=Ey(t),p?s.display=p:Rs(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Co.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},im=function(t,n,r,s,l,c){var f=t._gsap,p=l||c_(t,!0),d=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=p[0],E=p[1],M=p[2],S=p[3],x=p[4],C=p[5],w=n.split(" "),b=parseFloat(w[0])||0,O=parseFloat(w[1])||0,P,L,B,A;r?p!==lu&&(L=y*S-E*M)&&(B=b*(S/L)+O*(-M/L)+(M*C-S*x)/L,A=b*(-E/L)+O*(y/L)-(y*C-E*x)/L,b=B,O=A):(P=IS(t),b=P.x+(~w[0].indexOf("%")?b/100*P.width:b),O=P.y+(~(w[1]||w[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(x=b-d,C=O-m,f.xOffset=g+(x*y+C*M)-x,f.yOffset=v+(x*E+C*S)-C):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=O,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!r,t.style[ri]="0px 0px",c&&(Ca(c,f,"xOrigin",d,b),Ca(c,f,"yOrigin",m,O),Ca(c,f,"xOffset",g,f.xOffset),Ca(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",b+" "+O)},uu=function(t,n){var r=t._gsap||new TS(t);if("x"in r&&!n&&!r.uncache)return r;var s=t.style,l=r.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=zi(t,ri)||"0",m,g,v,y,E,M,S,x,C,w,b,O,P,L,B,A,R,z,H,k,Y,it,F,q,j,gt,I,tt,dt,vt,K,ft;return m=g=v=M=S=x=C=w=b=0,y=E=1,r.svg=!!(t.getCTM&&FS(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[tn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[tn]!=="none"?p[tn]:"")),s.scale=s.rotate=s.translate="none"),L=c_(t,r.svg),r.svg&&(r.uncache?(j=t.getBBox(),d=r.xOrigin-j.x+"px "+(r.yOrigin-j.y)+"px",q=""):q=!n&&t.getAttribute("data-svg-origin"),im(t,q||d,!!q||r.originIsAbsolute,r.smooth!==!1,L)),O=r.xOrigin||0,P=r.yOrigin||0,L!==lu&&(z=L[0],H=L[1],k=L[2],Y=L[3],m=it=L[4],g=F=L[5],L.length===6?(y=Math.sqrt(z*z+H*H),E=Math.sqrt(Y*Y+k*k),M=z||H?uo(H,z)*ds:0,C=k||Y?uo(k,Y)*ds+M:0,C&&(E*=Math.abs(Math.cos(C*Do))),r.svg&&(m-=O-(O*z+P*k),g-=P-(O*H+P*Y))):(ft=L[6],vt=L[7],I=L[8],tt=L[9],dt=L[10],K=L[11],m=L[12],g=L[13],v=L[14],B=uo(ft,dt),S=B*ds,B&&(A=Math.cos(-B),R=Math.sin(-B),q=it*A+I*R,j=F*A+tt*R,gt=ft*A+dt*R,I=it*-R+I*A,tt=F*-R+tt*A,dt=ft*-R+dt*A,K=vt*-R+K*A,it=q,F=j,ft=gt),B=uo(-k,dt),x=B*ds,B&&(A=Math.cos(-B),R=Math.sin(-B),q=z*A-I*R,j=H*A-tt*R,gt=k*A-dt*R,K=Y*R+K*A,z=q,H=j,k=gt),B=uo(H,z),M=B*ds,B&&(A=Math.cos(B),R=Math.sin(B),q=z*A+H*R,j=it*A+F*R,H=H*A-z*R,F=F*A-it*R,z=q,it=j),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=ln(Math.sqrt(z*z+H*H+k*k)),E=ln(Math.sqrt(F*F+ft*ft)),B=uo(it,F),C=Math.abs(B)>2e-4?B*ds:0,b=K?1/(K<0?-K:K):0),r.svg&&(q=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!GS(zi(t,tn)),q&&t.setAttribute("transform",q))),Math.abs(C)>90&&Math.abs(C)<270&&(l?(y*=-1,C+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,C+=C<=0?180:-180)),n=n||r.uncache,r.x=m-((r.xPercent=m&&(!n&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+c,r.y=g-((r.yPercent=g&&(!n&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+c,r.z=v+c,r.scaleX=ln(y),r.scaleY=ln(E),r.rotation=ln(M)+f,r.rotationX=ln(S)+f,r.rotationY=ln(x)+f,r.skewX=C+f,r.skewY=w+f,r.transformPerspective=b+c,(r.zOrigin=parseFloat(d.split(" ")[2])||!n&&r.zOrigin||0)&&(s[ri]=Lf(d)),r.xOffset=r.yOffset=0,r.force3D=Si.force3D,r.renderTransform=r.svg?Zb:BS?VS:jb,r.uncache=0,r},Lf=function(t){return(t=t.split(" "))[0]+" "+t[1]},sp=function(t,n,r){var s=Xn(n);return ln(parseFloat(n)+parseFloat(za(t,"x",r+"px",s)))+s},jb=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,VS(t,n)},as="0deg",kl="0px",ss=") ",VS=function(t,n){var r=n||this,s=r.xPercent,l=r.yPercent,c=r.x,f=r.y,p=r.z,d=r.rotation,m=r.rotationY,g=r.rotationX,v=r.skewX,y=r.skewY,E=r.scaleX,M=r.scaleY,S=r.transformPerspective,x=r.force3D,C=r.target,w=r.zOrigin,b="",O=x==="auto"&&t&&t!==1||x===!0;if(w&&(g!==as||m!==as)){var P=parseFloat(m)*Do,L=Math.sin(P),B=Math.cos(P),A;P=parseFloat(g)*Do,A=Math.cos(P),c=sp(C,c,L*A*-w),f=sp(C,f,-Math.sin(P)*-w),p=sp(C,p,B*A*-w+w)}S!==kl&&(b+="perspective("+S+ss),(s||l)&&(b+="translate("+s+"%, "+l+"%) "),(O||c!==kl||f!==kl||p!==kl)&&(b+=p!==kl||O?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ss),d!==as&&(b+="rotate("+d+ss),m!==as&&(b+="rotateY("+m+ss),g!==as&&(b+="rotateX("+g+ss),(v!==as||y!==as)&&(b+="skew("+v+", "+y+ss),(E!==1||M!==1)&&(b+="scale("+E+", "+M+ss),C.style[tn]=b||"translate(0, 0)"},Zb=function(t,n){var r=n||this,s=r.xPercent,l=r.yPercent,c=r.x,f=r.y,p=r.rotation,d=r.skewX,m=r.skewY,g=r.scaleX,v=r.scaleY,y=r.target,E=r.xOrigin,M=r.yOrigin,S=r.xOffset,x=r.yOffset,C=r.forceCSS,w=parseFloat(c),b=parseFloat(f),O,P,L,B,A;p=parseFloat(p),d=parseFloat(d),m=parseFloat(m),m&&(m=parseFloat(m),d+=m,p+=m),p||d?(p*=Do,d*=Do,O=Math.cos(p)*g,P=Math.sin(p)*g,L=Math.sin(p-d)*-v,B=Math.cos(p-d)*v,d&&(m*=Do,A=Math.tan(d-m),A=Math.sqrt(1+A*A),L*=A,B*=A,m&&(A=Math.tan(m),A=Math.sqrt(1+A*A),O*=A,P*=A)),O=ln(O),P=ln(P),L=ln(L),B=ln(B)):(O=g,B=v,P=L=0),(w&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(w=za(y,"x",c,"px"),b=za(y,"y",f,"px")),(E||M||S||x)&&(w=ln(w+E-(E*O+M*L)+S),b=ln(b+M-(E*P+M*B)+x)),(s||l)&&(A=y.getBBox(),w=ln(w+s/100*A.width),b=ln(b+l/100*A.height)),A="matrix("+O+","+P+","+L+","+B+","+w+","+b+")",y.setAttribute("transform",A),C&&(y.style[tn]=A)},Kb=function(t,n,r,s,l){var c=360,f=Dn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?ds:1),d=p-s,m=s+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*gy)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*gy)%c-~~(d/c)*c)),t._pt=v=new ii(t._pt,n,r,s,d,Ob),v.e=m,v.u="deg",t._props.push(r),v},Ty=function(t,n){for(var r in n)t[r]=n[r];return t},Qb=function(t,n,r){var s=Ty({},r._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=r.style,f,p,d,m,g,v,y,E;s.svg?(d=r.getAttribute("transform"),r.setAttribute("transform",""),c[tn]=n,f=uu(r,1),Rs(r,tn),r.setAttribute("transform",d)):(d=getComputedStyle(r)[tn],c[tn]=n,f=uu(r,1),c[tn]=d);for(p in kr)d=s[p],m=f[p],d!==m&&l.indexOf(p)<0&&(y=Xn(d),E=Xn(m),g=y!==E?za(r,p,d,E):parseFloat(d),v=parseFloat(m),t._pt=new ii(t._pt,f,p,g,v-g,tm),t._pt.u=E||0,t._props.push(p));Ty(f,s)};ni("padding,margin,Width,Radius",function(o,t){var n="Top",r="Right",s="Bottom",l="Left",c=(t<3?[n,r,s,l]:[n+l,n+r,s+r,s+l]).map(function(f){return t<2?o+f:"border"+f+o});Uf[t>1?"border"+o:o]=function(f,p,d,m,g){var v,y;if(arguments.length<4)return v=c.map(function(E){return Br(f,E,d)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(m+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,y,g)}});var kS={name:"css",register:nm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,r,s,l){var c=this._props,f=t.style,p=r.vars.startAt,d,m,g,v,y,E,M,S,x,C,w,b,O,P,L,B;o_||nm(),this.styles=this.styles||zS(t),B=this.styles.props,this.tween=r;for(M in n)if(M!=="autoRound"&&(m=n[M],!(vi[M]&&bS(M,n,r,s,t,l)))){if(y=typeof m,E=Uf[M],y==="function"&&(m=m.call(r,s,t,l),y=typeof m),y==="string"&&~m.indexOf("random(")&&(m=au(m)),E)E(this,t,M,m,r)&&(L=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",La.lastIndex=0,La.test(d)||(S=Xn(d),x=Xn(m)),x?S!==x&&(d=za(t,M,d,x)+x):S&&(m+=S),this.add(f,"setProperty",d,m,s,l,0,0,M),c.push(M),B.push(M,0,f[M]);else if(y!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(r,s,t,l):p[M],Dn(d)&&~d.indexOf("random(")&&(d=au(d)),Xn(d+"")||d==="auto"||(d+=Si.units[M]||Xn(Br(t,M))||""),(d+"").charAt(1)==="="&&(d=Br(t,M))):d=Br(t,M),v=parseFloat(d),C=y==="string"&&m.charAt(1)==="="&&m.substr(0,2),C&&(m=m.substr(2)),g=parseFloat(m),M in sr&&(M==="autoAlpha"&&(v===1&&Br(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),Ca(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=sr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in kr,w){if(this.styles.save(M),y==="string"&&m.substring(0,6)==="var(--"&&(m=zi(t,m.substring(4,m.indexOf(")"))),g=parseFloat(m)),b||(O=t._gsap,O.renderTransform&&!n.parseTransform||uu(t,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,b=this._pt=new ii(this._pt,f,tn,0,1,O.renderTransform,O,0,-1),b.dep=1),M==="scale")this._pt=new ii(this._pt,O,"scaleY",O.scaleY,(C?wo(O.scaleY,C+g):g)-O.scaleY||0,tm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ri,0,f[ri]),m=Wb(m),O.svg?im(t,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==O.zOrigin&&Ca(this,O,"zOrigin",O.zOrigin,x),Ca(this,f,M,Lf(d),Lf(m)));continue}else if(M==="svgOrigin"){im(t,m,1,P,0,this);continue}else if(M in HS){Kb(this,O,M,v,C?wo(v,C+m):m);continue}else if(M==="smoothOrigin"){Ca(this,O,"smooth",O.smooth,m);continue}else if(M==="force3D"){O[M]=m;continue}else if(M==="transform"){Qb(this,m,t);continue}}else M in f||(M=Fo(M)||M);if(w||(g||g===0)&&(v||v===0)&&!Lb.test(m)&&M in f)S=(d+"").substr((v+"").length),g||(g=0),x=Xn(m)||(M in Si.units?Si.units[M]:S),S!==x&&(v=za(t,M,d,x)),this._pt=new ii(this._pt,w?O:f,M,v,(C?wo(v,C+g):g)-v,!w&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?Pb:tm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=Nb);else if(M in f)qb.call(this,t,M,d,C?C+m:m);else if(M in t)this.add(t,M,d||t[M],C?C+m:m,s,l);else if(M!=="parseTransform"){Qm(M,m);continue}w||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,d||t[M])),c.push(M)}}L&&US(this)},render:function(t,n){if(n.tween._time||!l_())for(var r=n._pt;r;)r.r(t,r.d),r=r._next;else n.styles.revert()},get:Br,aliases:sr,getSetter:function(t,n,r){var s=sr[n];return s&&s.indexOf(",")<0&&(n=s),n in kr&&n!==ri&&(t._gsap.x||Br(t,"x"))?r&&_y===r?n==="scale"?Fb:Ib:(_y=r||{})&&(n==="scale"?Hb:Gb):t.style&&!jm(t.style[n])?zb:~n.indexOf("-")?Bb:a_(t,n)},core:{_removeProperty:Rs,_getMatrix:c_}};oi.utils.checkPrefix=Fo;oi.core.getStyleSaver=zS;(function(o,t,n,r){var s=ni(o+","+t+","+n,function(l){kr[l]=1});ni(t,function(l){Si.units[l]="deg",HS[l]=1}),sr[s[13]]=o+","+t,ni(r,function(l){var c=l.split(":");sr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Si.units[o]="px"});oi.registerPlugin(kS);var Yi=oi.registerPlugin(kS)||oi;Yi.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let by=typeof document<"u"?$e.useLayoutEffect:$e.useEffect,Ay=o=>o&&!Array.isArray(o)&&typeof o=="object",Lc=[],Jb={},XS=Yi;const qo=(o,t=Lc)=>{let n=Jb;Ay(o)?(n=o,o=null,t="dependencies"in n?n.dependencies:Lc):Ay(t)&&(n=t,t="dependencies"in n?n.dependencies:Lc),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:r,revertOnUpdate:s}=n,l=$e.useRef(!1),c=$e.useRef(XS.context(()=>{},r)),f=$e.useRef(d=>c.current.add(null,d)),p=t&&t.length&&!s;return p&&by(()=>(l.current=!0,()=>c.current.revert()),Lc),by(()=>{if(o&&c.current.add(o,r),!p||!l.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};qo.register=o=>{XS=o};qo.headless=!0;const $b="_preloader_jkv3m_1",t1={preloader:$b},e1=({onComplete:o})=>{const t=$e.useRef(null),n=$e.useRef([]);return qo(()=>{const r=Yi.timeline({defaults:{ease:"power4.out"},onComplete:o});Yi.set(n.current,{y:225,opacity:0}),r.to(n.current,{y:0,opacity:1,stagger:.25,duration:1.2}),r.to(n.current,{y:-200,opacity:0,stagger:.2,duration:1.2},"+=1.5"),r.to(t.current,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",duration:1.5},"-=0.8")},[]),St.jsxs("div",{ref:t,className:t1.preloader,children:[St.jsx("h2",{ref:r=>{r&&(n.current[0]=r)},children:"Loading"}),St.jsx("h2",{ref:r=>{r&&(n.current[1]=r)},children:"Your"}),St.jsx("h2",{ref:r=>{r&&(n.current[2]=r)},children:"Experience"})]})};/*!
 * CSSRulePlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Da,rm,yf,Of,qS=function(){return typeof window<"u"},WS=function(){return Da||qS()&&(Da=window.gsap)&&Da.registerPlugin&&Da},Ry=function(){return rm||(YS(),Of||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),rm},YS=function(t){Da=t||WS(),qS()&&(yf=document),Da&&(Of=Da.plugins.css,Of&&(rm=1))},f_={version:"3.13.0",name:"cssRule",init:function(t,n,r,s,l){if(!Ry()||typeof t.cssText>"u")return!1;var c=t._gsProxy=t._gsProxy||yf.createElement("div");this.ss=t,this.style=c.style,c.style.cssText=t.cssText,Of.prototype.init.call(this,c,n,r,s,l)},render:function(t,n){for(var r=n._pt,s=n.style,l=n.ss,c;r;)r.r(t,r.d),r=r._next;for(c=s.length;--c>-1;)l[s[c]]=s[s[c]]},getRule:function(t){Ry();var n=yf.all?"rules":"cssRules",r=yf.styleSheets,s=r.length,l=t.charAt(0)===":",c,f,p,d;for(t=(l?"":",")+t.split("::").join(":").toLowerCase()+",",l&&(d=[]);s--;){try{if(f=r[s][n],!f)continue;c=f.length}catch(m){console.warn(m);continue}for(;--c>-1;)if(p=f[c],p.selectorText&&(","+p.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)!==-1)if(l)d.push(p.style);else return p.style}return d},register:YS};WS()&&Da.registerPlugin(f_);const n1="_nav_1pxk6_1",i1="_logo_1pxk6_35",r1="_burger_1pxk6_75",a1="_active_1pxk6_117",s1="_overlay_1pxk6_143",Gn={nav:n1,logo:i1,"toggle-btn":"_toggle-btn_1pxk6_65",burger:r1,active:a1,overlay:s1,"overlay-menu":"_overlay-menu_1pxk6_175","menu-item":"_menu-item_1pxk6_197","sub-nav":"_sub-nav_1pxk6_283"};var Ze={},Oc={},Nc={},Pc={},op,wy;function o1(){if(wy)return op;wy=1;var o="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,p=typeof Dc=="object"&&Dc&&Dc.Object===Object&&Dc,d=typeof self=="object"&&self&&self.Object===Object&&self,m=p||d||Function("return this")(),g=Object.prototype,v=g.toString,y=Math.max,E=Math.min,M=function(){return m.Date.now()};function S(P,L,B){var A,R,z,H,k,Y,it=0,F=!1,q=!1,j=!0;if(typeof P!="function")throw new TypeError(o);L=O(L)||0,C(B)&&(F=!!B.leading,q="maxWait"in B,z=q?y(O(B.maxWait)||0,L):z,j="trailing"in B?!!B.trailing:j);function gt(Tt){var Qt=A,Vt=R;return A=R=void 0,it=Tt,H=P.apply(Vt,Qt),H}function I(Tt){return it=Tt,k=setTimeout(vt,L),F?gt(Tt):H}function tt(Tt){var Qt=Tt-Y,Vt=Tt-it,Se=L-Qt;return q?E(Se,z-Vt):Se}function dt(Tt){var Qt=Tt-Y,Vt=Tt-it;return Y===void 0||Qt>=L||Qt<0||q&&Vt>=z}function vt(){var Tt=M();if(dt(Tt))return K(Tt);k=setTimeout(vt,tt(Tt))}function K(Tt){return k=void 0,j&&A?gt(Tt):(A=R=void 0,H)}function ft(){k!==void 0&&clearTimeout(k),it=0,A=Y=R=k=void 0}function Mt(){return k===void 0?H:K(M())}function wt(){var Tt=M(),Qt=dt(Tt);if(A=arguments,R=this,Y=Tt,Qt){if(k===void 0)return I(Y);if(q)return k=setTimeout(vt,L),gt(Y)}return k===void 0&&(k=setTimeout(vt,L)),H}return wt.cancel=ft,wt.flush=Mt,wt}function x(P,L,B){var A=!0,R=!0;if(typeof P!="function")throw new TypeError(o);return C(B)&&(A="leading"in B?!!B.leading:A,R="trailing"in B?!!B.trailing:R),S(P,L,{leading:A,maxWait:L,trailing:R})}function C(P){var L=typeof P;return!!P&&(L=="object"||L=="function")}function w(P){return!!P&&typeof P=="object"}function b(P){return typeof P=="symbol"||w(P)&&v.call(P)==n}function O(P){if(typeof P=="number")return P;if(b(P))return t;if(C(P)){var L=typeof P.valueOf=="function"?P.valueOf():P;P=C(L)?L+"":L}if(typeof P!="string")return P===0?P:+P;P=P.replace(r,"");var B=l.test(P);return B||c.test(P)?f(P.slice(2),B?2:8):s.test(P)?t:+P}return op=x,op}var Xl={},Cy;function h_(){if(Cy)return Xl;Cy=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.addPassiveEventListener=function(n,r,s){var l=s.name;l||(l=r,console.warn("Listener must be a named function.")),o.has(r)||o.set(r,new Set);var c=o.get(r);if(!c.has(l)){var f=function(){var p=!1;try{var d=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,d)}catch{}return p}();n.addEventListener(r,s,f?{passive:!0}:!1),c.add(l)}},Xl.removePassiveEventListener=function(n,r,s){n.removeEventListener(r,s),o.get(r).delete(s.name||r)};var o=new Map;return Xl}var Dy;function d_(){if(Dy)return Pc;Dy=1,Object.defineProperty(Pc,"__esModule",{value:!0});var o=o1(),t=r(o),n=h_();function r(c){return c&&c.__esModule?c:{default:c}}var s=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(f,p)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,p){if(f){var d=s(function(m){l.scrollHandler(f)},p);return l.scrollSpyContainers.push(f),(0,n.addPassiveEventListener)(f,"scroll",d),function(){(0,n.removePassiveEventListener)(f,"scroll",d),l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(f),1)}}return function(){}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var p=window.scrollY!==void 0,d=(document.compatMode||"")==="CSS1Compat";return p?window.scrollX:d?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var p=window.scrollX!==void 0,d=(document.compatMode||"")==="CSS1Compat";return p?window.scrollY:d?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var p=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];p.forEach(function(d){return d(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,p){var d=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(p)];d.spyCallbacks||(d.spyCallbacks=[]),d.spyCallbacks.push(f)},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,p){l.scrollSpyContainers.forEach(function(d){return d.spyCallbacks&&d.spyCallbacks.length&&d.spyCallbacks.indexOf(p)>-1&&d.spyCallbacks.splice(d.spyCallbacks.indexOf(p),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return Pc.default=l,Pc}var zc={},Bc={},Uy;function Hf(){if(Uy)return Bc;Uy=1,Object.defineProperty(Bc,"__esModule",{value:!0});var o=function(f,p){var d=f.indexOf("#")===0?f.substring(1):f,m=d?"#"+d:"",g=window&&window.location,v=m?g.pathname+g.search+m:g.pathname+g.search;p?history.pushState(history.state,"",v):history.replaceState(history.state,"",v)},t=function(){return window.location.hash.replace(/^#/,"")},n=function(f){return function(p){return f.contains?f!=p&&f.contains(p):!!(f.compareDocumentPosition(p)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},s=function(f,p){for(var d=f.offsetTop,m=f.offsetParent;m&&!p(m);)d+=m.offsetTop,m=m.offsetParent;return{offsetTop:d,offsetParent:m}},l=function(f,p,d){if(d)return f===document?p.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?p.offsetLeft:p.offsetLeft-f.offsetLeft;if(f===document)return p.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(p.offsetParent!==f){var m=function(S){return S===f||S===document},g=s(p,m),v=g.offsetTop,y=g.offsetParent;if(y!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return v}return p.offsetTop}if(p.offsetParent===f.offsetParent)return p.offsetTop-f.offsetTop;var E=function(S){return S===document};return s(p,E).offsetTop-s(f,E).offsetTop};return Bc.default={updateHash:o,getHash:t,filterElementInContainer:n,scrollOffset:l},Bc}var Ic={},Fc={},Ly;function l1(){return Ly||(Ly=1,Object.defineProperty(Fc,"__esModule",{value:!0}),Fc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),Fc}var Hc={},Oy;function u1(){if(Oy)return Hc;Oy=1,Object.defineProperty(Hc,"__esModule",{value:!0});var o=h_(),t=["mousedown","wheel","touchmove","keydown"];return Hc.default={subscribe:function(r){return typeof document<"u"&&t.forEach(function(s){return(0,o.addPassiveEventListener)(document,s,r)})}},Hc}var Gc={},Ny;function p_(){if(Ny)return Gc;Ny=1,Object.defineProperty(Gc,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(n,r){o.registered[n]=r},remove:function(n){o.registered[n]=null}}};return Gc.default=o,Gc}var Py;function jS(){if(Py)return Ic;Py=1,Object.defineProperty(Ic,"__esModule",{value:!0});var o=Object.assign||function(R){for(var z=1;z<arguments.length;z++){var H=arguments[z];for(var k in H)Object.prototype.hasOwnProperty.call(H,k)&&(R[k]=H[k])}return R},t=Hf();p(t);var n=l1(),r=p(n),s=u1(),l=p(s),c=p_(),f=p(c);function p(R){return R&&R.__esModule?R:{default:R}}var d=function(z){return r.default[z.smooth]||r.default.defaultEasing},m=function(z){return typeof z=="function"?z:function(){return z}},g=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},v=function(){return g()||function(R,z,H){window.setTimeout(R,H||1e3/60,new Date().getTime())}}(),y=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},E=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollLeft;var k=window.pageXOffset!==void 0,Y=(document.compatMode||"")==="CSS1Compat";return k?window.pageXOffset:Y?document.documentElement.scrollLeft:document.body.scrollLeft},M=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollTop;var k=window.pageXOffset!==void 0,Y=(document.compatMode||"")==="CSS1Compat";return k?window.pageYOffset:Y?document.documentElement.scrollTop:document.body.scrollTop},S=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollWidth-H.offsetWidth;var k=document.body,Y=document.documentElement;return Math.max(k.scrollWidth,k.offsetWidth,Y.clientWidth,Y.scrollWidth,Y.offsetWidth)},x=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollHeight-H.offsetHeight;var k=document.body,Y=document.documentElement;return Math.max(k.scrollHeight,k.offsetHeight,Y.clientHeight,Y.scrollHeight,Y.offsetHeight)},C=function R(z,H,k){var Y=H.data;if(!H.ignoreCancelEvents&&Y.cancel){f.default.registered.end&&f.default.registered.end(Y.to,Y.target,Y.currentPositionY);return}if(Y.delta=Math.round(Y.targetPosition-Y.startPosition),Y.start===null&&(Y.start=k),Y.progress=k-Y.start,Y.percent=Y.progress>=Y.duration?1:z(Y.progress/Y.duration),Y.currentPosition=Y.startPosition+Math.ceil(Y.delta*Y.percent),Y.containerElement&&Y.containerElement!==document&&Y.containerElement!==document.body?H.horizontal?Y.containerElement.scrollLeft=Y.currentPosition:Y.containerElement.scrollTop=Y.currentPosition:H.horizontal?window.scrollTo(Y.currentPosition,0):window.scrollTo(0,Y.currentPosition),Y.percent<1){var it=R.bind(null,z,H);v.call(window,it);return}f.default.registered.end&&f.default.registered.end(Y.to,Y.target,Y.currentPosition)},w=function(z){z.data.containerElement=z?z.containerId?document.getElementById(z.containerId):z.container&&z.container.nodeType?z.container:document:null},b=function(z,H,k,Y){H.data=H.data||y(),window.clearTimeout(H.data.delayTimeout);var it=function(){H.data.cancel=!0};if(l.default.subscribe(it),w(H),H.data.start=null,H.data.cancel=!1,H.data.startPosition=H.horizontal?E(H):M(H),H.data.targetPosition=H.absolute?z:z+H.data.startPosition,H.data.startPosition===H.data.targetPosition){f.default.registered.end&&f.default.registered.end(H.data.to,H.data.target,H.data.currentPosition);return}H.data.delta=Math.round(H.data.targetPosition-H.data.startPosition),H.data.duration=m(H.duration)(H.data.delta),H.data.duration=isNaN(parseFloat(H.data.duration))?1e3:parseFloat(H.data.duration),H.data.to=k,H.data.target=Y;var F=d(H),q=C.bind(null,F,H);if(H&&H.delay>0){H.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),v.call(window,q)},H.delay);return}f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),v.call(window,q)},O=function(z){return z=o({},z),z.data=z.data||y(),z.absolute=!0,z},P=function(z){b(0,O(z))},L=function(z,H){b(z,O(H))},B=function(z){z=O(z),w(z),b(z.horizontal?S(z):x(z),z)},A=function(z,H){H=O(H),w(H);var k=H.horizontal?E(H):M(H);b(z+k,H)};return Ic.default={animateTopScroll:b,getAnimationType:d,scrollToTop:P,scrollToBottom:B,scrollTo:L,scrollMore:A},Ic}var zy;function Gf(){if(zy)return zc;zy=1,Object.defineProperty(zc,"__esModule",{value:!0});var o=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var v=arguments[g];for(var y in v)Object.prototype.hasOwnProperty.call(v,y)&&(m[y]=v[y])}return m},t=Hf(),n=f(t),r=jS(),s=f(r),l=p_(),c=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var p={},d=void 0;return zc.default={unmount:function(){p={}},register:function(g,v){p[g]=v},unregister:function(g){delete p[g]},get:function(g){return p[g]||document.getElementById(g)||document.getElementsByName(g)[0]||document.getElementsByClassName(g)[0]},setActiveLink:function(g){return d=g},getActiveLink:function(){return d},scrollTo:function(g,v){var y=this.get(g);if(!y){console.warn("target Element not found");return}v=o({},v,{absolute:!1});var E=v.containerId,M=v.container,S=void 0;E?S=document.getElementById(E):M&&M.nodeType?S=M:S=document,v.absolute=!0;var x=v.horizontal,C=n.default.scrollOffset(S,y,x)+(v.offset||0);if(!v.smooth){c.default.registered.begin&&c.default.registered.begin(g,y),S===document?v.horizontal?window.scrollTo(C,0):window.scrollTo(0,C):S.scrollTop=C,c.default.registered.end&&c.default.registered.end(g,y);return}s.default.animateTopScroll(C,v,g,y)}},zc}var lp={exports:{}},up,By;function c1(){if(By)return up;By=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return up=o,up}var cp,Iy;function f1(){if(Iy)return cp;Iy=1;var o=c1();function t(){}function n(){}return n.resetWarningCache=t,cp=function(){function r(c,f,p,d,m,g){if(g!==o){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function s(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},cp}var Fy;function Vf(){return Fy||(Fy=1,lp.exports=f1()()),lp.exports}var Vc={},Hy;function ZS(){if(Hy)return Vc;Hy=1,Object.defineProperty(Vc,"__esModule",{value:!0}),h_();var o=Hf(),t=n(o);function n(s){return s&&s.__esModule?s:{default:s}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,c){this.containers[l]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,c=this.getHash();c?window.setTimeout(function(){l.scrollTo(c,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,c){var f=this.scroller,p=f.get(l);if(p&&(c||l!==f.getActiveLink())){var d=this.containers[l]||document;f.scrollTo(l,{container:d})}},getHash:function(){return t.default.getHash()},changeHash:function(l,c){this.isInitialized()&&t.default.getHash()!==l&&t.default.updateHash(l,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Vc.default=r,Vc}var Gy;function m_(){if(Gy)return Nc;Gy=1,Object.defineProperty(Nc,"__esModule",{value:!0});var o=Object.assign||function(x){for(var C=1;C<arguments.length;C++){var w=arguments[C];for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&(x[b]=w[b])}return x},t=function(){function x(C,w){for(var b=0;b<w.length;b++){var O=w[b];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(C,O.key,O)}}return function(C,w,b){return w&&x(C.prototype,w),b&&x(C,b),C}}(),n=qr(),r=v(n),s=d_(),l=v(s),c=Gf(),f=v(c),p=Vf(),d=v(p),m=ZS(),g=v(m);function v(x){return x&&x.__esModule?x:{default:x}}function y(x,C){if(!(x instanceof C))throw new TypeError("Cannot call a class as a function")}function E(x,C){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C&&(typeof C=="object"||typeof C=="function")?C:x}function M(x,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof C);x.prototype=Object.create(C&&C.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),C&&(Object.setPrototypeOf?Object.setPrototypeOf(x,C):x.__proto__=C)}var S={to:d.default.string.isRequired,containerId:d.default.string,container:d.default.object,activeClass:d.default.string,activeStyle:d.default.object,spy:d.default.bool,horizontal:d.default.bool,smooth:d.default.oneOfType([d.default.bool,d.default.string]),offset:d.default.number,delay:d.default.number,isDynamic:d.default.bool,onClick:d.default.func,duration:d.default.oneOfType([d.default.number,d.default.func]),absolute:d.default.bool,onSetActive:d.default.func,onSetInactive:d.default.func,ignoreCancelEvents:d.default.bool,hashSpy:d.default.bool,saveHashHistory:d.default.bool,spyThrottle:d.default.number};return Nc.default=function(x,C){var w=C||f.default,b=function(P){M(L,P);function L(B){y(this,L);var A=E(this,(L.__proto__||Object.getPrototypeOf(L)).call(this,B));return O.call(A),A.state={active:!1},A.beforeUnmountCallbacks=[],A}return t(L,[{key:"getScrollSpyContainer",value:function(){var A=this.props.containerId,R=this.props.container;return A&&!R?document.getElementById(A):R&&R.nodeType?R:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var A=this.getScrollSpyContainer();if(!l.default.isMounted(A)){var R=l.default.mount(A,this.props.spyThrottle);this.beforeUnmountCallbacks.push(R)}this.props.hashSpy&&(g.default.isMounted()||g.default.mount(w),g.default.mapContainer(this.props.to,A)),l.default.addSpyHandler(this.spyHandler,A),this.setState({container:A})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(A){return A()})}},{key:"render",value:function(){var A="";this.state&&this.state.active?A=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():A=this.props.className;var R={};this.state&&this.state.active?R=o({},this.props.style,this.props.activeStyle):R=o({},this.props.style);var z=o({},this.props);for(var H in S)z.hasOwnProperty(H)&&delete z[H];return z.className=A,z.style=R,z.onClick=this.handleClick,r.default.createElement(x,z)}}]),L}(r.default.PureComponent),O=function(){var L=this;this.scrollTo=function(B,A){w.scrollTo(B,o({},L.state,A))},this.handleClick=function(B){L.props.onClick&&L.props.onClick(B),B.stopPropagation&&B.stopPropagation(),B.preventDefault&&B.preventDefault(),L.scrollTo(L.props.to,L.props)},this.spyHandler=function(B,A){var R=L.getScrollSpyContainer();if(!(g.default.isMounted()&&!g.default.isInitialized())){var z=L.props.horizontal,H=L.props.to,k=null,Y=void 0,it=void 0;if(z){var F=0,q=0,j=0;if(R.getBoundingClientRect){var gt=R.getBoundingClientRect();j=gt.left}if(!k||L.props.isDynamic){if(k=w.get(H),!k)return;var I=k.getBoundingClientRect();F=I.left-j+B,q=F+I.width}var tt=B-L.props.offset;Y=tt>=Math.floor(F)&&tt<Math.floor(q),it=tt<Math.floor(F)||tt>=Math.floor(q)}else{var dt=0,vt=0,K=0;if(R.getBoundingClientRect){var ft=R.getBoundingClientRect();K=ft.top}if(!k||L.props.isDynamic){if(k=w.get(H),!k)return;var Mt=k.getBoundingClientRect();dt=Mt.top-K+A,vt=dt+Mt.height}var wt=A-L.props.offset;Y=wt>=Math.floor(dt)&&wt<Math.floor(vt),it=wt<Math.floor(dt)||wt>=Math.floor(vt)}var Tt=w.getActiveLink();if(it){if(H===Tt&&w.setActiveLink(void 0),L.props.hashSpy&&g.default.getHash()===H){var Qt=L.props.saveHashHistory,Vt=Qt===void 0?!1:Qt;g.default.changeHash("",Vt)}L.props.spy&&L.state.active&&(L.setState({active:!1}),L.props.onSetInactive&&L.props.onSetInactive(H,k))}if(Y&&(Tt!==H||L.state.active===!1)){w.setActiveLink(H);var Se=L.props.saveHashHistory,Le=Se===void 0?!1:Se;L.props.hashSpy&&g.default.changeHash(H,Le),L.props.spy&&(L.setState({active:!0}),L.props.onSetActive&&L.props.onSetActive(H,k))}}}};return b.propTypes=S,b.defaultProps={offset:0},b},Nc}var Vy;function h1(){if(Vy)return Oc;Vy=1,Object.defineProperty(Oc,"__esModule",{value:!0});var o=qr(),t=s(o),n=m_(),r=s(n);function s(d){return d&&d.__esModule?d:{default:d}}function l(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")}function c(d,m){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:d}function f(d,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);d.prototype=Object.create(m&&m.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(d,m):d.__proto__=m)}var p=function(d){f(m,d);function m(){var g,v,y,E;l(this,m);for(var M=arguments.length,S=Array(M),x=0;x<M;x++)S[x]=arguments[x];return E=(v=(y=c(this,(g=m.__proto__||Object.getPrototypeOf(m)).call.apply(g,[this].concat(S))),y),y.render=function(){return t.default.createElement("a",y.props,y.props.children)},v),c(y,E)}return m}(t.default.Component);return Oc.default=(0,r.default)(p),Oc}var kc={},ky;function d1(){if(ky)return kc;ky=1,Object.defineProperty(kc,"__esModule",{value:!0});var o=function(){function m(g,v){for(var y=0;y<v.length;y++){var E=v[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(g,E.key,E)}}return function(g,v,y){return v&&m(g.prototype,v),y&&m(g,y),g}}(),t=qr(),n=l(t),r=m_(),s=l(r);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function f(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:m}function p(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var d=function(m){p(g,m);function g(){return c(this,g),f(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return o(g,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),g}(n.default.Component);return kc.default=(0,s.default)(d),kc}var Xc={},qc={},Xy;function KS(){if(Xy)return qc;Xy=1,Object.defineProperty(qc,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=qr(),r=d(n),s=Wm();d(s);var l=Gf(),c=d(l),f=Vf(),p=d(f);function d(y){return y&&y.__esModule?y:{default:y}}function m(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function g(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function v(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}return qc.default=function(y){var E=function(M){v(S,M);function S(x){m(this,S);var C=g(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return C.childBindings={domNode:null},C}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(C){this.props.name!==C.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(C){c.default.register(C,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(r.default.Component);return E.propTypes={name:p.default.string,id:p.default.string},E},qc}var qy;function p1(){if(qy)return Xc;qy=1,Object.defineProperty(Xc,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=qr(),r=p(n),s=KS(),l=p(s),c=Vf(),f=p(c);function p(y){return y&&y.__esModule?y:{default:y}}function d(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function m(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function g(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}var v=function(y){g(E,y);function E(){return d(this,E),m(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return t(E,[{key:"render",value:function(){var S=this,x=o({},this.props);return delete x.name,x.parentBindings&&delete x.parentBindings,r.default.createElement("div",o({},x,{ref:function(w){S.props.parentBindings.domNode=w}}),this.props.children)}}]),E}(r.default.Component);return v.propTypes={name:f.default.string,id:f.default.string},Xc.default=(0,l.default)(v),Xc}var fp,Wy;function m1(){if(Wy)return fp;Wy=1;var o=Object.assign||function(v){for(var y=1;y<arguments.length;y++){var E=arguments[y];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(v[M]=E[M])}return v},t=function(){function v(y,E){for(var M=0;M<E.length;M++){var S=E[M];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,E,M){return E&&v(y.prototype,E),M&&v(y,M),y}}();function n(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function r(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:v}function s(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var l=qr();Wm(),Hf();var c=d_(),f=Gf(),p=Vf(),d=ZS(),m={to:p.string.isRequired,containerId:p.string,container:p.object,activeClass:p.string,spy:p.bool,smooth:p.oneOfType([p.bool,p.string]),offset:p.number,delay:p.number,isDynamic:p.bool,onClick:p.func,duration:p.oneOfType([p.number,p.func]),absolute:p.bool,onSetActive:p.func,onSetInactive:p.func,ignoreCancelEvents:p.bool,hashSpy:p.bool,spyThrottle:p.number},g={Scroll:function(y,E){console.warn("Helpers.Scroll is deprecated since v1.7.0");var M=E||f,S=function(C){s(w,C);function w(b){n(this,w);var O=r(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,b));return x.call(O),O.state={active:!1},O}return t(w,[{key:"getScrollSpyContainer",value:function(){var O=this.props.containerId,P=this.props.container;return O?document.getElementById(O):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var O=this.getScrollSpyContainer();c.isMounted(O)||c.mount(O,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(M),d.mapContainer(this.props.to,O)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,O),this.setState({container:O})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var O="";this.state&&this.state.active?O=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():O=this.props.className;var P=o({},this.props);for(var L in m)P.hasOwnProperty(L)&&delete P[L];return P.className=O,P.onClick=this.handleClick,l.createElement(y,P)}}]),w}(l.Component),x=function(){var w=this;this.scrollTo=function(b,O){M.scrollTo(b,o({},w.state,O))},this.handleClick=function(b){w.props.onClick&&w.props.onClick(b),b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault(),w.scrollTo(w.props.to,w.props)},this.stateHandler=function(){M.getActiveLink()!==w.props.to&&(w.state!==null&&w.state.active&&w.props.onSetInactive&&w.props.onSetInactive(),w.setState({active:!1}))},this.spyHandler=function(b){var O=w.getScrollSpyContainer();if(!(d.isMounted()&&!d.isInitialized())){var P=w.props.to,L=null,B=0,A=0,R=0;if(O.getBoundingClientRect){var z=O.getBoundingClientRect();R=z.top}if(!L||w.props.isDynamic){if(L=M.get(P),!L)return;var H=L.getBoundingClientRect();B=H.top-R+b,A=B+H.height}var k=b-w.props.offset,Y=k>=Math.floor(B)&&k<Math.floor(A),it=k<Math.floor(B)||k>=Math.floor(A),F=M.getActiveLink();if(it)return P===F&&M.setActiveLink(void 0),w.props.hashSpy&&d.getHash()===P&&d.changeHash(),w.props.spy&&w.state.active&&(w.setState({active:!1}),w.props.onSetInactive&&w.props.onSetInactive()),c.updateStates();if(Y&&F!==P)return M.setActiveLink(P),w.props.hashSpy&&d.changeHash(P),w.props.spy&&(w.setState({active:!0}),w.props.onSetActive&&w.props.onSetActive(P)),c.updateStates()}}};return S.propTypes=m,S.defaultProps={offset:0},S},Element:function(y){console.warn("Helpers.Element is deprecated since v1.7.0");var E=function(M){s(S,M);function S(x){n(this,S);var C=r(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return C.childBindings={domNode:null},C}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(C){this.props.name!==C.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(C){f.register(C,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(l.Component);return E.propTypes={name:p.string,id:p.string},E}};return fp=g,fp}var Yy;function _1(){if(Yy)return Ze;Yy=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.Helpers=Ze.ScrollElement=Ze.ScrollLink=Ze.animateScroll=Ze.scrollSpy=Ze.Events=Ze.scroller=Ze.Element=Ze.Button=Ze.Link=void 0;var o=h1(),t=b(o),n=d1(),r=b(n),s=p1(),l=b(s),c=Gf(),f=b(c),p=p_(),d=b(p),m=d_(),g=b(m),v=jS(),y=b(v),E=m_(),M=b(E),S=KS(),x=b(S),C=m1(),w=b(C);function b(O){return O&&O.__esModule?O:{default:O}}return Ze.Link=t.default,Ze.Button=r.default,Ze.Element=l.default,Ze.scroller=f.default,Ze.Events=d.default,Ze.scrollSpy=g.default,Ze.animateScroll=y.default,Ze.ScrollLink=M.default,Ze.ScrollElement=x.default,Ze.Helpers=w.default,Ze.default={Link:t.default,Button:r.default,Element:l.default,scroller:f.default,Events:d.default,scrollSpy:g.default,animateScroll:y.default,ScrollLink:M.default,ScrollElement:x.default,Helpers:w.default},Ze}var bs=_1();Yi.registerPlugin(qo,f_);const g1=()=>{const[o,t]=$e.useState(!1),[n,r]=$e.useState(null),s=$e.useRef(null),l=$e.useRef([]),c=$e.useRef(null),f=$e.useRef(null),p=$e.useRef(null);qo(()=>{Yi.set(l.current,{y:1e3}),Yi.set(f.current,{opacity:0,bottom:"5%"});const g=Yi.timeline({paused:!0});g.to(s.current,{duration:1.5,clipPath:"polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",ease:"power4.inOut"}),g.to(l.current,{duration:1,y:0,stagger:.2,ease:"power4.inOut"},"-=1"),g.to(f.current,{bottom:"10%",opacity:1,duration:.5,delay:.5},"<"),p.current=g},[]);const d=()=>{p.current&&(o?p.current.reverse():p.current.play(),t(!o))},m=g=>{if(!p.current)return;r(g);const v=f_.getRule(`.${Gn["menu-item"]} p.${Gn.active}::after`);v&&Yi.fromTo(v,{width:"0%"},{width:"100%",duration:1,ease:"power2.out"}),p.current.reverse().eventCallback("onReverseComplete",()=>{r(null),f.current&&Yi.set(f.current,{opacity:0,bottom:"5%"})}),t(!1)};return St.jsxs(St.Fragment,{children:[St.jsxs("nav",{className:Gn.nav,role:"navigation","aria-label":"main-nav",children:[St.jsx("div",{}),St.jsx("div",{className:Gn.logo,children:St.jsx("a",{href:"./",children:"s. rivera"})}),St.jsx("div",{className:Gn["toggle-btn"],children:St.jsxs("button",{className:`${Gn.burger} ${o?Gn.active:""}`,onClick:d,ref:c,"aria-label":"Toggle menu",children:[St.jsx("span",{})," ",St.jsx("span",{}),St.jsx("span",{})]})})]}),St.jsxs("div",{ref:s,className:Gn.overlay,children:[St.jsxs("menu",{className:Gn["overlay-menu"],children:[St.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[0]=g)},children:St.jsx("p",{className:n==="hero"?Gn.active:"",children:St.jsx(bs.Link,{to:"hero",spy:!0,smooth:!0,duration:500,onClick:()=>m("hero"),children:"home"})})}),St.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[1]=g)},children:St.jsx("p",{className:n==="projects"?Gn.active:"",children:St.jsx(bs.Link,{to:"projects",spy:!0,smooth:!0,duration:500,onClick:()=>m("projects"),children:"work"})})}),St.jsx("div",{className:Gn["menu-item"],ref:g=>{g&&(l.current[2]=g)},children:St.jsx("p",{className:n==="footer"?Gn.active:"",children:St.jsx(bs.Link,{to:"footer",spy:!0,smooth:!0,duration:500,onClick:()=>m("footer"),children:"contact"})})})]}),St.jsxs("div",{className:Gn["sub-nav"],ref:f,children:[St.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane","aria-label":"email"}),St.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in",target:"_blank","aria-label":"linkedin"}),St.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github",target:"_blank","aria-label":"github"}),St.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen",target:"_blank","aria-label":"codepen"}),St.jsx("a",{href:"https://www.youtube.com/@dnbsammie",className:"fa-brands fa-youtube",target:"_blank","aria-label":"youtube"})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const __="178",v1=0,jy=1,y1=2,QS=1,x1=2,Pr=3,Ba=0,ai=1,Ir=2,Oa=0,Uo=1,Zy=2,Ky=3,Qy=4,S1=5,_s=100,M1=101,E1=102,T1=103,b1=104,A1=200,R1=201,w1=202,C1=203,am=204,sm=205,D1=206,U1=207,L1=208,O1=209,N1=210,P1=211,z1=212,B1=213,I1=214,om=0,lm=1,um=2,Ho=3,cm=4,fm=5,hm=6,dm=7,JS=0,F1=1,H1=2,Na=0,G1=1,V1=2,k1=3,X1=4,q1=5,W1=6,Y1=7,$S=300,Go=301,Vo=302,pm=303,mm=304,kf=306,_m=1e3,ys=1001,gm=1002,Ki=1003,j1=1004,Wc=1005,Bi=1006,hp=1007,xs=1008,Xr=1009,tM=1010,eM=1011,cu=1012,g_=1013,ws=1014,Fr=1015,Wo=1016,v_=1017,y_=1018,fu=1020,nM=35902,iM=1021,rM=1022,Ii=1023,hu=1026,du=1027,aM=1028,x_=1029,sM=1030,S_=1031,M_=1033,xf=33776,Sf=33777,Mf=33778,Ef=33779,vm=35840,ym=35841,xm=35842,Sm=35843,Mm=36196,Em=37492,Tm=37496,bm=37808,Am=37809,Rm=37810,wm=37811,Cm=37812,Dm=37813,Um=37814,Lm=37815,Om=37816,Nm=37817,Pm=37818,zm=37819,Bm=37820,Im=37821,Tf=36492,Fm=36494,Hm=36495,oM=36283,Gm=36284,Vm=36285,km=36286,Z1=3200,K1=3201,Q1=0,J1=1,Aa="",Oi="srgb",ko="srgb-linear",Nf="linear",He="srgb",co=7680,Jy=519,$1=512,tA=513,eA=514,lM=515,nA=516,iA=517,rA=518,aA=519,$y=35044,tx="300 es",Hr=2e3,Pf=2001;class Yo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const s=r[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const s=r.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dp=Math.PI/180,Xm=180/Math.PI;function mu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function sA(o,t){return(o%t+t)%t}function pp(o,t,n){return(1-n)*o+n*t}function ql(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(t=0,n=0){Ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,s=t.elements;return this.x=s[0]*n+s[3]*r+s[6],this.y=s[1]*n+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*r-c*s+t.x,this.y=l*s+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _u{constructor(t=0,n=0,r=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=s}static slerpFlat(t,n,r,s,l,c,f){let p=r[s+0],d=r[s+1],m=r[s+2],g=r[s+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=m,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(g!==M||p!==v||d!==y||m!==E){let S=1-f;const x=p*v+d*y+m*E+g*M,C=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,x*C);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const b=f*C;if(p=p*S+v*b,d=d*S+y*b,m=m*S+E*b,g=g*S+M*b,S===1-f){const O=1/Math.sqrt(p*p+d*d+m*m+g*g);p*=O,d*=O,m*=O,g*=O}}t[n]=p,t[n+1]=d,t[n+2]=m,t[n+3]=g}static multiplyQuaternionsFlat(t,n,r,s,l,c){const f=r[s],p=r[s+1],d=r[s+2],m=r[s+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+m*g+p*y-d*v,t[n+1]=p*E+m*v+d*g-f*y,t[n+2]=d*E+m*y+f*v-p*g,t[n+3]=m*E-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,s){return this._x=t,this._y=n,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(r/2),m=f(s/2),g=f(l/2),v=p(r/2),y=p(s/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*g+d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g-v*y*E;break;case"YXZ":this._x=v*m*g+d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g+v*y*E;break;case"ZXY":this._x=v*m*g-d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g-v*y*E;break;case"ZYX":this._x=v*m*g-d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g+v*y*E;break;case"YZX":this._x=v*m*g+d*y*E,this._y=d*y*g+v*m*E,this._z=d*m*E-v*y*g,this._w=d*m*g-v*y*E;break;case"XZY":this._x=v*m*g-d*y*E,this._y=d*y*g-v*m*E,this._z=d*m*E+v*y*g,this._w=d*m*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,s=Math.sin(r);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],m=n[6],g=n[10],v=r+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(m-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const s=Math.min(1,n/r);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,s=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,m=n._w;return this._x=r*m+c*f+s*d-l*p,this._y=s*m+c*p+l*f-r*d,this._z=l*m+c*d+r*p-s*f,this._w=c*m-r*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+r*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=r,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),m=Math.atan2(d,f),g=Math.sin((1-n)*m)/d,v=Math.sin(n*m)/d;return this._w=c*g+this._w*v,this._x=r*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,r=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ex.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ex.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6]*s,this.y=l[1]*n+l[4]*r+l[7]*s,this.z=l[2]*n+l[5]*r+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*r+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,s=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*r),m=2*(f*n-l*s),g=2*(l*r-c*n);return this.x=n+p*d+c*g-f*m,this.y=r+p*m+f*d-l*g,this.z=s+p*g+l*m-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*r+l[8]*s,this.y=l[1]*n+l[5]*r+l[9]*s,this.z=l[2]*n+l[6]*r+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,s=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-r*p,this.z=r*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return mp.copy(this).projectOnVector(t),this.sub(mp)}reflect(t){return this.sub(mp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return n*n+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const s=Math.sin(n)*t;return this.x=s*Math.sin(r),this.y=Math.cos(n)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mp=new ut,ex=new _u;class oe{constructor(t,n,r,s,l,c,f,p,d){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,s,l,c,f,p,d)}set(t,n,r,s,l,c,f,p,d){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=p,m[6]=r,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,l=this.elements,c=r[0],f=r[3],p=r[6],d=r[1],m=r[4],g=r[7],v=r[2],y=r[5],E=r[8],M=s[0],S=s[3],x=s[6],C=s[1],w=s[4],b=s[7],O=s[2],P=s[5],L=s[8];return l[0]=c*M+f*C+p*O,l[3]=c*S+f*w+p*P,l[6]=c*x+f*b+p*L,l[1]=d*M+m*C+g*O,l[4]=d*S+m*w+g*P,l[7]=d*x+m*b+g*L,l[2]=v*M+y*C+E*O,l[5]=v*S+y*w+E*P,l[8]=v*x+y*b+E*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],m=t[8];return n*c*m-n*f*d-r*l*m+r*f*p+s*l*d-s*c*p}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],m=t[8],g=m*c-f*d,v=f*p-m*l,y=d*l-c*p,E=n*g+r*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(s*d-m*r)*M,t[2]=(f*r-s*c)*M,t[3]=v*M,t[4]=(m*n-s*p)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(r*p-d*n)*M,t[8]=(c*n-r*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(r*p,r*d,-r*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(_p.makeScale(t,n)),this}rotate(t){return this.premultiply(_p.makeRotation(-t)),this}translate(t,n){return this.premultiply(_p.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<9;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _p=new oe;function uM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function zf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oA(){const o=zf("canvas");return o.style.display="block",o}const nx={};function Lo(o){o in nx||(nx[o]=!0,console.warn(o))}function lA(o,t,n){return new Promise(function(r,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function uA(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cA(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ix=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rx=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fA(){const o={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(s.r=Oo(s.r),s.g=Oo(s.g),s.b=Oo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Aa?Nf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ko]:{primaries:t,whitePoint:r,transfer:Nf,toXYZ:ix,fromXYZ:rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:ix,fromXYZ:rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),o}const Ae=fA();function Gr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Oo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fo;class hA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fo===void 0&&(fo=zf("canvas")),fo.width=t.width,fo.height=t.height;const s=fo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),r=fo}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=zf("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const s=r.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Gr(l[c]/255)*255;return r.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gr(n[r]/255)*255):n[r]=Gr(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dA=0;class E_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=mu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(gp(s[c].image)):l.push(gp(s[c]))}else l=gp(s);r.url=l}return n||(t.images[this.uuid]=r),r}}function gp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hA.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pA=0;const vp=new ut;class si extends Yo{constructor(t=si.DEFAULT_IMAGE,n=si.DEFAULT_MAPPING,r=ys,s=ys,l=Bi,c=xs,f=Ii,p=Xr,d=si.DEFAULT_ANISOTROPY,m=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=mu(),this.name="",this.source=new E_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vp).x}get height(){return this.source.getSize(vp).y}get depth(){return this.source.getSize(vp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$S)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _m:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case gm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _m:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case gm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=$S;si.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,r=0,s=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,s){return this.x=t,this.y=n,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,s,l;const p=t.elements,d=p[0],m=p[4],g=p[8],v=p[1],y=p[5],E=p[9],M=p[2],S=p[6],x=p[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,b=(y+1)/2,O=(x+1)/2,P=(m+v)/4,L=(g+M)/4,B=(E+S)/4;return w>b&&w>O?w<.01?(r=0,s=.707106781,l=.707106781):(r=Math.sqrt(w),s=P/r,l=L/r):b>O?b<.01?(r=.707106781,s=0,l=.707106781):(s=Math.sqrt(b),r=P/s,l=B/s):O<.01?(r=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),r=L/l,s=B/l),this.set(r,s,l,n),this}let C=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(g-M)/C,this.z=(v-m)/C,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mA extends Yo{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const s={width:t,height:n,depth:r.depth},l=new si(s);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=r,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new E_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends mA{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class cM extends si{constructor(t=null,n=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _A extends si{constructor(t=null,n=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ki):ki.fromBufferAttribute(l,c),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yc.copy(r.boundingBox)),Yc.applyMatrix4(t.matrixWorld),this.union(Yc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wl),jc.subVectors(this.max,Wl),ho.subVectors(t.a,Wl),po.subVectors(t.b,Wl),mo.subVectors(t.c,Wl),va.subVectors(po,ho),ya.subVectors(mo,po),os.subVectors(ho,mo);let n=[0,-va.z,va.y,0,-ya.z,ya.y,0,-os.z,os.y,va.z,0,-va.x,ya.z,0,-ya.x,os.z,0,-os.x,-va.y,va.x,0,-ya.y,ya.x,0,-os.y,os.x,0];return!yp(n,ho,po,mo,jc)||(n=[1,0,0,0,1,0,0,0,1],!yp(n,ho,po,mo,jc))?!1:(Zc.crossVectors(va,ya),n=[Zc.x,Zc.y,Zc.z],yp(n,ho,po,mo,jc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cr=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ki=new ut,Yc=new gu,ho=new ut,po=new ut,mo=new ut,va=new ut,ya=new ut,os=new ut,Wl=new ut,jc=new ut,Zc=new ut,ls=new ut;function yp(o,t,n,r,s){for(let l=0,c=o.length-3;l<=c;l+=3){ls.fromArray(o,l);const f=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),p=t.dot(ls),d=n.dot(ls),m=r.dot(ls);if(Math.max(-Math.max(p,d,m),Math.min(p,d,m))>f)return!1}return!0}const gA=new gu,Yl=new ut,xp=new ut;class T_{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):gA.setFromPoints(t).getCenter(r);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yl.subVectors(t,this.center);const n=Yl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),s=(r-this.radius)*.5;this.center.addScaledVector(Yl,s/r),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yl.copy(t.center).add(xp)),this.expandByPoint(Yl.copy(t.center).sub(xp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dr=new ut,Sp=new ut,Kc=new ut,xa=new ut,Mp=new ut,Qc=new ut,Ep=new ut;class vA{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Dr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Dr.copy(this.origin).addScaledVector(this.direction,n),Dr.distanceToSquared(t))}distanceSqToSegment(t,n,r,s){Sp.copy(t).add(n).multiplyScalar(.5),Kc.copy(n).sub(t).normalize(),xa.copy(this.origin).sub(Sp);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Kc),f=xa.dot(this.direction),p=-xa.dot(Kc),d=xa.lengthSq(),m=Math.abs(1-c*c);let g,v,y,E;if(m>0)if(g=c*p-f,v=c*f-p,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Sp).addScaledVector(Kc,v),y}intersectSphere(t,n){Dr.subVectors(t.center,this.origin);const r=Dr.dot(this.direction),s=Dr.dot(Dr)-r*r,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,s,l,c,f,p;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(r=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(r=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),r>c||l>s||((l>r||isNaN(r))&&(r=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),r>p||f>s)||((f>r||r!==r)&&(r=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(r>=0?r:s,n)}intersectsBox(t){return this.intersectBox(t,Dr)!==null}intersectTriangle(t,n,r,s,l){Mp.subVectors(n,t),Qc.subVectors(r,t),Ep.crossVectors(Mp,Qc);let c=this.direction.dot(Ep),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xa.subVectors(this.origin,t);const p=f*this.direction.dot(Qc.crossVectors(xa,Qc));if(p<0)return null;const d=f*this.direction.dot(Mp.cross(xa));if(d<0||p+d>c)return null;const m=-f*xa.dot(Ep);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(t,n,r,s,l,c,f,p,d,m,g,v,y,E,M,S){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,s,l,c,f,p,d,m,g,v,y,E,M,S)}set(t,n,r,s,l,c,f,p,d,m,g,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=m,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,s=1/_o.setFromMatrixColumn(t,0).length(),l=1/_o.setFromMatrixColumn(t,1).length(),c=1/_o.setFromMatrixColumn(t,2).length();return n[0]=r[0]*s,n[1]=r[1]*s,n[2]=r[2]*s,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,s=t.y,l=t.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(s),d=Math.sin(s),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*m,y=c*g,E=f*m,M=f*g;n[0]=p*m,n[4]=-p*g,n[8]=d,n[1]=y+E*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=E+y*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*m,y=p*g,E=d*m,M=d*g;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*d,n[1]=c*g,n[5]=c*m,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*m,y=p*g,E=d*m,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*m,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*m,y=c*g,E=f*m,M=f*g;n[0]=p*m,n[4]=E*d-y,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*m,n[4]=M-v*g,n[8]=E*g+y,n[1]=g,n[5]=c*m,n[9]=-f*m,n[2]=-d*m,n[6]=y*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*m,n[4]=-g,n[8]=d*m,n[1]=v*g+M,n[5]=c*m,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*m,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yA,t,xA)}lookAt(t,n,r){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Sa.crossVectors(r,_i),Sa.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Sa.crossVectors(r,_i)),Sa.normalize(),Jc.crossVectors(_i,Sa),s[0]=Sa.x,s[4]=Jc.x,s[8]=_i.x,s[1]=Sa.y,s[5]=Jc.y,s[9]=_i.y,s[2]=Sa.z,s[6]=Jc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,s=n.elements,l=this.elements,c=r[0],f=r[4],p=r[8],d=r[12],m=r[1],g=r[5],v=r[9],y=r[13],E=r[2],M=r[6],S=r[10],x=r[14],C=r[3],w=r[7],b=r[11],O=r[15],P=s[0],L=s[4],B=s[8],A=s[12],R=s[1],z=s[5],H=s[9],k=s[13],Y=s[2],it=s[6],F=s[10],q=s[14],j=s[3],gt=s[7],I=s[11],tt=s[15];return l[0]=c*P+f*R+p*Y+d*j,l[4]=c*L+f*z+p*it+d*gt,l[8]=c*B+f*H+p*F+d*I,l[12]=c*A+f*k+p*q+d*tt,l[1]=m*P+g*R+v*Y+y*j,l[5]=m*L+g*z+v*it+y*gt,l[9]=m*B+g*H+v*F+y*I,l[13]=m*A+g*k+v*q+y*tt,l[2]=E*P+M*R+S*Y+x*j,l[6]=E*L+M*z+S*it+x*gt,l[10]=E*B+M*H+S*F+x*I,l[14]=E*A+M*k+S*q+x*tt,l[3]=C*P+w*R+b*Y+O*j,l[7]=C*L+w*z+b*it+O*gt,l[11]=C*B+w*H+b*F+O*I,l[15]=C*A+w*k+b*q+O*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],s=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],m=t[2],g=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15];return E*(+l*p*g-s*d*g-l*f*v+r*d*v+s*f*y-r*p*y)+M*(+n*p*y-n*d*v+l*c*v-s*c*y+s*d*m-l*p*m)+S*(+n*d*g-n*f*y-l*c*g+r*c*y+l*f*m-r*d*m)+x*(-s*f*m-n*p*g+n*f*v+s*c*g-r*c*v+r*p*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],m=t[8],g=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],C=g*S*d-M*v*d+M*p*y-f*S*y-g*p*x+f*v*x,w=E*v*d-m*S*d-E*p*y+c*S*y+m*p*x-c*v*x,b=m*M*d-E*g*d+E*f*y-c*M*y-m*f*x+c*g*x,O=E*g*p-m*M*p-E*f*v+c*M*v+m*f*S-c*g*S,P=n*C+r*w+s*b+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=C*L,t[1]=(M*v*l-g*S*l-M*s*y+r*S*y+g*s*x-r*v*x)*L,t[2]=(f*S*l-M*p*l+M*s*d-r*S*d-f*s*x+r*p*x)*L,t[3]=(g*p*l-f*v*l-g*s*d+r*v*d+f*s*y-r*p*y)*L,t[4]=w*L,t[5]=(m*S*l-E*v*l+E*s*y-n*S*y-m*s*x+n*v*x)*L,t[6]=(E*p*l-c*S*l-E*s*d+n*S*d+c*s*x-n*p*x)*L,t[7]=(c*v*l-m*p*l+m*s*d-n*v*d-c*s*y+n*p*y)*L,t[8]=b*L,t[9]=(E*g*l-m*M*l-E*r*y+n*M*y+m*r*x-n*g*x)*L,t[10]=(c*M*l-E*f*l+E*r*d-n*M*d-c*r*x+n*f*x)*L,t[11]=(m*f*l-c*g*l-m*r*d+n*g*d+c*r*y-n*f*y)*L,t[12]=O*L,t[13]=(m*M*s-E*g*s+E*r*v-n*M*v-m*r*S+n*g*S)*L,t[14]=(E*f*s-c*M*s-E*r*p+n*M*p+c*r*S-n*f*S)*L,t[15]=(c*g*s-m*f*s+m*r*p-n*g*p-c*r*v+n*f*v)*L,this}scale(t){const n=this.elements,r=t.x,s=t.y,l=t.z;return n[0]*=r,n[4]*=s,n[8]*=l,n[1]*=r,n[5]*=s,n[9]*=l,n[2]*=r,n[6]*=s,n[10]*=l,n[3]*=r,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,s))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),s=Math.sin(n),l=1-r,c=t.x,f=t.y,p=t.z,d=l*c,m=l*f;return this.set(d*c+r,d*f-s*p,d*p+s*f,0,d*f+s*p,m*f+r,m*p-s*c,0,d*p-s*f,m*p+s*c,l*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,s,l,c){return this.set(1,r,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,r){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,m=c+c,g=f+f,v=l*d,y=l*m,E=l*g,M=c*m,S=c*g,x=f*g,C=p*d,w=p*m,b=p*g,O=r.x,P=r.y,L=r.z;return s[0]=(1-(M+x))*O,s[1]=(y+b)*O,s[2]=(E-w)*O,s[3]=0,s[4]=(y-b)*P,s[5]=(1-(v+x))*P,s[6]=(S+C)*P,s[7]=0,s[8]=(E+w)*L,s[9]=(S-C)*L,s[10]=(1-(v+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,r){const s=this.elements;let l=_o.set(s[0],s[1],s[2]).length();const c=_o.set(s[4],s[5],s[6]).length(),f=_o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Xi.copy(this);const d=1/l,m=1/c,g=1/f;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=m,Xi.elements[5]*=m,Xi.elements[6]*=m,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),r.x=l,r.y=c,r.z=f,this}makePerspective(t,n,r,s,l,c,f=Hr){const p=this.elements,d=2*l/(n-t),m=2*l/(r-s),g=(n+t)/(n-t),v=(r+s)/(r-s);let y,E;if(f===Hr)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Pf)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=d,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=m,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,s,l,c,f=Hr){const p=this.elements,d=1/(n-t),m=1/(r-s),g=1/(c-l),v=(n+t)*d,y=(r+s)*m;let E,M;if(f===Hr)E=(c+l)*g,M=-2*g;else if(f===Pf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=M,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const _o=new ut,Xi=new _n,yA=new ut(0,0,0),xA=new ut(1,1,1),Sa=new ut,Jc=new ut,_i=new ut,ax=new _n,sx=new _u;class Ds{constructor(t=0,n=0,r=0,s=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],m=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return ax.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ax,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sx.setFromEuler(this),this.setFromQuaternion(sx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class fM{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SA=0;const ox=new ut,go=new _u,Ur=new _n,$c=new ut,jl=new ut,MA=new ut,EA=new _u,lx=new ut(1,0,0),ux=new ut(0,1,0),cx=new ut(0,0,1),fx={type:"added"},TA={type:"removed"},vo={type:"childadded",child:null},Tp={type:"childremoved",child:null};class Fi extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=mu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fi.DEFAULT_UP.clone();const t=new ut,n=new Ds,r=new _u,s=new ut(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new oe}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.multiply(go),this}rotateOnWorldAxis(t,n){return go.setFromAxisAngle(t,n),this.quaternion.premultiply(go),this}rotateX(t){return this.rotateOnAxis(lx,t)}rotateY(t){return this.rotateOnAxis(ux,t)}rotateZ(t){return this.rotateOnAxis(cx,t)}translateOnAxis(t,n){return ox.copy(t).applyQuaternion(this.quaternion),this.position.add(ox.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lx,t)}translateY(t){return this.translateOnAxis(ux,t)}translateZ(t){return this.translateOnAxis(cx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?$c.copy(t):$c.set(t,n,r);const s=this.parent;this.updateWorldMatrix(!0,!1),jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(jl,$c,this.up):Ur.lookAt($c,jl,this.up),this.quaternion.setFromRotationMatrix(Ur),s&&(Ur.extractRotation(s.matrixWorld),go.setFromRotationMatrix(Ur),this.quaternion.premultiply(go.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fx),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(TA),Tp.child=t,this.dispatchEvent(Tp),Tp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fx),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,t,MA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,EA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,m=p.length;d<m;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),m=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=s,r;function c(f){const p=[];for(const d in f){const m=f[d];delete m.metadata,p.push(m)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const s=t.children[r];this.add(s.clone())}return this}}Fi.DEFAULT_UP=new ut(0,1,0);Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new ut,Lr=new ut,bp=new ut,Or=new ut,yo=new ut,xo=new ut,hx=new ut,Ap=new ut,Rp=new ut,wp=new ut,Cp=new un,Dp=new un,Up=new un;class ji{constructor(t=new ut,n=new ut,r=new ut){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,s){s.subVectors(r,n),qi.subVectors(t,n),s.cross(qi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,r,s,l){qi.subVectors(s,n),Lr.subVectors(r,n),bp.subVectors(t,n);const c=qi.dot(qi),f=qi.dot(Lr),p=qi.dot(bp),d=Lr.dot(Lr),m=Lr.dot(bp),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(d*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,r,s){return this.getBarycoord(t,n,r,s,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(t,n,r,s,l,c,f,p){return this.getBarycoord(t,n,r,s,Or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Or.x),p.addScaledVector(c,Or.y),p.addScaledVector(f,Or.z),p)}static getInterpolatedAttribute(t,n,r,s,l,c){return Cp.setScalar(0),Dp.setScalar(0),Up.setScalar(0),Cp.fromBufferAttribute(t,n),Dp.fromBufferAttribute(t,r),Up.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Cp,l.x),c.addScaledVector(Dp,l.y),c.addScaledVector(Up,l.z),c}static isFrontFacing(t,n,r,s){return qi.subVectors(r,n),Lr.subVectors(t,n),qi.cross(Lr).dot(s)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,s){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,r,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),qi.cross(Lr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,s,l){return ji.getInterpolation(t,this.a,this.b,this.c,n,r,s,l)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,s=this.b,l=this.c;let c,f;yo.subVectors(s,r),xo.subVectors(l,r),Ap.subVectors(t,r);const p=yo.dot(Ap),d=xo.dot(Ap);if(p<=0&&d<=0)return n.copy(r);Rp.subVectors(t,s);const m=yo.dot(Rp),g=xo.dot(Rp);if(m>=0&&g<=m)return n.copy(s);const v=p*g-m*d;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),n.copy(r).addScaledVector(yo,c);wp.subVectors(t,l);const y=yo.dot(wp),E=xo.dot(wp);if(E>=0&&y<=E)return n.copy(l);const M=y*d-p*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(r).addScaledVector(xo,f);const S=m*E-y*g;if(S<=0&&g-m>=0&&y-E>=0)return hx.subVectors(l,s),f=(g-m)/(g-m+(y-E)),n.copy(s).addScaledVector(hx,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(r).addScaledVector(yo,c).addScaledVector(xo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},tf={h:0,s:0,l:0};function Lp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Re{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,r,s=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ae.colorSpaceToWorking(this,s),this}setHSL(t,n,r,s=Ae.workingColorSpace){if(t=sA(t,1),n=ye(n,0,1),r=ye(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Lp(c,l,t+1/3),this.g=Lp(c,l,t),this.b=Lp(c,l,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,n=Oi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const r=hM[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return Ae.workingToColorSpace(kn.copy(this),t),Math.round(ye(kn.r*255,0,255))*65536+Math.round(ye(kn.g*255,0,255))*256+Math.round(ye(kn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(kn.copy(this),n);const r=kn.r,s=kn.g,l=kn.b,c=Math.max(r,s,l),f=Math.min(r,s,l);let p,d;const m=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=m<=.5?g/(c+f):g/(2-c-f),c){case r:p=(s-l)/g+(s<l?6:0);break;case s:p=(l-r)/g+2;break;case l:p=(r-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=m,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Oi){Ae.workingToColorSpace(kn.copy(this),t);const n=kn.r,r=kn.g,s=kn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(t,n,r){return this.getHSL(Ma),this.setHSL(Ma.h+t,Ma.s+n,Ma.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Ma),t.getHSL(tf);const r=pp(Ma.h,tf.h,n),s=pp(Ma.s,tf.s,n),l=pp(Ma.l,tf.l,n);return this.setHSL(r,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*r+l[6]*s,this.g=l[1]*n+l[4]*r+l[7]*s,this.b=l[2]*n+l[5]*r+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Re;Re.NAMES=hM;let bA=0;class Xf extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=mu(),this.name="",this.type="Material",this.blending=Uo,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=am,this.blendDst=sm,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==am&&(r.blendSrc=this.blendSrc),this.blendDst!==sm&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(r.stencilFail=this.stencilFail),this.stencilZFail!==co&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const s=n.length;r=new Array(s);for(let l=0;l!==s;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dM extends Xf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ds,this.combine=JS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ut,ef=new Ue;let AA=0;class or{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=$y,this.updateRanges=[],this.gpuType=Fr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[r+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ef.fromBufferAttribute(this,n),ef.applyMatrix3(t),this.setXY(n,ef.x,ef.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=ql(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=ti(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ql(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ql(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ql(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ql(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=s,this}setXYZW(t,n,r,s,l){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$y&&(t.usage=this.usage),t}}class pM extends or{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class mM extends or{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class As extends or{constructor(t,n,r){super(new Float32Array(t),n,r)}}let RA=0;const Ui=new _n,Op=new Fi,So=new ut,gi=new gu,Zl=new gu,Cn=new ut;class Us extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=mu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uM(t)?mM:pM)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new oe().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,r){return Ui.makeTranslation(t,n,r),this.applyMatrix4(Ui),this}scale(t,n,r){return Ui.makeScale(t,n,r),this.applyMatrix4(Ui),this}lookAt(t){return Op.lookAt(t),Op.updateMatrix(),this.applyMatrix4(Op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new As(r,3))}else{const r=Math.min(t.length,n.count);for(let s=0;s<r;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const l=n[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new T_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Zl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(gi.min,Zl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,Zl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(Zl.min),gi.expandByPoint(Zl.max))}gi.getCenter(r);let s=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),s=Math.max(s,r.distanceToSquared(Cn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,m=f.count;d<m;d++)Cn.fromBufferAttribute(f,d),p&&(So.fromBufferAttribute(t,d),Cn.add(So)),s=Math.max(s,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new or(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let B=0;B<r.count;B++)f[B]=new ut,p[B]=new ut;const d=new ut,m=new ut,g=new ut,v=new Ue,y=new Ue,E=new Ue,M=new ut,S=new ut;function x(B,A,R){d.fromBufferAttribute(r,B),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,B),y.fromBufferAttribute(l,A),E.fromBufferAttribute(l,R),m.sub(d),g.sub(d),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(z),f[B].add(M),f[A].add(M),f[R].add(M),p[B].add(S),p[A].add(S),p[R].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let B=0,A=C.length;B<A;++B){const R=C[B],z=R.start,H=R.count;for(let k=z,Y=z+H;k<Y;k+=3)x(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new ut,b=new ut,O=new ut,P=new ut;function L(B){O.fromBufferAttribute(s,B),P.copy(O);const A=f[B];w.copy(A),w.sub(O.multiplyScalar(O.dot(A))).normalize(),b.crossVectors(P,A);const z=b.dot(p[B])<0?-1:1;c.setXYZW(B,w.x,w.y,w.z,z)}for(let B=0,A=C.length;B<A;++B){const R=C[B],z=R.start,H=R.count;for(let k=z,Y=z+H;k<Y;k+=3)L(t.getX(k+0)),L(t.getX(k+1)),L(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new or(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const s=new ut,l=new ut,c=new ut,f=new ut,p=new ut,d=new ut,m=new ut,g=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),d.fromBufferAttribute(r,S),f.add(m),p.add(m),d.add(m),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),m.subVectors(c,l),g.subVectors(s,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,m=f.itemSize,g=f.normalized,v=new d.constructor(p.length*m);let y=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?y=p[M]*f.data.stride+f.offset:y=p[M]*m;for(let x=0;x<m;x++)v[E++]=d[y++]}return new or(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Us,r=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,r);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let m=0,g=d.length;m<g;m++){const v=d[m],y=t(v,r);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const d=r[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],m=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];m.push(y.toJSON(t.data))}m.length>0&&(s[p]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const s=t.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const l=t.morphAttributes;for(const d in l){const m=[],g=l[d];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dx=new _n,us=new vA,nf=new T_,px=new ut,rf=new ut,af=new ut,sf=new ut,Np=new ut,of=new ut,mx=new ut,lf=new ut;class Zi extends Fi{constructor(t=new Us,n=new dM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const s=n[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const r=this.geometry,s=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){of.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const m=f[p],g=l[p];m!==0&&(Np.fromBufferAttribute(g,t),c?of.addScaledVector(Np,m):of.addScaledVector(Np.sub(n),m))}n.add(of)}return n}raycast(t,n){const r=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nf.copy(r.boundingSphere),nf.applyMatrix4(l),us.copy(t.ray).recast(t.near),!(nf.containsPoint(us.origin)===!1&&(us.intersectSphere(nf,px)===null||us.origin.distanceToSquared(px)>(t.far-t.near)**2))&&(dx.copy(l).invert(),us.copy(t.ray).applyMatrix4(dx),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,us)))}_computeIntersections(t,n,r){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],C=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=C,O=w;b<O;b+=3){const P=f.getX(b),L=f.getX(b+1),B=f.getX(b+2);s=uf(this,x,t,r,d,m,g,P,L,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const C=f.getX(S),w=f.getX(S+1),b=f.getX(S+2);s=uf(this,c,t,r,d,m,g,C,w,b),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],C=Math.max(S.start,y.start),w=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let b=C,O=w;b<O;b+=3){const P=b,L=b+1,B=b+2;s=uf(this,x,t,r,d,m,g,P,L,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const C=S,w=S+1,b=S+2;s=uf(this,c,t,r,d,m,g,C,w,b),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function wA(o,t,n,r,s,l,c,f){let p;if(t.side===ai?p=r.intersectTriangle(c,l,s,!0,f):p=r.intersectTriangle(s,l,c,t.side===Ba,f),p===null)return null;lf.copy(f),lf.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(lf);return d<n.near||d>n.far?null:{distance:d,point:lf.clone(),object:o}}function uf(o,t,n,r,s,l,c,f,p,d){o.getVertexPosition(f,rf),o.getVertexPosition(p,af),o.getVertexPosition(d,sf);const m=wA(o,t,n,r,rf,af,sf,mx);if(m){const g=new ut;ji.getBarycoord(mx,rf,af,sf,g),s&&(m.uv=ji.getInterpolatedAttribute(s,f,p,d,g,new Ue)),l&&(m.uv1=ji.getInterpolatedAttribute(l,f,p,d,g,new Ue)),c&&(m.normal=ji.getInterpolatedAttribute(c,f,p,d,g,new ut),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ut,materialIndex:0};ji.getNormal(rf,af,sf,v.normal),m.face=v,m.barycoord=g}return m}class vu extends Us{constructor(t=1,n=1,r=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],m=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,r,n,t,c,l,0),E("z","y","x",1,-1,r,n,-t,c,l,1),E("x","z","y",1,1,t,r,n,s,c,2),E("x","z","y",1,-1,t,r,-n,s,c,3),E("x","y","z",1,-1,t,n,r,s,l,4),E("x","y","z",-1,-1,t,n,-r,s,l,5),this.setIndex(p),this.setAttribute("position",new As(d,3)),this.setAttribute("normal",new As(m,3)),this.setAttribute("uv",new As(g,2));function E(M,S,x,C,w,b,O,P,L,B,A){const R=b/L,z=O/B,H=b/2,k=O/2,Y=P/2,it=L+1,F=B+1;let q=0,j=0;const gt=new ut;for(let I=0;I<F;I++){const tt=I*z-k;for(let dt=0;dt<it;dt++){const vt=dt*R-H;gt[M]=vt*C,gt[S]=tt*w,gt[x]=Y,d.push(gt.x,gt.y,gt.z),gt[M]=0,gt[S]=0,gt[x]=P>0?1:-1,m.push(gt.x,gt.y,gt.z),g.push(dt/L),g.push(1-I/B),q+=1}}for(let I=0;I<B;I++)for(let tt=0;tt<L;tt++){const dt=v+tt+it*I,vt=v+tt+it*(I+1),K=v+(tt+1)+it*(I+1),ft=v+(tt+1)+it*I;p.push(dt,vt,ft),p.push(vt,K,ft),j+=6}f.addGroup(y,j,A),y+=j,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xo(o){const t={};for(const n in o){t[n]={};for(const r in o[n]){const s=o[n][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=s.clone():Array.isArray(s)?t[n][r]=s.slice():t[n][r]=s}}return t}function Yn(o){const t={};for(let n=0;n<o.length;n++){const r=Xo(o[n]);for(const s in r)t[s]=r[s]}return t}function CA(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function _M(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const DA={clone:Xo,merge:Yn};var UA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Xf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UA,this.fragmentShader=LA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xo(t.uniforms),this.uniformsGroups=CA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gM extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Hr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ea=new ut,_x=new Ue,gx=new Ue;class Wi extends gM{constructor(t=50,n=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Xm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xm*2*Math.atan(Math.tan(dp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z),Ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ea.x,Ea.y).multiplyScalar(-t/Ea.z)}getViewSize(t,n){return this.getViewBounds(t,_x,gx),n.subVectors(gx,_x)}setViewOffset(t,n,r,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(dp*.5*this.fov)/this.zoom,r=2*n,s=this.aspect*r,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*r/d,s*=c.width/p,r*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mo=-90,Eo=1;class OA extends Fi{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wi(Mo,Eo,t,n);s.layers=this.layers,this.add(s);const l=new Wi(Mo,Eo,t,n);l.layers=this.layers,this.add(l);const c=new Wi(Mo,Eo,t,n);c.layers=this.layers,this.add(c);const f=new Wi(Mo,Eo,t,n);f.layers=this.layers,this.add(f);const p=new Wi(Mo,Eo,t,n);p.layers=this.layers,this.add(p);const d=new Wi(Mo,Eo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===Hr)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Pf)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,s),t.render(n,l),t.setRenderTarget(r,1,s),t.render(n,c),t.setRenderTarget(r,2,s),t.render(n,f),t.setRenderTarget(r,3,s),t.render(n,p),t.setRenderTarget(r,4,s),t.render(n,d),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,s),t.render(n,m),t.setRenderTarget(g,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vM extends si{constructor(t=[],n=Go,r,s,l,c,f,p,d,m){super(t,n,r,s,l,c,f,p,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NA extends Ia{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},s=[r,r,r,r,r,r];this.texture=new vM(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vu(5,5,5),l=new ur({name:"CubemapFromEquirect",uniforms:Xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Oa});l.uniforms.tEquirect.value=n;const c=new Zi(s,l),f=n.minFilter;return n.minFilter===xs&&(n.minFilter=Bi),new OA(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,s);t.setRenderTarget(l)}}class cf extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PA={type:"move"};class Pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,r),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,r),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new cf;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}const zp=new ut,zA=new ut,BA=new oe;class ps{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,s){return this.normal.set(t,n,r),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const s=zp.subVectors(r,n).cross(zA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(zp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||BA.getNormalMatrix(t),s=this.coplanarPoint(zp).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new T_,IA=new Ue(.5,.5),ff=new ut;class yM{constructor(t=new ps,n=new ps,r=new ps,s=new ps,l=new ps,c=new ps){this.planes=[t,n,r,s,l,c]}set(t,n,r,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(r),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Hr){const r=this.planes,s=t.elements,l=s[0],c=s[1],f=s[2],p=s[3],d=s[4],m=s[5],g=s[6],v=s[7],y=s[8],E=s[9],M=s[10],S=s[11],x=s[12],C=s[13],w=s[14],b=s[15];if(r[0].setComponents(p-l,v-d,S-y,b-x).normalize(),r[1].setComponents(p+l,v+d,S+y,b+x).normalize(),r[2].setComponents(p+c,v+m,S+E,b+C).normalize(),r[3].setComponents(p-c,v-m,S-E,b-C).normalize(),r[4].setComponents(p-f,v-g,S-M,b-w).normalize(),n===Hr)r[5].setComponents(p+f,v+g,S+M,b+w).normalize();else if(n===Pf)r[5].setComponents(f,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const n=IA.distanceTo(t.center);return cs.radius=.7071067811865476+n,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const n=this.planes,r=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const s=n[r];if(ff.x=s.normal.x>0?t.max.x:t.min.x,ff.y=s.normal.y>0?t.max.y:t.min.y,ff.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ff)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xM extends si{constructor(t,n,r=ws,s,l,c,f=Ki,p=Ki,d,m=hu,g=1){if(m!==hu&&m!==du)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,p,m,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new E_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yu extends Us{constructor(t=1,n=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(r),p=Math.floor(s),d=f+1,m=p+1,g=t/f,v=n/p,y=[],E=[],M=[],S=[];for(let x=0;x<m;x++){const C=x*v-c;for(let w=0;w<d;w++){const b=w*g-l;E.push(b,-C,0),M.push(0,0,1),S.push(w/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<f;C++){const w=C+d*x,b=C+d*(x+1),O=C+1+d*(x+1),P=C+1+d*x;y.push(w,b,P),y.push(b,O,P)}this.setIndex(y),this.setAttribute("position",new As(E,3)),this.setAttribute("normal",new As(M,3)),this.setAttribute("uv",new As(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class FA extends Xf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HA extends Xf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class SM extends gM{constructor(t=-1,n=1,r=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=r-t,c=r+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GA extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function vx(o,t,n,r){const s=VA(r);switch(n){case iM:return o*t;case aM:return o*t/s.components*s.byteLength;case x_:return o*t/s.components*s.byteLength;case sM:return o*t*2/s.components*s.byteLength;case S_:return o*t*2/s.components*s.byteLength;case rM:return o*t*3/s.components*s.byteLength;case Ii:return o*t*4/s.components*s.byteLength;case M_:return o*t*4/s.components*s.byteLength;case xf:case Sf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mf:case Ef:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ym:case Sm:return Math.max(o,16)*Math.max(t,8)/4;case vm:case xm:return Math.max(o,8)*Math.max(t,8)/2;case Mm:case Em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Am:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Rm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case wm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Cm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Dm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Um:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Lm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Om:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Nm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Pm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case zm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Bm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Im:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tf:case Fm:case Hm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case oM:case Gm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vm:case km:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VA(o){switch(o){case Xr:case tM:return{byteLength:1,components:1};case cu:case eM:case Wo:return{byteLength:2,components:1};case v_:case y_:return{byteLength:2,components:4};case ws:case g_:case Fr:return{byteLength:4,components:1};case nM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:__}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=__);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function MM(){let o=null,t=!1,n=null,r=null;function s(l,c){n(l,c),r=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(r=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function kA(o){const t=new WeakMap;function n(f,p){const d=f.array,m=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,m),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,p,d){const m=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,m);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];o.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:c}}var XA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qA=`#ifdef USE_ALPHAHASH
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
#endif`,WA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KA=`#ifdef USE_AOMAP
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
#endif`,QA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JA=`#ifdef USE_BATCHING
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
#endif`,$A=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iR=`#ifdef USE_IRIDESCENCE
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
#endif`,rR=`#ifdef USE_BUMPMAP
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
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dR=`#define PI 3.141592653589793
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
} // validated`,pR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mR=`vec3 transformedNormal = objectNormal;
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
#endif`,_R=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xR="gl_FragColor = linearToOutputTexel( gl_FragColor );",SR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MR=`#ifdef USE_ENVMAP
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
#endif`,ER=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TR=`#ifdef USE_ENVMAP
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
#endif`,bR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AR=`#ifdef USE_ENVMAP
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
#endif`,RR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UR=`#ifdef USE_GRADIENTMAP
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
}`,LR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PR=`uniform bool receiveShadow;
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
#endif`,zR=`#ifdef USE_ENVMAP
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
#endif`,BR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GR=`PhysicalMaterial material;
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
#endif`,VR=`struct PhysicalMaterial {
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
}`,kR=`
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
#endif`,XR=`#if defined( RE_IndirectDiffuse )
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
#endif`,qR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$R=`#if defined( USE_POINTS_UV )
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
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hw=`#ifdef USE_NORMALMAP
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
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xw=`uniform sampler2D t2D;
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`#include <common>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
}`,Qw=`#define DISTANCE
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
}`,Jw=`#define DISTANCE
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
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`uniform float scale;
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#include <common>
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
}`,rC=`uniform vec3 diffuse;
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
}`,aC=`#define LAMBERT
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
}`,sC=`#define LAMBERT
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
}`,oC=`#define MATCAP
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
}`,lC=`#define MATCAP
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
}`,uC=`#define NORMAL
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
}`,cC=`#define NORMAL
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
}`,fC=`#define PHONG
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
}`,hC=`#define PHONG
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
}`,dC=`#define STANDARD
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
}`,pC=`#define STANDARD
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
}`,mC=`#define TOON
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
}`,_C=`#define TOON
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
}`,gC=`uniform float size;
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
}`,vC=`uniform vec3 diffuse;
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
}`,yC=`#include <common>
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
}`,xC=`uniform vec3 color;
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
}`,SC=`uniform float rotation;
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
}`,MC=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:XA,alphahash_pars_fragment:qA,alphamap_fragment:WA,alphamap_pars_fragment:YA,alphatest_fragment:jA,alphatest_pars_fragment:ZA,aomap_fragment:KA,aomap_pars_fragment:QA,batching_pars_vertex:JA,batching_vertex:$A,begin_vertex:tR,beginnormal_vertex:eR,bsdfs:nR,iridescence_fragment:iR,bumpmap_pars_fragment:rR,clipping_planes_fragment:aR,clipping_planes_pars_fragment:sR,clipping_planes_pars_vertex:oR,clipping_planes_vertex:lR,color_fragment:uR,color_pars_fragment:cR,color_pars_vertex:fR,color_vertex:hR,common:dR,cube_uv_reflection_fragment:pR,defaultnormal_vertex:mR,displacementmap_pars_vertex:_R,displacementmap_vertex:gR,emissivemap_fragment:vR,emissivemap_pars_fragment:yR,colorspace_fragment:xR,colorspace_pars_fragment:SR,envmap_fragment:MR,envmap_common_pars_fragment:ER,envmap_pars_fragment:TR,envmap_pars_vertex:bR,envmap_physical_pars_fragment:zR,envmap_vertex:AR,fog_vertex:RR,fog_pars_vertex:wR,fog_fragment:CR,fog_pars_fragment:DR,gradientmap_pars_fragment:UR,lightmap_pars_fragment:LR,lights_lambert_fragment:OR,lights_lambert_pars_fragment:NR,lights_pars_begin:PR,lights_toon_fragment:BR,lights_toon_pars_fragment:IR,lights_phong_fragment:FR,lights_phong_pars_fragment:HR,lights_physical_fragment:GR,lights_physical_pars_fragment:VR,lights_fragment_begin:kR,lights_fragment_maps:XR,lights_fragment_end:qR,logdepthbuf_fragment:WR,logdepthbuf_pars_fragment:YR,logdepthbuf_pars_vertex:jR,logdepthbuf_vertex:ZR,map_fragment:KR,map_pars_fragment:QR,map_particle_fragment:JR,map_particle_pars_fragment:$R,metalnessmap_fragment:tw,metalnessmap_pars_fragment:ew,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:aw,morphtarget_vertex:sw,normal_fragment_begin:ow,normal_fragment_maps:lw,normal_pars_fragment:uw,normal_pars_vertex:cw,normal_vertex:fw,normalmap_pars_fragment:hw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:_w,opaque_fragment:gw,packing:vw,premultiplied_alpha_fragment:yw,project_vertex:xw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Tw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Aw,shadowmap_vertex:Rw,shadowmask_pars_fragment:ww,skinbase_vertex:Cw,skinning_pars_vertex:Dw,skinning_vertex:Uw,skinnormal_vertex:Lw,specularmap_fragment:Ow,specularmap_pars_fragment:Nw,tonemapping_fragment:Pw,tonemapping_pars_fragment:zw,transmission_fragment:Bw,transmission_pars_fragment:Iw,uv_pars_fragment:Fw,uv_pars_vertex:Hw,uv_vertex:Gw,worldpos_vertex:Vw,background_vert:kw,background_frag:Xw,backgroundCube_vert:qw,backgroundCube_frag:Ww,cube_vert:Yw,cube_frag:jw,depth_vert:Zw,depth_frag:Kw,distanceRGBA_vert:Qw,distanceRGBA_frag:Jw,equirect_vert:$w,equirect_frag:tC,linedashed_vert:eC,linedashed_frag:nC,meshbasic_vert:iC,meshbasic_frag:rC,meshlambert_vert:aC,meshlambert_frag:sC,meshmatcap_vert:oC,meshmatcap_frag:lC,meshnormal_vert:uC,meshnormal_frag:cC,meshphong_vert:fC,meshphong_frag:hC,meshphysical_vert:dC,meshphysical_frag:pC,meshtoon_vert:mC,meshtoon_frag:_C,points_vert:gC,points_frag:vC,shadow_vert:yC,shadow_frag:xC,sprite_vert:SC,sprite_frag:MC},Ot={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},rr={basic:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Yn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Yn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Yn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Yn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Yn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Yn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Yn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Yn([Ot.lights,Ot.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};rr.physical={uniforms:Yn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const hf={r:0,b:0,g:0},fs=new Ds,EC=new _n;function TC(o,t,n,r,s,l,c){const f=new Re(0);let p=l===!0?0:1,d,m,g=null,v=0,y=null;function E(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?n:t).get(b)),b}function M(w){let b=!1;const O=E(w);O===null?x(f,p):O&&O.isColor&&(x(O,1),b=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(w,b){const O=E(b);O&&(O.isCubeTexture||O.mapping===kf)?(m===void 0&&(m=new Zi(new vu(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Xo(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),fs.copy(b.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(EC.makeRotationFromEuler(fs)),m.material.toneMapped=Ae.getTransfer(O.colorSpace)!==He,(g!==O||v!==O.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Zi(new yu(2,2),new ur({name:"BackgroundMaterial",uniforms:Xo(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Ae.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=O,v=O.version,y=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,b){w.getRGB(hf,_M(o)),r.buffers.color.setClear(hf.r,hf.g,hf.b,b,c)}function C(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,b=1){f.set(w),p=b,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:M,addToRenderList:S,dispose:C}}function bC(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},s=v(null);let l=s,c=!1;function f(R,z,H,k,Y){let it=!1;const F=g(k,H,z);l!==F&&(l=F,d(l.object)),it=y(R,k,H,Y),it&&E(R,k,H,Y),Y!==null&&t.update(Y,o.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,b(R,z,H,k),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function p(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,H){const k=H.wireframe===!0;let Y=r[R.id];Y===void 0&&(Y={},r[R.id]=Y);let it=Y[z.id];it===void 0&&(it={},Y[z.id]=it);let F=it[k];return F===void 0&&(F=v(p()),it[k]=F),F}function v(R){const z=[],H=[],k=[];for(let Y=0;Y<n;Y++)z[Y]=0,H[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:k,object:R,attributes:{},index:null}}function y(R,z,H,k){const Y=l.attributes,it=z.attributes;let F=0;const q=H.getAttributes();for(const j in q)if(q[j].location>=0){const I=Y[j];let tt=it[j];if(tt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),I===void 0||I.attribute!==tt||tt&&I.data!==tt.data)return!0;F++}return l.attributesNum!==F||l.index!==k}function E(R,z,H,k){const Y={},it=z.attributes;let F=0;const q=H.getAttributes();for(const j in q)if(q[j].location>=0){let I=it[j];I===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const tt={};tt.attribute=I,I&&I.data&&(tt.data=I.data),Y[j]=tt,F++}l.attributes=Y,l.attributesNum=F,l.index=k}function M(){const R=l.newAttributes;for(let z=0,H=R.length;z<H;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const H=l.newAttributes,k=l.enabledAttributes,Y=l.attributeDivisors;H[R]=1,k[R]===0&&(o.enableVertexAttribArray(R),k[R]=1),Y[R]!==z&&(o.vertexAttribDivisor(R,z),Y[R]=z)}function C(){const R=l.newAttributes,z=l.enabledAttributes;for(let H=0,k=z.length;H<k;H++)z[H]!==R[H]&&(o.disableVertexAttribArray(H),z[H]=0)}function w(R,z,H,k,Y,it,F){F===!0?o.vertexAttribIPointer(R,z,H,Y,it):o.vertexAttribPointer(R,z,H,k,Y,it)}function b(R,z,H,k){M();const Y=k.attributes,it=H.getAttributes(),F=z.defaultAttributeValues;for(const q in it){const j=it[q];if(j.location>=0){let gt=Y[q];if(gt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const I=gt.normalized,tt=gt.itemSize,dt=t.get(gt);if(dt===void 0)continue;const vt=dt.buffer,K=dt.type,ft=dt.bytesPerElement,Mt=K===o.INT||K===o.UNSIGNED_INT||gt.gpuType===g_;if(gt.isInterleavedBufferAttribute){const wt=gt.data,Tt=wt.stride,Qt=gt.offset;if(wt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<j.locationSize;Vt++)x(j.location+Vt,wt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)S(j.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Vt=0;Vt<j.locationSize;Vt++)w(j.location+Vt,tt/j.locationSize,K,I,Tt*ft,(Qt+tt/j.locationSize*Vt)*ft,Mt)}else{if(gt.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)x(j.location+wt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let wt=0;wt<j.locationSize;wt++)S(j.location+wt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let wt=0;wt<j.locationSize;wt++)w(j.location+wt,tt/j.locationSize,K,I,tt*ft,tt/j.locationSize*wt*ft,Mt)}}else if(F!==void 0){const I=F[q];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(j.location,I);break;case 3:o.vertexAttrib3fv(j.location,I);break;case 4:o.vertexAttrib4fv(j.location,I);break;default:o.vertexAttrib1fv(j.location,I)}}}}C()}function O(){B();for(const R in r){const z=r[R];for(const H in z){const k=z[H];for(const Y in k)m(k[Y].object),delete k[Y];delete z[H]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const H in z){const k=z[H];for(const Y in k)m(k[Y].object),delete k[Y];delete z[H]}delete r[R.id]}function L(R){for(const z in r){const H=r[z];if(H[R.id]===void 0)continue;const k=H[R.id];for(const Y in k)m(k[Y].object),delete k[Y];delete H[R.id]}}function B(){A(),c=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:B,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:S,disableUnusedAttributes:C}}function AC(o,t,n){let r;function s(d){r=d}function l(d,m){o.drawArrays(r,d,m),n.update(m,r,1)}function c(d,m,g){g!==0&&(o.drawArraysInstanced(r,d,m,g),n.update(m,r,g))}function f(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,g);let y=0;for(let E=0;E<g;E++)y+=m[E];n.update(y,r,1)}function p(d,m,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,d,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];n.update(E,r,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function RC(o,t,n,r){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(L){return!(L!==Ii&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const B=L===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Xr&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Fr&&!B)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=p(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:O,maxSamples:P}}function wC(o){const t=this;let n=null,r=0,s=!1,l=!1;const c=new ps,f=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||s;return s=v,r=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||l&&!S)l?m(null):d();else{const C=l?0:r,w=C*4;let b=x.clippingState||null;p.value=b,b=m(E,v,w,y);for(let O=0;O!==w;++O)b[O]=n[O];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(g,v,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const x=y+M*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,b=y;w!==M;++w,b+=4)c.copy(g[w]).applyMatrix4(C,f),c.normal.toArray(S,b),S[b+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function CC(o){let t=new WeakMap;function n(c,f){return f===pm?c.mapping=Go:f===mm&&(c.mapping=Vo),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===pm||f===mm)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new NA(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const Ro=4,yx=[.125,.215,.35,.446,.526,.582],gs=20,Bp=new SM,xx=new Re;let Ip=null,Fp=0,Hp=0,Gp=!1;const ms=(1+Math.sqrt(5))/2,To=1/ms,Sx=[new ut(-ms,To,0),new ut(ms,To,0),new ut(-To,0,ms),new ut(To,0,ms),new ut(0,ms,-To),new ut(0,ms,To),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],DC=new ut;class Mx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,s=100,l={}){const{size:c=256,position:f=DC}=l;Ip=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ip,Fp,Hp),this._renderer.xr.enabled=Gp,t.scissorTest=!1,df(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Go||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ip=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Wo,format:Ii,colorSpace:ko,depthBuffer:!1},s=Ex(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(t,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UC(l)),this._blurMaterial=LC(l,t,n)}return s}_compileMaterial(t){const n=new Zi(this._lodPlanes[0],t);this._renderer.compile(n,Bp)}_sceneToCubeUV(t,n,r,s,l){const p=new Wi(90,1,n,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(xx),g.toneMapping=Na,g.autoClear=!1;const E=new dM({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),M=new Zi(new vu,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(xx),S=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(p.up.set(0,d[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[C],l.y,l.z)):w===1?(p.up.set(0,0,d[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[C],l.z)):(p.up.set(0,d[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[C]));const b=this._cubeSize;df(s,w*b,C>2?b:0,b,b),g.setRenderTarget(s),S&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,s=t.mapping===Go||t.mapping===Vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Zi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;df(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Bp)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Sx[(s-l-1)%Sx.length];this._blur(t,l-1,l,c,f)}n.autoClear=r}_blur(t,n,r,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,s,"latitudinal",l),this._halfBlur(c,t,r,r,s,"longitudinal",l)}_halfBlur(t,n,r,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Zi(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*gs-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):gs;S>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const x=[];let C=0;for(let L=0;L<gs;++L){const B=L/M,A=Math.exp(-B*B/2);x.push(A),L===0?C+=A:L<S&&(C+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/C;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-r;const b=this._sizeLods[s],O=3*b*(s>w-Ro?s-w+Ro:0),P=4*(this._cubeSize-b);df(n,O,P,3*b,2*b),p.setRenderTarget(n),p.render(g,Bp)}}function UC(o){const t=[],n=[],r=[];let s=o;const l=o-Ro+1+yx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-Ro?p=yx[c-o+Ro-1]:c===0&&(p=0),r.push(p);const d=1/(f-2),m=-d,g=1+d,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,E=6,M=3,S=2,x=1,C=new Float32Array(M*E*y),w=new Float32Array(S*E*y),b=new Float32Array(x*E*y);for(let P=0;P<y;P++){const L=P%3*2/3-1,B=P>2?0:-1,A=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];C.set(A,M*E*P),w.set(v,S*E*P);const R=[P,P,P,P,P,P];b.set(R,x*E*P)}const O=new Us;O.setAttribute("position",new or(C,M)),O.setAttribute("uv",new or(w,S)),O.setAttribute("faceIndex",new or(b,x)),t.push(O),s>Ro&&s--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ex(o,t,n){const r=new Ia(o,t,n);return r.texture.mapping=kf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function df(o,t,n,r,s){o.viewport.set(t,n,r,s),o.scissor.set(t,n,r,s)}function LC(o,t,n){const r=new Float32Array(gs),s=new ut(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:b_(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Tx(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:b_(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function bx(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:b_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function b_(){return`

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
	`}function OC(o){let t=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,d=p===pm||p===mm,m=p===Go||p===Vo;if(d||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Mx(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||m&&y&&s(y)?(n===null&&(n=new Mx(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let m=0;m<d;m++)f[m]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function NC(o){const t={};function n(r){if(t[r]!==void 0)return t[r];let s;switch(r){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(r)}return t[r]=s,s}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const s=n(r);return s===null&&Lo("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function PC(o,t,n,r){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const C=y.array;M=y.version;for(let w=0,b=C.length;w<b;w+=3){const O=C[w+0],P=C[w+1],L=C[w+2];v.push(O,P,P,L,L,O)}}else if(E!==void 0){const C=E.array;M=E.version;for(let w=0,b=C.length/3-1;w<b;w+=3){const O=w+0,P=w+1,L=w+2;v.push(O,P,P,L,L,O)}}else return;const S=new(uM(v)?mM:pM)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function m(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:m}}function zC(o,t,n){let r;function s(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,y){o.drawElements(r,y,l,v*c),n.update(y,r,1)}function d(v,y,E){E!==0&&(o.drawElementsInstanced(r,y,l,v*c,E),n.update(y,r,E))}function m(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,r,1)}function g(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,M,0,E);let x=0;for(let C=0;C<E;C++)x+=y[C]*M[C];n.update(x,r,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function BC(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:r}}function IC(o,t,n){const r=new WeakMap,s=new un;function l(c,f,p){const d=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==g){let R=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let O=f.attributes.position.count*b,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const L=new Float32Array(O*P*4*g),B=new cM(L,O,P,g);B.type=Fr,B.needsUpdate=!0;const A=b*4;for(let z=0;z<g;z++){const H=x[z],k=C[z],Y=w[z],it=O*P*4*z;for(let F=0;F<H.count;F++){const q=F*A;E===!0&&(s.fromBufferAttribute(H,F),L[it+q+0]=s.x,L[it+q+1]=s.y,L[it+q+2]=s.z,L[it+q+3]=0),M===!0&&(s.fromBufferAttribute(k,F),L[it+q+4]=s.x,L[it+q+5]=s.y,L[it+q+6]=s.z,L[it+q+7]=0),S===!0&&(s.fromBufferAttribute(Y,F),L[it+q+8]=s.x,L[it+q+9]=s.y,L[it+q+10]=s.z,L[it+q+11]=Y.itemSize===4?s.w:1)}}v={count:g,texture:B,size:new Ue(O,P)},r.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function FC(o,t,n,r){let s=new WeakMap;function l(p){const d=r.render.frame,m=p.geometry,g=t.get(p,m);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const EM=new si,Ax=new xM(1,1),TM=new cM,bM=new _A,AM=new vM,Rx=[],wx=[],Cx=new Float32Array(16),Dx=new Float32Array(9),Ux=new Float32Array(4);function jo(o,t,n){const r=o[0];if(r<=0||r>0)return o;const s=t*n;let l=Rx[s];if(l===void 0&&(l=new Float32Array(s),Rx[s]=l),t!==0){r.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Sn(o,t){if(o.length!==t.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==t[n])return!1;return!0}function Mn(o,t){for(let n=0,r=t.length;n<r;n++)o[n]=t[n]}function qf(o,t){let n=wx[t];n===void 0&&(n=new Int32Array(t),wx[t]=n);for(let r=0;r!==t;++r)n[r]=o.allocateTextureUnit();return n}function HC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function GC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2fv(this.addr,t),Mn(n,t)}}function VC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;o.uniform3fv(this.addr,t),Mn(n,t)}}function kC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4fv(this.addr,t),Mn(n,t)}}function XC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;Ux.set(r),o.uniformMatrix2fv(this.addr,!1,Ux),Mn(n,r)}}function qC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;Dx.set(r),o.uniformMatrix3fv(this.addr,!1,Dx),Mn(n,r)}}function WC(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;Cx.set(r),o.uniformMatrix4fv(this.addr,!1,Cx),Mn(n,r)}}function YC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function jC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2iv(this.addr,t),Mn(n,t)}}function ZC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3iv(this.addr,t),Mn(n,t)}}function KC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4iv(this.addr,t),Mn(n,t)}}function QC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function JC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2uiv(this.addr,t),Mn(n,t)}}function $C(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3uiv(this.addr,t),Mn(n,t)}}function t2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4uiv(this.addr,t),Mn(n,t)}}function e2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Ax.compareFunction=lM,l=Ax):l=EM,n.setTexture2D(t||l,s)}function n2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture3D(t||bM,s)}function i2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTextureCube(t||AM,s)}function r2(o,t,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture2DArray(t||TM,s)}function a2(o){switch(o){case 5126:return HC;case 35664:return GC;case 35665:return VC;case 35666:return kC;case 35674:return XC;case 35675:return qC;case 35676:return WC;case 5124:case 35670:return YC;case 35667:case 35671:return jC;case 35668:case 35672:return ZC;case 35669:case 35673:return KC;case 5125:return QC;case 36294:return JC;case 36295:return $C;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}function s2(o,t){o.uniform1fv(this.addr,t)}function o2(o,t){const n=jo(t,this.size,2);o.uniform2fv(this.addr,n)}function l2(o,t){const n=jo(t,this.size,3);o.uniform3fv(this.addr,n)}function u2(o,t){const n=jo(t,this.size,4);o.uniform4fv(this.addr,n)}function c2(o,t){const n=jo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function f2(o,t){const n=jo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function h2(o,t){const n=jo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function d2(o,t){o.uniform1iv(this.addr,t)}function p2(o,t){o.uniform2iv(this.addr,t)}function m2(o,t){o.uniform3iv(this.addr,t)}function _2(o,t){o.uniform4iv(this.addr,t)}function g2(o,t){o.uniform1uiv(this.addr,t)}function v2(o,t){o.uniform2uiv(this.addr,t)}function y2(o,t){o.uniform3uiv(this.addr,t)}function x2(o,t){o.uniform4uiv(this.addr,t)}function S2(o,t,n){const r=this.cache,s=t.length,l=qf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||EM,l[c])}function M2(o,t,n){const r=this.cache,s=t.length,l=qf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||bM,l[c])}function E2(o,t,n){const r=this.cache,s=t.length,l=qf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||AM,l[c])}function T2(o,t,n){const r=this.cache,s=t.length,l=qf(n,s);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||TM,l[c])}function b2(o){switch(o){case 5126:return s2;case 35664:return o2;case 35665:return l2;case 35666:return u2;case 35674:return c2;case 35675:return f2;case 35676:return h2;case 5124:case 35670:return d2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return _2;case 5125:return g2;case 36294:return v2;case 36295:return y2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return T2}}class A2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=a2(n.type)}}class R2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=b2(n.type)}}class w2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],r)}}}const Vp=/(\w+)(\])?(\[|\.)?/g;function Lx(o,t){o.seq.push(t),o.map[t.id]=t}function C2(o,t,n){const r=o.name,s=r.length;for(Vp.lastIndex=0;;){const l=Vp.exec(r),c=Vp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){Lx(n,d===void 0?new A2(f,o,t):new R2(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new w2(f),Lx(n,g)),n=g}}}class bf{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);C2(l,c,this)}}setValue(t,n,r,s){const l=this.map[n];l!==void 0&&l.setValue(t,r,s)}setOptional(t,n,r){const s=n[r];s!==void 0&&this.setValue(t,r,s)}static upload(t,n,r,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const r=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&r.push(c)}return r}}function Ox(o,t,n){const r=o.createShader(t);return o.shaderSource(r,n),o.compileShader(r),r}const D2=37297;let U2=0;function L2(o,t){const n=o.split(`
`),r=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;r.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Nx=new oe;function O2(o){Ae._getMatrix(Nx,Ae.workingColorSpace,o);const t=`mat3( ${Nx.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Nf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Px(o,t,n){const r=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(r&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+s+`

`+L2(o.getShaderSource(t),c)}else return s}function N2(o,t){const n=O2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function P2(o,t){let n;switch(t){case G1:n="Linear";break;case V1:n="Reinhard";break;case k1:n="Cineon";break;case X1:n="ACESFilmic";break;case W1:n="AgX";break;case Y1:n="Neutral";break;case q1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pf=new ut;function z2(){Ae.getLuminanceCoefficients(pf);const o=pf.x.toFixed(4),t=pf.y.toFixed(4),n=pf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($l).join(`
`)}function I2(o){const t=[];for(const n in o){const r=o[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function F2(o,t){const n={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function $l(o){return o!==""}function zx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qm(o){return o.replace(H2,V2)}const G2=new Map;function V2(o,t){let n=ue[t];if(n===void 0){const r=G2.get(t);if(r!==void 0)n=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return qm(n)}const k2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ix(o){return o.replace(k2,X2)}function X2(o,t,n,r){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Fx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function q2(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===QS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===x1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pr&&(t="SHADOWMAP_TYPE_VSM"),t}function W2(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Go:case Vo:t="ENVMAP_TYPE_CUBE";break;case kf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y2(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Vo:t="ENVMAP_MODE_REFRACTION";break}return t}function j2(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case JS:t="ENVMAP_BLENDING_MULTIPLY";break;case F1:t="ENVMAP_BLENDING_MIX";break;case H1:t="ENVMAP_BLENDING_ADD";break}return t}function Z2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function K2(o,t,n,r){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=q2(n),d=W2(n),m=Y2(n),g=j2(n),v=Z2(n),y=B2(n),E=I2(l),M=s.createProgram();let S,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter($l).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter($l).join(`
`),x.length>0&&(x+=`
`)):(S=[Fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($l).join(`
`),x=[Fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Na?"#define TONE_MAPPING":"",n.toneMapping!==Na?ue.tonemapping_pars_fragment:"",n.toneMapping!==Na?P2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,N2("linearToOutputTexel",n.outputColorSpace),z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($l).join(`
`)),c=qm(c),c=zx(c,n),c=Bx(c,n),f=qm(f),f=zx(f,n),f=Bx(f,n),c=Ix(c),f=Ix(f),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=C+S+c,b=C+x+f,O=Ox(s,s.VERTEX_SHADER,w),P=Ox(s,s.FRAGMENT_SHADER,b);s.attachShader(M,O),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(z){if(o.debug.checkShaderErrors){const H=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(P).trim();let it=!0,F=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,O,P);else{const q=Px(s,O,"vertex"),j=Px(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+H+`
`+q+`
`+j)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Y==="")&&(F=!1);F&&(z.diagnostics={runnable:it,programLog:H,vertexShader:{log:k,prefix:S},fragmentShader:{log:Y,prefix:x}})}s.deleteShader(O),s.deleteShader(P),B=new bf(s,M),A=F2(s,M)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,D2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let Q2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new $2(t),n.set(t,r)),r}}class $2{constructor(t){this.id=Q2++,this.code=t,this.usedTimes=0}}function tD(o,t,n,r,s,l,c){const f=new fM,p=new J2,d=new Set,m=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function S(A,R,z,H,k){const Y=H.fog,it=k.geometry,F=A.isMeshStandardMaterial?H.environment:null,q=(A.isMeshStandardMaterial?n:t).get(A.envMap||F),j=q&&q.mapping===kf?q.image.height:null,gt=E[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const I=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,tt=I!==void 0?I.length:0;let dt=0;it.morphAttributes.position!==void 0&&(dt=1),it.morphAttributes.normal!==void 0&&(dt=2),it.morphAttributes.color!==void 0&&(dt=3);let vt,K,ft,Mt;if(gt){const Te=rr[gt];vt=Te.vertexShader,K=Te.fragmentShader}else vt=A.vertexShader,K=A.fragmentShader,p.update(A),ft=p.getVertexShaderID(A),Mt=p.getFragmentShaderID(A);const wt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Qt=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,Se=!!A.map,Le=!!A.matcap,_e=!!q,X=!!A.aoMap,Un=!!A.lightMap,Ee=!!A.bumpMap,de=!!A.normalMap,kt=!!A.displacementMap,ge=!!A.emissiveMap,Zt=!!A.metalnessMap,ae=!!A.roughnessMap,an=A.anisotropy>0,G=A.clearcoat>0,D=A.dispersion>0,rt=A.iridescence>0,pt=A.sheen>0,_t=A.transmission>0,ct=an&&!!A.anisotropyMap,Pt=G&&!!A.clearcoatMap,Ut=G&&!!A.clearcoatNormalMap,Gt=G&&!!A.clearcoatRoughnessMap,Xt=rt&&!!A.iridescenceMap,Et=rt&&!!A.iridescenceThicknessMap,zt=pt&&!!A.sheenColorMap,Yt=pt&&!!A.sheenRoughnessMap,jt=!!A.specularMap,Ct=!!A.specularColorMap,re=!!A.specularIntensityMap,Z=_t&&!!A.transmissionMap,Lt=_t&&!!A.thicknessMap,bt=!!A.gradientMap,Bt=!!A.alphaMap,Rt=A.alphaTest>0,xt=!!A.alphaHash,Ft=!!A.extensions;let ie=Na;A.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Oe={shaderID:gt,shaderType:A.type,shaderName:A.name,vertexShader:vt,fragmentShader:K,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&k.instanceColor!==null,instancingMorph:Qt&&k.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:wt===null?o.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ko,alphaToCoverage:!!A.alphaToCoverage,map:Se,matcap:Le,envMap:_e,envMapMode:_e&&q.mapping,envMapCubeUVHeight:j,aoMap:X,lightMap:Un,bumpMap:Ee,normalMap:de,displacementMap:v&&kt,emissiveMap:ge,normalMapObjectSpace:de&&A.normalMapType===J1,normalMapTangentSpace:de&&A.normalMapType===Q1,metalnessMap:Zt,roughnessMap:ae,anisotropy:an,anisotropyMap:ct,clearcoat:G,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:D,iridescence:rt,iridescenceMap:Xt,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:re,transmission:_t,transmissionMap:Z,thicknessMap:Lt,gradientMap:bt,opaque:A.transparent===!1&&A.blending===Uo&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Rt,alphaHash:xt,combine:A.combine,mapUv:Se&&M(A.map.channel),aoMapUv:X&&M(A.aoMap.channel),lightMapUv:Un&&M(A.lightMap.channel),bumpMapUv:Ee&&M(A.bumpMap.channel),normalMapUv:de&&M(A.normalMap.channel),displacementMapUv:kt&&M(A.displacementMap.channel),emissiveMapUv:ge&&M(A.emissiveMap.channel),metalnessMapUv:Zt&&M(A.metalnessMap.channel),roughnessMapUv:ae&&M(A.roughnessMap.channel),anisotropyMapUv:ct&&M(A.anisotropyMap.channel),clearcoatMapUv:Pt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(A.sheenRoughnessMap.channel),specularMapUv:jt&&M(A.specularMap.channel),specularColorMapUv:Ct&&M(A.specularColorMap.channel),specularIntensityMapUv:re&&M(A.specularIntensityMap.channel),transmissionMapUv:Z&&M(A.transmissionMap.channel),thicknessMapUv:Lt&&M(A.thicknessMap.channel),alphaMapUv:Bt&&M(A.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(de||an),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!it.attributes.uv&&(Se||Bt),fog:!!Y,useFog:A.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Se&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:ge&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ir,flipSided:A.side===ai,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ft&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&A.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function x(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(C(R,A),w(R,A),R.push(o.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function C(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function w(A,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function b(A){const R=E[A.type];let z;if(R){const H=rr[R];z=DA.clone(H.uniforms)}else z=A.uniforms;return z}function O(A,R){let z;for(let H=0,k=m.length;H<k;H++){const Y=m[H];if(Y.cacheKey===R){z=Y,++z.usedTimes;break}}return z===void 0&&(z=new K2(o,R,A,l),m.push(z)),z}function P(A){if(--A.usedTimes===0){const R=m.indexOf(A);m[R]=m[m.length-1],m.pop(),A.destroy()}}function L(A){p.remove(A)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:O,releaseProgram:P,releaseShaderCache:L,programs:m,dispose:B}}function eD(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function r(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:r,update:s,dispose:l}}function nD(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Hx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Gx(){const o=[];let t=0;const n=[],r=[],s=[];function l(){t=0,n.length=0,r.length=0,s.length=0}function c(g,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?r.push(x):y.transparent===!0?s.push(x):n.push(x)}function p(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?r.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||nD),r.length>1&&r.sort(v||Hx),s.length>1&&s.sort(v||Hx)}function m(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:s,init:l,push:f,unshift:p,finish:m,sort:d}}function iD(){let o=new WeakMap;function t(r,s){const l=o.get(r);let c;return l===void 0?(c=new Gx,o.set(r,[c])):s>=l.length?(c=new Gx,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function rD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Re};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function aD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let sD=0;function oD(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function lD(o){const t=new rD,n=aD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ut);const s=new ut,l=new _n,c=new _n;function f(d){let m=0,g=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,C=0,w=0,b=0,O=0,P=0,L=0;d.sort(oD);for(let A=0,R=d.length;A<R;A++){const z=d[A],H=z.color,k=z.intensity,Y=z.distance,it=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=H.r*k,g+=H.g*k,v+=H.b*k;else if(z.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(z.sh.coefficients[F],k);L++}else if(z.isDirectionalLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=it,r.directionalShadowMatrix[y]=z.shadow.matrix,C++}r.directional[y]=F,y++}else if(z.isSpotLight){const F=t.get(z);F.position.setFromMatrixPosition(z.matrixWorld),F.color.copy(H).multiplyScalar(k),F.distance=Y,F.coneCos=Math.cos(z.angle),F.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),F.decay=z.decay,r.spot[M]=F;const q=z.shadow;if(z.map&&(r.spotLightMap[O]=z.map,O++,q.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[M]=q.matrix,z.castShadow){const j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[M]=j,r.spotShadowMap[M]=it,b++}M++}else if(z.isRectAreaLight){const F=t.get(z);F.color.copy(H).multiplyScalar(k),F.halfWidth.set(z.width*.5,0,0),F.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=F,S++}else if(z.isPointLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),F.distance=z.distance,F.decay=z.decay,z.castShadow){const q=z.shadow,j=n.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=it,r.pointShadowMatrix[E]=z.shadow.matrix,w++}r.point[E]=F,E++}else if(z.isHemisphereLight){const F=t.get(z);F.skyColor.copy(z.color).multiplyScalar(k),F.groundColor.copy(z.groundColor).multiplyScalar(k),r.hemi[x]=F,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==C||B.numPointShadows!==w||B.numSpotShadows!==b||B.numSpotMaps!==O||B.numLightProbes!==L)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+O-P,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=L,B.directionalLength=y,B.pointLength=E,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=C,B.numPointShadows=w,B.numSpotShadows=b,B.numSpotMaps=O,B.numLightProbes=L,r.version=sD++)}function p(d,m){let g=0,v=0,y=0,E=0,M=0;const S=m.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const w=d[x];if(w.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),g++}else if(w.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(w.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:r}}function Vx(o){const t=new lD(o),n=[],r=[];function s(m){d.camera=m,n.length=0,r.length=0}function l(m){n.push(m)}function c(m){r.push(m)}function f(){t.setup(n)}function p(m){t.setupView(n,m)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function uD(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new Vx(o),t.set(s,[f])):l>=c.length?(f=new Vx(o),c.push(f)):f=c[l],f}function r(){t=new WeakMap}return{get:n,dispose:r}}const cD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fD=`uniform sampler2D shadow_pass;
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
}`;function hD(o,t,n){let r=new yM;const s=new Ue,l=new Ue,c=new un,f=new FA({depthPacking:K1}),p=new HA,d={},m=n.maxTextureSize,g={[Ba]:ai,[ai]:Ba,[Ir]:Ir},v=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:cD,fragmentShader:fD}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Us;E.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=QS;let x=this.type;this.render=function(P,L,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const A=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),H=o.state;H.setBlending(Oa),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=x!==Pr&&this.type===Pr,Y=x===Pr&&this.type!==Pr;for(let it=0,F=P.length;it<F;it++){const q=P[it],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const gt=j.getFrameExtents();if(s.multiply(gt),l.copy(j.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/gt.x),s.x=l.x*gt.x,j.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/gt.y),s.y=l.y*gt.y,j.mapSize.y=l.y)),j.map===null||k===!0||Y===!0){const tt=this.type!==Pr?{minFilter:Ki,magFilter:Ki}:{};j.map!==null&&j.map.dispose(),j.map=new Ia(s.x,s.y,tt),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const I=j.getViewportCount();for(let tt=0;tt<I;tt++){const dt=j.getViewport(tt);c.set(l.x*dt.x,l.y*dt.y,l.x*dt.z,l.y*dt.w),H.viewport(c),j.updateMatrices(q,tt),r=j.getFrustum(),b(L,B,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===Pr&&C(j,B),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(A,R,z)};function C(P,L){const B=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ia(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(L,null,B,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(L,null,B,y,M,null)}function w(P,L,B,A){let R=null;const z=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)R=z;else if(R=B.isPointLight===!0?p:f,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=R.uuid,k=L.uuid;let Y=d[H];Y===void 0&&(Y={},d[H]=Y);let it=Y[k];it===void 0&&(it=R.clone(),Y[k]=it,L.addEventListener("dispose",O)),R=it}if(R.visible=L.visible,R.wireframe=L.wireframe,A===Pr?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:g[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const H=o.properties.get(R);H.light=B}return R}function b(P,L,B,A,R){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Pr)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const k=t.update(P),Y=P.material;if(Array.isArray(Y)){const it=k.groups;for(let F=0,q=it.length;F<q;F++){const j=it[F],gt=Y[j.materialIndex];if(gt&&gt.visible){const I=w(P,gt,A,R);P.onBeforeShadow(o,P,L,B,k,I,j),o.renderBufferDirect(B,null,k,I,P,j),P.onAfterShadow(o,P,L,B,k,I,j)}}}else if(Y.visible){const it=w(P,Y,A,R);P.onBeforeShadow(o,P,L,B,k,it,null),o.renderBufferDirect(B,null,k,it,P,null),P.onAfterShadow(o,P,L,B,k,it,null)}}const H=P.children;for(let k=0,Y=H.length;k<Y;k++)b(H[k],L,B,A,R)}function O(P){P.target.removeEventListener("dispose",O);for(const B in d){const A=d[B],R=P.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const dD={[om]:lm,[um]:hm,[cm]:dm,[Ho]:fm,[lm]:om,[hm]:um,[dm]:cm,[fm]:Ho};function pD(o,t){function n(){let Z=!1;const Lt=new un;let bt=null;const Bt=new un(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!Z&&(o.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){Z=Rt},setClear:function(Rt,xt,Ft,ie,Oe){Oe===!0&&(Rt*=ie,xt*=ie,Ft*=ie),Lt.set(Rt,xt,Ft,ie),Bt.equals(Lt)===!1&&(o.clearColor(Rt,xt,Ft,ie),Bt.copy(Lt))},reset:function(){Z=!1,bt=null,Bt.set(-1,0,0,0)}}}function r(){let Z=!1,Lt=!1,bt=null,Bt=null,Rt=null;return{setReversed:function(xt){if(Lt!==xt){const Ft=t.get("EXT_clip_control");xt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ie=Rt;Rt=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(xt){xt?wt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(xt){bt!==xt&&!Z&&(o.depthMask(xt),bt=xt)},setFunc:function(xt){if(Lt&&(xt=dD[xt]),Bt!==xt){switch(xt){case om:o.depthFunc(o.NEVER);break;case lm:o.depthFunc(o.ALWAYS);break;case um:o.depthFunc(o.LESS);break;case Ho:o.depthFunc(o.LEQUAL);break;case cm:o.depthFunc(o.EQUAL);break;case fm:o.depthFunc(o.GEQUAL);break;case hm:o.depthFunc(o.GREATER);break;case dm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=xt}},setLocked:function(xt){Z=xt},setClear:function(xt){Rt!==xt&&(Lt&&(xt=1-xt),o.clearDepth(xt),Rt=xt)},reset:function(){Z=!1,bt=null,Bt=null,Rt=null,Lt=!1}}}function s(){let Z=!1,Lt=null,bt=null,Bt=null,Rt=null,xt=null,Ft=null,ie=null,Oe=null;return{setTest:function(Te){Z||(Te?wt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!Z&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,li,En){(bt!==Te||Bt!==li||Rt!==En)&&(o.stencilFunc(Te,li,En),bt=Te,Bt=li,Rt=En)},setOp:function(Te,li,En){(xt!==Te||Ft!==li||ie!==En)&&(o.stencilOp(Te,li,En),xt=Te,Ft=li,ie=En)},setLocked:function(Te){Z=Te},setClear:function(Te){Oe!==Te&&(o.clearStencil(Te),Oe=Te)},reset:function(){Z=!1,Lt=null,bt=null,Bt=null,Rt=null,xt=null,Ft=null,ie=null,Oe=null}}}const l=new n,c=new r,f=new s,p=new WeakMap,d=new WeakMap;let m={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,C=null,w=null,b=null,O=null,P=null,L=new Re(0,0,0),B=0,A=!1,R=null,z=null,H=null,k=null,Y=null;const it=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,q=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=q>=2);let gt=null,I={};const tt=o.getParameter(o.SCISSOR_BOX),dt=o.getParameter(o.VIEWPORT),vt=new un().fromArray(tt),K=new un().fromArray(dt);function ft(Z,Lt,bt,Bt){const Rt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(Z,xt),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<bt;Ft++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(Lt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return xt}const Mt={};Mt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),wt(o.DEPTH_TEST),c.setFunc(Ho),Ee(!1),de(jy),wt(o.CULL_FACE),X(Oa);function wt(Z){m[Z]!==!0&&(o.enable(Z),m[Z]=!0)}function Tt(Z){m[Z]!==!1&&(o.disable(Z),m[Z]=!1)}function Qt(Z,Lt){return g[Z]!==Lt?(o.bindFramebuffer(Z,Lt),g[Z]=Lt,Z===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),Z===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Vt(Z,Lt){let bt=y,Bt=!1;if(Z){bt=v.get(Lt),bt===void 0&&(bt=[],v.set(Lt,bt));const Rt=Z.textures;if(bt.length!==Rt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Ft=Rt.length;xt<Ft;xt++)bt[xt]=o.COLOR_ATTACHMENT0+xt;bt.length=Rt.length,Bt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(bt)}function Se(Z){return E!==Z?(o.useProgram(Z),E=Z,!0):!1}const Le={[_s]:o.FUNC_ADD,[M1]:o.FUNC_SUBTRACT,[E1]:o.FUNC_REVERSE_SUBTRACT};Le[T1]=o.MIN,Le[b1]=o.MAX;const _e={[A1]:o.ZERO,[R1]:o.ONE,[w1]:o.SRC_COLOR,[am]:o.SRC_ALPHA,[N1]:o.SRC_ALPHA_SATURATE,[L1]:o.DST_COLOR,[D1]:o.DST_ALPHA,[C1]:o.ONE_MINUS_SRC_COLOR,[sm]:o.ONE_MINUS_SRC_ALPHA,[O1]:o.ONE_MINUS_DST_COLOR,[U1]:o.ONE_MINUS_DST_ALPHA,[P1]:o.CONSTANT_COLOR,[z1]:o.ONE_MINUS_CONSTANT_COLOR,[B1]:o.CONSTANT_ALPHA,[I1]:o.ONE_MINUS_CONSTANT_ALPHA};function X(Z,Lt,bt,Bt,Rt,xt,Ft,ie,Oe,Te){if(Z===Oa){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(wt(o.BLEND),M=!0),Z!==S1){if(Z!==S||Te!==A){if((x!==_s||b!==_s)&&(o.blendEquation(o.FUNC_ADD),x=_s,b=_s),Te)switch(Z){case Uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zy:o.blendFunc(o.ONE,o.ONE);break;case Ky:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Qy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zy:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ky:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}C=null,w=null,O=null,P=null,L.set(0,0,0),B=0,S=Z,A=Te}return}Rt=Rt||Lt,xt=xt||bt,Ft=Ft||Bt,(Lt!==x||Rt!==b)&&(o.blendEquationSeparate(Le[Lt],Le[Rt]),x=Lt,b=Rt),(bt!==C||Bt!==w||xt!==O||Ft!==P)&&(o.blendFuncSeparate(_e[bt],_e[Bt],_e[xt],_e[Ft]),C=bt,w=Bt,O=xt,P=Ft),(ie.equals(L)===!1||Oe!==B)&&(o.blendColor(ie.r,ie.g,ie.b,Oe),L.copy(ie),B=Oe),S=Z,A=!1}function Un(Z,Lt){Z.side===Ir?Tt(o.CULL_FACE):wt(o.CULL_FACE);let bt=Z.side===ai;Lt&&(bt=!bt),Ee(bt),Z.blending===Uo&&Z.transparent===!1?X(Oa):X(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),c.setFunc(Z.depthFunc),c.setTest(Z.depthTest),c.setMask(Z.depthWrite),l.setMask(Z.colorWrite);const Bt=Z.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(Z.stencilWriteMask),f.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),f.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ge(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?wt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(Z){R!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),R=Z)}function de(Z){Z!==v1?(wt(o.CULL_FACE),Z!==z&&(Z===jy?o.cullFace(o.BACK):Z===y1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),z=Z}function kt(Z){Z!==H&&(F&&o.lineWidth(Z),H=Z)}function ge(Z,Lt,bt){Z?(wt(o.POLYGON_OFFSET_FILL),(k!==Lt||Y!==bt)&&(o.polygonOffset(Lt,bt),k=Lt,Y=bt)):Tt(o.POLYGON_OFFSET_FILL)}function Zt(Z){Z?wt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function ae(Z){Z===void 0&&(Z=o.TEXTURE0+it-1),gt!==Z&&(o.activeTexture(Z),gt=Z)}function an(Z,Lt,bt){bt===void 0&&(gt===null?bt=o.TEXTURE0+it-1:bt=gt);let Bt=I[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},I[bt]=Bt),(Bt.type!==Z||Bt.texture!==Lt)&&(gt!==bt&&(o.activeTexture(bt),gt=bt),o.bindTexture(Z,Lt||Mt[Z]),Bt.type=Z,Bt.texture=Lt)}function G(){const Z=I[gt];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function D(){try{o.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _t(){try{o.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(){try{o.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{o.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Xt(){try{o.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{o.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function zt(Z){vt.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),vt.copy(Z))}function Yt(Z){K.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),K.copy(Z))}function jt(Z,Lt){let bt=d.get(Lt);bt===void 0&&(bt=new WeakMap,d.set(Lt,bt));let Bt=bt.get(Z);Bt===void 0&&(Bt=o.getUniformBlockIndex(Lt,Z.name),bt.set(Z,Bt))}function Ct(Z,Lt){const Bt=d.get(Lt).get(Z);p.get(Lt)!==Bt&&(o.uniformBlockBinding(Lt,Bt,Z.__bindingPointIndex),p.set(Lt,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},gt=null,I={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,C=null,w=null,b=null,O=null,P=null,L=new Re(0,0,0),B=0,A=!1,R=null,z=null,H=null,k=null,Y=null,vt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:wt,disable:Tt,bindFramebuffer:Qt,drawBuffers:Vt,useProgram:Se,setBlending:X,setMaterial:Un,setFlipSided:Ee,setCullFace:de,setLineWidth:kt,setPolygonOffset:ge,setScissorTest:Zt,activeTexture:ae,bindTexture:an,unbindTexture:G,compressedTexImage2D:D,compressedTexImage3D:rt,texImage2D:Xt,texImage3D:Et,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:pt,texSubImage3D:_t,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:zt,viewport:Yt,reset:re}}function mD(o,t,n,r,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ue,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(G,D){return y?new OffscreenCanvas(G,D):zf("canvas")}function M(G,D,rt){let pt=1;const _t=an(G);if((_t.width>rt||_t.height>rt)&&(pt=rt/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const ct=Math.floor(pt*_t.width),Pt=Math.floor(pt*_t.height);g===void 0&&(g=E(ct,Pt));const Ut=D?E(ct,Pt):g;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(G,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),G;return G}function S(G){return G.generateMipmaps}function x(G){o.generateMipmap(G)}function C(G){return G.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?o.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(G,D,rt,pt,_t=!1){if(G!==null){if(o[G]!==void 0)return o[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ct=D;if(D===o.RED&&(rt===o.FLOAT&&(ct=o.R32F),rt===o.HALF_FLOAT&&(ct=o.R16F),rt===o.UNSIGNED_BYTE&&(ct=o.R8)),D===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.R8UI),rt===o.UNSIGNED_SHORT&&(ct=o.R16UI),rt===o.UNSIGNED_INT&&(ct=o.R32UI),rt===o.BYTE&&(ct=o.R8I),rt===o.SHORT&&(ct=o.R16I),rt===o.INT&&(ct=o.R32I)),D===o.RG&&(rt===o.FLOAT&&(ct=o.RG32F),rt===o.HALF_FLOAT&&(ct=o.RG16F),rt===o.UNSIGNED_BYTE&&(ct=o.RG8)),D===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),rt===o.UNSIGNED_INT&&(ct=o.RG32UI),rt===o.BYTE&&(ct=o.RG8I),rt===o.SHORT&&(ct=o.RG16I),rt===o.INT&&(ct=o.RG32I)),D===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),rt===o.UNSIGNED_INT&&(ct=o.RGB32UI),rt===o.BYTE&&(ct=o.RGB8I),rt===o.SHORT&&(ct=o.RGB16I),rt===o.INT&&(ct=o.RGB32I)),D===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),rt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),rt===o.BYTE&&(ct=o.RGBA8I),rt===o.SHORT&&(ct=o.RGBA16I),rt===o.INT&&(ct=o.RGBA32I)),D===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),D===o.RGBA){const Pt=_t?Nf:Ae.getTransfer(pt);rt===o.FLOAT&&(ct=o.RGBA32F),rt===o.HALF_FLOAT&&(ct=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(ct=Pt===He?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function b(G,D){let rt;return G?D===null||D===ws||D===fu?rt=o.DEPTH24_STENCIL8:D===Fr?rt=o.DEPTH32F_STENCIL8:D===cu&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===ws||D===fu?rt=o.DEPTH_COMPONENT24:D===Fr?rt=o.DEPTH_COMPONENT32F:D===cu&&(rt=o.DEPTH_COMPONENT16),rt}function O(G,D){return S(G)===!0||G.isFramebufferTexture&&G.minFilter!==Ki&&G.minFilter!==Bi?Math.log2(Math.max(D.width,D.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?D.mipmaps.length:1}function P(G){const D=G.target;D.removeEventListener("dispose",P),B(D),D.isVideoTexture&&m.delete(D)}function L(G){const D=G.target;D.removeEventListener("dispose",L),R(D)}function B(G){const D=r.get(G);if(D.__webglInit===void 0)return;const rt=G.source,pt=v.get(rt);if(pt){const _t=pt[D.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&A(G),Object.keys(pt).length===0&&v.delete(rt)}r.remove(G)}function A(G){const D=r.get(G);o.deleteTexture(D.__webglTexture);const rt=G.source,pt=v.get(rt);delete pt[D.__cacheKey],c.memory.textures--}function R(G){const D=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(D.__webglFramebuffer[pt]))for(let _t=0;_t<D.__webglFramebuffer[pt].length;_t++)o.deleteFramebuffer(D.__webglFramebuffer[pt][_t]);else o.deleteFramebuffer(D.__webglFramebuffer[pt]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[pt])}else{if(Array.isArray(D.__webglFramebuffer))for(let pt=0;pt<D.__webglFramebuffer.length;pt++)o.deleteFramebuffer(D.__webglFramebuffer[pt]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let pt=0;pt<D.__webglColorRenderbuffer.length;pt++)D.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[pt]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const rt=G.textures;for(let pt=0,_t=rt.length;pt<_t;pt++){const ct=r.get(rt[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),r.remove(rt[pt])}r.remove(G)}let z=0;function H(){z=0}function k(){const G=z;return G>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+s.maxTextures),z+=1,G}function Y(G){const D=[];return D.push(G.wrapS),D.push(G.wrapT),D.push(G.wrapR||0),D.push(G.magFilter),D.push(G.minFilter),D.push(G.anisotropy),D.push(G.internalFormat),D.push(G.format),D.push(G.type),D.push(G.generateMipmaps),D.push(G.premultiplyAlpha),D.push(G.flipY),D.push(G.unpackAlignment),D.push(G.colorSpace),D.join()}function it(G,D){const rt=r.get(G);if(G.isVideoTexture&&Zt(G),G.isRenderTargetTexture===!1&&G.version>0&&rt.__version!==G.version){const pt=G.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(rt,G,D);return}}n.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+D)}function F(G,D){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){Mt(rt,G,D);return}n.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+D)}function q(G,D){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){Mt(rt,G,D);return}n.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+D)}function j(G,D){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){wt(rt,G,D);return}n.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+D)}const gt={[_m]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[gm]:o.MIRRORED_REPEAT},I={[Ki]:o.NEAREST,[j1]:o.NEAREST_MIPMAP_NEAREST,[Wc]:o.NEAREST_MIPMAP_LINEAR,[Bi]:o.LINEAR,[hp]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},tt={[$1]:o.NEVER,[aA]:o.ALWAYS,[tA]:o.LESS,[lM]:o.LEQUAL,[eA]:o.EQUAL,[rA]:o.GEQUAL,[nA]:o.GREATER,[iA]:o.NOTEQUAL};function dt(G,D){if(D.type===Fr&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Bi||D.magFilter===hp||D.magFilter===Wc||D.magFilter===xs||D.minFilter===Bi||D.minFilter===hp||D.minFilter===Wc||D.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(G,o.TEXTURE_WRAP_S,gt[D.wrapS]),o.texParameteri(G,o.TEXTURE_WRAP_T,gt[D.wrapT]),(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)&&o.texParameteri(G,o.TEXTURE_WRAP_R,gt[D.wrapR]),o.texParameteri(G,o.TEXTURE_MAG_FILTER,I[D.magFilter]),o.texParameteri(G,o.TEXTURE_MIN_FILTER,I[D.minFilter]),D.compareFunction&&(o.texParameteri(G,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(G,o.TEXTURE_COMPARE_FUNC,tt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Ki||D.minFilter!==Wc&&D.minFilter!==xs||D.type===Fr&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(G,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function vt(G,D){let rt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,D.addEventListener("dispose",P));const pt=D.source;let _t=v.get(pt);_t===void 0&&(_t={},v.set(pt,_t));const ct=Y(D);if(ct!==G.__cacheKey){_t[ct]===void 0&&(_t[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,rt=!0),_t[ct].usedTimes++;const Pt=_t[G.__cacheKey];Pt!==void 0&&(_t[G.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(D)),G.__cacheKey=ct,G.__webglTexture=_t[ct].texture}return rt}function K(G,D,rt){return Math.floor(Math.floor(G/rt)/D)}function ft(G,D,rt,pt){const ct=G.updateRanges;if(ct.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,D.width,D.height,rt,pt,D.data);else{ct.sort((Et,zt)=>Et.start-zt.start);let Pt=0;for(let Et=1;Et<ct.length;Et++){const zt=ct[Pt],Yt=ct[Et],jt=zt.start+zt.count,Ct=K(Yt.start,D.width,4),re=K(zt.start,D.width,4);Yt.start<=jt+1&&Ct===re&&K(Yt.start+Yt.count-1,D.width,4)===Ct?zt.count=Math.max(zt.count,Yt.start+Yt.count-zt.start):(++Pt,ct[Pt]=Yt)}ct.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,D.width);for(let Et=0,zt=ct.length;Et<zt;Et++){const Yt=ct[Et],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),re=jt%D.width,Z=Math.floor(jt/D.width),Lt=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(o.TEXTURE_2D,0,re,Z,Lt,bt,rt,pt,D.data)}G.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function Mt(G,D,rt){let pt=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(pt=o.TEXTURE_3D);const _t=vt(G,D),ct=D.source;n.bindTexture(pt,G.__webglTexture,o.TEXTURE0+rt);const Pt=r.get(ct);if(ct.version!==Pt.__version||_t===!0){n.activeTexture(o.TEXTURE0+rt);const Ut=Ae.getPrimaries(Ae.workingColorSpace),Gt=D.colorSpace===Aa?null:Ae.getPrimaries(D.colorSpace),Xt=D.colorSpace===Aa||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Et=M(D.image,!1,s.maxTextureSize);Et=ae(D,Et);const zt=l.convert(D.format,D.colorSpace),Yt=l.convert(D.type);let jt=w(D.internalFormat,zt,Yt,D.colorSpace,D.isVideoTexture);dt(pt,D);let Ct;const re=D.mipmaps,Z=D.isVideoTexture!==!0,Lt=Pt.__version===void 0||_t===!0,bt=ct.dataReady,Bt=O(D,Et);if(D.isDepthTexture)jt=b(D.format===du,D.type),Lt&&(Z?n.texStorage2D(o.TEXTURE_2D,1,jt,Et.width,Et.height):n.texImage2D(o.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,null));else if(D.isDataTexture)if(re.length>0){Z&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],Z?bt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data);D.generateMipmaps=!1}else Z?(Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,Et.width,Et.height),bt&&ft(D,Et,zt,Yt)):n.texImage2D(o.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,Et.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Z&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,re[0].width,re[0].height,Et.depth);for(let Rt=0,xt=re.length;Rt<xt;Rt++)if(Ct=re[Rt],D.format!==Ii)if(zt!==null)if(Z){if(bt)if(D.layerUpdates.size>0){const Ft=vx(Ct.width,Ct.height,D.format,D.type);for(const ie of D.layerUpdates){const Oe=Ct.data.subarray(ie*Ft/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,ie,Ct.width,Ct.height,1,zt,Oe)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,Et.depth,zt,Ct.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?bt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,Et.depth,zt,Yt,Ct.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,Et.depth,0,zt,Yt,Ct.data)}else{Z&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],D.format!==Ii?zt!==null?Z?bt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Ct.data):n.compressedTexImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?bt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data)}else if(D.isDataArrayTexture)if(Z){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,Et.width,Et.height,Et.depth),bt)if(D.layerUpdates.size>0){const Rt=vx(Et.width,Et.height,D.format,D.type);for(const xt of D.layerUpdates){const Ft=Et.data.subarray(xt*Rt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,zt,Yt,Ft)}D.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(D.isData3DTexture)Z?(Lt&&n.texStorage3D(o.TEXTURE_3D,Bt,jt,Et.width,Et.height,Et.depth),bt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)):n.texImage3D(o.TEXTURE_3D,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(D.isFramebufferTexture){if(Lt)if(Z)n.texStorage2D(o.TEXTURE_2D,Bt,jt,Et.width,Et.height);else{let Rt=Et.width,xt=Et.height;for(let Ft=0;Ft<Bt;Ft++)n.texImage2D(o.TEXTURE_2D,Ft,jt,Rt,xt,0,zt,Yt,null),Rt>>=1,xt>>=1}}else if(re.length>0){if(Z&&Lt){const Rt=an(re[0]);n.texStorage2D(o.TEXTURE_2D,Bt,jt,Rt.width,Rt.height)}for(let Rt=0,xt=re.length;Rt<xt;Rt++)Ct=re[Rt],Z?bt&&n.texSubImage2D(o.TEXTURE_2D,Rt,0,0,zt,Yt,Ct):n.texImage2D(o.TEXTURE_2D,Rt,jt,zt,Yt,Ct);D.generateMipmaps=!1}else if(Z){if(Lt){const Rt=an(Et);n.texStorage2D(o.TEXTURE_2D,Bt,jt,Rt.width,Rt.height)}bt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Yt,Et)}else n.texImage2D(o.TEXTURE_2D,0,jt,zt,Yt,Et);S(D)&&x(pt),Pt.__version=ct.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function wt(G,D,rt){if(D.image.length!==6)return;const pt=vt(G,D),_t=D.source;n.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+rt);const ct=r.get(_t);if(_t.version!==ct.__version||pt===!0){n.activeTexture(o.TEXTURE0+rt);const Pt=Ae.getPrimaries(Ae.workingColorSpace),Ut=D.colorSpace===Aa?null:Ae.getPrimaries(D.colorSpace),Gt=D.colorSpace===Aa||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Xt=D.isCompressedTexture||D.image[0].isCompressedTexture,Et=D.image[0]&&D.image[0].isDataTexture,zt=[];for(let xt=0;xt<6;xt++)!Xt&&!Et?zt[xt]=M(D.image[xt],!0,s.maxCubemapSize):zt[xt]=Et?D.image[xt].image:D.image[xt],zt[xt]=ae(D,zt[xt]);const Yt=zt[0],jt=l.convert(D.format,D.colorSpace),Ct=l.convert(D.type),re=w(D.internalFormat,jt,Ct,D.colorSpace),Z=D.isVideoTexture!==!0,Lt=ct.__version===void 0||pt===!0,bt=_t.dataReady;let Bt=O(D,Yt);dt(o.TEXTURE_CUBE_MAP,D);let Rt;if(Xt){Z&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){Rt=zt[xt].mipmaps;for(let Ft=0;Ft<Rt.length;Ft++){const ie=Rt[Ft];D.format!==Ii?jt!==null?Z?bt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ie.width,ie.height,jt,ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ie.width,ie.height,jt,Ct,ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,re,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(Rt=D.mipmaps,Z&&Lt){Rt.length>0&&Bt++;const xt=an(zt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt[xt].width,zt[xt].height,jt,Ct,zt[xt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,zt[xt].width,zt[xt].height,0,jt,Ct,zt[xt].data);for(let Ft=0;Ft<Rt.length;Ft++){const Oe=Rt[Ft].image[xt].image;Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,Oe.width,Oe.height,jt,Ct,Oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,re,Oe.width,Oe.height,0,jt,Ct,Oe.data)}}else{Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Ct,zt[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,jt,Ct,zt[xt]);for(let Ft=0;Ft<Rt.length;Ft++){const ie=Rt[Ft];Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,jt,Ct,ie.image[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,re,jt,Ct,ie.image[xt])}}}S(D)&&x(o.TEXTURE_CUBE_MAP),ct.__version=_t.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function Tt(G,D,rt,pt,_t,ct){const Pt=l.convert(rt.format,rt.colorSpace),Ut=l.convert(rt.type),Gt=w(rt.internalFormat,Pt,Ut,rt.colorSpace),Xt=r.get(D),Et=r.get(rt);if(Et.__renderTarget=D,!Xt.__hasExternalTextures){const zt=Math.max(1,D.width>>ct),Yt=Math.max(1,D.height>>ct);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?n.texImage3D(_t,ct,Gt,zt,Yt,D.depth,0,Pt,Ut,null):n.texImage2D(_t,ct,Gt,zt,Yt,0,Pt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,G),ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,_t,Et.__webglTexture,0,kt(D)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,_t,Et.__webglTexture,ct),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(G,D,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,G),D.depthBuffer){const pt=D.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,ct=b(D.stencilBuffer,_t),Pt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=kt(D);ge(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,D.width,D.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,ct,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,G)}else{const pt=D.textures;for(let _t=0;_t<pt.length;_t++){const ct=pt[_t],Pt=l.convert(ct.format,ct.colorSpace),Ut=l.convert(ct.type),Gt=w(ct.internalFormat,Pt,Ut,ct.colorSpace),Xt=kt(D);rt&&ge(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Gt,D.width,D.height):ge(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,Gt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(G,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,G),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(D.depthTexture);pt.__renderTarget=D,(!pt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),it(D.depthTexture,0);const _t=pt.__webglTexture,ct=kt(D);if(D.depthTexture.format===hu)ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(D.depthTexture.format===du)ge(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Se(G){const D=r.get(G),rt=G.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==G.depthTexture){const pt=G.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),pt){const _t=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),D.__depthDisposeCallback=_t}D.__boundDepthTexture=pt}if(G.depthTexture&&!D.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=G.texture.mipmaps;pt&&pt.length>0?Vt(D.__webglFramebuffer[0],G):Vt(D.__webglFramebuffer,G)}else if(rt){D.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[pt]),D.__webglDepthbuffer[pt]===void 0)D.__webglDepthbuffer[pt]=o.createRenderbuffer(),Qt(D.__webglDepthbuffer[pt],G,!1);else{const _t=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=D.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}else{const pt=G.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),Qt(D.__webglDepthbuffer,G,!1);else{const _t=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(G,D,rt){const pt=r.get(G);D!==void 0&&Tt(pt.__webglFramebuffer,G,G.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Se(G)}function _e(G){const D=G.texture,rt=r.get(G),pt=r.get(D);G.addEventListener("dispose",L);const _t=G.textures,ct=G.isWebGLCubeRenderTarget===!0,Pt=_t.length>1;if(Pt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=D.version,c.memory.textures++),ct){rt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0){rt.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<D.mipmaps.length;Gt++)rt.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else rt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ut=0;Ut<D.mipmaps.length;Ut++)rt.__webglFramebuffer[Ut]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Xt=r.get(_t[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),c.memory.textures++)}if(G.samples>0&&ge(G)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<_t.length;Ut++){const Gt=_t[Ut];rt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut]);const Xt=l.convert(Gt.format,Gt.colorSpace),Et=l.convert(Gt.type),zt=w(Gt.internalFormat,Xt,Et,Gt.colorSpace,G.isXRRenderTarget===!0),Yt=kt(G);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,zt,G.width,G.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),G.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Qt(rt.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){n.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),dt(o.TEXTURE_CUBE_MAP,D);for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0)for(let Gt=0;Gt<D.mipmaps.length;Gt++)Tt(rt.__webglFramebuffer[Ut][Gt],G,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Tt(rt.__webglFramebuffer[Ut],G,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(D)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const Xt=_t[Ut],Et=r.get(Xt);n.bindTexture(o.TEXTURE_2D,Et.__webglTexture),dt(o.TEXTURE_2D,Xt),Tt(rt.__webglFramebuffer,G,Xt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(Xt)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ut=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,pt.__webglTexture),dt(Ut,D),D.mipmaps&&D.mipmaps.length>0)for(let Gt=0;Gt<D.mipmaps.length;Gt++)Tt(rt.__webglFramebuffer[Gt],G,D,o.COLOR_ATTACHMENT0,Ut,Gt);else Tt(rt.__webglFramebuffer,G,D,o.COLOR_ATTACHMENT0,Ut,0);S(D)&&x(Ut),n.unbindTexture()}G.depthBuffer&&Se(G)}function X(G){const D=G.textures;for(let rt=0,pt=D.length;rt<pt;rt++){const _t=D[rt];if(S(_t)){const ct=C(G),Pt=r.get(_t).__webglTexture;n.bindTexture(ct,Pt),x(ct),n.unbindTexture()}}}const Un=[],Ee=[];function de(G){if(G.samples>0){if(ge(G)===!1){const D=G.textures,rt=G.width,pt=G.height;let _t=o.COLOR_BUFFER_BIT;const ct=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(G),Ut=D.length>1;if(Ut)for(let Xt=0;Xt<D.length;Xt++)n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=G.texture.mipmaps;Gt&&Gt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<D.length;Xt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=r.get(D[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,rt,pt,0,0,rt,pt,_t,o.NEAREST),p===!0&&(Un.length=0,Ee.length=0,Un.push(o.COLOR_ATTACHMENT0+Xt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Un.push(ct),Ee.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Un))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<D.length;Xt++){n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=r.get(D[Xt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Et,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&p){const D=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function kt(G){return Math.min(s.maxSamples,G.samples)}function ge(G){const D=r.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Zt(G){const D=c.render.frame;m.get(G)!==D&&(m.set(G,D),G.update())}function ae(G,D){const rt=G.colorSpace,pt=G.format,_t=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||rt!==ko&&rt!==Aa&&(Ae.getTransfer(rt)===He?(pt!==Ii||_t!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),D}function an(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(d.width=G.naturalWidth||G.width,d.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(d.width=G.displayWidth,d.height=G.displayHeight):(d.width=G.width,d.height=G.height),d}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=it,this.setTexture2DArray=F,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ge}function _D(o,t){function n(r,s=Aa){let l;const c=Ae.getTransfer(s);if(r===Xr)return o.UNSIGNED_BYTE;if(r===v_)return o.UNSIGNED_SHORT_4_4_4_4;if(r===y_)return o.UNSIGNED_SHORT_5_5_5_1;if(r===nM)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===tM)return o.BYTE;if(r===eM)return o.SHORT;if(r===cu)return o.UNSIGNED_SHORT;if(r===g_)return o.INT;if(r===ws)return o.UNSIGNED_INT;if(r===Fr)return o.FLOAT;if(r===Wo)return o.HALF_FLOAT;if(r===iM)return o.ALPHA;if(r===rM)return o.RGB;if(r===Ii)return o.RGBA;if(r===hu)return o.DEPTH_COMPONENT;if(r===du)return o.DEPTH_STENCIL;if(r===aM)return o.RED;if(r===x_)return o.RED_INTEGER;if(r===sM)return o.RG;if(r===S_)return o.RG_INTEGER;if(r===M_)return o.RGBA_INTEGER;if(r===xf||r===Sf||r===Mf||r===Ef)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===xf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ef)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===xf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ef)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vm||r===ym||r===xm||r===Sm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ym)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mm||r===Em||r===Tm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Mm||r===Em)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Tm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bm||r===Am||r===Rm||r===wm||r===Cm||r===Dm||r===Um||r===Lm||r===Om||r===Nm||r===Pm||r===zm||r===Bm||r===Im)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Am)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Um)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Om)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Im)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tf||r===Fm||r===Hm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Tf)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oM||r===Gm||r===Vm||r===km)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===Tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Gm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===km)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fu?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const gD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vD=`
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

}`;class yD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const s=new si,l=t.properties.get(s);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new ur({vertexShader:gD,fragmentShader:vD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new yu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xD extends Yo{constructor(t,n){super();const r=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,m=null,g=null,v=null,y=null,E=null;const M=new yD,S=n.getContextAttributes();let x=null,C=null;const w=[],b=[],O=new Ue;let P=null;const L=new Wi;L.viewport=new un;const B=new Wi;B.viewport=new un;const A=[L,B],R=new GA;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=w[K];return ft===void 0&&(ft=new Pp,w[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=w[K];return ft===void 0&&(ft=new Pp,w[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=w[K];return ft===void 0&&(ft=new Pp,w[K]=ft),ft.getHandSpace()};function k(K){const ft=b.indexOf(K.inputSource);if(ft===-1)return;const Mt=w[ft];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,d||c),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let K=0;K<w.length;K++){const ft=b[K];ft!==null&&(b[K]=null,w[K].disconnect(ft))}z=null,H=null,M.reset(),t.setRenderTarget(x),y=null,v=null,g=null,s=null,C=null,vt.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Tt=null;S.depth&&(Tt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=S.stencil?du:hu,wt=S.stencil?fu:ws);const Qt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:l};g=new XRWebGLBinding(s,n),v=g.createProjectionLayer(Qt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Ia(v.textureWidth,v.textureHeight,{format:Ii,type:Xr,depthTexture:new xM(v.textureWidth,v.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,Mt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ia(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:Xr,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),vt.setContext(s),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function it(K){for(let ft=0;ft<K.removed.length;ft++){const Mt=K.removed[ft],wt=b.indexOf(Mt);wt>=0&&(b[wt]=null,w[wt].disconnect(Mt))}for(let ft=0;ft<K.added.length;ft++){const Mt=K.added[ft];let wt=b.indexOf(Mt);if(wt===-1){for(let Qt=0;Qt<w.length;Qt++)if(Qt>=b.length){b.push(Mt),wt=Qt;break}else if(b[Qt]===null){b[Qt]=Mt,wt=Qt;break}if(wt===-1)break}const Tt=w[wt];Tt&&Tt.connect(Mt)}}const F=new ut,q=new ut;function j(K,ft,Mt){F.setFromMatrixPosition(ft.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const wt=F.distanceTo(q),Tt=ft.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,Vt=Tt[14]/(Tt[10]-1),Se=Tt[14]/(Tt[10]+1),Le=(Tt[9]+1)/Tt[5],_e=(Tt[9]-1)/Tt[5],X=(Tt[8]-1)/Tt[0],Un=(Qt[8]+1)/Qt[0],Ee=Vt*X,de=Vt*Un,kt=wt/(-X+Un),ge=kt*-X;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ge),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Zt=Vt+kt,ae=Se+kt,an=Ee-ge,G=de+(wt-ge),D=Le*Se/ae*Zt,rt=_e*Se/ae*Zt;K.projectionMatrix.makePerspective(an,G,D,rt,Zt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function gt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,Mt=K.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),R.near=B.near=L.near=ft,R.far=B.far=L.far=Mt,(z!==R.near||H!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,H=R.far),L.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,R.layers.mask=L.layers.mask|B.layers.mask;const wt=K.parent,Tt=R.cameras;gt(R,wt);for(let Qt=0;Qt<Tt.length;Qt++)gt(Tt[Qt],wt);Tt.length===2?j(R,L,B):R.projectionMatrix.copy(L.projectionMatrix),I(K,R,wt)};function I(K,ft,Mt){Mt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xm*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let tt=null;function dt(K,ft){if(m=ft.getViewerPose(d||c),E=ft,m!==null){const Mt=m.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let wt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,wt=!0);for(let Vt=0;Vt<Mt.length;Vt++){const Se=Mt[Vt];let Le=null;if(y!==null)Le=y.getViewport(Se);else{const X=g.getViewSubImage(v,Se);Le=X.viewport,Vt===0&&(t.setRenderTargetTextures(C,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(C))}let _e=A[Vt];_e===void 0&&(_e=new Wi,_e.layers.enable(Vt),_e.viewport=new un,A[Vt]=_e),_e.matrix.fromArray(Se.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Se.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Le.x,Le.y,Le.width,Le.height),Vt===0&&(R.matrix.copy(_e.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),wt===!0&&R.cameras.push(_e)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const Vt=g.getDepthInformation(Mt[0]);Vt&&Vt.isValid&&Vt.texture&&M.init(t,Vt,s.renderState)}}for(let Mt=0;Mt<w.length;Mt++){const wt=b[Mt],Tt=w[Mt];wt!==null&&Tt!==void 0&&Tt.update(wt,ft,d||c)}tt&&tt(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const vt=new MM;vt.setAnimationLoop(dt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const hs=new Ds,SD=new _n;function MD(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,_M(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,C,w,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,C,w):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ai&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ai&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const C=t.get(x),w=C.envMap,b=C.envMapRotation;w&&(S.envMap.value=w,hs.copy(b),hs.x*=-1,hs.y*=-1,hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(SD.makeRotationFromEuler(hs)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,C,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*C,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,C){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const C=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function ED(o,t,n,r){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,w){const b=w.program;r.uniformBlockBinding(C,b)}function d(C,w){let b=s[C.id];b===void 0&&(E(C),b=m(C),s[C.id]=b,C.addEventListener("dispose",S));const O=w.program;r.updateUBOMapping(C,O);const P=t.render.frame;l[C.id]!==P&&(v(C),l[C.id]=P)}function m(C){const w=g();C.__bindingPointIndex=w;const b=o.createBuffer(),O=C.__size,P=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,b),b}function g(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const w=s[C.id],b=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let P=0,L=b.length;P<L;P++){const B=Array.isArray(b[P])?b[P]:[b[P]];for(let A=0,R=B.length;A<R;A++){const z=B[A];if(y(z,P,A,O)===!0){const H=z.__offset,k=Array.isArray(z.value)?z.value:[z.value];let Y=0;for(let it=0;it<k.length;it++){const F=k[it],q=M(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,H+Y,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,H,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,w,b,O){const P=C.value,L=w+"_"+b;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{const B=O[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function E(C){const w=C.uniforms;let b=0;const O=16;for(let L=0,B=w.length;L<B;L++){const A=Array.isArray(w[L])?w[L]:[w[L]];for(let R=0,z=A.length;R<z;R++){const H=A[R],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,it=k.length;Y<it;Y++){const F=k[Y],q=M(F),j=b%O,gt=j%q.boundary,I=j+gt;b+=gt,I!==0&&O-I<q.storage&&(b+=O-I),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=q.storage}}}const P=b%O;return P>0&&(b+=O-P),C.__size=b,C.__cache={},this}function M(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function S(C){const w=C.target;w.removeEventListener("dispose",S);const b=c.indexOf(w.__bindingPointIndex);c.splice(b,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function x(){for(const C in s)o.deleteBuffer(s[C]);c=[],s={},l={}}return{bind:p,update:d,dispose:x}}class TD{constructor(t={}){const{canvas:n=oA(),context:r=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const C=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=Oi;let P=0,L=0,B=null,A=-1,R=null;const z=new un,H=new un;let k=null;const Y=new Re(0);let it=0,F=n.width,q=n.height,j=1,gt=null,I=null;const tt=new un(0,0,F,q),dt=new un(0,0,F,q);let vt=!1;const K=new yM;let ft=!1,Mt=!1;const wt=new _n,Tt=new _n,Qt=new ut,Vt=new un,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function _e(){return B===null?j:1}let X=r;function Un(N,J){return n.getContext(N,J)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${__}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",xt,!1),X===null){const J="webgl2";if(X=Un(J,N),X===null)throw Un(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,de,kt,ge,Zt,ae,an,G,D,rt,pt,_t,ct,Pt,Ut,Gt,Xt,Et,zt,Yt,jt,Ct,re,Z;function Lt(){Ee=new NC(X),Ee.init(),Ct=new _D(X,Ee),de=new RC(X,Ee,t,Ct),kt=new pD(X,Ee),de.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),ge=new BC(X),Zt=new eD,ae=new mD(X,Ee,kt,Zt,de,Ct,ge),an=new CC(b),G=new OC(b),D=new kA(X),re=new bC(X,D),rt=new PC(X,D,ge,re),pt=new FC(X,rt,D,ge),zt=new IC(X,de,ae),Gt=new wC(Zt),_t=new tD(b,an,G,Ee,de,re,Gt),ct=new MD(b,Zt),Pt=new iD,Ut=new uD(Ee),Et=new TC(b,an,G,kt,pt,y,p),Xt=new hD(b,pt,de),Z=new ED(X,ge,de,kt),Yt=new AC(X,Ee,ge),jt=new zC(X,Ee,ge),ge.programs=_t.programs,b.capabilities=de,b.extensions=Ee,b.properties=Zt,b.renderLists=Pt,b.shadowMap=Xt,b.state=kt,b.info=ge}Lt();const bt=new xD(b,X);this.xr=bt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(F,q,!1))},this.getSize=function(N){return N.set(F,q)},this.setSize=function(N,J,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,q=J,n.width=Math.floor(N*j),n.height=Math.floor(J*j),ot===!0&&(n.style.width=N+"px",n.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(F*j,q*j).floor()},this.setDrawingBufferSize=function(N,J,ot){F=N,q=J,j=ot,n.width=Math.floor(N*ot),n.height=Math.floor(J*ot),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(tt)},this.setViewport=function(N,J,ot,lt){N.isVector4?tt.set(N.x,N.y,N.z,N.w):tt.set(N,J,ot,lt),kt.viewport(z.copy(tt).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(dt)},this.setScissor=function(N,J,ot,lt){N.isVector4?dt.set(N.x,N.y,N.z,N.w):dt.set(N,J,ot,lt),kt.scissor(H.copy(dt).multiplyScalar(j).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(N){kt.setScissorTest(vt=N)},this.setOpaqueSort=function(N){gt=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,ot=!0){let lt=0;if(N){let $=!1;if(B!==null){const At=B.texture.format;$=At===M_||At===S_||At===x_}if($){const At=B.texture.type,Dt=At===Xr||At===ws||At===cu||At===fu||At===v_||At===y_,Nt=Et.getClearColor(),It=Et.getClearAlpha(),ee=Nt.r,Jt=Nt.g,qt=Nt.b;Dt?(E[0]=ee,E[1]=Jt,E[2]=qt,E[3]=It,X.clearBufferuiv(X.COLOR,0,E)):(M[0]=ee,M[1]=Jt,M[2]=qt,M[3]=It,X.clearBufferiv(X.COLOR,0,M))}else lt|=X.COLOR_BUFFER_BIT}J&&(lt|=X.DEPTH_BUFFER_BIT),ot&&(lt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),Pt.dispose(),Ut.dispose(),Zt.dispose(),an.dispose(),G.dispose(),pt.dispose(),re.dispose(),Z.dispose(),_t.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gn),bt.removeEventListener("sessionend",Ln),Zn.stop()};function Bt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const N=ge.autoReset,J=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,$=Xt.type;Lt(),ge.autoReset=N,Xt.enabled=J,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=$}function xt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ft(N){const J=N.target;J.removeEventListener("dispose",Ft),ie(J)}function ie(N){Oe(N),Zt.remove(N)}function Oe(N){const J=Zt.get(N).programs;J!==void 0&&(J.forEach(function(ot){_t.releaseProgram(ot)}),N.isShaderMaterial&&_t.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,ot,lt,$,At){J===null&&(J=Se);const Dt=$.isMesh&&$.matrixWorld.determinant()<0,Nt=Va(N,J,ot,lt,$);kt.setMaterial(lt,Dt);let It=ot.index,ee=1;if(lt.wireframe===!0){if(It=rt.getWireframeAttribute(ot),It===void 0)return;ee=2}const Jt=ot.drawRange,qt=ot.attributes.position;let le=Jt.start*ee,Ce=(Jt.start+Jt.count)*ee;At!==null&&(le=Math.max(le,At.start*ee),Ce=Math.min(Ce,(At.start+At.count)*ee)),It!==null?(le=Math.max(le,0),Ce=Math.min(Ce,It.count)):qt!=null&&(le=Math.max(le,0),Ce=Math.min(Ce,qt.count));const Ye=Ce-le;if(Ye<0||Ye===1/0)return;re.setup($,lt,Nt,ot,It);let fe,De=Yt;if(It!==null&&(fe=D.get(It),De=jt,De.setIndex(fe)),$.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*_e()),De.setMode(X.LINES)):De.setMode(X.TRIANGLES);else if($.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*_e()),$.isLineSegments?De.setMode(X.LINES):$.isLineLoop?De.setMode(X.LINE_LOOP):De.setMode(X.LINE_STRIP)}else $.isPoints?De.setMode(X.POINTS):$.isSprite&&De.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))De.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Kt=$._multiDrawStarts,ze=$._multiDrawCounts,ve=$._multiDrawCount,Tn=It?D.get(It).bytesPerElement:1,Zr=Zt.get(lt).currentProgram.getUniforms();for(let qe=0;qe<ve;qe++)Zr.setValue(X,"_gl_DrawID",qe),De.render(Kt[qe]/Tn,ze[qe])}else if($.isInstancedMesh)De.renderInstances(le,Ye,$.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ze=Math.min(ot.instanceCount,Kt);De.renderInstances(le,Ye,ze)}else De.render(le,Ye)};function Te(N,J,ot){N.transparent===!0&&N.side===Ir&&N.forceSinglePass===!1?(N.side=ai,N.needsUpdate=!0,Yr(N,J,ot),N.side=Ba,N.needsUpdate=!0,Yr(N,J,ot),N.side=Ir):Yr(N,J,ot)}this.compile=function(N,J,ot=null){ot===null&&(ot=N),x=Ut.get(ot),x.init(J),w.push(x),ot.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),N!==ot&&N.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const lt=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Nt=At[Dt];Te(Nt,ot,$),lt.add(Nt)}else Te(At,ot,$),lt.add(At)}),x=w.pop(),lt},this.compileAsync=function(N,J,ot=null){const lt=this.compile(N,J,ot);return new Promise($=>{function At(){if(lt.forEach(function(Dt){Zt.get(Dt).currentProgram.isReady()&&lt.delete(Dt)}),lt.size===0){$(N);return}setTimeout(At,10)}Ee.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let li=null;function En(N){li&&li(N)}function gn(){Zn.stop()}function Ln(){Zn.start()}const Zn=new MM;Zn.setAnimationLoop(En),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(N){li=N,bt.setAnimationLoop(N),N===null?Zn.stop():Zn.start()},bt.addEventListener("sessionstart",gn),bt.addEventListener("sessionend",Ln),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(J),J=bt.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,J,B),x=Ut.get(N,w.length),x.init(J),w.push(x),Tt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K.setFromProjectionMatrix(Tt),Mt=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,Mt),S=Pt.get(N,C.length),S.init(),C.push(S),bt.enabled===!0&&bt.isPresenting===!0){const At=b.xr.getDepthSensingMesh();At!==null&&Ha(At,J,-1/0,b.sortObjects)}Ha(N,J,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(gt,I),Le=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Le&&Et.addToRenderList(S,N),this.info.render.frame++,ft===!0&&Gt.beginShadows();const ot=x.state.shadowsArray;Xt.render(ot,N,J),ft===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,$=S.transmissive;if(x.setupLights(),J.isArrayCamera){const At=J.cameras;if($.length>0)for(let Dt=0,Nt=At.length;Dt<Nt;Dt++){const It=At[Dt];Su(lt,$,N,It)}Le&&Et.render(N);for(let Dt=0,Nt=At.length;Dt<Nt;Dt++){const It=At[Dt];xu(S,N,It,It.viewport)}}else $.length>0&&Su(lt,$,N,J),Le&&Et.render(N),xu(S,N,J);B!==null&&L===0&&(ae.updateMultisampleRenderTarget(B),ae.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(b,N,J),re.resetDefaultState(),A=-1,R=null,w.pop(),w.length>0?(x=w[w.length-1],ft===!0&&Gt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Ha(N,J,ot,lt){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)ot=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||K.intersectsSprite(N)){lt&&Vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Tt);const Dt=pt.update(N),Nt=N.material;Nt.visible&&S.push(N,Dt,Nt,ot,Vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||K.intersectsObject(N))){const Dt=pt.update(N),Nt=N.material;if(lt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Vt.copy(N.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Vt.copy(Dt.boundingSphere.center)),Vt.applyMatrix4(N.matrixWorld).applyMatrix4(Tt)),Array.isArray(Nt)){const It=Dt.groups;for(let ee=0,Jt=It.length;ee<Jt;ee++){const qt=It[ee],le=Nt[qt.materialIndex];le&&le.visible&&S.push(N,Dt,le,ot,Vt.z,qt)}}else Nt.visible&&S.push(N,Dt,Nt,ot,Vt.z,null)}}const At=N.children;for(let Dt=0,Nt=At.length;Dt<Nt;Dt++)Ha(At[Dt],J,ot,lt)}function xu(N,J,ot,lt){const $=N.opaque,At=N.transmissive,Dt=N.transparent;x.setupLightsView(ot),ft===!0&&Gt.setGlobalState(b.clippingPlanes,ot),lt&&kt.viewport(z.copy(lt)),$.length>0&&Ga($,J,ot),At.length>0&&Ga(At,J,ot),Dt.length>0&&Ga(Dt,J,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Su(N,J,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Ia(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Wo:Xr,minFilter:xs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=x.state.transmissionRenderTarget[lt.id],Dt=lt.viewport||z;At.setSize(Dt.z*b.transmissionResolutionScale,Dt.w*b.transmissionResolutionScale);const Nt=b.getRenderTarget(),It=b.getActiveCubeFace(),ee=b.getActiveMipmapLevel();b.setRenderTarget(At),b.getClearColor(Y),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),Le&&Et.render(ot);const Jt=b.toneMapping;b.toneMapping=Na;const qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),ft===!0&&Gt.setGlobalState(b.clippingPlanes,lt),Ga(N,ot,lt),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ce=0,Ye=J.length;Ce<Ye;Ce++){const fe=J[Ce],De=fe.object,Kt=fe.geometry,ze=fe.material,ve=fe.group;if(ze.side===Ir&&De.layers.test(lt.layers)){const Tn=ze.side;ze.side=ai,ze.needsUpdate=!0,Wr(De,ot,lt,Kt,ze,ve),ze.side=Tn,ze.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}b.setRenderTarget(Nt,It,ee),b.setClearColor(Y,it),qt!==void 0&&(lt.viewport=qt),b.toneMapping=Jt}function Ga(N,J,ot){const lt=J.isScene===!0?J.overrideMaterial:null;for(let $=0,At=N.length;$<At;$++){const Dt=N[$],Nt=Dt.object,It=Dt.geometry,ee=Dt.group;let Jt=Dt.material;Jt.allowOverride===!0&&lt!==null&&(Jt=lt),Nt.layers.test(ot.layers)&&Wr(Nt,J,ot,It,Jt,ee)}}function Wr(N,J,ot,lt,$,At){N.onBeforeRender(b,J,ot,lt,$,At),N.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(b,J,ot,lt,N,At),$.transparent===!0&&$.side===Ir&&$.forceSinglePass===!1?($.side=ai,$.needsUpdate=!0,b.renderBufferDirect(ot,J,lt,$,N,At),$.side=Ba,$.needsUpdate=!0,b.renderBufferDirect(ot,J,lt,$,N,At),$.side=Ir):b.renderBufferDirect(ot,J,lt,$,N,At),N.onAfterRender(b,J,ot,lt,$,At)}function Yr(N,J,ot){J.isScene!==!0&&(J=Se);const lt=Zt.get(N),$=x.state.lights,At=x.state.shadowsArray,Dt=$.state.version,Nt=_t.getParameters(N,$.state,At,J,ot),It=_t.getProgramCacheKey(Nt);let ee=lt.programs;lt.environment=N.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(N.isMeshStandardMaterial?G:an).get(N.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,ee===void 0&&(N.addEventListener("dispose",Ft),ee=new Map,lt.programs=ee);let Jt=ee.get(It);if(Jt!==void 0){if(lt.currentProgram===Jt&&lt.lightsStateVersion===Dt)return fr(N,Nt),Jt}else Nt.uniforms=_t.getUniforms(N),N.onBeforeCompile(Nt,b),Jt=_t.acquireProgram(Nt,It),ee.set(It,Jt),lt.uniforms=Nt.uniforms;const qt=lt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qt.clippingPlanes=Gt.uniform),fr(N,Nt),lt.needsLights=cn(N),lt.lightsStateVersion=Dt,lt.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMap.value=$.state.directionalShadowMap,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotShadowMap.value=$.state.spotShadowMap,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMap.value=$.state.pointShadowMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),lt.currentProgram=Jt,lt.uniformsList=null,Jt}function cr(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=bf.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function fr(N,J){const ot=Zt.get(N);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Va(N,J,ot,lt,$){J.isScene!==!0&&(J=Se),ae.resetTextureUnits();const At=J.fog,Dt=lt.isMeshStandardMaterial?J.environment:null,Nt=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ko,It=(lt.isMeshStandardMaterial?G:an).get(lt.envMap||Dt),ee=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let Ye=Na;lt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ye=b.toneMapping);const fe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,De=fe!==void 0?fe.length:0,Kt=Zt.get(lt),ze=x.state.lights;if(ft===!0&&(Mt===!0||N!==R)){const bn=N===R&&lt.id===A;Gt.setState(lt,N,bn)}let ve=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ze.state.version||Kt.outputColorSpace!==Nt||$.isBatchedMesh&&Kt.batching===!1||!$.isBatchedMesh&&Kt.batching===!0||$.isBatchedMesh&&Kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Kt.instancing===!1||!$.isInstancedMesh&&Kt.instancing===!0||$.isSkinnedMesh&&Kt.skinning===!1||!$.isSkinnedMesh&&Kt.skinning===!0||$.isInstancedMesh&&Kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Kt.instancingMorph===!1&&$.morphTexture!==null||Kt.envMap!==It||lt.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==le||Kt.morphColors!==Ce||Kt.toneMapping!==Ye||Kt.morphTargetsCount!==De)&&(ve=!0):(ve=!0,Kt.__version=lt.version);let Tn=Kt.currentProgram;ve===!0&&(Tn=Yr(lt,J,$));let Zr=!1,qe=!1,dr=!1;const Ge=Tn.getUniforms(),In=Kt.uniforms;if(kt.useProgram(Tn.program)&&(Zr=!0,qe=!0,dr=!0),lt.id!==A&&(A=lt.id,qe=!0),Zr||R!==N){kt.buffers.depth.getReversed()?(wt.copy(N.projectionMatrix),uA(wt),cA(wt),Ge.setValue(X,"projectionMatrix",wt)):Ge.setValue(X,"projectionMatrix",N.projectionMatrix),Ge.setValue(X,"viewMatrix",N.matrixWorldInverse);const On=Ge.map.cameraPosition;On!==void 0&&On.setValue(X,Qt.setFromMatrixPosition(N.matrixWorld)),de.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,qe=!0,dr=!0)}if($.isSkinnedMesh){Ge.setOptional(X,$,"bindMatrix"),Ge.setOptional(X,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ge.setValue(X,"boneTexture",bn.boneTexture,ae))}$.isBatchedMesh&&(Ge.setOptional(X,$,"batchingTexture"),Ge.setValue(X,"batchingTexture",$._matricesTexture,ae),Ge.setOptional(X,$,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",$._indirectTexture,ae),Ge.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",$._colorsTexture,ae));const vn=ot.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&zt.update($,ot,Tn),(qe||Kt.receiveShadow!==$.receiveShadow)&&(Kt.receiveShadow=$.receiveShadow,Ge.setValue(X,"receiveShadow",$.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(In.envMap.value=It,In.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&J.environment!==null&&(In.envMapIntensity.value=J.environmentIntensity),qe&&(Ge.setValue(X,"toneMappingExposure",b.toneMappingExposure),Kt.needsLights&&jr(In,dr),At&&lt.fog===!0&&ct.refreshFogUniforms(In,At),ct.refreshMaterialUniforms(In,lt,j,q,x.state.transmissionRenderTarget[N.id]),bf.upload(X,cr(Kt),In,ae)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(bf.upload(X,cr(Kt),In,ae),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(X,"center",$.center),Ge.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ge.setValue(X,"normalMatrix",$.normalMatrix),Ge.setValue(X,"modelMatrix",$.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const bn=lt.uniformsGroups;for(let On=0,Qi=bn.length;On<Qi;On++){const pr=bn[On];Z.update(pr,Tn),Z.bind(pr,Tn)}}return Tn}function jr(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function cn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,J,ot){const lt=Zt.get(N);lt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Zt.get(N.texture).__webglTexture=J,Zt.get(N.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const ot=Zt.get(N);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0};const Mu=X.createFramebuffer();this.setRenderTarget=function(N,J=0,ot=0){B=N,P=J,L=ot;let lt=!0,$=null,At=!1,Dt=!1;if(N){const It=Zt.get(N);if(It.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(X.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(N);else if(It.__hasExternalTextures)ae.rebindTextures(N,Zt.get(N.texture).__webglTexture,Zt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const qt=N.depthTexture;if(It.__boundDepthTexture!==qt){if(qt!==null&&Zt.has(qt)&&(N.width!==qt.image.width||N.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(N)}}const ee=N.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Dt=!0);const Jt=Zt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Jt[J])?$=Jt[J][ot]:$=Jt[J],At=!0):N.samples>0&&ae.useMultisampledRTT(N)===!1?$=Zt.get(N).__webglMultisampledFramebuffer:Array.isArray(Jt)?$=Jt[ot]:$=Jt,z.copy(N.viewport),H.copy(N.scissor),k=N.scissorTest}else z.copy(tt).multiplyScalar(j).floor(),H.copy(dt).multiplyScalar(j).floor(),k=vt;if(ot!==0&&($=Mu),kt.bindFramebuffer(X.FRAMEBUFFER,$)&&lt&&kt.drawBuffers(N,$),kt.viewport(z),kt.scissor(H),kt.setScissorTest(k),At){const It=Zt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,It.__webglTexture,ot)}else if(Dt){const It=Zt.get(N.texture),ee=J;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,It.__webglTexture,ot,ee)}else if(N!==null&&ot!==0){const It=Zt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,ot)}A=-1},this.readRenderTargetPixels=function(N,J,ot,lt,$,At,Dt,Nt=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Zt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){kt.bindFramebuffer(X.FRAMEBUFFER,It);try{const ee=N.textures[Nt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-lt&&ot>=0&&ot<=N.height-$&&(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(J,ot,lt,$,Ct.convert(Jt),Ct.convert(qt),At))}finally{const ee=B!==null?Zt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,J,ot,lt,$,At,Dt,Nt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Zt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(J>=0&&J<=N.width-lt&&ot>=0&&ot<=N.height-$){kt.bindFramebuffer(X.FRAMEBUFFER,It);const ee=N.textures[Nt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.bufferData(X.PIXEL_PACK_BUFFER,At.byteLength,X.STREAM_READ),N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(J,ot,lt,$,Ct.convert(Jt),Ct.convert(qt),0);const Ce=B!==null?Zt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(X.FRAMEBUFFER,Ce);const Ye=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await lA(X,Ye,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,At),X.deleteBuffer(le),X.deleteSync(Ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,ot=0){const lt=Math.pow(2,-ot),$=Math.floor(N.image.width*lt),At=Math.floor(N.image.height*lt),Dt=J!==null?J.x:0,Nt=J!==null?J.y:0;ae.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,Dt,Nt,$,At),kt.unbindTexture()};const Eu=X.createFramebuffer(),hr=X.createFramebuffer();this.copyTextureToTexture=function(N,J,ot=null,lt=null,$=0,At=null){At===null&&($!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=$,$=0):At=0);let Dt,Nt,It,ee,Jt,qt,le,Ce,Ye;const fe=N.isCompressedTexture?N.mipmaps[At]:N.image;if(ot!==null)Dt=ot.max.x-ot.min.x,Nt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,Jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const vn=Math.pow(2,-$);Dt=Math.floor(fe.width*vn),Nt=Math.floor(fe.height*vn),N.isDataArrayTexture?It=fe.depth:N.isData3DTexture?It=Math.floor(fe.depth*vn):It=1,ee=0,Jt=0,qt=0}lt!==null?(le=lt.x,Ce=lt.y,Ye=lt.z):(le=0,Ce=0,Ye=0);const De=Ct.convert(J.format),Kt=Ct.convert(J.type);let ze;J.isData3DTexture?(ae.setTexture3D(J,0),ze=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ae.setTexture2DArray(J,0),ze=X.TEXTURE_2D_ARRAY):(ae.setTexture2D(J,0),ze=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const ve=X.getParameter(X.UNPACK_ROW_LENGTH),Tn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Zr=X.getParameter(X.UNPACK_SKIP_PIXELS),qe=X.getParameter(X.UNPACK_SKIP_ROWS),dr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,fe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,fe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ee),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt);const Ge=N.isDataArrayTexture||N.isData3DTexture,In=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const vn=Zt.get(N),bn=Zt.get(J),On=Zt.get(vn.__renderTarget),Qi=Zt.get(bn.__renderTarget);kt.bindFramebuffer(X.READ_FRAMEBUFFER,On.__webglFramebuffer),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let pr=0;pr<It;pr++)Ge&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.get(N).__webglTexture,$,qt+pr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.get(J).__webglTexture,At,Ye+pr)),X.blitFramebuffer(ee,Jt,Dt,Nt,le,Ce,Dt,Nt,X.DEPTH_BUFFER_BIT,X.NEAREST);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||N.isRenderTargetTexture||Zt.has(N)){const vn=Zt.get(N),bn=Zt.get(J);kt.bindFramebuffer(X.READ_FRAMEBUFFER,Eu),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,hr);for(let On=0;On<It;On++)Ge?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,$,qt+On):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,$),In?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bn.__webglTexture,At,Ye+On):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bn.__webglTexture,At),$!==0?X.blitFramebuffer(ee,Jt,Dt,Nt,le,Ce,Dt,Nt,X.COLOR_BUFFER_BIT,X.NEAREST):In?X.copyTexSubImage3D(ze,At,le,Ce,Ye+On,ee,Jt,Dt,Nt):X.copyTexSubImage2D(ze,At,le,Ce,ee,Jt,Dt,Nt);kt.bindFramebuffer(X.READ_FRAMEBUFFER,null),kt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else In?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,Kt,fe.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,fe.data):X.texSubImage3D(ze,At,le,Ce,Ye,Dt,Nt,It,De,Kt,fe):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,At,le,Ce,Dt,Nt,De,Kt,fe.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,At,le,Ce,fe.width,fe.height,De,fe.data):X.texSubImage2D(X.TEXTURE_2D,At,le,Ce,Dt,Nt,De,Kt,fe);X.pixelStorei(X.UNPACK_ROW_LENGTH,ve),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zr),X.pixelStorei(X.UNPACK_SKIP_ROWS,qe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,dr),At===0&&J.generateMipmaps&&X.generateMipmap(ze),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,J,ot=null,lt=null,$=0){return Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,ot,lt,$)},this.initRenderTarget=function(N){Zt.get(N).__webglFramebuffer===void 0&&ae.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ae.setTextureCube(N,0):N.isData3DTexture?ae.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ae.setTexture2DArray(N,0):ae.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){P=0,L=0,B=null,kt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const kx=`varying vec2 vUv;\r
\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,bD=`precision highp float;\r
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
}`,AD=`precision highp float;\r
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
}`,Nr={distortionAmount:2.5,fluidDecay:.98,trailLength:.8,color1:new Re("#0f0f0f"),color2:new Re("#282828"),color3:new Re("#555555"),color4:new Re("#828282"),colorIntensity:1,softness:1},RD=30,wD=1.5,mf=.75,CD=150,Xx=new yu(2,2);function DD(){const o=$e.useRef(null);return $e.useEffect(()=>{let t,n,r=!0,s=!0,l=0,c=0,f=Math.min(window.devicePixelRatio,wD),p=!0;const d=window.innerWidth,m=window.innerHeight,g=new TD({antialias:!0,alpha:!0});g.setSize(d,m),g.setPixelRatio(f);const v=new SM(-1,1,1,-1,0,1),y={minFilter:Bi,magFilter:Bi,format:Ii,type:Wo,stencilBuffer:!1,depthBuffer:!1},E=Math.floor(d*mf),M=Math.floor(m*mf),S=new Ia(E,M,y),x=S.clone();let C=S,w=x;const b=new ur({vertexShader:kx,fragmentShader:bD,uniforms:{iTime:{value:0},iResolution:{value:new Ue(E,M)},iFrame:{value:0},iPreviousFrame:{value:w.texture},uFluidDecay:{value:Nr.fluidDecay},uTrailLength:{value:Nr.trailLength}}}),O=new ur({vertexShader:kx,fragmentShader:AD,uniforms:{iTime:{value:0},iResolution:{value:new Ue(d,m)},iFluid:{value:C.texture},uDistortionAmount:{value:Nr.distortionAmount},uColor1:{value:Nr.color1},uColor2:{value:Nr.color2},uColor3:{value:Nr.color3},uColor4:{value:Nr.color4},uColorIntensity:{value:Nr.colorIntensity},uSoftness:{value:Nr.softness}}}),P=new Zi(Xx,b),L=new Zi(Xx,O),B=o.current;B&&B.appendChild(g.domElement);const A=()=>{clearTimeout(n),n=setTimeout(()=>{if(!p||!o.current)return;const Y=window.innerWidth,it=window.innerHeight,F=Math.floor(Y*mf),q=Math.floor(it*mf);g.setSize(Y,it),b.uniforms.iResolution.value.set(F,q),O.uniforms.iResolution.value.set(Y,it),S.setSize(F,q),x.setSize(F,q),c=0},CD)};window.addEventListener("resize",A);const R=()=>{r=!document.hidden};document.addEventListener("visibilitychange",R);const z=new IntersectionObserver(([Y])=>{s=Y.isIntersecting});B&&z.observe(B);let H=[];const k=Y=>{if(!p||(t=requestAnimationFrame(k),!r||!s))return;const it=Y-l;if(it<1e3/RD)return;l=Y;const F=performance.now()*.001;b.uniforms.iTime.value=F,b.uniforms.iFrame.value=c,b.uniforms.iPreviousFrame.value=w.texture,O.uniforms.iTime.value=F,O.uniforms.iFluid.value=C.texture,g.setRenderTarget(C),g.render(P,v),g.setRenderTarget(null),g.render(L,v),[C,w]=[w,C],c++;{const q=it;if(H.push(q),H.length>60){const j=H.reduce((gt,I)=>gt+I,0)/H.length;H=[],j>35&&f>1&&(f=Math.max(1,f-.25),g.setPixelRatio(f))}}};return k(0),()=>{p=!1,cancelAnimationFrame(t),clearTimeout(n),window.removeEventListener("resize",A),document.removeEventListener("visibilitychange",R),z.disconnect(),B&&g.domElement&&B.removeChild(g.domElement),g.dispose(),S.dispose(),x.dispose(),b.dispose(),O.dispose()}},[]),St.jsx("div",{className:"backgroundCanvas",ref:o,"arial-hidden":"true"})}const UD="_hero_ezzxh_1",LD="_hero_title_ezzxh_21",OD="_hero_sides_ezzxh_57",ND="_vertical_link_ezzxh_81",Kl={hero:UD,hero_title:LD,hero_sides:OD,vertical_link:ND},PD=()=>{const[o,t]=$e.useState(1);return $e.useEffect(()=>{const n=()=>{const r=window.scrollY,s=Math.max(1-r/400,0);t(s)};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},[]),St.jsxs("section",{id:"hero","aria-labelledby":"hero-section",className:Kl.hero,style:{opacity:o,pointerEvents:o===0?"none":"auto"},children:[St.jsx("div",{className:Kl.hero_sides,children:St.jsxs("ul",{children:[St.jsx("li",{children:St.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane","aria-label":"email"})}),St.jsx("li",{children:St.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in",target:"_blank","aria-label":"linkedin"})}),St.jsx("li",{children:St.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github",target:"_blank","aria-label":"github"})}),St.jsx("li",{children:St.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen",target:"_blank","aria-label":"codepen"})}),St.jsx("li",{children:St.jsx("a",{href:"https://www.youtube.com/@dnbsammie",className:"fa-brands fa-youtube",target:"_blank","aria-label":"youtube"})})]})}),St.jsxs("div",{className:Kl.hero_title,children:[St.jsx("h5",{children:"Hi, I'm Samuel"}),St.jsxs("h1",{children:["I craft ",St.jsx("span",{className:"text_accent",children:"Experiences"}),St.jsx("br",{}),"that Matter"]})]}),St.jsxs("div",{className:Kl.hero_sides,children:[St.jsx(bs.Link,{to:"projects",smooth:!0,duration:600,className:Kl.vertical_link,children:"SCROLL DOWN"}),St.jsx("i",{className:"fa-solid fa-arrow-down-long"})]})]})},zD="/portfolio/assets/img/img-01.webp",BD="/portfolio/assets/img/img-02.webp",ID="/portfolio/assets/img/img-03.webp",FD="/portfolio/assets/img/img-04.webp",HD="/portfolio/assets/img/img-05.webp",GD=[{title:"ordo",img:zD,orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Ordo",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"youtube",icon:"fa-brands fa-youtube"}]},{title:"soundmorph",img:BD,orientation:"vertical",links:[{href:"https://github.com/dnbsammie/SoundMorph",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"web",icon:"fa-solid fa-link"}]},{title:"aural",img:ID,orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Aural",label:"github",icon:"fa-brands fa-github"},{href:"#",label:"web",icon:"fa-solid fa-link"}]},{title:"trinity",img:FD,orientation:"vertical",links:[{href:"https://github.com/dnbsammie/Trinity",label:"github",icon:"fa-brands fa-github"}]},{title:"overdrive",img:HD,orientation:"horizontal",links:[{href:"https://github.com/dnbsammie/Overdrive",label:"github",icon:"fa-brands fa-github"}]}],VD="_projects_1maqj_1",kD="_sticky_1maqj_13",XD="_scroll_section_1maqj_31",qD="_title_1maqj_97",WD="_project_1maqj_1",YD="_projectTitle_1maqj_181",jD="_links_1maqj_183",ZD="_horizontal_1maqj_257",KD="_vertical_1maqj_269",Ta={projects:VD,sticky:kD,scroll_section:XD,title:qD,project:WD,projectTitle:YD,links:jD,horizontal:ZD,vertical:KD},QD=()=>{const o=$e.useRef(null),t=$e.useRef(null);return $e.useEffect(()=>{const n=()=>{if(!o.current||!t.current)return;const r=o.current.offsetTop,s=window.scrollY,l=Math.min(Math.max((s-r)/window.innerHeight*100,0),500);t.current.style.transform=`translate3d(${-l}vw, 0, 0)`};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),St.jsx("section",{className:Ta.projects,id:"projects",ref:o,"aria-labelledby":"projects-section",children:St.jsxs("div",{className:Ta.sticky,children:[St.jsx("div",{className:Ta.title,children:St.jsx("h1",{children:"projects"})}),St.jsx("div",{className:Ta.scroll_section,ref:t,children:GD.map((n,r)=>St.jsxs("div",{className:`${Ta.project} ${Ta[n.orientation]}`,children:[St.jsx("img",{src:n.img,alt:n.title,loading:"lazy"}),St.jsx("div",{className:Ta.projectTitle,children:n.title}),St.jsx("div",{className:Ta.links,children:n.links.map((s,l)=>St.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer","aria-label":s.label,children:St.jsx("i",{className:s.icon})},l))})]},r))})]})})},JD="_f_head_iu778_43",$D="_f_content_iu778_45",t3="_f_foot_iu778_47",e3="_f_column_iu778_81",n3="_email_link_iu778_125",ba={f_head:JD,f_content:$D,f_foot:t3,f_column:e3,email_link:n3},i3=()=>{const o=new Date().getFullYear();return St.jsxs("footer",{id:"footer",className:ba.contact,"aria-labelledby":"footer-section",children:[St.jsx("div",{className:ba.f_head,id:"footer_head",children:St.jsx("h1",{children:"get in touch"})}),St.jsxs("div",{className:ba.f_content,id:"footer_content",children:[St.jsxs("div",{className:ba.f_column,id:"footer_column",children:[St.jsx("p",{children:"Do you have an idea or project in mind? Write to me and let's create something amazing together."}),St.jsx("a",{href:"mailto:seriveramosq@gmail.com",target:"_blank",rel:"noopener noreferrer",className:ba.email_link,children:"seriveramosq@gmail.com"})]}),St.jsxs("div",{className:ba.f_column,id:"footer_column",children:[St.jsx("h5",{children:"follow me"}),St.jsxs("ul",{children:[St.jsx("li",{children:St.jsx("a",{href:"https://codepen.io/dnbsammie",target:"_blank","aria-label":"codepen",children:"Codepen"})}),St.jsx("li",{children:St.jsx("a",{href:"https://colorswall.com/users/3710",target:"_blank","aria-label":"youtube",children:"ColorsWall"})}),St.jsx("li",{children:St.jsx("a",{href:"https://github.com/dnbsammie",target:"_blank","aria-label":"github",children:"Github"})}),St.jsx("li",{children:St.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",target:"_blank","aria-label":"linkedin",children:"LinkedIn"})}),St.jsx("li",{children:St.jsx("a",{href:"https://www.youtube.com/@dnbsammie",target:"_blank","aria-label":"youtube",children:"Youtube"})})]})]}),St.jsxs("div",{className:ba.f_column,id:"footer_column",children:[St.jsx("h5",{children:"sitemap"}),St.jsxs("ul",{children:[St.jsx("li",{children:St.jsx(bs.Link,{to:"hero",smooth:!0,duration:800,"aria-label":"back to top",children:"Home"})}),St.jsx("li",{children:St.jsx(bs.Link,{to:"projects",smooth:!0,duration:800,"aria-label":"back to top",children:"Work"})})]})]})]}),St.jsxs("div",{className:ba.f_foot,id:"footer-foot",children:[St.jsxs("p",{className:"copyright","aria-label":"copyright",children:["© ",o," Samuel Rivera."]}),St.jsx(bs.Link,{to:"hero",smooth:!0,duration:600,className:"fa-solid fa-arrow-up","aria-label":"back to top"})]})]})};Yi.registerPlugin(qo);const r3=()=>{const[o,t]=$e.useState(!0);return St.jsxs(St.Fragment,{children:[o&&St.jsx(e1,{onComplete:()=>t(!1)}),St.jsx(g1,{}),St.jsx(DD,{}),St.jsxs("main",{role:"main",style:{opacity:o?0:1,transition:"opacity 1.5s ease"},children:[St.jsx(PD,{}),St.jsx(QD,{})]}),St.jsx(i3,{})]})};BT.createRoot(document.getElementById("root")).render(St.jsx($e.StrictMode,{children:St.jsx(r3,{})}));
