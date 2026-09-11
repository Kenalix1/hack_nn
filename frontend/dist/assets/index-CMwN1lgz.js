(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},ac={},Eg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),E_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),Sh=Symbol.iterator;function I_(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,Tg={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=Zs.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}var lf=af.prototype=new Cg;lf.constructor=af;bg(lf,Zs.prototype);lf.isPureReactComponent=!0;var Mh=Array.isArray,Ag=Object.prototype.hasOwnProperty,cf={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Pg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ag.call(e,i)&&!Rg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:cf.current}}function N_(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function U_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eh=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U_(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+kc(o,0):i,Mh(r)?(n="",t!=null&&(n=t.replace(Eh,"$&/")+"/"),cl(r,e,n,"",function(u){return u})):r!=null&&(uf(r)&&(r=N_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Eh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+kc(s,a);o+=cl(s,e,n,l,r)}else if(l=I_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+kc(s,a++),o+=cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function k_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ul={transition:null},O_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ul,ReactCurrentOwner:cf};function Lg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Zs;Je.Fragment=w_;Je.Profiler=T_;Je.PureComponent=af;Je.StrictMode=b_;Je.Suspense=P_;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;Je.act=Lg;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ag.call(e,l)&&!Rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:A_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C_,_context:t},t.Consumer=t};Je.createElement=Pg;Je.createFactory=function(t){var e=Pg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:R_,render:t}};Je.isValidElement=uf;Je.lazy=function(t){return{$$typeof:D_,_payload:{_status:-1,_result:t},_init:k_}};Je.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};Je.unstable_act=Lg;Je.useCallback=function(t,e){return an.current.useCallback(t,e)};Je.useContext=function(t){return an.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Je.useEffect=function(t,e){return an.current.useEffect(t,e)};Je.useId=function(){return an.current.useId()};Je.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return an.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Je.useRef=function(t){return an.current.useRef(t)};Je.useState=function(t){return an.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return an.current.useTransition()};Je.version="18.3.1";Eg.exports=Je;var be=Eg.exports;const F_=M_(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=be,B_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:G_.current}}ac.Fragment=j_;ac.jsx=Dg;ac.jsxs=Dg;Mg.exports=ac;var c=Mg.exports,qu={},Ig={exports:{}},En={},Ng={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var j=I.length;I.push(O);e:for(;0<j;){var te=j-1>>>1,ae=I[te];if(0<r(ae,O))I[te]=O,I[j]=ae,j=te;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],j=I.pop();if(j!==O){I[0]=j;e:for(var te=0,ae=I.length,De=ae>>>1;te<De;){var B=2*(te+1)-1,re=I[B],J=B+1,le=I[J];if(0>r(re,j))J<ae&&0>r(le,re)?(I[te]=le,I[J]=j,te=J):(I[te]=re,I[B]=j,te=B);else if(J<ae&&0>r(le,j))I[te]=le,I[J]=j,te=J;else break e}}return O}function r(I,O){var j=I.sortIndex-O.sortIndex;return j!==0?j:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,d=3,g=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=I)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function S(I){if(y=!1,x(I),!v)if(n(l)!==null)v=!0,G(T);else{var O=n(u);O!==null&&k(S,O.startTime-I)}}function T(I,O){v=!1,y&&(y=!1,f(D),D=-1),g=!0;var j=d;try{for(x(O),p=n(l);p!==null&&(!(p.expirationTime>O)||I&&!R());){var te=p.callback;if(typeof te=="function"){p.callback=null,d=p.priorityLevel;var ae=te(p.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(l)&&i(l),x(O)}else i(l);p=n(l)}if(p!==null)var De=!0;else{var B=n(u);B!==null&&k(S,B.startTime-O),De=!1}return De}finally{p=null,d=j,g=!1}}var b=!1,w=null,D=-1,V=5,M=-1;function R(){return!(t.unstable_now()-M<V)}function W(){if(w!==null){var I=t.unstable_now();M=I;var O=!0;try{O=w(!0,I)}finally{O?Q():(b=!1,w=null)}}else b=!1}var Q;if(typeof _=="function")Q=function(){_(W)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,K=U.port2;U.port1.onmessage=W,Q=function(){K.postMessage(null)}}else Q=function(){m(W,0)};function G(I){w=I,b||(b=!0,Q())}function k(I,O){D=m(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,G(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var j=d;d=O;try{return I()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=d;d=I;try{return O()}finally{d=j}},t.unstable_scheduleCallback=function(I,O,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,I){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=j+ae,I={id:h++,callback:O,priorityLevel:I,startTime:j,expirationTime:ae,sortIndex:-1},j>te?(I.sortIndex=j,e(u,I),n(l)===null&&I===n(u)&&(y?(f(D),D=-1):y=!0,k(S,j-te))):(I.sortIndex=ae,e(l,I),v||g||(v=!0,G(T))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var O=d;return function(){var j=d;d=O;try{return I.apply(this,arguments)}finally{d=j}}}})(Ug);Ng.exports=Ug;var W_=Ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=be,Mn=W_;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kg=new Set,Fo={};function Br(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Fo[t]=e,t=0;t<e.length;t++)kg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},bh={};function Y_(t){return Ku.call(bh,t)?!0:Ku.call(wh,t)?!1:$_.test(t)?bh[t]=!0:(wh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);Gt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),xs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Th=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Oc;function Eo(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Fc=!1;function zc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function Z_(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case xs:return"Portal";case Zu:return"Profiler";case pf:return"StrictMode";case Ju:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fg:return(t.displayName||"Context")+".Consumer";case Og:return(t._context.displayName||"Context")+".Provider";case mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gf:return e=t.displayName||null,e!==null?e:ed(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return ed(t(e))}catch{}}return null}function J_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(e);case 8:return e===pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=Bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=Q_(t))}function jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function td(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function nd(t,e){Hg(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(wo(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Gg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,Wg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function $g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cd=null,Ds=null,Is=null;function Lh(t){if(t=aa(t)){if(typeof cd!="function")throw Error(me(280));var e=t.stateNode;e&&(e=fc(e),cd(t.stateNode,t.type,e))}}function Yg(t){Ds?Is?Is.push(t):Is=[t]:Ds=t}function qg(){if(Ds){var t=Ds,e=Is;if(Is=Ds=null,Lh(t),e)for(t=0;t<e.length;t++)Lh(e[t])}}function Kg(t,e){return t(e)}function Zg(){}var Bc=!1;function Jg(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return Kg(t,e,n)}finally{Bc=!1,(Ds!==null||Is!==null)&&(Zg(),qg())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var ud=!1;if(Mi)try{var io={};Object.defineProperty(io,"passive",{get:function(){ud=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{ud=!1}function nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ro=!1,Al=null,Rl=!1,dd=null,iv={onError:function(t){Ro=!0,Al=t}};function rv(t,e,n,i,r,s,o,a,l){Ro=!1,Al=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),Ro){if(Ro){var u=Al;Ro=!1,Al=null}else throw Error(me(198));Rl||(Rl=!0,dd=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dh(t){if(jr(t)!==t)throw Error(me(188))}function ov(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dh(r),t;if(s===i)return Dh(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function e0(t){return t=ov(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=Mn.unstable_scheduleCallback,Ih=Mn.unstable_cancelCallback,av=Mn.unstable_shouldYield,lv=Mn.unstable_requestPaint,Et=Mn.unstable_now,cv=Mn.unstable_getCurrentPriorityLevel,_f=Mn.unstable_ImmediatePriority,i0=Mn.unstable_UserBlockingPriority,Pl=Mn.unstable_NormalPriority,uv=Mn.unstable_LowPriority,r0=Mn.unstable_IdlePriority,lc=null,ri=null;function dv(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:pv,fv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(fv(t)/hv|0)|0}var va=64,ya=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a0,yf,l0,c0,u0,hd=!1,Sa=[],Vi=null,Wi=null,Xi=null,jo=new Map,Ho=new Map,Oi=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vv(t,e,n,i,r){switch(e){case"focusin":return Vi=ro(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=ro(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=ro(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,ro(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ho.set(s,ro(Ho.get(s)||null,t,e,n,i,r)),!0}return!1}function d0(t){var e=br(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qg(n),e!==null){t.blockedOn=e,u0(t.priority,function(){l0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ld=i,n.target.dispatchEvent(i),ld=null}else return e=aa(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Uh(t,e,n){dl(t)&&n.delete(e)}function yv(){hd=!1,Vi!==null&&dl(Vi)&&(Vi=null),Wi!==null&&dl(Wi)&&(Wi=null),Xi!==null&&dl(Xi)&&(Xi=null),jo.forEach(Uh),Ho.forEach(Uh)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,yv)))}function Go(t){function e(r){return so(r,t)}if(0<Sa.length){so(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&so(Vi,t),Wi!==null&&so(Wi,t),Xi!==null&&so(Xi,t),jo.forEach(e),Ho.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&Oi.shift()}var Ns=Ti.ReactCurrentBatchConfig,Dl=!0;function Sv(t,e,n,i){var r=it,s=Ns.transition;Ns.transition=null;try{it=1,Sf(t,e,n,i)}finally{it=r,Ns.transition=s}}function Mv(t,e,n,i){var r=it,s=Ns.transition;Ns.transition=null;try{it=4,Sf(t,e,n,i)}finally{it=r,Ns.transition=s}}function Sf(t,e,n,i){if(Dl){var r=pd(t,e,n,i);if(r===null)Zc(t,e,i,Il,n),Nh(t,i);else if(vv(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&a0(s),s=pd(t,e,n,i),s===null&&Zc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zc(t,e,i,null,n)}}var Il=null;function pd(t,e,n,i){if(Il=null,t=xf(i),t=br(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function f0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case _f:return 1;case i0:return 4;case Pl:case uv:return 16;case r0:return 536870912;default:return 16}default:return 16}}var ji=null,Mf=null,fl=null;function h0(){if(fl)return fl;var t,e=Mf,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function kh(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:kh,this.isPropagationStopped=kh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=wn(Js),oa=vt({},Js,{view:0,detail:0}),Ev=wn(oa),Hc,Gc,oo,cc=vt({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Hc=t.screenX-oo.screenX,Gc=t.screenY-oo.screenY):Gc=Hc=0,oo=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Oh=wn(cc),wv=vt({},cc,{dataTransfer:0}),bv=wn(wv),Tv=vt({},oa,{relatedTarget:0}),Vc=wn(Tv),Cv=vt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=wn(Cv),Rv=vt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=wn(Rv),Lv=vt({},Js,{data:0}),Fh=wn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function wf(){return Uv}var kv=vt({},oa,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=wn(kv),Fv=vt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=wn(Fv),zv=vt({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),Bv=wn(zv),jv=vt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=wn(jv),Gv=vt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=wn(Gv),Wv=[9,13,27,32],bf=Mi&&"CompositionEvent"in window,Po=null;Mi&&"documentMode"in document&&(Po=document.documentMode);var Xv=Mi&&"TextEvent"in window&&!Po,p0=Mi&&(!bf||Po&&8<Po&&11>=Po),Bh=" ",jh=!1;function m0(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function $v(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(jh=!0,Bh);case"textInput":return t=e.data,t===Bh&&jh?null:t;default:return null}}function Yv(t,e){if(vs)return t==="compositionend"||!bf&&m0(t,e)?(t=h0(),fl=Mf=ji=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function x0(t,e,n,i){Yg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Vo=null;function Kv(t){A0(t,0)}function uc(t){var e=Ms(t);if(jg(e))return t}function Zv(t,e){if(t==="change")return e}var _0=!1;if(Mi){var Wc;if(Mi){var Xc="oninput"in document;if(!Xc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Xc=typeof Gh.oninput=="function"}Wc=Xc}else Wc=!1;_0=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Lo&&(Lo.detachEvent("onpropertychange",v0),Vo=Lo=null)}function v0(t){if(t.propertyName==="value"&&uc(Vo)){var e=[];x0(e,Vo,t,xf(t)),Jg(Kv,e)}}function Jv(t,e,n){t==="focusin"?(Vh(),Lo=e,Vo=n,Lo.attachEvent("onpropertychange",v0)):t==="focusout"&&Vh()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Vo)}function ey(t,e){if(t==="click")return uc(e)}function ty(t,e){if(t==="input"||t==="change")return uc(e)}function ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:ny;function Wo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ku.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,e){var n=Wh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S0(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iy(t){var e=S0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xh(n,s);var o=Xh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=Mi&&"documentMode"in document&&11>=document.documentMode,ys=null,md=null,Do=null,gd=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gd||ys==null||ys!==Cl(i)||(i=ys,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Wo(Do,i)||(Do=i,i=Nl(md,"onSelect"),0<i.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},$c={},M0={};Mi&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function dc(t){if($c[t])return $c[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return $c[t]=e[n];return t}var E0=dc("animationend"),w0=dc("animationiteration"),b0=dc("animationstart"),T0=dc("transitionend"),C0=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){C0.set(t,e),Br(e,[t])}for(var Yc=0;Yc<Yh.length;Yc++){var qc=Yh[Yc],sy=qc.toLowerCase(),oy=qc[0].toUpperCase()+qc.slice(1);or(sy,"on"+oy)}or(E0,"onAnimationEnd");or(w0,"onAnimationIteration");or(b0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(T0,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,u),s=l}}}if(Rl)throw t=dd,Rl=!1,dd=null,t}function ct(t,e){var n=e[Sd];n===void 0&&(n=e[Sd]=new Set);var i=t+"__bubble";n.has(i)||(R0(e,t,2,!1),n.add(i))}function Kc(t,e,n){var i=0;e&&(i|=4),R0(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[wa]){t[wa]=!0,kg.forEach(function(n){n!=="selectionchange"&&(ay.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Kc("selectionchange",!1,e))}}function R0(t,e,n,i){switch(f0(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=Sf}n=r.bind(null,e,n,t),r=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jg(function(){var u=s,h=xf(n),p=[];e:{var d=C0.get(t);if(d!==void 0){var g=Ef,v=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":g=Ov;break;case"focusin":v="focus",g=Vc;break;case"focusout":v="blur",g=Vc;break;case"beforeblur":case"afterblur":g=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bv;break;case E0:case w0:case b0:g=Av;break;case T0:g=Hv;break;case"scroll":g=Ev;break;case"wheel":g=Vv;break;case"copy":case"cut":case"paste":g=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zh}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var _=u,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Bo(_,f),S!=null&&y.push($o(_,S,x)))),m)break;_=_.return}0<y.length&&(d=new g(d,v,null,n,h),p.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ld&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ei]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?br(v):null,v!==null&&(m=jr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Oh,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=zh,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=g==null?d:Ms(g),x=v==null?d:Ms(v),d=new y(S,_+"leave",g,n,h),d.target=m,d.relatedTarget=x,S=null,br(h)===u&&(y=new y(f,_+"enter",v,n,h),y.target=x,y.relatedTarget=m,S=y),m=S,g&&v)t:{for(y=g,f=v,_=0,x=y;x;x=Vr(x))_++;for(x=0,S=f;S;S=Vr(S))x++;for(;0<_-x;)y=Vr(y),_--;for(;0<x-_;)f=Vr(f),x--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=Vr(y),f=Vr(f)}y=null}else y=null;g!==null&&Kh(p,d,g,y,!1),v!==null&&m!==null&&Kh(p,m,v,y,!0)}}e:{if(d=u?Ms(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=Zv;else if(Hh(d))if(_0)T=ty;else{T=Qv;var b=Jv}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ey);if(T&&(T=T(t,u))){x0(p,T,n,h);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&id(d,"number",d.value)}switch(b=u?Ms(u):window,t){case"focusin":(Hh(b)||b.contentEditable==="true")&&(ys=b,md=u,Do=null);break;case"focusout":Do=md=ys=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,$h(p,n,h);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":$h(p,n,h)}var w;if(bf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vs?m0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(p0&&n.locale!=="ko"&&(vs||D!=="onCompositionStart"?D==="onCompositionEnd"&&vs&&(w=h0()):(ji=h,Mf="value"in ji?ji.value:ji.textContent,vs=!0)),b=Nl(u,D),0<b.length&&(D=new Fh(D,t,null,n,h),p.push({event:D,listeners:b}),w?D.data=w:(w=g0(n),w!==null&&(D.data=w)))),(w=Xv?$v(t,n):Yv(t,n))&&(u=Nl(u,"onBeforeInput"),0<u.length&&(h=new Fh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=w))}A0(p,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Bo(t,n),s!=null&&i.unshift($o(t,s,r)),s=Bo(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Bo(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Bo(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function Zh(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function ba(t,e,n){if(e=Zh(e),Zh(t)!==e&&n)throw Error(me(425))}function Ul(){}var xd=null,_d=null;function vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(fy)}:yd;function fy(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Go(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Qs,Yo="__reactProps$"+Qs,Ei="__reactContainer$"+Qs,Sd="__reactEvents$"+Qs,hy="__reactListeners$"+Qs,py="__reactHandles$"+Qs;function br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[ni])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function fc(t){return t[Yo]||null}var Md=[],Es=-1;function ar(t){return{current:t}}function dt(t){0>Es||(t.current=Md[Es],Md[Es]=null,Es--)}function at(t,e){Es++,Md[Es]=t.current,t.current=e}var ir={},Jt=ar(ir),fn=ar(!1),Ir=ir;function js(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function kl(){dt(fn),dt(Jt)}function ep(t,e,n){if(Jt.current!==ir)throw Error(me(168));at(Jt,e),at(fn,n)}function P0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,J_(t)||"Unknown",r));return vt({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Ir=Jt.current,at(Jt,t),at(fn,fn.current),!0}function tp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=P0(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,dt(fn),dt(Jt),at(Jt,t)):dt(fn),at(fn,n)}var gi=null,hc=!1,Qc=!1;function L0(t){gi===null?gi=[t]:gi.push(t)}function my(t){hc=!0,L0(t)}function lr(){if(!Qc&&gi!==null){Qc=!0;var t=0,e=it;try{var n=gi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,hc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),n0(_f,lr),r}finally{it=e,Qc=!1}}return null}var ws=[],bs=0,Fl=null,zl=0,Rn=[],Pn=0,Nr=null,_i=1,vi="";function yr(t,e){ws[bs++]=zl,ws[bs++]=Fl,Fl=t,zl=e}function D0(t,e,n){Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Nr,Nr=t;var i=_i;t=vi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Yn(e)+r|n<<r|i,vi=s+t}else _i=1<<s|n<<r|i,vi=t}function Cf(t){t.return!==null&&(yr(t,1),D0(t,1,0))}function Af(t){for(;t===Fl;)Fl=ws[--bs],ws[bs]=null,zl=ws[--bs],ws[bs]=null;for(;t===Nr;)Nr=Rn[--Pn],Rn[Pn]=null,vi=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,pt=!1,Vn=null;function I0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wd(t){if(pt){var e=yn;if(e){var n=e;if(!np(t,e)){if(Ed(t))throw Error(me(418));e=$i(n.nextSibling);var i=Sn;e&&np(t,e)?I0(i,n):(t.flags=t.flags&-4097|2,pt=!1,Sn=t)}}else{if(Ed(t))throw Error(me(418));t.flags=t.flags&-4097|2,pt=!1,Sn=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Ta(t){if(t!==Sn)return!1;if(!pt)return ip(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vd(t.type,t.memoizedProps)),e&&(e=yn)){if(Ed(t))throw N0(),Error(me(418));for(;e;)I0(t,e),e=$i(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?$i(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=yn;t;)t=$i(t.nextSibling)}function Hs(){yn=Sn=null,pt=!1}function Rf(t){Vn===null?Vn=[t]:Vn.push(t)}var gy=Ti.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function U0(t){function e(f,_){if(t){var x=f.deletions;x===null?(f.deletions=[_],f.flags|=16):x.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Zi(f,_),f.index=0,f.sibling=null,f}function s(f,_,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<_?(f.flags|=2,_):x):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,x,S){return _===null||_.tag!==6?(_=ou(x,f.mode,S),_.return=f,_):(_=r(_,x),_.return=f,_)}function l(f,_,x,S){var T=x.type;return T===_s?h(f,_,x.props.children,S,x.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ni&&rp(T)===_.type)?(S=r(_,x.props),S.ref=ao(f,_,x),S.return=f,S):(S=yl(x.type,x.key,x.props,null,f.mode,S),S.ref=ao(f,_,x),S.return=f,S)}function u(f,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=au(x,f.mode,S),_.return=f,_):(_=r(_,x.children||[]),_.return=f,_)}function h(f,_,x,S,T){return _===null||_.tag!==7?(_=Pr(x,f.mode,S,T),_.return=f,_):(_=r(_,x),_.return=f,_)}function p(f,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ou(""+_,f.mode,x),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:return x=yl(_.type,_.key,_.props,null,f.mode,x),x.ref=ao(f,null,_),x.return=f,x;case xs:return _=au(_,f.mode,x),_.return=f,_;case Ni:var S=_._init;return p(f,S(_._payload),x)}if(wo(_)||no(_))return _=Pr(_,f.mode,x,null),_.return=f,_;Ca(f,_)}return null}function d(f,_,x,S){var T=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(f,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return x.key===T?l(f,_,x,S):null;case xs:return x.key===T?u(f,_,x,S):null;case Ni:return T=x._init,d(f,_,T(x._payload),S)}if(wo(x)||no(x))return T!==null?null:h(f,_,x,S,null);Ca(f,x)}return null}function g(f,_,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(_,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ga:return f=f.get(S.key===null?x:S.key)||null,l(_,f,S,T);case xs:return f=f.get(S.key===null?x:S.key)||null,u(_,f,S,T);case Ni:var b=S._init;return g(f,_,x,b(S._payload),T)}if(wo(S)||no(S))return f=f.get(x)||null,h(_,f,S,T,null);Ca(_,S)}return null}function v(f,_,x,S){for(var T=null,b=null,w=_,D=_=0,V=null;w!==null&&D<x.length;D++){w.index>D?(V=w,w=null):V=w.sibling;var M=d(f,w,x[D],S);if(M===null){w===null&&(w=V);break}t&&w&&M.alternate===null&&e(f,w),_=s(M,_,D),b===null?T=M:b.sibling=M,b=M,w=V}if(D===x.length)return n(f,w),pt&&yr(f,D),T;if(w===null){for(;D<x.length;D++)w=p(f,x[D],S),w!==null&&(_=s(w,_,D),b===null?T=w:b.sibling=w,b=w);return pt&&yr(f,D),T}for(w=i(f,w);D<x.length;D++)V=g(w,f,D,x[D],S),V!==null&&(t&&V.alternate!==null&&w.delete(V.key===null?D:V.key),_=s(V,_,D),b===null?T=V:b.sibling=V,b=V);return t&&w.forEach(function(R){return e(f,R)}),pt&&yr(f,D),T}function y(f,_,x,S){var T=no(x);if(typeof T!="function")throw Error(me(150));if(x=T.call(x),x==null)throw Error(me(151));for(var b=T=null,w=_,D=_=0,V=null,M=x.next();w!==null&&!M.done;D++,M=x.next()){w.index>D?(V=w,w=null):V=w.sibling;var R=d(f,w,M.value,S);if(R===null){w===null&&(w=V);break}t&&w&&R.alternate===null&&e(f,w),_=s(R,_,D),b===null?T=R:b.sibling=R,b=R,w=V}if(M.done)return n(f,w),pt&&yr(f,D),T;if(w===null){for(;!M.done;D++,M=x.next())M=p(f,M.value,S),M!==null&&(_=s(M,_,D),b===null?T=M:b.sibling=M,b=M);return pt&&yr(f,D),T}for(w=i(f,w);!M.done;D++,M=x.next())M=g(w,f,D,M.value,S),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?D:M.key),_=s(M,_,D),b===null?T=M:b.sibling=M,b=M);return t&&w.forEach(function(W){return e(f,W)}),pt&&yr(f,D),T}function m(f,_,x,S){if(typeof x=="object"&&x!==null&&x.type===_s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:e:{for(var T=x.key,b=_;b!==null;){if(b.key===T){if(T=x.type,T===_s){if(b.tag===7){n(f,b.sibling),_=r(b,x.props.children),_.return=f,f=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ni&&rp(T)===b.type){n(f,b.sibling),_=r(b,x.props),_.ref=ao(f,b,x),_.return=f,f=_;break e}n(f,b);break}else e(f,b);b=b.sibling}x.type===_s?(_=Pr(x.props.children,f.mode,S,x.key),_.return=f,f=_):(S=yl(x.type,x.key,x.props,null,f.mode,S),S.ref=ao(f,_,x),S.return=f,f=S)}return o(f);case xs:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(f,_.sibling),_=r(_,x.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=au(x,f.mode,S),_.return=f,f=_}return o(f);case Ni:return b=x._init,m(f,_,b(x._payload),S)}if(wo(x))return v(f,_,x,S);if(no(x))return y(f,_,x,S);Ca(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,x),_.return=f,f=_):(n(f,_),_=ou(x,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var Gs=U0(!0),k0=U0(!1),Bl=ar(null),jl=null,Ts=null,Pf=null;function Lf(){Pf=Ts=jl=null}function Df(t){var e=Bl.current;dt(Bl),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){jl=t,Pf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(jl===null)throw Error(me(308));Ts=t,jl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Tr=null;function If(t){Tr===null?Tr=[t]:Tr.push(t)}function O0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,If(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,p,d):v,d==null)break e;p=vt({},p,d);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=p):h=h.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=p}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var la={},si=ar(la),qo=ar(la),Ko=ar(la);function Cr(t){if(t===la)throw Error(me(174));return t}function Uf(t,e){switch(at(Ko,e),at(qo,t),at(si,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}dt(si),at(si,e)}function Vs(){dt(si),dt(qo),dt(Ko)}function z0(t){Cr(Ko.current);var e=Cr(si.current),n=sd(e,t.type);e!==n&&(at(qo,t),at(si,n))}function kf(t){qo.current===t&&(dt(si),dt(qo))}var xt=ar(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function Of(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var ml=Ti.ReactCurrentDispatcher,tu=Ti.ReactCurrentBatchConfig,Ur=0,_t=null,Ct=null,It=null,Vl=!1,Io=!1,Zo=0,xy=0;function Xt(){throw Error(me(321))}function Ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,r,s){if(Ur=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Sy:My,t=n(i,r),Io){s=0;do{if(Io=!1,Zo=0,25<=s)throw Error(me(301));s+=1,It=Ct=null,e.updateQueue=null,ml.current=Ey,t=n(i,r)}while(Io)}if(ml.current=Wl,e=Ct!==null&&Ct.next!==null,Ur=0,It=Ct=_t=null,Vl=!1,e)throw Error(me(300));return t}function Bf(){var t=Zo!==0;return Zo=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=t:It=It.next=t,It}function Un(){if(Ct===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?_t.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(me(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?_t.memoizedState=It=t:It=It.next=t}return It}function Jo(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,_t.lanes|=h,kr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function iu(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function B0(){}function j0(t,e){var n=_t,i=Un(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,jf(V0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Qo(9,G0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(me(349));Ur&30||H0(n,e,r)}return r}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,i){e.value=n,e.getSnapshot=i,W0(e)&&X0(t)}function V0(t,e,n){return n(function(){W0(e)&&X0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function X0(t){var e=wi(t,1);e!==null&&qn(e,t,1,-1)}function ap(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=yy.bind(null,_t,t),[e.memoizedState,t]}function Qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $0(){return Un().memoizedState}function gl(t,e,n,i){var r=Qn();_t.flags|=t,r.memoizedState=Qo(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ff(i,o.deps)){r.memoizedState=Qo(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Qo(1|e,n,s,i)}function lp(t,e){return gl(8390656,8,t,e)}function jf(t,e){return pc(2048,8,t,e)}function Y0(t,e){return pc(4,2,t,e)}function q0(t,e){return pc(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,K0.bind(null,e,t),n)}function Hf(){}function J0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Q0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ff(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ex(t,e,n){return Ur&21?(Zn(n,e)||(n=s0(),_t.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function _y(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=tu.transition;tu.transition={};try{t(!1),e()}finally{it=n,tu.transition=i}}function tx(){return Un().memoizedState}function vy(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nx(t))ix(e,n);else if(n=O0(t,e,n,i),n!==null){var r=sn();qn(n,t,i,r),rx(n,e,i)}}function yy(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nx(t))ix(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=O0(t,e,r,i),n!==null&&(r=sn(),qn(n,t,i,r),rx(n,e,i))}}function nx(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function ix(t,e){Io=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var Wl={readContext:Nn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Sy={readContext:Nn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vy.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Hf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=_y.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Qn();if(pt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),kt===null)throw Error(me(349));Ur&30||H0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lp(V0.bind(null,i,s,t),[t]),i.flags|=2048,Qo(9,G0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=kt.identifierPrefix;if(pt){var n=vi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},My={readContext:Nn,useCallback:J0,useContext:Nn,useEffect:jf,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:q0,useMemo:Q0,useReducer:nu,useRef:$0,useState:function(){return nu(Jo)},useDebugValue:Hf,useDeferredValue:function(t){var e=Un();return ex(e,Ct.memoizedState,t)},useTransition:function(){var t=nu(Jo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:j0,useId:tx,unstable_isNewReconciler:!1},Ey={readContext:Nn,useCallback:J0,useContext:Nn,useEffect:jf,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:q0,useMemo:Q0,useReducer:iu,useRef:$0,useState:function(){return iu(Jo)},useDebugValue:Hf,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:ex(e,Ct.memoizedState,t)},useTransition:function(){var t=iu(Jo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:j0,useId:tx,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Ki(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Ki(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(qn(e,t,i,n),pl(e,t,i))}};function cp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,i)||!Wo(r,s):!0}function sx(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=hn(e)?Ir:Jt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function up(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=hn(e)?Ir:Jt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function ox(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Fd=i),Ad(t,e)},n}function ax(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ad(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fy.bind(null,t,e,n),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var by=Ti.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?k0(e,null,n,i):Gs(e,t.child,n,i)}function pp(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=zf(t,e,n,i,s,r),n=Bf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&n&&Cf(e),e.flags|=1,tn(t,e,i,r),e.child)}function mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lx(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function lx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wo(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return Rd(t,e,n,i,r)}function cx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(As,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(As,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(As,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(As,_n),_n|=i;return tn(t,e,r,n),e.child}function ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rd(t,e,n,i,r){var s=hn(n)?Ir:Jt.current;return s=js(e,s),Us(e,r),n=zf(t,e,n,i,s,r),i=Bf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&i&&Cf(e),e.flags|=1,tn(t,e,n,r),e.child)}function gp(t,e,n,i,r){if(hn(n)){var s=!0;Ol(e)}else s=!1;if(Us(e,r),e.stateNode===null)xl(t,e),sx(e,n,i),Cd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=hn(n)?Ir:Jt.current,u=js(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&up(e,o,i,u),Ui=!1;var d=e.memoizedState;o.state=d,Hl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||fn.current||Ui?(typeof h=="function"&&(Td(e,n,h,i),l=e.memoizedState),(a=Ui||cp(e,n,a,i,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,F0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=hn(n)?Ir:Jt.current,l=js(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&up(e,o,i,l),Ui=!1,d=e.memoizedState,o.state=d,Hl(e,i,o,r);var v=e.memoizedState;a!==p||d!==v||fn.current||Ui?(typeof g=="function"&&(Td(e,n,g,i),v=e.memoizedState),(u=Ui||cp(e,n,u,i,d,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Pd(t,e,n,i,s,r)}function Pd(t,e,n,i,r,s){ux(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&tp(e,n,!1),bi(t,e,s);i=e.stateNode,by.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&tp(e,n,!0),e.child}function dx(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),Uf(t,e.containerInfo)}function xp(t,e,n,i,r){return Hs(),Rf(r),e.flags|=256,tn(t,e,n,i),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function fx(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(xt,r&1),t===null)return wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dd(n),e.memoizedState=Ld,t):Gf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ld,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,i){return i!==null&&Rf(i),Gs(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ru(Error(me(422))),Aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Dd(o),e.memoizedState=Ld,s);if(!(e.mode&1))return Aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=ru(s,i,void 0),Aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),qn(i,t,r,-1))}return qf(),i=ru(Error(me(421))),Aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=$i(r.nextSibling),Sn=e,pt=!0,Vn=null,t!==null&&(Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Nr,_i=t.id,vi=t.overflow,Nr=e),e=Gf(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}su(e,!0,n,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cy(t,e,n){switch(e.tag){case 3:dx(e),Hs();break;case 5:z0(e);break;case 1:hn(e.type)&&Ol(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?fx(t,e,n):(at(xt,xt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);at(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,cx(t,e,n)}return bi(t,e,n)}var px,Id,mx,gx;px=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};mx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(si.current);var s=null;switch(n){case"input":r=td(t,r),i=td(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=rd(t,r),i=rd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}od(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gx=function(t,e,n,i){n!==i&&(e.flags|=4)};function lo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ay(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return hn(e.type)&&kl(),$t(e),null;case 3:return i=e.stateNode,Vs(),dt(fn),dt(Jt),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(jd(Vn),Vn=null))),Id(t,e),$t(e),null;case 5:kf(e);var r=Cr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)mx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return $t(e),null}if(t=Cr(si.current),Ta(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)ct(To[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Ch(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Rh(i,s),ct("invalid",i)}od(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":xa(i),Ah(i,s,!0);break;case"textarea":xa(i),Ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Yo]=i,px(t,e,!1,!1),e.stateNode=t;e:{switch(o=ad(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)ct(To[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Ch(t,i),r=td(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Rh(t,i),r=rd(t,i),ct("invalid",t);break;default:r=i}od(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&hf(t,s,l,o))}switch(n){case"input":xa(t),Ah(t,i,!1);break;case"textarea":xa(t),Ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)gx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Cr(Ko.current),Cr(si.current),Ta(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&yn!==null&&e.mode&1&&!(e.flags&128))N0(),Hs(),e.flags|=98560,s=!1;else if(s=Ta(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[ni]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Vn!==null&&(jd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?At===0&&(At=3):qf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Vs(),Id(t,e),t===null&&Xo(e.stateNode.containerInfo),$t(e),null;case 10:return Df(e.type._context),$t(e),null;case 17:return hn(e.type)&&kl(),$t(e),null;case 19:if(dt(xt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)lo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Xs&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return $t(e),null}else 2*Et()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=xt.current,at(xt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function Ry(t,e){switch(Af(e),e.tag){case 1:return hn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),dt(fn),dt(Jt),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(dt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(xt),null;case 4:return Vs(),null;case 10:return Df(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var Ra=!1,Kt=!1,Py=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Nd(t,e,n){try{n()}catch(i){St(t,e,i)}}var vp=!1;function Ly(t,e){if(xd=Dl,t=S0(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)d=p,p=g;for(;;){if(p===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++h===i&&(l=o),(g=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Dl=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Hn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return v=vp,vp=!1,v}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xx(t){var e=t.alternate;e!==null&&(t.alternate=null,xx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Yo],delete e[Sd],delete e[hy],delete e[py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _x(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_x(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}var Bt=null,Gn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)vx(t,e,n),n=n.sibling}function vx(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Kt||Cs(n,e);case 6:var i=Bt,r=Gn;Bt=null,Ci(t,e,n),Bt=i,Gn=r,Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),Go(t)):Jc(Bt,n.stateNode));break;case 4:i=Bt,r=Gn,Bt=n.stateNode.containerInfo,Gn=!0,Ci(t,e,n),Bt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nd(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Kt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Ci(t,e,n),Kt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Py),e.forEach(function(i){var r=By.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Gn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Bt===null)throw Error(me(160));vx(s,o,r),Bt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yx(e,t),e=e.sibling}function yx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{No(3,t,t.return),gc(3,t)}catch(y){St(t,t.return,y)}try{No(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{zo(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hg(r,s),ad(a,o);var u=ad(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?$g(r,p):h==="dangerouslySetInnerHTML"?Wg(r,p):h==="children"?zo(r,p):hf(r,h,p,u)}switch(a){case"input":nd(r,s);break;case"textarea":Gg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ls(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Yo]=s}catch(y){St(t,t.return,y)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){St(t,t.return,y)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=Et())),i&4&&Sp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||h,kn(e,t),Kt=u):kn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Pe=t,h=t.child;h!==null;){for(p=Pe=h;Pe!==null;){switch(d=Pe,g=d.child,d.tag){case 0:case 11:case 14:case 15:No(4,d,d.return);break;case 1:Cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Ep(p);continue}}g!==null?(g.return=d,Pe=g):Ep(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xg("display",o))}catch(y){St(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){St(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&Sp(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_x(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zo(r,""),i.flags&=-33);var s=yp(t);Od(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yp(t);kd(t,a,o);break;default:throw Error(me(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dy(t,e,n){Pe=t,Sx(t)}function Sx(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Ra;var u=Kt;if(Ra=o,(Kt=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?wp(r):l!==null?(l.return=o,Pe=l):wp(r);for(;s!==null;)Pe=s,Sx(s),s=s.sibling;Pe=r,Ra=a,Kt=u}Mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Mp(t)}}function Mp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&op(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Go(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Kt||e.flags&512&&Ud(e)}catch(d){St(e,e.return,d)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Ep(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function wp(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Ud(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var Iy=Math.ceil,Xl=Ti.ReactCurrentDispatcher,Vf=Ti.ReactCurrentOwner,In=Ti.ReactCurrentBatchConfig,Qe=0,kt=null,bt=null,Ht=0,_n=0,As=ar(0),At=0,ea=null,kr=0,xc=0,Wf=0,Uo=null,un=null,Xf=0,Xs=1/0,mi=null,$l=!1,Fd=null,qi=null,Pa=!1,Hi=null,Yl=0,ko=0,zd=null,_l=-1,vl=0;function sn(){return Qe&6?Et():_l!==-1?_l:_l=Et()}function Ki(t){return t.mode&1?Qe&2&&Ht!==0?Ht&-Ht:gy.transition!==null?(vl===0&&(vl=s0()),vl):(t=it,t!==0||(t=window.event,t=t===void 0?16:f0(t.type)),t):1}function qn(t,e,n,i){if(50<ko)throw ko=0,zd=null,Error(me(185));sa(t,n,i),(!(Qe&2)||t!==kt)&&(t===kt&&(!(Qe&2)&&(xc|=n),At===4&&Fi(t,Ht)),pn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Xs=Et()+500,hc&&lr()))}function pn(t,e){var n=t.callbackNode;gv(t,e);var i=Ll(t,t===kt?Ht:0);if(i===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?my(bp.bind(null,t)):L0(bp.bind(null,t)),dy(function(){!(Qe&6)&&lr()}),n=null;else{switch(o0(i)){case 1:n=_f;break;case 4:n=i0;break;case 16:n=Pl;break;case 536870912:n=r0;break;default:n=Pl}n=Rx(n,Mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mx(t,e){if(_l=-1,vl=0,Qe&6)throw Error(me(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Ll(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=Qe;Qe|=2;var s=wx();(kt!==t||Ht!==e)&&(mi=null,Xs=Et()+500,Rr(t,e));do try{ky();break}catch(a){Ex(t,a)}while(!0);Lf(),Xl.current=s,Qe=r,bt!==null?e=0:(kt=null,Ht=0,e=At)}if(e!==0){if(e===2&&(r=fd(t),r!==0&&(i=r,e=Bd(t,r))),e===1)throw n=ea,Rr(t,0),Fi(t,i),pn(t,Et()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ny(r)&&(e=ql(t,i),e===2&&(s=fd(t),s!==0&&(i=s,e=Bd(t,s))),e===1))throw n=ea,Rr(t,0),Fi(t,i),pn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Sr(t,un,mi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Xf+500-Et(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yd(Sr.bind(null,t,un,mi),e);break}Sr(t,un,mi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Iy(i/1960))-i,10<i){t.timeoutHandle=yd(Sr.bind(null,t,un,mi),i);break}Sr(t,un,mi);break;case 5:Sr(t,un,mi);break;default:throw Error(me(329))}}}return pn(t,Et()),t.callbackNode===n?Mx.bind(null,t):null}function Bd(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=un,un=n,e!==null&&jd(e)),t}function jd(t){un===null?un=t:un.push.apply(un,t)}function Ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Wf,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(Qe&6)throw Error(me(327));ks();var e=Ll(t,0);if(!(e&1))return pn(t,Et()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=fd(t);i!==0&&(e=i,n=Bd(t,i))}if(n===1)throw n=ea,Rr(t,0),Fi(t,e),pn(t,Et()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,un,mi),pn(t,Et()),null}function $f(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Xs=Et()+500,hc&&lr())}}function Or(t){Hi!==null&&Hi.tag===0&&!(Qe&6)&&ks();var e=Qe;Qe|=1;var n=In.transition,i=it;try{if(In.transition=null,it=1,t)return t()}finally{it=i,In.transition=n,Qe=e,!(Qe&6)&&lr()}}function Yf(){_n=As.current,dt(As)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uy(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Vs(),dt(fn),dt(Jt),Of();break;case 5:kf(i);break;case 4:Vs();break;case 13:dt(xt);break;case 19:dt(xt);break;case 10:Df(i.type._context);break;case 22:case 23:Yf()}n=n.return}if(kt=t,bt=t=Zi(t.current,null),Ht=_n=e,At=0,ea=null,Wf=xc=kr=0,un=Uo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function Ex(t,e){do{var n=bt;try{if(Lf(),ml.current=Wl,Vl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Ur=0,It=Ct=_t=null,Io=!1,Zo=0,Vf.current=null,n===null||n.return===null){At=1,ea=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=fp(o);if(g!==null){g.flags&=-257,hp(g,o,a,s,e),g.mode&1&&dp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){dp(s,u,e),qf();break e}l=Error(me(426))}}else if(pt&&a.mode&1){var m=fp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),hp(m,o,a,s,e),Rf(Ws(l,a));break e}}s=l=Ws(l,a),At!==4&&(At=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ox(s,l,e);sp(s,f);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qi===null||!qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ax(s,a,e);sp(s,S);break e}}s=s.return}while(s!==null)}Tx(n)}catch(T){e=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function wx(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function qf(){(At===0||At===3||At===2)&&(At=4),kt===null||!(kr&268435455)&&!(xc&268435455)||Fi(kt,Ht)}function ql(t,e){var n=Qe;Qe|=2;var i=wx();(kt!==t||Ht!==e)&&(mi=null,Rr(t,e));do try{Uy();break}catch(r){Ex(t,r)}while(!0);if(Lf(),Qe=n,Xl.current=i,bt!==null)throw Error(me(261));return kt=null,Ht=0,At}function Uy(){for(;bt!==null;)bx(bt)}function ky(){for(;bt!==null&&!av();)bx(bt)}function bx(t){var e=Ax(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Tx(t):bt=e,Vf.current=null}function Tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,bt=null;return}}else if(n=Ay(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);At===0&&(At=5)}function Sr(t,e,n){var i=it,r=In.transition;try{In.transition=null,it=1,Oy(t,e,n,i)}finally{In.transition=r,it=i}return null}function Oy(t,e,n,i){do ks();while(Hi!==null);if(Qe&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xv(t,s),t===kt&&(bt=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Rx(Pl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Vf.current=null,Ly(t,n),yx(n,t),iy(_d),Dl=!!xd,_d=xd=null,t.current=n,Dy(n),lv(),Qe=a,it=o,In.transition=s}else t.current=n;if(Pa&&(Pa=!1,Hi=t,Yl=r),s=t.pendingLanes,s===0&&(qi=null),dv(n.stateNode),pn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Fd,Fd=null,t;return Yl&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===zd?ko++:(ko=0,zd=t):ko=0,lr(),null}function ks(){if(Hi!==null){var t=o0(Yl),e=In.transition,n=it;try{if(In.transition=null,it=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Yl=0,Qe&6)throw Error(me(331));var r=Qe;for(Qe|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var h=Pe;switch(h.tag){case 0:case 11:case 15:No(8,h,s)}var p=h.child;if(p!==null)p.return=h,Pe=p;else for(;Pe!==null;){h=Pe;var d=h.sibling,g=h.return;if(xx(h),h===u){Pe=null;break}if(d!==null){d.return=g,Pe=d;break}Pe=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Pe=f;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=_;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(T){St(a,a.return,T)}if(a===o){Pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Pe=S;break e}Pe=a.return}}if(Qe=r,lr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{it=n,In.transition=e}}return!1}function Tp(t,e,n){e=Ws(n,e),e=ox(t,e,1),t=Yi(t,e,1),e=sn(),t!==null&&(sa(t,1,e),pn(t,e))}function St(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Ws(n,t),t=ax(e,t,1),e=Yi(e,t,1),t=sn(),e!==null&&(sa(e,1,t),pn(e,t));break}}e=e.return}}function Fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(At===4||At===3&&(Ht&130023424)===Ht&&500>Et()-Xf?Rr(t,0):Wf|=n),pn(t,e)}function Cx(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=sn();t=wi(t,e),t!==null&&(sa(t,e,n),pn(t,n))}function zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cx(t,n)}function By(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),Cx(t,n)}var Ax;Ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Cy(t,e,n);dn=!!(t.flags&131072)}else dn=!1,pt&&e.flags&1048576&&D0(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=js(e,Jt.current);Us(e,n),r=zf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,Cd(e,i,t,n),e=Pd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Cf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hy(i),t=Hn(i,t),r){case 0:e=Rd(null,e,i,t,n);break e;case 1:e=gp(null,e,i,t,n);break e;case 11:e=pp(null,e,i,t,n);break e;case 14:e=mp(null,e,i,Hn(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Rd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gp(t,e,i,r,n);case 3:e:{if(dx(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,F0(t,e),Hl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(me(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(me(424)),e),e=xp(t,e,i,n,r);break e}else for(yn=$i(e.stateNode.containerInfo.firstChild),Sn=e,pt=!0,Vn=null,n=k0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=bi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return z0(e),t===null&&wd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vd(i,r)?o=null:s!==null&&vd(i,s)&&(e.flags|=32),ux(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&wd(e),null;case 13:return fx(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),pp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Bl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!fn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=Nn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),mp(t,e,i,r,n);case 15:return lx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),xl(t,e),e.tag=1,hn(i)?(t=!0,Ol(e)):t=!1,Us(e,n),sx(e,i,r),Cd(e,i,r,n),Pd(null,e,i,!0,t,n);case 19:return hx(t,e,n);case 22:return cx(t,e,n)}throw Error(me(156,e.tag))};function Rx(t,e){return n0(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new jy(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mf)return 11;if(t===gf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Pr(n.children,r,s,e);case pf:o=8,r|=8;break;case Zu:return t=Dn(12,n,e,r|2),t.elementType=Zu,t.lanes=s,t;case Ju:return t=Dn(13,n,e,r),t.elementType=Ju,t.lanes=s,t;case Qu:return t=Dn(19,n,e,r),t.elementType=Qu,t.lanes=s,t;case zg:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Og:o=10;break e;case Fg:o=9;break e;case mf:o=11;break e;case gf:o=14;break e;case Ni:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function ou(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function au(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,i,r,s,o,a,l){return t=new Gy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(s),t}function Vy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Px(t){if(!t)return ir;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(hn(n))return P0(t,n,e)}return e}function Lx(t,e,n,i,r,s,o,a,l){return t=Zf(n,i,!0,t,r,s,o,a,l),t.context=Px(null),n=t.current,i=sn(),r=Ki(n),s=Si(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,sa(t,r,i),pn(t,i),t}function vc(t,e,n,i){var r=e.current,s=sn(),o=Ki(r);return n=Px(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(qn(t,r,o,s),pl(t,r,o)),o}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jf(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function Wy(){return null}var Dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}yc.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));vc(t,e,null,null)};yc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){vc(null,t,null,null)}),e[Ei]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=c0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&d0(t)}};function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function Xy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Kl(o);s.call(u)}}var o=Lx(e,i,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=o,t[Ei]=o.current,Xo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Kl(l);a.call(u)}}var l=Zf(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=l,t[Ei]=l.current,Xo(t.nodeType===8?t.parentNode:t),Or(function(){vc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Kl(o);a.call(l)}}vc(e,o,t,r)}else o=Xy(n,e,t,r,i);return Kl(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(vf(e,n|1),pn(e,Et()),!(Qe&6)&&(Xs=Et()+500,lr()))}break;case 13:Or(function(){var i=wi(t,1);if(i!==null){var r=sn();qn(i,t,1,r)}}),Jf(t,1)}};yf=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=sn();qn(e,t,134217728,n)}Jf(t,134217728)}};l0=function(t){if(t.tag===13){var e=Ki(t),n=wi(t,e);if(n!==null){var i=sn();qn(n,t,e,i)}Jf(t,e)}};c0=function(){return it};u0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};cd=function(t,e,n){switch(e){case"input":if(nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(me(90));jg(i),nd(i,r)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};Kg=$f;Zg=Or;var $y={usingClientEntryPoint:!1,Events:[aa,Ms,fc,Yg,qg,$f]},co={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{lc=La.inject(Yy),ri=La}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(e))throw Error(me(200));return Vy(t,e,null,n)};En.createRoot=function(t,e){if(!eh(t))throw Error(me(299));var n=!1,i="",r=Dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Xo(t.nodeType===8?t.parentNode:t),new Qf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Or(t)};En.hydrate=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!eh(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lx(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};En.render=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(me(40));return t._reactRootContainer?(Or(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};En.unstable_batchedUpdates=$f;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Mc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Ix(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ix)}catch(t){console.error(t)}}Ix(),Ig.exports=En;var qy=Ig.exports,Rp=qy;qu.createRoot=Rp.createRoot,qu.hydrateRoot=Rp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(t,e)=>{const n=be.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},h)=>be.createElement("svg",{ref:h,...Ky,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Zy(t)}`,a].join(" "),...u},[...e.map(([p,d])=>be.createElement(p,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ze("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=ze("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ze("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=ze("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=ze("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=ze("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ze("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=ze("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=ze("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ze("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ze("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ze("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ze("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ze("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ze("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=ze("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ze("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=ze("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=ze("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ze("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=ze("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ze("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=ze("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=ze("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=ze("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=ze("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=ze("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=ze("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=ze("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=ze("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=ze("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=ze("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=ze("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=ze("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ze("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=ze("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=ze("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=ze("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=ze("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=ze("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=ze("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),S1=({scenarios:t,activeScenario:e,onSelectScenario:n,onRunSimulation:i,onOpenWindow:r,onToggleSidebar:s,onUploadScenarioJson:o,onExportScenarioJson:a,onExportResultsJson:l,onResetState:u,isSidebarOpen:h,isSimulating:p})=>{const[d,g]=be.useState(""),[v,y]=be.useState(!1),[m,f]=be.useState(!1),_=be.useRef(null),x=be.useRef(null);be.useEffect(()=>{const T=()=>{g(new Date().toISOString().replace("T"," ").substring(0,19)+" UTC")};T();const b=setInterval(T,1e3);return()=>clearInterval(b)},[]),be.useEffect(()=>{const T=b=>{x.current&&!x.current.contains(b.target)&&y(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const S=T=>{var w;const b=(w=T.target.files)==null?void 0:w[0];if(b){const D=new FileReader;D.onload=V=>{var M;try{const R=JSON.parse((M=V.target)==null?void 0:M.result);o(R)}catch{alert("Ошибка чтения JSON файла. Проверьте формат файла.")}},D.readAsText(b)}};return c.jsxs("header",{className:"hdr-container",children:[c.jsx("style",{children:`
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
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);
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
          height: 32px;
          background-color: #20242b;
          color: #f1f5f9;
          border: 1px solid #333943;
          border-radius: 6px;
          padding: 0 10px;
          font-size: 12px;
          font-weight: 500;
          outline: none;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .hdr-select:hover {
          background-color: #272c35;
          border-color: #454d5b;
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
          justify-content: center;
          gap: 6px;
          box-sizing: border-box;
          white-space: nowrap;
          transition: all 0.15s ease-in-out;
          outline: none;
          user-select: none;
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
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          border: 1px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .hdr-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: #60a5fa;
          box-shadow: 0 3px 10px rgba(37, 99, 235, 0.45);
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
      `}),c.jsxs("div",{className:"hdr-section",children:[c.jsxs("div",{className:"hdr-brand",children:[c.jsx("div",{className:"hdr-brand-icon",children:c.jsx(ih,{size:16})}),c.jsx("span",{className:"hdr-brand-text",children:"Система Анализа Группировки"})]}),c.jsx("div",{className:"hdr-divider"}),c.jsxs("div",{className:"hdr-select-wrapper",children:[c.jsx("span",{className:"hdr-label",children:"Сценарий:"}),c.jsx("select",{className:"hdr-select",value:e,onChange:T=>n(T.target.value),children:t.map(T=>c.jsx("option",{value:T.id,children:T.title},T.id))})]}),c.jsx("input",{type:"file",ref:_,onChange:S,accept:".json",style:{display:"none"}}),c.jsxs("button",{onClick:()=>{var T;return(T=_.current)==null?void 0:T.click()},className:"hdr-btn hdr-btn-secondary",title:"Загрузить пользовательский сценарий из JSON файла",children:[c.jsx(v1,{size:14,style:{color:"#34d399"}}),c.jsx("span",{children:"Загрузить JSON"})]}),c.jsxs("div",{style:{position:"relative"},ref:x,children:[c.jsxs("button",{onClick:()=>y(!v),className:"hdr-btn hdr-btn-secondary",title:"Скачать итоговый JSON сценарий или результаты моделирования",children:[c.jsx(nh,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Скачать JSON"}),c.jsx(th,{size:12,style:{opacity:.7}})]}),v&&c.jsxs("div",{className:"hdr-dropdown-menu",children:[a&&c.jsxs("button",{onClick:()=>{a(),y(!1)},className:"hdr-dropdown-item",children:[c.jsx(Qy,{size:16,style:{color:"#34d399"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"12px"},children:"Итоговый Сценарий (.json)"}),c.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Конфигурация cosmo-A-1.0"})]})]}),l&&c.jsxs("button",{onClick:()=>{l(),y(!1)},className:"hdr-dropdown-item",children:[c.jsx(Sl,{size:16,style:{color:"#38bdf8"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"12px"},children:"Результаты Симуляции (.json)"}),c.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Метрики видимости, SLA, маршруты"})]})]})]})]}),c.jsxs("button",{onClick:i,disabled:p,className:"hdr-btn hdr-btn-primary",children:[p?c.jsx(Ml,{size:14,className:"animate-spin"}):c.jsx(Fx,{size:14}),c.jsx("span",{children:p?"Расчет...":"Запустить Симуляцию"})]})]}),c.jsxs("div",{className:"hdr-section hdr-shortcuts-desktop",children:[c.jsxs("button",{onClick:()=>r("emergency"),className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d"},title:"Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию",children:[c.jsx(Jl,{size:14,style:{color:"#ff4444"}}),c.jsx("span",{children:"Симуляция ЧС"})]}),c.jsxs("button",{onClick:()=>r("analytics"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(Sl,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Аналитика & Гантт"})]}),c.jsxs("button",{onClick:()=>r("configurator"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(Zl,{size:14,style:{color:"#a78bfa"}}),c.jsx("span",{children:"Конфигуратор"})]}),c.jsxs("button",{onClick:()=>r("compare"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(Gd,{size:14,style:{color:"#fbbf24"}}),c.jsx("span",{children:"Сравнение Проектов"})]}),u&&c.jsxs("button",{onClick:u,className:"hdr-btn hdr-btn-danger",title:"Сбросить все сохраненные настройки страницы",children:[c.jsx(Ml,{size:13}),c.jsx("span",{children:"Сбросить"})]})]}),c.jsxs("div",{className:"hdr-section",children:[c.jsxs("div",{className:"hdr-clock",children:[c.jsx(ca,{size:14}),c.jsx("span",{children:d})]}),c.jsx("button",{onClick:()=>f(!m),className:"hdr-btn hdr-btn-secondary hdr-mobile-trigger",title:"Меню навигации",children:m?c.jsx(rh,{size:16}):c.jsx(t1,{size:16})}),c.jsx("button",{onClick:s,title:"Панель элементов (Аутлайнер)",className:`hdr-toggle-btn ${h?"active":"inactive"}`,children:c.jsx(s1,{size:16})})]}),m&&c.jsxs("div",{className:"hdr-mobile-drawer",style:{position:"absolute",top:"48px",left:0,width:"100vw",backgroundColor:"#16181d",borderBottom:"1px solid #333",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",padding:"12px 16px",display:"flex",flexDirection:"column",gap:"8px",zIndex:99},children:[c.jsxs("button",{onClick:()=>{r("emergency"),f(!1)},className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d",justifyContent:"flex-start"},children:[c.jsx(Jl,{size:14,style:{color:"#ff4444"}}),c.jsx("span",{children:"Симуляция ЧС & Экономика"})]}),c.jsxs("button",{onClick:()=>{r("analytics"),f(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(Sl,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Аналитика & Диаграмма Гантта"})]}),c.jsxs("button",{onClick:()=>{r("configurator"),f(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(Zl,{size:14,style:{color:"#a78bfa"}}),c.jsx("span",{children:"Конфигуратор Параметров"})]}),c.jsxs("button",{onClick:()=>{r("compare"),f(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(Gd,{size:14,style:{color:"#fbbf24"}}),c.jsx("span",{children:"Сравнение Проектов"})]}),u&&c.jsxs("button",{onClick:()=>{u(),f(!1)},className:"hdr-btn hdr-btn-danger",style:{justifyContent:"flex-start"},children:[c.jsx(Ml,{size:13}),c.jsx("span",{children:"Сбросить Настройки"})]})]})]})},M1=({settings:t,onChangeSettings:e,isOpen:n})=>{var h,p;const[i,r]=be.useState(1);if(!n)return null;const s=(d,g)=>{e({...t,[d]:g})},o=((h=t==null?void 0:t.planeRaanMap)==null?void 0:h[i])??0,a=((p=t==null?void 0:t.planePhaseMap)==null?void 0:p[i])??0,l=d=>{e({...t,planeRaanMap:{...(t==null?void 0:t.planeRaanMap)||{},[i]:d}})},u=d=>{e({...t,planePhaseMap:{...(t==null?void 0:t.planePhaseMap)||{},[i]:d}})};return c.jsxs("aside",{style:{width:"290px",maxWidth:"calc(100vw - 16px)",backgroundColor:"#262626",borderLeft:"1px solid #383838",display:"flex",flexDirection:"column",color:"#e0e0e0",fontSize:"12px",height:"calc(100vh - 48px)",overflowY:"auto",zIndex:90,boxShadow:"-4px 0 16px rgba(0,0,0,0.35)"},children:[c.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#202020",display:"flex",alignItems:"center",justifyContent:"space-between",fontWeight:600},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(ih,{size:14,style:{color:"#1473e6"}}),c.jsx("span",{children:"Аутлайнер элементов"})]}),c.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"Слои UI"})]}),c.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#1473e6",fontWeight:600},children:[c.jsx(Ox,{size:14}),c.jsx("span",{children:"Управление RAAN & Фазированием"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[c.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:"Плоскость:"}),c.jsx("select",{value:i,onChange:d=>r(parseInt(d.target.value)),style:{backgroundColor:"#141414",color:"#fff",border:"1px solid #3d3d3d",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",outline:"none",cursor:"pointer"},children:[1,2,3,4,5,6].map(d=>c.jsxs("option",{value:d,children:["Плоскость P",d]},d))})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[c.jsx("span",{children:c.jsx("b",{children:"1. RAAN (Поворот вокруг Земли):"})}),c.jsxs("span",{style:{color:"#1473e6",fontWeight:"bold"},children:[o,"°"]})]}),c.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Поворачивает всё кольцо орбиты вокруг оси Земли (изменяет регион пролета)."}),c.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:o,onChange:d=>l(parseFloat(d.target.value)),style:Na})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[c.jsx("span",{children:c.jsx("b",{children:"2. Фазирование (Сдвиг бусин):"})}),c.jsxs("span",{style:{color:"#00ff88",fontWeight:"bold"},children:[a,"°"]})]}),c.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Сдвигает спутники вдоль неподвижного кольца (шахматный порядок для закрытия «дыр»)."}),c.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:a,onChange:d=>u(parseFloat(d.target.value)),style:{...Na,accentColor:"#00ff88"}})]})]}),c.jsxs("div",{style:Da,children:[c.jsxs("div",{style:Ia,children:[c.jsx(Jy,{size:14}),c.jsx("span",{children:"Отображение слоев"})]}),c.jsxs("div",{style:E1,children:[c.jsx(On,{label:"Орбитальные траектории",checked:t.showOrbits,onChange:d=>s("showOrbits",d)}),c.jsx(On,{label:"Спутники группировки (S01..S48)",checked:t.showSatellites,onChange:d=>s("showSatellites",d)}),c.jsx(On,{label:"Наземные шлюзы (C65, Murmansk...)",checked:t.showGateways,onChange:d=>s("showGateways",d)}),c.jsx(On,{label:"Межспутниковые линии (ISL)",checked:t.showISL,onChange:d=>s("showISL",d)}),c.jsx(On,{label:"Связь спутник - Земля",checked:t.showSatLinks,onChange:d=>s("showSatLinks",d)}),c.jsx(On,{label:"Текстовые подписи объектов",checked:t.showLabels,onChange:d=>s("showLabels",d)}),c.jsx(On,{label:"Атмосфера планеты",checked:t.showAtmosphere,onChange:d=>s("showAtmosphere",d)}),c.jsx(On,{label:"Зоны покрытия КА (FOVs)",checked:!!t.showCoverageHeatmap,onChange:d=>s("showCoverageHeatmap",d)}),c.jsx(On,{label:"Загрузка и трафик ISL (%)",checked:!!t.showTrafficLoad,onChange:d=>s("showTrafficLoad",d)}),c.jsx(On,{label:"Дистанции между КА (км)",checked:t.showDistances!==!1,onChange:d=>s("showDistances",d)})]})]}),c.jsxs("div",{style:Da,children:[c.jsxs("div",{style:Ia,children:[c.jsx(p1,{size:14}),c.jsx("span",{children:"Параметры рендеринга"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx(On,{label:"Свечение спутников (Glow)",checked:t.satGlow,onChange:d=>s("satGlow",d)}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",color:"#aaa"},children:[c.jsx("span",{children:"Размер спутников"}),c.jsxs("span",{children:[t.satSize.toFixed(1),"x"]})]}),c.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:t.satSize,onChange:d=>s("satSize",parseFloat(d.target.value)),style:Na})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",color:"#aaa"},children:[c.jsx("span",{children:"Прозрачность орбит"}),c.jsxs("span",{children:[Math.round(t.orbitOpacity*100),"%"]})]}),c.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:t.orbitOpacity,onChange:d=>s("orbitOpacity",parseFloat(d.target.value)),style:Na})]})]})]}),c.jsxs("div",{style:Da,children:[c.jsxs("div",{style:Ia,children:[c.jsx(ca,{size:14}),c.jsx("span",{children:"Настройка шага расчета"})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",color:"#aaa"},children:[c.jsx("span",{children:"Шаг времени (dt):"}),c.jsxs("span",{style:{color:"#1473e6",fontWeight:600},children:[t.stepSeconds," сек"]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"4px"},children:[1,5,10,60,300].map(d=>c.jsx("button",{onClick:()=>s("stepSeconds",d),style:{padding:"4px 0",backgroundColor:t.stepSeconds===d?"#1473e6":"#323232",color:t.stepSeconds===d?"#fff":"#b0b0b0",border:"1px solid #444",borderRadius:"3px",fontSize:"11px",cursor:"pointer"},children:d>=60?`${d/60}м`:`${d}с`},d))})]})]}),c.jsxs("div",{style:Da,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[c.jsxs("div",{style:Ia,children:[c.jsx(r1,{size:14}),c.jsx("span",{style:{margin:0},children:"Настройка цветов объектов"})]}),c.jsx("button",{onClick:()=>e({...t,satColor:"#00f0ff",offlineSatColor:"#ff3b30",highLatencySatColor:"#ff9900",orbitColor:"#1473e6",islColor:"#00ff88",gatewayColor:"#00d084",groundLinkColor:"#f59e0b",atmosphereColor:"#1e3a8a",fovConeColor:"#00f0ff"}),style:{backgroundColor:"transparent",border:"none",color:"#1473e6",fontSize:"10px",cursor:"pointer",textDecoration:"underline"},children:"Сброс"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[c.jsx(li,{label:"Активные спутники",value:t.satColor||"#00f0ff",onChange:d=>s("satColor",d)}),c.jsx(li,{label:"Отказавшие спутники",value:t.offlineSatColor||"#ff3b30",onChange:d=>s("offlineSatColor",d)}),c.jsx(li,{label:"Спутники с задержкой",value:t.highLatencySatColor||"#ff9900",onChange:d=>s("highLatencySatColor",d)}),c.jsx(li,{label:"Траектории орбит",value:t.orbitColor||"#1473e6",onChange:d=>s("orbitColor",d)}),c.jsx(li,{label:"Межспутниковая связь (ISL)",value:t.islColor||"#00ff88",onChange:d=>s("islColor",d)}),c.jsx(li,{label:"Наземные шлюзы",value:t.gatewayColor||"#00d084",onChange:d=>s("gatewayColor",d)}),c.jsx(li,{label:"Связь Земля - КА",value:t.groundLinkColor||"#f59e0b",onChange:d=>s("groundLinkColor",d)}),c.jsx(li,{label:"Атмосфера Земли",value:t.atmosphereColor||"#1e3a8a",onChange:d=>s("atmosphereColor",d)}),c.jsx(li,{label:"Зоны покрытия (FOV)",value:t.fovConeColor||"#00f0ff",onChange:d=>s("fovConeColor",d)})]})]})]})]})},On=({label:t,checked:e,onChange:n})=>c.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",padding:"3px 0"},children:[c.jsx("span",{style:{color:e?"#e0e0e0":"#888"},children:t}),c.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{accentColor:"#1473e6",cursor:"pointer"}})]}),li=({label:t,value:e,onChange:n})=>c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 0"},children:[c.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:t}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx("input",{type:"color",value:e,onChange:i=>n(i.target.value),style:{width:"24px",height:"22px",padding:0,border:"1px solid #444",borderRadius:"3px",backgroundColor:"transparent",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"10px",color:"#777",fontFamily:"monospace",width:"52px",textAlign:"right"},children:e.toUpperCase()})]})]}),Da={backgroundColor:"#1f1f1f",border:"1px solid #333333",borderRadius:"4px",padding:"10px"},Ia={display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#cccccc",marginBottom:"10px",fontSize:"12px"},E1={display:"flex",flexDirection:"column",gap:"6px"},Na={width:"100%",accentColor:"#1473e6",cursor:"pointer"};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="162",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},w1=0,Np=1,b1=2,zx=1,T1=2,pi=3,rr=0,on=1,vn=2,Ji=0,Fs=1,Xd=2,Up=3,kp=4,C1=5,Er=100,A1=101,R1=102,Op=103,Fp=104,P1=200,L1=201,D1=202,I1=203,$d=204,Yd=205,N1=206,U1=207,k1=208,O1=209,F1=210,z1=211,B1=212,j1=213,H1=214,G1=0,V1=1,W1=2,Ql=3,X1=4,$1=5,Y1=6,q1=7,oh=0,K1=1,Z1=2,Qi=0,J1=1,Q1=2,eS=3,tS=4,nS=5,iS=6,rS=7,Bx=300,$s=301,Ys=302,qd=303,Kd=304,Ec=306,zi=1e3,Wn=1001,Zd=1002,nn=1003,zp=1004,uo=1005,cn=1006,cu=1007,Ar=1008,er=1009,sS=1010,oS=1011,ah=1012,jx=1013,Gi=1014,xi=1015,na=1016,Hx=1017,Gx=1018,Lr=1020,aS=1021,Xn=1023,lS=1024,cS=1025,Dr=1026,qs=1027,uS=1028,Vx=1029,dS=1030,Wx=1031,Xx=1033,uu=33776,du=33777,fu=33778,hu=33779,Bp=35840,jp=35841,Hp=35842,Gp=35843,$x=36196,Vp=37492,Wp=37496,Xp=37808,$p=37809,Yp=37810,qp=37811,Kp=37812,Zp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,pu=36492,om=36494,am=36495,fS=36283,lm=36284,cm=36285,um=36286,hS=3200,pS=3201,Yx=0,mS=1,Bi="",ei="srgb",cr="srgb-linear",lh="display-p3",wc="display-p3-linear",ec="linear",ut="srgb",tc="rec709",nc="p3",$r=7680,dm=519,gS=512,xS=513,_S=514,qx=515,vS=516,yS=517,SS=518,MS=519,Jd=35044,fm="300 es",Qd=1035,yi=2e3,ic=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=Math.PI/180,ef=180/Math.PI;function tr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function ES(t,e){return(t%e+e)%e}function mu(t,e,n){return(1-n)*t+n*e}function hm(t){return(t&t-1)===0&&t!==0}function tf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wS={DEG2RAD:wl};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],g=i[5],v=i[8],y=r[0],m=r[3],f=r[6],_=r[1],x=r[4],S=r[7],T=r[2],b=r[5],w=r[8];return s[0]=o*y+a*_+l*T,s[3]=o*m+a*x+l*b,s[6]=o*f+a*S+l*w,s[1]=u*y+h*_+p*T,s[4]=u*m+h*x+p*b,s[7]=u*f+h*S+p*w,s[2]=d*y+g*_+v*T,s[5]=d*m+g*x+v*b,s[8]=d*f+g*S+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,d=a*l-h*s,g=u*s-o*l,v=n*p+i*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*u-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new Ye;function Kx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bS(){const t=ia("canvas");return t.style.display="block",t}const pm={};function Zx(t){t in pm||(pm[t]=!0,console.warn(t))}const mm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ua={[cr]:{transfer:ec,primaries:tc,toReference:t=>t,fromReference:t=>t},[ei]:{transfer:ut,primaries:tc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wc]:{transfer:ec,primaries:nc,toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[lh]:{transfer:ut,primaries:nc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},TS=new Set([cr,wc]),st={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!TS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ua[e].toReference,r=Ua[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ua[t].primaries},getTransfer:function(t){return t===Bi?ec:Ua[t].transfer}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class Jx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=ia("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class Qx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class Zt extends Hr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Wn,r=Wn,s=cn,o=Ar,a=Xn,l=er,u=Zt.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=tr(),this.name="",this.source=new Qx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Bx;Zt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],g=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(g+1)/2,T=(f+1)/2,b=(h+d)/4,w=(p+y)/4,D=(v+m)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(p-y)*(p-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(p-y)/_,this.z=(d-h)/_,this.w=Math.acos((u+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends RS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e_ extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PS extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],g=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=v,e[n+3]=y;return}if(p!==y||l!==d||u!==g||h!==v){let m=1-a;const f=l*d+u*g+h*v+p*y,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,f*_);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const S=a*_;if(l=l*m+d*S,u=u*m+g*S,h=h*m+v*S,p=p*m+y*S,m===1-a){const T=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=T,u*=T,h*=T,p*=T}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],d=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*g-u*d,e[n+1]=l*v+h*d+u*p-a*g,e[n+2]=u*v+h*g+a*d-l*p,e[n+3]=h*v-a*p-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*p+u*g*v,this._y=u*g*p-d*h*v,this._z=u*h*v+d*g*p,this._w=u*h*p-d*g*v;break;case"YXZ":this._x=d*h*p+u*g*v,this._y=u*g*p-d*h*v,this._z=u*h*v-d*g*p,this._w=u*h*p+d*g*v;break;case"ZXY":this._x=d*h*p-u*g*v,this._y=u*g*p+d*h*v,this._z=u*h*v+d*g*p,this._w=u*h*p-d*g*v;break;case"ZYX":this._x=d*h*p-u*g*v,this._y=u*g*p+d*h*v,this._z=u*h*v-d*g*p,this._w=u*h*p+d*g*v;break;case"YZX":this._x=d*h*p+u*g*v,this._y=u*g*p+d*h*v,this._z=u*h*v-d*g*p,this._w=u*h*p-d*g*v;break;case"XZY":this._x=d*h*p-u*g*v,this._y=u*g*p-d*h*v,this._z=u*h*v+d*g*p,this._w=u*h*p+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+a+p;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),p=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*h,this.y=i+l*h+a*u-s*p,this.z=r+l*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new F,xm=new zr;class ua{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Oa.subVectors(this.max,fo),qr.subVectors(e.a,fo),Kr.subVectors(e.b,fo),Zr.subVectors(e.c,fo),Ai.subVectors(Kr,qr),Ri.subVectors(Zr,Kr),hr.subVectors(qr,Zr);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-hr.z,hr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,hr.z,0,-hr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-hr.y,hr.x,0];return!yu(n,qr,Kr,Zr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,qr,Kr,Zr,Oa))?!1:(Fa.crossVectors(Ai,Ri),n=[Fa.x,Fa.y,Fa.z],yu(n,qr,Kr,Zr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,ka=new ua,qr=new F,Kr=new F,Zr=new F,Ai=new F,Ri=new F,hr=new F,fo=new F,Oa=new F,Fa=new F,pr=new F;function yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),h=i.dot(pr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const LS=new ua,ho=new F,Su=new F;class bc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Su)),this.expandByPoint(ho.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new F,Mu=new F,za=new F,Pi=new F,Eu=new F,Ba=new F,wu=new F;class Tc{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Mu.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=Pi.dot(this.direction),l=-Pi.dot(za),u=Pi.lengthSq(),h=Math.abs(1-o*o);let p,d,g,v;if(h>0)if(p=o*l-a,d=o*a-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const y=1/h;p*=y,d*=y,g=p*(p+o*d+2*a)+d*(o*p+d+2*l)+u}else d=s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+u;else d<=-v?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+u);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Mu).addScaledVector(za,d),g}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){Eu.subVectors(n,e),Ba.subVectors(i,e),wu.crossVectors(Eu,Ba);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(Pi,Ba));if(l<0)return null;const u=a*this.direction.dot(Eu.cross(Pi));if(u<0||l+u>o)return null;const h=-a*Pi.dot(wu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,h,p,d,g,v,y,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,d,g,v,y,m)}set(e,n,i,r,s,o,a,l,u,h,p,d,g,v,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=g,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,g=o*p,v=a*h,y=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=g+v*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=v+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,g=l*p,v=u*h,y=u*p;n[0]=d+y*a,n[4]=v*a-g,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=g*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,g=l*p,v=u*h,y=u*p;n[0]=d-y*a,n[4]=-o*p,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*h,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,g=o*p,v=a*h,y=a*p;n[0]=l*h,n[4]=v*u-g,n[8]=d*u+y,n[1]=l*p,n[5]=y*u+d,n[9]=g*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,v=a*l,y=a*u;n[0]=l*h,n[4]=y-d*p,n[8]=v*p+g,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=g*p+v,n[10]=d-y*p}else if(e.order==="XZY"){const d=o*l,g=o*u,v=a*l,y=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+y,n[5]=o*h,n[9]=g*p-v,n[2]=v*p-g,n[6]=a*h,n[10]=y*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DS,e,IS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),ja.crossVectors(gn,Li),r[0]=Li.x,r[4]=ja.x,r[8]=gn.x,r[1]=Li.y,r[5]=ja.y,r[9]=gn.y,r[2]=Li.z,r[6]=ja.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],g=i[13],v=i[2],y=i[6],m=i[10],f=i[14],_=i[3],x=i[7],S=i[11],T=i[15],b=r[0],w=r[4],D=r[8],V=r[12],M=r[1],R=r[5],W=r[9],Q=r[13],U=r[2],K=r[6],G=r[10],k=r[14],I=r[3],O=r[7],j=r[11],te=r[15];return s[0]=o*b+a*M+l*U+u*I,s[4]=o*w+a*R+l*K+u*O,s[8]=o*D+a*W+l*G+u*j,s[12]=o*V+a*Q+l*k+u*te,s[1]=h*b+p*M+d*U+g*I,s[5]=h*w+p*R+d*K+g*O,s[9]=h*D+p*W+d*G+g*j,s[13]=h*V+p*Q+d*k+g*te,s[2]=v*b+y*M+m*U+f*I,s[6]=v*w+y*R+m*K+f*O,s[10]=v*D+y*W+m*G+f*j,s[14]=v*V+y*Q+m*k+f*te,s[3]=_*b+x*M+S*U+T*I,s[7]=_*w+x*R+S*K+T*O,s[11]=_*D+x*W+S*G+T*j,s[15]=_*V+x*Q+S*k+T*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],g=e[14],v=e[3],y=e[7],m=e[11],f=e[15];return v*(+s*l*p-r*u*p-s*a*d+i*u*d+r*a*g-i*l*g)+y*(+n*l*g-n*u*d+s*o*d-r*o*g+r*u*h-s*l*h)+m*(+n*u*p-n*a*g-s*o*p+i*o*g+s*a*h-i*u*h)+f*(-r*a*h-n*l*p+n*a*d+r*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],g=e[11],v=e[12],y=e[13],m=e[14],f=e[15],_=p*m*u-y*d*u+y*l*g-a*m*g-p*l*f+a*d*f,x=v*d*u-h*m*u-v*l*g+o*m*g+h*l*f-o*d*f,S=h*y*u-v*p*u+v*a*g-o*y*g-h*a*f+o*p*f,T=v*p*l-h*y*l-v*a*d+o*y*d+h*a*m-o*p*m,b=n*_+i*x+r*S+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(y*d*s-p*m*s-y*r*g+i*m*g+p*r*f-i*d*f)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*f+i*l*f)*w,e[3]=(p*l*s-a*d*s-p*r*u+i*d*u+a*r*g-i*l*g)*w,e[4]=x*w,e[5]=(h*m*s-v*d*s+v*r*g-n*m*g-h*r*f+n*d*f)*w,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*w,e[7]=(o*d*s-h*l*s+h*r*u-n*d*u-o*r*g+n*l*g)*w,e[8]=S*w,e[9]=(v*p*s-h*y*s-v*i*g+n*y*g+h*i*f-n*p*f)*w,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*f+n*a*f)*w,e[11]=(h*a*s-o*p*s-h*i*u+n*p*u+o*i*g-n*a*g)*w,e[12]=T*w,e[13]=(h*y*r-v*p*r+v*i*d-n*y*d-h*i*m+n*p*m)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,d=s*u,g=s*h,v=s*p,y=o*h,m=o*p,f=a*p,_=l*u,x=l*h,S=l*p,T=i.x,b=i.y,w=i.z;return r[0]=(1-(y+f))*T,r[1]=(g+S)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(d+f))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(v+x)*w,r[9]=(m-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,h=1/o,p=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let g,v;if(a===yi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ic)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(o-s),d=(n+e)*u,g=(i+r)*h;let v,y;if(a===yi)v=(o+s)*p,y=-2*p;else if(a===ic)v=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new F,zn=new mt,DS=new F(0,0,0),IS=new F(1,1,1),Li=new F,ja=new F,gn=new F,_m=new mt,vm=new zr;class oi{constructor(e=0,n=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NS=0;const ym=new F,Qr=new zr,di=new mt,Ha=new F,po=new F,US=new F,kS=new zr,Sm=new F(1,0,0),Mm=new F(0,1,0),Em=new F(0,0,1),OS={type:"added"},FS={type:"removed"},bu={type:"childadded",child:null},Tu={type:"childremoved",child:null};class Ot extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new F,n=new oi,i=new zr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ye}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(po,Ha,this.up):di.lookAt(Ha,po,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(di),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OS),bu.child=e,this.dispatchEvent(bu),bu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FS),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,US),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,kS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new F(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new F,fi=new F,Cu=new F,hi=new F,es=new F,ts=new F,wm=new F,Au=new F,Ru=new F,Pu=new F;class $n{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),fi.subVectors(i,n),Cu.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(fi),l=Bn.dot(Cu),u=fi.dot(fi),h=fi.dot(Cu),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,g=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),fi.subVectors(e,n),Bn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Bn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),Au.subVectors(e,i);const l=es.dot(Au),u=ts.dot(Au);if(l<=0&&u<=0)return n.copy(i);Ru.subVectors(e,r);const h=es.dot(Ru),p=ts.dot(Ru);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(es,o);Pu.subVectors(e,s);const g=es.dot(Pu),v=ts.dot(Pu);if(v>=0&&g<=v)return n.copy(s);const y=g*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(ts,a);const m=h*v-g*p;if(m<=0&&p-h>=0&&g-v>=0)return wm.subVectors(s,r),a=(p-h)/(p-h+(g-v)),n.copy(r).addScaledVector(wm,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=ES(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=t_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(rn(qt.r*255,0,255))*65536+Math.round(rn(qt.g*255,0,255))*256+Math.round(rn(qt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ei){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ga);const i=mu(Di.h,Ga.h,n),r=mu(Di.s,Ga.s,n),s=mu(Di.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=t_;let zS=0;class Gr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Fs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Yd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$d&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new F,Va=new Ne;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),e}}class n_ extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class i_ extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BS=0;const Tn=new mt,Du=new Ot,ns=new F,xn=new ua,mo=new ua,Dt=new F;class Nt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kx(e)?i_:n_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(xn.min,mo.min),xn.expandByPoint(Dt),Dt.addVectors(xn.max,mo.max),xn.expandByPoint(Dt)):(xn.expandByPoint(mo.min),xn.expandByPoint(mo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Dt.fromBufferAttribute(a,u),l&&(ns.fromBufferAttribute(e,u),Dt.add(ns)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new F,l[D]=new F;const u=new F,h=new F,p=new F,d=new Ne,g=new Ne,v=new Ne,y=new F,m=new F;function f(D,V,M){u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,V),p.fromBufferAttribute(i,M),d.fromBufferAttribute(s,D),g.fromBufferAttribute(s,V),v.fromBufferAttribute(s,M),h.sub(u),p.sub(u),g.sub(d),v.sub(d);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(R),m.copy(p).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(R),a[D].add(y),a[V].add(y),a[M].add(y),l[D].add(m),l[V].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,V=_.length;D<V;++D){const M=_[D],R=M.start,W=M.count;for(let Q=R,U=R+W;Q<U;Q+=3)f(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new F,S=new F,T=new F,b=new F;function w(D){T.fromBufferAttribute(r,D),b.copy(T);const V=a[D];x.copy(V),x.sub(T.multiplyScalar(T.dot(V))).normalize(),S.crossVectors(b,V);const R=S.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,R)}for(let D=0,V=_.length;D<V;++D){const M=_[D],R=M.start,W=M.count;for(let Q=R,U=R+W;Q<U;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,h=new F,p=new F;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,d=new u.constructor(l.length*h);let g=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let f=0;f<h;f++)d[v++]=u[g++]}return new Kn(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const d=u[h],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,g=p.length;d<g;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new mt,mr=new Tc,Wa=new bc,Tm=new F,is=new F,rs=new F,ss=new F,Iu=new F,Xa=new F,$a=new Ne,Ya=new Ne,qa=new Ne,Cm=new F,Am=new F,Rm=new F,Ka=new F,Za=new F;class jt extends Ot{constructor(e=new Nt,n=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(Iu.fromBufferAttribute(p,e),o?Xa.addScaledVector(Iu,h):Xa.addScaledVector(Iu.sub(n),h))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Wa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Wa,Tm)===null||mr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(bm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,T=x;S<T;S+=3){const b=a.getX(S),w=a.getX(S+1),D=a.getX(S+2);r=Ja(this,f,e,i,u,h,p,b,w,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=v,f=y;m<f;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Ja(this,o,e,i,u,h,p,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,T=x;S<T;S+=3){const b=S,w=S+1,D=S+2;r=Ja(this,f,e,i,u,h,p,b,w,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=v,f=y;m<f;m+=3){const _=m,x=m+1,S=m+2;r=Ja(this,o,e,i,u,h,p,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function jS(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Za);return u<n.near||u>n.far?null:{distance:u,point:Za.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,is),t.getVertexPosition(l,rs),t.getVertexPosition(u,ss);const h=jS(t,e,n,i,is,rs,ss,Ka);if(h){r&&($a.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,u),h.uv=$n.getInterpolation(Ka,is,rs,ss,$a,Ya,qa,new Ne)),s&&($a.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,u),h.uv1=$n.getInterpolation(Ka,is,rs,ss,$a,Ya,qa,new Ne)),o&&(Cm.fromBufferAttribute(o,a),Am.fromBufferAttribute(o,l),Rm.fromBufferAttribute(o,u),h.normal=$n.getInterpolation(Ka,is,rs,ss,Cm,Am,Rm,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new F,materialIndex:0};$n.getNormal(is,rs,ss,p.normal),h.face=p}return h}class da extends Nt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let d=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(p,2));function v(y,m,f,_,x,S,T,b,w,D,V){const M=S/w,R=T/D,W=S/2,Q=T/2,U=b/2,K=w+1,G=D+1;let k=0,I=0;const O=new F;for(let j=0;j<G;j++){const te=j*R-Q;for(let ae=0;ae<K;ae++){const De=ae*M-W;O[y]=De*_,O[m]=te*x,O[f]=U,u.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[f]=b>0?1:-1,h.push(O.x,O.y,O.z),p.push(ae/w),p.push(1-j/D),k+=1}}for(let j=0;j<D;j++)for(let te=0;te<w;te++){const ae=d+te+K*j,De=d+te+K*(j+1),B=d+(te+1)+K*(j+1),re=d+(te+1)+K*j;l.push(ae,De,re),l.push(De,B,re),I+=6}a.addGroup(g,I,V),g+=I,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function HS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function r_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const GS={clone:Ks,merge:en};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class s_ extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new F,Pm=new Ne,Lm=new Ne;class Ln extends s_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Lm),n.subVectors(Lm,Pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class XS extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(os,as,e,n);r.layers=this.layers,this.add(r);const s=new Ln(os,as,e,n);s.layers=this.layers,this.add(s);const o=new Ln(os,as,e,n);o.layers=this.layers,this.add(o);const a=new Ln(os,as,e,n);a.layers=this.layers,this.add(a);const l=new Ln(os,as,e,n);l.layers=this.layers,this.add(l);const u=new Ln(os,as,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,d,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class o_ extends Zt{constructor(e,n,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new o_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new da(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ji});s.uniforms.tEquirect.value=n;const o=new jt(r,s),a=n.minFilter;return n.minFilter===Ar&&(n.minFilter=cn),new XS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new F,YS=new F,qS=new Ye;class ki{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(YS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qS.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new bc,Qa=new F;class uh{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],p=r[6],d=r[7],g=r[8],v=r[9],y=r[10],m=r[11],f=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-g,S-f).normalize(),i[1].setComponents(l+s,d+u,m+g,S+f).normalize(),i[2].setComponents(l+o,d+h,m+v,S+_).normalize(),i[3].setComponents(l-o,d-h,m-v,S-_).normalize(),i[4].setComponents(l-a,d-p,m-y,S-x).normalize(),n===yi)i[5].setComponents(l+a,d+p,m+y,S+x).normalize();else if(n===ic)i[5].setComponents(a,p,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,h){const p=u.array,d=u.usage,g=p.byteLength,v=t.createBuffer();t.bindBuffer(h,v),t.bufferData(h,p,d),u.onUploadCallback();let y;if(p instanceof Float32Array)y=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=t.SHORT;else if(p instanceof Uint32Array)y=t.UNSIGNED_INT;else if(p instanceof Int32Array)y=t.INT;else if(p instanceof Int8Array)y=t.BYTE;else if(p instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,h,p){const d=h.array,g=h._updateRange,v=h.updateRanges;if(t.bindBuffer(p,u),g.count===-1&&v.length===0&&t.bufferSubData(p,0,d),v.length!==0){for(let y=0,m=v.length;y<m;y++){const f=v[y];n?t.bufferSubData(p,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(p,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(p,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(p,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(t.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,r(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,u,h),p.version=u.version}}return{get:o,remove:a,update:l}}class Cc extends Nt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,d=n/l,g=[],v=[],y=[],m=[];for(let f=0;f<h;f++){const _=f*d-o;for(let x=0;x<u;x++){const S=x*p-s;v.push(S,-_,0),y.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const x=_+u*f,S=_+u*(f+1),T=_+1+u*(f+1),b=_+1+u*f;g.push(x,S,b),g.push(S,T,b)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
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
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yM=`#define PI 3.141592653589793
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`
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
}`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
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
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
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
#endif`,KM=`struct PhysicalMaterial {
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
}`,ZM=`
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`#include <common>
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
}`,rw=`#if DEPTH_PACKING == 3200
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
}`,sw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
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
}`,uw=`uniform vec3 diffuse;
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
}`,dw=`#include <common>
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
}`,fw=`uniform vec3 diffuse;
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
}`,hw=`#define LAMBERT
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define MATCAP
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
}`,gw=`#define MATCAP
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
}`,xw=`#define NORMAL
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
}`,_w=`#define NORMAL
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
}`,vw=`#define PHONG
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
}`,yw=`#define PHONG
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
}`,Sw=`#define STANDARD
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
}`,Mw=`#define STANDARD
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
}`,Ew=`#define TOON
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
}`,ww=`#define TOON
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
}`,bw=`uniform float size;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Aw=`uniform vec3 color;
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
}`,Rw=`uniform float rotation;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ZS,alphahash_pars_fragment:JS,alphamap_fragment:QS,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:oM,begin_vertex:aM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:dM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:xM,color_pars_vertex:_M,color_vertex:vM,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:wM,emissivemap_fragment:bM,emissivemap_pars_fragment:TM,colorspace_fragment:CM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:PM,envmap_pars_fragment:LM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:VM,envmap_vertex:IM,fog_vertex:NM,fog_pars_vertex:UM,fog_fragment:kM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:HM,lights_pars_begin:GM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:$M,lights_phong_pars_fragment:YM,lights_physical_fragment:qM,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:JM,lights_fragment_end:QM,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:aE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:dE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:xE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:wE,opaque_fragment:bE,packing:TE,premultiplied_alpha_fragment:CE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:NE,shadowmap_vertex:UE,shadowmask_pars_fragment:kE,skinbase_vertex:OE,skinning_pars_vertex:FE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:jE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:VE,transmission_fragment:WE,transmission_pars_fragment:XE,uv_pars_fragment:$E,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:KE,background_vert:ZE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:ew,cube_vert:tw,cube_frag:nw,depth_vert:iw,depth_frag:rw,distanceRGBA_vert:sw,distanceRGBA_frag:ow,equirect_vert:aw,equirect_frag:lw,linedashed_vert:cw,linedashed_frag:uw,meshbasic_vert:dw,meshbasic_frag:fw,meshlambert_vert:hw,meshlambert_frag:pw,meshmatcap_vert:mw,meshmatcap_frag:gw,meshnormal_vert:xw,meshnormal_frag:_w,meshphong_vert:vw,meshphong_frag:yw,meshphysical_vert:Sw,meshphysical_frag:Mw,meshtoon_vert:Ew,meshtoon_frag:ww,points_vert:bw,points_frag:Tw,shadow_vert:Cw,shadow_frag:Aw,sprite_vert:Rw,sprite_frag:Pw},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ti={basic:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([Se.points,Se.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([Se.common,Se.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([Se.sprite,Se.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:en([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:en([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ti.physical={uniforms:en([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const el={r:0,b:0,g:0},xr=new oi,Lw=new mt;function Dw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,h,p=null,d=0,g=null;function v(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?n:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ec)?(h===void 0&&(h=new jt(new da(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Ks(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),xr.copy(f.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(xr)),h.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,(p!==x||d!==x.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=x,d=x.version,g=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new jt(new Cc(2,2),new sr({name:"BackgroundMaterial",uniforms:Ks(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||d!==x.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=x,d=x.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,f){m.getRGB(el,r_(t)),i.buffers.color.setClear(el.r,el.g,el.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:v}}function Iw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,h=!1;function p(U,K,G,k,I){let O=!1;if(o){const j=y(k,G,K);u!==j&&(u=j,g(u.object)),O=f(U,k,G,I),O&&_(U,k,G,I)}else{const j=K.wireframe===!0;(u.geometry!==k.id||u.program!==G.id||u.wireframe!==j)&&(u.geometry=k.id,u.program=G.id,u.wireframe=j,O=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,D(U,K,G,k),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,K,G){const k=G.wireframe===!0;let I=a[U.id];I===void 0&&(I={},a[U.id]=I);let O=I[K.id];O===void 0&&(O={},I[K.id]=O);let j=O[k];return j===void 0&&(j=m(d()),O[k]=j),j}function m(U){const K=[],G=[],k=[];for(let I=0;I<r;I++)K[I]=0,G[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:G,attributeDivisors:k,object:U,attributes:{},index:null}}function f(U,K,G,k){const I=u.attributes,O=K.attributes;let j=0;const te=G.getAttributes();for(const ae in te)if(te[ae].location>=0){const B=I[ae];let re=O[ae];if(re===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),B===void 0||B.attribute!==re||re&&B.data!==re.data)return!0;j++}return u.attributesNum!==j||u.index!==k}function _(U,K,G,k){const I={},O=K.attributes;let j=0;const te=G.getAttributes();for(const ae in te)if(te[ae].location>=0){let B=O[ae];B===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(B=U.instanceColor));const re={};re.attribute=B,B&&B.data&&(re.data=B.data),I[ae]=re,j++}u.attributes=I,u.attributesNum=j,u.index=k}function x(){const U=u.newAttributes;for(let K=0,G=U.length;K<G;K++)U[K]=0}function S(U){T(U,0)}function T(U,K){const G=u.newAttributes,k=u.enabledAttributes,I=u.attributeDivisors;G[U]=1,k[U]===0&&(t.enableVertexAttribArray(U),k[U]=1),I[U]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),I[U]=K)}function b(){const U=u.newAttributes,K=u.enabledAttributes;for(let G=0,k=K.length;G<k;G++)K[G]!==U[G]&&(t.disableVertexAttribArray(G),K[G]=0)}function w(U,K,G,k,I,O,j){j===!0?t.vertexAttribIPointer(U,K,G,I,O):t.vertexAttribPointer(U,K,G,k,I,O)}function D(U,K,G,k){if(i.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=k.attributes,O=G.getAttributes(),j=K.defaultAttributeValues;for(const te in O){const ae=O[te];if(ae.location>=0){let De=I[te];if(De===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(De=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(De=U.instanceColor)),De!==void 0){const B=De.normalized,re=De.itemSize,J=n.get(De);if(J===void 0)continue;const le=J.buffer,ce=J.type,fe=J.bytesPerElement,Re=i.isWebGL2===!0&&(ce===t.INT||ce===t.UNSIGNED_INT||De.gpuType===jx);if(De.isInterleavedBufferAttribute){const z=De.data,L=z.stride,ue=De.offset;if(z.isInstancedInterleavedBuffer){for(let ne=0;ne<ae.locationSize;ne++)T(ae.location+ne,z.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ne=0;ne<ae.locationSize;ne++)S(ae.location+ne);t.bindBuffer(t.ARRAY_BUFFER,le);for(let ne=0;ne<ae.locationSize;ne++)w(ae.location+ne,re/ae.locationSize,ce,B,L*fe,(ue+re/ae.locationSize*ne)*fe,Re)}else{if(De.isInstancedBufferAttribute){for(let z=0;z<ae.locationSize;z++)T(ae.location+z,De.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let z=0;z<ae.locationSize;z++)S(ae.location+z);t.bindBuffer(t.ARRAY_BUFFER,le);for(let z=0;z<ae.locationSize;z++)w(ae.location+z,re/ae.locationSize,ce,B,re*fe,re/ae.locationSize*z*fe,Re)}}else if(j!==void 0){const B=j[te];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(ae.location,B);break;case 3:t.vertexAttrib3fv(ae.location,B);break;case 4:t.vertexAttrib4fv(ae.location,B);break;default:t.vertexAttrib1fv(ae.location,B)}}}}b()}function V(){W();for(const U in a){const K=a[U];for(const G in K){const k=K[G];for(const I in k)v(k[I].object),delete k[I];delete K[G]}delete a[U]}}function M(U){if(a[U.id]===void 0)return;const K=a[U.id];for(const G in K){const k=K[G];for(const I in k)v(k[I].object),delete k[I];delete K[G]}delete a[U.id]}function R(U){for(const K in a){const G=a[K];if(G[U.id]===void 0)continue;const k=G[U.id];for(const I in k)v(k[I].object),delete k[I];delete G[U.id]}}function W(){Q(),h=!0,u!==l&&(u=l,g(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:W,resetDefaultState:Q,dispose:V,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:S,disableUnusedAttributes:b}}function Nw(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,p){t.drawArrays(s,h,p),n.update(p,s,1)}function l(h,p,d){if(d===0)return;let g,v;if(r)g=t,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,h,p,d),n.update(p,s,d)}function u(h,p,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(h[v],p[v]);else{g.multiDrawArraysWEBGL(s,h,0,p,0,d);let v=0;for(let y=0;y<d;y++)v+=p[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Uw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||e.has("OES_texture_float"),T=x&&S,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:b}}function kw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const g=p.length!==0||d||i!==0||r;return r=d,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,g){const v=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!m)s?h(null):u();else{const _=s?0:i,x=_*4;let S=f.clippingState||null;l.value=S,S=h(v,d,x,g);for(let T=0;T!==x;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,g,v){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=g+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=g;x!==y;++x,S+=4)o.copy(p[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Ow(t){let e=new WeakMap;function n(o,a){return a===qd?o.mapping=$s:a===Kd&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qd||a===Kd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new $S(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class l_ extends s_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rs=4,Dm=[.125,.215,.35,.446,.526,.582],wr=20,Uu=new l_,Im=new Ze;let ku=null,Ou=0,Fu=0;const Mr=(1+Math.sqrt(5))/2,ls=1/Mr,Nm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Mr,ls),new F(0,Mr,-ls),new F(ls,0,Mr),new F(-ls,0,Mr),new F(Mr,ls,0),new F(-Mr,ls,0)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,Ou,Fu),e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:na,format:Xn,colorSpace:cr,depthBuffer:!1},r=km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fw(s)),this._blurMaterial=zw(s,e,n)}return r}_compileMaterial(e){const n=new jt(this._lodPlanes[0],e);this._renderer.compile(n,Uu)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Im),h.toneMapping=Qi,h.autoClear=!1;const g=new jn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new jt(new da,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Im),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;tl(r,_*x,f>2?x:0,x,x),h.setRenderTarget(r),y&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new jt(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*wr-1),y=s/v,m=isFinite(s)?1+Math.floor(h*y):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const f=[];let _=0;for(let w=0;w<wr;++w){const D=w/y,V=Math.exp(-D*D/2);f.push(V),w===0?_+=V:w<m&&(_+=2*V)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Rs?r-x+Rs:0),b=4*(this._cubeSize-S);tl(n,T,b,3*S,2*S),l.setRenderTarget(n),l.render(p,Uu)}}function Fw(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+Dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Rs?l=Dm[o-t+Rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,v=6,y=3,m=2,f=1,_=new Float32Array(y*v*g),x=new Float32Array(m*v*g),S=new Float32Array(f*v*g);for(let b=0;b<g;b++){const w=b%3*2/3-1,D=b>2?0:-1,V=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(V,y*v*b),x.set(d,m*v*b);const M=[b,b,b,b,b,b];S.set(M,f*v*b)}const T=new Nt;T.setAttribute("position",new Kn(_,y)),T.setAttribute("uv",new Kn(x,m)),T.setAttribute("faceIndex",new Kn(S,f)),e.push(T),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function km(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zw(t,e,n){const i=new Float32Array(wr),r=new F(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Om(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fm(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function Bw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qd||l===Kd,h=l===$s||l===Ys;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new Um(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new Um(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function jw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hw(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const v in g){const y=g[v];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(p){const d=[],g=p.index,v=p.attributes.position;let y=0;if(g!==null){const _=g.array;y=g.version;for(let x=0,S=_.length;x<S;x+=3){const T=_[x+0],b=_[x+1],w=_[x+2];d.push(T,b,b,w,w,T)}}else if(v!==void 0){const _=v.array;y=v.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const T=x+0,b=x+1,w=x+2;d.push(T,b,b,w,w,T)}}else return;const m=new(Kx(d)?i_:n_)(d,1);m.version=y;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function h(p){const d=s.get(p);if(d){const g=p.index;g!==null&&d.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Gw(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function h(g,v){t.drawElements(s,v,a,g*l),n.update(v,s,1)}function p(g,v,y){if(y===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,a,g*l,y),n.update(v,s,y)}function d(g,v,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(g[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,a,g,0,y);let f=0;for(let _=0;_<y;_++)f+=v[_];n.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=d}function Vw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ww(t,e){return t[0]-e[0]}function Xw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $w(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,p){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let m=s.get(h);if(m===void 0||m.count!==y){let Q=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",Q)};var g=Q;m!==void 0&&m.texture.dispose();const f=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let w=0;f===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let D=h.attributes.position.count*w,V=1;D>e.maxTextureSize&&(V=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const M=new Float32Array(D*V*4*y),R=new e_(M,D,V,y);R.type=xi,R.needsUpdate=!0;const W=w*4;for(let U=0;U<y;U++){const K=S[U],G=T[U],k=b[U],I=D*V*4*U;for(let O=0;O<K.count;O++){const j=O*W;f===!0&&(o.fromBufferAttribute(K,O),M[I+j+0]=o.x,M[I+j+1]=o.y,M[I+j+2]=o.z,M[I+j+3]=0),_===!0&&(o.fromBufferAttribute(G,O),M[I+j+4]=o.x,M[I+j+5]=o.y,M[I+j+6]=o.z,M[I+j+7]=0),x===!0&&(o.fromBufferAttribute(k,O),M[I+j+8]=o.x,M[I+j+9]=o.y,M[I+j+10]=o.z,M[I+j+11]=k.itemSize===4?o.w:1)}}m={count:y,texture:R,size:new Ne(D,V)},s.set(h,m),h.addEventListener("dispose",Q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let f=0;for(let x=0;x<d.length;x++)f+=d[x];const _=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",d)}p.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let y=i[h.id];if(y===void 0||y.length!==v){y=[];for(let S=0;S<v;S++)y[S]=[S,0];i[h.id]=y}for(let S=0;S<v;S++){const T=y[S];T[0]=S,T[1]=d[S]}y.sort(Xw);for(let S=0;S<8;S++)S<v&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ww);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const T=a[S],b=T[0],w=T[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+S)!==m[b]&&h.setAttribute("morphTarget"+S,m[b]),f&&h.getAttribute("morphNormal"+S)!==f[b]&&h.setAttribute("morphNormal"+S,f[b]),r[S]=w,_+=w):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const x=h.morphTargetsRelative?1:1-_;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Yw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class c_ extends Zt{constructor(e,n,i,r,s,o,a,l,u,h){if(h=h!==void 0?h:Dr,h!==Dr&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=Gi),i===void 0&&h===qs&&(i=Lr),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const u_=new Zt,d_=new c_(1,1);d_.compareFunction=qx;const f_=new e_,h_=new PS,p_=new o_,zm=[],Bm=[],jm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function Qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Pt(n,i)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),Pt(n,i)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Pt(n,i)}}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function o2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?d_:u_;n.setTexture2D(e||s,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||h_,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||p_,r)}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f_,r)}function p2(t){switch(t){case 5126:return qw;case 35664:return Kw;case 35665:return Zw;case 35666:return Jw;case 35674:return Qw;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return a2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return h2}}function m2(t,e){t.uniform1fv(this.addr,e)}function g2(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function x2(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function _2(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function v2(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function y2(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function S2(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function M2(t,e){t.uniform1iv(this.addr,e)}function E2(t,e){t.uniform2iv(this.addr,e)}function w2(t,e){t.uniform3iv(this.addr,e)}function b2(t,e){t.uniform4iv(this.addr,e)}function T2(t,e){t.uniform1uiv(this.addr,e)}function C2(t,e){t.uniform2uiv(this.addr,e)}function A2(t,e){t.uniform3uiv(this.addr,e)}function R2(t,e){t.uniform4uiv(this.addr,e)}function P2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||u_,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||h_,s[o])}function D2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||p_,s[o])}function I2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f_,s[o])}function N2(t){switch(t){case 5126:return m2;case 35664:return g2;case 35665:return x2;case 35666:return _2;case 35674:return v2;case 35675:return y2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return w2;case 35669:case 35673:return b2;case 5125:return T2;case 36294:return C2;case 36295:return A2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return I2}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p2(n.type)}}class k2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}}class O2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function F2(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vm(n,u===void 0?new U2(a,t,e):new k2(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new O2(a),Vm(n,p)),n=p}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);F2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const z2=37297;let B2=0;function j2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function H2(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case cr:case wc:return[i,"LinearTransferOETF"];case ei:case lh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+j2(t.getShaderSource(e),o)}else return r}function G2(t,e){const n=H2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function V2(t,e){let n;switch(e){case J1:n="Linear";break;case Q1:n="Reinhard";break;case eS:n="OptimizedCineon";break;case tS:n="ACESFilmic";break;case iS:n="AgX";break;case rS:n="Neutral";break;case nS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function W2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function X2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function $2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ps(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(t){return t.replace(q2,Z2)}const K2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z2(t,e){let n=$e[e];if(n===void 0){const i=K2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nf(n)}const J2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(J2,Q2)}function Q2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===T1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case K1:e="ENVMAP_BLENDING_MIX";break;case Z1:e="ENVMAP_BLENDING_ADD";break}return e}function rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eb(n),u=tb(n),h=nb(n),p=ib(n),d=rb(n),g=n.isWebGL2?"":W2(n),v=X2(n),y=$2(s),m=r.createProgram();let f,_,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ps).join(`
`),f.length>0&&(f+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ps).join(`
`),_.length>0&&(_+=`
`)):(f=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),_=[g,Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Qi?V2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,G2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),o=nf(o),o=$m(o,n),o=Ym(o,n),a=nf(a),a=$m(a,n),a=Ym(a,n),o=qm(o),a=qm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=x+f+o,T=x+_+a,b=Wm(r,r.VERTEX_SHADER,S),w=Wm(r,r.FRAGMENT_SHADER,T);r.attachShader(m,b),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(W){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(b).trim(),K=r.getShaderInfoLog(w).trim();let G=!0,k=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,w);else{const I=Xm(r,b,"vertex"),O=Xm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+I+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||K==="")&&(k=!1);k&&(W.diagnostics={runnable:G,programLog:Q,vertexShader:{log:U,prefix:f},fragmentShader:{log:K,prefix:_}})}r.deleteShader(b),r.deleteShader(w),V=new bl(r,m),M=Y2(r,m)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,z2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let ob=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lb(e),n.set(e,i)),i}}class lb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function cb(t,e,n,i,r,s,o){const a=new ch,l=new ab,u=new Set,h=[],p=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function f(M,R,W,Q,U){const K=Q.fog,G=U.geometry,k=M.isMeshStandardMaterial?Q.environment:null,I=(M.isMeshStandardMaterial?n:e).get(M.envMap||k),O=I&&I.mapping===Ec?I.image.height:null,j=y[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=te!==void 0?te.length:0;let De=0;G.morphAttributes.position!==void 0&&(De=1),G.morphAttributes.normal!==void 0&&(De=2),G.morphAttributes.color!==void 0&&(De=3);let B,re,J,le;if(j){const nt=ti[j];B=nt.vertexShader,re=nt.fragmentShader}else B=M.vertexShader,re=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const ce=t.getRenderTarget(),fe=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,z=!!M.map,L=!!M.matcap,ue=!!I,ne=!!M.aoMap,xe=!!M.lightMap,ve=!!M.bumpMap,ye=!!M.normalMap,ge=!!M.displacementMap,Ce=!!M.emissiveMap,He=!!M.metalnessMap,A=!!M.roughnessMap,E=M.anisotropy>0,$=M.clearcoat>0,ee=M.iridescence>0,oe=M.sheen>0,se=M.transmission>0,Fe=E&&!!M.anisotropyMap,ke=$&&!!M.clearcoatMap,de=$&&!!M.clearcoatNormalMap,Me=$&&!!M.clearcoatRoughnessMap,Be=ee&&!!M.iridescenceMap,_e=ee&&!!M.iridescenceThicknessMap,et=oe&&!!M.sheenColorMap,Oe=oe&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Ee=!!M.specularColorMap,Te=!!M.specularIntensityMap,P=se&&!!M.transmissionMap,ie=se&&!!M.thicknessMap,Le=!!M.gradientMap,N=!!M.alphaMap,pe=M.alphaTest>0,X=!!M.alphaHash,he=!!M.extensions;let we=Qi;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(we=t.toneMapping);const Ke={isWebGL2:p,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:re,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:Re,instancing:fe,instancingColor:fe&&U.instanceColor!==null,instancingMorph:fe&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:cr,alphaToCoverage:!!M.alphaToCoverage,map:z,matcap:L,envMap:ue,envMapMode:ue&&I.mapping,envMapCubeUVHeight:O,aoMap:ne,lightMap:xe,bumpMap:ve,normalMap:ye,displacementMap:g&&ge,emissiveMap:Ce,normalMapObjectSpace:ye&&M.normalMapType===mS,normalMapTangentSpace:ye&&M.normalMapType===Yx,metalnessMap:He,roughnessMap:A,anisotropy:E,anisotropyMap:Fe,clearcoat:$,clearcoatMap:ke,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,iridescence:ee,iridescenceMap:Be,iridescenceThicknessMap:_e,sheen:oe,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:Ee,specularIntensityMap:Te,transmission:se,transmissionMap:P,thicknessMap:ie,gradientMap:Le,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:N,alphaTest:pe,alphaHash:X,combine:M.combine,mapUv:z&&m(M.map.channel),aoMapUv:ne&&m(M.aoMap.channel),lightMapUv:xe&&m(M.lightMap.channel),bumpMapUv:ve&&m(M.bumpMap.channel),normalMapUv:ye&&m(M.normalMap.channel),displacementMapUv:ge&&m(M.displacementMap.channel),emissiveMapUv:Ce&&m(M.emissiveMap.channel),metalnessMapUv:He&&m(M.metalnessMap.channel),roughnessMapUv:A&&m(M.roughnessMap.channel),anisotropyMapUv:Fe&&m(M.anisotropyMap.channel),clearcoatMapUv:ke&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:et&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(M.sheenRoughnessMap.channel),specularMapUv:Ie&&m(M.specularMap.channel),specularColorMapUv:Ee&&m(M.specularColorMap.channel),specularIntensityMapUv:Te&&m(M.specularIntensityMap.channel),transmissionMapUv:P&&m(M.transmissionMap.channel),thicknessMapUv:ie&&m(M.thicknessMap.channel),alphaMapUv:N&&m(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(z||N),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:De,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,useLegacyLights:t._useLegacyLights,decodeVideoTexture:z&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function _(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)R.push(W),R.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(x(R,M),S(R,M),R.push(t.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function x(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){const R=y[M.type];let W;if(R){const Q=ti[R];W=GS.clone(Q.uniforms)}else W=M.uniforms;return W}function b(M,R){let W;for(let Q=0,U=h.length;Q<U;Q++){const K=h[Q];if(K.cacheKey===R){W=K,++W.usedTimes;break}}return W===void 0&&(W=new sb(t,R,M,s),h.push(W)),W}function w(M){if(--M.usedTimes===0){const R=h.indexOf(M);h[R]=h[h.length-1],h.pop(),M.destroy()}}function D(M){l.remove(M)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:T,acquireProgram:b,releaseProgram:w,releaseShaderCache:D,programs:h,dispose:V}}function ub(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,d,g,v,y,m){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:g,groupOrder:v,renderOrder:p.renderOrder,z:y,group:m},t[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=g,f.groupOrder=v,f.renderOrder=p.renderOrder,f.z=y,f.group=m),e++,f}function a(p,d,g,v,y,m){const f=o(p,d,g,v,y,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(p,d,g,v,y,m){const f=o(p,d,g,v,y,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(p,d){n.length>1&&n.sort(p||db),i.length>1&&i.sort(d||Zm),r.length>1&&r.sort(d||Zm)}function h(){for(let p=e,d=t.length;p<d;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function fb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function pb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mb=0;function gb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xb(t,e){const n=new hb,i=pb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);const s=new F,o=new mt,a=new mt;function l(h,p){let d=0,g=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,m=0,f=0,_=0,x=0,S=0,T=0,b=0,w=0,D=0,V=0;h.sort(gb);const M=p===!0?Math.PI:1;for(let W=0,Q=h.length;W<Q;W++){const U=h[W],K=U.color,G=U.intensity,k=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=K.r*G*M,g+=K.g*G*M,v+=K.b*G*M;else if(U.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(U.sh.coefficients[O],G);V++}else if(U.isDirectionalLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const j=U.shadow,te=i.get(U);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=U.shadow.matrix,S++}r.directional[y]=O,y++}else if(U.isSpotLight){const O=n.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(K).multiplyScalar(G*M),O.distance=k,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,r.spot[f]=O;const j=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,j.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[f]=j.matrix,U.castShadow){const te=i.get(U);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.spotShadow[f]=te,r.spotShadowMap[f]=I,b++}f++}else if(U.isRectAreaLight){const O=n.get(U);O.color.copy(K).multiplyScalar(G),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=O,_++}else if(U.isPointLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*M),O.distance=U.distance,O.decay=U.decay,U.castShadow){const j=U.shadow,te=i.get(U);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=U.shadow.matrix,T++}r.point[m]=O,m++}else if(U.isHemisphereLight){const O=n.get(U);O.skyColor.copy(U.color).multiplyScalar(G*M),O.groundColor.copy(U.groundColor).multiplyScalar(G*M),r.hemi[x]=O,x++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==y||R.pointLength!==m||R.spotLength!==f||R.rectAreaLength!==_||R.hemiLength!==x||R.numDirectionalShadows!==S||R.numPointShadows!==T||R.numSpotShadows!==b||R.numSpotMaps!==w||R.numLightProbes!==V)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=b+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=V,R.directionalLength=y,R.pointLength=m,R.spotLength=f,R.rectAreaLength=_,R.hemiLength=x,R.numDirectionalShadows=S,R.numPointShadows=T,R.numSpotShadows=b,R.numSpotMaps=w,R.numLightProbes=V,r.version=mb++)}function u(h,p){let d=0,g=0,v=0,y=0,m=0;const f=p.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const S=h[_];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),v++}else if(S.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),g++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Qm(t,e){const n=new xb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function _b(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Qm(t,e),n.set(s,[l])):o>=a.length?(l=new Qm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vb extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`;function Eb(t,e,n){let i=new uh;const r=new Ne,s=new Ne,o=new Ut,a=new vb({depthPacking:pS}),l=new yb,u={},h=n.maxTextureSize,p={[rr]:on,[on]:rr,[vn]:vn},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Sb,fragmentShader:Mb}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Nt;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new jt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zx;let f=this.type;this.render=function(b,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const V=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=f!==pi&&this.type===pi,U=f===pi&&this.type!==pi;for(let K=0,G=b.length;K<G;K++){const k=b[K],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||Q===!0||U===!0){const te=this.type!==pi?{minFilter:nn,magFilter:nn}:{};I.map!==null&&I.map.dispose(),I.map=new Fr(r.x,r.y,te),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let te=0;te<j;te++){const ae=I.getViewport(te);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),W.viewport(o),I.updateMatrices(k,te),i=I.getFrustum(),S(w,D,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&_(I,D),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(V,M,R)};function _(b,w){const D=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,D,d,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,D,g,y,null)}function x(b,w,D,V){let M=null;const R=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=M.uuid,Q=w.uuid;let U=u[W];U===void 0&&(U={},u[W]=U);let K=U[Q];K===void 0&&(K=M.clone(),U[Q]=K,w.addEventListener("dispose",T)),M=K}if(M.visible=w.visible,M.wireframe=w.wireframe,V===pi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:p[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=D}return M}function S(b,w,D,V,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const Q=e.update(b),U=b.material;if(Array.isArray(U)){const K=Q.groups;for(let G=0,k=K.length;G<k;G++){const I=K[G],O=U[I.materialIndex];if(O&&O.visible){const j=x(b,O,V,M);b.onBeforeShadow(t,b,w,D,Q,j,I),t.renderBufferDirect(D,null,Q,j,b,I),b.onAfterShadow(t,b,w,D,Q,j,I)}}}else if(U.visible){const K=x(b,U,V,M);b.onBeforeShadow(t,b,w,D,Q,K,null),t.renderBufferDirect(D,null,Q,K,b,null),b.onAfterShadow(t,b,w,D,Q,K,null)}}const W=b.children;for(let Q=0,U=W.length;Q<U;Q++)S(W[Q],w,D,V,M)}function T(b){b.target.removeEventListener("dispose",T);for(const D in u){const V=u[D],M=b.target.uuid;M in V&&(V[M].dispose(),delete V[M])}}}function wb(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const pe=new Ut;let X=null;const he=new Ut(0,0,0,0);return{setMask:function(we){X!==we&&!N&&(t.colorMask(we,we,we,we),X=we)},setLocked:function(we){N=we},setClear:function(we,Ke,nt,ot,yt){yt===!0&&(we*=ot,Ke*=ot,nt*=ot),pe.set(we,Ke,nt,ot),he.equals(pe)===!1&&(t.clearColor(we,Ke,nt,ot),he.copy(pe))},reset:function(){N=!1,X=null,he.set(-1,0,0,0)}}}function s(){let N=!1,pe=null,X=null,he=null;return{setTest:function(we){we?fe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(we){pe!==we&&!N&&(t.depthMask(we),pe=we)},setFunc:function(we){if(X!==we){switch(we){case G1:t.depthFunc(t.NEVER);break;case V1:t.depthFunc(t.ALWAYS);break;case W1:t.depthFunc(t.LESS);break;case Ql:t.depthFunc(t.LEQUAL);break;case X1:t.depthFunc(t.EQUAL);break;case $1:t.depthFunc(t.GEQUAL);break;case Y1:t.depthFunc(t.GREATER);break;case q1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=we}},setLocked:function(we){N=we},setClear:function(we){he!==we&&(t.clearDepth(we),he=we)},reset:function(){N=!1,pe=null,X=null,he=null}}}function o(){let N=!1,pe=null,X=null,he=null,we=null,Ke=null,nt=null,ot=null,yt=null;return{setTest:function(tt){N||(tt?fe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!N&&(t.stencilMask(tt),pe=tt)},setFunc:function(tt,lt,Vt){(X!==tt||he!==lt||we!==Vt)&&(t.stencilFunc(tt,lt,Vt),X=tt,he=lt,we=Vt)},setOp:function(tt,lt,Vt){(Ke!==tt||nt!==lt||ot!==Vt)&&(t.stencilOp(tt,lt,Vt),Ke=tt,nt=lt,ot=Vt)},setLocked:function(tt){N=tt},setClear:function(tt){yt!==tt&&(t.clearStencil(tt),yt=tt)},reset:function(){N=!1,pe=null,X=null,he=null,we=null,Ke=null,nt=null,ot=null,yt=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,p=new WeakMap;let d={},g={},v=new WeakMap,y=[],m=null,f=!1,_=null,x=null,S=null,T=null,b=null,w=null,D=null,V=new Ze(0,0,0),M=0,R=!1,W=null,Q=null,U=null,K=null,G=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=O>=2);let te=null,ae={};const De=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),re=new Ut().fromArray(De),J=new Ut().fromArray(B);function le(N,pe,X,he){const we=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(N,Ke),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<X;nt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(pe+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Ke}const ce={};ce[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),fe(t.DEPTH_TEST),l.setFunc(Ql),ge(!1),Ce(Np),fe(t.CULL_FACE),ve(Ji);function fe(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function z(N,pe){return g[N]!==pe?(t.bindFramebuffer(N,pe),g[N]=pe,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=pe),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function L(N,pe){let X=y,he=!1;if(N){X=v.get(pe),X===void 0&&(X=[],v.set(pe,X));const we=N.textures;if(X.length!==we.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,nt=we.length;Ke<nt;Ke++)X[Ke]=t.COLOR_ATTACHMENT0+Ke;X.length=we.length,he=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,he=!0);if(he)if(n.isWebGL2)t.drawBuffers(X);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ue(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const ne={[Er]:t.FUNC_ADD,[A1]:t.FUNC_SUBTRACT,[R1]:t.FUNC_REVERSE_SUBTRACT};if(i)ne[Op]=t.MIN,ne[Fp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ne[Op]=N.MIN_EXT,ne[Fp]=N.MAX_EXT)}const xe={[P1]:t.ZERO,[L1]:t.ONE,[D1]:t.SRC_COLOR,[$d]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[k1]:t.DST_COLOR,[N1]:t.DST_ALPHA,[I1]:t.ONE_MINUS_SRC_COLOR,[Yd]:t.ONE_MINUS_SRC_ALPHA,[O1]:t.ONE_MINUS_DST_COLOR,[U1]:t.ONE_MINUS_DST_ALPHA,[z1]:t.CONSTANT_COLOR,[B1]:t.ONE_MINUS_CONSTANT_COLOR,[j1]:t.CONSTANT_ALPHA,[H1]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(N,pe,X,he,we,Ke,nt,ot,yt,tt){if(N===Ji){f===!0&&(Re(t.BLEND),f=!1);return}if(f===!1&&(fe(t.BLEND),f=!0),N!==C1){if(N!==_||tt!==R){if((x!==Er||b!==Er)&&(t.blendEquation(t.FUNC_ADD),x=Er,b=Er),tt)switch(N){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xd:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,T=null,w=null,D=null,V.set(0,0,0),M=0,_=N,R=tt}return}we=we||pe,Ke=Ke||X,nt=nt||he,(pe!==x||we!==b)&&(t.blendEquationSeparate(ne[pe],ne[we]),x=pe,b=we),(X!==S||he!==T||Ke!==w||nt!==D)&&(t.blendFuncSeparate(xe[X],xe[he],xe[Ke],xe[nt]),S=X,T=he,w=Ke,D=nt),(ot.equals(V)===!1||yt!==M)&&(t.blendColor(ot.r,ot.g,ot.b,yt),V.copy(ot),M=yt),_=N,R=!1}function ye(N,pe){N.side===vn?Re(t.CULL_FACE):fe(t.CULL_FACE);let X=N.side===on;pe&&(X=!X),ge(X),N.blending===Fs&&N.transparent===!1?ve(Ji):ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const he=N.stencilWrite;u.setTest(he),he&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ge(N){W!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),W=N)}function Ce(N){N!==w1?(fe(t.CULL_FACE),N!==Q&&(N===Np?t.cullFace(t.BACK):N===b1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),Q=N}function He(N){N!==U&&(I&&t.lineWidth(N),U=N)}function A(N,pe,X){N?(fe(t.POLYGON_OFFSET_FILL),(K!==pe||G!==X)&&(t.polygonOffset(pe,X),K=pe,G=X)):Re(t.POLYGON_OFFSET_FILL)}function E(N){N?fe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function $(N){N===void 0&&(N=t.TEXTURE0+k-1),te!==N&&(t.activeTexture(N),te=N)}function ee(N,pe,X){X===void 0&&(te===null?X=t.TEXTURE0+k-1:X=te);let he=ae[X];he===void 0&&(he={type:void 0,texture:void 0},ae[X]=he),(he.type!==N||he.texture!==pe)&&(te!==X&&(t.activeTexture(X),te=X),t.bindTexture(N,pe||ce[N]),he.type=N,he.texture=pe)}function oe(){const N=ae[te];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(N){re.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function Te(N){J.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function P(N,pe){let X=p.get(pe);X===void 0&&(X=new WeakMap,p.set(pe,X));let he=X.get(N);he===void 0&&(he=t.getUniformBlockIndex(pe,N.name),X.set(N,he))}function ie(N,pe){const he=p.get(pe).get(N);h.get(pe)!==he&&(t.uniformBlockBinding(pe,he,N.__bindingPointIndex),h.set(pe,he))}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,ae={},g={},v=new WeakMap,y=[],m=null,f=!1,_=null,x=null,S=null,T=null,b=null,w=null,D=null,V=new Ze(0,0,0),M=0,R=!1,W=null,Q=null,U=null,K=null,G=null,re.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:fe,disable:Re,bindFramebuffer:z,drawBuffers:L,useProgram:ue,setBlending:ve,setMaterial:ye,setFlipSided:ge,setCullFace:Ce,setLineWidth:He,setPolygonOffset:A,setScissorTest:E,activeTexture:$,bindTexture:ee,unbindTexture:oe,compressedTexImage2D:se,compressedTexImage3D:Fe,texImage2D:Oe,texImage3D:Ie,updateUBOMapping:P,uniformBlockBinding:ie,texStorage2D:_e,texStorage3D:et,texSubImage2D:ke,texSubImage3D:de,compressedTexSubImage2D:Me,compressedTexSubImage3D:Be,scissor:Ee,viewport:Te,reset:Le}}function bb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ne,p=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return v?new OffscreenCanvas(A,E):ia("canvas")}function m(A,E,$,ee){let oe=1;const se=He(A);if((se.width>ee||se.height>ee)&&(oe=ee/Math.max(se.width,se.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Fe=E?tf:Math.floor,ke=Fe(oe*se.width),de=Fe(oe*se.height);d===void 0&&(d=y(ke,de));const Me=$?y(ke,de):d;return Me.width=ke,Me.height=de,Me.getContext("2d").drawImage(A,0,0,ke,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ke+"x"+de+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function f(A){const E=He(A);return hm(E.width)&&hm(E.height)}function _(A){return a?!1:A.wrapS!==Wn||A.wrapT!==Wn||A.minFilter!==nn&&A.minFilter!==cn}function x(A,E){return A.generateMipmaps&&E&&A.minFilter!==nn&&A.minFilter!==cn}function S(A){t.generateMipmap(A)}function T(A,E,$,ee,oe=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=E;if(E===t.RED&&($===t.FLOAT&&(se=t.R32F),$===t.HALF_FLOAT&&(se=t.R16F),$===t.UNSIGNED_BYTE&&(se=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.R8UI),$===t.UNSIGNED_SHORT&&(se=t.R16UI),$===t.UNSIGNED_INT&&(se=t.R32UI),$===t.BYTE&&(se=t.R8I),$===t.SHORT&&(se=t.R16I),$===t.INT&&(se=t.R32I)),E===t.RG&&($===t.FLOAT&&(se=t.RG32F),$===t.HALF_FLOAT&&(se=t.RG16F),$===t.UNSIGNED_BYTE&&(se=t.RG8)),E===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.RG8UI),$===t.UNSIGNED_SHORT&&(se=t.RG16UI),$===t.UNSIGNED_INT&&(se=t.RG32UI),$===t.BYTE&&(se=t.RG8I),$===t.SHORT&&(se=t.RG16I),$===t.INT&&(se=t.RG32I)),E===t.RGBA){const Fe=oe?ec:st.getTransfer(ee);$===t.FLOAT&&(se=t.RGBA32F),$===t.HALF_FLOAT&&(se=t.RGBA16F),$===t.UNSIGNED_BYTE&&(se=Fe===ut?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(A,E,$){return x(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===nn||A===zp||A===uo?t.NEAREST:t.LINEAR}function D(A){const E=A.target;E.removeEventListener("dispose",D),M(E),E.isVideoTexture&&p.delete(E)}function V(A){const E=A.target;E.removeEventListener("dispose",V),W(E)}function M(A){const E=i.get(A);if(E.__webglInit===void 0)return;const $=A.source,ee=g.get($);if(ee){const oe=ee[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(A),Object.keys(ee).length===0&&g.delete($)}i.remove(A)}function R(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const $=A.source,ee=g.get($);delete ee[E.__cacheKey],o.memory.textures--}function W(A){const E=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let oe=0;oe<E.__webglFramebuffer[ee].length;oe++)t.deleteFramebuffer(E.__webglFramebuffer[ee][oe]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=A.textures;for(let ee=0,oe=$.length;ee<oe;ee++){const se=i.get($[ee]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove($[ee])}i.remove(A)}let Q=0;function U(){Q=0}function K(){const A=Q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Q+=1,A}function G(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function k(A,E){const $=i.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J($,A,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function I(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){J($,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function O(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){J($,A,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function j(A,E){const $=i.get(A);if(A.version>0&&$.__version!==A.version){le($,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const te={[zi]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},ae={[nn]:t.NEAREST,[zp]:t.NEAREST_MIPMAP_NEAREST,[uo]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[cu]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},De={[gS]:t.NEVER,[MS]:t.ALWAYS,[xS]:t.LESS,[qx]:t.LEQUAL,[_S]:t.EQUAL,[SS]:t.GEQUAL,[vS]:t.GREATER,[yS]:t.NOTEQUAL};function B(A,E,$){if(E.type===xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===cu||E.magFilter===uo||E.magFilter===Ar||E.minFilter===cn||E.minFilter===cu||E.minFilter===uo||E.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(t.texParameteri(A,t.TEXTURE_WRAP_S,te[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,te[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,te[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ae[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ae[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==nn&&E.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,De[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==uo&&E.minFilter!==Ar||E.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===na&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function re(A,E){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",D));const ee=E.source;let oe=g.get(ee);oe===void 0&&(oe={},g.set(ee,oe));const se=G(E);if(se!==A.__cacheKey){oe[se]===void 0&&(oe[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[se].usedTimes++;const Fe=oe[A.__cacheKey];Fe!==void 0&&(oe[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&R(E)),A.__cacheKey=se,A.__webglTexture=oe[se].texture}return $}function J(A,E,$){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const oe=re(A,E),se=E.source;n.bindTexture(ee,A.__webglTexture,t.TEXTURE0+$);const Fe=i.get(se);if(se.version!==Fe.__version||oe===!0){n.activeTexture(t.TEXTURE0+$);const ke=st.getPrimaries(st.workingColorSpace),de=E.colorSpace===Bi?null:st.getPrimaries(E.colorSpace),Me=E.colorSpace===Bi||ke===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=_(E)&&f(E.image)===!1;let _e=m(E.image,Be,!1,r.maxTextureSize);_e=Ce(E,_e);const et=f(_e)||a,Oe=s.convert(E.format,E.colorSpace);let Ie=s.convert(E.type),Ee=T(E.internalFormat,Oe,Ie,E.colorSpace,E.isVideoTexture);B(ee,E,et);let Te;const P=E.mipmaps,ie=a&&E.isVideoTexture!==!0&&Ee!==$x,Le=Fe.__version===void 0||oe===!0,N=se.dataReady,pe=b(E,_e,et);if(E.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?E.type===xi?Ee=t.DEPTH_COMPONENT32F:E.type===Gi?Ee=t.DEPTH_COMPONENT24:E.type===Lr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:E.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Dr&&Ee===t.DEPTH_COMPONENT&&E.type!==ah&&E.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Gi,Ie=s.convert(E.type)),E.format===qs&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,E.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Lr,Ie=s.convert(E.type))),Le&&(ie?n.texStorage2D(t.TEXTURE_2D,1,Ee,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ee,_e.width,_e.height,0,Oe,Ie,null));else if(E.isDataTexture)if(P.length>0&&et){ie&&Le&&n.texStorage2D(t.TEXTURE_2D,pe,Ee,P[0].width,P[0].height);for(let X=0,he=P.length;X<he;X++)Te=P[X],ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Te.width,Te.height,Oe,Ie,Te.data):n.texImage2D(t.TEXTURE_2D,X,Ee,Te.width,Te.height,0,Oe,Ie,Te.data);E.generateMipmaps=!1}else ie?(Le&&n.texStorage2D(t.TEXTURE_2D,pe,Ee,_e.width,_e.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e.width,_e.height,Oe,Ie,_e.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,_e.width,_e.height,0,Oe,Ie,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ee,P[0].width,P[0].height,_e.depth);for(let X=0,he=P.length;X<he;X++)Te=P[X],E.format!==Xn?Oe!==null?ie?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,_e.depth,Oe,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Ee,Te.width,Te.height,_e.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,_e.depth,Oe,Ie,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Ee,Te.width,Te.height,_e.depth,0,Oe,Ie,Te.data)}else{ie&&Le&&n.texStorage2D(t.TEXTURE_2D,pe,Ee,P[0].width,P[0].height);for(let X=0,he=P.length;X<he;X++)Te=P[X],E.format!==Xn?Oe!==null?ie?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,Te.width,Te.height,Oe,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Te.width,Te.height,Oe,Ie,Te.data):n.texImage2D(t.TEXTURE_2D,X,Ee,Te.width,Te.height,0,Oe,Ie,Te.data)}else if(E.isDataArrayTexture)ie?(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ee,_e.width,_e.height,_e.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Ie,_e.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,_e.width,_e.height,_e.depth,0,Oe,Ie,_e.data);else if(E.isData3DTexture)ie?(Le&&n.texStorage3D(t.TEXTURE_3D,pe,Ee,_e.width,_e.height,_e.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Ie,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,_e.width,_e.height,_e.depth,0,Oe,Ie,_e.data);else if(E.isFramebufferTexture){if(Le)if(ie)n.texStorage2D(t.TEXTURE_2D,pe,Ee,_e.width,_e.height);else{let X=_e.width,he=_e.height;for(let we=0;we<pe;we++)n.texImage2D(t.TEXTURE_2D,we,Ee,X,he,0,Oe,Ie,null),X>>=1,he>>=1}}else if(P.length>0&&et){if(ie&&Le){const X=He(P[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ee,X.width,X.height)}for(let X=0,he=P.length;X<he;X++)Te=P[X],ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Oe,Ie,Te):n.texImage2D(t.TEXTURE_2D,X,Ee,Oe,Ie,Te);E.generateMipmaps=!1}else if(ie){if(Le){const X=He(_e);n.texStorage2D(t.TEXTURE_2D,pe,Ee,X.width,X.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,Ie,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ee,Oe,Ie,_e);x(E,et)&&S(ee),Fe.__version=se.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function le(A,E,$){if(E.image.length!==6)return;const ee=re(A,E),oe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+$);const se=i.get(oe);if(oe.version!==se.__version||ee===!0){n.activeTexture(t.TEXTURE0+$);const Fe=st.getPrimaries(st.workingColorSpace),ke=E.colorSpace===Bi?null:st.getPrimaries(E.colorSpace),de=E.colorSpace===Bi||Fe===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let X=0;X<6;X++)!Me&&!Be?_e[X]=m(E.image[X],!1,!0,r.maxCubemapSize):_e[X]=Be?E.image[X].image:E.image[X],_e[X]=Ce(E,_e[X]);const et=_e[0],Oe=f(et)||a,Ie=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),Te=T(E.internalFormat,Ie,Ee,E.colorSpace),P=a&&E.isVideoTexture!==!0,ie=se.__version===void 0||ee===!0,Le=oe.dataReady;let N=b(E,et,Oe);B(t.TEXTURE_CUBE_MAP,E,Oe);let pe;if(Me){P&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Te,et.width,et.height);for(let X=0;X<6;X++){pe=_e[X].mipmaps;for(let he=0;he<pe.length;he++){const we=pe[he];E.format!==Xn?Ie!==null?P?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,we.width,we.height,Ie,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Te,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,0,0,we.width,we.height,Ie,Ee,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he,Te,we.width,we.height,0,Ie,Ee,we.data)}}}else{if(pe=E.mipmaps,P&&ie){pe.length>0&&N++;const X=He(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Te,X.width,X.height)}for(let X=0;X<6;X++)if(Be){P?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,_e[X].width,_e[X].height,Ie,Ee,_e[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Te,_e[X].width,_e[X].height,0,Ie,Ee,_e[X].data);for(let he=0;he<pe.length;he++){const Ke=pe[he].image[X].image;P?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,Ke.width,Ke.height,Ie,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Te,Ke.width,Ke.height,0,Ie,Ee,Ke.data)}}else{P?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ie,Ee,_e[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Te,Ie,Ee,_e[X]);for(let he=0;he<pe.length;he++){const we=pe[he];P?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,0,0,Ie,Ee,we.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,he+1,Te,Ie,Ee,we.image[X])}}}x(E,Oe)&&S(t.TEXTURE_CUBE_MAP),se.__version=oe.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ce(A,E,$,ee,oe,se){const Fe=s.convert($.format,$.colorSpace),ke=s.convert($.type),de=T($.internalFormat,Fe,ke,$.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>se),_e=Math.max(1,E.height>>se);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,se,de,Be,_e,E.depth,0,Fe,ke,null):n.texImage2D(oe,se,de,Be,_e,0,Fe,ke,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,oe,i.get($).__webglTexture,0,ve(E)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,oe,i.get($).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||ye(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===xi?ee=t.DEPTH_COMPONENT32F:oe.type===Gi&&(ee=t.DEPTH_COMPONENT24));const se=ve(E);ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,ee,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ee,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ee=ve(E);$&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ee=E.textures;for(let oe=0;oe<ee.length;oe++){const se=ee[oe],Fe=s.convert(se.format,se.colorSpace),ke=s.convert(se.type),de=T(se.internalFormat,Fe,ke,se.colorSpace),Me=ve(E);$&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,de,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,oe=ve(E);if(E.depthTexture.format===Dr)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===qs)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function z(A){const E=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Re(E.__webglFramebuffer,A)}else if($){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[ee],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function L(A,E,$){const ee=i.get(A);E!==void 0&&ce(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&z(A)}function ue(A){const E=A.texture,$=i.get(A),ee=i.get(E);A.addEventListener("dispose",V);const oe=A.textures,se=A.isWebGLCubeRenderTarget===!0,Fe=oe.length>1,ke=f(A)||a;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),se){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let Me=0;Me<E.mipmaps.length;Me++)$.__webglFramebuffer[de][Me]=t.createFramebuffer()}else $.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)$.__webglFramebuffer[de]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(Fe)if(r.drawBuffers)for(let de=0,Me=oe.length;de<Me;de++){const Be=i.get(oe[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ye(A)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Me=oe[de];$.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const Be=s.convert(Me.format,Me.colorSpace),_e=s.convert(Me.type),et=T(Me.internalFormat,Be,_e,Me.colorSpace,A.isXRRenderTarget===!0),Oe=ve(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,et,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,$.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),fe($.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),B(t.TEXTURE_CUBE_MAP,E,ke);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ce($.__webglFramebuffer[de][Me],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else ce($.__webglFramebuffer[de],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E,ke)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let de=0,Me=oe.length;de<Me;de++){const Be=oe[de],_e=i.get(Be);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),B(t.TEXTURE_2D,Be,ke),ce($.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),x(Be,ke)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ee.__webglTexture),B(de,E,ke),a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ce($.__webglFramebuffer[Me],A,E,t.COLOR_ATTACHMENT0,de,Me);else ce($.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,de,0);x(E,ke)&&S(de),n.unbindTexture()}A.depthBuffer&&z(A)}function ne(A){const E=f(A)||a,$=A.textures;for(let ee=0,oe=$.length;ee<oe;ee++){const se=$[ee];if(x(se,E)){const Fe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ke=i.get(se).__webglTexture;n.bindTexture(Fe,ke),S(Fe),n.unbindTexture()}}}function xe(A){if(a&&A.samples>0&&ye(A)===!1){const E=A.textures,$=A.width,ee=A.height;let oe=t.COLOR_BUFFER_BIT;const se=[],Fe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(A),de=E.length>1;if(de)for(let Me=0;Me<E.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){se.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&se.push(Fe);const Be=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Me]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),de){const _e=i.get(E[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,oe,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<E.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Me]);const Be=i.get(E[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function ve(A){return Math.min(r.maxSamples,A.samples)}function ye(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ge(A){const E=o.render.frame;p.get(A)!==E&&(p.set(A,E),A.update())}function Ce(A,E){const $=A.colorSpace,ee=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Qd||$!==cr&&$!==Bi&&(st.getTransfer($)===ut?a===!1?e.has("EXT_sRGB")===!0&&ee===Xn?(A.format=Qd,A.minFilter=cn,A.generateMipmaps=!1):E=Jx.sRGBToLinear(E):(ee!==Xn||oe!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=L,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ye}function Tb(t,e,n){const i=n.isWebGL2;function r(s,o=Bi){let a;const l=st.getTransfer(o);if(s===er)return t.UNSIGNED_BYTE;if(s===Hx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Gx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===sS)return t.BYTE;if(s===oS)return t.SHORT;if(s===ah)return t.UNSIGNED_SHORT;if(s===jx)return t.INT;if(s===Gi)return t.UNSIGNED_INT;if(s===xi)return t.FLOAT;if(s===na)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===aS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===lS)return t.LUMINANCE;if(s===cS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===qs)return t.DEPTH_STENCIL;if(s===Qd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===uS)return t.RED;if(s===Vx)return t.RED_INTEGER;if(s===dS)return t.RG;if(s===Wx)return t.RG_INTEGER;if(s===Xx)return t.RGBA_INTEGER;if(s===uu||s===du||s===fu||s===hu)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===jp||s===Hp||s===Gp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$x)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Wp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vp)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Jp||s===Qp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$p)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===om||s===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pu)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fS||s===lm||s===cm||s===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Cb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class An extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),g=.02,v=.005;u.inputState.pinching&&d>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new sr({extensions:{fragDepth:!0},vertexShader:Rb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jt(new Cc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Db extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,d=null,g=null,v=null;const y=new Lb,m=n.getContextAttributes();let f=null,_=null;const x=[],S=[],T=new Ne;let b=null;const w=new Ln;w.layers.enable(1),w.viewport=new Ut;const D=new Ln;D.layers.enable(2),D.viewport=new Ut;const V=[w,D],M=new Cb;M.layers.enable(1),M.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let re=x[B];return re===void 0&&(re=new Bu,x[B]=re),re.getTargetRaySpace()},this.getControllerGrip=function(B){let re=x[B];return re===void 0&&(re=new Bu,x[B]=re),re.getGripSpace()},this.getHand=function(B){let re=x[B];return re===void 0&&(re=new Bu,x[B]=re),re.getHandSpace()};function Q(B){const re=S.indexOf(B.inputSource);if(re===-1)return;const J=x[re];J!==void 0&&(J.update(B.inputSource,B.frame,u||o),J.dispatchEvent({type:B.type,data:B.inputSource}))}function U(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let B=0;B<x.length;B++){const re=S[B];re!==null&&(S[B]=null,x[B].disconnect(re))}R=null,W=null,y.reset(),e.setRenderTarget(f),g=null,d=null,p=null,r=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Fr(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,J=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?qs:Dr,J=m.stencil?Lr:Gi);const ce={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Fr(d.textureWidth,d.textureHeight,{format:Xn,type:er,depthTexture:new c_(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const fe=e.properties.get(_);fe.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(B){for(let re=0;re<B.removed.length;re++){const J=B.removed[re],le=S.indexOf(J);le>=0&&(S[le]=null,x[le].disconnect(J))}for(let re=0;re<B.added.length;re++){const J=B.added[re];let le=S.indexOf(J);if(le===-1){for(let fe=0;fe<x.length;fe++)if(fe>=S.length){S.push(J),le=fe;break}else if(S[fe]===null){S[fe]=J,le=fe;break}if(le===-1)break}const ce=x[le];ce&&ce.connect(J)}}const G=new F,k=new F;function I(B,re,J){G.setFromMatrixPosition(re.matrixWorld),k.setFromMatrixPosition(J.matrixWorld);const le=G.distanceTo(k),ce=re.projectionMatrix.elements,fe=J.projectionMatrix.elements,Re=ce[14]/(ce[10]-1),z=ce[14]/(ce[10]+1),L=(ce[9]+1)/ce[5],ue=(ce[9]-1)/ce[5],ne=(ce[8]-1)/ce[0],xe=(fe[8]+1)/fe[0],ve=Re*ne,ye=Re*xe,ge=le/(-ne+xe),Ce=ge*-ne;re.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ce),B.translateZ(ge),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const He=Re+ge,A=z+ge,E=ve-Ce,$=ye+(le-Ce),ee=L*z/A*He,oe=ue*z/A*He;B.projectionMatrix.makePerspective(E,$,ee,oe,He,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function O(B,re){re===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(re.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;y.texture!==null&&(B.near=y.depthNear,B.far=y.depthFar),M.near=D.near=w.near=B.near,M.far=D.far=w.far=B.far,(R!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,W=M.far,w.near=R,w.far=W,D.near=R,D.far=W,w.updateProjectionMatrix(),D.updateProjectionMatrix(),B.updateProjectionMatrix());const re=B.parent,J=M.cameras;O(M,re);for(let le=0;le<J.length;le++)O(J[le],re);J.length===2?I(M,w,D):M.projectionMatrix.copy(w.projectionMatrix),j(B,M,re)};function j(B,re,J){J===null?B.matrix.copy(re.matrixWorld):(B.matrix.copy(J.matrixWorld),B.matrix.invert(),B.matrix.multiply(re.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(re.projectionMatrix),B.projectionMatrixInverse.copy(re.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ef*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null};let te=null;function ae(B,re){if(h=re.getViewerPose(u||o),v=re,h!==null){const J=h.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let le=!1;J.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let fe=0;fe<J.length;fe++){const Re=J[fe];let z=null;if(g!==null)z=g.getViewport(Re);else{const ue=p.getViewSubImage(d,Re);z=ue.viewport,fe===0&&(e.setRenderTargetTextures(_,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(_))}let L=V[fe];L===void 0&&(L=new Ln,L.layers.enable(fe),L.viewport=new Ut,V[fe]=L),L.matrix.fromArray(Re.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Re.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(z.x,z.y,z.width,z.height),fe===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(L)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const fe=p.getDepthInformation(J[0]);fe&&fe.isValid&&fe.texture&&y.init(e,fe,r.renderState)}}for(let J=0;J<x.length;J++){const le=S[J],ce=x[J];le!==null&&ce!==void 0&&ce.update(le,re,u||o)}y.render(e,M),te&&te(B,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const De=new a_;De.setAnimationLoop(ae),this.setAnimationLoop=function(B){te=B},this.dispose=function(){}}}const _r=new oi,Ib=new mt;function Nb(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,r_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),x=_.envMap,S=_.envMapRotation;if(x&&(m.envMap.value=x,_r.copy(S),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(_r)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const T=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*T,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ub(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function u(_,x){let S=r[_.id];S===void 0&&(v(_),S=h(_),r[_.id]=S,_.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(_,T);const b=e.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const x=p();_.__bindingPointIndex=x;const S=t.createBuffer(),T=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,w=S.length;b<w;b++){const D=Array.isArray(S[b])?S[b]:[S[b]];for(let V=0,M=D.length;V<M;V++){const R=D[V];if(g(R,b,V,T)===!0){const W=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let K=0;K<Q.length;K++){const G=Q[K],k=y(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,W+U,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,x,S,T){const b=_.value,w=x+"_"+S;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{const D=T[w];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[w]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function v(_){const x=_.uniforms;let S=0;const T=16;for(let w=0,D=x.length;w<D;w++){const V=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,R=V.length;M<R;M++){const W=V[M],Q=Array.isArray(W.value)?W.value:[W.value];for(let U=0,K=Q.length;U<K;U++){const G=Q[U],k=y(G),I=S%T;I!==0&&T-I<k.boundary&&(S+=T-I),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=k.storage}}}const b=S%T;return b>0&&(S+=T-b),_.__size=S,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class m_{constructor(e={}){const{canvas:n=bS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let S=!1,T=0,b=0,w=null,D=-1,V=null;const M=new Ut,R=new Ut;let W=null;const Q=new Ze(0);let U=0,K=n.width,G=n.height,k=1,I=null,O=null;const j=new Ut(0,0,K,G),te=new Ut(0,0,K,G);let ae=!1;const De=new uh;let B=!1,re=!1,J=null;const le=new mt,ce=new Ne,fe=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return w===null?k:1}let L=i;function ue(C,H){for(let q=0;q<C.length;q++){const Z=C[q],Y=n.getContext(Z,H);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",pe,!1),L===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),L=ue(H,C),L===null)throw ue(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,xe,ve,ye,ge,Ce,He,A,E,$,ee,oe,se,Fe,ke,de,Me,Be,_e,et,Oe,Ie,Ee,Te;function P(){ne=new jw(L),xe=new Uw(L,ne,e),ne.init(xe),Ie=new Tb(L,ne,xe),ve=new wb(L,ne,xe),ye=new Vw(L),ge=new ub,Ce=new bb(L,ne,ve,ge,xe,Ie,ye),He=new Ow(x),A=new Bw(x),E=new KS(L,xe),Ee=new Iw(L,ne,E,xe),$=new Hw(L,E,ye,Ee),ee=new Yw(L,$,E,ye),_e=new $w(L,xe,Ce),de=new kw(ge),oe=new cb(x,He,A,ne,xe,Ee,de),se=new Nb(x,ge),Fe=new fb,ke=new _b(ne,xe),Be=new Dw(x,He,A,ve,ee,d,l),Me=new Eb(x,ee,xe),Te=new Ub(L,ye,xe,ve),et=new Nw(L,ne,ye,xe),Oe=new Gw(L,ne,ye,xe),ye.programs=oe.programs,x.capabilities=xe,x.extensions=ne,x.properties=ge,x.renderLists=Fe,x.shadowMap=Me,x.state=ve,x.info=ye}P();const ie=new Db(x,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(K,G,!1))},this.getSize=function(C){return C.set(K,G)},this.setSize=function(C,H,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,G=H,n.width=Math.floor(C*k),n.height=Math.floor(H*k),q===!0&&(n.style.width=C+"px",n.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(K*k,G*k).floor()},this.setDrawingBufferSize=function(C,H,q){K=C,G=H,k=q,n.width=Math.floor(C*q),n.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,H,q,Z){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,H,q,Z),ve.viewport(M.copy(j).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,H,q,Z){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,H,q,Z),ve.scissor(R.copy(te).multiplyScalar(k).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){ve.setScissorTest(ae=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,H=!0,q=!0){let Z=0;if(C){let Y=!1;if(w!==null){const Ae=w.texture.format;Y=Ae===Xx||Ae===Wx||Ae===Vx}if(Y){const Ae=w.texture.type,Ue=Ae===er||Ae===Gi||Ae===ah||Ae===Lr||Ae===Hx||Ae===Gx,je=Be.getClearColor(),Ge=Be.getClearAlpha(),qe=je.r,Ve=je.g,We=je.b;Ue?(g[0]=qe,g[1]=Ve,g[2]=We,g[3]=Ge,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=qe,v[1]=Ve,v[2]=We,v[3]=Ge,L.clearBufferiv(L.COLOR,0,v))}else Z|=L.COLOR_BUFFER_BIT}H&&(Z|=L.DEPTH_BUFFER_BIT),q&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Fe.dispose(),ke.dispose(),ge.dispose(),He.dispose(),A.dispose(),ee.dispose(),Ee.dispose(),Te.dispose(),oe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",yt),ie.removeEventListener("sessionend",tt),J&&(J.dispose(),J=null),lt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=ye.autoReset,H=Me.enabled,q=Me.autoUpdate,Z=Me.needsUpdate,Y=Me.type;P(),ye.autoReset=C,Me.enabled=H,Me.autoUpdate=q,Me.needsUpdate=Z,Me.type=Y}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function X(C){const H=C.target;H.removeEventListener("dispose",X),he(H)}function he(C){we(C),ge.remove(C)}function we(C){const H=ge.get(C).programs;H!==void 0&&(H.forEach(function(q){oe.releaseProgram(q)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,Z,Y,Ae){H===null&&(H=Re);const Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,je=__(C,H,q,Z,Y);ve.setMaterial(Z,Ue);let Ge=q.index,qe=1;if(Z.wireframe===!0){if(Ge=$.getWireframeAttribute(q),Ge===void 0)return;qe=2}const Ve=q.drawRange,We=q.attributes.position;let Mt=Ve.start*qe,mn=(Ve.start+Ve.count)*qe;Ae!==null&&(Mt=Math.max(Mt,Ae.start*qe),mn=Math.min(mn,(Ae.start+Ae.count)*qe)),Ge!==null?(Mt=Math.max(Mt,0),mn=Math.min(mn,Ge.count)):We!=null&&(Mt=Math.max(Mt,0),mn=Math.min(mn,We.count));const Lt=mn-Mt;if(Lt<0||Lt===1/0)return;Ee.setup(Y,Z,je,q,Ge);let ai,gt=et;if(Ge!==null&&(ai=E.get(Ge),gt=Oe,gt.setIndex(ai)),Y.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*z()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(Y.isLine){let Xe=Z.linewidth;Xe===void 0&&(Xe=1),ve.setLineWidth(Xe*z()),Y.isLineSegments?gt.setMode(L.LINES):Y.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else Y.isPoints?gt.setMode(L.POINTS):Y.isSprite&&gt.setMode(L.TRIANGLES);if(Y.isBatchedMesh)gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)gt.renderInstances(Mt,Lt,Y.count);else if(q.isInstancedBufferGeometry){const Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dc=Math.min(q.instanceCount,Xe);gt.renderInstances(Mt,Lt,Dc)}else gt.render(Mt,Lt)};function Ke(C,H,q){C.transparent===!0&&C.side===vn&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,pa(C,H,q),C.side=rr,C.needsUpdate=!0,pa(C,H,q),C.side=vn):pa(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),m=ke.get(q),m.init(),_.push(m),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==q&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const Z=new Set;return C.traverse(function(Y){const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const je=Ae[Ue];Ke(je,q,Y),Z.add(je)}else Ke(Ae,q,Y),Z.add(Ae)}),_.pop(),m=null,Z},this.compileAsync=function(C,H,q=null){const Z=this.compile(C,H,q);return new Promise(Y=>{function Ae(){if(Z.forEach(function(Ue){ge.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){Y(C);return}setTimeout(Ae,10)}ne.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let nt=null;function ot(C){nt&&nt(C)}function yt(){lt.stop()}function tt(){lt.start()}const lt=new a_;lt.setAnimationLoop(ot),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(C){nt=C,ie.setAnimationLoop(C),C===null?lt.stop():lt.start()},ie.addEventListener("sessionstart",yt),ie.addEventListener("sessionend",tt),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,H,w),m=ke.get(C,_.length),m.init(),_.push(m),le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),De.setFromProjectionMatrix(le),re=this.localClippingEnabled,B=de.init(this.clippingPlanes,re),y=Fe.get(C,f.length),y.init(),f.push(y),Vt(C,H,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(I,O),this.info.render.frame++,B===!0&&de.beginShadows();const q=m.state.shadowsArray;if(Me.render(q,C,H),B===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1)&&Be.render(y,C),m.setupLights(x._useLegacyLights),H.isArrayCamera){const Z=H.cameras;for(let Y=0,Ae=Z.length;Y<Ae;Y++){const Ue=Z[Y];ur(y,C,Ue,Ue.viewport)}}else ur(y,C,H);w!==null&&(Ce.updateMultisampleRenderTarget(w),Ce.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(x,C,H),Ee.resetDefaultState(),D=-1,V=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Vt(C,H,q,Z){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){Z&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Ue=ee.update(C),je=C.material;je.visible&&y.push(C,Ue,je,q,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const Ue=ee.update(C),je=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),fe.copy(Ue.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(le)),Array.isArray(je)){const Ge=Ue.groups;for(let qe=0,Ve=Ge.length;qe<Ve;qe++){const We=Ge[qe],Mt=je[We.materialIndex];Mt&&Mt.visible&&y.push(C,Ue,Mt,q,fe.z,We)}}else je.visible&&y.push(C,Ue,je,q,fe.z,null)}}const Ae=C.children;for(let Ue=0,je=Ae.length;Ue<je;Ue++)Vt(Ae[Ue],H,q,Z)}function ur(C,H,q,Z){const Y=C.opaque,Ae=C.transmissive,Ue=C.transparent;m.setupLightsView(q),B===!0&&de.setGlobalState(x.clippingPlanes,q),Ae.length>0&&fa(Y,Ae,H,q),Z&&ve.viewport(M.copy(Z)),Y.length>0&&ha(Y,H,q),Ae.length>0&&ha(Ae,H,q),Ue.length>0&&ha(Ue,H,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function fa(C,H,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Ae=xe.isWebGL2;J===null&&(J=new Fr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?na:er,minFilter:Ar,samples:Ae?4:0})),x.getDrawingBufferSize(ce),Ae?J.setSize(ce.x,ce.y):J.setSize(tf(ce.x),tf(ce.y));const Ue=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(Q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const je=x.toneMapping;x.toneMapping=Qi,ha(C,q,Z),Ce.updateMultisampleRenderTarget(J),Ce.updateRenderTargetMipmap(J);let Ge=!1;for(let qe=0,Ve=H.length;qe<Ve;qe++){const We=H[qe],Mt=We.object,mn=We.geometry,Lt=We.material,ai=We.group;if(Lt.side===vn&&Mt.layers.test(Z.layers)){const gt=Lt.side;Lt.side=on,Lt.needsUpdate=!0,gh(Mt,q,Z,mn,Lt,ai),Lt.side=gt,Lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ce.updateMultisampleRenderTarget(J),Ce.updateRenderTargetMipmap(J)),x.setRenderTarget(Ue),x.setClearColor(Q,U),x.toneMapping=je}function ha(C,H,q){const Z=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Ae=C.length;Y<Ae;Y++){const Ue=C[Y],je=Ue.object,Ge=Ue.geometry,qe=Z===null?Ue.material:Z,Ve=Ue.group;je.layers.test(q.layers)&&gh(je,H,q,Ge,qe,Ve)}}function gh(C,H,q,Z,Y,Ae){C.onBeforeRender(x,H,q,Z,Y,Ae),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(x,H,q,Z,C,Ae),Y.transparent===!0&&Y.side===vn&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,x.renderBufferDirect(q,H,Z,Y,C,Ae),Y.side=rr,Y.needsUpdate=!0,x.renderBufferDirect(q,H,Z,Y,C,Ae),Y.side=vn):x.renderBufferDirect(q,H,Z,Y,C,Ae),C.onAfterRender(x,H,q,Z,Y,Ae)}function pa(C,H,q){H.isScene!==!0&&(H=Re);const Z=ge.get(C),Y=m.state.lights,Ae=m.state.shadowsArray,Ue=Y.state.version,je=oe.getParameters(C,Y.state,Ae,H,q),Ge=oe.getProgramCacheKey(je);let qe=Z.programs;Z.environment=C.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(C.isMeshStandardMaterial?A:He).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",X),qe=new Map,Z.programs=qe);let Ve=qe.get(Ge);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Ue)return _h(C,je),Ve}else je.uniforms=oe.getUniforms(C),C.onBuild(q,je,x),C.onBeforeCompile(je,x),Ve=oe.acquireProgram(je,Ge),qe.set(Ge,Ve),Z.uniforms=je.uniforms;const We=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=de.uniform),_h(C,je),Z.needsLights=y_(C),Z.lightsStateVersion=Ue,Z.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function xh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=bl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function _h(C,H){const q=ge.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function __(C,H,q,Z,Y){H.isScene!==!0&&(H=Re),Ce.resetTextureUnits();const Ae=H.fog,Ue=Z.isMeshStandardMaterial?H.environment:null,je=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cr,Ge=(Z.isMeshStandardMaterial?A:He).get(Z.envMap||Ue),qe=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!q.morphAttributes.position,Mt=!!q.morphAttributes.normal,mn=!!q.morphAttributes.color;let Lt=Qi;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const ai=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=ai!==void 0?ai.length:0,Xe=ge.get(Z),Dc=m.state.lights;if(B===!0&&(re===!0||C!==V)){const bn=C===V&&Z.id===D;de.setState(Z,C,bn)}let ft=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Dc.state.version||Xe.outputColorSpace!==je||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==Ge||Z.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ve||Xe.morphTargets!==We||Xe.morphNormals!==Mt||Xe.morphColors!==mn||Xe.toneMapping!==Lt||xe.isWebGL2===!0&&Xe.morphTargetsCount!==gt)&&(ft=!0):(ft=!0,Xe.__version=Z.version);let dr=Xe.currentProgram;ft===!0&&(dr=pa(Z,H,Y));let vh=!1,to=!1,Ic=!1;const Wt=dr.getUniforms(),fr=Xe.uniforms;if(ve.useProgram(dr.program)&&(vh=!0,to=!0,Ic=!0),Z.id!==D&&(D=Z.id,to=!0),vh||V!==C){Wt.setValue(L,"projectionMatrix",C.projectionMatrix),Wt.setValue(L,"viewMatrix",C.matrixWorldInverse);const bn=Wt.map.cameraPosition;bn!==void 0&&bn.setValue(L,fe.setFromMatrixPosition(C.matrixWorld)),xe.logarithmicDepthBuffer&&Wt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Wt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,to=!0,Ic=!0)}if(Y.isSkinnedMesh){Wt.setOptional(L,Y,"bindMatrix"),Wt.setOptional(L,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(xe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Wt.setValue(L,"boneTexture",bn.boneTexture,Ce)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Wt.setOptional(L,Y,"batchingTexture"),Wt.setValue(L,"batchingTexture",Y._matricesTexture,Ce));const Nc=q.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0&&xe.isWebGL2===!0)&&_e.update(Y,q,dr),(to||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Wt.setValue(L,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(fr.envMap.value=Ge,fr.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),to&&(Wt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&v_(fr,Ic),Ae&&Z.fog===!0&&se.refreshFogUniforms(fr,Ae),se.refreshMaterialUniforms(fr,Z,k,G,J),bl.upload(L,xh(Xe),fr,Ce)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(bl.upload(L,xh(Xe),fr,Ce),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Wt.setValue(L,"center",Y.center),Wt.setValue(L,"modelViewMatrix",Y.modelViewMatrix),Wt.setValue(L,"normalMatrix",Y.normalMatrix),Wt.setValue(L,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const bn=Z.uniformsGroups;for(let Uc=0,S_=bn.length;Uc<S_;Uc++)if(xe.isWebGL2){const yh=bn[Uc];Te.update(yh,dr),Te.bind(yh,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function v_(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function y_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,H,q){ge.get(C.texture).__webglTexture=H,ge.get(C.depthTexture).__webglTexture=q;const Z=ge.get(C);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const q=ge.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,q=0){w=C,T=H,b=q;let Z=!0,Y=null,Ae=!1,Ue=!1;if(C){const Ge=ge.get(C);Ge.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Ge.__webglFramebuffer===void 0?Ce.setupRenderTarget(C):Ge.__hasExternalTextures&&Ce.rebindTextures(C,ge.get(C.texture).__webglTexture,ge.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ve=ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?Y=Ve[H][q]:Y=Ve[H],Ae=!0):xe.isWebGL2&&C.samples>0&&Ce.useMultisampledRTT(C)===!1?Y=ge.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[q]:Y=Ve,M.copy(C.viewport),R.copy(C.scissor),W=C.scissorTest}else M.copy(j).multiplyScalar(k).floor(),R.copy(te).multiplyScalar(k).floor(),W=ae;if(ve.bindFramebuffer(L.FRAMEBUFFER,Y)&&xe.drawBuffers&&Z&&ve.drawBuffers(C,Y),ve.viewport(M),ve.scissor(R),ve.setScissorTest(W),Ae){const Ge=ge.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,q)}else if(Ue){const Ge=ge.get(C.texture),qe=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,q||0,qe)}D=-1},this.readRenderTargetPixels=function(C,H,q,Z,Y,Ae,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){ve.bindFramebuffer(L.FRAMEBUFFER,je);try{const Ge=C.texture,qe=Ge.format,Ve=Ge.type;if(qe!==Xn&&Ie.convert(qe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===na&&(ne.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Ve!==er&&Ie.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===xi&&(xe.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Z&&q>=0&&q<=C.height-Y&&L.readPixels(H,q,Z,Y,Ie.convert(qe),Ie.convert(Ve),Ae)}finally{const Ge=w!==null?ge.get(w).__webglFramebuffer:null;ve.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(C,H,q=0){const Z=Math.pow(2,-q),Y=Math.floor(H.image.width*Z),Ae=Math.floor(H.image.height*Z);Ce.setTexture2D(H,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,C.x,C.y,Y,Ae),ve.unbindTexture()},this.copyTextureToTexture=function(C,H,q,Z=0){const Y=H.image.width,Ae=H.image.height,Ue=Ie.convert(q.format),je=Ie.convert(q.type);Ce.setTexture2D(q,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,Y,Ae,Ue,je,H.image.data):H.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,Ue,H.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,Ue,je,H.image),Z===0&&q.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,H,q,Z,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=Math.round(C.max.x-C.min.x),Ue=Math.round(C.max.y-C.min.y),je=C.max.z-C.min.z+1,Ge=Ie.convert(Z.format),qe=Ie.convert(Z.type);let Ve;if(Z.isData3DTexture)Ce.setTexture3D(Z,0),Ve=L.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Ce.setTexture2DArray(Z,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const We=L.getParameter(L.UNPACK_ROW_LENGTH),Mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Lt=L.getParameter(L.UNPACK_SKIP_ROWS),ai=L.getParameter(L.UNPACK_SKIP_IMAGES),gt=q.isCompressedTexture?q.mipmaps[Y]:q.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,C.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,C.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?L.texSubImage3D(Ve,Y,H.x,H.y,H.z,Ae,Ue,je,Ge,qe,gt.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,Y,H.x,H.y,H.z,Ae,Ue,je,Ge,gt.data):L.texSubImage3D(Ve,Y,H.x,H.y,H.z,Ae,Ue,je,Ge,qe,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ai),Y===0&&Z.generateMipmaps&&L.generateMipmap(Ve),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ce.setTextureCube(C,0):C.isData3DTexture?Ce.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ce.setTexture2DArray(C,0):Ce.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){T=0,b=0,w=null,ve.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===wc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kb extends m_{}kb.prototype.isWebGL1Renderer=!0;class Ob extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Fb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Jd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zx("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new F;class rc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rc extends Gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const go=new F,us=new F,ds=new F,fs=new Ne,xo=new Ne,g_=new mt,nl=new F,_o=new F,il=new F,eg=new Ne,ju=new Ne,tg=new Ne;class fh extends Ot{constructor(e=new Rc){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Nt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fb(n,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new rc(i,3,0,!1)),cs.setAttribute("uv",new rc(i,2,3,!1))}this.geometry=cs,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),g_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;rl(nl.set(-.5,-.5,0),ds,o,us,r,s),rl(_o.set(.5,-.5,0),ds,o,us,r,s),rl(il.set(.5,.5,0),ds,o,us,r,s),eg.set(0,0),ju.set(1,0),tg.set(1,1);let a=e.ray.intersectTriangle(nl,_o,il,!1,go);if(a===null&&(rl(_o.set(-.5,.5,0),ds,o,us,r,s),ju.set(0,1),a=e.ray.intersectTriangle(nl,il,_o,!1,go),a===null))return;const l=e.ray.origin.distanceTo(go);l<e.near||l>e.far||n.push({distance:l,point:go.clone(),uv:$n.getInterpolation(go,nl,_o,il,eg,ju,tg,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rl(t,e,n,i,r,s){fs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(xo.x=s*fs.x-r*fs.y,xo.y=r*fs.x+s*fs.y):xo.copy(fs),t.copy(e),t.x+=xo.x,t.y+=xo.y,t.applyMatrix4(g_)}class gs extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ng=new F,ig=new F,rg=new mt,Hu=new Tc,sl=new bc;class Co extends Ot{constructor(e=new Nt,n=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ng.fromBufferAttribute(n,r-1),ig.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ng.distanceTo(ig);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;rg.copy(r).invert(),Hu.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,h=new F,p=new F,d=new F,g=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let x=f,S=_-1;x<S;x+=g){const T=v.getX(x),b=v.getX(x+1);if(u.fromBufferAttribute(m,T),h.fromBufferAttribute(m,b),Hu.distanceSqToSegment(u,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||n.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=f,S=_-1;x<S;x+=g){if(u.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Hu.distanceSqToSegment(u,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||n.push({distance:b,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class zb extends Co{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Pc extends Zt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hh extends Nt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new F,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=n;p++,d+=3){const g=i+p/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ph extends Nt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],g=[];let v=0;const y=[],m=i/2;let f=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(g,2));function _(){const S=new F,T=new F;let b=0;const w=(n-e)/i;for(let D=0;D<=s;D++){const V=[],M=D/s,R=M*(n-e)+e;for(let W=0;W<=r;W++){const Q=W/r,U=Q*l+a,K=Math.sin(U),G=Math.cos(U);T.x=R*K,T.y=-M*i+m,T.z=R*G,p.push(T.x,T.y,T.z),S.set(K,w,G).normalize(),d.push(S.x,S.y,S.z),g.push(Q,1-M),V.push(v++)}y.push(V)}for(let D=0;D<r;D++)for(let V=0;V<s;V++){const M=y[V][D],R=y[V+1][D],W=y[V+1][D+1],Q=y[V][D+1];h.push(M,R,Q),h.push(R,W,Q),b+=6}u.addGroup(f,b,0),f+=b}function x(S){const T=v,b=new Ne,w=new F;let D=0;const V=S===!0?e:n,M=S===!0?1:-1;for(let W=1;W<=r;W++)p.push(0,m*M,0),d.push(0,M,0),g.push(.5,.5),v++;const R=v;for(let W=0;W<=r;W++){const U=W/r*l+a,K=Math.cos(U),G=Math.sin(U);w.x=V*G,w.y=m*M,w.z=V*K,p.push(w.x,w.y,w.z),d.push(0,M,0),b.x=K*.5+.5,b.y=G*.5*M+.5,g.push(b.x,b.y),v++}for(let W=0;W<r;W++){const Q=T+W,U=R+W;S===!0?h.push(U,U+1,Q):h.push(U+1,U,Q),D+=3}u.addGroup(f,D,S===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends ph{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends Nt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let p=e;const d=(n-e)/r,g=new F,v=new Ne;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const f=s+m/i*o;g.x=p*Math.cos(f),g.y=p*Math.sin(f),l.push(g.x,g.y,g.z),u.push(0,0,1),v.x=(g.x/n+1)/2,v.y=(g.y/n+1)/2,h.push(v.x,v.y)}p+=d}for(let y=0;y<r;y++){const m=y*(i+1);for(let f=0;f<i;f++){const _=f+m,x=_,S=_+i+1,T=_+i+2,b=_+1;a.push(x,S,b),a.push(S,T,b)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oo extends Nt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],p=new F,d=new F,g=[],v=[],y=[],m=[];for(let f=0;f<=i;f++){const _=[],x=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const b=T/n;p.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),v.push(p.x,p.y,p.z),d.copy(p).normalize(),y.push(d.x,d.y,d.z),m.push(b+S,1-x),_.push(u++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const x=h[f][_+1],S=h[f][_],T=h[f+1][_],b=h[f+1][_+1];(f!==0||o>0)&&g.push(x,S,b),(f!==i-1||l<Math.PI)&&g.push(S,T,b)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bb extends Gr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yx,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class jb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){const p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=u.length;p<d;p+=2){const g=u[p],v=u[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null}}}const Hb=new jb;class mh{constructor(e){this.manager=e!==void 0?e:Hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gb extends mh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ia("img");function l(){h(),sg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vb extends mh{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,o=new Gb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class x_ extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Gu=new mt,og=new F,ag=new F;class Wb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xb extends Wb{constructor(){super(new l_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends x_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $b extends x_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const cg=new mt;class Yb{constructor(e,n,i=0,r=1/0){this.ray=new Tc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(e,n=!0,i=[]){return rf(e,this,i,n),i.sort(ug),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rf(e[r],this,i,n);return i.sort(ug),i}}function ug(t,e){return t.distance-e.distance}function rf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)rf(r[s],e,n,!0)}}class dg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const fg={type:"change"},Vu={type:"start"},hg={type:"end"},ol=new Tc,pg=new ki,qb=Math.cos(70*wS.DEG2RAD);class Kb extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ke),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fg),i.update(),s=r.NONE},this.update=function(){const P=new F,ie=new zr().setFromUnitVectors(e.up,new F(0,1,0)),Le=ie.clone().invert(),N=new F,pe=new zr,X=new F,he=2*Math.PI;return function(Ke=null){const nt=i.object.position;P.copy(nt).sub(i.target),P.applyQuaternion(ie),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&W(M(Ke)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=i.minAzimuthAngle,yt=i.maxAzimuthAngle;isFinite(ot)&&isFinite(yt)&&(ot<-Math.PI?ot+=he:ot>Math.PI&&(ot-=he),yt<-Math.PI?yt+=he:yt>Math.PI&&(yt-=he),ot<=yt?a.theta=Math.max(ot,Math.min(yt,a.theta)):a.theta=a.theta>(ot+yt)/2?Math.max(ot,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let tt=!1;if(i.zoomToCursor&&b||i.object.isOrthographicCamera)a.radius=j(a.radius);else{const lt=a.radius;a.radius=j(a.radius*u),tt=lt!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion(Le),nt.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&b){let lt=null;if(i.object.isPerspectiveCamera){const Vt=P.length();lt=j(Vt*u);const ur=Vt-lt;i.object.position.addScaledVector(S,ur),i.object.updateMatrixWorld(),tt=!!ur}else if(i.object.isOrthographicCamera){const Vt=new F(T.x,T.y,0);Vt.unproject(i.object);const ur=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),tt=ur!==i.object.zoom;const fa=new F(T.x,T.y,0);fa.unproject(i.object),i.object.position.sub(fa).add(Vt),i.object.updateMatrixWorld(),lt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(ol.origin.copy(i.object.position),ol.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ol.direction))<qb?e.lookAt(i.target):(pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),ol.intersectPlane(pg,i.target))))}else if(i.object.isOrthographicCamera){const lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),tt=!0)}return u=1,b=!1,tt||N.distanceToSquared(i.object.position)>o||8*(1-pe.dot(i.object.quaternion))>o||X.distanceToSquared(i.target)>o?(i.dispatchEvent(fg),N.copy(i.object.position),pe.copy(i.object.quaternion),X.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Be),i.domElement.removeEventListener("pointerdown",Ce),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",A),i.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ke),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new dg,l=new dg;let u=1;const h=new F,p=new Ne,d=new Ne,g=new Ne,v=new Ne,y=new Ne,m=new Ne,f=new Ne,_=new Ne,x=new Ne,S=new F,T=new Ne;let b=!1;const w=[],D={};let V=!1;function M(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function R(P){const ie=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*ie)}function W(P){l.theta-=P}function Q(P){l.phi-=P}const U=function(){const P=new F;return function(Le,N){P.setFromMatrixColumn(N,0),P.multiplyScalar(-Le),h.add(P)}}(),K=function(){const P=new F;return function(Le,N){i.screenSpacePanning===!0?P.setFromMatrixColumn(N,1):(P.setFromMatrixColumn(N,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Le),h.add(P)}}(),G=function(){const P=new F;return function(Le,N){const pe=i.domElement;if(i.object.isPerspectiveCamera){const X=i.object.position;P.copy(X).sub(i.target);let he=P.length();he*=Math.tan(i.object.fov/2*Math.PI/180),U(2*Le*he/pe.clientHeight,i.object.matrix),K(2*N*he/pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(Le*(i.object.right-i.object.left)/i.object.zoom/pe.clientWidth,i.object.matrix),K(N*(i.object.top-i.object.bottom)/i.object.zoom/pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(P,ie){if(!i.zoomToCursor)return;b=!0;const Le=i.domElement.getBoundingClientRect(),N=P-Le.left,pe=ie-Le.top,X=Le.width,he=Le.height;T.x=N/X*2-1,T.y=-(pe/he)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function te(P){p.set(P.clientX,P.clientY)}function ae(P){O(P.clientX,P.clientX),f.set(P.clientX,P.clientY)}function De(P){v.set(P.clientX,P.clientY)}function B(P){d.set(P.clientX,P.clientY),g.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ie=i.domElement;W(2*Math.PI*g.x/ie.clientHeight),Q(2*Math.PI*g.y/ie.clientHeight),p.copy(d),i.update()}function re(P){_.set(P.clientX,P.clientY),x.subVectors(_,f),x.y>0?k(R(x.y)):x.y<0&&I(R(x.y)),f.copy(_),i.update()}function J(P){y.set(P.clientX,P.clientY),m.subVectors(y,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(y),i.update()}function le(P){O(P.clientX,P.clientY),P.deltaY<0?I(R(P.deltaY)):P.deltaY>0&&k(R(P.deltaY)),i.update()}function ce(P){let ie=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ie=!0;break}ie&&(P.preventDefault(),i.update())}function fe(P){if(w.length===1)p.set(P.pageX,P.pageY);else{const ie=Ee(P),Le=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);p.set(Le,N)}}function Re(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const ie=Ee(P),Le=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);v.set(Le,N)}}function z(P){const ie=Ee(P),Le=P.pageX-ie.x,N=P.pageY-ie.y,pe=Math.sqrt(Le*Le+N*N);f.set(0,pe)}function L(P){i.enableZoom&&z(P),i.enablePan&&Re(P)}function ue(P){i.enableZoom&&z(P),i.enableRotate&&fe(P)}function ne(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const Le=Ee(P),N=.5*(P.pageX+Le.x),pe=.5*(P.pageY+Le.y);d.set(N,pe)}g.subVectors(d,p).multiplyScalar(i.rotateSpeed);const ie=i.domElement;W(2*Math.PI*g.x/ie.clientHeight),Q(2*Math.PI*g.y/ie.clientHeight),p.copy(d)}function xe(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const ie=Ee(P),Le=.5*(P.pageX+ie.x),N=.5*(P.pageY+ie.y);y.set(Le,N)}m.subVectors(y,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(y)}function ve(P){const ie=Ee(P),Le=P.pageX-ie.x,N=P.pageY-ie.y,pe=Math.sqrt(Le*Le+N*N);_.set(0,pe),x.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),k(x.y),f.copy(_);const X=(P.pageX+ie.x)*.5,he=(P.pageY+ie.y)*.5;O(X,he)}function ye(P){i.enableZoom&&ve(P),i.enablePan&&xe(P)}function ge(P){i.enableZoom&&ve(P),i.enableRotate&&ne(P)}function Ce(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",He),i.domElement.addEventListener("pointerup",A)),!Oe(P)&&(_e(P),P.pointerType==="touch"?de(P):E(P)))}function He(P){i.enabled!==!1&&(P.pointerType==="touch"?Me(P):$(P))}function A(P){switch(et(P),w.length){case 0:i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",A),i.dispatchEvent(hg),s=r.NONE;break;case 1:const ie=w[0],Le=D[ie];de({pointerId:ie,pageX:Le.x,pageY:Le.y});break}}function E(P){let ie;switch(P.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Wr.DOLLY:if(i.enableZoom===!1)return;ae(P),s=r.DOLLY;break;case Wr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;De(P),s=r.PAN}else{if(i.enableRotate===!1)return;te(P),s=r.ROTATE}break;case Wr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;te(P),s=r.ROTATE}else{if(i.enablePan===!1)return;De(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vu)}function $(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;B(P);break;case r.DOLLY:if(i.enableZoom===!1)return;re(P);break;case r.PAN:if(i.enablePan===!1)return;J(P);break}}function ee(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Vu),le(oe(P)),i.dispatchEvent(hg))}function oe(P){const ie=P.deltaMode,Le={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ie){case 1:Le.deltaY*=16;break;case 2:Le.deltaY*=100;break}return P.ctrlKey&&!V&&(Le.deltaY*=10),Le}function se(P){P.key==="Control"&&(V=!0,i.domElement.getRootNode().addEventListener("keyup",Fe,{passive:!0,capture:!0}))}function Fe(P){P.key==="Control"&&(V=!1,i.domElement.getRootNode().removeEventListener("keyup",Fe,{passive:!0,capture:!0}))}function ke(P){i.enabled===!1||i.enablePan===!1||ce(P)}function de(P){switch(Ie(P),w.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;fe(P),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;Re(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(P),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Vu)}function Me(P){switch(Ie(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ne(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ge(P),i.update();break;default:s=r.NONE}}function Be(P){i.enabled!==!1&&P.preventDefault()}function _e(P){w.push(P.pointerId)}function et(P){delete D[P.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie]==P.pointerId){w.splice(ie,1);return}}function Oe(P){for(let ie=0;ie<w.length;ie++)if(w[ie]==P.pointerId)return!0;return!1}function Ie(P){let ie=D[P.pointerId];ie===void 0&&(ie=new Ne,D[P.pointerId]=ie),ie.set(P.pageX,P.pageY)}function Ee(P){const ie=P.pointerId===w[0]?w[1]:w[0];return D[ie]}i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",Ce),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}function Lc(t,e){const n=t.fuel_max_kg??10,i=.006,r=Math.min(1,Math.max(0,e/86400)),s=i*r,o=Math.max(0,Number((n-s).toFixed(3))),a=Number((o/n*100).toFixed(2)),l=t.temperature_c??38,u=l>=80;return{...t,temperature_c:l,overheated:u,fuel_kg:o,fuel_max_kg:n,fuel_pct:a,battery_pct:100,is_in_sunlight:!0,solar_power_w:1850}}const Zb=({scenario:t,settings:e,currentTime:n,outages:i,focusedSatelliteId:r,onSelectSatellite:s})=>{const o=be.useRef(null),a=be.useRef({earthGroup:new An,orbits:new An,satellites:new An,gateways:new An,islLines:new An,satLinks:new An,labels:new An,fovCones:new An}),l=be.useRef(new Map),u=be.useRef(null),h=be.useRef(null),p=be.useRef({});return be.useEffect(()=>{if(!o.current)return;const d=o.current,g=()=>d.clientWidth||window.innerWidth,v=()=>d.clientHeight||window.innerHeight-44,y=new Ob;y.background=new Ze(527122);const m=new Ln(45,g()/v(),.1,1e3);m.position.set(0,16,28),u.current=m;const f=new m_({antialias:!0,alpha:!1});f.setSize(g(),v()),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.domElement.style.display="block",f.domElement.style.width="100%",f.domElement.style.height="100%",d.appendChild(f.domElement);const _=new Kb(m,f.domElement);_.enableDamping=!0,_.dampingFactor=.05,_.minDistance=7,_.maxDistance=120,h.current=_;const x=new Yb,S=new Ne,T=B=>{const re=f.domElement.getBoundingClientRect();S.x=(B.clientX-re.left)/re.width*2-1,S.y=-((B.clientY-re.top)/re.height)*2+1,x.setFromCamera(S,m);const J=Array.from(l.current.keys()),le=x.intersectObjects(J,!1);if(le.length>0){const ce=le[0].object,fe=l.current.get(ce);fe&&s(fe)}};f.domElement.addEventListener("click",T);const b=new $b(16777215,1.1);y.add(b);const w=new lg(16777215,.9);w.position.set(30,40,50),y.add(w);const D=new lg(16777215,.5);D.position.set(-30,-20,-40),y.add(D);const V=6.371,M=new Oo(V,64,64);M.scale(1,6356.752/6378.137,1);const R=Qb(),W=new Pc(R);W.wrapS=zi,W.repeat.x=-1;const Q=new Bb({map:W,shininess:30,specular:new Ze(1718886)}),U=new jt(M,Q),K=new Vb;K.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",B=>{B.wrapS=zi,B.repeat.x=-1,Q.map=B,Q.needsUpdate=!0},void 0,()=>{K.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",B=>{B.wrapS=zi,B.repeat.x=-1,Q.map=B,Q.needsUpdate=!0},void 0,()=>{K.load("https://unpkg.com/three-globe/example/img/earth-day.jpg",B=>{B.wrapS=zi,B.repeat.x=-1,Q.map=B,Q.needsUpdate=!0})})}),K.load("https://unpkg.com/three-globe/example/img/earth-topology.png",B=>{B.wrapS=zi,B.repeat.x=-1,Q.bumpMap=B,Q.bumpScale=.05,Q.needsUpdate=!0});const G=a.current.earthGroup;G.add(U);const k=new Oo(V*1.025,48,48);k.scale(1,6356.752/6378.137,1);const I=new jn({color:1340390,transparent:!0,opacity:.22,side:on}),O=new jt(k,I);G.add(O),a.current.atmosMesh=O,G.add(a.current.orbits),G.add(a.current.satellites),G.add(a.current.gateways),G.add(a.current.islLines),G.add(a.current.satLinks),G.add(a.current.labels),G.add(a.current.fovCones),y.add(G);const j=()=>{const B=g(),re=v();B>0&&re>0&&(m.aspect=B/re,m.updateProjectionMatrix(),f.setSize(B,re))},te=new ResizeObserver(()=>j());te.observe(d),window.addEventListener("resize",j);let ae;const De=()=>{ae=requestAnimationFrame(De),_.update(),f.render(y,m)};return De(),()=>{f.domElement.removeEventListener("click",T),te.disconnect(),window.removeEventListener("resize",j),cancelAnimationFrame(ae),d.contains(f.domElement)&&d.removeChild(f.domElement),f.dispose()}},[]),be.useEffect(()=>{if(!r||!u.current||!h.current)return;const d=p.current[r];if(!d)return;const g=u.current,v=h.current,y=d.clone().multiplyScalar(1.32);let m=0;const f=setInterval(()=>{m+=.05,v.target.lerp(d,.1),g.position.lerp(y,.1),m>=1&&clearInterval(f)},20);return()=>clearInterval(f)},[r]),be.useEffect(()=>{var ae,De,B,re;if(!t)return;const{earthGroup:d,orbits:g,satellites:v,gateways:y,islLines:m,satLinks:f,labels:_,fovCones:x,atmosMesh:S}=a.current;S&&(S.visible=e.showAtmosphere,S.material.color.set(e.atmosphereColor||"#1e3a8a")),[g,v,y,m,f,_,x].forEach(J=>{for(;J.children.length>0;)J.remove(J.children[0])}),l.current.clear(),p.current={};const T=6.371,b=398600.435507,w=12*(Math.PI/180);d.rotation.y=w;const D=new Set(i.map(J=>J.satellite_id)),V={},M={},R=new jn({color:e.satColor||"#00f0ff"}),W=new jn({color:e.highLatencySatColor||"#ff9900"}),Q=new jn({color:e.offlineSatColor||"#ff3b30"}),U=new Oo(.22*e.satSize,16,16),K=new Set;(t.routes_sample||[]).forEach(J=>{(J.latency_ms>35||J.path.length>=4)&&J.path.forEach(le=>{le.startsWith("S")&&K.add(le)})});const G={};(De=(ae=t.raw_scenario)==null?void 0:ae.design)!=null&&De.planes&&t.raw_scenario.design.planes.forEach(J=>{const le=parseInt(String(J.id).replace("P",""))||1;G[le]={raanDeg:J.raan_deg??0,phaseDeg:J.phase_deg??0}}),t.satellites.forEach(J=>{var Be,_e;const le=J.plane,ce=D.has(J.id),fe=!ce&&(K.has(J.id)||Math.sin(n*.002+J.plane)>.6),Re=J.altitude||550,z=6371+Re,L=T+Re/1e3*1.2,ue=((Be=G[le])==null?void 0:Be.raanDeg)??J.raan??(le-1)*60,ne=((_e=G[le])==null?void 0:_e.phaseDeg)??(le-1)*15,xe=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[le])??0,ve=((e==null?void 0:e.planePhaseMap)&&e.planePhaseMap[le])??0,ye=(ue+xe)%360*(Math.PI/180),ge=(ne+ve)%360*(Math.PI/180),Ce=Math.sqrt(b/Math.pow(z,3)),A=(J.true_anomaly||J.idx*45||0)*(Math.PI/180)+ge+Ce*n,E=(J.inc||87)*(Math.PI/180),$=L*(Math.cos(ye)*Math.cos(A)-Math.sin(ye)*Math.sin(A)*Math.cos(E)),ee=L*(Math.sin(ye)*Math.cos(A)+Math.cos(ye)*Math.sin(A)*Math.cos(E)),oe=L*(Math.sin(A)*Math.sin(E)),se=z*(Math.cos(ye)*Math.cos(A)-Math.sin(ye)*Math.sin(A)*Math.cos(E)),Fe=z*(Math.sin(ye)*Math.cos(A)+Math.cos(ye)*Math.sin(A)*Math.cos(E)),ke=z*(Math.sin(A)*Math.sin(E)),de=new F($,oe,ee),Me=new F(se,ke,Fe);if(M[J.id]=de,p.current[J.id]=de,Lc(J,n),V[le]||(V[le]=[]),V[le].push({sat:J,pos:de,posKm:Me,isOffline:ce,isHighLatency:fe,uAngle:A}),e.showSatellites){const et=ce?Q:fe?W:R,Oe=new jt(U,et);if(Oe.position.copy(de),v.add(Oe),l.current.set(Oe,J),e.satGlow){const Ie=ce?e.offlineSatColor:fe?e.highLatencySatColor:e.satColor,Ee=new Rc({map:Jb(Ie||"#00f0ff"),color:16777215,transparent:!0,opacity:.9,blending:Xd}),Te=new fh(Ee);Te.scale.set(1.1*e.satSize,1.1*e.satSize,1),Te.position.copy(de),v.add(Te)}}if(e.showLabels){const et=J.id===r,Oe=et?`${J.id} [Фокус]`:ce?`${J.id} [ОТКАЗ]`:fe?`${J.id} [! Задержка]`:J.id,Ie=ce?e.offlineSatColor:et?"#00f0ff":fe?e.highLatencySatColor:e.satColor,Ee=mg(Oe,"#ffffff",Ie||"#00f0ff");Ee.position.set(de.x,de.y+.38,de.z),_.add(Ee)}if(r===J.id){const et=L-T,Oe=et*Math.tan(35*Math.PI/180),Ie=new sc(Oe,et,32,1,!0),Ee=new jn({color:ce?e.offlineSatColor:e.fovConeColor||e.satColor,transparent:!0,opacity:.35,side:vn,depthWrite:!1}),Te=new jt(Ie,Ee),P=new F(0,0,0).sub(de).normalize(),ie=de.clone().add(P.clone().multiplyScalar(et/2));Te.position.copy(ie),Te.lookAt(0,0,0),Te.rotateX(Math.PI/2),x.add(Te);const Le=new oc(Oe*.96,Oe,48),N=new jn({color:ce?e.offlineSatColor:e.fovConeColor||e.satColor,side:vn,transparent:!0,opacity:.8}),pe=new jt(Le,N),X=de.clone().normalize().multiplyScalar(T*1.002);pe.position.copy(X),pe.lookAt(0,0,0),x.add(pe)}if(e.showCoverageHeatmap){const Oe=(L-T)*Math.tan(35*Math.PI/180),Ie=new hh(Oe,32),Ee=new jn({color:ce?e.offlineSatColor:e.fovConeColor||"#00ff88",side:vn,transparent:!0,opacity:ce?.15:.22,depthWrite:!1}),Te=new jt(Ie,Ee),P=de.clone().normalize().multiplyScalar(T*1.002);Te.position.copy(P),Te.lookAt(0,0,0),x.add(Te);const ie=new oc(Oe*.97,Oe,32),Le=new jn({color:ce?e.offlineSatColor:e.fovConeColor||"#00ff88",side:vn,transparent:!0,opacity:ce?.35:.65}),N=new jt(ie,Le);N.position.copy(P.clone().multiplyScalar(1.0005)),N.lookAt(0,0,0),x.add(N)}}),e.showOrbits&&Object.keys(V).forEach(J=>{var He,A;const le=parseInt(J),ce=(He=V[le][0])==null?void 0:He.sat;if(!ce)return;const fe=ce.altitude||550,Re=T+fe/1e3*1.2,z=((A=G[le])==null?void 0:A.raanDeg)??ce.raan??(le-1)*60,L=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[le])??0,ue=(z+L)%360*(Math.PI/180),ne=(ce.inc||87)*(Math.PI/180),xe=[],ve=128;for(let E=0;E<=ve;E++){const $=E/ve*Math.PI*2,ee=Re*(Math.cos(ue)*Math.cos($)-Math.sin(ue)*Math.sin($)*Math.cos(ne)),oe=Re*(Math.sin(ue)*Math.cos($)+Math.cos(ue)*Math.sin($)*Math.cos(ne)),se=Re*(Math.sin($)*Math.sin(ne));xe.push(new F(ee,se,oe))}const ye=new Nt().setFromPoints(xe),ge=new gs({color:e.orbitColor||"#1473e6",transparent:!0,opacity:e.orbitOpacity}),Ce=new zb(ye,ge);g.add(Ce)}),Object.keys(V).forEach(J=>{V[parseInt(J)].sort((le,ce)=>le.uAngle-ce.uAngle)});const k={},I=new jn({color:e.gatewayColor||"#00d084"}),O=6.371,j=6.371*(6356.752/6378.137),te=1-j*j/(O*O);if(t.gateways.forEach(J=>{const le=J.lat*Math.PI/180,ce=J.lon*Math.PI/180,fe=O/Math.sqrt(1-te*Math.sin(le)*Math.sin(le)),Re=fe*Math.cos(le)*Math.cos(ce),z=fe*Math.cos(le)*Math.sin(ce),L=fe*(1-te)*Math.sin(le),ue=new F(Re,L,z);if(k[J.id]=ue,e.showGateways){const ne=new sc(.24,.48,6),xe=new jt(ne,I);xe.position.copy(ue),xe.lookAt(0,0,0),xe.rotateX(Math.PI/2),y.add(xe)}if(e.showLabels){const ne=mg(J.id,"#ffffff",e.gatewayColor||"#00d084");ne.position.set(ue.x*1.05,ue.y*1.05+.25,ue.z*1.05),_.add(ne)}}),e.showISL){const J=Object.keys(V).map(Number).sort((le,ce)=>le-ce);J.forEach(le=>{const ce=V[le];for(let fe=0;fe<ce.length;fe++){const Re=ce[fe],z=ce[(fe+1)%ce.length],L=Re.isOffline||z.isOffline,ue=Re.isHighLatency||z.isHighLatency,ne=!!e.showTrafficLoad,xe=Math.min(99,Math.max(12,Math.round(35+Math.sin(n*.08+le*1.5)*40+(ue?35:0)))),ve=L?e.offlineSatColor:ne?xe>80?"#ef4444":xe>55?"#f59e0b":"#38bdf8":ue?e.highLatencySatColor:e.islColor||"#00ff88",ye=Wu(Re.pos,z.pos,16),ge=new Nt().setFromPoints(ye),Ce=new gs({color:ve,transparent:!0,opacity:L?.25:ne?.9:ue?.85:.65}),He=new Co(ge,Ce);if(m.add(He),e.showDistances!==!1){const A=Math.round(Re.posKm.distanceTo(z.posKm)),E=new F().addVectors(Re.pos,z.pos).multiplyScalar(.508),$=Re.sat.id===r||z.sat.id===r,ee=ne?`${A} км | ${xe}%`:`${A} км`,oe=al(ee,$||xe>80);oe.position.copy(E),_.add(oe)}}});for(let le=0;le<J.length;le++){const ce=J[le],fe=J[(le+1)%J.length],Re=V[ce],z=V[fe];Re.forEach(L=>{let ue=1/0,ne=null,xe=null,ve=!1,ye=!1;if(z.forEach(ge=>{const Ce=L.pos.distanceTo(ge.pos);Ce<ue&&(ue=Ce,ne=ge.pos,xe=ge.posKm,ve=ge.isOffline,ye=ge.isHighLatency)}),ne&&xe&&ue<8.5){const ge=L.isOffline||ve,Ce=L.isHighLatency||ye,He=!!e.showTrafficLoad,A=Math.min(99,Math.max(15,Math.round(42+Math.cos(n*.06+le*2.1)*38+(Ce?30:0)))),E=ge?e.offlineSatColor:He?A>80?"#ef4444":A>55?"#f59e0b":"#38bdf8":Ce?e.highLatencySatColor:e.islColor||"#1473e6",$=Wu(L.pos,ne,16),ee=new Nt().setFromPoints($),oe=new gs({color:E,transparent:!0,opacity:ge?.25:He?.9:Ce?.75:.5}),se=new Co(ee,oe);if(m.add(se),e.showDistances!==!1){const Fe=Math.round(L.posKm.distanceTo(xe)),ke=new F().addVectors(L.pos,ne).multiplyScalar(.508),de=L.sat.id===r,Me=He?`${Fe} км | ${A}%`:`${Fe} км`,Be=al(Me,de||A>80);Be.position.copy(ke),_.add(Be)}}})}}if(e.showSatLinks){const J=t.routes_sample||[],le=new Set,ce=((re=(B=t.raw_scenario)==null?void 0:B.environment)==null?void 0:re.altitude_km)??550;J.forEach(fe=>{const Re=fe.path||[],z=Re.some(L=>D.has(L));if(Re.length>=2)for(let L=0;L<Re.length-1;L++){const ue=Re[L],ne=Re[L+1],xe=[ue,ne].sort().join("--");le.add(xe);const ve=k[ue]||M[ue],ye=k[ne]||M[ne],ge=!!(k[ue]||k[ne]);if(ve&&ye){const Ce=ge?[ve,ye]:Wu(ve,ye,20),He=new Nt().setFromPoints(Ce),A=new gs({color:z?e.offlineSatColor:ge?e.groundLinkColor||"#f59e0b":e.islColor||"#00f0ff",transparent:!0,opacity:z?.9:ge?.95:.85}),E=new Co(He,A);if(f.add(E),ge&&e.showDistances!==!1){const $=k[ue]||k[ne],ee=k[ue]?ye:ve,oe=gg($,ee,ce),se=new F().addVectors(ve,ye).multiplyScalar(.51),Fe=al(`${oe} км`,!0);Fe.position.copy(se),_.add(Fe)}}}}),Object.keys(k).forEach(fe=>{const Re=k[fe];Object.values(M).map(L=>({pos:L,dist:Re.distanceTo(L)})).sort((L,ue)=>L.dist-ue.dist).slice(0,2).forEach(L=>{const ue=new Nt().setFromPoints([Re,L.pos]),ne=new gs({color:e.groundLinkColor||"#f59e0b",transparent:!0,opacity:.6}),xe=new Co(ue,ne);if(f.add(xe),e.showDistances!==!1){const ve=gg(Re,L.pos,ce),ye=new F().addVectors(Re,L.pos).multiplyScalar(.51),ge=al(`${ve} км`,!0);ge.position.copy(ye),_.add(ge)}})})}},[t,e,n,i,r]),c.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};function mg(t,e,n){const i=document.createElement("canvas");i.width=160,i.height=48;const r=i.getContext("2d");r.fillStyle=n,r.beginPath(),r.roundRect(8,8,144,32,6),r.fill(),r.strokeStyle="#ffffff",r.lineWidth=1.5,r.stroke(),r.fillStyle=e,r.font="bold 15px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(t,80,24);const s=new Pc(i),o=new Rc({map:s,transparent:!0,depthTest:!1}),a=new fh(o);return a.scale.set(1.2,.38,1),a}function al(t,e=!1){const n=document.createElement("canvas");n.width=130,n.height=36;const i=n.getContext("2d");i.fillStyle=e?"rgba(0, 240, 255, 0.95)":"rgba(15, 23, 38, 0.85)",i.beginPath(),i.roundRect(4,4,122,28,6),i.fill(),i.strokeStyle=e?"#ffffff":"#1473e6",i.lineWidth=1.5,i.stroke(),i.fillStyle=e?"#000000":"#00f0ff",i.font="bold 12px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,65,18);const r=new Pc(n),s=new Rc({map:r,transparent:!0,depthTest:!1}),o=new fh(s);return o.scale.set(.85,.24,1),o}function gg(t,e,n=550){const r=6371+n,s=Math.max(-1,Math.min(1,t.clone().normalize().dot(e.clone().normalize()))),o=r*r+6371*6371-2*r*6371*s;return Math.round(Math.sqrt(Math.max(0,o)))}function Jb(t){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=new Ze(t),r=Math.round(i.r*255),s=Math.round(i.g*255),o=Math.round(i.b*255),a=n.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,`rgba(${r}, ${s}, ${o}, 1.0)`),a.addColorStop(.4,`rgba(${r}, ${s}, ${o}, 0.5)`),a.addColorStop(1,`rgba(${r}, ${s}, ${o}, 0)`),n.fillStyle=a,n.fillRect(0,0,64,64),new Pc(e)}function Wu(t,e,n=16){const i=t.clone().normalize(),r=e.clone().normalize(),s=t.length(),o=e.length(),a=i.angleTo(r);if(a<.001)return[t,e];const l=Math.sin(a),u=[];for(let h=0;h<=n;h++){const p=h/n,d=Math.sin((1-p)*a)/l,g=Math.sin(p*a)/l,v=new F().addScaledVector(i,d).addScaledVector(r,g).normalize(),y=s*(1-p)+o*p,m=Math.sin(p*Math.PI)*(a*.3),f=y+m;u.push(v.multiplyScalar(f))}return u}function Qb(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,1024);n.addColorStop(0,"#103056"),n.addColorStop(.5,"#19497c"),n.addColorStop(1,"#103056"),e.fillStyle=n,e.fillRect(0,0,2048,1024);const i=(o,a)=>{const l=(a+180)/360*2048,u=(90-o)/180*1024;return[l,u]},r=(o,a="#2a542a",l="#3e753e")=>{if(o.length<3)return;e.beginPath();const[u,h]=i(o[0][0],o[0][1]);e.moveTo(u,h);for(let p=1;p<o.length;p++){const[d,g]=i(o[p][0],o[p][1]);e.lineTo(d,g)}e.closePath(),e.fillStyle=a,e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke()};r([[70,10],[72,40],[70,70],[75,100],[70,140],[65,170],[60,175],[50,140],[40,120],[35,100],[25,120],[10,105],[10,75],[25,60],[30,50],[35,35],[40,30],[36,5],[38,-9],[44,-9],[55,10],[60,5],[62,20],[70,10]],"#2a542a","#3e753e"),r([[70,-170],[75,-120],[70,-80],[60,-60],[45,-65],[30,-80],[25,-90],[15,-90],[15,-105],[30,-115],[40,-125],[60,-165],[70,-170]],"#2a542a","#3e753e"),r([[10,-75],[0,-50],[-10,-38],[-25,-45],[-45,-65],[-55,-70],[-35,-75],[0,-80],[10,-75]],"#244824","#386638"),r([[35,-5],[37,10],[32,32],[10,50],[-10,40],[-34,20],[-34,18],[-10,12],[5,2],[5,-15],[15,-17],[35,-5]],"#544c2a","#786d3e"),r([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]],"#54482a","#78683e"),e.strokeStyle="#25588c",e.lineWidth=1;for(let o=0;o<=2048;o+=128)e.beginPath(),e.moveTo(o,0),e.lineTo(o,1024),e.stroke();for(let o=0;o<=1024;o+=64)e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.stroke();return[[55.75,37.61],[59.93,30.31],[68.97,33.08],[65.14,57.22],[51.5,-.12],[40.71,-74],[35.67,139.65],[39.9,116.4]].forEach(([o,a])=>{const[l,u]=i(o,a),h=e.createRadialGradient(l,u,0,l,u,8);h.addColorStop(0,"rgba(0, 255, 136, 0.9)"),h.addColorStop(.5,"rgba(20, 115, 230, 0.4)"),h.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=h,e.beginPath(),e.arc(l,u,8,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l,u,2,0,Math.PI*2),e.fill()}),t}const Tl=({title:t,isOpen:e,onClose:n,initialPos:i={x:100,y:60,width:720,height:480},zIndex:r,onFocus:s,children:o})=>{const a=()=>{const S=typeof window<"u"?window.innerWidth:1200,T=typeof window<"u"?window.innerHeight:800,b=S<=768,w=Math.min(b?S-16:S-32,i.width),D=Math.min(b?T-70:T-80,i.height),V=b?Math.max(8,(S-w)/2):Math.min(Math.max(8,i.x),S-w-8),M=b?Math.max(50,(T-D)/2):Math.min(Math.max(50,i.y),T-D-8);return{x:V,y:M,width:w,height:D}},[l,u]=be.useState(()=>{const S=a();return{x:S.x,y:S.y,width:S.width,height:S.height,isMaximized:!1,isMinimized:!1,zIndex:r}}),h=be.useRef(!1),p=be.useRef(!1),d=be.useRef({x:0,y:0}),g=be.useRef({w:0,h:0,x:0,y:0});if(be.useEffect(()=>{u(S=>({...S,zIndex:r}))},[r]),be.useEffect(()=>{const S=()=>{u(T=>{const b=window.innerWidth,w=window.innerHeight,D=Math.min(T.width,b-16),V=Math.min(T.height,w-60),M=Math.min(Math.max(4,T.x),Math.max(4,b-D-4)),R=Math.min(Math.max(48,T.y),Math.max(48,w-V-4));return{...T,x:M,y:R,width:D,height:V}})};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),!e)return null;const v=(S,T)=>{if(s(),l.isMaximized)return;h.current=!0,d.current={x:S-l.x,y:T-l.y};const b=(M,R)=>{if(!h.current)return;const W=window.innerWidth,Q=window.innerHeight,U=Math.min(Math.max(4,M-d.current.x),W-l.width-4),K=Math.min(Math.max(48,R-d.current.y),Q-l.height-4);u(G=>({...G,x:U,y:K}))},w=M=>b(M.clientX,M.clientY),D=M=>{M.touches[0]&&b(M.touches[0].clientX,M.touches[0].clientY)},V=()=>{h.current=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",V),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",V)};window.addEventListener("mousemove",w),window.addEventListener("mouseup",V),window.addEventListener("touchmove",D,{passive:!0}),window.addEventListener("touchend",V)},y=S=>v(S.clientX,S.clientY),m=S=>{S.touches[0]&&v(S.touches[0].clientX,S.touches[0].clientY)},f=S=>{if(S.stopPropagation(),s(),l.isMaximized)return;p.current=!0,g.current={w:l.width,h:l.height,x:S.clientX,y:S.clientY};const T=w=>{if(!p.current)return;const D=w.clientX-g.current.x,V=w.clientY-g.current.y;u(M=>({...M,width:Math.max(380,g.current.w+D),height:Math.max(240,g.current.h+V)}))},b=()=>{p.current=!1,window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",b)};window.addEventListener("mousemove",T),window.addEventListener("mouseup",b)},_=()=>{u(S=>({...S,isMaximized:!S.isMaximized}))},x=l.isMaximized?{position:"fixed",top:"44px",left:0,width:"100vw",height:"calc(100vh - 44px)",zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}:{position:"fixed",left:`${l.x}px`,top:`${l.y}px`,width:`${l.width}px`,height:`${l.height}px`,zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",borderRadius:"6px",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)",overflow:"hidden"};return c.jsxs("div",{style:x,onClick:s,children:[c.jsxs("div",{onMouseDown:y,onTouchStart:m,style:{height:"36px",backgroundColor:"#1f1f1f",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",cursor:l.isMaximized?"default":"move",userSelect:"none"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:600,fontSize:"13px",color:"#e0e0e0"},children:[c.jsx(i1,{size:14,style:{color:"#888"}}),c.jsx("span",{children:t})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx("button",{onClick:S=>{S.stopPropagation(),u(T=>({...T,isMinimized:!T.isMinimized}))},style:Xu,title:"Свернуть",children:c.jsx(n1,{size:12})}),c.jsx("button",{onClick:S=>{S.stopPropagation(),_()},style:Xu,title:l.isMaximized?"Восстановить":"Развернуть",children:c.jsx(m1,{size:12})}),c.jsx("button",{onClick:S=>{S.stopPropagation(),n()},style:Xu,title:"Закрыть",children:c.jsx(rh,{size:14})})]})]}),c.jsx("div",{style:{flex:1,overflow:"auto",position:"relative",backgroundColor:"#262626",color:"#e0e0e0"},children:o}),!l.isMaximized&&c.jsx("div",{onMouseDown:f,style:{position:"absolute",bottom:0,right:0,width:"16px",height:"16px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, #4a4a4a 50%)"}})]})},Xu={backgroundColor:"transparent",color:"#a0a0a0",border:"none",borderRadius:"3px",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},eT=({scenario:t,outages:e,onApplyRecommendation:n})=>{var p,d;const[i,r]=be.useState(new Set),s=e.length>0,o=((p=t==null?void 0:t.simulation_result)==null?void 0:p.overall_availability)??1,a=o<.9||((d=t==null?void 0:t.simulation_result)==null?void 0:d.all_targets_met)===!1,u=[{id:"reroute_isl",title:"1. Динамическая перемаршрутизация ISL графа",desc:"Перенаправить поток данных в обход отказавших аппаратов через смежную орбитную плоскость P2 (узлы S09, S10).",btnText:"Применить перемаршрутизацию ISL",icon:c.jsx(ta,{size:15,style:{color:"#ffaa00"}})},{id:"phase_shift",title:"2. Фазовый сдвиг плоскости (+15° Phase)",desc:"Сдвинуть фазирование соседней плоскости для ликвидации мертвой зоны над северными пунктами Мурманск и Печора.",btnText:"Выполнить фазовый сдвиг (+15°)",icon:c.jsx(c1,{size:15,style:{color:"#1473e6"}})},{id:"raan_adjust",title:"3. Корректировка RAAN плоскости (+10°)",desc:"Повернуть орбитальную плоскость вокруг оси Земли для компенсации сектора зоны покрытия.",btnText:"Скооректировать RAAN (+10°)",icon:c.jsx(Ox,{size:15,style:{color:"#00ff88"}})}].filter(g=>!i.has(g.id)),h=(g,v)=>{v.stopPropagation(),r(y=>new Set(y).add(g)),n(g)};return!a&&!s||u.length===0?c.jsxs("div",{style:xg,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88"},children:[c.jsx(Os,{size:16}),c.jsx("span",{style:{fontWeight:600},children:!a&&!s?`Система функционирует штатно (SLA ${(o*100).toFixed(1)}% ≥ 90%)`:"Все рекомендации применены! Система оптимизирована."})]}),c.jsx("p",{style:{fontSize:"11px",color:"#aaa",margin:"4px 0 0 0"},children:!a&&!s?"Доступность сети выдержана на высоком уровне. Корректирующие рекомендации не требуются.":"Активные сбои ликвидированы, маршруты перестроены."})]}):c.jsxs("div",{style:xg,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#ff3b30"},children:[c.jsx(Jl,{size:18}),c.jsx("span",{style:{fontWeight:"bold",fontSize:"13px"},children:"Аварийная Ситуация: Рекомендации Регламента"})]}),c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px"},children:"Нажмите на предложение, чтобы применить и убрать"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"},children:u.map(g=>c.jsxs("div",{onClick:v=>h(g.id,v),style:{...tT,cursor:"pointer",transition:"all 0.2s ease",borderLeft:"3px solid #1473e6"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.icon,c.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:g.title})]}),c.jsx("span",{style:{fontSize:"10px",color:"#00ff88",opacity:.8},children:"[Нажмите, чтобы применить]"})]}),c.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:"4px 0 0 0",lineHeight:"1.4"},children:g.desc}),c.jsxs("button",{onClick:v=>h(g.id,v),style:nT,children:[c.jsx("span",{children:g.btnText}),c.jsx(Ux,{size:12})]})]},g.id))})]})},xg={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",marginTop:"12px"},tT={backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},nT={marginTop:"4px",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"5px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",alignSelf:"flex-start"},iT=({scenario:t,outages:e=[],currentTime:n=0,onApplyRecommendation:i,onExportResultsJson:r})=>{var G;const[s,o]=be.useState("metrics"),[a,l]=be.useState(new Set),[u,h]=be.useState("soyuz");if(!t)return c.jsx("div",{style:{padding:"20px",color:"#888"},children:"Загрузка данных математического моделирования..."});const p=new Set(e.map(k=>k.satellite_id)),d=t.satellites.map(k=>Lc(k,n)),g=d.length,v=d.filter(k=>p.has(k.id)).length,y=g-v,m=d.filter(k=>!p.has(k.id)&&!k.is_in_sunlight).length,f=d.reduce((k,I)=>k+(I.fuel_kg??10),0)/(g||1),_=d.reduce((k,I)=>k+(I.fuel_pct??100),0)/(g||1),x=d.reduce((k,I)=>k+(I.temperature_c??38),0)/(g||1),S=Math.max(...d.map(k=>k.temperature_c??38)),T=d.reduce((k,I)=>k+(I.battery_pct??100),0)/(g||1),b=(d.reduce((k,I)=>k+(I.solar_power_w??0),0)/1e3).toFixed(1),w=t.simulation_result,V=(w?w.overall_availability*100:99.98).toFixed(2),M=(38.4+v*4.2).toFixed(1),R=((w==null?void 0:w.overall_availability)??1)<.9||(w==null?void 0:w.all_targets_met)===!1,W=(w==null?void 0:w.client_summaries)||[],Q=((G=w==null?void 0:w.vulnerability)==null?void 0:G.top_used_satellites)||[],U=w==null?void 0:w.economic_analysis,K=k=>{const I=Math.floor(k/3600),O=Math.floor(k%3600/60),j=Math.floor(k%60);return`${String(I).padStart(2,"0")}:${String(O).padStart(2,"0")}:${String(j).padStart(2,"0")}`};return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",border:"1px solid #1473e650",borderRadius:"6px",padding:"8px 12px",fontSize:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600},children:[c.jsx(ca,{size:15,className:"animate-spin"}),c.jsxs("span",{children:["Симуляция Real-Time: T = +",K(n)]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[c.jsx("div",{style:{display:"flex",gap:"12px",fontSize:"11px",color:"#ccc"},children:c.jsxs("span",{children:["Отказов КА: ",c.jsx("b",{style:{color:v>0?"#ff3b30":"#888"},children:v})]})}),r&&c.jsxs("button",{onClick:r,style:{backgroundColor:"#20242b",color:"#38bdf8",border:"1px solid #333943",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Скачать полные результаты симуляции в JSON",children:[c.jsx(nh,{size:13}),c.jsx("span",{children:"Скачать Итоговый JSON"})]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"6px",borderBottom:"1px solid #383838",paddingBottom:"8px",flexWrap:"wrap"},children:[c.jsxs("button",{onClick:()=>o("metrics"),style:vr(s==="metrics"),children:[c.jsx(Hd,{size:14}),c.jsx("span",{children:"Сводные Метрики"})]}),c.jsxs("button",{onClick:()=>o("clients"),style:vr(s==="clients"),children:[c.jsx(El,{size:14}),c.jsxs("span",{children:["SLA по Пунктам (",W.length||3,")"]})]}),c.jsxs("button",{onClick:()=>o("gantt"),style:vr(s==="gantt"),children:[c.jsx(Sl,{size:14}),c.jsx("span",{children:"Диаграмма Гантта"})]}),c.jsxs("button",{onClick:()=>o("coverage"),style:vr(s==="coverage"),children:[c.jsx(Ip,{size:14}),c.jsx("span",{children:"Покрытие Территории"})]}),c.jsxs("button",{onClick:()=>o("vulnerability"),style:vr(s==="vulnerability"),children:[c.jsx(Nx,{size:14}),c.jsx("span",{children:"Уязвимость (Критические КА)"})]}),c.jsxs("button",{onClick:()=>o("routes"),style:vr(s==="routes"),children:[c.jsx(lu,{size:14}),c.jsx("span",{children:"Маршруты & Хопы"})]}),c.jsxs("button",{onClick:()=>o("economic"),style:vr(s==="economic"),children:[c.jsx(ms,{size:14}),c.jsx("span",{children:"Экономика & Топливо"})]})]}),s==="metrics"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(El,{color:R?"#ff3b30":"#00ff88",size:20}),title:"Общая Доступность (SLA)",value:`${V}%`,sub:R?"[ВНИМАНИЕ] Нарушение нормативного SLA (< 90%)":"Все целевые SLA выдержаны"}),c.jsx(Cn,{icon:c.jsx(ta,{color:"#1473e6",size:20}),title:"Задержка передачи (P95)",value:`${M} мс`,sub:v>0?`+${(v*4.2).toFixed(1)}мс за счет обхода отказов`:"Норматив < 50мс выдержан"}),c.jsx(Cn,{icon:c.jsx(lu,{color:"#ffaa00",size:20}),title:"Состояние группировки",value:`${y} / ${g}`,sub:v>0?`Отказов КА: ${v}`:"Штатный режим всех КА"}),c.jsx(Cn,{icon:c.jsx(Hd,{color:"#1473e6",size:20}),title:"Солнечная генерация",value:`${b} кВт`,sub:`Батареи: ${T.toFixed(0)}% (Заряд/Разряд)`})]}),c.jsxs("div",{style:ll,children:[c.jsx("h4",{style:_g,children:"Динамическое распределение причин сбоев доступности (Real-Time Outage Breakdown)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"12px",marginTop:"8px"},children:[c.jsxs("div",{style:$u,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Затмение & Тень Земли"}),c.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#c084fc"},children:[(m/(g||1)*100).toFixed(1),"%"]}),c.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[m," КА на аккумуляторах"]})]}),c.jsxs("div",{style:$u,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Аварийные отказы узлов"}),c.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:v>0?"#ff3b30":"#00ff88"},children:[(v/(g||1)*100).toFixed(1),"%"]}),c.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[v," КА отключено"]})]}),c.jsxs("div",{style:$u,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Доступность шлюзов"}),c.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#00ff88"},children:"100.0%"}),c.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Наземные станции в норме"})]})]})]}),c.jsx(eT,{scenario:t,outages:e,onApplyRecommendation:i||(()=>{})})]}),s==="clients"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Детализированные показания доступности по наземным объектам в реальном времени"}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Объект / Пул"}),c.jsx("th",{style:Ft,children:"Видимость"}),c.jsx("th",{style:Ft,children:"Доступность (SLA)"}),c.jsx("th",{style:Ft,children:"Цель (90%)"}),c.jsx("th",{style:Ft,children:"Макс. отказ (сек)"}),c.jsx("th",{style:Ft,children:"Ср. хопов"}),c.jsx("th",{style:Ft,children:"Ср. дистанция"})]})}),c.jsx("tbody",{children:(W.length>0?W:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"Печора",visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск",visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350}]).map((k,I)=>{const O=k.availability_ratio*100,j=k.target_met??O>=90;return c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.name||k.id})}),c.jsxs("td",{style:zt,children:[(k.visibility_ratio*100).toFixed(1),"%"]}),c.jsx("td",{style:zt,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${O}%`,backgroundColor:j?"#00ff88":"#ff3b30"}})}),c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[O.toFixed(1),"%"]})]})}),c.jsx("td",{style:zt,children:j?c.jsxs("span",{style:{color:"#00ff88",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Os,{size:13})," СОБЛЮДЕН"]}):c.jsxs("span",{style:{color:"#ff3b30",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(y1,{size:13})," НАРУШЕН"]})}),c.jsx("td",{style:zt,children:k.max_outage_s!==void 0?`${k.max_outage_s} с`:"0 с"}),c.jsx("td",{style:zt,children:k.avg_hops!==null&&k.avg_hops!==void 0?Number(k.avg_hops).toFixed(1):"—"}),c.jsx("td",{style:zt,children:k.avg_distance_km?`${k.avg_distance_km} км`:"—"})]},I)})})]})})]}),s==="gantt"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:c.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:["Диаграмма Гантта: Сеансы связи и окна затмения (Курсор T = ",K(n),")"]})}),c.jsxs("div",{style:ll,children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#777",marginBottom:"8px",paddingLeft:"142px"},children:[c.jsx("span",{children:"00:00"}),c.jsx("span",{children:"06:00"}),c.jsx("span",{children:"12:00"}),c.jsx("span",{children:"18:00"}),c.jsx("span",{children:"24:00"})]}),["S01 (Плоскость 1)","S02 (Плоскость 1)","S09 (Плоскость 2)","S10 (Плоскость 2)","S17 (Плоскость 3)","S18 (Плоскость 3)"].map((k,I)=>{const O=k.split(" ")[0],j=p.has(O),te=d.find(De=>De.id===O);te&&te.is_in_sunlight;const ae=n%86400/86400*100;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[c.jsxs("span",{style:{width:"130px",fontSize:"11px",color:j?"#ff3b30":"#aaa",fontFamily:"monospace",fontWeight:600},children:[k," ",j?"[ОТКАЗ]":"[ОК]"]}),c.jsxs("div",{style:{flex:1,height:"24px",backgroundColor:"#121212",border:"1px solid #2a2a2a",borderRadius:"4px",position:"relative",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",left:`${I*15%40}%`,width:"38%",height:"100%",backgroundColor:j?"#ff3b3040":"#1473e690",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"8px",fontSize:"10px",color:"#fff",fontWeight:600},children:j?"Аварийный отказ":"Сеанс связи"}),c.jsx("div",{style:{position:"absolute",left:`${I*15%40+38}%`,width:"20%",height:"100%",backgroundColor:"#2a324b60",borderLeft:"1px dashed #3a425b",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"6px",fontSize:"10px",color:"#94a3b8"},children:"Резерв"}),c.jsx("div",{style:{position:"absolute",left:`${ae}%`,top:0,bottom:0,width:"2px",backgroundColor:"#00ff88",boxShadow:"0 0 8px #00ff88",zIndex:10}})]})]},I)})]})]}),s==="coverage"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Покрытия Территории и Кратности Перекрытия (Territory Coverage Level)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(Ip,{color:"#00ff88",size:20}),title:"Глобальное Покрытие Земли",value:`${Math.min(99.4,y/(g||48)*98.6).toFixed(1)}%`,sub:"При мин. угле места ≥ 10.0°"}),c.jsx(Cn,{icon:c.jsx(El,{color:"#1473e6",size:20}),title:"Покрытие РФ & Арктики",value:`${Math.min(99.9,y/(g||48)*99.8).toFixed(1)}%`,sub:"Высокие широты (Северный Морской Путь)"}),c.jsx(Cn,{icon:c.jsx(ih,{color:"#ffaa00",size:20}),title:"Кратность Перекрытия",value:g>=48?"3.2x (3-кратное)":"1.1x (Одиночное)",sub:"Резервирование связности"}),c.jsx(Cn,{icon:c.jsx(ta,{color:"#00f0ff",size:20}),title:"Радиус пятна покрытия",value:"1 240 км",sub:"Площадь пятна ~4.83M км² на КА"})]}),c.jsxs("div",{style:ll,children:[c.jsx("h4",{style:_g,children:"Географическое распределение уровня покрытия по регионам"}),c.jsx("div",{style:{overflowX:"auto",marginTop:"10px"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Регион / Географическая зона"}),c.jsx("th",{style:Ft,children:"Широтный диапазон"}),c.jsx("th",{style:Ft,children:"Уровень покрытия (%)"}),c.jsx("th",{style:Ft,children:"Кратность (Redundancy)"}),c.jsx("th",{style:Ft,children:"Статус обслуживания"})]})}),c.jsx("tbody",{children:[{region:"Арктическая зона РФ & СМП",latRange:"60°N — 90°N",cov:Math.min(100,y/(g||48)*100).toFixed(1),red:"3.8x",status:"100% Доступно"},{region:"Центральная Россия & Европа",latRange:"45°N — 60°N",cov:Math.min(99.8,y/(g||48)*99.5).toFixed(1),red:"3.1x",status:"Штатное покрытие"},{region:"Сибирь & Дальний Восток",latRange:"50°N — 75°N",cov:Math.min(99.6,y/(g||48)*99.2).toFixed(1),red:"3.4x",status:"Штатное покрытие"},{region:"Экваториальная зона & Океаны",latRange:"30°S — 30°N",cov:Math.min(96.2,y/(g||48)*94.1).toFixed(1),red:"1.8x",status:"Базовое покрытие"}].map((k,I)=>c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.region})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontFamily:"monospace",color:"#aaa"},children:k.latRange})}),c.jsx("td",{style:zt,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${k.cov}%`,backgroundColor:parseFloat(k.cov)>=95?"#00ff88":"#ffaa00"}})}),c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[k.cov,"%"]})]})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#00f0ff",fontWeight:600},children:k.red})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#00ff88",backgroundColor:"#00ff8815",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:k.status})})]},I))})]})})]})]}),s==="vulnerability"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Уязвимости: Самые нагруженные узлы (Top-used Satellites)"}),c.jsx("div",{style:ll,children:Q.length>0?c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:Q.slice(0,9).map((k,I)=>{const O=p.has(k.satellite_id);return c.jsxs("div",{style:{padding:"8px 12px",backgroundColor:O?"#3b1212":"#121212",border:`1px solid ${O?"#ff3b30":"#333"}`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold",color:O?"#ff3b30":"#1473e6"},children:[k.satellite_id," ",O?"(ОТКАЗ)":""]}),c.jsxs("span",{style:{fontSize:"11px",color:"#aaa"},children:[k.route_appearances," маршрутов"]})]},I)})}):c.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"Запустите моделирование для расчета рейтинга загрузки узлов."})})]}),s==="routes"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{backgroundColor:"#161d28",border:"1px solid #1473e640",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#38bdf8",fontWeight:600,fontSize:"13px"},children:[c.jsx(lu,{size:16}),c.jsx("span",{children:"Балансировка Нагрузки Межспутниковых Линий (ISL Traffic Load & Bottlenecks)"})]}),c.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8"},children:["Суммарная емкость: ",c.jsx("b",{style:{color:"#00ff88"},children:"48.0 Гбит/с"})," | Задействовано: ",c.jsxs("b",{style:{color:"#38bdf8"},children:[(31.2+v*2.8).toFixed(1)," Гбит/с"]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #38bdf840",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#38bdf8",fontWeight:600},children:"🟦 Нормальная загрузка (ISL < 50%)"}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.max(1,g*2-v*3)," линий"]}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Задержка RTT < 25 мс, потерь нет"})]}),c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #f59e0b40",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#f59e0b",fontWeight:600},children:"🟧 Высокая нагрузка (ISL 50–85%)"}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.min(12,4+v*2)," линий"]}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Шлюзы: Мурманск, Новосибирск"})]}),c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #ef444440",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#ef4444",fontWeight:600},children:"🟥 Узкие места / Отказы (Bottlenecks)"}),c.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:v>0?`${v*2} перемаршрутизировано`:"0 (Заторов нет)"}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:v>0?"Авто-обход отказавших КА в 3D":"Резервирование 100%"})]})]})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Источник"}),c.jsx("th",{style:Ft,children:"Назначение"}),c.jsx("th",{style:Ft,children:"Последовательность узлов (Hop list)"}),c.jsx("th",{style:Ft,children:"Задержка"}),c.jsx("th",{style:Ft,children:"Статус"})]})}),c.jsx("tbody",{children:(t.routes_sample||[]).map((k,I)=>{const O=k.path.some(te=>p.has(te)),j=O?(k.latency_ms+18.5).toFixed(1):k.latency_ms;return c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#1473e6",fontWeight:600},children:k.src})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:k.dst})}),c.jsx("td",{style:zt,children:c.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:k.path.map((te,ae)=>{const De=p.has(te);return c.jsx("span",{style:{backgroundColor:De?"#ff3b3030":"#141414",border:`1px solid ${De?"#ff3b30":"#3d3d3d"}`,padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"11px",color:De?"#ff3b30":"#00ff88"},children:te},ae)})})}),c.jsxs("td",{style:zt,children:[j," мс"]}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{backgroundColor:O?"#ff3b3020":"#00ff8820",color:O?"#ff3b30":"#00ff88",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:O?"Перемаршрутизация":k.status})})]},I)})})]})})]}),s==="economic"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Экономический Расчет, Динамический Тепловой Режим и Запас Топлива (Real-Time Telemetry)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(ms,{color:"#00ff88",size:20}),title:"Капитальные затраты (CAPEX)",value:`$${(((U==null?void 0:U.total_capex_usd)||312e5)/1e6).toFixed(2)}M`,sub:`$650,000 / КА (${y} активных Аппаратов)`}),c.jsx(Cn,{icon:c.jsx(ms,{color:"#1473e6",size:20}),title:"Годовой OPEX",value:`$${(((U==null?void 0:U.annual_opex_usd)||216e4)/1e6).toFixed(2)}M/год`,sub:"$45,000 / КА в год"}),c.jsx(Cn,{icon:c.jsx(Vd,{color:S>=80?"#ff3b30":"#ffaa00",size:20}),title:"Средняя температура КА",value:`${x.toFixed(1)}°C`,sub:`Макс: ${S.toFixed(1)}°C (${m} КА в охлаждении)`}),c.jsx(Cn,{icon:c.jsx(Wd,{color:"#00f0ff",size:20}),title:"Запас топлива (Ксенон ЭРДУ)",value:`${f.toFixed(3)} кг (${_.toFixed(1)}%)`,sub:`Расход: 6 г/сутки на КА (Всего ${(y*.006).toFixed(3)} кг/сут)`})]}),c.jsxs("div",{style:{backgroundColor:"#141c28",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600,fontSize:"13px"},children:[c.jsx(ms,{size:16}),c.jsx("span",{children:"Калькулятор Выведения на Орбиту & Удельной Стоимости Трафика ($/Гбит/с)"})]}),c.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Выберите РКН для вывода группировки:"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[{id:"soyuz",name:"Союз-2.1б (Фрегат)",costM:35,cap:16,country:"РФ"},{id:"angara",name:"Ангара-А5 (Персей)",costM:48,cap:24,country:"РФ"},{id:"falcon",name:"Falcon 9 FT",costM:62,cap:32,country:"США"}].map(k=>c.jsxs("button",{onClick:()=>h(k.id),style:{backgroundColor:u===k.id?"#1473e630":"#12161f",border:`1px solid ${u===k.id?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",color:"#fff",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontWeight:600,fontSize:"12px",color:u===k.id?"#38bdf8":"#e2e8f0"},children:k.name}),c.jsx("span",{style:{fontSize:"10px",padding:"1px 4px",borderRadius:"2px",backgroundColor:"#333",color:"#aaa"},children:k.country})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:["Емкость: ",c.jsxs("b",{children:[k.cap," КА/пуск"]})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#00ff88",fontWeight:600},children:["Пуск: $",k.costM,"M"]})]},k.id))}),(()=>{const k=u==="soyuz"?16:u==="angara"?24:32,I=u==="soyuz"?35:u==="angara"?48:62,O=Math.ceil(g/k),j=O*I,te=g*.65,ae=te+j,De=Math.round(ae*1e6/(48*36));return c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"10px",marginTop:"4px"},children:[c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Число пусков РКН"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fff",marginTop:"2px"},children:[O," пуск",O>1?O>4?"ов":"а":""]}),c.jsxs("div",{style:{fontSize:"10px",color:"#38bdf8"},children:["по ",k," КА на ракете"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Затраты на пуски"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#00ff88",marginTop:"2px"},children:["$",j.toFixed(1),"M"]}),c.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["$",I,"M за 1 пуск"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Полный CAPEX (КА + Пуски)"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fbbf24",marginTop:"2px"},children:["$",ae.toFixed(1),"M"]}),c.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["КА: $",te.toFixed(1),"M"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Удельная стоимость трафика"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#38bdf8",marginTop:"2px"},children:["$",De]}),c.jsx("div",{style:{fontSize:"10px",color:"#aaa"},children:"/ Гбит/с в месяц"})]})]})})()]}),c.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600},children:[c.jsx(ms,{size:16}),c.jsx("span",{children:"Экономически Обоснованные Рекомендации по Изменению Состава КА"})]}),c.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:"Кликните по предложению для применения"})]}),R?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[[{id:1,title:"💰 [САМЫЙ ВЫГОДНЫЙ ВАРИАНТ] Перенастройка сетки ISL & Перефазирование орбит (+15°)",desc:"Затраты: $50,000 (микро-расход ксенонового топлива). Исключает сбои SLA 99.9% и дает чистую экономию $3,270,000 по сравнению с закупкой и запуском новых аппаратов.",actionText:"Применить перенастройку сетки (Экономия $3.27M)"},{id:2,title:"🌱 [БЕСПЛАТНАЯ ОПТИМИЗАЦИЯ ($0)] Программная балансировка терморежима КА",desc:"Затраты: $0 (программный перерасчет таблицы маршрутов). Снимает перегрев с узлов T ≥ 80°C, продлевает ресурс ЭРДУ ксенона на 1.8 года и экономит $450,000/год на ТО.",actionText:"Применить программную термо-балансировку ($0)"},{id:3,title:"🎯 [ОПТИМИЗАЦИЯ РЕСУРСА] Изъятие 2 дублирующих КА из плоскости P3",desc:"Анализ перекрытия показал 98.4% резервирования. Изъятие 2 аппаратов сбережет $1,300,000 CAPEX и $90,000/год OPEX без риска нарушения SLA.",actionText:"Применить оптимизацию CAPEX (+$1.39M)"}].filter(k=>!a.has(k.id)).map(k=>c.jsxs("div",{onClick:()=>{l(I=>new Set(I).add(k.id)),i&&i("phase_shift")},style:{backgroundColor:"#121212",border:"1px solid #333",borderLeft:"4px solid #00ff88",borderRadius:"4px",padding:"10px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:k.title}),c.jsx("span",{style:{fontSize:"10px",color:"#00ff88"},children:"[Нажмите, чтобы применить и убрать]"})]}),c.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:0},children:k.desc}),c.jsxs("button",{onClick:I=>{I.stopPropagation(),l(O=>new Set(O).add(k.id)),i&&i("phase_shift")},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"4px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",alignSelf:"flex-start",marginTop:"4px"},children:[c.jsx("span",{children:k.actionText}),c.jsx(Ux,{size:12})]})]},k.id)),c.jsxs("div",{style:{padding:"10px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Os,{size:14}),c.jsx("span",{children:"Все экономические рекомендации применены. Затраты и топливный баланс оптимизированы."})]})]}):c.jsxs("div",{style:{padding:"12px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Os,{size:16}),c.jsx("span",{children:"Нормативный SLA выдержан (≥ 90%). Корректировка состава КА и дополнительные рекомендации не требуются."})]})]})]})]})},Cn=({icon:t,title:e,value:n,sub:i})=>c.jsxs("div",{style:{backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[t,c.jsx("span",{style:{fontSize:"11px",color:"#888"},children:e})]}),c.jsx("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#ffffff"},children:n}),c.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:i})]}),vr=t=>({backgroundColor:t?"#1473e6":"#2a2a2a",color:t?"#ffffff":"#b0b0b0",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}),ll={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px"},_g={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},$u={backgroundColor:"#121212",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"4px"},Ft={padding:"8px 10px",borderBottom:"1px solid #383838"},zt={padding:"8px 10px"},sf="cosmo_configurator_last_config_v1",rT=()=>{try{const t=localStorage.getItem(sf);if(t)return JSON.parse(t)}catch(t){console.error("Failed to load saved config from localStorage",t)}return null},sT=({onApplyConfig:t,onExportJson:e})=>{const n=rT(),[i,r]=be.useState((n==null?void 0:n.altitude)??550),[s,o]=be.useState((n==null?void 0:n.inclination)??87),[a,l]=be.useState((n==null?void 0:n.planes)??6),[u,h]=be.useState((n==null?void 0:n.satsPerPlane)??8),[p,d]=be.useState((n==null?void 0:n.islType)??"grid-4"),g=10;be.useEffect(()=>{try{const y={altitude:i,inclination:s,planes:a,satsPerPlane:u,islType:p,minElevation:g};localStorage.setItem(sf,JSON.stringify(y))}catch(y){console.error("Failed to save config to localStorage",y)}},[i,s,a,u,p]);const v=()=>{const y={altitude:i,inclination:s,planes:a,satsPerPlane:u,islType:p,minElevation:g};try{localStorage.setItem(sf,JSON.stringify(y))}catch(m){console.error(m)}t(y)};return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Zl,{size:18,style:{color:"#1473e6"}}),c.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Конфигуратор Параметров Спутниковой Группировки"})]}),e&&c.jsxs("button",{onClick:e,style:{backgroundColor:"#2a2a2a",color:"#00ff88",border:"1px solid #444",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(nh,{size:13}),c.jsx("span",{children:"Экспорт в JSON"})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[c.jsxs("div",{style:vg,children:[c.jsx("h4",{style:yg,children:"Орбитальная Геометрия (Walker Delta)"}),c.jsxs("div",{style:hs,children:[c.jsxs("label",{style:ps,children:["Высота орбиты (км): ",c.jsxs("b",{children:[i," км"]})]}),c.jsx("input",{type:"range",min:"400",max:"1500",step:"50",value:i,onChange:y=>r(parseInt(y.target.value)),style:vo})]}),c.jsxs("div",{style:hs,children:[c.jsxs("label",{style:ps,children:["Наклонение орбиты (°): ",c.jsxs("b",{children:[s,"°"]})]}),c.jsx("input",{type:"range",min:"30",max:"98",step:"0.5",value:s,onChange:y=>o(parseFloat(y.target.value)),style:vo})]}),c.jsxs("div",{style:hs,children:[c.jsxs("label",{style:ps,children:["Количество плоскостей: ",c.jsx("b",{children:a})]}),c.jsx("input",{type:"range",min:"2",max:"12",step:"1",value:a,onChange:y=>l(parseInt(y.target.value)),style:vo})]}),c.jsxs("div",{style:hs,children:[c.jsxs("label",{style:ps,children:["Спутников в плоскости: ",c.jsx("b",{children:u})," (Всего: ",a*u,")"]}),c.jsx("input",{type:"range",min:"4",max:"16",step:"1",value:u,onChange:y=>h(parseInt(y.target.value)),style:vo})]})]}),c.jsxs("div",{style:vg,children:[c.jsx("h4",{style:yg,children:"Межспутниковая Связь (ISL) & Угол Обзора"}),c.jsxs("div",{style:hs,children:[c.jsx("label",{style:ps,children:"Топология ISL линий:"}),c.jsxs("select",{value:p,onChange:y=>d(y.target.value),style:oT,children:[c.jsx("option",{value:"grid-4",children:"Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)"}),c.jsx("option",{value:"intra-only",children:"Только внутри плоскости (Intra-plane)"}),c.jsx("option",{value:"full-mesh",children:"Динамическая перестройка (Full Mesh)"})]})]}),c.jsxs("div",{style:{...hs,opacity:.7},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ffaa00"},children:[c.jsx(e1,{size:13}),c.jsxs("label",{style:ps,children:["Угол обзора / Мин. угол места: ",c.jsxs("b",{children:[g,"° (Заблокирован)"]})]})]}),c.jsx("input",{type:"range",min:"10",max:"10",value:g,disabled:!0,style:{...vo,cursor:"not-allowed",accentColor:"#888"}}),c.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Угол обзора диаграммы направленности фиксирован регламентом системы (10°)."})]}),c.jsx("div",{style:{marginTop:"auto",padding:"12px",backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",fontSize:"11px",color:"#aaa"},children:"Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°)."})]})]}),c.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"8px"},children:c.jsxs("button",{onClick:v,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(d1,{size:14}),c.jsx("span",{children:"Применить и Запустить Расчет"})]})})]})},vg={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},yg={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},hs={display:"flex",flexDirection:"column",gap:"4px"},ps={fontSize:"11px",color:"#aaa"},vo={width:"100%",accentColor:"#1473e6",cursor:"pointer"},oT={backgroundColor:"#141414",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",padding:"6px 8px",fontSize:"12px",outline:"none"},aT=({onOpenConfigurator:t})=>{const[e,n]=be.useState(null),[i,r]=be.useState(!0);be.useEffect(()=>{fetch("/api/compare").then(o=>o.json()).then(o=>{n(o),r(!1)}).catch(o=>{console.error("Error fetching compare scenarios",o),r(!1)})},[]);const s=(e==null?void 0:e.variants)||[{meta:{title:"01. Полная штатная группировка (48 КА)"},satellites_count:48,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.9713,all_targets_met:!0,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9667,max_outage_s:1440,avg_hops:3.2},{id:"C70",name:"Шлюз C70",visibility_ratio:1,availability_ratio:.9764,max_outage_s:960,avg_hops:2.9},{id:"C72",name:"Шлюз C72",visibility_ratio:1,availability_ratio:.9708,max_outage_s:1200,avg_hops:3.1}]},{meta:{title:"02. Первый этап запуска (16 КА)"},satellites_count:16,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.1856,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:.62,availability_ratio:.2722,max_outage_s:14400,avg_hops:2.1},{id:"C70",name:"Шлюз C70",visibility_ratio:.58,availability_ratio:.1583,max_outage_s:18200,avg_hops:2},{id:"C72",name:"Шлюз C72",visibility_ratio:.54,availability_ratio:.1264,max_outage_s:21600,avg_hops:2}]},{meta:{title:"03. Моделирование отказов 10 КА"},satellites_count:48,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.8014,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:.95,availability_ratio:.7931,max_outage_s:4800,avg_hops:3.6},{id:"C70",name:"Шлюз C70",visibility_ratio:.96,availability_ratio:.7986,max_outage_s:4320,avg_hops:3.4},{id:"C72",name:"Шлюз C72",visibility_ratio:.97,availability_ratio:.8125,max_outage_s:3840,avg_hops:3.5}]},{meta:{title:"04. Ограниченная дальность ISL (2000 км)"},satellites_count:48,environment:{altitude_km:550,isl_range_km:2e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.6579,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.775,max_outage_s:6480,avg_hops:4.1},{id:"C70",name:"Шлюз C70",visibility_ratio:1,availability_ratio:.6153,max_outage_s:8640,avg_hops:4.3},{id:"C72",name:"Шлюз C72",visibility_ratio:1,availability_ratio:.5833,max_outage_s:9600,avg_hops:4.5}]}];return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Gd,{size:18,style:{color:"#1473e6"}}),c.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Сравнение Проектных Вариантов & Итоговый Анализ"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",color:"#00ff88",backgroundColor:"#00ff8815",padding:"4px 8px",borderRadius:"4px",border:"1px solid #00ff8840"},children:[c.jsx(ca,{size:13}),c.jsx("span",{children:"Одинаковый период: 24 часа (86 400 с)"})]})]}),c.jsxs("div",{style:{backgroundColor:"#122019",border:"1px solid #00ff8860",borderRadius:"6px",padding:"12px 16px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:"bold",fontSize:"13px"},children:[c.jsx(_1,{size:18}),c.jsx("span",{children:"ИТОГОВЫЙ ВЕРДИКТ: Вариант 1 «Полная штатная группировка» оптимален"})]}),c.jsx("span",{style:{fontSize:"11px",backgroundColor:"#00ff8825",color:"#00ff88",padding:"3px 8px",borderRadius:"4px",fontWeight:600},children:"SLA = 97.13% (Цель ≥ 90% выдержана)"})]}),c.jsxs("p",{style:{margin:0,fontSize:"11px",color:"#ccc",lineHeight:"1.5"},children:["Конфигурация из ",c.jsx("b",{children:"48 аппаратов (6 плоскостей × 8 КА)"})," с дальностью ISL ",c.jsx("b",{children:"3000 км"})," является единственной, обеспечивающей непрерывное покрытие всех целевых северных пунктов без риска нарушения нормативного SLA."]})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.5",backgroundColor:"#141a24",padding:"8px 12px",borderRadius:"4px",borderLeft:"3px solid #1473e6"},children:["Параметры ",c.jsx("b",{children:"высоты орбит (altitude_km = 550 км)"}),", ",c.jsx("b",{children:"дальности ISL (isl_range_km)"})," и ",c.jsx("b",{children:"угла возвышения (min_elevation_deg = 10°)"})," зафиксированы и сопоставляются для принятых проектных вариантов на едином 24-часовом периоде."]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"14px"},children:s.map((o,a)=>{var p;const l=o.environment||{},u=o.client_summaries||[],h=a===(e==null?void 0:e.best_variant_index)||a===0;return c.jsxs("div",{style:{backgroundColor:"#191919",border:h?"1px solid #00ff88":"1px solid #333",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ffffff",fontWeight:600},children:((p=o.meta)==null?void 0:p.title)||`Вариант ${a+1}`}),o.all_targets_met?c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",padding:"2px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:"SLA ≥ 90% ВЫДЕРЖАН"}):c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:"SLA НАРУШЕН"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px",backgroundColor:"#111",padding:"6px",borderRadius:"4px",fontSize:"11px",textAlign:"center"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Высота"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.altitude_km??550," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"ISL Дальность"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.isl_range_km??3e3," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Мин. Угол"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.min_elevation_deg??10,"°"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Число КА"}),c.jsx("b",{style:{color:"#00f0ff"},children:o.satellites_count??48})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",padding:"6px 10px",borderRadius:"4px",fontSize:"12px"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Средняя доступность (SLA):"}),c.jsxs("b",{style:{fontSize:"14px",color:o.overall_availability*100>=90?"#00ff88":"#ff3b30"},children:[(o.overall_availability*100).toFixed(2),"%"]})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{color:"#777",borderBottom:"1px solid #333",textAlign:"left"},children:[c.jsx("th",{style:yo,children:"Пункт"}),c.jsx("th",{style:yo,children:"Видимость %"}),c.jsx("th",{style:yo,children:"Путь (SLA) %"}),c.jsx("th",{style:yo,children:"Макс. перерыв"}),c.jsx("th",{style:yo,children:"Переходов"})]})}),c.jsx("tbody",{children:u.map((d,g)=>c.jsxs("tr",{style:{borderBottom:"1px solid #222"},children:[c.jsx("td",{style:So,children:c.jsx("b",{children:d.name||d.id})}),c.jsxs("td",{style:So,children:[(d.visibility_ratio*100).toFixed(1),"%"]}),c.jsx("td",{style:So,children:c.jsxs("span",{style:{color:d.availability_ratio*100>=90?"#00ff88":"#ff3b30",fontWeight:"bold"},children:[(d.availability_ratio*100).toFixed(1),"%"]})}),c.jsx("td",{style:So,children:d.max_outage_s!==void 0?`${d.max_outage_s} с`:"0 с"}),c.jsx("td",{style:So,children:d.avg_hops!==null&&d.avg_hops!==void 0?Number(d.avg_hops).toFixed(1):"—"})]},g))})]})})]},a)})}),c.jsxs("div",{style:{backgroundColor:"#191919",border:"1px solid #333",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#e0e0e0",display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(El,{size:16,style:{color:"#1473e6"}}),c.jsx("span",{children:"Сравнительный Анализ Особенностей Каждой Версии (Pros & Cons)"})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"left"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",borderBottom:"1px solid #333"},children:[c.jsx("th",{style:{padding:"8px"},children:"Версия / Вариант"}),c.jsx("th",{style:{padding:"8px"},children:"Ключевые Плюсы (Преимущества)"}),c.jsx("th",{style:{padding:"8px"},children:"Критический Недостаток"}),c.jsx("th",{style:{padding:"8px"},children:"Рекомендуемая Назначение"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#00ff88",fontWeight:"bold"},children:"01. Полная группировка (48 КА)"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Максимальный SLA (97.13% ≥ 90%). Минимальные перерывы (16-24 мин). Резервирование путей."]}),c.jsx("td",{style:{padding:"8px",color:"#aaa"},children:"Полные затраты CAPEX на 48 КА ($31.2M)."}),c.jsx("td",{style:{padding:"8px",color:"#00ff88"},children:"Штатная эксплуатация постоянной связи"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#ffaa00",fontWeight:"bold"},children:"02. Первый этап (16 КА)"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Минимальный начальный бюджет CAPEX (-66%). Быстрый вывод 1 очереди."]}),c.jsxs("td",{style:{padding:"8px",color:"#ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:"[МИНУС]"})," Недопустимо низкий SLA (18.56%). Длительные «окна невидимости» до 5-6 часов."]}),c.jsx("td",{style:{padding:"8px",color:"#ffaa00"},children:"Пусконаладка и временная связь"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#c084fc",fontWeight:"bold"},children:"03. Отказ 10 аппаратов"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Высокая живучесть сети. Сохранение 80.14% доступности через перемаршрутизацию."]}),c.jsxs("td",{style:{padding:"8px",color:"#ffaa00"},children:[c.jsx("span",{style:{color:"#ffaa00",fontWeight:600},children:"[ВНИМАНИЕ]"})," Локальное проседание SLA ниже 90% над Мурманском."]}),c.jsx("td",{style:{padding:"8px",color:"#c084fc"},children:"Аварийный регламент (требует сдвиг фазы)"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#00f0ff",fontWeight:"bold"},children:"04. ISL 2000 км"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Снижение энергопотребления бортовых терминалов ISL на 25%."]}),c.jsxs("td",{style:{padding:"8px",color:"#ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:"[МИНУС]"})," Разрывы межплоскостных связей над экватором. Рост числа хопов до 4.3."]}),c.jsx("td",{style:{padding:"8px",color:"#888"},children:"Энергосберегающий режим (не рекомендован)"})]})]})]})})]}),t&&c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1b2230",border:"1px solid #1473e650",padding:"10px 14px",borderRadius:"6px",marginTop:"4px"},children:[c.jsx("span",{style:{fontSize:"12px",color:"#ccc"},children:"Желаете исследовать новые орбитальные условия (высоту, наклонение или дальность связи)?"}),c.jsxs("button",{onClick:t,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Zl,{size:14}),c.jsx("span",{children:"Запустить симуляцию новых условий"})]})]})]})},yo={padding:"4px 6px",fontSize:"10px",color:"#888"},So={padding:"4px 6px",color:"#ddd"},lT=({logs:t})=>{const[e,n]=be.useState(!0);return c.jsxs("div",{style:{position:"fixed",bottom:"12px",left:"16px",width:"420px",maxWidth:"calc(100vw - 32px)",zIndex:80,backgroundColor:"#1a1a1a",border:"1px solid #383838",borderRadius:"6px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",overflow:"hidden",fontFamily:"monospace",fontSize:"11px"},children:[c.jsxs("div",{onClick:()=>n(!e),style:{padding:"6px 12px",backgroundColor:"#242424",borderBottom:e?"1px solid #383838":"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:"#ccc",fontWeight:600},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(g1,{size:13,style:{color:"#1473e6"}}),c.jsxs("span",{children:["Журнал Событий Системы (",t.length,")"]})]}),e?c.jsx(th,{size:14}):c.jsx(kx,{size:14})]}),e&&c.jsx("div",{style:{maxHeight:"130px",overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"4px",backgroundColor:"#121212"},children:t.map(i=>c.jsxs("div",{style:{display:"flex",gap:"8px",lineHeight:"1.4"},children:[c.jsxs("span",{style:{color:"#666",flexShrink:0},children:["[",i.time,"]"]}),c.jsx("span",{style:{color:i.type==="error"?"#ff3b30":i.type==="warning"?"#ffaa00":i.type==="success"?"#00ff88":"#2680eb"},children:i.text})]},i.id))})]})},cT=({currentTime:t,maxTime:e=86400,stepSeconds:n,onChangeStep:i,onChangeTime:r})=>{const[s,o]=be.useState(!1),[a,l]=be.useState(1);be.useEffect(()=>{let h=null;return s&&(h=setInterval(()=>{r(p=>{const d=p+n*a;return d>=e?0:d})},250)),()=>clearInterval(h)},[s,n,a,e,r]);const u=h=>{const p=Math.floor(h/3600),d=Math.floor(h%3600/60),g=h%60;return`+${p.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`};return c.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"50%",transform:"translateX(-50%)",width:"680px",maxWidth:"calc(100vw - 24px)",backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"8px",padding:"8px 16px",display:"flex",alignItems:"center",gap:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",zIndex:85,color:"#e0e0e0",fontSize:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx("button",{onClick:()=>r(h=>Math.max(0,h-n)),style:Yu,title:"Шаг назад",children:c.jsx(f1,{size:14})}),c.jsx("button",{onClick:()=>o(!s),style:{...Yu,backgroundColor:s?"#ff3b30":"#1473e6",color:"#fff",border:"none"},title:s?"Пауза":"Воспроизведение",children:s?c.jsx(o1,{size:14}):c.jsx(Fx,{size:14})}),c.jsx("button",{onClick:()=>r(h=>Math.min(e,h+n)),style:Yu,title:"Шаг вперед",children:c.jsx(h1,{size:14})})]}),c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx("input",{type:"range",min:"0",max:e,step:n,value:t,onChange:h=>{const p=parseInt(h.target.value);r(()=>p)},style:{width:"100%",accentColor:"#1473e6",cursor:"pointer"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#888"},children:[c.jsx("span",{children:"T=0с"}),c.jsxs("span",{children:[Math.round(t/e*100),"%"]}),c.jsx("span",{children:"T=24ч"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"dt:"}),[1,10,60,300].map(h=>c.jsx("button",{onClick:()=>i(h),style:{padding:"2px 6px",borderRadius:"3px",fontSize:"10px",border:"1px solid #444",backgroundColor:n===h?"#1473e6":"#141414",color:n===h?"#fff":"#aaa",cursor:"pointer"},children:h>=60?`${h/60}м`:`${h}с`},h))]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace",backgroundColor:"#141414",border:"1px solid #333",padding:"4px 8px",borderRadius:"4px",color:"#00ff88"},children:[c.jsx(ca,{size:12}),c.jsx("span",{children:u(t)})]}),c.jsxs("select",{value:a,onChange:h=>l(parseInt(h.target.value)),style:{backgroundColor:"#141414",color:"#ccc",border:"1px solid #333",borderRadius:"4px",padding:"4px 6px",fontSize:"11px",outline:"none",cursor:"pointer"},children:[c.jsx("option",{value:1,children:"1x"}),c.jsx("option",{value:5,children:"5x"}),c.jsx("option",{value:10,children:"10x"}),c.jsx("option",{value:60,children:"60x"}),c.jsx("option",{value:300,children:"300x"})]})]})},Yu={backgroundColor:"#2a2a2a",color:"#d0d0d0",border:"1px solid #3a3a3a",borderRadius:"4px",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},uT=({scenario:t,currentTimeSeconds:e=0,onSelectSatellite:n})=>{const[i,r]=be.useState(!0);if(!t||!t.satellites)return null;const s=t.satellites.map(d=>Lc(d,e)),o=s.filter(d=>(d.temperature_c??35)>=80),a=s.filter(d=>(d.temperature_c??35)>=70&&(d.temperature_c??35)<80),l=s.filter(d=>(d.fuel_pct??100)<=15),u=s.filter(d=>(d.fuel_pct??100)<=25&&(d.fuel_pct??100)>15),h=o.length+l.length,p=a.length+u.length;return h===0&&p===0?null:c.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:88,backgroundColor:"rgba(20, 20, 20, 0.92)",backdropFilter:"blur(10px)",border:h>0?"1px solid #ff3b30":"1px solid #ffaa00",borderRadius:"8px",padding:"10px 14px",maxWidth:"min(360px, calc(100vw - 32px))",color:"#fff",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.6)",fontSize:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>r(!i),children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Nx,{color:h>0?"#ff3b30":"#ffaa00",size:18}),c.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px",color:h>0?"#ff3b30":"#ffaa00"},children:["Предупреждения Бортовых Систем КА (",h+p,")"]})]}),c.jsx("button",{style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",display:"flex",alignItems:"center"},children:i?c.jsx(kx,{size:16}):c.jsx(th,{size:16})})]}),c.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[o.length>0&&c.jsxs("span",{style:{backgroundColor:"#ff3b3030",border:"1px solid #ff3b30",color:"#ff3b30",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Vd,{size:12})," ",o.length," Перегрев (≥ 80°C)"]}),l.length>0&&c.jsxs("span",{style:{backgroundColor:"#ffaa0030",border:"1px solid #ffaa00",color:"#ffaa00",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Wd,{size:12})," ",l.length," Топливо (≤ 15%)"]})]}),i&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"180px",overflowY:"auto",marginTop:"4px"},children:[o.map(d=>c.jsxs("div",{onClick:()=>n(d),style:{backgroundColor:"#2a1515",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Vd,{size:14,color:"#ff3b30"}),c.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",d.id,"]"]}),c.jsxs("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:[d.temperature_c??84,"°C"]})]}),c.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Dp,{size:10})," Клик для фокуса"]})]},`overheat-${d.id}`)),l.map(d=>c.jsxs("div",{onClick:()=>n(d),style:{backgroundColor:"#2a2215",border:"1px solid #ffaa0060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Wd,{size:14,color:"#ffaa00"}),c.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",d.id,"]"]}),c.jsxs("span",{style:{color:"#ffaa00",fontWeight:"bold"},children:[d.fuel_kg??1.2," кг (",d.fuel_pct??12,"%)"]})]}),c.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Dp,{size:10})," Клик для фокуса"]})]},`fuel-${d.id}`))]})]})},dT=({satellite:t,currentOutages:e,currentTimeSeconds:n=0,onClose:i,onApplyOutage:r,onRestoreSatellite:s})=>{if(!t)return null;const o=Lc(t,n),l=!!e.find(p=>p.satellite_id===o.id),[u,h]=be.useState(3600);return c.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"440px",backgroundColor:"#222222",border:"1px solid #383838",borderRadius:"8px",boxShadow:"0 12px 36px rgba(0,0,0,0.8)",zIndex:200,color:"#e0e0e0",overflow:"hidden",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[c.jsxs("div",{style:{height:"40px",backgroundColor:"#1a1a1a",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",fontWeight:600},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Pp,{size:16,style:{color:l?"#ff3b30":"#1473e6"}}),c.jsxs("span",{children:["Управление Спутником ",o.id]})]}),c.jsx("button",{onClick:i,style:fT,children:c.jsx(rh,{size:14})})]}),c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"12px"},children:[c.jsxs("div",{style:{padding:"12px",backgroundColor:l?"#ff3b3015":"#00ff8815",border:`1px solid ${l?"#ff3b3050":"#00ff8850"}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Текущее состояние:"}),c.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",color:l?"#ff3b30":"#00ff88",marginTop:"2px"},children:l?"ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)":"ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ"})]}),l?c.jsx(Pp,{size:24,color:"#ff3b30"}):c.jsx(Lp,{size:24,color:"#00ff88"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",backgroundColor:"#181818",padding:"10px",borderRadius:"4px"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Идентификатор:"})," ",c.jsx("b",{style:{color:"#fff"},children:o.id})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Плоскость:"})," ",c.jsxs("b",{style:{color:"#fff"},children:["P",o.plane]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Высота:"})," ",c.jsxs("b",{style:{color:"#fff"},children:[Math.round(o.altitude)," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Широта:"})," ",c.jsxs("b",{style:{color:"#fff"},children:[o.sub_lat.toFixed(1),"°"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Температура бортовой ЭВМ:"})," ",c.jsxs("b",{style:{color:(o.temperature_c??38)>=80?"#ff3b30":(o.temperature_c??38)>=60?"#ffaa00":"#00ff88"},children:[o.temperature_c??38.5,"°C ",(o.temperature_c??38)>=80?"[ПЕРЕГРЕВ]":""]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Запас топлива (ЭРДУ ксенон):"})," ",c.jsxs("b",{style:{color:(o.fuel_pct??95)<20?"#ff3b30":"#00f0ff"},children:[o.fuel_kg??9.99," кг (",o.fuel_pct??99.9,"%)"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Солнечные батареи:"})," ",c.jsxs("b",{style:{color:"#ffaa00"},children:[o.solar_power_w??1850," Вт (Номинал)"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Заряд аккумуляторов (АКБ):"})," ",c.jsxs("b",{style:{color:"#00ff88"},children:[o.battery_pct??100,"%"]})]})]}),l?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("span",{style:{fontWeight:"bold",color:"#00ff88"},children:"💰 ВАРИАНТ 1: Перенастройка сетки ISL"}),c.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"9px",padding:"1px 5px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),c.jsxs("p",{style:{fontSize:"11px",color:"#bbb",margin:0,lineHeight:"1.3"},children:["Перенаправление трафика через смежные КА кольца S",(o.idx-1+8)%8||8," / S",(o.idx+1)%8||1,". Затраты: ",c.jsx("b",{style:{color:"#00ff88"},children:"$25,000"})," (ксенон). Экономия: ",c.jsx("b",{style:{color:"#00ff88"},children:"$805,000"}),"."]})]}),c.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",fontSize:"11px",color:"#aaa"},children:[c.jsx("b",{children:"ВАРИАНТ 2: Замена резервным КА из запаса"}),c.jsx("br",{}),"Затраты: ",c.jsx("b",{style:{color:"#ff6666"},children:"$830,000"})," ($650k CAPEX + $180k вывод)."]}),c.jsxs("button",{onClick:()=>s(o.id),style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"10px",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[c.jsx(Lp,{size:14}),c.jsx("span",{children:"Восстановить работу КА (Компенсация выполнена)"})]})]}):c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsx("label",{style:{color:"#aaa",fontWeight:500},children:"Задать длительность отказа (сек):"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[{label:"5 мин",val:300},{label:"30 мин",val:1800},{label:"1 час",val:3600},{label:"24 часа",val:86400}].map(p=>c.jsx("button",{onClick:()=>h(p.val),style:{padding:"6px 0",fontSize:"11px",backgroundColor:u===p.val?"#1473e6":"#2a2a2a",color:u===p.val?"#fff":"#ccc",border:"1px solid #444",borderRadius:"4px",cursor:"pointer"},children:p.label},p.val))}),c.jsxs("button",{onClick:()=>r(o.id,u),style:{backgroundColor:"#ff3b30",color:"#fff",border:"none",borderRadius:"4px",padding:"10px",fontWeight:600,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"4px"},children:[c.jsx(a1,{size:14}),c.jsxs("span",{children:["Вывести из строя (",u>=3600?`${u/3600} ч`:`${u/60} мин`,")"]})]})]})]})]})},fT={backgroundColor:"transparent",color:"#888",border:"none",cursor:"pointer"},hT=({isOpen:t,onClose:e,zIndex:n,onFocusWindow:i,currentOutages:r,outlinerSettings:s,onApplyOutageBatch:o,onClearOutages:a,onUpdateSettings:l,onAddLog:u})=>{const[h,p]=be.useState(null);if(!t)return null;const d=r.length,g=()=>{p("cme_flare"),o([{satellite_id:"S01",start_s:0,end_s:86400},{satellite_id:"S02",start_s:0,end_s:86400},{satellite_id:"S03",start_s:0,end_s:86400},{satellite_id:"S04",start_s:0,end_s:86400}]),u("⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.","error")},v=()=>{p("gateway_down"),o([{satellite_id:"S15",start_s:0,end_s:86400},{satellite_id:"S16",start_s:0,end_s:86400},{satellite_id:"S17",start_s:0,end_s:86400}]),u("📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.","error")},y=()=>{p("debris_strike"),o([{satellite_id:"S09",start_s:0,end_s:86400},{satellite_id:"S10",start_s:0,end_s:86400},{satellite_id:"S11",start_s:0,end_s:86400},{satellite_id:"S12",start_s:0,end_s:86400}]),u("💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.","error")},m=()=>{p("arctic_surge"),o([{satellite_id:"S22",start_s:0,end_s:86400},{satellite_id:"S23",start_s:0,end_s:86400}]),u("🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.","warning")},f=()=>{const x={...s.planePhaseMap,1:(s.planePhaseMap[1]||0)+15,2:(s.planePhaseMap[2]||0)+15};l({...s,planePhaseMap:x}),u("💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!","success")},_=()=>{a(),u("🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.","info")};return c.jsx(Tl,{id:"emergency_modal",title:"Симуляция Событий ЧС & Экономические Рекомендации",isOpen:t,onClose:e,zIndex:n,onFocus:i,initialPos:{x:120,y:50,width:680,height:580},children:c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",color:"#e0e0e0",fontSize:"12px"},children:[c.jsxs("div",{style:{backgroundColor:d>0?"#ff3b3015":"#1473e615",border:`1px solid ${d>0?"#ff3b3050":"#1473e650"}`,borderRadius:"6px",padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(Jl,{size:22,style:{color:d>0?"#ff3b30":"#1473e6"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#fff"},children:d>0?`АКТИВНО СОБЫТИЕ ЧС (${d} КА НЕРАБОТОСПОСОБНЫ)`:"СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)"}),c.jsx("div",{style:{color:"#888",fontSize:"11px",marginTop:"2px"},children:"Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации."})]})]}),d>0&&c.jsxs("button",{onClick:()=>{a(),p(null),u("Сброшены все аварийные состояния ЧС.","info")},style:{backgroundColor:"#333",color:"#fff",border:"1px solid #555",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(u1,{size:12}),c.jsx("span",{children:"Ликвидировать ЧС"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontWeight:600,color:"#ccc",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(ta,{size:14,style:{color:"#ffaa00"}}),c.jsx("span",{children:"Выбор сценария техногенной / природной ЧС:"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[c.jsxs("button",{onClick:g,style:{backgroundColor:h==="cme_flare"?"#3d1c1c":"#1c1c1c",border:`1px solid ${h==="cme_flare"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff5555"},children:[c.jsx(ta,{size:14}),c.jsx("span",{children:"⚡ 1. Солнечная вспышка (CME)"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04)."})]}),c.jsxs("button",{onClick:v,style:{backgroundColor:h==="gateway_down"?"#3d1c1c":"#1c1c1c",border:`1px solid ${h==="gateway_down"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ffaa00"},children:[c.jsx(l1,{size:14}),c.jsx("span",{children:"📡 2. Отказ наземного шлюза"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17."})]}),c.jsxs("button",{onClick:y,style:{backgroundColor:h==="debris_strike"?"#3d1c1c":"#1c1c1c",border:`1px solid ${h==="debris_strike"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff3b30"},children:[c.jsx(x1,{size:14}),c.jsx("span",{children:"💥 3. Каскад космического мусора"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12)."})]}),c.jsxs("button",{onClick:m,style:{backgroundColor:h==="arctic_surge"?"#1c2d3d":"#1c1c1c",border:`1px solid ${h==="arctic_surge"?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[c.jsx(Hd,{size:14}),c.jsx("span",{children:"🚑 4. Спасательная операция ЧС"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23."})]})]})]}),c.jsxs("div",{style:{backgroundColor:"#161d24",border:"1px solid #1473e660",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600,fontSize:"13px"},children:[c.jsx(ms,{size:16}),c.jsx("span",{children:"Расчет самого экономически выгодного варианта компенсации"})]}),c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",padding:"2px 6px",borderRadius:"3px"},children:"WGS-84 / SLA Оптимизатор"})]}),d===0?c.jsx("div",{style:{color:"#888",fontSize:"11px",fontStyle:"italic",padding:"10px 0"},children:"Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа."}):c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{fontSize:"11px",color:"#aaa",backgroundColor:"#111",padding:"8px 10px",borderRadius:"4px",borderLeft:"3px solid #ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:"[ПРОГНОЗ УБЫТКОВ]:"})," Риск штрафов SLA за простой связи: ",c.jsxs("b",{style:{color:"#fff"},children:["$",(d*12e4).toLocaleString(),"/год"]}),"."]}),c.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#00ff88",fontWeight:"bold"},children:[c.jsx(Os,{size:15}),c.jsx("span",{children:"ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит"})]}),c.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"10px",padding:"2px 6px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#bbb",lineHeight:"1.4"},children:[c.jsx("b",{children:"Суть метода:"})," Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).",c.jsx("br",{}),c.jsx("b",{children:"Затраты:"})," ",c.jsx("b",{style:{color:"#00ff88"},children:"$50,000"})," (расход ксенонового топлива на коррекцию орбитальной позиции).",c.jsx("br",{}),c.jsx("b",{children:"Экономический эффект:"})," Полное сохранение SLA 99.9%. Чистая экономия: ",c.jsx("b",{style:{color:"#00ff88"},children:"$3,270,000"})," по сравнению с физической заменой аппаратов."]}),c.jsxs("button",{onClick:f,style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginTop:"4px"},children:[c.jsx(Os,{size:14}),c.jsx("span",{children:"Применить перенастройку сетки (Экономия $3.27M)"})]})]}),c.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("span",{style:{fontWeight:600,color:"#ff6666"},children:"ВАРИАНТ 2: Замена резервными спутниками из запаса"}),c.jsx("span",{style:{color:"#888",fontSize:"10px"},children:"[ВЫСОКИЕ ЗАТРАТЫ]"})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:[c.jsx("b",{children:"Затраты:"})," ",c.jsxs("b",{style:{color:"#ff6666"},children:["$",(d*83e4).toLocaleString()]})," ($",d,"x КА CAPEX $650k + межорбитальный переход $180k)."]}),c.jsxs("button",{onClick:_,style:{backgroundColor:"#2a2020",color:"#ff8888",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 10px",fontSize:"11px",cursor:"pointer",marginTop:"2px"},children:["Ввести ",d," резервных КА из запаса ($",(d*83e4/1e6).toFixed(2),"M)"]})]})]})]})]})})},of="cosmo_app_saved_state_v2",pT=()=>{try{const t=localStorage.getItem(of);if(t)return JSON.parse(t)}catch(t){console.error("Failed to load state from localStorage",t)}return null},ht=pT(),mT=[{id:"01_full_constellation",title:"01. Полная штатная группировка"},{id:"02_first_launch",title:"02. Первый этап запуска"},{id:"03_satellite_outages",title:"03. Моделирование отказов"},{id:"04_link_range",title:"04. Тестирование дальности ISL"}],gT={showOrbits:!0,showSatellites:!0,showGateways:!0,showISL:!0,showSatLinks:!0,showLabels:!0,showAtmosphere:!0,showCoverageHeatmap:!0,satGlow:!0,satSize:1,orbitOpacity:.5,stepSeconds:10,satColor:"#00f0ff",offlineSatColor:"#ff3b30",highLatencySatColor:"#ff9900",orbitColor:"#1473e6",islColor:"#00ff88",gatewayColor:"#00d084",groundLinkColor:"#f59e0b",atmosphereColor:"#1e3a8a",fovConeColor:"#00f0ff",planeRaanMap:{},planePhaseMap:{}},xT={analytics:{isOpen:!1,zIndex:10},configurator:{isOpen:!1,zIndex:11},compare:{isOpen:!1,zIndex:12},emergency:{isOpen:!1,zIndex:13}},_T=()=>{const[t,e]=be.useState((ht==null?void 0:ht.scenarios)||mT),[n,i]=be.useState((ht==null?void 0:ht.activeScenarioId)||"01_full_constellation"),[r,s]=be.useState(null),[o,a]=be.useState((ht==null?void 0:ht.currentRawScenario)||null),[l,u]=be.useState(!1),[h,p]=be.useState((ht==null?void 0:ht.isSidebarOpen)??!0),[d,g]=be.useState((ht==null?void 0:ht.currentTimeSeconds)||0),[v,y]=be.useState(null),[m,f]=be.useState((ht==null?void 0:ht.currentOutages)||[]),[_,x]=be.useState(null),[S,T]=be.useState(()=>{const z=(ht==null?void 0:ht.outlinerSettings)||{};return{...gT,...z,planeRaanMap:z.planeRaanMap||{},planePhaseMap:z.planePhaseMap||{},satColor:z.satColor||"#00f0ff",offlineSatColor:z.offlineSatColor||"#ff3b30",highLatencySatColor:z.highLatencySatColor||"#ff9900",orbitColor:z.orbitColor||"#1473e6",islColor:z.islColor||"#00ff88",gatewayColor:z.gatewayColor||"#00d084",groundLinkColor:z.groundLinkColor||"#f59e0b",atmosphereColor:z.atmosphereColor||"#1e3a8a",fovConeColor:z.fovConeColor||"#00f0ff"}}),[b,w]=be.useState(()=>{const z=(ht==null?void 0:ht.windows)||{};return{...xT,...z}}),[D,V]=be.useState(20),[M,R]=be.useState([{id:"1",time:new Date().toLocaleTimeString("ru-RU"),text:"Ядро системы визуализации успешно запущено",type:"info"},{id:"2",time:new Date().toLocaleTimeString("ru-RU"),text:"Подключен математический модуль динамики орбит",type:"success"}]),W=be.useCallback((z,L="info")=>{const ue={id:Date.now().toString(),time:new Date().toLocaleTimeString("ru-RU"),text:z,type:L};R(ne=>[...ne.slice(-49),ue])},[]);be.useEffect(()=>{try{const z={scenarios:t,activeScenarioId:n,currentRawScenario:o,outlinerSettings:S,windows:b,currentOutages:m,currentTimeSeconds:d,isSidebarOpen:h};localStorage.setItem(of,JSON.stringify(z))}catch(z){console.error("Failed to save state to localStorage",z)}},[t,n,o,S,b,m,d,h]);const Q=()=>{try{localStorage.removeItem(of),W("Сохраненное состояние очищено! Перезагрузка страницы...","warning"),setTimeout(()=>{window.location.reload()},400)}catch(z){console.error("Failed to reset state",z)}},U=be.useCallback(async z=>{var L;try{W(`Загрузка сценария: ${z}`,"info");const ue=await fetch(`/api/simulate?scenario_id=${z}`);if(ue.ok){const ne=await ue.json();s(ne),ne.raw_scenario&&a(ne.raw_scenario),W(`Карта и расчет перестроены для '${ne.title}': ${((L=ne.satellites)==null?void 0:L.length)||0} аппаратов`,"success")}else K(z)}catch{K(z)}},[W]);be.useEffect(()=>{if(!r||!r.satellites)return;const z=r.satellites.filter(ue=>(ue.temperature_c??35)>=80),L=r.satellites.filter(ue=>(ue.fuel_pct??100)<=15);z.length>0&&z.forEach(ue=>{W(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${ue.id}]: T=${ue.temperature_c??84}°C (превышение порога 80°C)!`,"error")}),L.length>0&&L.forEach(ue=>{W(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${ue.id}]: остаток ксенона ${ue.fuel_kg??1.2} кг (${ue.fuel_pct??12}% <= 15%)!`,"warning")})},[r,W]);const K=z=>{const ue=z.includes("02")||z.includes("first_launch")?16:48,ne=[];for(let ve=0;ve<ue;ve++){const ye=Math.floor(ve/8),ge=ve%8,Ce=(ve+1).toString().padStart(2,"0");ne.push({id:`S${Ce}`,plane:ye+1,idx:ge,altitude:600,inc:86.4,raan:ye*60,arg_per:0,true_anomaly:ge*45,sub_lat:Math.sin(ge*45*Math.PI/180)*80,sub_lon:(ye*60+ge*45)%360-180})}const xe=[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"C70",name:"Шлюз C70",lat:59.93,lon:30.31,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"},{id:"Pechora",name:"Печора",lat:65.14,lon:57.22,type:"gateway"}];s({scenario_id:z,title:"Штатный Сценарий Группировки",description:"Сгенерированная геометрия 48 спутников",timestamp_utc:new Date().toISOString(),satellites:ne,gateways:xe,routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S09","S17","Murmansk"],latency_ms:38.4,status:"АКТИВЕН"},{src:"C65",dst:"Pechora",path:["C65","S02","S10","Pechora"],latency_ms:29.1,status:"АКТИВЕН"}]}),W("Локальная геометрия сгенерирована: 48 спутников, 4 шлюза","info")};be.useEffect(()=>{U(n)},[n,U]);const G=async z=>{var L,ue,ne;W(`Обработка загруженного JSON сценария: ${((L=z.meta)==null?void 0:L.title)||"Сценарий"}...`,"info"),u(!0);try{const xe=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:z})});if(xe.ok){const ve=await xe.json();s(ve),a(z);const ye=((ue=z.meta)==null?void 0:ue.title)||"Загруженный Сценарий";e(ge=>{var He;const Ce=((He=z.meta)==null?void 0:He.id)||"custom_upload";return ge.some(A=>A.id===Ce)?ge:[...ge,{id:Ce,title:ye}]}),W(`Пользовательский JSON успешно загружен! Карта перестроена (${((ne=ve.satellites)==null?void 0:ne.length)||0} спутников).`,"success"),ce("analytics")}else{const ve=await xe.json();W(`Ошибка валидации JSON: ${ve.detail||"Неверный формат cosmo-A-1.0"}`,"error")}}catch{W("Не удалось отправить JSON сценарий на сервер","error")}finally{u(!1)}},k=async z=>{var ye;W(`Генерация новой космической группировки (${z.planes}x${z.satsPerPlane} @ ${z.altitude}км)...`,"info"),u(!0);const L=[],ue=[],ne=[];let xe=1;for(let ge=0;ge<z.planes;ge++){const Ce=`P${ge+1}`,He=Mo(ge*(360/z.planes)%360,1),A=Mo(ge*(360/(z.planes*z.satsPerPlane))%360,1);L.push({id:Ce,raan_deg:He,phase_deg:A});for(let E=0;E<z.satsPerPlane;E++){const $=`S${xe.toString().padStart(2,"0")}`,ee=Mo(E*(360/z.satsPerPlane)%360,1);ue.push({id:$,plane_id:Ce,slot_deg:ee,launch_batch:1});const oe=Math.sin(ee*Math.PI/180)*(z.inclination*.9),se=(He+ee)%360-180;ne.push({id:$,plane:ge+1,idx:E,altitude:z.altitude,inc:z.inclination,raan:He,arg_per:0,true_anomaly:ee,sub_lat:Mo(oe,4),sub_lon:Mo(se,4)}),xe++}}const ve={schema_version:"cosmo-A-1.0",meta:{id:"custom_walker_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane} (${ue.length} аппаратов)`},environment:{altitude_km:z.altitude,inclination_deg:z.inclination,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:z.minElevation,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:L,satellites:ue},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}],failures:m.map(ge=>({satellite_id:ge.satellite_id,start_s:ge.start_s,end_s:ge.end_s})),gateway_outages:[]};try{const ge=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:ve})});if(ge.ok){const Ce=await ge.json();s(Ce),a(ve),W(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((((ye=Ce.simulation_result)==null?void 0:ye.overall_availability)||.99)*100).toFixed(2)}%`,"success"),ce("analytics")}else s({scenario_id:"custom_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane}`,description:`Конфигурация ${z.planes}x${z.satsPerPlane} @ ${z.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ne,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),W(`3D-карта перестроена (${ne.length} аппаратов)`,"info")}catch{s({scenario_id:"custom_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane}`,description:`Конфигурация ${z.planes}x${z.satsPerPlane} @ ${z.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ne,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),W(`3D-карта перестроена под конфигурацию (${ne.length} аппаратов)`,"info")}finally{u(!1)}},I=()=>{const z=o||{schema_version:"cosmo-A-1.0",meta:{id:n,title:(r==null?void 0:r.title)||"Сценарий Группировки"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},satellites:r==null?void 0:r.satellites,gateways:r==null?void 0:r.gateways},L=JSON.stringify(z,null,2),ue=new Blob([L],{type:"application/json"}),ne=URL.createObjectURL(ue),xe=document.createElement("a");xe.href=ne,xe.download=`scenario_${n}_export.json`,xe.click(),URL.revokeObjectURL(ne),W("Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)","success")},O=()=>{if(!r){W("Нет данных симуляции для экспорта","warning");return}const z=JSON.stringify(r,null,2),L=new Blob([z],{type:"application/json"}),ue=URL.createObjectURL(L),ne=document.createElement("a");ne.href=ue,ne.download=`simulation_results_${n}_export.json`,ne.click(),URL.revokeObjectURL(ue),W("Итоговые результаты моделирования экспортированы в JSON","success")},j=z=>{x(z),y(z.id),W(`Камера сфокусирована на спутнике [${z.id}]. Отображается 3D-конус угла обзора (10°)`,"info")},te=async(z,L=S.planeRaanMap,ue=S.planePhaseMap)=>{var ne;u(!0);try{const xe=o?JSON.parse(JSON.stringify(o)):{schema_version:"cosmo-A-1.0",meta:{id:n,title:(r==null?void 0:r.title)||"Сценарий"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:[{id:"P1",raan_deg:0,phase_deg:0},{id:"P2",raan_deg:60,phase_deg:15},{id:"P3",raan_deg:120,phase_deg:30},{id:"P4",raan_deg:180,phase_deg:45},{id:"P5",raan_deg:240,phase_deg:60},{id:"P6",raan_deg:300,phase_deg:75}],satellites:((r==null?void 0:r.satellites)||[]).map(ye=>({id:ye.id,plane_id:`P${ye.plane}`,slot_deg:ye.idx,launch_batch:1}))},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}]};(ne=xe.design)!=null&&ne.planes&&(xe.design.planes=xe.design.planes.map(ye=>{const ge=parseInt(String(ye.id).replace("P",""))||1,Ce=L[ge]??0,He=ue[ge]??0;return{...ye,raan_deg:Math.round((((ye.raan_deg??0)+Ce)%360+360)%360*10)/10,phase_deg:Math.round((((ye.phase_deg??0)+He)%360+360)%360*10)/10}})),xe.failures=z.map(ye=>({satellite_id:ye.satellite_id,start_s:ye.start_s,end_s:ye.end_s}));const ve=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:xe})});if(ve.ok){const ye=await ve.json();s(ye),a(xe)}}catch(xe){console.error(xe)}finally{u(!1)}};be.useEffect(()=>{if(!r)return;const z=setTimeout(()=>{te(m,S.planeRaanMap,S.planePhaseMap)},250);return()=>clearTimeout(z)},[S.planeRaanMap,S.planePhaseMap]);const ae=(z,L)=>{const ue={satellite_id:z,start_s:d,end_s:d+L},ne=[...m.filter(xe=>xe.satellite_id!==z),ue];f(ne),x(null),W(`Спутник [${z}] выведен из строя на ${L}с! Вся топология пересчитана.`,"warning"),te(ne)},De=z=>{const L=m.filter(ue=>ue.satellite_id!==z);f(L),x(null),W(`Работа спутника [${z}] успешно восстановлена`,"success"),te(L)},B=z=>{f(z),te(z)},re=()=>{f([]),te([])},J=z=>{z==="phase_shift"?(T(L=>({...L,planePhaseMap:{...L.planePhaseMap,1:(L.planePhaseMap[1]||0)+15}})),W("Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1","success")):z==="reroute_isl"&&(le(),W("Применена рекомендация: Перестроена графовая маршрутизация ISL линий","success"))},le=async()=>{var z;u(!0),W("Запуск полного математического моделирования...","info");try{if(o)await G(o);else{const L=await fetch(`/api/simulate?scenario_id=${n}`);if(L.ok){const ue=await L.json();s(ue),W(`Моделирование завершено: Общая доступность ${((((z=ue.simulation_result)==null?void 0:z.overall_availability)||.9998)*100).toFixed(2)}%`,"success")}}}catch{W("Ошибка при вычислении симуляции","error")}finally{u(!1),ce("analytics")}},ce=z=>{const L=D+1;V(L),w(ue=>({...ue,[z]:{isOpen:!0,zIndex:L}})),W(`Открыто окно: ${z}`,"info")},fe=z=>{w(L=>({...L,[z]:{...L[z],isOpen:!1}}))},Re=z=>{const L=D+1;V(L),w(ue=>({...ue,[z]:{...ue[z],zIndex:L}}))};return c.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#1a1a1a",overflow:"hidden"},children:[c.jsx(S1,{scenarios:t,activeScenario:n,onSelectScenario:z=>i(z),onRunSimulation:le,onOpenWindow:ce,onToggleSidebar:()=>p(!h),onUploadScenarioJson:G,onExportScenarioJson:I,onExportResultsJson:O,onResetState:Q,isSidebarOpen:h,isSimulating:l}),c.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[v&&c.jsxs("button",{onClick:()=>y(null),style:{position:"absolute",top:"16px",left:"16px",zIndex:85,backgroundColor:"#1473e6",color:"#ffffff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)"},children:[c.jsx(Ml,{size:14}),c.jsx("span",{children:"Сбросить фокус камеры (Вся Земля)"})]}),c.jsxs("div",{style:{flex:1,position:"relative"},children:[c.jsx(uT,{scenario:r,currentTimeSeconds:d,onSelectSatellite:j}),c.jsx(Zb,{scenario:r,settings:S,currentTime:d,outages:m,focusedSatelliteId:v,onSelectSatellite:j})]}),c.jsx(M1,{settings:S,onChangeSettings:T,isOpen:h}),c.jsx(cT,{currentTime:d,maxTime:86400,stepSeconds:S.stepSeconds,onChangeStep:z=>T(L=>({...L,stepSeconds:z})),onChangeTime:g}),c.jsx(dT,{satellite:_,currentOutages:m,currentTimeSeconds:d,onClose:()=>x(null),onApplyOutage:ae,onRestoreSatellite:De}),c.jsx(Tl,{id:"analytics",title:"Аналитика Группировки & Рекомендации Регламента",isOpen:b.analytics.isOpen,onClose:()=>fe("analytics"),zIndex:b.analytics.zIndex,onFocus:()=>Re("analytics"),initialPos:{x:60,y:60,width:880,height:560},children:c.jsx(iT,{scenario:r,outages:m,currentTime:d,onApplyRecommendation:J,onExportResultsJson:O})}),c.jsx(Tl,{id:"configurator",title:"Конфигуратор Параметров Группировки",isOpen:b.configurator.isOpen,onClose:()=>fe("configurator"),zIndex:b.configurator.zIndex,onFocus:()=>Re("configurator"),initialPos:{x:180,y:90,width:680,height:460},children:c.jsx(sT,{onApplyConfig:k,onExportJson:I})}),c.jsx(Tl,{id:"compare",title:"Сравнение Проектов & Сценариев",isOpen:b.compare.isOpen,onClose:()=>fe("compare"),zIndex:b.compare.zIndex,onFocus:()=>Re("compare"),initialPos:{x:260,y:120,width:720,height:420},children:c.jsx(aT,{onOpenConfigurator:()=>ce("configurator")})}),c.jsx(hT,{isOpen:b.emergency.isOpen,onClose:()=>fe("emergency"),zIndex:b.emergency.zIndex,onFocusWindow:()=>Re("emergency"),currentOutages:m,outlinerSettings:S,onApplyOutageBatch:B,onClearOutages:re,onUpdateSettings:T,onAddLog:W}),c.jsx(lT,{logs:M})]})]})};function Mo(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}const Sg=document.getElementById("root");Sg&&qu.createRoot(Sg).render(c.jsx(F_.StrictMode,{children:c.jsx(_T,{})}));
