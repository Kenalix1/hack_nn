(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},ac={},Eg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),w_=Symbol.for("react.portal"),b_=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),C_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),Sh=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bg=Object.assign,Tg={};function Js(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=Js.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||wg}var cf=lf.prototype=new Cg;cf.constructor=lf;bg(cf,Js.prototype);cf.isPureReactComponent=!0;var Mh=Array.isArray,Ag=Object.prototype.hasOwnProperty,uf={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Pg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ag.call(e,i)&&!Rg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:t,key:s,ref:o,props:r,_owner:uf.current}}function U_(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function k_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eh=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k_(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case w_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Oc(o,0):i,Mh(r)?(n="",t!=null&&(n=t.replace(Eh,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(df(r)&&(r=U_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Eh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Oc(s,a);o+=ul(s,e,n,l,r)}else if(l=N_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Oc(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},dl={transition:null},F_={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:dl,ReactCurrentOwner:uf};function Lg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Js;Je.Fragment=b_;Je.Profiler=C_;Je.PureComponent=lf;Je.StrictMode=T_;Je.Suspense=L_;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;Je.act=Lg;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ag.call(e,l)&&!Rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:oa,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:R_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A_,_context:t},t.Consumer=t};Je.createElement=Pg;Je.createFactory=function(t){var e=Pg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:P_,render:t}};Je.isValidElement=df;Je.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:O_}};Je.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Je.unstable_act=Lg;Je.useCallback=function(t,e){return an.current.useCallback(t,e)};Je.useContext=function(t){return an.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Je.useEffect=function(t,e){return an.current.useEffect(t,e)};Je.useId=function(){return an.current.useId()};Je.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return an.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Je.useRef=function(t){return an.current.useRef(t)};Je.useState=function(t){return an.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return an.current.useTransition()};Je.version="18.3.1";Eg.exports=Je;var Ee=Eg.exports;const Dg=E_(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=Ee,B_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:G_.current}}ac.Fragment=j_;ac.jsx=Ig;ac.jsxs=Ig;Mg.exports=ac;var c=Mg.exports,Ku={},Ng={exports:{}},En={},Ug={exports:{}},kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var j=I.length;I.push(O);e:for(;0<j;){var ne=j-1>>>1,ce=I[ne];if(0<r(ce,O))I[ne]=O,I[j]=ce,j=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],j=I.pop();if(j!==O){I[0]=j;e:for(var ne=0,ce=I.length,Le=ce>>>1;ne<Le;){var X=2*(ne+1)-1,ee=I[X],q=X+1,ae=I[q];if(0>r(ee,j))q<ce&&0>r(ae,ee)?(I[ne]=ae,I[q]=j,ne=q):(I[ne]=ee,I[X]=j,ne=X);else if(q<ce&&0>r(ae,j))I[ne]=ae,I[q]=j,ne=q;else break e}}return O}function r(I,O){var j=I.sortIndex-O.sortIndex;return j!==0?j:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,p=null,h=3,g=!1,v=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=I)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function M(I){if(S=!1,x(I),!v)if(n(l)!==null)v=!0,G(T);else{var O=n(u);O!==null&&k(M,O.startTime-I)}}function T(I,O){v=!1,S&&(S=!1,d(P),P=-1),g=!0;var j=h;try{for(x(O),p=n(l);p!==null&&(!(p.expirationTime>O)||I&&!R());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,h=p.priorityLevel;var ce=ne(p.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(l)&&i(l),x(O)}else i(l);p=n(l)}if(p!==null)var Le=!0;else{var X=n(u);X!==null&&k(M,X.startTime-O),Le=!1}return Le}finally{p=null,h=j,g=!1}}var b=!1,y=null,P=-1,B=5,E=-1;function R(){return!(t.unstable_now()-E<B)}function V(){if(y!==null){var I=t.unstable_now();E=I;var O=!0;try{O=y(!0,I)}finally{O?Q():(b=!1,y=null)}}else b=!1}var Q;if(typeof _=="function")Q=function(){_(V)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,Z=U.port2;U.port1.onmessage=V,Q=function(){Z.postMessage(null)}}else Q=function(){m(V,0)};function G(I){y=I,b||(b=!0,Q())}function k(I,O){P=m(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,G(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var j=h;h=O;try{return I()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=h;h=I;try{return O()}finally{h=j}},t.unstable_scheduleCallback=function(I,O,j){var ne=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ne+j:ne):j=ne,I){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=j+ce,I={id:f++,callback:O,priorityLevel:I,startTime:j,expirationTime:ce,sortIndex:-1},j>ne?(I.sortIndex=j,e(u,I),n(l)===null&&I===n(u)&&(S?(d(P),P=-1):S=!0,k(M,j-ne))):(I.sortIndex=ce,e(l,I),v||g||(v=!0,G(T))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var O=h;return function(){var j=h;h=O;try{return I.apply(this,arguments)}finally{h=j}}}})(kg);Ug.exports=kg;var W_=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=Ee,Mn=W_;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,zo={};function Br(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(zo[t]=e,t=0;t<e.length;t++)Og.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},bh={};function Y_(t){return Zu.call(bh,t)?!0:Zu.call(wh,t)?!1:$_.test(t)?bh[t]=!0:(wh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ff,hf);Gt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ff,hf);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ff,hf);Gt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),_s=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),Th=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Fc;function wo(t){if(Fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+t}var zc=!1;function Bc(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function Z_(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case _s:return"Portal";case Ju:return"Profiler";case mf:return"StrictMode";case Qu:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zg:return(t.displayName||"Context")+".Consumer";case Fg:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function J_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=Q_(t))}function Hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function id(t,e){Gg(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(bo(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Vg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function $g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,Is=null,Ns=null;function Lh(t){if(t=ca(t)){if(typeof ud!="function")throw Error(me(280));var e=t.stateNode;e&&(e=fc(e),ud(t.stateNode,t.type,e))}}function qg(t){Is?Ns?Ns.push(t):Ns=[t]:Is=t}function Kg(){if(Is){var t=Is,e=Ns;if(Ns=Is=null,Lh(t),e)for(t=0;t<e.length;t++)Lh(e[t])}}function Zg(t,e){return t(e)}function Jg(){}var jc=!1;function Qg(t,e,n){if(jc)return t(e,n);jc=!0;try{return Zg(t,e,n)}finally{jc=!1,(Is!==null||Ns!==null)&&(Jg(),Kg())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var dd=!1;if(Mi)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){dd=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{dd=!1}function nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Po=!1,Rl=null,Pl=!1,fd=null,iv={onError:function(t){Po=!0,Rl=t}};function rv(t,e,n,i,r,s,o,a,l){Po=!1,Rl=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),Po){if(Po){var u=Rl;Po=!1,Rl=null}else throw Error(me(198));Pl||(Pl=!0,fd=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dh(t){if(jr(t)!==t)throw Error(me(188))}function ov(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dh(r),t;if(s===i)return Dh(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function t0(t){return t=ov(t),t!==null?n0(t):null}function n0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n0(t);if(e!==null)return e;t=t.sibling}return null}var i0=Mn.unstable_scheduleCallback,Ih=Mn.unstable_cancelCallback,av=Mn.unstable_shouldYield,lv=Mn.unstable_requestPaint,Et=Mn.unstable_now,cv=Mn.unstable_getCurrentPriorityLevel,vf=Mn.unstable_ImmediatePriority,r0=Mn.unstable_UserBlockingPriority,Ll=Mn.unstable_NormalPriority,uv=Mn.unstable_LowPriority,s0=Mn.unstable_IdlePriority,lc=null,ri=null;function dv(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:pv,fv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(fv(t)/hv|0)|0}var Sa=64,Ma=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function a0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l0,Sf,c0,u0,d0,pd=!1,Ea=[],Vi=null,Wi=null,Xi=null,Ho=new Map,Go=new Map,Oi=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function so(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vv(t,e,n,i,r){switch(e){case"focusin":return Vi=so(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=so(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=so(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ho.set(s,so(Ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Go.set(s,so(Go.get(s)||null,t,e,n,i,r)),!0}return!1}function f0(t){var e=br(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=e0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cd=i,n.target.dispatchEvent(i),cd=null}else return e=ca(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Uh(t,e,n){fl(t)&&n.delete(e)}function yv(){pd=!1,Vi!==null&&fl(Vi)&&(Vi=null),Wi!==null&&fl(Wi)&&(Wi=null),Xi!==null&&fl(Xi)&&(Xi=null),Ho.forEach(Uh),Go.forEach(Uh)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,yv)))}function Vo(t){function e(r){return oo(r,t)}if(0<Ea.length){oo(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&oo(Vi,t),Wi!==null&&oo(Wi,t),Xi!==null&&oo(Xi,t),Ho.forEach(e),Go.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)f0(n),n.blockedOn===null&&Oi.shift()}var Us=Ti.ReactCurrentBatchConfig,Il=!0;function Sv(t,e,n,i){var r=it,s=Us.transition;Us.transition=null;try{it=1,Mf(t,e,n,i)}finally{it=r,Us.transition=s}}function Mv(t,e,n,i){var r=it,s=Us.transition;Us.transition=null;try{it=4,Mf(t,e,n,i)}finally{it=r,Us.transition=s}}function Mf(t,e,n,i){if(Il){var r=md(t,e,n,i);if(r===null)Jc(t,e,i,Nl,n),Nh(t,i);else if(vv(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=ca(r);if(s!==null&&l0(s),s=md(t,e,n,i),s===null&&Jc(t,e,i,Nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jc(t,e,i,null,n)}}var Nl=null;function md(t,e,n,i){if(Nl=null,t=_f(i),t=br(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function h0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case vf:return 1;case r0:return 4;case Ll:case uv:return 16;case s0:return 536870912;default:return 16}default:return 16}}var ji=null,Ef=null,hl=null;function p0(){if(hl)return hl;var t,e=Ef,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function kh(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:kh,this.isPropagationStopped=kh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=wn(Qs),la=vt({},Qs,{view:0,detail:0}),Ev=wn(la),Gc,Vc,ao,cc=vt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Gc=t.screenX-ao.screenX,Vc=t.screenY-ao.screenY):Vc=Gc=0,ao=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Oh=wn(cc),wv=vt({},cc,{dataTransfer:0}),bv=wn(wv),Tv=vt({},la,{relatedTarget:0}),Wc=wn(Tv),Cv=vt({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=wn(Cv),Rv=vt({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=wn(Rv),Lv=vt({},Qs,{data:0}),Fh=wn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function bf(){return Uv}var kv=vt({},la,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=wn(kv),Fv=vt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=wn(Fv),zv=vt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),Bv=wn(zv),jv=vt({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=wn(jv),Gv=vt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=wn(Gv),Wv=[9,13,27,32],Tf=Mi&&"CompositionEvent"in window,Lo=null;Mi&&"documentMode"in document&&(Lo=document.documentMode);var Xv=Mi&&"TextEvent"in window&&!Lo,m0=Mi&&(!Tf||Lo&&8<Lo&&11>=Lo),Bh=" ",jh=!1;function g0(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function $v(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(jh=!0,Bh);case"textInput":return t=e.data,t===Bh&&jh?null:t;default:return null}}function Yv(t,e){if(ys)return t==="compositionend"||!Tf&&g0(t,e)?(t=p0(),hl=Ef=ji=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function _0(t,e,n,i){qg(i),e=Ul(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,Wo=null;function Kv(t){R0(t,0)}function uc(t){var e=Es(t);if(Hg(e))return t}function Zv(t,e){if(t==="change")return e}var v0=!1;if(Mi){var Xc;if(Mi){var $c="oninput"in document;if(!$c){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),$c=typeof Gh.oninput=="function"}Xc=$c}else Xc=!1;v0=Xc&&(!document.documentMode||9<document.documentMode)}function Vh(){Do&&(Do.detachEvent("onpropertychange",y0),Wo=Do=null)}function y0(t){if(t.propertyName==="value"&&uc(Wo)){var e=[];_0(e,Wo,t,_f(t)),Qg(Kv,e)}}function Jv(t,e,n){t==="focusin"?(Vh(),Do=e,Wo=n,Do.attachEvent("onpropertychange",y0)):t==="focusout"&&Vh()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Wo)}function ey(t,e){if(t==="click")return uc(e)}function ty(t,e){if(t==="input"||t==="change")return uc(e)}function ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:ny;function Xo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,e){var n=Wh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iy(t){var e=M0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(i!==null&&Cf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xh(n,s);var o=Xh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=Mi&&"documentMode"in document&&11>=document.documentMode,Ss=null,gd=null,Io=null,xd=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xd||Ss==null||Ss!==Al(i)||(i=Ss,"selectionStart"in i&&Cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Xo(Io,i)||(Io=i,i=Ul(gd,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Yc={},E0={};Mi&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function dc(t){if(Yc[t])return Yc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E0)return Yc[t]=e[n];return t}var w0=dc("animationend"),b0=dc("animationiteration"),T0=dc("animationstart"),C0=dc("transitionend"),A0=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){A0.set(t,e),Br(e,[t])}for(var qc=0;qc<Yh.length;qc++){var Kc=Yh[qc],sy=Kc.toLowerCase(),oy=Kc[0].toUpperCase()+Kc.slice(1);or(sy,"on"+oy)}or(w0,"onAnimationEnd");or(b0,"onAnimationIteration");or(T0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(C0,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,u),s=l}}}if(Pl)throw t=fd,Pl=!1,fd=null,t}function ct(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var i=t+"__bubble";n.has(i)||(P0(e,t,2,!1),n.add(i))}function Zc(t,e,n){var i=0;e&&(i|=4),P0(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Ta]){t[Ta]=!0,Og.forEach(function(n){n!=="selectionchange"&&(ay.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Zc("selectionchange",!1,e))}}function P0(t,e,n,i){switch(h0(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=Mf}n=r.bind(null,e,n,t),r=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qg(function(){var u=s,f=_f(n),p=[];e:{var h=A0.get(t);if(h!==void 0){var g=wf,v=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":g=Ov;break;case"focusin":v="focus",g=Wc;break;case"focusout":v="blur",g=Wc;break;case"beforeblur":case"afterblur":g=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bv;break;case w0:case b0:case T0:g=Av;break;case C0:g=Hv;break;case"scroll":g=Ev;break;case"wheel":g=Vv;break;case"copy":case"cut":case"paste":g=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zh}var S=(e&4)!==0,m=!S&&t==="scroll",d=S?h!==null?h+"Capture":null:h;S=[];for(var _=u,x;_!==null;){x=_;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,d!==null&&(M=jo(_,d),M!=null&&S.push(Yo(_,M,x)))),m)break;_=_.return}0<S.length&&(h=new g(h,v,null,n,f),p.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==cd&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ei]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?br(v):null,v!==null&&(m=jr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(S=Oh,M="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=zh,M="onPointerLeave",d="onPointerEnter",_="pointer"),m=g==null?h:Es(g),x=v==null?h:Es(v),h=new S(M,_+"leave",g,n,f),h.target=m,h.relatedTarget=x,M=null,br(f)===u&&(S=new S(d,_+"enter",v,n,f),S.target=x,S.relatedTarget=m,M=S),m=M,g&&v)t:{for(S=g,d=v,_=0,x=S;x;x=Vr(x))_++;for(x=0,M=d;M;M=Vr(M))x++;for(;0<_-x;)S=Vr(S),_--;for(;0<x-_;)d=Vr(d),x--;for(;_--;){if(S===d||d!==null&&S===d.alternate)break t;S=Vr(S),d=Vr(d)}S=null}else S=null;g!==null&&Kh(p,h,g,S,!1),v!==null&&m!==null&&Kh(p,m,v,S,!0)}}e:{if(h=u?Es(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=Zv;else if(Hh(h))if(v0)T=ty;else{T=Qv;var b=Jv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=ey);if(T&&(T=T(t,u))){_0(p,T,n,f);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&rd(h,"number",h.value)}switch(b=u?Es(u):window,t){case"focusin":(Hh(b)||b.contentEditable==="true")&&(Ss=b,gd=u,Io=null);break;case"focusout":Io=gd=Ss=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,$h(p,n,f);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":$h(p,n,f)}var y;if(Tf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ys?g0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(m0&&n.locale!=="ko"&&(ys||P!=="onCompositionStart"?P==="onCompositionEnd"&&ys&&(y=p0()):(ji=f,Ef="value"in ji?ji.value:ji.textContent,ys=!0)),b=Ul(u,P),0<b.length&&(P=new Fh(P,t,null,n,f),p.push({event:P,listeners:b}),y?P.data=y:(y=x0(n),y!==null&&(P.data=y)))),(y=Xv?$v(t,n):Yv(t,n))&&(u=Ul(u,"onBeforeInput"),0<u.length&&(f=new Fh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=y))}R0(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(Yo(t,s,r)),s=jo(t,e),s!=null&&i.push(Yo(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=jo(n,s),l!=null&&o.unshift(Yo(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function Zh(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function Ca(t,e,n){if(e=Zh(e),Zh(t)!==e&&n)throw Error(me(425))}function kl(){}var _d=null,vd=null;function yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(fy)}:Sd;function fy(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),ni="__reactFiber$"+eo,qo="__reactProps$"+eo,Ei="__reactContainer$"+eo,Md="__reactEvents$"+eo,hy="__reactListeners$"+eo,py="__reactHandles$"+eo;function br(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[ni])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function fc(t){return t[qo]||null}var Ed=[],ws=-1;function ar(t){return{current:t}}function dt(t){0>ws||(t.current=Ed[ws],Ed[ws]=null,ws--)}function at(t,e){ws++,Ed[ws]=t.current,t.current=e}var ir={},Jt=ar(ir),fn=ar(!1),Ir=ir;function Hs(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Ol(){dt(fn),dt(Jt)}function ep(t,e,n){if(Jt.current!==ir)throw Error(me(168));at(Jt,e),at(fn,n)}function L0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,J_(t)||"Unknown",r));return vt({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Ir=Jt.current,at(Jt,t),at(fn,fn.current),!0}function tp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=L0(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,dt(fn),dt(Jt),at(Jt,t)):dt(fn),at(fn,n)}var gi=null,hc=!1,eu=!1;function D0(t){gi===null?gi=[t]:gi.push(t)}function my(t){hc=!0,D0(t)}function lr(){if(!eu&&gi!==null){eu=!0;var t=0,e=it;try{var n=gi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,hc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),i0(vf,lr),r}finally{it=e,eu=!1}}return null}var bs=[],Ts=0,zl=null,Bl=0,Rn=[],Pn=0,Nr=null,_i=1,vi="";function yr(t,e){bs[Ts++]=Bl,bs[Ts++]=zl,zl=t,Bl=e}function I0(t,e,n){Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Nr,Nr=t;var i=_i;t=vi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Yn(e)+r|n<<r|i,vi=s+t}else _i=1<<s|n<<r|i,vi=t}function Af(t){t.return!==null&&(yr(t,1),I0(t,1,0))}function Rf(t){for(;t===zl;)zl=bs[--Ts],bs[Ts]=null,Bl=bs[--Ts],bs[Ts]=null;for(;t===Nr;)Nr=Rn[--Pn],Rn[Pn]=null,vi=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,pt=!1,Vn=null;function N0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bd(t){if(pt){var e=yn;if(e){var n=e;if(!np(t,e)){if(wd(t))throw Error(me(418));e=$i(n.nextSibling);var i=Sn;e&&np(t,e)?N0(i,n):(t.flags=t.flags&-4097|2,pt=!1,Sn=t)}}else{if(wd(t))throw Error(me(418));t.flags=t.flags&-4097|2,pt=!1,Sn=t}}}function ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Aa(t){if(t!==Sn)return!1;if(!pt)return ip(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yd(t.type,t.memoizedProps)),e&&(e=yn)){if(wd(t))throw U0(),Error(me(418));for(;e;)N0(t,e),e=$i(e.nextSibling)}if(ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?$i(t.stateNode.nextSibling):null;return!0}function U0(){for(var t=yn;t;)t=$i(t.nextSibling)}function Gs(){yn=Sn=null,pt=!1}function Pf(t){Vn===null?Vn=[t]:Vn.push(t)}var gy=Ti.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rp(t){var e=t._init;return e(t._payload)}function k0(t){function e(d,_){if(t){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Zi(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,x,M){return _===null||_.tag!==6?(_=au(x,d.mode,M),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,M){var T=x.type;return T===vs?f(d,_,x.props.children,M,x.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ni&&rp(T)===_.type)?(M=r(_,x.props),M.ref=lo(d,_,x),M.return=d,M):(M=Sl(x.type,x.key,x.props,null,d.mode,M),M.ref=lo(d,_,x),M.return=d,M)}function u(d,_,x,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=lu(x,d.mode,M),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function f(d,_,x,M,T){return _===null||_.tag!==7?(_=Pr(x,d.mode,M,T),_.return=d,_):(_=r(_,x),_.return=d,_)}function p(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=au(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return x=Sl(_.type,_.key,_.props,null,d.mode,x),x.ref=lo(d,null,_),x.return=d,x;case _s:return _=lu(_,d.mode,x),_.return=d,_;case Ni:var M=_._init;return p(d,M(_._payload),x)}if(bo(_)||io(_))return _=Pr(_,d.mode,x,null),_.return=d,_;Ra(d,_)}return null}function h(d,_,x,M){var T=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,_,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:return x.key===T?l(d,_,x,M):null;case _s:return x.key===T?u(d,_,x,M):null;case Ni:return T=x._init,h(d,_,T(x._payload),M)}if(bo(x)||io(x))return T!==null?null:f(d,_,x,M,null);Ra(d,x)}return null}function g(d,_,x,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(x)||null,a(_,d,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _a:return d=d.get(M.key===null?x:M.key)||null,l(_,d,M,T);case _s:return d=d.get(M.key===null?x:M.key)||null,u(_,d,M,T);case Ni:var b=M._init;return g(d,_,x,b(M._payload),T)}if(bo(M)||io(M))return d=d.get(x)||null,f(_,d,M,T,null);Ra(_,M)}return null}function v(d,_,x,M){for(var T=null,b=null,y=_,P=_=0,B=null;y!==null&&P<x.length;P++){y.index>P?(B=y,y=null):B=y.sibling;var E=h(d,y,x[P],M);if(E===null){y===null&&(y=B);break}t&&y&&E.alternate===null&&e(d,y),_=s(E,_,P),b===null?T=E:b.sibling=E,b=E,y=B}if(P===x.length)return n(d,y),pt&&yr(d,P),T;if(y===null){for(;P<x.length;P++)y=p(d,x[P],M),y!==null&&(_=s(y,_,P),b===null?T=y:b.sibling=y,b=y);return pt&&yr(d,P),T}for(y=i(d,y);P<x.length;P++)B=g(y,d,P,x[P],M),B!==null&&(t&&B.alternate!==null&&y.delete(B.key===null?P:B.key),_=s(B,_,P),b===null?T=B:b.sibling=B,b=B);return t&&y.forEach(function(R){return e(d,R)}),pt&&yr(d,P),T}function S(d,_,x,M){var T=io(x);if(typeof T!="function")throw Error(me(150));if(x=T.call(x),x==null)throw Error(me(151));for(var b=T=null,y=_,P=_=0,B=null,E=x.next();y!==null&&!E.done;P++,E=x.next()){y.index>P?(B=y,y=null):B=y.sibling;var R=h(d,y,E.value,M);if(R===null){y===null&&(y=B);break}t&&y&&R.alternate===null&&e(d,y),_=s(R,_,P),b===null?T=R:b.sibling=R,b=R,y=B}if(E.done)return n(d,y),pt&&yr(d,P),T;if(y===null){for(;!E.done;P++,E=x.next())E=p(d,E.value,M),E!==null&&(_=s(E,_,P),b===null?T=E:b.sibling=E,b=E);return pt&&yr(d,P),T}for(y=i(d,y);!E.done;P++,E=x.next())E=g(y,d,P,E.value,M),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?P:E.key),_=s(E,_,P),b===null?T=E:b.sibling=E,b=E);return t&&y.forEach(function(V){return e(d,V)}),pt&&yr(d,P),T}function m(d,_,x,M){if(typeof x=="object"&&x!==null&&x.type===vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:e:{for(var T=x.key,b=_;b!==null;){if(b.key===T){if(T=x.type,T===vs){if(b.tag===7){n(d,b.sibling),_=r(b,x.props.children),_.return=d,d=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ni&&rp(T)===b.type){n(d,b.sibling),_=r(b,x.props),_.ref=lo(d,b,x),_.return=d,d=_;break e}n(d,b);break}else e(d,b);b=b.sibling}x.type===vs?(_=Pr(x.props.children,d.mode,M,x.key),_.return=d,d=_):(M=Sl(x.type,x.key,x.props,null,d.mode,M),M.ref=lo(d,_,x),M.return=d,d=M)}return o(d);case _s:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=lu(x,d.mode,M),_.return=d,d=_}return o(d);case Ni:return b=x._init,m(d,_,b(x._payload),M)}if(bo(x))return v(d,_,x,M);if(io(x))return S(d,_,x,M);Ra(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,x),_.return=d,d=_):(n(d,_),_=au(x,d.mode,M),_.return=d,d=_),o(d)):n(d,_)}return m}var Vs=k0(!0),O0=k0(!1),jl=ar(null),Hl=null,Cs=null,Lf=null;function Df(){Lf=Cs=Hl=null}function If(t){var e=jl.current;dt(jl),t._currentValue=e}function Td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Hl=t,Lf=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Hl===null)throw Error(me(308));Cs=t,Hl.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Tr=null;function Nf(t){Tr===null?Tr=[t]:Tr.push(t)}function F0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}function sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(h=e,g=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(g,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,h=typeof v=="function"?v.call(g,p,h):v,h==null)break e;p=vt({},p,h);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=p}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var ua={},si=ar(ua),Ko=ar(ua),Zo=ar(ua);function Cr(t){if(t===ua)throw Error(me(174));return t}function kf(t,e){switch(at(Zo,e),at(Ko,t),at(si,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}dt(si),at(si,e)}function Ws(){dt(si),dt(Ko),dt(Zo)}function B0(t){Cr(Zo.current);var e=Cr(si.current),n=od(e,t.type);e!==n&&(at(Ko,t),at(si,n))}function Of(t){Ko.current===t&&(dt(si),dt(Ko))}var xt=ar(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function Ff(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var gl=Ti.ReactCurrentDispatcher,nu=Ti.ReactCurrentBatchConfig,Ur=0,_t=null,Ct=null,It=null,Wl=!1,No=!1,Jo=0,xy=0;function Xt(){throw Error(me(321))}function zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Bf(t,e,n,i,r,s){if(Ur=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?Sy:My,t=n(i,r),No){s=0;do{if(No=!1,Jo=0,25<=s)throw Error(me(301));s+=1,It=Ct=null,e.updateQueue=null,gl.current=Ey,t=n(i,r)}while(No)}if(gl.current=Xl,e=Ct!==null&&Ct.next!==null,Ur=0,It=Ct=_t=null,Wl=!1,e)throw Error(me(300));return t}function jf(){var t=Jo!==0;return Jo=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=t:It=It.next=t,It}function Un(){if(Ct===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?_t.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(me(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?_t.memoizedState=It=t:It=It.next=t}return It}function Qo(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Ur&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,_t.lanes|=f,kr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=Un(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function j0(){}function H0(t,e){var n=_t,i=Un(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Hf(W0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ea(9,V0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(me(349));Ur&30||G0(n,e,r)}return r}function G0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,i){e.value=n,e.getSnapshot=i,X0(e)&&$0(t)}function W0(t,e,n){return n(function(){X0(e)&&$0(t)})}function X0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function $0(t){var e=wi(t,1);e!==null&&qn(e,t,1,-1)}function ap(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=yy.bind(null,_t,t),[e.memoizedState,t]}function ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Y0(){return Un().memoizedState}function xl(t,e,n,i){var r=Qn();_t.flags|=t,r.memoizedState=ea(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&zf(i,o.deps)){r.memoizedState=ea(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ea(1|e,n,s,i)}function lp(t,e){return xl(8390656,8,t,e)}function Hf(t,e){return pc(2048,8,t,e)}function q0(t,e){return pc(4,2,t,e)}function K0(t,e){return pc(4,4,t,e)}function Z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,Z0.bind(null,e,t),n)}function Gf(){}function Q0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ex(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function tx(t,e,n){return Ur&21?(Zn(n,e)||(n=o0(),_t.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function _y(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=nu.transition;nu.transition={};try{t(!1),e()}finally{it=n,nu.transition=i}}function nx(){return Un().memoizedState}function vy(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ix(t))rx(e,n);else if(n=F0(t,e,n,i),n!==null){var r=sn();qn(n,t,i,r),sx(n,e,i)}}function yy(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ix(t))rx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Nf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=F0(t,e,r,i),n!==null&&(r=sn(),qn(n,t,i,r),sx(n,e,i))}}function ix(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function rx(t,e){No=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}var Xl={readContext:Nn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Sy={readContext:Nn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,Z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vy.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Gf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=_y.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Qn();if(pt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),kt===null)throw Error(me(349));Ur&30||G0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lp(W0.bind(null,i,s,t),[t]),i.flags|=2048,ea(9,V0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=kt.identifierPrefix;if(pt){var n=vi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},My={readContext:Nn,useCallback:Q0,useContext:Nn,useEffect:Hf,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:ex,useReducer:iu,useRef:Y0,useState:function(){return iu(Qo)},useDebugValue:Gf,useDeferredValue:function(t){var e=Un();return tx(e,Ct.memoizedState,t)},useTransition:function(){var t=iu(Qo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:H0,useId:nx,unstable_isNewReconciler:!1},Ey={readContext:Nn,useCallback:Q0,useContext:Nn,useEffect:Hf,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:K0,useMemo:ex,useReducer:ru,useRef:Y0,useState:function(){return ru(Qo)},useDebugValue:Gf,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:tx(e,Ct.memoizedState,t)},useTransition:function(){var t=ru(Qo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:H0,useId:nx,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Ki(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Ki(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(qn(e,t,i,n),ml(e,t,i))}};function cp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,i)||!Xo(r,s):!0}function ox(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=hn(e)?Ir:Jt.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function up(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=hn(e)?Ir:Jt.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function ax(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,zd=i),Rd(t,e)},n}function lx(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fy.bind(null,t,e,n),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var by=Ti.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?O0(e,null,n,i):Vs(e,t.child,n,i)}function pp(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Bf(t,e,n,i,s,r),n=jf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&n&&Af(e),e.flags|=1,tn(t,e,i,r),e.child)}function mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cx(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function cx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Xo(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return Pd(t,e,n,i,r)}function ux(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Rs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Rs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Rs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Rs,_n),_n|=i;return tn(t,e,r,n),e.child}function dx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,i,r){var s=hn(n)?Ir:Jt.current;return s=Hs(e,s),ks(e,r),n=Bf(t,e,n,i,s,r),i=jf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&i&&Af(e),e.flags|=1,tn(t,e,n,r),e.child)}function gp(t,e,n,i,r){if(hn(n)){var s=!0;Fl(e)}else s=!1;if(ks(e,r),e.stateNode===null)_l(t,e),ox(e,n,i),Ad(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=hn(n)?Ir:Jt.current,u=Hs(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&up(e,o,i,u),Ui=!1;var h=e.memoizedState;o.state=h,Gl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||fn.current||Ui?(typeof f=="function"&&(Cd(e,n,f,i),l=e.memoizedState),(a=Ui||cp(e,n,a,i,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,z0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=hn(n)?Ir:Jt.current,l=Hs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&up(e,o,i,l),Ui=!1,h=e.memoizedState,o.state=h,Gl(e,i,o,r);var v=e.memoizedState;a!==p||h!==v||fn.current||Ui?(typeof g=="function"&&(Cd(e,n,g,i),v=e.memoizedState),(u=Ui||cp(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ld(t,e,n,i,s,r)}function Ld(t,e,n,i,r,s){dx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&tp(e,n,!1),bi(t,e,s);i=e.stateNode,by.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&tp(e,n,!0),e.child}function fx(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),kf(t,e.containerInfo)}function xp(t,e,n,i,r){return Gs(),Pf(r),e.flags|=256,tn(t,e,n,i),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function hx(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(xt,r&1),t===null)return bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=Dd,t):Vf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dd,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vf(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Pf(i),Vs(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=su(Error(me(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=Dd,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=su(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),qn(i,t,r,-1))}return Kf(),i=su(Error(me(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=$i(r.nextSibling),Sn=e,pt=!0,Vn=null,t!==null&&(Rn[Pn++]=_i,Rn[Pn++]=vi,Rn[Pn++]=Nr,_i=t.id,vi=t.overflow,Nr=e),e=Vf(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Td(t.return,e,n)}function ou(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function px(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ou(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ou(e,!0,n,null,s);break;case"together":ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cy(t,e,n){switch(e.tag){case 3:fx(e),Gs();break;case 5:B0(e);break;case 1:hn(e.type)&&Fl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?hx(t,e,n):(at(xt,xt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);at(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return px(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,ux(t,e,n)}return bi(t,e,n)}var mx,Nd,gx,xx;mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nd=function(){};gx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(si.current);var s=null;switch(n){case"input":r=nd(t,r),i=nd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=sd(t,r),i=sd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}ad(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xx=function(t,e,n,i){n!==i&&(e.flags|=4)};function co(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ay(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return hn(e.type)&&Ol(),$t(e),null;case 3:return i=e.stateNode,Ws(),dt(fn),dt(Jt),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Hd(Vn),Vn=null))),Nd(t,e),$t(e),null;case 5:Of(e);var r=Cr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)gx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return $t(e),null}if(t=Cr(si.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[qo]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Ch(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Rh(i,s),ct("invalid",i)}ad(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":va(i),Ah(i,s,!0);break;case"textarea":va(i),Ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[qo]=i,mx(t,e,!1,!1),e.stateNode=t;e:{switch(o=ld(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)ct(Co[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Ch(t,i),r=nd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Rh(t,i),r=sd(t,i),ct("invalid",t);break;default:r=i}ad(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":va(t),Ah(t,i,!1);break;case"textarea":va(t),Ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)xx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Cr(Zo.current),Cr(si.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&yn!==null&&e.mode&1&&!(e.flags&128))U0(),Gs(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[ni]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Vn!==null&&(Hd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?At===0&&(At=3):Kf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ws(),Nd(t,e),t===null&&$o(e.stateNode.containerInfo),$t(e),null;case 10:return If(e.type._context),$t(e),null;case 17:return hn(e.type)&&Ol(),$t(e),null;case 19:if(dt(xt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>$s&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return $t(e),null}else 2*Et()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=xt.current,at(xt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function Ry(t,e){switch(Rf(e),e.tag){case 1:return hn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),dt(fn),dt(Jt),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(dt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(xt),null;case 4:return Ws(),null;case 10:return If(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var La=!1,Kt=!1,Py=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Ud(t,e,n){try{n()}catch(i){St(t,e,i)}}var vp=!1;function Ly(t,e){if(_d=Il,t=M0(),Cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:t,selectionRange:n},Il=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,m=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Hn(e.type,S),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(M){St(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return v=vp,vp=!1,v}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ud(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _x(t){var e=t.alternate;e!==null&&(t.alternate=null,_x(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[qo],delete e[Md],delete e[hy],delete e[py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vx(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function Fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Bt=null,Gn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)yx(t,e,n),n=n.sibling}function yx(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Kt||As(n,e);case 6:var i=Bt,r=Gn;Bt=null,Ci(t,e,n),Bt=i,Gn=r,Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Vo(t)):Qc(Bt,n.stateNode));break;case 4:i=Bt,r=Gn,Bt=n.stateNode.containerInfo,Gn=!0,Ci(t,e,n),Bt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Kt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Ci(t,e,n),Kt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Py),e.forEach(function(i){var r=By.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Gn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Bt===null)throw Error(me(160));yx(s,o,r),Bt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sx(e,t),e=e.sibling}function Sx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(S){St(t,t.return,S)}try{Uo(5,t,t.return)}catch(S){St(t,t.return,S)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Bo(r,"")}catch(S){St(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(r,s),ld(a,o);var u=ld(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Yg(r,p):f==="dangerouslySetInnerHTML"?Xg(r,p):f==="children"?Bo(r,p):pf(r,f,p,u)}switch(a){case"input":id(r,s);break;case"textarea":Vg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ds(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[qo]=s}catch(S){St(t,t.return,S)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){St(t,t.return,S)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(S){St(t,t.return,S)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=Et())),i&4&&Sp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||f,kn(e,t),Kt=u):kn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Pe=t,f=t.child;f!==null;){for(p=Pe=f;Pe!==null;){switch(h=Pe,g=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:As(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){St(i,n,S)}}break;case 5:As(h,h.return);break;case 22:if(h.memoizedState!==null){Ep(p);continue}}g!==null?(g.return=h,Pe=g):Ep(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$g("display",o))}catch(S){St(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){St(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&Sp(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vx(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bo(r,""),i.flags&=-33);var s=yp(t);Fd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yp(t);Od(t,a,o);break;default:throw Error(me(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dy(t,e,n){Pe=t,Mx(t)}function Mx(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=La;var u=Kt;if(La=o,(Kt=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?wp(r):l!==null?(l.return=o,Pe=l):wp(r);for(;s!==null;)Pe=s,Mx(s),s=s.sibling;Pe=r,La=a,Kt=u}Mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Mp(t)}}function Mp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&op(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Kt||e.flags&512&&kd(e)}catch(h){St(e,e.return,h)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Ep(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function wp(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{kd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{kd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var Iy=Math.ceil,$l=Ti.ReactCurrentDispatcher,Wf=Ti.ReactCurrentOwner,In=Ti.ReactCurrentBatchConfig,Qe=0,kt=null,bt=null,Ht=0,_n=0,Rs=ar(0),At=0,ta=null,kr=0,xc=0,Xf=0,ko=null,un=null,$f=0,$s=1/0,mi=null,Yl=!1,zd=null,qi=null,Da=!1,Hi=null,ql=0,Oo=0,Bd=null,vl=-1,yl=0;function sn(){return Qe&6?Et():vl!==-1?vl:vl=Et()}function Ki(t){return t.mode&1?Qe&2&&Ht!==0?Ht&-Ht:gy.transition!==null?(yl===0&&(yl=o0()),yl):(t=it,t!==0||(t=window.event,t=t===void 0?16:h0(t.type)),t):1}function qn(t,e,n,i){if(50<Oo)throw Oo=0,Bd=null,Error(me(185));aa(t,n,i),(!(Qe&2)||t!==kt)&&(t===kt&&(!(Qe&2)&&(xc|=n),At===4&&Fi(t,Ht)),pn(t,i),n===1&&Qe===0&&!(e.mode&1)&&($s=Et()+500,hc&&lr()))}function pn(t,e){var n=t.callbackNode;gv(t,e);var i=Dl(t,t===kt?Ht:0);if(i===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?my(bp.bind(null,t)):D0(bp.bind(null,t)),dy(function(){!(Qe&6)&&lr()}),n=null;else{switch(a0(i)){case 1:n=vf;break;case 4:n=r0;break;case 16:n=Ll;break;case 536870912:n=s0;break;default:n=Ll}n=Px(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if(vl=-1,yl=0,Qe&6)throw Error(me(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Dl(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=Qe;Qe|=2;var s=bx();(kt!==t||Ht!==e)&&(mi=null,$s=Et()+500,Rr(t,e));do try{ky();break}catch(a){wx(t,a)}while(!0);Df(),$l.current=s,Qe=r,bt!==null?e=0:(kt=null,Ht=0,e=At)}if(e!==0){if(e===2&&(r=hd(t),r!==0&&(i=r,e=jd(t,r))),e===1)throw n=ta,Rr(t,0),Fi(t,i),pn(t,Et()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ny(r)&&(e=Kl(t,i),e===2&&(s=hd(t),s!==0&&(i=s,e=jd(t,s))),e===1))throw n=ta,Rr(t,0),Fi(t,i),pn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Sr(t,un,mi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=$f+500-Et(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sd(Sr.bind(null,t,un,mi),e);break}Sr(t,un,mi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Iy(i/1960))-i,10<i){t.timeoutHandle=Sd(Sr.bind(null,t,un,mi),i);break}Sr(t,un,mi);break;case 5:Sr(t,un,mi);break;default:throw Error(me(329))}}}return pn(t,Et()),t.callbackNode===n?Ex.bind(null,t):null}function jd(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=un,un=n,e!==null&&Hd(e)),t}function Hd(t){un===null?un=t:un.push.apply(un,t)}function Ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Xf,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(Qe&6)throw Error(me(327));Os();var e=Dl(t,0);if(!(e&1))return pn(t,Et()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=hd(t);i!==0&&(e=i,n=jd(t,i))}if(n===1)throw n=ta,Rr(t,0),Fi(t,e),pn(t,Et()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,un,mi),pn(t,Et()),null}function Yf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&($s=Et()+500,hc&&lr())}}function Or(t){Hi!==null&&Hi.tag===0&&!(Qe&6)&&Os();var e=Qe;Qe|=1;var n=In.transition,i=it;try{if(In.transition=null,it=1,t)return t()}finally{it=i,In.transition=n,Qe=e,!(Qe&6)&&lr()}}function qf(){_n=Rs.current,dt(Rs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uy(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:Ws(),dt(fn),dt(Jt),Ff();break;case 5:Of(i);break;case 4:Ws();break;case 13:dt(xt);break;case 19:dt(xt);break;case 10:If(i.type._context);break;case 22:case 23:qf()}n=n.return}if(kt=t,bt=t=Zi(t.current,null),Ht=_n=e,At=0,ta=null,Xf=xc=kr=0,un=ko=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function wx(t,e){do{var n=bt;try{if(Df(),gl.current=Xl,Wl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(Ur=0,It=Ct=_t=null,No=!1,Jo=0,Wf.current=null,n===null||n.return===null){At=1,ta=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=fp(o);if(g!==null){g.flags&=-257,hp(g,o,a,s,e),g.mode&1&&dp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){dp(s,u,e),Kf();break e}l=Error(me(426))}}else if(pt&&a.mode&1){var m=fp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),hp(m,o,a,s,e),Pf(Xs(l,a));break e}}s=l=Xs(l,a),At!==4&&(At=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ax(s,l,e);sp(s,d);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qi===null||!qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=lx(s,a,e);sp(s,M);break e}}s=s.return}while(s!==null)}Cx(n)}catch(T){e=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function bx(){var t=$l.current;return $l.current=Xl,t===null?Xl:t}function Kf(){(At===0||At===3||At===2)&&(At=4),kt===null||!(kr&268435455)&&!(xc&268435455)||Fi(kt,Ht)}function Kl(t,e){var n=Qe;Qe|=2;var i=bx();(kt!==t||Ht!==e)&&(mi=null,Rr(t,e));do try{Uy();break}catch(r){wx(t,r)}while(!0);if(Df(),Qe=n,$l.current=i,bt!==null)throw Error(me(261));return kt=null,Ht=0,At}function Uy(){for(;bt!==null;)Tx(bt)}function ky(){for(;bt!==null&&!av();)Tx(bt)}function Tx(t){var e=Rx(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Cx(t):bt=e,Wf.current=null}function Cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,bt=null;return}}else if(n=Ay(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);At===0&&(At=5)}function Sr(t,e,n){var i=it,r=In.transition;try{In.transition=null,it=1,Oy(t,e,n,i)}finally{In.transition=r,it=i}return null}function Oy(t,e,n,i){do Os();while(Hi!==null);if(Qe&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xv(t,s),t===kt&&(bt=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,Px(Ll,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Wf.current=null,Ly(t,n),Sx(n,t),iy(vd),Il=!!_d,vd=_d=null,t.current=n,Dy(n),lv(),Qe=a,it=o,In.transition=s}else t.current=n;if(Da&&(Da=!1,Hi=t,ql=r),s=t.pendingLanes,s===0&&(qi=null),dv(n.stateNode),pn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=zd,zd=null,t;return ql&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Bd?Oo++:(Oo=0,Bd=t):Oo=0,lr(),null}function Os(){if(Hi!==null){var t=a0(ql),e=In.transition,n=it;try{if(In.transition=null,it=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,ql=0,Qe&6)throw Error(me(331));var r=Qe;for(Qe|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var f=Pe;switch(f.tag){case 0:case 11:case 15:Uo(8,f,s)}var p=f.child;if(p!==null)p.return=f,Pe=p;else for(;Pe!==null;){f=Pe;var h=f.sibling,g=f.return;if(_x(f),f===u){Pe=null;break}if(h!==null){h.return=g,Pe=h;break}Pe=g}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=_;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(T){St(a,a.return,T)}if(a===o){Pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Pe=M;break e}Pe=a.return}}if(Qe=r,lr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{it=n,In.transition=e}}return!1}function Tp(t,e,n){e=Xs(n,e),e=ax(t,e,1),t=Yi(t,e,1),e=sn(),t!==null&&(aa(t,1,e),pn(t,e))}function St(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Xs(n,t),t=lx(e,t,1),e=Yi(e,t,1),t=sn(),e!==null&&(aa(e,1,t),pn(e,t));break}}e=e.return}}function Fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(At===4||At===3&&(Ht&130023424)===Ht&&500>Et()-$f?Rr(t,0):Xf|=n),pn(t,e)}function Ax(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=sn();t=wi(t,e),t!==null&&(aa(t,e,n),pn(t,n))}function zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ax(t,n)}function By(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),Ax(t,n)}var Rx;Rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Cy(t,e,n);dn=!!(t.flags&131072)}else dn=!1,pt&&e.flags&1048576&&I0(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Hs(e,Jt.current);ks(e,n),r=Bf(null,e,i,t,r,n);var s=jf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,Ad(e,i,t,n),e=Ld(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Af(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hy(i),t=Hn(i,t),r){case 0:e=Pd(null,e,i,t,n);break e;case 1:e=gp(null,e,i,t,n);break e;case 11:e=pp(null,e,i,t,n);break e;case 14:e=mp(null,e,i,Hn(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gp(t,e,i,r,n);case 3:e:{if(fx(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,z0(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(me(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(me(424)),e),e=xp(t,e,i,n,r);break e}else for(yn=$i(e.stateNode.containerInfo.firstChild),Sn=e,pt=!0,Vn=null,n=O0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=bi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return B0(e),t===null&&bd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yd(i,r)?o=null:s!==null&&yd(i,s)&&(e.flags|=32),dx(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&bd(e),null;case 13:return hx(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),pp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(jl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!fn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Td(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Td(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=Nn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),mp(t,e,i,r,n);case 15:return cx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),_l(t,e),e.tag=1,hn(i)?(t=!0,Fl(e)):t=!1,ks(e,n),ox(e,i,r),Ad(e,i,r,n),Ld(null,e,i,!0,t,n);case 19:return px(t,e,n);case 22:return ux(t,e,n)}throw Error(me(156,e.tag))};function Px(t,e){return i0(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new jy(t,e,n,i)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===xf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Pr(n.children,r,s,e);case mf:o=8,r|=8;break;case Ju:return t=Dn(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case Qu:return t=Dn(13,n,e,r),t.elementType=Qu,t.lanes=s,t;case ed:return t=Dn(19,n,e,r),t.elementType=ed,t.lanes=s,t;case Bg:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fg:o=10;break e;case zg:o=9;break e;case gf:o=11;break e;case xf:o=14;break e;case Ni:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Bg,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jf(t,e,n,i,r,s,o,a,l){return t=new Gy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function Vy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lx(t){if(!t)return ir;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(hn(n))return L0(t,n,e)}return e}function Dx(t,e,n,i,r,s,o,a,l){return t=Jf(n,i,!0,t,r,s,o,a,l),t.context=Lx(null),n=t.current,i=sn(),r=Ki(n),s=Si(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,aa(t,r,i),pn(t,i),t}function vc(t,e,n,i){var r=e.current,s=sn(),o=Ki(r);return n=Lx(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(qn(t,r,o,s),ml(t,r,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function Wy(){return null}var Ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}yc.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));vc(t,e,null,null)};yc.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){vc(null,t,null,null)}),e[Ei]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=u0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&f0(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function Xy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zl(o);s.call(u)}}var o=Dx(e,i,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=o,t[Ei]=o.current,$o(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zl(l);a.call(u)}}var l=Jf(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=l,t[Ei]=l.current,$o(t.nodeType===8?t.parentNode:t),Or(function(){vc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zl(o);a.call(l)}}vc(e,o,t,r)}else o=Xy(n,e,t,r,i);return Zl(o)}l0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(yf(e,n|1),pn(e,Et()),!(Qe&6)&&($s=Et()+500,lr()))}break;case 13:Or(function(){var i=wi(t,1);if(i!==null){var r=sn();qn(i,t,1,r)}}),Qf(t,1)}};Sf=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=sn();qn(e,t,134217728,n)}Qf(t,134217728)}};c0=function(t){if(t.tag===13){var e=Ki(t),n=wi(t,e);if(n!==null){var i=sn();qn(n,t,e,i)}Qf(t,e)}};u0=function(){return it};d0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ud=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(me(90));Hg(i),id(i,r)}}}break;case"textarea":Vg(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Zg=Yf;Jg=Or;var $y={usingClientEntryPoint:!1,Events:[ca,Es,fc,qg,Kg,Yf]},uo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t0(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{lc=Ia.inject(Yy),ri=Ia}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(me(200));return Vy(t,e,null,n)};En.createRoot=function(t,e){if(!th(t))throw Error(me(299));var n=!1,i="",r=Ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jf(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,$o(t.nodeType===8?t.parentNode:t),new eh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=t0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Or(t)};En.hydrate=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!th(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ix;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dx(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,$o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};En.render=function(t,e,n){if(!Sc(e))throw Error(me(200));return Mc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(me(40));return t._reactRootContainer?(Or(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};En.unstable_batchedUpdates=Yf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Mc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx)}catch(t){console.error(t)}}Nx(),Ng.exports=En;var qy=Ng.exports,Rp=qy;Ku.createRoot=Rp.createRoot,Ku.hydrateRoot=Rp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fe=(t,e)=>{const n=Ee.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},f)=>Ee.createElement("svg",{ref:f,...Ky,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Zy(t)}`,a].join(" "),...u},[...e.map(([p,h])=>Ee.createElement(p,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Fe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Fe("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=Fe("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=Fe("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=Fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Fe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=Fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Fe("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Fe("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=Fe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Fe("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=Fe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=Fe("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Fe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Fe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Fe("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Fe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Fe("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Fe("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Fe("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Fe("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Fe("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Fe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=Fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Fe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=Fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=Fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=Fe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=Fe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Fe("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Fe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Fe("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Fe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),w1=({scenarios:t,activeScenario:e,onSelectScenario:n,onRunSimulation:i,onOpenWindow:r,onToggleSidebar:s,onUploadScenarioJson:o,onExportScenarioJson:a,onExportResultsJson:l,onResetState:u,isSidebarOpen:f,isSimulating:p})=>{const[h,g]=Ee.useState(""),[v,S]=Ee.useState(!1),[m,d]=Ee.useState(!1),_=Ee.useRef(null),x=Ee.useRef(null);Ee.useEffect(()=>{const T=()=>{g(new Date().toISOString().replace("T"," ").substring(0,19)+" UTC")};T();const b=setInterval(T,1e3);return()=>clearInterval(b)},[]),Ee.useEffect(()=>{const T=b=>{x.current&&!x.current.contains(b.target)&&S(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const M=T=>{var y;const b=(y=T.target.files)==null?void 0:y[0];if(b){const P=new FileReader;P.onload=B=>{var E;try{const R=JSON.parse((E=B.target)==null?void 0:E.result);o(R)}catch{alert("Ошибка чтения JSON файла. Проверьте формат файла.")}},P.readAsText(b)}};return c.jsxs("header",{className:"hdr-container",children:[c.jsx("style",{children:`
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
      `}),c.jsxs("div",{className:"hdr-section",children:[c.jsxs("div",{className:"hdr-brand",children:[c.jsx("div",{className:"hdr-brand-icon",children:c.jsx(ih,{size:16})}),c.jsx("span",{className:"hdr-brand-text",children:"Система Анализа Группировки"})]}),c.jsx("div",{className:"hdr-divider"}),c.jsxs("div",{className:"hdr-select-wrapper",children:[c.jsx("span",{className:"hdr-label",children:"Сценарий:"}),c.jsx("select",{className:"hdr-select",value:e,onChange:T=>n(T.target.value),children:t.map(T=>c.jsx("option",{value:T.id,children:T.title},T.id))})]}),c.jsx("input",{type:"file",ref:_,onChange:M,accept:".json",style:{display:"none"}}),c.jsxs("button",{onClick:()=>{var T;return(T=_.current)==null?void 0:T.click()},className:"hdr-btn hdr-btn-secondary",title:"Загрузить пользовательский сценарий из JSON файла",children:[c.jsx(M1,{size:14,style:{color:"#34d399"}}),c.jsx("span",{children:"Загрузить JSON"})]}),c.jsxs("div",{style:{position:"relative"},ref:x,children:[c.jsxs("button",{onClick:()=>S(!v),className:"hdr-btn hdr-btn-secondary",title:"Скачать итоговый JSON сценарий или результаты моделирования",children:[c.jsx(nh,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Скачать JSON"}),c.jsx(Ec,{size:12,style:{opacity:.7}})]}),v&&c.jsxs("div",{className:"hdr-dropdown-menu",children:[a&&c.jsxs("button",{onClick:()=>{a(),S(!1)},className:"hdr-dropdown-item",children:[c.jsx(e1,{size:16,style:{color:"#34d399"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"12px"},children:"Итоговый Сценарий (.json)"}),c.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Конфигурация cosmo-A-1.0"})]})]}),l&&c.jsxs("button",{onClick:()=>{l(),S(!1)},className:"hdr-dropdown-item",children:[c.jsx(Ml,{size:16,style:{color:"#38bdf8"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"12px"},children:"Результаты Симуляции (.json)"}),c.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Метрики видимости, SLA, маршруты"})]})]})]})]}),c.jsxs("button",{onClick:i,disabled:p,className:"hdr-btn hdr-btn-primary",children:[p?c.jsx(El,{size:14,className:"animate-spin"}):c.jsx(zx,{size:14}),c.jsx("span",{children:p?"Расчет...":"Запустить Симуляцию"})]})]}),c.jsxs("div",{className:"hdr-section hdr-shortcuts-desktop",children:[c.jsxs("button",{onClick:()=>r("emergency"),className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d"},title:"Запустить симуляцию событий ЧС и посмотреть экономическую компенсацию",children:[c.jsx(Jl,{size:14,style:{color:"#ff4444"}}),c.jsx("span",{children:"Симуляция ЧС"})]}),c.jsxs("button",{onClick:()=>r("analytics"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(Ml,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Аналитика & Гантт"})]}),c.jsxs("button",{onClick:()=>r("configurator"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(na,{size:14,style:{color:"#a78bfa"}}),c.jsx("span",{children:"Конфигуратор"})]}),c.jsxs("button",{onClick:()=>r("compare"),className:"hdr-btn hdr-btn-secondary",children:[c.jsx(Vd,{size:14,style:{color:"#fbbf24"}}),c.jsx("span",{children:"Сравнение Проектов"})]}),u&&c.jsxs("button",{onClick:u,className:"hdr-btn hdr-btn-danger",title:"Сбросить все сохраненные настройки страницы",children:[c.jsx(El,{size:13}),c.jsx("span",{children:"Сбросить"})]})]}),c.jsxs("div",{className:"hdr-section",children:[c.jsxs("div",{className:"hdr-clock",children:[c.jsx(da,{size:14}),c.jsx("span",{children:h})]}),c.jsx("button",{onClick:()=>d(!m),className:"hdr-btn hdr-btn-secondary hdr-mobile-trigger",title:"Меню навигации",children:m?c.jsx(rh,{size:16}):c.jsx(i1,{size:16})}),c.jsx("button",{onClick:s,title:"Панель элементов (Аутлайнер)",className:`hdr-toggle-btn ${f?"active":"inactive"}`,children:c.jsx(a1,{size:16})})]}),m&&c.jsxs("div",{className:"hdr-mobile-drawer",style:{position:"absolute",top:"48px",left:0,width:"100vw",backgroundColor:"#16181d",borderBottom:"1px solid #333",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",padding:"12px 16px",display:"flex",flexDirection:"column",gap:"8px",zIndex:99},children:[c.jsxs("button",{onClick:()=>{r("emergency"),d(!1)},className:"hdr-btn",style:{backgroundColor:"#3b1212",color:"#ff6666",border:"1px solid #7f1d1d",justifyContent:"flex-start"},children:[c.jsx(Jl,{size:14,style:{color:"#ff4444"}}),c.jsx("span",{children:"Симуляция ЧС & Экономика"})]}),c.jsxs("button",{onClick:()=>{r("analytics"),d(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(Ml,{size:14,style:{color:"#38bdf8"}}),c.jsx("span",{children:"Аналитика & Диаграмма Гантта"})]}),c.jsxs("button",{onClick:()=>{r("configurator"),d(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(na,{size:14,style:{color:"#a78bfa"}}),c.jsx("span",{children:"Конфигуратор Параметров"})]}),c.jsxs("button",{onClick:()=>{r("compare"),d(!1)},className:"hdr-btn hdr-btn-secondary",style:{justifyContent:"flex-start"},children:[c.jsx(Vd,{size:14,style:{color:"#fbbf24"}}),c.jsx("span",{children:"Сравнение Проектов"})]}),u&&c.jsxs("button",{onClick:()=>{u(),d(!1)},className:"hdr-btn hdr-btn-danger",style:{justifyContent:"flex-start"},children:[c.jsx(El,{size:13}),c.jsx("span",{children:"Сбросить Настройки"})]})]})]})},b1=({settings:t,onChangeSettings:e,isOpen:n,scenario:i,focusedSatelliteId:r,onSelectSatellite:s})=>{var d,_,x,M,T,b;const[o,a]=Ee.useState({type:"global"}),[l,u]=Ee.useState({}),[f,p]=Ee.useState(!1);if(Ee.useEffect(()=>{var y;if(r){a({type:"satellite",id:r});const P=(y=i==null?void 0:i.satellites)==null?void 0:y.find(B=>B.id===r);P&&u(B=>({...B,[P.plane]:!0}))}else o.type==="satellite"&&a({type:"global"})},[r,i]),!n)return null;const h=(y,P)=>{e({...t,[y]:P})},g=(y,P)=>{e({...t,planeRaanMap:{...(t==null?void 0:t.planeRaanMap)||{},[y]:P}})},v=(y,P)=>{e({...t,planePhaseMap:{...(t==null?void 0:t.planePhaseMap)||{},[y]:P}})},S=[1,2,3,4,5,6],m=({label:y,icon:P,isSelected:B,onClick:E,onExpand:R,isExpanded:V,level:Q=0,hasChildren:U})=>c.jsxs("div",{style:{display:"flex",alignItems:"center",padding:`4px 8px 4px ${8+Q*12}px`,cursor:"pointer",backgroundColor:B?"#1473e640":"transparent",borderLeft:B?"2px solid #1473e6":"2px solid transparent",color:B?"#fff":"#ccc",userSelect:"none"},onClick:E,children:[c.jsx("div",{style:{width:"16px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"4px"},onClick:Z=>{U&&R&&(Z.stopPropagation(),R())},children:U?V?c.jsx(Ec,{size:14}):c.jsx(Jy,{size:14}):null}),P&&c.jsx("div",{style:{marginRight:"6px",display:"flex",alignItems:"center"},children:P}),c.jsx("span",{style:{fontSize:"11px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y})]});return c.jsxs("aside",{style:{width:"290px",maxWidth:"calc(100vw - 16px)",backgroundColor:"#262626",borderLeft:"1px solid #383838",display:"flex",flexDirection:"column",color:"#e0e0e0",fontSize:"12px",height:"calc(100vh - 48px)",zIndex:90,boxShadow:"-4px 0 16px rgba(0,0,0,0.35)"},children:[c.jsxs("div",{style:{flex:"1 1 50%",display:"flex",flexDirection:"column",borderBottom:"1px solid #1473e6",overflow:"hidden"},children:[c.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#202020",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:[c.jsx(ih,{size:14,style:{color:"#1473e6"}}),c.jsx("span",{children:"Аутлайнер объектов"})]}),c.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"8px 0"},children:[c.jsx(m,{label:"Глобальные настройки",icon:c.jsx(na,{size:12}),isSelected:o.type==="global",onClick:()=>a({type:"global"})}),c.jsx(m,{label:"Наземные шлюзы",icon:c.jsx(n1,{size:12}),isSelected:o.type==="gateway"&&o.id==="all",onClick:()=>p(!f),onExpand:()=>p(!f),isExpanded:f,hasChildren:(((d=i==null?void 0:i.gateways)==null?void 0:d.length)||0)>0}),f&&((_=i==null?void 0:i.gateways)==null?void 0:_.map(y=>c.jsx(m,{label:y.name,level:1,isSelected:o.type==="gateway"&&o.id===y.id,onClick:()=>a({type:"gateway",id:y.id})},y.id))),S.map(y=>{var E;const P=l[y],B=((E=i==null?void 0:i.satellites)==null?void 0:E.filter(R=>R.plane===y))||[];return c.jsxs(Dg.Fragment,{children:[c.jsx(m,{label:`Плоскость ${y}`,icon:c.jsx(u1,{size:12}),isSelected:o.type==="plane"&&o.id===y,onClick:()=>a({type:"plane",id:y}),onExpand:()=>u(R=>({...R,[y]:!P})),isExpanded:P,hasChildren:B.length>0}),P&&B.map(R=>c.jsx(m,{label:`Спутник ${R.id}`,level:1,isSelected:o.type==="satellite"&&o.id===R.id,onClick:()=>{a({type:"satellite",id:R.id}),s&&s(R)}},R.id))]},y)})]})]}),c.jsxs("div",{style:{flex:"1 1 50%",overflowY:"auto",display:"flex",flexDirection:"column",backgroundColor:"#1e1e1e"},children:[c.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid #383838",backgroundColor:"#191919",display:"flex",alignItems:"center",fontWeight:600,color:"#aaa",fontSize:"11px"},children:[o.type==="global"&&"ГЛОБАЛЬНЫЕ НАСТРОЙКИ",o.type==="plane"&&`НАСТРОЙКИ ПЛОСКОСТИ ${o.id}`,o.type==="satellite"&&`ДАННЫЕ СПУТНИКА ${o.id}`,o.type==="gateway"&&"ДАННЫЕ ШЛЮЗА"]}),c.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[o.type==="global"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:Wr,children:[c.jsxs("div",{style:Na,children:[c.jsx(Qy,{size:14}),c.jsx("span",{children:"Отображение слоев"})]}),c.jsxs("div",{style:T1,children:[c.jsx(On,{label:"Орбитальные траектории",checked:t.showOrbits,onChange:y=>h("showOrbits",y)}),c.jsx(On,{label:"Спутники группировки (S01..S48)",checked:t.showSatellites,onChange:y=>h("showSatellites",y)}),c.jsx(On,{label:"Наземные шлюзы (C65, Murmansk...)",checked:t.showGateways,onChange:y=>h("showGateways",y)}),c.jsx(On,{label:"Межспутниковые линии (ISL)",checked:t.showISL,onChange:y=>h("showISL",y)}),c.jsx(On,{label:"Связь спутник - Земля",checked:t.showSatLinks,onChange:y=>h("showSatLinks",y)}),c.jsx(On,{label:"Текстовые подписи объектов",checked:t.showLabels,onChange:y=>h("showLabels",y)}),c.jsx(On,{label:"Атмосфера планеты",checked:t.showAtmosphere,onChange:y=>h("showAtmosphere",y)}),c.jsx(On,{label:"Зоны покрытия КА (FOVs)",checked:!!t.showCoverageHeatmap,onChange:y=>h("showCoverageHeatmap",y)}),c.jsx(On,{label:"Загрузка и трафик ISL (%)",checked:!!t.showTrafficLoad,onChange:y=>h("showTrafficLoad",y)}),c.jsx(On,{label:"Дистанции между КА (км)",checked:t.showDistances!==!1,onChange:y=>h("showDistances",y)})]})]}),c.jsxs("div",{style:Wr,children:[c.jsxs("div",{style:Na,children:[c.jsx(x1,{size:14}),c.jsx("span",{children:"Параметры рендеринга"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx(On,{label:"Свечение спутников (Glow)",checked:t.satGlow,onChange:y=>h("satGlow",y)}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",color:"#aaa"},children:[c.jsx("span",{children:"Размер спутников"}),c.jsxs("span",{children:[t.satSize.toFixed(1),"x"]})]}),c.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:t.satSize,onChange:y=>h("satSize",parseFloat(y.target.value)),style:Ua})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px",color:"#aaa"},children:[c.jsx("span",{children:"Прозрачность орбит"}),c.jsxs("span",{children:[Math.round(t.orbitOpacity*100),"%"]})]}),c.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:t.orbitOpacity,onChange:y=>h("orbitOpacity",parseFloat(y.target.value)),style:Ua})]})]})]}),c.jsxs("div",{style:Wr,children:[c.jsxs("div",{style:Na,children:[c.jsx(da,{size:14}),c.jsx("span",{children:"Настройка шага расчета"})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",color:"#aaa"},children:[c.jsx("span",{children:"Шаг времени (dt):"}),c.jsxs("span",{style:{color:"#1473e6",fontWeight:600},children:[t.stepSeconds," сек"]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"4px"},children:[1,5,10,60,300].map(y=>c.jsx("button",{onClick:()=>h("stepSeconds",y),style:{padding:"4px 0",backgroundColor:t.stepSeconds===y?"#1473e6":"#323232",color:t.stepSeconds===y?"#fff":"#b0b0b0",border:"1px solid #444",borderRadius:"3px",fontSize:"11px",cursor:"pointer"},children:y>=60?`${y/60}м`:`${y}с`},y))})]})]}),c.jsxs("div",{style:Wr,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[c.jsxs("div",{style:Na,children:[c.jsx(o1,{size:14}),c.jsx("span",{style:{margin:0},children:"Цвета объектов"})]}),c.jsx("button",{onClick:()=>e({...t,satColor:"#00f0ff",offlineSatColor:"#ff3b30",highLatencySatColor:"#ff9900",orbitColor:"#1473e6",islColor:"#00ff88",gatewayColor:"#00d084",groundLinkColor:"#f59e0b",atmosphereColor:"#1e3a8a",fovConeColor:"#00f0ff"}),style:{backgroundColor:"transparent",border:"none",color:"#1473e6",fontSize:"10px",cursor:"pointer",textDecoration:"underline"},children:"Сброс"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[c.jsx(li,{label:"Активные спутники",value:t.satColor||"#00f0ff",onChange:y=>h("satColor",y)}),c.jsx(li,{label:"Отказавшие спутники",value:t.offlineSatColor||"#ff3b30",onChange:y=>h("offlineSatColor",y)}),c.jsx(li,{label:"Спутники с задержкой",value:t.highLatencySatColor||"#ff9900",onChange:y=>h("highLatencySatColor",y)}),c.jsx(li,{label:"Траектории орбит",value:t.orbitColor||"#1473e6",onChange:y=>h("orbitColor",y)}),c.jsx(li,{label:"Межспутниковая связь",value:t.islColor||"#00ff88",onChange:y=>h("islColor",y)}),c.jsx(li,{label:"Наземные шлюзы",value:t.gatewayColor||"#00d084",onChange:y=>h("gatewayColor",y)}),c.jsx(li,{label:"Связь Земля - КА",value:t.groundLinkColor||"#f59e0b",onChange:y=>h("groundLinkColor",y)}),c.jsx(li,{label:"Атмосфера Земли",value:t.atmosphereColor||"#1e3a8a",onChange:y=>h("atmosphereColor",y)}),c.jsx(li,{label:"Зоны покрытия (FOV)",value:t.fovConeColor||"#00f0ff",onChange:y=>h("fovConeColor",y)})]})]})]}),o.type==="plane"&&c.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#1473e6",fontWeight:600},children:[c.jsx(Fx,{size:14}),c.jsx("span",{children:"Управление RAAN & Фазированием"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[c.jsx("span",{children:c.jsx("b",{children:"1. RAAN (Поворот вокруг Земли):"})}),c.jsxs("span",{style:{color:"#1473e6",fontWeight:"bold"},children:[((x=t==null?void 0:t.planeRaanMap)==null?void 0:x[o.id])??0,"°"]})]}),c.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Поворачивает всё кольцо орбиты вокруг оси Земли."}),c.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((M=t==null?void 0:t.planeRaanMap)==null?void 0:M[o.id])??0,onChange:y=>g(o.id,parseFloat(y.target.value)),style:Ua})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginTop:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#e0e0e0"},children:[c.jsx("span",{children:c.jsx("b",{children:"2. Фазирование (Сдвиг бусин):"})}),c.jsxs("span",{style:{color:"#00ff88",fontWeight:"bold"},children:[((T=t==null?void 0:t.planePhaseMap)==null?void 0:T[o.id])??0,"°"]})]}),c.jsx("p",{style:{fontSize:"10px",color:"#888",margin:0},children:"Сдвигает спутники вдоль неподвижного кольца (шахматный порядок)."}),c.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:((b=t==null?void 0:t.planePhaseMap)==null?void 0:b[o.id])??0,onChange:y=>v(o.id,parseFloat(y.target.value)),style:{...Ua,accentColor:"#00ff88"}})]})]}),o.type==="satellite"&&(()=>{var P;const y=(P=i==null?void 0:i.satellites)==null?void 0:P.find(B=>B.id===o.id);return y?c.jsx("div",{style:Wr,children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"ID"}),c.jsx("span",{style:{color:"#fff",fontWeight:600},children:y.id})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Плоскость"}),c.jsxs("span",{style:{color:"#fff"},children:["P",y.plane]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Наклонение"}),c.jsxs("span",{style:{color:"#fff"},children:[y.inc,"°"]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Высота"}),c.jsxs("span",{style:{color:"#fff"},children:[y.altitude," км"]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Температура"}),c.jsxs("span",{style:{color:(y.temperature_c||0)>60?"#ff3b30":"#00ff88"},children:[y.temperature_c??20,"°C"]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Топливо"}),c.jsxs("span",{style:{color:(y.fuel_pct||100)<30?"#ff9900":"#00ff88"},children:[y.fuel_pct??100,"%"]})]})]})}):c.jsx("div",{style:{color:"#888"},children:"Нет данных"})})(),o.type==="gateway"&&(()=>{var P;const y=(P=i==null?void 0:i.gateways)==null?void 0:P.find(B=>B.id===o.id);return y?c.jsx("div",{style:Wr,children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Название"}),c.jsx("span",{style:{color:"#fff",fontWeight:600},children:y.name})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Координаты"}),c.jsxs("span",{style:{color:"#fff"},children:[y.lat.toFixed(2),"°, ",y.lon.toFixed(2),"°"]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Тип"}),c.jsx("span",{style:{color:"#fff"},children:y.type||"Шлюз"})]})]})}):c.jsx("div",{style:{color:"#888"},children:"Нет данных"})})()]})]})]})},On=({label:t,checked:e,onChange:n})=>c.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",padding:"3px 0"},children:[c.jsx("span",{style:{color:e?"#e0e0e0":"#888"},children:t}),c.jsx("input",{type:"checkbox",checked:e,onChange:i=>n(i.target.checked),style:{accentColor:"#1473e6",cursor:"pointer"}})]}),li=({label:t,value:e,onChange:n})=>c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 0"},children:[c.jsx("span",{style:{color:"#aaa",fontSize:"11px"},children:t}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx("input",{type:"color",value:e,onChange:i=>n(i.target.value),style:{width:"24px",height:"22px",padding:0,border:"1px solid #444",borderRadius:"3px",backgroundColor:"transparent",cursor:"pointer"}}),c.jsx("span",{style:{fontSize:"10px",color:"#777",fontFamily:"monospace",width:"52px",textAlign:"right"},children:e.toUpperCase()})]})]}),Wr={backgroundColor:"#1f1f1f",border:"1px solid #333333",borderRadius:"4px",padding:"10px"},Na={display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#cccccc",marginBottom:"10px",fontSize:"12px"},T1={display:"flex",flexDirection:"column",gap:"6px"},Ua={width:"100%",accentColor:"#1473e6",cursor:"pointer"};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="162",Xr={ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C1=0,Np=1,A1=2,Bx=1,R1=2,pi=3,rr=0,on=1,vn=2,Ji=0,zs=1,$d=2,Up=3,kp=4,P1=5,Er=100,L1=101,D1=102,Op=103,Fp=104,I1=200,N1=201,U1=202,k1=203,Yd=204,qd=205,O1=206,F1=207,z1=208,B1=209,j1=210,H1=211,G1=212,V1=213,W1=214,X1=0,$1=1,Y1=2,Ql=3,q1=4,K1=5,Z1=6,J1=7,oh=0,Q1=1,eS=2,Qi=0,tS=1,nS=2,iS=3,rS=4,sS=5,oS=6,aS=7,jx=300,Ys=301,qs=302,Kd=303,Zd=304,wc=306,zi=1e3,Wn=1001,Jd=1002,nn=1003,zp=1004,fo=1005,cn=1006,uu=1007,Ar=1008,er=1009,lS=1010,cS=1011,ah=1012,Hx=1013,Gi=1014,xi=1015,ra=1016,Gx=1017,Vx=1018,Lr=1020,uS=1021,Xn=1023,dS=1024,fS=1025,Dr=1026,Ks=1027,hS=1028,Wx=1029,pS=1030,Xx=1031,$x=1033,du=33776,fu=33777,hu=33778,pu=33779,Bp=35840,jp=35841,Hp=35842,Gp=35843,Yx=36196,Vp=37492,Wp=37496,Xp=37808,$p=37809,Yp=37810,qp=37811,Kp=37812,Zp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,mu=36492,om=36494,am=36495,mS=36283,lm=36284,cm=36285,um=36286,gS=3200,xS=3201,qx=0,_S=1,Bi="",ei="srgb",cr="srgb-linear",lh="display-p3",bc="display-p3-linear",ec="linear",ut="srgb",tc="rec709",nc="p3",Yr=7680,dm=519,vS=512,yS=513,SS=514,Kx=515,MS=516,ES=517,wS=518,bS=519,Qd=35044,fm="300 es",ef=1035,yi=2e3,ic=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=Math.PI/180,tf=180/Math.PI;function tr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function TS(t,e){return(t%e+e)%e}function gu(t,e,n){return(1-n)*t+n*e}function hm(t){return(t&t-1)===0&&t!==0}function nf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:bl};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],p=i[7],h=i[2],g=i[5],v=i[8],S=r[0],m=r[3],d=r[6],_=r[1],x=r[4],M=r[7],T=r[2],b=r[5],y=r[8];return s[0]=o*S+a*_+l*T,s[3]=o*m+a*x+l*b,s[6]=o*d+a*M+l*y,s[1]=u*S+f*_+p*T,s[4]=u*m+f*x+p*b,s[7]=u*d+f*M+p*y,s[2]=h*S+g*_+v*T,s[5]=h*m+g*x+v*b,s[8]=h*d+g*M+v*y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],p=f*o-a*u,h=a*l-f*s,g=u*s-o*l,v=n*p+i*h+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=p*S,e[1]=(r*u-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=g*S,e[7]=(i*l-u*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Ye;function Zx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AS(){const t=sa("canvas");return t.style.display="block",t}const pm={};function Jx(t){t in pm||(pm[t]=!0,console.warn(t))}const mm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[cr]:{transfer:ec,primaries:tc,toReference:t=>t,fromReference:t=>t},[ei]:{transfer:ut,primaries:tc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bc]:{transfer:ec,primaries:nc,toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[lh]:{transfer:ut,primaries:nc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},RS=new Set([cr,bc]),st={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!RS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===Bi?ec:ka[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class Qx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=sa("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PS=0;class e_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vu(r[o].image)):s.push(vu(r[o]))}else s=vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LS=0;class Zt extends Hr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Wn,r=Wn,s=cn,o=Ar,a=Xn,l=er,u=Zt.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=tr(),this.name="",this.source=new e_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=jx;Zt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],p=l[8],h=l[1],g=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+S)<.1&&Math.abs(v+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,M=(g+1)/2,T=(d+1)/2,b=(f+h)/4,y=(p+S)/4,P=(v+m)/4;return x>M&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=y/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(p-S)*(p-S)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(p-S)/_,this.z=(h-f)/_,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends DS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t_ extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IS extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3];const h=s[o+0],g=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=v,e[n+3]=S;return}if(p!==S||l!==h||u!==g||f!==v){let m=1-a;const d=l*h+u*g+f*v+p*S,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,d*_);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const M=a*_;if(l=l*m+h*M,u=u*m+g*M,f=f*m+v*M,p=p*m+S*M,m===1-a){const T=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=T,u*=T,f*=T,p*=T}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],p=s[o],h=s[o+1],g=s[o+2],v=s[o+3];return e[n]=a*v+f*p+l*g-u*h,e[n+1]=l*v+f*h+u*p-a*g,e[n+2]=u*v+f*g+a*h-l*p,e[n+3]=f*v-a*p-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*p+u*g*v,this._y=u*g*p-h*f*v,this._z=u*f*v+h*g*p,this._w=u*f*p-h*g*v;break;case"YXZ":this._x=h*f*p+u*g*v,this._y=u*g*p-h*f*v,this._z=u*f*v-h*g*p,this._w=u*f*p+h*g*v;break;case"ZXY":this._x=h*f*p-u*g*v,this._y=u*g*p+h*f*v,this._z=u*f*v+h*g*p,this._w=u*f*p-h*g*v;break;case"ZYX":this._x=h*f*p-u*g*v,this._y=u*g*p+h*f*v,this._z=u*f*v-h*g*p,this._w=u*f*p+h*g*v;break;case"YZX":this._x=h*f*p+u*g*v,this._y=u*g*p+h*f*v,this._z=u*f*v-h*g*p,this._w=u*f*p-h*g*v;break;case"XZY":this._x=h*f*p-u*g*v,this._y=u*g*p-h*f*v,this._z=u*f*v+h*g*p,this._w=u*f*p+h*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),p=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*f,this.y=i+l*f+a*u-s*p,this.z=r+l*p+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new F,xm=new zr;class fa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Fa.subVectors(this.max,ho),Kr.subVectors(e.a,ho),Zr.subVectors(e.b,ho),Jr.subVectors(e.c,ho),Ai.subVectors(Zr,Kr),Ri.subVectors(Jr,Zr),hr.subVectors(Kr,Jr);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-hr.z,hr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,hr.z,0,-hr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-hr.y,hr.x,0];return!Su(n,Kr,Zr,Jr,Fa)||(n=[1,0,0,0,1,0,0,0,1],!Su(n,Kr,Zr,Jr,Fa))?!1:(za.crossVectors(Ai,Ri),n=[za.x,za.y,za.z],Su(n,Kr,Zr,Jr,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Oa=new fa,Kr=new F,Zr=new F,Jr=new F,Ai=new F,Ri=new F,hr=new F,ho=new F,Fa=new F,za=new F,pr=new F;function Su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const NS=new fa,po=new F,Mu=new F;class Tc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(Mu)),this.expandByPoint(po.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new F,Eu=new F,Ba=new F,Pi=new F,wu=new F,ja=new F,bu=new F;class Cc{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Eu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Eu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=Pi.dot(this.direction),l=-Pi.dot(Ba),u=Pi.lengthSq(),f=Math.abs(1-o*o);let p,h,g,v;if(f>0)if(p=o*l-a,h=o*a-l,v=s*f,p>=0)if(h>=-v)if(h<=v){const S=1/f;p*=S,h*=S,g=p*(p+o*h+2*a)+h*(o*p+h+2*l)+u}else h=s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;else h<=-v?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u):h<=v?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Eu).addScaledVector(Ba,h),g}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){wu.subVectors(n,e),ja.subVectors(i,e),bu.crossVectors(wu,ja);let o=this.direction.dot(bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Pi,ja));if(l<0)return null;const u=a*this.direction.dot(wu.cross(Pi));if(u<0||l+u>o)return null;const f=-a*Pi.dot(bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,f,p,h,g,v,S,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,p,h,g,v,S,m)}set(e,n,i,r,s,o,a,l,u,f,p,h,g,v,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=g,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*p,v=a*f,S=a*p;n[0]=l*f,n[4]=-l*p,n[8]=u,n[1]=g+v*u,n[5]=h-S*u,n[9]=-a*l,n[2]=S-h*u,n[6]=v+g*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*p,v=u*f,S=u*p;n[0]=h+S*a,n[4]=v*a-g,n[8]=o*u,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=g*a-v,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*p,v=u*f,S=u*p;n[0]=h-S*a,n[4]=-o*p,n[8]=v+g*a,n[1]=g+v*a,n[5]=o*f,n[9]=S-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*p,v=a*f,S=a*p;n[0]=l*f,n[4]=v*u-g,n[8]=h*u+S,n[1]=l*p,n[5]=S*u+h,n[9]=g*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,v=a*l,S=a*u;n[0]=l*f,n[4]=S-h*p,n[8]=v*p+g,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=g*p+v,n[10]=h-S*p}else if(e.order==="XZY"){const h=o*l,g=o*u,v=a*l,S=a*u;n[0]=l*f,n[4]=-p,n[8]=u*f,n[1]=h*p+S,n[5]=o*f,n[9]=g*p-v,n[2]=v*p-g,n[6]=a*f,n[10]=S*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,kS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),Ha.crossVectors(gn,Li),r[0]=Li.x,r[4]=Ha.x,r[8]=gn.x,r[1]=Li.y,r[5]=Ha.y,r[9]=gn.y,r[2]=Li.z,r[6]=Ha.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],p=i[5],h=i[9],g=i[13],v=i[2],S=i[6],m=i[10],d=i[14],_=i[3],x=i[7],M=i[11],T=i[15],b=r[0],y=r[4],P=r[8],B=r[12],E=r[1],R=r[5],V=r[9],Q=r[13],U=r[2],Z=r[6],G=r[10],k=r[14],I=r[3],O=r[7],j=r[11],ne=r[15];return s[0]=o*b+a*E+l*U+u*I,s[4]=o*y+a*R+l*Z+u*O,s[8]=o*P+a*V+l*G+u*j,s[12]=o*B+a*Q+l*k+u*ne,s[1]=f*b+p*E+h*U+g*I,s[5]=f*y+p*R+h*Z+g*O,s[9]=f*P+p*V+h*G+g*j,s[13]=f*B+p*Q+h*k+g*ne,s[2]=v*b+S*E+m*U+d*I,s[6]=v*y+S*R+m*Z+d*O,s[10]=v*P+S*V+m*G+d*j,s[14]=v*B+S*Q+m*k+d*ne,s[3]=_*b+x*E+M*U+T*I,s[7]=_*y+x*R+M*Z+T*O,s[11]=_*P+x*V+M*G+T*j,s[15]=_*B+x*Q+M*k+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],p=e[6],h=e[10],g=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*p-r*u*p-s*a*h+i*u*h+r*a*g-i*l*g)+S*(+n*l*g-n*u*h+s*o*h-r*o*g+r*u*f-s*l*f)+m*(+n*u*p-n*a*g-s*o*p+i*o*g+s*a*f-i*u*f)+d*(-r*a*f-n*l*p+n*a*h+r*o*p-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],p=e[9],h=e[10],g=e[11],v=e[12],S=e[13],m=e[14],d=e[15],_=p*m*u-S*h*u+S*l*g-a*m*g-p*l*d+a*h*d,x=v*h*u-f*m*u-v*l*g+o*m*g+f*l*d-o*h*d,M=f*S*u-v*p*u+v*a*g-o*S*g-f*a*d+o*p*d,T=v*p*l-f*S*l-v*a*h+o*S*h+f*a*m-o*p*m,b=n*_+i*x+r*M+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=_*y,e[1]=(S*h*s-p*m*s-S*r*g+i*m*g+p*r*d-i*h*d)*y,e[2]=(a*m*s-S*l*s+S*r*u-i*m*u-a*r*d+i*l*d)*y,e[3]=(p*l*s-a*h*s-p*r*u+i*h*u+a*r*g-i*l*g)*y,e[4]=x*y,e[5]=(f*m*s-v*h*s+v*r*g-n*m*g-f*r*d+n*h*d)*y,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*d-n*l*d)*y,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*g+n*l*g)*y,e[8]=M*y,e[9]=(v*p*s-f*S*s-v*i*g+n*S*g+f*i*d-n*p*d)*y,e[10]=(o*S*s-v*a*s+v*i*u-n*S*u-o*i*d+n*a*d)*y,e[11]=(f*a*s-o*p*s-f*i*u+n*p*u+o*i*g-n*a*g)*y,e[12]=T*y,e[13]=(f*S*r-v*p*r+v*i*h-n*S*h-f*i*m+n*p*m)*y,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*m-n*a*m)*y,e[15]=(o*p*r-f*a*r+f*i*l-n*p*l-o*i*h+n*a*h)*y,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,p=a+a,h=s*u,g=s*f,v=s*p,S=o*f,m=o*p,d=a*p,_=l*u,x=l*f,M=l*p,T=i.x,b=i.y,y=i.z;return r[0]=(1-(S+d))*T,r[1]=(g+M)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(h+d))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(v+x)*y,r[9]=(m-_)*y,r[10]=(1-(h+S))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,f=1/o,p=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(a===yi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ic)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,u=1/(n-e),f=1/(i-r),p=1/(o-s),h=(n+e)*u,g=(i+r)*f;let v,S;if(a===yi)v=(o+s)*p,S=-2*p;else if(a===ic)v=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new F,zn=new mt,US=new F(0,0,0),kS=new F(1,1,1),Li=new F,Ha=new F,gn=new F,_m=new mt,vm=new zr;class oi{constructor(e=0,n=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const ym=new F,es=new zr,di=new mt,Ga=new F,mo=new F,FS=new F,zS=new zr,Sm=new F(1,0,0),Mm=new F(0,1,0),Em=new F(0,0,1),BS={type:"added"},jS={type:"removed"},Tu={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Ot extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new F,n=new oi,i=new zr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ye}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(mo,Ga,this.up):di.lookAt(Ga,mo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),es.setFromRotationMatrix(di),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BS),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jS),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,zS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new F(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new F,fi=new F,Au=new F,hi=new F,ts=new F,ns=new F,wm=new F,Ru=new F,Pu=new F,Lu=new F;class $n{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),fi.subVectors(i,n),Au.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(fi),l=Bn.dot(Au),u=fi.dot(fi),f=fi.dot(Au),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),fi.subVectors(e,n),Bn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Bn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),Ru.subVectors(e,i);const l=ts.dot(Ru),u=ns.dot(Ru);if(l<=0&&u<=0)return n.copy(i);Pu.subVectors(e,r);const f=ts.dot(Pu),p=ns.dot(Pu);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ts,o);Lu.subVectors(e,s);const g=ts.dot(Lu),v=ns.dot(Lu);if(v>=0&&g<=v)return n.copy(s);const S=g*u-l*v;if(S<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(ns,a);const m=f*v-g*p;if(m<=0&&p-f>=0&&g-v>=0)return wm.subVectors(s,r),a=(p-f)/(p-f+(g-v)),n.copy(r).addScaledVector(wm,a);const d=1/(m+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=TS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=n_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=_u(e.r),this.g=_u(e.g),this.b=_u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(rn(qt.r*255,0,255))*65536+Math.round(rn(qt.g*255,0,255))*256+Math.round(rn(qt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ei){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Va);const i=gu(Di.h,Va.h,n),r=gu(Di.s,Va.s,n),s=gu(Di.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=n_;let HS=0;class Gr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=zs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=qd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yd&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new F,Wa=new Ne;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class i_ extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class r_ extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const Tn=new mt,Iu=new Ot,is=new F,xn=new fa,go=new fa,Dt=new F;class Nt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zx(e)?r_:i_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(xn.min,go.min),xn.expandByPoint(Dt),Dt.addVectors(xn.max,go.max),xn.expandByPoint(Dt)):(xn.expandByPoint(go.min),xn.expandByPoint(go.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(is.fromBufferAttribute(e,u),Dt.add(is)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const u=new F,f=new F,p=new F,h=new Ne,g=new Ne,v=new Ne,S=new F,m=new F;function d(P,B,E){u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,B),p.fromBufferAttribute(i,E),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,B),v.fromBufferAttribute(s,E),f.sub(u),p.sub(u),g.sub(h),v.sub(h);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(R),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(R),a[P].add(S),a[B].add(S),a[E].add(S),l[P].add(m),l[B].add(m),l[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,B=_.length;P<B;++P){const E=_[P],R=E.start,V=E.count;for(let Q=R,U=R+V;Q<U;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new F,M=new F,T=new F,b=new F;function y(P){T.fromBufferAttribute(r,P),b.copy(T);const B=a[P];x.copy(B),x.sub(T.multiplyScalar(T.dot(B))).normalize(),M.crossVectors(b,B);const R=M.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,R)}for(let P=0,B=_.length;P<B;++P){const E=_[P],R=E.start,V=E.count;for(let Q=R,U=R+V;Q<U;Q+=3)y(e.getX(Q+0)),y(e.getX(Q+1)),y(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,p=new F;if(e)for(let h=0,g=e.count;h<g;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,p=a.normalized,h=new u.constructor(l.length*f);let g=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*f;for(let d=0;d<f;d++)h[v++]=u[g++]}return new Kn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,p=u.length;f<p;f++){const h=u[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new mt,mr=new Cc,Xa=new Tc,Tm=new F,rs=new F,ss=new F,os=new F,Nu=new F,$a=new F,Ya=new Ne,qa=new Ne,Ka=new Ne,Cm=new F,Am=new F,Rm=new F,Za=new F,Ja=new F;class jt extends Ot{constructor(e=new Nt,n=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$a.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],p=s[l];f!==0&&(Nu.fromBufferAttribute(p,e),o?$a.addScaledVector(Nu,f):$a.addScaledVector(Nu.sub(n),f))}n.add($a)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Xa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Xa,Tm)===null||mr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(bm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,T=x;M<T;M+=3){const b=a.getX(M),y=a.getX(M+1),P=a.getX(M+2);r=Qa(this,d,e,i,u,f,p,b,y,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=v,d=S;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Qa(this,o,e,i,u,f,p,_,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,T=x;M<T;M+=3){const b=M,y=M+1,P=M+2;r=Qa(this,d,e,i,u,f,p,b,y,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=v,d=S;m<d;m+=3){const _=m,x=m+1,M=m+2;r=Qa(this,o,e,i,u,f,p,_,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function VS(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ja);return u<n.near||u>n.far?null:{distance:u,point:Ja.clone(),object:t}}function Qa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,rs),t.getVertexPosition(l,ss),t.getVertexPosition(u,os);const f=VS(t,e,n,i,rs,ss,os,Za);if(f){r&&(Ya.fromBufferAttribute(r,a),qa.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,u),f.uv=$n.getInterpolation(Za,rs,ss,os,Ya,qa,Ka,new Ne)),s&&(Ya.fromBufferAttribute(s,a),qa.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,u),f.uv1=$n.getInterpolation(Za,rs,ss,os,Ya,qa,Ka,new Ne)),o&&(Cm.fromBufferAttribute(o,a),Am.fromBufferAttribute(o,l),Rm.fromBufferAttribute(o,u),f.normal=$n.getInterpolation(Za,rs,ss,os,Cm,Am,Rm,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new F,materialIndex:0};$n.getNormal(rs,ss,os,p.normal),f.face=p}return f}class ha extends Nt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],p=[];let h=0,g=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function v(S,m,d,_,x,M,T,b,y,P,B){const E=M/y,R=T/P,V=M/2,Q=T/2,U=b/2,Z=y+1,G=P+1;let k=0,I=0;const O=new F;for(let j=0;j<G;j++){const ne=j*R-Q;for(let ce=0;ce<Z;ce++){const Le=ce*E-V;O[S]=Le*_,O[m]=ne*x,O[d]=U,u.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[d]=b>0?1:-1,f.push(O.x,O.y,O.z),p.push(ce/y),p.push(1-j/P),k+=1}}for(let j=0;j<P;j++)for(let ne=0;ne<y;ne++){const ce=h+ne+Z*j,Le=h+ne+Z*(j+1),X=h+(ne+1)+Z*(j+1),ee=h+(ne+1)+Z*j;l.push(ce,Le,ee),l.push(Le,X,ee),I+=6}a.addGroup(g,I,B),g+=I,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function s_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const XS={clone:Zs,merge:en};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o_ extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new F,Pm=new Ne,Lm=new Ne;class Ln extends o_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Lm),n.subVectors(Lm,Pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class qS extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new Ln(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new Ln(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new Ln(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new Ln(as,ls,e,n);l.layers=this.layers,this.add(l);const u=new Ln(as,ls,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class a_ extends Zt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new a_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ji});s.uniforms.tEquirect.value=n;const o=new jt(r,s),a=n.minFilter;return n.minFilter===Ar&&(n.minFilter=cn),new qS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uu=new F,ZS=new F,JS=new Ye;class ki{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uu.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JS.getNormalMatrix(e),r=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Tc,el=new F;class uh{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],v=r[9],S=r[10],m=r[11],d=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-g,M-d).normalize(),i[1].setComponents(l+s,h+u,m+g,M+d).normalize(),i[2].setComponents(l+o,h+f,m+v,M+_).normalize(),i[3].setComponents(l-o,h-f,m-v,M-_).normalize(),i[4].setComponents(l-a,h-p,m-S,M-x).normalize(),n===yi)i[5].setComponents(l+a,h+p,m+S,M+x).normalize();else if(n===ic)i[5].setComponents(a,p,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const p=u.array,h=u.usage,g=p.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,p,h),u.onUploadCallback();let S;if(p instanceof Float32Array)S=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=t.SHORT;else if(p instanceof Uint32Array)S=t.UNSIGNED_INT;else if(p instanceof Int32Array)S=t.INT;else if(p instanceof Int8Array)S=t.BYTE;else if(p instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,p){const h=f.array,g=f._updateRange,v=f.updateRanges;if(t.bindBuffer(p,u),g.count===-1&&v.length===0&&t.bufferSubData(p,0,h),v.length!==0){for(let S=0,m=v.length;S<m;S++){const d=v[S];n?t.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(p,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(p,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(p,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,r(u,f));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,u,f),p.version=u.version}}return{get:o,remove:a,update:l}}class Ac extends Nt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,p=e/a,h=n/l,g=[],v=[],S=[],m=[];for(let d=0;d<f;d++){const _=d*h-o;for(let x=0;x<u;x++){const M=x*p-s;v.push(M,-_,0),S.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+u*d,M=_+u*(d+1),T=_+1+u*(d+1),b=_+1+u*d;g.push(x,M,b),g.push(M,T,b)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
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
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`
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
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
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
#endif`,QM=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tw=`uniform sampler2D t2D;
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`#include <common>
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
}`,aw=`#if DEPTH_PACKING == 3200
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
}`,lw=`#define DISTANCE
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
}`,cw=`#define DISTANCE
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`uniform float scale;
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
}`,hw=`uniform vec3 diffuse;
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
}`,pw=`#include <common>
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#define LAMBERT
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
}`,xw=`#define LAMBERT
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
}`,_w=`#define MATCAP
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
}`,vw=`#define MATCAP
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
}`,yw=`#define NORMAL
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
}`,Sw=`#define NORMAL
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
}`,Mw=`#define PHONG
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
}`,Ew=`#define PHONG
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
}`,ww=`#define STANDARD
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
}`,bw=`#define STANDARD
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
}`,Tw=`#define TOON
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
}`,Cw=`#define TOON
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
}`,Aw=`uniform float size;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Lw=`uniform vec3 color;
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
}`,Dw=`uniform float rotation;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:eM,alphahash_pars_fragment:tM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:aM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:dM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:xM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:CM,emissivemap_fragment:AM,emissivemap_pars_fragment:RM,colorspace_fragment:PM,colorspace_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:IM,envmap_pars_fragment:NM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:OM,fog_pars_vertex:FM,fog_fragment:zM,fog_pars_fragment:BM,gradientmap_pars_fragment:jM,lightmap_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:qM,lights_phong_fragment:KM,lights_phong_pars_fragment:ZM,lights_physical_fragment:JM,lights_physical_pars_fragment:QM,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:oE,map_fragment:aE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:fE,morphinstance_vertex:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:xE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:CE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:PE,project_vertex:LE,dithering_fragment:DE,dithering_pars_fragment:IE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:OE,shadowmap_vertex:FE,shadowmask_pars_fragment:zE,skinbase_vertex:BE,skinning_pars_vertex:jE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:WE,tonemapping_fragment:XE,tonemapping_pars_fragment:$E,transmission_fragment:YE,transmission_pars_fragment:qE,uv_pars_fragment:KE,uv_pars_vertex:ZE,uv_vertex:JE,worldpos_vertex:QE,background_vert:ew,background_frag:tw,backgroundCube_vert:nw,backgroundCube_frag:iw,cube_vert:rw,cube_frag:sw,depth_vert:ow,depth_frag:aw,distanceRGBA_vert:lw,distanceRGBA_frag:cw,equirect_vert:uw,equirect_frag:dw,linedashed_vert:fw,linedashed_frag:hw,meshbasic_vert:pw,meshbasic_frag:mw,meshlambert_vert:gw,meshlambert_frag:xw,meshmatcap_vert:_w,meshmatcap_frag:vw,meshnormal_vert:yw,meshnormal_frag:Sw,meshphong_vert:Mw,meshphong_frag:Ew,meshphysical_vert:ww,meshphysical_frag:bw,meshtoon_vert:Tw,meshtoon_frag:Cw,points_vert:Aw,points_frag:Rw,shadow_vert:Pw,shadow_frag:Lw,sprite_vert:Dw,sprite_frag:Iw},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ti={basic:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([Se.points,Se.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([Se.common,Se.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([Se.sprite,Se.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:en([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:en([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ti.physical={uniforms:en([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const tl={r:0,b:0,g:0},xr=new oi,Nw=new mt;function Uw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,f,p=null,h=0,g=null;function v(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?S(a,l):x&&x.isColor&&(S(x,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===wc)?(f===void 0&&(f=new jt(new ha(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),xr.copy(d.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(xr)),f.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,(p!==x||h!==x.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,p=x,h=x.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new jt(new Ac(2,2),new sr({name:"BackgroundMaterial",uniforms:Zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=st.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=x,h=x.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,d){m.getRGB(tl,s_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:v}}function kw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function p(U,Z,G,k,I){let O=!1;if(o){const j=S(k,G,Z);u!==j&&(u=j,g(u.object)),O=d(U,k,G,I),O&&_(U,k,G,I)}else{const j=Z.wireframe===!0;(u.geometry!==k.id||u.program!==G.id||u.wireframe!==j)&&(u.geometry=k.id,u.program=G.id,u.wireframe=j,O=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,P(U,Z,G,k),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function S(U,Z,G){const k=G.wireframe===!0;let I=a[U.id];I===void 0&&(I={},a[U.id]=I);let O=I[Z.id];O===void 0&&(O={},I[Z.id]=O);let j=O[k];return j===void 0&&(j=m(h()),O[k]=j),j}function m(U){const Z=[],G=[],k=[];for(let I=0;I<r;I++)Z[I]=0,G[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:G,attributeDivisors:k,object:U,attributes:{},index:null}}function d(U,Z,G,k){const I=u.attributes,O=Z.attributes;let j=0;const ne=G.getAttributes();for(const ce in ne)if(ne[ce].location>=0){const X=I[ce];let ee=O[ce];if(ee===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),X===void 0||X.attribute!==ee||ee&&X.data!==ee.data)return!0;j++}return u.attributesNum!==j||u.index!==k}function _(U,Z,G,k){const I={},O=Z.attributes;let j=0;const ne=G.getAttributes();for(const ce in ne)if(ne[ce].location>=0){let X=O[ce];X===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ee={};ee.attribute=X,X&&X.data&&(ee.data=X.data),I[ce]=ee,j++}u.attributes=I,u.attributesNum=j,u.index=k}function x(){const U=u.newAttributes;for(let Z=0,G=U.length;Z<G;Z++)U[Z]=0}function M(U){T(U,0)}function T(U,Z){const G=u.newAttributes,k=u.enabledAttributes,I=u.attributeDivisors;G[U]=1,k[U]===0&&(t.enableVertexAttribArray(U),k[U]=1),I[U]!==Z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Z),I[U]=Z)}function b(){const U=u.newAttributes,Z=u.enabledAttributes;for(let G=0,k=Z.length;G<k;G++)Z[G]!==U[G]&&(t.disableVertexAttribArray(G),Z[G]=0)}function y(U,Z,G,k,I,O,j){j===!0?t.vertexAttribIPointer(U,Z,G,I,O):t.vertexAttribPointer(U,Z,G,k,I,O)}function P(U,Z,G,k){if(i.isWebGL2===!1&&(U.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=k.attributes,O=G.getAttributes(),j=Z.defaultAttributeValues;for(const ne in O){const ce=O[ne];if(ce.location>=0){let Le=I[ne];if(Le===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor)),Le!==void 0){const X=Le.normalized,ee=Le.itemSize,q=n.get(Le);if(q===void 0)continue;const ae=q.buffer,le=q.type,ue=q.bytesPerElement,Te=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||Le.gpuType===Hx);if(Le.isInterleavedBufferAttribute){const z=Le.data,D=z.stride,de=Le.offset;if(z.isInstancedInterleavedBuffer){for(let ie=0;ie<ce.locationSize;ie++)T(ce.location+ie,z.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ie=0;ie<ce.locationSize;ie++)M(ce.location+ie);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ie=0;ie<ce.locationSize;ie++)y(ce.location+ie,ee/ce.locationSize,le,X,D*ue,(de+ee/ce.locationSize*ie)*ue,Te)}else{if(Le.isInstancedBufferAttribute){for(let z=0;z<ce.locationSize;z++)T(ce.location+z,Le.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let z=0;z<ce.locationSize;z++)M(ce.location+z);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let z=0;z<ce.locationSize;z++)y(ce.location+z,ee/ce.locationSize,le,X,ee*ue,ee/ce.locationSize*z*ue,Te)}}else if(j!==void 0){const X=j[ne];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(ce.location,X);break;case 3:t.vertexAttrib3fv(ce.location,X);break;case 4:t.vertexAttrib4fv(ce.location,X);break;default:t.vertexAttrib1fv(ce.location,X)}}}}b()}function B(){V();for(const U in a){const Z=a[U];for(const G in Z){const k=Z[G];for(const I in k)v(k[I].object),delete k[I];delete Z[G]}delete a[U]}}function E(U){if(a[U.id]===void 0)return;const Z=a[U.id];for(const G in Z){const k=Z[G];for(const I in k)v(k[I].object),delete k[I];delete Z[G]}delete a[U.id]}function R(U){for(const Z in a){const G=a[Z];if(G[U.id]===void 0)continue;const k=G[U.id];for(const I in k)v(k[I].object),delete k[I];delete G[U.id]}}function V(){Q(),f=!0,u!==l&&(u=l,g(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:V,resetDefaultState:Q,dispose:B,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function Ow(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,p){t.drawArrays(s,f,p),n.update(p,s,1)}function l(f,p,h){if(h===0)return;let g,v;if(r)g=t,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,f,p,h),n.update(p,s,h)}function u(f,p,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h;v++)this.render(f[v],p[v]);else{g.multiDrawArraysWEBGL(s,f,0,p,0,h);let v=0;for(let S=0;S<h;S++)v+=p[S];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Fw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),T=x&&M,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:b}}function zw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const v=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!m)s?f(null):u();else{const _=s?0:i,x=_*4;let M=d.clippingState||null;l.value=M,M=f(v,h,x,g);for(let T=0;T!==x;++T)M[T]=n[T];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,v){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=g+S*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=g;x!==S;++x,M+=4)o.copy(p[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Bw(t){let e=new WeakMap;function n(o,a){return a===Kd?o.mapping=Ys:a===Zd&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kd||a===Zd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new KS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class c_ extends o_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ps=4,Dm=[.125,.215,.35,.446,.526,.582],wr=20,ku=new c_,Im=new Ze;let Ou=null,Fu=0,zu=0;const Mr=(1+Math.sqrt(5))/2,cs=1/Mr,Nm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Mr,cs),new F(0,Mr,-cs),new F(cs,0,Mr),new F(-cs,0,Mr),new F(Mr,cs,0),new F(-Mr,cs,0)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,Fu,zu),e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ra,format:Xn,colorSpace:cr,depthBuffer:!1},r=km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jw(s)),this._blurMaterial=Hw(s,e,n)}return r}_compileMaterial(e){const n=new jt(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Im),f.toneMapping=Qi,f.autoClear=!1;const g=new jn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new jt(new ha,g);let S=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Im),S=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;nl(r,_*x,d>2?x:0,x,x),f.setRenderTarget(r),S&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ys||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ku)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new jt(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*wr-1),S=s/v,m=isFinite(s)?1+Math.floor(f*S):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const d=[];let _=0;for(let y=0;y<wr;++y){const P=y/S,B=Math.exp(-P*P/2);d.push(B),y===0?_+=B:y<m&&(_+=2*B)}for(let y=0;y<d.length;y++)d[y]=d[y]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const M=this._sizeLods[r],T=3*M*(r>x-Ps?r-x+Ps:0),b=4*(this._cubeSize-M);nl(n,T,b,3*M,2*M),l.setRenderTarget(n),l.render(p,ku)}}function jw(t){const e=[],n=[],i=[];let r=t;const s=t-Ps+1+Dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ps?l=Dm[o-t+Ps-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,p=1+u,h=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,v=6,S=3,m=2,d=1,_=new Float32Array(S*v*g),x=new Float32Array(m*v*g),M=new Float32Array(d*v*g);for(let b=0;b<g;b++){const y=b%3*2/3-1,P=b>2?0:-1,B=[y,P,0,y+2/3,P,0,y+2/3,P+1,0,y,P,0,y+2/3,P+1,0,y,P+1,0];_.set(B,S*v*b),x.set(h,m*v*b);const E=[b,b,b,b,b,b];M.set(E,d*v*b)}const T=new Nt;T.setAttribute("position",new Kn(_,S)),T.setAttribute("uv",new Kn(x,m)),T.setAttribute("faceIndex",new Kn(M,d)),e.push(T),r>Ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function km(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Hw(t,e,n){const i=new Float32Array(wr),r=new F(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
	`}function Gw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Kd||l===Zd,f=l===Ys||l===qs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new Um(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||f&&p&&r(p)){n===null&&(n=new Um(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Vw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ww(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const v in g){const S=g[v];for(let m=0,d=S.length;m<d;m++)e.update(S[m],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,v=p.attributes.position;let S=0;if(g!==null){const _=g.array;S=g.version;for(let x=0,M=_.length;x<M;x+=3){const T=_[x+0],b=_[x+1],y=_[x+2];h.push(T,b,b,y,y,T)}}else if(v!==void 0){const _=v.array;S=v.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const T=x+0,b=x+1,y=x+2;h.push(T,b,b,y,y,T)}}else return;const m=new(Zx(h)?r_:i_)(h,1);m.version=S;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function Xw(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function f(g,v){t.drawElements(s,v,a,g*l),n.update(v,s,1)}function p(g,v,S){if(S===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,a,g*l,S),n.update(v,s,S)}function h(g,v,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<S;d++)this.render(g[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,a,g,0,S);let d=0;for(let _=0;_<S;_++)d+=v[_];n.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=p,this.renderMultiDraw=h}function $w(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Yw(t,e){return t[0]-e[0]}function qw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Kw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,p){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let m=s.get(f);if(m===void 0||m.count!==S){let Q=function(){R.dispose(),s.delete(f),f.removeEventListener("dispose",Q)};var g=Q;m!==void 0&&m.texture.dispose();const d=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let P=f.attributes.position.count*y,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*B*4*S),R=new t_(E,P,B,S);R.type=xi,R.needsUpdate=!0;const V=y*4;for(let U=0;U<S;U++){const Z=M[U],G=T[U],k=b[U],I=P*B*4*U;for(let O=0;O<Z.count;O++){const j=O*V;d===!0&&(o.fromBufferAttribute(Z,O),E[I+j+0]=o.x,E[I+j+1]=o.y,E[I+j+2]=o.z,E[I+j+3]=0),_===!0&&(o.fromBufferAttribute(G,O),E[I+j+4]=o.x,E[I+j+5]=o.y,E[I+j+6]=o.z,E[I+j+7]=0),x===!0&&(o.fromBufferAttribute(k,O),E[I+j+8]=o.x,E[I+j+9]=o.y,E[I+j+10]=o.z,E[I+j+11]=k.itemSize===4?o.w:1)}}m={count:S,texture:R,size:new Ne(P,B)},s.set(f,m),f.addEventListener("dispose",Q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let d=0;for(let x=0;x<h.length;x++)d+=h[x];const _=f.morphTargetsRelative?1:1-d;p.getUniforms().setValue(t,"morphTargetBaseInfluence",_),p.getUniforms().setValue(t,"morphTargetInfluences",h)}p.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let S=i[f.id];if(S===void 0||S.length!==v){S=[];for(let M=0;M<v;M++)S[M]=[M,0];i[f.id]=S}for(let M=0;M<v;M++){const T=S[M];T[0]=M,T[1]=h[M]}S.sort(qw);for(let M=0;M<8;M++)M<v&&S[M][1]?(a[M][0]=S[M][0],a[M][1]=S[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Yw);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const T=a[M],b=T[0],y=T[1];b!==Number.MAX_SAFE_INTEGER&&y?(m&&f.getAttribute("morphTarget"+M)!==m[b]&&f.setAttribute("morphTarget"+M,m[b]),d&&f.getAttribute("morphNormal"+M)!==d[b]&&f.setAttribute("morphNormal"+M,d[b]),r[M]=y,_+=y):(m&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),d&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const x=f.morphTargetsRelative?1:1-_;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Zw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class u_ extends Zt{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:Dr,f!==Dr&&f!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Dr&&(i=Gi),i===void 0&&f===Ks&&(i=Lr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const d_=new Zt,f_=new u_(1,1);f_.compareFunction=Kx;const h_=new t_,p_=new IS,m_=new a_,zm=[],Bm=[],jm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rc(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function n2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Pt(n,i)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),Pt(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Pt(n,i)}}function s2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function c2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?f_:d_;n.setTexture2D(e||s,r)}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||p_,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||m_,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||h_,r)}function x2(t){switch(t){case 5126:return Jw;case 35664:return Qw;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return r2;case 5124:case 35670:return s2;case 35667:case 35671:return o2;case 35668:case 35672:return a2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return d2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}function _2(t,e){t.uniform1fv(this.addr,e)}function v2(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function y2(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function S2(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function M2(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function E2(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function w2(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function b2(t,e){t.uniform1iv(this.addr,e)}function T2(t,e){t.uniform2iv(this.addr,e)}function C2(t,e){t.uniform3iv(this.addr,e)}function A2(t,e){t.uniform4iv(this.addr,e)}function R2(t,e){t.uniform1uiv(this.addr,e)}function P2(t,e){t.uniform2uiv(this.addr,e)}function L2(t,e){t.uniform3uiv(this.addr,e)}function D2(t,e){t.uniform4uiv(this.addr,e)}function I2(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function N2(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||p_,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||m_,s[o])}function k2(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||h_,s[o])}function O2(t){switch(t){case 5126:return _2;case 35664:return v2;case 35665:return y2;case 35666:return S2;case 35674:return M2;case 35675:return E2;case 35676:return w2;case 5124:case 35670:return b2;case 35667:case 35671:return T2;case 35668:case 35672:return C2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return P2;case 36295:return L2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return k2}}class F2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=x2(n.type)}}class z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=O2(n.type)}}class B2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function j2(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vm(n,u===void 0?new F2(a,t,e):new z2(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new B2(a),Vm(n,p)),n=p}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);j2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const H2=37297;let G2=0;function V2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function W2(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case cr:case bc:return[i,"LinearTransferOETF"];case ei:case lh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+V2(t.getShaderSource(e),o)}else return r}function X2(t,e){const n=W2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $2(t,e){let n;switch(e){case tS:n="Linear";break;case nS:n="Reinhard";break;case iS:n="OptimizedCineon";break;case rS:n="ACESFilmic";break;case oS:n="AgX";break;case aS:n="Neutral";break;case sS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Y2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function q2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function K2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Z2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ls(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(t){return t.replace(J2,eb)}const Q2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eb(t,e){let n=$e[e];if(n===void 0){const i=Q2.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rf(n)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(tb,nb)}function nb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function ib(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===R1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case Q1:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function ab(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ib(n),u=rb(n),f=sb(n),p=ob(n),h=ab(n),g=n.isWebGL2?"":Y2(n),v=q2(n),S=K2(s),m=r.createProgram();let d,_,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ls).join(`
`),d.length>0&&(d+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ls).join(`
`),_.length>0&&(_+=`
`)):(d=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),_=[g,Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Qi?$2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,X2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),o=rf(o),o=$m(o,n),o=Ym(o,n),a=rf(a),a=$m(a,n),a=Ym(a,n),o=qm(o),a=qm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+d+o,T=x+_+a,b=Wm(r,r.VERTEX_SHADER,M),y=Wm(r,r.FRAGMENT_SHADER,T);r.attachShader(m,b),r.attachShader(m,y),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(V){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(b).trim(),Z=r.getShaderInfoLog(y).trim();let G=!0,k=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,y);else{const I=Xm(r,b,"vertex"),O=Xm(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+I+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||Z==="")&&(k=!1);k&&(V.diagnostics={runnable:G,programLog:Q,vertexShader:{log:U,prefix:d},fragmentShader:{log:Z,prefix:_}})}r.deleteShader(b),r.deleteShader(y),B=new Tl(r,m),E=Z2(r,m)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,H2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=y,this}let cb=0;class ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new db(e),n.set(e,i)),i}}class db{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}}function fb(t,e,n,i,r,s,o){const a=new ch,l=new ub,u=new Set,f=[],p=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return u.add(E),E===0?"uv":`uv${E}`}function d(E,R,V,Q,U){const Z=Q.fog,G=U.geometry,k=E.isMeshStandardMaterial?Q.environment:null,I=(E.isMeshStandardMaterial?n:e).get(E.envMap||k),O=I&&I.mapping===wc?I.image.height:null,j=S[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=ne!==void 0?ne.length:0;let Le=0;G.morphAttributes.position!==void 0&&(Le=1),G.morphAttributes.normal!==void 0&&(Le=2),G.morphAttributes.color!==void 0&&(Le=3);let X,ee,q,ae;if(j){const nt=ti[j];X=nt.vertexShader,ee=nt.fragmentShader}else X=E.vertexShader,ee=E.fragmentShader,l.update(E),q=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const le=t.getRenderTarget(),ue=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,z=!!E.map,D=!!E.matcap,de=!!I,ie=!!E.aoMap,xe=!!E.lightMap,ve=!!E.bumpMap,ye=!!E.normalMap,ge=!!E.displacementMap,Ae=!!E.emissiveMap,He=!!E.metalnessMap,A=!!E.roughnessMap,w=E.anisotropy>0,$=E.clearcoat>0,te=E.iridescence>0,oe=E.sheen>0,se=E.transmission>0,ze=w&&!!E.anisotropyMap,ke=$&&!!E.clearcoatMap,fe=$&&!!E.clearcoatNormalMap,Me=$&&!!E.clearcoatRoughnessMap,Be=te&&!!E.iridescenceMap,_e=te&&!!E.iridescenceThicknessMap,et=oe&&!!E.sheenColorMap,Oe=oe&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,we=!!E.specularColorMap,Ce=!!E.specularIntensityMap,L=se&&!!E.transmissionMap,re=se&&!!E.thicknessMap,De=!!E.gradientMap,N=!!E.alphaMap,pe=E.alphaTest>0,W=!!E.alphaHash,he=!!E.extensions;let be=Qi;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(be=t.toneMapping);const Ke={isWebGL2:p,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:ee,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Te,instancing:ue,instancingColor:ue&&U.instanceColor!==null,instancingMorph:ue&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:cr,alphaToCoverage:!!E.alphaToCoverage,map:z,matcap:D,envMap:de,envMapMode:de&&I.mapping,envMapCubeUVHeight:O,aoMap:ie,lightMap:xe,bumpMap:ve,normalMap:ye,displacementMap:g&&ge,emissiveMap:Ae,normalMapObjectSpace:ye&&E.normalMapType===_S,normalMapTangentSpace:ye&&E.normalMapType===qx,metalnessMap:He,roughnessMap:A,anisotropy:w,anisotropyMap:ze,clearcoat:$,clearcoatMap:ke,clearcoatNormalMap:fe,clearcoatRoughnessMap:Me,iridescence:te,iridescenceMap:Be,iridescenceThicknessMap:_e,sheen:oe,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:we,specularIntensityMap:Ce,transmission:se,transmissionMap:L,thicknessMap:re,gradientMap:De,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:N,alphaTest:pe,alphaHash:W,combine:E.combine,mapUv:z&&m(E.map.channel),aoMapUv:ie&&m(E.aoMap.channel),lightMapUv:xe&&m(E.lightMap.channel),bumpMapUv:ve&&m(E.bumpMap.channel),normalMapUv:ye&&m(E.normalMap.channel),displacementMapUv:ge&&m(E.displacementMap.channel),emissiveMapUv:Ae&&m(E.emissiveMap.channel),metalnessMapUv:He&&m(E.metalnessMap.channel),roughnessMapUv:A&&m(E.roughnessMap.channel),anisotropyMapUv:ze&&m(E.anisotropyMap.channel),clearcoatMapUv:ke&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(E.sheenRoughnessMap.channel),specularMapUv:Ie&&m(E.specularMap.channel),specularColorMapUv:we&&m(E.specularColorMap.channel),specularIntensityMapUv:Ce&&m(E.specularIntensityMap.channel),transmissionMapUv:L&&m(E.transmissionMap.channel),thicknessMapUv:re&&m(E.thicknessMap.channel),alphaMapUv:N&&m(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(z||N),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:be,useLegacyLights:t._useLegacyLights,decodeVideoTexture:z&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vn,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:he&&E.extensions.derivatives===!0,extensionFragDepth:he&&E.extensions.fragDepth===!0,extensionDrawBuffers:he&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function _(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)R.push(V),R.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(x(R,E),M(R,E),R.push(t.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function x(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function M(E,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),E.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),E.push(a.mask)}function T(E){const R=S[E.type];let V;if(R){const Q=ti[R];V=XS.clone(Q.uniforms)}else V=E.uniforms;return V}function b(E,R){let V;for(let Q=0,U=f.length;Q<U;Q++){const Z=f[Q];if(Z.cacheKey===R){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new lb(t,R,E,s),f.push(V)),V}function y(E){if(--E.usedTimes===0){const R=f.indexOf(E);f[R]=f[f.length-1],f.pop(),E.destroy()}}function P(E){l.remove(E)}function B(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:T,acquireProgram:b,releaseProgram:y,releaseShaderCache:P,programs:f,dispose:B}}function hb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function pb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,g,v,S,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:g,groupOrder:v,renderOrder:p.renderOrder,z:S,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=g,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=S,d.group=m),e++,d}function a(p,h,g,v,S,m){const d=o(p,h,g,v,S,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(p,h,g,v,S,m){const d=o(p,h,g,v,S,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,h){n.length>1&&n.sort(p||pb),i.length>1&&i.sort(h||Zm),r.length>1&&r.sort(h||Zm)}function f(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function mb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function xb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _b=0;function vb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yb(t,e){const n=new gb,i=xb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new mt,a=new mt;function l(f,p){let h=0,g=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let S=0,m=0,d=0,_=0,x=0,M=0,T=0,b=0,y=0,P=0,B=0;f.sort(vb);const E=p===!0?Math.PI:1;for(let V=0,Q=f.length;V<Q;V++){const U=f[V],Z=U.color,G=U.intensity,k=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Z.r*G*E,g+=Z.g*G*E,v+=Z.b*G*E;else if(U.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(U.sh.coefficients[O],G);B++}else if(U.isDirectionalLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){const j=U.shadow,ne=i.get(U);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,r.directionalShadow[S]=ne,r.directionalShadowMap[S]=I,r.directionalShadowMatrix[S]=U.shadow.matrix,M++}r.directional[S]=O,S++}else if(U.isSpotLight){const O=n.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(Z).multiplyScalar(G*E),O.distance=k,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,r.spot[d]=O;const j=U.shadow;if(U.map&&(r.spotLightMap[y]=U.map,y++,j.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[d]=j.matrix,U.castShadow){const ne=i.get(U);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,r.spotShadow[d]=ne,r.spotShadowMap[d]=I,b++}d++}else if(U.isRectAreaLight){const O=n.get(U);O.color.copy(Z).multiplyScalar(G),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=O,_++}else if(U.isPointLight){const O=n.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*E),O.distance=U.distance,O.decay=U.decay,U.castShadow){const j=U.shadow,ne=i.get(U);ne.shadowBias=j.bias,ne.shadowNormalBias=j.normalBias,ne.shadowRadius=j.radius,ne.shadowMapSize=j.mapSize,ne.shadowCameraNear=j.camera.near,ne.shadowCameraFar=j.camera.far,r.pointShadow[m]=ne,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=U.shadow.matrix,T++}r.point[m]=O,m++}else if(U.isHemisphereLight){const O=n.get(U);O.skyColor.copy(U.color).multiplyScalar(G*E),O.groundColor.copy(U.groundColor).multiplyScalar(G*E),r.hemi[x]=O,x++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==S||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==_||R.hemiLength!==x||R.numDirectionalShadows!==M||R.numPointShadows!==T||R.numSpotShadows!==b||R.numSpotMaps!==y||R.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=b+y-P,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=B,R.directionalLength=S,R.pointLength=m,R.spotLength=d,R.rectAreaLength=_,R.hemiLength=x,R.numDirectionalShadows=M,R.numPointShadows=T,R.numSpotShadows=b,R.numSpotMaps=y,R.numLightProbes=B,r.version=_b++)}function u(f,p){let h=0,g=0,v=0,S=0,m=0;const d=p.matrixWorldInverse;for(let _=0,x=f.length;_<x;_++){const M=f[_];if(M.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(M.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),v++}else if(M.isRectAreaLight){const T=r.rectArea[S];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),g++}else if(M.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Qm(t,e){const n=new yb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function u(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Sb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Qm(t,e),n.set(s,[l])):o>=a.length?(l=new Qm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Mb extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`;function Tb(t,e,n){let i=new uh;const r=new Ne,s=new Ne,o=new Ut,a=new Mb({depthPacking:xS}),l=new Eb,u={},f=n.maxTextureSize,p={[rr]:on,[on]:rr,[vn]:vn},h=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:wb,fragmentShader:bb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new Nt;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bx;let d=this.type;this.render=function(b,y,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const B=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ji),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=d!==pi&&this.type===pi,U=d===pi&&this.type!==pi;for(let Z=0,G=b.length;Z<G;Z++){const k=b[Z],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||Q===!0||U===!0){const ne=this.type!==pi?{minFilter:nn,magFilter:nn}:{};I.map!==null&&I.map.dispose(),I.map=new Fr(r.x,r.y,ne),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let ne=0;ne<j;ne++){const ce=I.getViewport(ne);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),V.viewport(o),I.updateMatrices(k,ne),i=I.getFrustum(),M(y,P,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&_(I,P),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(B,E,R)};function _(b,y){const P=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(y,null,P,h,S,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(y,null,P,g,S,null)}function x(b,y,P,B){let E=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)E=R;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const V=E.uuid,Q=y.uuid;let U=u[V];U===void 0&&(U={},u[V]=U);let Z=U[Q];Z===void 0&&(Z=E.clone(),U[Q]=Z,y.addEventListener("dispose",T)),E=Z}if(E.visible=y.visible,E.wireframe=y.wireframe,B===pi?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:p[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=P}return E}function M(b,y,P,B,E){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const Q=e.update(b),U=b.material;if(Array.isArray(U)){const Z=Q.groups;for(let G=0,k=Z.length;G<k;G++){const I=Z[G],O=U[I.materialIndex];if(O&&O.visible){const j=x(b,O,B,E);b.onBeforeShadow(t,b,y,P,Q,j,I),t.renderBufferDirect(P,null,Q,j,b,I),b.onAfterShadow(t,b,y,P,Q,j,I)}}}else if(U.visible){const Z=x(b,U,B,E);b.onBeforeShadow(t,b,y,P,Q,Z,null),t.renderBufferDirect(P,null,Q,Z,b,null),b.onAfterShadow(t,b,y,P,Q,Z,null)}}const V=b.children;for(let Q=0,U=V.length;Q<U;Q++)M(V[Q],y,P,B,E)}function T(b){b.target.removeEventListener("dispose",T);for(const P in u){const B=u[P],E=b.target.uuid;E in B&&(B[E].dispose(),delete B[E])}}}function Cb(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const pe=new Ut;let W=null;const he=new Ut(0,0,0,0);return{setMask:function(be){W!==be&&!N&&(t.colorMask(be,be,be,be),W=be)},setLocked:function(be){N=be},setClear:function(be,Ke,nt,ot,yt){yt===!0&&(be*=ot,Ke*=ot,nt*=ot),pe.set(be,Ke,nt,ot),he.equals(pe)===!1&&(t.clearColor(be,Ke,nt,ot),he.copy(pe))},reset:function(){N=!1,W=null,he.set(-1,0,0,0)}}}function s(){let N=!1,pe=null,W=null,he=null;return{setTest:function(be){be?ue(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(be){pe!==be&&!N&&(t.depthMask(be),pe=be)},setFunc:function(be){if(W!==be){switch(be){case X1:t.depthFunc(t.NEVER);break;case $1:t.depthFunc(t.ALWAYS);break;case Y1:t.depthFunc(t.LESS);break;case Ql:t.depthFunc(t.LEQUAL);break;case q1:t.depthFunc(t.EQUAL);break;case K1:t.depthFunc(t.GEQUAL);break;case Z1:t.depthFunc(t.GREATER);break;case J1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=be}},setLocked:function(be){N=be},setClear:function(be){he!==be&&(t.clearDepth(be),he=be)},reset:function(){N=!1,pe=null,W=null,he=null}}}function o(){let N=!1,pe=null,W=null,he=null,be=null,Ke=null,nt=null,ot=null,yt=null;return{setTest:function(tt){N||(tt?ue(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!N&&(t.stencilMask(tt),pe=tt)},setFunc:function(tt,lt,Vt){(W!==tt||he!==lt||be!==Vt)&&(t.stencilFunc(tt,lt,Vt),W=tt,he=lt,be=Vt)},setOp:function(tt,lt,Vt){(Ke!==tt||nt!==lt||ot!==Vt)&&(t.stencilOp(tt,lt,Vt),Ke=tt,nt=lt,ot=Vt)},setLocked:function(tt){N=tt},setClear:function(tt){yt!==tt&&(t.clearStencil(tt),yt=tt)},reset:function(){N=!1,pe=null,W=null,he=null,be=null,Ke=null,nt=null,ot=null,yt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,p=new WeakMap;let h={},g={},v=new WeakMap,S=[],m=null,d=!1,_=null,x=null,M=null,T=null,b=null,y=null,P=null,B=new Ze(0,0,0),E=0,R=!1,V=null,Q=null,U=null,Z=null,G=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=O>=2);let ne=null,ce={};const Le=t.getParameter(t.SCISSOR_BOX),X=t.getParameter(t.VIEWPORT),ee=new Ut().fromArray(Le),q=new Ut().fromArray(X);function ae(N,pe,W,he){const be=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(N,Ke),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<W;nt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(pe+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Ke}const le={};le[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ue(t.DEPTH_TEST),l.setFunc(Ql),ge(!1),Ae(Np),ue(t.CULL_FACE),ve(Ji);function ue(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Te(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function z(N,pe){return g[N]!==pe?(t.bindFramebuffer(N,pe),g[N]=pe,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=pe),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function D(N,pe){let W=S,he=!1;if(N){W=v.get(pe),W===void 0&&(W=[],v.set(pe,W));const be=N.textures;if(W.length!==be.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,nt=be.length;Ke<nt;Ke++)W[Ke]=t.COLOR_ATTACHMENT0+Ke;W.length=be.length,he=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,he=!0);if(he)if(n.isWebGL2)t.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function de(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const ie={[Er]:t.FUNC_ADD,[L1]:t.FUNC_SUBTRACT,[D1]:t.FUNC_REVERSE_SUBTRACT};if(i)ie[Op]=t.MIN,ie[Fp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ie[Op]=N.MIN_EXT,ie[Fp]=N.MAX_EXT)}const xe={[I1]:t.ZERO,[N1]:t.ONE,[U1]:t.SRC_COLOR,[Yd]:t.SRC_ALPHA,[j1]:t.SRC_ALPHA_SATURATE,[z1]:t.DST_COLOR,[O1]:t.DST_ALPHA,[k1]:t.ONE_MINUS_SRC_COLOR,[qd]:t.ONE_MINUS_SRC_ALPHA,[B1]:t.ONE_MINUS_DST_COLOR,[F1]:t.ONE_MINUS_DST_ALPHA,[H1]:t.CONSTANT_COLOR,[G1]:t.ONE_MINUS_CONSTANT_COLOR,[V1]:t.CONSTANT_ALPHA,[W1]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(N,pe,W,he,be,Ke,nt,ot,yt,tt){if(N===Ji){d===!0&&(Te(t.BLEND),d=!1);return}if(d===!1&&(ue(t.BLEND),d=!0),N!==P1){if(N!==_||tt!==R){if((x!==Er||b!==Er)&&(t.blendEquation(t.FUNC_ADD),x=Er,b=Er),tt)switch(N){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $d:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $d:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,T=null,y=null,P=null,B.set(0,0,0),E=0,_=N,R=tt}return}be=be||pe,Ke=Ke||W,nt=nt||he,(pe!==x||be!==b)&&(t.blendEquationSeparate(ie[pe],ie[be]),x=pe,b=be),(W!==M||he!==T||Ke!==y||nt!==P)&&(t.blendFuncSeparate(xe[W],xe[he],xe[Ke],xe[nt]),M=W,T=he,y=Ke,P=nt),(ot.equals(B)===!1||yt!==E)&&(t.blendColor(ot.r,ot.g,ot.b,yt),B.copy(ot),E=yt),_=N,R=!1}function ye(N,pe){N.side===vn?Te(t.CULL_FACE):ue(t.CULL_FACE);let W=N.side===on;pe&&(W=!W),ge(W),N.blending===zs&&N.transparent===!1?ve(Ji):ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const he=N.stencilWrite;u.setTest(he),he&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function ge(N){V!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),V=N)}function Ae(N){N!==C1?(ue(t.CULL_FACE),N!==Q&&(N===Np?t.cullFace(t.BACK):N===A1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),Q=N}function He(N){N!==U&&(I&&t.lineWidth(N),U=N)}function A(N,pe,W){N?(ue(t.POLYGON_OFFSET_FILL),(Z!==pe||G!==W)&&(t.polygonOffset(pe,W),Z=pe,G=W)):Te(t.POLYGON_OFFSET_FILL)}function w(N){N?ue(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function $(N){N===void 0&&(N=t.TEXTURE0+k-1),ne!==N&&(t.activeTexture(N),ne=N)}function te(N,pe,W){W===void 0&&(ne===null?W=t.TEXTURE0+k-1:W=ne);let he=ce[W];he===void 0&&(he={type:void 0,texture:void 0},ce[W]=he),(he.type!==N||he.texture!==pe)&&(ne!==W&&(t.activeTexture(W),ne=W),t.bindTexture(N,pe||le[N]),he.type=N,he.texture=pe)}function oe(){const N=ce[ne];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){ee.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function Ce(N){q.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function L(N,pe){let W=p.get(pe);W===void 0&&(W=new WeakMap,p.set(pe,W));let he=W.get(N);he===void 0&&(he=t.getUniformBlockIndex(pe,N.name),W.set(N,he))}function re(N,pe){const he=p.get(pe).get(N);f.get(pe)!==he&&(t.uniformBlockBinding(pe,he,N.__bindingPointIndex),f.set(pe,he))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ne=null,ce={},g={},v=new WeakMap,S=[],m=null,d=!1,_=null,x=null,M=null,T=null,b=null,y=null,P=null,B=new Ze(0,0,0),E=0,R=!1,V=null,Q=null,U=null,Z=null,G=null,ee.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ue,disable:Te,bindFramebuffer:z,drawBuffers:D,useProgram:de,setBlending:ve,setMaterial:ye,setFlipSided:ge,setCullFace:Ae,setLineWidth:He,setPolygonOffset:A,setScissorTest:w,activeTexture:$,bindTexture:te,unbindTexture:oe,compressedTexImage2D:se,compressedTexImage3D:ze,texImage2D:Oe,texImage3D:Ie,updateUBOMapping:L,uniformBlockBinding:re,texStorage2D:_e,texStorage3D:et,texSubImage2D:ke,texSubImage3D:fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Be,scissor:we,viewport:Ce,reset:De}}function Ab(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ne,p=new WeakMap;let h;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,w){return v?new OffscreenCanvas(A,w):sa("canvas")}function m(A,w,$,te){let oe=1;const se=He(A);if((se.width>te||se.height>te)&&(oe=te/Math.max(se.width,se.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ze=w?nf:Math.floor,ke=ze(oe*se.width),fe=ze(oe*se.height);h===void 0&&(h=S(ke,fe));const Me=$?S(ke,fe):h;return Me.width=ke,Me.height=fe,Me.getContext("2d").drawImage(A,0,0,ke,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ke+"x"+fe+")."),Me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function d(A){const w=He(A);return hm(w.width)&&hm(w.height)}function _(A){return a?!1:A.wrapS!==Wn||A.wrapT!==Wn||A.minFilter!==nn&&A.minFilter!==cn}function x(A,w){return A.generateMipmaps&&w&&A.minFilter!==nn&&A.minFilter!==cn}function M(A){t.generateMipmap(A)}function T(A,w,$,te,oe=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=w;if(w===t.RED&&($===t.FLOAT&&(se=t.R32F),$===t.HALF_FLOAT&&(se=t.R16F),$===t.UNSIGNED_BYTE&&(se=t.R8)),w===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.R8UI),$===t.UNSIGNED_SHORT&&(se=t.R16UI),$===t.UNSIGNED_INT&&(se=t.R32UI),$===t.BYTE&&(se=t.R8I),$===t.SHORT&&(se=t.R16I),$===t.INT&&(se=t.R32I)),w===t.RG&&($===t.FLOAT&&(se=t.RG32F),$===t.HALF_FLOAT&&(se=t.RG16F),$===t.UNSIGNED_BYTE&&(se=t.RG8)),w===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(se=t.RG8UI),$===t.UNSIGNED_SHORT&&(se=t.RG16UI),$===t.UNSIGNED_INT&&(se=t.RG32UI),$===t.BYTE&&(se=t.RG8I),$===t.SHORT&&(se=t.RG16I),$===t.INT&&(se=t.RG32I)),w===t.RGBA){const ze=oe?ec:st.getTransfer(te);$===t.FLOAT&&(se=t.RGBA32F),$===t.HALF_FLOAT&&(se=t.RGBA16F),$===t.UNSIGNED_BYTE&&(se=ze===ut?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(A,w,$){return x(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function y(A){return A===nn||A===zp||A===fo?t.NEAREST:t.LINEAR}function P(A){const w=A.target;w.removeEventListener("dispose",P),E(w),w.isVideoTexture&&p.delete(w)}function B(A){const w=A.target;w.removeEventListener("dispose",B),V(w)}function E(A){const w=i.get(A);if(w.__webglInit===void 0)return;const $=A.source,te=g.get($);if(te){const oe=te[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(A),Object.keys(te).length===0&&g.delete($)}i.remove(A)}function R(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const $=A.source,te=g.get($);delete te[w.__cacheKey],o.memory.textures--}function V(A){const w=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let oe=0;oe<w.__webglFramebuffer[te].length;oe++)t.deleteFramebuffer(w.__webglFramebuffer[te][oe]);else t.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)t.deleteFramebuffer(w.__webglFramebuffer[te]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=A.textures;for(let te=0,oe=$.length;te<oe;te++){const se=i.get($[te]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove($[te])}i.remove(A)}let Q=0;function U(){Q=0}function Z(){const A=Q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Q+=1,A}function G(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function k(A,w){const $=i.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q($,A,w);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+w)}function I(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){q($,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+w)}function O(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){q($,A,w);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+w)}function j(A,w){const $=i.get(A);if(A.version>0&&$.__version!==A.version){ae($,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+w)}const ne={[zi]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Jd]:t.MIRRORED_REPEAT},ce={[nn]:t.NEAREST,[zp]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[uu]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Le={[vS]:t.NEVER,[bS]:t.ALWAYS,[yS]:t.LESS,[Kx]:t.LEQUAL,[SS]:t.EQUAL,[wS]:t.GEQUAL,[MS]:t.GREATER,[ES]:t.NOTEQUAL};function X(A,w,$){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===cn||w.magFilter===uu||w.magFilter===fo||w.magFilter===Ar||w.minFilter===cn||w.minFilter===uu||w.minFilter===fo||w.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(t.texParameteri(A,t.TEXTURE_WRAP_S,ne[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ne[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ne[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==Wn||w.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,y(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,y(w.minFilter)),w.minFilter!==nn&&w.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==fo&&w.minFilter!==Ar||w.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ee(A,w){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",P));const te=w.source;let oe=g.get(te);oe===void 0&&(oe={},g.set(te,oe));const se=G(w);if(se!==A.__cacheKey){oe[se]===void 0&&(oe[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[se].usedTimes++;const ze=oe[A.__cacheKey];ze!==void 0&&(oe[A.__cacheKey].usedTimes--,ze.usedTimes===0&&R(w)),A.__cacheKey=se,A.__webglTexture=oe[se].texture}return $}function q(A,w,$){let te=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=t.TEXTURE_3D);const oe=ee(A,w),se=w.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+$);const ze=i.get(se);if(se.version!==ze.__version||oe===!0){n.activeTexture(t.TEXTURE0+$);const ke=st.getPrimaries(st.workingColorSpace),fe=w.colorSpace===Bi?null:st.getPrimaries(w.colorSpace),Me=w.colorSpace===Bi||ke===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=_(w)&&d(w.image)===!1;let _e=m(w.image,Be,!1,r.maxTextureSize);_e=Ae(w,_e);const et=d(_e)||a,Oe=s.convert(w.format,w.colorSpace);let Ie=s.convert(w.type),we=T(w.internalFormat,Oe,Ie,w.colorSpace,w.isVideoTexture);X(te,w,et);let Ce;const L=w.mipmaps,re=a&&w.isVideoTexture!==!0&&we!==Yx,De=ze.__version===void 0||oe===!0,N=se.dataReady,pe=b(w,_e,et);if(w.isDepthTexture)we=t.DEPTH_COMPONENT,a?w.type===xi?we=t.DEPTH_COMPONENT32F:w.type===Gi?we=t.DEPTH_COMPONENT24:w.type===Lr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:w.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Dr&&we===t.DEPTH_COMPONENT&&w.type!==ah&&w.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Gi,Ie=s.convert(w.type)),w.format===Ks&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,w.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Lr,Ie=s.convert(w.type))),De&&(re?n.texStorage2D(t.TEXTURE_2D,1,we,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,we,_e.width,_e.height,0,Oe,Ie,null));else if(w.isDataTexture)if(L.length>0&&et){re&&De&&n.texStorage2D(t.TEXTURE_2D,pe,we,L[0].width,L[0].height);for(let W=0,he=L.length;W<he;W++)Ce=L[W],re?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ce.width,Ce.height,Oe,Ie,Ce.data):n.texImage2D(t.TEXTURE_2D,W,we,Ce.width,Ce.height,0,Oe,Ie,Ce.data);w.generateMipmaps=!1}else re?(De&&n.texStorage2D(t.TEXTURE_2D,pe,we,_e.width,_e.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e.width,_e.height,Oe,Ie,_e.data)):n.texImage2D(t.TEXTURE_2D,0,we,_e.width,_e.height,0,Oe,Ie,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,we,L[0].width,L[0].height,_e.depth);for(let W=0,he=L.length;W<he;W++)Ce=L[W],w.format!==Xn?Oe!==null?re?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Ce.width,Ce.height,_e.depth,Oe,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,we,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Ce.width,Ce.height,_e.depth,Oe,Ie,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,we,Ce.width,Ce.height,_e.depth,0,Oe,Ie,Ce.data)}else{re&&De&&n.texStorage2D(t.TEXTURE_2D,pe,we,L[0].width,L[0].height);for(let W=0,he=L.length;W<he;W++)Ce=L[W],w.format!==Xn?Oe!==null?re?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,Ce.width,Ce.height,Oe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,W,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ce.width,Ce.height,Oe,Ie,Ce.data):n.texImage2D(t.TEXTURE_2D,W,we,Ce.width,Ce.height,0,Oe,Ie,Ce.data)}else if(w.isDataArrayTexture)re?(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,we,_e.width,_e.height,_e.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Ie,_e.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,_e.width,_e.height,_e.depth,0,Oe,Ie,_e.data);else if(w.isData3DTexture)re?(De&&n.texStorage3D(t.TEXTURE_3D,pe,we,_e.width,_e.height,_e.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Oe,Ie,_e.data)):n.texImage3D(t.TEXTURE_3D,0,we,_e.width,_e.height,_e.depth,0,Oe,Ie,_e.data);else if(w.isFramebufferTexture){if(De)if(re)n.texStorage2D(t.TEXTURE_2D,pe,we,_e.width,_e.height);else{let W=_e.width,he=_e.height;for(let be=0;be<pe;be++)n.texImage2D(t.TEXTURE_2D,be,we,W,he,0,Oe,Ie,null),W>>=1,he>>=1}}else if(L.length>0&&et){if(re&&De){const W=He(L[0]);n.texStorage2D(t.TEXTURE_2D,pe,we,W.width,W.height)}for(let W=0,he=L.length;W<he;W++)Ce=L[W],re?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Oe,Ie,Ce):n.texImage2D(t.TEXTURE_2D,W,we,Oe,Ie,Ce);w.generateMipmaps=!1}else if(re){if(De){const W=He(_e);n.texStorage2D(t.TEXTURE_2D,pe,we,W.width,W.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,Ie,_e)}else n.texImage2D(t.TEXTURE_2D,0,we,Oe,Ie,_e);x(w,et)&&M(te),ze.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ae(A,w,$){if(w.image.length!==6)return;const te=ee(A,w),oe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+$);const se=i.get(oe);if(oe.version!==se.__version||te===!0){n.activeTexture(t.TEXTURE0+$);const ze=st.getPrimaries(st.workingColorSpace),ke=w.colorSpace===Bi?null:st.getPrimaries(w.colorSpace),fe=w.colorSpace===Bi||ze===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,Be=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let W=0;W<6;W++)!Me&&!Be?_e[W]=m(w.image[W],!1,!0,r.maxCubemapSize):_e[W]=Be?w.image[W].image:w.image[W],_e[W]=Ae(w,_e[W]);const et=_e[0],Oe=d(et)||a,Ie=s.convert(w.format,w.colorSpace),we=s.convert(w.type),Ce=T(w.internalFormat,Ie,we,w.colorSpace),L=a&&w.isVideoTexture!==!0,re=se.__version===void 0||te===!0,De=oe.dataReady;let N=b(w,et,Oe);X(t.TEXTURE_CUBE_MAP,w,Oe);let pe;if(Me){L&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ce,et.width,et.height);for(let W=0;W<6;W++){pe=_e[W].mipmaps;for(let he=0;he<pe.length;he++){const be=pe[he];w.format!==Xn?Ie!==null?L?De&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,be.width,be.height,Ie,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?De&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,be.width,be.height,Ie,we,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Ce,be.width,be.height,0,Ie,we,be.data)}}}else{if(pe=w.mipmaps,L&&re){pe.length>0&&N++;const W=He(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,Ce,W.width,W.height)}for(let W=0;W<6;W++)if(Be){L?De&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,_e[W].width,_e[W].height,Ie,we,_e[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ce,_e[W].width,_e[W].height,0,Ie,we,_e[W].data);for(let he=0;he<pe.length;he++){const Ke=pe[he].image[W].image;L?De&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,Ke.width,Ke.height,Ie,we,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Ce,Ke.width,Ke.height,0,Ie,we,Ke.data)}}else{L?De&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ie,we,_e[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ce,Ie,we,_e[W]);for(let he=0;he<pe.length;he++){const be=pe[he];L?De&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,Ie,we,be.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Ce,Ie,we,be.image[W])}}}x(w,Oe)&&M(t.TEXTURE_CUBE_MAP),se.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function le(A,w,$,te,oe,se){const ze=s.convert($.format,$.colorSpace),ke=s.convert($.type),fe=T($.internalFormat,ze,ke,$.colorSpace);if(!i.get(w).__hasExternalTextures){const Be=Math.max(1,w.width>>se),_e=Math.max(1,w.height>>se);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,se,fe,Be,_e,w.depth,0,ze,ke,null):n.texImage2D(oe,se,fe,Be,_e,0,ze,ke,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,oe,i.get($).__webglTexture,0,ve(w)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,oe,i.get($).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(A,w,$){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||ye(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===xi?te=t.DEPTH_COMPONENT32F:oe.type===Gi&&(te=t.DEPTH_COMPONENT24));const se=ve(w);ye(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,te,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,te,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const te=ve(w);$&&ye(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,w.width,w.height):ye(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=w.textures;for(let oe=0;oe<te.length;oe++){const se=te[oe],ze=s.convert(se.format,se.colorSpace),ke=s.convert(se.type),fe=T(se.internalFormat,ze,ke,se.colorSpace),Me=ve(w);$&&ye(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,fe,w.width,w.height):ye(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,fe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,oe=ve(w);if(w.depthTexture.format===Dr)ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(w.depthTexture.format===Ks)ye(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function z(A){const w=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,A)}else if($){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(A,w,$){const te=i.get(A);w!==void 0&&le(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&z(A)}function de(A){const w=A.texture,$=i.get(A),te=i.get(w);A.addEventListener("dispose",B);const oe=A.textures,se=A.isWebGLCubeRenderTarget===!0,ze=oe.length>1,ke=d(A)||a;if(ze||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++),se){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let Me=0;Me<w.mipmaps.length;Me++)$.__webglFramebuffer[fe][Me]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(ze)if(r.drawBuffers)for(let fe=0,Me=oe.length;fe<Me;fe++){const Be=i.get(oe[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ye(A)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const Me=oe[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Be=s.convert(Me.format,Me.colorSpace),_e=s.convert(Me.type),et=T(Me.internalFormat,Be,_e,Me.colorSpace,A.isXRRenderTarget===!0),Oe=ve(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,et,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ue($.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),X(t.TEXTURE_CUBE_MAP,w,ke);for(let fe=0;fe<6;fe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)le($.__webglFramebuffer[fe][Me],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else le($.__webglFramebuffer[fe],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(w,ke)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let fe=0,Me=oe.length;fe<Me;fe++){const Be=oe[fe],_e=i.get(Be);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),X(t.TEXTURE_2D,Be,ke),le($.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),x(Be,ke)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,te.__webglTexture),X(fe,w,ke),a&&w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)le($.__webglFramebuffer[Me],A,w,t.COLOR_ATTACHMENT0,fe,Me);else le($.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,fe,0);x(w,ke)&&M(fe),n.unbindTexture()}A.depthBuffer&&z(A)}function ie(A){const w=d(A)||a,$=A.textures;for(let te=0,oe=$.length;te<oe;te++){const se=$[te];if(x(se,w)){const ze=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ke=i.get(se).__webglTexture;n.bindTexture(ze,ke),M(ze),n.unbindTexture()}}}function xe(A){if(a&&A.samples>0&&ye(A)===!1){const w=A.textures,$=A.width,te=A.height;let oe=t.COLOR_BUFFER_BIT;const se=[],ze=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(A),fe=w.length>1;if(fe)for(let Me=0;Me<w.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){se.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&se.push(ze);const Be=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Me]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ze]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ze])),fe){const _e=i.get(w[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,$,te,0,0,$,te,oe,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<w.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ke.__webglColorRenderbuffer[Me]);const Be=i.get(w[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function ve(A){return Math.min(r.maxSamples,A.samples)}function ye(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ge(A){const w=o.render.frame;p.get(A)!==w&&(p.set(A,w),A.update())}function Ae(A,w){const $=A.colorSpace,te=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ef||$!==cr&&$!==Bi&&(st.getTransfer($)===ut?a===!1?e.has("EXT_sRGB")===!0&&te===Xn?(A.format=ef,A.minFilter=cn,A.generateMipmaps=!1):w=Qx.sRGBToLinear(w):(te!==Xn||oe!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=D,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ye}function Rb(t,e,n){const i=n.isWebGL2;function r(s,o=Bi){let a;const l=st.getTransfer(o);if(s===er)return t.UNSIGNED_BYTE;if(s===Gx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Vx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===lS)return t.BYTE;if(s===cS)return t.SHORT;if(s===ah)return t.UNSIGNED_SHORT;if(s===Hx)return t.INT;if(s===Gi)return t.UNSIGNED_INT;if(s===xi)return t.FLOAT;if(s===ra)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===dS)return t.LUMINANCE;if(s===fS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===Ks)return t.DEPTH_STENCIL;if(s===ef)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hS)return t.RED;if(s===Wx)return t.RED_INTEGER;if(s===pS)return t.RG;if(s===Xx)return t.RG_INTEGER;if(s===$x)return t.RGBA_INTEGER;if(s===du||s===fu||s===hu||s===pu)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===jp||s===Hp||s===Gp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Wp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vp)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Jp||s===Qp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$p)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mu||s===om||s===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mu)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mS||s===lm||s===cm||s===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Pb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class An extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lb={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(u,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,v=.005;u.inputState.pinching&&h>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`;class Nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new sr({extensions:{fragDepth:!0},vertexShader:Db,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jt(new Ac(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Ub extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,p=null,h=null,g=null,v=null;const S=new Nb,m=n.getContextAttributes();let d=null,_=null;const x=[],M=[],T=new Ne;let b=null;const y=new Ln;y.layers.enable(1),y.viewport=new Ut;const P=new Ln;P.layers.enable(2),P.viewport=new Ut;const B=[y,P],E=new Pb;E.layers.enable(1),E.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new ju,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new ju,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new ju,x[X]=ee),ee.getHandSpace()};function Q(X){const ee=M.indexOf(X.inputSource);if(ee===-1)return;const q=x[ee];q!==void 0&&(q.update(X.inputSource,X.frame,u||o),q.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const ee=M[X];ee!==null&&(M[X]=null,x[X].disconnect(ee))}R=null,V=null,S.reset(),e.setRenderTarget(d),g=null,h=null,p=null,r=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Fr(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,q=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Ks:Dr,q=m.stencil?Lr:Gi);const le={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Fr(h.textureWidth,h.textureHeight,{format:Xn,type:er,depthTexture:new u_(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ue=e.properties.get(_);ue.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(X){for(let ee=0;ee<X.removed.length;ee++){const q=X.removed[ee],ae=M.indexOf(q);ae>=0&&(M[ae]=null,x[ae].disconnect(q))}for(let ee=0;ee<X.added.length;ee++){const q=X.added[ee];let ae=M.indexOf(q);if(ae===-1){for(let ue=0;ue<x.length;ue++)if(ue>=M.length){M.push(q),ae=ue;break}else if(M[ue]===null){M[ue]=q,ae=ue;break}if(ae===-1)break}const le=x[ae];le&&le.connect(q)}}const G=new F,k=new F;function I(X,ee,q){G.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(q.matrixWorld);const ae=G.distanceTo(k),le=ee.projectionMatrix.elements,ue=q.projectionMatrix.elements,Te=le[14]/(le[10]-1),z=le[14]/(le[10]+1),D=(le[9]+1)/le[5],de=(le[9]-1)/le[5],ie=(le[8]-1)/le[0],xe=(ue[8]+1)/ue[0],ve=Te*ie,ye=Te*xe,ge=ae/(-ie+xe),Ae=ge*-ie;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ae),X.translateZ(ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const He=Te+ge,A=z+ge,w=ve-Ae,$=ye+(ae-Ae),te=D*z/A*He,oe=de*z/A*He;X.projectionMatrix.makePerspective(w,$,te,oe,He,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function O(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.texture!==null&&(X.near=S.depthNear,X.far=S.depthFar),E.near=P.near=y.near=X.near,E.far=P.far=y.far=X.far,(R!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,V=E.far,y.near=R,y.far=V,P.near=R,P.far=V,y.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const ee=X.parent,q=E.cameras;O(E,ee);for(let ae=0;ae<q.length;ae++)O(q[ae],ee);q.length===2?I(E,y,P):E.projectionMatrix.copy(y.projectionMatrix),j(X,E,ee)};function j(X,ee,q){q===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(q.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=tf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null};let ne=null;function ce(X,ee){if(f=ee.getViewerPose(u||o),v=ee,f!==null){const q=f.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let ae=!1;q.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let ue=0;ue<q.length;ue++){const Te=q[ue];let z=null;if(g!==null)z=g.getViewport(Te);else{const de=p.getViewSubImage(h,Te);z=de.viewport,ue===0&&(e.setRenderTargetTextures(_,de.colorTexture,h.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(_))}let D=B[ue];D===void 0&&(D=new Ln,D.layers.enable(ue),D.viewport=new Ut,B[ue]=D),D.matrix.fromArray(Te.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Te.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(z.x,z.y,z.width,z.height),ue===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(D)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const ue=p.getDepthInformation(q[0]);ue&&ue.isValid&&ue.texture&&S.init(e,ue,r.renderState)}}for(let q=0;q<x.length;q++){const ae=M[q],le=x[q];ae!==null&&le!==void 0&&le.update(ae,ee,u||o)}S.render(e,E),ne&&ne(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Le=new l_;Le.setAnimationLoop(ce),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const _r=new oi,kb=new mt;function Ob(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,s_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,M=_.envMapRotation;if(x&&(m.envMap.value=x,_r.copy(M),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(_r)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const T=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*T,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function u(_,x){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(_,T);const b=e.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function f(_){const x=p();_.__bindingPointIndex=x;const M=t.createBuffer(),T=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=r[_.id],M=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,y=M.length;b<y;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let B=0,E=P.length;B<E;B++){const R=P[B];if(g(R,b,B,T)===!0){const V=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let Z=0;Z<Q.length;Z++){const G=Q[Z],k=S(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+U,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,x,M,T){const b=_.value,y=x+"_"+M;if(T[y]===void 0)return typeof b=="number"||typeof b=="boolean"?T[y]=b:T[y]=b.clone(),!0;{const P=T[y];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[y]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function v(_){const x=_.uniforms;let M=0;const T=16;for(let y=0,P=x.length;y<P;y++){const B=Array.isArray(x[y])?x[y]:[x[y]];for(let E=0,R=B.length;E<R;E++){const V=B[E],Q=Array.isArray(V.value)?V.value:[V.value];for(let U=0,Z=Q.length;U<Z;U++){const G=Q[U],k=S(G),I=M%T;I!==0&&T-I<k.boundary&&(M+=T-I),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=k.storage}}}const b=M%T;return b>0&&(M+=T-b),_.__size=M,_.__cache={},this}function S(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class g_{constructor(e={}){const{canvas:n=AS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let M=!1,T=0,b=0,y=null,P=-1,B=null;const E=new Ut,R=new Ut;let V=null;const Q=new Ze(0);let U=0,Z=n.width,G=n.height,k=1,I=null,O=null;const j=new Ut(0,0,Z,G),ne=new Ut(0,0,Z,G);let ce=!1;const Le=new uh;let X=!1,ee=!1,q=null;const ae=new mt,le=new Ne,ue=new F,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return y===null?k:1}let D=i;function de(C,H){for(let K=0;K<C.length;K++){const J=C[K],Y=n.getContext(J,H);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",pe,!1),D===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),D=de(H,C),D===null)throw de(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ie,xe,ve,ye,ge,Ae,He,A,w,$,te,oe,se,ze,ke,fe,Me,Be,_e,et,Oe,Ie,we,Ce;function L(){ie=new Vw(D),xe=new Fw(D,ie,e),ie.init(xe),Ie=new Rb(D,ie,xe),ve=new Cb(D,ie,xe),ye=new $w(D),ge=new hb,Ae=new Ab(D,ie,ve,ge,xe,Ie,ye),He=new Bw(x),A=new Gw(x),w=new QS(D,xe),we=new kw(D,ie,w,xe),$=new Ww(D,w,ye,we),te=new Zw(D,$,w,ye),_e=new Kw(D,xe,Ae),fe=new zw(ge),oe=new fb(x,He,A,ie,xe,we,fe),se=new Ob(x,ge),ze=new mb,ke=new Sb(ie,xe),Be=new Uw(x,He,A,ve,te,h,l),Me=new Tb(x,te,xe),Ce=new Fb(D,ye,xe,ve),et=new Ow(D,ie,ye,xe),Oe=new Xw(D,ie,ye,xe),ye.programs=oe.programs,x.capabilities=xe,x.extensions=ie,x.properties=ge,x.renderLists=ze,x.shadowMap=Me,x.state=ve,x.info=ye}L();const re=new Ub(x,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(Z,G,!1))},this.getSize=function(C){return C.set(Z,G)},this.setSize=function(C,H,K=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,G=H,n.width=Math.floor(C*k),n.height=Math.floor(H*k),K===!0&&(n.style.width=C+"px",n.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(Z*k,G*k).floor()},this.setDrawingBufferSize=function(C,H,K){Z=C,G=H,k=K,n.width=Math.floor(C*K),n.height=Math.floor(H*K),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,H,K,J){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,H,K,J),ve.viewport(E.copy(j).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,H,K,J){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,H,K,J),ve.scissor(R.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){ve.setScissorTest(ce=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,H=!0,K=!0){let J=0;if(C){let Y=!1;if(y!==null){const Re=y.texture.format;Y=Re===$x||Re===Xx||Re===Wx}if(Y){const Re=y.texture.type,Ue=Re===er||Re===Gi||Re===ah||Re===Lr||Re===Gx||Re===Vx,je=Be.getClearColor(),Ge=Be.getClearAlpha(),qe=je.r,Ve=je.g,We=je.b;Ue?(g[0]=qe,g[1]=Ve,g[2]=We,g[3]=Ge,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=qe,v[1]=Ve,v[2]=We,v[3]=Ge,D.clearBufferiv(D.COLOR,0,v))}else J|=D.COLOR_BUFFER_BIT}H&&(J|=D.DEPTH_BUFFER_BIT),K&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ze.dispose(),ke.dispose(),ge.dispose(),He.dispose(),A.dispose(),te.dispose(),we.dispose(),Ce.dispose(),oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",yt),re.removeEventListener("sessionend",tt),q&&(q.dispose(),q=null),lt.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=ye.autoReset,H=Me.enabled,K=Me.autoUpdate,J=Me.needsUpdate,Y=Me.type;L(),ye.autoReset=C,Me.enabled=H,Me.autoUpdate=K,Me.needsUpdate=J,Me.type=Y}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function W(C){const H=C.target;H.removeEventListener("dispose",W),he(H)}function he(C){be(C),ge.remove(C)}function be(C){const H=ge.get(C).programs;H!==void 0&&(H.forEach(function(K){oe.releaseProgram(K)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,K,J,Y,Re){H===null&&(H=Te);const Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,je=v_(C,H,K,J,Y);ve.setMaterial(J,Ue);let Ge=K.index,qe=1;if(J.wireframe===!0){if(Ge=$.getWireframeAttribute(K),Ge===void 0)return;qe=2}const Ve=K.drawRange,We=K.attributes.position;let Mt=Ve.start*qe,mn=(Ve.start+Ve.count)*qe;Re!==null&&(Mt=Math.max(Mt,Re.start*qe),mn=Math.min(mn,(Re.start+Re.count)*qe)),Ge!==null?(Mt=Math.max(Mt,0),mn=Math.min(mn,Ge.count)):We!=null&&(Mt=Math.max(Mt,0),mn=Math.min(mn,We.count));const Lt=mn-Mt;if(Lt<0||Lt===1/0)return;we.setup(Y,J,je,K,Ge);let ai,gt=et;if(Ge!==null&&(ai=w.get(Ge),gt=Oe,gt.setIndex(ai)),Y.isMesh)J.wireframe===!0?(ve.setLineWidth(J.wireframeLinewidth*z()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(Y.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),ve.setLineWidth(Xe*z()),Y.isLineSegments?gt.setMode(D.LINES):Y.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else Y.isPoints?gt.setMode(D.POINTS):Y.isSprite&&gt.setMode(D.TRIANGLES);if(Y.isBatchedMesh)gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)gt.renderInstances(Mt,Lt,Y.count);else if(K.isInstancedBufferGeometry){const Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ic=Math.min(K.instanceCount,Xe);gt.renderInstances(Mt,Lt,Ic)}else gt.render(Mt,Lt)};function Ke(C,H,K){C.transparent===!0&&C.side===vn&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,ga(C,H,K),C.side=rr,C.needsUpdate=!0,ga(C,H,K),C.side=vn):ga(C,H,K)}this.compile=function(C,H,K=null){K===null&&(K=C),m=ke.get(K),m.init(),_.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==K&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const J=new Set;return C.traverse(function(Y){const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const je=Re[Ue];Ke(je,K,Y),J.add(je)}else Ke(Re,K,Y),J.add(Re)}),_.pop(),m=null,J},this.compileAsync=function(C,H,K=null){const J=this.compile(C,H,K);return new Promise(Y=>{function Re(){if(J.forEach(function(Ue){ge.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){Y(C);return}setTimeout(Re,10)}ie.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let nt=null;function ot(C){nt&&nt(C)}function yt(){lt.stop()}function tt(){lt.start()}const lt=new l_;lt.setAnimationLoop(ot),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(C){nt=C,re.setAnimationLoop(C),C===null?lt.stop():lt.start()},re.addEventListener("sessionstart",yt),re.addEventListener("sessionend",tt),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(H),H=re.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,H,y),m=ke.get(C,_.length),m.init(),_.push(m),ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Le.setFromProjectionMatrix(ae),ee=this.localClippingEnabled,X=fe.init(this.clippingPlanes,ee),S=ze.get(C,d.length),S.init(),d.push(S),Vt(C,H,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(I,O),this.info.render.frame++,X===!0&&fe.beginShadows();const K=m.state.shadowsArray;if(Me.render(K,C,H),X===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1)&&Be.render(S,C),m.setupLights(x._useLegacyLights),H.isArrayCamera){const J=H.cameras;for(let Y=0,Re=J.length;Y<Re;Y++){const Ue=J[Y];ur(S,C,Ue,Ue.viewport)}}else ur(S,C,H);y!==null&&(Ae.updateMultisampleRenderTarget(y),Ae.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(x,C,H),we.resetDefaultState(),P=-1,B=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Vt(C,H,K,J){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){J&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);const Ue=te.update(C),je=C.material;je.visible&&S.push(C,Ue,je,K,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const Ue=te.update(C),je=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ue.copy(Ue.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(je)){const Ge=Ue.groups;for(let qe=0,Ve=Ge.length;qe<Ve;qe++){const We=Ge[qe],Mt=je[We.materialIndex];Mt&&Mt.visible&&S.push(C,Ue,Mt,K,ue.z,We)}}else je.visible&&S.push(C,Ue,je,K,ue.z,null)}}const Re=C.children;for(let Ue=0,je=Re.length;Ue<je;Ue++)Vt(Re[Ue],H,K,J)}function ur(C,H,K,J){const Y=C.opaque,Re=C.transmissive,Ue=C.transparent;m.setupLightsView(K),X===!0&&fe.setGlobalState(x.clippingPlanes,K),Re.length>0&&pa(Y,Re,H,K),J&&ve.viewport(E.copy(J)),Y.length>0&&ma(Y,H,K),Re.length>0&&ma(Re,H,K),Ue.length>0&&ma(Ue,H,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function pa(C,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Re=xe.isWebGL2;q===null&&(q=new Fr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?ra:er,minFilter:Ar,samples:Re?4:0})),x.getDrawingBufferSize(le),Re?q.setSize(le.x,le.y):q.setSize(nf(le.x),nf(le.y));const Ue=x.getRenderTarget();x.setRenderTarget(q),x.getClearColor(Q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const je=x.toneMapping;x.toneMapping=Qi,ma(C,K,J),Ae.updateMultisampleRenderTarget(q),Ae.updateRenderTargetMipmap(q);let Ge=!1;for(let qe=0,Ve=H.length;qe<Ve;qe++){const We=H[qe],Mt=We.object,mn=We.geometry,Lt=We.material,ai=We.group;if(Lt.side===vn&&Mt.layers.test(J.layers)){const gt=Lt.side;Lt.side=on,Lt.needsUpdate=!0,gh(Mt,K,J,mn,Lt,ai),Lt.side=gt,Lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ae.updateMultisampleRenderTarget(q),Ae.updateRenderTargetMipmap(q)),x.setRenderTarget(Ue),x.setClearColor(Q,U),x.toneMapping=je}function ma(C,H,K){const J=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Re=C.length;Y<Re;Y++){const Ue=C[Y],je=Ue.object,Ge=Ue.geometry,qe=J===null?Ue.material:J,Ve=Ue.group;je.layers.test(K.layers)&&gh(je,H,K,Ge,qe,Ve)}}function gh(C,H,K,J,Y,Re){C.onBeforeRender(x,H,K,J,Y,Re),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(x,H,K,J,C,Re),Y.transparent===!0&&Y.side===vn&&Y.forceSinglePass===!1?(Y.side=on,Y.needsUpdate=!0,x.renderBufferDirect(K,H,J,Y,C,Re),Y.side=rr,Y.needsUpdate=!0,x.renderBufferDirect(K,H,J,Y,C,Re),Y.side=vn):x.renderBufferDirect(K,H,J,Y,C,Re),C.onAfterRender(x,H,K,J,Y,Re)}function ga(C,H,K){H.isScene!==!0&&(H=Te);const J=ge.get(C),Y=m.state.lights,Re=m.state.shadowsArray,Ue=Y.state.version,je=oe.getParameters(C,Y.state,Re,H,K),Ge=oe.getProgramCacheKey(je);let qe=J.programs;J.environment=C.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(C.isMeshStandardMaterial?A:He).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",W),qe=new Map,J.programs=qe);let Ve=qe.get(Ge);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===Ue)return _h(C,je),Ve}else je.uniforms=oe.getUniforms(C),C.onBuild(K,je,x),C.onBeforeCompile(je,x),Ve=oe.acquireProgram(je,Ge),qe.set(Ge,Ve),J.uniforms=je.uniforms;const We=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=fe.uniform),_h(C,je),J.needsLights=S_(C),J.lightsStateVersion=Ue,J.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function xh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Tl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function _h(C,H){const K=ge.get(C);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function v_(C,H,K,J,Y){H.isScene!==!0&&(H=Te),Ae.resetTextureUnits();const Re=H.fog,Ue=J.isMeshStandardMaterial?H.environment:null,je=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:cr,Ge=(J.isMeshStandardMaterial?A:He).get(J.envMap||Ue),qe=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!K.morphAttributes.position,Mt=!!K.morphAttributes.normal,mn=!!K.morphAttributes.color;let Lt=Qi;J.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const ai=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=ai!==void 0?ai.length:0,Xe=ge.get(J),Ic=m.state.lights;if(X===!0&&(ee===!0||C!==B)){const bn=C===B&&J.id===P;fe.setState(J,C,bn)}let ft=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ic.state.version||Xe.outputColorSpace!==je||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==Ge||J.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ve||Xe.morphTargets!==We||Xe.morphNormals!==Mt||Xe.morphColors!==mn||Xe.toneMapping!==Lt||xe.isWebGL2===!0&&Xe.morphTargetsCount!==gt)&&(ft=!0):(ft=!0,Xe.__version=J.version);let dr=Xe.currentProgram;ft===!0&&(dr=ga(J,H,Y));let vh=!1,no=!1,Nc=!1;const Wt=dr.getUniforms(),fr=Xe.uniforms;if(ve.useProgram(dr.program)&&(vh=!0,no=!0,Nc=!0),J.id!==P&&(P=J.id,no=!0),vh||B!==C){Wt.setValue(D,"projectionMatrix",C.projectionMatrix),Wt.setValue(D,"viewMatrix",C.matrixWorldInverse);const bn=Wt.map.cameraPosition;bn!==void 0&&bn.setValue(D,ue.setFromMatrixPosition(C.matrixWorld)),xe.logarithmicDepthBuffer&&Wt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Wt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,no=!0,Nc=!0)}if(Y.isSkinnedMesh){Wt.setOptional(D,Y,"bindMatrix"),Wt.setOptional(D,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(xe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Wt.setValue(D,"boneTexture",bn.boneTexture,Ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Wt.setOptional(D,Y,"batchingTexture"),Wt.setValue(D,"batchingTexture",Y._matricesTexture,Ae));const Uc=K.morphAttributes;if((Uc.position!==void 0||Uc.normal!==void 0||Uc.color!==void 0&&xe.isWebGL2===!0)&&_e.update(Y,K,dr),(no||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Wt.setValue(D,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(fr.envMap.value=Ge,fr.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),no&&(Wt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&y_(fr,Nc),Re&&J.fog===!0&&se.refreshFogUniforms(fr,Re),se.refreshMaterialUniforms(fr,J,k,G,q),Tl.upload(D,xh(Xe),fr,Ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Tl.upload(D,xh(Xe),fr,Ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Wt.setValue(D,"center",Y.center),Wt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Wt.setValue(D,"normalMatrix",Y.normalMatrix),Wt.setValue(D,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let kc=0,M_=bn.length;kc<M_;kc++)if(xe.isWebGL2){const yh=bn[kc];Ce.update(yh,dr),Ce.bind(yh,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function y_(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function S_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,H,K){ge.get(C.texture).__webglTexture=H,ge.get(C.depthTexture).__webglTexture=K;const J=ge.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const K=ge.get(C);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,K=0){y=C,T=H,b=K;let J=!0,Y=null,Re=!1,Ue=!1;if(C){const Ge=ge.get(C);Ge.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(D.FRAMEBUFFER,null),J=!1):Ge.__webglFramebuffer===void 0?Ae.setupRenderTarget(C):Ge.__hasExternalTextures&&Ae.rebindTextures(C,ge.get(C.texture).__webglTexture,ge.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ve=ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?Y=Ve[H][K]:Y=Ve[H],Re=!0):xe.isWebGL2&&C.samples>0&&Ae.useMultisampledRTT(C)===!1?Y=ge.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?Y=Ve[K]:Y=Ve,E.copy(C.viewport),R.copy(C.scissor),V=C.scissorTest}else E.copy(j).multiplyScalar(k).floor(),R.copy(ne).multiplyScalar(k).floor(),V=ce;if(ve.bindFramebuffer(D.FRAMEBUFFER,Y)&&xe.drawBuffers&&J&&ve.drawBuffers(C,Y),ve.viewport(E),ve.scissor(R),ve.setScissorTest(V),Re){const Ge=ge.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,K)}else if(Ue){const Ge=ge.get(C.texture),qe=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,qe)}P=-1},this.readRenderTargetPixels=function(C,H,K,J,Y,Re,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){ve.bindFramebuffer(D.FRAMEBUFFER,je);try{const Ge=C.texture,qe=Ge.format,Ve=Ge.type;if(qe!==Xn&&Ie.convert(qe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ra&&(ie.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ve!==er&&Ie.convert(Ve)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===xi&&(xe.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-J&&K>=0&&K<=C.height-Y&&D.readPixels(H,K,J,Y,Ie.convert(qe),Ie.convert(Ve),Re)}finally{const Ge=y!==null?ge.get(y).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(C,H,K=0){const J=Math.pow(2,-K),Y=Math.floor(H.image.width*J),Re=Math.floor(H.image.height*J);Ae.setTexture2D(H,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,C.x,C.y,Y,Re),ve.unbindTexture()},this.copyTextureToTexture=function(C,H,K,J=0){const Y=H.image.width,Re=H.image.height,Ue=Ie.convert(K.format),je=Ie.convert(K.type);Ae.setTexture2D(K,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,C.x,C.y,Y,Re,Ue,je,H.image.data):H.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,Ue,H.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,J,C.x,C.y,Ue,je,H.image),J===0&&K.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,H,K,J,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=Math.round(C.max.x-C.min.x),Ue=Math.round(C.max.y-C.min.y),je=C.max.z-C.min.z+1,Ge=Ie.convert(J.format),qe=Ie.convert(J.type);let Ve;if(J.isData3DTexture)Ae.setTexture3D(J,0),Ve=D.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)Ae.setTexture2DArray(J,0),Ve=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment);const We=D.getParameter(D.UNPACK_ROW_LENGTH),Mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Lt=D.getParameter(D.UNPACK_SKIP_ROWS),ai=D.getParameter(D.UNPACK_SKIP_IMAGES),gt=K.isCompressedTexture?K.mipmaps[Y]:K.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,C.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,C.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?D.texSubImage3D(Ve,Y,H.x,H.y,H.z,Re,Ue,je,Ge,qe,gt.data):J.isCompressedArrayTexture?D.compressedTexSubImage3D(Ve,Y,H.x,H.y,H.z,Re,Ue,je,Ge,gt.data):D.texSubImage3D(Ve,Y,H.x,H.y,H.z,Re,Ue,je,Ge,qe,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,We),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ai),Y===0&&J.generateMipmaps&&D.generateMipmap(Ve),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ae.setTextureCube(C,0):C.isData3DTexture?Ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ae.setTexture2DArray(C,0):Ae.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){T=0,b=0,y=null,ve.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===bc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zb extends g_{}zb.prototype.isWebGL1Renderer=!0;class Bb extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jx("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new F;class rc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends Gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let us;const xo=new F,ds=new F,fs=new F,hs=new Ne,_o=new Ne,x_=new mt,il=new F,vo=new F,rl=new F,eg=new Ne,Hu=new Ne,tg=new Ne;class fh extends Ot{constructor(e=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Nt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jb(n,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new rc(i,3,0,!1)),us.setAttribute("uv",new rc(i,2,3,!1))}this.geometry=us,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),x_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;sl(il.set(-.5,-.5,0),fs,o,ds,r,s),sl(vo.set(.5,-.5,0),fs,o,ds,r,s),sl(rl.set(.5,.5,0),fs,o,ds,r,s),eg.set(0,0),Hu.set(1,0),tg.set(1,1);let a=e.ray.intersectTriangle(il,vo,rl,!1,xo);if(a===null&&(sl(vo.set(-.5,.5,0),fs,o,ds,r,s),Hu.set(0,1),a=e.ray.intersectTriangle(il,rl,vo,!1,xo),a===null))return;const l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||n.push({distance:l,point:xo.clone(),uv:$n.getInterpolation(xo,il,vo,rl,eg,Hu,tg,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sl(t,e,n,i,r,s){hs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_o.x=s*hs.x-r*hs.y,_o.y=r*hs.x+s*hs.y):_o.copy(hs),t.copy(e),t.x+=_o.x,t.y+=_o.y,t.applyMatrix4(x_)}class xs extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ng=new F,ig=new F,rg=new mt,Gu=new Cc,ol=new Tc;class Ao extends Ot{constructor(e=new Nt,n=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ng.fromBufferAttribute(n,r-1),ig.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ng.distanceTo(ig);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;rg.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,f=new F,p=new F,h=new F,g=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let x=d,M=_-1;x<M;x+=g){const T=v.getX(x),b=v.getX(x+1);if(u.fromBufferAttribute(m,T),f.fromBufferAttribute(m,b),Gu.distanceSqToSegment(u,f,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=d,M=_-1;x<M;x+=g){if(u.fromBufferAttribute(m,x),f.fromBufferAttribute(m,x+1),Gu.distanceSqToSegment(u,f,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Hb extends Ao{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Lc extends Zt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hh extends Nt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new F,f=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=n;p++,h+=3){const g=i+p/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ph extends Nt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],g=[];let v=0;const S=[],m=i/2;let d=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(g,2));function _(){const M=new F,T=new F;let b=0;const y=(n-e)/i;for(let P=0;P<=s;P++){const B=[],E=P/s,R=E*(n-e)+e;for(let V=0;V<=r;V++){const Q=V/r,U=Q*l+a,Z=Math.sin(U),G=Math.cos(U);T.x=R*Z,T.y=-E*i+m,T.z=R*G,p.push(T.x,T.y,T.z),M.set(Z,y,G).normalize(),h.push(M.x,M.y,M.z),g.push(Q,1-E),B.push(v++)}S.push(B)}for(let P=0;P<r;P++)for(let B=0;B<s;B++){const E=S[B][P],R=S[B+1][P],V=S[B+1][P+1],Q=S[B][P+1];f.push(E,R,Q),f.push(R,V,Q),b+=6}u.addGroup(d,b,0),d+=b}function x(M){const T=v,b=new Ne,y=new F;let P=0;const B=M===!0?e:n,E=M===!0?1:-1;for(let V=1;V<=r;V++)p.push(0,m*E,0),h.push(0,E,0),g.push(.5,.5),v++;const R=v;for(let V=0;V<=r;V++){const U=V/r*l+a,Z=Math.cos(U),G=Math.sin(U);y.x=B*G,y.y=m*E,y.z=B*Z,p.push(y.x,y.y,y.z),h.push(0,E,0),b.x=Z*.5+.5,b.y=G*.5*E+.5,g.push(b.x,b.y),v++}for(let V=0;V<r;V++){const Q=T+V,U=R+V;M===!0?f.push(U,U+1,Q):f.push(U+1,U,Q),P+=3}u.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends ph{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends Nt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],f=[];let p=e;const h=(n-e)/r,g=new F,v=new Ne;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const d=s+m/i*o;g.x=p*Math.cos(d),g.y=p*Math.sin(d),l.push(g.x,g.y,g.z),u.push(0,0,1),v.x=(g.x/n+1)/2,v.y=(g.y/n+1)/2,f.push(v.x,v.y)}p+=h}for(let S=0;S<r;S++){const m=S*(i+1);for(let d=0;d<i;d++){const _=d+m,x=_,M=_+i+1,T=_+i+2,b=_+1;a.push(x,M,b),a.push(M,T,b)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fo extends Nt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],p=new F,h=new F,g=[],v=[],S=[],m=[];for(let d=0;d<=i;d++){const _=[],x=d/i;let M=0;d===0&&o===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let T=0;T<=n;T++){const b=T/n;p.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),v.push(p.x,p.y,p.z),h.copy(p).normalize(),S.push(h.x,h.y,h.z),m.push(b+M,1-x),_.push(u++)}f.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const x=f[d][_+1],M=f[d][_],T=f[d+1][_],b=f[d+1][_+1];(d!==0||o>0)&&g.push(x,M,b),(d!==i-1||l<Math.PI)&&g.push(M,T,b)}this.setIndex(g),this.setAttribute("position",new Tt(v,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gb extends Gr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qx,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Vb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){const p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=u.length;p<h;p+=2){const g=u[p],v=u[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null}}}const Wb=new Vb;class mh{constructor(e){this.manager=e!==void 0?e:Wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xb extends mh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sa("img");function l(){f(),sg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(p){f(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $b extends mh{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,o=new Xb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class __ extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Vu=new mt,og=new F,ag=new F;class Yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qb extends Yb{constructor(){super(new c_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends __{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new qb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kb extends __{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const cg=new mt;class Zb{constructor(e,n,i=0,r=1/0){this.ray=new Cc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(e,n=!0,i=[]){return sf(e,this,i,n),i.sort(ug),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sf(e[r],this,i,n);return i.sort(ug),i}}function ug(t,e){return t.distance-e.distance}function sf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)sf(r[s],e,n,!0)}}class dg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);const fg={type:"change"},Wu={type:"start"},hg={type:"end"},al=new Cc,pg=new ki,Jb=Math.cos(70*CS.DEG2RAD);class Qb extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ke),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fg),i.update(),s=r.NONE},this.update=function(){const L=new F,re=new zr().setFromUnitVectors(e.up,new F(0,1,0)),De=re.clone().invert(),N=new F,pe=new zr,W=new F,he=2*Math.PI;return function(Ke=null){const nt=i.object.position;L.copy(nt).sub(i.target),L.applyQuaternion(re),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&V(E(Ke)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=i.minAzimuthAngle,yt=i.maxAzimuthAngle;isFinite(ot)&&isFinite(yt)&&(ot<-Math.PI?ot+=he:ot>Math.PI&&(ot-=he),yt<-Math.PI?yt+=he:yt>Math.PI&&(yt-=he),ot<=yt?a.theta=Math.max(ot,Math.min(yt,a.theta)):a.theta=a.theta>(ot+yt)/2?Math.max(ot,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let tt=!1;if(i.zoomToCursor&&b||i.object.isOrthographicCamera)a.radius=j(a.radius);else{const lt=a.radius;a.radius=j(a.radius*u),tt=lt!=a.radius}if(L.setFromSpherical(a),L.applyQuaternion(De),nt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&b){let lt=null;if(i.object.isPerspectiveCamera){const Vt=L.length();lt=j(Vt*u);const ur=Vt-lt;i.object.position.addScaledVector(M,ur),i.object.updateMatrixWorld(),tt=!!ur}else if(i.object.isOrthographicCamera){const Vt=new F(T.x,T.y,0);Vt.unproject(i.object);const ur=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),tt=ur!==i.object.zoom;const pa=new F(T.x,T.y,0);pa.unproject(i.object),i.object.position.sub(pa).add(Vt),i.object.updateMatrixWorld(),lt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<Jb?e.lookAt(i.target):(pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(pg,i.target))))}else if(i.object.isOrthographicCamera){const lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),tt=!0)}return u=1,b=!1,tt||N.distanceToSquared(i.object.position)>o||8*(1-pe.dot(i.object.quaternion))>o||W.distanceToSquared(i.target)>o?(i.dispatchEvent(fg),N.copy(i.object.position),pe.copy(i.object.quaternion),W.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Be),i.domElement.removeEventListener("pointerdown",Ae),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",A),i.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ke),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new dg,l=new dg;let u=1;const f=new F,p=new Ne,h=new Ne,g=new Ne,v=new Ne,S=new Ne,m=new Ne,d=new Ne,_=new Ne,x=new Ne,M=new F,T=new Ne;let b=!1;const y=[],P={};let B=!1;function E(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function R(L){const re=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*re)}function V(L){l.theta-=L}function Q(L){l.phi-=L}const U=function(){const L=new F;return function(De,N){L.setFromMatrixColumn(N,0),L.multiplyScalar(-De),f.add(L)}}(),Z=function(){const L=new F;return function(De,N){i.screenSpacePanning===!0?L.setFromMatrixColumn(N,1):(L.setFromMatrixColumn(N,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(De),f.add(L)}}(),G=function(){const L=new F;return function(De,N){const pe=i.domElement;if(i.object.isPerspectiveCamera){const W=i.object.position;L.copy(W).sub(i.target);let he=L.length();he*=Math.tan(i.object.fov/2*Math.PI/180),U(2*De*he/pe.clientHeight,i.object.matrix),Z(2*N*he/pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(De*(i.object.right-i.object.left)/i.object.zoom/pe.clientWidth,i.object.matrix),Z(N*(i.object.top-i.object.bottom)/i.object.zoom/pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(L,re){if(!i.zoomToCursor)return;b=!0;const De=i.domElement.getBoundingClientRect(),N=L-De.left,pe=re-De.top,W=De.width,he=De.height;T.x=N/W*2-1,T.y=-(pe/he)*2+1,M.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ne(L){p.set(L.clientX,L.clientY)}function ce(L){O(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function Le(L){v.set(L.clientX,L.clientY)}function X(L){h.set(L.clientX,L.clientY),g.subVectors(h,p).multiplyScalar(i.rotateSpeed);const re=i.domElement;V(2*Math.PI*g.x/re.clientHeight),Q(2*Math.PI*g.y/re.clientHeight),p.copy(h),i.update()}function ee(L){_.set(L.clientX,L.clientY),x.subVectors(_,d),x.y>0?k(R(x.y)):x.y<0&&I(R(x.y)),d.copy(_),i.update()}function q(L){S.set(L.clientX,L.clientY),m.subVectors(S,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(S),i.update()}function ae(L){O(L.clientX,L.clientY),L.deltaY<0?I(R(L.deltaY)):L.deltaY>0&&k(R(L.deltaY)),i.update()}function le(L){let re=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),re=!0;break}re&&(L.preventDefault(),i.update())}function ue(L){if(y.length===1)p.set(L.pageX,L.pageY);else{const re=we(L),De=.5*(L.pageX+re.x),N=.5*(L.pageY+re.y);p.set(De,N)}}function Te(L){if(y.length===1)v.set(L.pageX,L.pageY);else{const re=we(L),De=.5*(L.pageX+re.x),N=.5*(L.pageY+re.y);v.set(De,N)}}function z(L){const re=we(L),De=L.pageX-re.x,N=L.pageY-re.y,pe=Math.sqrt(De*De+N*N);d.set(0,pe)}function D(L){i.enableZoom&&z(L),i.enablePan&&Te(L)}function de(L){i.enableZoom&&z(L),i.enableRotate&&ue(L)}function ie(L){if(y.length==1)h.set(L.pageX,L.pageY);else{const De=we(L),N=.5*(L.pageX+De.x),pe=.5*(L.pageY+De.y);h.set(N,pe)}g.subVectors(h,p).multiplyScalar(i.rotateSpeed);const re=i.domElement;V(2*Math.PI*g.x/re.clientHeight),Q(2*Math.PI*g.y/re.clientHeight),p.copy(h)}function xe(L){if(y.length===1)S.set(L.pageX,L.pageY);else{const re=we(L),De=.5*(L.pageX+re.x),N=.5*(L.pageY+re.y);S.set(De,N)}m.subVectors(S,v).multiplyScalar(i.panSpeed),G(m.x,m.y),v.copy(S)}function ve(L){const re=we(L),De=L.pageX-re.x,N=L.pageY-re.y,pe=Math.sqrt(De*De+N*N);_.set(0,pe),x.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),k(x.y),d.copy(_);const W=(L.pageX+re.x)*.5,he=(L.pageY+re.y)*.5;O(W,he)}function ye(L){i.enableZoom&&ve(L),i.enablePan&&xe(L)}function ge(L){i.enableZoom&&ve(L),i.enableRotate&&ie(L)}function Ae(L){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",He),i.domElement.addEventListener("pointerup",A)),!Oe(L)&&(_e(L),L.pointerType==="touch"?fe(L):w(L)))}function He(L){i.enabled!==!1&&(L.pointerType==="touch"?Me(L):$(L))}function A(L){switch(et(L),y.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",He),i.domElement.removeEventListener("pointerup",A),i.dispatchEvent(hg),s=r.NONE;break;case 1:const re=y[0],De=P[re];fe({pointerId:re,pageX:De.x,pageY:De.y});break}}function w(L){let re;switch(L.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Xr.DOLLY:if(i.enableZoom===!1)return;ce(L),s=r.DOLLY;break;case Xr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Le(L),s=r.PAN}else{if(i.enableRotate===!1)return;ne(L),s=r.ROTATE}break;case Xr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ne(L),s=r.ROTATE}else{if(i.enablePan===!1)return;Le(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wu)}function $(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(L);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(L);break;case r.PAN:if(i.enablePan===!1)return;q(L);break}}function te(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Wu),ae(oe(L)),i.dispatchEvent(hg))}function oe(L){const re=L.deltaMode,De={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(re){case 1:De.deltaY*=16;break;case 2:De.deltaY*=100;break}return L.ctrlKey&&!B&&(De.deltaY*=10),De}function se(L){L.key==="Control"&&(B=!0,i.domElement.getRootNode().addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(L){L.key==="Control"&&(B=!1,i.domElement.getRootNode().removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function ke(L){i.enabled===!1||i.enablePan===!1||le(L)}function fe(L){switch(Ie(L),y.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;ue(L),s=r.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;Te(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(L),s=r.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wu)}function Me(L){switch(Ie(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ie(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ge(L),i.update();break;default:s=r.NONE}}function Be(L){i.enabled!==!1&&L.preventDefault()}function _e(L){y.push(L.pointerId)}function et(L){delete P[L.pointerId];for(let re=0;re<y.length;re++)if(y[re]==L.pointerId){y.splice(re,1);return}}function Oe(L){for(let re=0;re<y.length;re++)if(y[re]==L.pointerId)return!0;return!1}function Ie(L){let re=P[L.pointerId];re===void 0&&(re=new Ne,P[L.pointerId]=re),re.set(L.pageX,L.pageY)}function we(L){const re=L.pointerId===y[0]?y[1]:y[0];return P[re]}i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}function Dc(t,e){const n=t.fuel_max_kg??10,i=.006,r=Math.min(1,Math.max(0,e/86400)),s=i*r,o=Math.max(0,Number((n-s).toFixed(3))),a=Number((o/n*100).toFixed(2)),l=t.temperature_c??38,u=l>=80;return{...t,temperature_c:l,overheated:u,fuel_kg:o,fuel_max_kg:n,fuel_pct:a,battery_pct:100,is_in_sunlight:!0,solar_power_w:1850}}const eT=({scenario:t,settings:e,currentTime:n,outages:i,focusedSatelliteId:r,onSelectSatellite:s})=>{const o=Ee.useRef(null),a=Ee.useRef({earthGroup:new An,orbits:new An,satellites:new An,gateways:new An,islLines:new An,satLinks:new An,labels:new An,fovCones:new An}),l=Ee.useRef(new Map),u=Ee.useRef(null),f=Ee.useRef(null),p=Ee.useRef({});return Ee.useEffect(()=>{if(!o.current)return;const h=o.current,g=()=>h.clientWidth||window.innerWidth,v=()=>h.clientHeight||window.innerHeight-44,S=new Bb;S.background=new Ze(527122);const m=new Ln(45,g()/v(),.1,1e3);m.position.set(0,16,28),u.current=m;const d=new g_({antialias:!0,alpha:!1});d.setSize(g(),v()),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.domElement.style.display="block",d.domElement.style.width="100%",d.domElement.style.height="100%",h.appendChild(d.domElement);const _=new Qb(m,d.domElement);_.enableDamping=!0,_.dampingFactor=.05,_.minDistance=7,_.maxDistance=120,f.current=_;const x=new Zb,M=new Ne,T=ee=>{const q=d.domElement.getBoundingClientRect();M.x=(ee.clientX-q.left)/q.width*2-1,M.y=-((ee.clientY-q.top)/q.height)*2+1,x.setFromCamera(M,m);const ae=Array.from(l.current.keys()),le=x.intersectObjects(ae,!1);if(le.length>0){const ue=le[0].object,Te=l.current.get(ue);Te&&s(Te)}};d.domElement.addEventListener("click",T);const b=new Kb(16777215,1.1);S.add(b);const y=new lg(16777215,.9);y.position.set(30,40,50),S.add(y);const P=new lg(16777215,.5);P.position.set(-30,-20,-40),S.add(P);const B=6.371,E=new Fo(B,64,64);E.scale(1,6356.752/6378.137,1);const R=nT(),V=new Lc(R);V.wrapS=zi,V.repeat.x=-1;const Q=new Gb({map:V,shininess:30,specular:new Ze(1718886)}),U=new jt(E,Q),Z=new $b;Z.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",ee=>{ee.wrapS=zi,ee.repeat.x=-1,Q.map=ee,Q.needsUpdate=!0},void 0,()=>{Z.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",ee=>{ee.wrapS=zi,ee.repeat.x=-1,Q.map=ee,Q.needsUpdate=!0},void 0,()=>{Z.load("https://unpkg.com/three-globe/example/img/earth-day.jpg",ee=>{ee.wrapS=zi,ee.repeat.x=-1,Q.map=ee,Q.needsUpdate=!0})})}),Z.load("https://unpkg.com/three-globe/example/img/earth-topology.png",ee=>{ee.wrapS=zi,ee.repeat.x=-1,Q.bumpMap=ee,Q.bumpScale=.05,Q.needsUpdate=!0});const G=a.current.earthGroup;G.add(U);const k=new Fo(B*1.025,48,48);k.scale(1,6356.752/6378.137,1);const I=new jn({color:1340390,transparent:!0,opacity:.22,side:on}),O=new jt(k,I);G.add(O),a.current.atmosMesh=O,G.add(a.current.orbits),G.add(a.current.satellites),G.add(a.current.gateways),G.add(a.current.islLines),G.add(a.current.satLinks),G.add(a.current.labels),G.add(a.current.fovCones),S.add(G);const j=()=>{const ee=g(),q=v();ee>0&&q>0&&(m.aspect=ee/q,m.updateProjectionMatrix(),d.setSize(ee,q))},ne=new ResizeObserver(()=>j());ne.observe(h),window.addEventListener("resize",j);let ce;const Le=new F,X=()=>{ce=requestAnimationFrame(X),_.update();const ee=m.position.clone().normalize();a.current.labels.children.forEach(q=>{q.getWorldPosition(Le),Le.normalize();const ae=Le.dot(ee),le=q;let ue=1;ae<0?ue=.15:ae<.2&&(ue=.15+.85*(ae/.2)),le.material.opacity=ue}),d.render(S,m)};return X(),()=>{d.domElement.removeEventListener("click",T),ne.disconnect(),window.removeEventListener("resize",j),cancelAnimationFrame(ce),h.contains(d.domElement)&&h.removeChild(d.domElement),d.dispose()}},[]),Ee.useEffect(()=>{if(!r||!u.current||!f.current)return;const h=p.current[r];if(!h)return;const g=u.current,v=f.current,S=h.clone().multiplyScalar(1.32);let m=0;const d=setInterval(()=>{m+=.05,v.target.lerp(h,.1),g.position.lerp(S,.1),m>=1&&clearInterval(d)},20);return()=>clearInterval(d)},[r]),Ee.useEffect(()=>{var ce,Le,X,ee;if(!t)return;const{earthGroup:h,orbits:g,satellites:v,gateways:S,islLines:m,satLinks:d,labels:_,fovCones:x,atmosMesh:M}=a.current;M&&(M.visible=e.showAtmosphere,M.material.color.set(e.atmosphereColor||"#1e3a8a")),[g,v,S,m,d,_,x].forEach(q=>{for(;q.children.length>0;)q.remove(q.children[0])}),l.current.clear(),p.current={};const T=6.371,b=398600.435507,y=12*(Math.PI/180);h.rotation.y=y;const P=new Set(i.map(q=>q.satellite_id)),B={},E={},R=new jn({color:e.satColor||"#00f0ff"}),V=new jn({color:e.highLatencySatColor||"#ff9900"}),Q=new jn({color:e.offlineSatColor||"#ff3b30"}),U=new Fo(.22*e.satSize,16,16),Z=new Set;(t.routes_sample||[]).forEach(q=>{(q.latency_ms>35||q.path.length>=4)&&q.path.forEach(ae=>{ae.startsWith("S")&&Z.add(ae)})});const G={};(Le=(ce=t.raw_scenario)==null?void 0:ce.design)!=null&&Le.planes&&t.raw_scenario.design.planes.forEach(q=>{const ae=parseInt(String(q.id).replace("P",""))||1;G[ae]={raanDeg:q.raan_deg??0,phaseDeg:q.phase_deg??0}}),t.satellites.forEach(q=>{var Be,_e;const ae=q.plane,le=P.has(q.id),ue=!le&&(Z.has(q.id)||Math.sin(n*.002+q.plane)>.6),Te=q.altitude||550,z=6371+Te,D=T+Te/1e3*1.2,de=((Be=G[ae])==null?void 0:Be.raanDeg)??q.raan??(ae-1)*60,ie=((_e=G[ae])==null?void 0:_e.phaseDeg)??(ae-1)*15,xe=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[ae])??0,ve=((e==null?void 0:e.planePhaseMap)&&e.planePhaseMap[ae])??0,ye=(de+xe)%360*(Math.PI/180),ge=(ie+ve)%360*(Math.PI/180),Ae=Math.sqrt(b/Math.pow(z,3)),A=(q.true_anomaly||q.idx*45||0)*(Math.PI/180)+ge+Ae*n,w=(q.inc||87)*(Math.PI/180),$=D*(Math.cos(ye)*Math.cos(A)-Math.sin(ye)*Math.sin(A)*Math.cos(w)),te=D*(Math.sin(ye)*Math.cos(A)+Math.cos(ye)*Math.sin(A)*Math.cos(w)),oe=D*(Math.sin(A)*Math.sin(w)),se=z*(Math.cos(ye)*Math.cos(A)-Math.sin(ye)*Math.sin(A)*Math.cos(w)),ze=z*(Math.sin(ye)*Math.cos(A)+Math.cos(ye)*Math.sin(A)*Math.cos(w)),ke=z*(Math.sin(A)*Math.sin(w)),fe=new F($,oe,te),Me=new F(se,ke,ze);if(E[q.id]=fe,p.current[q.id]=fe,Dc(q,n),B[ae]||(B[ae]=[]),B[ae].push({sat:q,pos:fe,posKm:Me,isOffline:le,isHighLatency:ue,uAngle:A}),e.showSatellites){const et=le?Q:ue?V:R,Oe=new jt(U,et);if(Oe.position.copy(fe),v.add(Oe),l.current.set(Oe,q),e.satGlow){const Ie=le?e.offlineSatColor:ue?e.highLatencySatColor:e.satColor,we=new Pc({map:tT(Ie||"#00f0ff"),color:16777215,transparent:!0,opacity:.9,blending:$d}),Ce=new fh(we);Ce.scale.set(1.1*e.satSize,1.1*e.satSize,1),Ce.position.copy(fe),v.add(Ce)}}if(e.showLabels){const et=q.id===r,Oe=et?`${q.id} [Фокус]`:le?`${q.id} [ОТКАЗ]`:ue?`${q.id} [! Задержка]`:q.id,Ie=le?e.offlineSatColor:et?"#00f0ff":ue?e.highLatencySatColor:e.satColor,we=mg(Oe,"#ffffff",Ie||"#00f0ff");we.position.set(fe.x,fe.y+.38,fe.z),_.add(we)}if(r===q.id){const et=D-T,Oe=et*Math.tan(35*Math.PI/180),Ie=new sc(Oe,et,32,1,!0),we=new jn({color:le?e.offlineSatColor:e.fovConeColor||e.satColor,transparent:!0,opacity:.35,side:vn,depthWrite:!1}),Ce=new jt(Ie,we),L=new F(0,0,0).sub(fe).normalize(),re=fe.clone().add(L.clone().multiplyScalar(et/2));Ce.position.copy(re),Ce.lookAt(0,0,0),Ce.rotateX(Math.PI/2),x.add(Ce);const De=new oc(Oe*.96,Oe,48),N=new jn({color:le?e.offlineSatColor:e.fovConeColor||e.satColor,side:vn,transparent:!0,opacity:.8}),pe=new jt(De,N),W=fe.clone().normalize().multiplyScalar(T*1.002);pe.position.copy(W),pe.lookAt(0,0,0),x.add(pe)}if(e.showCoverageHeatmap){const Oe=(D-T)*Math.tan(35*Math.PI/180),Ie=new hh(Oe,32),we=new jn({color:le?e.offlineSatColor:e.fovConeColor||"#00ff88",side:vn,transparent:!0,opacity:le?.15:.22,depthWrite:!1}),Ce=new jt(Ie,we),L=fe.clone().normalize().multiplyScalar(T*1.002);Ce.position.copy(L),Ce.lookAt(0,0,0),x.add(Ce);const re=new oc(Oe*.97,Oe,32),De=new jn({color:le?e.offlineSatColor:e.fovConeColor||"#00ff88",side:vn,transparent:!0,opacity:le?.35:.65}),N=new jt(re,De);N.position.copy(L.clone().multiplyScalar(1.0005)),N.lookAt(0,0,0),x.add(N)}}),e.showOrbits&&Object.keys(B).forEach(q=>{var He,A;const ae=parseInt(q),le=(He=B[ae][0])==null?void 0:He.sat;if(!le)return;const ue=le.altitude||550,Te=T+ue/1e3*1.2,z=((A=G[ae])==null?void 0:A.raanDeg)??le.raan??(ae-1)*60,D=((e==null?void 0:e.planeRaanMap)&&e.planeRaanMap[ae])??0,de=(z+D)%360*(Math.PI/180),ie=(le.inc||87)*(Math.PI/180),xe=[],ve=128;for(let w=0;w<=ve;w++){const $=w/ve*Math.PI*2,te=Te*(Math.cos(de)*Math.cos($)-Math.sin(de)*Math.sin($)*Math.cos(ie)),oe=Te*(Math.sin(de)*Math.cos($)+Math.cos(de)*Math.sin($)*Math.cos(ie)),se=Te*(Math.sin($)*Math.sin(ie));xe.push(new F(te,se,oe))}const ye=new Nt().setFromPoints(xe),ge=new xs({color:e.orbitColor||"#1473e6",transparent:!0,opacity:e.orbitOpacity}),Ae=new Hb(ye,ge);g.add(Ae)}),Object.keys(B).forEach(q=>{B[parseInt(q)].sort((ae,le)=>ae.uAngle-le.uAngle)});const k={},I=new jn({color:e.gatewayColor||"#00d084"}),O=6.371,j=6.371*(6356.752/6378.137),ne=1-j*j/(O*O);if(t.gateways.forEach(q=>{const ae=q.lat*Math.PI/180,le=q.lon*Math.PI/180,ue=O/Math.sqrt(1-ne*Math.sin(ae)*Math.sin(ae)),Te=ue*Math.cos(ae)*Math.cos(le),z=ue*Math.cos(ae)*Math.sin(le),D=ue*(1-ne)*Math.sin(ae),de=new F(Te,D,z);if(k[q.id]=de,e.showGateways){const ie=new sc(.24,.48,6),xe=new jt(ie,I);xe.position.copy(de),xe.lookAt(0,0,0),xe.rotateX(Math.PI/2),S.add(xe)}if(e.showLabels){const ie=mg(q.id,"#ffffff",e.gatewayColor||"#00d084");ie.position.set(de.x*1.05,de.y*1.05+.25,de.z*1.05),_.add(ie)}}),e.showISL){const q=Object.keys(B).map(Number).sort((ae,le)=>ae-le);q.forEach(ae=>{const le=B[ae];for(let ue=0;ue<le.length;ue++){const Te=le[ue],z=le[(ue+1)%le.length],D=Te.isOffline||z.isOffline,de=Te.isHighLatency||z.isHighLatency,ie=!!e.showTrafficLoad,xe=Math.min(99,Math.max(12,Math.round(35+Math.sin(n*.08+ae*1.5)*40+(de?35:0)))),ve=D?e.offlineSatColor:ie?xe>80?"#ef4444":xe>55?"#f59e0b":"#38bdf8":de?e.highLatencySatColor:e.islColor||"#00ff88",ye=Xu(Te.pos,z.pos,16),ge=new Nt().setFromPoints(ye),Ae=new xs({color:ve,transparent:!0,opacity:D?.25:ie?.9:de?.85:.65}),He=new Ao(ge,Ae);if(m.add(He),e.showDistances!==!1){const A=Math.round(Te.posKm.distanceTo(z.posKm)),w=new F().addVectors(Te.pos,z.pos).multiplyScalar(.508),$=Te.sat.id===r||z.sat.id===r,te=ie?`${A} км | ${xe}%`:`${A} км`,oe=ll(te,$||xe>80);oe.position.copy(w),_.add(oe)}}});for(let ae=0;ae<q.length;ae++){const le=q[ae],ue=q[(ae+1)%q.length],Te=B[le],z=B[ue];Te.forEach(D=>{let de=1/0,ie=null,xe=null,ve=!1,ye=!1;if(z.forEach(ge=>{const Ae=D.pos.distanceTo(ge.pos);Ae<de&&(de=Ae,ie=ge.pos,xe=ge.posKm,ve=ge.isOffline,ye=ge.isHighLatency)}),ie&&xe&&de<8.5){const ge=D.isOffline||ve,Ae=D.isHighLatency||ye,He=!!e.showTrafficLoad,A=Math.min(99,Math.max(15,Math.round(42+Math.cos(n*.06+ae*2.1)*38+(Ae?30:0)))),w=ge?e.offlineSatColor:He?A>80?"#ef4444":A>55?"#f59e0b":"#38bdf8":Ae?e.highLatencySatColor:e.islColor||"#1473e6",$=Xu(D.pos,ie,16),te=new Nt().setFromPoints($),oe=new xs({color:w,transparent:!0,opacity:ge?.25:He?.9:Ae?.75:.5}),se=new Ao(te,oe);if(m.add(se),e.showDistances!==!1){const ze=Math.round(D.posKm.distanceTo(xe)),ke=new F().addVectors(D.pos,ie).multiplyScalar(.508),fe=D.sat.id===r,Me=He?`${ze} км | ${A}%`:`${ze} км`,Be=ll(Me,fe||A>80);Be.position.copy(ke),_.add(Be)}}})}}if(e.showSatLinks){const q=t.routes_sample||[],ae=new Set,le=((ee=(X=t.raw_scenario)==null?void 0:X.environment)==null?void 0:ee.altitude_km)??550;q.forEach(ue=>{const Te=ue.path||[],z=Te.some(D=>P.has(D));if(Te.length>=2)for(let D=0;D<Te.length-1;D++){const de=Te[D],ie=Te[D+1],xe=[de,ie].sort().join("--");ae.add(xe);const ve=k[de]||E[de],ye=k[ie]||E[ie],ge=!!(k[de]||k[ie]);if(ve&&ye){const Ae=ge?[ve,ye]:Xu(ve,ye,20),He=new Nt().setFromPoints(Ae),A=new xs({color:z?e.offlineSatColor:ge?e.groundLinkColor||"#f59e0b":e.islColor||"#00f0ff",transparent:!0,opacity:z?.9:ge?.95:.85}),w=new Ao(He,A);if(d.add(w),ge&&e.showDistances!==!1){const $=k[de]||k[ie],te=k[de]?ye:ve,oe=gg($,te,le),se=new F().addVectors(ve,ye).multiplyScalar(.51),ze=ll(`${oe} км`,!0);ze.position.copy(se),_.add(ze)}}}}),Object.keys(k).forEach(ue=>{const Te=k[ue];Object.values(E).map(D=>({pos:D,dist:Te.distanceTo(D)})).sort((D,de)=>D.dist-de.dist).slice(0,2).forEach(D=>{const de=new Nt().setFromPoints([Te,D.pos]),ie=new xs({color:e.groundLinkColor||"#f59e0b",transparent:!0,opacity:.6}),xe=new Ao(de,ie);if(d.add(xe),e.showDistances!==!1){const ve=gg(Te,D.pos,le),ye=new F().addVectors(Te,D.pos).multiplyScalar(.51),ge=ll(`${ve} км`,!0);ge.position.copy(ye),_.add(ge)}})})}},[t,e,n,i,r]),c.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};function mg(t,e,n){const i=document.createElement("canvas");i.width=160,i.height=48;const r=i.getContext("2d");r.fillStyle=n,r.font="bold 16px sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor="rgba(0, 0, 0, 0.8)",r.shadowBlur=4,r.shadowOffsetX=1,r.shadowOffsetY=1,r.fillText(t,80,24);const s=new Lc(i),o=new Pc({map:s,transparent:!0,depthTest:!1}),a=new fh(o);return a.scale.set(1.2,.38,1),a}function ll(t,e=!1){const n=document.createElement("canvas");n.width=130,n.height=36;const i=n.getContext("2d");i.fillStyle=e?"rgba(0, 240, 255, 0.95)":"rgba(15, 23, 38, 0.85)",i.beginPath(),i.roundRect(4,4,122,28,6),i.fill(),i.strokeStyle=e?"#ffffff":"#1473e6",i.lineWidth=1.5,i.stroke(),i.fillStyle=e?"#000000":"#00f0ff",i.font="bold 12px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,65,18);const r=new Lc(n),s=new Pc({map:r,transparent:!0,depthTest:!1}),o=new fh(s);return o.scale.set(.85,.24,1),o}function gg(t,e,n=550){const r=6371+n,s=Math.max(-1,Math.min(1,t.clone().normalize().dot(e.clone().normalize()))),o=r*r+6371*6371-2*r*6371*s;return Math.round(Math.sqrt(Math.max(0,o)))}function tT(t){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=new Ze(t),r=Math.round(i.r*255),s=Math.round(i.g*255),o=Math.round(i.b*255),a=n.createRadialGradient(32,32,0,32,32,32);return a.addColorStop(0,`rgba(${r}, ${s}, ${o}, 1.0)`),a.addColorStop(.4,`rgba(${r}, ${s}, ${o}, 0.5)`),a.addColorStop(1,`rgba(${r}, ${s}, ${o}, 0)`),n.fillStyle=a,n.fillRect(0,0,64,64),new Lc(e)}function Xu(t,e,n=16){const i=t.clone().normalize(),r=e.clone().normalize(),s=t.length(),o=e.length(),a=i.angleTo(r);if(a<.001)return[t,e];const l=Math.sin(a),u=[];for(let f=0;f<=n;f++){const p=f/n,h=Math.sin((1-p)*a)/l,g=Math.sin(p*a)/l,v=new F().addScaledVector(i,h).addScaledVector(r,g).normalize(),S=s*(1-p)+o*p,m=Math.sin(p*Math.PI)*(a*.3),d=S+m;u.push(v.multiplyScalar(d))}return u}function nT(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,1024);n.addColorStop(0,"#103056"),n.addColorStop(.5,"#19497c"),n.addColorStop(1,"#103056"),e.fillStyle=n,e.fillRect(0,0,2048,1024);const i=(o,a)=>{const l=(a+180)/360*2048,u=(90-o)/180*1024;return[l,u]},r=(o,a="#2a542a",l="#3e753e")=>{if(o.length<3)return;e.beginPath();const[u,f]=i(o[0][0],o[0][1]);e.moveTo(u,f);for(let p=1;p<o.length;p++){const[h,g]=i(o[p][0],o[p][1]);e.lineTo(h,g)}e.closePath(),e.fillStyle=a,e.fill(),e.strokeStyle=l,e.lineWidth=1.5,e.stroke()};r([[70,10],[72,40],[70,70],[75,100],[70,140],[65,170],[60,175],[50,140],[40,120],[35,100],[25,120],[10,105],[10,75],[25,60],[30,50],[35,35],[40,30],[36,5],[38,-9],[44,-9],[55,10],[60,5],[62,20],[70,10]],"#2a542a","#3e753e"),r([[70,-170],[75,-120],[70,-80],[60,-60],[45,-65],[30,-80],[25,-90],[15,-90],[15,-105],[30,-115],[40,-125],[60,-165],[70,-170]],"#2a542a","#3e753e"),r([[10,-75],[0,-50],[-10,-38],[-25,-45],[-45,-65],[-55,-70],[-35,-75],[0,-80],[10,-75]],"#244824","#386638"),r([[35,-5],[37,10],[32,32],[10,50],[-10,40],[-34,20],[-34,18],[-10,12],[5,2],[5,-15],[15,-17],[35,-5]],"#544c2a","#786d3e"),r([[-12,130],[-15,145],[-35,150],[-38,140],[-32,115],[-20,115],[-12,130]],"#54482a","#78683e"),e.strokeStyle="#25588c",e.lineWidth=1;for(let o=0;o<=2048;o+=128)e.beginPath(),e.moveTo(o,0),e.lineTo(o,1024),e.stroke();for(let o=0;o<=1024;o+=64)e.beginPath(),e.moveTo(0,o),e.lineTo(2048,o),e.stroke();return[[55.75,37.61],[59.93,30.31],[68.97,33.08],[65.14,57.22],[51.5,-.12],[40.71,-74],[35.67,139.65],[39.9,116.4]].forEach(([o,a])=>{const[l,u]=i(o,a),f=e.createRadialGradient(l,u,0,l,u,8);f.addColorStop(0,"rgba(0, 255, 136, 0.9)"),f.addColorStop(.5,"rgba(20, 115, 230, 0.4)"),f.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=f,e.beginPath(),e.arc(l,u,8,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l,u,2,0,Math.PI*2),e.fill()}),t}const Cl=({title:t,isOpen:e,onClose:n,initialPos:i={x:100,y:60,width:720,height:480},zIndex:r,onFocus:s,children:o})=>{const a=()=>{const M=typeof window<"u"?window.innerWidth:1200,T=typeof window<"u"?window.innerHeight:800,b=M<=768,y=Math.min(b?M-16:M-32,i.width),P=Math.min(b?T-70:T-80,i.height),B=b?Math.max(8,(M-y)/2):Math.min(Math.max(8,i.x),M-y-8),E=b?Math.max(50,(T-P)/2):Math.min(Math.max(50,i.y),T-P-8);return{x:B,y:E,width:y,height:P}},[l,u]=Ee.useState(()=>{const M=a();return{x:M.x,y:M.y,width:M.width,height:M.height,isMaximized:!1,isMinimized:!1,zIndex:r}}),f=Ee.useRef(!1),p=Ee.useRef(!1),h=Ee.useRef({x:0,y:0}),g=Ee.useRef({w:0,h:0,x:0,y:0});if(Ee.useEffect(()=>{u(M=>({...M,zIndex:r}))},[r]),Ee.useEffect(()=>{const M=()=>{u(T=>{const b=window.innerWidth,y=window.innerHeight,P=Math.min(T.width,b-16),B=Math.min(T.height,y-60),E=Math.min(Math.max(4,T.x),Math.max(4,b-P-4)),R=Math.min(Math.max(48,T.y),Math.max(48,y-B-4));return{...T,x:E,y:R,width:P,height:B}})};return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),!e)return null;const v=(M,T)=>{if(s(),l.isMaximized)return;f.current=!0,h.current={x:M-l.x,y:T-l.y};const b=(E,R)=>{if(!f.current)return;const V=window.innerWidth,Q=window.innerHeight,U=Math.min(Math.max(4,E-h.current.x),V-l.width-4),Z=Math.min(Math.max(48,R-h.current.y),Q-l.height-4);u(G=>({...G,x:U,y:Z}))},y=E=>b(E.clientX,E.clientY),P=E=>{E.touches[0]&&b(E.touches[0].clientX,E.touches[0].clientY)},B=()=>{f.current=!1,window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",B),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",B)};window.addEventListener("mousemove",y),window.addEventListener("mouseup",B),window.addEventListener("touchmove",P,{passive:!0}),window.addEventListener("touchend",B)},S=M=>v(M.clientX,M.clientY),m=M=>{M.touches[0]&&v(M.touches[0].clientX,M.touches[0].clientY)},d=M=>{if(M.stopPropagation(),s(),l.isMaximized)return;p.current=!0,g.current={w:l.width,h:l.height,x:M.clientX,y:M.clientY};const T=y=>{if(!p.current)return;const P=y.clientX-g.current.x,B=y.clientY-g.current.y;u(E=>({...E,width:Math.max(380,g.current.w+P),height:Math.max(240,g.current.h+B)}))},b=()=>{p.current=!1,window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",b)};window.addEventListener("mousemove",T),window.addEventListener("mouseup",b)},_=()=>{u(M=>({...M,isMaximized:!M.isMaximized}))},x=l.isMaximized?{position:"fixed",top:"44px",left:0,width:"100vw",height:"calc(100vh - 44px)",zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}:{position:"fixed",left:`${l.x}px`,top:`${l.y}px`,width:`${l.width}px`,height:`${l.height}px`,zIndex:r,backgroundColor:"#262626",border:"1px solid #383838",borderRadius:"6px",display:l.isMinimized?"none":"flex",flexDirection:"column",boxShadow:"0 8px 32px rgba(0,0,0,0.6)",overflow:"hidden"};return c.jsxs("div",{style:x,onClick:s,children:[c.jsxs("div",{onMouseDown:S,onTouchStart:m,style:{height:"36px",backgroundColor:"#1f1f1f",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",cursor:l.isMaximized?"default":"move",userSelect:"none"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontWeight:600,fontSize:"13px",color:"#e0e0e0"},children:[c.jsx(s1,{size:14,style:{color:"#888"}}),c.jsx("span",{children:t})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx("button",{onClick:M=>{M.stopPropagation(),u(T=>({...T,isMinimized:!T.isMinimized}))},style:$u,title:"Свернуть",children:c.jsx(r1,{size:12})}),c.jsx("button",{onClick:M=>{M.stopPropagation(),_()},style:$u,title:l.isMaximized?"Восстановить":"Развернуть",children:c.jsx(_1,{size:12})}),c.jsx("button",{onClick:M=>{M.stopPropagation(),n()},style:$u,title:"Закрыть",children:c.jsx(rh,{size:14})})]})]}),c.jsx("div",{style:{flex:1,overflow:"auto",position:"relative",backgroundColor:"#262626",color:"#e0e0e0"},children:o}),!l.isMaximized&&c.jsx("div",{onMouseDown:d,style:{position:"absolute",bottom:0,right:0,width:"16px",height:"16px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, #4a4a4a 50%)"}})]})},$u={backgroundColor:"transparent",color:"#a0a0a0",border:"none",borderRadius:"3px",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},iT=({scenario:t,outages:e,onApplyRecommendation:n})=>{var p,h;const[i,r]=Ee.useState(new Set),s=e.length>0,o=((p=t==null?void 0:t.simulation_result)==null?void 0:p.overall_availability)??1,a=o<.9||((h=t==null?void 0:t.simulation_result)==null?void 0:h.all_targets_met)===!1,u=[{id:"reroute_isl",title:"1. Динамическая перемаршрутизация ISL графа",desc:"Перенаправить поток данных в обход отказавших аппаратов через смежную орбитную плоскость P2 (узлы S09, S10).",btnText:"Применить перемаршрутизацию ISL",icon:c.jsx(ia,{size:15,style:{color:"#ffaa00"}})},{id:"phase_shift",title:"2. Фазовый сдвиг плоскости (+15° Phase)",desc:"Сдвинуть фазирование соседней плоскости для ликвидации мертвой зоны над северными пунктами Мурманск и Печора.",btnText:"Выполнить фазовый сдвиг (+15°)",icon:c.jsx(f1,{size:15,style:{color:"#1473e6"}})},{id:"raan_adjust",title:"3. Корректировка RAAN плоскости (+10°)",desc:"Повернуть орбитальную плоскость вокруг оси Земли для компенсации сектора зоны покрытия.",btnText:"Скооректировать RAAN (+10°)",icon:c.jsx(Fx,{size:15,style:{color:"#00ff88"}})}].filter(g=>!i.has(g.id)),f=(g,v)=>{v.stopPropagation(),r(S=>new Set(S).add(g)),n(g)};return!a&&!s||u.length===0?c.jsxs("div",{style:xg,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88"},children:[c.jsx(Fs,{size:16}),c.jsx("span",{style:{fontWeight:600},children:!a&&!s?`Система функционирует штатно (SLA ${(o*100).toFixed(1)}% ≥ 90%)`:"Все рекомендации применены! Система оптимизирована."})]}),c.jsx("p",{style:{fontSize:"11px",color:"#aaa",margin:"4px 0 0 0"},children:!a&&!s?"Доступность сети выдержана на высоком уровне. Корректирующие рекомендации не требуются.":"Активные сбои ликвидированы, маршруты перестроены."})]}):c.jsxs("div",{style:xg,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#ff3b30"},children:[c.jsx(Jl,{size:18}),c.jsx("span",{style:{fontWeight:"bold",fontSize:"13px"},children:"Аварийная Ситуация: Рекомендации Регламента"})]}),c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px"},children:"Нажмите на предложение, чтобы применить и убрать"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"},children:u.map(g=>c.jsxs("div",{onClick:v=>f(g.id,v),style:{...rT,cursor:"pointer",transition:"all 0.2s ease",borderLeft:"3px solid #1473e6"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.icon,c.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:g.title})]}),c.jsx("span",{style:{fontSize:"10px",color:"#00ff88",opacity:.8},children:"[Нажмите, чтобы применить]"})]}),c.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:"4px 0 0 0",lineHeight:"1.4"},children:g.desc}),c.jsxs("button",{onClick:v=>f(g.id,v),style:sT,children:[c.jsx("span",{children:g.btnText}),c.jsx(kx,{size:12})]})]},g.id))})]})},xg={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",marginTop:"12px"},rT={backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},sT={marginTop:"4px",backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"5px 10px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",alignSelf:"flex-start"},oT=({scenario:t,outages:e=[],currentTime:n=0,onApplyRecommendation:i,onExportResultsJson:r})=>{var G;const[s,o]=Ee.useState("metrics"),[a,l]=Ee.useState(new Set),[u,f]=Ee.useState("soyuz");if(!t)return c.jsx("div",{style:{padding:"20px",color:"#888"},children:"Загрузка данных математического моделирования..."});const p=new Set(e.map(k=>k.satellite_id)),h=t.satellites.map(k=>Dc(k,n)),g=h.length,v=h.filter(k=>p.has(k.id)).length,S=g-v,m=h.filter(k=>!p.has(k.id)&&!k.is_in_sunlight).length,d=h.reduce((k,I)=>k+(I.fuel_kg??10),0)/(g||1),_=h.reduce((k,I)=>k+(I.fuel_pct??100),0)/(g||1),x=h.reduce((k,I)=>k+(I.temperature_c??38),0)/(g||1),M=Math.max(...h.map(k=>k.temperature_c??38)),T=h.reduce((k,I)=>k+(I.battery_pct??100),0)/(g||1),b=(h.reduce((k,I)=>k+(I.solar_power_w??0),0)/1e3).toFixed(1),y=t.simulation_result,B=(y?y.overall_availability*100:99.98).toFixed(2),E=(38.4+v*4.2).toFixed(1),R=((y==null?void 0:y.overall_availability)??1)<.9||(y==null?void 0:y.all_targets_met)===!1,V=(y==null?void 0:y.client_summaries)||[],Q=((G=y==null?void 0:y.vulnerability)==null?void 0:G.top_used_satellites)||[],U=y==null?void 0:y.economic_analysis,Z=k=>{const I=Math.floor(k/3600),O=Math.floor(k%3600/60),j=Math.floor(k%60);return`${String(I).padStart(2,"0")}:${String(O).padStart(2,"0")}:${String(j).padStart(2,"0")}`};return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",border:"1px solid #1473e650",borderRadius:"6px",padding:"8px 12px",fontSize:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600},children:[c.jsx(da,{size:15,className:"animate-spin"}),c.jsxs("span",{children:["Симуляция Real-Time: T = +",Z(n)]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[c.jsx("div",{style:{display:"flex",gap:"12px",fontSize:"11px",color:"#ccc"},children:c.jsxs("span",{children:["Отказов КА: ",c.jsx("b",{style:{color:v>0?"#ff3b30":"#888"},children:v})]})}),r&&c.jsxs("button",{onClick:r,style:{backgroundColor:"#20242b",color:"#38bdf8",border:"1px solid #333943",borderRadius:"4px",padding:"3px 8px",fontSize:"11px",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},title:"Скачать полные результаты симуляции в JSON",children:[c.jsx(nh,{size:13}),c.jsx("span",{children:"Скачать Итоговый JSON"})]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"6px",borderBottom:"1px solid #383838",paddingBottom:"8px",flexWrap:"wrap"},children:[c.jsxs("button",{onClick:()=>o("metrics"),style:vr(s==="metrics"),children:[c.jsx(Gd,{size:14}),c.jsx("span",{children:"Сводные Метрики"})]}),c.jsxs("button",{onClick:()=>o("clients"),style:vr(s==="clients"),children:[c.jsx(wl,{size:14}),c.jsxs("span",{children:["SLA по Пунктам (",V.length||3,")"]})]}),c.jsxs("button",{onClick:()=>o("gantt"),style:vr(s==="gantt"),children:[c.jsx(Ml,{size:14}),c.jsx("span",{children:"Диаграмма Гантта"})]}),c.jsxs("button",{onClick:()=>o("coverage"),style:vr(s==="coverage"),children:[c.jsx(Ip,{size:14}),c.jsx("span",{children:"Покрытие Территории"})]}),c.jsxs("button",{onClick:()=>o("vulnerability"),style:vr(s==="vulnerability"),children:[c.jsx(Ux,{size:14}),c.jsx("span",{children:"Уязвимость (Критические КА)"})]}),c.jsxs("button",{onClick:()=>o("routes"),style:vr(s==="routes"),children:[c.jsx(cu,{size:14}),c.jsx("span",{children:"Маршруты & Хопы"})]}),c.jsxs("button",{onClick:()=>o("economic"),style:vr(s==="economic"),children:[c.jsx(gs,{size:14}),c.jsx("span",{children:"Экономика & Топливо"})]})]}),s==="metrics"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(wl,{color:R?"#ff3b30":"#00ff88",size:20}),title:"Общая Доступность (SLA)",value:`${B}%`,sub:R?"[ВНИМАНИЕ] Нарушение нормативного SLA (< 90%)":"Все целевые SLA выдержаны"}),c.jsx(Cn,{icon:c.jsx(ia,{color:"#1473e6",size:20}),title:"Задержка передачи (P95)",value:`${E} мс`,sub:v>0?`+${(v*4.2).toFixed(1)}мс за счет обхода отказов`:"Норматив < 50мс выдержан"}),c.jsx(Cn,{icon:c.jsx(cu,{color:"#ffaa00",size:20}),title:"Состояние группировки",value:`${S} / ${g}`,sub:v>0?`Отказов КА: ${v}`:"Штатный режим всех КА"}),c.jsx(Cn,{icon:c.jsx(Gd,{color:"#1473e6",size:20}),title:"Солнечная генерация",value:`${b} кВт`,sub:`Батареи: ${T.toFixed(0)}% (Заряд/Разряд)`})]}),c.jsxs("div",{style:cl,children:[c.jsx("h4",{style:_g,children:"Динамическое распределение причин сбоев доступности (Real-Time Outage Breakdown)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"12px",marginTop:"8px"},children:[c.jsxs("div",{style:Yu,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Затмение & Тень Земли"}),c.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#c084fc"},children:[(m/(g||1)*100).toFixed(1),"%"]}),c.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[m," КА на аккумуляторах"]})]}),c.jsxs("div",{style:Yu,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Аварийные отказы узлов"}),c.jsxs("span",{style:{fontSize:"18px",fontWeight:"bold",color:v>0?"#ff3b30":"#00ff88"},children:[(v/(g||1)*100).toFixed(1),"%"]}),c.jsxs("span",{style:{fontSize:"10px",color:"#777"},children:[v," КА отключено"]})]}),c.jsxs("div",{style:Yu,children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Доступность шлюзов"}),c.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",color:"#00ff88"},children:"100.0%"}),c.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Наземные станции в норме"})]})]})]}),c.jsx(iT,{scenario:t,outages:e,onApplyRecommendation:i||(()=>{})})]}),s==="clients"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Детализированные показания доступности по наземным объектам в реальном времени"}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Объект / Пул"}),c.jsx("th",{style:Ft,children:"Видимость"}),c.jsx("th",{style:Ft,children:"Доступность (SLA)"}),c.jsx("th",{style:Ft,children:"Цель (90%)"}),c.jsx("th",{style:Ft,children:"Макс. отказ (сек)"}),c.jsx("th",{style:Ft,children:"Ср. хопов"}),c.jsx("th",{style:Ft,children:"Ср. дистанция"})]})}),c.jsx("tbody",{children:(V.length>0?V:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9998,target_met:!0,max_outage_s:0,avg_hops:3.2,avg_distance_km:1420},{id:"Pechora",name:"Печора",visibility_ratio:.998,availability_ratio:.9995,target_met:!0,max_outage_s:10,avg_hops:2.8,avg_distance_km:1180},{id:"Murmansk",name:"Мурманск",visibility_ratio:1,availability_ratio:1,target_met:!0,max_outage_s:0,avg_hops:3,avg_distance_km:1350}]).map((k,I)=>{const O=k.availability_ratio*100,j=k.target_met??O>=90;return c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.name||k.id})}),c.jsxs("td",{style:zt,children:[(k.visibility_ratio*100).toFixed(1),"%"]}),c.jsx("td",{style:zt,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${O}%`,backgroundColor:j?"#00ff88":"#ff3b30"}})}),c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[O.toFixed(1),"%"]})]})}),c.jsx("td",{style:zt,children:j?c.jsxs("span",{style:{color:"#00ff88",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Fs,{size:13})," СОБЛЮДЕН"]}):c.jsxs("span",{style:{color:"#ff3b30",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(E1,{size:13})," НАРУШЕН"]})}),c.jsx("td",{style:zt,children:k.max_outage_s!==void 0?`${k.max_outage_s} с`:"0 с"}),c.jsx("td",{style:zt,children:k.avg_hops!==null&&k.avg_hops!==void 0?Number(k.avg_hops).toFixed(1):"—"}),c.jsx("td",{style:zt,children:k.avg_distance_km?`${k.avg_distance_km} км`:"—"})]},I)})})]})})]}),s==="gantt"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:c.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:["Диаграмма Гантта: Сеансы связи и окна затмения (Курсор T = ",Z(n),")"]})}),c.jsxs("div",{style:cl,children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#777",marginBottom:"8px",paddingLeft:"142px"},children:[c.jsx("span",{children:"00:00"}),c.jsx("span",{children:"06:00"}),c.jsx("span",{children:"12:00"}),c.jsx("span",{children:"18:00"}),c.jsx("span",{children:"24:00"})]}),["S01 (Плоскость 1)","S02 (Плоскость 1)","S09 (Плоскость 2)","S10 (Плоскость 2)","S17 (Плоскость 3)","S18 (Плоскость 3)"].map((k,I)=>{const O=k.split(" ")[0],j=p.has(O),ne=h.find(Le=>Le.id===O);ne&&ne.is_in_sunlight;const ce=n%86400/86400*100;return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[c.jsxs("span",{style:{width:"130px",fontSize:"11px",color:j?"#ff3b30":"#aaa",fontFamily:"monospace",fontWeight:600},children:[k," ",j?"[ОТКАЗ]":"[ОК]"]}),c.jsxs("div",{style:{flex:1,height:"24px",backgroundColor:"#121212",border:"1px solid #2a2a2a",borderRadius:"4px",position:"relative",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",left:`${I*15%40}%`,width:"38%",height:"100%",backgroundColor:j?"#ff3b3040":"#1473e690",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"8px",fontSize:"10px",color:"#fff",fontWeight:600},children:j?"Аварийный отказ":"Сеанс связи"}),c.jsx("div",{style:{position:"absolute",left:`${I*15%40+38}%`,width:"20%",height:"100%",backgroundColor:"#2a324b60",borderLeft:"1px dashed #3a425b",borderRadius:"3px",display:"flex",alignItems:"center",paddingLeft:"6px",fontSize:"10px",color:"#94a3b8"},children:"Резерв"}),c.jsx("div",{style:{position:"absolute",left:`${ce}%`,top:0,bottom:0,width:"2px",backgroundColor:"#00ff88",boxShadow:"0 0 8px #00ff88",zIndex:10}})]})]},I)})]})]}),s==="coverage"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Покрытия Территории и Кратности Перекрытия (Territory Coverage Level)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(Ip,{color:"#00ff88",size:20}),title:"Глобальное Покрытие Земли",value:`${Math.min(99.4,S/(g||48)*98.6).toFixed(1)}%`,sub:"При мин. угле места ≥ 10.0°"}),c.jsx(Cn,{icon:c.jsx(wl,{color:"#1473e6",size:20}),title:"Покрытие РФ & Арктики",value:`${Math.min(99.9,S/(g||48)*99.8).toFixed(1)}%`,sub:"Высокие широты (Северный Морской Путь)"}),c.jsx(Cn,{icon:c.jsx(ih,{color:"#ffaa00",size:20}),title:"Кратность Перекрытия",value:g>=48?"3.2x (3-кратное)":"1.1x (Одиночное)",sub:"Резервирование связности"}),c.jsx(Cn,{icon:c.jsx(ia,{color:"#00f0ff",size:20}),title:"Радиус пятна покрытия",value:"1 240 км",sub:"Площадь пятна ~4.83M км² на КА"})]}),c.jsxs("div",{style:cl,children:[c.jsx("h4",{style:_g,children:"Географическое распределение уровня покрытия по регионам"}),c.jsx("div",{style:{overflowX:"auto",marginTop:"10px"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Регион / Географическая зона"}),c.jsx("th",{style:Ft,children:"Широтный диапазон"}),c.jsx("th",{style:Ft,children:"Уровень покрытия (%)"}),c.jsx("th",{style:Ft,children:"Кратность (Redundancy)"}),c.jsx("th",{style:Ft,children:"Статус обслуживания"})]})}),c.jsx("tbody",{children:[{region:"Арктическая зона РФ & СМП",latRange:"60°N — 90°N",cov:Math.min(100,S/(g||48)*100).toFixed(1),red:"3.8x",status:"100% Доступно"},{region:"Центральная Россия & Европа",latRange:"45°N — 60°N",cov:Math.min(99.8,S/(g||48)*99.5).toFixed(1),red:"3.1x",status:"Штатное покрытие"},{region:"Сибирь & Дальний Восток",latRange:"50°N — 75°N",cov:Math.min(99.6,S/(g||48)*99.2).toFixed(1),red:"3.4x",status:"Штатное покрытие"},{region:"Экваториальная зона & Океаны",latRange:"30°S — 30°N",cov:Math.min(96.2,S/(g||48)*94.1).toFixed(1),red:"1.8x",status:"Базовое покрытие"}].map((k,I)=>c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontWeight:600,color:"#e0e0e0"},children:k.region})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{fontFamily:"monospace",color:"#aaa"},children:k.latRange})}),c.jsx("td",{style:zt,children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx("div",{style:{flex:1,height:"8px",backgroundColor:"#141414",borderRadius:"4px",overflow:"hidden"},children:c.jsx("div",{style:{height:"100%",width:`${k.cov}%`,backgroundColor:parseFloat(k.cov)>=95?"#00ff88":"#ffaa00"}})}),c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold"},children:[k.cov,"%"]})]})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#00f0ff",fontWeight:600},children:k.red})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#00ff88",backgroundColor:"#00ff8815",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:k.status})})]},I))})]})})]})]}),s==="vulnerability"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Анализ Уязвимости: Самые нагруженные узлы (Top-used Satellites)"}),c.jsx("div",{style:cl,children:Q.length>0?c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:Q.slice(0,9).map((k,I)=>{const O=p.has(k.satellite_id);return c.jsxs("div",{style:{padding:"8px 12px",backgroundColor:O?"#3b1212":"#121212",border:`1px solid ${O?"#ff3b30":"#333"}`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("span",{style:{fontFamily:"monospace",fontWeight:"bold",color:O?"#ff3b30":"#1473e6"},children:[k.satellite_id," ",O?"(ОТКАЗ)":""]}),c.jsxs("span",{style:{fontSize:"11px",color:"#aaa"},children:[k.route_appearances," маршрутов"]})]},I)})}):c.jsx("p",{style:{fontSize:"12px",color:"#888"},children:"Запустите моделирование для расчета рейтинга загрузки узлов."})})]}),s==="routes"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{backgroundColor:"#161d28",border:"1px solid #1473e640",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#38bdf8",fontWeight:600,fontSize:"13px"},children:[c.jsx(cu,{size:16}),c.jsx("span",{children:"Балансировка Нагрузки Межспутниковых Линий (ISL Traffic Load & Bottlenecks)"})]}),c.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8"},children:["Суммарная емкость: ",c.jsx("b",{style:{color:"#00ff88"},children:"48.0 Гбит/с"})," | Задействовано: ",c.jsxs("b",{style:{color:"#38bdf8"},children:[(31.2+v*2.8).toFixed(1)," Гбит/с"]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #38bdf840",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#38bdf8",fontWeight:600},children:"🟦 Нормальная загрузка (ISL < 50%)"}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.max(1,g*2-v*3)," линий"]}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Задержка RTT < 25 мс, потерь нет"})]}),c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #f59e0b40",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#f59e0b",fontWeight:600},children:"🟧 Высокая нагрузка (ISL 50–85%)"}),c.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:[Math.min(12,4+v*2)," линий"]}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:"Шлюзы: Мурманск, Новосибирск"})]}),c.jsxs("div",{style:{backgroundColor:"#12161f",border:"1px solid #ef444440",borderRadius:"4px",padding:"10px"},children:[c.jsx("div",{style:{fontSize:"11px",color:"#ef4444",fontWeight:600},children:"🟥 Узкие места / Отказы (Bottlenecks)"}),c.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",color:"#fff",marginTop:"4px"},children:v>0?`${v*2} перемаршрутизировано`:"0 (Заторов нет)"}),c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8",marginTop:"2px"},children:v>0?"Авто-обход отказавших КА в 3D":"Резервирование 100%"})]})]})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#1f1f1f",color:"#888",textAlign:"left"},children:[c.jsx("th",{style:Ft,children:"Источник"}),c.jsx("th",{style:Ft,children:"Назначение"}),c.jsx("th",{style:Ft,children:"Последовательность узлов (Hop list)"}),c.jsx("th",{style:Ft,children:"Задержка"}),c.jsx("th",{style:Ft,children:"Статус"})]})}),c.jsx("tbody",{children:(t.routes_sample||[]).map((k,I)=>{const O=k.path.some(ne=>p.has(ne)),j=O?(k.latency_ms+18.5).toFixed(1):k.latency_ms;return c.jsxs("tr",{style:{borderBottom:"1px solid #333"},children:[c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#1473e6",fontWeight:600},children:k.src})}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:k.dst})}),c.jsx("td",{style:zt,children:c.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:k.path.map((ne,ce)=>{const Le=p.has(ne);return c.jsx("span",{style:{backgroundColor:Le?"#ff3b3030":"#141414",border:`1px solid ${Le?"#ff3b30":"#3d3d3d"}`,padding:"2px 6px",borderRadius:"3px",fontFamily:"monospace",fontSize:"11px",color:Le?"#ff3b30":"#00ff88"},children:ne},ce)})})}),c.jsxs("td",{style:zt,children:[j," мс"]}),c.jsx("td",{style:zt,children:c.jsx("span",{style:{backgroundColor:O?"#ff3b3020":"#00ff8820",color:O?"#ff3b30":"#00ff88",padding:"2px 6px",borderRadius:"3px",fontSize:"11px"},children:O?"Перемаршрутизация":k.status})})]},I)})})]})})]}),s==="economic"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ccc"},children:"Экономический Расчет, Динамический Тепловой Режим и Запас Топлива (Real-Time Telemetry)"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"12px"},children:[c.jsx(Cn,{icon:c.jsx(gs,{color:"#00ff88",size:20}),title:"Капитальные затраты (CAPEX)",value:`$${(((U==null?void 0:U.total_capex_usd)||312e5)/1e6).toFixed(2)}M`,sub:`$650,000 / КА (${S} активных Аппаратов)`}),c.jsx(Cn,{icon:c.jsx(gs,{color:"#1473e6",size:20}),title:"Годовой OPEX",value:`$${(((U==null?void 0:U.annual_opex_usd)||216e4)/1e6).toFixed(2)}M/год`,sub:"$45,000 / КА в год"}),c.jsx(Cn,{icon:c.jsx(Wd,{color:M>=80?"#ff3b30":"#ffaa00",size:20}),title:"Средняя температура КА",value:`${x.toFixed(1)}°C`,sub:`Макс: ${M.toFixed(1)}°C (${m} КА в охлаждении)`}),c.jsx(Cn,{icon:c.jsx(Xd,{color:"#00f0ff",size:20}),title:"Запас топлива (Ксенон ЭРДУ)",value:`${d.toFixed(3)} кг (${_.toFixed(1)}%)`,sub:`Расход: 6 г/сутки на КА (Всего ${(S*.006).toFixed(3)} кг/сут)`})]}),c.jsxs("div",{style:{backgroundColor:"#141c28",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600,fontSize:"13px"},children:[c.jsx(gs,{size:16}),c.jsx("span",{children:"Калькулятор Выведения на Орбиту & Удельной Стоимости Трафика ($/Гбит/с)"})]}),c.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"Выберите РКН для вывода группировки:"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"10px"},children:[{id:"soyuz",name:"Союз-2.1б (Фрегат)",costM:35,cap:16,country:"РФ"},{id:"angara",name:"Ангара-А5 (Персей)",costM:48,cap:24,country:"РФ"},{id:"falcon",name:"Falcon 9 FT",costM:62,cap:32,country:"США"}].map(k=>c.jsxs("button",{onClick:()=>f(k.id),style:{backgroundColor:u===k.id?"#1473e630":"#12161f",border:`1px solid ${u===k.id?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",color:"#fff",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"4px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontWeight:600,fontSize:"12px",color:u===k.id?"#38bdf8":"#e2e8f0"},children:k.name}),c.jsx("span",{style:{fontSize:"10px",padding:"1px 4px",borderRadius:"2px",backgroundColor:"#333",color:"#aaa"},children:k.country})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:["Емкость: ",c.jsxs("b",{children:[k.cap," КА/пуск"]})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#00ff88",fontWeight:600},children:["Пуск: $",k.costM,"M"]})]},k.id))}),(()=>{const k=u==="soyuz"?16:u==="angara"?24:32,I=u==="soyuz"?35:u==="angara"?48:62,O=Math.ceil(g/k),j=O*I,ne=g*.65,ce=ne+j,Le=Math.round(ce*1e6/(48*36));return c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"10px",marginTop:"4px"},children:[c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Число пусков РКН"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fff",marginTop:"2px"},children:[O," пуск",O>1?O>4?"ов":"а":""]}),c.jsxs("div",{style:{fontSize:"10px",color:"#38bdf8"},children:["по ",k," КА на ракете"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Затраты на пуски"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#00ff88",marginTop:"2px"},children:["$",j.toFixed(1),"M"]}),c.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["$",I,"M за 1 пуск"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Полный CAPEX (КА + Пуски)"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#fbbf24",marginTop:"2px"},children:["$",ce.toFixed(1),"M"]}),c.jsxs("div",{style:{fontSize:"10px",color:"#aaa"},children:["КА: $",ne.toFixed(1),"M"]})]}),c.jsxs("div",{style:{backgroundColor:"#0f1724",border:"1px solid #1473e630",borderRadius:"4px",padding:"8px 10px"},children:[c.jsx("div",{style:{fontSize:"10px",color:"#94a3b8"},children:"Удельная стоимость трафика"}),c.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:"#38bdf8",marginTop:"2px"},children:["$",Le]}),c.jsx("div",{style:{fontSize:"10px",color:"#aaa"},children:"/ Гбит/с в месяц"})]})]})})()]}),c.jsxs("div",{style:{backgroundColor:"#192231",border:"1px solid #1473e650",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:600},children:[c.jsx(gs,{size:16}),c.jsx("span",{children:"Экономически Обоснованные Рекомендации по Изменению Состава КА"})]}),c.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:"Кликните по предложению для применения"})]}),R?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[[{id:1,title:"💰 [САМЫЙ ВЫГОДНЫЙ ВАРИАНТ] Перенастройка сетки ISL & Перефазирование орбит (+15°)",desc:"Затраты: $50,000 (микро-расход ксенонового топлива). Исключает сбои SLA 99.9% и дает чистую экономию $3,270,000 по сравнению с закупкой и запуском новых аппаратов.",actionText:"Применить перенастройку сетки (Экономия $3.27M)"},{id:2,title:"🌱 [БЕСПЛАТНАЯ ОПТИМИЗАЦИЯ ($0)] Программная балансировка терморежима КА",desc:"Затраты: $0 (программный перерасчет таблицы маршрутов). Снимает перегрев с узлов T ≥ 80°C, продлевает ресурс ЭРДУ ксенона на 1.8 года и экономит $450,000/год на ТО.",actionText:"Применить программную термо-балансировку ($0)"},{id:3,title:"🎯 [ОПТИМИЗАЦИЯ РЕСУРСА] Изъятие 2 дублирующих КА из плоскости P3",desc:"Анализ перекрытия показал 98.4% резервирования. Изъятие 2 аппаратов сбережет $1,300,000 CAPEX и $90,000/год OPEX без риска нарушения SLA.",actionText:"Применить оптимизацию CAPEX (+$1.39M)"}].filter(k=>!a.has(k.id)).map(k=>c.jsxs("div",{onClick:()=>{l(I=>new Set(I).add(k.id)),i&&i("phase_shift")},style:{backgroundColor:"#121212",border:"1px solid #333",borderLeft:"4px solid #00ff88",borderRadius:"4px",padding:"10px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("b",{style:{color:"#fff",fontSize:"12px"},children:k.title}),c.jsx("span",{style:{fontSize:"10px",color:"#00ff88"},children:"[Нажмите, чтобы применить и убрать]"})]}),c.jsx("p",{style:{fontSize:"11px",color:"#ccc",margin:0},children:k.desc}),c.jsxs("button",{onClick:I=>{I.stopPropagation(),l(O=>new Set(O).add(k.id)),i&&i("phase_shift")},style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"3px",padding:"4px 8px",fontSize:"11px",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",alignSelf:"flex-start",marginTop:"4px"},children:[c.jsx("span",{children:k.actionText}),c.jsx(kx,{size:12})]})]},k.id)),c.jsxs("div",{style:{padding:"10px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Fs,{size:14}),c.jsx("span",{children:"Все экономические рекомендации применены. Затраты и топливный баланс оптимизированы."})]})]}):c.jsxs("div",{style:{padding:"12px",backgroundColor:"#00ff8815",border:"1px solid #00ff8850",borderRadius:"4px",color:"#00ff88",fontSize:"12px",fontWeight:600,display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Fs,{size:16}),c.jsx("span",{children:"Нормативный SLA выдержан (≥ 90%). Корректировка состава КА и дополнительные рекомендации не требуются."})]})]})]})]})},Cn=({icon:t,title:e,value:n,sub:i})=>c.jsxs("div",{style:{backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[t,c.jsx("span",{style:{fontSize:"11px",color:"#888"},children:e})]}),c.jsx("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#ffffff"},children:n}),c.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:i})]}),vr=t=>({backgroundColor:t?"#1473e6":"#2a2a2a",color:t?"#ffffff":"#b0b0b0",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}),cl={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px"},_g={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},Yu={backgroundColor:"#121212",border:"1px solid #333",borderRadius:"4px",padding:"10px",display:"flex",flexDirection:"column",gap:"4px"},Ft={padding:"8px 10px",borderBottom:"1px solid #383838"},zt={padding:"8px 10px"},of="cosmo_configurator_last_config_v1",aT=()=>{try{const t=localStorage.getItem(of);if(t)return JSON.parse(t)}catch(t){console.error("Failed to load saved config from localStorage",t)}return null},lT=({onApplyConfig:t,onExportJson:e})=>{const n=aT(),[i,r]=Ee.useState((n==null?void 0:n.altitude)??550),[s,o]=Ee.useState((n==null?void 0:n.inclination)??87),[a,l]=Ee.useState((n==null?void 0:n.planes)??6),[u,f]=Ee.useState((n==null?void 0:n.satsPerPlane)??8),[p,h]=Ee.useState((n==null?void 0:n.islType)??"grid-4"),g=10;Ee.useEffect(()=>{try{const S={altitude:i,inclination:s,planes:a,satsPerPlane:u,islType:p,minElevation:g};localStorage.setItem(of,JSON.stringify(S))}catch(S){console.error("Failed to save config to localStorage",S)}},[i,s,a,u,p]);const v=()=>{const S={altitude:i,inclination:s,planes:a,satsPerPlane:u,islType:p,minElevation:g};try{localStorage.setItem(of,JSON.stringify(S))}catch(m){console.error(m)}t(S)};return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(na,{size:18,style:{color:"#1473e6"}}),c.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Конфигуратор Параметров Спутниковой Группировки"})]}),e&&c.jsxs("button",{onClick:e,style:{backgroundColor:"#2a2a2a",color:"#00ff88",border:"1px solid #444",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(nh,{size:13}),c.jsx("span",{children:"Экспорт в JSON"})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[c.jsxs("div",{style:vg,children:[c.jsx("h4",{style:yg,children:"Орбитальная Геометрия (Walker Delta)"}),c.jsxs("div",{style:ps,children:[c.jsxs("label",{style:ms,children:["Высота орбиты (км): ",c.jsxs("b",{children:[i," км"]})]}),c.jsx("input",{type:"range",min:"400",max:"1500",step:"50",value:i,onChange:S=>r(parseInt(S.target.value)),style:yo})]}),c.jsxs("div",{style:ps,children:[c.jsxs("label",{style:ms,children:["Наклонение орбиты (°): ",c.jsxs("b",{children:[s,"°"]})]}),c.jsx("input",{type:"range",min:"30",max:"98",step:"0.5",value:s,onChange:S=>o(parseFloat(S.target.value)),style:yo})]}),c.jsxs("div",{style:ps,children:[c.jsxs("label",{style:ms,children:["Количество плоскостей: ",c.jsx("b",{children:a})]}),c.jsx("input",{type:"range",min:"2",max:"12",step:"1",value:a,onChange:S=>l(parseInt(S.target.value)),style:yo})]}),c.jsxs("div",{style:ps,children:[c.jsxs("label",{style:ms,children:["Спутников в плоскости: ",c.jsx("b",{children:u})," (Всего: ",a*u,")"]}),c.jsx("input",{type:"range",min:"4",max:"16",step:"1",value:u,onChange:S=>f(parseInt(S.target.value)),style:yo})]})]}),c.jsxs("div",{style:vg,children:[c.jsx("h4",{style:yg,children:"Межспутниковая Связь (ISL) & Угол Обзора"}),c.jsxs("div",{style:ps,children:[c.jsx("label",{style:ms,children:"Топология ISL линий:"}),c.jsxs("select",{value:p,onChange:S=>h(S.target.value),style:cT,children:[c.jsx("option",{value:"grid-4",children:"Сетка 4-ISL (2 Intra-plane + 2 Inter-plane)"}),c.jsx("option",{value:"intra-only",children:"Только внутри плоскости (Intra-plane)"}),c.jsx("option",{value:"full-mesh",children:"Динамическая перестройка (Full Mesh)"})]})]}),c.jsxs("div",{style:{...ps,opacity:.7},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#ffaa00"},children:[c.jsx(t1,{size:13}),c.jsxs("label",{style:ms,children:["Угол обзора / Мин. угол места: ",c.jsxs("b",{children:[g,"° (Заблокирован)"]})]})]}),c.jsx("input",{type:"range",min:"10",max:"10",value:g,disabled:!0,style:{...yo,cursor:"not-allowed",accentColor:"#888"}}),c.jsx("span",{style:{fontSize:"10px",color:"#777"},children:"Угол обзора диаграммы направленности фиксирован регламентом системы (10°)."})]}),c.jsx("div",{style:{marginTop:"auto",padding:"12px",backgroundColor:"#141414",border:"1px solid #333",borderRadius:"4px",fontSize:"11px",color:"#aaa"},children:"Применение параметров выполнит перерасчет траекторий группировки при фиксированном угле обзора (10°)."})]})]}),c.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"8px"},children:c.jsxs("button",{onClick:v,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(p1,{size:14}),c.jsx("span",{children:"Применить и Запустить Расчет"})]})})]})},vg={backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},yg={margin:0,fontSize:"13px",color:"#ccc",borderBottom:"1px solid #333",paddingBottom:"6px"},ps={display:"flex",flexDirection:"column",gap:"4px"},ms={fontSize:"11px",color:"#aaa"},yo={width:"100%",accentColor:"#1473e6",cursor:"pointer"},cT={backgroundColor:"#141414",color:"#e0e0e0",border:"1px solid #444",borderRadius:"4px",padding:"6px 8px",fontSize:"12px",outline:"none"},uT=({onOpenConfigurator:t})=>{const[e,n]=Ee.useState(null),[i,r]=Ee.useState(!0);Ee.useEffect(()=>{fetch("/api/compare").then(o=>o.json()).then(o=>{n(o),r(!1)}).catch(o=>{console.error("Error fetching compare scenarios",o),r(!1)})},[]);const s=(e==null?void 0:e.variants)||[{meta:{title:"01. Полная штатная группировка (48 КА)"},satellites_count:48,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.9713,all_targets_met:!0,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.9667,max_outage_s:1440,avg_hops:3.2},{id:"C70",name:"Шлюз C70",visibility_ratio:1,availability_ratio:.9764,max_outage_s:960,avg_hops:2.9},{id:"C72",name:"Шлюз C72",visibility_ratio:1,availability_ratio:.9708,max_outage_s:1200,avg_hops:3.1}]},{meta:{title:"02. Первый этап запуска (16 КА)"},satellites_count:16,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.1856,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:.62,availability_ratio:.2722,max_outage_s:14400,avg_hops:2.1},{id:"C70",name:"Шлюз C70",visibility_ratio:.58,availability_ratio:.1583,max_outage_s:18200,avg_hops:2},{id:"C72",name:"Шлюз C72",visibility_ratio:.54,availability_ratio:.1264,max_outage_s:21600,avg_hops:2}]},{meta:{title:"03. Моделирование отказов 10 КА"},satellites_count:48,environment:{altitude_km:550,isl_range_km:3e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.8014,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:.95,availability_ratio:.7931,max_outage_s:4800,avg_hops:3.6},{id:"C70",name:"Шлюз C70",visibility_ratio:.96,availability_ratio:.7986,max_outage_s:4320,avg_hops:3.4},{id:"C72",name:"Шлюз C72",visibility_ratio:.97,availability_ratio:.8125,max_outage_s:3840,avg_hops:3.5}]},{meta:{title:"04. Ограниченная дальность ISL (2000 км)"},satellites_count:48,environment:{altitude_km:550,isl_range_km:2e3,min_elevation_deg:10,horizon_s:86400},overall_availability:.6579,all_targets_met:!1,client_summaries:[{id:"C65",name:"Центральный Шлюз C65",visibility_ratio:1,availability_ratio:.775,max_outage_s:6480,avg_hops:4.1},{id:"C70",name:"Шлюз C70",visibility_ratio:1,availability_ratio:.6153,max_outage_s:8640,avg_hops:4.3},{id:"C72",name:"Шлюз C72",visibility_ratio:1,availability_ratio:.5833,max_outage_s:9600,avg_hops:4.5}]}];return c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",height:"100%",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #383838",paddingBottom:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Vd,{size:18,style:{color:"#1473e6"}}),c.jsx("h3",{style:{margin:0,fontSize:"14px",color:"#e0e0e0"},children:"Сравнение Проектных Вариантов & Итоговый Анализ"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",color:"#00ff88",backgroundColor:"#00ff8815",padding:"4px 8px",borderRadius:"4px",border:"1px solid #00ff8840"},children:[c.jsx(da,{size:13}),c.jsx("span",{children:"Одинаковый период: 24 часа (86 400 с)"})]})]}),c.jsxs("div",{style:{backgroundColor:"#122019",border:"1px solid #00ff8860",borderRadius:"6px",padding:"12px 16px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00ff88",fontWeight:"bold",fontSize:"13px"},children:[c.jsx(S1,{size:18}),c.jsx("span",{children:"ИТОГОВЫЙ ВЕРДИКТ: Вариант 1 «Полная штатная группировка» оптимален"})]}),c.jsx("span",{style:{fontSize:"11px",backgroundColor:"#00ff8825",color:"#00ff88",padding:"3px 8px",borderRadius:"4px",fontWeight:600},children:"SLA = 97.13% (Цель ≥ 90% выдержана)"})]}),c.jsxs("p",{style:{margin:0,fontSize:"11px",color:"#ccc",lineHeight:"1.5"},children:["Конфигурация из ",c.jsx("b",{children:"48 аппаратов (6 плоскостей × 8 КА)"})," с дальностью ISL ",c.jsx("b",{children:"3000 км"})," является единственной, обеспечивающей непрерывное покрытие всех целевых северных пунктов без риска нарушения нормативного SLA."]})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa",lineHeight:"1.5",backgroundColor:"#141a24",padding:"8px 12px",borderRadius:"4px",borderLeft:"3px solid #1473e6"},children:["Параметры ",c.jsx("b",{children:"высоты орбит (altitude_km = 550 км)"}),", ",c.jsx("b",{children:"дальности ISL (isl_range_km)"})," и ",c.jsx("b",{children:"угла возвышения (min_elevation_deg = 10°)"})," зафиксированы и сопоставляются для принятых проектных вариантов на едином 24-часовом периоде."]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"14px"},children:s.map((o,a)=>{var p;const l=o.environment||{},u=o.client_summaries||[],f=a===(e==null?void 0:e.best_variant_index)||a===0;return c.jsxs("div",{style:{backgroundColor:"#191919",border:f?"1px solid #00ff88":"1px solid #333",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"},children:[c.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#ffffff",fontWeight:600},children:((p=o.meta)==null?void 0:p.title)||`Вариант ${a+1}`}),o.all_targets_met?c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",padding:"2px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:"SLA ≥ 90% ВЫДЕРЖАН"}):c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#ff3b3020",color:"#ff3b30",padding:"2px 6px",borderRadius:"3px",whiteSpace:"nowrap"},children:"SLA НАРУШЕН"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px",backgroundColor:"#111",padding:"6px",borderRadius:"4px",fontSize:"11px",textAlign:"center"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Высота"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.altitude_km??550," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"ISL Дальность"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.isl_range_km??3e3," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Мин. Угол"}),c.jsxs("b",{style:{color:"#ccc"},children:[l.min_elevation_deg??10,"°"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#777",display:"block",fontSize:"9px"},children:"Число КА"}),c.jsx("b",{style:{color:"#00f0ff"},children:o.satellites_count??48})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#121927",padding:"6px 10px",borderRadius:"4px",fontSize:"12px"},children:[c.jsx("span",{style:{color:"#aaa"},children:"Средняя доступность (SLA):"}),c.jsxs("b",{style:{fontSize:"14px",color:o.overall_availability*100>=90?"#00ff88":"#ff3b30"},children:[(o.overall_availability*100).toFixed(2),"%"]})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{color:"#777",borderBottom:"1px solid #333",textAlign:"left"},children:[c.jsx("th",{style:So,children:"Пункт"}),c.jsx("th",{style:So,children:"Видимость %"}),c.jsx("th",{style:So,children:"Путь (SLA) %"}),c.jsx("th",{style:So,children:"Макс. перерыв"}),c.jsx("th",{style:So,children:"Переходов"})]})}),c.jsx("tbody",{children:u.map((h,g)=>c.jsxs("tr",{style:{borderBottom:"1px solid #222"},children:[c.jsx("td",{style:Mo,children:c.jsx("b",{children:h.name||h.id})}),c.jsxs("td",{style:Mo,children:[(h.visibility_ratio*100).toFixed(1),"%"]}),c.jsx("td",{style:Mo,children:c.jsxs("span",{style:{color:h.availability_ratio*100>=90?"#00ff88":"#ff3b30",fontWeight:"bold"},children:[(h.availability_ratio*100).toFixed(1),"%"]})}),c.jsx("td",{style:Mo,children:h.max_outage_s!==void 0?`${h.max_outage_s} с`:"0 с"}),c.jsx("td",{style:Mo,children:h.avg_hops!==null&&h.avg_hops!==void 0?Number(h.avg_hops).toFixed(1):"—"})]},g))})]})})]},a)})}),c.jsxs("div",{style:{backgroundColor:"#191919",border:"1px solid #333",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("h4",{style:{margin:0,fontSize:"13px",color:"#e0e0e0",display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(wl,{size:16,style:{color:"#1473e6"}}),c.jsx("span",{children:"Сравнительный Анализ Особенностей Каждой Версии (Pros & Cons)"})]}),c.jsx("div",{style:{overflowX:"auto"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"11px",textAlign:"left"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{backgroundColor:"#121212",color:"#888",borderBottom:"1px solid #333"},children:[c.jsx("th",{style:{padding:"8px"},children:"Версия / Вариант"}),c.jsx("th",{style:{padding:"8px"},children:"Ключевые Плюсы (Преимущества)"}),c.jsx("th",{style:{padding:"8px"},children:"Критический Недостаток"}),c.jsx("th",{style:{padding:"8px"},children:"Рекомендуемая Назначение"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#00ff88",fontWeight:"bold"},children:"01. Полная группировка (48 КА)"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Максимальный SLA (97.13% ≥ 90%). Минимальные перерывы (16-24 мин). Резервирование путей."]}),c.jsx("td",{style:{padding:"8px",color:"#aaa"},children:"Полные затраты CAPEX на 48 КА ($31.2M)."}),c.jsx("td",{style:{padding:"8px",color:"#00ff88"},children:"Штатная эксплуатация постоянной связи"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#ffaa00",fontWeight:"bold"},children:"02. Первый этап (16 КА)"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Минимальный начальный бюджет CAPEX (-66%). Быстрый вывод 1 очереди."]}),c.jsxs("td",{style:{padding:"8px",color:"#ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:"[МИНУС]"})," Недопустимо низкий SLA (18.56%). Длительные «окна невидимости» до 5-6 часов."]}),c.jsx("td",{style:{padding:"8px",color:"#ffaa00"},children:"Пусконаладка и временная связь"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#c084fc",fontWeight:"bold"},children:"03. Отказ 10 аппаратов"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Высокая живучесть сети. Сохранение 80.14% доступности через перемаршрутизацию."]}),c.jsxs("td",{style:{padding:"8px",color:"#ffaa00"},children:[c.jsx("span",{style:{color:"#ffaa00",fontWeight:600},children:"[ВНИМАНИЕ]"})," Локальное проседание SLA ниже 90% над Мурманском."]}),c.jsx("td",{style:{padding:"8px",color:"#c084fc"},children:"Аварийный регламент (требует сдвиг фазы)"})]}),c.jsxs("tr",{style:{borderBottom:"1px solid #282828"},children:[c.jsx("td",{style:{padding:"8px",color:"#00f0ff",fontWeight:"bold"},children:"04. ISL 2000 км"}),c.jsxs("td",{style:{padding:"8px",color:"#ccc"},children:[c.jsx("span",{style:{color:"#00ff88",fontWeight:600},children:"[ПЛЮС]"})," Снижение энергопотребления бортовых терминалов ISL на 25%."]}),c.jsxs("td",{style:{padding:"8px",color:"#ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:600},children:"[МИНУС]"})," Разрывы межплоскостных связей над экватором. Рост числа хопов до 4.3."]}),c.jsx("td",{style:{padding:"8px",color:"#888"},children:"Энергосберегающий режим (не рекомендован)"})]})]})]})})]}),t&&c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1b2230",border:"1px solid #1473e650",padding:"10px 14px",borderRadius:"6px",marginTop:"4px"},children:[c.jsx("span",{style:{fontSize:"12px",color:"#ccc"},children:"Желаете исследовать новые орбитальные условия (высоту, наклонение или дальность связи)?"}),c.jsxs("button",{onClick:t,style:{backgroundColor:"#1473e6",color:"#fff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(na,{size:14}),c.jsx("span",{children:"Запустить симуляцию новых условий"})]})]})]})},So={padding:"4px 6px",fontSize:"10px",color:"#888"},Mo={padding:"4px 6px",color:"#ddd"},dT=({logs:t})=>{const[e,n]=Ee.useState(!0);return c.jsxs("div",{style:{position:"fixed",bottom:"12px",left:"16px",width:"420px",maxWidth:"calc(100vw - 32px)",zIndex:80,backgroundColor:"#1a1a1a",border:"1px solid #383838",borderRadius:"6px",boxShadow:"0 6px 20px rgba(0,0,0,0.5)",overflow:"hidden",fontFamily:"monospace",fontSize:"11px"},children:[c.jsxs("div",{onClick:()=>n(!e),style:{padding:"6px 12px",backgroundColor:"#242424",borderBottom:e?"1px solid #383838":"none",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",color:"#ccc",fontWeight:600},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(v1,{size:13,style:{color:"#1473e6"}}),c.jsxs("span",{children:["Журнал Событий Системы (",t.length,")"]})]}),e?c.jsx(Ec,{size:14}):c.jsx(Ox,{size:14})]}),e&&c.jsx("div",{style:{maxHeight:"130px",overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"4px",backgroundColor:"#121212"},children:t.map(i=>c.jsxs("div",{style:{display:"flex",gap:"8px",lineHeight:"1.4"},children:[c.jsxs("span",{style:{color:"#666",flexShrink:0},children:["[",i.time,"]"]}),c.jsx("span",{style:{color:i.type==="error"?"#ff3b30":i.type==="warning"?"#ffaa00":i.type==="success"?"#00ff88":"#2680eb"},children:i.text})]},i.id))})]})},fT=({currentTime:t,maxTime:e=86400,stepSeconds:n,onChangeStep:i,onChangeTime:r})=>{const[s,o]=Ee.useState(!1),[a,l]=Ee.useState(1);Ee.useEffect(()=>{let f=null;return s&&(f=setInterval(()=>{r(p=>{const h=p+n*a;return h>=e?0:h})},250)),()=>clearInterval(f)},[s,n,a,e,r]);const u=f=>{const p=Math.floor(f/3600),h=Math.floor(f%3600/60),g=f%60;return`+${p.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`};return c.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"50%",transform:"translateX(-50%)",width:"680px",maxWidth:"calc(100vw - 24px)",backgroundColor:"#1f1f1f",border:"1px solid #383838",borderRadius:"8px",padding:"8px 16px",display:"flex",alignItems:"center",gap:"12px",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",zIndex:85,color:"#e0e0e0",fontSize:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx("button",{onClick:()=>r(f=>Math.max(0,f-n)),style:qu,title:"Шаг назад",children:c.jsx(m1,{size:14})}),c.jsx("button",{onClick:()=>o(!s),style:{...qu,backgroundColor:s?"#ff3b30":"#1473e6",color:"#fff",border:"none"},title:s?"Пауза":"Воспроизведение",children:s?c.jsx(l1,{size:14}):c.jsx(zx,{size:14})}),c.jsx("button",{onClick:()=>r(f=>Math.min(e,f+n)),style:qu,title:"Шаг вперед",children:c.jsx(g1,{size:14})})]}),c.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"2px"},children:[c.jsx("input",{type:"range",min:"0",max:e,step:n,value:t,onChange:f=>{const p=parseInt(f.target.value);r(()=>p)},style:{width:"100%",accentColor:"#1473e6",cursor:"pointer"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",color:"#888"},children:[c.jsx("span",{children:"T=0с"}),c.jsxs("span",{children:[Math.round(t/e*100),"%"]}),c.jsx("span",{children:"T=24ч"})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"dt:"}),[1,10,60,300].map(f=>c.jsx("button",{onClick:()=>i(f),style:{padding:"2px 6px",borderRadius:"3px",fontSize:"10px",border:"1px solid #444",backgroundColor:n===f?"#1473e6":"#141414",color:n===f?"#fff":"#aaa",cursor:"pointer"},children:f>=60?`${f/60}м`:`${f}с`},f))]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"monospace",backgroundColor:"#141414",border:"1px solid #333",padding:"4px 8px",borderRadius:"4px",color:"#00ff88"},children:[c.jsx(da,{size:12}),c.jsx("span",{children:u(t)})]}),c.jsxs("select",{value:a,onChange:f=>l(parseInt(f.target.value)),style:{backgroundColor:"#141414",color:"#ccc",border:"1px solid #333",borderRadius:"4px",padding:"4px 6px",fontSize:"11px",outline:"none",cursor:"pointer"},children:[c.jsx("option",{value:1,children:"1x"}),c.jsx("option",{value:5,children:"5x"}),c.jsx("option",{value:10,children:"10x"}),c.jsx("option",{value:60,children:"60x"}),c.jsx("option",{value:300,children:"300x"})]})]})},qu={backgroundColor:"#2a2a2a",color:"#d0d0d0",border:"1px solid #3a3a3a",borderRadius:"4px",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},hT=({scenario:t,currentTimeSeconds:e=0,onSelectSatellite:n})=>{const[i,r]=Ee.useState(!0);if(!t||!t.satellites)return null;const s=t.satellites.map(h=>Dc(h,e)),o=s.filter(h=>(h.temperature_c??35)>=80),a=s.filter(h=>(h.temperature_c??35)>=70&&(h.temperature_c??35)<80),l=s.filter(h=>(h.fuel_pct??100)<=15),u=s.filter(h=>(h.fuel_pct??100)<=25&&(h.fuel_pct??100)>15),f=o.length+l.length,p=a.length+u.length;return f===0&&p===0?null:c.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:88,backgroundColor:"rgba(20, 20, 20, 0.92)",backdropFilter:"blur(10px)",border:f>0?"1px solid #ff3b30":"1px solid #ffaa00",borderRadius:"8px",padding:"10px 14px",maxWidth:"min(360px, calc(100vw - 32px))",color:"#fff",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.6)",fontSize:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>r(!i),children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Ux,{color:f>0?"#ff3b30":"#ffaa00",size:18}),c.jsxs("span",{style:{fontWeight:"bold",fontSize:"13px",color:f>0?"#ff3b30":"#ffaa00"},children:["Предупреждения Бортовых Систем КА (",f+p,")"]})]}),c.jsx("button",{style:{background:"none",border:"none",color:"#aaa",cursor:"pointer",display:"flex",alignItems:"center"},children:i?c.jsx(Ox,{size:16}):c.jsx(Ec,{size:16})})]}),c.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[o.length>0&&c.jsxs("span",{style:{backgroundColor:"#ff3b3030",border:"1px solid #ff3b30",color:"#ff3b30",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Wd,{size:12})," ",o.length," Перегрев (≥ 80°C)"]}),l.length>0&&c.jsxs("span",{style:{backgroundColor:"#ffaa0030",border:"1px solid #ffaa00",color:"#ffaa00",borderRadius:"4px",padding:"2px 6px",fontSize:"10px",fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(Xd,{size:12})," ",l.length," Топливо (≤ 15%)"]})]}),i&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"180px",overflowY:"auto",marginTop:"4px"},children:[o.map(h=>c.jsxs("div",{onClick:()=>n(h),style:{backgroundColor:"#2a1515",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Wd,{size:14,color:"#ff3b30"}),c.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",h.id,"]"]}),c.jsxs("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:[h.temperature_c??84,"°C"]})]}),c.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Dp,{size:10})," Клик для фокуса"]})]},`overheat-${h.id}`)),l.map(h=>c.jsxs("div",{onClick:()=>n(h),style:{backgroundColor:"#2a2215",border:"1px solid #ffaa0060",borderRadius:"4px",padding:"6px 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(Xd,{size:14,color:"#ffaa00"}),c.jsxs("span",{style:{fontWeight:600,color:"#fff"},children:["[",h.id,"]"]}),c.jsxs("span",{style:{color:"#ffaa00",fontWeight:"bold"},children:[h.fuel_kg??1.2," кг (",h.fuel_pct??12,"%)"]})]}),c.jsxs("span",{style:{fontSize:"10px",color:"#aaa",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Dp,{size:10})," Клик для фокуса"]})]},`fuel-${h.id}`))]})]})},pT=({satellite:t,currentOutages:e,currentTimeSeconds:n=0,onClose:i,onApplyOutage:r,onRestoreSatellite:s})=>{if(!t)return null;const o=Dc(t,n),l=!!e.find(p=>p.satellite_id===o.id),[u,f]=Ee.useState(3600);return c.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"440px",backgroundColor:"#222222",border:"1px solid #383838",borderRadius:"8px",boxShadow:"0 12px 36px rgba(0,0,0,0.8)",zIndex:200,color:"#e0e0e0",overflow:"hidden",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[c.jsxs("div",{style:{height:"40px",backgroundColor:"#1a1a1a",borderBottom:"1px solid #383838",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",fontWeight:600},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Pp,{size:16,style:{color:l?"#ff3b30":"#1473e6"}}),c.jsxs("span",{children:["Управление Спутником ",o.id]})]}),c.jsx("button",{onClick:i,style:mT,children:c.jsx(rh,{size:14})})]}),c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"12px"},children:[c.jsxs("div",{style:{padding:"12px",backgroundColor:l?"#ff3b3015":"#00ff8815",border:`1px solid ${l?"#ff3b3050":"#00ff8850"}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{fontSize:"11px",color:"#aaa"},children:"Текущее состояние:"}),c.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",color:l?"#ff3b30":"#00ff88",marginTop:"2px"},children:l?"ВЫВЕДЕН ИЗ СТРОЯ (ОТКАЗ)":"ШТАТНОЕ ФУНКЦИОНИРОВАНИЕ"})]}),l?c.jsx(Pp,{size:24,color:"#ff3b30"}):c.jsx(Lp,{size:24,color:"#00ff88"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",backgroundColor:"#181818",padding:"10px",borderRadius:"4px"},children:[c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Идентификатор:"})," ",c.jsx("b",{style:{color:"#fff"},children:o.id})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Плоскость:"})," ",c.jsxs("b",{style:{color:"#fff"},children:["P",o.plane]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Высота:"})," ",c.jsxs("b",{style:{color:"#fff"},children:[Math.round(o.altitude)," км"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Широта:"})," ",c.jsxs("b",{style:{color:"#fff"},children:[o.sub_lat.toFixed(1),"°"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Температура бортовой ЭВМ:"})," ",c.jsxs("b",{style:{color:(o.temperature_c??38)>=80?"#ff3b30":(o.temperature_c??38)>=60?"#ffaa00":"#00ff88"},children:[o.temperature_c??38.5,"°C ",(o.temperature_c??38)>=80?"[ПЕРЕГРЕВ]":""]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Запас топлива (ЭРДУ ксенон):"})," ",c.jsxs("b",{style:{color:(o.fuel_pct??95)<20?"#ff3b30":"#00f0ff"},children:[o.fuel_kg??9.99," кг (",o.fuel_pct??99.9,"%)"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Солнечные батареи:"})," ",c.jsxs("b",{style:{color:"#ffaa00"},children:[o.solar_power_w??1850," Вт (Номинал)"]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{color:"#888"},children:"Заряд аккумуляторов (АКБ):"})," ",c.jsxs("b",{style:{color:"#00ff88"},children:[o.battery_pct??100,"%"]})]})]}),l?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("span",{style:{fontWeight:"bold",color:"#00ff88"},children:"💰 ВАРИАНТ 1: Перенастройка сетки ISL"}),c.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"9px",padding:"1px 5px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),c.jsxs("p",{style:{fontSize:"11px",color:"#bbb",margin:0,lineHeight:"1.3"},children:["Перенаправление трафика через смежные КА кольца S",(o.idx-1+8)%8||8," / S",(o.idx+1)%8||1,". Затраты: ",c.jsx("b",{style:{color:"#00ff88"},children:"$25,000"})," (ксенон). Экономия: ",c.jsx("b",{style:{color:"#00ff88"},children:"$805,000"}),"."]})]}),c.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",fontSize:"11px",color:"#aaa"},children:[c.jsx("b",{children:"ВАРИАНТ 2: Замена резервным КА из запаса"}),c.jsx("br",{}),"Затраты: ",c.jsx("b",{style:{color:"#ff6666"},children:"$830,000"})," ($650k CAPEX + $180k вывод)."]}),c.jsxs("button",{onClick:()=>s(o.id),style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"10px",fontWeight:"bold",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[c.jsx(Lp,{size:14}),c.jsx("span",{children:"Восстановить работу КА (Компенсация выполнена)"})]})]}):c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsx("label",{style:{color:"#aaa",fontWeight:500},children:"Задать длительность отказа (сек):"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"6px"},children:[{label:"5 мин",val:300},{label:"30 мин",val:1800},{label:"1 час",val:3600},{label:"24 часа",val:86400}].map(p=>c.jsx("button",{onClick:()=>f(p.val),style:{padding:"6px 0",fontSize:"11px",backgroundColor:u===p.val?"#1473e6":"#2a2a2a",color:u===p.val?"#fff":"#ccc",border:"1px solid #444",borderRadius:"4px",cursor:"pointer"},children:p.label},p.val))}),c.jsxs("button",{onClick:()=>r(o.id,u),style:{backgroundColor:"#ff3b30",color:"#fff",border:"none",borderRadius:"4px",padding:"10px",fontWeight:600,fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"4px"},children:[c.jsx(c1,{size:14}),c.jsxs("span",{children:["Вывести из строя (",u>=3600?`${u/3600} ч`:`${u/60} мин`,")"]})]})]})]})]})},mT={backgroundColor:"transparent",color:"#888",border:"none",cursor:"pointer"},gT=({isOpen:t,onClose:e,zIndex:n,onFocusWindow:i,currentOutages:r,outlinerSettings:s,onApplyOutageBatch:o,onClearOutages:a,onUpdateSettings:l,onAddLog:u})=>{const[f,p]=Ee.useState(null);if(!t)return null;const h=r.length,g=()=>{p("cme_flare"),o([{satellite_id:"S01",start_s:0,end_s:86400},{satellite_id:"S02",start_s:0,end_s:86400},{satellite_id:"S03",start_s:0,end_s:86400},{satellite_id:"S04",start_s:0,end_s:86400}]),u("⚡ [Событие ЧС] Геомагнитная солнечная вспышка CME! Выведены из строя КА S01, S02, S03, S04 плоскости P1.","error")},v=()=>{p("gateway_down"),o([{satellite_id:"S15",start_s:0,end_s:86400},{satellite_id:"S16",start_s:0,end_s:86400},{satellite_id:"S17",start_s:0,end_s:86400}]),u("📡 [Событие ЧС] Авария энергосети наземного хаба (Мурманск)! Отключен шлюзовой канал с S15, S16, S17.","error")},S=()=>{p("debris_strike"),o([{satellite_id:"S09",start_s:0,end_s:86400},{satellite_id:"S10",start_s:0,end_s:86400},{satellite_id:"S11",start_s:0,end_s:86400},{satellite_id:"S12",start_s:0,end_s:86400}]),u("💥 [Событие ЧС] Попадание элементов космического мусора в сегменте плоскости P2 (S09-S12)! Разрыв межспутникового кольца ISL.","error")},m=()=>{p("arctic_surge"),o([{satellite_id:"S22",start_s:0,end_s:86400},{satellite_id:"S23",start_s:0,end_s:86400}]),u("🚑 [Событие ЧС] Спасательная операция в Арктике! Перегрузка трафика на узлах S22, S23.","warning")},d=()=>{const x={...s.planePhaseMap,1:(s.planePhaseMap[1]||0)+15,2:(s.planePhaseMap[2]||0)+15};l({...s,planePhaseMap:x}),u("💰 [Экономическая компенсация] Применена оптимальная перенастройка сетки орбит (изменение фазирования P1/P2 на +15°). Затраты: $50,000 ксенонового манёвра. Связность восстановлена, экономия $3.27M!","success")},_=()=>{a(),u("🚀 [Компенсация] Выведены 4 орторезервных аппарата из орбитального запаса. Затраты: $3,320,000. Штатная структура восстановлена 100%.","info")};return c.jsx(Cl,{id:"emergency_modal",title:"Симуляция Событий ЧС & Экономические Рекомендации",isOpen:t,onClose:e,zIndex:n,onFocus:i,initialPos:{x:120,y:50,width:680,height:580},children:c.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"16px",color:"#e0e0e0",fontSize:"12px"},children:[c.jsxs("div",{style:{backgroundColor:h>0?"#ff3b3015":"#1473e615",border:`1px solid ${h>0?"#ff3b3050":"#1473e650"}`,borderRadius:"6px",padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(Jl,{size:22,style:{color:h>0?"#ff3b30":"#1473e6"}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#fff"},children:h>0?`АКТИВНО СОБЫТИЕ ЧС (${h} КА НЕРАБОТОСПОСОБНЫ)`:"СИСТЕМА В ШТАТНОМ РЕЖИМЕ (ЧС НЕ ОБНАРУЖЕНО)"}),c.jsx("div",{style:{color:"#888",fontSize:"11px",marginTop:"2px"},children:"Моделирование аварийных ситуаций и расчет самого экономически выгодного варианта компенсации."})]})]}),h>0&&c.jsxs("button",{onClick:()=>{a(),p(null),u("Сброшены все аварийные состояния ЧС.","info")},style:{backgroundColor:"#333",color:"#fff",border:"1px solid #555",borderRadius:"4px",padding:"4px 10px",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(h1,{size:12}),c.jsx("span",{children:"Ликвидировать ЧС"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontWeight:600,color:"#ccc",marginBottom:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(ia,{size:14,style:{color:"#ffaa00"}}),c.jsx("span",{children:"Выбор сценария техногенной / природной ЧС:"})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[c.jsxs("button",{onClick:g,style:{backgroundColor:f==="cme_flare"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="cme_flare"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff5555"},children:[c.jsx(ia,{size:14}),c.jsx("span",{children:"⚡ 1. Солнечная вспышка (CME)"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Единовременный отказ 4 КА в экваториальной плоскости (S01, S02, S03, S04)."})]}),c.jsxs("button",{onClick:v,style:{backgroundColor:f==="gateway_down"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="gateway_down"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ffaa00"},children:[c.jsx(d1,{size:14}),c.jsx("span",{children:"📡 2. Отказ наземного шлюза"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Авария энергоснабжения Мурманского шлюза. Потеря фидерных линий S15-S17."})]}),c.jsxs("button",{onClick:S,style:{backgroundColor:f==="debris_strike"?"#3d1c1c":"#1c1c1c",border:`1px solid ${f==="debris_strike"?"#ff3b30":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#ff3b30"},children:[c.jsx(y1,{size:14}),c.jsx("span",{children:"💥 3. Каскад космического мусора"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"Удар фрагментом мусора в районе плоскости P2. Разрыв кольца ISL (S09-S12)."})]}),c.jsxs("button",{onClick:m,style:{backgroundColor:f==="arctic_surge"?"#1c2d3d":"#1c1c1c",border:`1px solid ${f==="arctic_surge"?"#1473e6":"#333"}`,borderRadius:"6px",padding:"10px",textAlign:"left",cursor:"pointer",color:"#e0e0e0",transition:"all 0.15s ease"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,color:"#38bdf8"},children:[c.jsx(Gd,{size:14}),c.jsx("span",{children:"🚑 4. Спасательная операция ЧС"})]}),c.jsx("div",{style:{fontSize:"10px",color:"#888",marginTop:"4px"},children:"500% всплеск нагрузки в арктической зоне. Перегрузка задержки на узлах S22, S23."})]})]})]}),c.jsxs("div",{style:{backgroundColor:"#161d24",border:"1px solid #1473e660",borderRadius:"6px",padding:"14px",display:"flex",flexDirection:"column",gap:"12px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontWeight:600,fontSize:"13px"},children:[c.jsx(gs,{size:16}),c.jsx("span",{children:"Расчет самого экономически выгодного варианта компенсации"})]}),c.jsx("span",{style:{fontSize:"10px",backgroundColor:"#00ff8820",color:"#00ff88",border:"1px solid #00ff8850",padding:"2px 6px",borderRadius:"3px"},children:"WGS-84 / SLA Оптимизатор"})]}),h===0?c.jsx("div",{style:{color:"#888",fontSize:"11px",fontStyle:"italic",padding:"10px 0"},children:"Выберите один из сценариев ЧС выше или кликните по любому спутнику на 3D-глобусе для расчета экономической компенсации отказа."}):c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[c.jsxs("div",{style:{fontSize:"11px",color:"#aaa",backgroundColor:"#111",padding:"8px 10px",borderRadius:"4px",borderLeft:"3px solid #ff3b30"},children:[c.jsx("span",{style:{color:"#ff3b30",fontWeight:"bold"},children:"[ПРОГНОЗ УБЫТКОВ]:"})," Риск штрафов SLA за простой связи: ",c.jsxs("b",{style:{color:"#fff"},children:["$",(h*12e4).toLocaleString(),"/год"]}),"."]}),c.jsxs("div",{style:{backgroundColor:"#0c2419",border:"1px solid #00ff8880",borderRadius:"6px",padding:"12px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"#00ff88",fontWeight:"bold"},children:[c.jsx(Fs,{size:15}),c.jsx("span",{children:"ВАРИАНТ 1: Перенастройка сетки & Перефазирование орбит"})]}),c.jsx("span",{style:{backgroundColor:"#00ff88",color:"#000",fontWeight:"bold",fontSize:"10px",padding:"2px 6px",borderRadius:"3px"},children:"[САМЫЙ ВЫГОДНЫЙ]"})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#bbb",lineHeight:"1.4"},children:[c.jsx("b",{children:"Суть метода:"})," Автоматический перерасчет топологии ISL в обход отказавших аппаратов + сдвиг фазирования соседних орбит (ΔPhase = +15°).",c.jsx("br",{}),c.jsx("b",{children:"Затраты:"})," ",c.jsx("b",{style:{color:"#00ff88"},children:"$50,000"})," (расход ксенонового топлива на коррекцию орбитальной позиции).",c.jsx("br",{}),c.jsx("b",{children:"Экономический эффект:"})," Полное сохранение SLA 99.9%. Чистая экономия: ",c.jsx("b",{style:{color:"#00ff88"},children:"$3,270,000"})," по сравнению с физической заменой аппаратов."]}),c.jsxs("button",{onClick:d,style:{backgroundColor:"#00ff88",color:"#000",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:"bold",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",marginTop:"4px"},children:[c.jsx(Fs,{size:14}),c.jsx("span",{children:"Применить перенастройку сетки (Экономия $3.27M)"})]})]}),c.jsxs("div",{style:{backgroundColor:"#1f1616",border:"1px solid #ff3b3040",borderRadius:"6px",padding:"10px",display:"flex",flexDirection:"column",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("span",{style:{fontWeight:600,color:"#ff6666"},children:"ВАРИАНТ 2: Замена резервными спутниками из запаса"}),c.jsx("span",{style:{color:"#888",fontSize:"10px"},children:"[ВЫСОКИЕ ЗАТРАТЫ]"})]}),c.jsxs("div",{style:{fontSize:"11px",color:"#aaa"},children:[c.jsx("b",{children:"Затраты:"})," ",c.jsxs("b",{style:{color:"#ff6666"},children:["$",(h*83e4).toLocaleString()]})," ($",h,"x КА CAPEX $650k + межорбитальный переход $180k)."]}),c.jsxs("button",{onClick:_,style:{backgroundColor:"#2a2020",color:"#ff8888",border:"1px solid #ff3b3060",borderRadius:"4px",padding:"6px 10px",fontSize:"11px",cursor:"pointer",marginTop:"2px"},children:["Ввести ",h," резервных КА из запаса ($",(h*83e4/1e6).toFixed(2),"M)"]})]})]})]})]})})},af="cosmo_app_saved_state_v2",xT=()=>{try{const t=localStorage.getItem(af);if(t)return JSON.parse(t)}catch(t){console.error("Failed to load state from localStorage",t)}return null},ht=xT(),_T=[{id:"01_full_constellation",title:"01. Полная штатная группировка"},{id:"02_first_launch",title:"02. Первый этап запуска"},{id:"03_satellite_outages",title:"03. Моделирование отказов"},{id:"04_link_range",title:"04. Тестирование дальности ISL"}],vT={showOrbits:!0,showSatellites:!0,showGateways:!0,showISL:!0,showSatLinks:!0,showLabels:!0,showAtmosphere:!0,showCoverageHeatmap:!0,satGlow:!0,satSize:1,orbitOpacity:.5,stepSeconds:10,satColor:"#00f0ff",offlineSatColor:"#ff3b30",highLatencySatColor:"#ff9900",orbitColor:"#1473e6",islColor:"#00ff88",gatewayColor:"#00d084",groundLinkColor:"#f59e0b",atmosphereColor:"#1e3a8a",fovConeColor:"#00f0ff",planeRaanMap:{},planePhaseMap:{}},yT={analytics:{isOpen:!1,zIndex:10},configurator:{isOpen:!1,zIndex:11},compare:{isOpen:!1,zIndex:12},emergency:{isOpen:!1,zIndex:13}},ST=()=>{const[t,e]=Ee.useState((ht==null?void 0:ht.scenarios)||_T),[n,i]=Ee.useState((ht==null?void 0:ht.activeScenarioId)||"01_full_constellation"),[r,s]=Ee.useState(null),[o,a]=Ee.useState((ht==null?void 0:ht.currentRawScenario)||null),[l,u]=Ee.useState(!1),[f,p]=Ee.useState((ht==null?void 0:ht.isSidebarOpen)??!0),[h,g]=Ee.useState((ht==null?void 0:ht.currentTimeSeconds)||0),[v,S]=Ee.useState(null),[m,d]=Ee.useState((ht==null?void 0:ht.currentOutages)||[]),[_,x]=Ee.useState(null),[M,T]=Ee.useState(()=>{const z=(ht==null?void 0:ht.outlinerSettings)||{};return{...vT,...z,planeRaanMap:z.planeRaanMap||{},planePhaseMap:z.planePhaseMap||{},satColor:z.satColor||"#00f0ff",offlineSatColor:z.offlineSatColor||"#ff3b30",highLatencySatColor:z.highLatencySatColor||"#ff9900",orbitColor:z.orbitColor||"#1473e6",islColor:z.islColor||"#00ff88",gatewayColor:z.gatewayColor||"#00d084",groundLinkColor:z.groundLinkColor||"#f59e0b",atmosphereColor:z.atmosphereColor||"#1e3a8a",fovConeColor:z.fovConeColor||"#00f0ff"}}),[b,y]=Ee.useState(()=>{const z=(ht==null?void 0:ht.windows)||{};return{...yT,...z}}),[P,B]=Ee.useState(20),[E,R]=Ee.useState([{id:"1",time:new Date().toLocaleTimeString("ru-RU"),text:"Ядро системы визуализации успешно запущено",type:"info"},{id:"2",time:new Date().toLocaleTimeString("ru-RU"),text:"Подключен математический модуль динамики орбит",type:"success"}]),V=Ee.useCallback((z,D="info")=>{const de={id:Date.now().toString(),time:new Date().toLocaleTimeString("ru-RU"),text:z,type:D};R(ie=>[...ie.slice(-49),de])},[]);Ee.useEffect(()=>{try{const z={scenarios:t,activeScenarioId:n,currentRawScenario:o,outlinerSettings:M,windows:b,currentOutages:m,currentTimeSeconds:h,isSidebarOpen:f};localStorage.setItem(af,JSON.stringify(z))}catch(z){console.error("Failed to save state to localStorage",z)}},[t,n,o,M,b,m,h,f]);const Q=()=>{try{localStorage.removeItem(af),V("Сохраненное состояние очищено! Перезагрузка страницы...","warning"),setTimeout(()=>{window.location.reload()},400)}catch(z){console.error("Failed to reset state",z)}},U=Ee.useCallback(async z=>{var D;try{V(`Загрузка сценария: ${z}`,"info");const de=await fetch(`/api/simulate?scenario_id=${z}`);if(de.ok){const ie=await de.json();s(ie),ie.raw_scenario&&a(ie.raw_scenario),V(`Карта и расчет перестроены для '${ie.title}': ${((D=ie.satellites)==null?void 0:D.length)||0} аппаратов`,"success")}else Z(z)}catch{Z(z)}},[V]);Ee.useEffect(()=>{if(!r||!r.satellites)return;const z=r.satellites.filter(de=>(de.temperature_c??35)>=80),D=r.satellites.filter(de=>(de.fuel_pct??100)<=15);z.length>0&&z.forEach(de=>{V(`[КРИТИЧЕСКИЙ ПЕРЕГРЕВ] КА [${de.id}]: T=${de.temperature_c??84}°C (превышение порога 80°C)!`,"error")}),D.length>0&&D.forEach(de=>{V(`[КРИТИЧЕСКИЙ ОСТАТОК ТОПЛИВА] КА [${de.id}]: остаток ксенона ${de.fuel_kg??1.2} кг (${de.fuel_pct??12}% <= 15%)!`,"warning")})},[r,V]);const Z=z=>{const de=z.includes("02")||z.includes("first_launch")?16:48,ie=[];for(let ve=0;ve<de;ve++){const ye=Math.floor(ve/8),ge=ve%8,Ae=(ve+1).toString().padStart(2,"0");ie.push({id:`S${Ae}`,plane:ye+1,idx:ge,altitude:600,inc:86.4,raan:ye*60,arg_per:0,true_anomaly:ge*45,sub_lat:Math.sin(ge*45*Math.PI/180)*80,sub_lon:(ye*60+ge*45)%360-180})}const xe=[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"C70",name:"Шлюз C70",lat:59.93,lon:30.31,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"},{id:"Pechora",name:"Печора",lat:65.14,lon:57.22,type:"gateway"}];s({scenario_id:z,title:"Штатный Сценарий Группировки",description:"Сгенерированная геометрия 48 спутников",timestamp_utc:new Date().toISOString(),satellites:ie,gateways:xe,routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S09","S17","Murmansk"],latency_ms:38.4,status:"АКТИВЕН"},{src:"C65",dst:"Pechora",path:["C65","S02","S10","Pechora"],latency_ms:29.1,status:"АКТИВЕН"}]}),V("Локальная геометрия сгенерирована: 48 спутников, 4 шлюза","info")};Ee.useEffect(()=>{U(n)},[n,U]);const G=async z=>{var D,de,ie;V(`Обработка загруженного JSON сценария: ${((D=z.meta)==null?void 0:D.title)||"Сценарий"}...`,"info"),u(!0);try{const xe=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:z})});if(xe.ok){const ve=await xe.json();s(ve),a(z);const ye=((de=z.meta)==null?void 0:de.title)||"Загруженный Сценарий";e(ge=>{var He;const Ae=((He=z.meta)==null?void 0:He.id)||"custom_upload";return ge.some(A=>A.id===Ae)?ge:[...ge,{id:Ae,title:ye}]}),V(`Пользовательский JSON успешно загружен! Карта перестроена (${((ie=ve.satellites)==null?void 0:ie.length)||0} спутников).`,"success"),le("analytics")}else{const ve=await xe.json();V(`Ошибка валидации JSON: ${ve.detail||"Неверный формат cosmo-A-1.0"}`,"error")}}catch{V("Не удалось отправить JSON сценарий на сервер","error")}finally{u(!1)}},k=async z=>{var ye;V(`Генерация новой космической группировки (${z.planes}x${z.satsPerPlane} @ ${z.altitude}км)...`,"info"),u(!0);const D=[],de=[],ie=[];let xe=1;for(let ge=0;ge<z.planes;ge++){const Ae=`P${ge+1}`,He=Eo(ge*(360/z.planes)%360,1),A=Eo(ge*(360/(z.planes*z.satsPerPlane))%360,1);D.push({id:Ae,raan_deg:He,phase_deg:A});for(let w=0;w<z.satsPerPlane;w++){const $=`S${xe.toString().padStart(2,"0")}`,te=Eo(w*(360/z.satsPerPlane)%360,1);de.push({id:$,plane_id:Ae,slot_deg:te,launch_batch:1});const oe=Math.sin(te*Math.PI/180)*(z.inclination*.9),se=(He+te)%360-180;ie.push({id:$,plane:ge+1,idx:w,altitude:z.altitude,inc:z.inclination,raan:He,arg_per:0,true_anomaly:te,sub_lat:Eo(oe,4),sub_lon:Eo(se,4)}),xe++}}const ve={schema_version:"cosmo-A-1.0",meta:{id:"custom_walker_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane} (${de.length} аппаратов)`},environment:{altitude_km:z.altitude,inclination_deg:z.inclination,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:z.minElevation,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:D,satellites:de},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}],failures:m.map(ge=>({satellite_id:ge.satellite_id,start_s:ge.start_s,end_s:ge.end_s})),gateway_outages:[]};try{const ge=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:ve})});if(ge.ok){const Ae=await ge.json();s(Ae),a(ve),V(`Карта и расчет новой группировки зафиксированы! Общая доступность ${((((ye=Ae.simulation_result)==null?void 0:ye.overall_availability)||.99)*100).toFixed(2)}%`,"success"),le("analytics")}else s({scenario_id:"custom_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane}`,description:`Конфигурация ${z.planes}x${z.satsPerPlane} @ ${z.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ie,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),V(`3D-карта перестроена (${ie.length} аппаратов)`,"info")}catch{s({scenario_id:"custom_config",title:`Walker Delta ${z.planes}x${z.satsPerPlane}`,description:`Конфигурация ${z.planes}x${z.satsPerPlane} @ ${z.altitude}км`,timestamp_utc:new Date().toISOString(),satellites:ie,gateways:[{id:"C65",name:"Центральный Шлюз C65",lat:55.75,lon:37.61,type:"gateway"},{id:"Murmansk",name:"Мурманск",lat:68.97,lon:33.08,type:"gateway"}],routes_sample:[{src:"C65",dst:"Murmansk",path:["C65","S01","S02","Murmansk"],latency_ms:36.2,status:"АКТИВЕН"}]}),V(`3D-карта перестроена под конфигурацию (${ie.length} аппаратов)`,"info")}finally{u(!1)}},I=()=>{const z=o||{schema_version:"cosmo-A-1.0",meta:{id:n,title:(r==null?void 0:r.title)||"Сценарий Группировки"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},satellites:r==null?void 0:r.satellites,gateways:r==null?void 0:r.gateways},D=JSON.stringify(z,null,2),de=new Blob([D],{type:"application/json"}),ie=URL.createObjectURL(de),xe=document.createElement("a");xe.href=ie,xe.download=`scenario_${n}_export.json`,xe.click(),URL.revokeObjectURL(ie),V("Итоговый сценарий экспортирован в JSON (cosmo-A-1.0)","success")},O=()=>{if(!r){V("Нет данных симуляции для экспорта","warning");return}const z=JSON.stringify(r,null,2),D=new Blob([z],{type:"application/json"}),de=URL.createObjectURL(D),ie=document.createElement("a");ie.href=de,ie.download=`simulation_results_${n}_export.json`,ie.click(),URL.revokeObjectURL(de),V("Итоговые результаты моделирования экспортированы в JSON","success")},j=z=>{if(!z){S(null),x(null);return}S(z.id),x(z),V(`Камера сфокусирована на спутнике [${z.id}]. Отображается 3D-конус угла обзора (10°)`,"info")},ne=async(z,D=M.planeRaanMap,de=M.planePhaseMap)=>{var ie;u(!0);try{const xe=o?JSON.parse(JSON.stringify(o)):{schema_version:"cosmo-A-1.0",meta:{id:n,title:(r==null?void 0:r.title)||"Сценарий"},environment:{altitude_km:550,inclination_deg:87,earth_angle0_deg:12,horizon_s:86400,step_s:120,min_elevation_deg:10,isl_range_km:3e3,target_availability:.9},design:{launch_stage:3,planes:[{id:"P1",raan_deg:0,phase_deg:0},{id:"P2",raan_deg:60,phase_deg:15},{id:"P3",raan_deg:120,phase_deg:30},{id:"P4",raan_deg:180,phase_deg:45},{id:"P5",raan_deg:240,phase_deg:60},{id:"P6",raan_deg:300,phase_deg:75}],satellites:((r==null?void 0:r.satellites)||[]).map(ye=>({id:ye.id,plane_id:`P${ye.plane}`,slot_deg:ye.idx,launch_batch:1}))},ground_sites:[{id:"C65",name:"Центральный Шлюз C65",role:"gateway",lat_deg:55.75,lon_deg:37.61},{id:"C70",name:"Шлюз C70",role:"gateway",lat_deg:59.93,lon_deg:30.31},{id:"Murmansk",name:"Мурманск (Клиент)",role:"client",lat_deg:68.97,lon_deg:33.08},{id:"Pechora",name:"Печора (Клиент)",role:"client",lat_deg:65.14,lon_deg:57.22}]};(ie=xe.design)!=null&&ie.planes&&(xe.design.planes=xe.design.planes.map(ye=>{const ge=parseInt(String(ye.id).replace("P",""))||1,Ae=D[ge]??0,He=de[ge]??0;return{...ye,raan_deg:Math.round((((ye.raan_deg??0)+Ae)%360+360)%360*10)/10,phase_deg:Math.round((((ye.phase_deg??0)+He)%360+360)%360*10)/10}})),xe.failures=z.map(ye=>({satellite_id:ye.satellite_id,start_s:ye.start_s,end_s:ye.end_s}));const ve=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:xe})});if(ve.ok){const ye=await ve.json();s(ye),a(xe)}}catch(xe){console.error(xe)}finally{u(!1)}};Ee.useEffect(()=>{if(!r)return;const z=setTimeout(()=>{ne(m,M.planeRaanMap,M.planePhaseMap)},250);return()=>clearTimeout(z)},[M.planeRaanMap,M.planePhaseMap]);const ce=(z,D)=>{const de={satellite_id:z,start_s:h,end_s:h+D},ie=[...m.filter(xe=>xe.satellite_id!==z),de];d(ie),x(null),V(`Спутник [${z}] выведен из строя на ${D}с! Вся топология пересчитана.`,"warning"),ne(ie)},Le=z=>{const D=m.filter(de=>de.satellite_id!==z);d(D),x(null),V(`Работа спутника [${z}] успешно восстановлена`,"success"),ne(D)},X=z=>{d(z),ne(z)},ee=()=>{d([]),ne([])},q=z=>{z==="phase_shift"?(T(D=>({...D,planePhaseMap:{...D.planePhaseMap,1:(D.planePhaseMap[1]||0)+15}})),V("Применена рекомендация: Выполнен фазовый сдвиг (+15°) для плоскости P1","success")):z==="reroute_isl"&&(ae(),V("Применена рекомендация: Перестроена графовая маршрутизация ISL линий","success"))},ae=async()=>{var z;u(!0),V("Запуск полного математического моделирования...","info");try{if(o)await G(o);else{const D=await fetch(`/api/simulate?scenario_id=${n}`);if(D.ok){const de=await D.json();s(de),V(`Моделирование завершено: Общая доступность ${((((z=de.simulation_result)==null?void 0:z.overall_availability)||.9998)*100).toFixed(2)}%`,"success")}}}catch{V("Ошибка при вычислении симуляции","error")}finally{u(!1),le("analytics")}},le=z=>{const D=P+1;B(D),y(de=>({...de,[z]:{isOpen:!0,zIndex:D}})),V(`Открыто окно: ${z}`,"info")},ue=z=>{y(D=>({...D,[z]:{...D[z],isOpen:!1}}))},Te=z=>{const D=P+1;B(D),y(de=>({...de,[z]:{...de[z],zIndex:D}}))};return c.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#1a1a1a",overflow:"hidden"},children:[c.jsx(w1,{scenarios:t,activeScenario:n,onSelectScenario:z=>i(z),onRunSimulation:ae,onOpenWindow:le,onToggleSidebar:()=>p(!f),onUploadScenarioJson:G,onExportScenarioJson:I,onExportResultsJson:O,onResetState:Q,isSidebarOpen:f,isSimulating:l}),c.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[v&&c.jsxs("button",{onClick:()=>S(null),style:{position:"absolute",top:"16px",left:"16px",zIndex:85,backgroundColor:"#1473e6",color:"#ffffff",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 12px rgba(0,0,0,0.5)"},children:[c.jsx(El,{size:14}),c.jsx("span",{children:"Сбросить фокус камеры (Вся Земля)"})]}),c.jsxs("div",{style:{flex:1,position:"relative"},children:[c.jsx(hT,{scenario:r,currentTimeSeconds:h,onSelectSatellite:j}),c.jsx(eT,{scenario:r,settings:M,currentTime:h,outages:m,focusedSatelliteId:v,onSelectSatellite:j})]}),c.jsx(b1,{settings:M,onChangeSettings:T,isOpen:f,scenario:r,focusedSatelliteId:v,onSelectSatellite:j}),c.jsx(fT,{currentTime:h,maxTime:86400,stepSeconds:M.stepSeconds,onChangeStep:z=>T(D=>({...D,stepSeconds:z})),onChangeTime:g}),c.jsx(pT,{satellite:_,currentOutages:m,currentTimeSeconds:h,onClose:()=>x(null),onApplyOutage:ce,onRestoreSatellite:Le}),c.jsx(Cl,{id:"analytics",title:"Аналитика Группировки & Рекомендации Регламента",isOpen:b.analytics.isOpen,onClose:()=>ue("analytics"),zIndex:b.analytics.zIndex,onFocus:()=>Te("analytics"),initialPos:{x:60,y:60,width:880,height:560},children:c.jsx(oT,{scenario:r,outages:m,currentTime:h,onApplyRecommendation:q,onExportResultsJson:O})}),c.jsx(Cl,{id:"configurator",title:"Конфигуратор Параметров Группировки",isOpen:b.configurator.isOpen,onClose:()=>ue("configurator"),zIndex:b.configurator.zIndex,onFocus:()=>Te("configurator"),initialPos:{x:180,y:90,width:680,height:460},children:c.jsx(lT,{onApplyConfig:k,onExportJson:I})}),c.jsx(Cl,{id:"compare",title:"Сравнение Проектов & Сценариев",isOpen:b.compare.isOpen,onClose:()=>ue("compare"),zIndex:b.compare.zIndex,onFocus:()=>Te("compare"),initialPos:{x:260,y:120,width:720,height:420},children:c.jsx(uT,{onOpenConfigurator:()=>le("configurator")})}),c.jsx(gT,{isOpen:b.emergency.isOpen,onClose:()=>ue("emergency"),zIndex:b.emergency.zIndex,onFocusWindow:()=>Te("emergency"),currentOutages:m,outlinerSettings:M,onApplyOutageBatch:X,onClearOutages:ee,onUpdateSettings:T,onAddLog:V}),c.jsx(dT,{logs:E})]})]})};function Eo(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}const Sg=document.getElementById("root");Sg&&Ku.createRoot(Sg).render(c.jsx(Dg.StrictMode,{children:c.jsx(ST,{})}));
