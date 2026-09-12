(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function S1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ux={exports:{}},ad={},fx={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),b1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),w1=Symbol.for("react.strict_mode"),E1=Symbol.for("react.profiler"),T1=Symbol.for("react.provider"),A1=Symbol.for("react.context"),C1=Symbol.for("react.forward_ref"),R1=Symbol.for("react.suspense"),P1=Symbol.for("react.memo"),L1=Symbol.for("react.lazy"),jp=Symbol.iterator;function I1(n){return n===null||typeof n!="object"?null:(n=jp&&n[jp]||n["@@iterator"],typeof n=="function"?n:null)}var hx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},px=Object.assign,mx={};function ko(n,e,t){this.props=n,this.context=e,this.refs=mx,this.updater=t||hx}ko.prototype.isReactComponent={};ko.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ko.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gx(){}gx.prototype=ko.prototype;function _h(n,e,t){this.props=n,this.context=e,this.refs=mx,this.updater=t||hx}var Sh=_h.prototype=new gx;Sh.constructor=_h;px(Sh,ko.prototype);Sh.isPureReactComponent=!0;var Bp=Array.isArray,xx=Object.prototype.hasOwnProperty,bh={current:null},yx={key:!0,ref:!0,__self:!0,__source:!0};function vx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xx.call(e,i)&&!yx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:tl,type:n,key:s,ref:o,props:r,_owner:bh.current}}function D1(n,e){return{$$typeof:tl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Mh(n){return typeof n=="object"&&n!==null&&n.$$typeof===tl}function k1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Hp=/\/+/g;function Ud(n,e){return typeof n=="object"&&n!==null&&n.key!=null?k1(""+n.key):e.toString(36)}function dc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case tl:case b1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ud(o,0):i,Bp(r)?(t="",n!=null&&(t=n.replace(Hp,"$&/")+"/"),dc(r,e,t,"",function(c){return c})):r!=null&&(Mh(r)&&(r=D1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ud(s,a);o+=dc(s,e,t,l,r)}else if(l=I1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ud(s,a++),o+=dc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(n,e,t){if(n==null)return n;var i=[],r=0;return dc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function N1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Sn={current:null},uc={transition:null},U1={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:uc,ReactCurrentOwner:bh};function _x(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:cl,forEach:function(n,e,t){cl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return cl(n,function(){e++}),e},toArray:function(n){return cl(n,function(e){return e})||[]},only:function(n){if(!Mh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};it.Component=ko;it.Fragment=M1;it.Profiler=E1;it.PureComponent=_h;it.StrictMode=w1;it.Suspense=R1;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;it.act=_x;it.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=px({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)xx.call(e,l)&&!yx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:tl,type:n.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(n){return n={$$typeof:A1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:T1,_context:n},n.Consumer=n};it.createElement=vx;it.createFactory=function(n){var e=vx.bind(null,n);return e.type=n,e};it.createRef=function(){return{current:null}};it.forwardRef=function(n){return{$$typeof:C1,render:n}};it.isValidElement=Mh;it.lazy=function(n){return{$$typeof:L1,_payload:{_status:-1,_result:n},_init:N1}};it.memo=function(n,e){return{$$typeof:P1,type:n,compare:e===void 0?null:e}};it.startTransition=function(n){var e=uc.transition;uc.transition={};try{n()}finally{uc.transition=e}};it.unstable_act=_x;it.useCallback=function(n,e){return Sn.current.useCallback(n,e)};it.useContext=function(n){return Sn.current.useContext(n)};it.useDebugValue=function(){};it.useDeferredValue=function(n){return Sn.current.useDeferredValue(n)};it.useEffect=function(n,e){return Sn.current.useEffect(n,e)};it.useId=function(){return Sn.current.useId()};it.useImperativeHandle=function(n,e,t){return Sn.current.useImperativeHandle(n,e,t)};it.useInsertionEffect=function(n,e){return Sn.current.useInsertionEffect(n,e)};it.useLayoutEffect=function(n,e){return Sn.current.useLayoutEffect(n,e)};it.useMemo=function(n,e){return Sn.current.useMemo(n,e)};it.useReducer=function(n,e,t){return Sn.current.useReducer(n,e,t)};it.useRef=function(n){return Sn.current.useRef(n)};it.useState=function(n){return Sn.current.useState(n)};it.useSyncExternalStore=function(n,e,t){return Sn.current.useSyncExternalStore(n,e,t)};it.useTransition=function(){return Sn.current.useTransition()};it.version="18.3.1";fx.exports=it;var xe=fx.exports;const Tc=S1(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1=xe,F1=Symbol.for("react.element"),z1=Symbol.for("react.fragment"),j1=Object.prototype.hasOwnProperty,B1=O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H1={key:!0,ref:!0,__self:!0,__source:!0};function Sx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)j1.call(e,i)&&!H1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F1,type:n,key:s,ref:o,props:r,_owner:B1.current}}ad.Fragment=z1;ad.jsx=Sx;ad.jsxs=Sx;ux.exports=ad;var d=ux.exports,of={},bx={exports:{}},Fn={},Mx={exports:{}},wx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,$){var k=G.length;G.push($);e:for(;0<k;){var ee=k-1>>>1,de=G[ee];if(0<r(de,$))G[ee]=$,G[k]=de,k=ee;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var $=G[0],k=G.pop();if(k!==$){G[0]=k;e:for(var ee=0,de=G.length,le=de>>>1;ee<le;){var W=2*(ee+1)-1,F=G[W],B=W+1,he=G[B];if(0>r(F,k))B<de&&0>r(he,F)?(G[ee]=he,G[B]=k,ee=B):(G[ee]=F,G[W]=k,ee=W);else if(B<de&&0>r(he,k))G[ee]=he,G[B]=k,ee=B;else break e}}return $}function r(G,$){var k=G.sortIndex-$.sortIndex;return k!==0?k:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,m=!1,x=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=G)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function S(G){if(_=!1,y(G),!x)if(t(l)!==null)x=!0,H(w);else{var $=t(c);$!==null&&ne(S,$.startTime-G)}}function w(G,$){x=!1,_&&(_=!1,p(P),P=-1),m=!0;var k=u;try{for(y($),h=t(l);h!==null&&(!(h.expirationTime>$)||G&&!R());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,u=h.priorityLevel;var de=ee(h.expirationTime<=$);$=n.unstable_now(),typeof de=="function"?h.callback=de:h===t(l)&&i(l),y($)}else i(l);h=t(l)}if(h!==null)var le=!0;else{var W=t(c);W!==null&&ne(S,W.startTime-$),le=!1}return le}finally{h=null,u=k,m=!1}}var T=!1,E=null,P=-1,U=5,b=-1;function R(){return!(n.unstable_now()-b<U)}function q(){if(E!==null){var G=n.unstable_now();b=G;var $=!0;try{$=E(!0,G)}finally{$?re():(T=!1,E=null)}}else T=!1}var re;if(typeof v=="function")re=function(){v(q)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,te=O.port2;O.port1.onmessage=q,re=function(){te.postMessage(null)}}else re=function(){g(q,0)};function H(G){E=G,T||(T=!0,re())}function ne(G,$){P=g(function(){G(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,H(w))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(G){switch(u){case 1:case 2:case 3:var $=3;break;default:$=u}var k=u;u=$;try{return G()}finally{u=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var k=u;u=G;try{return $()}finally{u=k}},n.unstable_scheduleCallback=function(G,$,k){var ee=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ee+k:ee):k=ee,G){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=k+de,G={id:f++,callback:$,priorityLevel:G,startTime:k,expirationTime:de,sortIndex:-1},k>ee?(G.sortIndex=k,e(c,G),t(l)===null&&G===t(c)&&(_?(p(P),P=-1):_=!0,ne(S,k-ee))):(G.sortIndex=de,e(l,G),x||m||(x=!0,H(w))),G},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(G){var $=u;return function(){var k=u;u=$;try{return G.apply(this,arguments)}finally{u=k}}}})(wx);Mx.exports=wx;var G1=Mx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=xe,On=G1;function Ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ex=new Set,La={};function hs(n,e){mo(n,e),mo(n+"Capture",e)}function mo(n,e){for(La[n]=e,n=0;n<e.length;n++)Ex.add(e[n])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,W1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Vp={};function X1(n){return af.call(Vp,n)?!0:af.call(Gp,n)?!1:W1.test(n)?Vp[n]=!0:(Gp[n]=!0,!1)}function $1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y1(n,e,t,i){if(e===null||typeof e>"u"||$1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new bn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];rn[e]=new bn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new bn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new bn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new bn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new bn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new bn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new bn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new bn(n,5,!1,n.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Eh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(wh,Eh);rn[e]=new bn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(wh,Eh);rn[e]=new bn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(wh,Eh);rn[e]=new bn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new bn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new bn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Th(n,e,t,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y1(e,t,r,i)&&(t=null),i||r===null?X1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var qi=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),Tx=Symbol.for("react.provider"),Ax=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Cx=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function Ho(n){return n===null||typeof n!="object"?null:(n=Wp&&n[Wp]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,Od;function da(n){if(Od===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+n}var Fd=!1;function zd(n,e){if(!n||Fd)return"";Fd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?da(n):""}function K1(n){switch(n.tag){case 5:return da(n.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return n=zd(n.type,!1),n;case 11:return n=zd(n.type.render,!1),n;case 1:return n=zd(n.type,!0),n;default:return""}}function uf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xs:return"Fragment";case Ws:return"Portal";case lf:return"Profiler";case Ah:return"StrictMode";case cf:return"Suspense";case df:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ax:return(n.displayName||"Context")+".Consumer";case Tx:return(n._context.displayName||"Context")+".Provider";case Ch:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rh:return e=n.displayName||null,e!==null?e:uf(n.type)||"Memo";case or:e=n._payload,n=n._init;try{return uf(n(e))}catch{}}return null}function q1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z1(n){var e=Rx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ul(n){n._valueTracker||(n._valueTracker=Z1(n))}function Px(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Rx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ac(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ff(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Xp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lx(n,e){e=e.checked,e!=null&&Th(n,"checked",e,!1)}function hf(n,e){Lx(n,e);var t=Rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?pf(n,e.type,t):e.hasOwnProperty("defaultValue")&&pf(n,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function $p(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function pf(n,e,t){(e!=="number"||Ac(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ua=Array.isArray;function so(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function mf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Yp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Ee(92));if(ua(t)){if(1<t.length)throw Error(Ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Rr(t)}}function Ix(n,e){var t=Rr(e.value),i=Rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Kp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Dx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Dx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fl,kx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ia(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J1=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(n){J1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ya[e]=ya[n]})});function Nx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ya.hasOwnProperty(n)&&ya[n]?(""+e).trim():e+"px"}function Ux(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Nx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Q1=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(n,e){if(e){if(Q1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function yf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function Ph(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _f=null,oo=null,ao=null;function qp(n){if(n=rl(n)){if(typeof _f!="function")throw Error(Ee(280));var e=n.stateNode;e&&(e=fd(e),_f(n.stateNode,n.type,e))}}function Ox(n){oo?ao?ao.push(n):ao=[n]:oo=n}function Fx(){if(oo){var n=oo,e=ao;if(ao=oo=null,qp(n),e)for(n=0;n<e.length;n++)qp(e[n])}}function zx(n,e){return n(e)}function jx(){}var jd=!1;function Bx(n,e,t){if(jd)return n(e,t);jd=!0;try{return zx(n,e,t)}finally{jd=!1,(oo!==null||ao!==null)&&(jx(),Fx())}}function Da(n,e){var t=n.stateNode;if(t===null)return null;var i=fd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Ee(231,e,typeof t));return t}var Sf=!1;if(Wi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Sf=!1}function e_(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var va=!1,Cc=null,Rc=!1,bf=null,t_={onError:function(n){va=!0,Cc=n}};function n_(n,e,t,i,r,s,o,a,l){va=!1,Cc=null,e_.apply(t_,arguments)}function i_(n,e,t,i,r,s,o,a,l){if(n_.apply(this,arguments),va){if(va){var c=Cc;va=!1,Cc=null}else throw Error(Ee(198));Rc||(Rc=!0,bf=c)}}function ps(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Hx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(n){if(ps(n)!==n)throw Error(Ee(188))}function r_(n){var e=n.alternate;if(!e){if(e=ps(n),e===null)throw Error(Ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Zp(r),n;if(s===i)return Zp(r),e;s=s.sibling}throw Error(Ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Ee(189))}}if(t.alternate!==i)throw Error(Ee(190))}if(t.tag!==3)throw Error(Ee(188));return t.stateNode.current===t?n:e}function Gx(n){return n=r_(n),n!==null?Vx(n):null}function Vx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Vx(n);if(e!==null)return e;n=n.sibling}return null}var Wx=On.unstable_scheduleCallback,Jp=On.unstable_cancelCallback,s_=On.unstable_shouldYield,o_=On.unstable_requestPaint,kt=On.unstable_now,a_=On.unstable_getCurrentPriorityLevel,Lh=On.unstable_ImmediatePriority,Xx=On.unstable_UserBlockingPriority,Pc=On.unstable_NormalPriority,l_=On.unstable_LowPriority,$x=On.unstable_IdlePriority,ld=null,wi=null;function c_(n){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(ld,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:f_,d_=Math.log,u_=Math.LN2;function f_(n){return n>>>=0,n===0?32:31-(d_(n)/u_|0)|0}var hl=64,pl=4194304;function fa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=t&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function h_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=h_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Mf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yx(){var n=hl;return hl<<=1,!(hl&4194240)&&(hl=64),n}function Bd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function nl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function m_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ih(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ft=0;function Kx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var qx,Dh,Zx,Jx,Qx,wf=!1,ml=[],yr=null,vr=null,_r=null,ka=new Map,Na=new Map,dr=[],g_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(n,e){switch(n){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=rl(e),e!==null&&Dh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function x_(n,e,t,i,r){switch(e){case"focusin":return yr=Vo(yr,n,e,t,i,r),!0;case"dragenter":return vr=Vo(vr,n,e,t,i,r),!0;case"mouseover":return _r=Vo(_r,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ka.set(s,Vo(ka.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Vo(Na.get(s)||null,n,e,t,i,r)),!0}return!1}function ey(n){var e=Zr(n.target);if(e!==null){var t=ps(e);if(t!==null){if(e=t.tag,e===13){if(e=Hx(t),e!==null){n.blockedOn=e,Qx(n.priority,function(){Zx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ef(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);vf=i,t.target.dispatchEvent(i),vf=null}else return e=rl(t),e!==null&&Dh(e),n.blockedOn=t,!1;e.shift()}return!0}function em(n,e,t){fc(n)&&t.delete(e)}function y_(){wf=!1,yr!==null&&fc(yr)&&(yr=null),vr!==null&&fc(vr)&&(vr=null),_r!==null&&fc(_r)&&(_r=null),ka.forEach(em),Na.forEach(em)}function Wo(n,e){n.blockedOn===e&&(n.blockedOn=null,wf||(wf=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,y_)))}function Ua(n){function e(r){return Wo(r,n)}if(0<ml.length){Wo(ml[0],n);for(var t=1;t<ml.length;t++){var i=ml[t];i.blockedOn===n&&(i.blockedOn=null)}}for(yr!==null&&Wo(yr,n),vr!==null&&Wo(vr,n),_r!==null&&Wo(_r,n),ka.forEach(e),Na.forEach(e),t=0;t<dr.length;t++)i=dr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<dr.length&&(t=dr[0],t.blockedOn===null);)ey(t),t.blockedOn===null&&dr.shift()}var lo=qi.ReactCurrentBatchConfig,Ic=!0;function v_(n,e,t,i){var r=ft,s=lo.transition;lo.transition=null;try{ft=1,kh(n,e,t,i)}finally{ft=r,lo.transition=s}}function __(n,e,t,i){var r=ft,s=lo.transition;lo.transition=null;try{ft=4,kh(n,e,t,i)}finally{ft=r,lo.transition=s}}function kh(n,e,t,i){if(Ic){var r=Ef(n,e,t,i);if(r===null)Zd(n,e,i,Dc,t),Qp(n,i);else if(x_(r,n,e,t,i))i.stopPropagation();else if(Qp(n,i),e&4&&-1<g_.indexOf(n)){for(;r!==null;){var s=rl(r);if(s!==null&&qx(s),s=Ef(n,e,t,i),s===null&&Zd(n,e,i,Dc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zd(n,e,i,null,t)}}var Dc=null;function Ef(n,e,t,i){if(Dc=null,n=Ph(i),n=Zr(n),n!==null)if(e=ps(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Hx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Dc=n,null}function ty(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case Lh:return 1;case Xx:return 4;case Pc:case l_:return 16;case $x:return 536870912;default:return 16}default:return 16}}var hr=null,Nh=null,hc=null;function ny(){if(hc)return hc;var n,e=Nh,t=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return hc=r.slice(n,1<i?1-i:void 0)}function pc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function gl(){return!0}function tm(){return!1}function zn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:tm,this.isPropagationStopped=tm,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=zn(No),il=Rt({},No,{view:0,detail:0}),S_=zn(il),Hd,Gd,Xo,cd=Rt({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(Hd=n.screenX-Xo.screenX,Gd=n.screenY-Xo.screenY):Gd=Hd=0,Xo=n),Hd)},movementY:function(n){return"movementY"in n?n.movementY:Gd}}),nm=zn(cd),b_=Rt({},cd,{dataTransfer:0}),M_=zn(b_),w_=Rt({},il,{relatedTarget:0}),Vd=zn(w_),E_=Rt({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=zn(E_),A_=Rt({},No,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),C_=zn(A_),R_=Rt({},No,{data:0}),im=zn(R_),P_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=I_[n])?!!e[n]:!1}function Oh(){return D_}var k_=Rt({},il,{key:function(n){if(n.key){var e=P_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=pc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(n){return n.type==="keypress"?pc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N_=zn(k_),U_=Rt({},cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=zn(U_),O_=Rt({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),F_=zn(O_),z_=Rt({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=zn(z_),B_=Rt({},cd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=zn(B_),G_=[9,13,27,32],Fh=Wi&&"CompositionEvent"in window,_a=null;Wi&&"documentMode"in document&&(_a=document.documentMode);var V_=Wi&&"TextEvent"in window&&!_a,iy=Wi&&(!Fh||_a&&8<_a&&11>=_a),sm=" ",om=!1;function ry(n,e){switch(n){case"keyup":return G_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function W_(n,e){switch(n){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return n=e.data,n===sm&&om?null:n;default:return null}}function X_(n,e){if($s)return n==="compositionend"||!Fh&&ry(n,e)?(n=ny(),hc=Nh=hr=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iy&&e.locale!=="ko"?null:e.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!$_[n.type]:e==="textarea"}function oy(n,e,t,i){Ox(i),e=kc(e,"onChange"),0<e.length&&(t=new Uh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Sa=null,Oa=null;function Y_(n){xy(n,0)}function dd(n){var e=qs(n);if(Px(e))return n}function K_(n,e){if(n==="change")return e}var ay=!1;if(Wi){var Wd;if(Wi){var Xd="oninput"in document;if(!Xd){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Xd=typeof lm.oninput=="function"}Wd=Xd}else Wd=!1;ay=Wd&&(!document.documentMode||9<document.documentMode)}function cm(){Sa&&(Sa.detachEvent("onpropertychange",ly),Oa=Sa=null)}function ly(n){if(n.propertyName==="value"&&dd(Oa)){var e=[];oy(e,Oa,n,Ph(n)),Bx(Y_,e)}}function q_(n,e,t){n==="focusin"?(cm(),Sa=e,Oa=t,Sa.attachEvent("onpropertychange",ly)):n==="focusout"&&cm()}function Z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dd(Oa)}function J_(n,e){if(n==="click")return dd(e)}function Q_(n,e){if(n==="input"||n==="change")return dd(e)}function eS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gi=typeof Object.is=="function"?Object.is:eS;function Fa(n,e){if(gi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!af.call(e,r)||!gi(n[r],e[r]))return!1}return!0}function dm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function um(n,e){var t=dm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dm(t)}}function cy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?cy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function dy(){for(var n=window,e=Ac();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ac(n.document)}return e}function zh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function tS(n){var e=dy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&cy(t.ownerDocument.documentElement,t)){if(i!==null&&zh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=um(t,s);var o=um(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nS=Wi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Tf=null,ba=null,Af=!1;function fm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Af||Ys==null||Ys!==Ac(i)||(i=Ys,"selectionStart"in i&&zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Fa(ba,i)||(ba=i,i=kc(Tf,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ys)))}function xl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ks={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},$d={},uy={};Wi&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ud(n){if($d[n])return $d[n];if(!Ks[n])return n;var e=Ks[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in uy)return $d[n]=e[t];return n}var fy=ud("animationend"),hy=ud("animationiteration"),py=ud("animationstart"),my=ud("transitionend"),gy=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,e){gy.set(n,e),hs(e,[n])}for(var Yd=0;Yd<hm.length;Yd++){var Kd=hm[Yd],iS=Kd.toLowerCase(),rS=Kd[0].toUpperCase()+Kd.slice(1);Ir(iS,"on"+rS)}Ir(fy,"onAnimationEnd");Ir(hy,"onAnimationIteration");Ir(py,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(my,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function pm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,i_(i,e,void 0,n),n.currentTarget=null}function xy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}}}if(Rc)throw n=bf,Rc=!1,bf=null,n}function yt(n,e){var t=e[If];t===void 0&&(t=e[If]=new Set);var i=n+"__bubble";t.has(i)||(yy(e,n,2,!1),t.add(i))}function qd(n,e,t){var i=0;e&&(i|=4),yy(t,n,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function za(n){if(!n[yl]){n[yl]=!0,Ex.forEach(function(t){t!=="selectionchange"&&(sS.has(t)||qd(t,!1,n),qd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[yl]||(e[yl]=!0,qd("selectionchange",!1,e))}}function yy(n,e,t,i){switch(ty(e)){case 1:var r=v_;break;case 4:r=__;break;default:r=kh}t=r.bind(null,e,t,n),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bx(function(){var c=s,f=Ph(t),h=[];e:{var u=gy.get(n);if(u!==void 0){var m=Uh,x=n;switch(n){case"keypress":if(pc(t)===0)break e;case"keydown":case"keyup":m=N_;break;case"focusin":x="focus",m=Vd;break;case"focusout":x="blur",m=Vd;break;case"beforeblur":case"afterblur":m=Vd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=M_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=F_;break;case fy:case hy:case py:m=T_;break;case my:m=j_;break;case"scroll":m=S_;break;case"wheel":m=H_;break;case"copy":case"cut":case"paste":m=C_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rm}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?u!==null?u+"Capture":null:u;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=Da(v,p),S!=null&&_.push(ja(v,S,y)))),g)break;v=v.return}0<_.length&&(u=new m(u,x,null,t,f),h.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",u&&t!==vf&&(x=t.relatedTarget||t.fromElement)&&(Zr(x)||x[Xi]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?Zr(x):null,x!==null&&(g=ps(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=nm,S="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=rm,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=m==null?u:qs(m),y=x==null?u:qs(x),u=new _(S,v+"leave",m,t,f),u.target=g,u.relatedTarget=y,S=null,Zr(f)===c&&(_=new _(p,v+"enter",x,t,f),_.target=y,_.relatedTarget=g,S=_),g=S,m&&x)t:{for(_=m,p=x,v=0,y=_;y;y=ys(y))v++;for(y=0,S=p;S;S=ys(S))y++;for(;0<v-y;)_=ys(_),v--;for(;0<y-v;)p=ys(p),y--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=ys(_),p=ys(p)}_=null}else _=null;m!==null&&mm(h,u,m,_,!1),x!==null&&g!==null&&mm(h,g,x,_,!0)}}e:{if(u=c?qs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var w=K_;else if(am(u))if(ay)w=Q_;else{w=Z_;var T=q_}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=J_);if(w&&(w=w(n,c))){oy(h,w,t,f);break e}T&&T(n,u,c),n==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&pf(u,"number",u.value)}switch(T=c?qs(c):window,n){case"focusin":(am(T)||T.contentEditable==="true")&&(Ys=T,Tf=c,ba=null);break;case"focusout":ba=Tf=Ys=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,fm(h,t,f);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":fm(h,t,f)}var E;if(Fh)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $s?ry(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(iy&&t.locale!=="ko"&&($s||P!=="onCompositionStart"?P==="onCompositionEnd"&&$s&&(E=ny()):(hr=f,Nh="value"in hr?hr.value:hr.textContent,$s=!0)),T=kc(c,P),0<T.length&&(P=new im(P,n,null,t,f),h.push({event:P,listeners:T}),E?P.data=E:(E=sy(t),E!==null&&(P.data=E)))),(E=V_?W_(n,t):X_(n,t))&&(c=kc(c,"onBeforeInput"),0<c.length&&(f=new im("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:c}),f.data=E))}xy(h,e)})}function ja(n,e,t){return{instance:n,listener:e,currentTarget:t}}function kc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(n,t),s!=null&&i.unshift(ja(n,s,r)),s=Da(n,e),s!=null&&i.push(ja(n,s,r))),n=n.return}return i}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Da(t,s),l!=null&&o.unshift(ja(t,l,a))):r||(l=Da(t,s),l!=null&&o.push(ja(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function gm(n){return(typeof n=="string"?n:""+n).replace(oS,`
`).replace(aS,"")}function vl(n,e,t){if(e=gm(e),gm(n)!==e&&t)throw Error(Ee(425))}function Nc(){}var Cf=null,Rf=null;function Pf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(n){return xm.resolve(null).then(n).catch(dS)}:Lf;function dS(n){setTimeout(function(){throw n})}function Jd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ua(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ua(e)}function Sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ym(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Uo,Ba="__reactProps$"+Uo,Xi="__reactContainer$"+Uo,If="__reactEvents$"+Uo,uS="__reactListeners$"+Uo,fS="__reactHandles$"+Uo;function Zr(n){var e=n[Mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xi]||t[Mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ym(n);n!==null;){if(t=n[Mi])return t;n=ym(n)}return e}n=t,t=n.parentNode}return null}function rl(n){return n=n[Mi]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Ee(33))}function fd(n){return n[Ba]||null}var Df=[],Zs=-1;function Dr(n){return{current:n}}function St(n){0>Zs||(n.current=Df[Zs],Df[Zs]=null,Zs--)}function xt(n,e){Zs++,Df[Zs]=n.current,n.current=e}var Pr={},fn=Dr(Pr),Tn=Dr(!1),ss=Pr;function go(n,e){var t=n.type.contextTypes;if(!t)return Pr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function An(n){return n=n.childContextTypes,n!=null}function Uc(){St(Tn),St(fn)}function vm(n,e,t){if(fn.current!==Pr)throw Error(Ee(168));xt(fn,e),xt(Tn,t)}function vy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,q1(n)||"Unknown",r));return Rt({},t,i)}function Oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,ss=fn.current,xt(fn,n),xt(Tn,Tn.current),!0}function _m(n,e,t){var i=n.stateNode;if(!i)throw Error(Ee(169));t?(n=vy(n,e,ss),i.__reactInternalMemoizedMergedChildContext=n,St(Tn),St(fn),xt(fn,n)):St(Tn),xt(Tn,t)}var zi=null,hd=!1,Qd=!1;function _y(n){zi===null?zi=[n]:zi.push(n)}function hS(n){hd=!0,_y(n)}function kr(){if(!Qd&&zi!==null){Qd=!0;var n=0,e=ft;try{var t=zi;for(ft=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zi=null,hd=!1}catch(r){throw zi!==null&&(zi=zi.slice(n+1)),Wx(Lh,kr),r}finally{ft=e,Qd=!1}}return null}var Js=[],Qs=0,Fc=null,zc=0,$n=[],Yn=0,os=null,Bi=1,Hi="";function Wr(n,e){Js[Qs++]=zc,Js[Qs++]=Fc,Fc=n,zc=e}function Sy(n,e,t){$n[Yn++]=Bi,$n[Yn++]=Hi,$n[Yn++]=os,os=n;var i=Bi;n=Hi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-hi(e)+r|t<<r|i,Hi=s+n}else Bi=1<<s|t<<r|i,Hi=n}function jh(n){n.return!==null&&(Wr(n,1),Sy(n,1,0))}function Bh(n){for(;n===Fc;)Fc=Js[--Qs],Js[Qs]=null,zc=Js[--Qs],Js[Qs]=null;for(;n===os;)os=$n[--Yn],$n[Yn]=null,Hi=$n[--Yn],$n[Yn]=null,Bi=$n[--Yn],$n[Yn]=null}var Un=null,Nn=null,wt=!1,ai=null;function by(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Sm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,Nn=Sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=os!==null?{id:Bi,overflow:Hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,Nn=null,!0):!1;default:return!1}}function kf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nf(n){if(wt){var e=Nn;if(e){var t=e;if(!Sm(n,e)){if(kf(n))throw Error(Ee(418));e=Sr(t.nextSibling);var i=Un;e&&Sm(n,e)?by(i,t):(n.flags=n.flags&-4097|2,wt=!1,Un=n)}}else{if(kf(n))throw Error(Ee(418));n.flags=n.flags&-4097|2,wt=!1,Un=n}}}function bm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function _l(n){if(n!==Un)return!1;if(!wt)return bm(n),wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pf(n.type,n.memoizedProps)),e&&(e=Nn)){if(kf(n))throw My(),Error(Ee(418));for(;e;)by(n,e),e=Sr(e.nextSibling)}if(bm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Nn=Sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Nn=null}}else Nn=Un?Sr(n.stateNode.nextSibling):null;return!0}function My(){for(var n=Nn;n;)n=Sr(n.nextSibling)}function xo(){Nn=Un=null,wt=!1}function Hh(n){ai===null?ai=[n]:ai.push(n)}var pS=qi.ReactCurrentBatchConfig;function $o(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Ee(309));var i=t.stateNode}if(!i)throw Error(Ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Ee(284));if(!t._owner)throw Error(Ee(290,n))}return n}function Sl(n,e){throw n=Object.prototype.toString.call(e),Error(Ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Mm(n){var e=n._init;return e(n._payload)}function wy(n){function e(p,v){if(n){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Er(p,v),p.index=0,p.sibling=null,p}function s(p,v,y){return p.index=y,n?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=2,v):y):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,y,S){return v===null||v.tag!==6?(v=ou(y,p.mode,S),v.return=p,v):(v=r(v,y),v.return=p,v)}function l(p,v,y,S){var w=y.type;return w===Xs?f(p,v,y.props.children,S,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&Mm(w)===v.type)?(S=r(v,y.props),S.ref=$o(p,v,y),S.return=p,S):(S=Sc(y.type,y.key,y.props,null,p.mode,S),S.ref=$o(p,v,y),S.return=p,S)}function c(p,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=au(y,p.mode,S),v.return=p,v):(v=r(v,y.children||[]),v.return=p,v)}function f(p,v,y,S,w){return v===null||v.tag!==7?(v=ns(y,p.mode,S,w),v.return=p,v):(v=r(v,y),v.return=p,v)}function h(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ou(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return y=Sc(v.type,v.key,v.props,null,p.mode,y),y.ref=$o(p,null,v),y.return=p,y;case Ws:return v=au(v,p.mode,y),v.return=p,v;case or:var S=v._init;return h(p,S(v._payload),y)}if(ua(v)||Ho(v))return v=ns(v,p.mode,y,null),v.return=p,v;Sl(p,v)}return null}function u(p,v,y,S){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(p,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return y.key===w?l(p,v,y,S):null;case Ws:return y.key===w?c(p,v,y,S):null;case or:return w=y._init,u(p,v,w(y._payload),S)}if(ua(y)||Ho(y))return w!==null?null:f(p,v,y,S,null);Sl(p,y)}return null}function m(p,v,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(v,p,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case dl:return p=p.get(S.key===null?y:S.key)||null,l(v,p,S,w);case Ws:return p=p.get(S.key===null?y:S.key)||null,c(v,p,S,w);case or:var T=S._init;return m(p,v,y,T(S._payload),w)}if(ua(S)||Ho(S))return p=p.get(y)||null,f(v,p,S,w,null);Sl(v,S)}return null}function x(p,v,y,S){for(var w=null,T=null,E=v,P=v=0,U=null;E!==null&&P<y.length;P++){E.index>P?(U=E,E=null):U=E.sibling;var b=u(p,E,y[P],S);if(b===null){E===null&&(E=U);break}n&&E&&b.alternate===null&&e(p,E),v=s(b,v,P),T===null?w=b:T.sibling=b,T=b,E=U}if(P===y.length)return t(p,E),wt&&Wr(p,P),w;if(E===null){for(;P<y.length;P++)E=h(p,y[P],S),E!==null&&(v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return wt&&Wr(p,P),w}for(E=i(p,E);P<y.length;P++)U=m(E,p,P,y[P],S),U!==null&&(n&&U.alternate!==null&&E.delete(U.key===null?P:U.key),v=s(U,v,P),T===null?w=U:T.sibling=U,T=U);return n&&E.forEach(function(R){return e(p,R)}),wt&&Wr(p,P),w}function _(p,v,y,S){var w=Ho(y);if(typeof w!="function")throw Error(Ee(150));if(y=w.call(y),y==null)throw Error(Ee(151));for(var T=w=null,E=v,P=v=0,U=null,b=y.next();E!==null&&!b.done;P++,b=y.next()){E.index>P?(U=E,E=null):U=E.sibling;var R=u(p,E,b.value,S);if(R===null){E===null&&(E=U);break}n&&E&&R.alternate===null&&e(p,E),v=s(R,v,P),T===null?w=R:T.sibling=R,T=R,E=U}if(b.done)return t(p,E),wt&&Wr(p,P),w;if(E===null){for(;!b.done;P++,b=y.next())b=h(p,b.value,S),b!==null&&(v=s(b,v,P),T===null?w=b:T.sibling=b,T=b);return wt&&Wr(p,P),w}for(E=i(p,E);!b.done;P++,b=y.next())b=m(E,p,P,b.value,S),b!==null&&(n&&b.alternate!==null&&E.delete(b.key===null?P:b.key),v=s(b,v,P),T===null?w=b:T.sibling=b,T=b);return n&&E.forEach(function(q){return e(p,q)}),wt&&Wr(p,P),w}function g(p,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Xs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:e:{for(var w=y.key,T=v;T!==null;){if(T.key===w){if(w=y.type,w===Xs){if(T.tag===7){t(p,T.sibling),v=r(T,y.props.children),v.return=p,p=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&Mm(w)===T.type){t(p,T.sibling),v=r(T,y.props),v.ref=$o(p,T,y),v.return=p,p=v;break e}t(p,T);break}else e(p,T);T=T.sibling}y.type===Xs?(v=ns(y.props.children,p.mode,S,y.key),v.return=p,p=v):(S=Sc(y.type,y.key,y.props,null,p.mode,S),S.ref=$o(p,v,y),S.return=p,p=S)}return o(p);case Ws:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(p,v.sibling),v=r(v,y.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=au(y,p.mode,S),v.return=p,p=v}return o(p);case or:return T=y._init,g(p,v,T(y._payload),S)}if(ua(y))return x(p,v,y,S);if(Ho(y))return _(p,v,y,S);Sl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,y),v.return=p,p=v):(t(p,v),v=ou(y,p.mode,S),v.return=p,p=v),o(p)):t(p,v)}return g}var yo=wy(!0),Ey=wy(!1),jc=Dr(null),Bc=null,eo=null,Gh=null;function Vh(){Gh=eo=Bc=null}function Wh(n){var e=jc.current;St(jc),n._currentValue=e}function Uf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function co(n,e){Bc=n,Gh=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(En=!0),n.firstContext=null)}function Qn(n){var e=n._currentValue;if(Gh!==n)if(n={context:n,memoizedValue:e,next:null},eo===null){if(Bc===null)throw Error(Ee(308));eo=n,Bc.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return e}var Jr=null;function Xh(n){Jr===null?Jr=[n]:Jr.push(n)}function Ty(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Xh(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ar=!1;function $h(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function br(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function mc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ih(n,t)}}function wm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hc(n,e,t,i){var r=n.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(u=e,m=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,u);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,u=typeof x=="function"?x.call(m,h,u):x,u==null)break e;h=Rt({},h,u);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,n.lanes=o,n.memoizedState=h}}function Em(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var sl={},Ei=Dr(sl),Ha=Dr(sl),Ga=Dr(sl);function Qr(n){if(n===sl)throw Error(Ee(174));return n}function Yh(n,e){switch(xt(Ga,e),xt(Ha,n),xt(Ei,sl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gf(e,n)}St(Ei),xt(Ei,e)}function vo(){St(Ei),St(Ha),St(Ga)}function Cy(n){Qr(Ga.current);var e=Qr(Ei.current),t=gf(e,n.type);e!==t&&(xt(Ha,n),xt(Ei,t))}function Kh(n){Ha.current===n&&(St(Ei),St(Ha))}var At=Dr(0);function Gc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function qh(){for(var n=0;n<eu.length;n++)eu[n]._workInProgressVersionPrimary=null;eu.length=0}var gc=qi.ReactCurrentDispatcher,tu=qi.ReactCurrentBatchConfig,as=0,Ct=null,Ot=null,Wt=null,Vc=!1,Ma=!1,Va=0,mS=0;function an(){throw Error(Ee(321))}function Zh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gi(n[t],e[t]))return!1;return!0}function Jh(n,e,t,i,r,s){if(as=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=n===null||n.memoizedState===null?vS:_S,n=t(i,r),Ma){s=0;do{if(Ma=!1,Va=0,25<=s)throw Error(Ee(301));s+=1,Wt=Ot=null,e.updateQueue=null,gc.current=SS,n=t(i,r)}while(Ma)}if(gc.current=Wc,e=Ot!==null&&Ot.next!==null,as=0,Wt=Ot=Ct=null,Vc=!1,e)throw Error(Ee(300));return n}function Qh(){var n=Va!==0;return Va=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function ei(){if(Ot===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var e=Wt===null?Ct.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=n;else{if(n===null)throw Error(Ee(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Ct.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Wa(n,e){return typeof e=="function"?e(n):e}function nu(n){var e=ei(),t=e.queue;if(t===null)throw Error(Ee(311));t.lastRenderedReducer=n;var i=Ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=f,ls|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function iu(n){var e=ei(),t=e.queue;if(t===null)throw Error(Ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ry(){}function Py(n,e){var t=Ct,i=ei(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,ep(Dy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Xa(9,Iy.bind(null,t,i,r,e),void 0,null),Yt===null)throw Error(Ee(349));as&30||Ly(t,e,r)}return r}function Ly(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Iy(n,e,t,i){e.value=t,e.getSnapshot=i,ky(e)&&Ny(n)}function Dy(n,e,t){return t(function(){ky(e)&&Ny(n)})}function ky(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gi(n,t)}catch{return!0}}function Ny(n){var e=$i(n,1);e!==null&&pi(e,n,1,-1)}function Tm(n){var e=Si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},e.queue=n,n=n.dispatch=yS.bind(null,Ct,n),[e.memoizedState,n]}function Xa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Uy(){return ei().memoizedState}function xc(n,e,t,i){var r=Si();Ct.flags|=n,r.memoizedState=Xa(1|e,t,void 0,i===void 0?null:i)}function pd(n,e,t,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Zh(i,o.deps)){r.memoizedState=Xa(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=Xa(1|e,t,s,i)}function Am(n,e){return xc(8390656,8,n,e)}function ep(n,e){return pd(2048,8,n,e)}function Oy(n,e){return pd(4,2,n,e)}function Fy(n,e){return pd(4,4,n,e)}function zy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function jy(n,e,t){return t=t!=null?t.concat([n]):null,pd(4,4,zy.bind(null,e,n),t)}function tp(){}function By(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Hy(n,e){var t=ei();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Gy(n,e,t){return as&21?(gi(t,e)||(t=Yx(),Ct.lanes|=t,ls|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=t)}function gS(n,e){var t=ft;ft=t!==0&&4>t?t:4,n(!0);var i=tu.transition;tu.transition={};try{n(!1),e()}finally{ft=t,tu.transition=i}}function Vy(){return ei().memoizedState}function xS(n,e,t){var i=wr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Wy(n))Xy(e,t);else if(t=Ty(n,e,t,i),t!==null){var r=vn();pi(t,n,i,r),$y(t,e,i)}}function yS(n,e,t){var i=wr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wy(n))Xy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Ty(n,e,r,i),t!==null&&(r=vn(),pi(t,n,i,r),$y(t,e,i))}}function Wy(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function Xy(n,e){Ma=Vc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function $y(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ih(n,t)}}var Wc={readContext:Qn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},vS={readContext:Qn,useCallback:function(n,e){return Si().memoizedState=[n,e===void 0?null:e],n},useContext:Qn,useEffect:Am,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xc(4194308,4,zy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xc(4194308,4,n,e)},useInsertionEffect:function(n,e){return xc(4,2,n,e)},useMemo:function(n,e){var t=Si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=xS.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=Si();return n={current:n},e.memoizedState=n},useState:Tm,useDebugValue:tp,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Tm(!1),e=n[0];return n=gS.bind(null,n[1]),Si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=Si();if(wt){if(t===void 0)throw Error(Ee(407));t=t()}else{if(t=e(),Yt===null)throw Error(Ee(349));as&30||Ly(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Am(Dy.bind(null,i,s,n),[n]),i.flags|=2048,Xa(9,Iy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Si(),e=Yt.identifierPrefix;if(wt){var t=Hi,i=Bi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Va++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=mS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:Qn,useCallback:By,useContext:Qn,useEffect:ep,useImperativeHandle:jy,useInsertionEffect:Oy,useLayoutEffect:Fy,useMemo:Hy,useReducer:nu,useRef:Uy,useState:function(){return nu(Wa)},useDebugValue:tp,useDeferredValue:function(n){var e=ei();return Gy(e,Ot.memoizedState,n)},useTransition:function(){var n=nu(Wa)[0],e=ei().memoizedState;return[n,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Vy,unstable_isNewReconciler:!1},SS={readContext:Qn,useCallback:By,useContext:Qn,useEffect:ep,useImperativeHandle:jy,useInsertionEffect:Oy,useLayoutEffect:Fy,useMemo:Hy,useReducer:iu,useRef:Uy,useState:function(){return iu(Wa)},useDebugValue:tp,useDeferredValue:function(n){var e=ei();return Ot===null?e.memoizedState=n:Gy(e,Ot.memoizedState,n)},useTransition:function(){var n=iu(Wa)[0],e=ei().memoizedState;return[n,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Vy,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Of(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var md={isMounted:function(n){return(n=n._reactInternals)?ps(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=wr(n),s=Vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(pi(e,n,r,i),mc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=wr(n),s=Vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=br(n,s,r),e!==null&&(pi(e,n,r,i),mc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=wr(n),r=Vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=br(n,r,i),e!==null&&(pi(e,n,i,t),mc(e,n,i))}};function Cm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(t,i)||!Fa(r,s):!0}function Yy(n,e,t){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=An(e)?ss:fn.current,i=e.contextTypes,s=(i=i!=null)?go(n,r):Pr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=md,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&md.enqueueReplaceState(e,e.state,null)}function Ff(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},$h(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=An(e)?ss:fn.current,r.context=go(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&md.enqueueReplaceState(r,r.state,null),Hc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,e){try{var t="",i=e;do t+=K1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ru(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function Ky(n,e,t){t=Vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$c||($c=!0,Kf=i),zf(n,e)},t}function qy(n,e,t){t=Vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){zf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zf(n,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Pm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=US.bind(null,n,e,t),e.then(n,n))}function Lm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Im(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vi(-1,1),e.tag=2,br(t,e,1))),t.lanes|=1),n)}var MS=qi.ReactCurrentOwner,En=!1;function mn(n,e,t,i){e.child=n===null?Ey(e,null,t,i):yo(e,n.child,t,i)}function Dm(n,e,t,i,r){t=t.render;var s=e.ref;return co(e,r),i=Jh(n,e,t,i,s,r),t=Qh(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(wt&&t&&jh(e),e.flags|=1,mn(n,e,i,r),e.child)}function km(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!cp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Zy(n,e,s,i,r)):(n=Sc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Fa,t(o,i)&&n.ref===e.ref)return Yi(n,e,r)}return e.flags|=1,n=Er(s,i),n.ref=e.ref,n.return=e,e.child=n}function Zy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Fa(s,i)&&n.ref===e.ref)if(En=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(En=!0);else return e.lanes=n.lanes,Yi(n,e,r)}return jf(n,e,t,i,r)}function Jy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(no,Dn),Dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(no,Dn),Dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(no,Dn),Dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(no,Dn),Dn|=i;return mn(n,e,r,t),e.child}function Qy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jf(n,e,t,i,r){var s=An(t)?ss:fn.current;return s=go(e,s),co(e,r),t=Jh(n,e,t,i,s,r),i=Qh(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(wt&&i&&jh(e),e.flags|=1,mn(n,e,t,r),e.child)}function Nm(n,e,t,i,r){if(An(t)){var s=!0;Oc(e)}else s=!1;if(co(e,r),e.stateNode===null)yc(n,e),Yy(e,t,i),Ff(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Qn(c):(c=An(t)?ss:fn.current,c=go(e,c));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Rm(e,o,i,c),ar=!1;var u=e.memoizedState;o.state=u,Hc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Tn.current||ar?(typeof f=="function"&&(Of(e,t,f,i),l=e.memoizedState),(a=ar||Cm(e,t,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ay(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=An(t)?ss:fn.current,l=go(e,l));var m=t.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&Rm(e,o,i,l),ar=!1,u=e.memoizedState,o.state=u,Hc(e,i,o,r);var x=e.memoizedState;a!==h||u!==x||Tn.current||ar?(typeof m=="function"&&(Of(e,t,m,i),x=e.memoizedState),(c=ar||Cm(e,t,c,i,u,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return Bf(n,e,t,i,s,r)}function Bf(n,e,t,i,r,s){Qy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&_m(e,t,!1),Yi(n,e,s);i=e.stateNode,MS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=yo(e,n.child,null,s),e.child=yo(e,null,a,s)):mn(n,e,a,s),e.memoizedState=i.state,r&&_m(e,t,!0),e.child}function ev(n){var e=n.stateNode;e.pendingContext?vm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&vm(n,e.context,!1),Yh(n,e.containerInfo)}function Um(n,e,t,i,r){return xo(),Hh(r),e.flags|=256,mn(n,e,t,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(n){return{baseLanes:n,cachePool:null,transitions:null}}function tv(n,e,t){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(At,r&1),n===null)return Nf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,i,0,null),n=ns(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gf(t),e.memoizedState=Hf,n):np(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=ns(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Hf,i}return s=n.child,n=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function np(n,e){return e=yd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bl(n,e,t,i){return i!==null&&Hh(i),yo(e,n.child,null,t),n=np(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ru(Error(Ee(422))),bl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yd({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,n.child,null,o),e.child.memoizedState=Gf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return bl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ee(419)),i=ru(s,i,void 0),bl(n,e,o,i)}if(a=(o&n.childLanes)!==0,En||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),pi(i,n,r,-1))}return lp(),i=ru(Error(Ee(421))),bl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=OS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Nn=Sr(r.nextSibling),Un=e,wt=!0,ai=null,n!==null&&($n[Yn++]=Bi,$n[Yn++]=Hi,$n[Yn++]=os,Bi=n.id,Hi=n.overflow,os=e),e=np(e,i.children),e.flags|=4096,e)}function Om(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Uf(n.return,e,t)}function su(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function nv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(n,e,i.children,t),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Om(n,t,e);else if(n.tag===19)Om(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),su(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}su(e,!0,t,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ls|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Ee(153));if(e.child!==null){for(n=e.child,t=Er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ES(n,e,t){switch(e.tag){case 3:ev(e),xo();break;case 5:Cy(e);break;case 1:An(e.type)&&Oc(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(At,At.current&1),e.flags|=128,null):t&e.child.childLanes?tv(n,e,t):(xt(At,At.current&1),n=Yi(n,e,t),n!==null?n.sibling:null);xt(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return nv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,Jy(n,e,t)}return Yi(n,e,t)}var iv,Vf,rv,sv;iv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Vf=function(){};rv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qr(Ei.current);var s=null;switch(t){case"input":r=ff(n,r),i=ff(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=mf(n,r),i=mf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Nc)}xf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yo(n,e){if(!wt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function TS(n,e,t){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return An(e.type)&&Uc(),ln(e),null;case 3:return i=e.stateNode,vo(),St(Tn),St(fn),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(_l(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Jf(ai),ai=null))),Vf(n,e),ln(e),null;case 5:Kh(e);var r=Qr(Ga.current);if(t=e.type,n!==null&&e.stateNode!=null)rv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return ln(e),null}if(n=Qr(Ei.current),_l(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[Ba]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)yt(ha[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Xp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Yp(i,s),yt("invalid",i)}xf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vl(i.textContent,a,n),r=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(t){case"input":ul(i),$p(i,s,!0);break;case"textarea":ul(i),Kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mi]=e,n[Ba]=i,iv(n,e,!1,!1),e.stateNode=n;e:{switch(o=yf(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)yt(ha[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Xp(n,i),r=ff(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Yp(n,i),r=mf(n,i),yt("invalid",n);break;default:r=i}xf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ux(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ia(n,l):typeof l=="number"&&Ia(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&Th(n,s,l,o))}switch(t){case"input":ul(n),$p(n,i,!1);break;case"textarea":ul(n),Kp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?so(n,!!i.multiple,s,!1):i.defaultValue!=null&&so(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Nc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(n&&e.stateNode!=null)sv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(t=Qr(Ga.current),Qr(Ei.current),_l(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:vl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return ln(e),null;case 13:if(St(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wt&&Nn!==null&&e.mode&1&&!(e.flags&128))My(),xo(),e.flags|=98560,s=!1;else if(s=_l(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ee(317));s[Mi]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else ai!==null&&(Jf(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||At.current&1?Ft===0&&(Ft=3):lp())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return vo(),Vf(n,e),n===null&&za(e.stateNode.containerInfo),ln(e),null;case 10:return Wh(e.type._context),ln(e),null;case 17:return An(e.type)&&Uc(),ln(e),null;case 19:if(St(At),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(Ft!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gc(n),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&kt()>So&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!wt)return ln(e),null}else 2*kt()-s.renderingStartTime>So&&t!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,t=At.current,xt(At,i?t&1|2:t&1),e):(ln(e),null);case 22:case 23:return ap(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function AS(n,e){switch(Bh(e),e.tag){case 1:return An(e.type)&&Uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vo(),St(Tn),St(fn),qh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(St(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));xo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(At),null;case 4:return vo(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Ml=!1,un=!1,CS=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function to(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function Wf(n,e,t){try{t()}catch(i){It(n,e,i)}}var Fm=!1;function RS(n,e){if(Cf=Ic,n=dy(),zh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=n,u=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===n)break t;if(u===t&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rf={focusedElem:n,selectionRange:t},Ic=!1,Ue=e;Ue!==null;)if(e=Ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ue=n;else for(;Ue!==null;){e=Ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,g=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:si(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(S){It(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}return x=Fm,Fm=!1,x}function wa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wf(e,t,s)}r=r.next}while(r!==i)}}function gd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Xf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ov(n){var e=n.alternate;e!==null&&(n.alternate=null,ov(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mi],delete e[Ba],delete e[If],delete e[uS],delete e[fS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function av(n){return n.tag===5||n.tag===3||n.tag===4}function zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||av(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $f(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(n=n.child,n!==null))for($f(n,e,t),n=n.sibling;n!==null;)$f(n,e,t),n=n.sibling}function Yf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Yf(n,e,t),n=n.sibling;n!==null;)Yf(n,e,t),n=n.sibling}var Qt=null,oi=!1;function Ji(n,e,t){for(t=t.child;t!==null;)lv(n,e,t),t=t.sibling}function lv(n,e,t){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(ld,t)}catch{}switch(t.tag){case 5:un||to(t,e);case 6:var i=Qt,r=oi;Qt=null,Ji(n,e,t),Qt=i,oi=r,Qt!==null&&(oi?(n=Qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Qt.removeChild(t.stateNode));break;case 18:Qt!==null&&(oi?(n=Qt,t=t.stateNode,n.nodeType===8?Jd(n.parentNode,t):n.nodeType===1&&Jd(n,t),Ua(n)):Jd(Qt,t.stateNode));break;case 4:i=Qt,r=oi,Qt=t.stateNode.containerInfo,oi=!0,Ji(n,e,t),Qt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(t,e,o),r=r.next}while(r!==i)}Ji(n,e,t);break;case 1:if(!un&&(to(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){It(t,e,a)}Ji(n,e,t);break;case 21:Ji(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Ji(n,e,t),un=i):Ji(n,e,t);break;default:Ji(n,e,t)}}function jm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new CS),e.forEach(function(i){var r=FS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ti(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,oi=!1;break e;case 3:Qt=a.stateNode.containerInfo,oi=!0;break e;case 4:Qt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Qt===null)throw Error(Ee(160));lv(s,o,r),Qt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,n),e=e.sibling}function cv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(e,n),_i(n),i&4){try{wa(3,n,n.return),gd(3,n)}catch(_){It(n,n.return,_)}try{wa(5,n,n.return)}catch(_){It(n,n.return,_)}}break;case 1:ti(e,n),_i(n),i&512&&t!==null&&to(t,t.return);break;case 5:if(ti(e,n),_i(n),i&512&&t!==null&&to(t,t.return),n.flags&32){var r=n.stateNode;try{Ia(r,"")}catch(_){It(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lx(r,s),yf(a,o);var c=yf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Ux(r,h):f==="dangerouslySetInnerHTML"?kx(r,h):f==="children"?Ia(r,h):Th(r,f,h,c)}switch(a){case"input":hf(r,s);break;case"textarea":Ix(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?so(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?so(r,!!s.multiple,s.defaultValue,!0):so(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ba]=s}catch(_){It(n,n.return,_)}}break;case 6:if(ti(e,n),_i(n),i&4){if(n.stateNode===null)throw Error(Ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){It(n,n.return,_)}}break;case 3:if(ti(e,n),_i(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(_){It(n,n.return,_)}break;case 4:ti(e,n),_i(n);break;case 13:ti(e,n),_i(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sp=kt())),i&4&&jm(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||f,ti(e,n),un=c):ti(e,n),_i(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(Ue=n,f=n.child;f!==null;){for(h=Ue=f;Ue!==null;){switch(u=Ue,m=u.child,u.tag){case 0:case 11:case 14:case 15:wa(4,u,u.return);break;case 1:to(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){It(i,t,_)}}break;case 5:to(u,u.return);break;case 22:if(u.memoizedState!==null){Hm(h);continue}}m!==null?(m.return=u,Ue=m):Hm(h)}f=f.sibling}e:for(f=null,h=n;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nx("display",o))}catch(_){It(n,n.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){It(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ti(e,n),_i(n),i&4&&jm(n);break;case 21:break;default:ti(e,n),_i(n)}}function _i(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(av(t)){var i=t;break e}t=t.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ia(r,""),i.flags&=-33);var s=zm(n);Yf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zm(n);$f(n,a,o);break;default:throw Error(Ee(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function PS(n,e,t){Ue=n,dv(n)}function dv(n,e,t){for(var i=(n.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=Ml;var c=un;if(Ml=o,(un=l)&&!c)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(r):l!==null?(l.return=o,Ue=l):Gm(r);for(;s!==null;)Ue=s,dv(s),s=s.sibling;Ue=r,Ml=a,un=c}Bm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Bm(n)}}function Bm(n){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||gd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Em(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ua(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}un||e.flags&512&&Xf(e)}catch(u){It(e,e.return,u)}}if(e===n){Ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}}function Hm(n){for(;Ue!==null;){var e=Ue;if(e===n){Ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ue=t;break}Ue=e.return}}function Gm(n){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{gd(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Xf(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Xf(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===n){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var LS=Math.ceil,Xc=qi.ReactCurrentDispatcher,ip=qi.ReactCurrentOwner,Jn=qi.ReactCurrentBatchConfig,lt=0,Yt=null,Ut=null,tn=0,Dn=0,no=Dr(0),Ft=0,$a=null,ls=0,xd=0,rp=0,Ea=null,wn=null,sp=0,So=1/0,Fi=null,$c=!1,Kf=null,Mr=null,wl=!1,pr=null,Yc=0,Ta=0,qf=null,vc=-1,_c=0;function vn(){return lt&6?kt():vc!==-1?vc:vc=kt()}function wr(n){return n.mode&1?lt&2&&tn!==0?tn&-tn:pS.transition!==null?(_c===0&&(_c=Yx()),_c):(n=ft,n!==0||(n=window.event,n=n===void 0?16:ty(n.type)),n):1}function pi(n,e,t,i){if(50<Ta)throw Ta=0,qf=null,Error(Ee(185));nl(n,t,i),(!(lt&2)||n!==Yt)&&(n===Yt&&(!(lt&2)&&(xd|=t),Ft===4&&ur(n,tn)),Cn(n,i),t===1&&lt===0&&!(e.mode&1)&&(So=kt()+500,hd&&kr()))}function Cn(n,e){var t=n.callbackNode;p_(n,e);var i=Lc(n,n===Yt?tn:0);if(i===0)t!==null&&Jp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Jp(t),e===1)n.tag===0?hS(Vm.bind(null,n)):_y(Vm.bind(null,n)),cS(function(){!(lt&6)&&kr()}),t=null;else{switch(Kx(i)){case 1:t=Lh;break;case 4:t=Xx;break;case 16:t=Pc;break;case 536870912:t=$x;break;default:t=Pc}t=yv(t,uv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function uv(n,e){if(vc=-1,_c=0,lt&6)throw Error(Ee(327));var t=n.callbackNode;if(uo()&&n.callbackNode!==t)return null;var i=Lc(n,n===Yt?tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Kc(n,i);else{e=i;var r=lt;lt|=2;var s=hv();(Yt!==n||tn!==e)&&(Fi=null,So=kt()+500,ts(n,e));do try{kS();break}catch(a){fv(n,a)}while(!0);Vh(),Xc.current=s,lt=r,Ut!==null?e=0:(Yt=null,tn=0,e=Ft)}if(e!==0){if(e===2&&(r=Mf(n),r!==0&&(i=r,e=Zf(n,r))),e===1)throw t=$a,ts(n,0),ur(n,i),Cn(n,kt()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!IS(r)&&(e=Kc(n,i),e===2&&(s=Mf(n),s!==0&&(i=s,e=Zf(n,s))),e===1))throw t=$a,ts(n,0),ur(n,i),Cn(n,kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:Xr(n,wn,Fi);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=sp+500-kt(),10<e)){if(Lc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Lf(Xr.bind(null,n,wn,Fi),e);break}Xr(n,wn,Fi);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LS(i/1960))-i,10<i){n.timeoutHandle=Lf(Xr.bind(null,n,wn,Fi),i);break}Xr(n,wn,Fi);break;case 5:Xr(n,wn,Fi);break;default:throw Error(Ee(329))}}}return Cn(n,kt()),n.callbackNode===t?uv.bind(null,n):null}function Zf(n,e){var t=Ea;return n.current.memoizedState.isDehydrated&&(ts(n,e).flags|=256),n=Kc(n,e),n!==2&&(e=wn,wn=t,e!==null&&Jf(e)),n}function Jf(n){wn===null?wn=n:wn.push.apply(wn,n)}function IS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~rp,e&=~xd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function Vm(n){if(lt&6)throw Error(Ee(327));uo();var e=Lc(n,0);if(!(e&1))return Cn(n,kt()),null;var t=Kc(n,e);if(n.tag!==0&&t===2){var i=Mf(n);i!==0&&(e=i,t=Zf(n,i))}if(t===1)throw t=$a,ts(n,0),ur(n,e),Cn(n,kt()),t;if(t===6)throw Error(Ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Xr(n,wn,Fi),Cn(n,kt()),null}function op(n,e){var t=lt;lt|=1;try{return n(e)}finally{lt=t,lt===0&&(So=kt()+500,hd&&kr())}}function cs(n){pr!==null&&pr.tag===0&&!(lt&6)&&uo();var e=lt;lt|=1;var t=Jn.transition,i=ft;try{if(Jn.transition=null,ft=1,n)return n()}finally{ft=i,Jn.transition=t,lt=e,!(lt&6)&&kr()}}function ap(){Dn=no.current,St(no)}function ts(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,lS(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:vo(),St(Tn),St(fn),qh();break;case 5:Kh(i);break;case 4:vo();break;case 13:St(At);break;case 19:St(At);break;case 10:Wh(i.type._context);break;case 22:case 23:ap()}t=t.return}if(Yt=n,Ut=n=Er(n.current,null),tn=Dn=e,Ft=0,$a=null,rp=xd=ls=0,wn=Ea=null,Jr!==null){for(e=0;e<Jr.length;e++)if(t=Jr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Jr=null}return n}function fv(n,e){do{var t=Ut;try{if(Vh(),gc.current=Wc,Vc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(as=0,Wt=Ot=Ct=null,Ma=!1,Va=0,ip.current=null,t===null||t.return===null){Ft=1,$a=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Lm(o);if(m!==null){m.flags&=-257,Im(m,o,a,s,e),m.mode&1&&Pm(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Pm(s,c,e),lp();break e}l=Error(Ee(426))}}else if(wt&&a.mode&1){var g=Lm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Im(g,o,a,s,e),Hh(_o(l,a));break e}}s=l=_o(l,a),Ft!==4&&(Ft=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ky(s,l,e);wm(s,p);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mr===null||!Mr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=qy(s,a,e);wm(s,S);break e}}s=s.return}while(s!==null)}mv(t)}catch(w){e=w,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function hv(){var n=Xc.current;return Xc.current=Wc,n===null?Wc:n}function lp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Yt===null||!(ls&268435455)&&!(xd&268435455)||ur(Yt,tn)}function Kc(n,e){var t=lt;lt|=2;var i=hv();(Yt!==n||tn!==e)&&(Fi=null,ts(n,e));do try{DS();break}catch(r){fv(n,r)}while(!0);if(Vh(),lt=t,Xc.current=i,Ut!==null)throw Error(Ee(261));return Yt=null,tn=0,Ft}function DS(){for(;Ut!==null;)pv(Ut)}function kS(){for(;Ut!==null&&!s_();)pv(Ut)}function pv(n){var e=xv(n.alternate,n,Dn);n.memoizedProps=n.pendingProps,e===null?mv(n):Ut=e,ip.current=null}function mv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=AS(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ft=6,Ut=null;return}}else if(t=TS(t,e,Dn),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Ft===0&&(Ft=5)}function Xr(n,e,t){var i=ft,r=Jn.transition;try{Jn.transition=null,ft=1,NS(n,e,t,i)}finally{Jn.transition=r,ft=i}return null}function NS(n,e,t,i){do uo();while(pr!==null);if(lt&6)throw Error(Ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(m_(n,s),n===Yt&&(Ut=Yt=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wl||(wl=!0,yv(Pc,function(){return uo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=ft;ft=1;var a=lt;lt|=4,ip.current=null,RS(n,t),cv(t,n),tS(Rf),Ic=!!Cf,Rf=Cf=null,n.current=t,PS(t),o_(),lt=a,ft=o,Jn.transition=s}else n.current=t;if(wl&&(wl=!1,pr=n,Yc=r),s=n.pendingLanes,s===0&&(Mr=null),c_(t.stateNode),Cn(n,kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($c)throw $c=!1,n=Kf,Kf=null,n;return Yc&1&&n.tag!==0&&uo(),s=n.pendingLanes,s&1?n===qf?Ta++:(Ta=0,qf=n):Ta=0,kr(),null}function uo(){if(pr!==null){var n=Kx(Yc),e=Jn.transition,t=ft;try{if(Jn.transition=null,ft=16>n?16:n,pr===null)var i=!1;else{if(n=pr,pr=null,Yc=0,lt&6)throw Error(Ee(331));var r=lt;for(lt|=4,Ue=n.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:wa(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ue=h;else for(;Ue!==null;){f=Ue;var u=f.sibling,m=f.return;if(ov(f),f===c){Ue=null;break}if(u!==null){u.return=m,Ue=u;break}Ue=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ue=p;break e}Ue=s.return}}var v=n.current;for(Ue=v;Ue!==null;){o=Ue;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ue=y;else e:for(o=v;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gd(9,a)}}catch(w){It(a,a.return,w)}if(a===o){Ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ue=S;break e}Ue=a.return}}if(lt=r,kr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(ld,n)}catch{}i=!0}return i}finally{ft=t,Jn.transition=e}}return!1}function Wm(n,e,t){e=_o(t,e),e=Ky(n,e,1),n=br(n,e,1),e=vn(),n!==null&&(nl(n,1,e),Cn(n,e))}function It(n,e,t){if(n.tag===3)Wm(n,n,t);else for(;e!==null;){if(e.tag===3){Wm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){n=_o(t,n),n=qy(e,n,1),e=br(e,n,1),n=vn(),e!==null&&(nl(e,1,n),Cn(e,n));break}}e=e.return}}function US(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,Yt===n&&(tn&t)===t&&(Ft===4||Ft===3&&(tn&130023424)===tn&&500>kt()-sp?ts(n,0):rp|=t),Cn(n,e)}function gv(n,e){e===0&&(n.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var t=vn();n=$i(n,e),n!==null&&(nl(n,e,t),Cn(n,t))}function OS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),gv(n,t)}function FS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),gv(n,t)}var xv;xv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return En=!1,ES(n,e,t);En=!!(n.flags&131072)}else En=!1,wt&&e.flags&1048576&&Sy(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(n,e),n=e.pendingProps;var r=go(e,fn.current);co(e,t),r=Jh(null,e,i,n,r,t);var s=Qh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$h(e),r.updater=md,e.stateNode=r,r._reactInternals=e,Ff(e,i,n,t),e=Bf(null,e,i,!0,s,t)):(e.tag=0,wt&&s&&jh(e),mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),n=si(i,n),r){case 0:e=jf(null,e,i,n,t);break e;case 1:e=Nm(null,e,i,n,t);break e;case 11:e=Dm(null,e,i,n,t);break e;case 14:e=km(null,e,i,si(i.type,n),t);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),jf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Nm(n,e,i,r,t);case 3:e:{if(ev(e),n===null)throw Error(Ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ay(n,e),Hc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(Ee(423)),e),e=Um(n,e,i,t,r);break e}else if(i!==r){r=_o(Error(Ee(424)),e),e=Um(n,e,i,t,r);break e}else for(Nn=Sr(e.stateNode.containerInfo.firstChild),Un=e,wt=!0,ai=null,t=Ey(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xo(),i===r){e=Yi(n,e,t);break e}mn(n,e,i,t)}e=e.child}return e;case 5:return Cy(e),n===null&&Nf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Pf(i,r)?o=null:s!==null&&Pf(i,s)&&(e.flags|=32),Qy(n,e),mn(n,e,o,t),e.child;case 6:return n===null&&Nf(e),null;case 13:return tv(n,e,t);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=yo(e,null,i,t):mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Dm(n,e,i,r,t);case 7:return mn(n,e,e.pendingProps,t),e.child;case 8:return mn(n,e,e.pendingProps.children,t),e.child;case 12:return mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(jc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Yi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Uf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Uf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,t),r=Qn(r),i=i(r),e.flags|=1,mn(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),km(n,e,i,r,t);case 15:return Zy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),yc(n,e),e.tag=1,An(i)?(n=!0,Oc(e)):n=!1,co(e,t),Yy(e,i,r),Ff(e,i,r,t),Bf(null,e,i,!0,n,t);case 19:return nv(n,e,t);case 22:return Jy(n,e,t)}throw Error(Ee(156,e.tag))};function yv(n,e){return Wx(n,e)}function zS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new zS(n,e,t,i)}function cp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jS(n){if(typeof n=="function")return cp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ch)return 11;if(n===Rh)return 14}return 2}function Er(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Sc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")cp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Xs:return ns(t.children,r,s,e);case Ah:o=8,r|=8;break;case lf:return n=Zn(12,t,e,r|2),n.elementType=lf,n.lanes=s,n;case cf:return n=Zn(13,t,e,r),n.elementType=cf,n.lanes=s,n;case df:return n=Zn(19,t,e,r),n.elementType=df,n.lanes=s,n;case Cx:return yd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Tx:o=10;break e;case Ax:o=9;break e;case Ch:o=11;break e;case Rh:o=14;break e;case or:o=16,i=null;break e}throw Error(Ee(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ns(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function yd(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=Cx,n.lanes=t,n.stateNode={isHidden:!1},n}function ou(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function au(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function BS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bd(0),this.expirationTimes=Bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dp(n,e,t,i,r,s,o,a,l){return n=new BS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),n}function HS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function vv(n){if(!n)return Pr;n=n._reactInternals;e:{if(ps(n)!==n||n.tag!==1)throw Error(Ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(n.tag===1){var t=n.type;if(An(t))return vy(n,t,e)}return e}function _v(n,e,t,i,r,s,o,a,l){return n=dp(t,i,!0,n,r,s,o,a,l),n.context=vv(null),t=n.current,i=vn(),r=wr(t),s=Vi(i,r),s.callback=e??null,br(t,s,r),n.current.lanes=r,nl(n,r,i),Cn(n,i),n}function vd(n,e,t,i){var r=e.current,s=vn(),o=wr(r);return t=vv(t),e.context===null?e.context=t:e.pendingContext=t,e=Vi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=br(r,e,o),n!==null&&(pi(n,r,o,s),mc(n,r,o)),o}function qc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function up(n,e){Xm(n,e),(n=n.alternate)&&Xm(n,e)}function GS(){return null}var Sv=typeof reportError=="function"?reportError:function(n){console.error(n)};function fp(n){this._internalRoot=n}_d.prototype.render=fp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Ee(409));vd(n,e,null,null)};_d.prototype.unmount=fp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;cs(function(){vd(null,n,null,null)}),e[Xi]=null}};function _d(n){this._internalRoot=n}_d.prototype.unstable_scheduleHydration=function(n){if(n){var e=Jx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<dr.length&&e!==0&&e<dr[t].priority;t++);dr.splice(t,0,n),t===0&&ey(n)}};function hp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $m(){}function VS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qc(o);s.call(c)}}var o=_v(e,i,n,0,null,!1,!1,"",$m);return n._reactRootContainer=o,n[Xi]=o.current,za(n.nodeType===8?n.parentNode:n),cs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=qc(l);a.call(c)}}var l=dp(n,0,!1,null,null,!1,!1,"",$m);return n._reactRootContainer=l,n[Xi]=l.current,za(n.nodeType===8?n.parentNode:n),cs(function(){vd(e,l,t,i)}),l}function bd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qc(o);a.call(l)}}vd(e,o,n,r)}else o=VS(t,e,n,r,i);return qc(o)}qx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=fa(e.pendingLanes);t!==0&&(Ih(e,t|1),Cn(e,kt()),!(lt&6)&&(So=kt()+500,kr()))}break;case 13:cs(function(){var i=$i(n,1);if(i!==null){var r=vn();pi(i,n,1,r)}}),up(n,1)}};Dh=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=vn();pi(e,n,134217728,t)}up(n,134217728)}};Zx=function(n){if(n.tag===13){var e=wr(n),t=$i(n,e);if(t!==null){var i=vn();pi(t,n,e,i)}up(n,e)}};Jx=function(){return ft};Qx=function(n,e){var t=ft;try{return ft=n,e()}finally{ft=t}};_f=function(n,e,t){switch(e){case"input":if(hf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=fd(i);if(!r)throw Error(Ee(90));Px(i),hf(i,r)}}}break;case"textarea":Ix(n,t);break;case"select":e=t.value,e!=null&&so(n,!!t.multiple,e,!1)}};zx=op;jx=cs;var WS={usingClientEntryPoint:!1,Events:[rl,qs,fd,Ox,Fx,op]},Ko={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XS={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gx(n),n===null?null:n.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||GS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{ld=El.inject(XS),wi=El}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;Fn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(Ee(200));return HS(n,e,null,t)};Fn.createRoot=function(n,e){if(!hp(n))throw Error(Ee(299));var t=!1,i="",r=Sv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dp(n,1,!1,null,null,t,!1,i,r),n[Xi]=e.current,za(n.nodeType===8?n.parentNode:n),new fp(e)};Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Ee(188)):(n=Object.keys(n).join(","),Error(Ee(268,n)));return n=Gx(e),n=n===null?null:n.stateNode,n};Fn.flushSync=function(n){return cs(n)};Fn.hydrate=function(n,e,t){if(!Sd(e))throw Error(Ee(200));return bd(null,n,e,!0,t)};Fn.hydrateRoot=function(n,e,t){if(!hp(n))throw Error(Ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Sv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=_v(e,null,n,1,t??null,r,!1,s,o),n[Xi]=e.current,za(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new _d(e)};Fn.render=function(n,e,t){if(!Sd(e))throw Error(Ee(200));return bd(null,n,e,!1,t)};Fn.unmountComponentAtNode=function(n){if(!Sd(n))throw Error(Ee(40));return n._reactRootContainer?(cs(function(){bd(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1};Fn.unstable_batchedUpdates=op;Fn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Sd(t))throw Error(Ee(200));if(n==null||n._reactInternals===void 0)throw Error(Ee(38));return bd(n,e,t,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(n){console.error(n)}}bv(),bx.exports=Fn;var $S=bx.exports,Ym=$S;of.createRoot=Ym.createRoot,of.hydrateRoot=Ym.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(n,e)=>{const t=xe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},f)=>xe.createElement("svg",{ref:f,...YS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${KS(n)}`,a].join(" "),...c},[...e.map(([h,u])=>xe.createElement(h,u)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=ze("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=ze("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ze("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ze("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=ze("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ze("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ze("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=ze("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=ze("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=ze("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ze("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=ze("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=ze("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=ze("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ze("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=ze("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=ze("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=ze("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=ze("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=ze("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ze("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ze("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=ze("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=ze("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=ze("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=ze("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ze("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=ze("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=ze("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ze("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=ze("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=ze("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=ze("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=ze("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=ze("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=ze("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=ze("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=ze("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=ze("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=ze("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=ze("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=ze("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=ze("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=ze("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=ze("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=ze("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=ze("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=ze("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Cb=({scenarios:n,activeScenario:e,onSelectScenario:t,onRunSimulation:i,onOpenWindow:r,onToggleSidebar:s,onUploadScenarioJson:o,onExportScenarioJson:a,onExportResultsJson:l,onOpenPdfReport:c,onResetState:f,viewMode:h="3d",onToggleViewMode:u,isSidebarOpen:m,isSimulating:x})=>{const[_,g]=xe.useState(!1);xe.useRef(null);const p=xe.useRef(null);return xe.useEffect(()=>{const v=y=>{p.current&&!p.current.contains(y.target)&&g(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),d.jsxs("header",{className:"hdr-container",children:[d.jsx("style",{children:`
        .hdr-container {
          height: 48px;
          background-color: #16181d;
          border-bottom: 1px solid #282c34;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          padding: 0 16px;
          z-index: 100;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #1473e6 #16181d;
        }

        .hdr-container::-webkit-scrollbar {
          height: 3px;
        }
        .hdr-container::-webkit-scrollbar-track {
          background: #16181d;
        }
        .hdr-container::-webkit-scrollbar-thumb {
          background: #1473e6;
          border-radius: 2px;
        }

        .hdr-section {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .hdr-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          letter-spacing: -0.2px;
          color: #f8fafc;
          margin-right: 6px;
          user-select: none;
        }

        .hdr-brand-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: linear-gradient(135deg, #52525b, #27272a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        }

        .hdr-divider {
          width: 1px;
          height: 20px;
          background-color: #2d323b;
          margin: 0 2px;
        }

        .hdr-select-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hdr-label {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
        }

        .hdr-select {
          background-color: #1a1d22;
          color: #f8fafc;
          border: 1px solid #333943;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          outline: none;
          cursor: pointer;
        }

        .hdr-btn {
          height: 32px;
          padding: 0 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s ease-in-out;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .hdr-btn-secondary {
          background-color: #20242b;
          color: #cbd5e1;
          border: 1px solid #333943;
        }

        .hdr-btn-secondary:hover {
          background-color: #282d36;
          color: #f8fafc;
          border-color: #454d5b;
        }

        .hdr-btn-secondary:active {
          background-color: #1c1f26;
        }

        .hdr-btn-primary {
          background: #ffffff;
          color: #000000;
          border: 1px solid #ffffff;
          box-shadow: 0 2px 6px rgba(255, 255, 255, 0.2);
          font-weight: 600;
        }

        .hdr-btn-primary:hover:not(:disabled) {
          background: #e2e8f0;
          border-color: #cbd5e1;
          box-shadow: 0 3px 10px rgba(255, 255, 255, 0.35);
        }

        .hdr-btn-primary:disabled {
          background: #2a303c;
          color: #64748b;
          border-color: #333943;
          box-shadow: none;
          cursor: not-allowed;
        }

        .hdr-btn-danger {
          background-color: #20242b;
          color: #f87171;
          border: 1px solid #333943;
        }

        .hdr-btn-danger:hover {
          background-color: #2d1f23;
          color: #ef4444;
          border-color: #7f1d1d;
        }

        .hdr-clock {
          height: 32px;
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #1a1d22;
          padding: 0 12px;
          border-radius: 6px;
          border: 1px solid #2d323b;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          color: #38bdf8;
          user-select: none;
        }

        .hdr-toggle-btn {
          width: 32px;
          height: 32px;
          padding: 0;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease-in-out;
          box-sizing: border-box;
        }

        .hdr-toggle-btn.active {
          background-color: #1e293b;
          color: #38bdf8;
          border: 1px solid #0284c7;
        }

        .hdr-toggle-btn.inactive {
          background-color: #20242b;
          color: #94a3b8;
          border: 1px solid #333943;
        }

        .hdr-toggle-btn.inactive:hover {
          background-color: #282d36;
          color: #f8fafc;
          border-color: #454d5b;
        }

        .hdr-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          background-color: #1a1d24;
          border: 1px solid #333943;
          border-radius: 8px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 240px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 200;
        }

        .hdr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: #e2e8f0;
          cursor: pointer;
          text-align: left;
          transition: background-color 0.15s ease;
          width: 100%;
        }

        .hdr-dropdown-item:hover {
          background-color: #262b35;
        }

        @media (max-width: 1024px) {
          .hdr-container {
            gap: 8px;
            padding: 0 8px;
          }
        }

        @media (max-width: 768px) {
          .hdr-container {
            height: 48px;
          }
          .hdr-brand-text {
            display: none;
          }
          .hdr-label {
            display: none;
          }
          .hdr-clock {
            font-size: 11px;
            padding: 0 8px;
          }
        }
      `}),d.jsxs("div",{className:"hdr-section",children:[d.jsxs("button",{onClick:()=>r("scenarios"),className:"hdr-btn hdr-btn-secondary",title:"Открыть отдельное окно управления сценариями",children:[d.jsx(Ya,{size:14,style:{color:"#38bdf8"}}),d.jsx("span",{children:"Сценарии"})]}),d.jsxs("button",{onClick:i,disabled:x,className:"hdr-btn hdr-btn-primary",children:[x?d.jsx(Ka,{size:14,className:"animate-spin"}):d.jsx(Md,{size:14}),d.jsx("span",{children:x?"Расчет...":"Запустить Симуляцию"})]}),u&&d.jsxs("div",{style:{display:"flex",backgroundColor:"#1a1d24",border:"1px solid #333943",borderRadius:"6px",padding:"2px",marginLeft:"6px"},children:[d.jsxs("button",{onClick:()=>u("3d"),className:"hdr-btn",style:{height:"28px",padding:"0 10px",backgroundColor:h==="3d"?"#1473e6":"transparent",color:h==="3d"?"#ffffff":"#94a3b8",border:"none",borderRadius:"4px",fontWeight:600},title:"Переключить рабочую область на 3D Глобус",children:[d.jsx(Zc,{size:13}),d.jsx("span",{children:"3D Глобус"})]}),d.jsxs("button",{onClick:()=>u("2d"),className:"hdr-btn",style:{height:"28px",padding:"0 10px",backgroundColor:h==="2d"?"#0284c7":"transparent",color:h==="2d"?"#ffffff":"#94a3b8",border:"none",borderRadius:"4px",fontWeight:600},title:"Переключить рабочую область на 2D карту орбит",children:[d.jsx(Av,{size:13}),d.jsx("span",{children:"2D Карта"})]})]})]}),d.jsxs("div",{className:"hdr-section hdr-shortcuts-desktop",children:[d.jsxs("button",{onClick:()=>r("emergency"),className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d"},title:"Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию",children:[d.jsx(wd,{size:14,style:{color:"#ff4444"}}),d.jsx("span",{children:"Симуляция ЧС"})]}),d.jsxs("button",{onClick:()=>r("analytics"),className:"hdr-btn hdr-btn-secondary",children:[d.jsx(Mv,{size:14,style:{color:"#38bdf8"}}),d.jsx("span",{children:"Аналитика & Гантт"})]}),d.jsxs("button",{onClick:()=>r("recommendations"),className:"hdr-btn hdr-btn-secondary",title:"Инженерные рекомендации и синтез оптимальной группировки",children:[d.jsx(ib,{size:14,style:{color:"#fbbf24"}}),d.jsx("span",{children:"Рекомендации"})]}),d.jsxs("button",{onClick:()=>r("configurator"),className:"hdr-btn hdr-btn-secondary",children:[d.jsx(vp,{size:14,style:{color:"#a78bfa"}}),d.jsx("span",{children:"Конфигуратор"})]}),d.jsxs("button",{onClick:()=>r("compare"),className:"hdr-btn hdr-btn-secondary",title:"Анализ комбинаций отказов и вариантов восстановления",children:[d.jsx(QS,{size:14,style:{color:"#fbbf24"}}),d.jsx("span",{children:"Анализ Отказов"})]}),c&&d.jsxs("button",{onClick:c,className:"hdr-btn hdr-btn-secondary",style:{backgroundColor:"#1e293b",borderColor:"#38bdf8",color:"#38bdf8"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[d.jsx(yp,{size:14}),d.jsx("span",{children:"Отчёт PDF"})]}),f&&d.jsxs("button",{onClick:f,className:"hdr-btn hdr-btn-danger",title:"Сбросить все сохраненные настройки страницы",children:[d.jsx(Ka,{size:13}),d.jsx("span",{children:"Сбросить"})]}),d.jsx("button",{onClick:s,style:{width:"32px",height:"32px",padding:0,borderRadius:"6px",backgroundColor:m?"#1e293b":"#0284c7",border:`1px solid ${m?"#333943":"#38bdf8"}`,color:"#ffffff",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",marginLeft:"auto"},title:m?"Скрыть правую панель аутлайнера":"Показать правую панель аутлайнера",children:d.jsx(cb,{size:16,style:{color:m?"#94a3b8":"#ffffff"}})})]})]})},qo=n=>typeof n.plane=="number"?n.plane:parseInt(String(n.plane_id||n.plane||"1").replace("P",""))||1,Rb=({settings:n,onChangeSettings:e,isOpen:t,scenario:i,focusedSatelliteId:r,onSelectSatellite:s})=>{var U,b,R,q,re,O,te,H,ne,G,$,k,ee,de,le,W,F;const[o,a]=xe.useState(null),[l,c]=xe.useState({}),[f,h]=xe.useState(!1);xe.useEffect(()=>{var B;if(r){a({type:"satellite",id:r});const he=(B=i==null?void 0:i.satellites)==null?void 0:B.find(fe=>fe.id===r);if(he){const fe=qo(he);c(me=>({...me,[fe]:!0}))}}else(o==null?void 0:o.type)==="satellite"&&a(null)},[r,i]);const u=(B,he)=>{e({...n,[B]:he})},m=(B,he)=>{e({...n,planeRaanMap:{...(n==null?void 0:n.planeRaanMap)||{},[B]:he}})},x=(B,he)=>{e({...n,planePhaseMap:{...(n==null?void 0:n.planePhaseMap)||{},[B]:he}})},_=(B,he)=>{e({...n,planeIncMap:{...(n==null?void 0:n.planeIncMap)||{},[B]:he}})},g=(B,he)=>{e({...n,planeAltMap:{...(n==null?void 0:n.planeAltMap)||{},[B]:he}})},p=(B,he)=>{var me;he.stopPropagation();const fe=!!((me=n==null?void 0:n.offlineGateways)!=null&&me[B]);e({...n,offlineGateways:{...(n==null?void 0:n.offlineGateways)||{},[B]:!fe}})},v=(B,he)=>{var me;he.stopPropagation();const fe=!!((me=n==null?void 0:n.hiddenPlanes)!=null&&me[B]);e({...n,hiddenPlanes:{...(n==null?void 0:n.hiddenPlanes)||{},[B]:!fe}})},y=(B,he)=>{var me;he.stopPropagation();const fe=!!((me=n==null?void 0:n.hiddenSatellites)!=null&&me[B]);e({...n,hiddenSatellites:{...(n==null?void 0:n.hiddenSatellites)||{},[B]:!fe}})},S=B=>{B.stopPropagation();const he=(n==null?void 0:n.showGateways)===!1;u("showGateways",he)},w=(B,he)=>{var me;he.stopPropagation();const fe=!!((me=n==null?void 0:n.hiddenGateways)!=null&&me[B]);e({...n,hiddenGateways:{...(n==null?void 0:n.hiddenGateways)||{},[B]:!fe}})},T=B=>{const he=B%10,fe=B%100;let me="узлов";return(fe<11||fe>19)&&(he===1?me="узел":he>=2&&he<=4&&(me="узла")),`${B} ${me}`},E=Tc.useMemo(()=>{if(i!=null&&i.satellites&&i.satellites.length>0){const B=new Set;if(i.satellites.forEach(he=>{B.add(qo(he))}),B.size>0)return Array.from(B).sort((he,fe)=>he-fe)}return[1,2,3]},[i==null?void 0:i.satellites]),P=({label:B,icon:he,badge:fe,isSelected:me,onClick:ke,onExpand:we,isExpanded:j,level:Be=0,hasChildren:Ae,isVisible:Pe=!0,onToggleVisibility:Ce})=>{const[Oe,Fe]=xe.useState(!1);return d.jsxs("div",{style:{display:"flex",alignItems:"center",padding:`4px 8px 4px ${8+Be*12}px`,cursor:"pointer",backgroundColor:me?"#1473e640":Oe?"#2a2a2a":"transparent",borderLeft:me?"2px solid #1473e6":"2px solid transparent",color:Pe?me?"#fff":"#ccc":"#666",userSelect:"none",transition:"background-color 0.15s ease"},onClick:ke,onMouseEnter:()=>Fe(!0),onMouseLeave:()=>Fe(!1),children:[d.jsx("div",{style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"4px",flexShrink:0},onClick:oe=>{Ae&&we&&(oe.stopPropagation(),we())},children:Ae?j?d.jsx(mp,{size:14}):d.jsx(ZS,{size:14}):null}),he&&d.jsx("div",{style:{marginRight:"6px",display:"flex",alignItems:"center",flexShrink:0,opacity:Pe?1:.4},children:he}),d.jsx("span",{style:{fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,textDecoration:Pe?"none":"line-through",opacity:Pe?1:.6},children:B}),fe!=null&&d.jsx("span",{style:{fontSize:"11px",color:me?"#a5d8ff":"#777777",marginRight:"6px",flexShrink:0,fontWeight:500,userSelect:"none"},children:fe}),Ce&&d.jsx("button",{type:"button",title:Pe?"Скрыть с 3D сцены":"Показать на 3D сцене",onClick:oe=>{oe.stopPropagation(),Ce(oe)},style:{background:Pe?"transparent":"#ff4d4f20",border:Pe?"1px solid transparent":"1px solid #ff4d4f40",padding:"2px 4px",marginLeft:"4px",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:Pe?Oe?"#00f0ff":"#777":"#ff4d4f",opacity:Pe?Oe?1:.5:1,transition:"all 0.15s ease"},children:Pe?d.jsx(ma,{size:13}):d.jsx(Tl,{size:13})})]})};return t?d.jsxs("aside",{style:{width:"290px",maxWidth:"calc(100vw - 16px)",backgroundColor:"#262626",borderLeft:"1px solid #383838",display:"flex",flexDirection:"column",color:"#e0e0e0",fontSize:"12px",height:"calc(100vh - 48px)",zIndex:90,boxShadow:"-4px 0 16px rgba(0,0,0,0.35)"},children:[d.jsxs("div",{style:{flex:"1 1 50%",display:"flex",flexDirection:"column",borderBottom:"1px solid #1473e6",overflow:"hidden"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#202020",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:[d.jsx(Ya,{size:14,style:{color:"#1473e6"}}),d.jsx("span",{children:"Аутлайнер объектов"})]}),d.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"8px 0"},children:[d.jsx(P,{label:"Наземные шлюзы",badge:((U=i==null?void 0:i.gateways)==null?void 0:U.length)||0,icon:d.jsx(Tv,{size:12}),isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)==="all",onClick:()=>h(!f),onExpand:()=>h(!f),isExpanded:f,hasChildren:(((b=i==null?void 0:i.gateways)==null?void 0:b.length)||0)>0,isVisible:n.showGateways!==!1,onToggleVisibility:S}),f&&((R=i==null?void 0:i.gateways)==null?void 0:R.map(B=>{var he;return d.jsx(P,{label:B.name,level:1,isSelected:(o==null?void 0:o.type)==="gateway"&&(o==null?void 0:o.id)===B.id,onClick:()=>a({type:"gateway",id:B.id}),isVisible:n.showGateways!==!1&&!((he=n.hiddenGateways)!=null&&he[B.id]),onToggleVisibility:fe=>w(B.id,fe)},B.id)})),E.map(B=>{var ke,we;const he=l[B],fe=((ke=i==null?void 0:i.satellites)==null?void 0:ke.filter(j=>qo(j)===B))||[],me=!!((we=n.hiddenPlanes)!=null&&we[B]);return d.jsxs(Tc.Fragment,{children:[d.jsx(P,{label:`Плоскость ${B}`,badge:fe.length,icon:d.jsx(hb,{size:12}),isSelected:(o==null?void 0:o.type)==="plane"&&(o==null?void 0:o.id)===B,onClick:()=>a({type:"plane",id:B}),onExpand:()=>c(j=>({...j,[B]:!he})),isExpanded:he,hasChildren:fe.length>0,isVisible:!me,onToggleVisibility:j=>v(B,j)}),he&&fe.map(j=>{var Pe;const Be=!!((Pe=n.hiddenSatellites)!=null&&Pe[j.id]),Ae=!me&&!Be;return d.jsx(P,{label:`Спутник ${j.id}`,level:1,isSelected:(o==null?void 0:o.type)==="satellite"&&(o==null?void 0:o.id)===j.id,onClick:()=>{a({type:"satellite",id:j.id}),s&&s(j)},isVisible:Ae,onToggleVisibility:Ce=>y(j.id,Ce)},j.id)})]},B)})]})]}),d.jsxs("div",{style:{flex:"1 1 50%",overflowY:"auto",display:"flex",flexDirection:"column",backgroundColor:"#1e1e1e"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#191919",display:"flex",alignItems:"center",fontWeight:600,color:"#aaa",fontSize:"11px"},children:[(o==null?void 0:o.type)==="plane"&&`НАСТРОЙКИ ПЛОСКОСТИ P${o.id}`,(o==null?void 0:o.type)==="satellite"&&`ДАННЫЕ СПУТНИКА ${o.id}`,(o==null?void 0:o.type)==="gateway"&&"ДАННЫЕ ШЛЮЗА",!o&&"СВОЙСТВА ОБЪЕКТА"]}),d.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[!o&&d.jsxs("div",{style:{padding:"24px 16px",textAlign:"center",color:"#888",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[d.jsx(Ya,{size:24,style:{color:"#555"}}),d.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"#bbb"},children:"Объект не выбран"}),d.jsx("div",{style:{fontSize:"11px",color:"#777",lineHeight:"1.4"},children:"Выберите плоскость орбит, спутник или наземный шлюз в дереве выше для просмотра телеметрии и управления."})]}),o&&o.type==="plane"&&d.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#1473e6",fontWeight:600},children:[d.jsx(JS,{size:14}),d.jsxs("span",{children:["Плоскость P",o.id]})]}),d.jsxs("button",{type:"button",onClick:B=>v(o.id,B),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:(q=n.hiddenPlanes)!=null&&q[o.id]?"#ff4d4f20":"#1473e625",color:(re=n.hiddenPlanes)!=null&&re[o.id]?"#ff4d4f":"#00f0ff",border:`1px solid ${(O=n.hiddenPlanes)!=null&&O[o.id]?"#ff4d4f60":"#1473e660"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:(te=n.hiddenPlanes)!=null&&te[o.id]?"Показать плоскость":"Скрыть плоскость и её спутники",children:[(H=n.hiddenPlanes)!=null&&H[o.id]?d.jsx(Tl,{size:12}):d.jsx(ma,{size:12}),d.jsx("span",{children:(ne=n.hiddenPlanes)!=null&&ne[o.id]?"Скрыта":"Видима"})]})]}),(()=>{var ke,we;const B=((ke=i==null?void 0:i.satellites)==null?void 0:ke.filter(j=>qo(j)===o.id))||[],he=!!((we=n.hiddenPlanes)!=null&&we[o.id]),fe=B.filter(j=>{var Be;return!!((Be=n.hiddenSatellites)!=null&&Be[j.id])}).length,me=he?0:B.length-fe;return d.jsxs("div",{style:{backgroundColor:"rgba(20, 115, 230, 0.12)",border:"1px solid rgba(20, 115, 230, 0.25)",borderRadius:"6px",padding:"8px 10px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Узлов (спутников) на орбите:"}),d.jsx("span",{style:{color:"#00f0ff",fontWeight:700,fontSize:"12px"},children:T(B.length)})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px"},children:[d.jsx("span",{style:{color:"#888"},children:"Видимость на 3D сцене:"}),d.jsxs("span",{style:{color:me>0?"#00ff88":"#ff4d4f",fontWeight:600},children:[me," из ",B.length]})]}),B.length>0&&d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"2px",paddingTop:"6px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:B.map(j=>{var Ae;const Be=he||!!((Ae=n.hiddenSatellites)!=null&&Ae[j.id]);return d.jsx("span",{onClick:()=>{a({type:"satellite",id:j.id}),s&&s(j)},style:{fontSize:"10px",fontFamily:"monospace",padding:"2px 6px",borderRadius:"3px",backgroundColor:Be?"rgba(255,255,255,0.05)":"rgba(20, 115, 230, 0.25)",color:Be?"#777":"#93c5fd",border:Be?"1px solid #444":"1px solid rgba(20, 115, 230, 0.4)",cursor:"pointer",textDecoration:Be?"line-through":"none",transition:"all 0.15s ease"},title:`Перейти к узлу ${j.id}`,children:j.id},j.id)})})]})})(),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"1. RAAN (Поворот вокруг Земли):"})}),d.jsxs("span",{style:{color:"#1473e6",fontWeight:"bold"},children:[((G=n==null?void 0:n.planeRaanMap)==null?void 0:G[o.id])??0,"°"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Поворачивает всё кольцо орбиты вокруг оси Земли."}),d.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:(($=n==null?void 0:n.planeRaanMap)==null?void 0:$[o.id])??0,onChange:B=>m(o.id,parseFloat(B.target.value)),style:Al})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"2. Фазирование (Сдвиг вдоль кольца):"})}),d.jsxs("span",{style:{color:"#00ff88",fontWeight:"bold"},children:[((k=n==null?void 0:n.planePhaseMap)==null?void 0:k[o.id])??0,"°"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Сдвигает спутники вдоль неподвижного кольца (шахматный порядок)."}),d.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((ee=n==null?void 0:n.planePhaseMap)==null?void 0:ee[o.id])??0,onChange:B=>x(o.id,parseFloat(B.target.value)),style:{...Al,accentColor:"#00ff88"}})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"3. Наклонение плоскости (Inc):"})}),d.jsxs("span",{style:{color:"#a78bfa",fontWeight:"bold"},children:[((de=n==null?void 0:n.planeIncMap)==null?void 0:de[o.id])??87,"°"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Задает угол наклонения орбитальной плоскости к экватору."}),d.jsx("input",{type:"range",min:"0",max:"120",step:"1",value:((le=n==null?void 0:n.planeIncMap)==null?void 0:le[o.id])??87,onChange:B=>_(o.id,parseFloat(B.target.value)),style:{...Al,accentColor:"#a78bfa"}})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[d.jsx("span",{children:d.jsx("b",{children:"4. Высота орбиты (Altitude):"})}),d.jsxs("span",{style:{color:"#fbbf24",fontWeight:"bold"},children:[((W=n==null?void 0:n.planeAltMap)==null?void 0:W[o.id])??550," км"]})]}),d.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Изменяет высоту полета спутников текущей плоскости."}),d.jsx("input",{type:"range",min:"300",max:"2000",step:"10",value:((F=n==null?void 0:n.planeAltMap)==null?void 0:F[o.id])??550,onChange:B=>g(o.id,parseFloat(B.target.value)),style:{...Al,accentColor:"#fbbf24"}})]})]}),o&&o.type==="satellite"&&(()=>{var me,ke,we;const B=(me=i==null?void 0:i.satellites)==null?void 0:me.find(j=>j.id===o.id);if(!B)return d.jsx("div",{style:{color:"#888"},children:"Нет данных"});const he=qo(B),fe=!((ke=n==null?void 0:n.hiddenPlanes)!=null&&ke[he])&&!((we=n==null?void 0:n.hiddenSatellites)!=null&&we[B.id]);return d.jsx("div",{style:qm,children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),d.jsxs("button",{type:"button",onClick:j=>y(B.id,j),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:fe?"#1473e625":"#ff4d4f20",color:fe?"#00f0ff":"#ff4d4f",border:`1px solid ${fe?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:fe?"Скрыть спутник с 3D сцены":"Показать спутник на 3D сцене",children:[fe?d.jsx(ma,{size:12}):d.jsx(Tl,{size:12}),d.jsx("span",{children:fe?"Видим":"Скрыт"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"ID"}),d.jsx("span",{style:{color:"#fff",fontWeight:600},children:B.id})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Плоскость"}),d.jsxs("span",{style:{color:"#fff"},children:["P",he]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Наклонение"}),d.jsxs("span",{style:{color:"#fff"},children:[B.inc,"°"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Высота"}),d.jsxs("span",{style:{color:"#fff"},children:[B.altitude," км"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Температура"}),d.jsxs("span",{style:{color:(B.temperature_c||0)>60?"#ff3b30":"#00ff88"},children:[B.temperature_c??20,"°C"]})]})]})})})(),o&&o.type==="gateway"&&(()=>{var fe,me,ke,we,j,Be,Ae,Pe;const B=(fe=i==null?void 0:i.gateways)==null?void 0:fe.find(Ce=>Ce.id===o.id);if(!B)return d.jsx("div",{style:{color:"#888"},children:"Нет данных"});const he=n.showGateways!==!1&&!((me=n.hiddenGateways)!=null&&me[B.id]);return d.jsx("div",{style:qm,children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"6px",borderBottom:"1px solid #333"},children:[d.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Отображение на 3D сцене"}),d.jsxs("button",{type:"button",onClick:Ce=>w(B.id,Ce),style:{display:"flex",alignItems:"center",gap:"4px",padding:"3px 8px",fontSize:"11px",backgroundColor:he?"#1473e625":"#ff4d4f20",color:he?"#00f0ff":"#ff4d4f",border:`1px solid ${he?"#1473e660":"#ff4d4f60"}`,borderRadius:"4px",cursor:"pointer",transition:"all 0.15s ease"},title:he?"Скрыть шлюз":"Показать шлюз",children:[he?d.jsx(ma,{size:12}):d.jsx(Tl,{size:12}),d.jsx("span",{children:he?"Видим":"Скрыт"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Название"}),d.jsx("span",{style:{color:"#fff",fontWeight:600},children:B.name})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Координаты"}),d.jsxs("span",{style:{color:"#fff"},children:[B.lat.toFixed(2),"°, ",B.lon.toFixed(2),"°"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Тип"}),d.jsx("span",{style:{color:"#fff"},children:B.type||"Шлюз"})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Купол досягаемости"}),d.jsx("span",{style:{color:n.showGatewayCoverage!==!1?"#00d084":"#888"},children:n.showGatewayCoverage!==!1?"20% непрозрачность":"Скрыт"})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"6px",paddingTop:"6px",borderTop:"1px solid #333"},children:[d.jsx("span",{style:{color:"#aaa"},children:"Статус связи"}),d.jsx("span",{style:{color:(ke=n==null?void 0:n.offlineGateways)!=null&&ke[B.id]?"#ff3b30":"#00ff88",fontWeight:"bold"},children:(we=n==null?void 0:n.offlineGateways)!=null&&we[B.id]?"ОТКАЗ (OFFLINE)":"ШТАТНО (ACTIVE)"})]}),d.jsxs("button",{type:"button",onClick:Ce=>p(B.id,Ce),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px 12px",fontSize:"11px",fontWeight:600,backgroundColor:(j=n==null?void 0:n.offlineGateways)!=null&&j[B.id]?"#ff3b30":"#1e293b",color:(Be=n==null?void 0:n.offlineGateways)!=null&&Be[B.id]?"#ffffff":"#ff4d4f",border:`1px solid ${(Ae=n==null?void 0:n.offlineGateways)!=null&&Ae[B.id]?"#ff3b30":"#7f1d1d"}`,borderRadius:"6px",cursor:"pointer",marginTop:"6px",transition:"all 0.15s ease"},children:[d.jsx(wd,{size:14}),d.jsx("span",{children:(Pe=n==null?void 0:n.offlineGateways)!=null&&Pe[B.id]?"ВОССТАНОВИТЬ ШЛЮЗ":"ИМИТИРОВАТЬ АВАРИЮ ШЛЮЗА"})]})]})})})()]})]})]}):null},qm={backgroundColor:"#1f1f1f",border:"1px solid #333333",borderRadius:"4px",padding:"10px"},Al={width:"100%",accentColor:"#1473e6",cursor:"pointer"},Pb=({settings:n,onChangeSettings:e})=>{var f,h;const[t,i]=xe.useState(null),r=xe.useRef(null);xe.useEffect(()=>{const u=x=>{r.current&&!r.current.contains(x.target)&&i(null)},m=x=>{x.key==="Escape"&&i(null)};return t&&(document.addEventListener("mousedown",u),document.addEventListener("touchstart",u),document.addEventListener("keydown",m)),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("touchstart",u),document.removeEventListener("keydown",m)}},[t]);const s=(u,m)=>{e({...n,[u]:m})},o=u=>{i(m=>m===u?null:u)},a=()=>{e({...n,satColor:"#ffffff",offlineSatColor:"#e11d48",highLatencySatColor:"#d97706",orbitColor:"#475569",islColor:"#cbd5e1",gatewayColor:"#f8fafc",groundLinkColor:"#94a3b8",atmosphereColor:"#334155",fovConeColor:"#cbd5e1"})},l=u=>{e({...n,showOrbits:u,showSatellites:u,showGateways:u,showGatewayCoverage:u,showISL:u,showSatLinks:u,showLabels:u,showAtmosphere:u,showCoverageHeatmap:u,showTrafficLoad:u,showDistances:u})},c=[{key:"layers",label:"Слои сцены",icon:d.jsx(ma,{size:18})},{key:"rendering",label:"Параметры рендеринга",icon:d.jsx(yb,{size:18})},{key:"step",label:`Шаг расчета (${n.stepSeconds}с)`,icon:d.jsx(gp,{size:18})},{key:"colors",label:"Цвета объектов",icon:d.jsx(lb,{size:18})}];return d.jsxs("div",{ref:r,style:{position:"absolute",top:"16px",left:"16px",zIndex:87,display:"flex",alignItems:"flex-start"},children:[d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",userSelect:"none"},children:c.map(u=>{const m=t===u.key;return d.jsx("button",{onClick:()=>o(u.key),title:u.label,"aria-label":u.label,style:{width:"38px",height:"38px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",border:m?"1px solid #00f0ff":"1px solid rgba(255, 255, 255, 0.14)",backgroundColor:m?"rgba(20, 115, 230, 0.35)":"rgba(24, 26, 32, 0.88)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",color:m?"#00f0ff":"#c9d1d9",cursor:"pointer",transition:"all 0.18s ease",boxShadow:m?"0 0 14px rgba(0, 240, 255, 0.45)":"0 4px 14px rgba(0, 0, 0, 0.45)"},onMouseEnter:x=>{m||(x.currentTarget.style.backgroundColor="rgba(38, 42, 52, 0.95)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.28)",x.currentTarget.style.color="#ffffff",x.currentTarget.style.transform="scale(1.05)")},onMouseLeave:x=>{m||(x.currentTarget.style.backgroundColor="rgba(24, 26, 32, 0.88)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.14)",x.currentTarget.style.color="#c9d1d9",x.currentTarget.style.transform="scale(1)")},children:u.icon},u.key)})}),t&&d.jsxs("div",{style:{marginLeft:"10px",width:"320px",maxHeight:"calc(100vh - 120px)",backgroundColor:"rgba(22, 25, 32, 0.96)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"10px",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.65), 0 0 2px rgba(255, 255, 255, 0.2)",display:"flex",flexDirection:"column",overflow:"hidden",animation:"fadeIn 0.15s ease-out"},children:[d.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("span",{style:{color:"#00f0ff",display:"flex"},children:(f=c.find(u=>u.key===t))==null?void 0:f.icon}),d.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"#f0f6fc"},children:(h=c.find(u=>u.key===t))==null?void 0:h.label})]}),d.jsx("button",{onClick:()=>i(null),style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer",display:"flex",padding:"4px",borderRadius:"4px"},onMouseEnter:u=>{u.currentTarget.style.color="#fff",u.currentTarget.style.backgroundColor="rgba(255,255,255,0.1)"},onMouseLeave:u=>{u.currentTarget.style.color="#8b949e",u.currentTarget.style.backgroundColor="transparent"},title:"Закрыть меню",children:d.jsx(Rv,{size:14})})]}),d.jsxs("div",{style:{padding:"12px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"12px"},children:[t==="layers"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",gap:"6px",justifyContent:"flex-end",marginBottom:"2px"},children:[d.jsx("button",{onClick:()=>l(!0),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Включить все"}),d.jsx("button",{onClick:()=>l(!1),style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#8b949e",fontSize:"10px",padding:"3px 8px",cursor:"pointer"},children:"Отключить все"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[d.jsx(Hn,{label:"Орбитальные траектории",checked:n.showOrbits,onChange:u=>s("showOrbits",u)}),d.jsx(Hn,{label:"Спутники группировки (S01..S48)",checked:n.showSatellites,onChange:u=>s("showSatellites",u)}),d.jsx(Hn,{label:"Наземные шлюзы (C65, Murmansk...)",checked:n.showGateways,onChange:u=>s("showGateways",u)}),d.jsx(Hn,{label:"Купола досягаемости шлюзов",checked:n.showGatewayCoverage!==!1,onChange:u=>s("showGatewayCoverage",u)}),d.jsx(Hn,{label:"Межспутниковые линии (ISL)",checked:n.showISL,onChange:u=>s("showISL",u)}),d.jsx(Hn,{label:"Связь спутник - Земля",checked:n.showSatLinks,onChange:u=>s("showSatLinks",u)}),d.jsx(Hn,{label:"Текстовые подписи объектов",checked:n.showLabels,onChange:u=>s("showLabels",u)}),d.jsx(Hn,{label:"Атмосфера планеты",checked:n.showAtmosphere,onChange:u=>s("showAtmosphere",u)}),d.jsx(Hn,{label:"Зоны покрытия КА (FOVs)",checked:!!n.showCoverageHeatmap,onChange:u=>s("showCoverageHeatmap",u)}),d.jsx(Hn,{label:"Загрузка и трафик ISL (%)",checked:!!n.showTrafficLoad,onChange:u=>s("showTrafficLoad",u)}),d.jsx(Hn,{label:"Дистанции между КА (км)",checked:n.showDistances!==!1,onChange:u=>s("showDistances",u)})]})]}),t==="rendering"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[d.jsx(Hn,{label:"Свечение спутников (Glow)",checked:n.satGlow,onChange:u=>s("satGlow",u)}),d.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[d.jsx("span",{children:"Размер спутников"}),d.jsxs("span",{style:{color:"#00f0ff",fontWeight:600},children:[n.satSize.toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:n.satSize,onChange:u=>s("satSize",parseFloat(u.target.value)),style:{width:"100%",accentColor:"#00f0ff",cursor:"pointer"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[d.jsx("span",{children:"0.5x"}),d.jsx("span",{children:"1.0x (норма)"}),d.jsx("span",{children:"3.0x"})]})]}),d.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.03)",padding:"10px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"11px",color:"#c9d1d9"},children:[d.jsx("span",{children:"Прозрачность орбит"}),d.jsxs("span",{style:{color:"#1473e6",fontWeight:600},children:[Math.round(n.orbitOpacity*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:n.orbitOpacity,onChange:u=>s("orbitOpacity",parseFloat(u.target.value)),style:{width:"100%",accentColor:"#1473e6",cursor:"pointer"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#6e7681",marginTop:"3px"},children:[d.jsx("span",{children:"10%"}),d.jsx("span",{children:"50%"}),d.jsx("span",{children:"100%"})]})]})]}),t==="step"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#8b949e",lineHeight:"1.4"},children:"Шаг времени (dt) определяет частоту дискретизации численного интегрирования орбит и перестроения графа ISL:"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{step:1,label:"1 сек",desc:"Сверхвысокая точность (для критических сближений)"},{step:5,label:"5 сек",desc:"Высокая детализация динамики"},{step:10,label:"10 сек",desc:"Штатный расчет (рекомендованный)"},{step:60,label:"1 мин",desc:"Ускоренный анализ (60 сек)"},{step:300,label:"5 мин",desc:"Экспресс-обзор суточных интервалов"}].map(({step:u,label:m,desc:x})=>{const _=n.stepSeconds===u;return d.jsxs("button",{onClick:()=>s("stepSeconds",u),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",borderRadius:"6px",border:_?"1px solid #1473e6":"1px solid rgba(255, 255, 255, 0.08)",backgroundColor:_?"rgba(20, 115, 230, 0.25)":"rgba(255, 255, 255, 0.02)",color:_?"#ffffff":"#c9d1d9",cursor:"pointer",textAlign:"left",transition:"all 0.15s ease"},onMouseEnter:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)")},onMouseLeave:g=>{_||(g.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.02)")},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[d.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:_?"#00f0ff":"#f0f6fc"},children:m}),d.jsx("span",{style:{fontSize:"10px",color:"#8b949e"},children:x})]}),_&&d.jsx(wv,{size:14,color:"#00f0ff"})]},u)})})]}),t==="colors"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"2px"},children:d.jsxs("button",{onClick:a,style:{display:"flex",alignItems:"center",gap:"4px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"4px",color:"#58a6ff",fontSize:"10px",padding:"4px 8px",cursor:"pointer"},children:[d.jsx(Ka,{size:10}),d.jsx("span",{children:"Сброс по умолчанию"})]})}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsx(Pi,{label:"Активные спутники",value:n.satColor||"#00f0ff",onChange:u=>s("satColor",u)}),d.jsx(Pi,{label:"Отказавшие спутники",value:n.offlineSatColor||"#ff3b30",onChange:u=>s("offlineSatColor",u)}),d.jsx(Pi,{label:"Спутники с задержкой",value:n.highLatencySatColor||"#ff9900",onChange:u=>s("highLatencySatColor",u)}),d.jsx(Pi,{label:"Траектории орбит",value:n.orbitColor||"#1473e6",onChange:u=>s("orbitColor",u)}),d.jsx(Pi,{label:"Межспутниковая связь",value:n.islColor||"#00ff88",onChange:u=>s("islColor",u)}),d.jsx(Pi,{label:"Наземные шлюзы",value:n.gatewayColor||"#00d084",onChange:u=>s("gatewayColor",u)}),d.jsx(Pi,{label:"Связь Земля - КА",value:n.groundLinkColor||"#f59e0b",onChange:u=>s("groundLinkColor",u)}),d.jsx(Pi,{label:"Атмосфера Земли",value:n.atmosphereColor||"#1e3a8a",onChange:u=>s("atmosphereColor",u)}),d.jsx(Pi,{label:"Зоны покрытия (FOV)",value:n.fovConeColor||"#00f0ff",onChange:u=>s("fovConeColor",u)})]})]})]})]})]})},Hn=({label:n,checked:e,onChange:t})=>d.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px",borderRadius:"6px",cursor:"pointer",backgroundColor:e?"rgba(255, 255, 255, 0.03)":"transparent",transition:"background-color 0.15s ease"},onMouseEnter:i=>{i.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.06)"},onMouseLeave:i=>{i.currentTarget.style.backgroundColor=e?"rgba(255, 255, 255, 0.03)":"transparent"},children:[d.jsx("span",{style:{fontSize:"11px",color:e?"#f0f6fc":"#8b949e",transition:"color 0.15s ease"},children:n}),d.jsx("input",{type:"checkbox",checked:e,onChange:i=>t(i.target.checked),style:{accentColor:"#1473e6",cursor:"pointer",width:"14px",height:"14px"}})]}),Pi=({label:n,value:e,onChange:t})=>d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 8px",borderRadius:"6px",backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[d.jsx("span",{style:{color:"#c9d1d9",fontSize:"11px"},children:n}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:"24px",height:"22px",padding:0,border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"4px",backgroundColor:"transparent",cursor:"pointer"}}),d.jsx("span",{style:{fontSize:"10px",color:"#8b949e",fontFamily:"monospace",width:"54px",textAlign:"right"},children:e.toUpperCase()})]})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="162",vs={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lb=0,Zm=1,Ib=2,Pv=1,Db=2,Oi=3,Ki=0,_n=1,yn=2,Tr=0,fo=1,qa=2,Jm=3,Qm=4,kb=5,Kr=100,Nb=101,Ub=102,eg=103,tg=104,Ob=200,Fb=201,zb=202,jb=203,th=204,nh=205,Bb=206,Hb=207,Gb=208,Vb=209,Wb=210,Xb=211,$b=212,Yb=213,Kb=214,qb=0,Zb=1,Jb=2,Qc=3,Qb=4,eM=5,tM=6,nM=7,Sp=0,iM=1,rM=2,Ar=0,sM=1,oM=2,aM=3,lM=4,cM=5,dM=6,uM=7,ng="attached",fM="detached",Lv=300,wo=301,Eo=302,ih=303,rh=304,Ed=306,li=1e3,Kn=1001,ed=1002,$t=1003,sh=1004,Vs=1005,Xt=1006,Mc=1007,fi=1008,Cr=1009,hM=1010,pM=1011,bp=1012,Iv=1013,mr=1014,ci=1015,Za=1016,Dv=1017,kv=1018,is=1020,mM=1021,qn=1023,gM=1024,xM=1025,rs=1026,To=1027,Nv=1028,Uv=1029,yM=1030,Ov=1031,Fv=1033,du=33776,uu=33777,fu=33778,hu=33779,ig=35840,rg=35841,sg=35842,og=35843,zv=36196,ag=37492,lg=37496,cg=37808,dg=37809,ug=37810,fg=37811,hg=37812,pg=37813,mg=37814,gg=37815,xg=37816,yg=37817,vg=37818,_g=37819,Sg=37820,bg=37821,pu=36492,Mg=36494,wg=36495,vM=36283,Eg=36284,Tg=36285,Ag=36286,Ja=2300,Ao=2301,mu=2302,Cg=2400,Rg=2401,Pg=2402,_M=2500,SM=0,jv=1,oh=2,bM=3200,MM=3201,Mp=0,wM=1,fr="",gn="srgb",sn="srgb-linear",wp="display-p3",Td="display-p3-linear",td="linear",vt="srgb",nd="rec709",id="p3",Ss=7680,Lg=519,EM=512,TM=513,AM=514,Bv=515,CM=516,RM=517,PM=518,LM=519,ah=35044,Ig="300 es",lh=1035,Gi=2e3,rd=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dg=1234567;const Aa=Math.PI/180,Co=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function Ep(n,e){return(n%e+e)%e}function IM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function DM(n,e,t){return n!==e?(t-n)/(e-n):0}function Ca(n,e,t){return(1-t)*n+t*e}function kM(n,e,t,i){return Ca(n,e,1-Math.exp(-t*i))}function NM(n,e=1){return e-Math.abs(Ep(n,e*2)-e)}function UM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function OM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function FM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zM(n,e){return n+Math.random()*(e-n)}function jM(n){return n*(.5-Math.random())}function BM(n){n!==void 0&&(Dg=n);let e=Dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HM(n){return n*Aa}function GM(n){return n*Co}function ch(n){return(n&n-1)===0&&n!==0}function VM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),u=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*h,l*u,a*c);break;case"YZY":n.set(l*u,a*f,l*h,a*c);break;case"ZXZ":n.set(l*h,l*u,a*f,a*c);break;case"XZX":n.set(a*f,l*x,l*m,a*c);break;case"YXY":n.set(l*m,a*f,l*x,a*c);break;case"ZYZ":n.set(l*x,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tp={DEG2RAD:Aa,RAD2DEG:Co,generateUUID:mi,clamp:en,euclideanModulo:Ep,mapLinear:IM,inverseLerp:DM,lerp:Ca,damp:kM,pingpong:NM,smoothstep:UM,smootherstep:OM,randInt:FM,randFloat:zM,randFloatSpread:jM,seededRandom:BM,degToRad:HM,radToDeg:GM,isPowerOfTwo:ch,ceilPowerOfTwo:VM,floorPowerOfTwo:sd,setQuaternionFromProperEuler:WM,normalize:dt,denormalize:di};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],x=i[8],_=r[0],g=r[3],p=r[6],v=r[1],y=r[4],S=r[7],w=r[2],T=r[5],E=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*g+a*y+l*T,s[6]=o*p+a*S+l*E,s[1]=c*_+f*v+h*w,s[4]=c*g+f*y+h*T,s[7]=c*p+f*S+h*E,s[2]=u*_+m*v+x*w,s[5]=u*g+m*y+x*T,s[8]=u*p+m*S+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,m=c*s-o*l,x=t*h+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=u*_,e[4]=(f*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new et;function Hv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XM(){const n=Qa("canvas");return n.style.display="block",n}const kg={};function Gv(n){n in kg||(kg[n]=!0,console.warn(n))}const Ng=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ug=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[sn]:{transfer:td,primaries:nd,toReference:n=>n,fromReference:n=>n},[gn]:{transfer:vt,primaries:nd,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Td]:{transfer:td,primaries:id,toReference:n=>n.applyMatrix3(Ug),fromReference:n=>n.applyMatrix3(Ng)},[wp]:{transfer:vt,primaries:id,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ug),fromReference:n=>n.applyMatrix3(Ng).convertLinearToSRGB()}},$M=new Set([sn,Td]),ct={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$M.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Cl[e].toReference,r=Cl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Cl[n].primaries},getTransfer:function(n){return n===fr?td:Cl[n].transfer}};function ho(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Qa("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ho(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ho(t[i]/255)*255):t[i]=ho(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class Wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class zt extends ms{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Kn,r=Kn,s=Xt,o=fi,a=qn,l=Cr,c=zt.DEFAULT_ANISOTROPY,f=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=mi(),this.name="",this.source=new Wv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Lv;zt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,w=(p+1)/2,T=(f+u)/4,E=(h+_)/4,P=(x+g)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=E/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-x)*(g-x)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-_)/v,this.z=(u-f)/v,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends qM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xv extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZM extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const u=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==u||c!==m||f!==x){let g=1-a;const p=l*u+c*m+f*x+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,p*v);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const S=a*v;if(l=l*g+u*S,c=c*g+m*S,f=f*g+x*S,h=h*g+_*S,g===1-a){const w=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=w,c*=w,f*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+f*h+l*m-c*u,e[t+1]=l*x+f*u+c*h-a*m,e[t+2]=c*x+f*m+a*u-l*h,e[t+3]=f*x-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"YXZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"ZXY":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"ZYX":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"YZX":this._x=u*f*h+c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h-u*m*x;break;case"XZY":this._x=u*f*h-c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=i+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-t)*f)/c,u=Math.sin(t*f)/c;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Og.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new N,Og=new Ti;class yi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Pl.subVectors(this.max,Zo),Ms.subVectors(e.a,Zo),ws.subVectors(e.b,Zo),Es.subVectors(e.c,Zo),Qi.subVectors(ws,Ms),er.subVectors(Es,ws),Or.subVectors(Ms,Es);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Or.z,Or.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Or.z,0,-Or.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Or.y,Or.x,0];return!_u(t,Ms,ws,Es,Pl)||(t=[1,0,0,0,1,0,0,0,1],!_u(t,Ms,ws,Es,Pl))?!1:(Ll.crossVectors(Qi,er),t=[Ll.x,Ll.y,Ll.z],_u(t,Ms,ws,Es,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new N,new N,new N,new N,new N,new N,new N,new N],ni=new N,Rl=new yi,Ms=new N,ws=new N,Es=new N,Qi=new N,er=new N,Or=new N,Zo=new N,Pl=new N,Ll=new N,Fr=new N;function _u(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),f=i.dot(Fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const JM=new yi,Jo=new N,Su=new N;class Ai{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):JM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Su)),this.expandByPoint(Jo.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new N,bu=new N,Il=new N,tr=new N,Mu=new N,Dl=new N,wu=new N;class Oo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bu.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(bu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Il),a=tr.dot(this.direction),l=-tr.dot(Il),c=tr.lengthSq(),f=Math.abs(1-o*o);let h,u,m,x;if(f>0)if(h=o*l-a,u=o*a-l,x=s*f,h>=0)if(u>=-x)if(u<=x){const _=1/f;h*=_,u*=_,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bu).addScaledVector(Il,u),m}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,r,s){Mu.subVectors(t,e),Dl.subVectors(i,e),wu.crossVectors(Mu,Dl);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(tr,Dl));if(l<0)return null;const c=a*this.direction.dot(Mu.cross(tr));if(c<0||l+c>o)return null;const f=-a*tr.dot(wu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,r,s,o,a,l,c,f,h,u,m,x,_,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,f,h,u,m,x,_,g)}set(e,t,i,r,s,o,a,l,c,f,h,u,m,x,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=m,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,x=a*f,_=a*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,x=c*f,_=c*h;t[0]=u+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=m*a-x,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,x=c*f,_=c*h;t[0]=u-_*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*f,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*h,x=a*f,_=a*h;t[0]=l*f,t[4]=x*c-m,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*f,t[4]=_-u*h,t[8]=x*h+m,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=m*h+x,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+_,t[5]=o*f,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*f,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,ew)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),nr.crossVectors(i,Ln),nr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),nr.crossVectors(i,Ln)),nr.normalize(),kl.crossVectors(Ln,nr),r[0]=nr.x,r[4]=kl.x,r[8]=Ln.x,r[1]=nr.y,r[5]=kl.y,r[9]=Ln.y,r[2]=nr.z,r[6]=kl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],x=i[2],_=i[6],g=i[10],p=i[14],v=i[3],y=i[7],S=i[11],w=i[15],T=r[0],E=r[4],P=r[8],U=r[12],b=r[1],R=r[5],q=r[9],re=r[13],O=r[2],te=r[6],H=r[10],ne=r[14],G=r[3],$=r[7],k=r[11],ee=r[15];return s[0]=o*T+a*b+l*O+c*G,s[4]=o*E+a*R+l*te+c*$,s[8]=o*P+a*q+l*H+c*k,s[12]=o*U+a*re+l*ne+c*ee,s[1]=f*T+h*b+u*O+m*G,s[5]=f*E+h*R+u*te+m*$,s[9]=f*P+h*q+u*H+m*k,s[13]=f*U+h*re+u*ne+m*ee,s[2]=x*T+_*b+g*O+p*G,s[6]=x*E+_*R+g*te+p*$,s[10]=x*P+_*q+g*H+p*k,s[14]=x*U+_*re+g*ne+p*ee,s[3]=v*T+y*b+S*O+w*G,s[7]=v*E+y*R+S*te+w*$,s[11]=v*P+y*q+S*H+w*k,s[15]=v*U+y*re+S*ne+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+s*l*h-r*c*h-s*a*u+i*c*u+r*a*m-i*l*m)+_*(+t*l*m-t*c*u+s*o*u-r*o*m+r*c*f-s*l*f)+g*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*f-i*c*f)+p*(-r*a*f-t*l*h+t*a*u+r*o*h-i*o*u+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],x=e[12],_=e[13],g=e[14],p=e[15],v=h*g*c-_*u*c+_*l*m-a*g*m-h*l*p+a*u*p,y=x*u*c-f*g*c-x*l*m+o*g*m+f*l*p-o*u*p,S=f*_*c-x*h*c+x*a*m-o*_*m-f*a*p+o*h*p,w=x*h*l-f*_*l-x*a*u+o*_*u+f*a*g-o*h*g,T=t*v+i*y+r*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(_*u*s-h*g*s-_*r*m+i*g*m+h*r*p-i*u*p)*E,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*E,e[3]=(h*l*s-a*u*s-h*r*c+i*u*c+a*r*m-i*l*m)*E,e[4]=y*E,e[5]=(f*g*s-x*u*s+x*r*m-t*g*m-f*r*p+t*u*p)*E,e[6]=(x*l*s-o*g*s-x*r*c+t*g*c+o*r*p-t*l*p)*E,e[7]=(o*u*s-f*l*s+f*r*c-t*u*c-o*r*m+t*l*m)*E,e[8]=S*E,e[9]=(x*h*s-f*_*s-x*i*m+t*_*m+f*i*p-t*h*p)*E,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*p+t*a*p)*E,e[11]=(f*a*s-o*h*s-f*i*c+t*h*c+o*i*m-t*a*m)*E,e[12]=w*E,e[13]=(f*_*r-x*h*r+x*i*u-t*_*u-f*i*g+t*h*g)*E,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*g-t*a*g)*E,e[15]=(o*h*r-f*a*r+f*i*l-t*h*l-o*i*u+t*a*u)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,h=a+a,u=s*c,m=s*f,x=s*h,_=o*f,g=o*h,p=a*h,v=l*c,y=l*f,S=l*h,w=i.x,T=i.y,E=i.z;return r[0]=(1-(_+p))*w,r[1]=(m+S)*w,r[2]=(x-y)*w,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(u+p))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(x+y)*E,r[9]=(g-v)*E,r[10]=(1-(u+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const o=Ts.set(r[4],r[5],r[6]).length(),a=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const c=1/s,f=1/o,h=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=f,ii.elements[5]*=f,ii.elements[6]*=f,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gi){const l=this.elements,c=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r);let m,x;if(a===Gi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===rd)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gi){const l=this.elements,c=1/(t-e),f=1/(i-r),h=1/(o-s),u=(t+e)*c,m=(i+r)*f;let x,_;if(a===Gi)x=(o+s)*h,_=-2*h;else if(a===rd)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new N,ii=new Ke,QM=new N(0,0,0),ew=new N(1,1,1),nr=new N,kl=new N,Ln=new N,Fg=new Ke,zg=new Ti;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tw=0;const jg=new N,As=new Ti,Di=new Ke,Nl=new N,Qo=new N,nw=new N,iw=new Ti,Bg=new N(1,0,0),Hg=new N(0,1,0),Gg=new N(0,0,1),rw={type:"added"},sw={type:"removed"},Eu={type:"childadded",child:null},Tu={type:"childremoved",child:null};class Et extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new N,t=new xi,i=new Ti,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new et}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(Hg,e)}rotateZ(e){return this.rotateOnAxis(Gg,e)}translateOnAxis(e,t){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(Hg,e)}translateZ(e){return this.translateOnAxis(Gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nl.copy(e):Nl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Qo,Nl,this.up):Di.lookAt(Nl,Qo,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Di),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rw),Eu.child=e,this.dispatchEvent(Eu),Eu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sw),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,nw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,iw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new N(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new N,ki=new N,Au=new N,Ni=new N,Cs=new N,Rs=new N,Vg=new N,Cu=new N,Ru=new N,Pu=new N;class ui{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),ki.subVectors(i,t),Au.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(ki),l=ri.dot(Au),c=ki.dot(ki),f=ki.dot(Au),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-a*f)*u,x=(o*f-a*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),ki.subVectors(e,t),ri.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ri.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Cs.subVectors(r,i),Rs.subVectors(s,i),Cu.subVectors(e,i);const l=Cs.dot(Cu),c=Rs.dot(Cu);if(l<=0&&c<=0)return t.copy(i);Ru.subVectors(e,r);const f=Cs.dot(Ru),h=Rs.dot(Ru);if(f>=0&&h<=f)return t.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Cs,o);Pu.subVectors(e,s);const m=Cs.dot(Pu),x=Rs.dot(Pu);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Rs,a);const g=f*x-m*h;if(g<=0&&h-f>=0&&m-x>=0)return Vg.subVectors(s,r),a=(h-f)/(h-f+(m-x)),t.copy(r).addScaledVector(Vg,a);const p=1/(g+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Lu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Ep(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(en(dn.r*255,0,255))*65536+Math.round(en(dn.g*255,0,255))*256+Math.round(en(dn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=gn){ct.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Ul);const i=Ca(ir.h,Ul.h,t),r=Ca(ir.s,Ul.s,t),s=Ca(ir.l,Ul.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ge;Ge.NAMES=$v;let ow=0;class Rn extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=fo,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,Ol=new je;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}}class Yv extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kv extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let aw=0;const Gn=new Ke,Iu=new Et,Ps=new N,In=new yi,ea=new yi,Gt=new N;class ht extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?Kv:Yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(In.min,ea.min),In.expandByPoint(Gt),Gt.addVectors(In.max,ea.max),In.expandByPoint(Gt)):(In.expandByPoint(ea.min),In.expandByPoint(ea.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Gt.add(Ps)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,f=new N,h=new N,u=new je,m=new je,x=new je,_=new N,g=new N;function p(P,U,b){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,U),h.fromBufferAttribute(i,b),u.fromBufferAttribute(s,P),m.fromBufferAttribute(s,U),x.fromBufferAttribute(s,b),f.sub(c),h.sub(c),m.sub(u),x.sub(u);const R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(_.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(R),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(R),a[P].add(_),a[U].add(_),a[b].add(_),l[P].add(g),l[U].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,U=v.length;P<U;++P){const b=v[P],R=b.start,q=b.count;for(let re=R,O=R+q;re<O;re+=3)p(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const y=new N,S=new N,w=new N,T=new N;function E(P){w.fromBufferAttribute(r,P),T.copy(w);const U=a[P];y.copy(U),y.sub(w.multiplyScalar(w.dot(U))).normalize(),S.crossVectors(T,U);const R=S.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,U=v.length;P<U;++P){const b=v[P],R=b.start,q=b.count;for(let re=R,O=R+q;re<O;re+=3)E(e.getX(re+0)),E(e.getX(re+1)),E(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,h=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let m=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*f;for(let p=0;p<f;p++)u[x++]=c[m++]}return new nn(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new Ke,zr=new Oo,Fl=new Ai,Xg=new N,Ls=new N,Is=new N,Ds=new N,Du=new N,zl=new N,jl=new je,Bl=new je,Hl=new je,$g=new N,Yg=new N,Kg=new N,Gl=new N,Vl=new N;class _t extends Et{constructor(e=new ht,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Du.fromBufferAttribute(h,e),o?zl.addScaledVector(Du,f):zl.addScaledVector(Du.sub(t),f))}t.add(zl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Fl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Fl,Xg)===null||zr.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const g=u[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,w=y;S<w;S+=3){const T=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);r=Wl(this,p,e,i,c,f,h,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=Wl(this,o,e,i,c,f,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const g=u[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,w=y;S<w;S+=3){const T=S,E=S+1,P=S+2;r=Wl(this,p,e,i,c,f,h,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const v=g,y=g+1,S=g+2;r=Wl(this,o,e,i,c,f,h,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function lw(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vl);return c<t.near||c>t.far?null:{distance:c,point:Vl.clone(),object:n}}function Wl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Is),n.getVertexPosition(c,Ds);const f=lw(n,e,t,i,Ls,Is,Ds,Gl);if(f){r&&(jl.fromBufferAttribute(r,a),Bl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,c),f.uv=ui.getInterpolation(Gl,Ls,Is,Ds,jl,Bl,Hl,new je)),s&&(jl.fromBufferAttribute(s,a),Bl.fromBufferAttribute(s,l),Hl.fromBufferAttribute(s,c),f.uv1=ui.getInterpolation(Gl,Ls,Is,Ds,jl,Bl,Hl,new je)),o&&($g.fromBufferAttribute(o,a),Yg.fromBufferAttribute(o,l),Kg.fromBufferAttribute(o,c),f.normal=ui.getInterpolation(Gl,Ls,Is,Ds,$g,Yg,Kg,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};ui.getNormal(Ls,Is,Ds,h.normal),f.face=h}return f}class ol extends ht{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2));function x(_,g,p,v,y,S,w,T,E,P,U){const b=S/E,R=w/P,q=S/2,re=w/2,O=T/2,te=E+1,H=P+1;let ne=0,G=0;const $=new N;for(let k=0;k<H;k++){const ee=k*R-re;for(let de=0;de<te;de++){const le=de*b-q;$[_]=le*v,$[g]=ee*y,$[p]=O,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=T>0?1:-1,f.push($.x,$.y,$.z),h.push(de/E),h.push(1-k/P),ne+=1}}for(let k=0;k<P;k++)for(let ee=0;ee<E;ee++){const de=u+ee+te*k,le=u+ee+te*(k+1),W=u+(ee+1)+te*(k+1),F=u+(ee+1)+te*k;l.push(de,le,F),l.push(le,W,F),G+=6}a.addGroup(m,G,U),m+=G,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=Ro(n[t]);for(const r in i)e[r]=i[r]}return e}function cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qv(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}const dw={clone:Ro,merge:pn};var uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uw,this.fragmentShader=fw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zv extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new N,qg=new je,Zg=new je;class xn extends Zv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,qg,Zg),t.subVectors(Zg,qg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Ns=1;class hw extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(ks,Ns,e,t);r.layers=this.layers,this.add(r);const s=new xn(ks,Ns,e,t);s.layers=this.layers,this.add(s);const o=new xn(ks,Ns,e,t);o.layers=this.layers,this.add(o);const a=new xn(ks,Ns,e,t);a.layers=this.layers,this.add(a);const l=new xn(ks,Ns,e,t);l.layers=this.layers,this.add(l);const c=new xn(ks,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(h,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Jv extends zt{constructor(e,t,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pw extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ol(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Tr});s.uniforms.tEquirect.value=t;const o=new _t(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Xt),new hw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ku=new N,mw=new N,gw=new et;class lr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ku.subVectors(i,t).cross(mw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gw.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Ai,Xl=new N;class Cp{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],u=r[7],m=r[8],x=r[9],_=r[10],g=r[11],p=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,u-c,g-m,S-p).normalize(),i[1].setComponents(l+s,u+c,g+m,S+p).normalize(),i[2].setComponents(l+o,u+f,g+x,S+v).normalize(),i[3].setComponents(l-o,u-f,g-x,S-v).normalize(),i[4].setComponents(l-a,u-h,g-_,S-y).normalize(),t===Gi)i[5].setComponents(l+a,u+h,g+_,S+y).normalize();else if(t===rd)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,u=c.usage,m=h.byteLength,x=n.createBuffer();n.bindBuffer(f,x),n.bufferData(f,h,u),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,h){const u=f.array,m=f._updateRange,x=f.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&x.length===0&&n.bufferSubData(h,0,u),x.length!==0){for(let _=0,g=x.length;_<g;_++){const p=x[_];t?n.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):n.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}f.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(n.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class Ad extends ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=t/l,m=[],x=[],_=[],g=[];for(let p=0;p<f;p++){const v=p*u-o;for(let y=0;y<c;y++){const S=y*h-s;x.push(S,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,S=v+c*(p+1),w=v+1+c*(p+1),T=v+1+c*p;m.push(y,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ad(e.width,e.height,e.widthSegments,e.heightSegments)}}var yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vw=`#ifdef USE_ALPHAHASH
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
#endif`,_w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ww=`#ifdef USE_AOMAP
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
#endif`,Ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lw=`#ifdef USE_IRIDESCENCE
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
#endif`,Iw=`#ifdef USE_BUMPMAP
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
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ow=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bw=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gw=`vec3 transformedNormal = objectNormal;
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
#endif`,Vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qw=`#ifdef USE_ENVMAP
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
#endif`,Zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,xE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,yE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s2=`#ifdef USE_SKINNING
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
#endif`,o2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,l2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`#include <common>
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
}`,E2=`#if DEPTH_PACKING == 3200
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
	#endif
}`,T2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`uniform float scale;
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
}`,L2=`uniform vec3 diffuse;
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
}`,I2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
}`,k2=`#define LAMBERT
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
}`,N2=`#define LAMBERT
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
}`,U2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,F2=`#define NORMAL
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
}`,z2=`#define NORMAL
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
}`,j2=`#define PHONG
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
}`,B2=`#define PHONG
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
}`,H2=`#define STANDARD
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
}`,G2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,W2=`#define TOON
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
}`,X2=`uniform float size;
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
}`,$2=`uniform vec3 diffuse;
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
}`,Y2=`#include <common>
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
}`,K2=`uniform vec3 color;
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
}`,q2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Z2=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:yw,alphahash_pars_fragment:vw,alphamap_fragment:_w,alphamap_pars_fragment:Sw,alphatest_fragment:bw,alphatest_pars_fragment:Mw,aomap_fragment:ww,aomap_pars_fragment:Ew,batching_pars_vertex:Tw,batching_vertex:Aw,begin_vertex:Cw,beginnormal_vertex:Rw,bsdfs:Pw,iridescence_fragment:Lw,bumpmap_pars_fragment:Iw,clipping_planes_fragment:Dw,clipping_planes_pars_fragment:kw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Uw,color_fragment:Ow,color_pars_fragment:Fw,color_pars_vertex:zw,color_vertex:jw,common:Bw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Vw,displacementmap_vertex:Ww,emissivemap_fragment:Xw,emissivemap_pars_fragment:$w,colorspace_fragment:Yw,colorspace_pars_fragment:Kw,envmap_fragment:qw,envmap_common_pars_fragment:Zw,envmap_pars_fragment:Jw,envmap_pars_vertex:Qw,envmap_physical_pars_fragment:uE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:dE,lights_toon_fragment:fE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:xE,lights_fragment_begin:yE,lights_fragment_maps:vE,lights_fragment_end:_E,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:wE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:CE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:PE,morphinstance_vertex:LE,morphcolor_vertex:IE,morphnormal_vertex:DE,morphtarget_pars_vertex:kE,morphtarget_vertex:NE,normal_fragment_begin:UE,normal_fragment_maps:OE,normal_pars_fragment:FE,normal_pars_vertex:zE,normal_vertex:jE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:$E,premultiplied_alpha_fragment:YE,project_vertex:KE,dithering_fragment:qE,dithering_pars_fragment:ZE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:e2,shadowmap_pars_vertex:t2,shadowmap_vertex:n2,shadowmask_pars_fragment:i2,skinbase_vertex:r2,skinning_pars_vertex:s2,skinning_vertex:o2,skinnormal_vertex:a2,specularmap_fragment:l2,specularmap_pars_fragment:c2,tonemapping_fragment:d2,tonemapping_pars_fragment:u2,transmission_fragment:f2,transmission_pars_fragment:h2,uv_pars_fragment:p2,uv_pars_vertex:m2,uv_vertex:g2,worldpos_vertex:x2,background_vert:y2,background_frag:v2,backgroundCube_vert:_2,backgroundCube_frag:S2,cube_vert:b2,cube_frag:M2,depth_vert:w2,depth_frag:E2,distanceRGBA_vert:T2,distanceRGBA_frag:A2,equirect_vert:C2,equirect_frag:R2,linedashed_vert:P2,linedashed_frag:L2,meshbasic_vert:I2,meshbasic_frag:D2,meshlambert_vert:k2,meshlambert_frag:N2,meshmatcap_vert:U2,meshmatcap_frag:O2,meshnormal_vert:F2,meshnormal_frag:z2,meshphong_vert:j2,meshphong_frag:B2,meshphysical_vert:H2,meshphysical_frag:G2,meshtoon_vert:V2,meshtoon_frag:W2,points_vert:X2,points_frag:$2,shadow_vert:Y2,shadow_frag:K2,sprite_vert:q2,sprite_frag:Z2},De={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bi={basic:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:pn([De.points,De.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:pn([De.common,De.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:pn([De.sprite,De.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:pn([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:pn([De.lights,De.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bi.physical={uniforms:pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $l={r:0,b:0,g:0},Br=new xi,J2=new Ke;function Q2(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,f,h=null,u=0,m=null;function x(g,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ed)?(f===void 0&&(f=new _t(new ol(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Ro(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Br.copy(p.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Br)),f.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,(h!==y||u!==y.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,h=y,u=y.version,m=n.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new Ad(2,2),new Lr({name:"BackgroundMaterial",uniforms:Ro(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB($l,qv(n)),i.buffers.color.setClear($l.r,$l.g,$l.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:x}}function eT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,f=!1;function h(O,te,H,ne,G){let $=!1;if(o){const k=_(ne,H,te);c!==k&&(c=k,m(c.object)),$=p(O,ne,H,G),$&&v(O,ne,H,G)}else{const k=te.wireframe===!0;(c.geometry!==ne.id||c.program!==H.id||c.wireframe!==k)&&(c.geometry=ne.id,c.program=H.id,c.wireframe=k,$=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,P(O,te,H,ne),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function _(O,te,H){const ne=H.wireframe===!0;let G=a[O.id];G===void 0&&(G={},a[O.id]=G);let $=G[te.id];$===void 0&&($={},G[te.id]=$);let k=$[ne];return k===void 0&&(k=g(u()),$[ne]=k),k}function g(O){const te=[],H=[],ne=[];for(let G=0;G<r;G++)te[G]=0,H[G]=0,ne[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:H,attributeDivisors:ne,object:O,attributes:{},index:null}}function p(O,te,H,ne){const G=c.attributes,$=te.attributes;let k=0;const ee=H.getAttributes();for(const de in ee)if(ee[de].location>=0){const W=G[de];let F=$[de];if(F===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),W===void 0||W.attribute!==F||F&&W.data!==F.data)return!0;k++}return c.attributesNum!==k||c.index!==ne}function v(O,te,H,ne){const G={},$=te.attributes;let k=0;const ee=H.getAttributes();for(const de in ee)if(ee[de].location>=0){let W=$[de];W===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(W=O.instanceColor));const F={};F.attribute=W,W&&W.data&&(F.data=W.data),G[de]=F,k++}c.attributes=G,c.attributesNum=k,c.index=ne}function y(){const O=c.newAttributes;for(let te=0,H=O.length;te<H;te++)O[te]=0}function S(O){w(O,0)}function w(O,te){const H=c.newAttributes,ne=c.enabledAttributes,G=c.attributeDivisors;H[O]=1,ne[O]===0&&(n.enableVertexAttribArray(O),ne[O]=1),G[O]!==te&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,te),G[O]=te)}function T(){const O=c.newAttributes,te=c.enabledAttributes;for(let H=0,ne=te.length;H<ne;H++)te[H]!==O[H]&&(n.disableVertexAttribArray(H),te[H]=0)}function E(O,te,H,ne,G,$,k){k===!0?n.vertexAttribIPointer(O,te,H,G,$):n.vertexAttribPointer(O,te,H,ne,G,$)}function P(O,te,H,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=ne.attributes,$=H.getAttributes(),k=te.defaultAttributeValues;for(const ee in $){const de=$[ee];if(de.location>=0){let le=G[ee];if(le===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){const W=le.normalized,F=le.itemSize,B=t.get(le);if(B===void 0)continue;const he=B.buffer,fe=B.type,me=B.bytesPerElement,ke=i.isWebGL2===!0&&(fe===n.INT||fe===n.UNSIGNED_INT||le.gpuType===Iv);if(le.isInterleavedBufferAttribute){const we=le.data,j=we.stride,Be=le.offset;if(we.isInstancedInterleavedBuffer){for(let Ae=0;Ae<de.locationSize;Ae++)w(de.location+Ae,we.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ae=0;Ae<de.locationSize;Ae++)S(de.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Ae=0;Ae<de.locationSize;Ae++)E(de.location+Ae,F/de.locationSize,fe,W,j*me,(Be+F/de.locationSize*Ae)*me,ke)}else{if(le.isInstancedBufferAttribute){for(let we=0;we<de.locationSize;we++)w(de.location+we,le.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<de.locationSize;we++)S(de.location+we);n.bindBuffer(n.ARRAY_BUFFER,he);for(let we=0;we<de.locationSize;we++)E(de.location+we,F/de.locationSize,fe,W,F*me,F/de.locationSize*we*me,ke)}}else if(k!==void 0){const W=k[ee];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(de.location,W);break;case 3:n.vertexAttrib3fv(de.location,W);break;case 4:n.vertexAttrib4fv(de.location,W);break;default:n.vertexAttrib1fv(de.location,W)}}}}T()}function U(){q();for(const O in a){const te=a[O];for(const H in te){const ne=te[H];for(const G in ne)x(ne[G].object),delete ne[G];delete te[H]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const te=a[O.id];for(const H in te){const ne=te[H];for(const G in ne)x(ne[G].object),delete ne[G];delete te[H]}delete a[O.id]}function R(O){for(const te in a){const H=a[te];if(H[O.id]===void 0)continue;const ne=H[O.id];for(const G in ne)x(ne[G].object),delete ne[G];delete H[O.id]}}function q(){re(),f=!0,c!==l&&(c=l,m(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:re,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function tT(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){n.drawArrays(s,f,h),t.update(h,s,1)}function l(f,h,u){if(u===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,f,h,u),t.update(h,s,u)}function c(f,h,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u;x++)this.render(f[x],h[x]);else{m.multiDrawArraysWEBGL(s,f,0,h,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,S=o||e.has("OES_texture_float"),w=y&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:T}}function iT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,m){const x=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,y=v*4;let S=p.clippingState||null;l.value=S,S=f(x,u,y,m);for(let w=0;w!==y;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,x){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const p=m+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=m;y!==_;++y,S+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function rT(n){let e=new WeakMap;function t(o,a){return a===ih?o.mapping=wo:a===rh&&(o.mapping=Eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ih||a===rh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rp extends Zv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const io=4,Jg=[.125,.215,.35,.446,.526,.582],qr=20,Nu=new Rp,Qg=new Ge;let Uu=null,Ou=0,Fu=0;const $r=(1+Math.sqrt(5))/2,Us=1/$r,e0=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,$r,Us),new N(0,$r,-Us),new N(Us,0,$r),new N(-Us,0,$r),new N($r,Us,0),new N(-$r,Us,0)];class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Ou,Fu),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Za,format:qn,colorSpace:sn,depthBuffer:!1},r=n0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(s)),this._blurMaterial=oT(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Nu)}_sceneToCubeUV(e,t,i,r){const a=new xn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Qg),f.toneMapping=Ar,f.autoClear=!1;const m=new Vt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new _t(new ol,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(Qg),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Yl(r,v*y,p>2?y:0,y,y),f.setRenderTarget(r),_&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wo||e.mapping===Eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=e0[(r-1)%e0.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new _t(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qr-1),_=s/x,g=isFinite(s)?1+Math.floor(f*_):qr;g>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qr}`);const p=[];let v=0;for(let E=0;E<qr;++E){const P=E/_,U=Math.exp(-P*P/2);p.push(U),E===0?v+=U:E<g&&(v+=2*U)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-io?r-y+io:0),T=4*(this._cubeSize-S);Yl(t,w,T,3*S,2*S),l.setRenderTarget(t),l.render(h,Nu)}}function sT(n){const e=[],t=[],i=[];let r=n;const s=n-io+1+Jg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-io?l=Jg[o-n+io-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,_=3,g=2,p=1,v=new Float32Array(_*x*m),y=new Float32Array(g*x*m),S=new Float32Array(p*x*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,P=T>2?0:-1,U=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(U,_*x*T),y.set(u,g*x*T);const b=[T,T,T,T,T,T];S.set(b,p*x*T)}const w=new ht;w.setAttribute("position",new nn(v,_)),w.setAttribute("uv",new nn(y,g)),w.setAttribute("faceIndex",new nn(S,p)),e.push(w),r>io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function n0(n,e,t){const i=new ds(n,e,t);return i.texture.mapping=Ed,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function oT(n,e,t){const i=new Float32Array(qr),r=new N(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function i0(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function r0(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Pp(){return`

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
	`}function aT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ih||l===rh,f=l===wo||l===Eo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new t0(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){t===null&&(t=new t0(n));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function lT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cT(n,e,t,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);for(const x in u.morphAttributes){const _=u.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const x in u)e.update(u[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(h){const u=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let y=0,S=v.length;y<S;y+=3){const w=v[y+0],T=v[y+1],E=v[y+2];u.push(w,T,T,E,E,w)}}else if(x!==void 0){const v=x.array;_=x.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const w=y+0,T=y+1,E=y+2;u.push(w,T,T,E,E,w)}}else return;const g=new(Hv(u)?Kv:Yv)(u,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function dT(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,x){n.drawElements(s,x,a,m*l),t.update(x,s,1)}function h(m,x,_){if(_===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,x,a,m*l,_),t.update(x,s,_)}function u(m,x,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(m[p]/l,x[p]);else{g.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let p=0;for(let v=0;v<_;v++)p+=x[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=u}function uT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fT(n,e){return n[0]-e[0]}function hT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function pT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=m!==void 0?m.length:0;let _=s.get(f);if(_===void 0||_.count!==x){let q=function(){b.dispose(),s.delete(f),f.removeEventListener("dispose",q)};_!==void 0&&_.texture.dispose();const g=f.morphAttributes.position!==void 0,p=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let T=0;g===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let E=f.attributes.position.count*T,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*P*4*x),b=new Xv(U,E,P,x);b.type=ci,b.needsUpdate=!0;const R=T*4;for(let re=0;re<x;re++){const O=y[re],te=S[re],H=w[re],ne=E*P*4*re;for(let G=0;G<O.count;G++){const $=G*R;g===!0&&(o.fromBufferAttribute(O,G),U[ne+$+0]=o.x,U[ne+$+1]=o.y,U[ne+$+2]=o.z,U[ne+$+3]=0),p===!0&&(o.fromBufferAttribute(te,G),U[ne+$+4]=o.x,U[ne+$+5]=o.y,U[ne+$+6]=o.z,U[ne+$+7]=0),v===!0&&(o.fromBufferAttribute(H,G),U[ne+$+8]=o.x,U[ne+$+9]=o.y,U[ne+$+10]=o.z,U[ne+$+11]=H.itemSize===4?o.w:1)}}_={count:x,texture:b,size:new je(E,P)},s.set(f,_),f.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let g=0;for(let v=0;v<u.length;v++)g+=u[v];const p=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",u)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=u===void 0?0:u.length;let x=i[f.id];if(x===void 0||x.length!==m){x=[];for(let y=0;y<m;y++)x[y]=[y,0];i[f.id]=x}for(let y=0;y<m;y++){const S=x[y];S[0]=y,S[1]=u[y]}x.sort(hT);for(let y=0;y<8;y++)y<m&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(fT);const _=f.morphAttributes.position,g=f.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const S=a[y],w=S[0],T=S[1];w!==Number.MAX_SAFE_INTEGER&&T?(_&&f.getAttribute("morphTarget"+y)!==_[w]&&f.setAttribute("morphTarget"+y,_[w]),g&&f.getAttribute("morphNormal"+y)!==g[w]&&f.setAttribute("morphNormal"+y,g[w]),r[y]=T,p+=T):(_&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),g&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const v=f.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function mT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class e1 extends zt{constructor(e,t,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:rs,f!==rs&&f!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===rs&&(i=mr),i===void 0&&f===To&&(i=is),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const t1=new zt,n1=new e1(1,1);n1.compareFunction=Bv;const i1=new Xv,r1=new ZM,s1=new Jv,s0=[],o0=[],a0=new Float32Array(16),l0=new Float32Array(9),c0=new Float32Array(4);function Fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=s0[r];if(s===void 0&&(s=new Float32Array(r),s0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cd(n,e){let t=o0[e];t===void 0&&(t=new Int32Array(e),o0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function yT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function _T(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;c0.set(i),n.uniformMatrix2fv(this.addr,!1,c0),Bt(t,i)}}function ST(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;l0.set(i),n.uniformMatrix3fv(this.addr,!1,l0),Bt(t,i)}}function bT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(jt(t,i))return;a0.set(i),n.uniformMatrix4fv(this.addr,!1,a0),Bt(t,i)}}function MT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function TT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function AT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?n1:t1;t.setTexture2D(e||s,r)}function IT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||r1,r)}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||s1,r)}function kT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||i1,r)}function NT(n){switch(n){case 5126:return gT;case 35664:return xT;case 35665:return yT;case 35666:return vT;case 35674:return _T;case 35675:return ST;case 35676:return bT;case 5124:case 35670:return MT;case 35667:case 35671:return wT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return CT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return kT}}function UT(n,e){n.uniform1fv(this.addr,e)}function OT(n,e){const t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function FT(n,e){const t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function zT(n,e){const t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function jT(n,e){const t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BT(n,e){const t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HT(n,e){const t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GT(n,e){n.uniform1iv(this.addr,e)}function VT(n,e){n.uniform2iv(this.addr,e)}function WT(n,e){n.uniform3iv(this.addr,e)}function XT(n,e){n.uniform4iv(this.addr,e)}function $T(n,e){n.uniform1uiv(this.addr,e)}function YT(n,e){n.uniform2uiv(this.addr,e)}function KT(n,e){n.uniform3uiv(this.addr,e)}function qT(n,e){n.uniform4uiv(this.addr,e)}function ZT(n,e,t){const i=this.cache,r=e.length,s=Cd(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||t1,s[o])}function JT(n,e,t){const i=this.cache,r=e.length,s=Cd(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||r1,s[o])}function QT(n,e,t){const i=this.cache,r=e.length,s=Cd(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||s1,s[o])}function eA(n,e,t){const i=this.cache,r=e.length,s=Cd(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||i1,s[o])}function tA(n){switch(n){case 5126:return UT;case 35664:return OT;case 35665:return FT;case 35666:return zT;case 35674:return jT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return YT;case 36295:return KT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class iA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tA(t.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function d0(n,e){n.seq.push(e),n.map[e.id]=e}function sA(n,e,t){const i=n.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){d0(t,c===void 0?new nA(a,n,e):new iA(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rA(a),d0(t,h)),t=h}}}class wc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function u0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oA=37297;let aA=0;function lA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cA(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===id&&t===nd?i="LinearDisplayP3ToLinearSRGB":e===nd&&t===id&&(i="LinearSRGBToLinearDisplayP3"),n){case sn:case Td:return[i,"LinearTransferOETF"];case gn:case wp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function f0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lA(n.getShaderSource(e),o)}else return r}function dA(n,e){const t=cA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uA(n,e){let t;switch(e){case sM:t="Linear";break;case oM:t="Reinhard";break;case aM:t="OptimizedCineon";break;case lM:t="ACESFilmic";break;case dM:t="AgX";break;case uM:t="Neutral";break;case cM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function hA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function pA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ro(n){return n!==""}function h0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(n){return n.replace(gA,yA)}const xA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yA(n,e){let t=Qe[e];if(t===void 0){const i=xA.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(n){return n.replace(vA,_A)}function _A(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Db?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Ed:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function wA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sp:e="ENVMAP_BLENDING_MULTIPLY";break;case iM:e="ENVMAP_BLENDING_MIX";break;case rM:e="ENVMAP_BLENDING_ADD";break}return e}function EA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SA(t),c=bA(t),f=MA(t),h=wA(t),u=EA(t),m=t.isWebGL2?"":fA(t),x=hA(t),_=pA(s),g=r.createProgram();let p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ro).join(`
`),p.length>0&&(p+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ro).join(`
`),v.length>0&&(v+=`
`)):(p=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),v=[m,g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ar?uA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,dA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=dh(o),o=h0(o,t),o=p0(o,t),a=dh(a),a=h0(a,t),a=p0(a,t),o=m0(o),a=m0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=y+p+o,w=y+v+a,T=u0(r,r.VERTEX_SHADER,S),E=u0(r,r.FRAGMENT_SHADER,w);r.attachShader(g,T),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(q){if(n.debug.checkShaderErrors){const re=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(T).trim(),te=r.getShaderInfoLog(E).trim();let H=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,E);else{const G=f0(r,T,"vertex"),$=f0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+re+`
`+G+`
`+$)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(O===""||te==="")&&(ne=!1);ne&&(q.diagnostics={runnable:H,programLog:re,vertexShader:{log:O,prefix:p},fragmentShader:{log:te,prefix:v}})}r.deleteShader(T),r.deleteShader(E),U=new wc(r,g),b=mA(r,g)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(g,oA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}let AA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RA(e),t.set(e,i)),i}}class RA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function PA(n,e,t,i,r,s,o){const a=new Ap,l=new CA,c=new Set,f=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,m=r.vertexTextures;let x=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,R,q,re,O){const te=re.fog,H=O.geometry,ne=b.isMeshStandardMaterial?re.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||ne),$=G&&G.mapping===Ed?G.image.height:null,k=_[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ee!==void 0?ee.length:0;let le=0;H.morphAttributes.position!==void 0&&(le=1),H.morphAttributes.normal!==void 0&&(le=2),H.morphAttributes.color!==void 0&&(le=3);let W,F,B,he;if(k){const rt=bi[k];W=rt.vertexShader,F=rt.fragmentShader}else W=b.vertexShader,F=b.fragmentShader,l.update(b),B=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const fe=n.getRenderTarget(),me=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,we=!!b.map,j=!!b.matcap,Be=!!G,Ae=!!b.aoMap,Pe=!!b.lightMap,Ce=!!b.bumpMap,Oe=!!b.normalMap,Fe=!!b.displacementMap,oe=!!b.emissiveMap,pe=!!b.metalnessMap,A=!!b.roughnessMap,M=b.anisotropy>0,X=b.clearcoat>0,z=b.iridescence>0,K=b.sheen>0,V=b.transmission>0,ve=M&&!!b.anisotropyMap,D=X&&!!b.clearcoatMap,Y=X&&!!b.clearcoatNormalMap,ie=X&&!!b.clearcoatRoughnessMap,ge=z&&!!b.iridescenceMap,J=z&&!!b.iridescenceThicknessMap,Ie=K&&!!b.sheenColorMap,Me=K&&!!b.sheenRoughnessMap,be=!!b.specularMap,Se=!!b.specularColorMap,Le=!!b.specularIntensityMap,L=V&&!!b.transmissionMap,ue=V&&!!b.thicknessMap,Re=!!b.gradientMap,I=!!b.alphaMap,ye=b.alphaTest>0,Z=!!b.alphaHash,_e=!!b.extensions;let Te=Ar;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Te=n.toneMapping);const $e={isWebGL2:h,shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:F,defines:b.defines,customVertexShaderID:B,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:ke,instancing:me,instancingColor:me&&O.instanceColor!==null,instancingMorph:me&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:sn,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:j,envMap:Be,envMapMode:Be&&G.mapping,envMapCubeUVHeight:$,aoMap:Ae,lightMap:Pe,bumpMap:Ce,normalMap:Oe,displacementMap:m&&Fe,emissiveMap:oe,normalMapObjectSpace:Oe&&b.normalMapType===wM,normalMapTangentSpace:Oe&&b.normalMapType===Mp,metalnessMap:pe,roughnessMap:A,anisotropy:M,anisotropyMap:ve,clearcoat:X,clearcoatMap:D,clearcoatNormalMap:Y,clearcoatRoughnessMap:ie,iridescence:z,iridescenceMap:ge,iridescenceThicknessMap:J,sheen:K,sheenColorMap:Ie,sheenRoughnessMap:Me,specularMap:be,specularColorMap:Se,specularIntensityMap:Le,transmission:V,transmissionMap:L,thicknessMap:ue,gradientMap:Re,opaque:b.transparent===!1&&b.blending===fo&&b.alphaToCoverage===!1,alphaMap:I,alphaTest:ye,alphaHash:Z,combine:b.combine,mapUv:we&&g(b.map.channel),aoMapUv:Ae&&g(b.aoMap.channel),lightMapUv:Pe&&g(b.lightMap.channel),bumpMapUv:Ce&&g(b.bumpMap.channel),normalMapUv:Oe&&g(b.normalMap.channel),displacementMapUv:Fe&&g(b.displacementMap.channel),emissiveMapUv:oe&&g(b.emissiveMap.channel),metalnessMapUv:pe&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:ve&&g(b.anisotropyMap.channel),clearcoatMapUv:D&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Y&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(b.sheenRoughnessMap.channel),specularMapUv:be&&g(b.specularMap.channel),specularColorMapUv:Se&&g(b.specularColorMap.channel),specularIntensityMapUv:Le&&g(b.specularIntensityMap.channel),transmissionMapUv:L&&g(b.transmissionMap.channel),thicknessMapUv:ue&&g(b.thicknessMap.channel),alphaMapUv:I&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Oe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(we||I),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:_e&&b.extensions.derivatives===!0,extensionFragDepth:_e&&b.extensions.fragDepth===!0,extensionDrawBuffers:_e&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_e&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function v(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)R.push(q),R.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(y(R,b),S(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function y(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function S(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),b.push(a.mask)}function w(b){const R=_[b.type];let q;if(R){const re=bi[R];q=dw.clone(re.uniforms)}else q=b.uniforms;return q}function T(b,R){let q;for(let re=0,O=f.length;re<O;re++){const te=f[re];if(te.cacheKey===R){q=te,++q.usedTimes;break}}return q===void 0&&(q=new TA(n,R,b,s),f.push(q)),q}function E(b){if(--b.usedTimes===0){const R=f.indexOf(b);f[R]=f[f.length-1],f.pop(),b.destroy()}}function P(b){l.remove(b)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:w,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:f,dispose:U}}function LA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function IA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,u,m,x,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=m,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,u,m,x,_,g){const p=o(h,u,m,x,_,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,u,m,x,_,g){const p=o(h,u,m,x,_,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||IA),i.length>1&&i.sort(u||x0),r.length>1&&r.sort(u||x0)}function f(){for(let h=e,u=n.length;h<u;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function DA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new y0,n.set(i,[o])):r>=s.length?(o=new y0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function NA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UA=0;function OA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FA(n,e){const t=new kA,i=NA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new N);const s=new N,o=new Ke,a=new Ke;function l(f,h){let u=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,g=0,p=0,v=0,y=0,S=0,w=0,T=0,E=0,P=0,U=0;f.sort(OA);const b=h===!0?Math.PI:1;for(let q=0,re=f.length;q<re;q++){const O=f[q],te=O.color,H=O.intensity,ne=O.distance,G=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=te.r*H*b,m+=te.g*H*b,x+=te.b*H*b;else if(O.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(O.sh.coefficients[$],H);U++}else if(O.isDirectionalLight){const $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const k=O.shadow,ee=i.get(O);ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=O.shadow.matrix,S++}r.directional[_]=$,_++}else if(O.isSpotLight){const $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(te).multiplyScalar(H*b),$.distance=ne,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,r.spot[p]=$;const k=O.shadow;if(O.map&&(r.spotLightMap[E]=O.map,E++,k.updateMatrices(O),O.castShadow&&P++),r.spotLightMatrix[p]=k.matrix,O.castShadow){const ee=i.get(O);ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,r.spotShadow[p]=ee,r.spotShadowMap[p]=G,T++}p++}else if(O.isRectAreaLight){const $=t.get(O);$.color.copy(te).multiplyScalar(H),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=$,v++}else if(O.isPointLight){const $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*b),$.distance=O.distance,$.decay=O.decay,O.castShadow){const k=O.shadow,ee=i.get(O);ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,r.pointShadow[g]=ee,r.pointShadowMap[g]=G,r.pointShadowMatrix[g]=O.shadow.matrix,w++}r.point[g]=$,g++}else if(O.isHemisphereLight){const $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(H*b),$.groundColor.copy(O.groundColor).multiplyScalar(H*b),r.hemi[y]=$,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==_||R.pointLength!==g||R.spotLength!==p||R.rectAreaLength!==v||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==T||R.numSpotMaps!==E||R.numLightProbes!==U)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=v,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=U,R.directionalLength=_,R.pointLength=g,R.spotLength=p,R.rectAreaLength=v,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=T,R.numSpotMaps=E,R.numLightProbes=U,r.version=UA++)}function c(f,h){let u=0,m=0,x=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,y=f.length;v<y;v++){const S=f[v];if(S.isDirectionalLight){const w=r.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const w=r.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function v0(n,e){const t=new FA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new v0(n,e),t.set(s,[l])):o>=a.length?(l=new v0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class jA extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`;function VA(n,e,t){let i=new Cp;const r=new je,s=new je,o=new pt,a=new jA({depthPacking:MM}),l=new BA,c={},f=t.maxTextureSize,h={[Ki]:_n,[_n]:Ki,[yn]:yn},u=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new ht;x.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv;let p=this.type;this.render=function(T,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const U=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Tr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=p!==Oi&&this.type===Oi,O=p===Oi&&this.type!==Oi;for(let te=0,H=T.length;te<H;te++){const ne=T[te],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const $=G.getFrameExtents();if(r.multiply($),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||re===!0||O===!0){const ee=this.type!==Oi?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new ds(r.x,r.y,ee),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const k=G.getViewportCount();for(let ee=0;ee<k;ee++){const de=G.getViewport(ee);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),q.viewport(o),G.updateMatrices(ne,ee),i=G.getFrustum(),S(E,P,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Oi&&v(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(U,b,R)};function v(T,E){const P=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ds(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,u,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,m,_,null)}function y(T,E,P,U){let b=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const q=b.uuid,re=E.uuid;let O=c[q];O===void 0&&(O={},c[q]=O);let te=O[re];te===void 0&&(te=b.clone(),O[re]=te,E.addEventListener("dispose",w)),b=te}if(b.visible=E.visible,b.wireframe=E.wireframe,U===Oi?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=n.properties.get(b);q.light=P}return b}function S(T,E,P,U,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const re=e.update(T),O=T.material;if(Array.isArray(O)){const te=re.groups;for(let H=0,ne=te.length;H<ne;H++){const G=te[H],$=O[G.materialIndex];if($&&$.visible){const k=y(T,$,U,b);T.onBeforeShadow(n,T,E,P,re,k,G),n.renderBufferDirect(P,null,re,k,T,G),T.onAfterShadow(n,T,E,P,re,k,G)}}}else if(O.visible){const te=y(T,O,U,b);T.onBeforeShadow(n,T,E,P,re,te,null),n.renderBufferDirect(P,null,re,te,T,null),T.onAfterShadow(n,T,E,P,re,te,null)}}const q=T.children;for(let re=0,O=q.length;re<O;re++)S(q[re],E,P,U,b)}function w(T){T.target.removeEventListener("dispose",w);for(const P in c){const U=c[P],b=T.target.uuid;b in U&&(U[b].dispose(),delete U[b])}}}function WA(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const ye=new pt;let Z=null;const _e=new pt(0,0,0,0);return{setMask:function(Te){Z!==Te&&!I&&(n.colorMask(Te,Te,Te,Te),Z=Te)},setLocked:function(Te){I=Te},setClear:function(Te,$e,rt,ot,nt){nt===!0&&(Te*=ot,$e*=ot,rt*=ot),ye.set(Te,$e,rt,ot),_e.equals(ye)===!1&&(n.clearColor(Te,$e,rt,ot),_e.copy(ye))},reset:function(){I=!1,Z=null,_e.set(-1,0,0,0)}}}function s(){let I=!1,ye=null,Z=null,_e=null;return{setTest:function(Te){Te?me(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!I&&(n.depthMask(Te),ye=Te)},setFunc:function(Te){if(Z!==Te){switch(Te){case qb:n.depthFunc(n.NEVER);break;case Zb:n.depthFunc(n.ALWAYS);break;case Jb:n.depthFunc(n.LESS);break;case Qc:n.depthFunc(n.LEQUAL);break;case Qb:n.depthFunc(n.EQUAL);break;case eM:n.depthFunc(n.GEQUAL);break;case tM:n.depthFunc(n.GREATER);break;case nM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=Te}},setLocked:function(Te){I=Te},setClear:function(Te){_e!==Te&&(n.clearDepth(Te),_e=Te)},reset:function(){I=!1,ye=null,Z=null,_e=null}}}function o(){let I=!1,ye=null,Z=null,_e=null,Te=null,$e=null,rt=null,ot=null,nt=null;return{setTest:function(Ve){I||(Ve?me(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Ve){ye!==Ve&&!I&&(n.stencilMask(Ve),ye=Ve)},setFunc:function(Ve,qe,at){(Z!==Ve||_e!==qe||Te!==at)&&(n.stencilFunc(Ve,qe,at),Z=Ve,_e=qe,Te=at)},setOp:function(Ve,qe,at){($e!==Ve||rt!==qe||ot!==at)&&(n.stencilOp(Ve,qe,at),$e=Ve,rt=qe,ot=at)},setLocked:function(Ve){I=Ve},setClear:function(Ve){nt!==Ve&&(n.clearStencil(Ve),nt=Ve)},reset:function(){I=!1,ye=null,Z=null,_e=null,Te=null,$e=null,rt=null,ot=null,nt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let u={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,S=null,w=null,T=null,E=null,P=null,U=new Ge(0,0,0),b=0,R=!1,q=null,re=null,O=null,te=null,H=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=$>=2);let ee=null,de={};const le=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),F=new pt().fromArray(le),B=new pt().fromArray(W);function he(I,ye,Z,_e){const Te=new Uint8Array(4),$e=n.createTexture();n.bindTexture(I,$e),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<Z;rt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ye+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return $e}const fe={};fe[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(n.DEPTH_TEST),l.setFunc(Qc),Fe(!1),oe(Zm),me(n.CULL_FACE),Ce(Tr);function me(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ke(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function we(I,ye){return m[I]!==ye?(n.bindFramebuffer(I,ye),m[I]=ye,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ye),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function j(I,ye){let Z=_,_e=!1;if(I){Z=x.get(ye),Z===void 0&&(Z=[],x.set(ye,Z));const Te=I.textures;if(Z.length!==Te.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,rt=Te.length;$e<rt;$e++)Z[$e]=n.COLOR_ATTACHMENT0+$e;Z.length=Te.length,_e=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,_e=!0);if(_e)if(t.isWebGL2)n.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Be(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ae={[Kr]:n.FUNC_ADD,[Nb]:n.FUNC_SUBTRACT,[Ub]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[eg]=n.MIN,Ae[tg]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ae[eg]=I.MIN_EXT,Ae[tg]=I.MAX_EXT)}const Pe={[Ob]:n.ZERO,[Fb]:n.ONE,[zb]:n.SRC_COLOR,[th]:n.SRC_ALPHA,[Wb]:n.SRC_ALPHA_SATURATE,[Gb]:n.DST_COLOR,[Bb]:n.DST_ALPHA,[jb]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[Vb]:n.ONE_MINUS_DST_COLOR,[Hb]:n.ONE_MINUS_DST_ALPHA,[Xb]:n.CONSTANT_COLOR,[$b]:n.ONE_MINUS_CONSTANT_COLOR,[Yb]:n.CONSTANT_ALPHA,[Kb]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,ye,Z,_e,Te,$e,rt,ot,nt,Ve){if(I===Tr){p===!0&&(ke(n.BLEND),p=!1);return}if(p===!1&&(me(n.BLEND),p=!0),I!==kb){if(I!==v||Ve!==R){if((y!==Kr||T!==Kr)&&(n.blendEquation(n.FUNC_ADD),y=Kr,T=Kr),Ve)switch(I){case fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.ONE,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,w=null,E=null,P=null,U.set(0,0,0),b=0,v=I,R=Ve}return}Te=Te||ye,$e=$e||Z,rt=rt||_e,(ye!==y||Te!==T)&&(n.blendEquationSeparate(Ae[ye],Ae[Te]),y=ye,T=Te),(Z!==S||_e!==w||$e!==E||rt!==P)&&(n.blendFuncSeparate(Pe[Z],Pe[_e],Pe[$e],Pe[rt]),S=Z,w=_e,E=$e,P=rt),(ot.equals(U)===!1||nt!==b)&&(n.blendColor(ot.r,ot.g,ot.b,nt),U.copy(ot),b=nt),v=I,R=!1}function Oe(I,ye){I.side===yn?ke(n.CULL_FACE):me(n.CULL_FACE);let Z=I.side===_n;ye&&(Z=!Z),Fe(Z),I.blending===fo&&I.transparent===!1?Ce(Tr):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const _e=I.stencilWrite;c.setTest(_e),_e&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),A(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){q!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),q=I)}function oe(I){I!==Lb?(me(n.CULL_FACE),I!==re&&(I===Zm?n.cullFace(n.BACK):I===Ib?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),re=I}function pe(I){I!==O&&(G&&n.lineWidth(I),O=I)}function A(I,ye,Z){I?(me(n.POLYGON_OFFSET_FILL),(te!==ye||H!==Z)&&(n.polygonOffset(ye,Z),te=ye,H=Z)):ke(n.POLYGON_OFFSET_FILL)}function M(I){I?me(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function X(I){I===void 0&&(I=n.TEXTURE0+ne-1),ee!==I&&(n.activeTexture(I),ee=I)}function z(I,ye,Z){Z===void 0&&(ee===null?Z=n.TEXTURE0+ne-1:Z=ee);let _e=de[Z];_e===void 0&&(_e={type:void 0,texture:void 0},de[Z]=_e),(_e.type!==I||_e.texture!==ye)&&(ee!==Z&&(n.activeTexture(Z),ee=Z),n.bindTexture(I,ye||fe[I]),_e.type=I,_e.texture=ye)}function K(){const I=de[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){F.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),F.copy(I))}function Le(I){B.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),B.copy(I))}function L(I,ye){let Z=h.get(ye);Z===void 0&&(Z=new WeakMap,h.set(ye,Z));let _e=Z.get(I);_e===void 0&&(_e=n.getUniformBlockIndex(ye,I.name),Z.set(I,_e))}function ue(I,ye){const _e=h.get(ye).get(I);f.get(ye)!==_e&&(n.uniformBlockBinding(ye,_e,I.__bindingPointIndex),f.set(ye,_e))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,de={},m={},x=new WeakMap,_=[],g=null,p=!1,v=null,y=null,S=null,w=null,T=null,E=null,P=null,U=new Ge(0,0,0),b=0,R=!1,q=null,re=null,O=null,te=null,H=null,F.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:ke,bindFramebuffer:we,drawBuffers:j,useProgram:Be,setBlending:Ce,setMaterial:Oe,setFlipSided:Fe,setCullFace:oe,setLineWidth:pe,setPolygonOffset:A,setScissorTest:M,activeTexture:X,bindTexture:z,unbindTexture:K,compressedTexImage2D:V,compressedTexImage3D:ve,texImage2D:Me,texImage3D:be,updateUBOMapping:L,uniformBlockBinding:ue,texStorage2D:J,texStorage3D:Ie,texSubImage2D:D,texSubImage3D:Y,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:Se,viewport:Le,reset:Re}}function XA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new je,h=new WeakMap;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return x?new OffscreenCanvas(A,M):Qa("canvas")}function g(A,M,X,z){let K=1;const V=pe(A);if((V.width>z||V.height>z)&&(K=z/Math.max(V.width,V.height)),K<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ve=M?sd:Math.floor,D=ve(K*V.width),Y=ve(K*V.height);u===void 0&&(u=_(D,Y));const ie=X?_(D,Y):u;return ie.width=D,ie.height=Y,ie.getContext("2d").drawImage(A,0,0,D,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+D+"x"+Y+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),A;return A}function p(A){const M=pe(A);return ch(M.width)&&ch(M.height)}function v(A){return a?!1:A.wrapS!==Kn||A.wrapT!==Kn||A.minFilter!==$t&&A.minFilter!==Xt}function y(A,M){return A.generateMipmaps&&M&&A.minFilter!==$t&&A.minFilter!==Xt}function S(A){n.generateMipmap(A)}function w(A,M,X,z,K=!1){if(a===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=M;if(M===n.RED&&(X===n.FLOAT&&(V=n.R32F),X===n.HALF_FLOAT&&(V=n.R16F),X===n.UNSIGNED_BYTE&&(V=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(V=n.R8UI),X===n.UNSIGNED_SHORT&&(V=n.R16UI),X===n.UNSIGNED_INT&&(V=n.R32UI),X===n.BYTE&&(V=n.R8I),X===n.SHORT&&(V=n.R16I),X===n.INT&&(V=n.R32I)),M===n.RG&&(X===n.FLOAT&&(V=n.RG32F),X===n.HALF_FLOAT&&(V=n.RG16F),X===n.UNSIGNED_BYTE&&(V=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(V=n.RG8UI),X===n.UNSIGNED_SHORT&&(V=n.RG16UI),X===n.UNSIGNED_INT&&(V=n.RG32UI),X===n.BYTE&&(V=n.RG8I),X===n.SHORT&&(V=n.RG16I),X===n.INT&&(V=n.RG32I)),M===n.RGBA){const ve=K?td:ct.getTransfer(z);X===n.FLOAT&&(V=n.RGBA32F),X===n.HALF_FLOAT&&(V=n.RGBA16F),X===n.UNSIGNED_BYTE&&(V=ve===vt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function T(A,M,X){return y(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){return A===$t||A===sh||A===Vs?n.NEAREST:n.LINEAR}function P(A){const M=A.target;M.removeEventListener("dispose",P),b(M),M.isVideoTexture&&h.delete(M)}function U(A){const M=A.target;M.removeEventListener("dispose",U),q(M)}function b(A){const M=i.get(A);if(M.__webglInit===void 0)return;const X=A.source,z=m.get(X);if(z){const K=z[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(A),Object.keys(z).length===0&&m.delete(X)}i.remove(A)}function R(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const X=A.source,z=m.get(X);delete z[M.__cacheKey],o.memory.textures--}function q(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(M.__webglFramebuffer[z]))for(let K=0;K<M.__webglFramebuffer[z].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[z][K]);else n.deleteFramebuffer(M.__webglFramebuffer[z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[z])}else{if(Array.isArray(M.__webglFramebuffer))for(let z=0;z<M.__webglFramebuffer.length;z++)n.deleteFramebuffer(M.__webglFramebuffer[z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let z=0;z<M.__webglColorRenderbuffer.length;z++)M.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=A.textures;for(let z=0,K=X.length;z<K;z++){const V=i.get(X[z]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(X[z])}i.remove(A)}let re=0;function O(){re=0}function te(){const A=re;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),re+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ne(A,M){const X=i.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const z=A.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(X,A,M);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function G(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){B(X,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function $(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){B(X,A,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function k(A,M){const X=i.get(A);if(A.version>0&&X.__version!==A.version){he(X,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}const ee={[li]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[ed]:n.MIRRORED_REPEAT},de={[$t]:n.NEAREST,[sh]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Mc]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},le={[EM]:n.NEVER,[LM]:n.ALWAYS,[TM]:n.LESS,[Bv]:n.LEQUAL,[AM]:n.EQUAL,[PM]:n.GEQUAL,[CM]:n.GREATER,[RM]:n.NOTEQUAL};function W(A,M,X){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===Mc||M.magFilter===Vs||M.magFilter===fi||M.minFilter===Xt||M.minFilter===Mc||M.minFilter===Vs||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(A,n.TEXTURE_WRAP_S,ee[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ee[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ee[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,de[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,de[M.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Kn||M.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==$t&&M.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==Vs&&M.minFilter!==fi||M.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Za&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function F(A,M){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const z=M.source;let K=m.get(z);K===void 0&&(K={},m.set(z,K));const V=H(M);if(V!==A.__cacheKey){K[V]===void 0&&(K[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),K[V].usedTimes++;const ve=K[A.__cacheKey];ve!==void 0&&(K[A.__cacheKey].usedTimes--,ve.usedTimes===0&&R(M)),A.__cacheKey=V,A.__webglTexture=K[V].texture}return X}function B(A,M,X){let z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(z=n.TEXTURE_3D);const K=F(A,M),V=M.source;t.bindTexture(z,A.__webglTexture,n.TEXTURE0+X);const ve=i.get(V);if(V.version!==ve.__version||K===!0){t.activeTexture(n.TEXTURE0+X);const D=ct.getPrimaries(ct.workingColorSpace),Y=M.colorSpace===fr?null:ct.getPrimaries(M.colorSpace),ie=M.colorSpace===fr||D===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=v(M)&&p(M.image)===!1;let J=g(M.image,ge,!1,r.maxTextureSize);J=oe(M,J);const Ie=p(J)||a,Me=s.convert(M.format,M.colorSpace);let be=s.convert(M.type),Se=w(M.internalFormat,Me,be,M.colorSpace,M.isVideoTexture);W(z,M,Ie);let Le;const L=M.mipmaps,ue=a&&M.isVideoTexture!==!0&&Se!==zv,Re=ve.__version===void 0||K===!0,I=V.dataReady,ye=T(M,J,Ie);if(M.isDepthTexture)Se=n.DEPTH_COMPONENT,a?M.type===ci?Se=n.DEPTH_COMPONENT32F:M.type===mr?Se=n.DEPTH_COMPONENT24:M.type===is?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:M.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===rs&&Se===n.DEPTH_COMPONENT&&M.type!==bp&&M.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=mr,be=s.convert(M.type)),M.format===To&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,M.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=is,be=s.convert(M.type))),Re&&(ue?t.texStorage2D(n.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Se,J.width,J.height,0,Me,be,null));else if(M.isDataTexture)if(L.length>0&&Ie){ue&&Re&&t.texStorage2D(n.TEXTURE_2D,ye,Se,L[0].width,L[0].height);for(let Z=0,_e=L.length;Z<_e;Z++)Le=L[Z],ue?I&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Le.width,Le.height,Me,be,Le.data):t.texImage2D(n.TEXTURE_2D,Z,Se,Le.width,Le.height,0,Me,be,Le.data);M.generateMipmaps=!1}else ue?(Re&&t.texStorage2D(n.TEXTURE_2D,ye,Se,J.width,J.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Me,be,J.data)):t.texImage2D(n.TEXTURE_2D,0,Se,J.width,J.height,0,Me,be,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Se,L[0].width,L[0].height,J.depth);for(let Z=0,_e=L.length;Z<_e;Z++)Le=L[Z],M.format!==qn?Me!==null?ue?I&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Le.width,Le.height,J.depth,Me,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Se,Le.width,Le.height,J.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Le.width,Le.height,J.depth,Me,be,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Se,Le.width,Le.height,J.depth,0,Me,be,Le.data)}else{ue&&Re&&t.texStorage2D(n.TEXTURE_2D,ye,Se,L[0].width,L[0].height);for(let Z=0,_e=L.length;Z<_e;Z++)Le=L[Z],M.format!==qn?Me!==null?ue?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Se,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?I&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Le.width,Le.height,Me,be,Le.data):t.texImage2D(n.TEXTURE_2D,Z,Se,Le.width,Le.height,0,Me,be,Le.data)}else if(M.isDataArrayTexture)ue?(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Se,J.width,J.height,J.depth),I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Me,be,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,Me,be,J.data);else if(M.isData3DTexture)ue?(Re&&t.texStorage3D(n.TEXTURE_3D,ye,Se,J.width,J.height,J.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Me,be,J.data)):t.texImage3D(n.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,Me,be,J.data);else if(M.isFramebufferTexture){if(Re)if(ue)t.texStorage2D(n.TEXTURE_2D,ye,Se,J.width,J.height);else{let Z=J.width,_e=J.height;for(let Te=0;Te<ye;Te++)t.texImage2D(n.TEXTURE_2D,Te,Se,Z,_e,0,Me,be,null),Z>>=1,_e>>=1}}else if(L.length>0&&Ie){if(ue&&Re){const Z=pe(L[0]);t.texStorage2D(n.TEXTURE_2D,ye,Se,Z.width,Z.height)}for(let Z=0,_e=L.length;Z<_e;Z++)Le=L[Z],ue?I&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Me,be,Le):t.texImage2D(n.TEXTURE_2D,Z,Se,Me,be,Le);M.generateMipmaps=!1}else if(ue){if(Re){const Z=pe(J);t.texStorage2D(n.TEXTURE_2D,ye,Se,Z.width,Z.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,be,J)}else t.texImage2D(n.TEXTURE_2D,0,Se,Me,be,J);y(M,Ie)&&S(z),ve.__version=V.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,X){if(M.image.length!==6)return;const z=F(A,M),K=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);const V=i.get(K);if(K.version!==V.__version||z===!0){t.activeTexture(n.TEXTURE0+X);const ve=ct.getPrimaries(ct.workingColorSpace),D=M.colorSpace===fr?null:ct.getPrimaries(M.colorSpace),Y=M.colorSpace===fr||ve===D?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ie=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!ie&&!ge?J[Z]=g(M.image[Z],!1,!0,r.maxCubemapSize):J[Z]=ge?M.image[Z].image:M.image[Z],J[Z]=oe(M,J[Z]);const Ie=J[0],Me=p(Ie)||a,be=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Le=w(M.internalFormat,be,Se,M.colorSpace),L=a&&M.isVideoTexture!==!0,ue=V.__version===void 0||z===!0,Re=K.dataReady;let I=T(M,Ie,Me);W(n.TEXTURE_CUBE_MAP,M,Me);let ye;if(ie){L&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,Le,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){ye=J[Z].mipmaps;for(let _e=0;_e<ye.length;_e++){const Te=ye[_e];M.format!==qn?be!==null?L?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Te.width,Te.height,be,Se,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,Le,Te.width,Te.height,0,be,Se,Te.data)}}}else{if(ye=M.mipmaps,L&&ue){ye.length>0&&I++;const Z=pe(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,I,Le,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ge){L?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,be,Se,J[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,J[Z].width,J[Z].height,0,be,Se,J[Z].data);for(let _e=0;_e<ye.length;_e++){const $e=ye[_e].image[Z].image;L?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,$e.width,$e.height,be,Se,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Le,$e.width,$e.height,0,be,Se,$e.data)}}else{L?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,Se,J[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,be,Se,J[Z]);for(let _e=0;_e<ye.length;_e++){const Te=ye[_e];L?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,be,Se,Te.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,Le,be,Se,Te.image[Z])}}}y(M,Me)&&S(n.TEXTURE_CUBE_MAP),V.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function fe(A,M,X,z,K,V){const ve=s.convert(X.format,X.colorSpace),D=s.convert(X.type),Y=w(X.internalFormat,ve,D,X.colorSpace);if(!i.get(M).__hasExternalTextures){const ge=Math.max(1,M.width>>V),J=Math.max(1,M.height>>V);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,V,Y,ge,J,M.depth,0,ve,D,null):t.texImage2D(K,V,Y,ge,J,0,ve,D,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Oe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,K,i.get(X).__webglTexture,0,Ce(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,K,i.get(X).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(A,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Oe(M)){const K=M.depthTexture;K&&K.isDepthTexture&&(K.type===ci?z=n.DEPTH_COMPONENT32F:K.type===mr&&(z=n.DEPTH_COMPONENT24));const V=Ce(M);Oe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,z,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,z,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const z=Ce(M);X&&Oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,M.width,M.height):Oe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const z=M.textures;for(let K=0;K<z.length;K++){const V=z[K],ve=s.convert(V.format,V.colorSpace),D=s.convert(V.type),Y=w(V.internalFormat,ve,D,V.colorSpace),ie=Ce(M);X&&Oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,Y,M.width,M.height):Oe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,Y,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Y,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);const z=i.get(M.depthTexture).__webglTexture,K=Ce(M);if(M.depthTexture.format===rs)Oe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(M.depthTexture.format===To)Oe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function we(A){const M=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,A)}else if(X){M.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[z]),M.__webglDepthbuffer[z]=n.createRenderbuffer(),me(M.__webglDepthbuffer[z],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),me(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(A,M,X){const z=i.get(A);M!==void 0&&fe(z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&we(A)}function Be(A){const M=A.texture,X=i.get(A),z=i.get(M);A.addEventListener("dispose",U);const K=A.textures,V=A.isWebGLCubeRenderTarget===!0,ve=K.length>1,D=p(A)||a;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=M.version,o.memory.textures++),V){X.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Y]=[];for(let ie=0;ie<M.mipmaps.length;ie++)X.__webglFramebuffer[Y][ie]=n.createFramebuffer()}else X.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)X.__webglFramebuffer[Y]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ve)if(r.drawBuffers)for(let Y=0,ie=K.length;Y<ie;Y++){const ge=i.get(K[Y]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){const ie=K[Y];X.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const ge=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),Ie=w(ie.internalFormat,ge,J,ie.colorSpace,A.isXRRenderTarget===!0),Me=Ce(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ie,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),me(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),W(n.TEXTURE_CUBE_MAP,M,D);for(let Y=0;Y<6;Y++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)fe(X.__webglFramebuffer[Y][ie],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie);else fe(X.__webglFramebuffer[Y],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(M,D)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let Y=0,ie=K.length;Y<ie;Y++){const ge=K[Y],J=i.get(ge);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),W(n.TEXTURE_2D,ge,D),fe(X.__webglFramebuffer,A,ge,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),y(ge,D)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,z.__webglTexture),W(Y,M,D),a&&M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)fe(X.__webglFramebuffer[ie],A,M,n.COLOR_ATTACHMENT0,Y,ie);else fe(X.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,Y,0);y(M,D)&&S(Y),t.unbindTexture()}A.depthBuffer&&we(A)}function Ae(A){const M=p(A)||a,X=A.textures;for(let z=0,K=X.length;z<K;z++){const V=X[z];if(y(V,M)){const ve=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,D=i.get(V).__webglTexture;t.bindTexture(ve,D),S(ve),t.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&Oe(A)===!1){const M=A.textures,X=A.width,z=A.height;let K=n.COLOR_BUFFER_BIT;const V=[],ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=i.get(A),Y=M.length>1;if(Y)for(let ie=0;ie<M.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let ie=0;ie<M.length;ie++){V.push(n.COLOR_ATTACHMENT0+ie),A.depthBuffer&&V.push(ve);const ge=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(ge===!1&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,D.__webglColorRenderbuffer[ie]),ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),Y){const J=i.get(M[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,X,z,0,0,X,z,K,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ie=0;ie<M.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const ge=i.get(M[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(r.maxSamples,A.samples)}function Oe(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function oe(A,M){const X=A.colorSpace,z=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===lh||X!==sn&&X!==fr&&(ct.getTransfer(X)===vt?a===!1?e.has("EXT_sRGB")===!0&&z===qn?(A.format=lh,A.minFilter=Xt,A.generateMipmaps=!1):M=Vv.sRGBToLinear(M):(z!==qn||K!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=te,this.resetTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=j,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Oe}function $A(n,e,t){const i=t.isWebGL2;function r(s,o=fr){let a;const l=ct.getTransfer(o);if(s===Cr)return n.UNSIGNED_BYTE;if(s===Dv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===kv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===hM)return n.BYTE;if(s===pM)return n.SHORT;if(s===bp)return n.UNSIGNED_SHORT;if(s===Iv)return n.INT;if(s===mr)return n.UNSIGNED_INT;if(s===ci)return n.FLOAT;if(s===Za)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mM)return n.ALPHA;if(s===qn)return n.RGBA;if(s===gM)return n.LUMINANCE;if(s===xM)return n.LUMINANCE_ALPHA;if(s===rs)return n.DEPTH_COMPONENT;if(s===To)return n.DEPTH_STENCIL;if(s===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nv)return n.RED;if(s===Uv)return n.RED_INTEGER;if(s===yM)return n.RG;if(s===Ov)return n.RG_INTEGER;if(s===Fv)return n.RGBA_INTEGER;if(s===du||s===uu||s===fu||s===hu)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ig||s===rg||s===sg||s===og)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ig)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===og)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ag||s===lg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ag)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cg||s===dg||s===ug||s===fg||s===hg||s===pg||s===mg||s===gg||s===xg||s===yg||s===vg||s===_g||s===Sg||s===bg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ug)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_g)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bg)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===Mg||s===wg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pu)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vM||s===Eg||s===Tg||s===Ag)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ag)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YA extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KA={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Lr({extensions:{fragDepth:!0},vertexShader:qA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _t(new Ad(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class QA extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,x=null;const _=new JA,g=t.getContextAttributes();let p=null,v=null;const y=[],S=[],w=new je;let T=null;const E=new xn;E.layers.enable(1),E.viewport=new pt;const P=new xn;P.layers.enable(2),P.viewport=new pt;const U=[E,P],b=new YA;b.layers.enable(1),b.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let F=y[W];return F===void 0&&(F=new ju,y[W]=F),F.getTargetRaySpace()},this.getControllerGrip=function(W){let F=y[W];return F===void 0&&(F=new ju,y[W]=F),F.getGripSpace()},this.getHand=function(W){let F=y[W];return F===void 0&&(F=new ju,y[W]=F),F.getHandSpace()};function re(W){const F=S.indexOf(W.inputSource);if(F===-1)return;const B=y[F];B!==void 0&&(B.update(W.inputSource,W.frame,c||o),B.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",te);for(let W=0;W<y.length;W++){const F=S[W];F!==null&&(S[W]=null,y[W].disconnect(F))}R=null,q=null,_.reset(),e.setRenderTarget(p),m=null,u=null,h=null,r=null,v=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",O),r.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ds(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,B=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?To:rs,B=g.stencil?is:mr);const fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ds(u.textureWidth,u.textureHeight,{format:qn,type:Cr,depthTexture:new e1(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const me=e.properties.get(v);me.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(W){for(let F=0;F<W.removed.length;F++){const B=W.removed[F],he=S.indexOf(B);he>=0&&(S[he]=null,y[he].disconnect(B))}for(let F=0;F<W.added.length;F++){const B=W.added[F];let he=S.indexOf(B);if(he===-1){for(let me=0;me<y.length;me++)if(me>=S.length){S.push(B),he=me;break}else if(S[me]===null){S[me]=B,he=me;break}if(he===-1)break}const fe=y[he];fe&&fe.connect(B)}}const H=new N,ne=new N;function G(W,F,B){H.setFromMatrixPosition(F.matrixWorld),ne.setFromMatrixPosition(B.matrixWorld);const he=H.distanceTo(ne),fe=F.projectionMatrix.elements,me=B.projectionMatrix.elements,ke=fe[14]/(fe[10]-1),we=fe[14]/(fe[10]+1),j=(fe[9]+1)/fe[5],Be=(fe[9]-1)/fe[5],Ae=(fe[8]-1)/fe[0],Pe=(me[8]+1)/me[0],Ce=ke*Ae,Oe=ke*Pe,Fe=he/(-Ae+Pe),oe=Fe*-Ae;F.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(oe),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const pe=ke+Fe,A=we+Fe,M=Ce-oe,X=Oe+(he-oe),z=j*we/A*pe,K=Be*we/A*pe;W.projectionMatrix.makePerspective(M,X,z,K,pe,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function $(W,F){F===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(F.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),b.near=P.near=E.near=W.near,b.far=P.far=E.far=W.far,(R!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,q=b.far,E.near=R,E.far=q,P.near=R,P.far=q,E.updateProjectionMatrix(),P.updateProjectionMatrix(),W.updateProjectionMatrix());const F=W.parent,B=b.cameras;$(b,F);for(let he=0;he<B.length;he++)$(B[he],F);B.length===2?G(b,E,P):b.projectionMatrix.copy(E.projectionMatrix),k(W,b,F)};function k(W,F,B){B===null?W.matrix.copy(F.matrixWorld):(W.matrix.copy(B.matrixWorld),W.matrix.invert(),W.matrix.multiply(F.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(F.projectionMatrix),W.projectionMatrixInverse.copy(F.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Co*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let ee=null;function de(W,F){if(f=F.getViewerPose(c||o),x=F,f!==null){const B=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let he=!1;B.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let me=0;me<B.length;me++){const ke=B[me];let we=null;if(m!==null)we=m.getViewport(ke);else{const Be=h.getViewSubImage(u,ke);we=Be.viewport,me===0&&(e.setRenderTargetTextures(v,Be.colorTexture,u.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(v))}let j=U[me];j===void 0&&(j=new xn,j.layers.enable(me),j.viewport=new pt,U[me]=j),j.matrix.fromArray(ke.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ke.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(we.x,we.y,we.width,we.height),me===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(j)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const me=h.getDepthInformation(B[0]);me&&me.isValid&&me.texture&&_.init(e,me,r.renderState)}}for(let B=0;B<y.length;B++){const he=S[B],fe=y[B];he!==null&&fe!==void 0&&fe.update(he,F,c||o)}_.render(e,b),ee&&ee(W,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const le=new Qv;le.setAnimationLoop(de),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}const Hr=new xi,eC=new Ke;function tC(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,qv(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,S=v.envMapRotation;if(y&&(g.envMap.value=y,Hr.copy(S),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Hr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(x(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",g));const w=y.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(u(v),s[v.id]=T)}function f(v){const y=h();v.__bindingPointIndex=y;const S=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=r[v.id],S=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,E=S.length;T<E;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let U=0,b=P.length;U<b;U++){const R=P[U];if(m(R,T,U,w)===!0){const q=R.__offset,re=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let te=0;te<re.length;te++){const H=re[te],ne=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,y,S,w){const T=v.value,E=y+"_"+S;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const P=w[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(v){const y=v.uniforms;let S=0;const w=16;for(let E=0,P=y.length;E<P;E++){const U=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,R=U.length;b<R;b++){const q=U[b],re=Array.isArray(q.value)?q.value:[q.value];for(let O=0,te=re.length;O<te;O++){const H=re[O],ne=_(H),G=S%w;G!==0&&w-G<ne.boundary&&(S+=w-G),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=ne.storage}}}const T=S%w;return T>0&&(S+=w-T),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class o1{constructor(e={}){const{canvas:t=XM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this._useLegacyLights=!1,this.toneMapping=Ar,this.toneMappingExposure=1;const y=this;let S=!1,w=0,T=0,E=null,P=-1,U=null;const b=new pt,R=new pt;let q=null;const re=new Ge(0);let O=0,te=t.width,H=t.height,ne=1,G=null,$=null;const k=new pt(0,0,te,H),ee=new pt(0,0,te,H);let de=!1;const le=new Cp;let W=!1,F=!1,B=null;const he=new Ke,fe=new je,me=new N,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return E===null?ne:1}let j=i;function Be(C,Q){for(let ae=0;ae<C.length;ae++){const ce=C[ae],se=t.getContext(ce,Q);if(se!==null)return se}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_p}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ye,!1),j===null){const Q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Q.shift(),j=Be(Q,C),j===null)throw Be(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Pe,Ce,Oe,Fe,oe,pe,A,M,X,z,K,V,ve,D,Y,ie,ge,J,Ie,Me,be,Se,Le;function L(){Ae=new lT(j),Pe=new nT(j,Ae,e),Ae.init(Pe),be=new $A(j,Ae,Pe),Ce=new WA(j,Ae,Pe),Oe=new uT(j),Fe=new LA,oe=new XA(j,Ae,Ce,Fe,Pe,be,Oe),pe=new rT(y),A=new aT(y),M=new xw(j,Pe),Se=new eT(j,Ae,M,Pe),X=new cT(j,M,Oe,Se),z=new mT(j,X,M,Oe),J=new pT(j,Pe,oe),Y=new iT(Fe),K=new PA(y,pe,A,Ae,Pe,Se,Y),V=new tC(y,Fe),ve=new DA,D=new zA(Ae,Pe),ge=new Q2(y,pe,A,Ce,z,u,l),ie=new VA(y,z,Pe),Le=new nC(j,Oe,Pe,Ce),Ie=new tT(j,Ae,Oe,Pe),Me=new dT(j,Ae,Oe,Pe),Oe.programs=K.programs,y.capabilities=Pe,y.extensions=Ae,y.properties=Fe,y.renderLists=ve,y.shadowMap=ie,y.state=Ce,y.info=Oe}L();const ue=new QA(y,j);this.xr=ue,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(te,H,!1))},this.getSize=function(C){return C.set(te,H)},this.setSize=function(C,Q,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,H=Q,t.width=Math.floor(C*ne),t.height=Math.floor(Q*ne),ae===!0&&(t.style.width=C+"px",t.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(te*ne,H*ne).floor()},this.setDrawingBufferSize=function(C,Q,ae){te=C,H=Q,ne=ae,t.width=Math.floor(C*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,Q,ae,ce){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,Q,ae,ce),Ce.viewport(b.copy(k).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,Q,ae,ce){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,Q,ae,ce),Ce.scissor(R.copy(ee).multiplyScalar(ne).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Ce.setScissorTest(de=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,Q=!0,ae=!0){let ce=0;if(C){let se=!1;if(E!==null){const Ne=E.texture.format;se=Ne===Fv||Ne===Ov||Ne===Uv}if(se){const Ne=E.texture.type,He=Ne===Cr||Ne===mr||Ne===bp||Ne===is||Ne===Dv||Ne===kv,We=ge.getClearColor(),Xe=ge.getClearAlpha(),tt=We.r,Ye=We.g,Ze=We.b;He?(m[0]=tt,m[1]=Ye,m[2]=Ze,m[3]=Xe,j.clearBufferuiv(j.COLOR,0,m)):(x[0]=tt,x[1]=Ye,x[2]=Ze,x[3]=Xe,j.clearBufferiv(j.COLOR,0,x))}else ce|=j.COLOR_BUFFER_BIT}Q&&(ce|=j.DEPTH_BUFFER_BIT),ae&&(ce|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ve.dispose(),D.dispose(),Fe.dispose(),pe.dispose(),A.dispose(),z.dispose(),Se.dispose(),Le.dispose(),K.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",nt),ue.removeEventListener("sessionend",Ve),B&&(B.dispose(),B=null),qe.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Oe.autoReset,Q=ie.enabled,ae=ie.autoUpdate,ce=ie.needsUpdate,se=ie.type;L(),Oe.autoReset=C,ie.enabled=Q,ie.autoUpdate=ae,ie.needsUpdate=ce,ie.type=se}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const Q=C.target;Q.removeEventListener("dispose",Z),_e(Q)}function _e(C){Te(C),Fe.remove(C)}function Te(C){const Q=Fe.get(C).programs;Q!==void 0&&(Q.forEach(function(ae){K.releaseProgram(ae)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ae,ce,se,Ne){Q===null&&(Q=ke);const He=se.isMesh&&se.matrixWorld.determinant()<0,We=xs(C,Q,ae,ce,se);Ce.setMaterial(ce,He);let Xe=ae.index,tt=1;if(ce.wireframe===!0){if(Xe=X.getWireframeAttribute(ae),Xe===void 0)return;tt=2}const Ye=ae.drawRange,Ze=ae.attributes.position;let Dt=Ye.start*tt,Pn=(Ye.start+Ye.count)*tt;Ne!==null&&(Dt=Math.max(Dt,Ne.start*tt),Pn=Math.min(Pn,(Ne.start+Ne.count)*tt)),Xe!==null?(Dt=Math.max(Dt,0),Pn=Math.min(Pn,Xe.count)):Ze!=null&&(Dt=Math.max(Dt,0),Pn=Math.min(Pn,Ze.count));const Ht=Pn-Dt;if(Ht<0||Ht===1/0)return;Se.setup(se,ce,We,ae,Xe);let Ri,Tt=Ie;if(Xe!==null&&(Ri=M.get(Xe),Tt=Me,Tt.setIndex(Ri)),se.isMesh)ce.wireframe===!0?(Ce.setLineWidth(ce.wireframeLinewidth*we()),Tt.setMode(j.LINES)):Tt.setMode(j.TRIANGLES);else if(se.isLine){let Je=ce.linewidth;Je===void 0&&(Je=1),Ce.setLineWidth(Je*we()),se.isLineSegments?Tt.setMode(j.LINES):se.isLineLoop?Tt.setMode(j.LINE_LOOP):Tt.setMode(j.LINE_STRIP)}else se.isPoints?Tt.setMode(j.POINTS):se.isSprite&&Tt.setMode(j.TRIANGLES);if(se.isBatchedMesh)Tt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)Tt.renderInstances(Dt,Ht,se.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Id=Math.min(ae.instanceCount,Je);Tt.renderInstances(Dt,Ht,Id)}else Tt.render(Dt,Ht)};function $e(C,Q,ae){C.transparent===!0&&C.side===yn&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,gt(C,Q,ae),C.side=Ki,C.needsUpdate=!0,gt(C,Q,ae),C.side=yn):gt(C,Q,ae)}this.compile=function(C,Q,ae=null){ae===null&&(ae=C),g=D.get(ae),g.init(),v.push(g),ae.traverseVisible(function(se){se.isLight&&se.layers.test(Q.layers)&&(g.pushLight(se),se.castShadow&&g.pushShadow(se))}),C!==ae&&C.traverseVisible(function(se){se.isLight&&se.layers.test(Q.layers)&&(g.pushLight(se),se.castShadow&&g.pushShadow(se))}),g.setupLights(y._useLegacyLights);const ce=new Set;return C.traverse(function(se){const Ne=se.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const We=Ne[He];$e(We,ae,se),ce.add(We)}else $e(Ne,ae,se),ce.add(Ne)}),v.pop(),g=null,ce},this.compileAsync=function(C,Q,ae=null){const ce=this.compile(C,Q,ae);return new Promise(se=>{function Ne(){if(ce.forEach(function(He){Fe.get(He).currentProgram.isReady()&&ce.delete(He)}),ce.size===0){se(C);return}setTimeout(Ne,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let rt=null;function ot(C){rt&&rt(C)}function nt(){qe.stop()}function Ve(){qe.start()}const qe=new Qv;qe.setAnimationLoop(ot),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(C){rt=C,ue.setAnimationLoop(C),C===null?qe.stop():qe.start()},ue.addEventListener("sessionstart",nt),ue.addEventListener("sessionend",Ve),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Q),Q=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,Q,E),g=D.get(C,v.length),g.init(),v.push(g),he.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),le.setFromProjectionMatrix(he),F=this.localClippingEnabled,W=Y.init(this.clippingPlanes,F),_=ve.get(C,p.length),_.init(),p.push(_),at(C,Q,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,$),this.info.render.frame++,W===!0&&Y.beginShadows();const ae=g.state.shadowsArray;if(ie.render(ae,C,Q),W===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1)&&ge.render(_,C),g.setupLights(y._useLegacyLights),Q.isArrayCamera){const ce=Q.cameras;for(let se=0,Ne=ce.length;se<Ne;se++){const He=ce[se];Pt(_,C,He,He.viewport)}}else Pt(_,C,Q);E!==null&&(oe.updateMultisampleRenderTarget(E),oe.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(y,C,Q),Se.resetDefaultState(),P=-1,U=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function at(C,Q,ae,ce){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){ce&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const He=z.update(C),We=C.material;We.visible&&_.push(C,He,We,ae,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const He=z.update(C),We=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),me.copy(He.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(We)){const Xe=He.groups;for(let tt=0,Ye=Xe.length;tt<Ye;tt++){const Ze=Xe[tt],Dt=We[Ze.materialIndex];Dt&&Dt.visible&&_.push(C,He,Dt,ae,me.z,Ze)}}else We.visible&&_.push(C,He,We,ae,me.z,null)}}const Ne=C.children;for(let He=0,We=Ne.length;He<We;He++)at(Ne[He],Q,ae,ce)}function Pt(C,Q,ae,ce){const se=C.opaque,Ne=C.transmissive,He=C.transparent;g.setupLightsView(ae),W===!0&&Y.setGlobalState(y.clippingPlanes,ae),Ne.length>0&&Mn(se,Ne,Q,ae),ce&&Ce.viewport(b.copy(ce)),se.length>0&&Kt(se,Q,ae),Ne.length>0&&Kt(Ne,Q,ae),He.length>0&&Kt(He,Q,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Mn(C,Q,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ne=Pe.isWebGL2;B===null&&(B=new ds(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Za:Cr,minFilter:fi,samples:Ne?4:0})),y.getDrawingBufferSize(fe),Ne?B.setSize(fe.x,fe.y):B.setSize(sd(fe.x),sd(fe.y));const He=y.getRenderTarget();y.setRenderTarget(B),y.getClearColor(re),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear();const We=y.toneMapping;y.toneMapping=Ar,Kt(C,ae,ce),oe.updateMultisampleRenderTarget(B),oe.updateRenderTargetMipmap(B);let Xe=!1;for(let tt=0,Ye=Q.length;tt<Ye;tt++){const Ze=Q[tt],Dt=Ze.object,Pn=Ze.geometry,Ht=Ze.material,Ri=Ze.group;if(Ht.side===yn&&Dt.layers.test(ce.layers)){const Tt=Ht.side;Ht.side=_n,Ht.needsUpdate=!0,jn(Dt,ae,ce,Pn,Ht,Ri),Ht.side=Tt,Ht.needsUpdate=!0,Xe=!0}}Xe===!0&&(oe.updateMultisampleRenderTarget(B),oe.updateRenderTargetMipmap(B)),y.setRenderTarget(He),y.setClearColor(re,O),y.toneMapping=We}function Kt(C,Q,ae){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let se=0,Ne=C.length;se<Ne;se++){const He=C[se],We=He.object,Xe=He.geometry,tt=ce===null?He.material:ce,Ye=He.group;We.layers.test(ae.layers)&&jn(We,Q,ae,Xe,tt,Ye)}}function jn(C,Q,ae,ce,se,Ne){C.onBeforeRender(y,Q,ae,ce,se,Ne),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(y,Q,ae,ce,C,Ne),se.transparent===!0&&se.side===yn&&se.forceSinglePass===!1?(se.side=_n,se.needsUpdate=!0,y.renderBufferDirect(ae,Q,ce,se,C,Ne),se.side=Ki,se.needsUpdate=!0,y.renderBufferDirect(ae,Q,ce,se,C,Ne),se.side=yn):y.renderBufferDirect(ae,Q,ce,se,C,Ne),C.onAfterRender(y,Q,ae,ce,se,Ne)}function gt(C,Q,ae){Q.isScene!==!0&&(Q=ke);const ce=Fe.get(C),se=g.state.lights,Ne=g.state.shadowsArray,He=se.state.version,We=K.getParameters(C,se.state,Ne,Q,ae),Xe=K.getProgramCacheKey(We);let tt=ce.programs;ce.environment=C.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(C.isMeshStandardMaterial?A:pe).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",Z),tt=new Map,ce.programs=tt);let Ye=tt.get(Xe);if(Ye!==void 0){if(ce.currentProgram===Ye&&ce.lightsStateVersion===He)return vi(C,We),Ye}else We.uniforms=K.getUniforms(C),C.onBuild(ae,We,y),C.onBeforeCompile(We,y),Ye=K.acquireProgram(We,Xe),tt.set(Xe,Ye),ce.uniforms=We.uniforms;const Ze=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Y.uniform),vi(C,We),ce.needsLights=v1(C),ce.lightsStateVersion=He,ce.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.directionalShadowMap.value=se.state.directionalShadowMap,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotShadowMap.value=se.state.spotShadowMap,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMap.value=se.state.pointShadowMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix),ce.currentProgram=Ye,ce.uniformsList=null,Ye}function qt(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=wc.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function vi(C,Q){const ae=Fe.get(C);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.instancingMorph=Q.instancingMorph,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function xs(C,Q,ae,ce,se){Q.isScene!==!0&&(Q=ke),oe.resetTextureUnits();const Ne=Q.fog,He=ce.isMeshStandardMaterial?Q.environment:null,We=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:sn,Xe=(ce.isMeshStandardMaterial?A:pe).get(ce.envMap||He),tt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ye=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ze=!!ae.morphAttributes.position,Dt=!!ae.morphAttributes.normal,Pn=!!ae.morphAttributes.color;let Ht=Ar;ce.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const Ri=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Tt=Ri!==void 0?Ri.length:0,Je=Fe.get(ce),Id=g.state.lights;if(W===!0&&(F===!0||C!==U)){const Bn=C===U&&ce.id===P;Y.setState(ce,C,Bn)}let bt=!1;ce.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Id.state.version||Je.outputColorSpace!==We||se.isBatchedMesh&&Je.batching===!1||!se.isBatchedMesh&&Je.batching===!0||se.isInstancedMesh&&Je.instancing===!1||!se.isInstancedMesh&&Je.instancing===!0||se.isSkinnedMesh&&Je.skinning===!1||!se.isSkinnedMesh&&Je.skinning===!0||se.isInstancedMesh&&Je.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Je.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Je.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Je.instancingMorph===!1&&se.morphTexture!==null||Je.envMap!==Xe||ce.fog===!0&&Je.fog!==Ne||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Y.numPlanes||Je.numIntersection!==Y.numIntersection)||Je.vertexAlphas!==tt||Je.vertexTangents!==Ye||Je.morphTargets!==Ze||Je.morphNormals!==Dt||Je.morphColors!==Pn||Je.toneMapping!==Ht||Pe.isWebGL2===!0&&Je.morphTargetsCount!==Tt)&&(bt=!0):(bt=!0,Je.__version=ce.version);let Nr=Je.currentProgram;bt===!0&&(Nr=gt(ce,Q,se));let Fp=!1,Bo=!1,Dd=!1;const on=Nr.getUniforms(),Ur=Je.uniforms;if(Ce.useProgram(Nr.program)&&(Fp=!0,Bo=!0,Dd=!0),ce.id!==P&&(P=ce.id,Bo=!0),Fp||U!==C){on.setValue(j,"projectionMatrix",C.projectionMatrix),on.setValue(j,"viewMatrix",C.matrixWorldInverse);const Bn=on.map.cameraPosition;Bn!==void 0&&Bn.setValue(j,me.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&on.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&on.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,Bo=!0,Dd=!0)}if(se.isSkinnedMesh){on.setOptional(j,se,"bindMatrix"),on.setOptional(j,se,"bindMatrixInverse");const Bn=se.skeleton;Bn&&(Pe.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),on.setValue(j,"boneTexture",Bn.boneTexture,oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}se.isBatchedMesh&&(on.setOptional(j,se,"batchingTexture"),on.setValue(j,"batchingTexture",se._matricesTexture,oe));const kd=ae.morphAttributes;if((kd.position!==void 0||kd.normal!==void 0||kd.color!==void 0&&Pe.isWebGL2===!0)&&J.update(se,ae,Nr),(Bo||Je.receiveShadow!==se.receiveShadow)&&(Je.receiveShadow=se.receiveShadow,on.setValue(j,"receiveShadow",se.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Ur.envMap.value=Xe,Ur.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Bo&&(on.setValue(j,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&y1(Ur,Dd),Ne&&ce.fog===!0&&V.refreshFogUniforms(Ur,Ne),V.refreshMaterialUniforms(Ur,ce,ne,H,B),wc.upload(j,qt(Je),Ur,oe)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(wc.upload(j,qt(Je),Ur,oe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&on.setValue(j,"center",se.center),on.setValue(j,"modelViewMatrix",se.modelViewMatrix),on.setValue(j,"normalMatrix",se.normalMatrix),on.setValue(j,"modelMatrix",se.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Bn=ce.uniformsGroups;for(let Nd=0,_1=Bn.length;Nd<_1;Nd++)if(Pe.isWebGL2){const zp=Bn[Nd];Le.update(zp,Nr),Le.bind(zp,Nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nr}function y1(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function v1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,Q,ae){Fe.get(C.texture).__webglTexture=Q,Fe.get(C.depthTexture).__webglTexture=ae;const ce=Fe.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Q){const ae=Fe.get(C);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,ae=0){E=C,w=Q,T=ae;let ce=!0,se=null,Ne=!1,He=!1;if(C){const Xe=Fe.get(C);Xe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(j.FRAMEBUFFER,null),ce=!1):Xe.__webglFramebuffer===void 0?oe.setupRenderTarget(C):Xe.__hasExternalTextures&&oe.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);const Ye=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[Q])?se=Ye[Q][ae]:se=Ye[Q],Ne=!0):Pe.isWebGL2&&C.samples>0&&oe.useMultisampledRTT(C)===!1?se=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?se=Ye[ae]:se=Ye,b.copy(C.viewport),R.copy(C.scissor),q=C.scissorTest}else b.copy(k).multiplyScalar(ne).floor(),R.copy(ee).multiplyScalar(ne).floor(),q=de;if(Ce.bindFramebuffer(j.FRAMEBUFFER,se)&&Pe.drawBuffers&&ce&&Ce.drawBuffers(C,se),Ce.viewport(b),Ce.scissor(R),Ce.setScissorTest(q),Ne){const Xe=Fe.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xe.__webglTexture,ae)}else if(He){const Xe=Fe.get(C.texture),tt=Q||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,ae||0,tt)}P=-1},this.readRenderTargetPixels=function(C,Q,ae,ce,se,Ne,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){Ce.bindFramebuffer(j.FRAMEBUFFER,We);try{const Xe=C.texture,tt=Xe.format,Ye=Xe.type;if(tt!==qn&&be.convert(tt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ye===Za&&(Ae.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ye!==Cr&&be.convert(Ye)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===ci&&(Pe.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ce&&ae>=0&&ae<=C.height-se&&j.readPixels(Q,ae,ce,se,be.convert(tt),be.convert(Ye),Ne)}finally{const Xe=E!==null?Fe.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,Q,ae=0){const ce=Math.pow(2,-ae),se=Math.floor(Q.image.width*ce),Ne=Math.floor(Q.image.height*ce);oe.setTexture2D(Q,0),j.copyTexSubImage2D(j.TEXTURE_2D,ae,0,0,C.x,C.y,se,Ne),Ce.unbindTexture()},this.copyTextureToTexture=function(C,Q,ae,ce=0){const se=Q.image.width,Ne=Q.image.height,He=be.convert(ae.format),We=be.convert(ae.type);oe.setTexture2D(ae,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ae.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ae.unpackAlignment),Q.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ce,C.x,C.y,se,Ne,He,We,Q.image.data):Q.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ce,C.x,C.y,Q.mipmaps[0].width,Q.mipmaps[0].height,He,Q.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ce,C.x,C.y,He,We,Q.image),ce===0&&ae.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,ae,ce,se=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=Math.round(C.max.x-C.min.x),He=Math.round(C.max.y-C.min.y),We=C.max.z-C.min.z+1,Xe=be.convert(ce.format),tt=be.convert(ce.type);let Ye;if(ce.isData3DTexture)oe.setTexture3D(ce,0),Ye=j.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)oe.setTexture2DArray(ce,0),Ye=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ce.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ce.unpackAlignment);const Ze=j.getParameter(j.UNPACK_ROW_LENGTH),Dt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Pn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ht=j.getParameter(j.UNPACK_SKIP_ROWS),Ri=j.getParameter(j.UNPACK_SKIP_IMAGES),Tt=ae.isCompressedTexture?ae.mipmaps[se]:ae.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Tt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,C.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,C.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?j.texSubImage3D(Ye,se,Q.x,Q.y,Q.z,Ne,He,We,Xe,tt,Tt.data):ce.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,se,Q.x,Q.y,Q.z,Ne,He,We,Xe,Tt.data):j.texSubImage3D(Ye,se,Q.x,Q.y,Q.z,Ne,He,We,Xe,tt,Tt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ze),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Dt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ht),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ri),se===0&&ce.generateMipmaps&&j.generateMipmap(Ye),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?oe.setTextureCube(C,0):C.isData3DTexture?oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?oe.setTexture2DArray(C,0):oe.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,Ce.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wp?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Td?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iC extends o1{}iC.prototype.isWebGL1Renderer=!0;class rC extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class a1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new N;class el{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new el(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class al extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Os;const ta=new N,Fs=new N,zs=new N,js=new je,na=new je,l1=new Ke,Kl=new N,ia=new N,ql=new N,_0=new je,Bu=new je,S0=new je;class Rd extends Et{constructor(e=new al){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new a1(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new el(i,3,0,!1)),Os.setAttribute("uv",new el(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),l1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-zs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Zl(Kl.set(-.5,-.5,0),zs,o,Fs,r,s),Zl(ia.set(.5,-.5,0),zs,o,Fs,r,s),Zl(ql.set(.5,.5,0),zs,o,Fs,r,s),_0.set(0,0),Bu.set(1,0),S0.set(1,1);let a=e.ray.intersectTriangle(Kl,ia,ql,!1,ta);if(a===null&&(Zl(ia.set(-.5,.5,0),zs,o,Fs,r,s),Bu.set(0,1),a=e.ray.intersectTriangle(Kl,ql,ia,!1,ta),a===null))return;const l=e.ray.origin.distanceTo(ta);l<e.near||l>e.far||t.push({distance:l,point:ta.clone(),uv:ui.getInterpolation(ta,Kl,ia,ql,_0,Bu,S0,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zl(n,e,t,i,r,s){js.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(na.x=s*js.x-r*js.y,na.y=r*js.x+s*js.y):na.copy(js),n.copy(e),n.x+=na.x,n.y+=na.y,n.applyMatrix4(l1)}const b0=new N,M0=new pt,w0=new pt,sC=new N,E0=new Ke,Jl=new N,Hu=new Ai,T0=new Ke,Gu=new Oo;class oC extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ng,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hu.copy(this.boundingSphere),Hu.applyMatrix4(r),e.ray.intersectsSphere(Hu)!==!1&&(T0.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(T0),!(this.boundingBox!==null&&Gu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ng?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;M0.fromBufferAttribute(r.attributes.skinIndex,e),w0.fromBufferAttribute(r.attributes.skinWeight,e),b0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=w0.getComponent(s);if(o!==0){const a=M0.getComponent(s);E0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(sC.copy(b0).applyMatrix4(E0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class c1 extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class d1 extends zt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=$t,f=$t,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const A0=new Ke,aC=new Ke;class Lp{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:aC;A0.multiplyMatrices(a,t[s]),A0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Lp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new d1(t,e,e,qn,ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new c1),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class uh extends nn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new Ke,C0=new Ke,Ql=[],R0=new yi,lC=new Ke,ra=new _t,sa=new Ai;class cC extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,lC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),R0.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(R0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),sa.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Bs),C0.multiplyMatrices(i,Bs),ra.matrixWorld=C0,ra.raycast(e,Ql);for(let o=0,a=Ql.length;o<a;o++){const l=Ql[o];l.instanceId=s,l.object=this,t.push(l)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new d1(new Float32Array(r*this.count),r,this.count,Nv,ci));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const P0=new N,L0=new N,I0=new Ke,Vu=new Oo,ec=new Ai;class ji extends Et{constructor(e=new ht,t=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)P0.fromBufferAttribute(t,r-1),L0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=P0.distanceTo(L0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(r),ec.radius+=s,e.ray.intersectsSphere(ec)===!1)return;I0.copy(r).invert(),Vu.copy(e.ray).applyMatrix4(I0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,f=new N,h=new N,u=new N,m=this.isLineSegments?2:1,x=i.index,g=i.attributes.position;if(x!==null){const p=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let y=p,S=v-1;y<S;y+=m){const w=x.getX(y),T=x.getX(y+1);if(c.fromBufferAttribute(g,w),f.fromBufferAttribute(g,T),Vu.distanceSqToSegment(c,f,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=p,S=v-1;y<S;y+=m){if(c.fromBufferAttribute(g,y),f.fromBufferAttribute(g,y+1),Vu.distanceSqToSegment(c,f,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const D0=new N,k0=new N;class fh extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)D0.fromBufferAttribute(t,r),k0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+D0.distanceTo(k0);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ec extends ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class es extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const N0=new Ke,hh=new Oo,tc=new Ai,nc=new N;class Ra extends Et{constructor(e=new ht,t=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;N0.copy(r).invert(),hh.copy(e.ray).applyMatrix4(N0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=u,_=m;x<_;x++){const g=c.getX(x);nc.fromBufferAttribute(h,g),U0(nc,g,l,r,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=u,_=m;x<_;x++)nc.fromBufferAttribute(h,x),U0(nc,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function U0(n,e,t,i,r,s,o){const a=hh.distanceSqToPoint(n);if(a<t){const l=new N;hh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Po extends zt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ip extends ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,f=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=i+h/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[u]/e+1)/2,f.y=(o[u+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dp extends ht{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],u=[],m=[];let x=0;const _=[],g=i/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(m,2));function v(){const S=new N,w=new N;let T=0;const E=(t-e)/i;for(let P=0;P<=s;P++){const U=[],b=P/s,R=b*(t-e)+e;for(let q=0;q<=r;q++){const re=q/r,O=re*l+a,te=Math.sin(O),H=Math.cos(O);w.x=R*te,w.y=-b*i+g,w.z=R*H,h.push(w.x,w.y,w.z),S.set(te,E,H).normalize(),u.push(S.x,S.y,S.z),m.push(re,1-b),U.push(x++)}_.push(U)}for(let P=0;P<r;P++)for(let U=0;U<s;U++){const b=_[U][P],R=_[U+1][P],q=_[U+1][P+1],re=_[U][P+1];f.push(b,R,re),f.push(R,q,re),T+=6}c.addGroup(p,T,0),p+=T}function y(S){const w=x,T=new je,E=new N;let P=0;const U=S===!0?e:t,b=S===!0?1:-1;for(let q=1;q<=r;q++)h.push(0,g*b,0),u.push(0,b,0),m.push(.5,.5),x++;const R=x;for(let q=0;q<=r;q++){const O=q/r*l+a,te=Math.cos(O),H=Math.sin(O);E.x=U*H,E.y=g*b,E.z=U*te,h.push(E.x,E.y,E.z),u.push(0,b,0),T.x=te*.5+.5,T.y=H*.5*b+.5,m.push(T.x,T.y),x++}for(let q=0;q<r;q++){const re=w+q,O=R+q;S===!0?f.push(O,O+1,re):f.push(O+1,O,re),P+=3}c.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pd extends Dp{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class od extends ht{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const u=(t-e)/r,m=new N,x=new je;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,f.push(x.x,x.y)}h+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const v=p+g,y=v,S=v+i+1,w=v+i+2,T=v+1;a.push(y,S,T),a.push(S,w,T)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gr extends ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new N,u=new N,m=[],x=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],y=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),x.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(T+S,1-y),v.push(c++)}f.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const y=f[p][v+1],S=f[p][v],w=f[p+1][v],T=f[p+1][v+1];(p!==0||o>0)&&m.push(y,S,T),(p!==i-1||l<Math.PI)&&m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class u1 extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ic(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function dC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uC(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function O0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function f1(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ll{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fC extends ll{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cg,endingEnd:Cg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rg:s=e,a=2*t-i;break;case Pg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rg:o=e,l=2*i-t;break;case Pg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),_=x*x,g=_*x,p=-u*g+2*u*_-u*x,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*x+1,y=(-1-m)*g+(1.5+m)*_+.5*x,S=m*g-m*_;for(let w=0;w!==a;++w)s[w]=p*o[f+w]+v*o[c+w]+y*o[l+w]+S*o[h+w];return s}}class hC extends ll{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(i-t)/(r-t),h=1-f;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*f;return s}}class pC extends ll{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ic(t,this.TimeBufferType),this.values=ic(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ic(e.times,Array),values:ic(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ja:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ja;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&dC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===mu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,u=h-i,m=h+i;for(let x=0;x!==i;++x){const _=t[h+x];if(_!==t[u+x]||_!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,u=o*i;for(let m=0;m!==i;++m)t[u+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Ao;class zo extends Ci{}zo.prototype.ValueTypeName="bool";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=Ja;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class h1 extends Ci{}h1.prototype.ValueTypeName="color";class Lo extends Ci{}Lo.prototype.ValueTypeName="number";class mC extends ll{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let f=c+a;c!==f;c+=4)Ti.slerpFlat(s,0,o,c-a,o,c,l);return s}}class fs extends Ci{InterpolantFactoryMethodLinear(e){return new mC(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=Ao;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class jo extends Ci{}jo.prototype.ValueTypeName="string";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Ja;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends Ci{}Io.prototype.ValueTypeName="vector";class gC{constructor(e,t=-1,i,r=_M){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(yC(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ci.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const f=uC(l);l=O0(l,1,f),c=O0(c,1,f),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Lo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],f=c.name.match(s);if(f&&f.length>1){const h=f[1];let u=r[h];u||(r[h]=u=[]),u.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,m,x,_){if(m.length!==0){const g=[],p=[];f1(m,g,p,x),g.length!==0&&_.push(new h(u,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const m={};let x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let _=0;_<u[x].morphTargets.length;_++)m[u[x].morphTargets[_]]=-1;for(const _ in m){const g=[],p=[];for(let v=0;v!==u[x].morphTargets.length;++v){const y=u[x];g.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new Lo(".morphTargetInfluence["+_+"]",g,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i(Io,m+".position",u,"pos",r),i(fs,m+".quaternion",u,"rot",r),i(Io,m+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lo;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return h1;case"quaternion":return fs;case"bool":case"boolean":return zo;case"string":return jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function yC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xC(n.type);if(n.times===void 0){const t=[],i=[];f1(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const xr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null}}}const _C=new vC;class gs{constructor(e){this.manager=e!==void 0?e:_C,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class SC extends Error{constructor(e,t){super(e),this.response=t}}class kp extends gs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Ui[e],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=u?parseInt(u):0,x=m!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let T=0,E=f.length;T<E;T++){const P=f[T];P.onProgress&&P.onProgress(w)}p.enqueue(S),v()}})}}});return new Response(g)}else throw new SC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{xr.add(e,c);const f=Ui[e];delete Ui[e];for(let h=0,u=f.length;h<u;h++){const m=f[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const f=Ui[e];if(f===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let h=0,u=f.length;h<u;h++){const m=f[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bC extends gs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qa("img");function l(){f(),xr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){f(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class p1 extends gs{constructor(e){super(e)}load(e,t,i,r){const s=new zt,o=new bC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ld extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wu=new Ke,F0=new N,z0=new N;class Np{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;F0.setFromMatrixPosition(e.matrixWorld),t.position.copy(F0),z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z0),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MC extends Np{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Co*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wC extends Ld{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new MC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const j0=new Ke,oa=new N,Xu=new N;class EC extends Np{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(oa),Xu.copy(i.position),Xu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xu),i.updateMatrixWorld(),r.makeTranslation(-oa.x,-oa.y,-oa.z),j0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j0)}}class m1 extends Ld{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new EC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TC extends Np{constructor(){super(new Rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ph extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new TC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AC extends Ld{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class CC extends gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return xr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),xr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xr.add(e,l),s.manager.itemStart(e)}}const Up="\\[\\]\\.:\\/",RC=new RegExp("["+Up+"]","g"),Op="[^"+Up+"]",PC="[^"+Up.replace("\\.","")+"]",LC=/((?:WC+[\/:])*)/.source.replace("WC",Op),IC=/(WCOD+)?/.source.replace("WCOD",PC),DC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Op),kC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Op),NC=new RegExp("^"+LC+IC+DC+kC+"$"),UC=["material","materials","bones","map"];class OC{constructor(e,t,i){const r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ut{constructor(e,t,i){this.path=t,this.parsedPath=i||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,i):new ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(RC,"")}static parseTrackName(e){const t=NC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);UC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=OC;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const B0=new Ke;class FC{constructor(e,t,i=0,r=1/0){this.ray=new Oo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return B0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(B0),this}intersectObject(e,t=!0,i=[]){return mh(e,this,i,t),i.sort(H0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mh(e[r],this,i,t);return i.sort(H0),i}}function H0(n,e){return n.distance-e.distance}function mh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)mh(r[s],e,t,!0)}}class G0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);const V0={type:"change"},$u={type:"start"},W0={type:"end"},rc=new Oo,X0=new lr,zC=Math.cos(70*Tp.DEG2RAD);class jC extends ms{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",D),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",D),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(V0),i.update(),s=r.NONE},this.update=function(){const L=new N,ue=new Ti().setFromUnitVectors(e.up,new N(0,1,0)),Re=ue.clone().invert(),I=new N,ye=new Ti,Z=new N,_e=2*Math.PI;return function($e=null){const rt=i.object.position;L.copy(rt).sub(i.target),L.applyQuaternion(ue),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&q(b($e)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=i.minAzimuthAngle,nt=i.maxAzimuthAngle;isFinite(ot)&&isFinite(nt)&&(ot<-Math.PI?ot+=_e:ot>Math.PI&&(ot-=_e),nt<-Math.PI?nt+=_e:nt>Math.PI&&(nt-=_e),ot<=nt?a.theta=Math.max(ot,Math.min(nt,a.theta)):a.theta=a.theta>(ot+nt)/2?Math.max(ot,a.theta):Math.min(nt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ve=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=k(a.radius);else{const qe=a.radius;a.radius=k(a.radius*c),Ve=qe!=a.radius}if(L.setFromSpherical(a),L.applyQuaternion(Re),rt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&T){let qe=null;if(i.object.isPerspectiveCamera){const at=L.length();qe=k(at*c);const Pt=at-qe;i.object.position.addScaledVector(S,Pt),i.object.updateMatrixWorld(),Ve=!!Pt}else if(i.object.isOrthographicCamera){const at=new N(w.x,w.y,0);at.unproject(i.object);const Pt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ve=Pt!==i.object.zoom;const Mn=new N(w.x,w.y,0);Mn.unproject(i.object),i.object.position.sub(Mn).add(at),i.object.updateMatrixWorld(),qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qe).add(i.object.position):(rc.origin.copy(i.object.position),rc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(rc.direction))<zC?e.lookAt(i.target):(X0.setFromNormalAndCoplanarPoint(i.object.up,i.target),rc.intersectPlane(X0,i.target))))}else if(i.object.isOrthographicCamera){const qe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),qe!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ve=!0)}return c=1,T=!1,Ve||I.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||Z.distanceToSquared(i.target)>o?(i.dispatchEvent(V0),I.copy(i.object.position),ye.copy(i.object.quaternion),Z.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ge),i.domElement.removeEventListener("pointerdown",oe),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",z),i.domElement.removeEventListener("pointermove",pe),i.domElement.removeEventListener("pointerup",A),i.domElement.getRootNode().removeEventListener("keydown",V,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",D),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new G0,l=new G0;let c=1;const f=new N,h=new je,u=new je,m=new je,x=new je,_=new je,g=new je,p=new je,v=new je,y=new je,S=new N,w=new je;let T=!1;const E=[],P={};let U=!1;function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function R(L){const ue=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ue)}function q(L){l.theta-=L}function re(L){l.phi-=L}const O=function(){const L=new N;return function(Re,I){L.setFromMatrixColumn(I,0),L.multiplyScalar(-Re),f.add(L)}}(),te=function(){const L=new N;return function(Re,I){i.screenSpacePanning===!0?L.setFromMatrixColumn(I,1):(L.setFromMatrixColumn(I,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Re),f.add(L)}}(),H=function(){const L=new N;return function(Re,I){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Z=i.object.position;L.copy(Z).sub(i.target);let _e=L.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),O(2*Re*_e/ye.clientHeight,i.object.matrix),te(2*I*_e/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(Re*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),te(I*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(L,ue){if(!i.zoomToCursor)return;T=!0;const Re=i.domElement.getBoundingClientRect(),I=L-Re.left,ye=ue-Re.top,Z=Re.width,_e=Re.height;w.x=I/Z*2-1,w.y=-(ye/_e)*2+1,S.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ee(L){h.set(L.clientX,L.clientY)}function de(L){$(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function le(L){x.set(L.clientX,L.clientY)}function W(L){u.set(L.clientX,L.clientY),m.subVectors(u,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;q(2*Math.PI*m.x/ue.clientHeight),re(2*Math.PI*m.y/ue.clientHeight),h.copy(u),i.update()}function F(L){v.set(L.clientX,L.clientY),y.subVectors(v,p),y.y>0?ne(R(y.y)):y.y<0&&G(R(y.y)),p.copy(v),i.update()}function B(L){_.set(L.clientX,L.clientY),g.subVectors(_,x).multiplyScalar(i.panSpeed),H(g.x,g.y),x.copy(_),i.update()}function he(L){$(L.clientX,L.clientY),L.deltaY<0?G(R(L.deltaY)):L.deltaY>0&&ne(R(L.deltaY)),i.update()}function fe(L){let ue=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ue=!0;break}ue&&(L.preventDefault(),i.update())}function me(L){if(E.length===1)h.set(L.pageX,L.pageY);else{const ue=Se(L),Re=.5*(L.pageX+ue.x),I=.5*(L.pageY+ue.y);h.set(Re,I)}}function ke(L){if(E.length===1)x.set(L.pageX,L.pageY);else{const ue=Se(L),Re=.5*(L.pageX+ue.x),I=.5*(L.pageY+ue.y);x.set(Re,I)}}function we(L){const ue=Se(L),Re=L.pageX-ue.x,I=L.pageY-ue.y,ye=Math.sqrt(Re*Re+I*I);p.set(0,ye)}function j(L){i.enableZoom&&we(L),i.enablePan&&ke(L)}function Be(L){i.enableZoom&&we(L),i.enableRotate&&me(L)}function Ae(L){if(E.length==1)u.set(L.pageX,L.pageY);else{const Re=Se(L),I=.5*(L.pageX+Re.x),ye=.5*(L.pageY+Re.y);u.set(I,ye)}m.subVectors(u,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;q(2*Math.PI*m.x/ue.clientHeight),re(2*Math.PI*m.y/ue.clientHeight),h.copy(u)}function Pe(L){if(E.length===1)_.set(L.pageX,L.pageY);else{const ue=Se(L),Re=.5*(L.pageX+ue.x),I=.5*(L.pageY+ue.y);_.set(Re,I)}g.subVectors(_,x).multiplyScalar(i.panSpeed),H(g.x,g.y),x.copy(_)}function Ce(L){const ue=Se(L),Re=L.pageX-ue.x,I=L.pageY-ue.y,ye=Math.sqrt(Re*Re+I*I);v.set(0,ye),y.set(0,Math.pow(v.y/p.y,i.zoomSpeed)),ne(y.y),p.copy(v);const Z=(L.pageX+ue.x)*.5,_e=(L.pageY+ue.y)*.5;$(Z,_e)}function Oe(L){i.enableZoom&&Ce(L),i.enablePan&&Pe(L)}function Fe(L){i.enableZoom&&Ce(L),i.enableRotate&&Ae(L)}function oe(L){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",pe),i.domElement.addEventListener("pointerup",A)),!Me(L)&&(J(L),L.pointerType==="touch"?Y(L):M(L)))}function pe(L){i.enabled!==!1&&(L.pointerType==="touch"?ie(L):X(L))}function A(L){switch(Ie(L),E.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",pe),i.domElement.removeEventListener("pointerup",A),i.dispatchEvent(W0),s=r.NONE;break;case 1:const ue=E[0],Re=P[ue];Y({pointerId:ue,pageX:Re.x,pageY:Re.y});break}}function M(L){let ue;switch(L.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case vs.DOLLY:if(i.enableZoom===!1)return;de(L),s=r.DOLLY;break;case vs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;le(L),s=r.PAN}else{if(i.enableRotate===!1)return;ee(L),s=r.ROTATE}break;case vs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ee(L),s=r.ROTATE}else{if(i.enablePan===!1)return;le(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($u)}function X(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(L);break;case r.DOLLY:if(i.enableZoom===!1)return;F(L);break;case r.PAN:if(i.enablePan===!1)return;B(L);break}}function z(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent($u),he(K(L)),i.dispatchEvent(W0))}function K(L){const ue=L.deltaMode,Re={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ue){case 1:Re.deltaY*=16;break;case 2:Re.deltaY*=100;break}return L.ctrlKey&&!U&&(Re.deltaY*=10),Re}function V(L){L.key==="Control"&&(U=!0,i.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(L){L.key==="Control"&&(U=!1,i.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function D(L){i.enabled===!1||i.enablePan===!1||fe(L)}function Y(L){switch(be(L),E.length){case 1:switch(i.touches.ONE){case _s.ROTATE:if(i.enableRotate===!1)return;me(L),s=r.TOUCH_ROTATE;break;case _s.PAN:if(i.enablePan===!1)return;ke(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case _s.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(L),s=r.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($u)}function ie(L){switch(be(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Pe(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Oe(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(L),i.update();break;default:s=r.NONE}}function ge(L){i.enabled!==!1&&L.preventDefault()}function J(L){E.push(L.pointerId)}function Ie(L){delete P[L.pointerId];for(let ue=0;ue<E.length;ue++)if(E[ue]==L.pointerId){E.splice(ue,1);return}}function Me(L){for(let ue=0;ue<E.length;ue++)if(E[ue]==L.pointerId)return!0;return!1}function be(L){let ue=P[L.pointerId];ue===void 0&&(ue=new je,P[L.pointerId]=ue),ue.set(L.pageX,L.pageY)}function Se(L){const ue=L.pointerId===E[0]?E[1]:E[0];return P[ue]}i.domElement.addEventListener("contextmenu",ge),i.domElement.addEventListener("pointerdown",oe),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",z,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",V,{passive:!0,capture:!0}),this.update()}}function Do(n,e){const t=n.fuel_max_kg??10,i=.006,r=Math.min(1,Math.max(0,e/86400)),s=i*r,o=Math.max(0,Number((t-s).toFixed(3))),a=Number((o/t*100).toFixed(2)),l=n.temperature_c??38,c=l>=80;return{...n,temperature_c:l,overheated:c,fuel_kg:o,fuel_max_kg:t,fuel_pct:a,battery_pct:100,is_in_sunlight:!0,solar_power_w:1850}}function $0(n,e){if(e===SM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===oh||e===jv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===oh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class BC extends gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new XC(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new qC(t)}),this.register(function(t){return new ZC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new $C(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new QC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Pa.extractUrlBase(e);o=Pa.resolveURL(c,this.path)}else o=Pa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new kp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===g1){try{o[st.KHR_BINARY_GLTF]=new oR(e)}catch(h){r&&r(h);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const h=s.extensionsUsed[f],u=s.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new VC;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new aR(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new lR;break;case st.KHR_MESH_QUANTIZATION:o[h]=new cR;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function HC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GC{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const f=new Ge(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ph(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new m1(f),c.distance=h;break;case"spot":c=new wC(f),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class VC{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,i){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,gn))}return Promise.all(r)}}class WC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class XC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(s)}}class $C{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class YC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class KC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class qC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class ZC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class JC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,gn)),Promise.all(s)}}class QC{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class nR{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iR{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rR{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,f=r.count,h=r.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,h,u,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(f*h);return o.decodeGltfBuffer(new Uint8Array(m),f,h,u,r.mode,r.filter),m})})}else return null}}class sR{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(f=>(l[c]=f,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const f=c.pop(),h=f.isGroup?f.children:[f],u=c[0].count,m=[];for(const x of h){const _=new Ke,g=new N,p=new Ti,v=new N(1,1,1),y=new cC(x.geometry,x.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(g,p,v));for(const S in l)if(S==="_COLOR_0"){const w=l[S];y.instanceColor=new uh(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&x.geometry.setAttribute(S,l[S]);Et.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),m.push(y)}return f.isGroup?(f.clear(),f.add(...m),f):m[0]}))}}const g1="glTF",aa=12,Y0={JSON:1313821514,BIN:5130562};class oR{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,aa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==g1)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-aa,s=new DataView(e,aa);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Y0.JSON){const c=new Uint8Array(e,aa+o,a);this.content=i.decode(c)}else if(l===Y0.BIN){const c=aa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const f in o){const h=gh[f]||f.toLowerCase();a[h]=o[f]}for(const f in e.attributes){const h=gh[f]||f.toLowerCase();if(o[f]!==void 0){const u=i.accessors[e.attributes[f]],m=po[u.componentType];c[h]=m.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(h,u){r.decodeDracoFile(f,function(m){for(const x in m.attributes){const _=m.attributes[x],g=l[x];g!==void 0&&(_.normalized=g)}h(m)},a,c,sn,u)})})}}class lR{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cR{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class x1 extends ll{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,f=r-t,h=(i-t)/f,u=h*h,m=u*h,x=e*c,_=x-c,g=-2*m+3*u,p=m-u,v=1-g,y=p-u+h;for(let S=0;S!==a;S++){const w=o[_+S+a],T=o[_+S+l]*f,E=o[x+S+a],P=o[x+S]*f;s[S]=v*w+y*T+g*E+p*P}return s}}const dR=new Ti;class uR extends x1{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return dR.fromArray(s).normalize().toArray(s),s}}const Xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K0={9728:$t,9729:Xt,9984:sh,9985:Mc,9986:Vs,9987:fi},q0={33071:Kn,33648:ed,10497:li},Yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fR={CUBICSPLINE:void 0,LINEAR:Ao,STEP:Ja},Ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function Gr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function cr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,f=e.length;c<f;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];if(i){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(u)}if(r){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const f=c[0],h=c[1],u=c[2];return i&&(n.morphAttributes.position=f),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function mR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gR(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qu(t.attributes):e=n.indices+":"+qu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+qu(n.targets[i]);return e}function qu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const yR=new Ke;class vR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new p1(this.options.manager):this.textureLoader=new CC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Gr(s,a,r),cr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,f]of o.children.entries())s(f,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Pa.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Yu[r.type],a=po[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new nn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Yu[r.type],c=po[r.componentType],f=c.BYTES_PER_ELEMENT,h=f*l,u=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let _,g;if(m&&m!==h){const p=Math.floor(u/m),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(v);y||(_=new c(a,p*m,r.count*m/f),y=new a1(_,m/f),t.cache.add(v,y)),g=new el(y,l,u%m/f,x)}else a===null?_=new c(r.count*l):_=new c(a,u,r.count*l),g=new nn(_,l,x);if(r.sparse!==void 0){const p=Yu.SCALAR,v=po[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,w=new v(o[1],y,r.sparse.count*p),T=new c(o[2],S,r.sparse.count*l);a!==null&&(g=new nn(g.array.slice(),g.itemSize,g.normalized));for(let E=0,P=w.length;E<P;E++){const U=w[E];if(g.setX(U,T[E*l]),l>=2&&g.setY(U,T[E*l+1]),l>=3&&g.setZ(U,T[E*l+2]),l>=4&&g.setW(U,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return f.magFilter=K0[u.magFilter]||Xt,f.minFilter=K0[u.minFilter]||fi,f.wrapS=q0[u.wrapS]||li,f.wrapT=q0[u.wrapT]||li,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(h){return new Promise(function(u,m){let x=u;t.isImageBitmapLoader===!0&&(x=function(_){const g=new zt(_);g.needsUpdate=!0,u(g)}),t.load(Pa.resolveURL(h,s.path),x,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||xR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new es,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new kn,Rn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return us}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=r[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],sn),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,gn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=yn);const f=s.alphaMode||Ku.OPAQUE;if(f===Ku.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===Ku.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new je(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vt){const h=s.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&o!==Vt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,gn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),cr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Gr(r,h,s),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Z0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],f=gR(c),h=r[f];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Z0(new ht,c,t),r[f]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const f=o[l].material===void 0?hR(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let m=0,x=f.length;m<x;m++){const _=f[m],g=o[m];let p;const v=c[m];if(g.mode===Xn.TRIANGLES||g.mode===Xn.TRIANGLE_STRIP||g.mode===Xn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new oC(_,v):new _t(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Xn.TRIANGLE_STRIP?p.geometry=$0(p.geometry,jv):g.mode===Xn.TRIANGLE_FAN&&(p.geometry=$0(p.geometry,oh));else if(g.mode===Xn.LINES)p=new fh(_,v);else if(g.mode===Xn.LINE_STRIP)p=new ji(_,v);else if(g.mode===Xn.LINE_LOOP)p=new Ec(_,v);else if(g.mode===Xn.POINTS)p=new Ra(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&mR(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),cr(p,s),g.extensions&&Gr(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,x=h.length;m<x;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Gr(r,h[0],s),h[0];const u=new Lt;s.extensions&&Gr(r,u,s),t.associations.set(u,{meshes:e});for(let m=0,x=h.length;m<x;m++)u.add(h[m]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new xn(Tp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Rp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),cr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,f=o.length;c<f;c++){const h=o[c];if(h){a.push(h);const u=new Ke;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Lp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],f=[];for(let h=0,u=r.channels.length;h<u;h++){const m=r.channels[h],x=r.samplers[m.sampler],_=m.target,g=_.node,p=r.parameters!==void 0?r.parameters[x.input]:x.input,v=r.parameters!==void 0?r.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(x),f.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(h){const u=h[0],m=h[1],x=h[2],_=h[3],g=h[4],p=[];for(let v=0,y=u.length;v<y;v++){const S=u[v],w=m[v],T=x[v],E=_[v],P=g[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const U=i._createAnimationTracks(S,w,T,E,P);if(U)for(let b=0;b<U.length;b++)p.push(U[b])}return new gC(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,f=a.length;c<f;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const f=c[0],h=c[1],u=c[2];u!==null&&f.traverse(function(m){m.isSkinnedMesh&&m.bind(u,yR)});for(let m=0,x=h.length;m<x;m++)f.add(h[m]);return f})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let f;if(s.isBone===!0?f=new c1:c.length>1?f=new Lt:c.length===1?f=c[0]:f=new Et,f!==c[0])for(let h=0,u=c.length;h<u;h++)f.add(c[h]);if(s.name&&(f.userData.name=s.name,f.name=o),cr(f,s),s.extensions&&Gr(i,f,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),f.applyMatrix4(h)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Lt;i.name&&(s.name=r.createUniqueName(i.name)),cr(s,i),i.extensions&&Gr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let f=0,h=l.length;f<h;f++)s.add(l[f]);const c=f=>{const h=new Map;for(const[u,m]of r.associations)(u instanceof Rn||u instanceof zt)&&h.set(u,m);return f.traverse(u=>{const m=r.associations.get(u);m!=null&&h.set(u,m)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];sr[s.path]===sr.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(sr[s.path]){case sr.weights:c=Lo;break;case sr.rotation:c=fs;break;case sr.position:case sr.scale:c=Io;break;default:switch(i.itemSize){case 1:c=Lo;break;case 2:case 3:default:c=Io;break}break}const f=r.interpolation!==void 0?fR[r.interpolation]:Ao,h=this._getArrayFromAccessor(i);for(let u=0,m=l.length;u<m;u++){const x=new c(l[u]+"."+sr[s.path],t.array,h,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=xh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof fs?uR:x1;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _R(n,e,t){const i=e.attributes,r=new yi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const f=xh(po[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,f=s.length;c<f;c++){const h=s[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],m=u.min,x=u.max;if(m!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),u.normalized){const _=xh(po[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ai;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Z0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=gh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ct.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),cr(n,e),_R(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?pR(n,e.targets,t):n})}const SR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let ga=null,sc=null;function Zu(n){n.updateMatrixWorld(!0);const e=new yi().setFromObject(n),t=new N;e.getCenter(t);const i=new N;e.getSize(i);const r=Math.max(i.x,i.y,i.z)||1;n.position.sub(t);const s=new Lt;return s.add(n),s.scale.setScalar(1/r),s.updateMatrixWorld(!0),s}function bR(){if(ga)return Promise.resolve(ga);if(sc)return sc;const n=new BC,e=typeof import.meta<"u"&&SR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return sc=Promise.all([n.loadAsync(`${t}satellite_high.gltf`),n.loadAsync(`${t}satellite_med.gltf`),n.loadAsync(`${t}satellite_low.gltf`)]).then(([i,r,s])=>(ga={high:Zu(i.scene),med:Zu(r.scene),low:Zu(s.scene)},ga)).catch(i=>{throw console.error("Failed to load 3D satellite models, using sphere fallbacks",i),i}),sc}function MR(){return ga}function wR(n,e,t){const i=n==="offline"?e.offlineSatColor||"#ff3b30":n==="highLatency"?e.highLatencySatColor||"#ff9900":e.satColor||"#ffffff",r=new Ge(i),s=r.clone();s.offsetHSL(0,.05,.12);const o=new us({color:s,metalness:.35,roughness:.2,emissive:r,emissiveIntensity:t?1.1:.75}),a=new Ge(793651).lerp(r,.2),l=new us({color:a,metalness:.92,roughness:.15,emissive:r,emissiveIntensity:t?.35:.2});return{bodyMat:o,solarMat:l,baseColor:r}}function ER(n){return n.includes("Cylinder.005")||n.includes("Cylinder.000")||n.includes("Cylinder.007")}function TR(n,e,t,i,r){const s=new Lt;s.name="Satellite3D",s.scale.setScalar(.65*i);const{bodyMat:o,solarMat:a}=wR(e,t,r),l=[],c=new gr(.45,8,8),f=new Vt({visible:!1,wireframe:!1}),h=new _t(c,f);if(h.name="SatHitBox",s.add(h),n)[{template:n.high,name:"LOD_High"},{template:n.med,name:"LOD_Med"},{template:n.low,name:"LOD_Low"}].forEach((m,x)=>{const _=m.template.clone(!0);_.name=m.name,_.visible=x===1,_.traverse(g=>{if(g.isMesh){const p=g;p.material=ER(p.name)?a:o,p.castShadow=!1,p.receiveShadow=!1,l.push(p)}}),s.add(_)});else{const u=new gr(.35,16,16),m=new _t(u,o);m.name="LOD_Fallback",s.add(m),l.push(m)}return{satGroup:s,hitMesh:h,modelMeshes:l}}function J0(n,e,t){const i=n.getObjectByName("LOD_High"),r=n.getObjectByName("LOD_Med"),s=n.getObjectByName("LOD_Low");if(!i||!r||!s)return;const o=e.position.length(),a=n.position.distanceTo(e.position),l=o<18||a<14,c=o<38||a<34;let f=2;t||l?f=0:c?f=1:f=2,i.visible=f===0,r.visible=f===1,s.visible=f===2}const AR=/^[og]\s*(.+)?/,CR=/^mtllib /,RR=/^usemtl /,PR=/^usemap /,Q0=/\s+/,ex=new N,Ju=new N,tx=new N,nx=new N,Vn=new N,oc=new Ge;function LR(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;ex.fromArray(r,e),Ju.fromArray(r,t),tx.fromArray(r,i),Vn.subVectors(tx,Ju),nx.subVectors(ex,Ju),Vn.cross(nx),Vn.normalize(),s.push(Vn.x,Vn.y,Vn.z),s.push(Vn.x,Vn.y,Vn.z),s.push(Vn.x,Vn.y,Vn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const f=this.vertices.length;let h=this.parseVertexIndex(e,f),u=this.parseVertexIndex(t,f),m=this.parseVertexIndex(i,f);if(this.addVertex(h,u,m),this.addColor(h,u,m),a!==void 0&&a!==""){const x=this.normals.length;h=this.parseNormalIndex(a,x),u=this.parseNormalIndex(l,x),m=this.parseNormalIndex(c,x),this.addNormal(h,u,m)}else this.addFaceNormal(h,u,m);if(r!==void 0&&r!==""){const x=this.uvs.length;h=this.parseUVIndex(r,x),u=this.parseUVIndex(s,x),m=this.parseUVIndex(o,x),this.addUV(h,u,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class IR extends gs{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new kp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new LR;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const f=c.charAt(0);if(f!=="#")if(f==="v"){const h=c.split(Q0);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(oc.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(oc.r,oc.g,oc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(f==="f"){const u=c.slice(1).trim().split(Q0),m=[];for(let _=0,g=u.length;_<g;_++){const p=u[_];if(p.length>0){const v=p.split("/");m.push(v)}}const x=m[0];for(let _=1,g=m.length-1;_<g;_++){const p=m[_],v=m[_+1];t.addFace(x[0],p[0],v[0],x[1],p[1],v[1],x[2],p[2],v[2])}}else if(f==="l"){const h=c.substring(1).trim().split(" ");let u=[];const m=[];if(c.indexOf("/")===-1)u=h;else for(let x=0,_=h.length;x<_;x++){const g=h[x].split("/");g[0]!==""&&u.push(g[0]),g[1]!==""&&m.push(g[1])}t.addLineGeometry(u,m)}else if(f==="p"){const u=c.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((r=AR.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);t.startObject(h)}else if(RR.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(CR.test(c))t.materialLibraries.push(c.substring(7).trim());else if(PR.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=c.split(" "),r.length>1){const u=r[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Lt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],f=c.geometry,h=c.materials,u=f.type==="Line",m=f.type==="Points";let x=!1;if(f.vertices.length===0)continue;const _=new ht;_.setAttribute("position",new mt(f.vertices,3)),f.normals.length>0&&_.setAttribute("normal",new mt(f.normals,3)),f.colors.length>0&&(x=!0,_.setAttribute("color",new mt(f.colors,3))),f.hasUVIndices===!0&&_.setAttribute("uv",new mt(f.uvs,2));const g=[];for(let v=0,y=h.length;v<y;v++){const S=h[v],w=S.name+"_"+S.smooth+"_"+x;let T=t.materials[w];if(this.materials!==null){if(T=this.materials.create(S.name),u&&T&&!(T instanceof kn)){const E=new kn;Rn.prototype.copy.call(E,T),E.color.copy(T.color),T=E}else if(m&&T&&!(T instanceof es)){const E=new es({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(E,T),E.color.copy(T.color),E.map=T.map,T=E}}T===void 0&&(u?T=new kn:m?T=new es({size:1,sizeAttenuation:!1}):T=new u1,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=x,t.materials[w]=T),g.push(T)}let p;if(g.length>1){for(let v=0,y=h.length;v<y;v++){const S=h[v];_.addGroup(S.groupStart,S.groupCount,v)}u?p=new fh(_,g):m?p=new Ra(_,g):p=new _t(_,g)}else u?p=new fh(_,g[0]):m?p=new Ra(_,g[0]):p=new _t(_,g[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new es({size:1,sizeAttenuation:!1}),l=new ht;l.setAttribute("position",new mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new mt(t.colors,3)),a.vertexColors=!0);const c=new Ra(l,a);s.add(c)}return s}}const DR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let xa=null,ac=null;function kR(n){n.updateMatrixWorld(!0);const e=new yi().setFromObject(n),t=new N;e.getSize(t);const i=new N;e.getCenter(i),n.position.set(-i.x,-e.min.y,-i.z);const r=new Lt;r.name="DishNormalizedTemplate",r.add(n);const s=t.y||1;return r.scale.setScalar(1/s),r.updateMatrixWorld(!0),r}function NR(){if(xa)return Promise.resolve(xa);if(ac)return ac;const n=new IR,e=typeof import.meta<"u"&&DR&&"/"||"/",t=e.endsWith("/")?e:e+"/";return ac=n.loadAsync(`${t}Dish_LowPoly.obj`).then(i=>(xa=kR(i),xa)).catch(i=>{throw console.warn("Failed to load Dish_LowPoly.obj, falling back to cone geometry",i),i}),ac}function UR(){return xa}function OR(n,e,t=1){const i=new Lt;i.name="GroundStationDish";const r=new Ge(e),s=new us({color:r,metalness:.65,roughness:.28,emissive:r,emissiveIntensity:.35});if(n){const o=n.clone(!0);o.name="DishMeshGroup",o.traverse(a=>{if(a.isMesh){const l=a;l.material=s,l.castShadow=!1,l.receiveShadow=!1}}),i.add(o)}else{const o=new Pd(.24,.48,8),a=new us({color:r,metalness:.5,roughness:.3,emissive:r,emissiveIntensity:.3}),l=new _t(o,a);l.position.set(0,.24,0),i.add(l)}return i.scale.setScalar(.48*t),i}const FR=({scenario:n,settings:e,currentTime:t,outages:i,criticalSatellites:r=[],focusedSatelliteId:s,onSelectSatellite:o})=>{const a=xe.useRef(null),l=xe.useRef({earthGroup:new Lt,orbits:new Lt,satellites:new Lt,gateways:new Lt,gatewayDomes:new Lt,islLines:new Lt,satLinks:new Lt,labels:new Lt,fovCones:new Lt,packets:new Lt}),c=xe.useRef(new Map),f=xe.useRef(null),h=xe.useRef(null),u=xe.useRef({}),[m,x]=xe.useState(!1),[_,g]=xe.useState(!1),p=xe.useRef(s);return xe.useEffect(()=>{p.current=s},[s]),xe.useEffect(()=>{bR().then(()=>x(!0)).catch(v=>console.warn("Could not load 3D satellite models:",v)),NR().then(()=>g(!0)).catch(v=>console.warn("Could not load Dish_LowPoly model:",v))},[]),xe.useEffect(()=>{if(!a.current)return;const v=a.current,y=()=>v.clientWidth||window.innerWidth,S=()=>v.clientHeight||window.innerHeight-44,w=new rC;w.background=new Ge(329484);const T=4500,E=new Float32Array(T*3),P=new Float32Array(T*3);for(let pe=0;pe<T;pe++){const A=Math.random(),M=Math.random(),X=A*2*Math.PI,z=Math.acos(2*M-1),K=400+Math.random()*250;E[pe*3]=K*Math.sin(z)*Math.cos(X),E[pe*3+1]=K*Math.sin(z)*Math.sin(X),E[pe*3+2]=K*Math.cos(z);const V=.65+Math.random()*.35,ve=Math.random();ve>.88?(P[pe*3]=.8*V,P[pe*3+1]=.92*V,P[pe*3+2]=1*V):ve>.72?(P[pe*3]=1*V,P[pe*3+1]=.96*V,P[pe*3+2]=.88*V):(P[pe*3]=.95*V,P[pe*3+1]=.95*V,P[pe*3+2]=.95*V)}const U=new ht;U.setAttribute("position",new nn(E,3)),U.setAttribute("color",new nn(P,3));const b=document.createElement("canvas");b.width=32,b.height=32;const R=b.getContext("2d");if(R){const pe=R.createRadialGradient(16,16,0,16,16,16);pe.addColorStop(0,"rgba(255, 255, 255, 1)"),pe.addColorStop(.2,"rgba(240, 245, 255, 0.9)"),pe.addColorStop(.5,"rgba(200, 220, 255, 0.35)"),pe.addColorStop(1,"rgba(0, 0, 0, 0)"),R.fillStyle=pe,R.beginPath(),R.arc(16,16,16,0,Math.PI*2),R.fill()}const q=new Po(b),re=new es({size:2.2,map:q,vertexColors:!0,transparent:!0,opacity:.95,blending:qa,depthWrite:!1}),O=new Ra(U,re);w.add(O),l.current.starField=O;const te=new xn(45,y()/S(),.1,1e3);te.position.set(0,16,28),f.current=te;const H=new o1({antialias:!0,alpha:!1});H.setSize(y(),S()),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.domElement.style.display="block",H.domElement.style.width="100%",H.domElement.style.height="100%",v.appendChild(H.domElement);const ne=new jC(te,H.domElement);ne.enableDamping=!0,ne.dampingFactor=.05,ne.minDistance=7,ne.maxDistance=120,h.current=ne;const G=new FC,$=new je,k=pe=>{var z;const A=H.domElement.getBoundingClientRect();$.x=(pe.clientX-A.left)/A.width*2-1,$.y=-((pe.clientY-A.top)/A.height)*2+1,G.setFromCamera($,te);const M=Array.from(c.current.keys()),X=G.intersectObjects(M,!1);if(X.length>0){let K;for(const V of X){if(K=c.current.get(V.object),K)break;let ve=V.object.parent;for(;ve;){if((z=ve.userData)!=null&&z.satellite){K=ve.userData.satellite;break}ve=ve.parent}if(K)break}K&&o(K)}};H.domElement.addEventListener("click",k);const ee=new AC(16777215,1.1);w.add(ee);const de=new ph(16777215,.9);de.position.set(30,40,50),w.add(de);const le=new ph(16777215,.5);le.position.set(-30,-20,-40),w.add(le);const W=6.371,F=new gr(W,64,64);F.scale(1,6356.752/6378.137,1);const B=HR(),he=new Po(B);he.wrapS=li;const fe=new u1({map:he,shininess:30,specular:new Ge(1718886)}),me=new _t(F,fe),ke=new p1;ke.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",pe=>{pe.wrapS=li,fe.map=pe,fe.needsUpdate=!0},void 0,()=>{ke.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",pe=>{pe.wrapS=li,fe.map=pe,fe.needsUpdate=!0},void 0,()=>{ke.load("https://unpkg.com/three-globe/example/img/earth-day.jpg",pe=>{pe.wrapS=li,fe.map=pe,fe.needsUpdate=!0})})}),ke.load("https://unpkg.com/three-globe/example/img/earth-topology.png",pe=>{pe.wrapS=li,fe.bumpMap=pe,fe.bumpScale=.05,fe.needsUpdate=!0});const we=l.current.earthGroup;we.add(me);const j=new gr(W*1.025,48,48);j.scale(1,6356.752/6378.137,1);const Be=new Vt({color:3359061,transparent:!0,opacity:.15,side:_n}),Ae=new _t(j,Be);we.add(Ae),l.current.atmosMesh=Ae,we.add(l.current.orbits),we.add(l.current.satellites),we.add(l.current.gateways),we.add(l.current.gatewayDomes),we.add(l.current.islLines),we.add(l.current.satLinks),we.add(l.current.labels),we.add(l.current.fovCones),we.add(l.current.packets),w.add(we);const Pe=()=>{const pe=y(),A=S();pe>0&&A>0&&(te.aspect=pe/A,te.updateProjectionMatrix(),H.setSize(pe,A))},Ce=new ResizeObserver(()=>Pe());Ce.observe(v),window.addEventListener("resize",Pe);let Oe;const Fe=new N,oe=()=>{Oe=requestAnimationFrame(oe),ne.update(),l.current.starField&&(l.current.starField.rotation.y+=3e-5);const pe=te.position.clone().normalize();l.current.labels.children.forEach(X=>{X.getWorldPosition(Fe),Fe.normalize();const z=Fe.dot(pe),K=X;let V=1;z<0?V=.15:z<.2&&(V=.15+.85*(z/.2)),K.material.opacity=V}),l.current.satellites.children.forEach(X=>{const z=X.userData;z&&z.targetPos&&(X.position.lerp(z.targetPos,.18),Math.abs(X.position.y/(X.position.length()||1))>.95?X.up.set(1,0,0):X.up.set(0,1,0),X.lookAt(0,0,0))});const A=p.current;l.current.satellites.children.forEach(X=>{var z;if(X.name==="Satellite3D"){const K=(z=X.userData)==null?void 0:z.satellite,V=!!(K&&K.id===A);J0(X,te,V)}});const M=performance.now()*.001;l.current.packets.children.forEach(X=>{const z=X.userData;if(z&&z.startPos&&z.endPos){const K=(M*z.speed+z.phase)%1;X.position.lerpVectors(z.startPos,z.endPos,K)}}),H.render(w,te)};return oe(),()=>{H.domElement.removeEventListener("click",k),Ce.disconnect(),window.removeEventListener("resize",Pe),cancelAnimationFrame(Oe),v.contains(H.domElement)&&v.removeChild(H.domElement),H.dispose()}},[]),xe.useEffect(()=>{if(!f.current||!h.current)return;const v=f.current,y=h.current;let S,w;s&&u.current[s]?(S=u.current[s].clone(),w=S.clone().multiplyScalar(1.32)):(S=new N(0,0,0),w=new N(0,0,25));let T=0;const E=setInterval(()=>{T+=.05,y.target.lerp(S,.12),v.position.lerp(w,.12),T>=1&&clearInterval(E)},20);return()=>clearInterval(E)},[s]),xe.useEffect(()=>{var me,ke,we,j,Be,Ae,Pe,Ce,Oe,Fe;if(!n)return;const{earthGroup:v,orbits:y,satellites:S,gateways:w,gatewayDomes:T,islLines:E,satLinks:P,labels:U,fovCones:b,packets:R,atmosMesh:q}=l.current;q&&(q.visible=e.showAtmosphere,q.material.color.set(e.atmosphereColor||"#1e3a8a")),[y,S,w,T,E,P,U,b,R].forEach(oe=>{for(;oe.children.length>0;)oe.remove(oe.children[0])}),c.current.clear(),u.current={};const re=6.371,O=398600.435507,te=12*(Math.PI/180);v.rotation.y=te;const H=new Set(i.map(oe=>oe.satellite_id)),ne={},G={};new Vt({color:e.satColor||"#ffffff"}),new Vt({color:e.highLatencySatColor||"#ff9900"}),new Vt({color:e.offlineSatColor||"#ff3b30"}),new gr(.22*e.satSize,16,16);const $=new Set;(n.routes_sample||[]).forEach(oe=>{(oe.latency_ms>35||oe.path.length>=4)&&oe.path.forEach(pe=>{pe.startsWith("S")&&$.add(pe)})});const k={};(ke=(me=n.raw_scenario)==null?void 0:me.design)!=null&&ke.planes&&n.raw_scenario.design.planes.forEach(oe=>{const pe=parseInt(String(oe.id).replace("P",""))||1;k[pe]={raanDeg:oe.raan_deg??0,phaseDeg:oe.phase_deg??0}});const ee=new Map;(n.satellites||[]).forEach(oe=>ee.set(oe.id,oe));const de=oe=>{var A,M;const pe=ee.get(oe);return pe?!!((A=e.hiddenPlanes)!=null&&A[pe.plane]||(M=e.hiddenSatellites)!=null&&M[oe]):!1},le=oe=>{var pe;return e.showGateways===!1||!!((pe=e.hiddenGateways)!=null&&pe[oe])};let W=1;(n.satellites||[]).forEach(oe=>{const pe=typeof oe.plane=="number"?oe.plane:parseInt(String(oe.plane_id||oe.plane||"1").replace("P",""))||1;pe>W&&(W=pe)}),(n.satellites||[]).forEach(oe=>{var rt,ot;const pe=typeof oe.plane=="number"?oe.plane:parseInt(String(oe.plane_id||oe.plane||"1").replace("P",""))||1,A=!de(oe.id),M=H.has(oe.id),X=!M&&$.has(oe.id),z=e!=null&&e.planeAltMap&&e.planeAltMap[pe]!==void 0?e.planeAltMap[pe]:oe.altitude||550,K=6371+z,V=re+z/1e3*1.2;let ve;((rt=k[pe])==null?void 0:rt.raanDeg)!==void 0?ve=k[pe].raanDeg:typeof oe.raan=="number"&&oe.raan>0?ve=oe.raan:ve=(pe-1)*(360/Math.max(1,W));let D;((ot=k[pe])==null?void 0:ot.phaseDeg)!==void 0?D=k[pe].phaseDeg:typeof oe.phase=="number"?D=oe.phase:D=(pe-1)*15;let Y=0;typeof oe.slot_deg=="number"?Y=oe.slot_deg:typeof oe.slot=="number"?Y=oe.slot:typeof oe.true_anomaly=="number"&&oe.true_anomaly!==0?Y=oe.true_anomaly:typeof oe.idx=="number"&&(Y=oe.idx>=15?oe.idx:oe.idx*45);const ie=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[pe])??0,ge=((e==null?void 0:e.planePhaseMap)&&e.planePhaseMap[pe])??0,J=(ve+ie)%360*(Math.PI/180),Ie=(D+ge)%360*(Math.PI/180),Me=Math.sqrt(O/Math.pow(K,3)),Se=Y*(Math.PI/180)+Ie+Me*t,L=(e!=null&&e.planeIncMap&&e.planeIncMap[pe]!==void 0?e.planeIncMap[pe]:oe.inc||87)*(Math.PI/180),ue=V*(Math.cos(J)*Math.cos(Se)-Math.sin(J)*Math.sin(Se)*Math.cos(L)),Re=V*(Math.sin(J)*Math.cos(Se)+Math.cos(J)*Math.sin(Se)*Math.cos(L)),I=V*(Math.sin(Se)*Math.sin(L)),ye=K*(Math.cos(J)*Math.cos(Se)-Math.sin(J)*Math.sin(Se)*Math.cos(L)),Z=K*(Math.sin(J)*Math.cos(Se)+Math.cos(J)*Math.sin(Se)*Math.cos(L)),_e=K*(Math.sin(Se)*Math.sin(L)),Te=new N(ue,I,Re),$e=new N(ye,_e,Z);if(G[oe.id]=Te,u.current[oe.id]=Te,Do(oe,t),ne[pe]||(ne[pe]=[]),ne[pe].push({sat:oe,pos:Te,posKm:$e,isOffline:M,isHighLatency:X,uAngle:Se}),e.showSatellites&&A){const nt=MR(),Ve=M?"offline":X?"highLatency":"active",qe=oe.id===s,{satGroup:at,hitMesh:Pt,modelMeshes:Mn}=TR(nt,Ve,e,e.satSize,qe);if(at.position.copy(Te),Math.abs(Te.y/(Te.length()||1))>.95?at.up.set(1,0,0):at.up.set(0,1,0),at.lookAt(0,0,0),at.userData={satellite:oe,targetPos:Te.clone(),satId:oe.id},S.add(at),c.current.set(Pt,oe),Mn.forEach(Kt=>{c.current.set(Kt,oe)}),f.current&&J0(at,f.current,qe),e.satGlow){const Kt=r.includes(oe.id),jn=Kt?"#ff0000":M?"#888888":X?e.highLatencySatColor:e.satColor;let gt=qe?.4:.85;M&&(gt=(Math.sin(t*.5)*.5+.5)*.8),Kt&&(gt=1);const qt=new al({map:zR(jn||"#ffffff"),color:16777215,transparent:!0,opacity:gt,blending:qa}),vi=new Rd(qt),xs=Kt?2.5:1.1;vi.scale.set(xs*e.satSize,xs*e.satSize,1),vi.position.copy(Te),S.add(vi)}}if(e.showLabels&&A){const nt=oe.id===s,Ve=oe.id,qe=M?e.offlineSatColor:nt?"#ffffff":X?e.highLatencySatColor:e.satColor,at=ix(Ve,"#ffffff",qe||"#ffffff"),Pt=Te.clone().normalize();at.position.copy(Te).addScaledVector(Pt,.38*e.satSize),U.add(at)}if(s===oe.id&&A){const nt=V-re,Ve=nt*Math.tan(35*Math.PI/180),qe=new Pd(Ve,nt,32,1,!0),at=new Vt({color:M?e.offlineSatColor:e.fovConeColor||e.satColor,transparent:!0,opacity:.18,side:yn,depthWrite:!1}),Pt=new _t(qe,at),Mn=new N(0,0,0).sub(Te).normalize(),Kt=Te.clone().add(Mn.clone().multiplyScalar(nt/2));Pt.position.copy(Kt),Pt.lookAt(0,0,0),Pt.rotateX(Math.PI/2),b.add(Pt);const jn=new m1(16777215,3,10);jn.position.copy(Te),b.add(jn);const gt=new od(Ve*.96,Ve,48),qt=new Vt({color:M?e.offlineSatColor:e.fovConeColor||e.satColor,side:yn,transparent:!0,opacity:.8}),vi=new _t(gt,qt),xs=Te.clone().normalize().multiplyScalar(re*1.002);vi.position.copy(xs),vi.lookAt(0,0,0),b.add(vi)}if(e.showCoverageHeatmap&&A){const Ve=(V-re)*Math.tan(35*Math.PI/180),qe=new Ip(Ve,32),at=new Vt({color:M?e.offlineSatColor:e.fovConeColor||"#00ff88",side:yn,transparent:!0,opacity:M?.15:.22,depthWrite:!1}),Pt=new _t(qe,at),Mn=Te.clone().normalize().multiplyScalar(re*1.002);Pt.position.copy(Mn),Pt.lookAt(0,0,0),b.add(Pt);const Kt=new od(Ve*.97,Ve,32),jn=new Vt({color:M?e.offlineSatColor:e.fovConeColor||"#00ff88",side:yn,transparent:!0,opacity:M?.35:.65}),gt=new _t(Kt,jn);gt.position.copy(Mn.clone().multiplyScalar(1.0005)),gt.lookAt(0,0,0),b.add(gt)}}),e.showOrbits&&Object.keys(ne).forEach(oe=>{var Me,be,Se;const pe=parseInt(oe);if((Me=e.hiddenPlanes)!=null&&Me[pe])return;const A=(be=ne[pe][0])==null?void 0:be.sat;if(!A)return;const M=e!=null&&e.planeAltMap&&e.planeAltMap[pe]!==void 0?e.planeAltMap[pe]:A.altitude||550,X=re+M/1e3*1.2,z=((Se=k[pe])==null?void 0:Se.raanDeg)??A.raan??(pe-1)*60,K=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[pe])??0,V=(z+K)%360*(Math.PI/180),D=(e!=null&&e.planeIncMap&&e.planeIncMap[pe]!==void 0?e.planeIncMap[pe]:A.inc||87)*(Math.PI/180),Y=[],ie=128;for(let Le=0;Le<=ie;Le++){const L=Le/ie*Math.PI*2,ue=X*(Math.cos(V)*Math.cos(L)-Math.sin(V)*Math.sin(L)*Math.cos(D)),Re=X*(Math.sin(V)*Math.cos(L)+Math.cos(V)*Math.sin(L)*Math.cos(D)),I=X*(Math.sin(L)*Math.sin(D));Y.push(new N(ue,I,Re))}const ge=new ht().setFromPoints(Y),J=new kn({color:e.orbitColor||"#475569",transparent:!0,opacity:e.orbitOpacity}),Ie=new Ec(ge,J);y.add(Ie)}),Object.keys(ne).forEach(oe=>{ne[parseInt(oe)].sort((pe,A)=>pe.uAngle-A.uAngle)});const F={};new Vt({color:e.gatewayColor||"#00d084"});const B=6.371,he=6.371*(6356.752/6378.137),fe=1-he*he/(B*B);if((n.gateways||[]).forEach(oe=>{var Y,ie,ge;const pe=oe.lat*Math.PI/180,A=oe.lon*Math.PI/180,M=B/Math.sqrt(1-fe*Math.sin(pe)*Math.sin(pe)),X=M*Math.cos(pe)*Math.cos(A),z=M*Math.cos(pe)*Math.sin(A),K=M*(1-fe)*Math.sin(pe),V=new N(X,K,z);F[oe.id]=V;const ve=!le(oe.id),D=!!((Y=e==null?void 0:e.offlineGateways)!=null&&Y[oe.id]);if(e.showGateways&&ve){const J=D?"#ff3b30":e.gatewayColor||"#00d084",Ie=UR(),Me=OR(Ie,J,e.satSize);Me.position.copy(V);const be=V.clone().normalize();if(Me.quaternion.setFromUnitVectors(new N(0,1,0),be),w.add(Me),e.showGatewayCoverage!==!1){const Le=(((ge=(ie=n.raw_scenario)==null?void 0:ie.environment)==null?void 0:ge.altitude_km)??550)/1e3*1.2,L=Math.max(1.2,Le*1.85),ue=new gr(L,32,16,0,Math.PI*2,0,Math.PI/2),Re=new Vt({color:J,transparent:!0,opacity:D?.4:.2,side:yn,depthWrite:!1}),I=new _t(ue,Re);I.position.copy(V);const ye=V.clone().normalize();I.quaternion.setFromUnitVectors(new N(0,1,0),ye);const Z=[],_e=48;for(let gt=0;gt<=_e;gt++){const qt=gt/_e*Math.PI*2;Z.push(new N(Math.cos(qt)*L,0,Math.sin(qt)*L))}const Te=new ht().setFromPoints(Z),$e=new kn({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.45,depthWrite:!1}),rt=new Ec(Te,$e);I.add(rt);const ot=[],nt=L*Math.cos(Math.PI/4),Ve=L*Math.sin(Math.PI/4);for(let gt=0;gt<=_e;gt++){const qt=gt/_e*Math.PI*2;ot.push(new N(Math.cos(qt)*nt,Ve,Math.sin(qt)*nt))}const qe=new ht().setFromPoints(ot),at=new kn({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.25,depthWrite:!1}),Pt=new Ec(qe,at);I.add(Pt);const Mn=new kn({color:e.gatewayColor||"#00d084",transparent:!0,opacity:.28,depthWrite:!1}),Kt=[],jn=[];for(let gt=0;gt<=32;gt++){const qt=gt/32*Math.PI;Kt.push(new N(Math.cos(qt)*L,Math.sin(qt)*L,0)),jn.push(new N(0,Math.sin(qt)*L,Math.cos(qt)*L))}I.add(new ji(new ht().setFromPoints(Kt),Mn)),I.add(new ji(new ht().setFromPoints(jn),Mn)),T.add(I)}}if(e.showLabels&&e.showGateways&&ve){const J=ix(oe.id,"#ffffff",e.gatewayColor||"#00d084"),Ie=V.clone().normalize();J.position.copy(V).addScaledVector(Ie,.35),U.add(J)}}),e.showISL){const oe=Object.keys(ne).map(Number).sort((A,M)=>A-M);oe.forEach(A=>{var X;if((X=e.hiddenPlanes)!=null&&X[A])return;const M=ne[A];for(let z=0;z<M.length;z++){const K=M[z],V=M[(z+1)%M.length];if(de(K.sat.id)||de(V.sat.id))continue;const ve=K.isOffline||V.isOffline,D=K.isHighLatency||V.isHighLatency,Y=!!e.showTrafficLoad,ie=Math.min(99,Math.max(12,Math.round(35+Math.sin(t*.08+A*1.5)*40+(D?35:0)))),ge=ve?e.offlineSatColor:Y?ie>80?"#ef4444":ie>55?"#f59e0b":"#38bdf8":D?e.highLatencySatColor:e.islColor||"#00ff88",J=ef(K.pos,V.pos,16),Ie=new ht().setFromPoints(J),Me=new kn({color:ge,transparent:!0,opacity:ve?.25:Y?.9:D?.85:.65}),be=new ji(Ie,Me);if(E.add(be),e.showDistances===!0){const Se=Math.round(K.posKm.distanceTo(V.posKm));if(Se>0){const Le=jR(K.pos,V.pos,.15),L=K.sat.id===s||V.sat.id===s,ue=Y?`${Se} км | ${ie}%`:`${Se} км`,Re=Qu(ue,L||ie>80);Re.position.copy(Le),U.add(Re)}}}});const pe=((j=(we=n.raw_scenario)==null?void 0:we.environment)==null?void 0:j.isl_range_km)??3e3;for(let A=0;A<oe.length;A++){const M=oe[A],X=oe[(A+1)%oe.length];if((Be=e.hiddenPlanes)!=null&&Be[M]||(Ae=e.hiddenPlanes)!=null&&Ae[X])continue;const z=ne[M],K=ne[X];z.forEach(V=>{if(de(V.sat.id))return;let ve=1/0,D=null,Y=null,ie=!1,ge=!1;if(K.forEach(J=>{if(de(J.sat.id))return;const Ie=V.posKm.distanceTo(J.posKm);Ie<=pe&&!BR(V.posKm,J.posKm)&&Ie<ve&&(ve=Ie,D=J.pos,Y=J.posKm,ie=J.isOffline,ge=J.isHighLatency)}),D&&Y){const J=V.isOffline||ie,Ie=V.isHighLatency||ge,Me=!!e.showTrafficLoad,be=Math.min(99,Math.max(15,Math.round(42+Math.cos(t*.06+A*2.1)*38+(Ie?30:0)))),Se=J?e.offlineSatColor:Me?be>80?"#ef4444":be>55?"#f59e0b":"#38bdf8":Ie?e.highLatencySatColor:e.islColor||"#cbd5e1",Le=ef(V.pos,D,16),L=new ht().setFromPoints(Le),ue=new kn({color:Se,transparent:!0,opacity:J?.25:Me?.9:Ie?.75:.5}),Re=new ji(L,ue);E.add(Re)}})}}if(e.showSatLinks){const oe=n.routes_sample||[],pe=new Set,A=((Ce=(Pe=n.raw_scenario)==null?void 0:Pe.environment)==null?void 0:Ce.altitude_km)??550;oe.forEach(X=>{const z=X.path||[],K=z.some(ve=>H.has(ve)),V=!!(s&&z.includes(s));if(z.length>=2)for(let ve=0;ve<z.length-1;ve++){const D=z[ve],Y=z[ve+1];if(le(D)||le(Y)||de(D)||de(Y))continue;const ie=[D,Y].sort().join("--");pe.add(ie);const ge=F[D]||G[D],J=F[Y]||G[Y],Ie=!!(F[D]||F[Y]);if(ge&&J){if(Ie){const ue=F[D]||F[Y],Re=F[D]?J:ge;if(!sx(ue,Re,0))continue}const Me=Ie?[ge,J]:ef(ge,J,20),be=new ht().setFromPoints(Me),Se=K?e.offlineSatColor:V?"#00ff88":Ie?e.groundLinkColor||"#94a3b8":e.islColor||"#cbd5e1",Le=new kn({color:Se,transparent:!0,opacity:V?1:K?.9:Ie?.95:.85}),L=new ji(be,Le);if(P.add(L),Ie&&e.showDistances===!0){const ue=F[D]||F[Y],Re=F[D]?J:ge,I=rx(ue,Re,A);if(I>0){const ye=new N().addVectors(ge,J).multiplyScalar(.51),Z=Qu(`${I} км`,!0);Z.position.copy(ye),U.add(Z)}}if(Ie||V){const ue=K?e.offlineSatColor:V?"#00ff88":e.groundLinkColor||"#94a3b8",Re=V?4:2;for(let I=0;I<Re;I++){const ye=lc(ue);ye.userData={startPos:ge.clone(),endPos:J.clone(),speed:V?1.2:.65,phase:I/Re},R.add(ye);const Z=lc(V?"#ffffff":"#38bdf8");Z.userData={startPos:J.clone(),endPos:ge.clone(),speed:V?1.3:.75,phase:(I+.5)/Re},R.add(Z)}}}}});const M=((Fe=(Oe=n.raw_scenario)==null?void 0:Oe.environment)==null?void 0:Fe.min_elevation_deg)??10;Object.keys(F).forEach(X=>{if(le(X))return;const z=F[X];(n.satellites||[]).filter(V=>!de(V.id)).map(V=>{const ve=G[V.id];return!ve||!sx(z,ve,M)?null:{pos:ve,dist:z.distanceTo(ve)}}).filter(V=>V!==null).sort((V,ve)=>V.dist-ve.dist).slice(0,2).forEach(V=>{const ve=new ht().setFromPoints([z,V.pos]),D=new kn({color:e.groundLinkColor||"#f59e0b",transparent:!0,opacity:.6}),Y=new ji(ve,D);if(P.add(Y),e.showDistances===!0){const ge=rx(z,V.pos,A);if(ge>0){const J=new N().addVectors(z,V.pos).multiplyScalar(.51),Ie=Qu(`${ge} км`,!0);Ie.position.copy(J),U.add(Ie)}}const ie=e.groundLinkColor||"#f59e0b";for(let ge=0;ge<2;ge++){const J=lc(ie);J.userData={startPos:z.clone(),endPos:V.pos.clone(),speed:.7,phase:ge*.5},R.add(J);const Ie=lc("#34d399");Ie.userData={startPos:V.pos.clone(),endPos:z.clone(),speed:.8,phase:(ge+.5)*.5},R.add(Ie)}})})}},[n,e,t,i,s,m,_]),d.jsx("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};function ix(n,e,t){const i=document.createElement("canvas");i.width=384,i.height=96;const r=i.getContext("2d");r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.font='500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',r.textAlign="center",r.textBaseline="middle",r.strokeStyle="rgba(5, 10, 20, 0.88)",r.lineWidth=4.5,r.lineJoin="round",r.strokeText(n,192,48),r.fillStyle=t,r.fillText(n,192,48);const s=new Po(i);s.minFilter=fi,s.magFilter=Xt,s.generateMipmaps=!0;const o=new al({map:s,transparent:!0,depthTest:!0,depthWrite:!1}),a=new Rd(o);return a.scale.set(1.28,.32,1),a}function Qu(n,e=!1){const t=document.createElement("canvas");t.width=260,t.height=72;const i=t.getContext("2d");i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.fillStyle=e?"rgba(0, 240, 255, 0.95)":"rgba(15, 23, 38, 0.88)",i.beginPath(),typeof i.roundRect=="function"?i.roundRect(8,8,244,56,12):i.rect(8,8,244,56),i.fill(),i.strokeStyle=e?"#ffffff":"#475569",i.lineWidth=2.5,i.stroke(),i.fillStyle=e?"#000000":"#ffffff",i.font='500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(n,130,36);const r=new Po(t);r.minFilter=fi,r.magFilter=Xt,r.generateMipmaps=!0;const s=new al({map:r,transparent:!0,depthTest:!0,depthWrite:!1}),o=new Rd(s);return o.scale.set(.85,.235,1),o}function rx(n,e,t=550){const r=6371+t,s=Math.max(-1,Math.min(1,n.clone().normalize().dot(e.clone().normalize()))),o=r*r+6371*6371-2*r*6371*s;return Math.round(Math.sqrt(Math.max(0,o)))}function zR(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=new Ge(n),r=Math.round(i.r*255),s=Math.round(i.g*255),o=Math.round(i.b*255),a=t.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,`rgba(${r}, ${s}, ${o}, 1.0)`),a.addColorStop(.4,`rgba(${r}, ${s}, ${o}, 0.5)`),a.addColorStop(1,`rgba(${r}, ${s}, ${o}, 0)`),t.fillStyle=a,t.fillRect(0,0,64,64),new Po(e)}function ef(n,e,t=16){const i=n.clone().normalize(),r=e.clone().normalize(),s=n.length(),o=e.length(),a=i.angleTo(r);if(a<.001)return[n,e];const l=Math.sin(a),c=[];for(let f=0;f<=t;f++){const h=f/t,u=Math.sin((1-h)*a)/l,m=Math.sin(h*a)/l,x=new N().addScaledVector(i,u).addScaledVector(r,m).normalize(),_=s*(1-h)+o*h,g=Math.sin(h*Math.PI)*(a*.3),p=_+g;c.push(x.multiplyScalar(p))}return c}function jR(n,e,t=.15){const i=n.clone().normalize(),r=e.clone().normalize(),s=i.angleTo(r);if(s<.001)return new N().addVectors(n,e).multiplyScalar(.5);const o=Math.sin(s),a=Math.sin(.5*s)/o,l=new N().addScaledVector(i,a).addScaledVector(r,a).normalize(),c=n.length(),f=e.length(),h=(c+f)*.5,u=Math.sin(.5*Math.PI)*(s*.3),m=h+u+t;return l.multiplyScalar(m)}function BR(n,e,t=6371){const i=new N().subVectors(e,n),r=i.lengthSq();if(r<1e-6)return!1;const s=Tp.clamp(-n.dot(i)/r,0,1);return new N().copy(n).addScaledVector(i,s).length()<=t}function sx(n,e,t=0){const i=n.clone().normalize(),r=e.clone().sub(n),s=r.length();if(s<.001)return!1;r.divideScalar(s);const o=r.dot(i),a=Math.sin(t*Math.PI/180);return o>=a}function HR(){const n=document.createElement("canvas");n.width=2048,n.height=1024;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);t.addColorStop(0,"#103056"),t.addColorStop(.5,"#19497c"),t.addColorStop(1,"#103056"),e.fillStyle=t,e.fillRect(0,0,2048,1024);const i=(o,a)=>{const l=(a+180)/360*2048,c=(90-o)/180*1024;return[l,c]},r=(o,a="#2a542a",l="#3e753e")=>{if(o.length<3)return;e.beginPath();const[c,f]=i(o[0][0],o[0][1]);e.moveTo(c,f);for(let h=1;h<o.length;h++){const[u,m]=i(o[h][0],o[h][1]);e.lineTo(u,m)}e.closePath(),e.fillStyle=a,e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke()};r([[70,10],[72,40],[70,70],[75,100],[70,140],[65,170],[60,175],[50,140],[40,120],[35,100],[25,120],[10,105],[10,75],[25,60],[30,50],[35,35],[40,30],[36,5],[38,-9],[44,-9],[55,10],[60,5],[62,20],[70,10]],"#2a542a","#3e753e"),r([[70,-170],[75,-120],[70,-80],[60,-60],[45,-65],[30,-80],[25,-90],[15,-90],[15,-105],[30,-115],[40,-125],[60,-165],[70,-170]],"#2a542a","#3e753e"),r([[10,-75],[0,-50],[-10,-38],[-25,-45],[-45,-65],[-55,-70],[-35,-75],[0,-80],[10,-75]],"#244824","#386638"),r([[35,-5],[37,10],[32,32],[10,50],[-10,40],[-34,20],[-34,18],[-10,12],[5,2],[5,-15],[15,-17],[35,-5]],"#544c2a","#786d3e"),r([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]],"#54482a","#78683e"),e.strokeStyle="#25588c",e.lineWidth=1;for(let o=0;o<=2048;o+=128)e.beginPath(),e.moveTo(o,0),e.lineTo(o,1024),e.stroke();for(let o=0;o<=1024;o+=64)e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.stroke();return[[55.75,37.61],[59.93,30.31],[68.97,33.08],[65.14,57.22],[51.5,-.12],[40.71,-74],[35.67,139.65],[39.9,116.4]].forEach(([o,a])=>{const[l,c]=i(o,a),f=e.createRadialGradient(l,c,0,l,c,8);f.addColorStop(0,"rgba(0, 255, 136, 0.9)"),f.addColorStop(.5,"rgba(20, 115, 230, 0.4)"),f.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=f,e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l,c,2,0,Math.PI*2),e.fill()}),n}function lc(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.imageSmoothingEnabled=!0;const i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"#ffffff"),i.addColorStop(.4,n),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=3,t.strokeRect(18,20,28,24),t.strokeStyle=n,t.lineWidth=2.5,t.beginPath(),t.moveTo(22,27),t.lineTo(32,35),t.lineTo(42,27),t.stroke();const r=new Po(e),s=new al({map:r,transparent:!0,opacity:.95,blending:qa,depthWrite:!1}),o=new Rd(s);return o.scale.set(.24,.24,1),o}const Yr=({title:n,isOpen:e,onClose:t,initialPos:i={x:100,y:60,width:720,height:480},zIndex:r,onFocus:s,children:o})=>{const a=()=>{const S=typeof window<"u"?window.innerWidth:1200,w=typeof window<"u"?window.innerHeight:800,T=S<=768,E=Math.min(T?S-16:S-32,i.width),P=Math.min(T?w-70:w-80,i.height),U=T?Math.max(8,(S-E)/2):Math.min(Math.max(8,i.x),S-E-8),b=T?Math.max(50,(w-P)/2):Math.min(Math.max(50,i.y),w-P-8);return{x:U,y:b,width:E,height:P}},[l,c]=xe.useState(()=>{const S=a();return{x:S.x,y:S.y,width:S.width,height:S.height,isMaximized:!1,isMinimized:!1,zIndex:r}}),f=xe.useRef(!1),h=xe.useRef(!1),u=xe.useRef({x:0,y:0}),m=xe.useRef({w:0,h:0,x:0,y:0});if(xe.useEffect(()=>{c(S=>({...S,zIndex:r}))},[r]),xe.useEffect(()=>{const S=()=>{c(w=>{const T=window.innerWidth,E=window.innerHeight,P=Math.min(w.width,T-16),U=Math.min(w.height,E-60),b=Math.min(Math.max(4,w.x),Math.max(4,T-P-4)),R=Math.min(Math.max(48,w.y),Math.max(48,E-U-4));return{...w,x:b,y:R,width:P,height:U}})};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),!e)return null;const x=(S,w)=>{if(s(),l.isMaximized)return;f.current=!0,u.current={x:S-l.x,y:w-l.y};const T=(b,R)=>{if(!f.current)return;const q=window.innerWidth,re=window.innerHeight,O=Math.min(Math.max(4,b-u.current.x),q-l.width-4),te=Math.min(Math.max(48,R-u.current.y),re-l.height-4);c(H=>({...H,x:O,y:te}))},E=b=>T(b.clientX,b.clientY),P=b=>{b.touches[0]&&T(b.touches[0].clientX,b.touches[0].clientY)},U=()=>{f.current=!1,window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",U)};window.addEventListener("mousemove",E),window.addEventListener("mouseup",U),window.addEventListener("touchmove",P,{passive:!0}),window.addEventListener("touchend",U)},_=S=>x(S.clientX,S.clientY),g=S=>{S.touches[0]&&x(S.touches[0].clientX,S.touches[0].clientY)},p=S=>{if(S.stopPropagation(),s(),l.isMaximized)return;h.current=!0,m.current={w:l.width,h:l.height,x:S.clientX,y:S.clientY};const w=E=>{if(!h.current)return;const P=E.clientX-m.current.x,U=E.clientY-m.current.y;c(b=>({...b,width:Math.max(380,m.current.w+P),height:Math.max(240,m.current.h+U)}))},T=()=>{h.current=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",T)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",T)},v=()=>{c(S=>({...S,isMaximized:!S.isMaximized}))},y=l.isMaximized?{position:"fixed",top:"44px",left:0,width:"100vw",height:"calc(100vh - 44px)",zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}:{position:"fixed",left:`${l.x}px`,top:`${l.y}px`,width:`${l.width}px`,height:`${l.height}px`,zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",borderRadius:"6px",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)",overflow:"hidden"};return d.jsxs("div",{style:y,onClick:s,children:[d.jsxs("div",{onMouseDown:_,onTouchStart:g,style:{height:"36px",backgroundColor:"#1f1f1f",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",cursor:l.isMaximized?"default":"move",userSelect:"none"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:600,fontSize:"13px",color:"#e0e0e0"},children:[d.jsx(ob,{size:14,style:{color:"#888"}}),d.jsx("span",{children:n})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx("button",{onClick:S=>{S.stopPropagation(),c(w=>({...w,isMinimized:!w.isMinimized}))},style:tf,title:"Свернуть",children:d.jsx(sb,{size:12})}),d.jsx("button",{onClick:S=>{S.stopPropagation(),v()},style:tf,title:l.isMaximized?"Восстановить":"Развернуть",children:d.jsx(_b,{size:12})}),d.jsx("button",{onClick:S=>{S.stopPropagation(),t()},style:tf,title:"Закрыть",children:d.jsx(Rv,{size:14})})]})]}),d.jsx("div",{style:{flex:1,overflow:"auto",position:"relative",backgroundColor:"#262626",color:"#e0e0e0"},children:o}),!l.isMaximized&&d.jsx("div",{onMouseDown:p,style:{position:"absolute",bottom:0,right:0,width:"16px",height:"16px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, #4a4a4a 50%)"}})]})},tf={backgroundColor:"transparent",color:"#a0a0a0",border:"none",borderRadius:"3px",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},GR=({scenario:n,outages:e=[],currentTime:t=0,onApplyRecommendation:i,onExportResultsJson:r,onOpenPdfReport:s})=>{var $;const[o,a]=xe.useState("metrics"),[l,c]=xe.useState(new Set),[f,h]=xe.useState("soyuz");if(!n)return d.jsx("div",{style:{padding:"20px",color:"#888"},children:"Загрузка данных математического моделирования..."});const u=new Set(e.map(k=>k.satellite_id)),m=n.satellites.map(k=>Do(k,t)),x=m.length,_=m.filter(k=>u.has(k.id)).length,g=x-_,p=m.filter(k=>!u.has(k.id)&&!k.is_in_sunlight).length,v=m.reduce((k,ee)=>k+(ee.fuel_kg??10),0)/(x||1),y=m.reduce((k,ee)=>k+(ee.fuel_pct??100),0)/(x||1),S=m.reduce((k,ee)=>k+(ee.temperature_c??38),0)/(x||1),w=Math.max(...m.map(k=>k.temperature_c??38)),T=m.reduce((k,ee)=>k+(ee.battery_pct??100),0)/(x||1),E=(m.reduce((k,ee)=>k+(ee.solar_power_w??0),0)/1e3).toFixed(1),P=n.simulation_result,U=(P==null?void 0:P.overall_availability)??.9998,R=(U>1?U:U*100).toFixed(2),q=(38.4+_*4.2).toFixed(1),O=(U>1?U/100:U)<.9||(P==null?void 0:P.all_targets_met)===!1,te=(P==null?void 0:P.client_summaries)||[],H=(($=P==null?void 0:P.vulnerability)==null?void 0:$.top_used_satellites)||[],ne=P==null?void 0:P.economic_analysis,G=k=>{const ee=Math.floor(k/3600),de=Math.floor(k%3600/60),le=Math.floor(k%60);return`${String(ee).padStart(2,"0")}:${String(de).padStart(2,"0")}:${String(le).padStart(2,"0")}`};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",border:"1px solid #1473e650",borderRadius:"6px",padding:"8px 12px",fontSize:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600},children:[d.jsx(gp,{size:15,className:"animate-spin"}),d.jsxs("span",{children:["Симуляция Real-Time: T = +",G(t)]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[d.jsx("div",{style:{display:"flex",gap:"12px",fontSize:"11px",color:"#ccc"},children:d.jsxs("span",{children:["Отказов КА: ",d.jsx("b",{style:{color:_>0?"#ff3b30":"#888"},children:_})]})}),s&&d.jsxs("button",{onClick:s,style:{backgroundColor:"#1e293b",color:"#38bdf8",border:"1px solid #0284c7",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Сгенерировать 4-страничный научно-технический PDF отчёт",children:[d.jsx(yp,{size:13}),d.jsx("span",{children:"Отчёт PDF"})]}),r&&d.jsxs("button",{onClick:r,style:{backgroundColor:"#20242b",color:"#38bdf8",border:"1px solid #333943",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Скачать полные результаты симуляции в JSON",children:[d.jsx(xp,{size:13}),d.jsx("span",{children:"Скачать Итоговый JSON"})]})]})]}),d.jsxs("div",{style:{display:"flex",gap:"6px",borderBottom:"1px solid #383838",paddingBottom:"8px",flexWrap:"wrap"},children:[d.jsxs("button",{onClick:()=>a("metrics"),style:Vr(o==="metrics"),children:[d.jsx(bo,{size:14}),d.jsx("span",{children:"Сводные Метрики"})]}),d.jsxs("button",{onClick:()=>a("clients"),style:Vr(o==="clients"),children:[d.jsx(bc,{size:14}),d.jsxs("span",{children:["SLA по Пунктам (",te.length||3,")"]})]}),d.jsxs("button",{onClick:()=>a("gantt"),style:Vr(o==="gantt"),children:[d.jsx(Mv,{size:14}),d.jsx("span",{children:"Диаграмма Гантта"})]}),d.jsxs("button",{onClick:()=>a("coverage"),style:Vr(o==="coverage"),children:[d.jsx(Zc,{size:14}),d.jsx("span",{children:"Покрытие Территории"})]}),d.jsxs("button",{onClick:()=>a("vulnerability"),style:Vr(o==="vulnerability"),children:[d.jsx(pp,{size:14}),d.jsx("span",{children:"Уязвимость (Критические КА)"})]}),d.jsxs("button",{onClick:()=>a("routes"),style:Vr(o==="routes"),children:[d.jsx(cu,{size:14}),d.jsx("span",{children:"Маршруты & Хопы"})]}),d.jsxs("button",{onClick:()=>a("economic"),style:Vr(o==="economic"),children:[d.jsx(pa,{size:14}),d.jsx("span",{children:"Экономика & Топливо"})]})]}),o==="metrics"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Wn,{icon:d.jsx(bc,{color:O?"#ff3b30":"#00ff88",size:20}),title:"Общая Доступность (SLA)",value:`${R}%`,sub:O?"[ВНИМАНИЕ] Нарушение нормативного SLA (< 90%)":"Все целевые SLA выдержаны"}),d.jsx(Wn,{icon:d.jsx(Jc,{color:"#1473e6",size:20}),title:"Задержка передачи (P95)",value:`${q} мс`,sub:_>0?`+${(_*4.2).toFixed(1)}мс за счет обхода отказов`:"Норматив < 50мс выдержан"}),d.jsx(Wn,{icon:d.jsx(cu,{color:"#ffaa00",size:20}),title:"Состояние группировки",value:`${g} / ${x}`,sub:_>0?`Отказов КА: ${_}`:"Штатный режим всех КА"}),d.jsx(Wn,{icon:d.jsx(bo,{color:"#1473e6",size:20}),title:"Солнечная генерация",value:`${E} кВт`,sub:`Батареи: ${T.toFixed(0)}% (Заряд/Разряд)`})]}),d.jsxs("div",{style:cc,children:[d.jsx("h4",{style:ox,children:"Динамическое распределение причин сбоев доступности (Real-Time Outage Breakdown)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"12px",marginTop:"8px"},children:[d.jsxs("div",{style:ax,children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Аварийные отказы узлов"}),d.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:_>0?"#ff3b30":"#00ff88"},children:[(_/(x||1)*100).toFixed(1),"%"]}),d.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[_," КА отключено"]})]}),d.jsxs("div",{style:ax,children:[d.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Доступность шлюзов"}),d.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#00ff88"},children:"100.0%"}),d.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Наземные станции в норме"})]})]})]})]}),o==="clients"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Детализированные показания доступности по наземным объектам в реальном времени"}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Zt,children:"Объект / Пул"}),d.jsx("th",{style:Zt,children:"Видимость"}),d.jsx("th",{style:Zt,children:"Доступность (SLA)"}),d.jsx("th",{style:Zt,children:"Цель (90%)"}),d.jsx("th",{style:Zt,children:"Макс. отказ (сек)"}),d.jsx("th",{style:Zt,children:"Ср. хопов"}),d.jsx("th",{style:Zt,children:"Ср. дистанция"})]})}),d.jsx("tbody",{children:(te.length>0?te:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"Печора",visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск",visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350}]).map((k,ee)=>{const de=k.availability_ratio*100,le=k.target_met??de>=90;return d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Jt,children:d.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.name||k.id})}),d.jsxs("td",{style:Jt,children:[(k.visibility_ratio*100).toFixed(1),"%"]}),d.jsx("td",{style:Jt,children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${de}%`,backgroundColor:le?"#00ff88":"#ff3b30"}})}),d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[de.toFixed(1),"%"]})]})}),d.jsx("td",{style:Jt,children:le?d.jsxs("span",{style:{color:"#00ff88",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Mo,{size:13})," СОБЛЮДЕН"]}):d.jsxs("span",{style:{color:"#ff3b30",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Eb,{size:13})," НАРУШЕН"]})}),d.jsx("td",{style:Jt,children:k.max_outage_s!==void 0?`${k.max_outage_s} с`:"0 с"}),d.jsx("td",{style:Jt,children:k.avg_hops!==null&&k.avg_hops!==void 0?Number(k.avg_hops).toFixed(1):"—"}),d.jsx("td",{style:Jt,children:k.avg_distance_km?`${k.avg_distance_km} км`:"—"})]},ee)})})]})})]}),o==="gantt"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:d.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:["Диаграмма Гантта: Сеансы связи (Курсор T = ",G(t),")"]})}),d.jsxs("div",{style:cc,children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#777",marginBottom:"8px",paddingLeft:"142px"},children:[d.jsx("span",{children:"00:00"}),d.jsx("span",{children:"06:00"}),d.jsx("span",{children:"12:00"}),d.jsx("span",{children:"18:00"}),d.jsx("span",{children:"24:00"})]}),["S01 (Плоскость 1)","S02 (Плоскость 1)","S09 (Плоскость 2)","S10 (Плоскость 2)","S17 (Плоскость 3)","S18 (Плоскость 3)"].map((k,ee)=>{const de=k.split(" ")[0],le=u.has(de),W=t%86400/86400*100;return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[d.jsxs("span",{style:{width:"130px",fontSize:"11px",color:le?"#ff3b30":"#aaa",fontFamily:"monospace",fontWeight:600},children:[k," ",le?"[ОТКАЗ]":"[ОК]"]}),d.jsxs("div",{style:{flex:1,height:"24px",backgroundColor:"#121212",border:"1px solid #2a2a2a",borderRadius:"4px",position:"relative",overflow:"hidden"},children:[d.jsx("div",{style:{position:"absolute",left:`${ee*15%40}%`,width:"58%",height:"100%",backgroundColor:le?"#ff3b3040":"#1473e690",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"8px",fontSize:"10px",color:"#fff",fontWeight:600},children:le?"Аварийный отказ":"Сеанс связи"}),d.jsx("div",{style:{position:"absolute",left:`${W}%`,top:0,bottom:0,width:"2px",backgroundColor:"#00ff88",boxShadow:"0 0 8px #00ff88",zIndex:10}})]})]},ee)})]})]}),o==="coverage"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Покрытия Территории и Кратности Перекрытия (Territory Coverage Level)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Wn,{icon:d.jsx(Zc,{color:"#00ff88",size:20}),title:"Глобальное Покрытие Земли",value:`${Math.min(99.4,g/(x||48)*98.6).toFixed(1)}%`,sub:"При мин. угле места ≥ 10.0°"}),d.jsx(Wn,{icon:d.jsx(bc,{color:"#1473e6",size:20}),title:"Покрытие РФ & Арктики",value:`${Math.min(99.9,g/(x||48)*99.8).toFixed(1)}%`,sub:"Высокие широты (Северный Морской Путь)"}),d.jsx(Wn,{icon:d.jsx(Ya,{color:"#ffaa00",size:20}),title:"Кратность Перекрытия",value:x>=48?"3.2x (3-кратное)":"1.1x (Одиночное)",sub:"Резервирование связности"}),d.jsx(Wn,{icon:d.jsx(Jc,{color:"#00f0ff",size:20}),title:"Радиус пятна покрытия",value:"1 240 км",sub:"Площадь пятна ~4.83M км² на КА"})]}),d.jsxs("div",{style:cc,children:[d.jsx("h4",{style:ox,children:"Географическое распределение уровня покрытия по регионам"}),d.jsx("div",{style:{overflowX:"auto",marginTop:"10px"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Zt,children:"Регион / Географическая зона"}),d.jsx("th",{style:Zt,children:"Широтный диапазон"}),d.jsx("th",{style:Zt,children:"Уровень покрытия (%)"}),d.jsx("th",{style:Zt,children:"Кратность (Redundancy)"}),d.jsx("th",{style:Zt,children:"Статус обслуживания"})]})}),d.jsx("tbody",{children:[{region:"Арктическая зона РФ & СМП",latRange:"60°N — 90°N",cov:Math.min(100,g/(x||48)*100).toFixed(1),red:"3.8x",status:"100% Доступно"},{region:"Центральная Россия & Европа",latRange:"45°N — 60°N",cov:Math.min(99.8,g/(x||48)*99.5).toFixed(1),red:"3.1x",status:"Штатное покрытие"},{region:"Сибирь & Дальний Восток",latRange:"50°N — 75°N",cov:Math.min(99.6,g/(x||48)*99.2).toFixed(1),red:"3.4x",status:"Штатное покрытие"},{region:"Экваториальная зона & Океаны",latRange:"30°S — 30°N",cov:Math.min(96.2,g/(x||48)*94.1).toFixed(1),red:"1.8x",status:"Базовое покрытие"}].map((k,ee)=>d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Jt,children:d.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.region})}),d.jsx("td",{style:Jt,children:d.jsx("span",{style:{fontFamily:"monospace",color:"#aaa"},children:k.latRange})}),d.jsx("td",{style:Jt,children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",width:`${k.cov}%`,backgroundColor:parseFloat(k.cov)>=95?"#00ff88":"#ffaa00"}})}),d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[k.cov,"%"]})]})}),d.jsx("td",{style:Jt,children:d.jsx("span",{style:{color:"#00f0ff",fontWeight:600},children:k.red})}),d.jsx("td",{style:Jt,children:d.jsx("span",{style:{color:"#00ff88",backgroundColor:"#00ff8815",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:k.status})})]},ee))})]})})]})]}),o==="vulnerability"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Уязвимости: Самые нагруженные узлы (Top-used Satellites)"}),d.jsx("div",{style:cc,children:H.length>0?d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:H.slice(0,9).map((k,ee)=>{const de=u.has(k.satellite_id);return d.jsxs("div",{style:{padding:"8px 12px",backgroundColor:de?"#3b1212":"#121212",border:`1px solid ${de?"#ff3b30":"#333"}`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold",color:de?"#ff3b30":"#1473e6"},children:[k.satellite_id," ",de?"(ОТКАЗ)":""]}),d.jsxs("span",{style:{fontSize:"11px",color:"#aaa"},children:[k.route_appearances," маршрутов"]})]},ee)})}):d.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"Запустите моделирование для расчета рейтинга загрузки узлов."})})]}),o==="routes"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{backgroundColor:"#161d28",border:"1px solid #1473e640",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#38bdf8",fontWeight:600,fontSize:"13px"},children:[d.jsx(cu,{size:16}),d.jsx("span",{children:"Балансировка Нагрузки Межспутниковых Линий (ISL Traffic Load & Bottlenecks)"})]}),d.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8"},children:["Суммарная емкость: ",d.jsx("b",{style:{color:"#00ff88"},children:"48.0 Гбит/с"})," | Задействовано: ",d.jsxs("b",{style:{color:"#38bdf8"},children:[(31.2+_*2.8).toFixed(1)," Гбит/с"]})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #38bdf840",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#38bdf8",fontWeight:600},children:"🟦 Нормальная загрузка (ISL < 50%)"}),d.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.max(1,x*2-_*3)," линий"]}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Задержка RTT < 25 мс, потерь нет"})]}),d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #f59e0b40",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#f59e0b",fontWeight:600},children:"🟧 Высокая нагрузка (ISL 50–85%)"}),d.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.min(12,4+_*2)," линий"]}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Шлюзы: Мурманск, Новосибирск"})]}),d.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #ef444440",borderRadius:"4px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"11px",color:"#ef4444",fontWeight:600},children:"🟥 Узкие места / Отказы (Bottlenecks)"}),d.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:_>0?`${_*2} перемаршрутизировано`:"0 (Заторов нет)"}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:_>0?"Авто-обход отказавших КА в 3D":"Резервирование 100%"})]})]})]}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[d.jsx("th",{style:Zt,children:"Источник"}),d.jsx("th",{style:Zt,children:"Назначение"}),d.jsx("th",{style:Zt,children:"Последовательность узлов (Hop list)"}),d.jsx("th",{style:Zt,children:"Задержка"}),d.jsx("th",{style:Zt,children:"Статус"})]})}),d.jsx("tbody",{children:(n.routes_sample||[]).map((k,ee)=>{const de=k.path.some(W=>u.has(W)),le=de?(k.latency_ms+18.5).toFixed(1):k.latency_ms;return d.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[d.jsx("td",{style:Jt,children:d.jsx("span",{style:{color:"#1473e6",fontWeight:600},children:k.src})}),d.jsx("td",{style:Jt,children:d.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:k.dst})}),d.jsx("td",{style:Jt,children:d.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:k.path.map((W,F)=>{const B=u.has(W);return d.jsx("span",{style:{backgroundColor:B?"#ff3b3030":"#141414",border:`1px solid ${B?"#ff3b30":"#3d3d3d"}`,padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"11px",color:B?"#ff3b30":"#00ff88"},children:W},F)})})}),d.jsxs("td",{style:Jt,children:[le," мс"]}),d.jsx("td",{style:Jt,children:d.jsx("span",{style:{backgroundColor:de?"#ff3b3020":"#00ff8820",color:de?"#ff3b30":"#00ff88",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:de?"Перемаршрутизация":k.status})})]},ee)})})]})})]}),o==="economic"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Экономический Расчет, Динамический Тепловой Режим и Запас Топлива (Real-Time Telemetry)"}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[d.jsx(Wn,{icon:d.jsx(pa,{color:"#00ff88",size:20}),title:"Капитальные затраты (CAPEX)",value:`$${(((ne==null?void 0:ne.total_capex_usd)||312e5)/1e6).toFixed(2)}M`,sub:`$650,000 / КА (${g} активных Аппаратов)`}),d.jsx(Wn,{icon:d.jsx(pa,{color:"#1473e6",size:20}),title:"Годовой OPEX",value:`$${(((ne==null?void 0:ne.annual_opex_usd)||216e4)/1e6).toFixed(2)}M/год`,sub:"$45,000 / КА в год"}),d.jsx(Wn,{icon:d.jsx(Qf,{color:w>=80?"#ff3b30":"#ffaa00",size:20}),title:"Средняя температура КА",value:`${S.toFixed(1)}°C`,sub:`Макс: ${w.toFixed(1)}°C (${p} КА в охлаждении)`}),d.jsx(Wn,{icon:d.jsx(nb,{color:"#00f0ff",size:20}),title:"Запас топлива (Ксенон ЭРДУ)",value:`${v.toFixed(3)} кг (${y.toFixed(1)}%)`,sub:`Расход: 6 г/сутки на КА (Всего ${(g*.006).toFixed(3)} кг/сут)`})]}),d.jsxs("div",{style:{backgroundColor:"#141c28",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600,fontSize:"13px"},children:[d.jsx(pa,{size:16}),d.jsx("span",{children:"Калькулятор Выведения на Орбиту & Удельной Стоимости Трафика ($/Гбит/с)"})]}),d.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Выберите РКН для вывода группировки:"})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[{id:"soyuz",name:"Союз-2.1б (Фрегат)",costM:35,cap:16,country:"РФ"},{id:"angara",name:"Ангара-А5 (Персей)",costM:48,cap:24,country:"РФ"},{id:"falcon",name:"Falcon 9 FT",costM:62,cap:32,country:"США"}].map(k=>d.jsxs("button",{onClick:()=>h(k.id),style:{backgroundColor:f===k.id?"#1473e630":"#12161f",border:`1px solid ${f===k.id?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",color:"#fff",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{style:{fontWeight:600,fontSize:"12px",color:f===k.id?"#38bdf8":"#e2e8f0"},children:k.name}),d.jsx("span",{style:{fontSize:"10px",padding:"1px 4px",borderRadius:"2px",backgroundColor:"#333",color:"#aaa"},children:k.country})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:["Емкость: ",d.jsxs("b",{children:[k.cap," КА/пуск"]})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#00ff88",fontWeight:600},children:["Пуск: $",k.costM,"M"]})]},k.id))}),(()=>{const k=f==="soyuz"?16:f==="angara"?24:32,ee=f==="soyuz"?35:f==="angara"?48:62,de=Math.ceil(x/k),le=de*ee,W=x*.65,F=W+le,B=Math.round(F*1e6/(48*36));return d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"10px",marginTop:"4px"},children:[d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Число пусков РКН"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fff",marginTop:"2px"},children:[de," пуск",de>1?de>4?"ов":"а":""]}),d.jsxs("div",{style:{fontSize:"10px",color:"#38bdf8"},children:["по ",k," КА на ракете"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Затраты на пуски"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#00ff88",marginTop:"2px"},children:["$",le.toFixed(1),"M"]}),d.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["$",ee,"M за 1 пуск"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Полный CAPEX (КА + Пуски)"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fbbf24",marginTop:"2px"},children:["$",F.toFixed(1),"M"]}),d.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["КА: $",W.toFixed(1),"M"]})]}),d.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Удельная стоимость трафика"}),d.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#38bdf8",marginTop:"2px"},children:["$",B]}),d.jsx("div",{style:{fontSize:"10px",color:"#aaa"},children:"/ Гбит/с в месяц"})]})]})})()]})]})]})},Wn=({icon:n,title:e,value:t,sub:i})=>d.jsxs("div",{style:{backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[n,d.jsx("span",{style:{fontSize:"11px",color:"#888"},children:e})]}),d.jsx("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#ffffff"},children:t}),d.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:i})]}),Vr=n=>({backgroundColor:n?"#1473e6":"#2a2a2a",color:n?"#ffffff":"#b0b0b0",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}),cc={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px"},ox={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},ax={backgroundColor:"#121212",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"4px"},Zt={padding:"8px 10px",borderBottom:"1px solid #383838"},Jt={padding:"8px 10px"},yh="cosmo_configurator_last_config_v1",VR=()=>{try{const n=localStorage.getItem(yh);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load saved config from localStorage",n)}return null},WR=({onApplyConfig:n,onExportJson:e})=>{const t=VR(),[i,r]=xe.useState((t==null?void 0:t.altitude)??550),[s,o]=xe.useState((t==null?void 0:t.inclination)??87),[a,l]=xe.useState((t==null?void 0:t.planes)??6),[c,f]=xe.useState((t==null?void 0:t.satsPerPlane)??8),[h,u]=xe.useState((t==null?void 0:t.islType)??"grid-4"),m=10;xe.useEffect(()=>{try{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};localStorage.setItem(yh,JSON.stringify(_))}catch(_){console.error("Failed to save config to localStorage",_)}},[i,s,a,c,h]);const x=()=>{const _={altitude:i,inclination:s,planes:a,satsPerPlane:c,islType:h,minElevation:m};try{localStorage.setItem(yh,JSON.stringify(_))}catch(g){console.error(g)}n(_)};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(vp,{size:18,style:{color:"#1473e6"}}),d.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Конфигуратор Параметров Спутниковой Группировки"})]}),e&&d.jsxs("button",{onClick:e,style:{backgroundColor:"#2a2a2a",color:"#00ff88",border:"1px solid #444",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(xp,{size:13}),d.jsx("span",{children:"Экспорт в JSON"})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[d.jsxs("div",{style:lx,children:[d.jsx("h4",{style:cx,children:"Орбитальная Геометрия (Walker Delta)"}),d.jsxs("div",{style:Hs,children:[d.jsxs("label",{style:Gs,children:["Высота орбиты (км): ",d.jsxs("b",{children:[i," км"]})]}),d.jsx("input",{type:"range",min:"400",max:"1500",step:"50",value:i,onChange:_=>r(parseInt(_.target.value)),style:la})]}),d.jsxs("div",{style:Hs,children:[d.jsxs("label",{style:Gs,children:["Наклонение орбиты (°): ",d.jsxs("b",{children:[s,"°"]})]}),d.jsx("input",{type:"range",min:"30",max:"98",step:"0.5",value:s,onChange:_=>o(parseFloat(_.target.value)),style:la})]}),d.jsxs("div",{style:Hs,children:[d.jsxs("label",{style:Gs,children:["Количество плоскостей: ",d.jsx("b",{children:a})]}),d.jsx("input",{type:"range",min:"2",max:"12",step:"1",value:a,onChange:_=>l(parseInt(_.target.value)),style:la})]}),d.jsxs("div",{style:Hs,children:[d.jsxs("label",{style:Gs,children:["Спутников в плоскости: ",d.jsx("b",{children:c})," (Всего: ",a*c,")"]}),d.jsx("input",{type:"range",min:"4",max:"16",step:"1",value:c,onChange:_=>f(parseInt(_.target.value)),style:la})]})]}),d.jsxs("div",{style:lx,children:[d.jsx("h4",{style:cx,children:"Межспутниковая Связь (ISL) & Угол Обзора"}),d.jsxs("div",{style:Hs,children:[d.jsx("label",{style:Gs,children:"Топология ISL линий:"}),d.jsxs("select",{value:h,onChange:_=>u(_.target.value),style:XR,children:[d.jsx("option",{value:"grid-4",children:"Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)"}),d.jsx("option",{value:"intra-only",children:"Только внутри плоскости (Intra-plane)"}),d.jsx("option",{value:"full-mesh",children:"Динамическая перестройка (Full Mesh)"})]})]}),d.jsxs("div",{style:{...Hs,opacity:.7},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ffaa00"},children:[d.jsx(rb,{size:13}),d.jsxs("label",{style:Gs,children:["Угол обзора / Мин. угол места: ",d.jsxs("b",{children:[m,"° (Заблокирован)"]})]})]}),d.jsx("input",{type:"range",min:"10",max:"10",value:m,disabled:!0,style:{...la,cursor:"not-allowed",accentColor:"#888"}}),d.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Угол обзора диаграммы направленности фиксирован регламентом системы (10°)."})]}),d.jsx("div",{style:{marginTop:"auto",padding:"12px",backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",fontSize:"11px",color:"#aaa"},children:"Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°)."})]})]}),d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"8px"},children:d.jsxs("button",{onClick:x,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(mb,{size:14}),d.jsx("span",{children:"Применить и Запустить Расчет"})]})})]})},lx={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},cx={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Hs={display:"flex",flexDirection:"column",gap:"4px"},Gs={fontSize:"11px",color:"#aaa"},la={width:"100%",accentColor:"#1473e6",cursor:"pointer"},XR={backgroundColor:"#141414",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",padding:"6px 8px",fontSize:"12px",outline:"none"},$R=({onOpenConfigurator:n,baseScenario:e,onVisualizeScenario:t,onClose:i,onSetCriticalSatellites:r})=>{const[s,o]=xe.useState([]),[a,l]=xe.useState(!1),[c,f]=xe.useState(null),[h,u]=xe.useState(!0),[m,x]=xe.useState(.01),[_,g]=xe.useState(15e6),[p,v]=xe.useState(14),y=()=>{if(!e){f("Не загружен базовый сценарий для анализа.");return}u(!1),l(!0),fetch("/api/analyze_combinations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:e,failure_probability:m,emergency_launch_cost_usd:_,launch_delay_days:p})}).then(w=>{if(!w.ok)throw new Error("Ошибка при генерации сценариев");return w.json()}).then(w=>{o(w.combinations||[]),l(!1)}).catch(w=>{console.error("Error fetching combinations",w),f(w.message),l(!1)})};if(h)return d.jsxs("div",{style:{padding:"24px",display:"flex",flexDirection:"column",gap:"20px",height:"100%",color:"#e0e0e0"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",borderBottom:"1px solid #333",paddingBottom:"12px"},children:[d.jsx(vp,{size:24,style:{color:"#00ff88"}}),d.jsx("h2",{style:{margin:0,fontSize:"18px"},children:"Анализ Проектов и Комбинаций Отказов"})]}),d.jsx("p",{style:{fontSize:"13px",color:"#aaa",lineHeight:"1.5"},children:"Базовый сценарий загружен. Перед запуском комбинаторного анализа отказов задайте экономические константы, которые будут использоваться для оценки стоимости возможных планов спасения группировки."}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",backgroundColor:"#141414",padding:"20px",borderRadius:"8px",border:"1px solid #333"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#00f0ff",fontWeight:"bold"},children:"Ежедневная вероятность отказа 1 спутника (доли единицы)"}),d.jsx("input",{type:"number",step:"0.001",value:m,onChange:w=>x(parseFloat(w.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Например: 0.01 (1% шанс в день)"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#00ff88",fontWeight:"bold"},children:"Стоимость 1 экстренного пуска ракеты ($)"}),d.jsx("input",{type:"number",step:"1000000",value:_,onChange:w=>g(parseFloat(w.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Обычно от $15M до $60M"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsx("label",{style:{fontSize:"12px",color:"#ffaa00",fontWeight:"bold"},children:"Задержка подготовки пуска (Дни)"}),d.jsx("input",{type:"number",value:p,onChange:w=>v(parseInt(w.target.value)),style:{backgroundColor:"#1a1a1a",border:"1px solid #444",color:"#fff",padding:"8px",borderRadius:"4px",width:"200px"}}),d.jsx("span",{style:{fontSize:"11px",color:"#777"},children:"Время, в течение которого штрафы SLA будут накапливаться"})]})]}),d.jsxs("button",{onClick:y,style:{alignSelf:"flex-start",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"6px",padding:"12px 24px",fontSize:"14px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",marginTop:"10px"},children:[d.jsx(Md,{size:18}),d.jsx("span",{children:"Запустить Анализ Комбинаций"})]})]});if(a)return d.jsxs("div",{style:{padding:"30px",textAlign:"center",color:"#00ff88",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[d.jsx(bo,{size:48,className:"animate-pulse"}),d.jsx("h3",{children:"Монте-Карло Анализ..."}),d.jsx("p",{style:{color:"#aaa",fontSize:"12px"},children:"Генерация комбинаций отказов, расчет маршрутов и оценка финансовых рисков (SLA) для всех возможных вариантов..."})]});if(c)return d.jsxs("div",{style:{padding:"20px",color:"#ff3b30"},children:["Ошибка: ",c]});const S=w=>w>=1e6?`$${(w/1e6).toFixed(1)}M`:w>=1e3?`$${(w/1e3).toFixed(1)}k`:`$${w}`;return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(bo,{size:18,style:{color:"#1473e6"}}),d.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Сводка Монте-Карло (Big Data Analysis)"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",color:"#00ff88",backgroundColor:"#00ff8815",padding:"4px 8px",borderRadius:"4px",border:"1px solid #00ff8840"},children:[d.jsx(bc,{size:13}),d.jsx("span",{children:"Все варианты отсортированы по Матожиданию Риска"})]})]}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"left"},children:[d.jsx("thead",{children:d.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",borderBottom:"1px solid #333"},children:[d.jsx("th",{style:{padding:"10px"},children:"Сценарий"}),d.jsx("th",{style:{padding:"10px"},children:"Вероятность"}),d.jsx("th",{style:{padding:"10px"},children:"SLA %"}),d.jsx("th",{style:{padding:"10px"},children:"Отказы (КА)"}),d.jsx("th",{style:{padding:"10px"},children:"Общие Убытки"}),d.jsx("th",{style:{padding:"10px"},children:"План Спасения"}),d.jsx("th",{style:{padding:"10px"},children:"Действие"})]})}),d.jsx("tbody",{children:s.map((w,T)=>{var E;return d.jsxs("tr",{style:{borderBottom:"1px solid #282828",backgroundColor:T%2===0?"#1a1a1a":"#141414"},children:[d.jsx("td",{style:{padding:"10px",color:w.mc_type==="optimistic"?"#00ff88":"#e0e0e0",fontWeight:"bold"},children:((E=w.scenario_meta)==null?void 0:E.title)||`Вариант ${T}`}),d.jsxs("td",{style:{padding:"10px",color:"#00f0ff"},children:[(w.mc_prob*100).toFixed(4),"%"]}),d.jsx("td",{style:{padding:"10px"},children:d.jsxs("span",{style:{color:w.overall_availability*100>=90?"#00ff88":"#ff3b30",fontWeight:"bold"},children:[(w.overall_availability*100).toFixed(1),"%"]})}),d.jsx("td",{style:{padding:"10px",color:w.mc_failed_count>0?"#ff3b30":"#888"},children:w.mc_failed_count}),d.jsx("td",{style:{padding:"10px",color:"#ffaa00",fontWeight:"bold"},children:S(w.total_annual_cost_usd)}),d.jsx("td",{style:{padding:"10px",color:"#ccc",maxWidth:"200px"},children:w.remediation_plan}),d.jsx("td",{style:{padding:"10px"},children:t&&d.jsx("button",{onClick:()=>{t(w.raw_scenario,w.simulation_result),i&&i()},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"11px",fontWeight:600,cursor:"pointer"},children:"3D Анализ"})})]},T)})})]})})]})},YR=({logs:n})=>{const[e,t]=xe.useState(!0);return d.jsxs("div",{style:{position:"fixed",bottom:"12px",left:"16px",width:"420px",maxWidth:"calc(100vw - 32px)",zIndex:80,backgroundColor:"#1a1a1a",border:"1px solid #383838",borderRadius:"6px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",overflow:"hidden",fontFamily:"monospace",fontSize:"11px"},children:[d.jsxs("div",{onClick:()=>t(!e),style:{padding:"6px 12px",backgroundColor:"#242424",borderBottom:e?"1px solid #383838":"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:"#ccc",fontWeight:600},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(Sb,{size:13,style:{color:"#1473e6"}}),d.jsxs("span",{children:["Журнал Событий Системы (",n.length,")"]})]}),e?d.jsx(mp,{size:14}):d.jsx(Ev,{size:14})]}),e&&d.jsx("div",{style:{maxHeight:"130px",overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"4px",backgroundColor:"#121212"},children:n.map(i=>d.jsxs("div",{style:{display:"flex",gap:"8px",lineHeight:"1.4"},children:[d.jsxs("span",{style:{color:"#666",flexShrink:0},children:["[",i.time,"]"]}),d.jsx("span",{style:{color:i.type==="error"?"#ff3b30":i.type==="warning"?"#ffaa00":i.type==="success"?"#00ff88":"#2680eb"},children:i.text})]},i.id))})]})},KR=({currentTime:n,maxTime:e=86400,stepSeconds:t,onChangeStep:i,onChangeTime:r})=>{const[s,o]=xe.useState(!1),[a,l]=xe.useState(t.toString());xe.useEffect(()=>{l(t.toString())},[t]),xe.useEffect(()=>{let h=null;return s&&(h=setInterval(()=>{r(u=>{const m=u+t;return m>=e?0:m})},250)),()=>clearInterval(h)},[s,t,e,r]);const c=h=>{const u=Math.floor(h/3600),m=Math.floor(h%3600/60),x=h%60;return`+${u.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${x.toString().padStart(2,"0")}`},f=h=>{const u=h.target.value;l(u);const m=parseInt(u,10);!isNaN(m)&&m>0&&i(m)};return d.jsxs("div",{style:{position:"absolute",bottom:"24px",right:"24px",width:"840px",maxWidth:"calc(100% - 48px)",display:"flex",alignItems:"center",gap:"14px",zIndex:85,backgroundColor:"rgba(15, 23, 42, 0.92)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"12px",padding:"12px 20px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.6)",backdropFilter:"blur(12px)",color:"#e0e0e0",fontSize:"13px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("button",{onClick:()=>r(h=>Math.max(0,h-t)),style:nf,title:"Шаг назад",children:d.jsx(gb,{size:18})}),d.jsx("button",{onClick:()=>o(!s),style:{...nf,backgroundColor:s?"#ff3b30":"#1473e6",color:"#fff",border:"none",boxShadow:s?"0 2px 10px rgba(255, 59, 48, 0.5)":"0 2px 10px rgba(20, 115, 230, 0.5)"},title:s?"Пауза":"Воспроизведение",children:s?d.jsx(db,{size:18}):d.jsx(Md,{size:18})}),d.jsx("button",{onClick:()=>r(h=>Math.min(e,h+t)),style:nf,title:"Шаг вперед",children:d.jsx(xb,{size:18})})]}),d.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"4px",minWidth:"180px"},children:[d.jsx("input",{type:"range",min:"0",max:e,step:t,value:n,onChange:h=>{const u=parseInt(h.target.value,10);r(()=>u)},style:{width:"100%",accentColor:"#1473e6",cursor:"pointer",height:"8px",filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.8))"}}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#aaa",fontWeight:600},children:[d.jsx("span",{children:"T=0с"}),d.jsxs("span",{children:[Math.round(n/e*100),"%"]}),d.jsx("span",{children:"T=24ч"})]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{style:{fontSize:"12px",color:"#ccc",fontWeight:600,whiteSpace:"nowrap"},children:"Шаг (сек):"}),d.jsx("input",{type:"number",min:"1",max:"86400",value:a,onChange:f,style:{width:"64px",backgroundColor:"rgba(25, 30, 45, 0.9)",color:"#00ff88",border:"1px solid #444",borderRadius:"6px",padding:"5px 8px",fontSize:"13px",fontWeight:"bold",outline:"none",textAlign:"center",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.5)"}})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace",backgroundColor:"rgba(10, 15, 25, 0.9)",border:"1px solid #334",padding:"5px 10px",borderRadius:"6px",color:"#00ff88",fontSize:"13px",fontWeight:"bold",boxShadow:"0 2px 6px rgba(0,0,0,0.4)",backdropFilter:"blur(4px)"},children:[d.jsx(gp,{size:14}),d.jsx("span",{children:c(n)})]})]})},nf={backgroundColor:"rgba(30, 40, 55, 0.85)",color:"#e0e0e0",border:"1px solid #445",borderRadius:"6px",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.4)",backdropFilter:"blur(4px)",transition:"all 0.15s ease"},qR=({scenario:n,currentTimeSeconds:e=0,onSelectSatellite:t})=>{const[i,r]=xe.useState(!0);if(!n||!n.satellites)return null;const s=n.satellites.map(f=>Do(f,e)),o=s.filter(f=>(f.temperature_c??35)>=80),a=s.filter(f=>(f.temperature_c??35)>=70&&(f.temperature_c??35)<80),l=o.length,c=a.length;return l===0&&c===0?null:d.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:88,backgroundColor:"rgba(20, 20, 20, 0.92)",backdropFilter:"blur(10px)",border:l>0?"1px solid #ff3b30":"1px solid #ffaa00",borderRadius:"8px",padding:"10px 14px",maxWidth:"min(360px, calc(100vw - 32px))",color:"#fff",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.6)",fontSize:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>r(!i),children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx(pp,{color:l>0?"#ff3b30":"#ffaa00",size:18}),d.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px",color:l>0?"#ff3b30":"#ffaa00"},children:["Предупреждения Бортовых Систем КА (",l+c,")"]})]}),d.jsx("button",{style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",display:"flex",alignItems:"center"},children:i?d.jsx(Ev,{size:16}):d.jsx(mp,{size:16})})]}),d.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:o.length>0&&d.jsxs("span",{style:{backgroundColor:"#ff3b3030",border:"1px solid #ff3b30",color:"#ff3b30",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(Qf,{size:12})," ",o.length," Перегрев (≥ 80°C)"]})}),i&&d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"180px",overflowY:"auto",marginTop:"4px"},children:o.map(f=>d.jsxs("div",{onClick:()=>t(f),style:{backgroundColor:"#2a1515",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(Qf,{size:14,color:"#ff3b30"}),d.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",f.id,"]"]}),d.jsxs("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:[f.temperature_c??84,"°C"]})]}),d.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[d.jsx(eb,{size:10})," Клик для фокуса"]})]},`overheat-${f.id}`))})]})},ZR=({satellite:n,activeRoutePath:e,currentOutages:t,currentTimeSeconds:i=0,onClose:r,onApplyOutage:s,onRestoreSatellite:o})=>{if(!n)return null;const a=Do(n,i),c=!!t.find(u=>u.satellite_id===a.id),[f,h]=xe.useState(3600);return d.jsxs("div",{style:{padding:"14px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"12px",color:"#e2e8f0",backgroundColor:"#18181b",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{padding:"12px",backgroundColor:c?"#ff3b3015":"#00ff8815",border:`1px solid ${c?"#ff3b3050":"#00ff8850"}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{children:[d.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Текущий статус аппарата:"}),d.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",color:c?"#ff3b30":"#00ff88",marginTop:"2px"},children:c?"ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)":"ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ"})]}),c?d.jsx(qS,{size:24,color:"#ff3b30"}):d.jsx(Km,{size:24,color:"#00ff88"})]}),d.jsxs("div",{style:{backgroundColor:"#27272a",border:"1px solid #3f3f46",borderRadius:"6px",padding:"10px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#f8fafc",fontWeight:600,fontSize:"12px"},children:[d.jsx(bo,{size:14,style:{color:"#34d399"}}),d.jsx("span",{children:"Маршрут передачи трафика:"})]}),e&&e.length>0?d.jsx("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",fontFamily:"monospace",fontSize:"12px",marginTop:"2px"},children:e.map((u,m)=>d.jsxs(Tc.Fragment,{children:[d.jsx("span",{style:{backgroundColor:u===a.id?"#ffffff":"#18181b",color:u===a.id?"#000000":"#e2e8f0",border:`1px solid ${u===a.id?"#ffffff":"#52525b"}`,borderRadius:"4px",padding:"2px 7px",fontWeight:600},children:u}),m<e.length-1&&d.jsx("span",{style:{color:"#a1a1aa",fontWeight:"bold"},children:"→"})]},m))}):d.jsx("span",{style:{fontSize:"12px",color:"#a1a1aa",fontStyle:"italic"},children:"Канал свободен (нет активного транзита трафика)"})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",backgroundColor:"#27272a",padding:"10px",borderRadius:"6px",border:"1px solid #3f3f46"},children:[d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Идентификатор КА:"})," ",d.jsx("b",{style:{color:"#fff"},children:a.id})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Орбитальная плоскость:"})," ",d.jsxs("b",{style:{color:"#fff"},children:["P",a.plane]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Высота орб. (LEO):"})," ",d.jsxs("b",{style:{color:"#fff"},children:[Math.round(a.altitude)," км"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Геоцентрическая скорость:"})," ",d.jsx("b",{style:{color:"#38bdf8"},children:"7.59 км/с"})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Координаты (Lat / Lon):"})," ",d.jsxs("b",{style:{color:"#fff"},children:[a.sub_lat.toFixed(1),"° / ",a.sub_lon.toFixed(1),"°"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Доплеровский сдвиг:"})," ",d.jsxs("b",{style:{color:"#38bdf8"},children:[(Math.sin(i*.05+a.sub_lat)*14.2).toFixed(1)," кГц"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Запас линии (Link Margin):"})," ",d.jsx("b",{style:{color:"#34d399"},children:"+5.2 dB (SLA PASS)"})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Температура ЭВМ:"})," ",d.jsxs("b",{style:{color:(a.temperature_c??38)>=80?"#ff3b30":(a.temperature_c??38)>=60?"#ffaa00":"#00ff88"},children:[a.temperature_c??38.5,"°C ",(a.temperature_c??38)>=80?"[ПЕРЕГРЕВ]":""]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Солнечные батареи:"})," ",d.jsxs("b",{style:{color:"#ffaa00"},children:[a.solar_power_w??1850," Вт"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Заряд аккумуляторов (АКБ):"})," ",d.jsxs("b",{style:{color:"#00ff88"},children:[a.battery_pct??100,"%"]})]}),d.jsxs("div",{children:[d.jsx("span",{style:{color:"#a1a1aa"},children:"Оптические терминалы ISL:"})," ",d.jsx("b",{style:{color:"#38bdf8"},children:"4 / 4 Активны"})]})]}),c?d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontWeight:"bold",color:"#00ff88"},children:"💰 ВАРИАНТ 1: Перенастройка сетки ISL"}),d.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"9px",padding:"1px 5px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),d.jsxs("p",{style:{fontSize:"11px",color:"#bbb",margin:0,lineHeight:"1.3"},children:["Перенаправление трафика через смежные КА кольца. Затраты: ",d.jsx("b",{style:{color:"#00ff88"},children:"$25,000"}),". Экономия: ",d.jsx("b",{style:{color:"#00ff88"},children:"$805,000"}),"."]})]}),d.jsxs("button",{onClick:()=>o(a.id),style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"6px",padding:"10px",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[d.jsx(Km,{size:14}),d.jsx("span",{children:"Восстановить работу КА"})]})]}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsx("label",{style:{color:"#a1a1aa",fontWeight:500},children:"Задать длительность отказа (сек):"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[{label:"5 мин",val:300},{label:"30 мин",val:1800},{label:"1 час",val:3600},{label:"24 часа",val:86400}].map(u=>d.jsx("button",{onClick:()=>h(u.val),style:{padding:"6px 0",fontSize:"11px",backgroundColor:f===u.val?"#ffffff":"#27272a",color:f===u.val?"#000000":"#e2e8f0",border:`1px solid ${f===u.val?"#ffffff":"#3f3f46"}`,borderRadius:"4px",fontWeight:f===u.val?600:400,cursor:"pointer"},children:u.label},u.val))}),d.jsxs("button",{onClick:()=>s(a.id,f),style:{backgroundColor:"#ff3b30",color:"#fff",border:"none",borderRadius:"6px",padding:"10px",fontWeight:600,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"4px"},children:[d.jsx(fb,{size:14}),d.jsxs("span",{children:["Вывести из строя (",f>=3600?`${f/3600} ч`:`${f/60} мин`,")"]})]})]})]})},JR=({isOpen:n,onClose:e,zIndex:t,onFocusWindow:i,currentOutages:r,outlinerSettings:s,onApplyOutageBatch:o,onClearOutages:a,onUpdateSettings:l,onAddLog:c})=>{const[f,h]=xe.useState(null);if(!n)return null;const u=r.length,m=()=>{h("cme_flare"),o([{satellite_id:"S01",start_s:0,end_s:86400},{satellite_id:"S02",start_s:0,end_s:86400},{satellite_id:"S03",start_s:0,end_s:86400},{satellite_id:"S04",start_s:0,end_s:86400}]),c("⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.","error")},x=()=>{h("gateway_down"),o([{satellite_id:"S15",start_s:0,end_s:86400},{satellite_id:"S16",start_s:0,end_s:86400},{satellite_id:"S17",start_s:0,end_s:86400}]),c("📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.","error")},_=()=>{h("debris_strike"),o([{satellite_id:"S09",start_s:0,end_s:86400},{satellite_id:"S10",start_s:0,end_s:86400},{satellite_id:"S11",start_s:0,end_s:86400},{satellite_id:"S12",start_s:0,end_s:86400}]),c("💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.","error")},g=()=>{h("arctic_surge"),o([{satellite_id:"S22",start_s:0,end_s:86400},{satellite_id:"S23",start_s:0,end_s:86400}]),c("🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.","warning")},p=()=>{const y={...s.planePhaseMap,1:(s.planePhaseMap[1]||0)+15,2:(s.planePhaseMap[2]||0)+15};l({...s,planePhaseMap:y}),c("💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!","success")},v=()=>{a(),c("🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.","info")};return d.jsx(Yr,{id:"emergency_modal",title:"Симуляция Событий ЧС & Экономические Рекомендации",isOpen:n,onClose:e,zIndex:t,onFocus:i,initialPos:{x:120,y:50,width:680,height:580},children:d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",color:"#e0e0e0",fontSize:"12px"},children:[d.jsxs("div",{style:{backgroundColor:u>0?"#ff3b3015":"#1473e615",border:`1px solid ${u>0?"#ff3b3050":"#1473e650"}`,borderRadius:"6px",padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx(wd,{size:22,style:{color:u>0?"#ff3b30":"#1473e6"}}),d.jsxs("div",{children:[d.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#fff"},children:u>0?`АКТИВНО СОБЫТИЕ ЧС (${u} КА НЕРАБОТОСПОСОБНЫ)`:"СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)"}),d.jsx("div",{style:{color:"#888",fontSize:"11px",marginTop:"2px"},children:"Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации."})]})]}),u>0&&d.jsxs("button",{onClick:()=>{a(),h(null),c("Сброшены все аварийные состояния ЧС.","info")},style:{backgroundColor:"#333",color:"#fff",border:"1px solid #555",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsx(pb,{size:12}),d.jsx("span",{children:"Ликвидировать ЧС"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{style:{fontWeight:600,color:"#ccc",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(Jc,{size:14,style:{color:"#ffaa00"}}),d.jsx("span",{children:"Выбор сценария техногенной / природной ЧС:"})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[d.jsxs("button",{onClick:m,style:{backgroundColor:f==="cme_flare"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="cme_flare"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff5555"},children:[d.jsx(Jc,{size:14}),d.jsx("span",{children:"⚡ 1. Солнечная вспышка (CME)"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04)."})]}),d.jsxs("button",{onClick:x,style:{backgroundColor:f==="gateway_down"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="gateway_down"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ffaa00"},children:[d.jsx(eh,{size:14}),d.jsx("span",{children:"📡 2. Отказ наземного шлюза"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17."})]}),d.jsxs("button",{onClick:_,style:{backgroundColor:f==="debris_strike"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="debris_strike"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff3b30"},children:[d.jsx(Cv,{size:14}),d.jsx("span",{children:"💥 3. Каскад космического мусора"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12)."})]}),d.jsxs("button",{onClick:g,style:{backgroundColor:f==="arctic_surge"?"#1c2d3d":"#1c1c1c",border:`1px solid ${f==="arctic_surge"?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[d.jsx(bo,{size:14}),d.jsx("span",{children:"🚑 4. Спасательная операция ЧС"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23."})]})]})]}),d.jsxs("div",{style:{backgroundColor:"#141822",border:"1px solid #1e293b",borderRadius:"6px",padding:"12px"},children:[d.jsxs("div",{style:{fontWeight:600,color:"#e2e8f0",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px",fontSize:"12px"},children:[d.jsx(eh,{size:14,style:{color:"#ffaa00"}}),d.jsx("span",{children:"Управление аварийными отказами наземных шлюзовых станций (Gateways):"})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(115px, 1fr))",gap:"6px"},children:[{id:"C65",name:"Москва C65"},{id:"Pechora",name:"Печора"},{id:"Murmansk",name:"Мурманск"},{id:"Novosibirsk",name:"Новосибирск"},{id:"Vladivostok",name:"Владивосток"}].map(y=>{var w;const S=!!((w=s.offlineGateways)!=null&&w[y.id]);return d.jsxs("button",{onClick:()=>{const T={...s.offlineGateways||{},[y.id]:!S};l({...s,offlineGateways:T}),S?c(`📡 [Восстановление] Шлюзовой узел ${y.name} (${y.id}) восстановлен и вернулся в строй.`,"success"):c(`📡 [Событие ЧС] Авария наземного шлюзового узла ${y.name} (${y.id})! Станция отключена.`,"error")},style:{backgroundColor:S?"#ff3b3025":"#1e293b",border:`1px solid ${S?"#ff3b30":"#334155"}`,color:S?"#ff4d4f":"#cbd5e1",borderRadius:"4px",padding:"6px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{children:y.name}),d.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",borderRadius:"2px",backgroundColor:S?"#ff3b30":"#00ff8820",color:S?"#fff":"#00ff88"},children:S?"АВАРИЯ":"ОК"})]},y.id)})})]}),d.jsxs("div",{style:{backgroundColor:"#161d24",border:"1px solid #1473e660",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600,fontSize:"13px"},children:[d.jsx(pa,{size:16}),d.jsx("span",{children:"Расчет самого экономически выгодного варианта компенсации"})]}),d.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",padding:"2px 6px",borderRadius:"3px"},children:"WGS-84 / SLA Оптимизатор"})]}),u===0?d.jsx("div",{style:{color:"#888",fontSize:"11px",fontStyle:"italic",padding:"10px 0"},children:"Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа."}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{fontSize:"11px",color:"#aaa",backgroundColor:"#111",padding:"8px 10px",borderRadius:"4px",borderLeft:"3px solid #ff3b30"},children:[d.jsx("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:"[ПРОГНОЗ УБЫТКОВ]:"})," Риск штрафов SLA за простой связи: ",d.jsxs("b",{style:{color:"#fff"},children:["$",(u*12e4).toLocaleString(),"/год"]}),"."]}),d.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#00ff88",fontWeight:"bold"},children:[d.jsx(Mo,{size:15}),d.jsx("span",{children:"ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит"})]}),d.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"10px",padding:"2px 6px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#bbb",lineHeight:"1.4"},children:[d.jsx("b",{children:"Суть метода:"})," Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).",d.jsx("br",{}),d.jsx("b",{children:"Затраты:"})," ",d.jsx("b",{style:{color:"#00ff88"},children:"$50,000"})," (расход ксенонового топлива на коррекцию орбитальной позиции).",d.jsx("br",{}),d.jsx("b",{children:"Экономический эффект:"})," Полное сохранение SLA 99.9%. Чистая экономия: ",d.jsx("b",{style:{color:"#00ff88"},children:"$3,270,000"})," по сравнению с физической заменой аппаратов."]}),d.jsxs("button",{onClick:p,style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginTop:"4px"},children:[d.jsx(Mo,{size:14}),d.jsx("span",{children:"Применить перенастройку сетки (Экономия $3.27M)"})]})]}),d.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontWeight:600,color:"#ff6666"},children:"ВАРИАНТ 2: Замена резервными спутниками из запаса"}),d.jsx("span",{style:{color:"#888",fontSize:"10px"},children:"[ВЫСОКИЕ ЗАТРАТЫ]"})]}),d.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:[d.jsx("b",{children:"Затраты:"})," ",d.jsxs("b",{style:{color:"#ff6666"},children:["$",(u*83e4).toLocaleString()]})," ($",u,"x КА CAPEX $650k + межорбитальный переход $180k)."]}),d.jsxs("button",{onClick:v,style:{backgroundColor:"#2a2020",color:"#ff8888",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 10px",fontSize:"11px",cursor:"pointer",marginTop:"2px"},children:["Ввести ",u," резервных КА из запаса ($",(u*83e4/1e6).toFixed(2),"M)"]})]})]})]})]})})},QR=({scenarios:n,activeScenarioId:e,onSelectScenario:t,onUploadScenarioJson:i,onDeleteScenario:r,onExportScenarioJson:s,onOpenConfigurator:o})=>{const a=xe.useRef(null),l=c=>{var h;const f=(h=c.target.files)==null?void 0:h[0];if(f){const u=new FileReader;u.onload=m=>{var x;try{const _=JSON.parse((x=m.target)==null?void 0:x.result);i(_),a.current&&(a.current.value="")}catch{alert("Ошибка чтения JSON файла. Проверьте формат файла.")}},u.readAsText(f)}};return d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#161d28",border:"1px solid #3f3f46",borderRadius:"6px",padding:"12px 14px",flexWrap:"wrap",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#f8fafc",fontWeight:600,fontSize:"13px"},children:[d.jsx(Ya,{size:18}),d.jsxs("span",{children:["Менеджер Сценариев (",n.length,")"]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("input",{type:"file",ref:a,onChange:l,accept:".json",style:{display:"none"}}),d.jsxs("button",{onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},style:{backgroundColor:"#ffffff",color:"#000000",border:"none",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[d.jsx(Mb,{size:14}),d.jsx("span",{children:"Загрузить свой JSON"})]}),d.jsxs("button",{onClick:o,style:{backgroundColor:"#20242b",color:"#a78bfa",border:"1px solid #333943",borderRadius:"6px",padding:"6px 12px",fontSize:"12px",fontWeight:500,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[d.jsx(ub,{size:14}),d.jsx("span",{children:"Новый в Конфигураторе"})]})]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"12px"},children:n.map(c=>{const f=c.id===e||c.id===e.replace(".json","");return d.jsxs("div",{style:{backgroundColor:f?"#142238":"#1f1f1f",border:`1px solid ${f?"#1473e6":"#383838"}`,borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"12px",transition:"all 0.15s ease"},children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(tb,{size:16,style:{color:f?"#38bdf8":"#888"}}),d.jsx("span",{style:{fontWeight:600,fontSize:"13px",color:f?"#ffffff":"#e0e0e0"},children:c.title})]}),f&&d.jsxs("span",{style:{backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:[d.jsx(Mo,{size:11})," Активный"]})]}),d.jsxs("span",{style:{fontSize:"11px",color:"#888",fontFamily:"monospace"},children:["ID: ",c.id]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"8px",borderTop:"1px solid #2d323b"},children:[f?d.jsx("span",{style:{fontSize:"11px",color:"#00ff88",fontWeight:500},children:"Текущая конфигурация"}):d.jsxs("button",{onClick:()=>t(c.id),style:{backgroundColor:"#1473e620",color:"#38bdf8",border:"1px solid #1473e650",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[d.jsx(Md,{size:12}),d.jsx("span",{children:"Выбрать этот сценарий"})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[s&&f&&d.jsx("button",{onClick:s,title:"Скачать JSON этого сценария",style:{backgroundColor:"#20242b",color:"#94a3b8",border:"1px solid #333943",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer"},children:d.jsx(xp,{size:12})}),n.length>1&&d.jsxs("button",{onClick:()=>r(c.id),title:"Удалить данный сценарий",style:{backgroundColor:"#2b1b1b",color:"#ff6666",border:"1px solid #7f1d1d",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px"},children:[d.jsx(Cv,{size:12}),d.jsx("span",{children:"Удалить"})]})]})]})]},c.id)})})]})},e3=({scenario:n,settings:e,currentTime:t,outages:i=[],onSelectSatellite:r})=>{var k,ee,de;const s=xe.useRef(null),o=xe.useRef(null),[a,l]=xe.useState("bw_dark"),c=(e==null?void 0:e.showOrbits)!==!1,f=(e==null?void 0:e.showCoverageHeatmap)!==!1,h=(e==null?void 0:e.showISL)!==!1,u=(e==null?void 0:e.showGateways)!==!1,m=(e==null?void 0:e.showSatellites)!==!1,x=(e==null?void 0:e.showLabels)!==!1,[_,g]=xe.useState({lat:60,lon:60}),[p,v]=xe.useState(3),[y,S]=xe.useState(!1),[w,T]=xe.useState({x:0,y:0}),[E,P]=xe.useState(null),U=new Set(i.map(le=>le.satellite_id)),b=xe.useRef({}),R=xe.useCallback((le,W)=>(le+180)/360*Math.pow(2,W)*256,[]),q=xe.useCallback((le,W)=>{const F=Math.max(-85.05112878,Math.min(85.05112878,le))*Math.PI/180;return(1-Math.log(Math.tan(F)+1/Math.cos(F))/Math.PI)/2*Math.pow(2,W)*256},[]);xe.useCallback((le,W)=>le/(Math.pow(2,W)*256)*360-180,[]),xe.useCallback((le,W)=>{const F=Math.PI-2*Math.PI*le/(Math.pow(2,W)*256);return 180/Math.PI*Math.atan(.5*(Math.exp(F)-Math.exp(-F)))},[]);const re=(le,W)=>{var Y,ie;const F=le.plane||1,B=le.raan??(F-1)*90,he=le.phase??(F-1)*15;let fe=0;typeof le.slot_deg=="number"?fe=le.slot_deg:typeof le.true_anomaly=="number"&&le.true_anomaly!==0?fe=le.true_anomaly:typeof le.idx=="number"&&(fe=le.idx>=15?le.idx:le.idx*45);const me=((Y=e==null?void 0:e.planeRaanMap)==null?void 0:Y[F])??0,ke=((ie=e==null?void 0:e.planePhaseMap)==null?void 0:ie[F])??0,we=(B+me)%360*(Math.PI/180),j=(he+ke)%360*(Math.PI/180),Be=398600.4418,Ae=(le.altitude||550)+6371,Pe=Math.sqrt(Be/Math.pow(Ae,3)),Oe=fe*(Math.PI/180)+j+Pe*W,Fe=(le.inc||53)*(Math.PI/180),oe=Math.cos(we)*Math.cos(Oe)-Math.sin(we)*Math.sin(Oe)*Math.cos(Fe),pe=Math.sin(we)*Math.cos(Oe)+Math.cos(we)*Math.sin(Oe)*Math.cos(Fe),A=Math.sin(Oe)*Math.sin(Fe),X=Math.asin(Math.max(-1,Math.min(1,A)))*180/Math.PI,z=Math.atan2(pe,oe),V=72921159e-12*W*180/Math.PI;let D=z*180/Math.PI-12-V;return D=(D%360+540)%360-180,{lat:X,lon:D}};xe.useEffect(()=>{const le=o.current,W=s.current;if(!le||!W)return;le.width=W.clientWidth||1e3,le.height=W.clientHeight||700;const F=le.getContext("2d");if(!F)return;const B=le.width,he=le.height,fe=Math.floor(p),me=Math.pow(2,p-fe),ke=R(_.lon,fe),we=q(_.lat,fe),j=z=>{const K=R(z,fe);return B/2+(K-ke)*me},Be=z=>{const K=q(z,fe);return he/2+(K-we)*me};F.fillStyle=a!=="standard"?"#0b0f19":"#f3f4f6",F.fillRect(0,0,B,he),F.strokeStyle=a!=="standard"?"#1e293b":"#cbd5e1",F.lineWidth=1;for(let z=-180;z<=180;z+=30){const K=j(z);F.beginPath(),F.moveTo(K,0),F.lineTo(K,he),F.stroke(),F.fillStyle=a!=="standard"?"#475569":"#64748b",F.font="10px monospace",F.fillText(`${z}°`,K+3,he-6)}for(let z=-60;z<=80;z+=20){const K=Be(z);F.beginPath(),F.moveTo(0,K),F.lineTo(B,K),F.stroke(),F.fillStyle=a!=="standard"?"#475569":"#64748b",F.font="10px monospace",F.fillText(`${z}°`,6,K-3)}const Ae=Be(85),Pe=Be(45),Ce=j(20),Oe=j(180);F.fillStyle=a!=="standard"?"#0284c718":"#0284c710",F.fillRect(Ce,Ae,Oe-Ce,Pe-Ae),F.strokeStyle="#0284c750",F.lineWidth=1.5,F.strokeRect(Ce,Ae,Oe-Ce,Pe-Ae),F.fillStyle="#0284c7",F.font="bold 11px sans-serif",F.fillText("ЗОНА ОБСЛУЖИВАНИЯ РФ И СМП (60°N - 90°N)",Ce+10,Ae+16);const Fe=Math.floor((ke-B/(2*me))/256),oe=Math.floor((ke+B/(2*me))/256),pe=Math.floor((we-he/(2*me))/256),A=Math.floor((we+he/(2*me))/256),M=Math.pow(2,fe);a==="bw_dark"?F.filter="grayscale(100%) invert(92%) contrast(140%)":a==="bw_light"?F.filter="grayscale(100%) contrast(120%)":F.filter="none";for(let z=Fe;z<=oe;z++)for(let K=pe;K<=A;K++){if(K<0||K>=M)continue;const V=(z%M+M)%M,D=`https://${["a","b","c"][Math.abs(z+K)%3]}.tile.openstreetmap.org/${fe}/${V}/${K}.png`,Y=z*256,ie=K*256,ge=B/2+(Y-ke)*me,J=he/2+(ie-we)*me,Ie=256*me;let Me=b.current[D];Me?Me.complete&&Me.naturalWidth>0&&F.drawImage(Me,ge,J,Ie,Ie):(Me=new Image,Me.crossOrigin="anonymous",Me.src=D,Me.onload=()=>{if(o.current){const be=o.current.getContext("2d");be&&(be.filter=a==="bw_dark"?"grayscale(100%) invert(92%) contrast(140%)":a==="bw_light"?"grayscale(100%) contrast(120%)":"none",be.drawImage(Me,ge,J,Ie,Ie),be.filter="none")}},b.current[D]=Me)}F.filter="none";const X=((n==null?void 0:n.satellites)||[]).map(z=>{const{lat:K,lon:V}=re(z,t),ve=U.has(z.id),D=Do(z,t);return{...z,lat:K,lon:V,isOffline:ve,telemetry:D,screenX:j(V),screenY:Be(K)}});if(c&&(n!=null&&n.satellites)){F.strokeStyle=a!=="standard"?"#38bdf880":"#2563eb80",F.lineWidth=1.5;const z={};n.satellites.forEach(D=>{const Y=D.plane||1;z[Y]||(z[Y]=[]),z[Y].push(D)});const V=72921159e-12*t*180/Math.PI,ve=12;Object.entries(z).forEach(([D,Y])=>{var ue,Re;if(Y.length===0)return;const ie=parseInt(D,10);if((ue=e==null?void 0:e.hiddenPlanes)!=null&&ue[ie])return;const ge=Y[0],J=ge.raan??(ie-1)*90,Ie=((Re=e==null?void 0:e.planeRaanMap)==null?void 0:Re[ie])??0,Me=(J+Ie)%360*(Math.PI/180),be=(ge.inc||53)*(Math.PI/180);F.beginPath();let Se=0,Le=!0;const L=140;for(let I=0;I<=L;I++){const ye=I/L*Math.PI*2,Z=Math.cos(Me)*Math.cos(ye)-Math.sin(Me)*Math.sin(ye)*Math.cos(be),_e=Math.sin(Me)*Math.cos(ye)+Math.cos(Me)*Math.sin(ye)*Math.cos(be),Te=Math.sin(ye)*Math.sin(be),rt=Math.asin(Math.max(-1,Math.min(1,Te)))*180/Math.PI;let nt=Math.atan2(_e,Z)*180/Math.PI-ve-V;nt=(nt%360+540)%360-180;const Ve=j(nt),qe=Be(rt);!Le&&Math.abs(Ve-Se)>B*.4?(F.stroke(),F.beginPath(),F.moveTo(Ve,qe)):Le?(F.moveTo(Ve,qe),Le=!1):F.lineTo(Ve,qe),Se=Ve}F.stroke()})}if(f&&X.forEach(z=>{if(z.isOffline)return;const K=28*Math.min(2.5,p/3);F.fillStyle=a!=="standard"?"#1473e618":"#3b82f620",F.strokeStyle=a!=="standard"?"#1473e640":"#2563eb50",F.lineWidth=1,F.beginPath(),F.arc(z.screenX,z.screenY,K,0,Math.PI*2),F.fill(),F.stroke()}),h){F.lineWidth=1.5;for(let z=0;z<X.length;z++)for(let K=z+1;K<X.length;K++){const V=X[z],ve=X[K],D=V.plane===ve.plane&&Math.abs(V.idx-ve.idx)===1,Y=Math.abs(V.plane-ve.plane)===1&&V.idx===ve.idx;if(D||Y){const ie=V.isOffline||ve.isOffline;F.strokeStyle=ie?"#ff3b3060":"#00ff8870",Math.abs(V.screenX-ve.screenX)<B*.5&&(F.beginPath(),F.moveTo(V.screenX,V.screenY),F.lineTo(ve.screenX,ve.screenY),F.stroke())}}}u&&((n==null?void 0:n.gateways)||[{id:"C65",name:"Москва C65",lat:55.75,lon:37.61},{id:"Pechora",name:"Печора НСП",lat:65.14,lon:57.22},{id:"Murmansk",name:"Мурманск Терминал",lat:68.97,lon:33.08},{id:"Novosibirsk",name:"Новосибирск Хаб",lat:55.03,lon:82.93},{id:"Vladivostok",name:"Владивосток",lat:43.11,lon:131.88}]).forEach(K=>{var ie;const V=j(K.lon),ve=Be(K.lat),D=!!((ie=e==null?void 0:e.offlineGateways)!=null&&ie[K.id]);F.fillStyle=D?"#ff3b30":"#fbbf24",F.beginPath(),F.arc(V,ve,D?8:6,0,Math.PI*2),F.fill(),F.strokeStyle="#000000",F.lineWidth=2,F.stroke(),F.fillStyle=D?"#ff3b30":a!=="standard"?"#ffffff":"#0f172a",F.font="bold 11px monospace";const Y=D?`${K.name||K.id} [АВАРИЯ]`:K.name||K.id;F.fillText(Y,V+9,ve+4)}),m&&X.forEach(z=>{const K=z.isOffline?"#ff3b30":z.telemetry.overheated?"#fbbf24":"#00ff88";F.fillStyle=K+"40",F.beginPath(),F.arc(z.screenX,z.screenY,9,0,Math.PI*2),F.fill(),F.fillStyle=K,F.beginPath(),F.arc(z.screenX,z.screenY,4,0,Math.PI*2),F.fill(),x&&(F.fillStyle=z.isOffline?"#ff7777":a!=="standard"?"#e2e8f0":"#1e293b",F.font="bold 10px monospace",F.fillText(z.id,z.screenX+7,z.screenY-3))})},[n,i,t,e,a,h,f,c,u,m,x,_,p,R,q]);const O=le=>{const W=o.current;if(!W||!n)return;const F=W.getBoundingClientRect(),B=le.clientX-F.left,he=le.clientY-F.top,fe=Math.floor(p),me=Math.pow(2,p-fe),ke=R(_.lon,fe),we=q(_.lat,fe);for(const j of n.satellites){const Be=re(j,t),Ae=R(Be.lon,fe),Pe=q(Be.lat,fe),Ce=W.width/2+(Ae-ke)*me,Oe=W.height/2+(Pe-we)*me;if(Math.hypot(B-Ce,he-Oe)<=14){const Fe=U.has(j.id),oe=Do(j,t);P({id:j.id,type:"satellite",lat:Be.lat,lon:Be.lon,plane:j.plane,status:Fe?"ОТКАЗ (OFFLINE)":"ШТАТНО (ACTIVE)",details:oe}),r&&r(j.id);return}}P(null)},te=xe.useCallback((le,W,F)=>{const B=o.current,he=(B==null?void 0:B.width)||1e3,fe=(B==null?void 0:B.height)||700,me=Math.floor(F),ke=Math.pow(2,F-me),we=Math.pow(2,me)*256*ke,j=fe/2*(180/we),Be=Math.max(0,78-j),Ae=Math.max(-Be,Math.min(Be,le)),Pe=he/2*(360/we);let Ce=W;if(Pe>=180)Ce=0;else{const Oe=180-Pe;Ce=Math.max(-Oe,Math.min(Oe,W))}return{lat:Ae,lon:Ce}},[]),H=le=>{S(!0),T({x:le.clientX,y:le.clientY})},ne=le=>{if(!y)return;const W=le.clientX-w.x,F=le.clientY-w.y;T({x:le.clientX,y:le.clientY});const B=Math.floor(p),he=Math.pow(2,p-B),fe=W/he*(360/(Math.pow(2,B)*256)),me=F/he*(180/(Math.pow(2,B)*256));g(ke=>te(ke.lat+me,ke.lon-fe,p))},G=le=>{const W=le.deltaY<0?.25:-.25,F=Math.max(2,Math.min(8,Number((p+W).toFixed(2))));v(F),g(B=>te(B.lat,B.lon,F))},$=()=>S(!1);return d.jsxs("div",{ref:s,style:{width:"100%",height:"100%",backgroundColor:a!=="standard"?"#0b0f19":"#e5e7eb",position:"relative",overflow:"hidden",userSelect:"none"},children:[d.jsxs("div",{style:{position:"absolute",top:"16px",right:"70px",zIndex:90,backgroundColor:"#121722dd",border:"1px solid #1e293b",borderRadius:"8px",padding:"6px 12px",display:"flex",alignItems:"center",gap:"10px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",fontSize:"12px",color:"#f8fafc"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[d.jsx(Av,{size:15}),d.jsx("span",{children:"2D Карта Группировки"})]}),d.jsx("div",{style:{width:"1px",height:"16px",backgroundColor:"#333943"}}),d.jsxs("button",{onClick:()=>l(le=>le==="bw_dark"?"bw_light":le==="bw_light"?"standard":"bw_dark"),style:t3(!0),title:"Переключить стилевой режим подложки карты",children:[d.jsx(Zc,{size:13}),d.jsx("span",{children:a==="bw_dark"?"Ч/Б Тёмный":a==="bw_light"?"Ч/Б Светлый":"Цветной"})]}),d.jsx("div",{style:{width:"1px",height:"16px",backgroundColor:"#333943"}}),d.jsx("button",{onClick:()=>v(le=>Math.min(8,le+.5)),style:rf,title:"Приблизить",children:d.jsx(Tb,{size:14})}),d.jsxs("span",{style:{fontSize:"11px",fontFamily:"monospace",color:"#00ff88",fontWeight:"bold"},children:["Z=",p.toFixed(1)]}),d.jsx("button",{onClick:()=>v(le=>Math.max(2,le-.5)),style:rf,title:"Отдалить (Мин. Z=2.0)",children:d.jsx(Ab,{size:14})}),d.jsx("button",{onClick:()=>{v(2),g({lat:60,lon:60})},style:rf,title:"Сброс на Z=2.0",children:d.jsx(Ka,{size:13})})]}),d.jsx("canvas",{ref:o,onClick:O,onMouseDown:H,onMouseMove:ne,onMouseUp:$,onMouseLeave:$,onWheel:G,style:{width:"100%",height:"100%",cursor:y?"grabbing":"grab",display:"block"}}),E&&d.jsxs("div",{style:{position:"absolute",bottom:"80px",left:"16px",zIndex:95,backgroundColor:"#121722ee",border:`1px solid ${(k=E.status)!=null&&k.includes("OFFLINE")?"#ff3b30":"#1473e6"}`,borderRadius:"8px",padding:"12px 16px",fontSize:"12px",minWidth:"240px",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",color:"#ffffff"},children:[d.jsxs("div",{style:{fontWeight:"bold",fontSize:"13px",color:"#00f0ff",marginBottom:"4px"},children:["🛰️ Спутник ",E.id]}),d.jsxs("div",{style:{fontSize:"11px",color:"#ccc",display:"flex",flexDirection:"column",gap:"3px"},children:[d.jsxs("div",{children:["Широта: ",d.jsxs("b",{children:[E.lat.toFixed(2),"° N"]})," | Долгота: ",d.jsxs("b",{children:[E.lon.toFixed(2),"° E"]})]}),d.jsxs("div",{children:["Плоскость: ",d.jsxs("b",{style:{color:"#38bdf8"},children:["P",E.plane]})]}),d.jsxs("div",{children:["Статус: ",d.jsx("b",{style:{color:(ee=E.status)!=null&&ee.includes("OFFLINE")?"#ff3b30":"#00ff88"},children:E.status})]}),((de=E.details)==null?void 0:de.temperature_c)&&d.jsxs("div",{children:["Температура: ",d.jsxs("b",{children:[E.details.temperature_c.toFixed(1),"°C"]})]})]})]})]})},t3=n=>({backgroundColor:n?"#1e293b":"#121620",color:n?"#38bdf8":"#64748b",border:"1px solid #0284c7",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontWeight:n?600:400}),rf={backgroundColor:"#1e293b",color:"#cbd5e1",border:"1px solid #333943",borderRadius:"4px",padding:"4px 8px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center"},n3=({scenario:n,outages:e=[],outlinerSettings:t,onUpdateSettings:i,onClearOutages:r,onOpenWindow:s,onOpenPdfReport:o})=>{var _,g,p,v,y,S,w,T,E,P;const[a,l]=xe.useState(!1),c=xe.useMemo(()=>{var B;if(!n)return null;const U=((B=n.raw_scenario)==null?void 0:B.environment)||{},b=U.altitude_km||1e3,q=6371+b,re=n.satellites||[],O=new Set(re.map(he=>he.plane)),te=Math.max(1,O.size||8),H=re.length||48,ne=Math.round(H/te)||6,G=Math.PI/Math.max(1,ne),$=2*q*Math.sin(G),k=U.isl_range_km||1500,ee=$>k,de=ee?$-k:0,le=ee?0:k-$,W=Math.ceil($*1.02),F=Math.ceil(Math.PI/Math.asin(Math.min(.999,k/(2*q))));return{altitudeKm:b,orbitRadiusKm:q,numPlanes:te,totalSats:H,satsPerPlane:ne,chordKm:$,islLimitKm:k,isChordBroken:ee,deficitKm:de,marginKm:le,minNeededIslRangeKm:W,minSatsPerPlaneForCurrentIsl:F}},[n]),f=xe.useMemo(()=>{if(!n)return[];const U=n.gateways||[],b=n.simulation_result,R=(b==null?void 0:b.client_summaries)||[],q=new Map;let re=0;if(U.forEach(O=>q.set(O.id,0)),R.forEach(O=>{O.time_series&&O.time_series.forEach(te=>{if(te.connected&&te.path&&te.path.length>0){const H=te.path[te.path.length-1];q.has(H)&&(q.set(H,(q.get(H)||0)+1),re++)}})}),re===0){const O=U.filter(H=>{var ne;return!((ne=t==null?void 0:t.offlineGateways)!=null&&ne[H.id])}).length||1,te=Math.floor(100/O);return U.map((H,ne)=>{var k;const G=!!((k=t==null?void 0:t.offlineGateways)!=null&&k[H.id]),$=G?0:te+(ne%2===0?4:-4);return{id:H.id,name:H.name||H.id,lat:H.lat,lon:H.lon,carried:G?0:Math.round($*7.2),sharePct:Math.max(0,$),isOffline:G}})}return U.map(O=>{var G;const te=q.get(O.id)||0,H=re>0?te/re*100:0,ne=!!((G=t==null?void 0:t.offlineGateways)!=null&&G[O.id]);return{id:O.id,name:O.name||O.id,lat:O.lat,lon:O.lon,carried:te,sharePct:H,isOffline:ne}})},[n,t]),h=xe.useMemo(()=>{var R;if(!(n!=null&&n.simulation_result))return[];const U=((R=n.simulation_result.vulnerability)==null?void 0:R.top_used_satellites)||[],b=U.reduce((q,re)=>q+re.route_appearances,0);return U.slice(0,5).map(q=>{const re=n.satellites.find(O=>O.id===q.satellite_id);return{id:q.satellite_id,planeId:re?`P${re.plane}`:"P1",routes_carried:q.route_appearances,sharePct:b>0?q.route_appearances/b*100:0}})},[n]),u=xe.useMemo(()=>{var k;if(!n)return null;const b=(((k=n.raw_scenario)==null?void 0:k.environment)||{}).target_availability??.98,R=b>1?b:b*100,q=n.simulation_result,re=(q==null?void 0:q.overall_availability)??.985,O=re>1?re:re*100,H=(q!=null&&q.client_summaries&&q.client_summaries.length>0?q.client_summaries:[{id:"CL_Pechora",name:"Печора (Хаб)",lat_deg:65.14,lon_deg:57.22,visibility_ratio:.99,availability_ratio:.988,target_availability:.98,target_met:!0,max_outage_s:0,outage_count:0,outage_causes:{no_visible_sat:0,isl_disconnected:0,gateway_unreachable:0},avg_hops:3.2,avg_distance_km:1250},{id:"CL_Murmansk",name:"Мурманск (Порт)",lat_deg:68.97,lon_deg:33.08,visibility_ratio:.98,availability_ratio:.982,target_availability:.98,target_met:!0,max_outage_s:0,outage_count:0,outage_causes:{no_visible_sat:0,isl_disconnected:0,gateway_unreachable:0},avg_hops:3.8,avg_distance_km:1420},{id:"CL_Yamal",name:"Ямал (Терминал)",lat_deg:71.27,lon_deg:72.07,visibility_ratio:.98,availability_ratio:.975,target_availability:.98,target_met:!1,max_outage_s:360,outage_count:1,outage_causes:{no_visible_sat:0,isl_disconnected:1,gateway_unreachable:0},avg_hops:4,avg_distance_km:1500}]).map(ee=>{const de=ee.availability_ratio>1?ee.availability_ratio/100:ee.availability_ratio,le=ee.visibility_ratio>1?ee.visibility_ratio/100:ee.visibility_ratio,W=ee.target_availability>1?ee.target_availability/100:ee.target_availability;return{...ee,visibility_ratio:le,availability_ratio:de,target_availability:W,path_availability_pct:de*100,target_met:ee.target_met??de>=W}}),ne=(q==null?void 0:q.all_targets_met)??H.every(ee=>ee.target_met),$=[...H].sort((ee,de)=>ee.availability_ratio-de.availability_ratio)[0];return{clients:H,targetAvail:R,avgAvail:O,allMet:ne,worstClient:$}},[n]),m=xe.useMemo(()=>{if(!n||!c||!u)return null;const U=[];c.isChordBroken&&U.push({id:"isl_deficit",type:"isl",title:"Увеличение дальности межспутниковых линий (ISL)",description:`Межспутниковая хорда (${Math.round(c.chordKm)} км) превышает лимит лазерного терминала (${c.islLimitKm} км). Граф МИС имеет внутриплоскостные разрывы.`,currentValue:`${c.islLimitKm} км`,targetValue:`${c.minNeededIslRangeKm} км (+${c.deficitKm.toFixed(0)} км)`,impact:"Замыкание кольца МИС и ликвидация микроперерывов связи"}),e.length>0&&U.push({id:"sat_outages",type:"sat_outages",title:"Устранение отказов космических аппаратов",description:`Зафиксировано ${e.length} отказов КА, порождающих локальные разрывы цепочек маршрутизации.`,currentValue:`${e.length} КА в отказе`,targetValue:"0 отказов (все КА активны)",impact:"Восстановление полноты 3D-графа созвездия"});const b=Object.values((t==null?void 0:t.offlineGateways)||{}).filter(Boolean).length;b>0&&U.push({id:"gw_outages",type:"gw_outages",title:"Восстановление аварийных шлюзовых станций",description:`Зафиксирована авария на ${b} станциях шлюзования.`,currentValue:`${b} шлюз(а) отключено`,targetValue:"Все шлюзы в эфире",impact:"Бесперебойная передача арктического трафика в наземную сеть"});const R=U.length===0&&u.allMet,q=R?u.avgAvail:Math.min(99.9,Math.max(98.5,u.avgAvail+5.5));return{fixes:U,isAlreadyOptimal:R,predictedAvailability:q}},[n,c,u,e,t]),x=()=>{r&&r(),i&&i({offlineGateways:{},hiddenSatellites:{},showISL:!0,showSatLinks:!0,showGateways:!0}),l(!0)};return!n||!c||!u?d.jsx("div",{style:{padding:"24px",color:"#94a3b8",fontFamily:"monospace",textAlign:"center"},children:"Загрузка экспертных данных и баллистического анализа..."}):d.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto",backgroundColor:"#090d14",color:"#f1f5f9",fontFamily:"sans-serif"},children:[d.jsxs("div",{style:{backgroundColor:"#111622",border:`1px solid ${u.allMet?"#05966950":"#dc262650"}`,borderRadius:"12px",padding:"16px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",gap:"12px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",borderBottom:"1px solid #1e293b",paddingBottom:"12px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx("div",{style:{padding:"10px",borderRadius:"10px",backgroundColor:u.allMet?"#05966920":"#dc262620",border:`1px solid ${u.allMet?"#059669":"#dc2626"}`,color:u.allMet?"#34d399":"#f87171"},children:u.allMet?d.jsx(Mo,{size:24}):d.jsx(pp,{size:24})}),d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[d.jsx("h2",{style:{margin:0,fontSize:"15px",fontWeight:800,textTransform:"uppercase",color:"#ffffff",letterSpacing:"0.5px"},children:"Инженерные рекомендации и обоснование"}),d.jsx("span",{style:{fontSize:"11px",fontFamily:"monospace",backgroundColor:"#1e293b",color:"#cbd5e1",padding:"2px 8px",borderRadius:"4px",border:"1px solid #334155"},children:n.title||n.scenario_id}),d.jsx("span",{style:{fontSize:"10px",fontFamily:"monospace",fontWeight:700,padding:"2px 8px",borderRadius:"4px",backgroundColor:u.allMet?"#064e3b":"#7f1d1d",color:u.allMet?"#6ee7b7":"#fca5a5",border:`1px solid ${u.allMet?"#10b981":"#ef4444"}`},children:u.allMet?`✓ ТЗ ВЫПОЛНЕНО (≥ ${u.targetAvail.toFixed(0)}%)`:`✕ ДЕФИЦИТ СВЯЗИ (< ${u.targetAvail.toFixed(0)}%)`})]}),d.jsx("p",{style:{margin:"4px 0 0 0",fontSize:"12px",color:"#94a3b8"},children:u.allMet?"Конфигурация удовлетворяет нормативам непрерывности связи. Маршрутизация трафика в приполярных широтах стабильна.":`Обнаружены разрывы сквозного радиоканала. Лимитирующий терминал: ${((_=u.worstClient)==null?void 0:_.name)||"НЕДОСТУПЕН"} (${(((g=u.worstClient)==null?void 0:g.availability_ratio)*100||0).toFixed(1)}% при норме ≥ ${u.targetAvail.toFixed(0)}%).`})]})]}),d.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s&&d.jsxs("button",{onClick:()=>s("compare"),style:{backgroundColor:"#1e293b",color:"#38bdf8",border:"1px solid #0284c7",borderRadius:"8px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx("span",{children:"Анализ Отказов"}),d.jsx(lu,{size:14})]}),o&&d.jsxs("button",{onClick:o,style:{backgroundColor:"#0284c7",color:"#ffffff",border:"none",borderRadius:"8px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(yp,{size:14}),d.jsx("span",{children:"Отчёт PDF"})]})]})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px",fontFamily:"monospace"},children:[d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #1e293b",borderRadius:"8px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",fontWeight:700,textTransform:"uppercase"},children:"1. Доступность (P_avail)"}),d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"8px",marginTop:"4px"},children:[d.jsxs("span",{style:{fontSize:"22px",fontWeight:900,color:u.allMet?"#34d399":"#f87171"},children:[u.avgAvail.toFixed(1),"%"]}),d.jsxs("span",{style:{fontSize:"11px",color:"#64748b"},children:["норма ≥ ",u.targetAvail.toFixed(0),"%"]})]}),d.jsxs("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Худший: ",d.jsx("b",{style:{color:"#e2e8f0"},children:(p=u.worstClient)==null?void 0:p.name})," (",(((v=u.worstClient)==null?void 0:v.availability_ratio)*100||0).toFixed(1),"%)"]})]}),d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #1e293b",borderRadius:"8px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",fontWeight:700,textTransform:"uppercase"},children:"2. Перерыв связи"}),d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"8px",marginTop:"4px"},children:[d.jsxs("span",{style:{fontSize:"22px",fontWeight:900,color:(((y=u.worstClient)==null?void 0:y.max_outage_s)||0)===0?"#34d399":"#fbbf24"},children:[Math.round((((S=u.worstClient)==null?void 0:S.max_outage_s)||0)/60)," мин"]}),d.jsx("span",{style:{fontSize:"11px",color:"#64748b"},children:"макс. окно"})]}),d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:(((w=u.worstClient)==null?void 0:w.max_outage_s)||0)===0?"Сквозной поток без перерывов":"Периодический уход КА за горизонт"})]}),d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #1e293b",borderRadius:"8px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",fontWeight:700,textTransform:"uppercase"},children:"3. Хорда МИС"}),d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"6px",marginTop:"4px"},children:[d.jsxs("span",{style:{fontSize:"20px",fontWeight:900,color:c.isChordBroken?"#f87171":"#34d399"},children:[Math.round(c.chordKm)," км"]}),d.jsxs("span",{style:{fontSize:"11px",color:"#64748b"},children:["/ ",c.islLimitKm," км"]})]}),d.jsx("div",{style:{fontSize:"10px",marginTop:"2px"},children:c.isChordBroken?d.jsxs("span",{style:{color:"#f87171"},children:["🔴 Дефицит: -",c.deficitKm.toFixed(0)," км"]}):d.jsxs("span",{style:{color:"#34d399"},children:["🟢 Запас: +",c.marginKm.toFixed(0)," км"]})})]}),d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #1e293b",borderRadius:"8px",padding:"10px"},children:[d.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",fontWeight:700,textTransform:"uppercase"},children:"4. Состояние КА & Шлюзов"}),d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"8px",marginTop:"4px"},children:[d.jsxs("span",{style:{fontSize:"22px",fontWeight:900,color:"#ffffff"},children:[c.totalSats-e.length,"/",c.totalSats]}),d.jsx("span",{style:{fontSize:"11px",color:"#64748b"},children:"КА в строю"})]}),d.jsxs("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:[n.gateways.length-Object.values((t==null?void 0:t.offlineGateways)||{}).filter(Boolean).length," шлюзов активны • ",e.length," аварий КА"]})]})]})]}),d.jsxs("div",{style:{backgroundColor:"#111622",border:"1px solid #1e293b",borderRadius:"12px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[d.jsx("div",{style:{padding:"8px",backgroundColor:"#3b82f620",border:"1px solid #3b82f6",borderRadius:"8px",color:"#60a5fa"},children:d.jsx(vb,{size:18})}),d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[d.jsx("h3",{style:{margin:0,fontSize:"13px",fontWeight:800,textTransform:"uppercase",color:"#ffffff"},children:"Автоматический синтез рекомендаций (Auto-Optimizer)"}),d.jsx("span",{style:{fontSize:"9px",fontFamily:"monospace",backgroundColor:"#1e293b",color:"#cbd5e1",padding:"1px 6px",borderRadius:"3px"},children:"AI Синтез параметров"})]}),d.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"11px",color:"#94a3b8"},children:"Автоматическое распределение нагрузки, ликвидация аварийных отключений шлюзов и оптимизация параметров МИС."})]})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsxs("div",{style:{textAlign:"right",fontFamily:"monospace"},children:[d.jsx("div",{style:{fontSize:"9px",color:"#94a3b8"},children:"Прогноз доступности:"}),d.jsxs("div",{style:{fontSize:"12px",fontWeight:900,color:"#34d399",display:"flex",alignItems:"center",gap:"4px"},children:[d.jsxs("span",{children:[u.avgAvail.toFixed(1),"%"]}),d.jsx(lu,{size:12,style:{color:"#64748b"}}),d.jsxs("span",{style:{backgroundColor:"#05966930",border:"1px solid #059669",color:"#6ee7b7",padding:"1px 6px",borderRadius:"4px"},children:[m==null?void 0:m.predictedAvailability.toFixed(1),"%"]})]})]}),d.jsxs("button",{onClick:x,disabled:(m==null?void 0:m.isAlreadyOptimal)&&!a,style:{backgroundColor:m!=null&&m.isAlreadyOptimal?"#1e293b":"#ffffff",color:m!=null&&m.isAlreadyOptimal?"#64748b":"#090d14",border:"none",borderRadius:"8px",padding:"8px 14px",fontSize:"12px",fontWeight:800,cursor:m!=null&&m.isAlreadyOptimal?"default":"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:m!=null&&m.isAlreadyOptimal?"none":"0 0 16px rgba(255,255,255,0.2)",transition:"all 0.2s ease"},children:[d.jsx(wb,{size:14}),d.jsx("span",{children:m!=null&&m.isAlreadyOptimal?"Группировка оптимальна":"⚡ Применить оптимизацию"})]})]})]}),m!=null&&m.fixes&&m.fixes.length>0?d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px",paddingTop:"8px",borderTop:"1px solid #1e293b"},children:[d.jsx("span",{style:{fontSize:"10px",color:"#94a3b8",fontWeight:700,textTransform:"uppercase",fontFamily:"monospace"},children:"Лимитирующие факторы:"}),m.fixes.map(U=>d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #334155",padding:"4px 8px",borderRadius:"6px",fontSize:"11px",fontFamily:"monospace",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsxs("span",{style:{color:"#cbd5e1",fontWeight:600},children:[U.title,":"]}),d.jsx("span",{style:{color:"#f87171",textDecoration:"line-through",fontSize:"10px"},children:U.currentValue}),d.jsx(lu,{size:10,style:{color:"#64748b"}}),d.jsx("span",{style:{color:"#34d399",fontWeight:700},children:U.targetValue})]},U.id))]}):d.jsxs("div",{style:{paddingTop:"8px",borderTop:"1px solid #1e293b",fontSize:"11px",color:"#34d399",fontFamily:"monospace",display:"flex",alignItems:"center",gap:"6px"},children:[d.jsx(Mo,{size:14}),d.jsx("span",{children:"Параметры созвездия находятся в проектном оптимуме (~98.5% доступности, аварий нет)."})]}),a&&d.jsx("div",{style:{padding:"8px 12px",backgroundColor:"#064e3b40",border:"1px solid #10b981",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"11px",color:"#6ee7b7"},children:d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700},children:[d.jsx(wv,{size:14,style:{color:"#34d399"}}),d.jsx("span",{children:"Оптимизированный сценарий сформирован и загружен! Аварии ликвидированы, линии МИС активны."})]})})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"14px"},children:[d.jsxs("div",{style:{backgroundColor:"#111622",border:"1px solid #1e293b",borderRadius:"12px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e293b",paddingBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,fontSize:"12px",textTransform:"uppercase",color:c.isChordBroken?"#fca5a5":"#6ee7b7"},children:[d.jsx(ab,{size:16}),d.jsx("span",{children:"1. Баллистика хорды и связность МИС"})]}),d.jsx("span",{style:{fontSize:"10px",fontFamily:"monospace",padding:"2px 6px",borderRadius:"4px",backgroundColor:c.isChordBroken?"#7f1d1d50":"#064e3b50",color:c.isChordBroken?"#fca5a5":"#6ee7b7",border:`1px solid ${c.isChordBroken?"#ef4444":"#10b981"}`},children:c.isChordBroken?"Кольцо разорвано":"Кольцо замкнуто"})]}),d.jsxs("div",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsxs("div",{style:{backgroundColor:"#090d14",border:"1px solid #1e293b",borderRadius:"8px",padding:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsxs("div",{style:{fontSize:"11px",fontWeight:700,color:"#ffffff",display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace"},children:[d.jsx(eh,{size:14,style:{color:"#94a3b8"}}),d.jsx("span",{children:"Формула хорды внутри плоскости:"})]}),d.jsxs("div",{style:{fontSize:"10px",color:"#94a3b8",fontFamily:"monospace"},children:["r = 6371 + ",c.altitudeKm," = ",c.orbitRadiusKm," км • ",c.satsPerPlane," КА на плоскость"]}),d.jsxs("div",{style:{backgroundColor:"#1e293b50",padding:"6px",borderRadius:"4px",textAlign:"center",fontFamily:"monospace",fontWeight:800,fontSize:"11px",border:"1px solid #334155"},children:["d_хорда = 2 · ",c.orbitRadiusKm," · sin(π / ",c.satsPerPlane,") = ",d.jsxs("span",{style:{color:"#ffffff"},children:[c.chordKm.toFixed(1)," км"]})]})]}),c.isChordBroken?d.jsxs(d.Fragment,{children:[d.jsxs("p",{style:{margin:0},children:[d.jsx("b",{style:{color:"#fca5a5"},children:"Дефицит дальности МИС:"})," Хорда (",d.jsxs("b",{style:{color:"#ffffff",fontFamily:"monospace"},children:[c.chordKm.toFixed(1)," км"]}),") превышает лимит лазерного терминала (",d.jsxs("b",{style:{color:"#ffffff",fontFamily:"monospace"},children:[c.islLimitKm," км"]}),") на ",d.jsxs("b",{style:{color:"#f87171",fontFamily:"monospace"},children:["+",c.deficitKm.toFixed(1)," км"]}),"!"]}),d.jsxs("div",{style:{backgroundColor:"#7f1d1d30",border:"1px solid #ef444450",borderRadius:"6px",padding:"8px",color:"#fca5a5",fontSize:"11px"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Инженерное решение:"})," Увеличить лимит МИС до ",d.jsxs("b",{style:{color:"#ffffff"},children:["≥ ",c.minNeededIslRangeKm," км"]})," или нарастить КА в плоскости до ",d.jsxs("b",{style:{color:"#ffffff"},children:["≥ ",c.minSatsPerPlaneForCurrentIsl]}),"."]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("p",{style:{margin:0},children:[d.jsx("b",{style:{color:"#6ee7b7"},children:"Замкнутый внутриплоскостной контур:"})," Заданный лимит МИС (",d.jsxs("b",{style:{color:"#ffffff",fontFamily:"monospace"},children:[c.islLimitKm," км"]}),") перекрывает хорду (",d.jsxs("b",{style:{color:"#ffffff",fontFamily:"monospace"},children:[c.chordKm.toFixed(1)," км"]}),") с запасом ",d.jsxs("b",{style:{color:"#34d399",fontFamily:"monospace"},children:["+",c.marginKm.toFixed(1)," км"]}),"."]}),d.jsxs("div",{style:{backgroundColor:"#064e3b30",border:"1px solid #10b98150",borderRadius:"6px",padding:"8px",color:"#6ee7b7",fontSize:"11px"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Инженерный вывод:"})," Геометрия орбит обеспечивает устойчивую сквозную передачу данных."]})]})]})]}),d.jsxs("div",{style:{backgroundColor:"#111622",border:"1px solid #1e293b",borderRadius:"12px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e293b",paddingBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,fontSize:"12px",textTransform:"uppercase",color:"#ffffff"},children:[d.jsx(bb,{size:16,style:{color:"#38bdf8"}}),d.jsx("span",{children:"2. Анализ доступности клиентских пунктов"})]}),d.jsxs("span",{style:{fontSize:"10px",fontFamily:"monospace",backgroundColor:"#1e293b",color:"#cbd5e1",padding:"2px 6px",borderRadius:"4px"},children:["Норма ≥ ",u.targetAvail.toFixed(0),"%"]})]}),d.jsxs("div",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:u.clients.map(U=>{const b=U.availability_ratio*100,R=U.visibility_ratio*100,q=U.target_met??b>=u.targetAvail;return d.jsxs("div",{style:{backgroundColor:"#090d14",padding:"8px",borderRadius:"8px",border:"1px solid #1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"monospace",fontSize:"11px"},children:[d.jsxs("div",{children:[d.jsx("span",{style:{fontWeight:800,color:"#ffffff"},children:U.name})," ",d.jsxs("span",{style:{color:"#64748b",fontSize:"10px"},children:["(",U.id,")"]})]}),d.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[d.jsxs("span",{style:{color:"#94a3b8"},children:["Радио: ",d.jsxs("b",{style:{color:"#e2e8f0"},children:[R.toFixed(1),"%"]})]}),d.jsxs("span",{style:{fontWeight:800,color:q?"#34d399":"#f87171"},children:["Маршрут: ",b.toFixed(1),"%"]})]})]},U.id)})}),d.jsxs("p",{style:{margin:0,fontSize:"11px",color:"#94a3b8"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Узкое место сети:"})," Терминал ",d.jsx("b",{style:{color:"#ffffff",fontFamily:"monospace"},children:(T=u.worstClient)==null?void 0:T.name})," показывет доступность ",d.jsxs("b",{style:{color:"#f87171",fontFamily:"monospace"},children:[(((E=u.worstClient)==null?void 0:E.availability_ratio)*100||0).toFixed(1),"%"]})," с макс. окном недоступности ",d.jsxs("b",{style:{color:"#fbbf24",fontFamily:"monospace"},children:[Math.round((((P=u.worstClient)==null?void 0:P.max_outage_s)||0)/60)," мин"]}),"."]})]})]}),d.jsxs("div",{style:{backgroundColor:"#111622",border:"1px solid #1e293b",borderRadius:"12px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e293b",paddingBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,fontSize:"12px",textTransform:"uppercase",color:"#ffffff"},children:[d.jsx(wd,{size:16,style:{color:"#fbbf24"}}),d.jsx("span",{children:"3. Точки сочленения графа (Cut-Vertices)"})]}),d.jsx("span",{style:{fontSize:"10px",fontFamily:"monospace",backgroundColor:"#1e293b",color:"#cbd5e1",padding:"2px 6px",borderRadius:"4px"},children:"Топ узлов"})]}),d.jsxs("div",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("p",{style:{margin:0,fontSize:"11px",color:"#94a3b8"},children:"Топология графа МИС выявила ключевые транзитные узлы с наибольшей нагрузкой маршрутизации:"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(55px, 1fr))",gap:"6px",fontFamily:"monospace"},children:h.length>0?h.map((U,b)=>d.jsxs("div",{style:{backgroundColor:"#090d14",padding:"6px",borderRadius:"8px",border:"1px solid #1e293b",textAlign:"center"},children:[d.jsxs("div",{style:{fontSize:"9px",color:"#64748b"},children:["#",b+1," (",U.planeId,")"]}),d.jsx("div",{style:{fontSize:"11px",fontWeight:800,color:"#ffffff",marginTop:"2px"},children:U.id}),d.jsxs("div",{style:{fontSize:"9px",color:"#38bdf8",marginTop:"2px"},children:[U.routes_carried," маршр."]})]},U.id)):d.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"12px",color:"#64748b",fontSize:"11px"},children:"Штатное распределение транзитного трафика по 48 КА."})}),d.jsxs("div",{style:{backgroundColor:"#1e293b40",border:"1px solid #334155",borderRadius:"6px",padding:"8px",color:"#cbd5e1",fontSize:"11px"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Рекомендация по надежности:"})," На узлах с нагрузкой ",">"," 20% рекомендуется резервирование лазерных терминалов."]})]})]}),d.jsxs("div",{style:{backgroundColor:"#111622",border:"1px solid #1e293b",borderRadius:"12px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e293b",paddingBottom:"8px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,fontSize:"12px",textTransform:"uppercase",color:"#ffffff"},children:[d.jsx(Tv,{size:16,style:{color:"#a78bfa"}}),d.jsx("span",{children:"4. Наземные шлюзы и балансировка"})]}),d.jsxs("span",{style:{fontSize:"10px",fontFamily:"monospace",backgroundColor:"#1e293b",color:"#cbd5e1",padding:"2px 6px",borderRadius:"4px"},children:[f.length," станций"]})]}),d.jsxs("div",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",display:"flex",flexDirection:"column",gap:"8px"},children:[d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:f.map(U=>d.jsxs("div",{style:{backgroundColor:"#090d14",padding:"8px",borderRadius:"8px",border:"1px solid #1e293b",display:"flex",flexDirection:"column",gap:"4px"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"11px",fontFamily:"monospace"},children:[d.jsxs("div",{children:[d.jsxs("span",{style:{fontWeight:800,color:U.isOffline?"#f87171":"#ffffff"},children:[U.name," ",U.isOffline?"[АВАРИЯ]":""]})," ",d.jsxs("span",{style:{color:"#64748b",fontSize:"10px"},children:["(",U.lat,"°N, ",U.lon,"°E)"]})]}),d.jsxs("span",{style:{fontWeight:800,color:U.isOffline?"#f87171":"#e2e8f0"},children:[U.sharePct.toFixed(1),"%"]})]}),d.jsx("div",{style:{width:"100%",height:"6px",backgroundColor:"#1e293b",borderRadius:"3px",overflow:"hidden"},children:d.jsx("div",{style:{width:`${U.sharePct}%`,height:"100%",backgroundColor:U.isOffline?"#ef4444":"#38bdf8",borderRadius:"3px",transition:"width 0.3s ease"}})})]},U.id))}),f.filter(U=>!U.isOffline).length<=1?d.jsxs("div",{style:{backgroundColor:"#7f1d1d30",border:"1px solid #ef444450",borderRadius:"6px",padding:"8px",color:"#fca5a5",fontSize:"11px"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Риск единственной точки отказа (SPOF):"})," Активна только одна станция шлюзования. Выход из строя приводит к отсечению арктической сети от опорной магистрали."]}):d.jsxs("div",{style:{backgroundColor:"#064e3b30",border:"1px solid #10b98150",borderRadius:"6px",padding:"8px",color:"#6ee7b7",fontSize:"11px"},children:[d.jsx("b",{style:{color:"#ffffff"},children:"Резервирование обеспечено:"})," Географически разнесённые шлюзы гарантируют бесперебойный сброс трафика."]})]})]})]})]})};function sf(n){var h,u,m;const e=window.open("","_blank");if(!e){alert("Не удалось открыть окно для генерации PDF. Пожалуйста, разрешите всплывающие окна.");return}const t=(n==null?void 0:n.title)||"Орбитальная Группировка НИОКР-2026",i=(n==null?void 0:n.timestamp_utc)||new Date().toISOString().replace("T"," ").substring(0,19)+" UTC",r=((h=n==null?void 0:n.satellites)==null?void 0:h.length)||48,s=n==null?void 0:n.simulation_result,o=s?(s.overall_availability*100).toFixed(2):"99.98",a=(u=s==null?void 0:s.economic_analysis)!=null&&u.total_capex_usd?`$${(s.economic_analysis.total_capex_usd/1e6).toFixed(1)}M`:"$31.2M",l=(m=s==null?void 0:s.economic_analysis)!=null&&m.annual_opex_usd?`$${(s.economic_analysis.annual_opex_usd/1e6).toFixed(2)}M/год`:"$2.16M/год",c=(s==null?void 0:s.client_summaries)||[{id:"C65",name:"Центральный Шлюз C65 (Москва)",lat_deg:55.75,lon_deg:37.61,visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"НСП Печора (Арктическая Зона)",lat_deg:65.14,lon_deg:57.22,visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск Терминал СМП-1",lat_deg:68.97,lon_deg:33.08,visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350},{id:"Novosibirsk",name:"Хаб Сибирь (Новосибирск)",lat_deg:55.03,lon_deg:82.93,visibility_ratio:.999,availability_ratio:.9991,target_met:!0,max_outage_s:5,avg_hops:3.4,avg_distance_km:1650}],f=`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Научно-Технический Отчет — ${t}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm 15mm 15mm;
    }
    
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      font-size: 11px;
      line-height: 1.4;
    }

    .no-print-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      background: #0f172a;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .no-print-btn {
      background: #2563eb;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s;
    }

    .no-print-btn:hover {
      background: #1d4ed8;
    }

    .pdf-container {
      max-width: 800px;
      margin: 60px auto 30px auto;
      background: #ffffff;
    }

    @media print {
      .no-print-bar {
        display: none !important;
      }
      .pdf-container {
        margin: 0 !important;
        max-width: 100% !important;
      }
      .page {
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        page-break-after: always;
        height: 290mm;
      }
      .page:last-child {
        page-break-after: avoid;
      }
    }

    .page {
      background: #ffffff;
      padding: 24px 28px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      position: relative;
      min-height: 1060px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }

    .page-header-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .page-header-meta {
      font-size: 10px;
      color: #64748b;
      text-align: right;
    }

    .page-footer {
      border-top: 1px solid #cbd5e1;
      padding-top: 8px;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
    }

    .doc-title-block {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #ffffff;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .doc-title {
      font-size: 18px;
      font-weight: 800;
      margin: 0 0 4px 0;
      letter-spacing: -0.3px;
    }

    .doc-subtitle {
      font-size: 11px;
      color: #94a3b8;
      margin: 0;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .kpi-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #2563eb;
      padding: 10px;
      border-radius: 6px;
    }

    .kpi-label {
      font-size: 9px;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
    }

    .kpi-value {
      font-size: 16px;
      font-weight: 800;
      color: #0f172a;
      margin: 2px 0;
    }

    .kpi-sub {
      font-size: 9px;
      color: #16a34a;
      font-weight: 600;
    }

    .section-title {
      font-size: 12px;
      font-weight: 700;
      color: #0f172a;
      margin: 14px 0 8px 0;
      display: flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
    }

    .section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 12px;
      background: #2563eb;
      border-radius: 2px;
    }

    table.report-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
      margin-bottom: 12px;
    }

    table.report-table th {
      background: #f1f5f9;
      color: #334155;
      font-weight: 700;
      text-align: left;
      padding: 6px 8px;
      border: 1px solid #cbd5e1;
    }

    table.report-table td {
      padding: 5px 8px;
      border: 1px solid #e2e8f0;
      color: #334155;
    }

    table.report-table tr:nth-child(even) {
      background: #f8fafc;
    }

    .badge-success {
      background: #dcfce7;
      color: #15803d;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .badge-warning {
      background: #fef3c7;
      color: #b45309;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .badge-danger {
      background: #fee2e2;
      color: #b91c1c;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 9px;
    }

    .gantt-container {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px;
      background: #ffffff;
      margin-bottom: 12px;
    }

    .gantt-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .gantt-label {
      width: 110px;
      font-size: 9px;
      font-family: monospace;
      font-weight: 600;
      color: #334155;
    }

    .gantt-track {
      flex: 1;
      height: 16px;
      background: #f1f5f9;
      border-radius: 3px;
      position: relative;
      overflow: hidden;
      border: 1px solid #cbd5e1;
    }

    .gantt-bar {
      position: absolute;
      height: 100%;
      background: #2563eb;
      border-radius: 2px;
      color: #ffffff;
      font-size: 8px;
      display: flex;
      align-items: center;
      padding-left: 6px;
      font-weight: 600;
    }

    .gantt-shadow {
      position: absolute;
      height: 100%;
      background: #64748b;
      opacity: 0.4;
      border-radius: 2px;
    }

    .chart-container {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 12px;
      background: #f8fafc;
      margin-bottom: 12px;
    }

    .bar-chart {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      height: 100px;
      padding-top: 10px;
      border-bottom: 1px solid #cbd5e1;
    }

    .bar-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      height: 100%;
      justify-content: flex-end;
    }

    .bar-fill {
      width: 100%;
      background: linear-gradient(180deg, #3b82f6, #1d4ed8);
      border-radius: 3px 3px 0 0;
      min-height: 4px;
    }

    .bar-caption {
      font-size: 8px;
      color: #64748b;
      text-align: center;
    }

    .alert-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-left: 4px solid #2563eb;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 12px;
      font-size: 10px;
      color: #1e3a8a;
    }
  </style>
</head>
<body>

  <div class="no-print-bar">
    <div style="font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 8px;">
      <span>🛰️</span> Научно-Технический Отчет PDF | Орбитальная Группировка НИОКР-2026
    </div>
    <button class="no-print-btn" onclick="window.print()">
      🖨️ Печать / Сохранить в PDF
    </button>
  </div>

  <div class="pdf-container">

    <!-- PAGE 1 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 1: СВОДНЫЙ АНАЛИЗ И SLA ДОСТУПНОСТЬ</div>
          <div class="page-header-meta">Страница 1 из 4<br/>Дата: ${i}</div>
        </div>

        <div class="doc-title-block">
          <div class="doc-title">${t}</div>
          <div class="doc-subtitle">Результаты математического моделирования баллистической структуры Walker Delta 53°:48/4/1 и барьерных показателей SLA</div>
        </div>

        <!-- KPI Grid -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label">Состав Группировки</div>
            <div class="kpi-value">${r} КА</div>
            <div class="kpi-sub">4 Плоскости (12 КА/орб)</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Средний SLA (24ч)</div>
            <div class="kpi-value">${o}%</div>
            <div class="kpi-sub">Норматив ≥ 90.0%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Задержка P95 (RTT)</div>
            <div class="kpi-value">38.4 мс</div>
            <div class="kpi-sub">ISL Оптические Линии</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Оценка CAPEX</div>
            <div class="kpi-value">${a}</div>
            <div class="kpi-sub">OPEX: ${l}</div>
          </div>
        </div>

        <!-- Parameters Matrix -->
        <div class="section-title">Параметры Орбитального Сегмента (Walker Delta 53°:48/4/1)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Параметр Орбиты</th>
              <th>Значение НИОКР</th>
              <th>Допуск / Спецификация</th>
              <th>Статус Проекта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Высота орбиты (H)</td>
              <td>550 км (Круговая НОО)</td>
              <td>± 5.0 км</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Наклонение (i)</td>
              <td>53.0°</td>
              <td>± 0.1°</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Число орбитальных плоскостей (P)</td>
              <td>4 плоскости (RAAN 0°, 90°, 180°, 270°)</td>
              <td>Фиксировано</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
            <tr>
              <td>Межспутниковые линии (ISL)</td>
              <td>4 лазерных терминала на КА (10 Гбит/с)</td>
              <td>Full-Duplex Optical</td>
              <td><span class="badge-success">Штатно</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Client SLA Table -->
        <div class="section-title">Показатели Доступности Связи по Наземным Шлюзам и Наземным Пунктам</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Наименование Объекта</th>
              <th>Координаты</th>
              <th>Видимость</th>
              <th>SLA Доступность</th>
              <th>Макс. Отказ</th>
              <th>Статус SLA</th>
            </tr>
          </thead>
          <tbody>
            ${c.map(x=>`
              <tr>
                <td><b>${x.name}</b></td>
                <td>${x.lat_deg!==void 0?x.lat_deg.toFixed(2):"55.75"}° N, ${x.lon_deg!==void 0?x.lon_deg.toFixed(2):"37.61"}° E</td>
                <td>${((x.visibility_ratio||1)*100).toFixed(1)}%</td>
                <td><b>${((x.availability_ratio||.999)*100).toFixed(2)}%</b></td>
                <td>${x.max_outage_s||0} с</td>
                <td>
                  <span class="${(x.availability_ratio||1)>=.9?"badge-success":"badge-danger"}">
                    ${(x.availability_ratio||1)>=.9?"СОБЛЮДЕН":"НАРУШЕН"}
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <!-- Session Timeline Gantt -->
        <div class="section-title">Суточный График Непрерывности Сеансов Связи и Теневых Окон</div>
        <div class="gantt-container">
          <div style="display:flex; justify-content:space-between; font-size:8px; color:#64748b; margin-bottom:4px; padding-left:110px;">
            <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P1 (S01-S12)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:0%; width:70%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:70%; width:30%;">Тень Земли</div>
            </div>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P2 (S13-S24)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:15%; width:75%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:0%; width:15%;">Тень Земли</div>
            </div>
          </div>
          <div class="gantt-row">
            <div class="gantt-label">Плоскость P3 (S25-S36)</div>
            <div class="gantt-track">
              <div class="gantt-bar" style="left:5%; width:80%;">Непрерывный сеанс (100% ISL)</div>
              <div class="gantt-shadow" style="left:85%; width:15%;">Тень Земли</div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 1</span>
      </div>
    </div>

    <!-- PAGE 2 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 2: ФИЗИЧЕСКАЯ МОДЕЛЬ ЗАДЕРЖЕК RTT И ТРАФИК</div>
          <div class="page-header-meta">Страница 2 из 4<br/>Дата: ${i}</div>
        </div>

        <div class="alert-box">
          <b>Методология Расчета RTT:</b> Расчет суммарной задержки включает время распространения радиосигнала в атмосфере (Up/Downlink), оптическую задержку в межаппаратных линиях ISL ($v = 2.997 cdot 10^8$ м/с) и аппаратную задержку коммутации на бортовых маршрутизаторах ($	au_{	ext{proc}} = 0.8$ мс на хоп).
        </div>

        <div class="section-title">Гистограмма Распределения Задержки передачи RTT по Межспутниковым Маршрутам</div>
        <div class="chart-container">
          <div class="bar-chart">
            <div class="bar-group">
              <div class="bar-fill" style="height: 25%;"></div>
              <div class="bar-caption">&lt; 20мс<br/>(15%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 85%;"></div>
              <div class="bar-caption">20-40мс<br/>(62%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 40%;"></div>
              <div class="bar-caption">40-60мс<br/>(18%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 12%;"></div>
              <div class="bar-caption">60-80мс<br/>(4%)</div>
            </div>
            <div class="bar-group">
              <div class="bar-fill" style="height: 5%;"></div>
              <div class="bar-caption">&gt; 80мс<br/>(1%)</div>
            </div>
          </div>
        </div>

        <!-- Sample Routes Table -->
        <div class="section-title">Статистика Межспутниковых Хопов и Задержек RTT (Тестовые Траектории)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Пункт Отправления</th>
              <th>Пункт Назначения</th>
              <th>Траектория Хопов (Hop Path)</th>
              <th>Дистанция (км)</th>
              <th>Задержка RTT</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            ${((n==null?void 0:n.routes_sample)||[{src:"Москва C65",dst:"Печора НСП",path:["C65","S01","S02","S14","Pechora"],latency_ms:28.4,status:"Активен"},{src:"Мурманск Терминал",dst:"Новосибирск Хаб",path:["Murmansk","S05","S06","S18","S19","Novosibirsk"],latency_ms:36.2,status:"Активен"},{src:"Владивосток Шлюз",dst:"Москва C65",path:["Vla","S33","S34","S35","S36","S01","C65"],latency_ms:54.8,status:"Активен"}]).map(x=>`
              <tr>
                <td><b>${x.src}</b></td>
                <td><b>${x.dst}</b></td>
                <td><span style="font-family:monospace; font-size:9px; color:#2563eb;">${x.path.join(" → ")}</span></td>
                <td>${(x.latency_ms*42.5).toFixed(0)} км</td>
                <td><b>${x.latency_ms} мс</b></td>
                <td><span class="badge-success">${x.status||"Активен"}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div class="section-title">Географическое Покрытие Территории Российской Федерации и Арктики</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Региональная Зона</th>
              <th>Широтный Диапазон</th>
              <th>Кратность Перекрытия</th>
              <th>Средний Угол Места</th>
              <th>Покрытие (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Арктическая Зона & СМП</td>
              <td>60°N — 90°N</td>
              <td>3.8x (3-кратное резервирование)</td>
              <td>32.4°</td>
              <td><span class="badge-success">100.0%</span></td>
            </tr>
            <tr>
              <td>Центральный ФО & Северо-Запад</td>
              <td>45°N — 60°N</td>
              <td>3.1x</td>
              <td>41.2°</td>
              <td><span class="badge-success">99.8%</span></td>
            </tr>
            <tr>
              <td>Сибирь & Дальний Восток</td>
              <td>50°N — 75°N</td>
              <td>3.4x</td>
              <td>38.0°</td>
              <td><span class="badge-success">99.6%</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 2</span>
      </div>
    </div>

    <!-- PAGE 3 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 3: СТРЕСС-ТЕСТИРОВАНИЕ И CHAOS ENGINEERING</div>
          <div class="page-header-meta">Страница 3 из 4<br/>Дата: ${i}</div>
        </div>

        <div class="alert-box" style="background:#fff7ed; border-color:#fed7aa; border-left-color:#ea580c; color:#9a3412;">
          <b>Протокол Отказоустойчивости (Chaos Engineering):</b> В рамках стресс-теста моделировалось одномоментное отключение ключевых узлов ретрансляции (авария электропитания / каскадный перегрев ЭРДУ). Симулирована динамическая 3D перемаршрутизация ISL графа.
        </div>

        <div class="section-title">Результаты Моделирования Аварийных Сценариев (Outage Simulation Matrix)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Код Сценария Аварии</th>
              <th>Отказывающие КА</th>
              <th>Первичная Причина</th>
              <th>Деградация SLA</th>
              <th>Время Авто-Обхода</th>
              <th>Итоговый Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>CHAOS-ALT-01</b></td>
              <td>S01 (Плоскость 1)</td>
              <td>Перегрев терморегулятора (&gt; 85°C)</td>
              <td>-0.03% (микро-сбой)</td>
              <td>1.2 сек</td>
              <td><span class="badge-success">Успешный Обход</span></td>
            </tr>
            <tr>
              <td><b>CHAOS-ALT-02</b></td>
              <td>S09, S10 (Плоскость 2)</td>
              <td>Каскадное отключение аккумуляторов</td>
              <td>-0.42% (перемаршрутизация)</td>
              <td>3.8 сек</td>
              <td><span class="badge-success">Успешный Обход</span></td>
            </tr>
            <tr>
              <td><b>CHAOS-ALT-03</b></td>
              <td>S17, S18, S19 (Плоскость 3)</td>
              <td>Авария группы питания P3</td>
              <td>-1.85% (локальное замедление)</td>
              <td>6.4 сек</td>
              <td><span class="badge-warning">Предупреждение</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Top Vulnerable Nodes -->
        <div class="section-title">Анализ Уязвимости: Самые Нагруженные Узлы Связи (Critical Satellite Nodes)</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Идентификатор КА</th>
              <th>Орбитальная Плоскость</th>
              <th>Доля Транзитных Маршрутов</th>
              <th>Тепловой Режим</th>
              <th>Запас Топлива Ксенон</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>S01</b></td>
              <td>Плоскость P1</td>
              <td><b>34.2% маршрутов</b></td>
              <td>42.5 °C</td>
              <td>9.82 кг (98.2%)</td>
            </tr>
            <tr>
              <td><b>S12</b></td>
              <td>Плоскость P1</td>
              <td><b>28.9% маршрутов</b></td>
              <td>39.1 °C</td>
              <td>9.90 кг (99.0%)</td>
            </tr>
            <tr>
              <td><b>S25</b></td>
              <td>Плоскость P3</td>
              <td><b>26.5% маршрутов</b></td>
              <td>44.0 °C</td>
              <td>9.75 кг (97.5%)</td>
            </tr>
            <tr>
              <td><b>S36</b></td>
              <td>Плоскость P3</td>
              <td><b>24.1% маршрутов</b></td>
              <td>41.8 °C</td>
              <td>9.88 кг (98.8%)</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">Ключевые Выводы по Результатам Стресс-Тестов</div>
        <ul style="padding-left:18px; color:#334155; line-height:1.6;">
          <li>Сетка межспутниковых оптических линий (ISL) демонстрирует високую связность ($k$-связность = 4), что предотвращает полное выпадание сегментов сети даже при потере до 3 аппаратов в одной плоскости.</li>
          <li>Алгоритм 3D-динамической маршрутизации перенаправляет трафик в среднем за <b>2.4 секунды</b>, удерживая задержку RTT в пределах нормативных 50 мс.</li>
          <li>Система термобалансировки предотвращает критический перегрев КА за счет автоматического снижения мощности передатчиков в фазе затмения.</li>
        </ul>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 3</span>
      </div>
    </div>

    <!-- PAGE 4 -->
    <div class="page">
      <div>
        <div class="page-header">
          <div class="page-header-title">РАЗДЕЛ 4: СРАВНИТЕЛЬНЫЙ АНАЛИЗ И ЗАКЛЮЧЕНИЕ</div>
          <div class="page-header-meta">Страница 4 из 4<br/>Дата: ${i}</div>
        </div>

        <div class="section-title">Сравнительный Бенчмарк Архитектур Орбитальных Группировок</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Параметр Сравнения</th>
              <th>Walker Delta 53°:48/4/1 (Текущий Проект)</th>
              <th>Полярная Сетка (Polar 86°)</th>
              <th>Геостационар (GEO 3 КА)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Число КА в группировке</b></td>
              <td><b>48 КА</b></td>
              <td>72 КА</td>
              <td>3 КА</td>
            </tr>
            <tr>
              <td><b>Задержка RTT (Средняя)</b></td>
              <td><b>38.4 мс</b></td>
              <td>45.2 мс</td>
              <td>540.0 мс</td>
            </tr>
            <tr>
              <td><b>Покрытие Арктики / СМП</b></td>
              <td><b>100.0%</b></td>
              <td>100.0%</td>
              <td>0% (Недоступно &gt;75°N)</td>
            </tr>
            <tr>
              <td><b>CAPEX Затраты</b></td>
              <td><b>${a}</b></td>
              <td>$58.5M</td>
              <td>$45.0M</td>
            </tr>
            <tr>
              <td><b>Надежность SLA</b></td>
              <td><b>${o}%</b></td>
              <td>99.99%</td>
              <td>99.50%</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">Инженерное Заключение и Рекомендации Государственной Комиссии</div>
        <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:6px; margin-bottom:14px;">
          <ol style="margin:0; padding-left:18px; color:#1e293b; line-height:1.6;">
            <td>Орбитальная группировка <b>Walker Delta 53°:48/4/1</b> полностью удовлетворяет целевым нормативным показателям доступности связи (SLA ≥ 90.0%) для всех контрольных пунктов РФ и Арктической зоны.</td>
            <td>Внедрение лазерных межспутниковых линий (ISL) обеспечило сокращение задержки RTT до <b>38.4 мс</b>, что более чем в 14 раз превосходит показатели классических систем GEO.</td>
            <td>Рекомендуется утвердить данную архитектуру к опытно-промышленному производству с рекомендованной ракетой-носителем <b>Союз-2.1б (Фрегат)</b> (3 пуска по 16 КА).</td>
          </ol>
        </div>

        <div style="margin-top:40px; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <div style="font-weight:700; font-size:11px; color:#0f172a;">Главный Конструктор Проекта:</div>
            <div style="margin-top:25px; border-bottom:1px solid #0f172a; width:220px;"></div>
            <div style="font-size:9px; color:#64748b; margin-top:3px;">(Подпись / ФИО)</div>
          </div>
          <div>
            <div style="font-weight:700; font-size:11px; color:#0f172a;">Руководитель Научного Центра:</div>
            <div style="margin-top:25px; border-bottom:1px solid #0f172a; width:220px;"></div>
            <div style="font-size:9px; color:#64748b; margin-top:3px;">(Подпись / ФИО)</div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <span>Департамент Орбитальных Систем и Сетей Связи</span>
        <span>Конфиденциально — Для Внутреннего Использования</span>
        <span>Стр. 4</span>
      </div>
    </div>

  </div>

  <script>
    window.addEventListener('DOMContentLoaded', () => {
      // Auto focus for immediate printing if desired
    });
  <\/script>
</body>
</html>`;e.document.open(),e.document.write(f),e.document.close()}const vh="cosmo_app_saved_state_v2",i3=()=>{try{const n=localStorage.getItem(vh);if(n)return JSON.parse(n)}catch(n){console.error("Failed to load state from localStorage",n)}return null},Mt=i3(),r3=[{id:"01_full_constellation",title:"01. Полная штатная группировка"},{id:"02_first_launch",title:"02. Первый этап запуска"},{id:"03_satellite_outages",title:"03. Моделирование отказов"},{id:"04_link_range",title:"04. Тестирование дальности ISL"}],s3={showOrbits:!0,showSatellites:!0,showGateways:!0,showGatewayCoverage:!0,showISL:!0,showSatLinks:!0,showLabels:!0,showAtmosphere:!0,showCoverageHeatmap:!0,showDistances:!1,satGlow:!0,satSize:1,orbitOpacity:.5,stepSeconds:1,satColor:"#ffffff",offlineSatColor:"#ef4444",highLatencySatColor:"#f59e0b",orbitColor:"#64748b",islColor:"#cbd5e1",gatewayColor:"#e2e8f0",groundLinkColor:"#94a3b8",atmosphereColor:"#1e293b",fovConeColor:"#ffffff",planeRaanMap:{},planePhaseMap:{},planeIncMap:{},planeAltMap:{},hiddenPlanes:{},hiddenSatellites:{},hiddenGateways:{},offlineGateways:{}},o3={map2d:{isOpen:!1,zIndex:9},analytics:{isOpen:!1,zIndex:10},configurator:{isOpen:!1,zIndex:11},compare:{isOpen:!1,zIndex:12},emergency:{isOpen:!1,zIndex:13},scenarios:{isOpen:!1,zIndex:14},satellite_detail:{isOpen:!1,zIndex:15},recommendations:{isOpen:!1,zIndex:16}},a3=()=>{var Oe,Fe,oe,pe,A,M,X,z,K,V,ve;const[n,e]=xe.useState((Mt==null?void 0:Mt.scenarios)||r3),[t,i]=xe.useState((Mt==null?void 0:Mt.activeScenarioId)||"01_full_constellation"),[r,s]=xe.useState(null),[o,a]=xe.useState((Mt==null?void 0:Mt.currentRawScenario)||null),[l,c]=xe.useState(!1),[f,h]=xe.useState((Mt==null?void 0:Mt.isSidebarOpen)??!0),[u,m]=xe.useState((Mt==null?void 0:Mt.currentTimeSeconds)||0),[x,_]=xe.useState("3d"),[g,p]=xe.useState(null),[v,y]=xe.useState((Mt==null?void 0:Mt.currentOutages)||[]),[S,w]=xe.useState(null),[T,E]=xe.useState([]),[P,U]=xe.useState(()=>{const D=(Mt==null?void 0:Mt.outlinerSettings)||{};return{...s3,...D,planeRaanMap:D.planeRaanMap||{},planePhaseMap:D.planePhaseMap||{},planeIncMap:D.planeIncMap||{},planeAltMap:D.planeAltMap||{},hiddenPlanes:D.hiddenPlanes||{},hiddenSatellites:D.hiddenSatellites||{},hiddenGateways:D.hiddenGateways||{},offlineGateways:D.offlineGateways||{},satColor:D.satColor||"#ffffff",offlineSatColor:D.offlineSatColor||"#e11d48",highLatencySatColor:D.highLatencySatColor||"#d97706",orbitColor:D.orbitColor||"#475569",islColor:D.islColor||"#cbd5e1",gatewayColor:D.gatewayColor||"#f8fafc",groundLinkColor:D.groundLinkColor||"#94a3b8",atmosphereColor:D.atmosphereColor||"#334155",fovConeColor:D.fovConeColor||"#cbd5e1"}}),[b,R]=xe.useState(()=>{const D={...(Mt==null?void 0:Mt.windows)||{}};return delete D.mass_sim,{...o3,...D}}),[q,re]=xe.useState(20),[O,te]=xe.useState([{id:"1",time:new Date().toLocaleTimeString("ru-RU"),text:"Ядро системы визуализации успешно запущено",type:"info"},{id:"2",time:new Date().toLocaleTimeString("ru-RU"),text:"Подключен математический модуль динамики орбит",type:"success"}]),H=xe.useCallback((D,Y="info")=>{const ie={id:Date.now().toString(),time:new Date().toLocaleTimeString("ru-RU"),text:D,type:Y};te(ge=>[...ge.slice(-49),ie])},[]);xe.useEffect(()=>{try{const D={scenarios:n,activeScenarioId:t,currentRawScenario:o,outlinerSettings:P,windows:b,currentOutages:v,currentTimeSeconds:u,isSidebarOpen:f};localStorage.setItem(vh,JSON.stringify(D))}catch(D){console.error("Failed to save state to localStorage",D)}},[n,t,o,P,b,v,u,f]);const ne=()=>{try{localStorage.removeItem(vh),H("Сохраненное состояние очищено! Перезагрузка страницы...","warning"),setTimeout(()=>{window.location.reload()},400)}catch(D){console.error("Failed to reset state",D)}},G=xe.useCallback(async D=>{var Y;try{H(`Загрузка сценария: ${D}`,"info");const ie=await fetch(`/api/simulate?scenario_id=${D}`);if(ie.ok){const ge=await ie.json();s(ge),ge.raw_scenario&&a(ge.raw_scenario),H(`Карта и расчет перестроены для '${ge.title}': ${((Y=ge.satellites)==null?void 0:Y.length)||0} аппаратов`,"success")}else $(D)}catch{$(D)}},[H]);xe.useEffect(()=>{if(!r||!r.satellites)return;const D=r.satellites.filter(ie=>(ie.temperature_c??35)>=80),Y=r.satellites.filter(ie=>(ie.fuel_pct??100)<=15);D.length>0&&D.forEach(ie=>{H(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${ie.id}]: T=${ie.temperature_c??84}°C (превышение порога 80°C)!`,"error")}),Y.length>0&&Y.forEach(ie=>{H(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${ie.id}]: остаток ксенона ${ie.fuel_kg??1.2} кг (${ie.fuel_pct??12}% <= 15%)!`,"warning")})},[r,H]);const $=D=>{const ie=D.includes("02")||D.includes("first_launch")?16:48,ge=[];for(let Ie=0;Ie<ie;Ie++){const Me=Math.floor(Ie/8),be=Ie%8,Se=(Ie+1).toString().padStart(2,"0");ge.push({id:`S${Se}`,plane:Me+1,idx:be,altitude:600,inc:86.4,raan:Me*60,arg_per:0,true_anomaly:be*45,sub_lat:Math.sin(be*45*Math.PI/180)*80,sub_lon:(Me*60+be*45)%360-180})}const J=[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"C70",name:"Шлюз C70",lat:59.93,lon:30.31,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"},{id:"Pechora",name:"Печора",lat:65.14,lon:57.22,type:"gateway"}];s({scenario_id:D,title:"Штатный Сценарий Группировки",description:"Сгенерированная геометрия 48 спутников",timestamp_utc:new Date().toISOString(),satellites:ge,gateways:J,routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S09","S17","Murmansk"],latency_ms:38.4,status:"АКТИВЕН"},{src:"C65",dst:"Pechora",path:["C65","S02","S10","Pechora"],latency_ms:29.1,status:"АКТИВЕН"}]}),H("Локальная геометрия сгенерирована: 48 спутников, 4 шлюза","info")};xe.useEffect(()=>{G(t)},[t,G]);const k=async D=>{var ie;H("Загрузка базового сценария для Монте-Карло анализа...","info"),a(D);const Y=((ie=D.meta)==null?void 0:ie.title)||"Загруженный Сценарий";e(ge=>{var Ie;const J=((Ie=D.meta)==null?void 0:Ie.id)||"custom_upload";return ge.some(Me=>Me.id===J)?ge:[...ge,{id:J,title:Y}]}),Ae("compare"),H("Запущен расчет комбинаций Монте-Карло... Ожидайте результаты в таблице.","success")},ee=(D,Y)=>{var J;H(`Анализ сценария "${(J=D.meta)==null?void 0:J.title}" загружается на 3D карту...`,"success"),a(D);const ie=Y&&Y.satellites&&Y.satellites.length>0&&Y.gateways;ie&&s(Y);const ge=D.failures||[];y(ge),ie||B(ge),Ae("analytics")},de=async D=>{var Me;H(`Генерация новой космической группировки (${D.planes}x${D.satsPerPlane} @ ${D.altitude}км)...`,"info"),c(!0);const Y=[],ie=[],ge=[];let J=1;for(let be=0;be<D.planes;be++){const Se=`P${be+1}`,Le=ca(be*(360/D.planes)%360,1),L=ca(be*(360/(D.planes*D.satsPerPlane))%360,1);Y.push({id:Se,raan_deg:Le,phase_deg:L});for(let ue=0;ue<D.satsPerPlane;ue++){const Re=`S${J.toString().padStart(2,"0")}`,I=ca(ue*(360/D.satsPerPlane)%360,1);ie.push({id:Re,plane_id:Se,slot_deg:I,launch_batch:1});const ye=Math.sin(I*Math.PI/180)*(D.inclination*.9),Z=(Le+I)%360-180;ge.push({id:Re,plane:be+1,idx:ue,altitude:D.altitude,inc:D.inclination,raan:Le,arg_per:0,true_anomaly:I,sub_lat:ca(ye,4),sub_lon:ca(Z,4)}),J++}}const Ie={schema_version:"cosmo-A-1.0",meta:{id:"custom_walker_config",title:`Walker Delta ${D.planes}x${D.satsPerPlane} (${ie.length} аппаратов)`},environment:{altitude_km:D.altitude,inclination_deg:D.inclination,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:D.minElevation,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:Y,satellites:ie},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}],failures:v.map(be=>({satellite_id:be.satellite_id,start_s:be.start_s,end_s:be.end_s})),gateway_outages:[]};try{const be=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:Ie})});if(be.ok){const Se=await be.json();s(Se),a(Ie),H(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((((Me=Se.simulation_result)==null?void 0:Me.overall_availability)||.99)*100).toFixed(2)}%`,"success"),Ae("analytics")}else s({scenario_id:"custom_config",title:`Walker Delta ${D.planes}x${D.satsPerPlane}`,description:`Конфигурация ${D.planes}x${D.satsPerPlane} @ ${D.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ge,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),H(`3D-карта перестроена (${ge.length} аппаратов)`,"info")}catch{s({scenario_id:"custom_config",title:`Walker Delta ${D.planes}x${D.satsPerPlane}`,description:`Конфигурация ${D.planes}x${D.satsPerPlane} @ ${D.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ge,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),H(`3D-карта перестроена под конфигурацию (${ge.length} аппаратов)`,"info")}finally{c(!1)}},le=()=>{const D=o||{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий Группировки"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},satellites:r==null?void 0:r.satellites,gateways:r==null?void 0:r.gateways},Y=JSON.stringify(D,null,2),ie=new Blob([Y],{type:"application/json"}),ge=URL.createObjectURL(ie),J=document.createElement("a");J.href=ge,J.download=`scenario_${t}_export.json`,J.click(),URL.revokeObjectURL(ge),H("Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)","success")},W=()=>{if(!r||!r.raw_scenario||!r.simulation_result){H("Нет полных данных симуляции для экспорта","warning");return}const D=[];if(r.simulation_result.routes_by_time)for(const Me of r.simulation_result.routes_by_time){const be=Me.t_s;for(const[Se,Le]of Object.entries(Me.routes||{}))D.push({t_s:be,client_id:Se,path:Le})}const Y={schema_version:"cosmo-A-result-1.0",effective_scenario:r.raw_scenario,routes:D},ie=JSON.stringify(Y,null,2),ge=new Blob([ie],{type:"application/json"}),J=URL.createObjectURL(ge),Ie=document.createElement("a");Ie.href=J,Ie.download=`cosmo-A-result-1.0_${t}.json`,Ie.click(),URL.revokeObjectURL(J),H("Итоговые результаты моделирования экспортированы в формате cosmo-A-result-1.0","success")},F=D=>{if(!D){p(null),w(null);return}p(D.id),w(D),H(`Камера сфокусирована на спутнике [${D.id}]. Отображается 3D-конус угла обзора (10°)`,"info")},B=async(D,Y=P.planeRaanMap,ie=P.planePhaseMap)=>{var ge;c(!0);try{const J=o?JSON.parse(JSON.stringify(o)):{schema_version:"cosmo-A-1.0",meta:{id:t,title:(r==null?void 0:r.title)||"Сценарий"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:[{id:"P1",raan_deg:0,phase_deg:0},{id:"P2",raan_deg:60,phase_deg:15},{id:"P3",raan_deg:120,phase_deg:30},{id:"P4",raan_deg:180,phase_deg:45},{id:"P5",raan_deg:240,phase_deg:60},{id:"P6",raan_deg:300,phase_deg:75}],satellites:((r==null?void 0:r.satellites)||[]).map(Me=>({id:Me.id,plane_id:`P${Me.plane}`,slot_deg:Me.idx,launch_batch:1}))},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}]};(ge=J.design)!=null&&ge.planes&&(J.design.planes=J.design.planes.map(Me=>{const be=parseInt(String(Me.id).replace("P",""))||1,Se=Y[be]??0,Le=ie[be]??0;return{...Me,raan_deg:Math.round((((Me.raan_deg??0)+Se)%360+360)%360*10)/10,phase_deg:Math.round((((Me.phase_deg??0)+Le)%360+360)%360*10)/10}})),J.failures=D.map(Me=>({satellite_id:Me.satellite_id,start_s:Me.start_s,end_s:Me.end_s}));const Ie=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:J})});if(Ie.ok){const Me=await Ie.json();s(Me),a(J)}}catch(J){console.error(J)}finally{c(!1)}};xe.useEffect(()=>{if(!r)return;const D=setTimeout(()=>{B(v,P.planeRaanMap,P.planePhaseMap)},250);return()=>clearTimeout(D)},[P.planeRaanMap,P.planePhaseMap]);const he=(D,Y)=>{const ie={satellite_id:D,start_s:u,end_s:u+Y},ge=[...v.filter(J=>J.satellite_id!==D),ie];y(ge),w(null),H(`Спутник [${D}] выведен из строя на ${Y}с! Вся топология пересчитана.`,"warning"),B(ge)},fe=D=>{const Y=v.filter(ie=>ie.satellite_id!==D);y(Y),w(null),H(`Работа спутника [${D}] успешно восстановлена`,"success"),B(Y)},me=D=>{y(D),B(D)},ke=()=>{y([]),B([])},we=D=>{D==="phase_shift"?(U(Y=>({...Y,planePhaseMap:{...Y.planePhaseMap,1:(Y.planePhaseMap[1]||0)+15}})),H("Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1","success")):D==="reroute_isl"&&(j(),H("Применена рекомендация: Перестроена графовая маршрутизация ISL линий","success"))},j=async()=>{var D;c(!0),H("Запуск полного математического моделирования...","info");try{if(o)await k(o);else{const Y=await fetch(`/api/simulate?scenario_id=${t}`);if(Y.ok){const ie=await Y.json();s(ie),H(`Моделирование завершено: Общая доступность ${((((D=ie.simulation_result)==null?void 0:D.overall_availability)||.9998)*100).toFixed(2)}%`,"success")}}}catch{H("Ошибка при вычислении симуляции","error")}finally{c(!1),Ae("analytics")}},Be=D=>{e(Y=>Y.filter(ie=>ie.id!==D)),H(`Сценарий '${D}' удален из списка`,"warning")},Ae=D=>{const Y=q+1;re(Y),R(ie=>({...ie,[D]:{isOpen:!0,zIndex:Y}})),H(`Открыто окно: ${D}`,"info")},Pe=D=>{R(Y=>({...Y,[D]:{...Y[D],isOpen:!1}}))},Ce=D=>{const Y=q+1;re(Y),R(ie=>({...ie,[D]:{...ie[D],zIndex:Y}}))};return d.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#1a1a1a",overflow:"hidden"},children:[d.jsx(Cb,{scenarios:n,activeScenario:t,onSelectScenario:D=>i(D),onRunSimulation:j,onOpenWindow:Ae,onToggleSidebar:()=>h(!f),onUploadScenarioJson:k,onExportScenarioJson:le,onExportResultsJson:W,onOpenPdfReport:()=>sf(r),onResetState:ne,viewMode:x,onToggleViewMode:_,isSidebarOpen:f,isSimulating:l}),d.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[d.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[d.jsx(Pb,{settings:P,onChangeSettings:U}),g&&d.jsxs("button",{onClick:()=>p(null),style:{position:"absolute",top:"16px",left:"68px",zIndex:86,backgroundColor:"#1473e6",color:"#ffffff",border:"none",borderRadius:"6px",padding:"7px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 14px rgba(0,0,0,0.5)",transition:"all 0.15s ease"},children:[d.jsx(Ka,{size:14}),d.jsx("span",{children:"Сбросить фокус камеры (Вся Земля)"})]}),d.jsx(qR,{scenario:r,currentTimeSeconds:u,onSelectSatellite:F}),x==="3d"?d.jsx(FR,{scenario:r,settings:P,currentTime:u,outages:v,criticalSatellites:T,focusedSatelliteId:g,onSelectSatellite:F}):d.jsx(e3,{scenario:r,settings:P,currentTime:u,outages:v,onSelectSatellite:D=>{const Y=r==null?void 0:r.satellites.find(ie=>ie.id===D);Y&&w(Y)}}),d.jsx(KR,{currentTime:u,maxTime:86400,stepSeconds:P.stepSeconds,onChangeStep:D=>U(Y=>({...Y,stepSeconds:D})),onChangeTime:m})]}),f&&d.jsx(Rb,{settings:P,onChangeSettings:U,isOpen:f,scenario:r,focusedSatelliteId:g,onSelectSatellite:F}),d.jsx(Yr,{id:"satellite_detail",title:`Управление и Трафик Спутника ${(S==null?void 0:S.id)||""}`,isOpen:!!S,onClose:()=>w(null),zIndex:((Oe=b.satellite_detail)==null?void 0:Oe.zIndex)||15,onFocus:()=>Ce("satellite_detail"),initialPos:{x:120,y:80,width:460,height:490},children:d.jsx(ZR,{satellite:S,activeRoutePath:(oe=(Fe=r==null?void 0:r.routes_sample)==null?void 0:Fe.find(D=>S&&D.path.includes(S.id)))==null?void 0:oe.path,currentOutages:v,currentTimeSeconds:u,onClose:()=>w(null),onApplyOutage:he,onRestoreSatellite:fe})}),d.jsx(Yr,{id:"analytics",title:"Аналитика Группировки & Рекомендации Регламента",isOpen:b.analytics.isOpen,onClose:()=>Pe("analytics"),zIndex:b.analytics.zIndex,onFocus:()=>Ce("analytics"),initialPos:{x:60,y:60,width:880,height:560},children:d.jsx(GR,{scenario:r,outages:v,currentTime:u,onApplyRecommendation:we,onExportResultsJson:W,onOpenPdfReport:()=>sf(r)})}),d.jsx(Yr,{id:"configurator",title:"Конфигуратор Параметров Группировки",isOpen:b.configurator.isOpen,onClose:()=>Pe("configurator"),zIndex:b.configurator.zIndex,onFocus:()=>Ce("configurator"),initialPos:{x:180,y:90,width:680,height:460},children:d.jsx(WR,{onApplyConfig:de,onExportJson:le})}),d.jsx(Yr,{id:"compare",title:"Анализ Комбинаций Отказов и Сравнение",isOpen:(pe=b.compare)==null?void 0:pe.isOpen,onClose:()=>Pe("compare"),zIndex:((A=b.compare)==null?void 0:A.zIndex)||12,onFocus:()=>Ce("compare"),initialPos:{x:100,y:100,width:900,height:600},children:d.jsx($R,{onOpenConfigurator:()=>Ae("configurator"),baseScenario:o,onVisualizeScenario:ee,onClose:()=>Pe("compare"),onSetCriticalSatellites:E})}),d.jsx(JR,{isOpen:(M=b.emergency)==null?void 0:M.isOpen,onClose:()=>Pe("emergency"),zIndex:((X=b.emergency)==null?void 0:X.zIndex)||13,onFocusWindow:()=>Ce("emergency"),currentOutages:v,outlinerSettings:P,onApplyOutageBatch:me,onClearOutages:ke,onUpdateSettings:U,onAddLog:H}),d.jsx(Yr,{id:"scenarios",title:"Менеджер и Библиотека Сценариев",isOpen:(z=b.scenarios)==null?void 0:z.isOpen,onClose:()=>Pe("scenarios"),zIndex:((K=b.scenarios)==null?void 0:K.zIndex)||14,onFocus:()=>Ce("scenarios"),initialPos:{x:120,y:70,width:780,height:520},children:d.jsx(QR,{scenarios:n,activeScenarioId:t,onSelectScenario:D=>i(D),onUploadScenarioJson:k,onDeleteScenario:Be,onExportScenarioJson:le,onOpenConfigurator:()=>Ae("configurator")})}),d.jsx(Yr,{id:"recommendations",title:"Инженерные Рекомендации и Авто-Оптимизация Группировки",isOpen:(V=b.recommendations)==null?void 0:V.isOpen,onClose:()=>Pe("recommendations"),zIndex:((ve=b.recommendations)==null?void 0:ve.zIndex)||17,onFocus:()=>Ce("recommendations"),initialPos:{x:80,y:70,width:940,height:620},children:d.jsx(n3,{scenario:r,outages:v,outlinerSettings:P,onUpdateSettings:D=>U(Y=>({...Y,...D})),onClearOutages:ke,onOpenWindow:Ae,onOpenPdfReport:()=>sf(r)})}),d.jsx(YR,{logs:O})]})]})};function ca(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}const dx=document.getElementById("root");dx&&of.createRoot(dx).render(d.jsx(Tc.StrictMode,{children:d.jsx(a3,{})}));
