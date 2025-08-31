(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ip={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function kT(){if(ly)return Xl;ly=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:o,type:r,key:c,ref:a!==void 0?a:null,props:l}}return Xl.Fragment=t,Xl.jsx=n,Xl.jsxs=n,Xl}var uy;function XT(){return uy||(uy=1,ip.exports=kT()),ip.exports}var mt=XT(),rp={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function qT(){if(cy)return se;cy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(B,Q,ht){this.props=B,this.context=Q,this.refs=M,this.updater=ht||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(B,Q,ht){this.props=B,this.context=Q,this.refs=M,this.updater=ht||y}var A=R.prototype=new x;A.constructor=R,E(A,S.prototype),A.isPureReactComponent=!0;var b=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function U(B,Q,ht,dt,K,ft){return ht=ft.ref,{$$typeof:o,type:B,key:Q,ref:ht!==void 0?ht:null,props:ft}}function I(B,Q){return U(B.type,Q,void 0,void 0,void 0,B.props)}function w(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function C(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ht){return Q[ht]})}var z=/\/+/g;function H(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?C(""+B.key):Q.toString(36)}function k(){}function Y(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(k,k):(B.status="pending",B.then(function(Q){B.status==="pending"&&(B.status="fulfilled",B.value=Q)},function(Q){B.status==="pending"&&(B.status="rejected",B.reason=Q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function et(B,Q,ht,dt,K){var ft=typeof B;(ft==="undefined"||ft==="boolean")&&(B=null);var Mt=!1;if(B===null)Mt=!0;else switch(ft){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(B.$$typeof){case o:case t:Mt=!0;break;case m:return Mt=B._init,et(Mt(B._payload),Q,ht,dt,K)}}if(Mt)return K=K(B),Mt=dt===""?"."+H(B,0):dt,b(K)?(ht="",Mt!=null&&(ht=Mt.replace(z,"$&/")+"/"),et(K,Q,ht,"",function(Zt){return Zt})):K!=null&&(w(K)&&(K=I(K,ht+(K.key==null||B&&B.key===K.key?"":(""+K.key).replace(z,"$&/")+"/")+Mt)),Q.push(K)),1;Mt=0;var Rt=dt===""?".":dt+":";if(b(B))for(var Et=0;Et<B.length;Et++)dt=B[Et],ft=Rt+H(dt,Et),Mt+=et(dt,Q,ht,ft,K);else if(Et=v(B),typeof Et=="function")for(B=Et.call(B),Et=0;!(dt=B.next()).done;)dt=dt.value,ft=Rt+H(dt,Et++),Mt+=et(dt,Q,ht,ft,K);else if(ft==="object"){if(typeof B.then=="function")return et(Y(B),Q,ht,dt,K);throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function F(B,Q,ht){if(B==null)return B;var dt=[],K=0;return et(B,dt,"","",function(ft){return Q.call(ht,ft,K++)}),dt}function X(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(ht){(B._status===0||B._status===-1)&&(B._status=1,B._result=ht)},function(ht){(B._status===0||B._status===-1)&&(B._status=2,B._result=ht)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var W=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function yt(){}return se.Children={map:F,forEach:function(B,Q,ht){F(B,function(){Q.apply(this,arguments)},ht)},count:function(B){var Q=0;return F(B,function(){Q++}),Q},toArray:function(B){return F(B,function(Q){return Q})||[]},only:function(B){if(!w(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},se.Component=S,se.Fragment=n,se.Profiler=a,se.PureComponent=R,se.StrictMode=r,se.Suspense=d,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,se.__COMPILER_RUNTIME={__proto__:null,c:function(B){return D.H.useMemoCache(B)}},se.cache=function(B){return function(){return B.apply(null,arguments)}},se.cloneElement=function(B,Q,ht){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var dt=E({},B.props),K=B.key,ft=void 0;if(Q!=null)for(Mt in Q.ref!==void 0&&(ft=void 0),Q.key!==void 0&&(K=""+Q.key),Q)!N.call(Q,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&Q.ref===void 0||(dt[Mt]=Q[Mt]);var Mt=arguments.length-2;if(Mt===1)dt.children=ht;else if(1<Mt){for(var Rt=Array(Mt),Et=0;Et<Mt;Et++)Rt[Et]=arguments[Et+2];dt.children=Rt}return U(B.type,K,void 0,void 0,ft,dt)},se.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},se.createElement=function(B,Q,ht){var dt,K={},ft=null;if(Q!=null)for(dt in Q.key!==void 0&&(ft=""+Q.key),Q)N.call(Q,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(K[dt]=Q[dt]);var Mt=arguments.length-2;if(Mt===1)K.children=ht;else if(1<Mt){for(var Rt=Array(Mt),Et=0;Et<Mt;Et++)Rt[Et]=arguments[Et+2];K.children=Rt}if(B&&B.defaultProps)for(dt in Mt=B.defaultProps,Mt)K[dt]===void 0&&(K[dt]=Mt[dt]);return U(B,ft,void 0,void 0,null,K)},se.createRef=function(){return{current:null}},se.forwardRef=function(B){return{$$typeof:f,render:B}},se.isValidElement=w,se.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:X}},se.memo=function(B,Q){return{$$typeof:h,type:B,compare:Q===void 0?null:Q}},se.startTransition=function(B){var Q=D.T,ht={};D.T=ht;try{var dt=B(),K=D.S;K!==null&&K(ht,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(yt,W)}catch(ft){W(ft)}finally{D.T=Q}},se.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},se.use=function(B){return D.H.use(B)},se.useActionState=function(B,Q,ht){return D.H.useActionState(B,Q,ht)},se.useCallback=function(B,Q){return D.H.useCallback(B,Q)},se.useContext=function(B){return D.H.useContext(B)},se.useDebugValue=function(){},se.useDeferredValue=function(B,Q){return D.H.useDeferredValue(B,Q)},se.useEffect=function(B,Q,ht){var dt=D.H;if(typeof ht=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return dt.useEffect(B,Q)},se.useId=function(){return D.H.useId()},se.useImperativeHandle=function(B,Q,ht){return D.H.useImperativeHandle(B,Q,ht)},se.useInsertionEffect=function(B,Q){return D.H.useInsertionEffect(B,Q)},se.useLayoutEffect=function(B,Q){return D.H.useLayoutEffect(B,Q)},se.useMemo=function(B,Q){return D.H.useMemo(B,Q)},se.useOptimistic=function(B,Q){return D.H.useOptimistic(B,Q)},se.useReducer=function(B,Q,ht){return D.H.useReducer(B,Q,ht)},se.useRef=function(B){return D.H.useRef(B)},se.useState=function(B){return D.H.useState(B)},se.useSyncExternalStore=function(B,Q,ht){return D.H.useSyncExternalStore(B,Q,ht)},se.useTransition=function(){return D.H.useTransition()},se.version="19.1.0",se}var fy;function jr(){return fy||(fy=1,rp.exports=qT()),rp.exports}var Ye=jr(),ap={exports:{}},ql={},sp={exports:{}},op={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function WT(){return hy||(hy=1,function(o){function t(F,X){var W=F.length;F.push(X);t:for(;0<W;){var yt=W-1>>>1,B=F[yt];if(0<a(B,X))F[yt]=X,F[W]=B,W=yt;else break t}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var X=F[0],W=F.pop();if(W!==X){F[0]=W;t:for(var yt=0,B=F.length,Q=B>>>1;yt<Q;){var ht=2*(yt+1)-1,dt=F[ht],K=ht+1,ft=F[K];if(0>a(dt,W))K<B&&0>a(ft,dt)?(F[yt]=ft,F[K]=W,yt=K):(F[yt]=dt,F[ht]=W,yt=ht);else if(K<B&&0>a(ft,W))F[yt]=ft,F[K]=W,yt=K;else break t}}return X}function a(F,X){var W=F.sortIndex-X.sortIndex;return W!==0?W:F.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,_=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function b(F){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=F)r(h),X.sortIndex=X.expirationTime,t(d,X);else break;X=n(h)}}function D(F){if(M=!1,b(F),!E)if(n(d)!==null)E=!0,N||(N=!0,H());else{var X=n(h);X!==null&&et(D,X.startTime-F)}}var N=!1,U=-1,I=5,w=-1;function C(){return S?!0:!(o.unstable_now()-w<I)}function z(){if(S=!1,N){var F=o.unstable_now();w=F;var X=!0;try{t:{E=!1,M&&(M=!1,R(U),U=-1),y=!0;var W=v;try{e:{for(b(F),_=n(d);_!==null&&!(_.expirationTime>F&&C());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,v=_.priorityLevel;var B=yt(_.expirationTime<=F);if(F=o.unstable_now(),typeof B=="function"){_.callback=B,b(F),X=!0;break e}_===n(d)&&r(d),b(F)}else r(d);_=n(d)}if(_!==null)X=!0;else{var Q=n(h);Q!==null&&et(D,Q.startTime-F),X=!1}}break t}finally{_=null,v=W,y=!1}X=void 0}}finally{X?H():N=!1}}}var H;if(typeof A=="function")H=function(){A(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=z,H=function(){Y.postMessage(null)}}else H=function(){x(z,0)};function et(F,X){U=x(function(){F(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var W=v;v=X;try{return F()}finally{v=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=v;v=F;try{return X()}finally{v=W}},o.unstable_scheduleCallback=function(F,X,W){var yt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=W+B,F={id:m++,callback:X,priorityLevel:F,startTime:W,expirationTime:B,sortIndex:-1},W>yt?(F.sortIndex=W,t(h,F),n(d)===null&&F===n(h)&&(M?(R(U),U=-1):M=!0,et(D,W-yt))):(F.sortIndex=B,t(d,F),E||y||(E=!0,N||(N=!0,H()))),F},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(F){var X=v;return function(){var W=v;v=X;try{return F.apply(this,arguments)}finally{v=W}}}}(op)),op}var dy;function YT(){return dy||(dy=1,sp.exports=WT()),sp.exports}var lp={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function jT(){if(py)return Gn;py=1;var o=jr();function t(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(d,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:_==null?null:""+_,children:d,containerInfo:h,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Gn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(d,h,null,m)},Gn.flushSync=function(d){var h=c.T,m=r.p;try{if(c.T=null,r.p=2,d)return d()}finally{c.T=h,r.p=m,r.d.f()}},Gn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(d,h))},Gn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Gn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?r.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):m==="script"&&r.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Gn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);r.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(d)},Gn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);r.d.L(d,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Gn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);r.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(d)},Gn.requestFormReset=function(d){r.d.r(d)},Gn.unstable_batchedUpdates=function(d,h){return d(h)},Gn.useFormState=function(d,h,m){return c.H.useFormState(d,h,m)},Gn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Gn.version="19.1.0",Gn}var my;function n_(){if(my)return lp.exports;my=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lp.exports=jT(),lp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function ZT(){if(_y)return ql;_y=1;var o=YT(),t=jr(),n=n_();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(r(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,u=i;;){var p=s.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){s=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===s)return f(p),e;if(g===u)return f(p),i;g=g.sibling}throw Error(r(188))}if(s.return!==u.return)s=p,u=g;else{for(var T=!1,O=p.child;O;){if(O===s){T=!0,s=p,u=g;break}if(O===u){T=!0,u=p,s=g;break}O=O.sibling}if(!T){for(O=g.child;O;){if(O===s){T=!0,s=g,u=p;break}if(O===u){T=!0,u=g,s=p;break}O=O.sibling}if(!T)throw Error(r(189))}}if(s.alternate!==u)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function h(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=h(e),i!==null)return i;e=e.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),A=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case D:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case A:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case b:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:Y(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return Y(e(i))}catch{}}return null}var et=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],B=-1;function Q(e){return{current:e}}function ht(e){0>B||(e.current=yt[B],yt[B]=null,B--)}function dt(e,i){B++,yt[B]=e.current,e.current=i}var K=Q(null),ft=Q(null),Mt=Q(null),Rt=Q(null);function Et(e,i){switch(dt(Mt,i),dt(ft,e),dt(K,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?z0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=z0(i),e=I0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ht(K),dt(K,e)}function Zt(){ht(K),ht(ft),ht(Mt)}function Nt(e){e.memoizedState!==null&&dt(Rt,e);var i=K.current,s=I0(i,e.type);i!==s&&(dt(ft,e),dt(K,s))}function Se(e){ft.current===e&&(ht(K),ht(ft)),Rt.current===e&&(ht(Rt),Fl._currentValue=W)}var Le=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,q=o.unstable_cancelCallback,Ln=o.unstable_shouldYield,Ee=o.unstable_requestPaint,de=o.unstable_now,kt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Kt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,an=o.unstable_LowPriority,G=o.unstable_IdlePriority,L=o.log,rt=o.unstable_setDisableYieldValue,_t=null,vt=null;function ct(e){if(typeof L=="function"&&rt(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(_t,e)}catch{}}var zt=Math.clz32?Math.clz32:Xt,Ut=Math.log,Vt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ut(e)/Vt|0)|0}var Tt=256,It=4194304;function Yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var p=0,g=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var O=u&134217727;return O!==0?(u=O&~g,u!==0?p=Yt(u):(T&=O,T!==0?p=Yt(T):s||(s=O&~e,s!==0&&(p=Yt(s))))):(O=u&~g,O!==0?p=Yt(O):T!==0?p=Yt(T):s||(s=u&~e,s!==0&&(p=Yt(s)))),p===0?0:i!==0&&i!==p&&(i&g)===0&&(g=p&-p,s=i&-i,g>=s||g===32&&(s&4194048)!==0)?i:p}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Lt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function bt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,i,s,u,p,g){var T=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var O=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(s=T&~s;0<s;){var pt=31-zt(s),xt=1<<pt;O[pt]=0,V[pt]=-1;var at=it[pt];if(at!==null)for(it[pt]=null,pt=0;pt<at.length;pt++){var st=at[pt];st!==null&&(st.lane&=-536870913)}s&=~xt}u!==0&&St(e,u,0),g!==0&&p===0&&e.tag!==0&&(e.suspendedLanes|=g&~(T&~i))}function St(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-zt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&4194090}function Ht(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-zt(s),p=1<<u;p&i|e[u]&i&&(e[u]|=i),s&=~p}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:ny(e.type))}function ci(e,i){var s=X.p;try{return X.p=e,i()}finally{X.p=s}}var En=Math.random().toString(36).slice(2),gn="__reactFiber$"+En,On="__reactProps$"+En,Zn="__reactContainer$"+En,ka="__reactEvents$"+En,Au="__reactListeners$"+En,Ru="__reactHandles$"+En,Xa="__reactResources$"+En,Zr="__reactMarker$"+En;function Kr(e){delete e[gn],delete e[On],delete e[ka],delete e[Au],delete e[Ru]}function dr(e){var i=e[gn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Zn]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=G0(e);e!==null;){if(s=e[gn])return s;e=G0(e)}return i}e=s,s=e.parentNode}return null}function pr(e){if(e=e[gn]||e[Zn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function qa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Qr(e){var i=e[Xa];return i||(i=e[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(e){e[Zr]=!0}var wu=new Set,Cu={};function mr(e,i){P(e,i),P(e+"Capture",i)}function P(e,i){for(Cu[e]=i,e=0;e<i.length;e++)wu.add(i[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function tt(e){return Le.call(lt,e)?!0:Le.call(ot,e)?!1:$.test(e)?lt[e]=!0:(ot[e]=!0,!1)}function At(e,i,s){if(tt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Dt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Pt(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}var Ft,ee;function Jt(e){if(Ft===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+ee}var qt=!1;function le(e,i){if(!e||qt)return"";qt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var at=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){at=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){at=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),T=g[0],O=g[1];if(T&&O){var V=T.split(`
`),it=O.split(`
`);for(p=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;p<it.length&&!it[p].includes("DetermineComponentFrameRoot");)p++;if(u===V.length||p===it.length)for(u=V.length-1,p=it.length-1;1<=u&&0<=p&&V[u]!==it[p];)p--;for(;1<=u&&0<=p;u--,p--)if(V[u]!==it[p]){if(u!==1||p!==1)do if(u--,p--,0>p||V[u]!==it[p]){var pt=`
`+V[u].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=u&&0<=p);break}}}finally{qt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Jt(s):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Jt("Activity");default:return""}}function je(e){try{var i="";do i+=Ce(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(e){var i=De(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,g=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ze(e){e._valueTracker||(e._valueTracker=Qt(e))}function ve(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jr=/[\n"\\]/g;function qe(e){return e.replace(Jr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _r(e,i,s,u,p,g,T,O){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?Fn(e,T,fe(i)):s!=null?Fn(e,T,fe(s)):u!=null&&e.removeAttribute("value"),p==null&&g!=null&&(e.defaultChecked=!!g),p!=null&&(e.checked=p&&typeof p!="function"&&typeof p!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+fe(O):e.removeAttribute("name")}function Ge(e,i,s,u,p,g,T,O){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.type=g),i!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;s=s!=null?""+fe(s):"",i=i!=null?""+fe(i):s,O||i===e.value||(e.value=i),e.defaultValue=i}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=O?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function Fn(e,i,s){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function vn(e,i,s,u){if(e=e.options,i){i={};for(var p=0;p<s.length;p++)i["$"+s[p]]=!0;for(s=0;s<e.length;s++)p=i.hasOwnProperty("$"+e[s].value),e[s].selected!==p&&(e[s].selected=p),p&&u&&(e[s].defaultSelected=!0)}else{for(s=""+fe(s),i=null,p=0;p<e.length;p++){if(e[p].value===s){e[p].selected=!0,u&&(e[p].defaultSelected=!0);return}i!==null||e[p].disabled||(i=e[p])}i!==null&&(i.selected=!0)}}function bn(e,i,s){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+fe(s):""}function Nn(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(r(92));if(et(u)){if(1<u.length)throw Error(r(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=fe(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u)}function $i(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var gr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function z_(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||gr.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function I_(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var p in i)u=i[p],i.hasOwnProperty(p)&&s[p]!==u&&z_(e,p,u)}else for(var g in i)i.hasOwnProperty(g)&&z_(e,g,i[g])}function nh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(e){return VM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ih=null;function rh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Ps=null;function B_(e){var i=pr(e);if(i&&(e=i.stateNode)){var s=e[On]||null;t:switch(e=i.stateNode,i.type){case"input":if(_r(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var p=u[On]||null;if(!p)throw Error(r(90));_r(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&ve(u)}break t;case"textarea":bn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&vn(e,!!s.multiple,i,!1)}}}var ah=!1;function F_(e,i,s){if(ah)return e(i,s);ah=!0;try{var u=e(i);return u}finally{if(ah=!1,(Ns!==null||Ps!==null)&&(mc(),Ns&&(i=Ns,e=Ps,Ps=Ns=null,B_(i),e)))for(i=0;i<e.length;i++)B_(e[i])}}function Jo(e,i){var s=e.stateNode;if(s===null)return null;var u=s[On]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=!1;if(vr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){sh=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{sh=!1}var $r=null,oh=null,Uu=null;function H_(){if(Uu)return Uu;var e,i=oh,s=i.length,u,p="value"in $r?$r.value:$r.textContent,g=p.length;for(e=0;e<s&&i[e]===p[e];e++);var T=s-e;for(u=1;u<=T&&i[s-u]===p[g-u];u++);return Uu=p.slice(e,1<u?1-u:void 0)}function Lu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ou(){return!0}function G_(){return!1}function Kn(e){function i(s,u,p,g,T){this._reactName=s,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(s=e[O],this[O]=s?s(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ou:G_,this.isPropagationStopped=G_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),i}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Kn(Wa),tl=m({},Wa,{view:0,detail:0}),kM=Kn(tl),lh,uh,el,Pu=m({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(lh=e.screenX-el.screenX,uh=e.screenY-el.screenY):uh=lh=0,el=e),lh)},movementY:function(e){return"movementY"in e?e.movementY:uh}}),V_=Kn(Pu),XM=m({},Pu,{dataTransfer:0}),qM=Kn(XM),WM=m({},tl,{relatedTarget:0}),ch=Kn(WM),YM=m({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),jM=Kn(YM),ZM=m({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),KM=Kn(ZM),QM=m({},Wa,{data:0}),k_=Kn(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eE(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=tE[e])?!!i[e]:!1}function fh(){return eE}var nE=m({},tl,{key:function(e){if(e.key){var i=JM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Lu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$M[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(e){return e.type==="keypress"?Lu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iE=Kn(nE),rE=m({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X_=Kn(rE),aE=m({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),sE=Kn(aE),oE=m({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),lE=Kn(oE),uE=m({},Pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cE=Kn(uE),fE=m({},Wa,{newState:0,oldState:0}),hE=Kn(fE),dE=[9,13,27,32],hh=vr&&"CompositionEvent"in window,nl=null;vr&&"documentMode"in document&&(nl=document.documentMode);var pE=vr&&"TextEvent"in window&&!nl,q_=vr&&(!hh||nl&&8<nl&&11>=nl),W_=" ",Y_=!1;function j_(e,i){switch(e){case"keyup":return dE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function mE(e,i){switch(e){case"compositionend":return Z_(i);case"keypress":return i.which!==32?null:(Y_=!0,W_);case"textInput":return e=i.data,e===W_&&Y_?null:e;default:return null}}function _E(e,i){if(zs)return e==="compositionend"||!hh&&j_(e,i)?(e=H_(),Uu=oh=$r=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return q_&&i.locale!=="ko"?null:i.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!gE[e.type]:i==="textarea"}function Q_(e,i,s,u){Ns?Ps?Ps.push(u):Ps=[u]:Ns=u,i=Sc(i,"onChange"),0<i.length&&(s=new Nu("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var il=null,rl=null;function vE(e){U0(e,0)}function zu(e){var i=qa(e);if(ve(i))return e}function J_(e,i){if(e==="change")return i}var $_=!1;if(vr){var dh;if(vr){var ph="oninput"in document;if(!ph){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),ph=typeof tg.oninput=="function"}dh=ph}else dh=!1;$_=dh&&(!document.documentMode||9<document.documentMode)}function eg(){il&&(il.detachEvent("onpropertychange",ng),rl=il=null)}function ng(e){if(e.propertyName==="value"&&zu(rl)){var i=[];Q_(i,rl,e,rh(e)),F_(vE,i)}}function yE(e,i,s){e==="focusin"?(eg(),il=i,rl=s,il.attachEvent("onpropertychange",ng)):e==="focusout"&&eg()}function xE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(rl)}function SE(e,i){if(e==="click")return zu(i)}function ME(e,i){if(e==="input"||e==="change")return zu(i)}function EE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fi=typeof Object.is=="function"?Object.is:EE;function al(e,i){if(fi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var p=s[u];if(!Le.call(i,p)||!fi(e[p],i[p]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rg(e,i){var s=ig(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=ig(s)}}function ag(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?ag(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function sg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Tn(e.document)}return i}function mh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var TE=vr&&"documentMode"in document&&11>=document.documentMode,Is=null,_h=null,sl=null,gh=!1;function og(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gh||Is==null||Is!==Tn(u)||(u=Is,"selectionStart"in u&&mh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),sl&&al(sl,u)||(sl=u,u=Sc(_h,"onSelect"),0<u.length&&(i=new Nu("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=Is)))}function Ya(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Bs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},vh={},lg={};vr&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function ja(e){if(vh[e])return vh[e];if(!Bs[e])return e;var i=Bs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in lg)return vh[e]=i[s];return e}var ug=ja("animationend"),cg=ja("animationiteration"),fg=ja("animationstart"),bE=ja("transitionrun"),AE=ja("transitionstart"),RE=ja("transitioncancel"),hg=ja("transitionend"),dg=new Map,yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yh.push("scrollEnd");function ki(e,i){dg.set(e,i),mr(i,[e])}var pg=new WeakMap;function Ai(e,i){if(typeof e=="object"&&e!==null){var s=pg.get(e);return s!==void 0?s:(i={value:e,source:i,stack:je(i)},pg.set(e,i),i)}return{value:e,source:i,stack:je(i)}}var Ri=[],Fs=0,xh=0;function Iu(){for(var e=Fs,i=xh=Fs=0;i<e;){var s=Ri[i];Ri[i++]=null;var u=Ri[i];Ri[i++]=null;var p=Ri[i];Ri[i++]=null;var g=Ri[i];if(Ri[i++]=null,u!==null&&p!==null){var T=u.pending;T===null?p.next=p:(p.next=T.next,T.next=p),u.pending=p}g!==0&&mg(s,p,g)}}function Bu(e,i,s,u){Ri[Fs++]=e,Ri[Fs++]=i,Ri[Fs++]=s,Ri[Fs++]=u,xh|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Sh(e,i,s,u){return Bu(e,i,s,u),Fu(e)}function Hs(e,i){return Bu(e,null,null,i),Fu(e)}function mg(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var p=!1,g=e.return;g!==null;)g.childLanes|=s,u=g.alternate,u!==null&&(u.childLanes|=s),g.tag===22&&(e=g.stateNode,e===null||e._visibility&1||(p=!0)),e=g,g=g.return;return e.tag===3?(g=e.stateNode,p&&i!==null&&(p=31-zt(s),e=g.hiddenUpdates,u=e[p],u===null?e[p]=[i]:u.push(i),i.lane=s|536870912),g):null}function Fu(e){if(50<Ul)throw Ul=0,Rd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Gs={};function wE(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,i,s,u){return new wE(e,i,s,u)}function Mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yr(e,i){var s=e.alternate;return s===null?(s=hi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function _g(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Hu(e,i,s,u,p,g){var T=0;if(u=e,typeof e=="function")Mh(e)&&(T=1);else if(typeof e=="string")T=DT(e,s,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=hi(31,s,i,p),e.elementType=w,e.lanes=g,e;case E:return Za(s.children,p,g,i);case M:T=8,p|=24;break;case S:return e=hi(12,s,i,p|2),e.elementType=S,e.lanes=g,e;case D:return e=hi(13,s,i,p),e.elementType=D,e.lanes=g,e;case N:return e=hi(19,s,i,p),e.elementType=N,e.lanes=g,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case A:T=10;break t;case R:T=9;break t;case b:T=11;break t;case U:T=14;break t;case I:T=16,u=null;break t}T=29,s=Error(r(130,e===null?"null":typeof e,"")),u=null}return i=hi(T,s,i,p),i.elementType=e,i.type=u,i.lanes=g,i}function Za(e,i,s,u){return e=hi(7,e,u,i),e.lanes=s,e}function Eh(e,i,s){return e=hi(6,e,null,i),e.lanes=s,e}function Th(e,i,s){return i=hi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Vs=[],ks=0,Gu=null,Vu=0,wi=[],Ci=0,Ka=null,xr=1,Sr="";function Qa(e,i){Vs[ks++]=Vu,Vs[ks++]=Gu,Gu=e,Vu=i}function gg(e,i,s){wi[Ci++]=xr,wi[Ci++]=Sr,wi[Ci++]=Ka,Ka=e;var u=xr;e=Sr;var p=32-zt(u)-1;u&=~(1<<p),s+=1;var g=32-zt(i)+p;if(30<g){var T=p-p%5;g=(u&(1<<T)-1).toString(32),u>>=T,p-=T,xr=1<<32-zt(i)+p|s<<p|u,Sr=g+e}else xr=1<<g|s<<p|u,Sr=e}function bh(e){e.return!==null&&(Qa(e,1),gg(e,1,0))}function Ah(e){for(;e===Gu;)Gu=Vs[--ks],Vs[ks]=null,Vu=Vs[--ks],Vs[ks]=null;for(;e===Ka;)Ka=wi[--Ci],wi[Ci]=null,Sr=wi[--Ci],wi[Ci]=null,xr=wi[--Ci],wi[Ci]=null}var Wn=null,en=null,we=!1,Ja=null,tr=!1,Rh=Error(r(519));function $a(e){var i=Error(r(418,""));throw ul(Ai(i,e)),Rh}function vg(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[gn]=e,i[On]=u,s){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(s=0;s<Ol.length;s++)me(Ol[s],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Ge(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ze(i);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),Nn(i,u.value,u.defaultValue,u.children),ze(i)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||P0(i.textContent,s)?(u.popover!=null&&(me("beforetoggle",i),me("toggle",i)),u.onScroll!=null&&me("scroll",i),u.onScrollEnd!=null&&me("scrollend",i),u.onClick!=null&&(i.onclick=Mc),i=!0):i=!1,i||$a(e)}function yg(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 5:case 13:tr=!1;return;case 27:case 3:tr=!0;return;default:Wn=Wn.return}}function ol(e){if(e!==Wn)return!1;if(!we)return yg(e),we=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||kd(e.type,e.memoizedProps)),s=!s),s&&en&&$a(e),yg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){en=qi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,ma(e.type)?(e=Yd,Yd=null,en=e):en=i):en=Wn?qi(e.stateNode.nextSibling):null;return!0}function ll(){en=Wn=null,we=!1}function xg(){var e=Ja;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ja=null),e}function ul(e){Ja===null?Ja=[e]:Ja.push(e)}var wh=Q(null),ts=null,Mr=null;function ta(e,i,s){dt(wh,i._currentValue),i._currentValue=s}function Er(e){e._currentValue=wh.current,ht(wh)}function Ch(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function Dh(e,i,s,u){var p=e.child;for(p!==null&&(p.return=e);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;t:for(;g!==null;){var O=g;g=p;for(var V=0;V<i.length;V++)if(O.context===i[V]){g.lanes|=s,O=g.alternate,O!==null&&(O.lanes|=s),Ch(g.return,s,e),u||(T=null);break t}g=O.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(r(341));T.lanes|=s,g=T.alternate,g!==null&&(g.lanes|=s),Ch(T,s,e),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===e){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function cl(e,i,s,u){e=null;for(var p=i,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var O=p.type;fi(p.pendingProps.value,T.value)||(e!==null?e.push(O):e=[O])}}else if(p===Rt.current){if(T=p.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(e!==null?e.push(Fl):e=[Fl])}p=p.return}e!==null&&Dh(i,e,s,u),i.flags|=262144}function ku(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Mr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return Sg(ts,e)}function Xu(e,i){return ts===null&&es(e),Sg(e,i)}function Sg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Mr===null){if(e===null)throw Error(r(308));Mr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mr=Mr.next=i;return s}var CE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},DE=o.unstable_scheduleCallback,UE=o.unstable_NormalPriority,yn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uh(){return{controller:new CE,data:new Map,refCount:0}}function fl(e){e.refCount--,e.refCount===0&&DE(UE,function(){e.controller.abort()})}var hl=null,Lh=0,Xs=0,qs=null;function LE(e,i){if(hl===null){var s=hl=[];Lh=0,Xs=Nd(),qs={status:"pending",value:void 0,then:function(u){s.push(u)}}}return Lh++,i.then(Mg,Mg),i}function Mg(){if(--Lh===0&&hl!==null){qs!==null&&(qs.status="fulfilled");var e=hl;hl=null,Xs=0,qs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function OE(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var p=0;p<s.length;p++)(0,s[p])(i)},function(p){for(u.status="rejected",u.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),u}var Eg=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&LE(e,i),Eg!==null&&Eg(e,i)};var ns=Q(null);function Oh(){var e=ns.current;return e!==null?e:We.pooledCache}function qu(e,i){i===null?dt(ns,ns.current):dt(ns,i.pool)}function Tg(){var e=Oh();return e===null?null:{parent:yn._currentValue,pool:e}}var dl=Error(r(460)),bg=Error(r(474)),Wu=Error(r(542)),Nh={then:function(){}};function Ag(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yu(){}function Rg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Yu,Yu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Cg(e),e;default:if(typeof i.status=="string")i.then(Yu,Yu);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=u}},function(u){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Cg(e),e}throw pl=i,dl}}var pl=null;function wg(){if(pl===null)throw Error(r(459));var e=pl;return pl=null,e}function Cg(e){if(e===dl||e===Wu)throw Error(r(483))}var ea=!1;function Ph(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,i=Fu(e),mg(e,null,s),i}return Bu(e,u,i,s),Fu(e)}function ml(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,Ht(e,s)}}function Ih(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var p=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,s=s.next}while(s!==null);g===null?p=g=i:g=g.next=i}else p=g=i;s={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Bh=!1;function _l(){if(Bh){var e=qs;if(e!==null)throw e}}function gl(e,i,s,u){Bh=!1;var p=e.updateQueue;ea=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var V=O,it=V.next;V.next=null,T===null?g=it:T.next=it,T=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,O=pt.lastBaseUpdate,O!==T&&(O===null?pt.firstBaseUpdate=it:O.next=it,pt.lastBaseUpdate=V))}if(g!==null){var xt=p.baseState;T=0,pt=it=V=null,O=g;do{var at=O.lane&-536870913,st=at!==O.lane;if(st?(Me&at)===at:(u&at)===at){at!==0&&at===Xs&&(Bh=!0),pt!==null&&(pt=pt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var ne=e,$t=O;at=i;var Fe=s;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){xt=ne.call(Fe,xt,at);break t}xt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,at=typeof ne=="function"?ne.call(Fe,xt,at):ne,at==null)break t;xt=m({},xt,at);break t;case 2:ea=!0}}at=O.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=p.callbacks,st===null?p.callbacks=[at]:st.push(at))}else st={lane:at,tag:O.tag,payload:O.payload,callback:O.callback,next:null},pt===null?(it=pt=st,V=xt):pt=pt.next=st,T|=at;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;st=O,O=st.next,st.next=null,p.lastBaseUpdate=st,p.shared.pending=null}}while(!0);pt===null&&(V=xt),p.baseState=V,p.firstBaseUpdate=it,p.lastBaseUpdate=pt,g===null&&(p.shared.lanes=0),fa|=T,e.lanes=T,e.memoizedState=xt}}function Dg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Ug(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Dg(s[e],i)}var Ws=Q(null),ju=Q(0);function Lg(e,i){e=Dr,dt(ju,e),dt(Ws,i),Dr=e|i.baseLanes}function Fh(){dt(ju,Dr),dt(Ws,Ws.current)}function Hh(){Dr=ju.current,ht(Ws),ht(ju)}var ra=0,ce=null,Ie=null,fn=null,Zu=!1,Ys=!1,is=!1,Ku=0,vl=0,js=null,NE=0;function sn(){throw Error(r(321))}function Gh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!fi(e[s],i[s]))return!1;return!0}function Vh(e,i,s,u,p,g){return ra=g,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?mv:_v,is=!1,g=s(u,p),is=!1,Ys&&(g=Ng(i,s,u,p)),Og(e),g}function Og(e){F.H=nc;var i=Ie!==null&&Ie.next!==null;if(ra=0,fn=Ie=ce=null,Zu=!1,vl=0,js=null,i)throw Error(r(300));e===null||An||(e=e.dependencies,e!==null&&ku(e)&&(An=!0))}function Ng(e,i,s,u){ce=e;var p=0;do{if(Ys&&(js=null),vl=0,Ys=!1,25<=p)throw Error(r(301));if(p+=1,fn=Ie=null,e.updateQueue!=null){var g=e.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}F.H=GE,g=i(s,u)}while(Ys);return g}function PE(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?yl(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ce.flags|=1024),i}function kh(){var e=Ku!==0;return Ku=0,e}function Xh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function qh(e){if(Zu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zu=!1}ra=0,fn=Ie=ce=null,Ys=!1,vl=Ku=0,js=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ce.memoizedState=fn=e:fn=fn.next=e,fn}function hn(){if(Ie===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=fn===null?ce.memoizedState:fn.next;if(i!==null)fn=i,Ie=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},fn===null?ce.memoizedState=fn=e:fn=fn.next=e}return fn}function Wh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var i=vl;return vl+=1,js===null&&(js=[]),e=Rg(js,e,i),i=ce,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?mv:_v),e}function Qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===A)return Hn(e)}throw Error(r(438,String(e)))}function Yh(e){var i=null,s=ce.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Wh(),ce.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=C;return i.index++,s}function Tr(e,i){return typeof i=="function"?i(e):i}function Ju(e){var i=hn();return jh(i,Ie,e)}function jh(e,i,s){var u=e.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=s;var p=e.baseQueue,g=u.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}i.baseQueue=p=g,u.pending=null}if(g=e.baseState,p===null)e.memoizedState=g;else{i=p.next;var O=T=null,V=null,it=i,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Me&xt)===xt:(ra&xt)===xt){var at=it.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===Xs&&(pt=!0);else if((ra&at)===at){it=it.next,at===Xs&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(O=V=xt,T=g):V=V.next=xt,ce.lanes|=at,fa|=at;xt=it.action,is&&s(g,xt),g=it.hasEagerState?it.eagerState:s(g,xt)}else at={lane:xt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(O=V=at,T=g):V=V.next=at,ce.lanes|=xt,fa|=xt;it=it.next}while(it!==null&&it!==i);if(V===null?T=g:V.next=O,!fi(g,e.memoizedState)&&(An=!0,pt&&(s=qs,s!==null)))throw s;e.memoizedState=g,e.baseState=T,e.baseQueue=V,u.lastRenderedState=g}return p===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Zh(e){var i=hn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var u=s.dispatch,p=s.pending,g=i.memoizedState;if(p!==null){s.pending=null;var T=p=p.next;do g=e(g,T.action),T=T.next;while(T!==p);fi(g,i.memoizedState)||(An=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,u]}function Pg(e,i,s){var u=ce,p=hn(),g=we;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=i();var T=!fi((Ie||p).memoizedState,s);T&&(p.memoizedState=s,An=!0),p=p.queue;var O=Bg.bind(null,u,p,e);if(xl(2048,8,O,[e]),p.getSnapshot!==i||T||fn!==null&&fn.memoizedState.tag&1){if(u.flags|=2048,Zs(9,$u(),Ig.bind(null,u,p,s,i),null),We===null)throw Error(r(349));g||(ra&124)!==0||zg(u,i,s)}return s}function zg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ce.updateQueue,i===null?(i=Wh(),ce.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Ig(e,i,s,u){i.value=s,i.getSnapshot=u,Fg(i)&&Hg(e)}function Bg(e,i,s){return s(function(){Fg(i)&&Hg(e)})}function Fg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!fi(e,s)}catch{return!0}}function Hg(e){var i=Hs(e,2);i!==null&&gi(i,e,2)}function Kh(e){var i=Qn();if(typeof e=="function"){var s=e;if(e=s(),is){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},i}function Gg(e,i,s,u){return e.baseState=s,jh(e,Ie,typeof u=="function"?u:Tr)}function zE(e,i,s,u,p){if(ec(e))throw Error(r(485));if(e=i.action,e!==null){var g={payload:p,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};F.T!==null?s(!0):g.isTransition=!1,u(g),s=i.pending,s===null?(g.next=i.pending=g,Vg(i,g)):(g.next=s.next,i.pending=s.next=g)}}function Vg(e,i){var s=i.action,u=i.payload,p=e.state;if(i.isTransition){var g=F.T,T={};F.T=T;try{var O=s(p,u),V=F.S;V!==null&&V(T,O),kg(e,i,O)}catch(it){Qh(e,i,it)}finally{F.T=g}}else try{g=s(p,u),kg(e,i,g)}catch(it){Qh(e,i,it)}}function kg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Xg(e,i,u)},function(u){return Qh(e,i,u)}):Xg(e,i,s)}function Xg(e,i,s){i.status="fulfilled",i.value=s,qg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Vg(e,s)))}function Qh(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,qg(i),i=i.next;while(i!==u)}e.action=null}function qg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Wg(e,i){return i}function Yg(e,i){if(we){var s=We.formState;if(s!==null){t:{var u=ce;if(we){if(en){e:{for(var p=en,g=tr;p.nodeType!==8;){if(!g){p=null;break e}if(p=qi(p.nextSibling),p===null){p=null;break e}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){en=qi(p.nextSibling),u=p.data==="F!";break t}}$a(u)}u=!1}u&&(i=s[0])}}return s=Qn(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:i},s.queue=u,s=hv.bind(null,ce,u),u.dispatch=s,u=Kh(!1),g=nd.bind(null,ce,!1,u.queue),u=Qn(),p={state:i,dispatch:null,action:e,pending:null},u.queue=p,s=zE.bind(null,ce,p,g,s),p.dispatch=s,u.memoizedState=e,[i,s,!1]}function jg(e){var i=hn();return Zg(i,Ie,e)}function Zg(e,i,s){if(i=jh(e,i,Wg)[0],e=Ju(Tr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=yl(i)}catch(T){throw T===dl?Wu:T}else u=i;i=hn();var p=i.queue,g=p.dispatch;return s!==i.memoizedState&&(ce.flags|=2048,Zs(9,$u(),IE.bind(null,p,s),null)),[u,g,e]}function IE(e,i){e.action=i}function Kg(e){var i=hn(),s=Ie;if(s!==null)return Zg(i,s,e);hn(),i=i.memoizedState,s=hn();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function Zs(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=ce.updateQueue,i===null&&(i=Wh(),ce.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function $u(){return{destroy:void 0,resource:void 0}}function Qg(){return hn().memoizedState}function tc(e,i,s,u){var p=Qn();u=u===void 0?null:u,ce.flags|=e,p.memoizedState=Zs(1|i,$u(),s,u)}function xl(e,i,s,u){var p=hn();u=u===void 0?null:u;var g=p.memoizedState.inst;Ie!==null&&u!==null&&Gh(u,Ie.memoizedState.deps)?p.memoizedState=Zs(i,g,s,u):(ce.flags|=e,p.memoizedState=Zs(1|i,g,s,u))}function Jg(e,i){tc(8390656,8,e,i)}function $g(e,i){xl(2048,8,e,i)}function tv(e,i){return xl(4,2,e,i)}function ev(e,i){return xl(4,4,e,i)}function nv(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function iv(e,i,s){s=s!=null?s.concat([e]):null,xl(4,4,nv.bind(null,i,e),s)}function Jh(){}function rv(e,i){var s=hn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&Gh(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function av(e,i){var s=hn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&Gh(i,u[1]))return u[0];if(u=e(),is){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[u,i],u}function $h(e,i,s){return s===void 0||(ra&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=l0(),ce.lanes|=e,fa|=e,s)}function sv(e,i,s,u){return fi(s,i)?s:Ws.current!==null?(e=$h(e,s,u),fi(e,i)||(An=!0),e):(ra&42)===0?(An=!0,e.memoizedState=s):(e=l0(),ce.lanes|=e,fa|=e,i)}function ov(e,i,s,u,p){var g=X.p;X.p=g!==0&&8>g?g:8;var T=F.T,O={};F.T=O,nd(e,!1,i,s);try{var V=p(),it=F.S;if(it!==null&&it(O,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=OE(V,u);Sl(e,i,pt,_i(e))}else Sl(e,i,u,_i(e))}catch(xt){Sl(e,i,{then:function(){},status:"rejected",reason:xt},_i())}finally{X.p=g,F.T=T}}function BE(){}function td(e,i,s,u){if(e.tag!==5)throw Error(r(476));var p=lv(e).queue;ov(e,p,i,W,s===null?BE:function(){return uv(e),s(u)})}function lv(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function uv(e){var i=lv(e).next.queue;Sl(e,i,{},_i())}function ed(){return Hn(Fl)}function cv(){return hn().memoizedState}function fv(){return hn().memoizedState}function FE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=_i();e=na(s);var u=ia(i,e,s);u!==null&&(gi(u,i,s),ml(u,i,s)),i={cache:Uh()},e.payload=i;return}i=i.return}}function HE(e,i,s){var u=_i();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ec(e)?dv(i,s):(s=Sh(e,i,s,u),s!==null&&(gi(s,e,u),pv(s,i,u)))}function hv(e,i,s){var u=_i();Sl(e,i,s,u)}function Sl(e,i,s,u){var p={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ec(e))dv(i,p);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,O=g(T,s);if(p.hasEagerState=!0,p.eagerState=O,fi(O,T))return Bu(e,i,p,0),We===null&&Iu(),!1}catch{}finally{}if(s=Sh(e,i,p,u),s!==null)return gi(s,e,u),pv(s,i,u),!0}return!1}function nd(e,i,s,u){if(u={lane:2,revertLane:Nd(),action:u,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(i)throw Error(r(479))}else i=Sh(e,s,u,2),i!==null&&gi(i,e,2)}function ec(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function dv(e,i){Ys=Zu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function pv(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,Ht(e,s)}}var nc={readContext:Hn,use:Qu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},mv={readContext:Hn,use:Qu,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Hn,useEffect:Jg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,tc(4194308,4,nv.bind(null,i,e),s)},useLayoutEffect:function(e,i){return tc(4194308,4,e,i)},useInsertionEffect:function(e,i){tc(4,2,e,i)},useMemo:function(e,i){var s=Qn();i=i===void 0?null:i;var u=e();if(is){ct(!0);try{e()}finally{ct(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=Qn();if(s!==void 0){var p=s(i);if(is){ct(!0);try{s(i)}finally{ct(!1)}}}else p=i;return u.memoizedState=u.baseState=p,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:p},u.queue=e,e=e.dispatch=HE.bind(null,ce,e),[u.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=Kh(e);var i=e.queue,s=hv.bind(null,ce,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Jh,useDeferredValue:function(e,i){var s=Qn();return $h(s,e,i)},useTransition:function(){var e=Kh(!1);return e=ov.bind(null,ce,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=ce,p=Qn();if(we){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),We===null)throw Error(r(349));(Me&124)!==0||zg(u,i,s)}p.memoizedState=s;var g={value:s,getSnapshot:i};return p.queue=g,Jg(Bg.bind(null,u,g,e),[e]),u.flags|=2048,Zs(9,$u(),Ig.bind(null,u,g,s,i),null),s},useId:function(){var e=Qn(),i=We.identifierPrefix;if(we){var s=Sr,u=xr;s=(u&~(1<<32-zt(u)-1)).toString(32)+s,i="«"+i+"R"+s,s=Ku++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=NE++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:ed,useFormState:Yg,useActionState:Yg,useOptimistic:function(e){var i=Qn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=nd.bind(null,ce,!0,s),s.dispatch=i,[e,i]},useMemoCache:Yh,useCacheRefresh:function(){return Qn().memoizedState=FE.bind(null,ce)}},_v={readContext:Hn,use:Qu,useCallback:rv,useContext:Hn,useEffect:$g,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:ev,useMemo:av,useReducer:Ju,useRef:Qg,useState:function(){return Ju(Tr)},useDebugValue:Jh,useDeferredValue:function(e,i){var s=hn();return sv(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Ju(Tr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:yl(e),i]},useSyncExternalStore:Pg,useId:cv,useHostTransitionStatus:ed,useFormState:jg,useActionState:jg,useOptimistic:function(e,i){var s=hn();return Gg(s,Ie,e,i)},useMemoCache:Yh,useCacheRefresh:fv},GE={readContext:Hn,use:Qu,useCallback:rv,useContext:Hn,useEffect:$g,useImperativeHandle:iv,useInsertionEffect:tv,useLayoutEffect:ev,useMemo:av,useReducer:Zh,useRef:Qg,useState:function(){return Zh(Tr)},useDebugValue:Jh,useDeferredValue:function(e,i){var s=hn();return Ie===null?$h(s,e,i):sv(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Zh(Tr)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:yl(e),i]},useSyncExternalStore:Pg,useId:cv,useHostTransitionStatus:ed,useFormState:Kg,useActionState:Kg,useOptimistic:function(e,i){var s=hn();return Ie!==null?Gg(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Yh,useCacheRefresh:fv},Ks=null,Ml=0;function ic(e){var i=Ml;return Ml+=1,Ks===null&&(Ks=[]),Rg(Ks,e,i)}function El(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rc(e,i){throw i.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function gv(e){var i=e._init;return i(e._payload)}function vv(e){function i(J,j){if(e){var nt=J.deletions;nt===null?(J.deletions=[j],J.flags|=16):nt.push(j)}}function s(J,j){if(!e)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function u(J){for(var j=new Map;J!==null;)J.key!==null?j.set(J.key,J):j.set(J.index,J),J=J.sibling;return j}function p(J,j){return J=yr(J,j),J.index=0,J.sibling=null,J}function g(J,j,nt){return J.index=nt,e?(nt=J.alternate,nt!==null?(nt=nt.index,nt<j?(J.flags|=67108866,j):nt):(J.flags|=67108866,j)):(J.flags|=1048576,j)}function T(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function O(J,j,nt,gt){return j===null||j.tag!==6?(j=Eh(nt,J.mode,gt),j.return=J,j):(j=p(j,nt),j.return=J,j)}function V(J,j,nt,gt){var Gt=nt.type;return Gt===E?pt(J,j,nt.props.children,gt,nt.key):j!==null&&(j.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===I&&gv(Gt)===j.type)?(j=p(j,nt.props),El(j,nt),j.return=J,j):(j=Hu(nt.type,nt.key,nt.props,null,J.mode,gt),El(j,nt),j.return=J,j)}function it(J,j,nt,gt){return j===null||j.tag!==4||j.stateNode.containerInfo!==nt.containerInfo||j.stateNode.implementation!==nt.implementation?(j=Th(nt,J.mode,gt),j.return=J,j):(j=p(j,nt.children||[]),j.return=J,j)}function pt(J,j,nt,gt,Gt){return j===null||j.tag!==7?(j=Za(nt,J.mode,gt,Gt),j.return=J,j):(j=p(j,nt),j.return=J,j)}function xt(J,j,nt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Eh(""+j,J.mode,nt),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return nt=Hu(j.type,j.key,j.props,null,J.mode,nt),El(nt,j),nt.return=J,nt;case y:return j=Th(j,J.mode,nt),j.return=J,j;case I:var gt=j._init;return j=gt(j._payload),xt(J,j,nt)}if(et(j)||H(j))return j=Za(j,J.mode,nt,null),j.return=J,j;if(typeof j.then=="function")return xt(J,ic(j),nt);if(j.$$typeof===A)return xt(J,Xu(J,j),nt);rc(J,j)}return null}function at(J,j,nt,gt){var Gt=j!==null?j.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Gt!==null?null:O(J,j,""+nt,gt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case v:return nt.key===Gt?V(J,j,nt,gt):null;case y:return nt.key===Gt?it(J,j,nt,gt):null;case I:return Gt=nt._init,nt=Gt(nt._payload),at(J,j,nt,gt)}if(et(nt)||H(nt))return Gt!==null?null:pt(J,j,nt,gt,null);if(typeof nt.then=="function")return at(J,j,ic(nt),gt);if(nt.$$typeof===A)return at(J,j,Xu(J,nt),gt);rc(J,nt)}return null}function st(J,j,nt,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return J=J.get(nt)||null,O(j,J,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case v:return J=J.get(gt.key===null?nt:gt.key)||null,V(j,J,gt,Gt);case y:return J=J.get(gt.key===null?nt:gt.key)||null,it(j,J,gt,Gt);case I:var he=gt._init;return gt=he(gt._payload),st(J,j,nt,gt,Gt)}if(et(gt)||H(gt))return J=J.get(nt)||null,pt(j,J,gt,Gt,null);if(typeof gt.then=="function")return st(J,j,nt,ic(gt),Gt);if(gt.$$typeof===A)return st(J,j,nt,Xu(j,gt),Gt);rc(j,gt)}return null}function ne(J,j,nt,gt){for(var Gt=null,he=null,Wt=j,te=j=0,wn=null;Wt!==null&&te<nt.length;te++){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var be=at(J,Wt,nt[te],gt);if(be===null){Wt===null&&(Wt=wn);break}e&&Wt&&be.alternate===null&&i(J,Wt),j=g(be,j,te),he===null?Gt=be:he.sibling=be,he=be,Wt=wn}if(te===nt.length)return s(J,Wt),we&&Qa(J,te),Gt;if(Wt===null){for(;te<nt.length;te++)Wt=xt(J,nt[te],gt),Wt!==null&&(j=g(Wt,j,te),he===null?Gt=Wt:he.sibling=Wt,he=Wt);return we&&Qa(J,te),Gt}for(Wt=u(Wt);te<nt.length;te++)wn=st(Wt,J,te,nt[te],gt),wn!==null&&(e&&wn.alternate!==null&&Wt.delete(wn.key===null?te:wn.key),j=g(wn,j,te),he===null?Gt=wn:he.sibling=wn,he=wn);return e&&Wt.forEach(function(xa){return i(J,xa)}),we&&Qa(J,te),Gt}function $t(J,j,nt,gt){if(nt==null)throw Error(r(151));for(var Gt=null,he=null,Wt=j,te=j=0,wn=null,be=nt.next();Wt!==null&&!be.done;te++,be=nt.next()){Wt.index>te?(wn=Wt,Wt=null):wn=Wt.sibling;var xa=at(J,Wt,be.value,gt);if(xa===null){Wt===null&&(Wt=wn);break}e&&Wt&&xa.alternate===null&&i(J,Wt),j=g(xa,j,te),he===null?Gt=xa:he.sibling=xa,he=xa,Wt=wn}if(be.done)return s(J,Wt),we&&Qa(J,te),Gt;if(Wt===null){for(;!be.done;te++,be=nt.next())be=xt(J,be.value,gt),be!==null&&(j=g(be,j,te),he===null?Gt=be:he.sibling=be,he=be);return we&&Qa(J,te),Gt}for(Wt=u(Wt);!be.done;te++,be=nt.next())be=st(Wt,J,te,be.value,gt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?te:be.key),j=g(be,j,te),he===null?Gt=be:he.sibling=be,he=be);return e&&Wt.forEach(function(VT){return i(J,VT)}),we&&Qa(J,te),Gt}function Fe(J,j,nt,gt){if(typeof nt=="object"&&nt!==null&&nt.type===E&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case v:t:{for(var Gt=nt.key;j!==null;){if(j.key===Gt){if(Gt=nt.type,Gt===E){if(j.tag===7){s(J,j.sibling),gt=p(j,nt.props.children),gt.return=J,J=gt;break t}}else if(j.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===I&&gv(Gt)===j.type){s(J,j.sibling),gt=p(j,nt.props),El(gt,nt),gt.return=J,J=gt;break t}s(J,j);break}else i(J,j);j=j.sibling}nt.type===E?(gt=Za(nt.props.children,J.mode,gt,nt.key),gt.return=J,J=gt):(gt=Hu(nt.type,nt.key,nt.props,null,J.mode,gt),El(gt,nt),gt.return=J,J=gt)}return T(J);case y:t:{for(Gt=nt.key;j!==null;){if(j.key===Gt)if(j.tag===4&&j.stateNode.containerInfo===nt.containerInfo&&j.stateNode.implementation===nt.implementation){s(J,j.sibling),gt=p(j,nt.children||[]),gt.return=J,J=gt;break t}else{s(J,j);break}else i(J,j);j=j.sibling}gt=Th(nt,J.mode,gt),gt.return=J,J=gt}return T(J);case I:return Gt=nt._init,nt=Gt(nt._payload),Fe(J,j,nt,gt)}if(et(nt))return ne(J,j,nt,gt);if(H(nt)){if(Gt=H(nt),typeof Gt!="function")throw Error(r(150));return nt=Gt.call(nt),$t(J,j,nt,gt)}if(typeof nt.then=="function")return Fe(J,j,ic(nt),gt);if(nt.$$typeof===A)return Fe(J,j,Xu(J,nt),gt);rc(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,j!==null&&j.tag===6?(s(J,j.sibling),gt=p(j,nt),gt.return=J,J=gt):(s(J,j),gt=Eh(nt,J.mode,gt),gt.return=J,J=gt),T(J)):s(J,j)}return function(J,j,nt,gt){try{Ml=0;var Gt=Fe(J,j,nt,gt);return Ks=null,Gt}catch(Wt){if(Wt===dl||Wt===Wu)throw Wt;var he=hi(29,Wt,null,J.mode);return he.lanes=gt,he.return=J,he}finally{}}}var Qs=vv(!0),yv=vv(!1),Di=Q(null),er=null;function aa(e){var i=e.alternate;dt(xn,xn.current&1),dt(Di,e),er===null&&(i===null||Ws.current!==null||i.memoizedState!==null)&&(er=e)}function xv(e){if(e.tag===22){if(dt(xn,xn.current),dt(Di,e),er===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(er=e)}}else sa()}function sa(){dt(xn,xn.current),dt(Di,Di.current)}function br(e){ht(Di),er===e&&(er=null),ht(xn)}var xn=Q(0);function ac(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Wd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function id(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:m({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var rd={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=_i(),p=na(u);p.payload=i,s!=null&&(p.callback=s),i=ia(e,p,u),i!==null&&(gi(i,e,u),ml(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=_i(),p=na(u);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=ia(e,p,u),i!==null&&(gi(i,e,u),ml(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=_i(),u=na(s);u.tag=2,i!=null&&(u.callback=i),i=ia(e,u,s),i!==null&&(gi(i,e,s),ml(i,e,s))}};function Sv(e,i,s,u,p,g,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,g,T):i.prototype&&i.prototype.isPureReactComponent?!al(s,u)||!al(p,g):!0}function Mv(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&rd.enqueueReplaceState(i,i.state,null)}function rs(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=m({},s));for(var p in e)s[p]===void 0&&(s[p]=e[p])}return s}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ev(e){sc(e)}function Tv(e){console.error(e)}function bv(e){sc(e)}function oc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Av(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ad(e,i,s){return s=na(s),s.tag=3,s.payload={element:null},s.callback=function(){oc(e,i)},s}function Rv(e){return e=na(e),e.tag=3,e}function wv(e,i,s,u){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;e.payload=function(){return p(g)},e.callback=function(){Av(i,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Av(i,s,u),typeof p!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function VE(e,i,s,u,p){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&cl(i,s,p,!0),s=Di.current,s!==null){switch(s.tag){case 13:return er===null?Cd():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=p,u===Nh?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),Ud(e,u,p)),!1;case 22:return s.flags|=65536,u===Nh?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),Ud(e,u,p)),!1}throw Error(r(435,s.tag))}return Ud(e,u,p),Cd(),!1}if(we)return i=Di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,u!==Rh&&(e=Error(r(422),{cause:u}),ul(Ai(e,s)))):(u!==Rh&&(i=Error(r(423),{cause:u}),ul(Ai(i,s))),e=e.current.alternate,e.flags|=65536,p&=-p,e.lanes|=p,u=Ai(u,s),p=ad(e.stateNode,u,p),Ih(e,p),nn!==4&&(nn=2)),!1;var g=Error(r(520),{cause:u});if(g=Ai(g,s),Dl===null?Dl=[g]:Dl.push(g),nn!==4&&(nn=2),i===null)return!0;u=Ai(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=p&-p,s.lanes|=e,e=ad(s.stateNode,u,e),Ih(s,e),!1;case 1:if(i=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ha===null||!ha.has(g))))return s.flags|=65536,p&=-p,s.lanes|=p,p=Rv(p),wv(p,e,s,u),Ih(s,p),!1}s=s.return}while(s!==null);return!1}var Cv=Error(r(461)),An=!1;function Pn(e,i,s,u){i.child=e===null?yv(i,null,s,u):Qs(i,e.child,s,u)}function Dv(e,i,s,u,p){s=s.render;var g=i.ref;if("ref"in u){var T={};for(var O in u)O!=="ref"&&(T[O]=u[O])}else T=u;return es(i),u=Vh(e,i,s,T,g,p),O=kh(),e!==null&&!An?(Xh(e,i,p),Ar(e,i,p)):(we&&O&&bh(i),i.flags|=1,Pn(e,i,u,p),i.child)}function Uv(e,i,s,u,p){if(e===null){var g=s.type;return typeof g=="function"&&!Mh(g)&&g.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=g,Lv(e,i,g,u,p)):(e=Hu(s.type,null,u,i,i.mode,p),e.ref=i.ref,e.return=i,i.child=e)}if(g=e.child,!dd(e,p)){var T=g.memoizedProps;if(s=s.compare,s=s!==null?s:al,s(T,u)&&e.ref===i.ref)return Ar(e,i,p)}return i.flags|=1,e=yr(g,u),e.ref=i.ref,e.return=i,i.child=e}function Lv(e,i,s,u,p){if(e!==null){var g=e.memoizedProps;if(al(g,u)&&e.ref===i.ref)if(An=!1,i.pendingProps=u=g,dd(e,p))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,Ar(e,i,p)}return sd(e,i,s,u,p)}function Ov(e,i,s){var u=i.pendingProps,p=u.children,g=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=g!==null?g.baseLanes|s:s,e!==null){for(p=i.child=e.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;i.childLanes=g&~u}else i.childLanes=0,i.child=null;return Nv(e,i,u,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&qu(i,g!==null?g.cachePool:null),g!==null?Lg(i,g):Fh(),xv(i);else return i.lanes=i.childLanes=536870912,Nv(e,i,g!==null?g.baseLanes|s:s,s)}else g!==null?(qu(i,g.cachePool),Lg(i,g),sa(),i.memoizedState=null):(e!==null&&qu(i,null),Fh(),sa());return Pn(e,i,p,s),i.child}function Nv(e,i,s,u){var p=Oh();return p=p===null?null:{parent:yn._currentValue,pool:p},i.memoizedState={baseLanes:s,cachePool:p},e!==null&&qu(i,null),Fh(),xv(i),e!==null&&cl(e,i,u,!0),null}function lc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function sd(e,i,s,u,p){return es(i),s=Vh(e,i,s,u,void 0,p),u=kh(),e!==null&&!An?(Xh(e,i,p),Ar(e,i,p)):(we&&u&&bh(i),i.flags|=1,Pn(e,i,s,p),i.child)}function Pv(e,i,s,u,p,g){return es(i),i.updateQueue=null,s=Ng(i,u,s,p),Og(e),u=kh(),e!==null&&!An?(Xh(e,i,g),Ar(e,i,g)):(we&&u&&bh(i),i.flags|=1,Pn(e,i,s,g),i.child)}function zv(e,i,s,u,p){if(es(i),i.stateNode===null){var g=Gs,T=s.contextType;typeof T=="object"&&T!==null&&(g=Hn(T)),g=new s(u,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=rd,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=u,g.state=i.memoizedState,g.refs={},Ph(i),T=s.contextType,g.context=typeof T=="object"&&T!==null?Hn(T):Gs,g.state=i.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(id(i,s,T,u),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&rd.enqueueReplaceState(g,g.state,null),gl(i,u,g,p),_l(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){g=i.stateNode;var O=i.memoizedProps,V=rs(s,O);g.props=V;var it=g.context,pt=s.contextType;T=Gs,typeof pt=="object"&&pt!==null&&(T=Hn(pt));var xt=s.getDerivedStateFromProps;pt=typeof xt=="function"||typeof g.getSnapshotBeforeUpdate=="function",O=i.pendingProps!==O,pt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(O||it!==T)&&Mv(i,g,u,T),ea=!1;var at=i.memoizedState;g.state=at,gl(i,u,g,p),_l(),it=i.memoizedState,O||at!==it||ea?(typeof xt=="function"&&(id(i,s,xt,u),it=i.memoizedState),(V=ea||Sv(i,s,V,u,at,it,T))?(pt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=it),g.props=u,g.state=it,g.context=T,u=V):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,zh(e,i),T=i.memoizedProps,pt=rs(s,T),g.props=pt,xt=i.pendingProps,at=g.context,it=s.contextType,V=Gs,typeof it=="object"&&it!==null&&(V=Hn(it)),O=s.getDerivedStateFromProps,(it=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==xt||at!==V)&&Mv(i,g,u,V),ea=!1,at=i.memoizedState,g.state=at,gl(i,u,g,p),_l();var st=i.memoizedState;T!==xt||at!==st||ea||e!==null&&e.dependencies!==null&&ku(e.dependencies)?(typeof O=="function"&&(id(i,s,O,u),st=i.memoizedState),(pt=ea||Sv(i,s,pt,u,at,st,V)||e!==null&&e.dependencies!==null&&ku(e.dependencies))?(it||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,st,V),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,st,V)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),g.props=u,g.state=st,g.context=V,u=pt):(typeof g.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),u=!1)}return g=u,lc(e,i),u=(i.flags&128)!==0,g||u?(g=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,e!==null&&u?(i.child=Qs(i,e.child,null,p),i.child=Qs(i,null,s,p)):Pn(e,i,s,p),i.memoizedState=g.state,e=i.child):e=Ar(e,i,p),e}function Iv(e,i,s,u){return ll(),i.flags|=256,Pn(e,i,s,u),i.child}var od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(e){return{baseLanes:e,cachePool:Tg()}}function ud(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Ui),e}function Bv(e,i,s){var u=i.pendingProps,p=!1,g=(i.flags&128)!==0,T;if((T=g)||(T=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),T&&(p=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(p?aa(i):sa(),we){var O=en,V;if(V=O){t:{for(V=O,O=tr;V.nodeType!==8;){if(!O){O=null;break t}if(V=qi(V.nextSibling),V===null){O=null;break t}}O=V}O!==null?(i.memoizedState={dehydrated:O,treeContext:Ka!==null?{id:xr,overflow:Sr}:null,retryLane:536870912,hydrationErrors:null},V=hi(18,null,null,0),V.stateNode=O,V.return=i,i.child=V,Wn=i,en=null,V=!0):V=!1}V||$a(i)}if(O=i.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return Wd(O)?i.lanes=32:i.lanes=536870912,null;br(i)}return O=u.children,u=u.fallback,p?(sa(),p=i.mode,O=uc({mode:"hidden",children:O},p),u=Za(u,p,s,null),O.return=i,u.return=i,O.sibling=u,i.child=O,p=i.child,p.memoizedState=ld(s),p.childLanes=ud(e,T,s),i.memoizedState=od,u):(aa(i),cd(i,O))}if(V=e.memoizedState,V!==null&&(O=V.dehydrated,O!==null)){if(g)i.flags&256?(aa(i),i.flags&=-257,i=fd(e,i,s)):i.memoizedState!==null?(sa(),i.child=e.child,i.flags|=128,i=null):(sa(),p=u.fallback,O=i.mode,u=uc({mode:"visible",children:u.children},O),p=Za(p,O,s,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,Qs(i,e.child,null,s),u=i.child,u.memoizedState=ld(s),u.childLanes=ud(e,T,s),i.memoizedState=od,i=p);else if(aa(i),Wd(O)){if(T=O.nextSibling&&O.nextSibling.dataset,T)var it=T.dgst;T=it,u=Error(r(419)),u.stack="",u.digest=T,ul({value:u,source:null,stack:null}),i=fd(e,i,s)}else if(An||cl(e,i,s,!1),T=(s&e.childLanes)!==0,An||T){if(T=We,T!==null&&(u=s&-s,u=(u&42)!==0?1:ie(u),u=(u&(T.suspendedLanes|s))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Hs(e,u),gi(T,e,u),Cv;O.data==="$?"||Cd(),i=fd(e,i,s)}else O.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,en=qi(O.nextSibling),Wn=i,we=!0,Ja=null,tr=!1,e!==null&&(wi[Ci++]=xr,wi[Ci++]=Sr,wi[Ci++]=Ka,xr=e.id,Sr=e.overflow,Ka=i),i=cd(i,u.children),i.flags|=4096);return i}return p?(sa(),p=u.fallback,O=i.mode,V=e.child,it=V.sibling,u=yr(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,it!==null?p=yr(it,p):(p=Za(p,O,s,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,O=e.child.memoizedState,O===null?O=ld(s):(V=O.cachePool,V!==null?(it=yn._currentValue,V=V.parent!==it?{parent:it,pool:it}:V):V=Tg(),O={baseLanes:O.baseLanes|s,cachePool:V}),p.memoizedState=O,p.childLanes=ud(e,T,s),i.memoizedState=od,u):(aa(i),s=e.child,e=s.sibling,s=yr(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=s,i.memoizedState=null,s)}function cd(e,i){return i=uc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function uc(e,i){return e=hi(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fd(e,i,s){return Qs(i,e.child,null,s),e=cd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Fv(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Ch(e.return,i,s)}function hd(e,i,s,u,p){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:p}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=s,g.tailMode=p)}function Hv(e,i,s){var u=i.pendingProps,p=u.revealOrder,g=u.tail;if(Pn(e,i,u.children,s),u=xn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fv(e,s,i);else if(e.tag===19)Fv(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(dt(xn,u),p){case"forwards":for(s=i.child,p=null;s!==null;)e=s.alternate,e!==null&&ac(e)===null&&(p=s),s=s.sibling;s=p,s===null?(p=i.child,i.child=null):(p=s.sibling,s.sibling=null),hd(i,!1,p,s,g);break;case"backwards":for(s=null,p=i.child,i.child=null;p!==null;){if(e=p.alternate,e!==null&&ac(e)===null){i.child=p;break}e=p.sibling,p.sibling=s,s=p,p=e}hd(i,!0,s,null,g);break;case"together":hd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ar(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),fa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(cl(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=yr(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=yr(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function dd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ku(e)))}function kE(e,i,s){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),ta(i,yn,e.memoizedState.cache),ll();break;case 27:case 5:Nt(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:ta(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(aa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Bv(e,i,s):(aa(i),e=Ar(e,i,s),e!==null?e.sibling:null);aa(i);break;case 19:var p=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(cl(e,i,s,!1),u=(s&i.childLanes)!==0),p){if(u)return Hv(e,i,s);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),dt(xn,xn.current),u)break;return null;case 22:case 23:return i.lanes=0,Ov(e,i,s);case 24:ta(i,yn,e.memoizedState.cache)}return Ar(e,i,s)}function Gv(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!dd(e,s)&&(i.flags&128)===0)return An=!1,kE(e,i,s);An=(e.flags&131072)!==0}else An=!1,we&&(i.flags&1048576)!==0&&gg(i,Vu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,p=u._init;if(u=p(u._payload),i.type=u,typeof u=="function")Mh(u)?(e=rs(u,e),i.tag=1,i=zv(null,i,u,e,s)):(i.tag=0,i=sd(null,i,u,e,s));else{if(u!=null){if(p=u.$$typeof,p===b){i.tag=11,i=Dv(null,i,u,e,s);break t}else if(p===U){i.tag=14,i=Uv(null,i,u,e,s);break t}}throw i=Y(u)||u,Error(r(306,i,""))}}return i;case 0:return sd(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,p=rs(u,i.pendingProps),zv(e,i,u,p,s);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(r(387));u=i.pendingProps;var g=i.memoizedState;p=g.element,zh(e,i),gl(i,u,null,s);var T=i.memoizedState;if(u=T.cache,ta(i,yn,u),u!==g.cache&&Dh(i,[yn],s,!0),_l(),u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=Iv(e,i,u,s);break t}else if(u!==p){p=Ai(Error(r(424)),i),ul(p),i=Iv(e,i,u,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=qi(e.firstChild),Wn=i,we=!0,Ja=null,tr=!0,s=yv(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ll(),u===p){i=Ar(e,i,s);break t}Pn(e,i,u,s)}i=i.child}return i;case 26:return lc(e,i),e===null?(s=q0(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,u=Ec(Mt.current).createElement(s),u[gn]=i,u[On]=e,In(u,s,e),cn(u),i.stateNode=u):i.memoizedState=q0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Nt(i),e===null&&we&&(u=i.stateNode=V0(i.type,i.pendingProps,Mt.current),Wn=i,tr=!0,p=en,ma(i.type)?(Yd=p,en=qi(u.firstChild)):en=p),Pn(e,i,i.pendingProps.children,s),lc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((p=u=en)&&(u=gT(u,i.type,i.pendingProps,tr),u!==null?(i.stateNode=u,Wn=i,en=qi(u.firstChild),tr=!1,p=!0):p=!1),p||$a(i)),Nt(i),p=i.type,g=i.pendingProps,T=e!==null?e.memoizedProps:null,u=g.children,kd(p,g)?u=null:T!==null&&kd(p,T)&&(i.flags|=32),i.memoizedState!==null&&(p=Vh(e,i,PE,null,null,s),Fl._currentValue=p),lc(e,i),Pn(e,i,u,s),i.child;case 6:return e===null&&we&&((e=s=en)&&(s=vT(s,i.pendingProps,tr),s!==null?(i.stateNode=s,Wn=i,en=null,e=!0):e=!1),e||$a(i)),null;case 13:return Bv(e,i,s);case 4:return Et(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Qs(i,null,u,s):Pn(e,i,u,s),i.child;case 11:return Dv(e,i,i.type,i.pendingProps,s);case 7:return Pn(e,i,i.pendingProps,s),i.child;case 8:return Pn(e,i,i.pendingProps.children,s),i.child;case 12:return Pn(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,ta(i,i.type,u.value),Pn(e,i,u.children,s),i.child;case 9:return p=i.type._context,u=i.pendingProps.children,es(i),p=Hn(p),u=u(p),i.flags|=1,Pn(e,i,u,s),i.child;case 14:return Uv(e,i,i.type,i.pendingProps,s);case 15:return Lv(e,i,i.type,i.pendingProps,s);case 19:return Hv(e,i,s);case 31:return u=i.pendingProps,s=i.mode,u={mode:u.mode,children:u.children},e===null?(s=uc(u,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=yr(e.child,u),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Ov(e,i,s);case 24:return es(i),u=Hn(yn),e===null?(p=Oh(),p===null&&(p=We,g=Uh(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=s),p=g),i.memoizedState={parent:u,cache:p},Ph(i),ta(i,yn,p)):((e.lanes&s)!==0&&(zh(e,i),gl(i,null,null,s),_l()),p=e.memoizedState,g=i.memoizedState,p.parent!==u?(p={parent:u,cache:u},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),ta(i,yn,u)):(u=g.cache,ta(i,yn,u),u!==p.cache&&Dh(i,[yn],s,!0))),Pn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Rr(e){e.flags|=4}function Vv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(i)){if(i=Di.current,i!==null&&((Me&4194048)===Me?er!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==er))throw pl=Nh,bg;e.flags|=8192}}function cc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Lt():536870912,e.lanes|=i,eo|=i)}function Tl(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var p=e.child;p!==null;)s|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)s|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function XE(e,i,s){var u=i.pendingProps;switch(Ah(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Er(yn),Zt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ol(i)?Rr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xg())),Je(i),null;case 26:return s=i.memoizedState,e===null?(Rr(i),s!==null?(Je(i),Vv(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Rr(i),Je(i),Vv(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==u&&Rr(i),Je(i),i.flags&=-16777217),null;case 27:Se(i),s=Mt.current;var p=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Rr(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Je(i),null}e=K.current,ol(i)?vg(i):(e=V0(p,u,s),i.stateNode=e,Rr(i))}return Je(i),null;case 5:if(Se(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Rr(i);else{if(!u){if(i.stateNode===null)throw Error(r(166));return Je(i),null}if(e=K.current,ol(i))vg(i);else{switch(p=Ec(Mt.current),e){case 1:e=p.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=p.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?p.createElement("select",{is:u.is}):p.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?p.createElement(s,{is:u.is}):p.createElement(s)}}e[gn]=i,e[On]=u;t:for(p=i.child;p!==null;){if(p.tag===5||p.tag===6)e.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===i)break t;for(;p.sibling===null;){if(p.return===null||p.return===i)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}i.stateNode=e;t:switch(In(e,s,u),s){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Rr(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Rr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(r(166));if(e=Mt.current,ol(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,p=Wn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}e[gn]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||P0(e.nodeValue,s)),e||$a(i)}else e=Ec(e).createTextNode(u),e[gn]=i,i.stateNode=e}return Je(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(p=ol(i),u!==null&&u.dehydrated!==null){if(e===null){if(!p)throw Error(r(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[gn]=i}else ll(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),p=!1}else p=xg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(br(i),i):(br(i),null)}if(br(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=u!==null,e=e!==null&&e.memoizedState!==null,s){u=i.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),cc(i,i.updateQueue),Je(i),null;case 4:return Zt(),e===null&&Bd(i.stateNode.containerInfo),Je(i),null;case 10:return Er(i.type),Je(i),null;case 19:if(ht(xn),p=i.memoizedState,p===null)return Je(i),null;if(u=(i.flags&128)!==0,g=p.rendering,g===null)if(u)Tl(p,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(g=ac(e),g!==null){for(i.flags|=128,Tl(p,!1),e=g.updateQueue,i.updateQueue=e,cc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)_g(s,e),s=s.sibling;return dt(xn,xn.current&1|2),i.child}e=e.sibling}p.tail!==null&&de()>dc&&(i.flags|=128,u=!0,Tl(p,!1),i.lanes=4194304)}else{if(!u)if(e=ac(g),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,cc(i,e),Tl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!we)return Je(i),null}else 2*de()-p.renderingStartTime>dc&&s!==536870912&&(i.flags|=128,u=!0,Tl(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(e=p.last,e!==null?e.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=de(),i.sibling=null,e=xn.current,dt(xn,u?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return br(i),Hh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&cc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&ht(ns),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Er(yn),Je(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function qE(e,i){switch(Ah(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Er(yn),Zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Se(i),null;case 13:if(br(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));ll()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ht(xn),null;case 4:return Zt(),null;case 10:return Er(i.type),null;case 22:case 23:return br(i),Hh(),e!==null&&ht(ns),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Er(yn),null;case 25:return null;default:return null}}function kv(e,i){switch(Ah(i),i.tag){case 3:Er(yn),Zt();break;case 26:case 27:case 5:Se(i);break;case 4:Zt();break;case 13:br(i);break;case 19:ht(xn);break;case 10:Er(i.type);break;case 22:case 23:br(i),Hh(),e!==null&&ht(ns);break;case 24:Er(yn)}}function bl(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var p=u.next;s=p;do{if((s.tag&e)===e){u=void 0;var g=s.create,T=s.inst;u=g(),T.destroy=u}s=s.next}while(s!==p)}}catch(O){Ve(i,i.return,O)}}function oa(e,i,s){try{var u=i.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&e)===e){var T=u.inst,O=T.destroy;if(O!==void 0){T.destroy=void 0,p=i;var V=s,it=O;try{it()}catch(pt){Ve(p,V,pt)}}}u=u.next}while(u!==g)}}catch(pt){Ve(i,i.return,pt)}}function Xv(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Ug(i,s)}catch(u){Ve(e,e.return,u)}}}function qv(e,i,s){s.props=rs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){Ve(e,i,u)}}function Al(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(p){Ve(e,i,p)}}function nr(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(p){Ve(e,i,p)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Ve(e,i,p)}else s.current=null}function Wv(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(p){Ve(e,e.return,p)}}function pd(e,i,s){try{var u=e.stateNode;hT(u,e.type,s,i),u[On]=i}catch(p){Ve(e,e.return,p)}}function Yv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function md(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Mc));else if(u!==4&&(u===27&&ma(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(_d(e,i,s),e=e.sibling;e!==null;)_d(e,i,s),e=e.sibling}function fc(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&ma(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fc(e,i,s),e=e.sibling;e!==null;)fc(e,i,s),e=e.sibling}function jv(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);In(i,u,s),i[gn]=e,i[On]=s}catch(g){Ve(e,e.return,g)}}var wr=!1,on=!1,gd=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function WE(e,i){if(e=e.containerInfo,Gd=Cc,e=sg(e),mh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var T=0,O=-1,V=-1,it=0,pt=0,xt=e,at=null;e:for(;;){for(var st;xt!==s||p!==0&&xt.nodeType!==3||(O=T+p),xt!==g||u!==0&&xt.nodeType!==3||(V=T+u),xt.nodeType===3&&(T+=xt.nodeValue.length),(st=xt.firstChild)!==null;)at=xt,xt=st;for(;;){if(xt===e)break e;if(at===s&&++it===p&&(O=T),at===g&&++pt===u&&(V=T),(st=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=st}s=O===-1||V===-1?null:{start:O,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Vd={focusedElem:e,selectionRange:s},Cc=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,g=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&g!==null){e=void 0,s=i,p=g.memoizedProps,g=g.memoizedState,u=s.stateNode;try{var ne=rs(s.type,p,s.elementType===s.type);e=u.getSnapshotBeforeUpdate(ne,g),u.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(s,s.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)qd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function Kv(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:la(e,s),u&4&&bl(5,s);break;case 1:if(la(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(T){Ve(s,s.return,T)}else{var p=rs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(p,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Ve(s,s.return,T)}}u&64&&Xv(s),u&512&&Al(s,s.return);break;case 3:if(la(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Ug(e,i)}catch(T){Ve(s,s.return,T)}}break;case 27:i===null&&u&4&&jv(s);case 26:case 5:la(e,s),i===null&&u&4&&Wv(s),u&512&&Al(s,s.return);break;case 12:la(e,s);break;case 13:la(e,s),u&4&&$v(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=eT.bind(null,s),yT(e,s))));break;case 22:if(u=s.memoizedState!==null||wr,!u){i=i!==null&&i.memoizedState!==null||on,p=wr;var g=on;wr=u,(on=i)&&!g?ua(e,s,(s.subtreeFlags&8772)!==0):la(e,s),wr=p,on=g}break;case 30:break;default:la(e,s)}}function Qv(e){var i=e.alternate;i!==null&&(e.alternate=null,Qv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Kr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Jn=!1;function Cr(e,i,s){for(s=s.child;s!==null;)Jv(e,i,s),s=s.sibling}function Jv(e,i,s){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(_t,s)}catch{}switch(s.tag){case 26:on||nr(s,i),Cr(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||nr(s,i);var u=Ze,p=Jn;ma(s.type)&&(Ze=s.stateNode,Jn=!1),Cr(e,i,s),Pl(s.stateNode),Ze=u,Jn=p;break;case 5:on||nr(s,i);case 6:if(u=Ze,p=Jn,Ze=null,Cr(e,i,s),Ze=u,Jn=p,Ze!==null)if(Jn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(g){Ve(s,i,g)}else try{Ze.removeChild(s.stateNode)}catch(g){Ve(s,i,g)}break;case 18:Ze!==null&&(Jn?(e=Ze,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),kl(e)):H0(Ze,s.stateNode));break;case 4:u=Ze,p=Jn,Ze=s.stateNode.containerInfo,Jn=!0,Cr(e,i,s),Ze=u,Jn=p;break;case 0:case 11:case 14:case 15:on||oa(2,s,i),on||oa(4,s,i),Cr(e,i,s);break;case 1:on||(nr(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&qv(s,i,u)),Cr(e,i,s);break;case 21:Cr(e,i,s);break;case 22:on=(u=on)||s.memoizedState!==null,Cr(e,i,s),on=u;break;default:Cr(e,i,s)}}function $v(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kl(e)}catch(s){Ve(i,i.return,s)}}function YE(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Zv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Zv),i;default:throw Error(r(435,e.tag))}}function vd(e,i){var s=YE(e);i.forEach(function(u){var p=nT.bind(null,e,u);s.has(u)||(s.add(u),u.then(p,p))})}function di(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var p=s[u],g=e,T=i,O=T;t:for(;O!==null;){switch(O.tag){case 27:if(ma(O.type)){Ze=O.stateNode,Jn=!1;break t}break;case 5:Ze=O.stateNode,Jn=!1;break t;case 3:case 4:Ze=O.stateNode.containerInfo,Jn=!0;break t}O=O.return}if(Ze===null)throw Error(r(160));Jv(g,T,p),Ze=null,Jn=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)t0(i,e),i=i.sibling}var Xi=null;function t0(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:di(i,e),pi(e),u&4&&(oa(3,e,e.return),bl(3,e),oa(5,e,e.return));break;case 1:di(i,e),pi(e),u&512&&(on||s===null||nr(s,s.return)),u&64&&wr&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var p=Xi;if(di(i,e),pi(e),u&512&&(on||s===null||nr(s,s.return)),u&4){var g=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,p=p.ownerDocument||p;e:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Zr]||g[gn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),In(g,u,s),g[gn]=e,cn(g),u=g;break t;case"link":var T=j0("link","href",p).get(u+(s.href||""));if(T){for(var O=0;O<T.length;O++)if(g=T[O],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(O,1);break e}}g=p.createElement(u),In(g,u,s),p.head.appendChild(g);break;case"meta":if(T=j0("meta","content",p).get(u+(s.content||""))){for(O=0;O<T.length;O++)if(g=T[O],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(O,1);break e}}g=p.createElement(u),In(g,u,s),p.head.appendChild(g);break;default:throw Error(r(468,u))}g[gn]=e,cn(g),u=g}e.stateNode=u}else Z0(p,e.type,e.stateNode);else e.stateNode=Y0(p,u,e.memoizedProps);else g!==u?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,u===null?Z0(p,e.type,e.stateNode):Y0(p,u,e.memoizedProps)):u===null&&e.stateNode!==null&&pd(e,e.memoizedProps,s.memoizedProps)}break;case 27:di(i,e),pi(e),u&512&&(on||s===null||nr(s,s.return)),s!==null&&u&4&&pd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(di(i,e),pi(e),u&512&&(on||s===null||nr(s,s.return)),e.flags&32){p=e.stateNode;try{$i(p,"")}catch(st){Ve(e,e.return,st)}}u&4&&e.stateNode!=null&&(p=e.memoizedProps,pd(e,p,s!==null?s.memoizedProps:p)),u&1024&&(gd=!0);break;case 6:if(di(i,e),pi(e),u&4){if(e.stateNode===null)throw Error(r(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch(st){Ve(e,e.return,st)}}break;case 3:if(Ac=null,p=Xi,Xi=Tc(i.containerInfo),di(i,e),Xi=p,pi(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{kl(i.containerInfo)}catch(st){Ve(e,e.return,st)}gd&&(gd=!1,e0(e));break;case 4:u=Xi,Xi=Tc(e.stateNode.containerInfo),di(i,e),pi(e),Xi=u;break;case 12:di(i,e),pi(e);break;case 13:di(i,e),pi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Td=de()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,vd(e,u)));break;case 22:p=e.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,it=wr,pt=on;if(wr=it||p,on=pt||V,di(i,e),on=pt,wr=it,pi(e),u&8192)t:for(i=e.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(s===null||V||wr||on||as(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(g=V.stateNode,p)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{O=V.stateNode;var xt=V.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;O.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Ve(V,V.return,st)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=p?"":V.memoizedProps}catch(st){Ve(V,V.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,vd(e,s))));break;case 19:di(i,e),pi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,vd(e,u)));break;case 30:break;case 21:break;default:di(i,e),pi(e)}}function pi(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(Yv(u)){s=u;break}u=u.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var p=s.stateNode,g=md(e);fc(e,g,p);break;case 5:var T=s.stateNode;s.flags&32&&($i(T,""),s.flags&=-33);var O=md(e);fc(e,O,T);break;case 3:case 4:var V=s.stateNode.containerInfo,it=md(e);_d(e,it,V);break;default:throw Error(r(161))}}catch(pt){Ve(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function e0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;e0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Kv(e,i.alternate,i),i=i.sibling}function as(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:oa(4,i,i.return),as(i);break;case 1:nr(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&qv(i,i.return,s),as(i);break;case 27:Pl(i.stateNode);case 26:case 5:nr(i,i.return),as(i);break;case 22:i.memoizedState===null&&as(i);break;case 30:as(i);break;default:as(i)}e=e.sibling}}function ua(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,p=e,g=i,T=g.flags;switch(g.tag){case 0:case 11:case 15:ua(p,g,s),bl(4,g);break;case 1:if(ua(p,g,s),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(it){Ve(u,u.return,it)}if(u=g,p=u.updateQueue,p!==null){var O=u.stateNode;try{var V=p.shared.hiddenCallbacks;if(V!==null)for(p.shared.hiddenCallbacks=null,p=0;p<V.length;p++)Dg(V[p],O)}catch(it){Ve(u,u.return,it)}}s&&T&64&&Xv(g),Al(g,g.return);break;case 27:jv(g);case 26:case 5:ua(p,g,s),s&&u===null&&T&4&&Wv(g),Al(g,g.return);break;case 12:ua(p,g,s);break;case 13:ua(p,g,s),s&&T&4&&$v(p,g);break;case 22:g.memoizedState===null&&ua(p,g,s),Al(g,g.return);break;case 30:break;default:ua(p,g,s)}i=i.sibling}}function yd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&fl(s))}function xd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fl(e))}function ir(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)n0(e,i,s,u),i=i.sibling}function n0(e,i,s,u){var p=i.flags;switch(i.tag){case 0:case 11:case 15:ir(e,i,s,u),p&2048&&bl(9,i);break;case 1:ir(e,i,s,u);break;case 3:ir(e,i,s,u),p&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fl(e)));break;case 12:if(p&2048){ir(e,i,s,u),e=i.stateNode;try{var g=i.memoizedProps,T=g.id,O=g.onPostCommit;typeof O=="function"&&O(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ve(i,i.return,V)}}else ir(e,i,s,u);break;case 13:ir(e,i,s,u);break;case 23:break;case 22:g=i.stateNode,T=i.alternate,i.memoizedState!==null?g._visibility&2?ir(e,i,s,u):Rl(e,i):g._visibility&2?ir(e,i,s,u):(g._visibility|=2,Js(e,i,s,u,(i.subtreeFlags&10256)!==0)),p&2048&&yd(T,i);break;case 24:ir(e,i,s,u),p&2048&&xd(i.alternate,i);break;default:ir(e,i,s,u)}}function Js(e,i,s,u,p){for(p=p&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=e,T=i,O=s,V=u,it=T.flags;switch(T.tag){case 0:case 11:case 15:Js(g,T,O,V,p),bl(8,T);break;case 23:break;case 22:var pt=T.stateNode;T.memoizedState!==null?pt._visibility&2?Js(g,T,O,V,p):Rl(g,T):(pt._visibility|=2,Js(g,T,O,V,p)),p&&it&2048&&yd(T.alternate,T);break;case 24:Js(g,T,O,V,p),p&&it&2048&&xd(T.alternate,T);break;default:Js(g,T,O,V,p)}i=i.sibling}}function Rl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,p=u.flags;switch(u.tag){case 22:Rl(s,u),p&2048&&yd(u.alternate,u);break;case 24:Rl(s,u),p&2048&&xd(u.alternate,u);break;default:Rl(s,u)}i=i.sibling}}var wl=8192;function $s(e){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)i0(e),e=e.sibling}function i0(e){switch(e.tag){case 26:$s(e),e.flags&wl&&e.memoizedState!==null&&LT(Xi,e.memoizedState,e.memoizedProps);break;case 5:$s(e);break;case 3:case 4:var i=Xi;Xi=Tc(e.stateNode.containerInfo),$s(e),Xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wl,wl=16777216,$s(e),wl=i):$s(e));break;default:$s(e)}}function r0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Cl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Rn=u,s0(u,e)}r0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&oa(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,hc(e)):Cl(e);break;default:Cl(e)}}function hc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Rn=u,s0(u,e)}r0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:oa(8,i,i.return),hc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,hc(i));break;default:hc(i)}e=e.sibling}}function s0(e,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:oa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:fl(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,Rn=u;else t:for(s=e;Rn!==null;){u=Rn;var p=u.sibling,g=u.return;if(Qv(u),u===s){Rn=null;break t}if(p!==null){p.return=g,Rn=p;break t}Rn=g}}}var jE={getCacheForType:function(e){var i=Hn(yn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},ZE=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,pe=null,Me=0,Pe=0,mi=null,ca=!1,to=!1,Sd=!1,Dr=0,nn=0,fa=0,ss=0,Md=0,Ui=0,eo=0,Dl=null,$n=null,Ed=!1,Td=0,dc=1/0,pc=null,ha=null,zn=0,da=null,no=null,io=0,bd=0,Ad=null,o0=null,Ul=0,Rd=null;function _i(){if((Ne&2)!==0&&Me!==0)return Me&-Me;if(F.T!==null){var e=Xs;return e!==0?e:Nd()}return Te()}function l0(){Ui===0&&(Ui=(Me&536870912)===0||we?Z():536870912);var e=Di.current;return e!==null&&(e.flags|=32),Ui}function gi(e,i,s){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ro(e,0),pa(e,Me,Ui,!1)),Bt(e,s),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(ss|=s),nn===4&&pa(e,Me,Ui,!1)),rr(e))}function u0(e,i,s){if((Ne&6)!==0)throw Error(r(327));var u=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),p=u?JE(e,i):Dd(e,i,!0),g=u;do{if(p===0){to&&!u&&pa(e,i,0,!1);break}else{if(s=e.current.alternate,g&&!KE(s)){p=Dd(e,i,!1),g=!1;continue}if(p===2){if(g=i,e.errorRecoveryDisabledLanes&g)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var O=e;p=Dl;var V=O.current.memoizedState.isDehydrated;if(V&&(ro(O,T).flags|=256),T=Dd(O,T,!1),T!==2){if(Sd&&!V){O.errorRecoveryDisabledLanes|=g,ss|=g,p=4;break t}g=$n,$n=p,g!==null&&($n===null?$n=g:$n.push.apply($n,g))}p=T}if(g=!1,p!==2)continue}}if(p===1){ro(e,0),pa(e,i,0,!0);break}t:{switch(u=e,g=p,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:pa(u,i,Ui,!ca);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(p=Td+300-de(),10<p)){if(pa(u,i,Ui,!ca),jt(u,0,!0)!==0)break t;u.timeoutHandle=B0(c0.bind(null,u,s,$n,pc,Ed,i,Ui,ss,eo,ca,g,2,-0,0),p);break t}c0(u,s,$n,pc,Ed,i,Ui,ss,eo,ca,g,0,-0,0)}}break}while(!0);rr(e)}function c0(e,i,s,u,p,g,T,O,V,it,pt,xt,at,st){if(e.timeoutHandle=-1,xt=i.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(Bl={stylesheets:null,count:0,unsuspend:UT},i0(i),xt=OT(),xt!==null)){e.cancelPendingCommit=xt(g0.bind(null,e,i,g,s,u,p,T,O,V,pt,1,at,st)),pa(e,g,T,!it);return}g0(e,i,g,s,u,p,T,O,V)}function KE(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var p=s[u],g=p.getSnapshot;p=p.value;try{if(!fi(g(),p))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pa(e,i,s,u){i&=~Md,i&=~ss,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var p=i;0<p;){var g=31-zt(p),T=1<<g;u[g]=-1,p&=~T}s!==0&&St(e,s,i)}function mc(){return(Ne&6)===0?(Ll(0),!1):!0}function wd(){if(pe!==null){if(Pe===0)var e=pe.return;else e=pe,Mr=ts=null,qh(e),Ks=null,Ml=0,e=pe;for(;e!==null;)kv(e.alternate,e),e=e.return;pe=null}}function ro(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,pT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),wd(),We=e,pe=s=yr(e.current,null),Me=i,Pe=0,mi=null,ca=!1,to=Ct(e,i),Sd=!1,eo=Ui=Md=ss=fa=nn=0,$n=Dl=null,Ed=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var p=31-zt(u),g=1<<p;i|=e[p],u&=~g}return Dr=i,Iu(),s}function f0(e,i){ce=null,F.H=nc,i===dl||i===Wu?(i=wg(),Pe=3):i===bg?(i=wg(),Pe=4):Pe=i===Cv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mi=i,pe===null&&(nn=1,oc(e,Ai(i,e.current)))}function h0(){var e=F.H;return F.H=nc,e===null?nc:e}function d0(){var e=F.A;return F.A=jE,e}function Cd(){nn=4,ca||(Me&4194048)!==Me&&Di.current!==null||(to=!0),(fa&134217727)===0&&(ss&134217727)===0||We===null||pa(We,Me,Ui,!1)}function Dd(e,i,s){var u=Ne;Ne|=2;var p=h0(),g=d0();(We!==e||Me!==i)&&(pc=null,ro(e,i)),i=!1;var T=nn;t:do try{if(Pe!==0&&pe!==null){var O=pe,V=mi;switch(Pe){case 8:wd(),T=6;break t;case 3:case 2:case 9:case 6:Di.current===null&&(i=!0);var it=Pe;if(Pe=0,mi=null,ao(e,O,V,it),s&&to){T=0;break t}break;default:it=Pe,Pe=0,mi=null,ao(e,O,V,it)}}QE(),T=nn;break}catch(pt){f0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Mr=ts=null,Ne=u,F.H=p,F.A=g,pe===null&&(We=null,Me=0,Iu()),T}function QE(){for(;pe!==null;)p0(pe)}function JE(e,i){var s=Ne;Ne|=2;var u=h0(),p=d0();We!==e||Me!==i?(pc=null,dc=de()+500,ro(e,i)):to=Ct(e,i);t:do try{if(Pe!==0&&pe!==null){i=pe;var g=mi;e:switch(Pe){case 1:Pe=0,mi=null,ao(e,i,g,1);break;case 2:case 9:if(Ag(g)){Pe=0,mi=null,m0(i);break}i=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),rr(e)},g.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Ag(g)?(Pe=0,mi=null,m0(i)):(Pe=0,mi=null,ao(e,i,g,7));break;case 5:var T=null;switch(pe.tag){case 26:T=pe.memoizedState;case 5:case 27:var O=pe;if(!T||K0(T)){Pe=0,mi=null;var V=O.sibling;if(V!==null)pe=V;else{var it=O.return;it!==null?(pe=it,_c(it)):pe=null}break e}}Pe=0,mi=null,ao(e,i,g,5);break;case 6:Pe=0,mi=null,ao(e,i,g,6);break;case 8:wd(),nn=6;break t;default:throw Error(r(462))}}$E();break}catch(pt){f0(e,pt)}while(!0);return Mr=ts=null,F.H=u,F.A=p,Ne=s,pe!==null?0:(We=null,Me=0,Iu(),nn)}function $E(){for(;pe!==null&&!Ln();)p0(pe)}function p0(e){var i=Gv(e.alternate,e,Dr);e.memoizedProps=e.pendingProps,i===null?_c(e):pe=i}function m0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Pv(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Pv(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:qh(i);default:kv(s,i),i=pe=_g(i,Dr),i=Gv(s,i,Dr)}e.memoizedProps=e.pendingProps,i===null?_c(e):pe=i}function ao(e,i,s,u){Mr=ts=null,qh(i),Ks=null,Ml=0;var p=i.return;try{if(VE(e,p,i,s,Me)){nn=1,oc(e,Ai(s,e.current)),pe=null;return}}catch(g){if(p!==null)throw pe=p,g;nn=1,oc(e,Ai(s,e.current)),pe=null;return}i.flags&32768?(we||u===1?e=!0:to||(Me&536870912)!==0?e=!1:(ca=e=!0,(u===2||u===9||u===3||u===6)&&(u=Di.current,u!==null&&u.tag===13&&(u.flags|=16384))),_0(i,e)):_c(i)}function _c(e){var i=e;do{if((i.flags&32768)!==0){_0(i,ca);return}e=i.return;var s=XE(i.alternate,i,Dr);if(s!==null){pe=s;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);nn===0&&(nn=5)}function _0(e,i){do{var s=qE(e.alternate,e);if(s!==null){s.flags&=32767,pe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=s}while(e!==null);nn=6,pe=null}function g0(e,i,s,u,p,g,T,O,V){e.cancelPendingCommit=null;do gc();while(zn!==0);if((Ne&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=xh,wt(e,s,g,T,O,V),e===We&&(pe=We=null,Me=0),no=i,da=e,io=s,bd=g,Ad=p,o0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iT(ae,function(){return M0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,p=X.p,X.p=2,T=Ne,Ne|=4;try{WE(e,i,s)}finally{Ne=T,X.p=p,F.T=u}}zn=1,v0(),y0(),x0()}}function v0(){if(zn===1){zn=0;var e=da,i=no,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var u=X.p;X.p=2;var p=Ne;Ne|=4;try{t0(i,e);var g=Vd,T=sg(e.containerInfo),O=g.focusedElem,V=g.selectionRange;if(T!==O&&O&&O.ownerDocument&&ag(O.ownerDocument.documentElement,O)){if(V!==null&&mh(O)){var it=V.start,pt=V.end;if(pt===void 0&&(pt=it),"selectionStart"in O)O.selectionStart=it,O.selectionEnd=Math.min(pt,O.value.length);else{var xt=O.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ne=O.textContent.length,$t=Math.min(V.start,ne),Fe=V.end===void 0?$t:Math.min(V.end,ne);!st.extend&&$t>Fe&&(T=Fe,Fe=$t,$t=T);var J=rg(O,$t),j=rg(O,Fe);if(J&&j&&(st.rangeCount!==1||st.anchorNode!==J.node||st.anchorOffset!==J.offset||st.focusNode!==j.node||st.focusOffset!==j.offset)){var nt=xt.createRange();nt.setStart(J.node,J.offset),st.removeAllRanges(),$t>Fe?(st.addRange(nt),st.extend(j.node,j.offset)):(nt.setEnd(j.node,j.offset),st.addRange(nt))}}}}for(xt=[],st=O;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<xt.length;O++){var gt=xt[O];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Cc=!!Gd,Vd=Gd=null}finally{Ne=p,X.p=u,F.T=s}}e.current=i,zn=2}}function y0(){if(zn===2){zn=0;var e=da,i=no,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var u=X.p;X.p=2;var p=Ne;Ne|=4;try{Kv(e,i.alternate,i)}finally{Ne=p,X.p=u,F.T=s}}zn=3}}function x0(){if(zn===4||zn===3){zn=0,Ee();var e=da,i=no,s=io,u=o0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?zn=5:(zn=0,no=da=null,S0(e,e.pendingLanes));var p=e.pendingLanes;if(p===0&&(ha=null),Oe(s),i=i.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(_t,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,p=X.p,X.p=2,F.T=null;try{for(var g=e.onRecoverableError,T=0;T<u.length;T++){var O=u[T];g(O.value,{componentStack:O.stack})}}finally{F.T=i,X.p=p}}(io&3)!==0&&gc(),rr(e),p=e.pendingLanes,(s&4194090)!==0&&(p&42)!==0?e===Rd?Ul++:(Ul=0,Rd=e):Ul=0,Ll(0)}}function S0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,fl(i)))}function gc(e){return v0(),y0(),x0(),M0()}function M0(){if(zn!==5)return!1;var e=da,i=bd;bd=0;var s=Oe(io),u=F.T,p=X.p;try{X.p=32>s?32:s,F.T=null,s=Ad,Ad=null;var g=da,T=io;if(zn=0,no=da=null,io=0,(Ne&6)!==0)throw Error(r(331));var O=Ne;if(Ne|=4,a0(g.current),n0(g,g.current,T,s),Ne=O,Ll(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(_t,g)}catch{}return!0}finally{X.p=p,F.T=u,S0(e,i)}}function E0(e,i,s){i=Ai(s,i),i=ad(e.stateNode,i,2),e=ia(e,i,2),e!==null&&(Bt(e,2),rr(e))}function Ve(e,i,s){if(e.tag===3)E0(e,e,s);else for(;i!==null;){if(i.tag===3){E0(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ha===null||!ha.has(u))){e=Ai(s,e),s=Rv(2),u=ia(i,s,2),u!==null&&(wv(s,u,i,e),Bt(u,2),rr(u));break}}i=i.return}}function Ud(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new ZE;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(s)||(Sd=!0,p.add(s),e=tT.bind(null,e,i,s),i.then(e,e))}function tT(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,We===e&&(Me&s)===s&&(nn===4||nn===3&&(Me&62914560)===Me&&300>de()-Td?(Ne&2)===0&&ro(e,0):Md|=s,eo===Me&&(eo=0)),rr(e)}function T0(e,i){i===0&&(i=Lt()),e=Hs(e,i),e!==null&&(Bt(e,i),rr(e))}function eT(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),T0(e,s)}function nT(e,i){var s=0;switch(e.tag){case 13:var u=e.stateNode,p=e.memoizedState;p!==null&&(s=p.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(i),T0(e,s)}function iT(e,i){return _e(e,i)}var vc=null,so=null,Ld=!1,yc=!1,Od=!1,os=0;function rr(e){e!==so&&e.next===null&&(so===null?vc=so=e:so=so.next=e),yc=!0,Ld||(Ld=!0,aT())}function Ll(e,i){if(!Od&&yc){Od=!0;do for(var s=!1,u=vc;u!==null;){if(e!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var T=u.suspendedLanes,O=u.pingedLanes;g=(1<<31-zt(42|e)+1)-1,g&=p&~(T&~O),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,w0(u,g))}else g=Me,g=jt(u,u===We?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Ct(u,g)||(s=!0,w0(u,g));u=u.next}while(s);Od=!1}}function rT(){b0()}function b0(){yc=Ld=!1;var e=0;os!==0&&(dT()&&(e=os),os=0);for(var i=de(),s=null,u=vc;u!==null;){var p=u.next,g=A0(u,i);g===0?(u.next=null,s===null?vc=p:s.next=p,p===null&&(so=s)):(s=u,(e!==0||(g&3)!==0)&&(yc=!0)),u=p}Ll(e)}function A0(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,p=e.expirationTimes,g=e.pendingLanes&-62914561;0<g;){var T=31-zt(g),O=1<<T,V=p[T];V===-1?((O&s)===0||(O&u)!==0)&&(p[T]=re(O,i)):V<=i&&(e.expiredLanes|=O),g&=~O}if(i=We,s=Me,s=jt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&q(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&q(u),Oe(s)){case 2:case 8:s=Kt;break;case 32:s=ae;break;case 268435456:s=G;break;default:s=ae}return u=R0.bind(null,e),s=_e(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&q(u),e.callbackPriority=2,e.callbackNode=null,2}function R0(e,i){if(zn!==0&&zn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(gc()&&e.callbackNode!==s)return null;var u=Me;return u=jt(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(u0(e,u,i),A0(e,de()),e.callbackNode!=null&&e.callbackNode===s?R0.bind(null,e):null)}function w0(e,i){if(gc())return null;u0(e,i,!0)}function aT(){mT(function(){(Ne&6)!==0?_e(ge,rT):b0()})}function Nd(){return os===0&&(os=Z()),os}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Du(""+e)}function D0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function sT(e,i,s,u,p){if(i==="submit"&&s&&s.stateNode===p){var g=C0((p[On]||null).action),T=u.submitter;T&&(i=(i=T[On]||null)?C0(i.formAction):T.getAttribute("formAction"),i!==null&&(g=i,T=null));var O=new Nu("action","action",null,u,p);e.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(os!==0){var V=T?D0(p,T):new FormData(p);td(s,{pending:!0,data:V,method:p.method,action:g},null,V)}}else typeof g=="function"&&(O.preventDefault(),V=T?D0(p,T):new FormData(p),td(s,{pending:!0,data:V,method:p.method,action:g},g,V))},currentTarget:p}]})}}for(var Pd=0;Pd<yh.length;Pd++){var zd=yh[Pd],oT=zd.toLowerCase(),lT=zd[0].toUpperCase()+zd.slice(1);ki(oT,"on"+lT)}ki(ug,"onAnimationEnd"),ki(cg,"onAnimationIteration"),ki(fg,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(bE,"onTransitionRun"),ki(AE,"onTransitionStart"),ki(RE,"onTransitionCancel"),ki(hg,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mr("onBeforeInput",["compositionend","keypress","textInput","paste"]),mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function U0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],p=u.event;u=u.listeners;t:{var g=void 0;if(i)for(var T=u.length-1;0<=T;T--){var O=u[T],V=O.instance,it=O.currentTarget;if(O=O.listener,V!==g&&p.isPropagationStopped())break t;g=O,p.currentTarget=it;try{g(p)}catch(pt){sc(pt)}p.currentTarget=null,g=V}else for(T=0;T<u.length;T++){if(O=u[T],V=O.instance,it=O.currentTarget,O=O.listener,V!==g&&p.isPropagationStopped())break t;g=O,p.currentTarget=it;try{g(p)}catch(pt){sc(pt)}p.currentTarget=null,g=V}}}}function me(e,i){var s=i[ka];s===void 0&&(s=i[ka]=new Set);var u=e+"__bubble";s.has(u)||(L0(i,e,2,!1),s.add(u))}function Id(e,i,s){var u=0;i&&(u|=4),L0(s,e,u,i)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[xc]){e[xc]=!0,wu.forEach(function(s){s!=="selectionchange"&&(uT.has(s)||Id(s,!1,e),Id(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[xc]||(i[xc]=!0,Id("selectionchange",!1,i))}}function L0(e,i,s,u){switch(ny(i)){case 2:var p=zT;break;case 8:p=IT;break;default:p=Jd}s=p.bind(null,i,s,e),p=void 0,!sh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?e.addEventListener(i,s,{capture:!0,passive:p}):e.addEventListener(i,s,!0):p!==void 0?e.addEventListener(i,s,{passive:p}):e.addEventListener(i,s,!1)}function Fd(e,i,s,u,p){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===p)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;O!==null;){if(T=dr(O),T===null)return;if(V=T.tag,V===5||V===6||V===26||V===27){u=g=T;continue t}O=O.parentNode}}u=u.return}F_(function(){var it=g,pt=rh(s),xt=[];t:{var at=dg.get(e);if(at!==void 0){var st=Nu,ne=e;switch(e){case"keypress":if(Lu(s)===0)break t;case"keydown":case"keyup":st=iE;break;case"focusin":ne="focus",st=ch;break;case"focusout":ne="blur",st=ch;break;case"beforeblur":case"afterblur":st=ch;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=V_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=qM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=sE;break;case ug:case cg:case fg:st=jM;break;case hg:st=lE;break;case"scroll":case"scrollend":st=kM;break;case"wheel":st=cE;break;case"copy":case"cut":case"paste":st=KM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=X_;break;case"toggle":case"beforetoggle":st=hE}var $t=(i&4)!==0,Fe=!$t&&(e==="scroll"||e==="scrollend"),J=$t?at!==null?at+"Capture":null:at;$t=[];for(var j=it,nt;j!==null;){var gt=j;if(nt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||nt===null||J===null||(gt=Jo(j,J),gt!=null&&$t.push(Nl(j,gt,nt))),Fe)break;j=j.return}0<$t.length&&(at=new st(at,ne,null,s,pt),xt.push({event:at,listeners:$t}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==ih&&(ne=s.relatedTarget||s.fromElement)&&(dr(ne)||ne[Zn]))break t;if((st||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ne=s.relatedTarget||s.toElement,st=it,ne=ne?dr(ne):null,ne!==null&&(Fe=l(ne),$t=ne.tag,ne!==Fe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(st=null,ne=it),st!==ne)){if($t=V_,gt="onMouseLeave",J="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&($t=X_,gt="onPointerLeave",J="onPointerEnter",j="pointer"),Fe=st==null?at:qa(st),nt=ne==null?at:qa(ne),at=new $t(gt,j+"leave",st,s,pt),at.target=Fe,at.relatedTarget=nt,gt=null,dr(pt)===it&&($t=new $t(J,j+"enter",ne,s,pt),$t.target=nt,$t.relatedTarget=Fe,gt=$t),Fe=gt,st&&ne)e:{for($t=st,J=ne,j=0,nt=$t;nt;nt=oo(nt))j++;for(nt=0,gt=J;gt;gt=oo(gt))nt++;for(;0<j-nt;)$t=oo($t),j--;for(;0<nt-j;)J=oo(J),nt--;for(;j--;){if($t===J||J!==null&&$t===J.alternate)break e;$t=oo($t),J=oo(J)}$t=null}else $t=null;st!==null&&O0(xt,at,st,$t,!1),ne!==null&&Fe!==null&&O0(xt,Fe,ne,$t,!0)}}t:{if(at=it?qa(it):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Gt=J_;else if(K_(at))if($_)Gt=ME;else{Gt=xE;var he=yE}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?it&&nh(it.elementType)&&(Gt=J_):Gt=SE;if(Gt&&(Gt=Gt(e,it))){Q_(xt,Gt,s,pt);break t}he&&he(e,at,it),e==="focusout"&&it&&at.type==="number"&&it.memoizedProps.value!=null&&Fn(at,"number",at.value)}switch(he=it?qa(it):window,e){case"focusin":(K_(he)||he.contentEditable==="true")&&(Is=he,_h=it,sl=null);break;case"focusout":sl=_h=Is=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,og(xt,s,pt);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":og(xt,s,pt)}var Wt;if(hh)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else zs?j_(e,s)&&(te="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(te="onCompositionStart");te&&(q_&&s.locale!=="ko"&&(zs||te!=="onCompositionStart"?te==="onCompositionEnd"&&zs&&(Wt=H_()):($r=pt,oh="value"in $r?$r.value:$r.textContent,zs=!0)),he=Sc(it,te),0<he.length&&(te=new k_(te,e,null,s,pt),xt.push({event:te,listeners:he}),Wt?te.data=Wt:(Wt=Z_(s),Wt!==null&&(te.data=Wt)))),(Wt=pE?mE(e,s):_E(e,s))&&(te=Sc(it,"onBeforeInput"),0<te.length&&(he=new k_("onBeforeInput","beforeinput",null,s,pt),xt.push({event:he,listeners:te}),he.data=Wt)),sT(xt,e,it,s,pt)}U0(xt,i)})}function Nl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Sc(e,i){for(var s=i+"Capture",u=[];e!==null;){var p=e,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Jo(e,s),p!=null&&u.unshift(Nl(e,p,g)),p=Jo(e,i),p!=null&&u.push(Nl(e,p,g))),e.tag===3)return u;e=e.return}return[]}function oo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O0(e,i,s,u,p){for(var g=i._reactName,T=[];s!==null&&s!==u;){var O=s,V=O.alternate,it=O.stateNode;if(O=O.tag,V!==null&&V===u)break;O!==5&&O!==26&&O!==27||it===null||(V=it,p?(it=Jo(s,g),it!=null&&T.unshift(Nl(s,it,V))):p||(it=Jo(s,g),it!=null&&T.push(Nl(s,it,V)))),s=s.return}T.length!==0&&e.push({event:i,listeners:T})}var cT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function N0(e){return(typeof e=="string"?e:""+e).replace(cT,`
`).replace(fT,"")}function P0(e,i){return i=N0(i),N0(e)===i}function Mc(){}function Be(e,i,s,u,p,g){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||$i(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&$i(e,""+u);break;case"className":Dt(e,"class",u);break;case"tabIndex":Dt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,s,u);break;case"style":I_(e,u,g);break;case"data":if(i!=="object"){Dt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Du(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(i!=="input"&&Be(e,i,"name",p.name,p,null),Be(e,i,"formEncType",p.formEncType,p,null),Be(e,i,"formMethod",p.formMethod,p,null),Be(e,i,"formTarget",p.formTarget,p,null)):(Be(e,i,"encType",p.encType,p,null),Be(e,i,"method",p.method,p,null),Be(e,i,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Du(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=Mc);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(s=u.__html,s!=null){if(p.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=Du(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":me("beforetoggle",e),me("toggle",e),At(e,"popover",u);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":At(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=GM.get(s)||s,At(e,s,u))}}function Hd(e,i,s,u,p,g){switch(s){case"style":I_(e,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(s=u.__html,s!=null){if(p.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof u=="string"?$i(e,u):(typeof u=="number"||typeof u=="bigint")&&$i(e,""+u);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cu.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),i=s.slice(2,p?s.length-7:void 0),g=e[On]||null,g=g!=null?g[s]:null,typeof g=="function"&&e.removeEventListener(i,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,p);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):At(e,s,u)}}}function In(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var u=!1,p=!1,g;for(g in s)if(s.hasOwnProperty(g)){var T=s[g];if(T!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Be(e,i,g,T,s,null)}}p&&Be(e,i,"srcSet",s.srcSet,s,null),u&&Be(e,i,"src",s.src,s,null);return;case"input":me("invalid",e);var O=g=T=p=null,V=null,it=null;for(u in s)if(s.hasOwnProperty(u)){var pt=s[u];if(pt!=null)switch(u){case"name":p=pt;break;case"type":T=pt;break;case"checked":V=pt;break;case"defaultChecked":it=pt;break;case"value":g=pt;break;case"defaultValue":O=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,i));break;default:Be(e,i,u,pt,s,null)}}Ge(e,g,O,V,it,T,p,!1),ze(e);return;case"select":me("invalid",e),u=T=g=null;for(p in s)if(s.hasOwnProperty(p)&&(O=s[p],O!=null))switch(p){case"value":g=O;break;case"defaultValue":T=O;break;case"multiple":u=O;default:Be(e,i,p,O,s,null)}i=g,s=T,e.multiple=!!u,i!=null?vn(e,!!u,i,!1):s!=null&&vn(e,!!u,s,!0);return;case"textarea":me("invalid",e),g=p=u=null;for(T in s)if(s.hasOwnProperty(T)&&(O=s[T],O!=null))switch(T){case"value":u=O;break;case"defaultValue":p=O;break;case"children":g=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(91));break;default:Be(e,i,T,O,s,null)}Nn(e,u,p,g),ze(e);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(u=s[V],u!=null))switch(V){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Be(e,i,V,u,s,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(u=0;u<Ol.length;u++)me(Ol[u],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in s)if(s.hasOwnProperty(it)&&(u=s[it],u!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Be(e,i,it,u,s,null)}return;default:if(nh(i)){for(pt in s)s.hasOwnProperty(pt)&&(u=s[pt],u!==void 0&&Hd(e,i,pt,u,s,void 0));return}}for(O in s)s.hasOwnProperty(O)&&(u=s[O],u!=null&&Be(e,i,O,u,s,null))}function hT(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,O=null,V=null,it=null,pt=null;for(st in s){var xt=s[st];if(s.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":V=xt;default:u.hasOwnProperty(st)||Be(e,i,st,null,u,xt)}}for(var at in u){var st=u[at];if(xt=s[at],u.hasOwnProperty(at)&&(st!=null||xt!=null))switch(at){case"type":g=st;break;case"name":p=st;break;case"checked":it=st;break;case"defaultChecked":pt=st;break;case"value":T=st;break;case"defaultValue":O=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,i));break;default:st!==xt&&Be(e,i,at,st,u,xt)}}_r(e,T,O,V,it,pt,g,p);return;case"select":st=T=O=at=null;for(g in s)if(V=s[g],s.hasOwnProperty(g)&&V!=null)switch(g){case"value":break;case"multiple":st=V;default:u.hasOwnProperty(g)||Be(e,i,g,null,u,V)}for(p in u)if(g=u[p],V=s[p],u.hasOwnProperty(p)&&(g!=null||V!=null))switch(p){case"value":at=g;break;case"defaultValue":O=g;break;case"multiple":T=g;default:g!==V&&Be(e,i,p,g,u,V)}i=O,s=T,u=st,at!=null?vn(e,!!s,at,!1):!!u!=!!s&&(i!=null?vn(e,!!s,i,!0):vn(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(O in s)if(p=s[O],s.hasOwnProperty(O)&&p!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Be(e,i,O,null,u,p)}for(T in u)if(p=u[T],g=s[T],u.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":at=p;break;case"defaultValue":st=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:p!==g&&Be(e,i,T,p,u,g)}bn(e,at,st);return;case"option":for(var ne in s)if(at=s[ne],s.hasOwnProperty(ne)&&at!=null&&!u.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Be(e,i,ne,null,u,at)}for(V in u)if(at=u[V],st=s[V],u.hasOwnProperty(V)&&at!==st&&(at!=null||st!=null))switch(V){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Be(e,i,V,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in s)at=s[$t],s.hasOwnProperty($t)&&at!=null&&!u.hasOwnProperty($t)&&Be(e,i,$t,null,u,at);for(it in u)if(at=u[it],st=s[it],u.hasOwnProperty(it)&&at!==st&&(at!=null||st!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,i));break;default:Be(e,i,it,at,u,st)}return;default:if(nh(i)){for(var Fe in s)at=s[Fe],s.hasOwnProperty(Fe)&&at!==void 0&&!u.hasOwnProperty(Fe)&&Hd(e,i,Fe,void 0,u,at);for(pt in u)at=u[pt],st=s[pt],!u.hasOwnProperty(pt)||at===st||at===void 0&&st===void 0||Hd(e,i,pt,at,u,st);return}}for(var J in s)at=s[J],s.hasOwnProperty(J)&&at!=null&&!u.hasOwnProperty(J)&&Be(e,i,J,null,u,at);for(xt in u)at=u[xt],st=s[xt],!u.hasOwnProperty(xt)||at===st||at==null&&st==null||Be(e,i,xt,at,u,st)}var Gd=null,Vd=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function z0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function kd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xd=null;function dT(){var e=window.event;return e&&e.type==="popstate"?e===Xd?!1:(Xd=e,!0):(Xd=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(_T)}:B0;function _T(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function H0(e,i){var s=i,u=0,p=0;do{var g=s.nextSibling;if(e.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<u&&8>u){s=u;var T=e.ownerDocument;if(s&1&&Pl(T.documentElement),s&2&&Pl(T.body),s&4)for(s=T.head,Pl(s),T=s.firstChild;T;){var O=T.nextSibling,V=T.nodeName;T[Zr]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=O}}if(p===0){e.removeChild(g),kl(i);return}p--}else s==="$"||s==="$?"||s==="$!"?p++:u=s.charCodeAt(0)-48;else u=0;s=g}while(s);kl(i)}function qd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":qd(s),Kr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function gT(e,i,s,u){for(;e.nodeType===1;){var p=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Zr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(g=e.getAttribute("rel"),g==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(g!==p.rel||e.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||e.getAttribute("title")!==(p.title==null?null:p.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(g=e.getAttribute("src"),(g!==(p.src==null?null:p.src)||e.getAttribute("type")!==(p.type==null?null:p.type)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&e.getAttribute("name")===g)return e}else return e;if(e=qi(e.nextSibling),e===null)break}return null}function vT(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=qi(e.nextSibling),e===null))return null;return e}function Wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yT(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function qi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Yd=null;function G0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function V0(e,i,s){switch(i=Ec(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Pl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Kr(e)}var Li=new Map,k0=new Set;function Tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ur=X.d;X.d={f:xT,r:ST,D:MT,C:ET,L:TT,m:bT,X:RT,S:AT,M:wT};function xT(){var e=Ur.f(),i=mc();return e||i}function ST(e){var i=pr(e);i!==null&&i.tag===5&&i.type==="form"?uv(i):Ur.r(e)}var lo=typeof document>"u"?null:document;function X0(e,i,s){var u=lo;if(u&&typeof i=="string"&&i){var p=qe(i);p='link[rel="'+e+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),k0.has(p)||(k0.add(p),e={rel:e,crossOrigin:s,href:i},u.querySelector(p)===null&&(i=u.createElement("link"),In(i,"link",e),cn(i),u.head.appendChild(i)))}}function MT(e){Ur.D(e),X0("dns-prefetch",e,null)}function ET(e,i){Ur.C(e,i),X0("preconnect",e,i)}function TT(e,i,s){Ur.L(e,i,s);var u=lo;if(u&&e&&i){var p='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+qe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+qe(s.imageSizes)+'"]')):p+='[href="'+qe(e)+'"]';var g=p;switch(i){case"style":g=uo(e);break;case"script":g=co(e)}Li.has(g)||(e=m({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Li.set(g,e),u.querySelector(p)!==null||i==="style"&&u.querySelector(zl(g))||i==="script"&&u.querySelector(Il(g))||(i=u.createElement("link"),In(i,"link",e),cn(i),u.head.appendChild(i)))}}function bT(e,i){Ur.m(e,i);var s=lo;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+qe(u)+'"][href="'+qe(e)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=co(e)}if(!Li.has(g)&&(e=m({rel:"modulepreload",href:e},i),Li.set(g,e),s.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Il(g)))return}u=s.createElement("link"),In(u,"link",e),cn(u),s.head.appendChild(u)}}}function AT(e,i,s){Ur.S(e,i,s);var u=lo;if(u&&e){var p=Qr(u).hoistableStyles,g=uo(e);i=i||"default";var T=p.get(g);if(!T){var O={loading:0,preload:null};if(T=u.querySelector(zl(g)))O.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Li.get(g))&&jd(e,s);var V=T=u.createElement("link");cn(V),In(V,"link",e),V._p=new Promise(function(it,pt){V.onload=it,V.onerror=pt}),V.addEventListener("load",function(){O.loading|=1}),V.addEventListener("error",function(){O.loading|=2}),O.loading|=4,bc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:O},p.set(g,T)}}}function RT(e,i){Ur.X(e,i);var s=lo;if(s&&e){var u=Qr(s).hoistableScripts,p=co(e),g=u.get(p);g||(g=s.querySelector(Il(p)),g||(e=m({src:e,async:!0},i),(i=Li.get(p))&&Zd(e,i),g=s.createElement("script"),cn(g),In(g,"link",e),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function wT(e,i){Ur.M(e,i);var s=lo;if(s&&e){var u=Qr(s).hoistableScripts,p=co(e),g=u.get(p);g||(g=s.querySelector(Il(p)),g||(e=m({src:e,async:!0,type:"module"},i),(i=Li.get(p))&&Zd(e,i),g=s.createElement("script"),cn(g),In(g,"link",e),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function q0(e,i,s,u){var p=(p=Mt.current)?Tc(p):null;if(!p)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=uo(s.href),s=Qr(p).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=uo(s.href);var g=Qr(p).hoistableStyles,T=g.get(e);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(e,T),(g=p.querySelector(zl(e)))&&!g._p&&(T.instance=g,T.state.loading=5),Li.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Li.set(e,s),g||CT(p,e,s,T.state))),i&&u===null)throw Error(r(528,""));return T}if(i&&u!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=co(s),s=Qr(p).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function uo(e){return'href="'+qe(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function W0(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function CT(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),In(i,"link",s),cn(i),e.head.appendChild(i))}function co(e){return'[src="'+qe(e)+'"]'}function Il(e){return"script[async]"+e}function Y0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+qe(s.href)+'"]');if(u)return i.instance=u,cn(u),u;var p=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),cn(u),In(u,"style",p),bc(u,s.precedence,e),i.instance=u;case"stylesheet":p=uo(s.href);var g=e.querySelector(zl(p));if(g)return i.state.loading|=4,i.instance=g,cn(g),g;u=W0(s),(p=Li.get(p))&&jd(u,p),g=(e.ownerDocument||e).createElement("link"),cn(g);var T=g;return T._p=new Promise(function(O,V){T.onload=O,T.onerror=V}),In(g,"link",u),i.state.loading|=4,bc(g,s.precedence,e),i.instance=g;case"script":return g=co(s.src),(p=e.querySelector(Il(g)))?(i.instance=p,cn(p),p):(u=s,(p=Li.get(g))&&(u=m({},s),Zd(u,p)),e=e.ownerDocument||e,p=e.createElement("script"),cn(p),In(p,"link",u),e.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,bc(u,s.precedence,e));return i.instance}function bc(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,T=0;T<u.length;T++){var O=u[T];if(O.dataset.precedence===i)g=O;else if(g!==p)break}g?g.parentNode.insertBefore(e,g.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function jd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Zd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ac=null;function j0(e,i,s){if(Ac===null){var u=new Map,p=Ac=new Map;p.set(s,u)}else p=Ac,u=p.get(s),u||(u=new Map,p.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),p=0;p<s.length;p++){var g=s[p];if(!(g[Zr]||g[gn]||e==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(i)||"";T=e+T;var O=u.get(T);O?O.push(g):u.set(T,[g])}}return u}function Z0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function DT(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bl=null;function UT(){}function LT(e,i,s){if(Bl===null)throw Error(r(475));var u=Bl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var p=uo(s.href),g=e.querySelector(zl(p));if(g){e=g._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=Rc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=g,cn(g);return}g=e.ownerDocument||e,s=W0(s),(p=Li.get(p))&&jd(s,p),g=g.createElement("link"),cn(g);var T=g;T._p=new Promise(function(O,V){T.onload=O,T.onerror=V}),In(g,"link",s),i.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Rc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function OT(){if(Bl===null)throw Error(r(475));var e=Bl;return e.stylesheets&&e.count===0&&Kd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Kd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)Kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wc=null;function Kd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wc=new Map,i.forEach(NT,e),wc=null,Rc.call(e))}function NT(e,i){if(!(i.state.loading&4)){var s=wc.get(e);if(s)var u=s.get(null);else{s=new Map,wc.set(e,s);for(var p=e.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}p=i.instance,T=p.getAttribute("data-precedence"),g=s.get(T)||u,g===u&&s.set(null,p),s.set(T,p),this.count++,u=Rc.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(p,e.firstChild)),i.state.loading|=4}}var Fl={$$typeof:A,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function PT(e,i,s,u,p,g,T,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Q0(e,i,s,u,p,g,T,O,V,it,pt,xt){return e=new PT(e,i,s,T,O,V,it,xt),i=1,g===!0&&(i|=24),g=hi(3,null,null,i),e.current=g,g.stateNode=e,i=Uh(),i.refCount++,e.pooledCache=i,i.refCount++,g.memoizedState={element:u,isDehydrated:s,cache:i},Ph(g),e}function J0(e){return e?(e=Gs,e):Gs}function $0(e,i,s,u,p,g){p=J0(p),u.context===null?u.context=p:u.pendingContext=p,u=na(i),u.payload={element:s},g=g===void 0?null:g,g!==null&&(u.callback=g),s=ia(e,u,i),s!==null&&(gi(s,e,i),ml(s,e,i))}function ty(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Qd(e,i){ty(e,i),(e=e.alternate)&&ty(e,i)}function ey(e){if(e.tag===13){var i=Hs(e,67108864);i!==null&&gi(i,e,67108864),Qd(e,67108864)}}var Cc=!0;function zT(e,i,s,u){var p=F.T;F.T=null;var g=X.p;try{X.p=2,Jd(e,i,s,u)}finally{X.p=g,F.T=p}}function IT(e,i,s,u){var p=F.T;F.T=null;var g=X.p;try{X.p=8,Jd(e,i,s,u)}finally{X.p=g,F.T=p}}function Jd(e,i,s,u){if(Cc){var p=$d(u);if(p===null)Fd(e,i,u,Dc,s),iy(e,u);else if(FT(p,e,i,s,u))u.stopPropagation();else if(iy(e,u),i&4&&-1<BT.indexOf(e)){for(;p!==null;){var g=pr(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Yt(g.pendingLanes);if(T!==0){var O=g;for(O.pendingLanes|=2,O.entangledLanes|=2;T;){var V=1<<31-zt(T);O.entanglements[1]|=V,T&=~V}rr(g),(Ne&6)===0&&(dc=de()+500,Ll(0))}}break;case 13:O=Hs(g,2),O!==null&&gi(O,g,2),mc(),Qd(g,2)}if(g=$d(u),g===null&&Fd(e,i,u,Dc,s),g===p)break;p=g}p!==null&&u.stopPropagation()}else Fd(e,i,u,null,s)}}function $d(e){return e=rh(e),tp(e)}var Dc=null;function tp(e){if(Dc=null,e=dr(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Dc=e,null}function ny(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ge:return 2;case Kt:return 8;case ae:case an:return 32;case G:return 268435456;default:return 32}default:return 32}}var ep=!1,_a=null,ga=null,va=null,Hl=new Map,Gl=new Map,ya=[],BT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iy(e,i){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(i.pointerId)}}function Vl(e,i,s,u,p,g){return e===null||e.nativeEvent!==g?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},i!==null&&(i=pr(i),i!==null&&ey(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),e)}function FT(e,i,s,u,p){switch(i){case"focusin":return _a=Vl(_a,e,i,s,u,p),!0;case"dragenter":return ga=Vl(ga,e,i,s,u,p),!0;case"mouseover":return va=Vl(va,e,i,s,u,p),!0;case"pointerover":var g=p.pointerId;return Hl.set(g,Vl(Hl.get(g)||null,e,i,s,u,p)),!0;case"gotpointercapture":return g=p.pointerId,Gl.set(g,Vl(Gl.get(g)||null,e,i,s,u,p)),!0}return!1}function ry(e){var i=dr(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,ci(e.priority,function(){if(s.tag===13){var u=_i();u=ie(u);var p=Hs(s,u);p!==null&&gi(p,s,u),Qd(s,u)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=$d(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);ih=u,s.target.dispatchEvent(u),ih=null}else return i=pr(s),i!==null&&ey(i),e.blockedOn=s,!1;i.shift()}return!0}function ay(e,i,s){Uc(e)&&s.delete(i)}function HT(){ep=!1,_a!==null&&Uc(_a)&&(_a=null),ga!==null&&Uc(ga)&&(ga=null),va!==null&&Uc(va)&&(va=null),Hl.forEach(ay),Gl.forEach(ay)}function Lc(e,i){e.blockedOn===i&&(e.blockedOn=null,ep||(ep=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HT)))}var Oc=null;function sy(e){Oc!==e&&(Oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Oc===e&&(Oc=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],p=e[i+2];if(typeof u!="function"){if(tp(u||s)===null)continue;break}var g=pr(s);g!==null&&(e.splice(i,3),i-=3,td(g,{pending:!0,data:p,method:s.method,action:u},u,p))}}))}function kl(e){function i(V){return Lc(V,e)}_a!==null&&Lc(_a,e),ga!==null&&Lc(ga,e),va!==null&&Lc(va,e),Hl.forEach(i),Gl.forEach(i);for(var s=0;s<ya.length;s++){var u=ya[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<ya.length&&(s=ya[0],s.blockedOn===null);)ry(s),s.blockedOn===null&&ya.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var p=s[u],g=s[u+1],T=p[On]||null;if(typeof g=="function")T||sy(s);else if(T){var O=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[On]||null)O=T.formAction;else if(tp(p)!==null)continue}else O=T.action;typeof O=="function"?s[u+1]=O:(s.splice(u,3),u-=3),sy(s)}}}function np(e){this._internalRoot=e}Nc.prototype.render=np.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,u=_i();$0(s,u,e,i,null,null)},Nc.prototype.unmount=np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;$0(e.current,2,null,e,null,null),mc(),i[Zn]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Te();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ya.length&&i!==0&&i<ya[s].priority;s++);ya.splice(s,0,e),s===0&&ry(e)}};var oy=t.version;if(oy!=="19.1.0")throw Error(r(527,oy,"19.1.0"));X.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(i),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var GT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{_t=Pc.inject(GT),vt=Pc}catch{}}return ql.createRoot=function(e,i){if(!a(e))throw Error(r(299));var s=!1,u="",p=Ev,g=Tv,T=bv,O=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(O=i.unstable_transitionCallbacks)),i=Q0(e,1,!1,null,null,s,u,p,g,T,O,null),e[Zn]=i.current,Bd(e),new np(i)},ql.hydrateRoot=function(e,i,s){if(!a(e))throw Error(r(299));var u=!1,p="",g=Ev,T=Tv,O=bv,V=null,it=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(O=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(it=s.formState)),i=Q0(e,1,!0,i,s??null,u,p,g,T,O,V,it),i.context=J0(null),s=i.current,u=_i(),u=ie(u),p=na(u),p.callback=null,ia(s,p,u),s=u,i.current.lanes=s,Bt(i,s),rr(i),e[Zn]=i.current,Bd(e),new Nc(i)},ql.version="19.1.0",ql}var gy;function KT(){if(gy)return ap.exports;gy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ap.exports=ZT(),ap.exports}var QT=KT();const JT="_loader_19g3c_1",$T="_overlay_19g3c_15",tb="_block_19g3c_27",eb="_intro_logo_19g3c_39",nb="_word_19g3c_59",ib="_divider_19g3c_79",rb="_counter_19g3c_101",Oi={loader:JT,overlay:$T,block:tb,intro_logo:eb,word:nb,divider:ib,counter:rb};function Fr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function iS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},i_,Bn,Qe,Ii=1e8,Xe=1/Ii,$p=Math.PI*2,ab=$p/4,sb=0,rS=Math.sqrt,ob=Math.cos,lb=Math.sin,Un=function(t){return typeof t=="string"},rn=function(t){return typeof t=="function"},qr=function(t){return typeof t=="number"},r_=function(t){return typeof t>"u"},fr=function(t){return typeof t=="object"},ii=function(t){return t!==!1},a_=function(){return typeof window<"u"},Ic=function(t){return rn(t)||Un(t)},aS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,tm=/(?:-?\.?\d|\.)+/gi,sS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,up=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oS=/[+-]=-?[.\d]+/,lS=/[^,'"\[\]\s]+/gi,ub=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$e,sr,em,s_,Ti={},Pf={},uS,cS=function(t){return(Pf=Bo(t,Ti))&&ui},o_=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},uu=function(t,n){return!n&&console.warn(t)},fS=function(t,n){return t&&(Ti[t]=n)&&Pf&&(Pf[t]=n)||Ti},cu=function(){return 0},cb={suppressEvents:!0,isStart:!0,kill:!1},bf={suppressEvents:!0,kill:!1},fb={suppressEvents:!0},l_={},Na=[],nm={},hS,xi={},cp={},vy=30,Af=[],u_="",c_=function(t){var n=t[0],r,a;if(fr(n)||rn(n)||(t=[t]),!(r=(n._gsap||{}).harness)){for(a=Af.length;a--&&!Af[a].targetTest(n););r=Af[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new zS(t[a],r)))||t.splice(a,1);return t},Ts=function(t){return t._gsap||c_(Bi(t))[0]._gsap},dS=function(t,n,r){return(r=t[n])&&rn(r)?t[n]():r_(r)&&t.getAttribute&&t.getAttribute(n)||r},ri=function(t,n){return(t=t.split(",")).forEach(n)||t},ln=function(t){return Math.round(t*1e5)/1e5||0},mn=function(t){return Math.round(t*1e7)/1e7||0},Uo=function(t,n){var r=n.charAt(0),a=parseFloat(n.substr(2));return t=parseFloat(t),r==="+"?t+a:r==="-"?t-a:r==="*"?t*a:t/a},hb=function(t,n){for(var r=n.length,a=0;t.indexOf(n[a])<0&&++a<r;);return a<r},zf=function(){var t=Na.length,n=Na.slice(0),r,a;for(nm={},Na.length=0,r=0;r<t;r++)a=n[r],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},f_=function(t){return!!(t._initted||t._startAt||t.add)},pS=function(t,n,r,a){Na.length&&!Bn&&zf(),t.render(n,r,!!(Bn&&n<0&&f_(t))),Na.length&&!Bn&&zf()},mS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(lS).length<2?n:Un(t)?t.trim():t},_S=function(t){return t},bi=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},db=function(t){return function(n,r){for(var a in r)a in n||a==="duration"&&t||a==="ease"||(n[a]=r[a])}},Bo=function(t,n){for(var r in n)t[r]=n[r];return t},yy=function o(t,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=fr(n[r])?o(t[r]||(t[r]={}),n[r]):n[r]);return t},If=function(t,n){var r={},a;for(a in t)a in n||(r[a]=t[a]);return r},au=function(t){var n=t.parent||$e,r=t.keyframes?db(qn(t.keyframes)):bi;if(ii(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},pb=function(t,n){for(var r=t.length,a=r===n.length;a&&r--&&t[r]===n[r];);return r<0},gS=function(t,n,r,a,l){var c=t[a],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[r],t[r]=n),n._next?n._next._prev=n:t[a]=n,n._prev=c,n.parent=n._dp=t,n},Wf=function(t,n,r,a){r===void 0&&(r="_first"),a===void 0&&(a="_last");var l=n._prev,c=n._next;l?l._next=c:t[r]===n&&(t[r]=c),c?c._prev=l:t[a]===n&&(t[a]=l),n._next=n._prev=n.parent=null},Ba=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},mb=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},im=function(t,n,r,a){return t._startAt&&(Bn?t._startAt.revert(bf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,a))},_b=function o(t){return!t||t._ts&&o(t.parent)},xy=function(t){return t._repeat?Fo(t._tTime,t=t.duration()+t._rDelay)*t:0},Fo=function(t,n){var r=Math.floor(t=mn(t/n));return t&&r===t?r-1:r},Bf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Yf=function(t){return t._end=mn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Xe)||0))},jf=function(t,n){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=mn(r._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Yf(t),r._dirty||bs(r,t)),t},vS=function(t,n){var r;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(r=Bf(t.rawTime(),n),(!n._dur||xu(0,n.totalDuration(),r)-n._tTime>Xe)&&n.render(r,!0)),bs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-Xe}},lr=function(t,n,r,a){return n.parent&&Ba(n),n._start=mn((qr(r)?r:r||t!==$e?Pi(t,r,n):t._time)+n._delay),n._end=mn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),gS(t,n,"_first","_last",t._sort?"_start":0),rm(n)||(t._recent=n),a||vS(t,n),t._ts<0&&jf(t,t._tTime),t},yS=function(t,n){return(Ti.ScrollTrigger||o_("scrollTrigger",n))&&Ti.ScrollTrigger.create(n,t)},xS=function(t,n,r,a,l){if(d_(t,n,l),!t._initted)return 1;if(!r&&t._pt&&!Bn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&hS!==Si.frame)return Na.push(t),t._lazy=[l,a],1},gb=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},rm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},vb=function(t,n,r,a){var l=t.ratio,c=n<0||!n&&(!t._start&&gb(t)&&!(!t._initted&&rm(t))||(t._ts<0||t._dp._ts<0)&&!rm(t))?0:1,f=t._rDelay,d=0,h,m,_;if(f&&t._repeat&&(d=xu(0,t._tDur,n),m=Fo(d,f),t._yoyo&&m&1&&(c=1-c),m!==Fo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Bn||a||t._zTime===Xe||!n&&t._zTime){if(!t._initted&&xS(t,n,a,r,d))return;for(_=t._zTime,t._zTime=n||(r?Xe:0),r||(r=n&&!_),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,h=t._pt;h;)h.r(c,h.d),h=h._next;n<0&&im(t,n,r,!0),t._onUpdate&&!r&&Mi(t,"onUpdate"),d&&t._repeat&&!r&&t.parent&&Mi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Ba(t,1),!r&&!Bn&&(Mi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},yb=function(t,n,r){var a;if(r>n)for(a=t._first;a&&a._start<=r;){if(a.data==="isPause"&&a._start>n)return a;a=a._next}else for(a=t._last;a&&a._start>=r;){if(a.data==="isPause"&&a._start<n)return a;a=a._prev}},Ho=function(t,n,r,a){var l=t._repeat,c=mn(n)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:mn(c*(l+1)+t._rDelay*l):c,f>0&&!a&&jf(t,t._tTime=t._tDur*f),t.parent&&Yf(t),r||bs(t.parent,t),t},Sy=function(t){return t instanceof jn?bs(t):Ho(t,t._dur)},xb={_start:0,endTime:cu,totalDuration:cu},Pi=function o(t,n,r){var a=t.labels,l=t._recent||xb,c=t.duration()>=Ii?l.endTime(!1):t._dur,f,d,h;return Un(n)&&(isNaN(n)||n in a)?(d=n.charAt(0),h=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(h?(f<0?l:r).totalDuration()/100:1)):f<0?(n in a||(a[n]=c),a[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),h&&r&&(d=d/100*(qn(r)?r[0]:r).totalDuration()),f>1?o(t,n.substr(0,f-1),r)+d:c+d)):n==null?c:+n},su=function(t,n,r){var a=qr(n[1]),l=(a?2:1)+(t<2?0:1),c=n[l],f,d;if(a&&(c.duration=n[1]),c.parent=r,t){for(f=c,d=r;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ii(d.vars.inherit)&&d.parent;c.immediateRender=ii(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new pn(n[0],c,n[l+1])},Va=function(t,n){return t||t===0?n(t):n},xu=function(t,n,r){return r<t?t:r>n?n:r},Xn=function(t,n){return!Un(t)||!(n=ub.exec(t))?"":n[1]},Sb=function(t,n,r){return Va(r,function(a){return xu(t,n,a)})},am=[].slice,SS=function(t,n){return t&&fr(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&fr(t[0]))&&!t.nodeType&&t!==sr},Mb=function(t,n,r){return r===void 0&&(r=[]),t.forEach(function(a){var l;return Un(a)&&!n||SS(a,1)?(l=r).push.apply(l,Bi(a)):r.push(a)})||r},Bi=function(t,n,r){return Qe&&!n&&Qe.selector?Qe.selector(t):Un(t)&&!r&&(em||!Go())?am.call((n||s_).querySelectorAll(t),0):qn(t)?Mb(t,r):SS(t)?am.call(t,0):t?[t]:[]},sm=function(t){return t=Bi(t)[0]||uu("Invalid scope")||{},function(n){var r=t.current||t.nativeElement||t;return Bi(n,r.querySelectorAll?r:r===t?uu("Invalid scope")||s_.createElement("div"):t)}},MS=function(t){return t.sort(function(){return .5-Math.random()})},ES=function(t){if(rn(t))return t;var n=fr(t)?t:{each:t},r=As(n.ease),a=n.from||0,l=parseFloat(n.base)||0,c={},f=a>0&&a<1,d=isNaN(a)||f,h=n.axis,m=a,_=a;return Un(a)?m=_={center:.5,edges:.5,end:1}[a]||0:!f&&d&&(m=a[0],_=a[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,R,A,b,D,N,U,I,w;if(!S){if(w=n.grid==="auto"?0:(n.grid||[1,Ii])[1],!w){for(U=-Ii;U<(U=E[w++].getBoundingClientRect().left)&&w<M;);w<M&&w--}for(S=c[M]=[],x=d?Math.min(w,M)*m-.5:a%w,R=w===Ii?0:d?M*_/w-.5:a/w|0,U=0,I=Ii,N=0;N<M;N++)A=N%w-x,b=R-(N/w|0),S[N]=D=h?Math.abs(h==="y"?b:A):rS(A*A+b*b),D>U&&(U=D),D<I&&(I=D);a==="random"&&MS(S),S.max=U-I,S.min=I,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(w>M?M-1:h?h==="y"?M/w:w:Math.max(w,M/w))||0)*(a==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Xn(n.amount||n.each)||0,r=r&&M<0?OS(r):r}return M=(S[v]-S.min)/S.max||0,mn(S.b+(r?r(M):M)*S.v)+S.u}},om=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var a=mn(Math.round(parseFloat(r)/t)*t*n);return(a-a%1)/n+(qr(r)?0:Xn(r))}},TS=function(t,n){var r=qn(t),a,l;return!r&&fr(t)&&(a=r=t.radius||Ii,t.values?(t=Bi(t.values),(l=!qr(t[0]))&&(a*=a)):t=om(t.increment)),Va(n,r?rn(t)?function(c){return l=t(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),h=Ii,m=0,_=t.length,v,y;_--;)l?(v=t[_].x-f,y=t[_].y-d,v=v*v+y*y):v=Math.abs(t[_]-f),v<h&&(h=v,m=_);return m=!a||h<=a?t[m]:c,l||m===c||qr(c)?m:m+Xn(c)}:om(t))},bS=function(t,n,r,a){return Va(qn(t)?!n:r===!0?!!(r=0):!a,function(){return qn(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(a=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(n-t+r*.99))/r)*r*a)/a})},Eb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(a){return n.reduce(function(l,c){return c(l)},a)}},Tb=function(t,n){return function(r){return t(parseFloat(r))+(n||Xn(r))}},bb=function(t,n,r){return RS(t,n,0,1,r)},AS=function(t,n,r){return Va(r,function(a){return t[~~n(a)]})},Ab=function o(t,n,r){var a=n-t;return qn(t)?AS(t,o(0,t.length),n):Va(r,function(l){return(a+(l-t)%a)%a+t})},Rb=function o(t,n,r){var a=n-t,l=a*2;return qn(t)?AS(t,o(0,t.length-1),n):Va(r,function(c){return c=(l+(c-t)%l)%l||0,t+(c>a?l-c:c)})},fu=function(t){for(var n=0,r="",a,l,c,f;~(a=t.indexOf("random(",n));)c=t.indexOf(")",a),f=t.charAt(a+7)==="[",l=t.substr(a+7,c-a-7).match(f?lS:tm),r+=t.substr(n,a-n)+bS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return r+t.substr(n,t.length-n)},RS=function(t,n,r,a,l){var c=n-t,f=a-r;return Va(l,function(d){return r+((d-t)/c*f||0)})},wb=function o(t,n,r,a){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Un(t),f={},d,h,m,_,v;if(r===!0&&(a=1)&&(r=null),c)t={p:t},n={p:n};else if(qn(t)&&!qn(n)){for(m=[],_=t.length,v=_-2,h=1;h<_;h++)m.push(o(t[h-1],t[h]));_--,l=function(E){E*=_;var M=Math.min(v,~~E);return m[M](E-M)},r=n}else a||(t=Bo(qn(t)?[]:{},t));if(!m){for(d in n)h_.call(f,t,d,"get",n[d]);l=function(E){return __(E,f)||(c?t.p:t)}}}return Va(r,l)},My=function(t,n,r){var a=t.labels,l=Ii,c,f,d;for(c in a)f=a[c]-n,f<0==!!r&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},Mi=function(t,n,r){var a=t.vars,l=a[n],c=Qe,f=t._ctx,d,h,m;if(l)return d=a[n+"Params"],h=a.callbackScope||t,r&&Na.length&&zf(),f&&(Qe=f),m=d?l.apply(h,d):l.call(h),Qe=c,m},eu=function(t){return Ba(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Bn),t.progress()<1&&Mi(t,"onInterrupt"),t},Co,wS=[],CS=function(t){if(t)if(t=!t.name&&t.default||t,a_()||t.headless){var n=t.name,r=rn(t),a=n&&!r&&t.init?function(){this._props=[]}:t,l={init:cu,render:__,add:h_,kill:Xb,modifier:kb,rawVars:0},c={targetTest:0,get:0,getSetter:m_,aliases:{},register:0};if(Go(),t!==a){if(xi[n])return;bi(a,bi(If(t,l),c)),Bo(a.prototype,Bo(l,If(t,c))),xi[a.prop=n]=a,t.targetTest&&(Af.push(a),l_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}fS(n,a),t.register&&t.register(ui,a,ai)}else wS.push(t)},ke=255,nu={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},fp=function(t,n,r){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(r-n)*t*6:t<.5?r:t*3<2?n+(r-n)*(2/3-t)*6:n)*ke+.5|0},DS=function(t,n,r){var a=t?qr(t)?[t>>16,t>>8&ke,t&ke]:0:nu.black,l,c,f,d,h,m,_,v,y,E;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),nu[t])a=nu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&ke,a&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(a=E=t.match(tm),!n)d=+a[0]%360/360,h=+a[1]/100,m=+a[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,a.length>3&&(a[3]*=1),a[0]=fp(d+1/3,l,c),a[1]=fp(d,l,c),a[2]=fp(d-1/3,l,c);else if(~t.indexOf("="))return a=t.match(sS),r&&a.length<4&&(a[3]=1),a}else a=t.match(tm)||nu.transparent;a=a.map(Number)}return n&&!E&&(l=a[0]/ke,c=a[1]/ke,f=a[2]/ke,_=Math.max(l,c,f),v=Math.min(l,c,f),m=(_+v)/2,_===v?d=h=0:(y=_-v,h=m>.5?y/(2-_-v):y/(_+v),d=_===l?(c-f)/y+(c<f?6:0):_===c?(f-l)/y+2:(l-c)/y+4,d*=60),a[0]=~~(d+.5),a[1]=~~(h*100+.5),a[2]=~~(m*100+.5)),r&&a.length<4&&(a[3]=1),a},US=function(t){var n=[],r=[],a=-1;return t.split(Pa).forEach(function(l){var c=l.match(wo)||[];n.push.apply(n,c),r.push(a+=c.length+1)}),n.c=r,n},Ey=function(t,n,r){var a="",l=(t+a).match(Pa),c=n?"hsla(":"rgba(",f=0,d,h,m,_;if(!l)return t;if(l=l.map(function(v){return(v=DS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),r&&(m=US(t),d=r.c,d.join(a)!==m.c.join(a)))for(h=t.replace(Pa,"1").split(wo),_=h.length-1;f<_;f++)a+=h[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:r).shift());if(!h)for(h=t.split(Pa),_=h.length-1;f<_;f++)a+=h[f]+l[f];return a+h[_]},Pa=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in nu)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Cb=/hsl[a]?\(/,LS=function(t){var n=t.join(" "),r;if(Pa.lastIndex=0,Pa.test(n))return r=Cb.test(n),t[1]=Ey(t[1],r),t[0]=Ey(t[0],r,US(t[1])),!0},hu,Si=function(){var o=Date.now,t=500,n=33,r=o(),a=r,l=1e3/240,c=l,f=[],d,h,m,_,v,y,E=function M(S){var x=o()-a,R=S===!0,A,b,D,N;if((x>t||x<0)&&(r+=x-n),a+=x,D=a-r,A=D-c,(A>0||R)&&(N=++_.frame,v=D-_.time*1e3,_.time=D=D/1e3,c+=A+(A>=l?4:l-A),b=1),R||(d=h(M)),b)for(y=0;y<f.length;y++)f[y](D,v,N,S)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){uS&&(!em&&a_()&&(sr=em=window,s_=sr.document||{},Ti.gsap=ui,(sr.gsapVersions||(sr.gsapVersions=[])).push(ui.version),cS(Pf||sr.GreenSockGlobals||!sr.gsap&&sr||{}),wS.forEach(CS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=m||function(S){return setTimeout(S,c-_.time*1e3+1|0)},hu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),hu=0,h=cu},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=_.time*1e3+l},add:function(S,x,R){var A=x?function(b,D,N,U){S(b,D,N,U),_.remove(A)}:S;return _.remove(S),f[R?"unshift":"push"](A),Go(),A},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},_}(),Go=function(){return!hu&&Si.wake()},xe={},Db=/^[\d.\-M][\d.\-,\s]/,Ub=/["']/g,Lb=function(t){for(var n={},r=t.substr(1,t.length-3).split(":"),a=r[0],l=1,c=r.length,f,d,h;l<c;l++)d=r[l],f=l!==c-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),n[a]=isNaN(h)?h.replace(Ub,"").trim():+h,a=d.substr(f+1).trim();return n},Ob=function(t){var n=t.indexOf("(")+1,r=t.indexOf(")"),a=t.indexOf("(",n);return t.substring(n,~a&&a<r?t.indexOf(")",r+1):r)},Nb=function(t){var n=(t+"").split("("),r=xe[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[Lb(n[1])]:Ob(t).split(",").map(mS)):xe._CE&&Db.test(t)?xe._CE("",t):r},OS=function(t){return function(n){return 1-t(1-n)}},NS=function o(t,n){for(var r=t._first,a;r;)r instanceof jn?o(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?o(r.timeline,n):(a=r._ease,r._ease=r._yEase,r._yEase=a,r._yoyo=n)),r=r._next},As=function(t,n){return t&&(rn(t)?t:xe[t]||Nb(t))||n},Us=function(t,n,r,a){r===void 0&&(r=function(d){return 1-n(1-d)}),a===void 0&&(a=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var l={easeIn:n,easeOut:r,easeInOut:a},c;return ri(t,function(f){xe[f]=Ti[f]=l,xe[c=f.toLowerCase()]=r;for(var d in l)xe[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=xe[f+"."+d]=l[d]}),l},PS=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},hp=function o(t,n,r){var a=n>=1?n:1,l=(r||(t?.3:.45))/(n<1?n:1),c=l/$p*(Math.asin(1/a)||0),f=function(m){return m===1?1:a*Math.pow(2,-10*m)*lb((m-c)*l)+1},d=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:PS(f);return l=$p/l,d.config=function(h,m){return o(t,h,m)},d},dp=function o(t,n){n===void 0&&(n=1.70158);var r=function(c){return c?--c*c*((n+1)*c+n)+1:0},a=t==="out"?r:t==="in"?function(l){return 1-r(1-l)}:PS(r);return a.config=function(l){return o(t,l)},a};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Us(o+",Power"+(n-1),t?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Us("Elastic",hp("in"),hp("out"),hp());(function(o,t){var n=1/t,r=2*n,a=2.5*n,l=function(f){return f<n?o*f*f:f<r?o*Math.pow(f-1.5/t,2)+.75:f<a?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Us("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Us("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Us("Circ",function(o){return-(rS(1-o*o)-1)});Us("Sine",function(o){return o===1?1:-ob(o*ab)+1});Us("Back",dp("in"),dp("out"),dp());xe.SteppedEase=xe.steps=Ti.SteppedEase={config:function(t,n){t===void 0&&(t=1);var r=1/t,a=t+(n?0:1),l=n?1:0,c=1-Xe;return function(f){return((a*xu(0,c,f)|0)+l)*r}}};Io.ease=xe["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return u_+=o+","+o+"Params,"});var zS=function(t,n){this.id=sb++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:dS,this.set=n?n.getSetter:m_},du=function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ho(this,+n.duration,1,1),this.data=n.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),hu||Si.wake()}var t=o.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,Ho(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,a){if(Go(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(jf(this,r),!l._dp||l.parent||vS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===Xe||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),pS(this,r,a)),this},t.time=function(r,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+xy(this))%(this._dur+this._rDelay)||(r?this._dur:0),a):this._time},t.totalProgress=function(r,a){return arguments.length?this.totalTime(this.totalDuration()*r,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+xy(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*l,a):this._repeat?Fo(this._tTime,l)+1:1},t.timeScale=function(r,a){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===r)return this;var l=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-Xe?0:this._rts,this.totalTime(xu(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),Yf(this),mb(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&lr(a,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(ii(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var a=this.parent||this._dp;return a?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(a.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=fb);var a=Bn;return Bn=r,f_(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Bn=a,this},t.globalTime=function(r){for(var a=this,l=arguments.length?r:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(r):l},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Sy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var a=this._time;return this._rDelay=r,Sy(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,a){return this.totalTime(Pi(this,r),ii(a))},t.restart=function(r,a){return this.play().totalTime(r?-this._delay:0,ii(a)),this._dur||(this._zTime=-Xe),this},t.play=function(r,a){return r!=null&&this.seek(r,a),this.reversed(!1).paused(!1)},t.reverse=function(r,a){return r!=null&&this.seek(r||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(r,a){return r!=null&&this.seek(r,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-Xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},t.isActive=function(){var r=this.parent||this._dp,a=this._start,l;return!!(!r||this._ts&&this._initted&&r.isActive()&&(l=r.rawTime(!0))>=a&&l<this.endTime(!0)-Xe)},t.eventCallback=function(r,a,l){var c=this.vars;return arguments.length>1?(a?(c[r]=a,l&&(c[r+"Params"]=l),r==="onUpdate"&&(this._onUpdate=a)):delete c[r],this):c[r]},t.then=function(r){var a=this;return new Promise(function(l){var c=rn(r)?r:_S,f=function(){var h=a.then;a.then=null,rn(c)&&(c=c(a))&&(c.then||c===a)&&(a.then=h),l(c),a.then=h};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?f():a._prom=f})},t.kill=function(){eu(this)},o}();bi(du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var jn=function(o){iS(t,o);function t(r,a){var l;return r===void 0&&(r={}),l=o.call(this,r)||this,l.labels={},l.smoothChildTiming=!!r.smoothChildTiming,l.autoRemoveChildren=!!r.autoRemoveChildren,l._sort=ii(r.sortChildren),$e&&lr(r.parent||$e,Fr(l),a),r.reversed&&l.reverse(),r.paused&&l.paused(!0),r.scrollTrigger&&yS(Fr(l),r.scrollTrigger),l}var n=t.prototype;return n.to=function(a,l,c){return su(0,arguments,this),this},n.from=function(a,l,c){return su(1,arguments,this),this},n.fromTo=function(a,l,c,f){return su(2,arguments,this),this},n.set=function(a,l,c){return l.duration=0,l.parent=this,au(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new pn(a,l,Pi(this,c),1),this},n.call=function(a,l,c){return lr(this,pn.delayedCall(0,a,l),c)},n.staggerTo=function(a,l,c,f,d,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new pn(a,c,Pi(this,d)),this},n.staggerFrom=function(a,l,c,f,d,h,m){return c.runBackwards=1,au(c).immediateRender=ii(c.immediateRender),this.staggerTo(a,l,c,f,d,h,m)},n.staggerFromTo=function(a,l,c,f,d,h,m,_){return f.startAt=c,au(f).immediateRender=ii(f.immediateRender),this.staggerTo(a,l,f,d,h,m,_)},n.render=function(a,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=a<=0?0:mn(a),_=this._zTime<0!=a<0&&(this._initted||!h),v,y,E,M,S,x,R,A,b,D,N,U;if(this!==$e&&m>d&&a>=0&&(m=d),m!==this._tTime||c||_){if(f!==this._time&&h&&(m+=this._time-f,a+=this._time-f),v=m,b=this._start,A=this._ts,x=!A,_&&(h||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(N=this._yoyo,S=h+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(S*100+a,l,c);if(v=mn(m%S),m===d?(M=this._repeat,v=h):(D=mn(m/S),M=~~D,M&&M===D&&(v=h,M--),v>h&&(v=h)),D=Fo(this._tTime,S),!f&&this._tTime&&D!==M&&this._tTime-D*S-this._dur<=0&&(D=M),N&&M&1&&(v=h-v,U=1),M!==D&&!this._lock){var I=N&&D&1,w=I===(N&&M&1);if(M<D&&(I=!I),f=I?0:m%h?h:m,this._lock=1,this.render(f||(U?0:mn(M*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,w&&(this._lock=2,f=I?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;NS(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=yb(this,mn(f),mn(v)),R&&(m-=v-(v=R._start))),this._tTime=m,this._time=v,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&m&&!l&&!D&&(Mi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&a>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&R!==y){if(y.parent!==this)return this.render(a,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){R=0,E&&(m+=this._zTime=-Xe);break}}y=E}else{y=this._last;for(var C=a<0?a:v;y;){if(E=y._prev,(y._act||C<=y._end)&&y._ts&&R!==y){if(y.parent!==this)return this.render(a,l,c);if(y.render(y._ts>0?(C-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(C-y._start)*y._ts,l,c||Bn&&f_(y)),v!==this._time||!this._ts&&!x){R=0,E&&(m+=this._zTime=C?-Xe:Xe);break}}y=E}}if(R&&!l&&(this.pause(),R.render(v>=f?0:-Xe)._zTime=v>=f?1:-1,this._ts))return this._start=b,Yf(this),this.render(a,l,c);this._onUpdate&&!l&&Mi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((a||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Ba(this,1),!l&&!(a<0&&!f)&&(m||f||!d)&&(Mi(this,m===d&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(a,l){var c=this;if(qr(l)||(l=Pi(this,l,a)),!(a instanceof du)){if(qn(a))return a.forEach(function(f){return c.add(f,l)}),this;if(Un(a))return this.addLabel(a,l);if(rn(a))a=pn.delayedCall(0,a);else return this}return this!==a?lr(this,a,l):this},n.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ii);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof pn?l&&d.push(h):(c&&d.push(h),a&&d.push.apply(d,h.getChildren(!0,l,c)))),h=h._next;return d},n.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},n.remove=function(a){return Un(a)?this.removeLabel(a):rn(a)?this.killTweensOf(a):(a.parent===this&&Wf(this,a),a===this._recent&&(this._recent=this._last),bs(this))},n.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mn(Si.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),o.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},n.addLabel=function(a,l){return this.labels[a]=Pi(this,l),this},n.removeLabel=function(a){return delete this.labels[a],this},n.addPause=function(a,l,c){var f=pn.delayedCall(0,l||cu,c);return f.data="isPause",this._hasPause=1,lr(this,f,Pi(this,a))},n.removePause=function(a){var l=this._first;for(a=Pi(this,a);l;)l._start===a&&l.data==="isPause"&&Ba(l),l=l._next},n.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),d=f.length;d--;)Da!==f[d]&&f[d].kill(a,l);return this},n.getTweensOf=function(a,l){for(var c=[],f=Bi(a),d=this._first,h=qr(l),m;d;)d instanceof pn?hb(d._targets,f)&&(h?(!Da||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},n.tweenTo=function(a,l){l=l||{};var c=this,f=Pi(c,a),d=l,h=d.startAt,m=d.onStart,_=d.onStartParams,v=d.immediateRender,y,E=pn.to(c,bi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||Xe,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());E._dur!==S&&Ho(E,S,0,1).render(E._time,!0,!0),y=1}m&&m.apply(E,_||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(a,l,c){return this.tweenTo(l,bi({startAt:{time:Pi(this,a)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(a){return a===void 0&&(a=this._time),My(this,Pi(this,a))},n.previousLabel=function(a){return a===void 0&&(a=this._time),My(this,Pi(this,a),1)},n.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+Xe)},n.shiftChildren=function(a,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,h;f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(h in d)d[h]>=c&&(d[h]+=a);return bs(this)},n.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return o.prototype.invalidate.call(this,a)},n.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),bs(this)},n.totalDuration=function(a){var l=0,c=this,f=c._last,d=Ii,h,m,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(_=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,lr(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;Ho(c,c===$e&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(a){if($e._ts&&(pS($e,Bf(a,$e)),hS=Si.frame),Si.frame>=vy){vy+=Ei.autoSleep||120;var l=$e._first;if((!l||!l._ts)&&Ei.autoSleep&&Si._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Si.sleep()}}},t}(du);bi(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pb=function(t,n,r,a,l,c,f){var d=new ai(this._pt,t,n,0,1,VS,null,l),h=0,m=0,_,v,y,E,M,S,x,R;for(d.b=r,d.e=a,r+="",a+="",(x=~a.indexOf("random("))&&(a=fu(a)),c&&(R=[r,a],c(R,t,n),r=R[0],a=R[1]),v=r.match(up)||[];_=up.exec(a);)E=_[0],M=a.substring(h,_.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Uo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},h=up.lastIndex);return d.c=h<a.length?a.substring(h,a.length):"",d.fp=f,(oS.test(a)||x)&&(d.e=0),this._pt=d,d},h_=function(t,n,r,a,l,c,f,d,h,m){rn(a)&&(a=a(l||0,t,c));var _=t[n],v=r!=="get"?r:rn(_)?h?t[n.indexOf("set")||!rn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](h):t[n]():_,y=rn(_)?h?Hb:HS:p_,E;if(Un(a)&&(~a.indexOf("random(")&&(a=fu(a)),a.charAt(1)==="="&&(E=Uo(v,a)+(Xn(v)||0),(E||E===0)&&(a=E))),!m||v!==a||lm)return!isNaN(v*a)&&a!==""?(E=new ai(this._pt,t,n,+v||0,a-(v||0),typeof _=="boolean"?Vb:GS,0,y),h&&(E.fp=h),f&&E.modifier(f,this,t),this._pt=E):(!_&&!(n in t)&&o_(n,a),Pb.call(this,t,n,v,a,y,d||Ei.stringFilter,h))},zb=function(t,n,r,a,l){if(rn(t)&&(t=ou(t,l,n,r,a)),!fr(t)||t.style&&t.nodeType||qn(t)||aS(t))return Un(t)?ou(t,l,n,r,a):t;var c={},f;for(f in t)c[f]=ou(t[f],l,n,r,a);return c},IS=function(t,n,r,a,l,c){var f,d,h,m;if(xi[t]&&(f=new xi[t]).init(l,f.rawVars?n[t]:zb(n[t],a,l,c,r),r,a,c)!==!1&&(r._pt=d=new ai(r._pt,l,t,0,1,f.render,f,0,f.priority),r!==Co))for(h=r._ptLookup[r._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},Da,lm,d_=function o(t,n,r){var a=t.vars,l=a.ease,c=a.startAt,f=a.immediateRender,d=a.lazy,h=a.onUpdate,m=a.runBackwards,_=a.yoyoEase,v=a.keyframes,y=a.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,R=x&&x.data==="nested"?x.vars.targets:S,A=t._overwrite==="auto"&&!i_,b=t.timeline,D,N,U,I,w,C,z,H,k,Y,et,F,X;if(b&&(!v||!l)&&(l="none"),t._ease=As(l,Io.ease),t._yEase=_?OS(As(_===!0?l:_,Io.ease)):0,_&&t._yoyo&&!t._repeat&&(_=t._yEase,t._yEase=t._ease,t._ease=_),t._from=!b&&!!a.runBackwards,!b||v&&!a.stagger){if(H=S[0]?Ts(S[0]).harness:0,F=H&&a[H.prop],D=If(a,l_),M&&(M._zTime<0&&M.progress(1),n<0&&m&&f&&!y?M.render(-1,!0):M.revert(m&&E?bf:cb),M._lazy=0),c){if(Ba(t._startAt=pn.set(S,bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ii(d),startAt:null,delay:0,onUpdate:h&&function(){return Mi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn||!f&&!y)&&t._startAt.revert(bf),f&&E&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(m&&E&&!M){if(n&&(f=!1),U=bi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ii(d),immediateRender:f,stagger:0,parent:x},D),F&&(U[H.prop]=F),Ba(t._startAt=pn.set(S,U)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Bn?t._startAt.revert(bf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Xe,Xe);else if(!n)return}for(t._pt=t._ptCache=0,d=E&&ii(d)||d&&!E,N=0;N<S.length;N++){if(w=S[N],z=w._gsap||c_(S)[N]._gsap,t._ptLookup[N]=Y={},nm[z.id]&&Na.length&&zf(),et=R===S?N:R.indexOf(w),H&&(k=new H).init(w,F||D,t,et,R)!==!1&&(t._pt=I=new ai(t._pt,w,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(W){Y[W]=I}),k.priority&&(C=1)),!H||F)for(U in D)xi[U]&&(k=IS(U,D,t,et,w,R))?k.priority&&(C=1):Y[U]=I=h_.call(t,w,U,"get",D[U],et,R,0,a.stringFilter);t._op&&t._op[N]&&t.kill(w,t._op[N]),A&&t._pt&&(Da=t,$e.killTweensOf(w,Y,t.globalTime(n)),X=!t.parent,Da=0),t._pt&&d&&(nm[z.id]=1)}C&&kS(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!X,v&&n<=0&&b.render(Ii,!0,!0)},Ib=function(t,n,r,a,l,c,f,d){var h=(t._pt&&t._ptCache||(t._ptCache={}))[n],m,_,v,y;if(!h)for(h=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(m=v[y][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return lm=1,t.vars[n]="+=0",d_(t,f),lm=0,d?uu(n+" not eligible for reset"):1;h.push(m)}for(y=h.length;y--;)_=h[y],m=_._pt||_,m.s=(a||a===0)&&!l?a:m.s+(a||0)+c*m.c,m.c=r-m.s,_.e&&(_.e=ln(r)+Xn(_.e)),_.b&&(_.b=m.s+Xn(_.b))},Bb=function(t,n){var r=t[0]?Ts(t[0]).harness:0,a=r&&r.aliases,l,c,f,d;if(!a)return n;l=Bo({},n);for(c in a)if(c in l)for(d=a[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},Fb=function(t,n,r,a){var l=n.ease||a||"power1.inOut",c,f;if(qn(n))f=r[t]||(r[t]=[]),n.forEach(function(d,h){return f.push({t:h/(n.length-1)*100,v:d,e:l})});else for(c in n)f=r[c]||(r[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},ou=function(t,n,r,a,l){return rn(t)?t.call(n,r,a,l):Un(t)&&~t.indexOf("random(")?fu(t):t},BS=u_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",FS={};ri(BS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return FS[o]=1});var pn=function(o){iS(t,o);function t(r,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=o.call(this,c?a:au(a))||this;var d=f.vars,h=d.duration,m=d.delay,_=d.immediateRender,v=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,R=a.parent||$e,A=(qn(r)||aS(r)?qr(r[0]):"length"in a)?[r]:Bi(r),b,D,N,U,I,w,C,z;if(f._targets=A.length?c_(A):uu("GSAP target "+r+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||Ic(h)||Ic(m)){if(a=f.vars,b=f.timeline=new jn({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:A}),b.kill(),b.parent=b._dp=Fr(f),b._start=0,v||Ic(h)||Ic(m)){if(U=A.length,C=v&&ES(v),fr(v))for(I in v)~BS.indexOf(I)&&(z||(z={}),z[I]=v[I]);for(D=0;D<U;D++)N=If(a,FS),N.stagger=0,x&&(N.yoyoEase=x),z&&Bo(N,z),w=A[D],N.duration=+ou(h,Fr(f),D,w,A),N.delay=(+ou(m,Fr(f),D,w,A)||0)-f._delay,!v&&U===1&&N.delay&&(f._delay=m=N.delay,f._start+=m,N.delay=0),b.to(w,N,C?C(D,w,A):0),b._ease=xe.none;b.duration()?h=m=0:f.timeline=0}else if(E){au(bi(b.vars.defaults,{ease:"none"})),b._ease=As(E.ease||a.ease||"none");var H=0,k,Y,et;if(qn(E))E.forEach(function(F){return b.to(A,F,">")}),b.duration();else{N={};for(I in E)I==="ease"||I==="easeEach"||Fb(I,E[I],N,E.easeEach);for(I in N)for(k=N[I].sort(function(F,X){return F.t-X.t}),H=0,D=0;D<k.length;D++)Y=k[D],et={ease:Y.e,duration:(Y.t-(D?k[D-1].t:0))/100*h},et[I]=Y.v,b.to(A,et,H),H+=et.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||f.duration(h=b.duration())}else f.timeline=0;return y===!0&&!i_&&(Da=Fr(f),$e.killTweensOf(A),Da=0),lr(R,Fr(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(_||!h&&!E&&f._start===mn(R._time)&&ii(_)&&_b(Fr(f))&&R.data!=="nested")&&(f._tTime=-Xe,f.render(Math.max(0,-m)||0)),S&&yS(Fr(f),S),f}var n=t.prototype;return n.render=function(a,l,c){var f=this._time,d=this._tDur,h=this._dur,m=a<0,_=a>d-Xe&&!m?d:a<Xe?0:a,v,y,E,M,S,x,R,A,b;if(!h)vb(this,a,l,c);else if(_!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,A=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+a,l,c);if(v=mn(_%M),_===d?(E=this._repeat,v=h):(S=mn(_/M),E=~~S,E&&E===S?(v=h,E--):v>h&&(v=h)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=h-v),S=Fo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=_,this;E!==S&&(A&&this._yEase&&NS(A,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(mn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(xS(this,m?a:v,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(a,l,c)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(b||this._ease)(v/h),this._from&&(this.ratio=R=1-R),!f&&_&&!l&&!S&&(Mi(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(R,y.d),y=y._next;A&&A.render(a<0?a:A._dur*A._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(m&&im(this,a,l,c),Mi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Mi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&im(this,a,!0,!0),(a||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Ba(this,1),!l&&!(m&&!f)&&(_||f||x)&&(Mi(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),o.prototype.invalidate.call(this,a)},n.resetTo=function(a,l,c,f,d){hu||Si.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||d_(this,h),m=this._ease(h/this._dur),Ib(this,a,l,c,f,m,h,d)?this.resetTo(a,l,c,f,1):(jf(this,0),this.parent||gS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?eu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,Da&&Da.vars.overwrite!==!0)._first||eu(this),this.parent&&c!==this.timeline.totalDuration()&&Ho(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=a?Bi(a):f,h=this._ptLookup,m=this._pt,_,v,y,E,M,S,x;if((!l||l==="all")&&pb(f,d))return l==="all"&&(this._pt=0),eu(this);for(_=this._op=this._op||[],l!=="all"&&(Un(l)&&(M={},ri(l,function(R){return M[R]=1}),l=M),l=Bb(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=h[x],l==="all"?(_[x]=l,E=v,y={}):(y=_[x]=_[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Wf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&m&&eu(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return su(1,arguments)},t.delayedCall=function(a,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(a,l,c){return su(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,c){return $e.killTweensOf(a,l,c)},t}(du);bi(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(o){pn[o]=function(){var t=new jn,n=am.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var p_=function(t,n,r){return t[n]=r},HS=function(t,n,r){return t[n](r)},Hb=function(t,n,r,a){return t[n](a.fp,r)},Gb=function(t,n,r){return t.setAttribute(n,r)},m_=function(t,n){return rn(t[n])?HS:r_(t[n])&&t.setAttribute?Gb:p_},GS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},Vb=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},VS=function(t,n){var r=n._pt,a="";if(!t&&n.b)a=n.b;else if(t===1&&n.e)a=n.e;else{for(;r;)a=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+a,r=r._next;a+=n.c}n.set(n.t,n.p,a,n)},__=function(t,n){for(var r=n._pt;r;)r.r(t,r.d),r=r._next},kb=function(t,n,r,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(t,n,r),l=c},Xb=function(t){for(var n=this._pt,r,a;n;)a=n._next,n.p===t&&!n.op||n.op===t?Wf(this,n,"_pt"):n.dep||(r=1),n=a;return!r},qb=function(t,n,r,a){a.mSet(t,n,a.m.call(a.tween,r,a.mt),a)},kS=function(t){for(var n=t._pt,r,a,l,c;n;){for(r=n._next,a=l;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:c)?n._prev._next=n:l=n,(n._next=a)?a._prev=n:c=n,n=r}t._pt=l},ai=function(){function o(n,r,a,l,c,f,d,h,m){this.t=r,this.s=l,this.c=c,this.p=a,this.r=f||GS,this.d=d||this,this.set=h||p_,this.pr=m||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(r,a,l){this.mSet=this.mSet||this.set,this.set=qb,this.m=r,this.mt=l,this.tween=a},o}();ri(u_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return l_[o]=1});Ti.TweenMax=Ti.TweenLite=pn;Ti.TimelineLite=Ti.TimelineMax=jn;$e=new jn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=LS;var Rs=[],Rf={},Wb=[],Ty=0,Yb=0,pp=function(t){return(Rf[t]||Wb).map(function(n){return n()})},um=function(){var t=Date.now(),n=[];t-Ty>2&&(pp("matchMediaInit"),Rs.forEach(function(r){var a=r.queries,l=r.conditions,c,f,d,h;for(f in a)c=sr.matchMedia(a[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,h=1);h&&(r.revert(),d&&n.push(r))}),pp("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(a){return r.add(null,a)})}),Ty=t,pp("matchMedia"))},XS=function(){function o(n,r){this.selector=r&&sm(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Yb++,n&&this.add(n)}var t=o.prototype;return t.add=function(r,a,l){rn(r)&&(l=a,a=r,r=rn);var c=this,f=function(){var h=Qe,m=c.selector,_;return h&&h!==c&&h.data.push(c),l&&(c.selector=sm(l)),Qe=c,_=a.apply(c,arguments),rn(_)&&c._r.push(_),Qe=h,c.selector=m,c.isReverted=!1,_};return c.last=f,r===rn?f(c,function(d){return c.add(null,d)}):r?c[r]=f:f},t.ignore=function(r){var a=Qe;Qe=null,r(this),Qe=a},t.getTweens=function(){var r=[];return this.data.forEach(function(a){return a instanceof o?r.push.apply(r,a.getTweens()):a instanceof pn&&!(a.parent&&a.parent.data==="nested")&&r.push(a)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,a){var l=this;if(r?function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(r)}),d=l.data.length;d--;)h=l.data[d],h instanceof jn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof pn)&&h.revert&&h.revert(r);l._r.forEach(function(m){return m(r,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=Rs.length;c--;)Rs[c].id===this.id&&Rs.splice(c,1)},t.revert=function(r){this.kill(r||{})},o}(),jb=function(){function o(n){this.contexts=[],this.scope=n,Qe&&Qe.data.push(this)}var t=o.prototype;return t.add=function(r,a,l){fr(r)||(r={matches:r});var c=new XS(0,l||this.scope),f=c.conditions={},d,h,m;Qe&&!c.selector&&(c.selector=Qe.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=r;for(h in r)h==="all"?m=1:(d=sr.matchMedia(r[h]),d&&(Rs.indexOf(c)<0&&Rs.push(c),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener(um):d.addEventListener("change",um)));return m&&a(c,function(_){return c.add(null,_)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(a){return a.kill(r,!0)})},o}(),Ff={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(a){return CS(a)})},timeline:function(t){return new jn(t)},getTweensOf:function(t,n){return $e.getTweensOf(t,n)},getProperty:function(t,n,r,a){Un(t)&&(t=Bi(t)[0]);var l=Ts(t||{}).get,c=r?_S:mS;return r==="native"&&(r=""),t&&(n?c((xi[n]&&xi[n].get||l)(t,n,r,a)):function(f,d,h){return c((xi[f]&&xi[f].get||l)(t,f,d,h))})},quickSetter:function(t,n,r){if(t=Bi(t),t.length>1){var a=t.map(function(m){return ui.quickSetter(m,n,r)}),l=a.length;return function(m){for(var _=l;_--;)a[_](m)}}t=t[0]||{};var c=xi[n],f=Ts(t),d=f.harness&&(f.harness.aliases||{})[n]||n,h=c?function(m){var _=new c;Co._pt=0,_.init(t,r?m+r:m,Co,0,[t]),_.render(1,_),Co._pt&&__(1,Co)}:f.set(t,d);return c?h:function(m){return h(t,d,r?m+r:m,f,1)}},quickTo:function(t,n,r){var a,l=ui.to(t,bi((a={},a[n]="+=0.1",a.paused=!0,a.stagger=0,a),r||{})),c=function(d,h,m){return l.resetTo(n,d,h,m)};return c.tween=l,c},isTweening:function(t){return $e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=As(t.ease,Io.ease)),yy(Io,t||{})},config:function(t){return yy(Ei,t||{})},registerEffect:function(t){var n=t.name,r=t.effect,a=t.plugins,l=t.defaults,c=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!xi[f]&&!Ti[f]&&uu(n+" effect requires "+f+" plugin.")}),cp[n]=function(f,d,h){return r(Bi(f),bi(d||{},l),h)},c&&(jn.prototype[n]=function(f,d,h){return this.add(cp[n](f,fr(d)?d:(h=d)&&{},this),h)})},registerEase:function(t,n){xe[t]=As(n)},parseEase:function(t,n){return arguments.length?As(t,n):xe},getById:function(t){return $e.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var r=new jn(t),a,l;for(r.smoothChildTiming=ii(t.smoothChildTiming),$e.remove(r),r._dp=0,r._time=r._tTime=$e._time,a=$e._first;a;)l=a._next,(n||!(!a._dur&&a instanceof pn&&a.vars.onComplete===a._targets[0]))&&lr(r,a,a._start-a._delay),a=l;return lr($e,r,0),r},context:function(t,n){return t?new XS(t,n):Qe},matchMedia:function(t){return new jb(t)},matchMediaRefresh:function(){return Rs.forEach(function(t){var n=t.conditions,r,a;for(a in n)n[a]&&(n[a]=!1,r=1);r&&t.revert()})||um()},addEventListener:function(t,n){var r=Rf[t]||(Rf[t]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(t,n){var r=Rf[t],a=r&&r.indexOf(n);a>=0&&r.splice(a,1)},utils:{wrap:Ab,wrapYoyo:Rb,distribute:ES,random:bS,snap:TS,normalize:bb,getUnit:Xn,clamp:Sb,splitColor:DS,toArray:Bi,selector:sm,mapRange:RS,pipe:Eb,unitize:Tb,interpolate:wb,shuffle:MS},install:cS,effects:cp,ticker:Si,updateRoot:jn.updateRoot,plugins:xi,globalTimeline:$e,core:{PropTween:ai,globals:fS,Tween:pn,Timeline:jn,Animation:du,getCache:Ts,_removeLinkedListItem:Wf,reverting:function(){return Bn},context:function(t){return t&&Qe&&(Qe.data.push(t),t._ctx=Qe),Qe},suppressOverwrites:function(t){return i_=t}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ff[o]=pn[o]});Si.add(jn.updateRoot);Co=Ff.to({},{duration:0});var Zb=function(t,n){for(var r=t._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},Kb=function(t,n){var r=t._targets,a,l,c;for(a in n)for(l=r.length;l--;)c=t._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=Zb(c,a)),c&&c.modifier&&c.modifier(n[a],t,r[l],a))},mp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(a,l,c){c._onInit=function(f){var d,h;if(Un(l)&&(d={},ri(l,function(m){return d[m]=1}),l=d),n){d={};for(h in l)d[h]=n(l[h]);l=d}Kb(f,l)}}}},ui=Ff.registerPlugin({name:"attr",init:function(t,n,r,a,l){var c,f,d;this.tween=r;for(c in n)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",n[c],a,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,n){for(var r=n._pt;r;)Bn?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",headless:1,init:function(t,n){for(var r=n.length;r--;)this.add(t,r,t[r]||0,n[r],0,0,0,0,0,1)}},mp("roundProps",om),mp("modifiers"),mp("snap",TS))||Ff;pn.version=jn.version=ui.version="3.13.0";uS=1;a_()&&Go();xe.Power0;xe.Power1;xe.Power2;xe.Power3;xe.Power4;xe.Linear;xe.Quad;xe.Cubic;xe.Quart;xe.Quint;xe.Strong;xe.Elastic;xe.Back;xe.SteppedEase;xe.Bounce;xe.Sine;xe.Expo;xe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var by,Ua,Lo,g_,Ss,Ay,v_,Qb=function(){return typeof window<"u"},Wr={},_s=180/Math.PI,Oo=Math.PI/180,fo=Math.atan2,Ry=1e8,y_=/([A-Z])/g,Jb=/(left|right|width|margin|padding|x)/i,$b=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},t1=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},e1=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},n1=function(t,n){var r=n.s+n.c*t;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},qS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},WS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},i1=function(t,n,r){return t.style[n]=r},r1=function(t,n,r){return t.style.setProperty(n,r)},a1=function(t,n,r){return t._gsap[n]=r},s1=function(t,n,r){return t._gsap.scaleX=t._gsap.scaleY=r},o1=function(t,n,r,a,l){var c=t._gsap;c.scaleX=c.scaleY=r,c.renderTransform(l,c)},l1=function(t,n,r,a,l){var c=t._gsap;c[n]=r,c.renderTransform(l,c)},tn="transform",si=tn+"Origin",u1=function o(t,n){var r=this,a=this.target,l=a.style,c=a._gsap;if(t in Wr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ur[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return r.tfm[f]=Hr(a,f)}):this.tfm[t]=c.x?c[t]:Hr(a,t),t===si&&(this.tfm.zOrigin=c.zOrigin);else return ur.transform.split(",").forEach(function(f){return o.call(r,f,n)});if(this.props.indexOf(tn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(si,n,"")),t=tn}(l||n)&&this.props.push(t,n,l[t])},YS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},c1=function(){var t=this.props,n=this.target,r=n.style,a=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?r[t[l]]=t[l+2]:r.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(y_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=v_(),(!l||!l.isStart)&&!r[tn]&&(YS(r),a.zOrigin&&r[si]&&(r[si]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},jS=function(t,n){var r={target:t,props:[],revert:c1,save:u1};return t._gsap||ui.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(a){return r.save(a)}),r},ZS,fm=function(t,n){var r=Ua.createElementNS?Ua.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ua.createElement(t);return r&&r.style?r:Ua.createElement(t)},Fi=function o(t,n,r){var a=getComputedStyle(t);return a[n]||a.getPropertyValue(n.replace(y_,"-$1").toLowerCase())||a.getPropertyValue(n)||!r&&o(t,Vo(n)||n,1)||""},wy="O,Moz,ms,Ms,Webkit".split(","),Vo=function(t,n,r){var a=n||Ss,l=a.style,c=5;if(t in l&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(wy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?wy[c]:"")+t},hm=function(){Qb()&&window.document&&(by=window,Ua=by.document,Lo=Ua.documentElement,Ss=fm("div")||{style:{}},fm("div"),tn=Vo(tn),si=tn+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ZS=!!Vo("perspective"),v_=ui.core.reverting,g_=1)},Cy=function(t){var n=t.ownerSVGElement,r=fm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",r.appendChild(a),Lo.appendChild(r);try{l=a.getBBox()}catch{}return r.removeChild(a),Lo.removeChild(r),l},Dy=function(t,n){for(var r=n.length;r--;)if(t.hasAttribute(n[r]))return t.getAttribute(n[r])},KS=function(t){var n,r;try{n=t.getBBox()}catch{n=Cy(t),r=1}return n&&(n.width||n.height)||r||(n=Cy(t)),n&&!n.width&&!n.x&&!n.y?{x:+Dy(t,["x","cx","x1"])||0,y:+Dy(t,["y","cy","y1"])||0,width:0,height:0}:n},QS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&KS(t))},Cs=function(t,n){if(n){var r=t.style,a;n in Wr&&n!==si&&(n=tn),r.removeProperty?(a=n.substr(0,2),(a==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(a==="--"?n:n.replace(y_,"-$1").toLowerCase())):r.removeAttribute(n)}},La=function(t,n,r,a,l,c){var f=new ai(t._pt,n,r,0,1,c?WS:qS);return t._pt=f,f.b=a,f.e=l,t._props.push(r),f},Uy={deg:1,rad:1,turn:1},f1={grid:1,flex:1},Fa=function o(t,n,r,a){var l=parseFloat(r)||0,c=(r+"").trim().substr((l+"").length)||"px",f=Ss.style,d=Jb.test(n),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),_=100,v=a==="px",y=a==="%",E,M,S,x;if(a===c||!l||Uy[a]||Uy[c])return l;if(c!=="px"&&!v&&(l=o(t,n,r,"px")),x=t.getCTM&&QS(t),(y||c==="%")&&(Wr[n]||~n.indexOf("adius")))return E=x?t.getBBox()[d?"width":"height"]:t[m],ln(y?l/E*_:l/100*E);if(f[d?"width":"height"]=_+(v?c:a),M=a!=="rem"&&~n.indexOf("adius")||a==="em"&&t.appendChild&&!h?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Ua||!M.appendChild)&&(M=Ua.body),S=M._gsap,S&&y&&S.width&&d&&S.time===Si.time&&!S.uncache)return ln(l/S.width*_);if(y&&(n==="height"||n==="width")){var R=t.style[n];t.style[n]=_+a,E=t[m],R?t.style[n]=R:Cs(t,n)}else(y||c==="%")&&!f1[Fi(M,"display")]&&(f.position=Fi(t,"position")),M===t&&(f.position="static"),M.appendChild(Ss),E=Ss[m],M.removeChild(Ss),f.position="absolute";return d&&y&&(S=Ts(M),S.time=Si.time,S.width=M[m]),ln(v?E*l/_:E&&l?_/E*l:0)},Hr=function(t,n,r,a){var l;return g_||hm(),n in ur&&n!=="transform"&&(n=ur[n],~n.indexOf(",")&&(n=n.split(",")[0])),Wr[n]&&n!=="transform"?(l=mu(t,a),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Gf(Fi(t,si))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=Hf[n]&&Hf[n](t,n,r)||Fi(t,n)||dS(t,n)||(n==="opacity"?1:0))),r&&!~(l+"").trim().indexOf(" ")?Fa(t,n,l,r)+r:l},h1=function(t,n,r,a){if(!r||r==="none"){var l=Vo(n,t,1),c=l&&Fi(t,l,1);c&&c!==r?(n=l,r=c):n==="borderColor"&&(r=Fi(t,"borderTopColor"))}var f=new ai(this._pt,t.style,n,0,1,VS),d=0,h=0,m,_,v,y,E,M,S,x,R,A,b,D;if(f.b=r,f.e=a,r+="",a+="",a.substring(0,6)==="var(--"&&(a=Fi(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(M=t.style[n],t.style[n]=a,a=Fi(t,n)||a,M?t.style[n]=M:Cs(t,n)),m=[r,a],LS(m),r=m[0],a=m[1],v=r.match(wo)||[],D=a.match(wo)||[],D.length){for(;_=wo.exec(a);)S=_[0],R=a.substring(d,_.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),S!==(M=v[h++]||"")&&(y=parseFloat(M)||0,b=M.substr((y+"").length),S.charAt(1)==="="&&(S=Uo(y,S)+b),x=parseFloat(S),A=S.substr((x+"").length),d=wo.lastIndex-A.length,A||(A=A||Ei.units[n]||b,d===a.length&&(a+=A,f.e+=A)),b!==A&&(y=Fa(t,n,M,A)||0),f._pt={_next:f._pt,p:R||h===1?R:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=d<a.length?a.substring(d,a.length):""}else f.r=n==="display"&&a==="none"?WS:qS;return oS.test(a)&&(f.e=0),this._pt=f,f},Ly={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},d1=function(t){var n=t.split(" "),r=n[0],a=n[1]||"50%";return(r==="top"||r==="bottom"||a==="left"||a==="right")&&(t=r,r=a,a=t),n[0]=Ly[r]||r,n[1]=Ly[a]||a,n.join(" ")},p1=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,a=r.style,l=n.u,c=r._gsap,f,d,h;if(l==="all"||l===!0)a.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],Wr[f]&&(d=1,f=f==="transformOrigin"?si:tn),Cs(r,f);d&&(Cs(r,tn),c&&(c.svg&&r.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",mu(r,1),c.uncache=1,YS(a)))}},Hf={clearProps:function(t,n,r,a,l){if(l.data!=="isFromStart"){var c=t._pt=new ai(t._pt,n,r,0,0,p1);return c.u=a,c.pr=-10,c.tween=l,t._props.push(r),1}}},pu=[1,0,0,1,0,0],JS={},$S=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Oy=function(t){var n=Fi(t,tn);return $S(n)?pu:n.substr(7).match(sS).map(ln)},x_=function(t,n){var r=t._gsap||Ts(t),a=t.style,l=Oy(t),c,f,d,h;return r.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?pu:l):(l===pu&&!t.offsetParent&&t!==Lo&&!r.svg&&(d=a.display,a.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,Lo.appendChild(t)),l=Oy(t),d?a.display=d:Cs(t,"display"),h&&(f?c.insertBefore(t,f):c?c.appendChild(t):Lo.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},dm=function(t,n,r,a,l,c){var f=t._gsap,d=l||x_(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,y=d[0],E=d[1],M=d[2],S=d[3],x=d[4],R=d[5],A=n.split(" "),b=parseFloat(A[0])||0,D=parseFloat(A[1])||0,N,U,I,w;r?d!==pu&&(U=y*S-E*M)&&(I=b*(S/U)+D*(-M/U)+(M*R-S*x)/U,w=b*(-E/U)+D*(y/U)-(y*R-E*x)/U,b=I,D=w):(N=KS(t),b=N.x+(~A[0].indexOf("%")?b/100*N.width:b),D=N.y+(~(A[1]||A[0]).indexOf("%")?D/100*N.height:D)),a||a!==!1&&f.smooth?(x=b-h,R=D-m,f.xOffset=_+(x*y+R*M)-x,f.yOffset=v+(x*E+R*S)-R):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=D,f.smooth=!!a,f.origin=n,f.originIsAbsolute=!!r,t.style[si]="0px 0px",c&&(La(c,f,"xOrigin",h,b),La(c,f,"yOrigin",m,D),La(c,f,"xOffset",_,f.xOffset),La(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",b+" "+D)},mu=function(t,n){var r=t._gsap||new zS(t);if("x"in r&&!n&&!r.uncache)return r;var a=t.style,l=r.scaleX<0,c="px",f="deg",d=getComputedStyle(t),h=Fi(t,si)||"0",m,_,v,y,E,M,S,x,R,A,b,D,N,U,I,w,C,z,H,k,Y,et,F,X,W,yt,B,Q,ht,dt,K,ft;return m=_=v=M=S=x=R=A=b=0,y=E=1,r.svg=!!(t.getCTM&&QS(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(a[tn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[tn]!=="none"?d[tn]:"")),a.scale=a.rotate=a.translate="none"),U=x_(t,r.svg),r.svg&&(r.uncache?(W=t.getBBox(),h=r.xOrigin-W.x+"px "+(r.yOrigin-W.y)+"px",X=""):X=!n&&t.getAttribute("data-svg-origin"),dm(t,X||h,!!X||r.originIsAbsolute,r.smooth!==!1,U)),D=r.xOrigin||0,N=r.yOrigin||0,U!==pu&&(z=U[0],H=U[1],k=U[2],Y=U[3],m=et=U[4],_=F=U[5],U.length===6?(y=Math.sqrt(z*z+H*H),E=Math.sqrt(Y*Y+k*k),M=z||H?fo(H,z)*_s:0,R=k||Y?fo(k,Y)*_s+M:0,R&&(E*=Math.abs(Math.cos(R*Oo))),r.svg&&(m-=D-(D*z+N*k),_-=N-(D*H+N*Y))):(ft=U[6],dt=U[7],B=U[8],Q=U[9],ht=U[10],K=U[11],m=U[12],_=U[13],v=U[14],I=fo(ft,ht),S=I*_s,I&&(w=Math.cos(-I),C=Math.sin(-I),X=et*w+B*C,W=F*w+Q*C,yt=ft*w+ht*C,B=et*-C+B*w,Q=F*-C+Q*w,ht=ft*-C+ht*w,K=dt*-C+K*w,et=X,F=W,ft=yt),I=fo(-k,ht),x=I*_s,I&&(w=Math.cos(-I),C=Math.sin(-I),X=z*w-B*C,W=H*w-Q*C,yt=k*w-ht*C,K=Y*C+K*w,z=X,H=W,k=yt),I=fo(H,z),M=I*_s,I&&(w=Math.cos(I),C=Math.sin(I),X=z*w+H*C,W=et*w+F*C,H=H*w-z*C,F=F*w-et*C,z=X,et=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=ln(Math.sqrt(z*z+H*H+k*k)),E=ln(Math.sqrt(F*F+ft*ft)),I=fo(et,F),R=Math.abs(I)>2e-4?I*_s:0,b=K?1/(K<0?-K:K):0),r.svg&&(X=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!$S(Fi(t,tn)),X&&t.setAttribute("transform",X))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(y*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),n=n||r.uncache,r.x=m-((r.xPercent=m&&(!n&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+c,r.y=_-((r.yPercent=_&&(!n&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-_)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+c,r.z=v+c,r.scaleX=ln(y),r.scaleY=ln(E),r.rotation=ln(M)+f,r.rotationX=ln(S)+f,r.rotationY=ln(x)+f,r.skewX=R+f,r.skewY=A+f,r.transformPerspective=b+c,(r.zOrigin=parseFloat(h.split(" ")[2])||!n&&r.zOrigin||0)&&(a[si]=Gf(h)),r.xOffset=r.yOffset=0,r.force3D=Ei.force3D,r.renderTransform=r.svg?_1:ZS?tM:m1,r.uncache=0,r},Gf=function(t){return(t=t.split(" "))[0]+" "+t[1]},_p=function(t,n,r){var a=Xn(n);return ln(parseFloat(n)+parseFloat(Fa(t,"x",r+"px",a)))+a},m1=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,tM(t,n)},ls="0deg",Wl="0px",us=") ",tM=function(t,n){var r=n||this,a=r.xPercent,l=r.yPercent,c=r.x,f=r.y,d=r.z,h=r.rotation,m=r.rotationY,_=r.rotationX,v=r.skewX,y=r.skewY,E=r.scaleX,M=r.scaleY,S=r.transformPerspective,x=r.force3D,R=r.target,A=r.zOrigin,b="",D=x==="auto"&&t&&t!==1||x===!0;if(A&&(_!==ls||m!==ls)){var N=parseFloat(m)*Oo,U=Math.sin(N),I=Math.cos(N),w;N=parseFloat(_)*Oo,w=Math.cos(N),c=_p(R,c,U*w*-A),f=_p(R,f,-Math.sin(N)*-A),d=_p(R,d,I*w*-A+A)}S!==Wl&&(b+="perspective("+S+us),(a||l)&&(b+="translate("+a+"%, "+l+"%) "),(D||c!==Wl||f!==Wl||d!==Wl)&&(b+=d!==Wl||D?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+us),h!==ls&&(b+="rotate("+h+us),m!==ls&&(b+="rotateY("+m+us),_!==ls&&(b+="rotateX("+_+us),(v!==ls||y!==ls)&&(b+="skew("+v+", "+y+us),(E!==1||M!==1)&&(b+="scale("+E+", "+M+us),R.style[tn]=b||"translate(0, 0)"},_1=function(t,n){var r=n||this,a=r.xPercent,l=r.yPercent,c=r.x,f=r.y,d=r.rotation,h=r.skewX,m=r.skewY,_=r.scaleX,v=r.scaleY,y=r.target,E=r.xOrigin,M=r.yOrigin,S=r.xOffset,x=r.yOffset,R=r.forceCSS,A=parseFloat(c),b=parseFloat(f),D,N,U,I,w;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=Oo,h*=Oo,D=Math.cos(d)*_,N=Math.sin(d)*_,U=Math.sin(d-h)*-v,I=Math.cos(d-h)*v,h&&(m*=Oo,w=Math.tan(h-m),w=Math.sqrt(1+w*w),U*=w,I*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),D*=w,N*=w)),D=ln(D),N=ln(N),U=ln(U),I=ln(I)):(D=_,I=v,N=U=0),(A&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(A=Fa(y,"x",c,"px"),b=Fa(y,"y",f,"px")),(E||M||S||x)&&(A=ln(A+E-(E*D+M*U)+S),b=ln(b+M-(E*N+M*I)+x)),(a||l)&&(w=y.getBBox(),A=ln(A+a/100*w.width),b=ln(b+l/100*w.height)),w="matrix("+D+","+N+","+U+","+I+","+A+","+b+")",y.setAttribute("transform",w),R&&(y.style[tn]=w)},g1=function(t,n,r,a,l){var c=360,f=Un(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?_s:1),h=d-a,m=a+h+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),_==="cw"&&h<0?h=(h+c*Ry)%c-~~(h/c)*c:_==="ccw"&&h>0&&(h=(h-c*Ry)%c-~~(h/c)*c)),t._pt=v=new ai(t._pt,n,r,a,h,t1),v.e=m,v.u="deg",t._props.push(r),v},Ny=function(t,n){for(var r in n)t[r]=n[r];return t},v1=function(t,n,r){var a=Ny({},r._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=r.style,f,d,h,m,_,v,y,E;a.svg?(h=r.getAttribute("transform"),r.setAttribute("transform",""),c[tn]=n,f=mu(r,1),Cs(r,tn),r.setAttribute("transform",h)):(h=getComputedStyle(r)[tn],c[tn]=n,f=mu(r,1),c[tn]=h);for(d in Wr)h=a[d],m=f[d],h!==m&&l.indexOf(d)<0&&(y=Xn(h),E=Xn(m),_=y!==E?Fa(r,d,h,E):parseFloat(h),v=parseFloat(m),t._pt=new ai(t._pt,f,d,_,v-_,cm),t._pt.u=E||0,t._props.push(d));Ny(f,a)};ri("padding,margin,Width,Radius",function(o,t){var n="Top",r="Right",a="Bottom",l="Left",c=(t<3?[n,r,a,l]:[n+l,n+r,a+r,a+l]).map(function(f){return t<2?o+f:"border"+f+o});Hf[t>1?"border"+o:o]=function(f,d,h,m,_){var v,y;if(arguments.length<4)return v=c.map(function(E){return Hr(f,E,h)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(m+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,_)}});var eM={name:"css",register:hm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,r,a,l){var c=this._props,f=t.style,d=r.vars.startAt,h,m,_,v,y,E,M,S,x,R,A,b,D,N,U,I;g_||hm(),this.styles=this.styles||jS(t),I=this.styles.props,this.tween=r;for(M in n)if(M!=="autoRound"&&(m=n[M],!(xi[M]&&IS(M,n,r,a,t,l)))){if(y=typeof m,E=Hf[M],y==="function"&&(m=m.call(r,a,t,l),y=typeof m),y==="string"&&~m.indexOf("random(")&&(m=fu(m)),E)E(this,t,M,m,r)&&(U=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Pa.lastIndex=0,Pa.test(h)||(S=Xn(h),x=Xn(m)),x?S!==x&&(h=Fa(t,M,h,x)+x):S&&(m+=S),this.add(f,"setProperty",h,m,a,l,0,0,M),c.push(M),I.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(r,a,t,l):d[M],Un(h)&&~h.indexOf("random(")&&(h=fu(h)),Xn(h+"")||h==="auto"||(h+=Ei.units[M]||Xn(Hr(t,M))||""),(h+"").charAt(1)==="="&&(h=Hr(t,M))):h=Hr(t,M),v=parseFloat(h),R=y==="string"&&m.charAt(1)==="="&&m.substr(0,2),R&&(m=m.substr(2)),_=parseFloat(m),M in ur&&(M==="autoAlpha"&&(v===1&&Hr(t,"visibility")==="hidden"&&_&&(v=0),I.push("visibility",0,f.visibility),La(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=ur[M],~M.indexOf(",")&&(M=M.split(",")[0]))),A=M in Wr,A){if(this.styles.save(M),y==="string"&&m.substring(0,6)==="var(--"&&(m=Fi(t,m.substring(4,m.indexOf(")"))),_=parseFloat(m)),b||(D=t._gsap,D.renderTransform&&!n.parseTransform||mu(t,n.parseTransform),N=n.smoothOrigin!==!1&&D.smooth,b=this._pt=new ai(this._pt,f,tn,0,1,D.renderTransform,D,0,-1),b.dep=1),M==="scale")this._pt=new ai(this._pt,D,"scaleY",D.scaleY,(R?Uo(D.scaleY,R+_):_)-D.scaleY||0,cm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){I.push(si,0,f[si]),m=d1(m),D.svg?dm(t,m,0,N,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==D.zOrigin&&La(this,D,"zOrigin",D.zOrigin,x),La(this,f,M,Gf(h),Gf(m)));continue}else if(M==="svgOrigin"){dm(t,m,1,N,0,this);continue}else if(M in JS){g1(this,D,M,v,R?Uo(v,R+m):m);continue}else if(M==="smoothOrigin"){La(this,D,"smooth",D.smooth,m);continue}else if(M==="force3D"){D[M]=m;continue}else if(M==="transform"){v1(this,m,t);continue}}else M in f||(M=Vo(M)||M);if(A||(_||_===0)&&(v||v===0)&&!$b.test(m)&&M in f)S=(h+"").substr((v+"").length),_||(_=0),x=Xn(m)||(M in Ei.units?Ei.units[M]:S),S!==x&&(v=Fa(t,M,h,x)),this._pt=new ai(this._pt,A?D:f,M,v,(R?Uo(v,R+_):_)-v,!A&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?n1:cm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=e1);else if(M in f)h1.call(this,t,M,h,R?R+m:m);else if(M in t)this.add(t,M,h||t[M],R?R+m:m,a,l);else if(M!=="parseTransform"){o_(M,m);continue}A||(M in f?I.push(M,0,f[M]):typeof t[M]=="function"?I.push(M,2,t[M]()):I.push(M,1,h||t[M])),c.push(M)}}U&&kS(this)},render:function(t,n){if(n.tween._time||!v_())for(var r=n._pt;r;)r.r(t,r.d),r=r._next;else n.styles.revert()},get:Hr,aliases:ur,getSetter:function(t,n,r){var a=ur[n];return a&&a.indexOf(",")<0&&(n=a),n in Wr&&n!==si&&(t._gsap.x||Hr(t,"x"))?r&&Ay===r?n==="scale"?s1:a1:(Ay=r||{})&&(n==="scale"?o1:l1):t.style&&!r_(t.style[n])?i1:~n.indexOf("-")?r1:m_(t,n)},core:{_removeProperty:Cs,_getMatrix:x_}};ui.utils.checkPrefix=Vo;ui.core.getStyleSaver=jS;(function(o,t,n,r){var a=ri(o+","+t+","+n,function(l){Wr[l]=1});ri(t,function(l){Ei.units[l]="deg",JS[l]=1}),ur[a[13]]=o+","+t,ri(r,function(l){var c=l.split(":");ur[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ei.units[o]="px"});ui.registerPlugin(eM);var ni=ui.registerPlugin(eM)||ui;ni.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var y1=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,x1=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,S1=Math.PI/180,Bc=Math.sin,Fc=Math.cos,lu=Math.abs,Yl=Math.sqrt,M1=function(t){return typeof t=="number"},Py=1e5,Sa=function(t){return Math.round(t*Py)/Py||0};function E1(o,t,n,r,a,l,c){for(var f=o.length,d,h,m,_,v;--f>-1;)for(d=o[f],h=d.length,m=0;m<h;m+=2)_=d[m],v=d[m+1],d[m]=_*t+v*r+l,d[m+1]=_*n+v*a+c;return o._dirty=1,o}function T1(o,t,n,r,a,l,c,f,d){if(!(o===f&&t===d)){n=lu(n),r=lu(r);var h=a%360*S1,m=Fc(h),_=Bc(h),v=Math.PI,y=v*2,E=(o-f)/2,M=(t-d)/2,S=m*E+_*M,x=-_*E+m*M,R=S*S,A=x*x,b=R/(n*n)+A/(r*r);b>1&&(n=Yl(b)*n,r=Yl(b)*r);var D=n*n,N=r*r,U=(D*N-D*A-N*R)/(D*A+N*R);U<0&&(U=0);var I=(l===c?-1:1)*Yl(U),w=I*(n*x/r),C=I*-(r*S/n),z=(o+f)/2,H=(t+d)/2,k=z+(m*w-_*C),Y=H+(_*w+m*C),et=(S-w)/n,F=(x-C)/r,X=(-S-w)/n,W=(-x-C)/r,yt=et*et+F*F,B=(F<0?-1:1)*Math.acos(et/Yl(yt)),Q=(et*W-F*X<0?-1:1)*Math.acos((et*X+F*W)/Yl(yt*(X*X+W*W)));isNaN(Q)&&(Q=v),!c&&Q>0?Q-=y:c&&Q<0&&(Q+=y),B%=y,Q%=y;var ht=Math.ceil(lu(Q)/(y/4)),dt=[],K=Q/ht,ft=4/3*Bc(K/2)/(1+Fc(K/2)),Mt=m*n,Rt=_*n,Et=_*-r,Zt=m*r,Nt;for(Nt=0;Nt<ht;Nt++)a=B+Nt*K,S=Fc(a),x=Bc(a),et=Fc(a+=K),F=Bc(a),dt.push(S-ft*x,x+ft*S,et+ft*F,F-ft*et,et,F);for(Nt=0;Nt<dt.length;Nt+=2)S=dt[Nt],x=dt[Nt+1],dt[Nt]=S*Mt+x*Et+k,dt[Nt+1]=S*Rt+x*Zt+Y;return dt[Nt-2]=f,dt[Nt-1]=d,dt}}function b1(o){var t=(o+"").replace(x1,function(w){var C=+w;return C<1e-4&&C>-1e-4?0:C}).match(y1)||[],n=[],r=0,a=0,l=2/3,c=t.length,f=0,d="ERROR: malformed path: "+o,h,m,_,v,y,E,M,S,x,R,A,b,D,N,U,I=function(C,z,H,k){R=(H-C)/3,A=(k-z)/3,M.push(C+R,z+A,H-R,k-A,H,k)};if(!o||!isNaN(t[0])||isNaN(t[1]))return console.log(d),n;for(h=0;h<c;h++)if(D=y,isNaN(t[h])?(y=t[h].toUpperCase(),E=y!==t[h]):h--,_=+t[h+1],v=+t[h+2],E&&(_+=r,v+=a),h||(S=_,x=v),y==="M")M&&(M.length<8?n.length-=1:f+=M.length),r=S=_,a=x=v,M=[_,v],n.push(M),h+=2,y="L";else if(y==="C")M||(M=[0,0]),E||(r=a=0),M.push(_,v,r+t[h+3]*1,a+t[h+4]*1,r+=t[h+5]*1,a+=t[h+6]*1),h+=6;else if(y==="S")R=r,A=a,(D==="C"||D==="S")&&(R+=r-M[M.length-4],A+=a-M[M.length-3]),E||(r=a=0),M.push(R,A,_,v,r+=t[h+3]*1,a+=t[h+4]*1),h+=4;else if(y==="Q")R=r+(_-r)*l,A=a+(v-a)*l,E||(r=a=0),r+=t[h+3]*1,a+=t[h+4]*1,M.push(R,A,r+(_-r)*l,a+(v-a)*l,r,a),h+=4;else if(y==="T")R=r-M[M.length-4],A=a-M[M.length-3],M.push(r+R,a+A,_+(r+R*1.5-_)*l,v+(a+A*1.5-v)*l,r=_,a=v),h+=2;else if(y==="H")I(r,a,r=_,a),h+=1;else if(y==="V")I(r,a,r,a=_+(E?a-r:0)),h+=1;else if(y==="L"||y==="Z")y==="Z"&&(_=S,v=x,M.closed=!0),(y==="L"||lu(r-_)>.5||lu(a-v)>.5)&&(I(r,a,_,v),y==="L"&&(h+=2)),r=_,a=v;else if(y==="A"){if(N=t[h+4],U=t[h+5],R=t[h+6],A=t[h+7],m=7,N.length>1&&(N.length<3?(A=R,R=U,m--):(A=U,R=N.substr(2),m-=2),U=N.charAt(1),N=N.charAt(0)),b=T1(r,a,+t[h+1],+t[h+2],+t[h+3],+N,+U,(E?r:0)+R*1,(E?a:0)+A*1),h+=m,b)for(m=0;m<b.length;m++)M.push(b[m]);r=M[M.length-2],a=M[M.length-1]}else console.log(d);return h=M.length,h<6?(n.pop(),h=0):M[0]===M[h-2]&&M[1]===M[h-1]&&(M.closed=!0),n.totalPoints=f+h,n}function A1(o){M1(o[0])&&(o=[o]);var t="",n=o.length,r,a,l,c;for(a=0;a<n;a++){for(c=o[a],t+="M"+Sa(c[0])+","+Sa(c[1])+" C",r=c.length,l=2;l<r;l++)t+=Sa(c[l++])+","+Sa(c[l++])+" "+Sa(c[l++])+","+Sa(c[l++])+" "+Sa(c[l++])+","+Sa(c[l])+" ";c.closed&&(t+="z")}return t}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei,nM,iM=function(){return ei||typeof window<"u"&&(ei=window.gsap)&&ei.registerPlugin&&ei},zy=function(){ei=iM(),ei?(ei.registerEase("_CE",jo.create),nM=1):console.warn("Please gsap.registerPlugin(CustomEase)")},R1=1e20,Hc=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},w1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,C1=/[cLlsSaAhHvVtTqQ]/g,D1=function(t){var n=t.length,r=R1,a;for(a=1;a<n;a+=6)+t[a]<r&&(r=+t[a]);return r},U1=function(t,n,r){!r&&r!==0&&(r=Math.max(+t[t.length-1],+t[1]));var a=+t[0]*-1,l=-r,c=t.length,f=1/(+t[c-2]+a),d=-n||(Math.abs(+t[c-1]-+t[1])<.01*(+t[c-2]-+t[0])?D1(t)+l:+t[c-1]+l),h;for(d?d=1/d:d=-f,h=0;h<c;h+=2)t[h]=(+t[h]+a)*f,t[h+1]=(+t[h+1]+l)*d},L1=function o(t,n,r,a,l,c,f,d,h,m,_){var v=(t+r)/2,y=(n+a)/2,E=(r+l)/2,M=(a+c)/2,S=(l+f)/2,x=(c+d)/2,R=(v+E)/2,A=(y+M)/2,b=(E+S)/2,D=(M+x)/2,N=(R+b)/2,U=(A+D)/2,I=f-t,w=d-n,C=Math.abs((r-f)*w-(a-d)*I),z=Math.abs((l-f)*w-(c-d)*I),H;return m||(m=[{x:t,y:n},{x:f,y:d}],_=1),m.splice(_||m.length-1,0,{x:N,y:U}),(C+z)*(C+z)>h*(I*I+w*w)&&(H=m.length,o(t,n,v,y,R,A,N,U,h,m,_),o(N,U,b,D,S,x,f,d,h,m,_+1+(m.length-H))),m},jo=function(){function o(n,r,a){nM||zy(),this.id=n,this.setData(r,a)}var t=o.prototype;return t.setData=function(r,a){a=a||{},r=r||"0,0,1,1";var l=r.match(w1),c=1,f=[],d=[],h=a.precision||1,m=h<=1,_,v,y,E,M,S,x,R,A;if(this.data=r,(C1.test(r)||~r.indexOf("M")&&r.indexOf("C")<0)&&(l=b1(r)[0]),_=l.length,_===4)l.unshift(0,0),l.push(1,1),_=8;else if((_-2)%6)throw"Invalid CustomEase";for((+l[0]!=0||+l[_-2]!=1)&&U1(l,a.height,a.originY),this.segment=l,E=2;E<_;E+=6)v={x:+l[E-2],y:+l[E-1]},y={x:+l[E+4],y:+l[E+5]},f.push(v,y),L1(v.x,v.y,+l[E],+l[E+1],+l[E+2],+l[E+3],y.x,y.y,1/(h*2e5),f,f.length-1);for(_=f.length,E=0;E<_;E++)x=f[E],R=f[E-1]||x,(x.x>R.x||R.y!==x.y&&R.x===x.x||x===R)&&x.x<=1?(R.cx=x.x-R.x,R.cy=x.y-R.y,R.n=x,R.nx=x.x,m&&E>1&&Math.abs(R.cy/R.cx-f[E-2].cy/f[E-2].cx)>2&&(m=0),R.cx<c&&(R.cx?c=R.cx:(R.cx=.001,E===_-1&&(R.x-=.001,c=Math.min(c,.001),m=0)))):(f.splice(E--,1),_--);if(_=1/c+1|0,M=1/_,S=0,x=f[0],m){for(E=0;E<_;E++)A=E*M,x.nx<A&&(x=f[++S]),v=x.y+(A-x.x)/x.cx*x.cy,d[E]={x:A,cx:M,y:v,cy:0,nx:9},E&&(d[E-1].cy=v-d[E-1].y);S=f[f.length-1],d[_-1].cy=S.y-v,d[_-1].cx=S.x-d[d.length-1].x}else{for(E=0;E<_;E++)x.nx<E*M&&(x=f[++S]),d[E]=x;S<f.length-1&&(d[E-1]=f[f.length-2])}return this.ease=function(b){var D=d[b*_|0]||d[_-1];return D.nx<b&&(D=D.n),D.y+(b-D.x)/D.cx*D.cy},this.ease.custom=this,this.id&&ei&&ei.registerEase(this.id,this.ease),this},t.getSVGData=function(r){return o.getSVGData(this,r)},o.create=function(r,a,l){return new o(r,a,l).ease},o.register=function(r){ei=r,zy()},o.get=function(r){return ei.parseEase(r)},o.getSVGData=function(r,a){a=a||{};var l=a.width||100,c=a.height||100,f=a.x||0,d=(a.y||0)+c,h=ei.utils.toArray(a.path)[0],m,_,v,y,E,M,S,x,R,A;if(a.invert&&(c=-c,d=0),typeof r=="string"&&(r=ei.parseEase(r)),r.custom&&(r=r.custom),r instanceof o)m=A1(E1([r.segment],l,0,0,-c,f,d));else{for(m=[f,d],S=Math.max(5,(a.precision||1)*200),y=1/S,S+=2,x=5/S,R=Hc(f+y*l),A=Hc(d+r(y)*-c),_=(A-d)/(R-f),v=2;v<S;v++)E=Hc(f+v*y*l),M=Hc(d+r(v*y)*-c),(Math.abs((M-A)/(E-R)-_)>x||v===S-1)&&(m.push(R,A),_=(M-A)/(E-R)),R=E,A=M;m="M"+m.join(",")}return h&&h.setAttribute("d",m),m},o}();jo.version="3.13.0";jo.headless=!0;iM()&&ei.registerPlugin(jo);ni.registerPlugin(jo);jo.create("hop","0.9,0,0.1,1");const O1=({onComplete:o})=>{const t=Ye.useRef(null),[n,r]=Ye.useState(0);return Ye.useEffect(()=>{let a;return n<99&&(a=setInterval(()=>{r(l=>l<99?l+1:l)},10)),()=>clearInterval(a)},[n]),Ye.useEffect(()=>{if(n===99&&t.current){const a=ni.timeline({delay:.3,defaults:{ease:"hop"}});a.to(`.${Oi.counter}`,{opacity:0,duration:.5}),a.to("#word_1 h3",{y:"0%",duration:1},"<"),a.to("#word_2 h3",{y:"0%",duration:1},"<0.2"),a.to(`.${Oi.divider}`,{scaleY:1,duration:1,transformOrigin:"top center"}),a.to("#word_1 h3",{y:"100%",duration:1,delay:.3}),a.to("#word_2 h3",{y:"-100%",duration:1},"<"),a.fromTo(`.${Oi.block}`,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:1,stagger:.1,delay:.75,ease:"hop",onComplete:()=>{ni.to(t.current,{opacity:0,duration:.5,onComplete:()=>{o&&o()}})}},"<")}},[n,o]),mt.jsx("div",{className:Oi.loader,ref:t,children:mt.jsxs("div",{className:Oi.overlay,children:[mt.jsx("div",{className:Oi.block}),mt.jsx("div",{className:Oi.block}),mt.jsxs("div",{className:Oi.intro_logo,children:[mt.jsx("div",{className:Oi.word,id:"word_1",children:mt.jsx("h3",{children:"samuel"})}),mt.jsx("div",{className:Oi.word,id:"word_2",children:mt.jsx("h3",{children:"rivera"})})]}),mt.jsx("div",{className:Oi.divider}),mt.jsx("div",{className:Oi.counter,children:mt.jsx("h6",{children:n})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S_="178",N1=0,Iy=1,P1=2,rM=1,z1=2,Br=3,Ha=0,oi=1,Gr=2,za=0,No=1,By=2,Fy=3,Hy=4,I1=5,ys=100,B1=101,F1=102,H1=103,G1=104,V1=200,k1=201,X1=202,q1=203,pm=204,mm=205,W1=206,Y1=207,j1=208,Z1=209,K1=210,Q1=211,J1=212,$1=213,tA=214,_m=0,gm=1,vm=2,ko=3,ym=4,xm=5,Sm=6,Mm=7,aM=0,eA=1,nA=2,Ia=0,iA=1,rA=2,aA=3,sA=4,oA=5,lA=6,uA=7,sM=300,Xo=301,qo=302,Em=303,Tm=304,Zf=306,bm=1e3,Ms=1001,Am=1002,Ji=1003,cA=1004,Gc=1005,Hi=1006,gp=1007,Es=1008,Yr=1009,oM=1010,lM=1011,_u=1012,M_=1013,Ds=1014,Vr=1015,Zo=1016,E_=1017,T_=1018,gu=1020,uM=35902,cM=1021,fM=1022,Gi=1023,vu=1026,yu=1027,hM=1028,b_=1029,dM=1030,A_=1031,R_=1033,wf=33776,Cf=33777,Df=33778,Uf=33779,Rm=35840,wm=35841,Cm=35842,Dm=35843,Um=36196,Lm=37492,Om=37496,Nm=37808,Pm=37809,zm=37810,Im=37811,Bm=37812,Fm=37813,Hm=37814,Gm=37815,Vm=37816,km=37817,Xm=37818,qm=37819,Wm=37820,Ym=37821,Lf=36492,jm=36494,Zm=36495,pM=36283,Km=36284,Qm=36285,Jm=36286,fA=3200,hA=3201,dA=0,pA=1,Ca="",zi="srgb",Wo="srgb-linear",Vf="linear",He="srgb",ho=7680,Gy=519,mA=512,_A=513,gA=514,mM=515,vA=516,yA=517,xA=518,SA=519,Vy=35044,ky="300 es",kr=2e3,kf=2001;class Ko{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const a=r[t];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=Math.PI/180,$m=180/Math.PI;function Su(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function MA(o,t){return(o%t+t)%t}function yp(o,t,n){return(1-n)*o+n*t}function jl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(t=0,n=0){Ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,a=t.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*r-c*a+t.x,this.y=l*a+c*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mu{constructor(t=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=a}static slerpFlat(t,n,r,a,l,c,f){let d=r[a+0],h=r[a+1],m=r[a+2],_=r[a+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=d,t[n+1]=h,t[n+2]=m,t[n+3]=_;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(_!==M||d!==v||h!==y||m!==E){let S=1-f;const x=d*v+h*y+m*E+_*M,R=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const D=Math.sqrt(A),N=Math.atan2(D,x*R);S=Math.sin(S*N)/D,f=Math.sin(f*N)/D}const b=f*R;if(d=d*S+v*b,h=h*S+y*b,m=m*S+E*b,_=_*S+M*b,S===1-f){const D=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=D,h*=D,m*=D,_*=D}}t[n]=d,t[n+1]=h,t[n+2]=m,t[n+3]=_}static multiplyQuaternionsFlat(t,n,r,a,l,c){const f=r[a],d=r[a+1],h=r[a+2],m=r[a+3],_=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+m*_+d*y-h*v,t[n+1]=d*E+m*v+h*_-f*y,t[n+2]=h*E+m*y+f*v-d*_,t[n+3]=m*E-f*_-d*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,a){return this._x=t,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,a=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(a/2),_=f(l/2),v=d(r/2),y=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=v*m*_+h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_-v*y*E;break;case"YXZ":this._x=v*m*_+h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_+v*y*E;break;case"ZXY":this._x=v*m*_-h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_-v*y*E;break;case"ZYX":this._x=v*m*_-h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_+v*y*E;break;case"YZX":this._x=v*m*_+h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_-v*y*E;break;case"XZY":this._x=v*m*_-h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,a=Math.sin(r);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],d=n[9],h=n[2],m=n[6],_=n[10],v=r+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(c-a)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(m-d)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(l-h)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(c-a)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,a=t._y,l=t._z,c=t._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=r*m+c*f+a*h-l*d,this._y=a*m+c*d+l*f-r*h,this._z=l*m+c*h+r*d-a*f,this._w=c*m-r*f-a*d-l*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*t._w+r*t._x+a*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),_=Math.sin((1-n)*m)/h,v=Math.sin(n*m)/h;return this._w=c*_+this._w*v,this._x=r*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,r=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Xy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Xy.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,a=this.z,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,a=this.z,l=t.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(t){const n=this.x,r=this.y,a=this.z,l=t.x,c=t.y,f=t.z,d=t.w,h=2*(c*a-f*r),m=2*(f*n-l*a),_=2*(l*r-c*n);return this.x=n+d*h+c*_-f*m,this.y=r+d*m+f*h-l*_,this.z=a+d*_+l*m-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,a=this.z,l=t.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,a=t.y,l=t.z,c=n.x,f=n.y,d=n.z;return this.x=a*d-l*f,this.y=l*c-r*d,this.z=r*f-a*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xp.copy(this).projectOnVector(t),this.sub(xp)}reflect(t){return this.sub(xp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return n*n+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const a=Math.sin(n)*t;return this.x=a*Math.sin(r),this.y=Math.cos(n)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xp=new ut,Xy=new Mu;class oe{constructor(t,n,r,a,l,c,f,d,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,a,l,c,f,d,h)}set(t,n,r,a,l,c,f,d,h){const m=this.elements;return m[0]=t,m[1]=a,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],m=r[4],_=r[7],v=r[2],y=r[5],E=r[8],M=a[0],S=a[3],x=a[6],R=a[1],A=a[4],b=a[7],D=a[2],N=a[5],U=a[8];return l[0]=c*M+f*R+d*D,l[3]=c*S+f*A+d*N,l[6]=c*x+f*b+d*U,l[1]=h*M+m*R+_*D,l[4]=h*S+m*A+_*N,l[7]=h*x+m*b+_*U,l[2]=v*M+y*R+E*D,l[5]=v*S+y*A+E*N,l[8]=v*x+y*b+E*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8];return n*c*m-n*f*h-r*l*m+r*f*d+a*l*h-a*c*d}invert(){const t=this.elements,n=t[0],r=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8],_=m*c-f*h,v=f*d-m*l,y=h*l-c*d,E=n*_+r*v+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=_*M,t[1]=(a*h-m*r)*M,t[2]=(f*r-a*c)*M,t[3]=v*M,t[4]=(m*n-a*d)*M,t[5]=(a*l-f*n)*M,t[6]=y*M,t[7]=(r*d-h*n)*M,t[8]=(c*n-r*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,a,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+t,-a*h,a*d,-a*(-h*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Sp.makeScale(t,n)),this}rotate(t){return this.premultiply(Sp.makeRotation(-t)),this}translate(t,n){return this.premultiply(Sp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sp=new oe;function _M(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Xf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function EA(){const o=Xf("canvas");return o.style.display="block",o}const qy={};function Po(o){o in qy||(qy[o]=!0,console.warn(o))}function TA(o,t,n){return new Promise(function(r,a){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function bA(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function AA(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wy=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yy=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RA(){const o={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(a.r=Xr(a.r),a.g=Xr(a.g),a.b=Xr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(a.r=zo(a.r),a.g=zo(a.g),a.b=zo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ca?Vf:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Wo]:{primaries:t,whitePoint:r,transfer:Vf,toXYZ:Wy,fromXYZ:Yy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Wy,fromXYZ:Yy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),o}const Ae=RA();function Xr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let po;class wA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{po===void 0&&(po=Xf("canvas")),po.width=t.width,po.height=t.height;const a=po.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),r=po}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Xf("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xr(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xr(n[r]/255)*255):n[r]=Xr(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CA=0;class w_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Su(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Mp(a[c].image)):l.push(Mp(a[c]))}else l=Mp(a);r.url=l}return n||(t.images[this.uuid]=r),r}}function Mp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wA.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DA=0;const Ep=new ut;class li extends Ko{constructor(t=li.DEFAULT_IMAGE,n=li.DEFAULT_MAPPING,r=Ms,a=Ms,l=Hi,c=Es,f=Gi,d=Yr,h=li.DEFAULT_ANISOTROPY,m=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=Su(),this.name="",this.source=new w_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ep).x}get height(){return this.source.getSize(Ep).y}get depth(){return this.source.getSize(Ep).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sM)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bm:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Am:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bm:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Am:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=sM;li.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,r=0,a=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,a){return this.x=t,this.y=n,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,a,l;const d=t.elements,h=d[0],m=d[4],_=d[8],v=d[1],y=d[5],E=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(h+1)/2,b=(y+1)/2,D=(x+1)/2,N=(m+v)/4,U=(_+M)/4,I=(E+S)/4;return A>b&&A>D?A<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(A),a=N/r,l=U/r):b>D?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=N/a,l=I/a):D<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),r=U/l,a=I/l),this.set(r,a,l,n),this}let R=Math.sqrt((S-E)*(S-E)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-M)/R,this.z=(v-m)/R,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UA extends Ko{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const a={width:t,height:n,depth:r.depth},l=new li(a);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new w_(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends UA{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class gM extends li{constructor(t=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:a},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LA extends li{constructor(t=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:a},this.magFilter=Ji,this.minFilter=Ji,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Wi):Wi.fromBufferAttribute(l,c),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vc.copy(r.boundingBox)),Vc.applyMatrix4(t.matrixWorld),this.union(Vc)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zl),kc.subVectors(this.max,Zl),mo.subVectors(t.a,Zl),_o.subVectors(t.b,Zl),go.subVectors(t.c,Zl),Ma.subVectors(_o,mo),Ea.subVectors(go,_o),cs.subVectors(mo,go);let n=[0,-Ma.z,Ma.y,0,-Ea.z,Ea.y,0,-cs.z,cs.y,Ma.z,0,-Ma.x,Ea.z,0,-Ea.x,cs.z,0,-cs.x,-Ma.y,Ma.x,0,-Ea.y,Ea.x,0,-cs.y,cs.x,0];return!Tp(n,mo,_o,go,kc)||(n=[1,0,0,0,1,0,0,0,1],!Tp(n,mo,_o,go,kc))?!1:(Xc.crossVectors(Ma,Ea),n=[Xc.x,Xc.y,Xc.z],Tp(n,mo,_o,go,kc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Lr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Lr=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Wi=new ut,Vc=new Eu,mo=new ut,_o=new ut,go=new ut,Ma=new ut,Ea=new ut,cs=new ut,Zl=new ut,kc=new ut,Xc=new ut,fs=new ut;function Tp(o,t,n,r,a){for(let l=0,c=o.length-3;l<=c;l+=3){fs.fromArray(o,l);const f=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),d=t.dot(fs),h=n.dot(fs),m=r.dot(fs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const OA=new Eu,Kl=new ut,bp=new ut;class C_{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):OA.setFromPoints(t).getCenter(r);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kl.subVectors(t,this.center);const n=Kl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Kl,a/r),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kl.copy(t.center).add(bp)),this.expandByPoint(Kl.copy(t.center).sub(bp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Or=new ut,Ap=new ut,qc=new ut,Ta=new ut,Rp=new ut,Wc=new ut,wp=new ut;class NA{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Or)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Or.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Or.copy(this.origin).addScaledVector(this.direction,n),Or.distanceToSquared(t))}distanceSqToSegment(t,n,r,a){Ap.copy(t).add(n).multiplyScalar(.5),qc.copy(n).sub(t).normalize(),Ta.copy(this.origin).sub(Ap);const l=t.distanceTo(n)*.5,c=-this.direction.dot(qc),f=Ta.dot(this.direction),d=-Ta.dot(qc),h=Ta.lengthSq(),m=Math.abs(1-c*c);let _,v,y,E;if(m>0)if(_=c*d-f,v=c*f-d,E=l*m,_>=0)if(v>=-E)if(v<=E){const M=1/m;_*=M,v*=M,y=_*(_+c*v+2*f)+v*(c*_+v+2*d)+h}else v=l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h):v<=E?(_=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Ap).addScaledVector(qc,v),y}intersectSphere(t,n){Or.subVectors(t.center,this.origin);const r=Or.dot(this.direction),a=Or.dot(Or)-r*r,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,a,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(t.min.x-v.x)*h,a=(t.max.x-v.x)*h):(r=(t.max.x-v.x)*h,a=(t.min.x-v.x)*h),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),r>d||f>a)||((f>r||r!==r)&&(r=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(t){return this.intersectBox(t,Or)!==null}intersectTriangle(t,n,r,a,l){Rp.subVectors(n,t),Wc.subVectors(r,t),wp.crossVectors(Rp,Wc);let c=this.direction.dot(wp),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ta.subVectors(this.origin,t);const d=f*this.direction.dot(Wc.crossVectors(Ta,Wc));if(d<0)return null;const h=f*this.direction.dot(Rp.cross(Ta));if(h<0||d+h>c)return null;const m=-f*Ta.dot(wp);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(t,n,r,a,l,c,f,d,h,m,_,v,y,E,M,S){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,a,l,c,f,d,h,m,_,v,y,E,M,S)}set(t,n,r,a,l,c,f,d,h,m,_,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,a=1/vo.setFromMatrixColumn(t,0).length(),l=1/vo.setFromMatrixColumn(t,1).length(),c=1/vo.setFromMatrixColumn(t,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,a=t.y,l=t.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=c*m,y=c*_,E=f*m,M=f*_;n[0]=d*m,n[4]=-d*_,n[8]=h,n[1]=y+E*h,n[5]=v-M*h,n[9]=-f*d,n[2]=M-v*h,n[6]=E+y*h,n[10]=c*d}else if(t.order==="YXZ"){const v=d*m,y=d*_,E=h*m,M=h*_;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*h,n[1]=c*_,n[5]=c*m,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*d}else if(t.order==="ZXY"){const v=d*m,y=d*_,E=h*m,M=h*_;n[0]=v-M*f,n[4]=-c*_,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*m,n[9]=M-v*f,n[2]=-c*h,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const v=c*m,y=c*_,E=f*m,M=f*_;n[0]=d*m,n[4]=E*h-y,n[8]=v*h+M,n[1]=d*_,n[5]=M*h+v,n[9]=y*h-E,n[2]=-h,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const v=c*d,y=c*h,E=f*d,M=f*h;n[0]=d*m,n[4]=M-v*_,n[8]=E*_+y,n[1]=_,n[5]=c*m,n[9]=-f*m,n[2]=-h*m,n[6]=y*_+E,n[10]=v-M*_}else if(t.order==="XZY"){const v=c*d,y=c*h,E=f*d,M=f*h;n[0]=d*m,n[4]=-_,n[8]=h*m,n[1]=v*_+M,n[5]=c*m,n[9]=y*_-E,n[2]=E*_-y,n[6]=f*m,n[10]=M*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PA,t,zA)}lookAt(t,n,r){const a=this.elements;return vi.subVectors(t,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ba.crossVectors(r,vi),ba.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ba.crossVectors(r,vi)),ba.normalize(),Yc.crossVectors(vi,ba),a[0]=ba.x,a[4]=Yc.x,a[8]=vi.x,a[1]=ba.y,a[5]=Yc.y,a[9]=vi.y,a[2]=ba.z,a[6]=Yc.z,a[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],m=r[1],_=r[5],v=r[9],y=r[13],E=r[2],M=r[6],S=r[10],x=r[14],R=r[3],A=r[7],b=r[11],D=r[15],N=a[0],U=a[4],I=a[8],w=a[12],C=a[1],z=a[5],H=a[9],k=a[13],Y=a[2],et=a[6],F=a[10],X=a[14],W=a[3],yt=a[7],B=a[11],Q=a[15];return l[0]=c*N+f*C+d*Y+h*W,l[4]=c*U+f*z+d*et+h*yt,l[8]=c*I+f*H+d*F+h*B,l[12]=c*w+f*k+d*X+h*Q,l[1]=m*N+_*C+v*Y+y*W,l[5]=m*U+_*z+v*et+y*yt,l[9]=m*I+_*H+v*F+y*B,l[13]=m*w+_*k+v*X+y*Q,l[2]=E*N+M*C+S*Y+x*W,l[6]=E*U+M*z+S*et+x*yt,l[10]=E*I+M*H+S*F+x*B,l[14]=E*w+M*k+S*X+x*Q,l[3]=R*N+A*C+b*Y+D*W,l[7]=R*U+A*z+b*et+D*yt,l[11]=R*I+A*H+b*F+D*B,l[15]=R*w+A*k+b*X+D*Q,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],a=t[8],l=t[12],c=t[1],f=t[5],d=t[9],h=t[13],m=t[2],_=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15];return E*(+l*d*_-a*h*_-l*f*v+r*h*v+a*f*y-r*d*y)+M*(+n*d*y-n*h*v+l*c*v-a*c*y+a*h*m-l*d*m)+S*(+n*h*_-n*f*y-l*c*_+r*c*y+l*f*m-r*h*m)+x*(-a*f*m-n*d*_+n*f*v+a*c*_-r*c*v+r*d*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8],_=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],R=_*S*h-M*v*h+M*d*y-f*S*y-_*d*x+f*v*x,A=E*v*h-m*S*h-E*d*y+c*S*y+m*d*x-c*v*x,b=m*M*h-E*_*h+E*f*y-c*M*y-m*f*x+c*_*x,D=E*_*d-m*M*d-E*f*v+c*M*v+m*f*S-c*_*S,N=n*R+r*A+a*b+l*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return t[0]=R*U,t[1]=(M*v*l-_*S*l-M*a*y+r*S*y+_*a*x-r*v*x)*U,t[2]=(f*S*l-M*d*l+M*a*h-r*S*h-f*a*x+r*d*x)*U,t[3]=(_*d*l-f*v*l-_*a*h+r*v*h+f*a*y-r*d*y)*U,t[4]=A*U,t[5]=(m*S*l-E*v*l+E*a*y-n*S*y-m*a*x+n*v*x)*U,t[6]=(E*d*l-c*S*l-E*a*h+n*S*h+c*a*x-n*d*x)*U,t[7]=(c*v*l-m*d*l+m*a*h-n*v*h-c*a*y+n*d*y)*U,t[8]=b*U,t[9]=(E*_*l-m*M*l-E*r*y+n*M*y+m*r*x-n*_*x)*U,t[10]=(c*M*l-E*f*l+E*r*h-n*M*h-c*r*x+n*f*x)*U,t[11]=(m*f*l-c*_*l-m*r*h+n*_*h+c*r*y-n*f*y)*U,t[12]=D*U,t[13]=(m*M*a-E*_*a+E*r*v-n*M*v-m*r*S+n*_*S)*U,t[14]=(E*f*a-c*M*a-E*r*d+n*M*d+c*r*S-n*f*S)*U,t[15]=(c*_*a-m*f*a+m*r*d-n*_*d-c*r*v+n*f*v)*U,this}scale(t){const n=this.elements,r=t.x,a=t.y,l=t.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=t.x,f=t.y,d=t.z,h=l*c,m=l*f;return this.set(h*c+r,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+r,m*d-a*c,0,h*d-a*f,m*d+a*c,l*d*d+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,a,l,c){return this.set(1,r,l,0,t,1,c,0,n,a,1,0,0,0,0,1),this}compose(t,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,h=l+l,m=c+c,_=f+f,v=l*h,y=l*m,E=l*_,M=c*m,S=c*_,x=f*_,R=d*h,A=d*m,b=d*_,D=r.x,N=r.y,U=r.z;return a[0]=(1-(M+x))*D,a[1]=(y+b)*D,a[2]=(E-A)*D,a[3]=0,a[4]=(y-b)*N,a[5]=(1-(v+x))*N,a[6]=(S+R)*N,a[7]=0,a[8]=(E+A)*U,a[9]=(S-R)*U,a[10]=(1-(v+M))*U,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,r){const a=this.elements;let l=vo.set(a[0],a[1],a[2]).length();const c=vo.set(a[4],a[5],a[6]).length(),f=vo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),t.x=a[12],t.y=a[13],t.z=a[14],Yi.copy(this);const h=1/l,m=1/c,_=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=m,Yi.elements[5]*=m,Yi.elements[6]*=m,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),r.x=l,r.y=c,r.z=f,this}makePerspective(t,n,r,a,l,c,f=kr){const d=this.elements,h=2*l/(n-t),m=2*l/(r-a),_=(n+t)/(n-t),v=(r+a)/(r-a);let y,E;if(f===kr)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===kf)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,r,a,l,c,f=kr){const d=this.elements,h=1/(n-t),m=1/(r-a),_=1/(c-l),v=(n+t)*h,y=(r+a)*m;let E,M;if(f===kr)E=(c+l)*_,M=-2*_;else if(f===kf)E=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const vo=new ut,Yi=new _n,PA=new ut(0,0,0),zA=new ut(1,1,1),ba=new ut,Yc=new ut,vi=new ut,jy=new _n,Zy=new Mu;class Ls{constructor(t=0,n=0,r=0,a=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,a=this._order){return this._x=t,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const a=t.elements,l=a[0],c=a[4],f=a[8],d=a[1],h=a[5],m=a[9],_=a[2],v=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return jy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jy,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Zy.setFromEuler(this),this.setFromQuaternion(Zy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class vM{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IA=0;const Ky=new ut,yo=new Mu,Nr=new _n,jc=new ut,Ql=new ut,BA=new ut,FA=new Mu,Qy=new ut(1,0,0),Jy=new ut(0,1,0),$y=new ut(0,0,1),tx={type:"added"},HA={type:"removed"},xo={type:"childadded",child:null},Cp={type:"childremoved",child:null};class Vi extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vi.DEFAULT_UP.clone();const t=new ut,n=new Ls,r=new Mu,a=new ut(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _n},normalMatrix:{value:new oe}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(Qy,t)}rotateY(t){return this.rotateOnAxis(Jy,t)}rotateZ(t){return this.rotateOnAxis($y,t)}translateOnAxis(t,n){return Ky.copy(t).applyQuaternion(this.quaternion),this.position.add(Ky.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Qy,t)}translateY(t){return this.translateOnAxis(Jy,t)}translateZ(t){return this.translateOnAxis($y,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?jc.copy(t):jc.set(t,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Ql,jc,this.up):Nr.lookAt(jc,Ql,this.up),this.quaternion.setFromRotationMatrix(Nr),a&&(Nr.extractRotation(a.matrixWorld),yo.setFromRotationMatrix(Nr),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tx),xo.child=t,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(HA),Cp.child=t,this.dispatchEvent(Cp),Cp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tx),xo.child=t,this.dispatchEvent(xo),xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,t,BA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,FA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(t.materials,this.material[d]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),h=c(t.textures),m=c(t.images),_=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const a=t.children[r];this.add(a.clone())}return this}}Vi.DEFAULT_UP=new ut(0,1,0);Vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new ut,Pr=new ut,Dp=new ut,zr=new ut,So=new ut,Mo=new ut,ex=new ut,Up=new ut,Lp=new ut,Op=new ut,Np=new un,Pp=new un,zp=new un;class Ki{constructor(t=new ut,n=new ut,r=new ut){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,a){a.subVectors(r,n),ji.subVectors(t,n),a.cross(ji);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,n,r,a,l){ji.subVectors(a,n),Pr.subVectors(r,n),Dp.subVectors(t,n);const c=ji.dot(ji),f=ji.dot(Pr),d=ji.dot(Dp),h=Pr.dot(Pr),m=Pr.dot(Dp),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(h*d-f*m)*v,E=(c*m-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,r,a){return this.getBarycoord(t,n,r,a,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(t,n,r,a,l,c,f,d){return this.getBarycoord(t,n,r,a,zr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,zr.x),d.addScaledVector(c,zr.y),d.addScaledVector(f,zr.z),d)}static getInterpolatedAttribute(t,n,r,a,l,c){return Np.setScalar(0),Pp.setScalar(0),zp.setScalar(0),Np.fromBufferAttribute(t,n),Pp.fromBufferAttribute(t,r),zp.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(Np,l.x),c.addScaledVector(Pp,l.y),c.addScaledVector(zp,l.z),c}static isFrontFacing(t,n,r,a){return ji.subVectors(r,n),Pr.subVectors(t,n),ji.cross(Pr).dot(a)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,a){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,r,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Pr.subVectors(this.a,this.b),ji.cross(Pr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ki.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,a,l){return Ki.getInterpolation(t,this.a,this.b,this.c,n,r,a,l)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,a=this.b,l=this.c;let c,f;So.subVectors(a,r),Mo.subVectors(l,r),Up.subVectors(t,r);const d=So.dot(Up),h=Mo.dot(Up);if(d<=0&&h<=0)return n.copy(r);Lp.subVectors(t,a);const m=So.dot(Lp),_=Mo.dot(Lp);if(m>=0&&_<=m)return n.copy(a);const v=d*_-m*h;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(r).addScaledVector(So,c);Op.subVectors(t,l);const y=So.dot(Op),E=Mo.dot(Op);if(E>=0&&y<=E)return n.copy(l);const M=y*h-d*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),n.copy(r).addScaledVector(Mo,f);const S=m*E-y*_;if(S<=0&&_-m>=0&&y-E>=0)return ex.subVectors(l,a),f=(_-m)/(_-m+(y-E)),n.copy(a).addScaledVector(ex,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(r).addScaledVector(So,c).addScaledVector(Mo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function Ip(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Re{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,r,a=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ae.colorSpaceToWorking(this,a),this}setHSL(t,n,r,a=Ae.workingColorSpace){if(t=MA(t,1),n=ye(n,0,1),r=ye(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Ip(c,l,t+1/3),this.g=Ip(c,l,t),this.b=Ip(c,l,t-1/3)}return Ae.colorSpaceToWorking(this,a),this}setStyle(t,n=zi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zi){const r=yM[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zi){return Ae.workingToColorSpace(kn.copy(this),t),Math.round(ye(kn.r*255,0,255))*65536+Math.round(ye(kn.g*255,0,255))*256+Math.round(ye(kn.b*255,0,255))}getHexString(t=zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(kn.copy(this),n);const r=kn.r,a=kn.g,l=kn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=m<=.5?_/(c+f):_/(2-c-f),c){case r:d=(a-l)/_+(a<l?6:0);break;case a:d=(l-r)/_+2;break;case l:d=(r-a)/_+4;break}d/=6}return t.h=d,t.s=h,t.l=m,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=zi){Ae.workingToColorSpace(kn.copy(this),t);const n=kn.r,r=kn.g,a=kn.b;return t!==zi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(t,n,r){return this.getHSL(Aa),this.setHSL(Aa.h+t,Aa.s+n,Aa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Aa),t.getHSL(Zc);const r=yp(Aa.h,Zc.h,n),a=yp(Aa.s,Zc.s,n),l=yp(Aa.l,Zc.l,n);return this.setHSL(r,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,a=this.b,l=t.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Re;Re.NAMES=yM;let GA=0;class Kf extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Su(),this.name="",this.type="Material",this.blending=No,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pm,this.blendDst=mm,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pm&&(r.blendSrc=this.blendSrc),this.blendDst!==mm&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=a(t.textures),c=a(t.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xM extends Kf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=aM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new ut,Kc=new Ue;let VA=0;class cr{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Vy,this.updateRanges=[],this.gpuType=Vr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=n.array[r+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Kc.fromBufferAttribute(this,n),Kc.applyMatrix3(t),this.setXY(n,Kc.x,Kc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=jl(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=ti(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=a,this}setXYZW(t,n,r,a,l){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),r=ti(r,this.array),a=ti(a,this.array),l=ti(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vy&&(t.usage=this.usage),t}}class SM extends cr{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class MM extends cr{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class ws extends cr{constructor(t,n,r){super(new Float32Array(t),n,r)}}let kA=0;const Ni=new _n,Bp=new Vi,Eo=new ut,yi=new Eu,Jl=new Eu,Cn=new ut;class Os extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Su(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_M(t)?MM:SM)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new oe().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,n,r){return Ni.makeTranslation(t,n,r),this.applyMatrix4(Ni),this}scale(t,n,r){return Ni.makeScale(t,n,r),this.applyMatrix4(Ni),this}lookAt(t){return Bp.lookAt(t),Bp.updateMatrix(),this.applyMatrix4(Bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ws(r,3))}else{const r=Math.min(t.length,n.count);for(let a=0;a<r;a++){const l=t[a];n.setXYZ(a,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new C_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Jl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(yi.min,Jl.min),yi.expandByPoint(Cn),Cn.addVectors(yi.max,Jl.max),yi.expandByPoint(Cn)):(yi.expandByPoint(Jl.min),yi.expandByPoint(Jl.max))}yi.getCenter(r);let a=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),a=Math.max(a,r.distanceToSquared(Cn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Cn.fromBufferAttribute(f,h),d&&(Eo.fromBufferAttribute(t,h),Cn.add(Eo)),a=Math.max(a,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let I=0;I<r.count;I++)f[I]=new ut,d[I]=new ut;const h=new ut,m=new ut,_=new ut,v=new Ue,y=new Ue,E=new Ue,M=new ut,S=new ut;function x(I,w,C){h.fromBufferAttribute(r,I),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),v.fromBufferAttribute(l,I),y.fromBufferAttribute(l,w),E.fromBufferAttribute(l,C),m.sub(h),_.sub(h),y.sub(v),E.sub(v);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(z),f[I].add(M),f[w].add(M),f[C].add(M),d[I].add(S),d[w].add(S),d[C].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let I=0,w=R.length;I<w;++I){const C=R[I],z=C.start,H=C.count;for(let k=z,Y=z+H;k<Y;k+=3)x(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const A=new ut,b=new ut,D=new ut,N=new ut;function U(I){D.fromBufferAttribute(a,I),N.copy(D);const w=f[I];A.copy(w),A.sub(D.multiplyScalar(D.dot(w))).normalize(),b.crossVectors(N,w);const z=b.dot(d[I])<0?-1:1;c.setXYZW(I,A.x,A.y,A.z,z)}for(let I=0,w=R.length;I<w;++I){const C=R[I],z=C.start,H=C.count;for(let k=z,Y=z+H;k<Y;k+=3)U(t.getX(k+0)),U(t.getX(k+1)),U(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new cr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const a=new ut,l=new ut,c=new ut,f=new ut,d=new ut,h=new ut,m=new ut,_=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,S),f.add(m),d.add(m),h.add(m),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)a.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,d){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(d.length*m);let y=0,E=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*m;for(let x=0;x<m;x++)v[E++]=h[y++]}return new cr(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Os,r=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=t(d,r);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],y=t(v,r);d.push(y)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const h=r[d];t.data.attributes[d]=h.toJSON(t.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];m.push(y.toJSON(t.data))}m.length>0&&(a[d]=m,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const a=t.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(n))}const l=t.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nx=new _n,hs=new NA,Qc=new C_,ix=new ut,Jc=new ut,$c=new ut,tf=new ut,Fp=new ut,ef=new ut,rx=new ut,nf=new ut;class Qi extends Vi{constructor(t=new Os,n=new xM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){ef.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],_=l[d];m!==0&&(Fp.fromBufferAttribute(_,t),c?ef.addScaledVector(Fp,m):ef.addScaledVector(Fp.sub(n),m))}n.add(ef)}return n}raycast(t,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qc.copy(r.boundingSphere),Qc.applyMatrix4(l),hs.copy(t.ray).recast(t.near),!(Qc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Qc,ix)===null||hs.origin.distanceToSquared(ix)>(t.far-t.near)**2))&&(nx.copy(l).invert(),hs.copy(t.ray).applyMatrix4(nx),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,hs)))}_computeIntersections(t,n,r){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],R=Math.max(S.start,y.start),A=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,D=A;b<D;b+=3){const N=f.getX(b),U=f.getX(b+1),I=f.getX(b+2);a=rf(this,x,t,r,h,m,_,N,U,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=f.getX(S),A=f.getX(S+1),b=f.getX(S+2);a=rf(this,c,t,r,h,m,_,R,A,b),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],R=Math.max(S.start,y.start),A=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=R,D=A;b<D;b+=3){const N=b,U=b+1,I=b+2;a=rf(this,x,t,r,h,m,_,N,U,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=S,A=S+1,b=S+2;a=rf(this,c,t,r,h,m,_,R,A,b),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function XA(o,t,n,r,a,l,c,f){let d;if(t.side===oi?d=r.intersectTriangle(c,l,a,!0,f):d=r.intersectTriangle(a,l,c,t.side===Ha,f),d===null)return null;nf.copy(f),nf.applyMatrix4(o.matrixWorld);const h=n.ray.origin.distanceTo(nf);return h<n.near||h>n.far?null:{distance:h,point:nf.clone(),object:o}}function rf(o,t,n,r,a,l,c,f,d,h){o.getVertexPosition(f,Jc),o.getVertexPosition(d,$c),o.getVertexPosition(h,tf);const m=XA(o,t,n,r,Jc,$c,tf,rx);if(m){const _=new ut;Ki.getBarycoord(rx,Jc,$c,tf,_),a&&(m.uv=Ki.getInterpolatedAttribute(a,f,d,h,_,new Ue)),l&&(m.uv1=Ki.getInterpolatedAttribute(l,f,d,h,_,new Ue)),c&&(m.normal=Ki.getInterpolatedAttribute(c,f,d,h,_,new ut),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new ut,materialIndex:0};Ki.getNormal(Jc,$c,tf,v.normal),m.face=v,m.barycoord=_}return m}class Tu extends Os{constructor(t=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,n,t,c,l,0),E("z","y","x",1,-1,r,n,-t,c,l,1),E("x","z","y",1,1,t,r,n,a,c,2),E("x","z","y",1,-1,t,r,-n,a,c,3),E("x","y","z",1,-1,t,n,r,a,l,4),E("x","y","z",-1,-1,t,n,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new ws(h,3)),this.setAttribute("normal",new ws(m,3)),this.setAttribute("uv",new ws(_,2));function E(M,S,x,R,A,b,D,N,U,I,w){const C=b/U,z=D/I,H=b/2,k=D/2,Y=N/2,et=U+1,F=I+1;let X=0,W=0;const yt=new ut;for(let B=0;B<F;B++){const Q=B*z-k;for(let ht=0;ht<et;ht++){const dt=ht*C-H;yt[M]=dt*R,yt[S]=Q*A,yt[x]=Y,h.push(yt.x,yt.y,yt.z),yt[M]=0,yt[S]=0,yt[x]=N>0?1:-1,m.push(yt.x,yt.y,yt.z),_.push(ht/U),_.push(1-B/I),X+=1}}for(let B=0;B<I;B++)for(let Q=0;Q<U;Q++){const ht=v+Q+et*B,dt=v+Q+et*(B+1),K=v+(Q+1)+et*(B+1),ft=v+(Q+1)+et*B;d.push(ht,dt,ft),d.push(dt,K,ft),W+=6}f.addGroup(y,W,w),y+=W,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yo(o){const t={};for(const n in o){t[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=a.clone():Array.isArray(a)?t[n][r]=a.slice():t[n][r]=a}}return t}function Yn(o){const t={};for(let n=0;n<o.length;n++){const r=Yo(o[n]);for(const a in r)t[a]=r[a]}return t}function qA(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function EM(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const WA={clone:Yo,merge:Yn};var YA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Kf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YA,this.fragmentShader=jA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yo(t.uniforms),this.uniformsGroups=qA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class TM extends Vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=kr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ra=new ut,ax=new Ue,sx=new Ue;class Zi extends TM{constructor(t=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $m*2*Math.atan(Math.tan(vp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ra.x,Ra.y).multiplyScalar(-t/Ra.z),Ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ra.x,Ra.y).multiplyScalar(-t/Ra.z)}getViewSize(t,n){return this.getViewBounds(t,ax,sx),n.subVectors(sx,ax)}setViewOffset(t,n,r,a,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(vp*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/d,n-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const To=-90,bo=1;class ZA extends Vi{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zi(To,bo,t,n);a.layers=this.layers,this.add(a);const l=new Zi(To,bo,t,n);l.layers=this.layers,this.add(l);const c=new Zi(To,bo,t,n);c.layers=this.layers,this.add(c);const f=new Zi(To,bo,t,n);f.layers=this.layers,this.add(f);const d=new Zi(To,bo,t,n);d.layers=this.layers,this.add(d);const h=new Zi(To,bo,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,d]=n;for(const h of n)this.remove(h);if(t===kr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===kf)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,a),t.render(n,l),t.setRenderTarget(r,1,a),t.render(n,c),t.setRenderTarget(r,2,a),t.render(n,f),t.setRenderTarget(r,3,a),t.render(n,d),t.setRenderTarget(r,4,a),t.render(n,h),r.texture.generateMipmaps=M,t.setRenderTarget(r,5,a),t.render(n,m),t.setRenderTarget(_,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class bM extends li{constructor(t=[],n=Xo,r,a,l,c,f,d,h,m){super(t,n,r,a,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KA extends Ga{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},a=[r,r,r,r,r,r];this.texture=new bM(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Tu(5,5,5),l=new hr({name:"CubemapFromEquirect",uniforms:Yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:za});l.uniforms.tEquirect.value=n;const c=new Qi(a,l),f=n.minFilter;return n.minFilter===Es&&(n.minFilter=Hi),new ZA(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,r=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,r,a);t.setRenderTarget(l)}}class af extends Vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class Hp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new af,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new af,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new af,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,r),x=this._getHandJoint(h,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,E=.005;h.inputState.pinching&&v>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=n.getPose(t.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new af;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}const Gp=new ut,JA=new ut,$A=new oe;class gs{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,a){return this.normal.set(t,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const a=Gp.subVectors(r,n).cross(JA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Gp),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||$A.getNormalMatrix(t),a=this.coplanarPoint(Gp).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new C_,tR=new Ue(.5,.5),sf=new ut;class AM{constructor(t=new gs,n=new gs,r=new gs,a=new gs,l=new gs,c=new gs){this.planes=[t,n,r,a,l,c]}set(t,n,r,a,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=kr){const r=this.planes,a=t.elements,l=a[0],c=a[1],f=a[2],d=a[3],h=a[4],m=a[5],_=a[6],v=a[7],y=a[8],E=a[9],M=a[10],S=a[11],x=a[12],R=a[13],A=a[14],b=a[15];if(r[0].setComponents(d-l,v-h,S-y,b-x).normalize(),r[1].setComponents(d+l,v+h,S+y,b+x).normalize(),r[2].setComponents(d+c,v+m,S+E,b+R).normalize(),r[3].setComponents(d-c,v-m,S-E,b-R).normalize(),r[4].setComponents(d-f,v-_,S-M,b-A).normalize(),n===kr)r[5].setComponents(d+f,v+_,S+M,b+A).normalize();else if(n===kf)r[5].setComponents(f,_,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const n=tR.distanceTo(t.center);return ds.radius=.7071067811865476+n,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const n=this.planes,r=t.center,a=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(sf.x=a.normal.x>0?t.max.x:t.min.x,sf.y=a.normal.y>0?t.max.y:t.min.y,sf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(sf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RM extends li{constructor(t,n,r=Ds,a,l,c,f=Ji,d=Ji,h,m=vu,_=1){if(m!==vu&&m!==yu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,a,l,c,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new w_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bu extends Os{constructor(t=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:a};const l=t/2,c=n/2,f=Math.floor(r),d=Math.floor(a),h=f+1,m=d+1,_=t/f,v=n/d,y=[],E=[],M=[],S=[];for(let x=0;x<m;x++){const R=x*v-c;for(let A=0;A<h;A++){const b=A*_-l;E.push(b,-R,0),M.push(0,0,1),S.push(A/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<f;R++){const A=R+h*x,b=R+h*(x+1),D=R+1+h*(x+1),N=R+1+h*x;y.push(A,b,N),y.push(b,D,N)}this.setIndex(y),this.setAttribute("position",new ws(E,3)),this.setAttribute("normal",new ws(M,3)),this.setAttribute("uv",new ws(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.width,t.height,t.widthSegments,t.heightSegments)}}class eR extends Kf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nR extends Kf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wM extends TM{constructor(t=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-t,c=r+t,f=a+n,d=a-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class iR extends Zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ox(o,t,n,r){const a=rR(r);switch(n){case cM:return o*t;case hM:return o*t/a.components*a.byteLength;case b_:return o*t/a.components*a.byteLength;case dM:return o*t*2/a.components*a.byteLength;case A_:return o*t*2/a.components*a.byteLength;case fM:return o*t*3/a.components*a.byteLength;case Gi:return o*t*4/a.components*a.byteLength;case R_:return o*t*4/a.components*a.byteLength;case wf:case Cf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Df:case Uf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wm:case Dm:return Math.max(o,16)*Math.max(t,8)/4;case Rm:case Cm:return Math.max(o,8)*Math.max(t,8)/2;case Um:case Lm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Om:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Im:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Bm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case km:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case qm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Wm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ym:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Lf:case jm:case Zm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case pM:case Km:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qm:case Jm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rR(o){switch(o){case Yr:case oM:return{byteLength:1,components:1};case _u:case lM:case Zo:return{byteLength:2,components:1};case E_:case T_:return{byteLength:2,components:4};case Ds:case M_:case Vr:return{byteLength:4,components:1};case uM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CM(){let o=null,t=!1,n=null,r=null;function a(l,c){n(l,c),r=o.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(r=o.requestAnimationFrame(a),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function aR(o){const t=new WeakMap;function n(f,d){const h=f.array,m=f.usage,_=h.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,h){const m=d.array,_=d.updateRanges;if(o.bindBuffer(h,f),_.length===0)o.bufferSubData(h,0,m);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],M=_[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,_[v]=M)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const M=_[y];o.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:c}}var sR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oR=`#ifdef USE_ALPHAHASH
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
#endif`,lR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hR=`#ifdef USE_AOMAP
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
#endif`,dR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pR=`#ifdef USE_BATCHING
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
#endif`,mR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yR=`#ifdef USE_IRIDESCENCE
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
#endif`,xR=`#ifdef USE_BUMPMAP
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
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CR=`#define PI 3.141592653589793
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
} // validated`,DR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UR=`vec3 transformedNormal = objectNormal;
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
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zR="gl_FragColor = linearToOutputTexel( gl_FragColor );",IR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BR=`#ifdef USE_ENVMAP
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
#endif`,FR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
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
#endif`,kR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YR=`#ifdef USE_GRADIENTMAP
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
}`,jR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QR=`uniform bool receiveShadow;
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
#endif`,JR=`#ifdef USE_ENVMAP
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
#endif`,$R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iw=`PhysicalMaterial material;
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
#endif`,rw=`struct PhysicalMaterial {
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
}`,aw=`
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
#endif`,sw=`#if defined( RE_IndirectDiffuse )
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mw=`#if defined( USE_POINTS_UV )
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
#endif`,_w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`#ifdef USE_MORPHTARGETS
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
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ww=`#ifdef USE_NORMALMAP
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
#endif`,Cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
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
}`,qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ww=`#ifdef USE_SKINNING
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
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,Zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$w=`#ifdef USE_TRANSMISSION
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
#endif`,tC=`#ifdef USE_TRANSMISSION
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
#endif`,eC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sC=`uniform sampler2D t2D;
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
}`,oC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fC=`#include <common>
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
}`,hC=`#if DEPTH_PACKING == 3200
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
}`,dC=`#define DISTANCE
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
}`,pC=`#define DISTANCE
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
}`,mC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_C=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`uniform float scale;
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
}`,vC=`uniform vec3 diffuse;
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
}`,yC=`#include <common>
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
}`,xC=`uniform vec3 diffuse;
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
}`,SC=`#define LAMBERT
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
}`,MC=`#define LAMBERT
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
}`,EC=`#define MATCAP
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
}`,TC=`#define MATCAP
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
}`,bC=`#define NORMAL
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
}`,AC=`#define NORMAL
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
}`,RC=`#define PHONG
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
}`,wC=`#define PHONG
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
}`,CC=`#define STANDARD
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
}`,DC=`#define STANDARD
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
}`,UC=`#define TOON
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
}`,LC=`#define TOON
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
}`,OC=`uniform float size;
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
}`,NC=`uniform vec3 diffuse;
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
}`,PC=`#include <common>
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
}`,zC=`uniform vec3 color;
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
}`,IC=`uniform float rotation;
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
}`,BC=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:sR,alphahash_pars_fragment:oR,alphamap_fragment:lR,alphamap_pars_fragment:uR,alphatest_fragment:cR,alphatest_pars_fragment:fR,aomap_fragment:hR,aomap_pars_fragment:dR,batching_pars_vertex:pR,batching_vertex:mR,begin_vertex:_R,beginnormal_vertex:gR,bsdfs:vR,iridescence_fragment:yR,bumpmap_pars_fragment:xR,clipping_planes_fragment:SR,clipping_planes_pars_fragment:MR,clipping_planes_pars_vertex:ER,clipping_planes_vertex:TR,color_fragment:bR,color_pars_fragment:AR,color_pars_vertex:RR,color_vertex:wR,common:CR,cube_uv_reflection_fragment:DR,defaultnormal_vertex:UR,displacementmap_pars_vertex:LR,displacementmap_vertex:OR,emissivemap_fragment:NR,emissivemap_pars_fragment:PR,colorspace_fragment:zR,colorspace_pars_fragment:IR,envmap_fragment:BR,envmap_common_pars_fragment:FR,envmap_pars_fragment:HR,envmap_pars_vertex:GR,envmap_physical_pars_fragment:JR,envmap_vertex:VR,fog_vertex:kR,fog_pars_vertex:XR,fog_fragment:qR,fog_pars_fragment:WR,gradientmap_pars_fragment:YR,lightmap_pars_fragment:jR,lights_lambert_fragment:ZR,lights_lambert_pars_fragment:KR,lights_pars_begin:QR,lights_toon_fragment:$R,lights_toon_pars_fragment:tw,lights_phong_fragment:ew,lights_phong_pars_fragment:nw,lights_physical_fragment:iw,lights_physical_pars_fragment:rw,lights_fragment_begin:aw,lights_fragment_maps:sw,lights_fragment_end:ow,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:uw,logdepthbuf_pars_vertex:cw,logdepthbuf_vertex:fw,map_fragment:hw,map_pars_fragment:dw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:gw,morphinstance_vertex:vw,morphcolor_vertex:yw,morphnormal_vertex:xw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Mw,normal_fragment_begin:Ew,normal_fragment_maps:Tw,normal_pars_fragment:bw,normal_pars_vertex:Aw,normal_vertex:Rw,normalmap_pars_fragment:ww,clearcoat_normal_fragment_begin:Cw,clearcoat_normal_fragment_maps:Dw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Lw,opaque_fragment:Ow,packing:Nw,premultiplied_alpha_fragment:Pw,project_vertex:zw,dithering_fragment:Iw,dithering_pars_fragment:Bw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Vw,shadowmap_vertex:kw,shadowmask_pars_fragment:Xw,skinbase_vertex:qw,skinning_pars_vertex:Ww,skinning_vertex:Yw,skinnormal_vertex:jw,specularmap_fragment:Zw,specularmap_pars_fragment:Kw,tonemapping_fragment:Qw,tonemapping_pars_fragment:Jw,transmission_fragment:$w,transmission_pars_fragment:tC,uv_pars_fragment:eC,uv_pars_vertex:nC,uv_vertex:iC,worldpos_vertex:rC,background_vert:aC,background_frag:sC,backgroundCube_vert:oC,backgroundCube_frag:lC,cube_vert:uC,cube_frag:cC,depth_vert:fC,depth_frag:hC,distanceRGBA_vert:dC,distanceRGBA_frag:pC,equirect_vert:mC,equirect_frag:_C,linedashed_vert:gC,linedashed_frag:vC,meshbasic_vert:yC,meshbasic_frag:xC,meshlambert_vert:SC,meshlambert_frag:MC,meshmatcap_vert:EC,meshmatcap_frag:TC,meshnormal_vert:bC,meshnormal_frag:AC,meshphong_vert:RC,meshphong_frag:wC,meshphysical_vert:CC,meshphysical_frag:DC,meshtoon_vert:UC,meshtoon_frag:LC,points_vert:OC,points_frag:NC,shadow_vert:PC,shadow_frag:zC,sprite_vert:IC,sprite_frag:BC},Ot={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},or={basic:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Yn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Yn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Yn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Yn([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Yn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Yn([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Yn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Yn([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Yn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Yn([Ot.lights,Ot.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};or.physical={uniforms:Yn([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const of={r:0,b:0,g:0},ps=new Ls,FC=new _n;function HC(o,t,n,r,a,l,c){const f=new Re(0);let d=l===!0?0:1,h,m,_=null,v=0,y=null;function E(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?n:t).get(b)),b}function M(A){let b=!1;const D=E(A);D===null?x(f,d):D&&D.isColor&&(x(D,1),b=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(A,b){const D=E(b);D&&(D.isCubeTexture||D.mapping===Zf)?(m===void 0&&(m=new Qi(new Tu(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Yo(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ps.copy(b.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(FC.makeRotationFromEuler(ps)),m.material.toneMapped=Ae.getTransfer(D.colorSpace)!==He,(_!==D||v!==D.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,_=D,v=D.version,y=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Qi(new bu(2,2),new hr({name:"BackgroundMaterial",uniforms:Yo(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(D.colorSpace)!==He,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,_=D,v=D.version,y=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function x(A,b){A.getRGB(of,EM(o)),r.buffers.color.setClear(of.r,of.g,of.b,b,c)}function R(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,b=1){f.set(A),d=b,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,x(f,d)},render:M,addToRenderList:S,dispose:R}}function GC(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,c=!1;function f(C,z,H,k,Y){let et=!1;const F=_(k,H,z);l!==F&&(l=F,h(l.object)),et=y(C,k,H,Y),et&&E(C,k,H,Y),Y!==null&&t.update(Y,o.ELEMENT_ARRAY_BUFFER),(et||c)&&(c=!1,b(C,z,H,k),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function m(C){return o.deleteVertexArray(C)}function _(C,z,H){const k=H.wireframe===!0;let Y=r[C.id];Y===void 0&&(Y={},r[C.id]=Y);let et=Y[z.id];et===void 0&&(et={},Y[z.id]=et);let F=et[k];return F===void 0&&(F=v(d()),et[k]=F),F}function v(C){const z=[],H=[],k=[];for(let Y=0;Y<n;Y++)z[Y]=0,H[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:k,object:C,attributes:{},index:null}}function y(C,z,H,k){const Y=l.attributes,et=z.attributes;let F=0;const X=H.getAttributes();for(const W in X)if(X[W].location>=0){const B=Y[W];let Q=et[W];if(Q===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;F++}return l.attributesNum!==F||l.index!==k}function E(C,z,H,k){const Y={},et=z.attributes;let F=0;const X=H.getAttributes();for(const W in X)if(X[W].location>=0){let B=et[W];B===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),Y[W]=Q,F++}l.attributes=Y,l.attributesNum=F,l.index=k}function M(){const C=l.newAttributes;for(let z=0,H=C.length;z<H;z++)C[z]=0}function S(C){x(C,0)}function x(C,z){const H=l.newAttributes,k=l.enabledAttributes,Y=l.attributeDivisors;H[C]=1,k[C]===0&&(o.enableVertexAttribArray(C),k[C]=1),Y[C]!==z&&(o.vertexAttribDivisor(C,z),Y[C]=z)}function R(){const C=l.newAttributes,z=l.enabledAttributes;for(let H=0,k=z.length;H<k;H++)z[H]!==C[H]&&(o.disableVertexAttribArray(H),z[H]=0)}function A(C,z,H,k,Y,et,F){F===!0?o.vertexAttribIPointer(C,z,H,Y,et):o.vertexAttribPointer(C,z,H,k,Y,et)}function b(C,z,H,k){M();const Y=k.attributes,et=H.getAttributes(),F=z.defaultAttributeValues;for(const X in et){const W=et[X];if(W.location>=0){let yt=Y[X];if(yt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const B=yt.normalized,Q=yt.itemSize,ht=t.get(yt);if(ht===void 0)continue;const dt=ht.buffer,K=ht.type,ft=ht.bytesPerElement,Mt=K===o.INT||K===o.UNSIGNED_INT||yt.gpuType===M_;if(yt.isInterleavedBufferAttribute){const Rt=yt.data,Et=Rt.stride,Zt=yt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)x(W.location+Nt,Rt.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)S(W.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Nt=0;Nt<W.locationSize;Nt++)A(W.location+Nt,Q/W.locationSize,K,B,Et*ft,(Zt+Q/W.locationSize*Nt)*ft,Mt)}else{if(yt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)x(W.location+Rt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)S(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Rt=0;Rt<W.locationSize;Rt++)A(W.location+Rt,Q/W.locationSize,K,B,Q*ft,Q/W.locationSize*Rt*ft,Mt)}}else if(F!==void 0){const B=F[X];if(B!==void 0)switch(B.length){case 2:o.vertexAttrib2fv(W.location,B);break;case 3:o.vertexAttrib3fv(W.location,B);break;case 4:o.vertexAttrib4fv(W.location,B);break;default:o.vertexAttrib1fv(W.location,B)}}}}R()}function D(){I();for(const C in r){const z=r[C];for(const H in z){const k=z[H];for(const Y in k)m(k[Y].object),delete k[Y];delete z[H]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const H in z){const k=z[H];for(const Y in k)m(k[Y].object),delete k[Y];delete z[H]}delete r[C.id]}function U(C){for(const z in r){const H=r[z];if(H[C.id]===void 0)continue;const k=H[C.id];for(const Y in k)m(k[Y].object),delete k[Y];delete H[C.id]}}function I(){w(),c=!0,l!==a&&(l=a,h(l.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function VC(o,t,n){let r;function a(h){r=h}function l(h,m){o.drawArrays(r,h,m),n.update(m,r,1)}function c(h,m,_){_!==0&&(o.drawArraysInstanced(r,h,m,_),n.update(m,r,_))}function f(h,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let y=0;for(let E=0;E<_;E++)y+=m[E];n.update(y,r,1)}function d(h,m,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M]*v[M];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function kC(o,t,n,r){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==Gi&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const I=U===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Yr&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Vr&&!I)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),A=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=E>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:D,maxSamples:N}}function XC(o){const t=this;let n=null,r=0,a=!1,l=!1;const c=new gs,f=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||a;return a=v,r=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=m(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!a||E===null||E.length===0||l&&!S)l?m(null):h();else{const R=l?0:r,A=R*4;let b=x.clippingState||null;d.value=b,b=m(E,v,A,y);for(let D=0;D!==A;++D)b[D]=n[D];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(_,v,y,E){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const x=y+M*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let A=0,b=y;A!==M;++A,b+=4)c.copy(_[A]).applyMatrix4(R,f),c.normal.toArray(S,b),S[b+3]=c.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function qC(o){let t=new WeakMap;function n(c,f){return f===Em?c.mapping=Xo:f===Tm&&(c.mapping=qo),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Em||f===Tm)if(t.has(c)){const d=t.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new KA(d.height);return h.fromEquirectangularTexture(o,c),t.set(c,h),c.addEventListener("dispose",a),n(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const Do=4,lx=[.125,.215,.35,.446,.526,.582],xs=20,Vp=new wM,ux=new Re;let kp=null,Xp=0,qp=0,Wp=!1;const vs=(1+Math.sqrt(5))/2,Ao=1/vs,cx=[new ut(-vs,Ao,0),new ut(vs,Ao,0),new ut(-Ao,0,vs),new ut(Ao,0,vs),new ut(0,vs,-Ao),new ut(0,vs,Ao),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],WC=new ut;class fx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,a=100,l={}){const{size:c=256,position:f=WC}=l;kp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,a,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kp,Xp,qp),this._renderer.xr.enabled=Wp,t.scissorTest=!1,lf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Xo||t.mapping===qo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:Zo,format:Gi,colorSpace:Wo,depthBuffer:!1},a=hx(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hx(t,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YC(l)),this._blurMaterial=jC(l,t,n)}return a}_compileMaterial(t){const n=new Qi(this._lodPlanes[0],t);this._renderer.compile(n,Vp)}_sceneToCubeUV(t,n,r,a,l){const d=new Zi(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(ux),_.toneMapping=Ia,_.autoClear=!1;const E=new xM({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),M=new Qi(new Tu,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(ux),S=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[R],l.y,l.z)):A===1?(d.up.set(0,0,h[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[R],l.z)):(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[R]));const b=this._cubeSize;lf(a,A*b,R>2?b:0,b,b),_.setRenderTarget(a),S&&_.render(M,d),_.render(t,d)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,a=t.mapping===Xo||t.mapping===qo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=px()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dx());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Qi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;lf(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(c,Vp)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=cx[(a-l-1)%cx.length];this._blur(t,l-1,l,c,f)}n.autoClear=r}_blur(t,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,r,a,"latitudinal",l),this._halfBlur(c,t,r,r,a,"longitudinal",l)}_halfBlur(t,n,r,a,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Qi(this._lodPlanes[a],h),v=h.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*xs-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):xs;S>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const x=[];let R=0;for(let U=0;U<xs;++U){const I=U/M,w=Math.exp(-I*I/2);x.push(w),U===0?R+=w:U<S&&(R+=2*w)}for(let U=0;U<x.length;U++)x[U]=x[U]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:A}=this;v.dTheta.value=E,v.mipInt.value=A-r;const b=this._sizeLods[a],D=3*b*(a>A-Do?a-A+Do:0),N=4*(this._cubeSize-b);lf(n,D,N,3*b,2*b),d.setRenderTarget(n),d.render(_,Vp)}}function YC(o){const t=[],n=[],r=[];let a=o;const l=o-Do+1+lx.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let d=1/f;c>o-Do?d=lx[c-o+Do-1]:c===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,M=3,S=2,x=1,R=new Float32Array(M*E*y),A=new Float32Array(S*E*y),b=new Float32Array(x*E*y);for(let N=0;N<y;N++){const U=N%3*2/3-1,I=N>2?0:-1,w=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];R.set(w,M*E*N),A.set(v,S*E*N);const C=[N,N,N,N,N,N];b.set(C,x*E*N)}const D=new Os;D.setAttribute("position",new cr(R,M)),D.setAttribute("uv",new cr(A,S)),D.setAttribute("faceIndex",new cr(b,x)),t.push(D),a>Do&&a--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function hx(o,t,n){const r=new Ga(o,t,n);return r.texture.mapping=Zf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lf(o,t,n,r,a){o.viewport.set(t,n,r,a),o.scissor.set(t,n,r,a)}function jC(o,t,n){const r=new Float32Array(xs),a=new ut(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:D_(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function dx(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:D_(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function px(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:D_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function D_(){return`

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
	`}function ZC(o){let t=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===Em||d===Tm,m=d===Xo||d===qo;if(h||m){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new fx(o)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&a(y)?(n===null&&(n=new fx(o)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function KC(o){const t={};function n(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return t[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Po("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function QC(o,t,n,r){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let A=0,b=R.length;A<b;A+=3){const D=R[A+0],N=R[A+1],U=R[A+2];v.push(D,N,N,U,U,D)}}else if(E!==void 0){const R=E.array;M=E.version;for(let A=0,b=R.length/3-1;A<b;A+=3){const D=A+0,N=A+1,U=A+2;v.push(D,N,N,U,U,D)}}else return;const S=new(_M(v)?MM:SM)(v,1);S.version=M;const x=l.get(_);x&&t.remove(x),l.set(_,S)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function JC(o,t,n){let r;function a(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,y){o.drawElements(r,y,l,v*c),n.update(y,r,1)}function h(v,y,E){E!==0&&(o.drawElementsInstanced(r,y,l,v*c,E),n.update(y,r,E))}function m(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,r,1)}function _(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,v,0,M,0,E);let x=0;for(let R=0;R<E;R++)x+=y[R]*M[R];n.update(x,r,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function $C(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:r}}function t2(o,t,n){const r=new WeakMap,a=new un;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let C=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let D=f.attributes.position.count*b,N=1;D>t.maxTextureSize&&(N=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const U=new Float32Array(D*N*4*_),I=new gM(U,D,N,_);I.type=Vr,I.needsUpdate=!0;const w=b*4;for(let z=0;z<_;z++){const H=x[z],k=R[z],Y=A[z],et=D*N*4*z;for(let F=0;F<H.count;F++){const X=F*w;E===!0&&(a.fromBufferAttribute(H,F),U[et+X+0]=a.x,U[et+X+1]=a.y,U[et+X+2]=a.z,U[et+X+3]=0),M===!0&&(a.fromBufferAttribute(k,F),U[et+X+4]=a.x,U[et+X+5]=a.y,U[et+X+6]=a.z,U[et+X+7]=0),S===!0&&(a.fromBufferAttribute(Y,F),U[et+X+8]=a.x,U[et+X+9]=a.y,U[et+X+10]=a.z,U[et+X+11]=Y.itemSize===4?a.w:1)}}v={count:_,texture:I,size:new Ue(D,N)},r.set(f,v),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function e2(o,t,n,r){let a=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,_=t.get(d,m);if(a.get(_)!==h&&(t.update(_),a.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==h&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return _}function c(){a=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:c}}const DM=new li,mx=new RM(1,1),UM=new gM,LM=new LA,OM=new bM,_x=[],gx=[],vx=new Float32Array(16),yx=new Float32Array(9),xx=new Float32Array(4);function Qo(o,t,n){const r=o[0];if(r<=0||r>0)return o;const a=t*n;let l=_x[a];if(l===void 0&&(l=new Float32Array(a),_x[a]=l),t!==0){r.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Sn(o,t){if(o.length!==t.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==t[n])return!1;return!0}function Mn(o,t){for(let n=0,r=t.length;n<r;n++)o[n]=t[n]}function Qf(o,t){let n=gx[t];n===void 0&&(n=new Int32Array(t),gx[t]=n);for(let r=0;r!==t;++r)n[r]=o.allocateTextureUnit();return n}function n2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function i2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2fv(this.addr,t),Mn(n,t)}}function r2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;o.uniform3fv(this.addr,t),Mn(n,t)}}function a2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4fv(this.addr,t),Mn(n,t)}}function s2(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;xx.set(r),o.uniformMatrix2fv(this.addr,!1,xx),Mn(n,r)}}function o2(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;yx.set(r),o.uniformMatrix3fv(this.addr,!1,yx),Mn(n,r)}}function l2(o,t){const n=this.cache,r=t.elements;if(r===void 0){if(Sn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,r))return;vx.set(r),o.uniformMatrix4fv(this.addr,!1,vx),Mn(n,r)}}function u2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function c2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2iv(this.addr,t),Mn(n,t)}}function f2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3iv(this.addr,t),Mn(n,t)}}function h2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4iv(this.addr,t),Mn(n,t)}}function d2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function p2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;o.uniform2uiv(this.addr,t),Mn(n,t)}}function m2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;o.uniform3uiv(this.addr,t),Mn(n,t)}}function _2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;o.uniform4uiv(this.addr,t),Mn(n,t)}}function g2(o,t,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let l;this.type===o.SAMPLER_2D_SHADOW?(mx.compareFunction=mM,l=mx):l=DM,n.setTexture2D(t||l,a)}function v2(o,t,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(t||LM,a)}function y2(o,t,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(t||OM,a)}function x2(o,t,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(t||UM,a)}function S2(o){switch(o){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return a2;case 35674:return s2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return u2;case 35667:case 35671:return c2;case 35668:case 35672:return f2;case 35669:case 35673:return h2;case 5125:return d2;case 36294:return p2;case 36295:return m2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return x2}}function M2(o,t){o.uniform1fv(this.addr,t)}function E2(o,t){const n=Qo(t,this.size,2);o.uniform2fv(this.addr,n)}function T2(o,t){const n=Qo(t,this.size,3);o.uniform3fv(this.addr,n)}function b2(o,t){const n=Qo(t,this.size,4);o.uniform4fv(this.addr,n)}function A2(o,t){const n=Qo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function R2(o,t){const n=Qo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function w2(o,t){const n=Qo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function C2(o,t){o.uniform1iv(this.addr,t)}function D2(o,t){o.uniform2iv(this.addr,t)}function U2(o,t){o.uniform3iv(this.addr,t)}function L2(o,t){o.uniform4iv(this.addr,t)}function O2(o,t){o.uniform1uiv(this.addr,t)}function N2(o,t){o.uniform2uiv(this.addr,t)}function P2(o,t){o.uniform3uiv(this.addr,t)}function z2(o,t){o.uniform4uiv(this.addr,t)}function I2(o,t,n){const r=this.cache,a=t.length,l=Qf(n,a);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==a;++c)n.setTexture2D(t[c]||DM,l[c])}function B2(o,t,n){const r=this.cache,a=t.length,l=Qf(n,a);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(t[c]||LM,l[c])}function F2(o,t,n){const r=this.cache,a=t.length,l=Qf(n,a);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(t[c]||OM,l[c])}function H2(o,t,n){const r=this.cache,a=t.length,l=Qf(n,a);Sn(r,l)||(o.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(t[c]||UM,l[c])}function G2(o){switch(o){case 5126:return M2;case 35664:return E2;case 35665:return T2;case 35666:return b2;case 35674:return A2;case 35675:return R2;case 35676:return w2;case 5124:case 35670:return C2;case 35667:case 35671:return D2;case 35668:case 35672:return U2;case 35669:case 35673:return L2;case 5125:return O2;case 36294:return N2;case 36295:return P2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return H2}}class V2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=S2(n.type)}}class k2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=G2(n.type)}}class X2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(t,n[f.id],r)}}}const Yp=/(\w+)(\])?(\[|\.)?/g;function Sx(o,t){o.seq.push(t),o.map[t.id]=t}function q2(o,t,n){const r=o.name,a=r.length;for(Yp.lastIndex=0;;){const l=Yp.exec(r),c=Yp.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){Sx(n,h===void 0?new V2(f,o,t):new k2(f,o,t));break}else{let _=n.map[f];_===void 0&&(_=new X2(f),Sx(n,_)),n=_}}}class Of{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=t.getActiveUniform(n,a),c=t.getUniformLocation(n,l.name);q2(l,c,this)}}setValue(t,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(t,r,a)}setOptional(t,n,r){const a=n[r];a!==void 0&&this.setValue(t,r,a)}static upload(t,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,a)}}static seqWithValue(t,n){const r=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in n&&r.push(c)}return r}}function Mx(o,t,n){const r=o.createShader(t);return o.shaderSource(r,n),o.compileShader(r),r}const W2=37297;let Y2=0;function j2(o,t){const n=o.split(`
`),r=[],a=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Ex=new oe;function Z2(o){Ae._getMatrix(Ex,Ae.workingColorSpace,o);const t=`mat3( ${Ex.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Vf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Tx(o,t,n){const r=o.getShaderParameter(t,o.COMPILE_STATUS),a=o.getShaderInfoLog(t).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+j2(o.getShaderSource(t),c)}else return a}function K2(o,t){const n=Z2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Q2(o,t){let n;switch(t){case iA:n="Linear";break;case rA:n="Reinhard";break;case aA:n="Cineon";break;case sA:n="ACESFilmic";break;case lA:n="AgX";break;case uA:n="Neutral";break;case oA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const uf=new ut;function J2(){Ae.getLuminanceCoefficients(uf);const o=uf.x.toFixed(4),t=uf.y.toFixed(4),n=uf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(iu).join(`
`)}function tD(o){const t=[];for(const n in o){const r=o[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function eD(o,t){const n={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=o.getActiveAttrib(t,a),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function iu(o){return o!==""}function bx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ax(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nD=/^[ \t]*#include +<([\w\d./]+)>/gm;function t_(o){return o.replace(nD,rD)}const iD=new Map;function rD(o,t){let n=ue[t];if(n===void 0){const r=iD.get(t);if(r!==void 0)n=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return t_(n)}const aD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(aD,sD)}function sD(o,t,n,r){let a="";for(let l=parseInt(t);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function wx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function oD(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rM?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===z1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Br&&(t="SHADOWMAP_TYPE_VSM"),t}function lD(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Xo:case qo:t="ENVMAP_TYPE_CUBE";break;case Zf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uD(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case qo:t="ENVMAP_MODE_REFRACTION";break}return t}function cD(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case aM:t="ENVMAP_BLENDING_MULTIPLY";break;case eA:t="ENVMAP_BLENDING_MIX";break;case nA:t="ENVMAP_BLENDING_ADD";break}return t}function fD(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function hD(o,t,n,r){const a=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=oD(n),h=lD(n),m=uD(n),_=cD(n),v=fD(n),y=$2(n),E=tD(l),M=a.createProgram();let S,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(iu).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(iu).join(`
`),x.length>0&&(x+=`
`)):(S=[wx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(iu).join(`
`),x=[wx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ia?"#define TONE_MAPPING":"",n.toneMapping!==Ia?ue.tonemapping_pars_fragment:"",n.toneMapping!==Ia?Q2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,K2("linearToOutputTexel",n.outputColorSpace),J2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(iu).join(`
`)),c=t_(c),c=bx(c,n),c=Ax(c,n),f=t_(f),f=bx(f,n),f=Ax(f,n),c=Rx(c),f=Rx(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===ky?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ky?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=R+S+c,b=R+x+f,D=Mx(a,a.VERTEX_SHADER,A),N=Mx(a,a.FRAGMENT_SHADER,b);a.attachShader(M,D),a.attachShader(M,N),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function U(z){if(o.debug.checkShaderErrors){const H=a.getProgramInfoLog(M).trim(),k=a.getShaderInfoLog(D).trim(),Y=a.getShaderInfoLog(N).trim();let et=!0,F=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,M,D,N);else{const X=Tx(a,D,"vertex"),W=Tx(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+H+`
`+X+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Y==="")&&(F=!1);F&&(z.diagnostics={runnable:et,programLog:H,vertexShader:{log:k,prefix:S},fragmentShader:{log:Y,prefix:x}})}a.deleteShader(D),a.deleteShader(N),I=new Of(a,M),w=eD(a,M)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(M,W2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=N,this}let dD=0;class pD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new mD(t),n.set(t,r)),r}}class mD{constructor(t){this.id=dD++,this.code=t,this.usedTimes=0}}function _D(o,t,n,r,a,l,c){const f=new vM,d=new pD,h=new Set,m=[],_=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,C,z,H,k){const Y=H.fog,et=k.geometry,F=w.isMeshStandardMaterial?H.environment:null,X=(w.isMeshStandardMaterial?n:t).get(w.envMap||F),W=X&&X.mapping===Zf?X.image.height:null,yt=E[w.type];w.precision!==null&&(y=a.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const B=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Q=B!==void 0?B.length:0;let ht=0;et.morphAttributes.position!==void 0&&(ht=1),et.morphAttributes.normal!==void 0&&(ht=2),et.morphAttributes.color!==void 0&&(ht=3);let dt,K,ft,Mt;if(yt){const Te=or[yt];dt=Te.vertexShader,K=Te.fragmentShader}else dt=w.vertexShader,K=w.fragmentShader,d.update(w),ft=d.getVertexShaderID(w),Mt=d.getFragmentShaderID(w);const Rt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Zt=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,Se=!!w.map,Le=!!w.matcap,_e=!!X,q=!!w.aoMap,Ln=!!w.lightMap,Ee=!!w.bumpMap,de=!!w.normalMap,kt=!!w.displacementMap,ge=!!w.emissiveMap,Kt=!!w.metalnessMap,ae=!!w.roughnessMap,an=w.anisotropy>0,G=w.clearcoat>0,L=w.dispersion>0,rt=w.iridescence>0,_t=w.sheen>0,vt=w.transmission>0,ct=an&&!!w.anisotropyMap,zt=G&&!!w.clearcoatMap,Ut=G&&!!w.clearcoatNormalMap,Vt=G&&!!w.clearcoatRoughnessMap,Xt=rt&&!!w.iridescenceMap,Tt=rt&&!!w.iridescenceThicknessMap,It=_t&&!!w.sheenColorMap,Yt=_t&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Ct=!!w.specularColorMap,re=!!w.specularIntensityMap,Z=vt&&!!w.transmissionMap,Lt=vt&&!!w.thicknessMap,bt=!!w.gradientMap,Bt=!!w.alphaMap,wt=w.alphaTest>0,St=!!w.alphaHash,Ht=!!w.extensions;let ie=Ia;w.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Oe={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:dt,fragmentShader:K,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&k.instanceColor!==null,instancingMorph:Zt&&k.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Wo,alphaToCoverage:!!w.alphaToCoverage,map:Se,matcap:Le,envMap:_e,envMapMode:_e&&X.mapping,envMapCubeUVHeight:W,aoMap:q,lightMap:Ln,bumpMap:Ee,normalMap:de,displacementMap:v&&kt,emissiveMap:ge,normalMapObjectSpace:de&&w.normalMapType===pA,normalMapTangentSpace:de&&w.normalMapType===dA,metalnessMap:Kt,roughnessMap:ae,anisotropy:an,anisotropyMap:ct,clearcoat:G,clearcoatMap:zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Vt,dispersion:L,iridescence:rt,iridescenceMap:Xt,iridescenceThicknessMap:Tt,sheen:_t,sheenColorMap:It,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:re,transmission:vt,transmissionMap:Z,thicknessMap:Lt,gradientMap:bt,opaque:w.transparent===!1&&w.blending===No&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:wt,alphaHash:St,combine:w.combine,mapUv:Se&&M(w.map.channel),aoMapUv:q&&M(w.aoMap.channel),lightMapUv:Ln&&M(w.lightMap.channel),bumpMapUv:Ee&&M(w.bumpMap.channel),normalMapUv:de&&M(w.normalMap.channel),displacementMapUv:kt&&M(w.displacementMap.channel),emissiveMapUv:ge&&M(w.emissiveMap.channel),metalnessMapUv:Kt&&M(w.metalnessMap.channel),roughnessMapUv:ae&&M(w.roughnessMap.channel),anisotropyMapUv:ct&&M(w.anisotropyMap.channel),clearcoatMapUv:zt&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(w.sheenRoughnessMap.channel),specularMapUv:jt&&M(w.specularMap.channel),specularColorMapUv:Ct&&M(w.specularColorMap.channel),specularIntensityMapUv:re&&M(w.specularIntensityMap.channel),transmissionMapUv:Z&&M(w.transmissionMap.channel),thicknessMapUv:Lt&&M(w.thicknessMap.channel),alphaMapUv:Bt&&M(w.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(de||an),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!et.attributes.uv&&(Se||Bt),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Et,skinning:k.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ht,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Se&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===He,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gr,flipSided:w.side===oi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=h.has(1),Oe.vertexUv2s=h.has(2),Oe.vertexUv3s=h.has(3),h.clear(),Oe}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)C.push(z),C.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(R(C,w),A(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function R(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function A(w,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),w.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),w.push(f.mask)}function b(w){const C=E[w.type];let z;if(C){const H=or[C];z=WA.clone(H.uniforms)}else z=w.uniforms;return z}function D(w,C){let z;for(let H=0,k=m.length;H<k;H++){const Y=m[H];if(Y.cacheKey===C){z=Y,++z.usedTimes;break}}return z===void 0&&(z=new hD(o,C,w,l),m.push(z)),z}function N(w){if(--w.usedTimes===0){const C=m.indexOf(w);m[C]=m[m.length-1],m.pop(),w.destroy()}}function U(w){d.remove(w)}function I(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:D,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:I}}function gD(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function r(c){o.delete(c)}function a(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:n,remove:r,update:a,dispose:l}}function vD(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Cx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Dx(){const o=[];let t=0;const n=[],r=[],a=[];function l(){t=0,n.length=0,r.length=0,a.length=0}function c(_,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:S},o[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=S),t++,x}function f(_,v,y,E,M,S){const x=c(_,v,y,E,M,S);y.transmission>0?r.push(x):y.transparent===!0?a.push(x):n.push(x)}function d(_,v,y,E,M,S){const x=c(_,v,y,E,M,S);y.transmission>0?r.unshift(x):y.transparent===!0?a.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||vD),r.length>1&&r.sort(v||Cx),a.length>1&&a.sort(v||Cx)}function m(){for(let _=t,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:d,finish:m,sort:h}}function yD(){let o=new WeakMap;function t(r,a){const l=o.get(r);let c;return l===void 0?(c=new Dx,o.set(r,[c])):a>=l.length?(c=new Dx,l.push(c)):c=l[a],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function xD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Re};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function SD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let MD=0;function ED(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function TD(o){const t=new xD,n=SD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ut);const a=new ut,l=new _n,c=new _n;function f(h){let m=0,_=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,R=0,A=0,b=0,D=0,N=0,U=0;h.sort(ED);for(let w=0,C=h.length;w<C;w++){const z=h[w],H=z.color,k=z.intensity,Y=z.distance,et=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=H.r*k,_+=H.g*k,v+=H.b*k;else if(z.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(z.sh.coefficients[F],k);U++}else if(z.isDirectionalLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,W=n.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=et,r.directionalShadowMatrix[y]=z.shadow.matrix,R++}r.directional[y]=F,y++}else if(z.isSpotLight){const F=t.get(z);F.position.setFromMatrixPosition(z.matrixWorld),F.color.copy(H).multiplyScalar(k),F.distance=Y,F.coneCos=Math.cos(z.angle),F.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),F.decay=z.decay,r.spot[M]=F;const X=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,X.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[M]=X.matrix,z.castShadow){const W=n.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,r.spotShadow[M]=W,r.spotShadowMap[M]=et,b++}M++}else if(z.isRectAreaLight){const F=t.get(z);F.color.copy(H).multiplyScalar(k),F.halfWidth.set(z.width*.5,0,0),F.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=F,S++}else if(z.isPointLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),F.distance=z.distance,F.decay=z.decay,z.castShadow){const X=z.shadow,W=n.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=et,r.pointShadowMatrix[E]=z.shadow.matrix,A++}r.point[E]=F,E++}else if(z.isHemisphereLight){const F=t.get(z);F.skyColor.copy(z.color).multiplyScalar(k),F.groundColor.copy(z.groundColor).multiplyScalar(k),r.hemi[x]=F,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=v;const I=r.hash;(I.directionalLength!==y||I.pointLength!==E||I.spotLength!==M||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==R||I.numPointShadows!==A||I.numSpotShadows!==b||I.numSpotMaps!==D||I.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=M,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+D-N,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=U,I.directionalLength=y,I.pointLength=E,I.spotLength=M,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=R,I.numPointShadows=A,I.numSpotShadows=b,I.numSpotMaps=D,I.numLightProbes=U,r.version=MD++)}function d(h,m){let _=0,v=0,y=0,E=0,M=0;const S=m.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const A=h[x];if(A.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),_++}else if(A.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),y++}else if(A.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(A.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(A.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(S),v++}else if(A.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:r}}function Ux(o){const t=new TD(o),n=[],r=[];function a(m){h.camera=m,n.length=0,r.length=0}function l(m){n.push(m)}function c(m){r.push(m)}function f(){t.setup(n)}function d(m){t.setupView(n,m)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function bD(o){let t=new WeakMap;function n(a,l=0){const c=t.get(a);let f;return c===void 0?(f=new Ux(o),t.set(a,[f])):l>=c.length?(f=new Ux(o),c.push(f)):f=c[l],f}function r(){t=new WeakMap}return{get:n,dispose:r}}const AD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RD=`uniform sampler2D shadow_pass;
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
}`;function wD(o,t,n){let r=new AM;const a=new Ue,l=new Ue,c=new un,f=new eR({depthPacking:hA}),d=new nR,h={},m=n.maxTextureSize,_={[Ha]:oi,[oi]:Ha,[Gr]:Gr},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:AD,fragmentShader:RD}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Os;E.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rM;let x=this.type;this.render=function(N,U,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),H=o.state;H.setBlending(za),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=x!==Br&&this.type===Br,Y=x===Br&&this.type!==Br;for(let et=0,F=N.length;et<F;et++){const X=N[et],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const yt=W.getFrameExtents();if(a.multiply(yt),l.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/yt.x),a.x=l.x*yt.x,W.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/yt.y),a.y=l.y*yt.y,W.mapSize.y=l.y)),W.map===null||k===!0||Y===!0){const Q=this.type!==Br?{minFilter:Ji,magFilter:Ji}:{};W.map!==null&&W.map.dispose(),W.map=new Ga(a.x,a.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const B=W.getViewportCount();for(let Q=0;Q<B;Q++){const ht=W.getViewport(Q);c.set(l.x*ht.x,l.y*ht.y,l.x*ht.z,l.y*ht.w),H.viewport(c),W.updateMatrices(X,Q),r=W.getFrustum(),b(U,I,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Br&&R(W,I),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(w,C,z)};function R(N,U){const I=t.update(M);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ga(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(U,null,I,v,M,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(U,null,I,y,M,null)}function A(N,U,I,w){let C=null;const z=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)C=z;else if(C=I.isPointLight===!0?d:f,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const H=C.uuid,k=U.uuid;let Y=h[H];Y===void 0&&(Y={},h[H]=Y);let et=Y[k];et===void 0&&(et=C.clone(),Y[k]=et,U.addEventListener("dispose",D)),C=et}if(C.visible=U.visible,C.wireframe=U.wireframe,w===Br?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:_[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const H=o.properties.get(C);H.light=I}return C}function b(N,U,I,w,C){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Br)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const k=t.update(N),Y=N.material;if(Array.isArray(Y)){const et=k.groups;for(let F=0,X=et.length;F<X;F++){const W=et[F],yt=Y[W.materialIndex];if(yt&&yt.visible){const B=A(N,yt,w,C);N.onBeforeShadow(o,N,U,I,k,B,W),o.renderBufferDirect(I,null,k,B,N,W),N.onAfterShadow(o,N,U,I,k,B,W)}}}else if(Y.visible){const et=A(N,Y,w,C);N.onBeforeShadow(o,N,U,I,k,et,null),o.renderBufferDirect(I,null,k,et,N,null),N.onAfterShadow(o,N,U,I,k,et,null)}}const H=N.children;for(let k=0,Y=H.length;k<Y;k++)b(H[k],U,I,w,C)}function D(N){N.target.removeEventListener("dispose",D);for(const I in h){const w=h[I],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const CD={[_m]:gm,[vm]:Sm,[ym]:Mm,[ko]:xm,[gm]:_m,[Sm]:vm,[Mm]:ym,[xm]:ko};function DD(o,t){function n(){let Z=!1;const Lt=new un;let bt=null;const Bt=new un(0,0,0,0);return{setMask:function(wt){bt!==wt&&!Z&&(o.colorMask(wt,wt,wt,wt),bt=wt)},setLocked:function(wt){Z=wt},setClear:function(wt,St,Ht,ie,Oe){Oe===!0&&(wt*=ie,St*=ie,Ht*=ie),Lt.set(wt,St,Ht,ie),Bt.equals(Lt)===!1&&(o.clearColor(wt,St,Ht,ie),Bt.copy(Lt))},reset:function(){Z=!1,bt=null,Bt.set(-1,0,0,0)}}}function r(){let Z=!1,Lt=!1,bt=null,Bt=null,wt=null;return{setReversed:function(St){if(Lt!==St){const Ht=t.get("EXT_clip_control");St?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Lt=St;const ie=wt;wt=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(St){St?Rt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(St){bt!==St&&!Z&&(o.depthMask(St),bt=St)},setFunc:function(St){if(Lt&&(St=CD[St]),Bt!==St){switch(St){case _m:o.depthFunc(o.NEVER);break;case gm:o.depthFunc(o.ALWAYS);break;case vm:o.depthFunc(o.LESS);break;case ko:o.depthFunc(o.LEQUAL);break;case ym:o.depthFunc(o.EQUAL);break;case xm:o.depthFunc(o.GEQUAL);break;case Sm:o.depthFunc(o.GREATER);break;case Mm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=St}},setLocked:function(St){Z=St},setClear:function(St){wt!==St&&(Lt&&(St=1-St),o.clearDepth(St),wt=St)},reset:function(){Z=!1,bt=null,Bt=null,wt=null,Lt=!1}}}function a(){let Z=!1,Lt=null,bt=null,Bt=null,wt=null,St=null,Ht=null,ie=null,Oe=null;return{setTest:function(Te){Z||(Te?Rt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!Z&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,ci,En){(bt!==Te||Bt!==ci||wt!==En)&&(o.stencilFunc(Te,ci,En),bt=Te,Bt=ci,wt=En)},setOp:function(Te,ci,En){(St!==Te||Ht!==ci||ie!==En)&&(o.stencilOp(Te,ci,En),St=Te,Ht=ci,ie=En)},setLocked:function(Te){Z=Te},setClear:function(Te){Oe!==Te&&(o.clearStencil(Te),Oe=Te)},reset:function(){Z=!1,Lt=null,bt=null,Bt=null,wt=null,St=null,Ht=null,ie=null,Oe=null}}}const l=new n,c=new r,f=new a,d=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,A=null,b=null,D=null,N=null,U=new Re(0,0,0),I=0,w=!1,C=null,z=null,H=null,k=null,Y=null;const et=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=X>=2);let yt=null,B={};const Q=o.getParameter(o.SCISSOR_BOX),ht=o.getParameter(o.VIEWPORT),dt=new un().fromArray(Q),K=new un().fromArray(ht);function ft(Z,Lt,bt,Bt){const wt=new Uint8Array(4),St=o.createTexture();o.bindTexture(Z,St),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<bt;Ht++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return St}const Mt={};Mt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Rt(o.DEPTH_TEST),c.setFunc(ko),Ee(!1),de(Iy),Rt(o.CULL_FACE),q(za);function Rt(Z){m[Z]!==!0&&(o.enable(Z),m[Z]=!0)}function Et(Z){m[Z]!==!1&&(o.disable(Z),m[Z]=!1)}function Zt(Z,Lt){return _[Z]!==Lt?(o.bindFramebuffer(Z,Lt),_[Z]=Lt,Z===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),Z===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Nt(Z,Lt){let bt=y,Bt=!1;if(Z){bt=v.get(Lt),bt===void 0&&(bt=[],v.set(Lt,bt));const wt=Z.textures;if(bt.length!==wt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Ht=wt.length;St<Ht;St++)bt[St]=o.COLOR_ATTACHMENT0+St;bt.length=wt.length,Bt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(bt)}function Se(Z){return E!==Z?(o.useProgram(Z),E=Z,!0):!1}const Le={[ys]:o.FUNC_ADD,[B1]:o.FUNC_SUBTRACT,[F1]:o.FUNC_REVERSE_SUBTRACT};Le[H1]=o.MIN,Le[G1]=o.MAX;const _e={[V1]:o.ZERO,[k1]:o.ONE,[X1]:o.SRC_COLOR,[pm]:o.SRC_ALPHA,[K1]:o.SRC_ALPHA_SATURATE,[j1]:o.DST_COLOR,[W1]:o.DST_ALPHA,[q1]:o.ONE_MINUS_SRC_COLOR,[mm]:o.ONE_MINUS_SRC_ALPHA,[Z1]:o.ONE_MINUS_DST_COLOR,[Y1]:o.ONE_MINUS_DST_ALPHA,[Q1]:o.CONSTANT_COLOR,[J1]:o.ONE_MINUS_CONSTANT_COLOR,[$1]:o.CONSTANT_ALPHA,[tA]:o.ONE_MINUS_CONSTANT_ALPHA};function q(Z,Lt,bt,Bt,wt,St,Ht,ie,Oe,Te){if(Z===za){M===!0&&(Et(o.BLEND),M=!1);return}if(M===!1&&(Rt(o.BLEND),M=!0),Z!==I1){if(Z!==S||Te!==w){if((x!==ys||b!==ys)&&(o.blendEquation(o.FUNC_ADD),x=ys,b=ys),Te)switch(Z){case No:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case By:o.blendFunc(o.ONE,o.ONE);break;case Fy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case No:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case By:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Fy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}R=null,A=null,D=null,N=null,U.set(0,0,0),I=0,S=Z,w=Te}return}wt=wt||Lt,St=St||bt,Ht=Ht||Bt,(Lt!==x||wt!==b)&&(o.blendEquationSeparate(Le[Lt],Le[wt]),x=Lt,b=wt),(bt!==R||Bt!==A||St!==D||Ht!==N)&&(o.blendFuncSeparate(_e[bt],_e[Bt],_e[St],_e[Ht]),R=bt,A=Bt,D=St,N=Ht),(ie.equals(U)===!1||Oe!==I)&&(o.blendColor(ie.r,ie.g,ie.b,Oe),U.copy(ie),I=Oe),S=Z,w=!1}function Ln(Z,Lt){Z.side===Gr?Et(o.CULL_FACE):Rt(o.CULL_FACE);let bt=Z.side===oi;Lt&&(bt=!bt),Ee(bt),Z.blending===No&&Z.transparent===!1?q(za):q(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),c.setFunc(Z.depthFunc),c.setTest(Z.depthTest),c.setMask(Z.depthWrite),l.setMask(Z.colorWrite);const Bt=Z.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(Z.stencilWriteMask),f.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),f.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ge(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(Z){C!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),C=Z)}function de(Z){Z!==N1?(Rt(o.CULL_FACE),Z!==z&&(Z===Iy?o.cullFace(o.BACK):Z===P1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),z=Z}function kt(Z){Z!==H&&(F&&o.lineWidth(Z),H=Z)}function ge(Z,Lt,bt){Z?(Rt(o.POLYGON_OFFSET_FILL),(k!==Lt||Y!==bt)&&(o.polygonOffset(Lt,bt),k=Lt,Y=bt)):Et(o.POLYGON_OFFSET_FILL)}function Kt(Z){Z?Rt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function ae(Z){Z===void 0&&(Z=o.TEXTURE0+et-1),yt!==Z&&(o.activeTexture(Z),yt=Z)}function an(Z,Lt,bt){bt===void 0&&(yt===null?bt=o.TEXTURE0+et-1:bt=yt);let Bt=B[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},B[bt]=Bt),(Bt.type!==Z||Bt.texture!==Lt)&&(yt!==bt&&(o.activeTexture(bt),yt=bt),o.bindTexture(Z,Lt||Mt[Z]),Bt.type=Z,Bt.texture=Lt)}function G(){const Z=B[yt];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function L(){try{o.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _t(){try{o.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function vt(){try{o.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(){try{o.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Vt(){try{o.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Xt(){try{o.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Tt(){try{o.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function It(Z){dt.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),dt.copy(Z))}function Yt(Z){K.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),K.copy(Z))}function jt(Z,Lt){let bt=h.get(Lt);bt===void 0&&(bt=new WeakMap,h.set(Lt,bt));let Bt=bt.get(Z);Bt===void 0&&(Bt=o.getUniformBlockIndex(Lt,Z.name),bt.set(Z,Bt))}function Ct(Z,Lt){const Bt=h.get(Lt).get(Z);d.get(Lt)!==Bt&&(o.uniformBlockBinding(Lt,Bt,Z.__bindingPointIndex),d.set(Lt,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},yt=null,B={},_={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,A=null,b=null,D=null,N=null,U=new Re(0,0,0),I=0,w=!1,C=null,z=null,H=null,k=null,Y=null,dt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Rt,disable:Et,bindFramebuffer:Zt,drawBuffers:Nt,useProgram:Se,setBlending:q,setMaterial:Ln,setFlipSided:Ee,setCullFace:de,setLineWidth:kt,setPolygonOffset:ge,setScissorTest:Kt,activeTexture:ae,bindTexture:an,unbindTexture:G,compressedTexImage2D:L,compressedTexImage3D:rt,texImage2D:Xt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Vt,texSubImage2D:_t,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:It,viewport:Yt,reset:re}}function UD(o,t,n,r,a,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ue,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(G,L){return y?new OffscreenCanvas(G,L):Xf("canvas")}function M(G,L,rt){let _t=1;const vt=an(G);if((vt.width>rt||vt.height>rt)&&(_t=rt/Math.max(vt.width,vt.height)),_t<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const ct=Math.floor(_t*vt.width),zt=Math.floor(_t*vt.height);_===void 0&&(_=E(ct,zt));const Ut=L?E(ct,zt):_;return Ut.width=ct,Ut.height=zt,Ut.getContext("2d").drawImage(G,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+zt+")."),Ut}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),G;return G}function S(G){return G.generateMipmaps}function x(G){o.generateMipmap(G)}function R(G){return G.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?o.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function A(G,L,rt,_t,vt=!1){if(G!==null){if(o[G]!==void 0)return o[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ct=L;if(L===o.RED&&(rt===o.FLOAT&&(ct=o.R32F),rt===o.HALF_FLOAT&&(ct=o.R16F),rt===o.UNSIGNED_BYTE&&(ct=o.R8)),L===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.R8UI),rt===o.UNSIGNED_SHORT&&(ct=o.R16UI),rt===o.UNSIGNED_INT&&(ct=o.R32UI),rt===o.BYTE&&(ct=o.R8I),rt===o.SHORT&&(ct=o.R16I),rt===o.INT&&(ct=o.R32I)),L===o.RG&&(rt===o.FLOAT&&(ct=o.RG32F),rt===o.HALF_FLOAT&&(ct=o.RG16F),rt===o.UNSIGNED_BYTE&&(ct=o.RG8)),L===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),rt===o.UNSIGNED_INT&&(ct=o.RG32UI),rt===o.BYTE&&(ct=o.RG8I),rt===o.SHORT&&(ct=o.RG16I),rt===o.INT&&(ct=o.RG32I)),L===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),rt===o.UNSIGNED_INT&&(ct=o.RGB32UI),rt===o.BYTE&&(ct=o.RGB8I),rt===o.SHORT&&(ct=o.RGB16I),rt===o.INT&&(ct=o.RGB32I)),L===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),rt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),rt===o.BYTE&&(ct=o.RGBA8I),rt===o.SHORT&&(ct=o.RGBA16I),rt===o.INT&&(ct=o.RGBA32I)),L===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),L===o.RGBA){const zt=vt?Vf:Ae.getTransfer(_t);rt===o.FLOAT&&(ct=o.RGBA32F),rt===o.HALF_FLOAT&&(ct=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(ct=zt===He?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function b(G,L){let rt;return G?L===null||L===Ds||L===gu?rt=o.DEPTH24_STENCIL8:L===Vr?rt=o.DEPTH32F_STENCIL8:L===_u&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Ds||L===gu?rt=o.DEPTH_COMPONENT24:L===Vr?rt=o.DEPTH_COMPONENT32F:L===_u&&(rt=o.DEPTH_COMPONENT16),rt}function D(G,L){return S(G)===!0||G.isFramebufferTexture&&G.minFilter!==Ji&&G.minFilter!==Hi?Math.log2(Math.max(L.width,L.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?L.mipmaps.length:1}function N(G){const L=G.target;L.removeEventListener("dispose",N),I(L),L.isVideoTexture&&m.delete(L)}function U(G){const L=G.target;L.removeEventListener("dispose",U),C(L)}function I(G){const L=r.get(G);if(L.__webglInit===void 0)return;const rt=G.source,_t=v.get(rt);if(_t){const vt=_t[L.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(G),Object.keys(_t).length===0&&v.delete(rt)}r.remove(G)}function w(G){const L=r.get(G);o.deleteTexture(L.__webglTexture);const rt=G.source,_t=v.get(rt);delete _t[L.__cacheKey],c.memory.textures--}function C(G){const L=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(L.__webglFramebuffer[_t]))for(let vt=0;vt<L.__webglFramebuffer[_t].length;vt++)o.deleteFramebuffer(L.__webglFramebuffer[_t][vt]);else o.deleteFramebuffer(L.__webglFramebuffer[_t]);L.__webglDepthbuffer&&o.deleteRenderbuffer(L.__webglDepthbuffer[_t])}else{if(Array.isArray(L.__webglFramebuffer))for(let _t=0;_t<L.__webglFramebuffer.length;_t++)o.deleteFramebuffer(L.__webglFramebuffer[_t]);else o.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&o.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&o.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let _t=0;_t<L.__webglColorRenderbuffer.length;_t++)L.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(L.__webglColorRenderbuffer[_t]);L.__webglDepthRenderbuffer&&o.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const rt=G.textures;for(let _t=0,vt=rt.length;_t<vt;_t++){const ct=r.get(rt[_t]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),r.remove(rt[_t])}r.remove(G)}let z=0;function H(){z=0}function k(){const G=z;return G>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+a.maxTextures),z+=1,G}function Y(G){const L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function et(G,L){const rt=r.get(G);if(G.isVideoTexture&&Kt(G),G.isRenderTargetTexture===!1&&G.version>0&&rt.__version!==G.version){const _t=G.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(rt,G,L);return}}n.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+L)}function F(G,L){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){Mt(rt,G,L);return}n.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+L)}function X(G,L){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){Mt(rt,G,L);return}n.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+L)}function W(G,L){const rt=r.get(G);if(G.version>0&&rt.__version!==G.version){Rt(rt,G,L);return}n.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+L)}const yt={[bm]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[Am]:o.MIRRORED_REPEAT},B={[Ji]:o.NEAREST,[cA]:o.NEAREST_MIPMAP_NEAREST,[Gc]:o.NEAREST_MIPMAP_LINEAR,[Hi]:o.LINEAR,[gp]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},Q={[mA]:o.NEVER,[SA]:o.ALWAYS,[_A]:o.LESS,[mM]:o.LEQUAL,[gA]:o.EQUAL,[xA]:o.GEQUAL,[vA]:o.GREATER,[yA]:o.NOTEQUAL};function ht(G,L){if(L.type===Vr&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===Hi||L.magFilter===gp||L.magFilter===Gc||L.magFilter===Es||L.minFilter===Hi||L.minFilter===gp||L.minFilter===Gc||L.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(G,o.TEXTURE_WRAP_S,yt[L.wrapS]),o.texParameteri(G,o.TEXTURE_WRAP_T,yt[L.wrapT]),(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)&&o.texParameteri(G,o.TEXTURE_WRAP_R,yt[L.wrapR]),o.texParameteri(G,o.TEXTURE_MAG_FILTER,B[L.magFilter]),o.texParameteri(G,o.TEXTURE_MIN_FILTER,B[L.minFilter]),L.compareFunction&&(o.texParameteri(G,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(G,o.TEXTURE_COMPARE_FUNC,Q[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Ji||L.minFilter!==Gc&&L.minFilter!==Es||L.type===Vr&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||r.get(L).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(G,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,a.getMaxAnisotropy())),r.get(L).__currentAnisotropy=L.anisotropy}}}function dt(G,L){let rt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,L.addEventListener("dispose",N));const _t=L.source;let vt=v.get(_t);vt===void 0&&(vt={},v.set(_t,vt));const ct=Y(L);if(ct!==G.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,rt=!0),vt[ct].usedTimes++;const zt=vt[G.__cacheKey];zt!==void 0&&(vt[G.__cacheKey].usedTimes--,zt.usedTimes===0&&w(L)),G.__cacheKey=ct,G.__webglTexture=vt[ct].texture}return rt}function K(G,L,rt){return Math.floor(Math.floor(G/rt)/L)}function ft(G,L,rt,_t){const ct=G.updateRanges;if(ct.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,L.width,L.height,rt,_t,L.data);else{ct.sort((Tt,It)=>Tt.start-It.start);let zt=0;for(let Tt=1;Tt<ct.length;Tt++){const It=ct[zt],Yt=ct[Tt],jt=It.start+It.count,Ct=K(Yt.start,L.width,4),re=K(It.start,L.width,4);Yt.start<=jt+1&&Ct===re&&K(Yt.start+Yt.count-1,L.width,4)===Ct?It.count=Math.max(It.count,Yt.start+Yt.count-It.start):(++zt,ct[zt]=Yt)}ct.length=zt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Vt=o.getParameter(o.UNPACK_SKIP_PIXELS),Xt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,L.width);for(let Tt=0,It=ct.length;Tt<It;Tt++){const Yt=ct[Tt],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),re=jt%L.width,Z=Math.floor(jt/L.width),Lt=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(o.TEXTURE_2D,0,re,Z,Lt,bt,rt,_t,L.data)}G.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Vt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xt)}}function Mt(G,L,rt){let _t=o.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_t=o.TEXTURE_3D);const vt=dt(G,L),ct=L.source;n.bindTexture(_t,G.__webglTexture,o.TEXTURE0+rt);const zt=r.get(ct);if(ct.version!==zt.__version||vt===!0){n.activeTexture(o.TEXTURE0+rt);const Ut=Ae.getPrimaries(Ae.workingColorSpace),Vt=L.colorSpace===Ca?null:Ae.getPrimaries(L.colorSpace),Xt=L.colorSpace===Ca||Ut===Vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Tt=M(L.image,!1,a.maxTextureSize);Tt=ae(L,Tt);const It=l.convert(L.format,L.colorSpace),Yt=l.convert(L.type);let jt=A(L.internalFormat,It,Yt,L.colorSpace,L.isVideoTexture);ht(_t,L);let Ct;const re=L.mipmaps,Z=L.isVideoTexture!==!0,Lt=zt.__version===void 0||vt===!0,bt=ct.dataReady,Bt=D(L,Tt);if(L.isDepthTexture)jt=b(L.format===yu,L.type),Lt&&(Z?n.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,Yt,null));else if(L.isDataTexture)if(re.length>0){Z&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let wt=0,St=re.length;wt<St;wt++)Ct=re[wt],Z?bt&&n.texSubImage2D(o.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,It,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,wt,jt,Ct.width,Ct.height,0,It,Yt,Ct.data);L.generateMipmaps=!1}else Z?(Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,Tt.width,Tt.height),bt&&ft(L,Tt,It,Yt)):n.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,Yt,Tt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Z&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,re[0].width,re[0].height,Tt.depth);for(let wt=0,St=re.length;wt<St;wt++)if(Ct=re[wt],L.format!==Gi)if(It!==null)if(Z){if(bt)if(L.layerUpdates.size>0){const Ht=ox(Ct.width,Ct.height,L.format,L.type);for(const ie of L.layerUpdates){const Oe=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,ie,Ct.width,Ct.height,1,It,Oe)}L.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,Tt.depth,It,Ct.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,jt,Ct.width,Ct.height,Tt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?bt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,Tt.depth,It,Yt,Ct.data):n.texImage3D(o.TEXTURE_2D_ARRAY,wt,jt,Ct.width,Ct.height,Tt.depth,0,It,Yt,Ct.data)}else{Z&&Lt&&n.texStorage2D(o.TEXTURE_2D,Bt,jt,re[0].width,re[0].height);for(let wt=0,St=re.length;wt<St;wt++)Ct=re[wt],L.format!==Gi?It!==null?Z?bt&&n.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,It,Ct.data):n.compressedTexImage2D(o.TEXTURE_2D,wt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?bt&&n.texSubImage2D(o.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,It,Yt,Ct.data):n.texImage2D(o.TEXTURE_2D,wt,jt,Ct.width,Ct.height,0,It,Yt,Ct.data)}else if(L.isDataArrayTexture)if(Z){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,jt,Tt.width,Tt.height,Tt.depth),bt)if(L.layerUpdates.size>0){const wt=ox(Tt.width,Tt.height,L.format,L.type);for(const St of L.layerUpdates){const Ht=Tt.data.subarray(St*wt/Tt.data.BYTES_PER_ELEMENT,(St+1)*wt/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Tt.width,Tt.height,1,It,Yt,Ht)}L.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Yt,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,It,Yt,Tt.data);else if(L.isData3DTexture)Z?(Lt&&n.texStorage3D(o.TEXTURE_3D,Bt,jt,Tt.width,Tt.height,Tt.depth),bt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Yt,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,It,Yt,Tt.data);else if(L.isFramebufferTexture){if(Lt)if(Z)n.texStorage2D(o.TEXTURE_2D,Bt,jt,Tt.width,Tt.height);else{let wt=Tt.width,St=Tt.height;for(let Ht=0;Ht<Bt;Ht++)n.texImage2D(o.TEXTURE_2D,Ht,jt,wt,St,0,It,Yt,null),wt>>=1,St>>=1}}else if(re.length>0){if(Z&&Lt){const wt=an(re[0]);n.texStorage2D(o.TEXTURE_2D,Bt,jt,wt.width,wt.height)}for(let wt=0,St=re.length;wt<St;wt++)Ct=re[wt],Z?bt&&n.texSubImage2D(o.TEXTURE_2D,wt,0,0,It,Yt,Ct):n.texImage2D(o.TEXTURE_2D,wt,jt,It,Yt,Ct);L.generateMipmaps=!1}else if(Z){if(Lt){const wt=an(Tt);n.texStorage2D(o.TEXTURE_2D,Bt,jt,wt.width,wt.height)}bt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,It,Yt,Tt)}else n.texImage2D(o.TEXTURE_2D,0,jt,It,Yt,Tt);S(L)&&x(_t),zt.__version=ct.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function Rt(G,L,rt){if(L.image.length!==6)return;const _t=dt(G,L),vt=L.source;n.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+rt);const ct=r.get(vt);if(vt.version!==ct.__version||_t===!0){n.activeTexture(o.TEXTURE0+rt);const zt=Ae.getPrimaries(Ae.workingColorSpace),Ut=L.colorSpace===Ca?null:Ae.getPrimaries(L.colorSpace),Vt=L.colorSpace===Ca||zt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Xt=L.isCompressedTexture||L.image[0].isCompressedTexture,Tt=L.image[0]&&L.image[0].isDataTexture,It=[];for(let St=0;St<6;St++)!Xt&&!Tt?It[St]=M(L.image[St],!0,a.maxCubemapSize):It[St]=Tt?L.image[St].image:L.image[St],It[St]=ae(L,It[St]);const Yt=It[0],jt=l.convert(L.format,L.colorSpace),Ct=l.convert(L.type),re=A(L.internalFormat,jt,Ct,L.colorSpace),Z=L.isVideoTexture!==!0,Lt=ct.__version===void 0||_t===!0,bt=vt.dataReady;let Bt=D(L,Yt);ht(o.TEXTURE_CUBE_MAP,L);let wt;if(Xt){Z&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Yt.width,Yt.height);for(let St=0;St<6;St++){wt=It[St].mipmaps;for(let Ht=0;Ht<wt.length;Ht++){const ie=wt[Ht];L.format!==Gi?jt!==null?Z?bt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,ie.width,ie.height,jt,ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,ie.width,ie.height,jt,Ct,ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,re,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(wt=L.mipmaps,Z&&Lt){wt.length>0&&Bt++;const St=an(It[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,St.width,St.height)}for(let St=0;St<6;St++)if(Tt){Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It[St].width,It[St].height,jt,Ct,It[St].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,It[St].width,It[St].height,0,jt,Ct,It[St].data);for(let Ht=0;Ht<wt.length;Ht++){const Oe=wt[Ht].image[St].image;Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,Oe.width,Oe.height,jt,Ct,Oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,re,Oe.width,Oe.height,0,jt,Ct,Oe.data)}}else{Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,Ct,It[St]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,jt,Ct,It[St]);for(let Ht=0;Ht<wt.length;Ht++){const ie=wt[Ht];Z?bt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,jt,Ct,ie.image[St]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,re,jt,Ct,ie.image[St])}}}S(L)&&x(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function Et(G,L,rt,_t,vt,ct){const zt=l.convert(rt.format,rt.colorSpace),Ut=l.convert(rt.type),Vt=A(rt.internalFormat,zt,Ut,rt.colorSpace),Xt=r.get(L),Tt=r.get(rt);if(Tt.__renderTarget=L,!Xt.__hasExternalTextures){const It=Math.max(1,L.width>>ct),Yt=Math.max(1,L.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?n.texImage3D(vt,ct,Vt,It,Yt,L.depth,0,zt,Ut,null):n.texImage2D(vt,ct,Vt,It,Yt,0,zt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,G),ge(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,vt,Tt.__webglTexture,0,kt(L)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,vt,Tt.__webglTexture,ct),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(G,L,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,G),L.depthBuffer){const _t=L.depthTexture,vt=_t&&_t.isDepthTexture?_t.type:null,ct=b(L.stencilBuffer,vt),zt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=kt(L);ge(L)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,L.width,L.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,ct,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,G)}else{const _t=L.textures;for(let vt=0;vt<_t.length;vt++){const ct=_t[vt],zt=l.convert(ct.format,ct.colorSpace),Ut=l.convert(ct.type),Vt=A(ct.internalFormat,zt,Ut,ct.colorSpace),Xt=kt(L);rt&&ge(L)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Vt,L.width,L.height):ge(L)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt,Vt,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,Vt,L.width,L.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(G,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(L.depthTexture);_t.__renderTarget=L,(!_t.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),et(L.depthTexture,0);const vt=_t.__webglTexture,ct=kt(L);if(L.depthTexture.format===vu)ge(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(L.depthTexture.format===yu)ge(L)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Se(G){const L=r.get(G),rt=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){const _t=G.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),_t){const vt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,_t.removeEventListener("dispose",vt)};_t.addEventListener("dispose",vt),L.__depthDisposeCallback=vt}L.__boundDepthTexture=_t}if(G.depthTexture&&!L.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const _t=G.texture.mipmaps;_t&&_t.length>0?Nt(L.__webglFramebuffer[0],G):Nt(L.__webglFramebuffer,G)}else if(rt){L.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer[_t]),L.__webglDepthbuffer[_t]===void 0)L.__webglDepthbuffer[_t]=o.createRenderbuffer(),Zt(L.__webglDepthbuffer[_t],G,!1);else{const vt=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=L.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const _t=G.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=o.createRenderbuffer(),Zt(L.__webglDepthbuffer,G,!1);else{const vt=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=L.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(G,L,rt){const _t=r.get(G);L!==void 0&&Et(_t.__webglFramebuffer,G,G.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Se(G)}function _e(G){const L=G.texture,rt=r.get(G),_t=r.get(L);G.addEventListener("dispose",U);const vt=G.textures,ct=G.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=L.version,c.memory.textures++),ct){rt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(L.mipmaps&&L.mipmaps.length>0){rt.__webglFramebuffer[Ut]=[];for(let Vt=0;Vt<L.mipmaps.length;Vt++)rt.__webglFramebuffer[Ut][Vt]=o.createFramebuffer()}else rt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ut=0;Ut<L.mipmaps.length;Ut++)rt.__webglFramebuffer[Ut]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Ut=0,Vt=vt.length;Ut<Vt;Ut++){const Xt=r.get(vt[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=o.createTexture(),c.memory.textures++)}if(G.samples>0&&ge(G)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Vt=vt[Ut];rt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut]);const Xt=l.convert(Vt.format,Vt.colorSpace),Tt=l.convert(Vt.type),It=A(Vt.internalFormat,Xt,Tt,Vt.colorSpace,G.isXRRenderTarget===!0),Yt=kt(G);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,It,G.width,G.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),G.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Zt(rt.__webglDepthRenderbuffer,G,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){n.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),ht(o.TEXTURE_CUBE_MAP,L);for(let Ut=0;Ut<6;Ut++)if(L.mipmaps&&L.mipmaps.length>0)for(let Vt=0;Vt<L.mipmaps.length;Vt++)Et(rt.__webglFramebuffer[Ut][Vt],G,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Vt);else Et(rt.__webglFramebuffer[Ut],G,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(L)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Ut=0,Vt=vt.length;Ut<Vt;Ut++){const Xt=vt[Ut],Tt=r.get(Xt);n.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),ht(o.TEXTURE_2D,Xt),Et(rt.__webglFramebuffer,G,Xt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),S(Xt)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ut=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,_t.__webglTexture),ht(Ut,L),L.mipmaps&&L.mipmaps.length>0)for(let Vt=0;Vt<L.mipmaps.length;Vt++)Et(rt.__webglFramebuffer[Vt],G,L,o.COLOR_ATTACHMENT0,Ut,Vt);else Et(rt.__webglFramebuffer,G,L,o.COLOR_ATTACHMENT0,Ut,0);S(L)&&x(Ut),n.unbindTexture()}G.depthBuffer&&Se(G)}function q(G){const L=G.textures;for(let rt=0,_t=L.length;rt<_t;rt++){const vt=L[rt];if(S(vt)){const ct=R(G),zt=r.get(vt).__webglTexture;n.bindTexture(ct,zt),x(ct),n.unbindTexture()}}}const Ln=[],Ee=[];function de(G){if(G.samples>0){if(ge(G)===!1){const L=G.textures,rt=G.width,_t=G.height;let vt=o.COLOR_BUFFER_BIT;const ct=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(G),Ut=L.length>1;if(Ut)for(let Xt=0;Xt<L.length;Xt++)n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Vt=G.texture.mipmaps;Vt&&Vt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Xt=0;Xt<L.length;Xt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const Tt=r.get(L[Xt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,rt,_t,0,0,rt,_t,vt,o.NEAREST),d===!0&&(Ln.length=0,Ee.length=0,Ln.push(o.COLOR_ATTACHMENT0+Xt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Ln.push(ct),Ee.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ln))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<L.length;Xt++){n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Xt]);const Tt=r.get(L[Xt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xt,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&d){const L=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[L])}}}function kt(G){return Math.min(a.maxSamples,G.samples)}function ge(G){const L=r.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Kt(G){const L=c.render.frame;m.get(G)!==L&&(m.set(G,L),G.update())}function ae(G,L){const rt=G.colorSpace,_t=G.format,vt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||rt!==Wo&&rt!==Ca&&(Ae.getTransfer(rt)===He?(_t!==Gi||vt!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),L}function an(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=et,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ge}function LD(o,t){function n(r,a=Ca){let l;const c=Ae.getTransfer(a);if(r===Yr)return o.UNSIGNED_BYTE;if(r===E_)return o.UNSIGNED_SHORT_4_4_4_4;if(r===T_)return o.UNSIGNED_SHORT_5_5_5_1;if(r===uM)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===oM)return o.BYTE;if(r===lM)return o.SHORT;if(r===_u)return o.UNSIGNED_SHORT;if(r===M_)return o.INT;if(r===Ds)return o.UNSIGNED_INT;if(r===Vr)return o.FLOAT;if(r===Zo)return o.HALF_FLOAT;if(r===cM)return o.ALPHA;if(r===fM)return o.RGB;if(r===Gi)return o.RGBA;if(r===vu)return o.DEPTH_COMPONENT;if(r===yu)return o.DEPTH_STENCIL;if(r===hM)return o.RED;if(r===b_)return o.RED_INTEGER;if(r===dM)return o.RG;if(r===A_)return o.RG_INTEGER;if(r===R_)return o.RGBA_INTEGER;if(r===wf||r===Cf||r===Df||r===Uf)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===wf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Df)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===wf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Df)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rm||r===wm||r===Cm||r===Dm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Um||r===Lm||r===Om)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Um||r===Lm)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Om)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nm||r===Pm||r===zm||r===Im||r===Bm||r===Fm||r===Hm||r===Gm||r===Vm||r===km||r===Xm||r===qm||r===Wm||r===Ym)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Im)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===km)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ym)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lf||r===jm||r===Zm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Lf)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pM||r===Km||r===Qm||r===Jm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===Lf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Km)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gu?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const OD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ND=`
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

}`;class PD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const a=new li,l=t.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new hr({vertexShader:OD,fragmentShader:ND,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qi(new bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zD extends Ko{constructor(t,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,_=null,v=null,y=null,E=null;const M=new PD,S=n.getContextAttributes();let x=null,R=null;const A=[],b=[],D=new Ue;let N=null;const U=new Zi;U.viewport=new un;const I=new Zi;I.viewport=new un;const w=[U,I],C=new iR;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=A[K];return ft===void 0&&(ft=new Hp,A[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=A[K];return ft===void 0&&(ft=new Hp,A[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=A[K];return ft===void 0&&(ft=new Hp,A[K]=ft),ft.getHandSpace()};function k(K){const ft=b.indexOf(K.inputSource);if(ft===-1)return;const Mt=A[ft];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,h||c),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",et);for(let K=0;K<A.length;K++){const ft=b[K];ft!==null&&(b[K]=null,A[K].disconnect(ft))}z=null,H=null,M.reset(),t.setRenderTarget(x),y=null,v=null,_=null,a=null,R=null,dt.stop(),r.isPresenting=!1,t.setPixelRatio(N),t.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(x=t.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await n.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,Et=null;S.depth&&(Et=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=S.stencil?yu:vu,Rt=S.stencil?gu:Ds);const Zt={colorFormat:n.RGBA8,depthFormat:Et,scaleFactor:l};_=new XRWebGLBinding(a,n),v=_.createProjectionLayer(Zt),a.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),R=new Ga(v.textureWidth,v.textureHeight,{format:Gi,type:Yr,depthTexture:new RM(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,Mt),a.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Ga(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:Yr,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),dt.setContext(a),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(K){for(let ft=0;ft<K.removed.length;ft++){const Mt=K.removed[ft],Rt=b.indexOf(Mt);Rt>=0&&(b[Rt]=null,A[Rt].disconnect(Mt))}for(let ft=0;ft<K.added.length;ft++){const Mt=K.added[ft];let Rt=b.indexOf(Mt);if(Rt===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=b.length){b.push(Mt),Rt=Zt;break}else if(b[Zt]===null){b[Zt]=Mt,Rt=Zt;break}if(Rt===-1)break}const Et=A[Rt];Et&&Et.connect(Mt)}}const F=new ut,X=new ut;function W(K,ft,Mt){F.setFromMatrixPosition(ft.matrixWorld),X.setFromMatrixPosition(Mt.matrixWorld);const Rt=F.distanceTo(X),Et=ft.projectionMatrix.elements,Zt=Mt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),Se=Et[14]/(Et[10]+1),Le=(Et[9]+1)/Et[5],_e=(Et[9]-1)/Et[5],q=(Et[8]-1)/Et[0],Ln=(Zt[8]+1)/Zt[0],Ee=Nt*q,de=Nt*Ln,kt=Rt/(-q+Ln),ge=kt*-q;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ge),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Kt=Nt+kt,ae=Se+kt,an=Ee-ge,G=de+(Rt-ge),L=Le*Se/ae*Kt,rt=_e*Se/ae*Kt;K.projectionMatrix.makePerspective(an,G,L,rt,Kt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function yt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ft=K.near,Mt=K.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),C.near=I.near=U.near=ft,C.far=I.far=U.far=Mt,(z!==C.near||H!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,H=C.far),U.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,C.layers.mask=U.layers.mask|I.layers.mask;const Rt=K.parent,Et=C.cameras;yt(C,Rt);for(let Zt=0;Zt<Et.length;Zt++)yt(Et[Zt],Rt);Et.length===2?W(C,U,I):C.projectionMatrix.copy(U.projectionMatrix),B(K,C,Rt)};function B(K,ft,Mt){Mt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$m*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let Q=null;function ht(K,ft){if(m=ft.getViewerPose(h||c),E=ft,m!==null){const Mt=m.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let Rt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,Rt=!0);for(let Nt=0;Nt<Mt.length;Nt++){const Se=Mt[Nt];let Le=null;if(y!==null)Le=y.getViewport(Se);else{const q=_.getViewSubImage(v,Se);Le=q.viewport,Nt===0&&(t.setRenderTargetTextures(R,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(R))}let _e=w[Nt];_e===void 0&&(_e=new Zi,_e.layers.enable(Nt),_e.viewport=new un,w[Nt]=_e),_e.matrix.fromArray(Se.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Se.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Le.x,Le.y,Le.width,Le.height),Nt===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Rt===!0&&C.cameras.push(_e)}const Et=a.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Nt=_.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&M.init(t,Nt,a.renderState)}}for(let Mt=0;Mt<A.length;Mt++){const Rt=b[Mt],Et=A[Mt];Rt!==null&&Et!==void 0&&Et.update(Rt,ft,h||c)}Q&&Q(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const dt=new CM;dt.setAnimationLoop(ht),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}}const ms=new Ls,ID=new _n;function BD(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,EM(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,R,A,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,R,A):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===oi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===oi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),A=R.envMap,b=R.envMapRotation;A&&(S.envMap.value=A,ms.copy(b),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.envMapRotation.value.setFromMatrix4(ID.makeRotationFromEuler(ms)),S.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,A){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=A*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===oi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function FD(o,t,n,r){let a={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,A){const b=A.program;r.uniformBlockBinding(R,b)}function h(R,A){let b=a[R.id];b===void 0&&(E(R),b=m(R),a[R.id]=b,R.addEventListener("dispose",S));const D=A.program;r.updateUBOMapping(R,D);const N=t.render.frame;l[R.id]!==N&&(v(R),l[R.id]=N)}function m(R){const A=_();R.__bindingPointIndex=A;const b=o.createBuffer(),D=R.__size,N=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,D,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,b),b}function _(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const A=a[R.id],b=R.uniforms,D=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let N=0,U=b.length;N<U;N++){const I=Array.isArray(b[N])?b[N]:[b[N]];for(let w=0,C=I.length;w<C;w++){const z=I[w];if(y(z,N,w,D)===!0){const H=z.__offset,k=Array.isArray(z.value)?z.value:[z.value];let Y=0;for(let et=0;et<k.length;et++){const F=k[et],X=M(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,H+Y,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,H,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(R,A,b,D){const N=R.value,U=A+"_"+b;if(D[U]===void 0)return typeof N=="number"||typeof N=="boolean"?D[U]=N:D[U]=N.clone(),!0;{const I=D[U];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return D[U]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function E(R){const A=R.uniforms;let b=0;const D=16;for(let U=0,I=A.length;U<I;U++){const w=Array.isArray(A[U])?A[U]:[A[U]];for(let C=0,z=w.length;C<z;C++){const H=w[C],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,et=k.length;Y<et;Y++){const F=k[Y],X=M(F),W=b%D,yt=W%X.boundary,B=W+yt;b+=yt,B!==0&&D-B<X.storage&&(b+=D-B),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=X.storage}}}const N=b%D;return N>0&&(b+=D-N),R.__size=b,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function S(R){const A=R.target;A.removeEventListener("dispose",S);const b=c.indexOf(A.__bindingPointIndex);c.splice(b,1),o.deleteBuffer(a[A.id]),delete a[A.id],delete l[A.id]}function x(){for(const R in a)o.deleteBuffer(a[R]);c=[],a={},l={}}return{bind:d,update:h,dispose:x}}class HD{constructor(t={}){const{canvas:n=EA(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const R=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1;this._outputColorSpace=zi;let N=0,U=0,I=null,w=-1,C=null;const z=new un,H=new un;let k=null;const Y=new Re(0);let et=0,F=n.width,X=n.height,W=1,yt=null,B=null;const Q=new un(0,0,F,X),ht=new un(0,0,F,X);let dt=!1;const K=new AM;let ft=!1,Mt=!1;const Rt=new _n,Et=new _n,Zt=new ut,Nt=new un,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function _e(){return I===null?W:1}let q=r;function Ln(P,$){return n.getContext(P,$)}try{const P={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${S_}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",St,!1),q===null){const $="webgl2";if(q=Ln($,P),q===null)throw Ln($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ee,de,kt,ge,Kt,ae,an,G,L,rt,_t,vt,ct,zt,Ut,Vt,Xt,Tt,It,Yt,jt,Ct,re,Z;function Lt(){Ee=new KC(q),Ee.init(),Ct=new LD(q,Ee),de=new kC(q,Ee,t,Ct),kt=new DD(q,Ee),de.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),ge=new $C(q),Kt=new gD,ae=new UD(q,Ee,kt,Kt,de,Ct,ge),an=new qC(b),G=new ZC(b),L=new aR(q),re=new GC(q,L),rt=new QC(q,L,ge,re),_t=new e2(q,rt,L,ge),It=new t2(q,de,ae),Vt=new XC(Kt),vt=new _D(b,an,G,Ee,de,re,Vt),ct=new BD(b,Kt),zt=new yD,Ut=new bD(Ee),Tt=new HC(b,an,G,kt,_t,y,d),Xt=new wD(b,_t,de),Z=new FD(q,ge,de,kt),Yt=new VC(q,Ee,ge),jt=new JC(q,Ee,ge),ge.programs=vt.programs,b.capabilities=de,b.extensions=Ee,b.properties=Kt,b.renderLists=zt,b.shadowMap=Xt,b.state=kt,b.info=ge}Lt();const bt=new zD(b,q);this.xr=bt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=Ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(F,X,!1))},this.getSize=function(P){return P.set(F,X)},this.setSize=function(P,$,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,X=$,n.width=Math.floor(P*W),n.height=Math.floor($*W),ot===!0&&(n.style.width=P+"px",n.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(F*W,X*W).floor()},this.setDrawingBufferSize=function(P,$,ot){F=P,X=$,W=ot,n.width=Math.floor(P*ot),n.height=Math.floor($*ot),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(z)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,$,ot,lt){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,$,ot,lt),kt.viewport(z.copy(Q).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(ht)},this.setScissor=function(P,$,ot,lt){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,$,ot,lt),kt.scissor(H.copy(ht).multiplyScalar(W).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(P){kt.setScissorTest(dt=P)},this.setOpaqueSort=function(P){yt=P},this.setTransparentSort=function(P){B=P},this.getClearColor=function(P){return P.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,ot=!0){let lt=0;if(P){let tt=!1;if(I!==null){const At=I.texture.format;tt=At===R_||At===A_||At===b_}if(tt){const At=I.texture.type,Dt=At===Yr||At===Ds||At===_u||At===gu||At===E_||At===T_,Pt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),ee=Pt.r,Jt=Pt.g,qt=Pt.b;Dt?(E[0]=ee,E[1]=Jt,E[2]=qt,E[3]=Ft,q.clearBufferuiv(q.COLOR,0,E)):(M[0]=ee,M[1]=Jt,M[2]=qt,M[3]=Ft,q.clearBufferiv(q.COLOR,0,M))}else lt|=q.COLOR_BUFFER_BIT}$&&(lt|=q.DEPTH_BUFFER_BIT),ot&&(lt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Tt.dispose(),zt.dispose(),Ut.dispose(),Kt.dispose(),an.dispose(),G.dispose(),_t.dispose(),re.dispose(),Z.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gn),bt.removeEventListener("sessionend",On),Zn.stop()};function Bt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const P=ge.autoReset,$=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,tt=Xt.type;Lt(),ge.autoReset=P,Xt.enabled=$,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=tt}function St(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ht(P){const $=P.target;$.removeEventListener("dispose",Ht),ie($)}function ie(P){Oe(P),Kt.remove(P)}function Oe(P){const $=Kt.get(P).programs;$!==void 0&&($.forEach(function(ot){vt.releaseProgram(ot)}),P.isShaderMaterial&&vt.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ot,lt,tt,At){$===null&&($=Se);const Dt=tt.isMesh&&tt.matrixWorld.determinant()<0,Pt=qa(P,$,ot,lt,tt);kt.setMaterial(lt,Dt);let Ft=ot.index,ee=1;if(lt.wireframe===!0){if(Ft=rt.getWireframeAttribute(ot),Ft===void 0)return;ee=2}const Jt=ot.drawRange,qt=ot.attributes.position;let le=Jt.start*ee,Ce=(Jt.start+Jt.count)*ee;At!==null&&(le=Math.max(le,At.start*ee),Ce=Math.min(Ce,(At.start+At.count)*ee)),Ft!==null?(le=Math.max(le,0),Ce=Math.min(Ce,Ft.count)):qt!=null&&(le=Math.max(le,0),Ce=Math.min(Ce,qt.count));const je=Ce-le;if(je<0||je===1/0)return;re.setup(tt,lt,Pt,ot,Ft);let fe,De=Yt;if(Ft!==null&&(fe=L.get(Ft),De=jt,De.setIndex(fe)),tt.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*_e()),De.setMode(q.LINES)):De.setMode(q.TRIANGLES);else if(tt.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),kt.setLineWidth(Qt*_e()),tt.isLineSegments?De.setMode(q.LINES):tt.isLineLoop?De.setMode(q.LINE_LOOP):De.setMode(q.LINE_STRIP)}else tt.isPoints?De.setMode(q.POINTS):tt.isSprite&&De.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Qt=tt._multiDrawStarts,ze=tt._multiDrawCounts,ve=tt._multiDrawCount,Tn=Ft?L.get(Ft).bytesPerElement:1,Jr=Kt.get(lt).currentProgram.getUniforms();for(let qe=0;qe<ve;qe++)Jr.setValue(q,"_gl_DrawID",qe),De.render(Qt[qe]/Tn,ze[qe])}else if(tt.isInstancedMesh)De.renderInstances(le,je,tt.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ze=Math.min(ot.instanceCount,Qt);De.renderInstances(le,je,ze)}else De.render(le,je)};function Te(P,$,ot){P.transparent===!0&&P.side===Gr&&P.forceSinglePass===!1?(P.side=oi,P.needsUpdate=!0,Kr(P,$,ot),P.side=Ha,P.needsUpdate=!0,Kr(P,$,ot),P.side=Gr):Kr(P,$,ot)}this.compile=function(P,$,ot=null){ot===null&&(ot=P),x=Ut.get(ot),x.init($),A.push(x),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),P!==ot&&P.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),x.setupLights();const lt=new Set;return P.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const At=tt.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Pt=At[Dt];Te(Pt,ot,tt),lt.add(Pt)}else Te(At,ot,tt),lt.add(At)}),x=A.pop(),lt},this.compileAsync=function(P,$,ot=null){const lt=this.compile(P,$,ot);return new Promise(tt=>{function At(){if(lt.forEach(function(Dt){Kt.get(Dt).currentProgram.isReady()&&lt.delete(Dt)}),lt.size===0){tt(P);return}setTimeout(At,10)}Ee.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ci=null;function En(P){ci&&ci(P)}function gn(){Zn.stop()}function On(){Zn.start()}const Zn=new CM;Zn.setAnimationLoop(En),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(P){ci=P,bt.setAnimationLoop(P),P===null?Zn.stop():Zn.start()},bt.addEventListener("sessionstart",gn),bt.addEventListener("sessionend",On),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera($),$=bt.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,$,I),x=Ut.get(P,A.length),x.init($),A.push(x),Et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),K.setFromProjectionMatrix(Et),Mt=this.localClippingEnabled,ft=Vt.init(this.clippingPlanes,Mt),S=zt.get(P,R.length),S.init(),R.push(S),bt.enabled===!0&&bt.isPresenting===!0){const At=b.xr.getDepthSensingMesh();At!==null&&ka(At,$,-1/0,b.sortObjects)}ka(P,$,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(yt,B),Le=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Le&&Tt.addToRenderList(S,P),this.info.render.frame++,ft===!0&&Vt.beginShadows();const ot=x.state.shadowsArray;Xt.render(ot,P,$),ft===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,tt=S.transmissive;if(x.setupLights(),$.isArrayCamera){const At=$.cameras;if(tt.length>0)for(let Dt=0,Pt=At.length;Dt<Pt;Dt++){const Ft=At[Dt];Ru(lt,tt,P,Ft)}Le&&Tt.render(P);for(let Dt=0,Pt=At.length;Dt<Pt;Dt++){const Ft=At[Dt];Au(S,P,Ft,Ft.viewport)}}else tt.length>0&&Ru(lt,tt,P,$),Le&&Tt.render(P),Au(S,P,$);I!==null&&U===0&&(ae.updateMultisampleRenderTarget(I),ae.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(b,P,$),re.resetDefaultState(),w=-1,C=null,A.pop(),A.length>0?(x=A[A.length-1],ft===!0&&Vt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function ka(P,$,ot,lt){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ot=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){lt&&Nt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Et);const Dt=_t.update(P),Pt=P.material;Pt.visible&&S.push(P,Dt,Pt,ot,Nt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){const Dt=_t.update(P),Pt=P.material;if(lt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Nt.copy(P.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Nt.copy(Dt.boundingSphere.center)),Nt.applyMatrix4(P.matrixWorld).applyMatrix4(Et)),Array.isArray(Pt)){const Ft=Dt.groups;for(let ee=0,Jt=Ft.length;ee<Jt;ee++){const qt=Ft[ee],le=Pt[qt.materialIndex];le&&le.visible&&S.push(P,Dt,le,ot,Nt.z,qt)}}else Pt.visible&&S.push(P,Dt,Pt,ot,Nt.z,null)}}const At=P.children;for(let Dt=0,Pt=At.length;Dt<Pt;Dt++)ka(At[Dt],$,ot,lt)}function Au(P,$,ot,lt){const tt=P.opaque,At=P.transmissive,Dt=P.transparent;x.setupLightsView(ot),ft===!0&&Vt.setGlobalState(b.clippingPlanes,ot),lt&&kt.viewport(z.copy(lt)),tt.length>0&&Xa(tt,$,ot),At.length>0&&Xa(At,$,ot),Dt.length>0&&Xa(Dt,$,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ru(P,$,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Ga(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Zo:Yr,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const At=x.state.transmissionRenderTarget[lt.id],Dt=lt.viewport||z;At.setSize(Dt.z*b.transmissionResolutionScale,Dt.w*b.transmissionResolutionScale);const Pt=b.getRenderTarget(),Ft=b.getActiveCubeFace(),ee=b.getActiveMipmapLevel();b.setRenderTarget(At),b.getClearColor(Y),et=b.getClearAlpha(),et<1&&b.setClearColor(16777215,.5),b.clear(),Le&&Tt.render(ot);const Jt=b.toneMapping;b.toneMapping=Ia;const qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),ft===!0&&Vt.setGlobalState(b.clippingPlanes,lt),Xa(P,ot,lt),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ce=0,je=$.length;Ce<je;Ce++){const fe=$[Ce],De=fe.object,Qt=fe.geometry,ze=fe.material,ve=fe.group;if(ze.side===Gr&&De.layers.test(lt.layers)){const Tn=ze.side;ze.side=oi,ze.needsUpdate=!0,Zr(De,ot,lt,Qt,ze,ve),ze.side=Tn,ze.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}b.setRenderTarget(Pt,Ft,ee),b.setClearColor(Y,et),qt!==void 0&&(lt.viewport=qt),b.toneMapping=Jt}function Xa(P,$,ot){const lt=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,At=P.length;tt<At;tt++){const Dt=P[tt],Pt=Dt.object,Ft=Dt.geometry,ee=Dt.group;let Jt=Dt.material;Jt.allowOverride===!0&&lt!==null&&(Jt=lt),Pt.layers.test(ot.layers)&&Zr(Pt,$,ot,Ft,Jt,ee)}}function Zr(P,$,ot,lt,tt,At){P.onBeforeRender(b,$,ot,lt,tt,At),P.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(b,$,ot,lt,P,At),tt.transparent===!0&&tt.side===Gr&&tt.forceSinglePass===!1?(tt.side=oi,tt.needsUpdate=!0,b.renderBufferDirect(ot,$,lt,tt,P,At),tt.side=Ha,tt.needsUpdate=!0,b.renderBufferDirect(ot,$,lt,tt,P,At),tt.side=Gr):b.renderBufferDirect(ot,$,lt,tt,P,At),P.onAfterRender(b,$,ot,lt,tt,At)}function Kr(P,$,ot){$.isScene!==!0&&($=Se);const lt=Kt.get(P),tt=x.state.lights,At=x.state.shadowsArray,Dt=tt.state.version,Pt=vt.getParameters(P,tt.state,At,$,ot),Ft=vt.getProgramCacheKey(Pt);let ee=lt.programs;lt.environment=P.isMeshStandardMaterial?$.environment:null,lt.fog=$.fog,lt.envMap=(P.isMeshStandardMaterial?G:an).get(P.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,ee===void 0&&(P.addEventListener("dispose",Ht),ee=new Map,lt.programs=ee);let Jt=ee.get(Ft);if(Jt!==void 0){if(lt.currentProgram===Jt&&lt.lightsStateVersion===Dt)return pr(P,Pt),Jt}else Pt.uniforms=vt.getUniforms(P),P.onBeforeCompile(Pt,b),Jt=vt.acquireProgram(Pt,Ft),ee.set(Ft,Jt),lt.uniforms=Pt.uniforms;const qt=lt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qt.clippingPlanes=Vt.uniform),pr(P,Pt),lt.needsLights=cn(P),lt.lightsStateVersion=Dt,lt.needsLights&&(qt.ambientLightColor.value=tt.state.ambient,qt.lightProbe.value=tt.state.probe,qt.directionalLights.value=tt.state.directional,qt.directionalLightShadows.value=tt.state.directionalShadow,qt.spotLights.value=tt.state.spot,qt.spotLightShadows.value=tt.state.spotShadow,qt.rectAreaLights.value=tt.state.rectArea,qt.ltc_1.value=tt.state.rectAreaLTC1,qt.ltc_2.value=tt.state.rectAreaLTC2,qt.pointLights.value=tt.state.point,qt.pointLightShadows.value=tt.state.pointShadow,qt.hemisphereLights.value=tt.state.hemi,qt.directionalShadowMap.value=tt.state.directionalShadowMap,qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,qt.spotShadowMap.value=tt.state.spotShadowMap,qt.spotLightMatrix.value=tt.state.spotLightMatrix,qt.spotLightMap.value=tt.state.spotLightMap,qt.pointShadowMap.value=tt.state.pointShadowMap,qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),lt.currentProgram=Jt,lt.uniformsList=null,Jt}function dr(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Of.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function pr(P,$){const ot=Kt.get(P);ot.outputColorSpace=$.outputColorSpace,ot.batching=$.batching,ot.batchingColor=$.batchingColor,ot.instancing=$.instancing,ot.instancingColor=$.instancingColor,ot.instancingMorph=$.instancingMorph,ot.skinning=$.skinning,ot.morphTargets=$.morphTargets,ot.morphNormals=$.morphNormals,ot.morphColors=$.morphColors,ot.morphTargetsCount=$.morphTargetsCount,ot.numClippingPlanes=$.numClippingPlanes,ot.numIntersection=$.numClipIntersection,ot.vertexAlphas=$.vertexAlphas,ot.vertexTangents=$.vertexTangents,ot.toneMapping=$.toneMapping}function qa(P,$,ot,lt,tt){$.isScene!==!0&&($=Se),ae.resetTextureUnits();const At=$.fog,Dt=lt.isMeshStandardMaterial?$.environment:null,Pt=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Wo,Ft=(lt.isMeshStandardMaterial?G:an).get(lt.envMap||Dt),ee=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let je=Ia;lt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(je=b.toneMapping);const fe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,De=fe!==void 0?fe.length:0,Qt=Kt.get(lt),ze=x.state.lights;if(ft===!0&&(Mt===!0||P!==C)){const bn=P===C&&lt.id===w;Vt.setState(lt,P,bn)}let ve=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ze.state.version||Qt.outputColorSpace!==Pt||tt.isBatchedMesh&&Qt.batching===!1||!tt.isBatchedMesh&&Qt.batching===!0||tt.isBatchedMesh&&Qt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Qt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Qt.instancing===!1||!tt.isInstancedMesh&&Qt.instancing===!0||tt.isSkinnedMesh&&Qt.skinning===!1||!tt.isSkinnedMesh&&Qt.skinning===!0||tt.isInstancedMesh&&Qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Qt.instancingMorph===!1&&tt.morphTexture!==null||Qt.envMap!==Ft||lt.fog===!0&&Qt.fog!==At||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Vt.numPlanes||Qt.numIntersection!==Vt.numIntersection)||Qt.vertexAlphas!==ee||Qt.vertexTangents!==Jt||Qt.morphTargets!==qt||Qt.morphNormals!==le||Qt.morphColors!==Ce||Qt.toneMapping!==je||Qt.morphTargetsCount!==De)&&(ve=!0):(ve=!0,Qt.__version=lt.version);let Tn=Qt.currentProgram;ve===!0&&(Tn=Kr(lt,$,tt));let Jr=!1,qe=!1,_r=!1;const Ge=Tn.getUniforms(),Fn=Qt.uniforms;if(kt.useProgram(Tn.program)&&(Jr=!0,qe=!0,_r=!0),lt.id!==w&&(w=lt.id,qe=!0),Jr||C!==P){kt.buffers.depth.getReversed()?(Rt.copy(P.projectionMatrix),bA(Rt),AA(Rt),Ge.setValue(q,"projectionMatrix",Rt)):Ge.setValue(q,"projectionMatrix",P.projectionMatrix),Ge.setValue(q,"viewMatrix",P.matrixWorldInverse);const Nn=Ge.map.cameraPosition;Nn!==void 0&&Nn.setValue(q,Zt.setFromMatrixPosition(P.matrixWorld)),de.logarithmicDepthBuffer&&Ge.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,qe=!0,_r=!0)}if(tt.isSkinnedMesh){Ge.setOptional(q,tt,"bindMatrix"),Ge.setOptional(q,tt,"bindMatrixInverse");const bn=tt.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ge.setValue(q,"boneTexture",bn.boneTexture,ae))}tt.isBatchedMesh&&(Ge.setOptional(q,tt,"batchingTexture"),Ge.setValue(q,"batchingTexture",tt._matricesTexture,ae),Ge.setOptional(q,tt,"batchingIdTexture"),Ge.setValue(q,"batchingIdTexture",tt._indirectTexture,ae),Ge.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ge.setValue(q,"batchingColorTexture",tt._colorsTexture,ae));const vn=ot.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&It.update(tt,ot,Tn),(qe||Qt.receiveShadow!==tt.receiveShadow)&&(Qt.receiveShadow=tt.receiveShadow,Ge.setValue(q,"receiveShadow",tt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Fn.envMap.value=Ft,Fn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&$.environment!==null&&(Fn.envMapIntensity.value=$.environmentIntensity),qe&&(Ge.setValue(q,"toneMappingExposure",b.toneMappingExposure),Qt.needsLights&&Qr(Fn,_r),At&&lt.fog===!0&&ct.refreshFogUniforms(Fn,At),ct.refreshMaterialUniforms(Fn,lt,W,X,x.state.transmissionRenderTarget[P.id]),Of.upload(q,dr(Qt),Fn,ae)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Of.upload(q,dr(Qt),Fn,ae),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(q,"center",tt.center),Ge.setValue(q,"modelViewMatrix",tt.modelViewMatrix),Ge.setValue(q,"normalMatrix",tt.normalMatrix),Ge.setValue(q,"modelMatrix",tt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const bn=lt.uniformsGroups;for(let Nn=0,$i=bn.length;Nn<$i;Nn++){const gr=bn[Nn];Z.update(gr,Tn),Z.bind(gr,Tn)}}return Tn}function Qr(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function cn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,$,ot){const lt=Kt.get(P);lt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Kt.get(P.texture).__webglTexture=$,Kt.get(P.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){const ot=Kt.get(P);ot.__webglFramebuffer=$,ot.__useDefaultFramebuffer=$===void 0};const wu=q.createFramebuffer();this.setRenderTarget=function(P,$=0,ot=0){I=P,N=$,U=ot;let lt=!0,tt=null,At=!1,Dt=!1;if(P){const Ft=Kt.get(P);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(q.FRAMEBUFFER,null),lt=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(P);else if(Ft.__hasExternalTextures)ae.rebindTextures(P,Kt.get(P.texture).__webglTexture,Kt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qt=P.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&Kt.has(qt)&&(P.width!==qt.image.width||P.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(P)}}const ee=P.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Dt=!0);const Jt=Kt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Jt[$])?tt=Jt[$][ot]:tt=Jt[$],At=!0):P.samples>0&&ae.useMultisampledRTT(P)===!1?tt=Kt.get(P).__webglMultisampledFramebuffer:Array.isArray(Jt)?tt=Jt[ot]:tt=Jt,z.copy(P.viewport),H.copy(P.scissor),k=P.scissorTest}else z.copy(Q).multiplyScalar(W).floor(),H.copy(ht).multiplyScalar(W).floor(),k=dt;if(ot!==0&&(tt=wu),kt.bindFramebuffer(q.FRAMEBUFFER,tt)&&lt&&kt.drawBuffers(P,tt),kt.viewport(z),kt.scissor(H),kt.setScissorTest(k),At){const Ft=Kt.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,ot)}else if(Dt){const Ft=Kt.get(P.texture),ee=$;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ft.__webglTexture,ot,ee)}else if(P!==null&&ot!==0){const Ft=Kt.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(P,$,ot,lt,tt,At,Dt,Pt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Kt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){kt.bindFramebuffer(q.FRAMEBUFFER,Ft);try{const ee=P.textures[Pt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-lt&&ot>=0&&ot<=P.height-tt&&(P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Pt),q.readPixels($,ot,lt,tt,Ct.convert(Jt),Ct.convert(qt),At))}finally{const ee=I!==null?Kt.get(I).__webglFramebuffer:null;kt.bindFramebuffer(q.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(P,$,ot,lt,tt,At,Dt,Pt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Kt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft)if($>=0&&$<=P.width-lt&&ot>=0&&ot<=P.height-tt){kt.bindFramebuffer(q.FRAMEBUFFER,Ft);const ee=P.textures[Pt],Jt=ee.format,qt=ee.type;if(!de.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,le),q.bufferData(q.PIXEL_PACK_BUFFER,At.byteLength,q.STREAM_READ),P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Pt),q.readPixels($,ot,lt,tt,Ct.convert(Jt),Ct.convert(qt),0);const Ce=I!==null?Kt.get(I).__webglFramebuffer:null;kt.bindFramebuffer(q.FRAMEBUFFER,Ce);const je=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await TA(q,je,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,le),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,At),q.deleteBuffer(le),q.deleteSync(je),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,ot=0){const lt=Math.pow(2,-ot),tt=Math.floor(P.image.width*lt),At=Math.floor(P.image.height*lt),Dt=$!==null?$.x:0,Pt=$!==null?$.y:0;ae.setTexture2D(P,0),q.copyTexSubImage2D(q.TEXTURE_2D,ot,0,0,Dt,Pt,tt,At),kt.unbindTexture()};const Cu=q.createFramebuffer(),mr=q.createFramebuffer();this.copyTextureToTexture=function(P,$,ot=null,lt=null,tt=0,At=null){At===null&&(tt!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=tt,tt=0):At=0);let Dt,Pt,Ft,ee,Jt,qt,le,Ce,je;const fe=P.isCompressedTexture?P.mipmaps[At]:P.image;if(ot!==null)Dt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,Jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const vn=Math.pow(2,-tt);Dt=Math.floor(fe.width*vn),Pt=Math.floor(fe.height*vn),P.isDataArrayTexture?Ft=fe.depth:P.isData3DTexture?Ft=Math.floor(fe.depth*vn):Ft=1,ee=0,Jt=0,qt=0}lt!==null?(le=lt.x,Ce=lt.y,je=lt.z):(le=0,Ce=0,je=0);const De=Ct.convert($.format),Qt=Ct.convert($.type);let ze;$.isData3DTexture?(ae.setTexture3D($,0),ze=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ae.setTexture2DArray($,0),ze=q.TEXTURE_2D_ARRAY):(ae.setTexture2D($,0),ze=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const ve=q.getParameter(q.UNPACK_ROW_LENGTH),Tn=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Jr=q.getParameter(q.UNPACK_SKIP_PIXELS),qe=q.getParameter(q.UNPACK_SKIP_ROWS),_r=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,fe.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,fe.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ee),q.pixelStorei(q.UNPACK_SKIP_ROWS,Jt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,qt);const Ge=P.isDataArrayTexture||P.isData3DTexture,Fn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){const vn=Kt.get(P),bn=Kt.get($),Nn=Kt.get(vn.__renderTarget),$i=Kt.get(bn.__renderTarget);kt.bindFramebuffer(q.READ_FRAMEBUFFER,Nn.__webglFramebuffer),kt.bindFramebuffer(q.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let gr=0;gr<Ft;gr++)Ge&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Kt.get(P).__webglTexture,tt,qt+gr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Kt.get($).__webglTexture,At,je+gr)),q.blitFramebuffer(ee,Jt,Dt,Pt,le,Ce,Dt,Pt,q.DEPTH_BUFFER_BIT,q.NEAREST);kt.bindFramebuffer(q.READ_FRAMEBUFFER,null),kt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||P.isRenderTargetTexture||Kt.has(P)){const vn=Kt.get(P),bn=Kt.get($);kt.bindFramebuffer(q.READ_FRAMEBUFFER,Cu),kt.bindFramebuffer(q.DRAW_FRAMEBUFFER,mr);for(let Nn=0;Nn<Ft;Nn++)Ge?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vn.__webglTexture,tt,qt+Nn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vn.__webglTexture,tt),Fn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bn.__webglTexture,At,je+Nn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bn.__webglTexture,At),tt!==0?q.blitFramebuffer(ee,Jt,Dt,Pt,le,Ce,Dt,Pt,q.COLOR_BUFFER_BIT,q.NEAREST):Fn?q.copyTexSubImage3D(ze,At,le,Ce,je+Nn,ee,Jt,Dt,Pt):q.copyTexSubImage2D(ze,At,le,Ce,ee,Jt,Dt,Pt);kt.bindFramebuffer(q.READ_FRAMEBUFFER,null),kt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Fn?P.isDataTexture||P.isData3DTexture?q.texSubImage3D(ze,At,le,Ce,je,Dt,Pt,Ft,De,Qt,fe.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(ze,At,le,Ce,je,Dt,Pt,Ft,De,fe.data):q.texSubImage3D(ze,At,le,Ce,je,Dt,Pt,Ft,De,Qt,fe):P.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,At,le,Ce,Dt,Pt,De,Qt,fe.data):P.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,At,le,Ce,fe.width,fe.height,De,fe.data):q.texSubImage2D(q.TEXTURE_2D,At,le,Ce,Dt,Pt,De,Qt,fe);q.pixelStorei(q.UNPACK_ROW_LENGTH,ve),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tn),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Jr),q.pixelStorei(q.UNPACK_SKIP_ROWS,qe),q.pixelStorei(q.UNPACK_SKIP_IMAGES,_r),At===0&&$.generateMipmaps&&q.generateMipmap(ze),kt.unbindTexture()},this.copyTextureToTexture3D=function(P,$,ot=null,lt=null,tt=0){return Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,$,ot,lt,tt)},this.initRenderTarget=function(P){Kt.get(P).__webglFramebuffer===void 0&&ae.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ae.setTextureCube(P,0):P.isData3DTexture?ae.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ae.setTexture2DArray(P,0):ae.setTexture2D(P,0),kt.unbindTexture()},this.resetState=function(){N=0,U=0,I=null,kt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const Lx=`varying vec2 vUv;\r
\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,GD=`precision highp float;\r
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
}`,VD=`precision highp float;\r
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
}`,Ir={distortionAmount:2.5,fluidDecay:.98,trailLength:.8,color1:new Re("#666666"),color2:new Re("#4d4d4d"),color3:new Re("#333333"),color4:new Re("#000000"),colorIntensity:1,softness:1},kD=30,XD=1.5,cf=.75,qD=150,Ox=new bu(2,2);function WD(){const o=Ye.useRef(null);return Ye.useEffect(()=>{let t,n,r=!0,a=!0,l=0,c=0,f=Math.min(window.devicePixelRatio,XD),d=!0;const h=window.innerWidth,m=window.innerHeight,_=new HD({antialias:!0,alpha:!0});_.setSize(h,m),_.setPixelRatio(f);const v=new wM(-1,1,1,-1,0,1),y={minFilter:Hi,magFilter:Hi,format:Gi,type:Zo,stencilBuffer:!1,depthBuffer:!1},E=Math.floor(h*cf),M=Math.floor(m*cf),S=new Ga(E,M,y),x=S.clone();let R=S,A=x;const b=new hr({vertexShader:Lx,fragmentShader:GD,uniforms:{iTime:{value:0},iResolution:{value:new Ue(E,M)},iFrame:{value:0},iPreviousFrame:{value:A.texture},uFluidDecay:{value:Ir.fluidDecay},uTrailLength:{value:Ir.trailLength}}}),D=new hr({vertexShader:Lx,fragmentShader:VD,uniforms:{iTime:{value:0},iResolution:{value:new Ue(h,m)},iFluid:{value:R.texture},uDistortionAmount:{value:Ir.distortionAmount},uColor1:{value:Ir.color1},uColor2:{value:Ir.color2},uColor3:{value:Ir.color3},uColor4:{value:Ir.color4},uColorIntensity:{value:Ir.colorIntensity},uSoftness:{value:Ir.softness}}}),N=new Qi(Ox,b),U=new Qi(Ox,D),I=o.current;I&&I.appendChild(_.domElement);const w=()=>{clearTimeout(n),n=setTimeout(()=>{if(!d||!o.current)return;const Y=window.innerWidth,et=window.innerHeight,F=Math.floor(Y*cf),X=Math.floor(et*cf);_.setSize(Y,et),b.uniforms.iResolution.value.set(F,X),D.uniforms.iResolution.value.set(Y,et),S.setSize(F,X),x.setSize(F,X),c=0},qD)};window.addEventListener("resize",w);const C=()=>{r=!document.hidden};document.addEventListener("visibilitychange",C);const z=new IntersectionObserver(([Y])=>{a=Y.isIntersecting});I&&z.observe(I);let H=[];const k=Y=>{if(!d||(t=requestAnimationFrame(k),!r||!a))return;const et=Y-l;if(et<1e3/kD)return;l=Y;const F=performance.now()*.001;b.uniforms.iTime.value=F,b.uniforms.iFrame.value=c,b.uniforms.iPreviousFrame.value=A.texture,D.uniforms.iTime.value=F,D.uniforms.iFluid.value=R.texture,_.setRenderTarget(R),_.render(N,v),_.setRenderTarget(null),_.render(U,v),[R,A]=[A,R],c++;{const X=et;if(H.push(X),H.length>60){const W=H.reduce((yt,B)=>yt+B,0)/H.length;H=[],W>35&&f>1&&(f=Math.max(1,f-.25),_.setPixelRatio(f))}}};return k(0),()=>{d=!1,cancelAnimationFrame(t),clearTimeout(n),window.removeEventListener("resize",w),document.removeEventListener("visibilitychange",C),z.disconnect(),I&&_.domElement&&I.removeChild(_.domElement),_.dispose(),S.dispose(),x.dispose(),b.dispose(),D.dispose()}},[]),mt.jsx("div",{className:"backgroundCanvas",ref:o,"arial-hidden":"true"})}/*!
 * CSSRulePlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Oa,e_,Nf,qf,NM=function(){return typeof window<"u"},PM=function(){return Oa||NM()&&(Oa=window.gsap)&&Oa.registerPlugin&&Oa},Nx=function(){return e_||(zM(),qf||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),e_},zM=function(t){Oa=t||PM(),NM()&&(Nf=document),Oa&&(qf=Oa.plugins.css,qf&&(e_=1))},U_={version:"3.13.0",name:"cssRule",init:function(t,n,r,a,l){if(!Nx()||typeof t.cssText>"u")return!1;var c=t._gsProxy=t._gsProxy||Nf.createElement("div");this.ss=t,this.style=c.style,c.style.cssText=t.cssText,qf.prototype.init.call(this,c,n,r,a,l)},render:function(t,n){for(var r=n._pt,a=n.style,l=n.ss,c;r;)r.r(t,r.d),r=r._next;for(c=a.length;--c>-1;)l[a[c]]=a[a[c]]},getRule:function(t){Nx();var n=Nf.all?"rules":"cssRules",r=Nf.styleSheets,a=r.length,l=t.charAt(0)===":",c,f,d,h;for(t=(l?"":",")+t.split("::").join(":").toLowerCase()+",",l&&(h=[]);a--;){try{if(f=r[a][n],!f)continue;c=f.length}catch(m){console.warn(m);continue}for(;--c>-1;)if(d=f[c],d.selectorText&&(","+d.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)!==-1)if(l)h.push(d.style);else return d.style}return h},register:zM};PM()&&Oa.registerPlugin(U_);/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Px=typeof document<"u"?Ye.useLayoutEffect:Ye.useEffect,zx=o=>o&&!Array.isArray(o)&&typeof o=="object",ff=[],YD={},IM=ni;const Jf=(o,t=ff)=>{let n=YD;zx(o)?(n=o,o=null,t="dependencies"in n?n.dependencies:ff):zx(t)&&(n=t,t="dependencies"in n?n.dependencies:ff),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:r,revertOnUpdate:a}=n,l=Ye.useRef(!1),c=Ye.useRef(IM.context(()=>{},r)),f=Ye.useRef(h=>c.current.add(null,h)),d=t&&t.length&&!a;return d&&Px(()=>(l.current=!0,()=>c.current.revert()),ff),Px(()=>{if(o&&c.current.add(o,r),!d||!l.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};Jf.register=o=>{IM=o};Jf.headless=!0;const jD="_nav_1ve7c_1",ZD="_logo_1ve7c_37",KD="_burger_1ve7c_67",QD="_active_1ve7c_109",JD="_overlay_1ve7c_135",Dn={nav:jD,logo:ZD,"toggle-btn":"_toggle-btn_1ve7c_57",burger:KD,active:QD,overlay:JD,"overlay-menu":"_overlay-menu_1ve7c_169","menu-item":"_menu-item_1ve7c_193","sub-nav":"_sub-nav_1ve7c_277"};var Ke={},hf={},df={},pf={},jp,Ix;function $D(){if(Ix)return jp;Ix=1;var o="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,d=typeof zc=="object"&&zc&&zc.Object===Object&&zc,h=typeof self=="object"&&self&&self.Object===Object&&self,m=d||h||Function("return this")(),_=Object.prototype,v=_.toString,y=Math.max,E=Math.min,M=function(){return m.Date.now()};function S(N,U,I){var w,C,z,H,k,Y,et=0,F=!1,X=!1,W=!0;if(typeof N!="function")throw new TypeError(o);U=D(U)||0,R(I)&&(F=!!I.leading,X="maxWait"in I,z=X?y(D(I.maxWait)||0,U):z,W="trailing"in I?!!I.trailing:W);function yt(Et){var Zt=w,Nt=C;return w=C=void 0,et=Et,H=N.apply(Nt,Zt),H}function B(Et){return et=Et,k=setTimeout(dt,U),F?yt(Et):H}function Q(Et){var Zt=Et-Y,Nt=Et-et,Se=U-Zt;return X?E(Se,z-Nt):Se}function ht(Et){var Zt=Et-Y,Nt=Et-et;return Y===void 0||Zt>=U||Zt<0||X&&Nt>=z}function dt(){var Et=M();if(ht(Et))return K(Et);k=setTimeout(dt,Q(Et))}function K(Et){return k=void 0,W&&w?yt(Et):(w=C=void 0,H)}function ft(){k!==void 0&&clearTimeout(k),et=0,w=Y=C=k=void 0}function Mt(){return k===void 0?H:K(M())}function Rt(){var Et=M(),Zt=ht(Et);if(w=arguments,C=this,Y=Et,Zt){if(k===void 0)return B(Y);if(X)return k=setTimeout(dt,U),yt(Y)}return k===void 0&&(k=setTimeout(dt,U)),H}return Rt.cancel=ft,Rt.flush=Mt,Rt}function x(N,U,I){var w=!0,C=!0;if(typeof N!="function")throw new TypeError(o);return R(I)&&(w="leading"in I?!!I.leading:w,C="trailing"in I?!!I.trailing:C),S(N,U,{leading:w,maxWait:U,trailing:C})}function R(N){var U=typeof N;return!!N&&(U=="object"||U=="function")}function A(N){return!!N&&typeof N=="object"}function b(N){return typeof N=="symbol"||A(N)&&v.call(N)==n}function D(N){if(typeof N=="number")return N;if(b(N))return t;if(R(N)){var U=typeof N.valueOf=="function"?N.valueOf():N;N=R(U)?U+"":U}if(typeof N!="string")return N===0?N:+N;N=N.replace(r,"");var I=l.test(N);return I||c.test(N)?f(N.slice(2),I?2:8):a.test(N)?t:+N}return jp=x,jp}var $l={},Bx;function L_(){if(Bx)return $l;Bx=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.addPassiveEventListener=function(n,r,a){var l=a.name;l||(l=r,console.warn("Listener must be a named function.")),o.has(r)||o.set(r,new Set);var c=o.get(r);if(!c.has(l)){var f=function(){var d=!1;try{var h=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,h)}catch{}return d}();n.addEventListener(r,a,f?{passive:!0}:!1),c.add(l)}},$l.removePassiveEventListener=function(n,r,a){n.removeEventListener(r,a),o.get(r).delete(a.name||r)};var o=new Map;return $l}var Fx;function O_(){if(Fx)return pf;Fx=1,Object.defineProperty(pf,"__esModule",{value:!0});var o=$D(),t=r(o),n=L_();function r(c){return c&&c.__esModule?c:{default:c}}var a=function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(f,d)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,d){if(f){var h=a(function(m){l.scrollHandler(f)},d);return l.scrollSpyContainers.push(f),(0,n.addPassiveEventListener)(f,"scroll",h),function(){(0,n.removePassiveEventListener)(f,"scroll",h),l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(f),1)}}return function(){}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var d=window.scrollY!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollX:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var d=window.scrollX!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollY:h?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var d=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];d.forEach(function(h){return h(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,d){var h=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(d)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(f)},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,d){l.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(d)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(d),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return pf.default=l,pf}var mf={},_f={},Hx;function $f(){if(Hx)return _f;Hx=1,Object.defineProperty(_f,"__esModule",{value:!0});var o=function(f,d){var h=f.indexOf("#")===0?f.substring(1):f,m=h?"#"+h:"",_=window&&window.location,v=m?_.pathname+_.search+m:_.pathname+_.search;d?history.pushState(history.state,"",v):history.replaceState(history.state,"",v)},t=function(){return window.location.hash.replace(/^#/,"")},n=function(f){return function(d){return f.contains?f!=d&&f.contains(d):!!(f.compareDocumentPosition(d)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},a=function(f,d){for(var h=f.offsetTop,m=f.offsetParent;m&&!d(m);)h+=m.offsetTop,m=m.offsetParent;return{offsetTop:h,offsetParent:m}},l=function(f,d,h){if(h)return f===document?d.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?d.offsetLeft:d.offsetLeft-f.offsetLeft;if(f===document)return d.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(d.offsetParent!==f){var m=function(S){return S===f||S===document},_=a(d,m),v=_.offsetTop,y=_.offsetParent;if(y!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return v}return d.offsetTop}if(d.offsetParent===f.offsetParent)return d.offsetTop-f.offsetTop;var E=function(S){return S===document};return a(d,E).offsetTop-a(f,E).offsetTop};return _f.default={updateHash:o,getHash:t,filterElementInContainer:n,scrollOffset:l},_f}var gf={},vf={},Gx;function t3(){return Gx||(Gx=1,Object.defineProperty(vf,"__esModule",{value:!0}),vf.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),vf}var yf={},Vx;function e3(){if(Vx)return yf;Vx=1,Object.defineProperty(yf,"__esModule",{value:!0});var o=L_(),t=["mousedown","wheel","touchmove","keydown"];return yf.default={subscribe:function(r){return typeof document<"u"&&t.forEach(function(a){return(0,o.addPassiveEventListener)(document,a,r)})}},yf}var xf={},kx;function N_(){if(kx)return xf;kx=1,Object.defineProperty(xf,"__esModule",{value:!0});var o={registered:{},scrollEvent:{register:function(n,r){o.registered[n]=r},remove:function(n){o.registered[n]=null}}};return xf.default=o,xf}var Xx;function BM(){if(Xx)return gf;Xx=1,Object.defineProperty(gf,"__esModule",{value:!0});var o=Object.assign||function(C){for(var z=1;z<arguments.length;z++){var H=arguments[z];for(var k in H)Object.prototype.hasOwnProperty.call(H,k)&&(C[k]=H[k])}return C},t=$f();d(t);var n=t3(),r=d(n),a=e3(),l=d(a),c=N_(),f=d(c);function d(C){return C&&C.__esModule?C:{default:C}}var h=function(z){return r.default[z.smooth]||r.default.defaultEasing},m=function(z){return typeof z=="function"?z:function(){return z}},_=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},v=function(){return _()||function(C,z,H){window.setTimeout(C,H||1e3/60,new Date().getTime())}}(),y=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},E=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollLeft;var k=window.pageXOffset!==void 0,Y=(document.compatMode||"")==="CSS1Compat";return k?window.pageXOffset:Y?document.documentElement.scrollLeft:document.body.scrollLeft},M=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollTop;var k=window.pageXOffset!==void 0,Y=(document.compatMode||"")==="CSS1Compat";return k?window.pageYOffset:Y?document.documentElement.scrollTop:document.body.scrollTop},S=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollWidth-H.offsetWidth;var k=document.body,Y=document.documentElement;return Math.max(k.scrollWidth,k.offsetWidth,Y.clientWidth,Y.scrollWidth,Y.offsetWidth)},x=function(z){var H=z.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollHeight-H.offsetHeight;var k=document.body,Y=document.documentElement;return Math.max(k.scrollHeight,k.offsetHeight,Y.clientHeight,Y.scrollHeight,Y.offsetHeight)},R=function C(z,H,k){var Y=H.data;if(!H.ignoreCancelEvents&&Y.cancel){f.default.registered.end&&f.default.registered.end(Y.to,Y.target,Y.currentPositionY);return}if(Y.delta=Math.round(Y.targetPosition-Y.startPosition),Y.start===null&&(Y.start=k),Y.progress=k-Y.start,Y.percent=Y.progress>=Y.duration?1:z(Y.progress/Y.duration),Y.currentPosition=Y.startPosition+Math.ceil(Y.delta*Y.percent),Y.containerElement&&Y.containerElement!==document&&Y.containerElement!==document.body?H.horizontal?Y.containerElement.scrollLeft=Y.currentPosition:Y.containerElement.scrollTop=Y.currentPosition:H.horizontal?window.scrollTo(Y.currentPosition,0):window.scrollTo(0,Y.currentPosition),Y.percent<1){var et=C.bind(null,z,H);v.call(window,et);return}f.default.registered.end&&f.default.registered.end(Y.to,Y.target,Y.currentPosition)},A=function(z){z.data.containerElement=z?z.containerId?document.getElementById(z.containerId):z.container&&z.container.nodeType?z.container:document:null},b=function(z,H,k,Y){H.data=H.data||y(),window.clearTimeout(H.data.delayTimeout);var et=function(){H.data.cancel=!0};if(l.default.subscribe(et),A(H),H.data.start=null,H.data.cancel=!1,H.data.startPosition=H.horizontal?E(H):M(H),H.data.targetPosition=H.absolute?z:z+H.data.startPosition,H.data.startPosition===H.data.targetPosition){f.default.registered.end&&f.default.registered.end(H.data.to,H.data.target,H.data.currentPosition);return}H.data.delta=Math.round(H.data.targetPosition-H.data.startPosition),H.data.duration=m(H.duration)(H.data.delta),H.data.duration=isNaN(parseFloat(H.data.duration))?1e3:parseFloat(H.data.duration),H.data.to=k,H.data.target=Y;var F=h(H),X=R.bind(null,F,H);if(H&&H.delay>0){H.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),v.call(window,X)},H.delay);return}f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),v.call(window,X)},D=function(z){return z=o({},z),z.data=z.data||y(),z.absolute=!0,z},N=function(z){b(0,D(z))},U=function(z,H){b(z,D(H))},I=function(z){z=D(z),A(z),b(z.horizontal?S(z):x(z),z)},w=function(z,H){H=D(H),A(H);var k=H.horizontal?E(H):M(H);b(z+k,H)};return gf.default={animateTopScroll:b,getAnimationType:h,scrollToTop:N,scrollToBottom:I,scrollTo:U,scrollMore:w},gf}var qx;function th(){if(qx)return mf;qx=1,Object.defineProperty(mf,"__esModule",{value:!0});var o=Object.assign||function(m){for(var _=1;_<arguments.length;_++){var v=arguments[_];for(var y in v)Object.prototype.hasOwnProperty.call(v,y)&&(m[y]=v[y])}return m},t=$f(),n=f(t),r=BM(),a=f(r),l=N_(),c=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var d={},h=void 0;return mf.default={unmount:function(){d={}},register:function(_,v){d[_]=v},unregister:function(_){delete d[_]},get:function(_){return d[_]||document.getElementById(_)||document.getElementsByName(_)[0]||document.getElementsByClassName(_)[0]},setActiveLink:function(_){return h=_},getActiveLink:function(){return h},scrollTo:function(_,v){var y=this.get(_);if(!y){console.warn("target Element not found");return}v=o({},v,{absolute:!1});var E=v.containerId,M=v.container,S=void 0;E?S=document.getElementById(E):M&&M.nodeType?S=M:S=document,v.absolute=!0;var x=v.horizontal,R=n.default.scrollOffset(S,y,x)+(v.offset||0);if(!v.smooth){c.default.registered.begin&&c.default.registered.begin(_,y),S===document?v.horizontal?window.scrollTo(R,0):window.scrollTo(0,R):S.scrollTop=R,c.default.registered.end&&c.default.registered.end(_,y);return}a.default.animateTopScroll(R,v,_,y)}},mf}var Zp={exports:{}},Kp,Wx;function n3(){if(Wx)return Kp;Wx=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Kp=o,Kp}var Qp,Yx;function i3(){if(Yx)return Qp;Yx=1;var o=n3();function t(){}function n(){}return n.resetWarningCache=t,Qp=function(){function r(c,f,d,h,m,_){if(_!==o){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},Qp}var jx;function eh(){return jx||(jx=1,Zp.exports=i3()()),Zp.exports}var Sf={},Zx;function FM(){if(Zx)return Sf;Zx=1,Object.defineProperty(Sf,"__esModule",{value:!0}),L_();var o=$f(),t=n(o);function n(a){return a&&a.__esModule?a:{default:a}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,c){this.containers[l]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,c=this.getHash();c?window.setTimeout(function(){l.scrollTo(c,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,c){var f=this.scroller,d=f.get(l);if(d&&(c||l!==f.getActiveLink())){var h=this.containers[l]||document;f.scrollTo(l,{container:h})}},getHash:function(){return t.default.getHash()},changeHash:function(l,c){this.isInitialized()&&t.default.getHash()!==l&&t.default.updateHash(l,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Sf.default=r,Sf}var Kx;function P_(){if(Kx)return df;Kx=1,Object.defineProperty(df,"__esModule",{value:!0});var o=Object.assign||function(x){for(var R=1;R<arguments.length;R++){var A=arguments[R];for(var b in A)Object.prototype.hasOwnProperty.call(A,b)&&(x[b]=A[b])}return x},t=function(){function x(R,A){for(var b=0;b<A.length;b++){var D=A[b];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(R,D.key,D)}}return function(R,A,b){return A&&x(R.prototype,A),b&&x(R,b),R}}(),n=jr(),r=v(n),a=O_(),l=v(a),c=th(),f=v(c),d=eh(),h=v(d),m=FM(),_=v(m);function v(x){return x&&x.__esModule?x:{default:x}}function y(x,R){if(!(x instanceof R))throw new TypeError("Cannot call a class as a function")}function E(x,R){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:x}function M(x,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);x.prototype=Object.create(R&&R.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(x,R):x.__proto__=R)}var S={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return df.default=function(x,R){var A=R||f.default,b=function(N){M(U,N);function U(I){y(this,U);var w=E(this,(U.__proto__||Object.getPrototypeOf(U)).call(this,I));return D.call(w),w.state={active:!1},w.beforeUnmountCallbacks=[],w}return t(U,[{key:"getScrollSpyContainer",value:function(){var w=this.props.containerId,C=this.props.container;return w&&!C?document.getElementById(w):C&&C.nodeType?C:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var w=this.getScrollSpyContainer();if(!l.default.isMounted(w)){var C=l.default.mount(w,this.props.spyThrottle);this.beforeUnmountCallbacks.push(C)}this.props.hashSpy&&(_.default.isMounted()||_.default.mount(A),_.default.mapContainer(this.props.to,w)),l.default.addSpyHandler(this.spyHandler,w),this.setState({container:w})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(w){return w()})}},{key:"render",value:function(){var w="";this.state&&this.state.active?w=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():w=this.props.className;var C={};this.state&&this.state.active?C=o({},this.props.style,this.props.activeStyle):C=o({},this.props.style);var z=o({},this.props);for(var H in S)z.hasOwnProperty(H)&&delete z[H];return z.className=w,z.style=C,z.onClick=this.handleClick,r.default.createElement(x,z)}}]),U}(r.default.PureComponent),D=function(){var U=this;this.scrollTo=function(I,w){A.scrollTo(I,o({},U.state,w))},this.handleClick=function(I){U.props.onClick&&U.props.onClick(I),I.stopPropagation&&I.stopPropagation(),I.preventDefault&&I.preventDefault(),U.scrollTo(U.props.to,U.props)},this.spyHandler=function(I,w){var C=U.getScrollSpyContainer();if(!(_.default.isMounted()&&!_.default.isInitialized())){var z=U.props.horizontal,H=U.props.to,k=null,Y=void 0,et=void 0;if(z){var F=0,X=0,W=0;if(C.getBoundingClientRect){var yt=C.getBoundingClientRect();W=yt.left}if(!k||U.props.isDynamic){if(k=A.get(H),!k)return;var B=k.getBoundingClientRect();F=B.left-W+I,X=F+B.width}var Q=I-U.props.offset;Y=Q>=Math.floor(F)&&Q<Math.floor(X),et=Q<Math.floor(F)||Q>=Math.floor(X)}else{var ht=0,dt=0,K=0;if(C.getBoundingClientRect){var ft=C.getBoundingClientRect();K=ft.top}if(!k||U.props.isDynamic){if(k=A.get(H),!k)return;var Mt=k.getBoundingClientRect();ht=Mt.top-K+w,dt=ht+Mt.height}var Rt=w-U.props.offset;Y=Rt>=Math.floor(ht)&&Rt<Math.floor(dt),et=Rt<Math.floor(ht)||Rt>=Math.floor(dt)}var Et=A.getActiveLink();if(et){if(H===Et&&A.setActiveLink(void 0),U.props.hashSpy&&_.default.getHash()===H){var Zt=U.props.saveHashHistory,Nt=Zt===void 0?!1:Zt;_.default.changeHash("",Nt)}U.props.spy&&U.state.active&&(U.setState({active:!1}),U.props.onSetInactive&&U.props.onSetInactive(H,k))}if(Y&&(Et!==H||U.state.active===!1)){A.setActiveLink(H);var Se=U.props.saveHashHistory,Le=Se===void 0?!1:Se;U.props.hashSpy&&_.default.changeHash(H,Le),U.props.spy&&(U.setState({active:!0}),U.props.onSetActive&&U.props.onSetActive(H,k))}}}};return b.propTypes=S,b.defaultProps={offset:0},b},df}var Qx;function r3(){if(Qx)return hf;Qx=1,Object.defineProperty(hf,"__esModule",{value:!0});var o=jr(),t=a(o),n=P_(),r=a(n);function a(h){return h&&h.__esModule?h:{default:h}}function l(h,m){if(!(h instanceof m))throw new TypeError("Cannot call a class as a function")}function c(h,m){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:h}function f(h,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);h.prototype=Object.create(m&&m.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(h,m):h.__proto__=m)}var d=function(h){f(m,h);function m(){var _,v,y,E;l(this,m);for(var M=arguments.length,S=Array(M),x=0;x<M;x++)S[x]=arguments[x];return E=(v=(y=c(this,(_=m.__proto__||Object.getPrototypeOf(m)).call.apply(_,[this].concat(S))),y),y.render=function(){return t.default.createElement("a",y.props,y.props.children)},v),c(y,E)}return m}(t.default.Component);return hf.default=(0,r.default)(d),hf}var Mf={},Jx;function a3(){if(Jx)return Mf;Jx=1,Object.defineProperty(Mf,"__esModule",{value:!0});var o=function(){function m(_,v){for(var y=0;y<v.length;y++){var E=v[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(_,E.key,E)}}return function(_,v,y){return v&&m(_.prototype,v),y&&m(_,y),_}}(),t=jr(),n=l(t),r=P_(),a=l(r);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,_){if(!(m instanceof _))throw new TypeError("Cannot call a class as a function")}function f(m,_){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:m}function d(m,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);m.prototype=Object.create(_&&_.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(m,_):m.__proto__=_)}var h=function(m){d(_,m);function _(){return c(this,_),f(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return o(_,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),_}(n.default.Component);return Mf.default=(0,a.default)(h),Mf}var Ef={},Tf={},$x;function HM(){if($x)return Tf;$x=1,Object.defineProperty(Tf,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=jr(),r=h(n),a=n_();h(a);var l=th(),c=h(l),f=eh(),d=h(f);function h(y){return y&&y.__esModule?y:{default:y}}function m(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function _(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function v(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}return Tf.default=function(y){var E=function(M){v(S,M);function S(x){m(this,S);var R=_(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return R.childBindings={domNode:null},R}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(R){c.default.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(r.default.Component);return E.propTypes={name:d.default.string,id:d.default.string},E},Tf}var tS;function s3(){if(tS)return Ef;tS=1,Object.defineProperty(Ef,"__esModule",{value:!0});var o=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var S in M)Object.prototype.hasOwnProperty.call(M,S)&&(y[S]=M[S])}return y},t=function(){function y(E,M){for(var S=0;S<M.length;S++){var x=M[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,M,S){return M&&y(E.prototype,M),S&&y(E,S),E}}(),n=jr(),r=d(n),a=HM(),l=d(a),c=eh(),f=d(c);function d(y){return y&&y.__esModule?y:{default:y}}function h(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}function m(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function _(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}var v=function(y){_(E,y);function E(){return h(this,E),m(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return t(E,[{key:"render",value:function(){var S=this,x=o({},this.props);return delete x.name,x.parentBindings&&delete x.parentBindings,r.default.createElement("div",o({},x,{ref:function(A){S.props.parentBindings.domNode=A}}),this.props.children)}}]),E}(r.default.Component);return v.propTypes={name:f.default.string,id:f.default.string},Ef.default=(0,l.default)(v),Ef}var Jp,eS;function o3(){if(eS)return Jp;eS=1;var o=Object.assign||function(v){for(var y=1;y<arguments.length;y++){var E=arguments[y];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(v[M]=E[M])}return v},t=function(){function v(y,E){for(var M=0;M<E.length;M++){var S=E[M];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,E,M){return E&&v(y.prototype,E),M&&v(y,M),y}}();function n(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function r(v,y){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:v}function a(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(v,y):v.__proto__=y)}var l=jr();n_(),$f();var c=O_(),f=th(),d=eh(),h=FM(),m={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},_={Scroll:function(y,E){console.warn("Helpers.Scroll is deprecated since v1.7.0");var M=E||f,S=function(R){a(A,R);function A(b){n(this,A);var D=r(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,b));return x.call(D),D.state={active:!1},D}return t(A,[{key:"getScrollSpyContainer",value:function(){var D=this.props.containerId,N=this.props.container;return D?document.getElementById(D):N&&N.nodeType?N:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var D=this.getScrollSpyContainer();c.isMounted(D)||c.mount(D,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(M),h.mapContainer(this.props.to,D)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,D),this.setState({container:D})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var D="";this.state&&this.state.active?D=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():D=this.props.className;var N=o({},this.props);for(var U in m)N.hasOwnProperty(U)&&delete N[U];return N.className=D,N.onClick=this.handleClick,l.createElement(y,N)}}]),A}(l.Component),x=function(){var A=this;this.scrollTo=function(b,D){M.scrollTo(b,o({},A.state,D))},this.handleClick=function(b){A.props.onClick&&A.props.onClick(b),b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault(),A.scrollTo(A.props.to,A.props)},this.stateHandler=function(){M.getActiveLink()!==A.props.to&&(A.state!==null&&A.state.active&&A.props.onSetInactive&&A.props.onSetInactive(),A.setState({active:!1}))},this.spyHandler=function(b){var D=A.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var N=A.props.to,U=null,I=0,w=0,C=0;if(D.getBoundingClientRect){var z=D.getBoundingClientRect();C=z.top}if(!U||A.props.isDynamic){if(U=M.get(N),!U)return;var H=U.getBoundingClientRect();I=H.top-C+b,w=I+H.height}var k=b-A.props.offset,Y=k>=Math.floor(I)&&k<Math.floor(w),et=k<Math.floor(I)||k>=Math.floor(w),F=M.getActiveLink();if(et)return N===F&&M.setActiveLink(void 0),A.props.hashSpy&&h.getHash()===N&&h.changeHash(),A.props.spy&&A.state.active&&(A.setState({active:!1}),A.props.onSetInactive&&A.props.onSetInactive()),c.updateStates();if(Y&&F!==N)return M.setActiveLink(N),A.props.hashSpy&&h.changeHash(N),A.props.spy&&(A.setState({active:!0}),A.props.onSetActive&&A.props.onSetActive(N)),c.updateStates()}}};return S.propTypes=m,S.defaultProps={offset:0},S},Element:function(y){console.warn("Helpers.Element is deprecated since v1.7.0");var E=function(M){a(S,M);function S(x){n(this,S);var R=r(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,x));return R.childBindings={domNode:null},R}return t(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(R){f.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(y,o({},this.props,{parentBindings:this.childBindings}))}}]),S}(l.Component);return E.propTypes={name:d.string,id:d.string},E}};return Jp=_,Jp}var nS;function l3(){if(nS)return Ke;nS=1,Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.Helpers=Ke.ScrollElement=Ke.ScrollLink=Ke.animateScroll=Ke.scrollSpy=Ke.Events=Ke.scroller=Ke.Element=Ke.Button=Ke.Link=void 0;var o=r3(),t=b(o),n=a3(),r=b(n),a=s3(),l=b(a),c=th(),f=b(c),d=N_(),h=b(d),m=O_(),_=b(m),v=BM(),y=b(v),E=P_(),M=b(E),S=HM(),x=b(S),R=o3(),A=b(R);function b(D){return D&&D.__esModule?D:{default:D}}return Ke.Link=t.default,Ke.Button=r.default,Ke.Element=l.default,Ke.scroller=f.default,Ke.Events=h.default,Ke.scrollSpy=_.default,Ke.animateScroll=y.default,Ke.ScrollLink=M.default,Ke.ScrollElement=x.default,Ke.Helpers=A.default,Ke.default={Link:t.default,Button:r.default,Element:l.default,scroller:f.default,Events:h.default,scrollSpy:_.default,animateScroll:y.default,ScrollLink:M.default,ScrollElement:x.default,Helpers:A.default},Ke}var ru=l3();ni.registerPlugin(Jf,U_);const u3=()=>{const[o,t]=Ye.useState(!1),[n,r]=Ye.useState(null),a=Ye.useRef(null),l=Ye.useRef([]),c=Ye.useRef(null),f=Ye.useRef(null),d=Ye.useRef(null);Jf(()=>{ni.set(l.current,{y:1e3}),ni.set(f.current,{opacity:0,bottom:"5%"});const _=ni.timeline({paused:!0});_.to(a.current,{duration:1.5,clipPath:"polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",ease:"power4.inOut"}),_.to(l.current,{duration:1,y:0,stagger:.2,ease:"power4.inOut"},"-=1"),_.to(f.current,{bottom:"10%",opacity:1,duration:.5,delay:.5},"<"),d.current=_},[]);const h=()=>{d.current&&(o?d.current.reverse():d.current.play(),t(!o))},m=_=>{if(!d.current)return;r(_);const v=U_.getRule(`.${Dn["menu-item"]} p.${Dn.active}::after`);v&&ni.fromTo(v,{width:"0%"},{width:"100%",duration:1,ease:"power2.out"}),d.current.reverse().eventCallback("onReverseComplete",()=>{r(null),f.current&&ni.set(f.current,{opacity:0,bottom:"5%"})}),t(!1)};return mt.jsxs(mt.Fragment,{children:[mt.jsxs("nav",{className:Dn.nav,role:"navigation","aria-label":"main-nav",children:[mt.jsx("div",{}),mt.jsx("div",{className:`${Dn.logo} `,children:mt.jsx("a",{href:"./",children:"s. rivera"})}),mt.jsx("div",{className:Dn["toggle-btn"],children:mt.jsxs("button",{className:`${Dn.burger} ${o?Dn.active:""}`,onClick:h,ref:c,"aria-label":"Toggle menu",children:[mt.jsx("span",{})," ",mt.jsx("span",{}),mt.jsx("span",{})]})})]}),mt.jsxs("div",{ref:a,className:Dn.overlay,children:[mt.jsxs("menu",{className:Dn["overlay-menu"],children:[mt.jsx("div",{className:Dn["menu-item"],ref:_=>{_&&(l.current[0]=_)},children:mt.jsx("p",{className:n==="hero"?Dn.active:"",children:mt.jsx(ru.Link,{to:"hero",spy:!0,smooth:!0,duration:500,onClick:()=>m("hero"),children:"home"})})}),mt.jsx("div",{className:Dn["menu-item"],ref:_=>{_&&(l.current[1]=_)},children:mt.jsx("p",{className:n==="about"?Dn.active:"",children:mt.jsx(ru.Link,{to:"about",spy:!0,smooth:!0,duration:500,onClick:()=>m("about"),children:"about"})})}),mt.jsx("div",{className:Dn["menu-item"],ref:_=>{_&&(l.current[2]=_)},children:mt.jsx("p",{className:n==="projects"?Dn.active:"",children:mt.jsx(ru.Link,{to:"projects",spy:!0,smooth:!0,duration:500,onClick:()=>m("projects"),children:"work"})})}),mt.jsx("div",{className:Dn["menu-item"],ref:_=>{_&&(l.current[3]=_)},children:mt.jsx("p",{className:n==="contact"?Dn.active:"",children:mt.jsx(ru.Link,{to:"contact",spy:!0,smooth:!0,duration:500,onClick:()=>m("footer"),children:"contact"})})})]}),mt.jsxs("div",{className:Dn["sub-nav"],ref:f,children:[mt.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane","aria-label":"email"}),mt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in",target:"_blank","aria-label":"linkedin"}),mt.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github",target:"_blank","aria-label":"github"}),mt.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen",target:"_blank","aria-label":"codepen"})]})]})]})},c3=()=>{const o=Ye.useRef(null),[t,n]=Ye.useState(!1),r=30;return Ye.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0){n(!0);return}const l=o.current;if(!l)return;const c=m=>{ni.to(l,{x:m.clientX,y:m.clientY,duration:.2,ease:"power3.out"})},f=()=>{ni.to(l,{scale:2.5,duration:.3,ease:"power3.out"})},d=()=>{ni.to(l,{scale:1,duration:.3,ease:"power3.out"})};window.addEventListener("mousemove",c);const h=document.querySelectorAll("a, button, [data-interactive='true']");return h.forEach(m=>{m.addEventListener("mouseenter",f),m.addEventListener("mouseleave",d)}),()=>{window.removeEventListener("mousemove",c),h.forEach(m=>{m.removeEventListener("mouseenter",f),m.removeEventListener("mouseleave",d)})}},[]),t?null:mt.jsx("div",{ref:o,className:"customCursor",style:{width:r,height:r}})},f3="_hero_1nhsw_1",h3="_left_1nhsw_13",d3="_right_1nhsw_15",p3="_split_1nhsw_29",m3="_socials_1nhsw_103",Ro={hero:f3,left:h3,right:d3,split:p3,socials:m3},_3=()=>mt.jsxs("section",{id:"hero","aria-labelledby":"hero-section",className:Ro.hero,children:[mt.jsx("div",{className:Ro.left,children:mt.jsxs("div",{className:Ro.split,children:[mt.jsxs("h1",{children:["SAMUEL ",mt.jsx("br",{})," RIVERA"]}),mt.jsx("h5",{children:"software developer"})]})}),mt.jsx("div",{className:Ro.right,children:mt.jsxs("div",{className:Ro.split,children:[mt.jsx("p",{children:"Passionate about web development, I combine a solid foundation in Java and TypeScript with experience in React, Angular, and Spring Boot to create solutions that work as well as they look. I focus on building smooth, scalable products designed for the end user."}),mt.jsxs("div",{className:Ro.socials,children:[mt.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:"fa-solid fa-paper-plane ","aria-label":"email"}),mt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"fa-brands fa-linkedin-in ",target:"_blank","aria-label":"linkedin"}),mt.jsx("a",{href:"https://github.com/dnbsammie",className:"fa-brands fa-github ",target:"_blank","aria-label":"github"}),mt.jsx("a",{href:"https://codepen.io/dnbsammie",className:"fa-brands fa-codepen ",target:"_blank","aria-label":"codepen"}),mt.jsx("a",{href:"https://www.youtube.com/@dnbsammie",className:"fa-brands fa-youtube ",target:"_blank","aria-label":"youtube"})]})]})})]}),g3="_about_1eabv_1",v3="_left_1eabv_13",y3="_right_1eabv_15",x3="_split_1eabv_29",tu={about:g3,left:v3,right:y3,split:x3},S3=()=>mt.jsxs("section",{id:"about","aria-labelledby":"about-section",className:tu.about,children:[mt.jsx("div",{className:tu.left,children:mt.jsxs("div",{className:tu.split,children:[mt.jsx("h2",{children:"Where Function meets Emotion"}),mt.jsx("p",{children:"Every line of code I write comes from curiosity, the need to solve real problems, and the constant desire to learn. As a developer, I am dedicated to building functional and aesthetic solutions that add value. I am guided by both technical efficiency and empathy towards the user, always seeking to bridge the gap between form and function to create products that leave a lasting impression."})]})}),mt.jsx("div",{className:tu.right,children:mt.jsx("div",{className:tu.split,children:mt.jsx("h1",{className:"vertical_text",children:"About"})})})]}),M3="/portfolio/assets/img/img-01.webp",E3="/portfolio/assets/img/img-02.webp",T3="/portfolio/assets/img/img-03.webp",b3="/portfolio/assets/img/img-04.webp",A3="/portfolio/assets/img/img-05.webp",R3=[{title:"ordo",img:M3,links:[{href:"https://github.com/dnbsammie/Ordo",label:"github",icon:"fa-brands fa-github"}]},{title:"aural",img:E3,links:[{href:"https://github.com/dnbsammie/Aural",label:"github",icon:"fa-brands fa-github"}]},{title:"soundmorph",img:T3,links:[{href:"https://github.com/dnbsammie/SoundMorph",label:"github",icon:"fa-brands fa-github"}]},{title:"overdrive",img:b3,links:[{href:"https://github.com/dnbsammie/overdrive",label:"github",icon:"fa-brands fa-github"}]},{title:"trinity",img:A3,links:[{href:"https://github.com/dnbsammie/Trinity",label:"github",icon:"fa-brands fa-github"}]}],w3="_projects_yptcn_1",C3="_sticky_yptcn_13",D3="_scroll_section_yptcn_33",U3="_left_yptcn_59",L3="_right_yptcn_61",O3="_split_yptcn_79",N3="_project_yptcn_1",P3="_projectTitle_yptcn_199",z3="_links_yptcn_201",ar={projects:w3,sticky:C3,scroll_section:D3,left:U3,right:L3,split:O3,project:N3,projectTitle:P3,links:z3},I3=()=>{const o=Ye.useRef(null),t=Ye.useRef(null);return Ye.useEffect(()=>{const n=()=>{if(!o.current||!t.current)return;const r=o.current.offsetTop,a=window.scrollY,l=Math.min(Math.max((a-r)/window.innerHeight*100,0),500);t.current.style.transform=`translate3d(${-l}vw, 0, 0)`};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),mt.jsx("section",{className:ar.projects,id:"projects",ref:o,"aria-labelledby":"projects-section",children:mt.jsx("div",{className:ar.sticky,children:mt.jsxs("div",{className:ar.scroll_section,ref:t,children:[mt.jsx("div",{className:ar.left,children:mt.jsxs("div",{className:ar.split,children:[mt.jsxs("h2",{children:["Design ",mt.jsx("br",{})," Build ",mt.jsx("br",{})," Evolve"]}),mt.jsx("p",{children:"Each project I develop is an opportunity to learn, improve, and leave a tangible mark. It's not just about writing code, but about understanding the problem, designing with intention, and building with precision. These works reflect my commitment to constant improvement and to creating solutions that truly work, connect, and evolve."})]})}),R3.map((n,r)=>mt.jsxs("div",{className:ar.project,children:[mt.jsx("img",{src:n.img,alt:n.title,loading:"lazy"}),mt.jsx("div",{className:ar.projectTitle,children:n.title}),mt.jsx("div",{className:ar.links,children:n.links.map((a,l)=>mt.jsx("a",{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,children:mt.jsx("i",{className:a.icon})},l))})]},r)),mt.jsx("div",{className:ar.right,children:mt.jsx("div",{className:ar.split,children:mt.jsx("h3",{children:"They are not just projects, they are experiences that matter."})})})]})})})},B3="_contact_zvs7d_1",F3="_left_zvs7d_15",H3="_right_zvs7d_17",G3="_split_zvs7d_33",V3="_email_zvs7d_87",k3="_email_text_zvs7d_99",X3="_footer_zvs7d_113",wa={contact:B3,left:F3,right:H3,split:G3,email:V3,email_text:k3,footer:X3},q3=()=>{const o=new Date().getFullYear();return mt.jsxs("section",{id:"contact","aria-labelledby":"contact-section",className:wa.contact,children:[mt.jsx("div",{className:wa.left,children:mt.jsx("div",{className:wa.split,children:mt.jsxs("h1",{className:"vertical_text",children:["get in",mt.jsx("br",{}),"touch"]})})}),mt.jsx("div",{className:wa.right,children:mt.jsxs("div",{className:wa.split,children:[mt.jsx("small",{children:"samuel rivera"}),mt.jsxs("h5",{children:["Do you have an idea or project in mind?",mt.jsx("br",{})," Let's talk about it."]}),mt.jsxs("div",{className:wa.email,children:[mt.jsx("h6",{children:"Email:"}),mt.jsx("a",{href:"mailto:seriveramosq@gmail.com",className:wa.email_text,target:"_blank",rel:"noopener noreferrer",children:"seriveramosq@gmail.com"})]}),mt.jsx("hr",{}),mt.jsx("a",{href:"https://codepen.io/dnbsammie",className:"",target:"_blank","aria-label":"codepen",children:"Codepen"}),mt.jsx("a",{href:"https://colorswall.com/users/3710",className:"",target:"_blank","aria-label":"youtube",children:"ColorsWall"}),mt.jsx("a",{href:"https://github.com/dnbsammie",className:"",target:"_blank","aria-label":"github",children:"Github"}),mt.jsx("a",{href:"https://www.linkedin.com/in/seriveramosq",className:"",target:"_blank","aria-label":"linkedin",children:"LinkedIn"}),mt.jsx("hr",{}),mt.jsxs("footer",{className:wa.footer,children:[mt.jsxs("small",{className:"copyright","aria-label":"copyright",children:["© ",o," Samuel Rivera."]}),mt.jsx(ru.Link,{to:"hero",smooth:!0,duration:600,className:"back-top","aria-label":"back to top",children:"Back to Top"})]})]})})]})},W3=()=>{const[o,t]=Ye.useState(!0);return mt.jsxs(mt.Fragment,{children:[o&&mt.jsx(O1,{onComplete:()=>t(!1)}),mt.jsx(u3,{}),mt.jsx(WD,{}),mt.jsx(c3,{}),mt.jsxs("main",{role:"main",children:[mt.jsx(_3,{}),mt.jsx(S3,{}),mt.jsx(I3,{}),mt.jsx(q3,{})]})]})};QT.createRoot(document.getElementById("root")).render(mt.jsx(Ye.StrictMode,{children:mt.jsx(W3,{})}));
